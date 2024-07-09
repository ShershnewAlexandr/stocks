// package: tinkoff.public.invest.api.contract.v1
// file: orders.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as orders_pb from "./orders_pb";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";

interface IOrdersStreamServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    tradesStream: IOrdersStreamServiceService_ITradesStream;
    orderStateStream: IOrdersStreamServiceService_IOrderStateStream;
}

interface IOrdersStreamServiceService_ITradesStream extends grpc.MethodDefinition<orders_pb.TradesStreamRequest, orders_pb.TradesStreamResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OrdersStreamService/TradesStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<orders_pb.TradesStreamRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.TradesStreamRequest>;
    responseSerialize: grpc.serialize<orders_pb.TradesStreamResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.TradesStreamResponse>;
}
interface IOrdersStreamServiceService_IOrderStateStream extends grpc.MethodDefinition<orders_pb.OrderStateStreamRequest, orders_pb.OrderStateStreamResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OrdersStreamService/OrderStateStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<orders_pb.OrderStateStreamRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.OrderStateStreamRequest>;
    responseSerialize: grpc.serialize<orders_pb.OrderStateStreamResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.OrderStateStreamResponse>;
}

export const OrdersStreamServiceService: IOrdersStreamServiceService;

export interface IOrdersStreamServiceServer {
    tradesStream: grpc.handleServerStreamingCall<orders_pb.TradesStreamRequest, orders_pb.TradesStreamResponse>;
    orderStateStream: grpc.handleServerStreamingCall<orders_pb.OrderStateStreamRequest, orders_pb.OrderStateStreamResponse>;
}

export interface IOrdersStreamServiceClient {
    tradesStream(request: orders_pb.TradesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<orders_pb.TradesStreamResponse>;
    tradesStream(request: orders_pb.TradesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<orders_pb.TradesStreamResponse>;
    orderStateStream(request: orders_pb.OrderStateStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<orders_pb.OrderStateStreamResponse>;
    orderStateStream(request: orders_pb.OrderStateStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<orders_pb.OrderStateStreamResponse>;
}

export class OrdersStreamServiceClient extends grpc.Client implements IOrdersStreamServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public tradesStream(request: orders_pb.TradesStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<orders_pb.TradesStreamResponse>;
    public tradesStream(request: orders_pb.TradesStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<orders_pb.TradesStreamResponse>;
    public orderStateStream(request: orders_pb.OrderStateStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<orders_pb.OrderStateStreamResponse>;
    public orderStateStream(request: orders_pb.OrderStateStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<orders_pb.OrderStateStreamResponse>;
}

interface IOrdersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    postOrder: IOrdersServiceService_IPostOrder;
    cancelOrder: IOrdersServiceService_ICancelOrder;
    getOrderState: IOrdersServiceService_IGetOrderState;
    getOrders: IOrdersServiceService_IGetOrders;
    replaceOrder: IOrdersServiceService_IReplaceOrder;
    getMaxLots: IOrdersServiceService_IGetMaxLots;
    getOrderPrice: IOrdersServiceService_IGetOrderPrice;
}

interface IOrdersServiceService_IPostOrder extends grpc.MethodDefinition<orders_pb.PostOrderRequest, orders_pb.PostOrderResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OrdersService/PostOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.PostOrderRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.PostOrderRequest>;
    responseSerialize: grpc.serialize<orders_pb.PostOrderResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.PostOrderResponse>;
}
interface IOrdersServiceService_ICancelOrder extends grpc.MethodDefinition<orders_pb.CancelOrderRequest, orders_pb.CancelOrderResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OrdersService/CancelOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.CancelOrderRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.CancelOrderRequest>;
    responseSerialize: grpc.serialize<orders_pb.CancelOrderResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.CancelOrderResponse>;
}
interface IOrdersServiceService_IGetOrderState extends grpc.MethodDefinition<orders_pb.GetOrderStateRequest, orders_pb.OrderState> {
    path: "/tinkoff.public.invest.api.contract.v1.OrdersService/GetOrderState";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.GetOrderStateRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.GetOrderStateRequest>;
    responseSerialize: grpc.serialize<orders_pb.OrderState>;
    responseDeserialize: grpc.deserialize<orders_pb.OrderState>;
}
interface IOrdersServiceService_IGetOrders extends grpc.MethodDefinition<orders_pb.GetOrdersRequest, orders_pb.GetOrdersResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OrdersService/GetOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.GetOrdersRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.GetOrdersRequest>;
    responseSerialize: grpc.serialize<orders_pb.GetOrdersResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.GetOrdersResponse>;
}
interface IOrdersServiceService_IReplaceOrder extends grpc.MethodDefinition<orders_pb.ReplaceOrderRequest, orders_pb.PostOrderResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OrdersService/ReplaceOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.ReplaceOrderRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.ReplaceOrderRequest>;
    responseSerialize: grpc.serialize<orders_pb.PostOrderResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.PostOrderResponse>;
}
interface IOrdersServiceService_IGetMaxLots extends grpc.MethodDefinition<orders_pb.GetMaxLotsRequest, orders_pb.GetMaxLotsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OrdersService/GetMaxLots";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.GetMaxLotsRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.GetMaxLotsRequest>;
    responseSerialize: grpc.serialize<orders_pb.GetMaxLotsResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.GetMaxLotsResponse>;
}
interface IOrdersServiceService_IGetOrderPrice extends grpc.MethodDefinition<orders_pb.GetOrderPriceRequest, orders_pb.GetOrderPriceResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OrdersService/GetOrderPrice";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<orders_pb.GetOrderPriceRequest>;
    requestDeserialize: grpc.deserialize<orders_pb.GetOrderPriceRequest>;
    responseSerialize: grpc.serialize<orders_pb.GetOrderPriceResponse>;
    responseDeserialize: grpc.deserialize<orders_pb.GetOrderPriceResponse>;
}

