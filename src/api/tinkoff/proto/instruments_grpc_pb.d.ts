// package: tinkoff.public.invest.api.contract.v1
// file: instruments.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as instruments_pb from "./instruments_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";

interface IInstrumentsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    tradingSchedules: IInstrumentsServiceService_ITradingSchedules;
    bondBy: IInstrumentsServiceService_IBondBy;
    bonds: IInstrumentsServiceService_IBonds;
    getBondCoupons: IInstrumentsServiceService_IGetBondCoupons;
    getBondEvents: IInstrumentsServiceService_IGetBondEvents;
    currencyBy: IInstrumentsServiceService_ICurrencyBy;
    currencies: IInstrumentsServiceService_ICurrencies;
    etfBy: IInstrumentsServiceService_IEtfBy;
    etfs: IInstrumentsServiceService_IEtfs;
    futureBy: IInstrumentsServiceService_IFutureBy;
    futures: IInstrumentsServiceService_IFutures;
    optionBy: IInstrumentsServiceService_IOptionBy;
    options: IInstrumentsServiceService_IOptions;
    optionsBy: IInstrumentsServiceService_IOptionsBy;
    shareBy: IInstrumentsServiceService_IShareBy;
    shares: IInstrumentsServiceService_IShares;
    indicatives: IInstrumentsServiceService_IIndicatives;
    getAccruedInterests: IInstrumentsServiceService_IGetAccruedInterests;
    getFuturesMargin: IInstrumentsServiceService_IGetFuturesMargin;
    getInstrumentBy: IInstrumentsServiceService_IGetInstrumentBy;
    getDividends: IInstrumentsServiceService_IGetDividends;
    getAssetBy: IInstrumentsServiceService_IGetAssetBy;
    getAssets: IInstrumentsServiceService_IGetAssets;
    getFavorites: IInstrumentsServiceService_IGetFavorites;
    editFavorites: IInstrumentsServiceService_IEditFavorites;
    getCountries: IInstrumentsServiceService_IGetCountries;
    findInstrument: IInstrumentsServiceService_IFindInstrument;
    getBrands: IInstrumentsServiceService_IGetBrands;
    getBrandBy: IInstrumentsServiceService_IGetBrandBy;
    getAssetFundamentals: IInstrumentsServiceService_IGetAssetFundamentals;
    getAssetReports: IInstrumentsServiceService_IGetAssetReports;
    getConsensusForecasts: IInstrumentsServiceService_IGetConsensusForecasts;
    getForecastBy: IInstrumentsServiceService_IGetForecastBy;
}

