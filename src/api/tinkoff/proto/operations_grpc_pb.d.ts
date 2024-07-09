// package: tinkoff.public.invest.api.contract.v1
// file: operations.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as operations_pb from "./operations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";

interface IOperationsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOperations: IOperationsServiceService_IGetOperations;
    getPortfolio: IOperationsServiceService_IGetPortfolio;
    getPositions: IOperationsServiceService_IGetPositions;
    getWithdrawLimits: IOperationsServiceService_IGetWithdrawLimits;
    getBrokerReport: IOperationsServiceService_IGetBrokerReport;
    getDividendsForeignIssuer: IOperationsServiceService_IGetDividendsForeignIssuer;
    getOperationsByCursor: IOperationsServiceService_IGetOperationsByCursor;
}

interface IOperationsServiceService_IGetOperations extends grpc.MethodDefinition<operations_pb.OperationsRequest, operations_pb.OperationsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OperationsService/GetOperations";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.OperationsRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.OperationsRequest>;
    responseSerialize: grpc.serialize<operations_pb.OperationsResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.OperationsResponse>;
}
interface IOperationsServiceService_IGetPortfolio extends grpc.MethodDefinition<operations_pb.PortfolioRequest, operations_pb.PortfolioResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OperationsService/GetPortfolio";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.PortfolioRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.PortfolioRequest>;
    responseSerialize: grpc.serialize<operations_pb.PortfolioResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.PortfolioResponse>;
}
interface IOperationsServiceService_IGetPositions extends grpc.MethodDefinition<operations_pb.PositionsRequest, operations_pb.PositionsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OperationsService/GetPositions";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.PositionsRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.PositionsRequest>;
    responseSerialize: grpc.serialize<operations_pb.PositionsResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.PositionsResponse>;
}
interface IOperationsServiceService_IGetWithdrawLimits extends grpc.MethodDefinition<operations_pb.WithdrawLimitsRequest, operations_pb.WithdrawLimitsResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OperationsService/GetWithdrawLimits";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.WithdrawLimitsRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.WithdrawLimitsRequest>;
    responseSerialize: grpc.serialize<operations_pb.WithdrawLimitsResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.WithdrawLimitsResponse>;
}
interface IOperationsServiceService_IGetBrokerReport extends grpc.MethodDefinition<operations_pb.BrokerReportRequest, operations_pb.BrokerReportResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OperationsService/GetBrokerReport";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.BrokerReportRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.BrokerReportRequest>;
    responseSerialize: grpc.serialize<operations_pb.BrokerReportResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.BrokerReportResponse>;
}
interface IOperationsServiceService_IGetDividendsForeignIssuer extends grpc.MethodDefinition<operations_pb.GetDividendsForeignIssuerRequest, operations_pb.GetDividendsForeignIssuerResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OperationsService/GetDividendsForeignIssuer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.GetDividendsForeignIssuerRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.GetDividendsForeignIssuerRequest>;
    responseSerialize: grpc.serialize<operations_pb.GetDividendsForeignIssuerResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.GetDividendsForeignIssuerResponse>;
}
interface IOperationsServiceService_IGetOperationsByCursor extends grpc.MethodDefinition<operations_pb.GetOperationsByCursorRequest, operations_pb.GetOperationsByCursorResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OperationsService/GetOperationsByCursor";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<operations_pb.GetOperationsByCursorRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.GetOperationsByCursorRequest>;
    responseSerialize: grpc.serialize<operations_pb.GetOperationsByCursorResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.GetOperationsByCursorResponse>;
}

export const OperationsServiceService: IOperationsServiceService;

export interface IOperationsServiceServer {
    getOperations: grpc.handleUnaryCall<operations_pb.OperationsRequest, operations_pb.OperationsResponse>;
    getPortfolio: grpc.handleUnaryCall<operations_pb.PortfolioRequest, operations_pb.PortfolioResponse>;
    getPositions: grpc.handleUnaryCall<operations_pb.PositionsRequest, operations_pb.PositionsResponse>;
    getWithdrawLimits: grpc.handleUnaryCall<operations_pb.WithdrawLimitsRequest, operations_pb.WithdrawLimitsResponse>;
    getBrokerReport: grpc.handleUnaryCall<operations_pb.BrokerReportRequest, operations_pb.BrokerReportResponse>;
    getDividendsForeignIssuer: grpc.handleUnaryCall<operations_pb.GetDividendsForeignIssuerRequest, operations_pb.GetDividendsForeignIssuerResponse>;
    getOperationsByCursor: grpc.handleUnaryCall<operations_pb.GetOperationsByCursorRequest, operations_pb.GetOperationsByCursorResponse>;
}

