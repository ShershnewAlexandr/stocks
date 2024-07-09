// package: tinkoff.public.invest.api.contract.v1
// file: sandbox.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as sandbox_pb from "./sandbox_pb";
import * as common_pb from "./common_pb";
import * as orders_pb from "./orders_pb";
import * as operations_pb from "./operations_pb";
import * as users_pb from "./users_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";

interface ISandboxServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    openSandboxAccount: ISandboxServiceService_IOpenSandboxAccount;
    getSandboxAccounts: ISandboxServiceService_IGetSandboxAccounts;
    closeSandboxAccount: ISandboxServiceService_ICloseSandboxAccount;
    postSandboxOrder: ISandboxServiceService_IPostSandboxOrder;
    replaceSandboxOrder: ISandboxServiceService_IReplaceSandboxOrder;
    getSandboxOrders: ISandboxServiceService_IGetSandboxOrders;
    cancelSandboxOrder: ISandboxServiceService_ICancelSandboxOrder;
    getSandboxOrderState: ISandboxServiceService_IGetSandboxOrderState;
    getSandboxPositions: ISandboxServiceService_IGetSandboxPositions;
    getSandboxOperations: ISandboxServiceService_IGetSandboxOperations;
    getSandboxOperationsByCursor: ISandboxServiceService_IGetSandboxOperationsByCursor;
    getSandboxPortfolio: ISandboxServiceService_IGetSandboxPortfolio;
    sandboxPayIn: ISandboxServiceService_ISandboxPayIn;
    getSandboxWithdrawLimits: ISandboxServiceService_IGetSandboxWithdrawLimits;
    getSandboxMaxLots: ISandboxServiceService_IGetSandboxMaxLots;
}