interface IInstrumentsServiceService_ITradingSchedules extends grpc.MethodDefinition<instruments_pb.TradingSchedulesRequest, instruments_pb.TradingSchedulesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/TradingSchedules";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.TradingSchedulesRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.TradingSchedulesRequest>;
    responseSerialize: grpc.serialize<instruments_pb.TradingSchedulesResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.TradingSchedulesResponse>;
}
interface IInstrumentsServiceService_IBondBy extends grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.BondResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/BondBy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentRequest>;
    responseSerialize: grpc.serialize<instruments_pb.BondResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.BondResponse>;
}
interface IInstrumentsServiceService_IBonds extends grpc.MethodDefinition<instruments_pb.InstrumentsRequest, instruments_pb.BondsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/Bonds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.BondsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.BondsResponse>;
}
interface IInstrumentsServiceService_IGetBondCoupons extends grpc.MethodDefinition<instruments_pb.GetBondCouponsRequest, instruments_pb.GetBondCouponsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBondCoupons";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetBondCouponsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetBondCouponsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetBondCouponsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetBondCouponsResponse>;
}
interface IInstrumentsServiceService_IGetBondEvents extends grpc.MethodDefinition<instruments_pb.GetBondEventsRequest, instruments_pb.GetBondEventsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBondEvents";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetBondEventsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetBondEventsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetBondEventsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetBondEventsResponse>;
}
interface IInstrumentsServiceService_ICurrencyBy extends grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.CurrencyResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/CurrencyBy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentRequest>;
    responseSerialize: grpc.serialize<instruments_pb.CurrencyResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.CurrencyResponse>;
}
interface IInstrumentsServiceService_ICurrencies extends grpc.MethodDefinition<instruments_pb.InstrumentsRequest, instruments_pb.CurrenciesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/Currencies";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.CurrenciesResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.CurrenciesResponse>;
}
interface IInstrumentsServiceService_IEtfBy extends grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.EtfResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/EtfBy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentRequest>;
    responseSerialize: grpc.serialize<instruments_pb.EtfResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.EtfResponse>;
}
interface IInstrumentsServiceService_IEtfs extends grpc.MethodDefinition<instruments_pb.InstrumentsRequest, instruments_pb.EtfsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/Etfs";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.EtfsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.EtfsResponse>;
}
interface IInstrumentsServiceService_IFutureBy extends grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.FutureResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/FutureBy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentRequest>;
    responseSerialize: grpc.serialize<instruments_pb.FutureResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.FutureResponse>;
}
interface IInstrumentsServiceService_IFutures extends grpc.MethodDefinition<instruments_pb.InstrumentsRequest, instruments_pb.FuturesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/Futures";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.FuturesResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.FuturesResponse>;
}
interface IInstrumentsServiceService_IOptionBy extends grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.OptionResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/OptionBy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentRequest>;
    responseSerialize: grpc.serialize<instruments_pb.OptionResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.OptionResponse>;
}
interface IInstrumentsServiceService_IOptions extends grpc.MethodDefinition<instruments_pb.InstrumentsRequest, instruments_pb.OptionsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/Options";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.OptionsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.OptionsResponse>;
}
interface IInstrumentsServiceService_IOptionsBy extends grpc.MethodDefinition<instruments_pb.FilterOptionsRequest, instruments_pb.OptionsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/OptionsBy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.FilterOptionsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.FilterOptionsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.OptionsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.OptionsResponse>;
}
interface IInstrumentsServiceService_IShareBy extends grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.ShareResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/ShareBy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentRequest>;
    responseSerialize: grpc.serialize<instruments_pb.ShareResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.ShareResponse>;
}
interface IInstrumentsServiceService_IShares extends grpc.MethodDefinition<instruments_pb.InstrumentsRequest, instruments_pb.SharesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/Shares";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.SharesResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.SharesResponse>;
}
interface IInstrumentsServiceService_IIndicatives extends grpc.MethodDefinition<instruments_pb.IndicativesRequest, instruments_pb.IndicativesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/Indicatives";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.IndicativesRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.IndicativesRequest>;
    responseSerialize: grpc.serialize<instruments_pb.IndicativesResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.IndicativesResponse>;
}
interface IInstrumentsServiceService_IGetAccruedInterests extends grpc.MethodDefinition<instruments_pb.GetAccruedInterestsRequest, instruments_pb.GetAccruedInterestsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAccruedInterests";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetAccruedInterestsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetAccruedInterestsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetAccruedInterestsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetAccruedInterestsResponse>;
}
interface IInstrumentsServiceService_IGetFuturesMargin extends grpc.MethodDefinition<instruments_pb.GetFuturesMarginRequest, instruments_pb.GetFuturesMarginResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetFuturesMargin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetFuturesMarginRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetFuturesMarginRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetFuturesMarginResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetFuturesMarginResponse>;
}
interface IInstrumentsServiceService_IGetInstrumentBy extends grpc.MethodDefinition<instruments_pb.InstrumentRequest, instruments_pb.InstrumentResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetInstrumentBy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.InstrumentRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.InstrumentRequest>;
    responseSerialize: grpc.serialize<instruments_pb.InstrumentResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.InstrumentResponse>;
}
interface IInstrumentsServiceService_IGetDividends extends grpc.MethodDefinition<instruments_pb.GetDividendsRequest, instruments_pb.GetDividendsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetDividends";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetDividendsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetDividendsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetDividendsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetDividendsResponse>;
}
interface IInstrumentsServiceService_IGetAssetBy extends grpc.MethodDefinition<instruments_pb.AssetRequest, instruments_pb.AssetResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssetBy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.AssetRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.AssetRequest>;
    responseSerialize: grpc.serialize<instruments_pb.AssetResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.AssetResponse>;
}
interface IInstrumentsServiceService_IGetAssets extends grpc.MethodDefinition<instruments_pb.AssetsRequest, instruments_pb.AssetsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.AssetsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.AssetsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.AssetsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.AssetsResponse>;
}
interface IInstrumentsServiceService_IGetFavorites extends grpc.MethodDefinition<instruments_pb.GetFavoritesRequest, instruments_pb.GetFavoritesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetFavorites";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetFavoritesRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetFavoritesRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetFavoritesResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetFavoritesResponse>;
}
interface IInstrumentsServiceService_IEditFavorites extends grpc.MethodDefinition<instruments_pb.EditFavoritesRequest, instruments_pb.EditFavoritesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/EditFavorites";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.EditFavoritesRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.EditFavoritesRequest>;
    responseSerialize: grpc.serialize<instruments_pb.EditFavoritesResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.EditFavoritesResponse>;
}
interface IInstrumentsServiceService_IGetCountries extends grpc.MethodDefinition<instruments_pb.GetCountriesRequest, instruments_pb.GetCountriesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetCountries";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetCountriesRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetCountriesRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetCountriesResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetCountriesResponse>;
}
interface IInstrumentsServiceService_IFindInstrument extends grpc.MethodDefinition<instruments_pb.FindInstrumentRequest, instruments_pb.FindInstrumentResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/FindInstrument";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.FindInstrumentRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.FindInstrumentRequest>;
    responseSerialize: grpc.serialize<instruments_pb.FindInstrumentResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.FindInstrumentResponse>;
}
interface IInstrumentsServiceService_IGetBrands extends grpc.MethodDefinition<instruments_pb.GetBrandsRequest, instruments_pb.GetBrandsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBrands";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetBrandsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetBrandsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetBrandsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetBrandsResponse>;
}
interface IInstrumentsServiceService_IGetBrandBy extends grpc.MethodDefinition<instruments_pb.GetBrandRequest, instruments_pb.Brand> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBrandBy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetBrandRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetBrandRequest>;
    responseSerialize: grpc.serialize<instruments_pb.Brand>;
    responseDeserialize: grpc.deserialize<instruments_pb.Brand>;
}
interface IInstrumentsServiceService_IGetAssetFundamentals extends grpc.MethodDefinition<instruments_pb.GetAssetFundamentalsRequest, instruments_pb.GetAssetFundamentalsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssetFundamentals";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetAssetFundamentalsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetAssetFundamentalsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetAssetFundamentalsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetAssetFundamentalsResponse>;
}
interface IInstrumentsServiceService_IGetAssetReports extends grpc.MethodDefinition<instruments_pb.GetAssetReportsRequest, instruments_pb.GetAssetReportsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssetReports";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetAssetReportsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetAssetReportsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetAssetReportsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetAssetReportsResponse>;
}
interface IInstrumentsServiceService_IGetConsensusForecasts extends grpc.MethodDefinition<instruments_pb.GetConsensusForecastsRequest, instruments_pb.GetConsensusForecastsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetConsensusForecasts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetConsensusForecastsRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetConsensusForecastsRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetConsensusForecastsResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetConsensusForecastsResponse>;
}
interface IInstrumentsServiceService_IGetForecastBy extends grpc.MethodDefinition<instruments_pb.GetForecastRequest, instruments_pb.GetForecastResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetForecastBy";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<instruments_pb.GetForecastRequest>;
    requestDeserialize: grpc.deserialize<instruments_pb.GetForecastRequest>;
    responseSerialize: grpc.serialize<instruments_pb.GetForecastResponse>;
    responseDeserialize: grpc.deserialize<instruments_pb.GetForecastResponse>;
}