export interface IOperationsServiceClient {
    getOperations(request: operations_pb.OperationsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    getOperations(request: operations_pb.OperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    getOperations(request: operations_pb.OperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    getPortfolio(request: operations_pb.PortfolioRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    getPortfolio(request: operations_pb.PortfolioRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    getPortfolio(request: operations_pb.PortfolioRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    getPositions(request: operations_pb.PositionsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    getPositions(request: operations_pb.PositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    getPositions(request: operations_pb.PositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    getWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    getWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    getWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    getBrokerReport(request: operations_pb.BrokerReportRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.BrokerReportResponse) => void): grpc.ClientUnaryCall;
    getBrokerReport(request: operations_pb.BrokerReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.BrokerReportResponse) => void): grpc.ClientUnaryCall;
    getBrokerReport(request: operations_pb.BrokerReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.BrokerReportResponse) => void): grpc.ClientUnaryCall;
    getDividendsForeignIssuer(request: operations_pb.GetDividendsForeignIssuerRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.GetDividendsForeignIssuerResponse) => void): grpc.ClientUnaryCall;
    getDividendsForeignIssuer(request: operations_pb.GetDividendsForeignIssuerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.GetDividendsForeignIssuerResponse) => void): grpc.ClientUnaryCall;
    getDividendsForeignIssuer(request: operations_pb.GetDividendsForeignIssuerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.GetDividendsForeignIssuerResponse) => void): grpc.ClientUnaryCall;
    getOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
    getOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
    getOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
}

export class OperationsServiceClient extends grpc.Client implements IOperationsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getOperations(request: operations_pb.OperationsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public getOperations(request: operations_pb.OperationsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public getOperations(request: operations_pb.OperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.OperationsResponse) => void): grpc.ClientUnaryCall;
    public getPortfolio(request: operations_pb.PortfolioRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    public getPortfolio(request: operations_pb.PortfolioRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    public getPortfolio(request: operations_pb.PortfolioRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.PortfolioResponse) => void): grpc.ClientUnaryCall;
    public getPositions(request: operations_pb.PositionsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    public getPositions(request: operations_pb.PositionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    public getPositions(request: operations_pb.PositionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.PositionsResponse) => void): grpc.ClientUnaryCall;
    public getWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    public getWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    public getWithdrawLimits(request: operations_pb.WithdrawLimitsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.WithdrawLimitsResponse) => void): grpc.ClientUnaryCall;
    public getBrokerReport(request: operations_pb.BrokerReportRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.BrokerReportResponse) => void): grpc.ClientUnaryCall;
    public getBrokerReport(request: operations_pb.BrokerReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.BrokerReportResponse) => void): grpc.ClientUnaryCall;
    public getBrokerReport(request: operations_pb.BrokerReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.BrokerReportResponse) => void): grpc.ClientUnaryCall;
    public getDividendsForeignIssuer(request: operations_pb.GetDividendsForeignIssuerRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.GetDividendsForeignIssuerResponse) => void): grpc.ClientUnaryCall;
    public getDividendsForeignIssuer(request: operations_pb.GetDividendsForeignIssuerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.GetDividendsForeignIssuerResponse) => void): grpc.ClientUnaryCall;
    public getDividendsForeignIssuer(request: operations_pb.GetDividendsForeignIssuerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.GetDividendsForeignIssuerResponse) => void): grpc.ClientUnaryCall;
    public getOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
    public getOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
    public getOperationsByCursor(request: operations_pb.GetOperationsByCursorRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: operations_pb.GetOperationsByCursorResponse) => void): grpc.ClientUnaryCall;
}

interface IOperationsStreamServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    portfolioStream: IOperationsStreamServiceService_IPortfolioStream;
    positionsStream: IOperationsStreamServiceService_IPositionsStream;
}

interface IOperationsStreamServiceService_IPortfolioStream extends grpc.MethodDefinition<operations_pb.PortfolioStreamRequest, operations_pb.PortfolioStreamResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PortfolioStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<operations_pb.PortfolioStreamRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.PortfolioStreamRequest>;
    responseSerialize: grpc.serialize<operations_pb.PortfolioStreamResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.PortfolioStreamResponse>;
}
interface IOperationsStreamServiceService_IPositionsStream extends grpc.MethodDefinition<operations_pb.PositionsStreamRequest, operations_pb.PositionsStreamResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.OperationsStreamService/PositionsStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<operations_pb.PositionsStreamRequest>;
    requestDeserialize: grpc.deserialize<operations_pb.PositionsStreamRequest>;
    responseSerialize: grpc.serialize<operations_pb.PositionsStreamResponse>;
    responseDeserialize: grpc.deserialize<operations_pb.PositionsStreamResponse>;
}

export const OperationsStreamServiceService: IOperationsStreamServiceService;

export interface IOperationsStreamServiceServer {
    portfolioStream: grpc.handleServerStreamingCall<operations_pb.PortfolioStreamRequest, operations_pb.PortfolioStreamResponse>;
    positionsStream: grpc.handleServerStreamingCall<operations_pb.PositionsStreamRequest, operations_pb.PositionsStreamResponse>;
}

export interface IOperationsStreamServiceClient {
    portfolioStream(request: operations_pb.PortfolioStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<operations_pb.PortfolioStreamResponse>;
    portfolioStream(request: operations_pb.PortfolioStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<operations_pb.PortfolioStreamResponse>;
    positionsStream(request: operations_pb.PositionsStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<operations_pb.PositionsStreamResponse>;
    positionsStream(request: operations_pb.PositionsStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<operations_pb.PositionsStreamResponse>;
}

export class OperationsStreamServiceClient extends grpc.Client implements IOperationsStreamServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public portfolioStream(request: operations_pb.PortfolioStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<operations_pb.PortfolioStreamResponse>;
    public portfolioStream(request: operations_pb.PortfolioStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<operations_pb.PortfolioStreamResponse>;
    public positionsStream(request: operations_pb.PositionsStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<operations_pb.PositionsStreamResponse>;
    public positionsStream(request: operations_pb.PositionsStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<operations_pb.PositionsStreamResponse>;
}