interface ISandboxServiceService_IOpenSandboxAccount extends grpc.MethodDefinition<sandbox_pb.OpenSandboxAccountRequest, sandbox_pb.OpenSandboxAccountResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/OpenSandboxAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandbox_pb.OpenSandboxAccountRequest>;
    requestDeserialize: grpc.deserialize<sandbox_pb.OpenSandboxAccountRequest>;
    responseSerialize: grpc.serialize<sandbox_pb.OpenSandboxAccountResponse>;
    responseDeserialize: grpc.deserialize<sandbox_pb.OpenSandboxAccountResponse>;
}
interface ISandboxServiceService_IGetSandboxAccounts extends grpc.MethodDefinition<users_pb.GetAccountsRequest, users_pb.GetAccountsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.GetAccountsRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetAccountsRequest>;
    responseSerialize: grpc.serialize<users_pb.GetAccountsResponse>;
    responseDeserialize: grpc.deserialize<users_pb.GetAccountsResponse>;
}
interface ISandboxServiceService_ICloseSandboxAccount extends grpc.MethodDefinition<sandbox_pb.CloseSandboxAccountRequest, sandbox_pb.CloseSandboxAccountResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/CloseSandboxAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandbox_pb.CloseSandboxAccountRequest>;
    requestDeserialize: grpc.deserialize<sandbox_pb.CloseSandboxAccountRequest>;
    responseSerialize: grpc.serialize<sandbox_pb.CloseSandboxAccountResponse>;
    responseDeserialize: grpc.deserialize<sandbox_pb.CloseSandboxAccountResponse>;
}
interface ISandboxServiceService_IPostSandboxOrder extends grpc.MethodDefinition<orders_pb.PostOrderRequest, orders_pb.PostOrderResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/PostSandboxOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.PostOrderRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.PostOrderRequest>;
    responseSerialize: grpc.serialize<orders_pb.PostOrderResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.PostOrderResponse>;
}
interface ISandboxServiceService_IReplaceSandboxOrder extends grpc.MethodDefinition<orders_pb.ReplaceOrderRequest, orders_pb.PostOrderResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/ReplaceSandboxOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.ReplaceOrderRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.ReplaceOrderRequest>;
    responseSerialize: grpc.serialize<orders_pb.PostOrderResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.PostOrderResponse>;
}
interface ISandboxServiceService_IGetSandboxOrders extends grpc.MethodDefinition<orders_pb.GetOrdersRequest, orders_pb.GetOrdersResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.GetOrdersRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.GetOrdersRequest>;
    responseSerialize: grpc.serialize<orders_pb.GetOrdersResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.GetOrdersResponse>;
}
interface ISandboxServiceService_ICancelSandboxOrder extends grpc.MethodDefinition<orders_pb.CancelOrderRequest, orders_pb.CancelOrderResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/CancelSandboxOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.CancelOrderRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.CancelOrderRequest>;
    responseSerialize: grpc.serialize<orders_pb.CancelOrderResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.CancelOrderResponse>;
}
interface ISandboxServiceService_IGetSandboxOrderState extends grpc.MethodDefinition<orders_pb.GetOrderStateRequest, orders_pb.OrderState> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOrderState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.GetOrderStateRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.GetOrderStateRequest>;
    responseSerialize: grpc.serialize<orders_pb.OrderState>;
    responseDeserialize: grpc.deserialize<orders_pb.OrderState>;
}
interface ISandboxServiceService_IGetSandboxPositions extends grpc.MethodDefinition<operations_pb.PositionsRequest, operations_pb.PositionsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxPositions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.PositionsRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.PositionsRequest>;
    responseSerialize: grpc.serialize<operations_pb.PositionsResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.PositionsResponse>;
}
interface ISandboxServiceService_IGetSandboxOperations extends grpc.MethodDefinition<operations_pb.OperationsRequest, operations_pb.OperationsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.OperationsRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.OperationsRequest>;
    responseSerialize: grpc.serialize<operations_pb.OperationsResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.OperationsResponse>;
}
interface ISandboxServiceService_IGetSandboxOperationsByCursor extends grpc.MethodDefinition<operations_pb.GetOperationsByCursorRequest, operations_pb.GetOperationsByCursorResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxOperationsByCursor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.GetOperationsByCursorRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.GetOperationsByCursorRequest>;
    responseSerialize: grpc.serialize<operations_pb.GetOperationsByCursorResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.GetOperationsByCursorResponse>;
}
interface ISandboxServiceService_IGetSandboxPortfolio extends grpc.MethodDefinition<operations_pb.PortfolioRequest, operations_pb.PortfolioResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxPortfolio";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.PortfolioRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.PortfolioRequest>;
    responseSerialize: grpc.serialize<operations_pb.PortfolioResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.PortfolioResponse>;
}
interface ISandboxServiceService_ISandboxPayIn extends grpc.MethodDefinition<sandbox_pb.SandboxPayInRequest, sandbox_pb.SandboxPayInResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/SandboxPayIn";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sandbox_pb.SandboxPayInRequest>;
    requestDeserialize: grpc.deserialize<sandbox_pb.SandboxPayInRequest>;
    responseSerialize: grpc.serialize<sandbox_pb.SandboxPayInResponse>;
    responseDeserialize: grpc.deserialize<sandbox_pb.SandboxPayInResponse>;
}
interface ISandboxServiceService_IGetSandboxWithdrawLimits extends grpc.MethodDefinition<operations_pb.WithdrawLimitsRequest, operations_pb.WithdrawLimitsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxWithdrawLimits";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.WithdrawLimitsRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.WithdrawLimitsRequest>;
    responseSerialize: grpc.serialize<operations_pb.WithdrawLimitsResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.WithdrawLimitsResponse>;
}
interface ISandboxServiceService_IGetSandboxMaxLots extends grpc.MethodDefinition<orders_pb.GetMaxLotsRequest, orders_pb.GetMaxLotsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.SandboxService/GetSandboxMaxLots";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.GetMaxLotsRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.GetMaxLotsRequest>;
    responseSerialize: grpc.serialize<orders_pb.GetMaxLotsResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.GetMaxLotsResponse>;
}

export const SandboxServiceService: ISandboxServiceService;

