// package: tinkoff.public.invest.api.contract.v1
// file: stoporders.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as stoporders_pb from "./stoporders_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";
import * as common_pb from "./common_pb";

interface IStopOrdersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    postStopOrder: IStopOrdersServiceService_IPostStopOrder;
    getStopOrders: IStopOrdersServiceService_IGetStopOrders;
    cancelStopOrder: IStopOrdersServiceService_ICancelStopOrder;
}

interface IStopOrdersServiceService_IPostStopOrder extends grpc.MethodDefinition<stoporders_pb.PostStopOrderRequest, stoporders_pb.PostStopOrderResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.StopOrdersService/PostStopOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stoporders_pb.PostStopOrderRequest>;
    requestDeserialize: grpc.deserialize<stoporders_pb.PostStopOrderRequest>;
    responseSerialize: grpc.serialize<stoporders_pb.PostStopOrderResponse>;
    responseDeserialize: grpc.deserialize<stoporders_pb.PostStopOrderResponse>;
}
interface IStopOrdersServiceService_IGetStopOrders extends grpc.MethodDefinition<stoporders_pb.GetStopOrdersRequest, stoporders_pb.GetStopOrdersResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.StopOrdersService/GetStopOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stoporders_pb.GetStopOrdersRequest>;
    requestDeserialize: grpc.deserialize<stoporders_pb.GetStopOrdersRequest>;
    responseSerialize: grpc.serialize<stoporders_pb.GetStopOrdersResponse>;
    responseDeserialize: grpc.deserialize<stoporders_pb.GetStopOrdersResponse>;
}
interface IStopOrdersServiceService_ICancelStopOrder extends grpc.MethodDefinition<stoporders_pb.CancelStopOrderRequest, stoporders_pb.CancelStopOrderResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.StopOrdersService/CancelStopOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<stoporders_pb.CancelStopOrderRequest>;
    requestDeserialize: grpc.deserialize<stoporders_pb.CancelStopOrderRequest>;
    responseSerialize: grpc.serialize<stoporders_pb.CancelStopOrderResponse>;
    responseDeserialize: grpc.deserialize<stoporders_pb.CancelStopOrderResponse>;
}

export const StopOrdersServiceService: IStopOrdersServiceService;

export interface IStopOrdersServiceServer {
    postStopOrder: grpc.handleUnaryCall<stoporders_pb.PostStopOrderRequest, stoporders_pb.PostStopOrderResponse>;
    getStopOrders: grpc.handleUnaryCall<stoporders_pb.GetStopOrdersRequest, stoporders_pb.GetStopOrdersResponse>;
    cancelStopOrder: grpc.handleUnaryCall<stoporders_pb.CancelStopOrderRequest, stoporders_pb.CancelStopOrderResponse>;
}

export interface IStopOrdersServiceClient {
    postStopOrder(request: stoporders_pb.PostStopOrderRequest, callback: (error: grpc.ServiceError | null, response: stoporders_pb.PostStopOrderResponse) => void): grpc.ClientUnaryCall;
    postStopOrder(request: stoporders_pb.PostStopOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stoporders_pb.PostStopOrderResponse) => void): grpc.ClientUnaryCall;
    postStopOrder(request: stoporders_pb.PostStopOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stoporders_pb.PostStopOrderResponse) => void): grpc.ClientUnaryCall;
    getStopOrders(request: stoporders_pb.GetStopOrdersRequest, callback: (error: grpc.ServiceError | null, response: stoporders_pb.GetStopOrdersResponse) => void): grpc.ClientUnaryCall;
    getStopOrders(request: stoporders_pb.GetStopOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stoporders_pb.GetStopOrdersResponse) => void): grpc.ClientUnaryCall;
    getStopOrders(request: stoporders_pb.GetStopOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stoporders_pb.GetStopOrdersResponse) => void): grpc.ClientUnaryCall;
    cancelStopOrder(request: stoporders_pb.CancelStopOrderRequest, callback: (error: grpc.ServiceError | null, response: stoporders_pb.CancelStopOrderResponse) => void): grpc.ClientUnaryCall;
    cancelStopOrder(request: stoporders_pb.CancelStopOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stoporders_pb.CancelStopOrderResponse) => void): grpc.ClientUnaryCall;
    cancelStopOrder(request: stoporders_pb.CancelStopOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stoporders_pb.CancelStopOrderResponse) => void): grpc.ClientUnaryCall;
}

export class StopOrdersServiceClient extends grpc.Client implements IStopOrdersServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public postStopOrder(request: stoporders_pb.PostStopOrderRequest, callback: (error: grpc.ServiceError | null, response: stoporders_pb.PostStopOrderResponse) => void): grpc.ClientUnaryCall;
    public postStopOrder(request: stoporders_pb.PostStopOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stoporders_pb.PostStopOrderResponse) => void): grpc.ClientUnaryCall;
    public postStopOrder(request: stoporders_pb.PostStopOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stoporders_pb.PostStopOrderResponse) => void): grpc.ClientUnaryCall;
    public getStopOrders(request: stoporders_pb.GetStopOrdersRequest, callback: (error: grpc.ServiceError | null, response: stoporders_pb.GetStopOrdersResponse) => void): grpc.ClientUnaryCall;
    public getStopOrders(request: stoporders_pb.GetStopOrdersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stoporders_pb.GetStopOrdersResponse) => void): grpc.ClientUnaryCall;
    public getStopOrders(request: stoporders_pb.GetStopOrdersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stoporders_pb.GetStopOrdersResponse) => void): grpc.ClientUnaryCall;
    public cancelStopOrder(request: stoporders_pb.CancelStopOrderRequest, callback: (error: grpc.ServiceError | null, response: stoporders_pb.CancelStopOrderResponse) => void): grpc.ClientUnaryCall;
    public cancelStopOrder(request: stoporders_pb.CancelStopOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: stoporders_pb.CancelStopOrderResponse) => void): grpc.ClientUnaryCall;
    public cancelStopOrder(request: stoporders_pb.CancelStopOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: stoporders_pb.CancelStopOrderResponse) => void): grpc.ClientUnaryCall;
}
