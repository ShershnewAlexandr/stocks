import { credentials } from 'grpc';

import { getFloatMoney } from '#/utils/money';
import { couponByDateComparator } from '#/bonds/utils/comparators';
import { getDateByTimestamp } from '#/utils/time';

import { InstrumentsServiceClient } from './proto/instruments_grpc_pb.js';
import { MarketDataServiceClient } from './proto/marketdata_grpc_pb.js';
import { API_SANDBOX_URL } from './constants';
import {
  Bond,
  BondResponse,
  BondsResponse,
  GetBondCouponsRequest,
  GetBondCouponsResponse,
  GetCountriesRequest,
  GetCountriesResponse,
  InstrumentIdType,
  InstrumentRequest,
  InstrumentsRequest,
} from './proto/instruments_pb.js';
import {
  GetLastPricesRequest,
  GetLastPricesResponse,
} from './proto/marketdata_pb';
import {
  getAuthMetadata,
  promiseCallback,
  getCashRequest,
  getBondCashKey,
} from './utils';

export const instrumentsServiceClient = new InstrumentsServiceClient(
  API_SANDBOX_URL,
  credentials.createSsl()
);

export const marketDataServiceClient = new MarketDataServiceClient(
  API_SANDBOX_URL,
  credentials.createSsl()
);

export const getCountries = () =>
  new Promise<GetCountriesResponse>((resolve, reject) => {
    instrumentsServiceClient.getCountries(
      new GetCountriesRequest(),
      getAuthMetadata(),
      promiseCallback(resolve, reject)
    );
  });

export const getBonds = () =>
  new Promise<BondsResponse>((resolve, reject) => {
    instrumentsServiceClient.bonds(
      new InstrumentsRequest(),
      getAuthMetadata(),
      promiseCallback(resolve, reject)
    );
  }).then((response) => response.getInstrumentsList());

export const getBond = getCashRequest(
  (figi: string) => figi,
  (figi: string) =>
    new Promise<BondResponse>((resolve, reject) => {
      instrumentsServiceClient.bondBy(
        new InstrumentRequest()
          .setIdType(InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI)
          .setId(figi),
        getAuthMetadata(),
        promiseCallback(resolve, reject)
      );
    }).then((response) => {
      const bond = response.getInstrument();

      if (!bond) {
        throw new Error(`bond not found ${figi}`);
      }

      return bond;
    })
);

export const getCoupons = getCashRequest(getBondCashKey, (bond: Bond) =>
  new Promise<GetBondCouponsResponse>((resolve, reject) => {
    instrumentsServiceClient.getBondCoupons(
      new GetBondCouponsRequest()
        .setFigi(bond.getFigi())
        .setFrom(bond.getPlacementDate())
        .setTo(bond.getMaturityDate()),
      getAuthMetadata(),
      promiseCallback(resolve, reject)
    );
  }).then((response) => response.getEventsList().sort(couponByDateComparator))
);

export const getLastPrice = getCashRequest(getBondCashKey, (bond: Bond) => {
  const request = new GetLastPricesRequest();
  request.addFigi(bond.getFigi());

  return new Promise<GetLastPricesResponse>((resolve, reject) => {
    marketDataServiceClient.getLastPrices(
      request,
      getAuthMetadata(),
      promiseCallback(resolve, reject)
    );
  }).then((data) => {
    const price =
      (getFloatMoney(data.getLastPricesList()[0].getPrice()) / 100) *
      getFloatMoney(bond.getNominal());
    const time = getDateByTimestamp(data.getLastPricesList()[0].getTime());

    return { price, time };
  });
});