export interface ISandboxServiceServer {
    openSandboxAccount: grpc.handleUnaryCall<sandbox_pb.OpenSandboxAccountRequest, sandbox_pb.OpenSandboxAccountResponse>;
    getSandboxAccounts: grpc.handleUnaryCall<users_pb.GetAccountsRequest, users_pb.GetAccountsResponse>;
    closeSandboxAccount: grpc.handleUnaryCall<sandbox_pb.CloseSandboxAccountRequest, sandbox_pb.CloseSandboxAccountResponse>;
    postSandboxOrder: grpc.handleUnaryCall<orders_pb.PostOrderRequest, orders_pb.PostOrderResponse>;
    replaceSandboxOrder: grpc.handleUnaryCall<orders_pb.ReplaceOrderRequest, orders_pb.PostOrderResponse>;
    getSandboxOrders: grpc.handleUnaryCall<orders_pb.GetOrdersRequest, orders_pb.GetOrdersResponse>;
    cancelSandboxOrder: grpc.handleUnaryCall<orders_pb.CancelOrderRequest, orders_pb.CancelOrderResponse>;
    getSandboxOrderState: grpc.handleUnaryCall<orders_pb.GetOrderStateRequest, orders_pb.OrderState>;
    getSandboxPositions: grpc.handleUnaryCall<operations_pb.PositionsRequest, operations_pb.PositionsResponse>;
    getSandboxOperations: grpc.handleUnaryCall<operations_pb.OperationsRequest, operations_pb.OperationsResponse>;
    getSandboxOperationsByCursor: grpc.handleUnaryCall<operations_pb.GetOperationsByCursorRequest, operations_pb.GetOperationsByCursorResponse>;
    getSandboxPortfolio: grpc.handleUnaryCall<operations_pb.PortfolioRequest, operations_pb.PortfolioResponse>;
    sandboxPayIn: grpc.handleUnaryCall<sandbox_pb.SandboxPayInRequest, sandbox_pb.SandboxPayInResponse>;
    getSandboxWithdrawLimits: grpc.handleUnaryCall<operations_pb.WithdrawLimitsRequest, operations_pb.WithdrawLimitsResponse>;
    getSandboxMaxLots: grpc.handleUnaryCall<orders_pb.GetMaxLotsRequest, orders_pb.GetMaxLotsResponse>;
}

