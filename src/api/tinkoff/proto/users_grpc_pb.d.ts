// package: tinkoff.public.invest.api.contract.v1
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";
import * as common_pb from "./common_pb";

interface IUsersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAccounts: IUsersServiceService_IGetAccounts;
    getMarginAttributes: IUsersServiceService_IGetMarginAttributes;
    getUserTariff: IUsersServiceService_IGetUserTariff;
    getInfo: IUsersServiceService_IGetInfo;
}

interface IUsersServiceService_IGetAccounts extends grpc.MethodDefinition<users_pb.GetAccountsRequest, users_pb.GetAccountsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.UsersService/GetAccounts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.GetAccountsRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetAccountsRequest>;
    responseSerialize: grpc.serialize<users_pb.GetAccountsResponse>;
    responseDeserialize: grpc.deserialize<users_pb.GetAccountsResponse>;
}
interface IUsersServiceService_IGetMarginAttributes extends grpc.MethodDefinition<users_pb.GetMarginAttributesRequest, users_pb.GetMarginAttributesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.UsersService/GetMarginAttributes";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.GetMarginAttributesRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetMarginAttributesRequest>;
    responseSerialize: grpc.serialize<users_pb.GetMarginAttributesResponse>;
    responseDeserialize: grpc.deserialize<users_pb.GetMarginAttributesResponse>;
}
interface IUsersServiceService_IGetUserTariff extends grpc.MethodDefinition<users_pb.GetUserTariffRequest, users_pb.GetUserTariffResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.UsersService/GetUserTariff";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.GetUserTariffRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetUserTariffRequest>;
    responseSerialize: grpc.serialize<users_pb.GetUserTariffResponse>;
    responseDeserialize: grpc.deserialize<users_pb.GetUserTariffResponse>;
}
interface IUsersServiceService_IGetInfo extends grpc.MethodDefinition<users_pb.GetInfoRequest, users_pb.GetInfoResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.UsersService/GetInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.GetInfoRequest>;
    requestDeserialize: grpc.deserialize<users_pb.GetInfoRequest>;
    responseSerialize: grpc.serialize<users_pb.GetInfoResponse>;
    responseDeserialize: grpc.deserialize<users_pb.GetInfoResponse>;
}

export const UsersServiceService: IUsersServiceService;

export interface IUsersServiceServer {
    getAccounts: grpc.handleUnaryCall<users_pb.GetAccountsRequest, users_pb.GetAccountsResponse>;
    getMarginAttributes: grpc.handleUnaryCall<users_pb.GetMarginAttributesRequest, users_pb.GetMarginAttributesResponse>;
    getUserTariff: grpc.handleUnaryCall<users_pb.GetUserTariffRequest, users_pb.GetUserTariffResponse>;
    getInfo: grpc.handleUnaryCall<users_pb.GetInfoRequest, users_pb.GetInfoResponse>;
}

export interface IUsersServiceClient {
    getAccounts(request: users_pb.GetAccountsRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    getAccounts(request: users_pb.GetAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    getAccounts(request: users_pb.GetAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    getMarginAttributes(request: users_pb.GetMarginAttributesRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetMarginAttributesResponse) => void): grpc.ClientUnaryCall;
    getMarginAttributes(request: users_pb.GetMarginAttributesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetMarginAttributesResponse) => void): grpc.ClientUnaryCall;
    getMarginAttributes(request: users_pb.GetMarginAttributesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetMarginAttributesResponse) => void): grpc.ClientUnaryCall;
    getUserTariff(request: users_pb.GetUserTariffRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetUserTariffResponse) => void): grpc.ClientUnaryCall;
    getUserTariff(request: users_pb.GetUserTariffRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetUserTariffResponse) => void): grpc.ClientUnaryCall;
    getUserTariff(request: users_pb.GetUserTariffRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetUserTariffResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: users_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: users_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: users_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
}

export class UsersServiceClient extends grpc.Client implements IUsersServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAccounts(request: users_pb.GetAccountsRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    public getAccounts(request: users_pb.GetAccountsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    public getAccounts(request: users_pb.GetAccountsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetAccountsResponse) => void): grpc.ClientUnaryCall;
    public getMarginAttributes(request: users_pb.GetMarginAttributesRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetMarginAttributesResponse) => void): grpc.ClientUnaryCall;
    public getMarginAttributes(request: users_pb.GetMarginAttributesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetMarginAttributesResponse) => void): grpc.ClientUnaryCall;
    public getMarginAttributes(request: users_pb.GetMarginAttributesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetMarginAttributesResponse) => void): grpc.ClientUnaryCall;
    public getUserTariff(request: users_pb.GetUserTariffRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetUserTariffResponse) => void): grpc.ClientUnaryCall;
    public getUserTariff(request: users_pb.GetUserTariffRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetUserTariffResponse) => void): grpc.ClientUnaryCall;
    public getUserTariff(request: users_pb.GetUserTariffRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetUserTariffResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: users_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: users_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: users_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: users_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
}
