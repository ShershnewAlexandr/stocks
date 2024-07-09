// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var instruments_pb = require('./instruments_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');
var google_api_field_behavior_pb = require('./google/api/field_behavior_pb.js');

function serialize_tinkoff_public_invest_api_contract_v1_AssetRequest(arg) {
  if (!(arg instanceof instruments_pb.AssetRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.AssetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_AssetRequest(buffer_arg) {
  return instruments_pb.AssetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_AssetResponse(arg) {
  if (!(arg instanceof instruments_pb.AssetResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.AssetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_AssetResponse(buffer_arg) {
  return instruments_pb.AssetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_AssetsRequest(arg) {
  if (!(arg instanceof instruments_pb.AssetsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.AssetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_AssetsRequest(buffer_arg) {
  return instruments_pb.AssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_AssetsResponse(arg) {
  if (!(arg instanceof instruments_pb.AssetsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.AssetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_AssetsResponse(buffer_arg) {
  return instruments_pb.AssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_BondResponse(arg) {
  if (!(arg instanceof instruments_pb.BondResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.BondResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_BondResponse(buffer_arg) {
  return instruments_pb.BondResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_BondsResponse(arg) {
  if (!(arg instanceof instruments_pb.BondsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.BondsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_BondsResponse(buffer_arg) {
  return instruments_pb.BondsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_Brand(arg) {
  if (!(arg instanceof instruments_pb.Brand)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.Brand');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_Brand(buffer_arg) {
  return instruments_pb.Brand.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_CurrenciesResponse(arg) {
  if (!(arg instanceof instruments_pb.CurrenciesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CurrenciesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CurrenciesResponse(buffer_arg) {
  return instruments_pb.CurrenciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_CurrencyResponse(arg) {
  if (!(arg instanceof instruments_pb.CurrencyResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CurrencyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CurrencyResponse(buffer_arg) {
  return instruments_pb.CurrencyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_EditFavoritesRequest(arg) {
  if (!(arg instanceof instruments_pb.EditFavoritesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.EditFavoritesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_EditFavoritesRequest(buffer_arg) {
  return instruments_pb.EditFavoritesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse(arg) {
  if (!(arg instanceof instruments_pb.EditFavoritesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.EditFavoritesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse(buffer_arg) {
  return instruments_pb.EditFavoritesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_EtfResponse(arg) {
  if (!(arg instanceof instruments_pb.EtfResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.EtfResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_EtfResponse(buffer_arg) {
  return instruments_pb.EtfResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_EtfsResponse(arg) {
  if (!(arg instanceof instruments_pb.EtfsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.EtfsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_EtfsResponse(buffer_arg) {
  return instruments_pb.EtfsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_FilterOptionsRequest(arg) {
  if (!(arg instanceof instruments_pb.FilterOptionsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.FilterOptionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_FilterOptionsRequest(buffer_arg) {
  return instruments_pb.FilterOptionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_FindInstrumentRequest(arg) {
  if (!(arg instanceof instruments_pb.FindInstrumentRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.FindInstrumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_FindInstrumentRequest(buffer_arg) {
  return instruments_pb.FindInstrumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse(arg) {
  if (!(arg instanceof instruments_pb.FindInstrumentResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.FindInstrumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse(buffer_arg) {
  return instruments_pb.FindInstrumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_FutureResponse(arg) {
  if (!(arg instanceof instruments_pb.FutureResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.FutureResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_FutureResponse(buffer_arg) {
  return instruments_pb.FutureResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_FuturesResponse(arg) {
  if (!(arg instanceof instruments_pb.FuturesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.FuturesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_FuturesResponse(buffer_arg) {
  return instruments_pb.FuturesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest(arg) {
  if (!(arg instanceof instruments_pb.GetAccruedInterestsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAccruedInterestsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest(buffer_arg) {
  return instruments_pb.GetAccruedInterestsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse(arg) {
  if (!(arg instanceof instruments_pb.GetAccruedInterestsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAccruedInterestsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse(buffer_arg) {
  return instruments_pb.GetAccruedInterestsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsRequest(arg) {
  if (!(arg instanceof instruments_pb.GetAssetFundamentalsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAssetFundamentalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsRequest(buffer_arg) {
  return instruments_pb.GetAssetFundamentalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsResponse(arg) {
  if (!(arg instanceof instruments_pb.GetAssetFundamentalsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAssetFundamentalsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsResponse(buffer_arg) {
  return instruments_pb.GetAssetFundamentalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetAssetReportsRequest(arg) {
  if (!(arg instanceof instruments_pb.GetAssetReportsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAssetReportsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAssetReportsRequest(buffer_arg) {
  return instruments_pb.GetAssetReportsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse(arg) {
  if (!(arg instanceof instruments_pb.GetAssetReportsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAssetReportsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse(buffer_arg) {
  return instruments_pb.GetAssetReportsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest(arg) {
  if (!(arg instanceof instruments_pb.GetBondCouponsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetBondCouponsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest(buffer_arg) {
  return instruments_pb.GetBondCouponsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse(arg) {
  if (!(arg instanceof instruments_pb.GetBondCouponsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetBondCouponsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse(buffer_arg) {
  return instruments_pb.GetBondCouponsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetBondEventsRequest(arg) {
  if (!(arg instanceof instruments_pb.GetBondEventsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetBondEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetBondEventsRequest(buffer_arg) {
  return instruments_pb.GetBondEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetBondEventsResponse(arg) {
  if (!(arg instanceof instruments_pb.GetBondEventsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetBondEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetBondEventsResponse(buffer_arg) {
  return instruments_pb.GetBondEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetBrandRequest(arg) {
  if (!(arg instanceof instruments_pb.GetBrandRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetBrandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetBrandRequest(buffer_arg) {
  return instruments_pb.GetBrandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetBrandsRequest(arg) {
  if (!(arg instanceof instruments_pb.GetBrandsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetBrandsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetBrandsRequest(buffer_arg) {
  return instruments_pb.GetBrandsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetBrandsResponse(arg) {
  if (!(arg instanceof instruments_pb.GetBrandsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetBrandsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetBrandsResponse(buffer_arg) {
  return instruments_pb.GetBrandsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetConsensusForecastsRequest(arg) {
  if (!(arg instanceof instruments_pb.GetConsensusForecastsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetConsensusForecastsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetConsensusForecastsRequest(buffer_arg) {
  return instruments_pb.GetConsensusForecastsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetConsensusForecastsResponse(arg) {
  if (!(arg instanceof instruments_pb.GetConsensusForecastsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetConsensusForecastsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetConsensusForecastsResponse(buffer_arg) {
  return instruments_pb.GetConsensusForecastsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetCountriesRequest(arg) {
  if (!(arg instanceof instruments_pb.GetCountriesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetCountriesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetCountriesRequest(buffer_arg) {
  return instruments_pb.GetCountriesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetCountriesResponse(arg) {
  if (!(arg instanceof instruments_pb.GetCountriesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetCountriesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetCountriesResponse(buffer_arg) {
  return instruments_pb.GetCountriesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetDividendsRequest(arg) {
  if (!(arg instanceof instruments_pb.GetDividendsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetDividendsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsRequest(buffer_arg) {
  return instruments_pb.GetDividendsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetDividendsResponse(arg) {
  if (!(arg instanceof instruments_pb.GetDividendsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetDividendsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsResponse(buffer_arg) {
  return instruments_pb.GetDividendsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetFavoritesRequest(arg) {
  if (!(arg instanceof instruments_pb.GetFavoritesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetFavoritesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetFavoritesRequest(buffer_arg) {
  return instruments_pb.GetFavoritesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse(arg) {
  if (!(arg instanceof instruments_pb.GetFavoritesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetFavoritesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse(buffer_arg) {
  return instruments_pb.GetFavoritesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetForecastRequest(arg) {
  if (!(arg instanceof instruments_pb.GetForecastRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetForecastRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetForecastRequest(buffer_arg) {
  return instruments_pb.GetForecastRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetForecastResponse(arg) {
  if (!(arg instanceof instruments_pb.GetForecastResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetForecastResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetForecastResponse(buffer_arg) {
  return instruments_pb.GetForecastResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest(arg) {
  if (!(arg instanceof instruments_pb.GetFuturesMarginRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetFuturesMarginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest(buffer_arg) {
  return instruments_pb.GetFuturesMarginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse(arg) {
  if (!(arg instanceof instruments_pb.GetFuturesMarginResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetFuturesMarginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse(buffer_arg) {
  return instruments_pb.GetFuturesMarginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_IndicativesRequest(arg) {
  if (!(arg instanceof instruments_pb.IndicativesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.IndicativesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_IndicativesRequest(buffer_arg) {
  return instruments_pb.IndicativesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_IndicativesResponse(arg) {
  if (!(arg instanceof instruments_pb.IndicativesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.IndicativesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_IndicativesResponse(buffer_arg) {
  return instruments_pb.IndicativesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest(arg) {
  if (!(arg instanceof instruments_pb.InstrumentRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.InstrumentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest(buffer_arg) {
  return instruments_pb.InstrumentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_InstrumentResponse(arg) {
  if (!(arg instanceof instruments_pb.InstrumentResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.InstrumentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_InstrumentResponse(buffer_arg) {
  return instruments_pb.InstrumentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest(arg) {
  if (!(arg instanceof instruments_pb.InstrumentsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.InstrumentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest(buffer_arg) {
  return instruments_pb.InstrumentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_OptionResponse(arg) {
  if (!(arg instanceof instruments_pb.OptionResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.OptionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_OptionResponse(buffer_arg) {
  return instruments_pb.OptionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_OptionsResponse(arg) {
  if (!(arg instanceof instruments_pb.OptionsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.OptionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_OptionsResponse(buffer_arg) {
  return instruments_pb.OptionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_ShareResponse(arg) {
  if (!(arg instanceof instruments_pb.ShareResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.ShareResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_ShareResponse(buffer_arg) {
  return instruments_pb.ShareResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_SharesResponse(arg) {
  if (!(arg instanceof instruments_pb.SharesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.SharesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_SharesResponse(buffer_arg) {
  return instruments_pb.SharesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest(arg) {
  if (!(arg instanceof instruments_pb.TradingSchedulesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.TradingSchedulesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest(buffer_arg) {
  return instruments_pb.TradingSchedulesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse(arg) {
  if (!(arg instanceof instruments_pb.TradingSchedulesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.TradingSchedulesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse(buffer_arg) {
  return instruments_pb.TradingSchedulesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var InstrumentsServiceService = exports.InstrumentsServiceService = {
  // Метод получения расписания торгов торговых площадок.
tradingSchedules: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/TradingSchedules',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.TradingSchedulesRequest,
    responseType: instruments_pb.TradingSchedulesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_TradingSchedulesResponse,
  },
  // Метод получения облигации по её идентификатору.
bondBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/BondBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.BondResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_BondResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_BondResponse,
  },
  // Метод получения списка облигаций.
bonds: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Bonds',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentsRequest,
    responseType: instruments_pb.BondsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_BondsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_BondsResponse,
  },
  // Метод получения графика выплат купонов по облигации.
getBondCoupons: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBondCoupons',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetBondCouponsRequest,
    responseType: instruments_pb.GetBondCouponsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetBondCouponsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetBondCouponsResponse,
  },
  // Метод получения событий по облигации
getBondEvents: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBondEvents',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetBondEventsRequest,
    responseType: instruments_pb.GetBondEventsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetBondEventsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetBondEventsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetBondEventsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetBondEventsResponse,
  },
  // Метод получения валюты по её идентификатору.
currencyBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/CurrencyBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.CurrencyResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_CurrencyResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CurrencyResponse,
  },
  // Метод получения списка валют.
currencies: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Currencies',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentsRequest,
    responseType: instruments_pb.CurrenciesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_CurrenciesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CurrenciesResponse,
  },
  // Метод получения инвестиционного фонда по его идентификатору.
etfBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/EtfBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.EtfResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_EtfResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_EtfResponse,
  },
  // Метод получения списка инвестиционных фондов.
etfs: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Etfs',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentsRequest,
    responseType: instruments_pb.EtfsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_EtfsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_EtfsResponse,
  },
  // Метод получения фьючерса по его идентификатору.
futureBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/FutureBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.FutureResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_FutureResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_FutureResponse,
  },
  // Метод получения списка фьючерсов.
futures: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Futures',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentsRequest,
    responseType: instruments_pb.FuturesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_FuturesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_FuturesResponse,
  },
  // Метод получения опциона по его идентификатору.
optionBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/OptionBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.OptionResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_OptionResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_OptionResponse,
  },
  // Deprecated Метод получения списка опционов.
options: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Options',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentsRequest,
    responseType: instruments_pb.OptionsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_OptionsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_OptionsResponse,
  },
  // Метод получения списка опционов.
optionsBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/OptionsBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.FilterOptionsRequest,
    responseType: instruments_pb.OptionsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_FilterOptionsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_FilterOptionsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_OptionsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_OptionsResponse,
  },
  // Метод получения акции по её идентификатору.
shareBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/ShareBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.ShareResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_ShareResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_ShareResponse,
  },
  // Метод получения списка акций.
shares: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Shares',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentsRequest,
    responseType: instruments_pb.SharesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_SharesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_SharesResponse,
  },
  // Метод получения индикативных инструментов (индексов, товаров и др.)
indicatives: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/Indicatives',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.IndicativesRequest,
    responseType: instruments_pb.IndicativesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_IndicativesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_IndicativesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_IndicativesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_IndicativesResponse,
  },
  // Метод получения накопленного купонного дохода по облигации.
getAccruedInterests: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAccruedInterests',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetAccruedInterestsRequest,
    responseType: instruments_pb.GetAccruedInterestsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAccruedInterestsResponse,
  },
  // Метод получения размера гарантийного обеспечения по фьючерсам.
getFuturesMargin: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetFuturesMargin',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetFuturesMarginRequest,
    responseType: instruments_pb.GetFuturesMarginResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetFuturesMarginResponse,
  },
  // Метод получения основной информации об инструменте.
getInstrumentBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetInstrumentBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.InstrumentRequest,
    responseType: instruments_pb.InstrumentResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_InstrumentResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_InstrumentResponse,
  },
  // Метод для получения событий выплаты дивидендов по инструменту.
getDividends: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetDividends',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetDividendsRequest,
    responseType: instruments_pb.GetDividendsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetDividendsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetDividendsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsResponse,
  },
  // Метод получения актива по его идентификатору.
getAssetBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssetBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.AssetRequest,
    responseType: instruments_pb.AssetResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_AssetRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_AssetRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_AssetResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_AssetResponse,
  },
  // Метод получения списка активов. Метод работает для всех инструментов, за исключением срочных - опционов и фьючерсов.
getAssets: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssets',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.AssetsRequest,
    responseType: instruments_pb.AssetsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_AssetsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_AssetsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_AssetsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_AssetsResponse,
  },
  // Метод получения списка избранных инструментов.
getFavorites: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetFavorites',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetFavoritesRequest,
    responseType: instruments_pb.GetFavoritesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetFavoritesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetFavoritesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetFavoritesResponse,
  },
  // Метод редактирования списка избранных инструментов.
editFavorites: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/EditFavorites',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.EditFavoritesRequest,
    responseType: instruments_pb.EditFavoritesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_EditFavoritesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_EditFavoritesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_EditFavoritesResponse,
  },
  // Метод получения списка стран.
getCountries: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetCountries',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetCountriesRequest,
    responseType: instruments_pb.GetCountriesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetCountriesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetCountriesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetCountriesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetCountriesResponse,
  },
  // Метод поиска инструмента.
findInstrument: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/FindInstrument',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.FindInstrumentRequest,
    responseType: instruments_pb.FindInstrumentResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_FindInstrumentRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_FindInstrumentRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_FindInstrumentResponse,
  },
  // Метод получения списка брендов.
getBrands: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBrands',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetBrandsRequest,
    responseType: instruments_pb.GetBrandsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetBrandsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetBrandsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetBrandsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetBrandsResponse,
  },
  // Метод получения бренда по его идентификатору.
getBrandBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetBrandBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetBrandRequest,
    responseType: instruments_pb.Brand,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetBrandRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetBrandRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_Brand,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_Brand,
  },
  // Метод получения фундаментальных показателей по активу
getAssetFundamentals: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssetFundamentals',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetAssetFundamentalsRequest,
    responseType: instruments_pb.GetAssetFundamentalsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAssetFundamentalsResponse,
  },
  // Метод получения расписания выхода отчетностей эмитентов
getAssetReports: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetAssetReports',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetAssetReportsRequest,
    responseType: instruments_pb.GetAssetReportsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAssetReportsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAssetReportsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAssetReportsResponse,
  },
  // Метод получения мнения аналитиков по инструменту
getConsensusForecasts: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetConsensusForecasts',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetConsensusForecastsRequest,
    responseType: instruments_pb.GetConsensusForecastsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetConsensusForecastsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetConsensusForecastsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetConsensusForecastsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetConsensusForecastsResponse,
  },
  // Метод получения прогнозов инвестдомов по инструменту
getForecastBy: {
    path: '/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetForecastBy',
    requestStream: false,
    responseStream: false,
    requestType: instruments_pb.GetForecastRequest,
    responseType: instruments_pb.GetForecastResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetForecastRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetForecastRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetForecastResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetForecastResponse,
  },
};

exports.InstrumentsServiceClient = grpc.makeGenericClientConstructor(InstrumentsServiceService);
// Сервис предназначен для получения:</br>**1**. информации об инструментах;</br>**2**.
// расписания торговых сессий;</br>**3**. календаря выплат купонов по облигациям;</br>**4**.
// размера гарантийного обеспечения по фьючерсам;</br>**5**. дивидендов по ценной бумаге.