export const InstrumentsServiceService: IInstrumentsServiceService;

export interface IInstrumentsServiceServer {
    tradingSchedules: grpc.handleUnaryCall<instruments_pb.TradingSchedulesRequest, instruments_pb.TradingSchedulesResponse>;
    bondBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.BondResponse>;
    bonds: grpc.handleUnaryCall<instruments_pb.InstrumentsRequest, instruments_pb.BondsResponse>;
    getBondCoupons: grpc.handleUnaryCall<instruments_pb.GetBondCouponsRequest, instruments_pb.GetBondCouponsResponse>;
    getBondEvents: grpc.handleUnaryCall<instruments_pb.GetBondEventsRequest, instruments_pb.GetBondEventsResponse>;
    currencyBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.CurrencyResponse>;
    currencies: grpc.handleUnaryCall<instruments_pb.InstrumentsRequest, instruments_pb.CurrenciesResponse>;
    etfBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.EtfResponse>;
    etfs: grpc.handleUnaryCall<instruments_pb.InstrumentsRequest, instruments_pb.EtfsResponse>;
    futureBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.FutureResponse>;
    futures: grpc.handleUnaryCall<instruments_pb.InstrumentsRequest, instruments_pb.FuturesResponse>;
    optionBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.OptionResponse>;
    options: grpc.handleUnaryCall<instruments_pb.InstrumentsRequest, instruments_pb.OptionsResponse>;
    optionsBy: grpc.handleUnaryCall<instruments_pb.FilterOptionsRequest, instruments_pb.OptionsResponse>;
    shareBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.ShareResponse>;
    shares: grpc.handleUnaryCall<instruments_pb.InstrumentsRequest, instruments_pb.SharesResponse>;
    indicatives: grpc.handleUnaryCall<instruments_pb.IndicativesRequest, instruments_pb.IndicativesResponse>;
    getAccruedInterests: grpc.handleUnaryCall<instruments_pb.GetAccruedInterestsRequest, instruments_pb.GetAccruedInterestsResponse>;
    getFuturesMargin: grpc.handleUnaryCall<instruments_pb.GetFuturesMarginRequest, instruments_pb.GetFuturesMarginResponse>;
    getInstrumentBy: grpc.handleUnaryCall<instruments_pb.InstrumentRequest, instruments_pb.InstrumentResponse>;
    getDividends: grpc.handleUnaryCall<instruments_pb.GetDividendsRequest, instruments_pb.GetDividendsResponse>;
    getAssetBy: grpc.handleUnaryCall<instruments_pb.AssetRequest, instruments_pb.AssetResponse>;
    getAssets: grpc.handleUnaryCall<instruments_pb.AssetsRequest, instruments_pb.AssetsResponse>;
    getFavorites: grpc.handleUnaryCall<instruments_pb.GetFavoritesRequest, instruments_pb.GetFavoritesResponse>;
    editFavorites: grpc.handleUnaryCall<instruments_pb.EditFavoritesRequest, instruments_pb.EditFavoritesResponse>;
    getCountries: grpc.handleUnaryCall<instruments_pb.GetCountriesRequest, instruments_pb.GetCountriesResponse>;
    findInstrument: grpc.handleUnaryCall<instruments_pb.FindInstrumentRequest, instruments_pb.FindInstrumentResponse>;
    getBrands: grpc.handleUnaryCall<instruments_pb.GetBrandsRequest, instruments_pb.GetBrandsResponse>;
    getBrandBy: grpc.handleUnaryCall<instruments_pb.GetBrandRequest, instruments_pb.Brand>;
    getAssetFundamentals: grpc.handleUnaryCall<instruments_pb.GetAssetFundamentalsRequest, instruments_pb.GetAssetFundamentalsResponse>;
    getAssetReports: grpc.handleUnaryCall<instruments_pb.GetAssetReportsRequest, instruments_pb.GetAssetReportsResponse>;
    getConsensusForecasts: grpc.handleUnaryCall<instruments_pb.GetConsensusForecastsRequest, instruments_pb.GetConsensusForecastsResponse>;
    getForecastBy: grpc.handleUnaryCall<instruments_pb.GetForecastRequest, instruments_pb.GetForecastResponse>;
}

