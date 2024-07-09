// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var marketdata_pb = require('./marketdata_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');
var google_api_field_behavior_pb = require('./google/api/field_behavior_pb.js');

function serialize_tinkoff_public_invest_api_contract_v1_GetCandlesRequest(arg) {
  if (!(arg instanceof marketdata_pb.GetCandlesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetCandlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetCandlesRequest(buffer_arg) {
  return marketdata_pb.GetCandlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetCandlesResponse(arg) {
  if (!(arg instanceof marketdata_pb.GetCandlesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetCandlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetCandlesResponse(buffer_arg) {
  return marketdata_pb.GetCandlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetClosePricesRequest(arg) {
  if (!(arg instanceof marketdata_pb.GetClosePricesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetClosePricesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetClosePricesRequest(buffer_arg) {
  return marketdata_pb.GetClosePricesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse(arg) {
  if (!(arg instanceof marketdata_pb.GetClosePricesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetClosePricesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse(buffer_arg) {
  return marketdata_pb.GetClosePricesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetLastPricesRequest(arg) {
  if (!(arg instanceof marketdata_pb.GetLastPricesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetLastPricesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetLastPricesRequest(buffer_arg) {
  return marketdata_pb.GetLastPricesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse(arg) {
  if (!(arg instanceof marketdata_pb.GetLastPricesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetLastPricesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse(buffer_arg) {
  return marketdata_pb.GetLastPricesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetLastTradesRequest(arg) {
  if (!(arg instanceof marketdata_pb.GetLastTradesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetLastTradesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetLastTradesRequest(buffer_arg) {
  return marketdata_pb.GetLastTradesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse(arg) {
  if (!(arg instanceof marketdata_pb.GetLastTradesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetLastTradesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse(buffer_arg) {
  return marketdata_pb.GetLastTradesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetOrderBookRequest(arg) {
  if (!(arg instanceof marketdata_pb.GetOrderBookRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetOrderBookRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetOrderBookRequest(buffer_arg) {
  return marketdata_pb.GetOrderBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse(arg) {
  if (!(arg instanceof marketdata_pb.GetOrderBookResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetOrderBookResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse(buffer_arg) {
  return marketdata_pb.GetOrderBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest(arg) {
  if (!(arg instanceof marketdata_pb.GetTechAnalysisRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetTechAnalysisRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest(buffer_arg) {
  return marketdata_pb.GetTechAnalysisRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetTechAnalysisResponse(arg) {
  if (!(arg instanceof marketdata_pb.GetTechAnalysisResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetTechAnalysisResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetTechAnalysisResponse(buffer_arg) {
  return marketdata_pb.GetTechAnalysisResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest(arg) {
  if (!(arg instanceof marketdata_pb.GetTradingStatusRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetTradingStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest(buffer_arg) {
  return marketdata_pb.GetTradingStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse(arg) {
  if (!(arg instanceof marketdata_pb.GetTradingStatusResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetTradingStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse(buffer_arg) {
  return marketdata_pb.GetTradingStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest(arg) {
  if (!(arg instanceof marketdata_pb.GetTradingStatusesRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetTradingStatusesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest(buffer_arg) {
  return marketdata_pb.GetTradingStatusesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse(arg) {
  if (!(arg instanceof marketdata_pb.GetTradingStatusesResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetTradingStatusesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse(buffer_arg) {
  return marketdata_pb.GetTradingStatusesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_MarketDataRequest(arg) {
  if (!(arg instanceof marketdata_pb.MarketDataRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.MarketDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_MarketDataRequest(buffer_arg) {
  return marketdata_pb.MarketDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_MarketDataResponse(arg) {
  if (!(arg instanceof marketdata_pb.MarketDataResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.MarketDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_MarketDataResponse(buffer_arg) {
  return marketdata_pb.MarketDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest(arg) {
  if (!(arg instanceof marketdata_pb.MarketDataServerSideStreamRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.MarketDataServerSideStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest(buffer_arg) {
  return marketdata_pb.MarketDataServerSideStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var MarketDataServiceService = exports.MarketDataServiceService = {
  // Метод запроса исторических свечей по инструменту.
getCandles: {
    path: '/tinkoff.public.invest.api.contract.v1.MarketDataService/GetCandles',
    requestStream: false,
    responseStream: false,
    requestType: marketdata_pb.GetCandlesRequest,
    responseType: marketdata_pb.GetCandlesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetCandlesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetCandlesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetCandlesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetCandlesResponse,
  },
  // Метод запроса цен последних сделок по инструментам.
getLastPrices: {
    path: '/tinkoff.public.invest.api.contract.v1.MarketDataService/GetLastPrices',
    requestStream: false,
    responseStream: false,
    requestType: marketdata_pb.GetLastPricesRequest,
    responseType: marketdata_pb.GetLastPricesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetLastPricesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetLastPricesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetLastPricesResponse,
  },
  // Метод получения стакана по инструменту.
getOrderBook: {
    path: '/tinkoff.public.invest.api.contract.v1.MarketDataService/GetOrderBook',
    requestStream: false,
    responseStream: false,
    requestType: marketdata_pb.GetOrderBookRequest,
    responseType: marketdata_pb.GetOrderBookResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOrderBookRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOrderBookRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOrderBookResponse,
  },
  // Метод запроса статуса торгов по инструментам.
getTradingStatus: {
    path: '/tinkoff.public.invest.api.contract.v1.MarketDataService/GetTradingStatus',
    requestStream: false,
    responseStream: false,
    requestType: marketdata_pb.GetTradingStatusRequest,
    responseType: marketdata_pb.GetTradingStatusResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusResponse,
  },
  // Метод запроса статуса торгов по инструментам.
getTradingStatuses: {
    path: '/tinkoff.public.invest.api.contract.v1.MarketDataService/GetTradingStatuses',
    requestStream: false,
    responseStream: false,
    requestType: marketdata_pb.GetTradingStatusesRequest,
    responseType: marketdata_pb.GetTradingStatusesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetTradingStatusesResponse,
  },
  // Метод запроса обезличенных сделок за последний час.
getLastTrades: {
    path: '/tinkoff.public.invest.api.contract.v1.MarketDataService/GetLastTrades',
    requestStream: false,
    responseStream: false,
    requestType: marketdata_pb.GetLastTradesRequest,
    responseType: marketdata_pb.GetLastTradesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetLastTradesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetLastTradesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetLastTradesResponse,
  },
  // Метод запроса цен закрытия торговой сессии по инструментам.
getClosePrices: {
    path: '/tinkoff.public.invest.api.contract.v1.MarketDataService/GetClosePrices',
    requestStream: false,
    responseStream: false,
    requestType: marketdata_pb.GetClosePricesRequest,
    responseType: marketdata_pb.GetClosePricesResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetClosePricesRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetClosePricesRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetClosePricesResponse,
  },
  // Метод получения технических индикаторов по инструменту
getTechAnalysis: {
    path: '/tinkoff.public.invest.api.contract.v1.MarketDataService/GetTechAnalysis',
    requestStream: false,
    responseStream: false,
    requestType: marketdata_pb.GetTechAnalysisRequest,
    responseType: marketdata_pb.GetTechAnalysisResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetTechAnalysisRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetTechAnalysisResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetTechAnalysisResponse,
  },
};

exports.MarketDataServiceClient = grpc.makeGenericClientConstructor(MarketDataServiceService);
// Сервис получения биржевой информации:</br> **1**. свечи;</br> **2**. стаканы;</br> **3**. торговые статусы;</br> **4**. лента сделок.
var MarketDataStreamServiceService = exports.MarketDataStreamServiceService = {
  // Bi-directional стрим предоставления биржевой информации.
marketDataStream: {
    path: '/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream',
    requestStream: true,
    responseStream: true,
    requestType: marketdata_pb.MarketDataRequest,
    responseType: marketdata_pb.MarketDataResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_MarketDataRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_MarketDataRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_MarketDataResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_MarketDataResponse,
  },
  // Server-side стрим предоставления биржевой информации.
marketDataServerSideStream: {
    path: '/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataServerSideStream',
    requestStream: false,
    responseStream: true,
    requestType: marketdata_pb.MarketDataServerSideStreamRequest,
    responseType: marketdata_pb.MarketDataResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_MarketDataServerSideStreamRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_MarketDataResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_MarketDataResponse,
  },
};

exports.MarketDataStreamServiceClient = grpc.makeGenericClientConstructor(MarketDataStreamServiceService);
