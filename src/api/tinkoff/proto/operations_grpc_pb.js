// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var operations_pb = require('./operations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_pb = require('./common_pb.js');
var google_api_field_behavior_pb = require('./google/api/field_behavior_pb.js');

function serialize_tinkoff_public_invest_api_contract_v1_BrokerReportRequest(arg) {
  if (!(arg instanceof operations_pb.BrokerReportRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.BrokerReportRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_BrokerReportRequest(buffer_arg) {
  return operations_pb.BrokerReportRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_BrokerReportResponse(arg) {
  if (!(arg instanceof operations_pb.BrokerReportResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.BrokerReportResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_BrokerReportResponse(buffer_arg) {
  return operations_pb.BrokerReportResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest(arg) {
  if (!(arg instanceof operations_pb.GetDividendsForeignIssuerRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest(buffer_arg) {
  return operations_pb.GetDividendsForeignIssuerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse(arg) {
  if (!(arg instanceof operations_pb.GetDividendsForeignIssuerResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetDividendsForeignIssuerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse(buffer_arg) {
  return operations_pb.GetDividendsForeignIssuerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorRequest(arg) {
  if (!(arg instanceof operations_pb.GetOperationsByCursorRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetOperationsByCursorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorRequest(buffer_arg) {
  return operations_pb.GetOperationsByCursorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorResponse(arg) {
  if (!(arg instanceof operations_pb.GetOperationsByCursorResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetOperationsByCursorResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorResponse(buffer_arg) {
  return operations_pb.GetOperationsByCursorResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_OperationsRequest(arg) {
  if (!(arg instanceof operations_pb.OperationsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.OperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_OperationsRequest(buffer_arg) {
  return operations_pb.OperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_OperationsResponse(arg) {
  if (!(arg instanceof operations_pb.OperationsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.OperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_OperationsResponse(buffer_arg) {
  return operations_pb.OperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PortfolioRequest(arg) {
  if (!(arg instanceof operations_pb.PortfolioRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PortfolioRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PortfolioRequest(buffer_arg) {
  return operations_pb.PortfolioRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PortfolioResponse(arg) {
  if (!(arg instanceof operations_pb.PortfolioResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PortfolioResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PortfolioResponse(buffer_arg) {
  return operations_pb.PortfolioResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest(arg) {
  if (!(arg instanceof operations_pb.PortfolioStreamRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PortfolioStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest(buffer_arg) {
  return operations_pb.PortfolioStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse(arg) {
  if (!(arg instanceof operations_pb.PortfolioStreamResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PortfolioStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse(buffer_arg) {
  return operations_pb.PortfolioStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PositionsRequest(arg) {
  if (!(arg instanceof operations_pb.PositionsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PositionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PositionsRequest(buffer_arg) {
  return operations_pb.PositionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PositionsResponse(arg) {
  if (!(arg instanceof operations_pb.PositionsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PositionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PositionsResponse(buffer_arg) {
  return operations_pb.PositionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PositionsStreamRequest(arg) {
  if (!(arg instanceof operations_pb.PositionsStreamRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PositionsStreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PositionsStreamRequest(buffer_arg) {
  return operations_pb.PositionsStreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PositionsStreamResponse(arg) {
  if (!(arg instanceof operations_pb.PositionsStreamResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PositionsStreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PositionsStreamResponse(buffer_arg) {
  return operations_pb.PositionsStreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest(arg) {
  if (!(arg instanceof operations_pb.WithdrawLimitsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.WithdrawLimitsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest(buffer_arg) {
  return operations_pb.WithdrawLimitsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse(arg) {
  if (!(arg instanceof operations_pb.WithdrawLimitsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.WithdrawLimitsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse(buffer_arg) {
  return operations_pb.WithdrawLimitsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OperationsServiceService = exports.OperationsServiceService = {
  // Метод получения списка операций по счёту.При работе с данным методом необходимо учитывать
// [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
getOperations: {
    path: '/tinkoff.public.invest.api.contract.v1.OperationsService/GetOperations',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.OperationsRequest,
    responseType: operations_pb.OperationsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_OperationsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_OperationsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_OperationsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_OperationsResponse,
  },
  // Метод получения портфеля по счёту.
getPortfolio: {
    path: '/tinkoff.public.invest.api.contract.v1.OperationsService/GetPortfolio',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.PortfolioRequest,
    responseType: operations_pb.PortfolioResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_PortfolioRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PortfolioRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_PortfolioResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PortfolioResponse,
  },
  // Метод получения списка позиций по счёту.
getPositions: {
    path: '/tinkoff.public.invest.api.contract.v1.OperationsService/GetPositions',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.PositionsRequest,
    responseType: operations_pb.PositionsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_PositionsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PositionsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_PositionsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PositionsResponse,
  },
  // Метод получения доступного остатка для вывода средств.
getWithdrawLimits: {
    path: '/tinkoff.public.invest.api.contract.v1.OperationsService/GetWithdrawLimits',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.WithdrawLimitsRequest,
    responseType: operations_pb.WithdrawLimitsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse,
  },
  // Метод получения брокерского отчёта.
getBrokerReport: {
    path: '/tinkoff.public.invest.api.contract.v1.OperationsService/GetBrokerReport',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.BrokerReportRequest,
    responseType: operations_pb.BrokerReportResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_BrokerReportRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_BrokerReportRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_BrokerReportResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_BrokerReportResponse,
  },
  // Метод получения отчёта "Справка о доходах за пределами РФ".
getDividendsForeignIssuer: {
    path: '/tinkoff.public.invest.api.contract.v1.OperationsService/GetDividendsForeignIssuer',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.GetDividendsForeignIssuerRequest,
    responseType: operations_pb.GetDividendsForeignIssuerResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetDividendsForeignIssuerResponse,
  },
  // Метод получения списка операций по счёту с пагинацией. При работе с данным методом необходимо учитывать
// [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
getOperationsByCursor: {
    path: '/tinkoff.public.invest.api.contract.v1.OperationsService/GetOperationsByCursor',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.GetOperationsByCursorRequest,
    responseType: operations_pb.GetOperationsByCursorResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorResponse,
  },
};

exports.OperationsServiceClient = grpc.makeGenericClientConstructor(OperationsServiceService);
// Сервис предназначен для получения:</br> **1**.  списка операций по счёту;</br> **2**.
// портфеля по счёту;</br> **3**. позиций ценных бумаг на счёте;</br> **4**.
// доступного остатка для вывода средств;</br> **5**. получения различных отчётов.
var OperationsStreamServiceService = exports.OperationsStreamServiceService = {
  // Server-side stream обновлений портфеля
portfolioStream: {
    path: '/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PortfolioStream',
    requestStream: false,
    responseStream: true,
    requestType: operations_pb.PortfolioStreamRequest,
    responseType: operations_pb.PortfolioStreamResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PortfolioStreamRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PortfolioStreamResponse,
  },
  // Server-side stream обновлений информации по изменению позиций портфеля
positionsStream: {
    path: '/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PositionsStream',
    requestStream: false,
    responseStream: true,
    requestType: operations_pb.PositionsStreamRequest,
    responseType: operations_pb.PositionsStreamResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_PositionsStreamRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PositionsStreamRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_PositionsStreamResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PositionsStreamResponse,
  },
};

exports.OperationsStreamServiceClient = grpc.makeGenericClientConstructor(OperationsStreamServiceService);
