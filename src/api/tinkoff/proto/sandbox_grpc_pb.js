// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sandbox_pb = require('./sandbox_pb.js');
var common_pb = require('./common_pb.js');
var orders_pb = require('./orders_pb.js');
var operations_pb = require('./operations_pb.js');
var users_pb = require('./users_pb.js');
var google_api_field_behavior_pb = require('./google/api/field_behavior_pb.js');

function serialize_tinkoff_public_invest_api_contract_v1_CancelOrderRequest(arg) {
  if (!(arg instanceof orders_pb.CancelOrderRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CancelOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CancelOrderRequest(buffer_arg) {
  return orders_pb.CancelOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_CancelOrderResponse(arg) {
  if (!(arg instanceof orders_pb.CancelOrderResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CancelOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CancelOrderResponse(buffer_arg) {
  return orders_pb.CancelOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest(arg) {
  if (!(arg instanceof sandbox_pb.CloseSandboxAccountRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CloseSandboxAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest(buffer_arg) {
  return sandbox_pb.CloseSandboxAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse(arg) {
  if (!(arg instanceof sandbox_pb.CloseSandboxAccountResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.CloseSandboxAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse(buffer_arg) {
  return sandbox_pb.CloseSandboxAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetAccountsRequest(arg) {
  if (!(arg instanceof users_pb.GetAccountsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAccountsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAccountsRequest(buffer_arg) {
  return users_pb.GetAccountsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetAccountsResponse(arg) {
  if (!(arg instanceof users_pb.GetAccountsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetAccountsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetAccountsResponse(buffer_arg) {
  return users_pb.GetAccountsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest(arg) {
  if (!(arg instanceof orders_pb.GetMaxLotsRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetMaxLotsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest(buffer_arg) {
  return orders_pb.GetMaxLotsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse(arg) {
  if (!(arg instanceof orders_pb.GetMaxLotsResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetMaxLotsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse(buffer_arg) {
  return orders_pb.GetMaxLotsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest(arg) {
  if (!(arg instanceof orders_pb.GetOrderStateRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetOrderStateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest(buffer_arg) {
  return orders_pb.GetOrderStateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetOrdersRequest(arg) {
  if (!(arg instanceof orders_pb.GetOrdersRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetOrdersRequest(buffer_arg) {
  return orders_pb.GetOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_GetOrdersResponse(arg) {
  if (!(arg instanceof orders_pb.GetOrdersResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.GetOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_GetOrdersResponse(buffer_arg) {
  return orders_pb.GetOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest(arg) {
  if (!(arg instanceof sandbox_pb.OpenSandboxAccountRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.OpenSandboxAccountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest(buffer_arg) {
  return sandbox_pb.OpenSandboxAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse(arg) {
  if (!(arg instanceof sandbox_pb.OpenSandboxAccountResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.OpenSandboxAccountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse(buffer_arg) {
  return sandbox_pb.OpenSandboxAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_tinkoff_public_invest_api_contract_v1_OrderState(arg) {
  if (!(arg instanceof orders_pb.OrderState)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.OrderState');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_OrderState(buffer_arg) {
  return orders_pb.OrderState.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_tinkoff_public_invest_api_contract_v1_PostOrderRequest(arg) {
  if (!(arg instanceof orders_pb.PostOrderRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PostOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PostOrderRequest(buffer_arg) {
  return orders_pb.PostOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_PostOrderResponse(arg) {
  if (!(arg instanceof orders_pb.PostOrderResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.PostOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_PostOrderResponse(buffer_arg) {
  return orders_pb.PostOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest(arg) {
  if (!(arg instanceof orders_pb.ReplaceOrderRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.ReplaceOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest(buffer_arg) {
  return orders_pb.ReplaceOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_SandboxPayInRequest(arg) {
  if (!(arg instanceof sandbox_pb.SandboxPayInRequest)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.SandboxPayInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_SandboxPayInRequest(buffer_arg) {
  return sandbox_pb.SandboxPayInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse(arg) {
  if (!(arg instanceof sandbox_pb.SandboxPayInResponse)) {
    throw new Error('Expected argument of type tinkoff.public.invest.api.contract.v1.SandboxPayInResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse(buffer_arg) {
  return sandbox_pb.SandboxPayInResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


var SandboxServiceService = exports.SandboxServiceService = {
  // Зарегистрировать счёт.
openSandboxAccount: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/OpenSandboxAccount',
    requestStream: false,
    responseStream: false,
    requestType: sandbox_pb.OpenSandboxAccountRequest,
    responseType: sandbox_pb.OpenSandboxAccountResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_OpenSandboxAccountResponse,
  },
  // Получить счета.
getSandboxAccounts: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxAccounts',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.GetAccountsRequest,
    responseType: users_pb.GetAccountsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAccountsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAccountsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetAccountsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetAccountsResponse,
  },
  // Закрыть счёт.
closeSandboxAccount: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/CloseSandboxAccount',
    requestStream: false,
    responseStream: false,
    requestType: sandbox_pb.CloseSandboxAccountRequest,
    responseType: sandbox_pb.CloseSandboxAccountResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CloseSandboxAccountResponse,
  },
  // Выставить торговое поручение.
postSandboxOrder: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/PostSandboxOrder',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.PostOrderRequest,
    responseType: orders_pb.PostOrderResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_PostOrderRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PostOrderRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_PostOrderResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PostOrderResponse,
  },
  // Изменить выставленную заявку.
replaceSandboxOrder: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/ReplaceSandboxOrder',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.ReplaceOrderRequest,
    responseType: orders_pb.PostOrderResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_ReplaceOrderRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_PostOrderResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PostOrderResponse,
  },
  // Получить список активных заявок по счёту.
getSandboxOrders: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOrders',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.GetOrdersRequest,
    responseType: orders_pb.GetOrdersResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOrdersRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOrdersRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOrdersResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOrdersResponse,
  },
  // Отменить торговое поручение.
cancelSandboxOrder: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/CancelSandboxOrder',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.CancelOrderRequest,
    responseType: orders_pb.CancelOrderResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_CancelOrderRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CancelOrderRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_CancelOrderResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_CancelOrderResponse,
  },
  // Поулчить статус заявки в песочнице. Заявки хранятся в таблице 7 дней.
getSandboxOrderState: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOrderState',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.GetOrderStateRequest,
    responseType: orders_pb.OrderState,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOrderStateRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_OrderState,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_OrderState,
  },
  // Получить позиции по виртуальному счёту.
getSandboxPositions: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxPositions',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.PositionsRequest,
    responseType: operations_pb.PositionsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_PositionsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PositionsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_PositionsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PositionsResponse,
  },
  // Получить операции по номеру счёта.
getSandboxOperations: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOperations',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.OperationsRequest,
    responseType: operations_pb.OperationsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_OperationsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_OperationsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_OperationsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_OperationsResponse,
  },
  // Получить операции по номеру счёта с пагинацией.
getSandboxOperationsByCursor: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOperationsByCursor',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.GetOperationsByCursorRequest,
    responseType: operations_pb.GetOperationsByCursorResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetOperationsByCursorResponse,
  },
  // Получить портфель.
getSandboxPortfolio: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxPortfolio',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.PortfolioRequest,
    responseType: operations_pb.PortfolioResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_PortfolioRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PortfolioRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_PortfolioResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_PortfolioResponse,
  },
  // Пополнить счёт.
sandboxPayIn: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/SandboxPayIn',
    requestStream: false,
    responseStream: false,
    requestType: sandbox_pb.SandboxPayInRequest,
    responseType: sandbox_pb.SandboxPayInResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_SandboxPayInRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_SandboxPayInRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_SandboxPayInResponse,
  },
  // Получить доступный остаток для вывода средств.
getSandboxWithdrawLimits: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxWithdrawLimits',
    requestStream: false,
    responseStream: false,
    requestType: operations_pb.WithdrawLimitsRequest,
    responseType: operations_pb.WithdrawLimitsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_WithdrawLimitsResponse,
  },
  // Расчёт количества доступных для покупки/продажи лотов в песочнице.
getSandboxMaxLots: {
    path: '/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxMaxLots',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.GetMaxLotsRequest,
    responseType: orders_pb.GetMaxLotsResponse,
    requestSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest,
    requestDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetMaxLotsRequest,
    responseSerialize: serialize_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse,
    responseDeserialize: deserialize_tinkoff_public_invest_api_contract_v1_GetMaxLotsResponse,
  },
};

exports.SandboxServiceClient = grpc.makeGenericClientConstructor(SandboxServiceService);
// Методы для работы с песочницей Tinkoff Invest API