export interface IInstrumentsServiceClient {
    tradingSchedules(request: instruments_pb.TradingSchedulesRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.TradingSchedulesResponse) => void): grpc.ClientUnaryCall;
    tradingSchedules(request: instruments_pb.TradingSchedulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.TradingSchedulesResponse) => void): grpc.ClientUnaryCall;
    tradingSchedules(request: instruments_pb.TradingSchedulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.TradingSchedulesResponse) => void): grpc.ClientUnaryCall;
    bondBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondResponse) => void): grpc.ClientUnaryCall;
    bondBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondResponse) => void): grpc.ClientUnaryCall;
    bondBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondResponse) => void): grpc.ClientUnaryCall;
    bonds(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondsResponse) => void): grpc.ClientUnaryCall;
    bonds(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondsResponse) => void): grpc.ClientUnaryCall;
    bonds(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondsResponse) => void): grpc.ClientUnaryCall;
    getBondCoupons(request: instruments_pb.GetBondCouponsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondCouponsResponse) => void): grpc.ClientUnaryCall;
    getBondCoupons(request: instruments_pb.GetBondCouponsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondCouponsResponse) => void): grpc.ClientUnaryCall;
    getBondCoupons(request: instruments_pb.GetBondCouponsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondCouponsResponse) => void): grpc.ClientUnaryCall;
    getBondEvents(request: instruments_pb.GetBondEventsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondEventsResponse) => void): grpc.ClientUnaryCall;
    getBondEvents(request: instruments_pb.GetBondEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondEventsResponse) => void): grpc.ClientUnaryCall;
    getBondEvents(request: instruments_pb.GetBondEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondEventsResponse) => void): grpc.ClientUnaryCall;
    currencyBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrencyResponse) => void): grpc.ClientUnaryCall;
    currencyBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrencyResponse) => void): grpc.ClientUnaryCall;
    currencyBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrencyResponse) => void): grpc.ClientUnaryCall;
    currencies(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrenciesResponse) => void): grpc.ClientUnaryCall;
    currencies(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrenciesResponse) => void): grpc.ClientUnaryCall;
    currencies(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrenciesResponse) => void): grpc.ClientUnaryCall;
    etfBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfResponse) => void): grpc.ClientUnaryCall;
    etfBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfResponse) => void): grpc.ClientUnaryCall;
    etfBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfResponse) => void): grpc.ClientUnaryCall;
    etfs(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfsResponse) => void): grpc.ClientUnaryCall;
    etfs(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfsResponse) => void): grpc.ClientUnaryCall;
    etfs(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfsResponse) => void): grpc.ClientUnaryCall;
    futureBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.FutureResponse) => void): grpc.ClientUnaryCall;
    futureBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.FutureResponse) => void): grpc.ClientUnaryCall;
    futureBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.FutureResponse) => void): grpc.ClientUnaryCall;
    futures(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.FuturesResponse) => void): grpc.ClientUnaryCall;
    futures(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.FuturesResponse) => void): grpc.ClientUnaryCall;
    futures(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.FuturesResponse) => void): grpc.ClientUnaryCall;
    optionBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionResponse) => void): grpc.ClientUnaryCall;
    optionBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionResponse) => void): grpc.ClientUnaryCall;
    optionBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionResponse) => void): grpc.ClientUnaryCall;
    options(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    options(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    options(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    optionsBy(request: instruments_pb.FilterOptionsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    optionsBy(request: instruments_pb.FilterOptionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    optionsBy(request: instruments_pb.FilterOptionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    shareBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.ShareResponse) => void): grpc.ClientUnaryCall;
    shareBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.ShareResponse) => void): grpc.ClientUnaryCall;
    shareBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.ShareResponse) => void): grpc.ClientUnaryCall;
    shares(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.SharesResponse) => void): grpc.ClientUnaryCall;
    shares(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.SharesResponse) => void): grpc.ClientUnaryCall;
    shares(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.SharesResponse) => void): grpc.ClientUnaryCall;
    indicatives(request: instruments_pb.IndicativesRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.IndicativesResponse) => void): grpc.ClientUnaryCall;
    indicatives(request: instruments_pb.IndicativesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.IndicativesResponse) => void): grpc.ClientUnaryCall;
    indicatives(request: instruments_pb.IndicativesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.IndicativesResponse) => void): grpc.ClientUnaryCall;
    getAccruedInterests(request: instruments_pb.GetAccruedInterestsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAccruedInterestsResponse) => void): grpc.ClientUnaryCall;
    getAccruedInterests(request: instruments_pb.GetAccruedInterestsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAccruedInterestsResponse) => void): grpc.ClientUnaryCall;
    getAccruedInterests(request: instruments_pb.GetAccruedInterestsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAccruedInterestsResponse) => void): grpc.ClientUnaryCall;
    getFuturesMargin(request: instruments_pb.GetFuturesMarginRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFuturesMarginResponse) => void): grpc.ClientUnaryCall;
    getFuturesMargin(request: instruments_pb.GetFuturesMarginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFuturesMarginResponse) => void): grpc.ClientUnaryCall;
    getFuturesMargin(request: instruments_pb.GetFuturesMarginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFuturesMarginResponse) => void): grpc.ClientUnaryCall;
    getInstrumentBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.InstrumentResponse) => void): grpc.ClientUnaryCall;
    getInstrumentBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.InstrumentResponse) => void): grpc.ClientUnaryCall;
    getInstrumentBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.InstrumentResponse) => void): grpc.ClientUnaryCall;
    getDividends(request: instruments_pb.GetDividendsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetDividendsResponse) => void): grpc.ClientUnaryCall;
    getDividends(request: instruments_pb.GetDividendsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetDividendsResponse) => void): grpc.ClientUnaryCall;
    getDividends(request: instruments_pb.GetDividendsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetDividendsResponse) => void): grpc.ClientUnaryCall;
    getAssetBy(request: instruments_pb.AssetRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetResponse) => void): grpc.ClientUnaryCall;
    getAssetBy(request: instruments_pb.AssetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetResponse) => void): grpc.ClientUnaryCall;
    getAssetBy(request: instruments_pb.AssetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetResponse) => void): grpc.ClientUnaryCall;
    getAssets(request: instruments_pb.AssetsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    getAssets(request: instruments_pb.AssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    getAssets(request: instruments_pb.AssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    getFavorites(request: instruments_pb.GetFavoritesRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFavoritesResponse) => void): grpc.ClientUnaryCall;
    getFavorites(request: instruments_pb.GetFavoritesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFavoritesResponse) => void): grpc.ClientUnaryCall;
    getFavorites(request: instruments_pb.GetFavoritesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFavoritesResponse) => void): grpc.ClientUnaryCall;
    editFavorites(request: instruments_pb.EditFavoritesRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.EditFavoritesResponse) => void): grpc.ClientUnaryCall;
    editFavorites(request: instruments_pb.EditFavoritesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.EditFavoritesResponse) => void): grpc.ClientUnaryCall;
    editFavorites(request: instruments_pb.EditFavoritesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.EditFavoritesResponse) => void): grpc.ClientUnaryCall;
    getCountries(request: instruments_pb.GetCountriesRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetCountriesResponse) => void): grpc.ClientUnaryCall;
    getCountries(request: instruments_pb.GetCountriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetCountriesResponse) => void): grpc.ClientUnaryCall;
    getCountries(request: instruments_pb.GetCountriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetCountriesResponse) => void): grpc.ClientUnaryCall;
    findInstrument(request: instruments_pb.FindInstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.FindInstrumentResponse) => void): grpc.ClientUnaryCall;
    findInstrument(request: instruments_pb.FindInstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.FindInstrumentResponse) => void): grpc.ClientUnaryCall;
    findInstrument(request: instruments_pb.FindInstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.FindInstrumentResponse) => void): grpc.ClientUnaryCall;
    getBrands(request: instruments_pb.GetBrandsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBrandsResponse) => void): grpc.ClientUnaryCall;
    getBrands(request: instruments_pb.GetBrandsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBrandsResponse) => void): grpc.ClientUnaryCall;
    getBrands(request: instruments_pb.GetBrandsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBrandsResponse) => void): grpc.ClientUnaryCall;
    getBrandBy(request: instruments_pb.GetBrandRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.Brand) => void): grpc.ClientUnaryCall;
    getBrandBy(request: instruments_pb.GetBrandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.Brand) => void): grpc.ClientUnaryCall;
    getBrandBy(request: instruments_pb.GetBrandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.Brand) => void): grpc.ClientUnaryCall;
    getAssetFundamentals(request: instruments_pb.GetAssetFundamentalsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetFundamentalsResponse) => void): grpc.ClientUnaryCall;
    getAssetFundamentals(request: instruments_pb.GetAssetFundamentalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetFundamentalsResponse) => void): grpc.ClientUnaryCall;
    getAssetFundamentals(request: instruments_pb.GetAssetFundamentalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetFundamentalsResponse) => void): grpc.ClientUnaryCall;
    getAssetReports(request: instruments_pb.GetAssetReportsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetReportsResponse) => void): grpc.ClientUnaryCall;
    getAssetReports(request: instruments_pb.GetAssetReportsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetReportsResponse) => void): grpc.ClientUnaryCall;
    getAssetReports(request: instruments_pb.GetAssetReportsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetReportsResponse) => void): grpc.ClientUnaryCall;
    getConsensusForecasts(request: instruments_pb.GetConsensusForecastsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetConsensusForecastsResponse) => void): grpc.ClientUnaryCall;
    getConsensusForecasts(request: instruments_pb.GetConsensusForecastsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetConsensusForecastsResponse) => void): grpc.ClientUnaryCall;
    getConsensusForecasts(request: instruments_pb.GetConsensusForecastsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetConsensusForecastsResponse) => void): grpc.ClientUnaryCall;
    getForecastBy(request: instruments_pb.GetForecastRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetForecastResponse) => void): grpc.ClientUnaryCall;
    getForecastBy(request: instruments_pb.GetForecastRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetForecastResponse) => void): grpc.ClientUnaryCall;
    getForecastBy(request: instruments_pb.GetForecastRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetForecastResponse) => void): grpc.ClientUnaryCall;
}