export interface ISandboxServiceClient {
    openSandboxAccount(request: sandbox_pb.OpenSandboxAccountRequest, callback: (error: grpc.ServiceError | null, response: sandbox_pb.OpenSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    openSandboxAccount(request: sandbox_pb.OpenSandboxAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandbox_pb.OpenSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    openSandboxAccount(request: sandbox_pb.OpenSandboxAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandbox_pb.OpenSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    getSandboxAccounts(request: users_pb.GetAccountsRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    getSandboxAccounts(request: users_pb.GetAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    getSandboxAccounts(request: users_pb.GetAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    closeSandboxAccount(request: sandbox_pb.CloseSandboxAccountRequest, callback: (error: grpc.ServiceError | null, response: sandbox_pb.CloseSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    closeSandboxAccount(request: sandbox_pb.CloseSandboxAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandbox_pb.CloseSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    closeSandboxAccount(request: sandbox_pb.CloseSandboxAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandbox_pb.CloseSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    postSandboxOrder(request: orders_pb.PostOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postSandboxOrder(request: orders_pb.PostOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postSandboxOrder(request: orders_pb.PostOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    replaceSandboxOrder(request: orders_pb.ReplaceOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    replaceSandboxOrder(request: orders_pb.ReplaceOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    replaceSandboxOrder(request: orders_pb.ReplaceOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    getSandboxOrders(request: orders_pb.GetOrdersRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getSandboxOrders(request: orders_pb.GetOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getSandboxOrders(request: orders_pb.GetOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    cancelSandboxOrder(request: orders_pb.CancelOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    cancelSandboxOrder(request: orders_pb.CancelOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    cancelSandboxOrder(request: orders_pb.CancelOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    getSandboxOrderState(request: orders_pb.GetOrderStateRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    getSandboxOrderState(request: orders_pb.GetOrderStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    getSandboxOrderState(request: orders_pb.GetOrderStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    getSandboxPositions(request: operations_pb.PositionsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    getSandboxPositions(request: operations_pb.PositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    getSandboxPositions(request: operations_pb.PositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    getSandboxOperations(request: operations_pb.OperationsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    getSandboxOperations(request: operations_pb.OperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    getSandboxOperations(request: operations_pb.OperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    getSandboxOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
    getSandboxOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
    getSandboxOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
    getSandboxPortfolio(request: operations_pb.PortfolioRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    getSandboxPortfolio(request: operations_pb.PortfolioRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    getSandboxPortfolio(request: operations_pb.PortfolioRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    sandboxPayIn(request: sandbox_pb.SandboxPayInRequest, callback: (error: grpc.ServiceError | null, response: sandbox_pb.SandboxPayInResponse) => void): grpc.ClientUnaryCall;
    sandboxPayIn(request: sandbox_pb.SandboxPayInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandbox_pb.SandboxPayInResponse) => void): grpc.ClientUnaryCall;
    sandboxPayIn(request: sandbox_pb.SandboxPayInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandbox_pb.SandboxPayInResponse) => void): grpc.ClientUnaryCall;
    getSandboxWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    getSandboxWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    getSandboxWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    getSandboxMaxLots(request: orders_pb.GetMaxLotsRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
    getSandboxMaxLots(request: orders_pb.GetMaxLotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
    getSandboxMaxLots(request: orders_pb.GetMaxLotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
}

export class SandboxServiceClient extends grpc.Client implements ISandboxServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public openSandboxAccount(request: sandbox_pb.OpenSandboxAccountRequest, callback: (error: grpc.ServiceError | null, response: sandbox_pb.OpenSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    public openSandboxAccount(request: sandbox_pb.OpenSandboxAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandbox_pb.OpenSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    public openSandboxAccount(request: sandbox_pb.OpenSandboxAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandbox_pb.OpenSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    public getSandboxAccounts(request: users_pb.GetAccountsRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxAccounts(request: users_pb.GetAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxAccounts(request: users_pb.GetAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    public closeSandboxAccount(request: sandbox_pb.CloseSandboxAccountRequest, callback: (error: grpc.ServiceError | null, response: sandbox_pb.CloseSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    public closeSandboxAccount(request: sandbox_pb.CloseSandboxAccountRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandbox_pb.CloseSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    public closeSandboxAccount(request: sandbox_pb.CloseSandboxAccountRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandbox_pb.CloseSandboxAccountResponse) => void): grpc.ClientUnaryCall;
    public postSandboxOrder(request: orders_pb.PostOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postSandboxOrder(request: orders_pb.PostOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postSandboxOrder(request: orders_pb.PostOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public replaceSandboxOrder(request: orders_pb.ReplaceOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public replaceSandboxOrder(request: orders_pb.ReplaceOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public replaceSandboxOrder(request: orders_pb.ReplaceOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public getSandboxOrders(request: orders_pb.GetOrdersRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getSandboxOrders(request: orders_pb.GetOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getSandboxOrders(request: orders_pb.GetOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public cancelSandboxOrder(request: orders_pb.CancelOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    public cancelSandboxOrder(request: orders_pb.CancelOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    public cancelSandboxOrder(request: orders_pb.CancelOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    public getSandboxOrderState(request: orders_pb.GetOrderStateRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    public getSandboxOrderState(request: orders_pb.GetOrderStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    public getSandboxOrderState(request: orders_pb.GetOrderStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    public getSandboxPositions(request: operations_pb.PositionsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxPositions(request: operations_pb.PositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxPositions(request: operations_pb.PositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxOperations(request: operations_pb.OperationsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxOperations(request: operations_pb.OperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxOperations(request: operations_pb.OperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
    public getSandboxOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
    public getSandboxOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
    public getSandboxPortfolio(request: operations_pb.PortfolioRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    public getSandboxPortfolio(request: operations_pb.PortfolioRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    public getSandboxPortfolio(request: operations_pb.PortfolioRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    public sandboxPayIn(request: sandbox_pb.SandboxPayInRequest, callback: (error: grpc.ServiceError | null, response: sandbox_pb.SandboxPayInResponse) => void): grpc.ClientUnaryCall;
    public sandboxPayIn(request: sandbox_pb.SandboxPayInRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sandbox_pb.SandboxPayInResponse) => void): grpc.ClientUnaryCall;
    public sandboxPayIn(request: sandbox_pb.SandboxPayInRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sandbox_pb.SandboxPayInResponse) => void): grpc.ClientUnaryCall;
    public getSandboxWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxMaxLots(request: orders_pb.GetMaxLotsRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxMaxLots(request: orders_pb.GetMaxLotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
    public getSandboxMaxLots(request: orders_pb.GetMaxLotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
}