export const OrdersServiceService: IOrdersServiceService;

export interface IOrdersServiceServer {
    postOrder: grpc.handleUnaryCall<orders_pb.PostOrderRequest, orders_pb.PostOrderResponse>;
    cancelOrder: grpc.handleUnaryCall<orders_pb.CancelOrderRequest, orders_pb.CancelOrderResponse>;
    getOrderState: grpc.handleUnaryCall<orders_pb.GetOrderStateRequest, orders_pb.OrderState>;
    getOrders: grpc.handleUnaryCall<orders_pb.GetOrdersRequest, orders_pb.GetOrdersResponse>;
    replaceOrder: grpc.handleUnaryCall<orders_pb.ReplaceOrderRequest, orders_pb.PostOrderResponse>;
    getMaxLots: grpc.handleUnaryCall<orders_pb.GetMaxLotsRequest, orders_pb.GetMaxLotsResponse>;
    getOrderPrice: grpc.handleUnaryCall<orders_pb.GetOrderPriceRequest, orders_pb.GetOrderPriceResponse>;
}

export interface IOrdersServiceClient {
    postOrder(request: orders_pb.PostOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postOrder(request: orders_pb.PostOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    postOrder(request: orders_pb.PostOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    cancelOrder(request: orders_pb.CancelOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    cancelOrder(request: orders_pb.CancelOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    cancelOrder(request: orders_pb.CancelOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    getOrderState(request: orders_pb.GetOrderStateRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    getOrderState(request: orders_pb.GetOrderStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    getOrderState(request: orders_pb.GetOrderStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    getOrders(request: orders_pb.GetOrdersRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getOrders(request: orders_pb.GetOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    getOrders(request: orders_pb.GetOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    replaceOrder(request: orders_pb.ReplaceOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    replaceOrder(request: orders_pb.ReplaceOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    replaceOrder(request: orders_pb.ReplaceOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    getMaxLots(request: orders_pb.GetMaxLotsRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
    getMaxLots(request: orders_pb.GetMaxLotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
    getMaxLots(request: orders_pb.GetMaxLotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
    getOrderPrice(request: orders_pb.GetOrderPriceRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrderPriceResponse) => void): grpc.ClientUnaryCall;
    getOrderPrice(request: orders_pb.GetOrderPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrderPriceResponse) => void): grpc.ClientUnaryCall;
    getOrderPrice(request: orders_pb.GetOrderPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrderPriceResponse) => void): grpc.ClientUnaryCall;
}

export class OrdersServiceClient extends grpc.Client implements IOrdersServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public postOrder(request: orders_pb.PostOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postOrder(request: orders_pb.PostOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public postOrder(request: orders_pb.PostOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public cancelOrder(request: orders_pb.CancelOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    public cancelOrder(request: orders_pb.CancelOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    public cancelOrder(request: orders_pb.CancelOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.CancelOrderResponse) => void): grpc.ClientUnaryCall;
    public getOrderState(request: orders_pb.GetOrderStateRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    public getOrderState(request: orders_pb.GetOrderStateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    public getOrderState(request: orders_pb.GetOrderStateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.OrderState) => void): grpc.ClientUnaryCall;
    public getOrders(request: orders_pb.GetOrdersRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOrders(request: orders_pb.GetOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public getOrders(request: orders_pb.GetOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrdersResponse) => void): grpc.ClientUnaryCall;
    public replaceOrder(request: orders_pb.ReplaceOrderRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public replaceOrder(request: orders_pb.ReplaceOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public replaceOrder(request: orders_pb.ReplaceOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.PostOrderResponse) => void): grpc.ClientUnaryCall;
    public getMaxLots(request: orders_pb.GetMaxLotsRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
    public getMaxLots(request: orders_pb.GetMaxLotsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
    public getMaxLots(request: orders_pb.GetMaxLotsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.GetMaxLotsResponse) => void): grpc.ClientUnaryCall;
    public getOrderPrice(request: orders_pb.GetOrderPriceRequest, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrderPriceResponse) => void): grpc.ClientUnaryCall;
    public getOrderPrice(request: orders_pb.GetOrderPriceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrderPriceResponse) => void): grpc.ClientUnaryCall;
    public getOrderPrice(request: orders_pb.GetOrderPriceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: orders_pb.GetOrderPriceResponse) => void): grpc.ClientUnaryCall;
}