export class InstrumentsServiceClient extends grpc.Client implements IInstrumentsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public tradingSchedules(request: instruments_pb.TradingSchedulesRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.TradingSchedulesResponse) => void): grpc.ClientUnaryCall;
    public tradingSchedules(request: instruments_pb.TradingSchedulesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.TradingSchedulesResponse) => void): grpc.ClientUnaryCall;
    public tradingSchedules(request: instruments_pb.TradingSchedulesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.TradingSchedulesResponse) => void): grpc.ClientUnaryCall;
    public bondBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondResponse) => void): grpc.ClientUnaryCall;
    public bondBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondResponse) => void): grpc.ClientUnaryCall;
    public bondBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondResponse) => void): grpc.ClientUnaryCall;
    public bonds(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondsResponse) => void): grpc.ClientUnaryCall;
    public bonds(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondsResponse) => void): grpc.ClientUnaryCall;
    public bonds(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.BondsResponse) => void): grpc.ClientUnaryCall;
    public getBondCoupons(request: instruments_pb.GetBondCouponsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondCouponsResponse) => void): grpc.ClientUnaryCall;
    public getBondCoupons(request: instruments_pb.GetBondCouponsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondCouponsResponse) => void): grpc.ClientUnaryCall;
    public getBondCoupons(request: instruments_pb.GetBondCouponsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondCouponsResponse) => void): grpc.ClientUnaryCall;
    public getBondEvents(request: instruments_pb.GetBondEventsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondEventsResponse) => void): grpc.ClientUnaryCall;
    public getBondEvents(request: instruments_pb.GetBondEventsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondEventsResponse) => void): grpc.ClientUnaryCall;
    public getBondEvents(request: instruments_pb.GetBondEventsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBondEventsResponse) => void): grpc.ClientUnaryCall;
    public currencyBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrencyResponse) => void): grpc.ClientUnaryCall;
    public currencyBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrencyResponse) => void): grpc.ClientUnaryCall;
    public currencyBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrencyResponse) => void): grpc.ClientUnaryCall;
    public currencies(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrenciesResponse) => void): grpc.ClientUnaryCall;
    public currencies(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrenciesResponse) => void): grpc.ClientUnaryCall;
    public currencies(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.CurrenciesResponse) => void): grpc.ClientUnaryCall;
    public etfBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfResponse) => void): grpc.ClientUnaryCall;
    public etfBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfResponse) => void): grpc.ClientUnaryCall;
    public etfBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfResponse) => void): grpc.ClientUnaryCall;
    public etfs(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfsResponse) => void): grpc.ClientUnaryCall;
    public etfs(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfsResponse) => void): grpc.ClientUnaryCall;
    public etfs(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.EtfsResponse) => void): grpc.ClientUnaryCall;
    public futureBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.FutureResponse) => void): grpc.ClientUnaryCall;
    public futureBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.FutureResponse) => void): grpc.ClientUnaryCall;
    public futureBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.FutureResponse) => void): grpc.ClientUnaryCall;
    public futures(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.FuturesResponse) => void): grpc.ClientUnaryCall;
    public futures(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.FuturesResponse) => void): grpc.ClientUnaryCall;
    public futures(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.FuturesResponse) => void): grpc.ClientUnaryCall;
    public optionBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionResponse) => void): grpc.ClientUnaryCall;
    public optionBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionResponse) => void): grpc.ClientUnaryCall;
    public optionBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionResponse) => void): grpc.ClientUnaryCall;
    public options(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    public options(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    public options(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    public optionsBy(request: instruments_pb.FilterOptionsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    public optionsBy(request: instruments_pb.FilterOptionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    public optionsBy(request: instruments_pb.FilterOptionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.OptionsResponse) => void): grpc.ClientUnaryCall;
    public shareBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.ShareResponse) => void): grpc.ClientUnaryCall;
    public shareBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.ShareResponse) => void): grpc.ClientUnaryCall;
    public shareBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.ShareResponse) => void): grpc.ClientUnaryCall;
    public shares(request: instruments_pb.InstrumentsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.SharesResponse) => void): grpc.ClientUnaryCall;
    public shares(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.SharesResponse) => void): grpc.ClientUnaryCall;
    public shares(request: instruments_pb.InstrumentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.SharesResponse) => void): grpc.ClientUnaryCall;
    public indicatives(request: instruments_pb.IndicativesRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.IndicativesResponse) => void): grpc.ClientUnaryCall;
    public indicatives(request: instruments_pb.IndicativesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.IndicativesResponse) => void): grpc.ClientUnaryCall;
    public indicatives(request: instruments_pb.IndicativesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.IndicativesResponse) => void): grpc.ClientUnaryCall;
    public getAccruedInterests(request: instruments_pb.GetAccruedInterestsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAccruedInterestsResponse) => void): grpc.ClientUnaryCall;
    public getAccruedInterests(request: instruments_pb.GetAccruedInterestsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAccruedInterestsResponse) => void): grpc.ClientUnaryCall;
    public getAccruedInterests(request: instruments_pb.GetAccruedInterestsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAccruedInterestsResponse) => void): grpc.ClientUnaryCall;
    public getFuturesMargin(request: instruments_pb.GetFuturesMarginRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFuturesMarginResponse) => void): grpc.ClientUnaryCall;
    public getFuturesMargin(request: instruments_pb.GetFuturesMarginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFuturesMarginResponse) => void): grpc.ClientUnaryCall;
    public getFuturesMargin(request: instruments_pb.GetFuturesMarginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFuturesMarginResponse) => void): grpc.ClientUnaryCall;
    public getInstrumentBy(request: instruments_pb.InstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.InstrumentResponse) => void): grpc.ClientUnaryCall;
    public getInstrumentBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.InstrumentResponse) => void): grpc.ClientUnaryCall;
    public getInstrumentBy(request: instruments_pb.InstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.InstrumentResponse) => void): grpc.ClientUnaryCall;
    public getDividends(request: instruments_pb.GetDividendsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetDividendsResponse) => void): grpc.ClientUnaryCall;
    public getDividends(request: instruments_pb.GetDividendsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetDividendsResponse) => void): grpc.ClientUnaryCall;
    public getDividends(request: instruments_pb.GetDividendsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetDividendsResponse) => void): grpc.ClientUnaryCall;
    public getAssetBy(request: instruments_pb.AssetRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetResponse) => void): grpc.ClientUnaryCall;
    public getAssetBy(request: instruments_pb.AssetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetResponse) => void): grpc.ClientUnaryCall;
    public getAssetBy(request: instruments_pb.AssetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetResponse) => void): grpc.ClientUnaryCall;
    public getAssets(request: instruments_pb.AssetsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    public getAssets(request: instruments_pb.AssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    public getAssets(request: instruments_pb.AssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.AssetsResponse) => void): grpc.ClientUnaryCall;
    public getFavorites(request: instruments_pb.GetFavoritesRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFavoritesResponse) => void): grpc.ClientUnaryCall;
    public getFavorites(request: instruments_pb.GetFavoritesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFavoritesResponse) => void): grpc.ClientUnaryCall;
    public getFavorites(request: instruments_pb.GetFavoritesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetFavoritesResponse) => void): grpc.ClientUnaryCall;
    public editFavorites(request: instruments_pb.EditFavoritesRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.EditFavoritesResponse) => void): grpc.ClientUnaryCall;
    public editFavorites(request: instruments_pb.EditFavoritesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.EditFavoritesResponse) => void): grpc.ClientUnaryCall;
    public editFavorites(request: instruments_pb.EditFavoritesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.EditFavoritesResponse) => void): grpc.ClientUnaryCall;
    public getCountries(request: instruments_pb.GetCountriesRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetCountriesResponse) => void): grpc.ClientUnaryCall;
    public getCountries(request: instruments_pb.GetCountriesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetCountriesResponse) => void): grpc.ClientUnaryCall;
    public getCountries(request: instruments_pb.GetCountriesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetCountriesResponse) => void): grpc.ClientUnaryCall;
    public findInstrument(request: instruments_pb.FindInstrumentRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.FindInstrumentResponse) => void): grpc.ClientUnaryCall;
    public findInstrument(request: instruments_pb.FindInstrumentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.FindInstrumentResponse) => void): grpc.ClientUnaryCall;
    public findInstrument(request: instruments_pb.FindInstrumentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.FindInstrumentResponse) => void): grpc.ClientUnaryCall;
    public getBrands(request: instruments_pb.GetBrandsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBrandsResponse) => void): grpc.ClientUnaryCall;
    public getBrands(request: instruments_pb.GetBrandsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBrandsResponse) => void): grpc.ClientUnaryCall;
    public getBrands(request: instruments_pb.GetBrandsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetBrandsResponse) => void): grpc.ClientUnaryCall;
    public getBrandBy(request: instruments_pb.GetBrandRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.Brand) => void): grpc.ClientUnaryCall;
    public getBrandBy(request: instruments_pb.GetBrandRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.Brand) => void): grpc.ClientUnaryCall;
    public getBrandBy(request: instruments_pb.GetBrandRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.Brand) => void): grpc.ClientUnaryCall;
    public getAssetFundamentals(request: instruments_pb.GetAssetFundamentalsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetFundamentalsResponse) => void): grpc.ClientUnaryCall;
    public getAssetFundamentals(request: instruments_pb.GetAssetFundamentalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetFundamentalsResponse) => void): grpc.ClientUnaryCall;
    public getAssetFundamentals(request: instruments_pb.GetAssetFundamentalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetFundamentalsResponse) => void): grpc.ClientUnaryCall;
    public getAssetReports(request: instruments_pb.GetAssetReportsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetReportsResponse) => void): grpc.ClientUnaryCall;
    public getAssetReports(request: instruments_pb.GetAssetReportsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetReportsResponse) => void): grpc.ClientUnaryCall;
    public getAssetReports(request: instruments_pb.GetAssetReportsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetAssetReportsResponse) => void): grpc.ClientUnaryCall;
    public getConsensusForecasts(request: instruments_pb.GetConsensusForecastsRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetConsensusForecastsResponse) => void): grpc.ClientUnaryCall;
    public getConsensusForecasts(request: instruments_pb.GetConsensusForecastsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetConsensusForecastsResponse) => void): grpc.ClientUnaryCall;
    public getConsensusForecasts(request: instruments_pb.GetConsensusForecastsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetConsensusForecastsResponse) => void): grpc.ClientUnaryCall;
    public getForecastBy(request: instruments_pb.GetForecastRequest, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetForecastResponse) => void): grpc.ClientUnaryCall;
    public getForecastBy(request: instruments_pb.GetForecastRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetForecastResponse) => void): grpc.ClientUnaryCall;
    public getForecastBy(request: instruments_pb.GetForecastRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: instruments_pb.GetForecastResponse) => void): grpc.ClientUnaryCall;
}
