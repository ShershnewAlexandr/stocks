// package: tinkoff.public.invest.api.contract.v1
// file: marketdata.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as marketdata_pb from "./marketdata_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";

interface IMarketDataServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getCandles: IMarketDataServiceService_IGetCandles;
    getLastPrices: IMarketDataServiceService_IGetLastPrices;
    getOrderBook: IMarketDataServiceService_IGetOrderBook;
    getTradingStatus: IMarketDataServiceService_IGetTradingStatus;
    getTradingStatuses: IMarketDataServiceService_IGetTradingStatuses;
    getLastTrades: IMarketDataServiceService_IGetLastTrades;
    getClosePrices: IMarketDataServiceService_IGetClosePrices;
    getTechAnalysis: IMarketDataServiceService_IGetTechAnalysis;
}

interface IMarketDataServiceService_IGetCandles extends grpc.MethodDefinition<marketdata_pb.GetCandlesRequest, marketdata_pb.GetCandlesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.MarketDataService/GetCandles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<marketdata_pb.GetCandlesRequest>;
    requestDeserialize: grpc.deserialize<marketdata_pb.GetCandlesRequest>;
    responseSerialize: grpc.serialize<marketdata_pb.GetCandlesResponse>;
    responseDeserialize: grpc.deserialize<marketdata_pb.GetCandlesResponse>;
}
interface IMarketDataServiceService_IGetLastPrices extends grpc.MethodDefinition<marketdata_pb.GetLastPricesRequest, marketdata_pb.GetLastPricesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.MarketDataService/GetLastPrices";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<marketdata_pb.GetLastPricesRequest>;
    requestDeserialize: grpc.deserialize<marketdata_pb.GetLastPricesRequest>;
    responseSerialize: grpc.serialize<marketdata_pb.GetLastPricesResponse>;
    responseDeserialize: grpc.deserialize<marketdata_pb.GetLastPricesResponse>;
}
interface IMarketDataServiceService_IGetOrderBook extends grpc.MethodDefinition<marketdata_pb.GetOrderBookRequest, marketdata_pb.GetOrderBookResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.MarketDataService/GetOrderBook";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<marketdata_pb.GetOrderBookRequest>;
    requestDeserialize: grpc.deserialize<marketdata_pb.GetOrderBookRequest>;
    responseSerialize: grpc.serialize<marketdata_pb.GetOrderBookResponse>;
    responseDeserialize: grpc.deserialize<marketdata_pb.GetOrderBookResponse>;
}
interface IMarketDataServiceService_IGetTradingStatus extends grpc.MethodDefinition<marketdata_pb.GetTradingStatusRequest, marketdata_pb.GetTradingStatusResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.MarketDataService/GetTradingStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<marketdata_pb.GetTradingStatusRequest>;
    requestDeserialize: grpc.deserialize<marketdata_pb.GetTradingStatusRequest>;
    responseSerialize: grpc.serialize<marketdata_pb.GetTradingStatusResponse>;
    responseDeserialize: grpc.deserialize<marketdata_pb.GetTradingStatusResponse>;
}
interface IMarketDataServiceService_IGetTradingStatuses extends grpc.MethodDefinition<marketdata_pb.GetTradingStatusesRequest, marketdata_pb.GetTradingStatusesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.MarketDataService/GetTradingStatuses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<marketdata_pb.GetTradingStatusesRequest>;
    requestDeserialize: grpc.deserialize<marketdata_pb.GetTradingStatusesRequest>;
    responseSerialize: grpc.serialize<marketdata_pb.GetTradingStatusesResponse>;
    responseDeserialize: grpc.deserialize<marketdata_pb.GetTradingStatusesResponse>;
}
interface IMarketDataServiceService_IGetLastTrades extends grpc.MethodDefinition<marketdata_pb.GetLastTradesRequest, marketdata_pb.GetLastTradesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.MarketDataService/GetLastTrades";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<marketdata_pb.GetLastTradesRequest>;
    requestDeserialize: grpc.deserialize<marketdata_pb.GetLastTradesRequest>;
    responseSerialize: grpc.serialize<marketdata_pb.GetLastTradesResponse>;
    responseDeserialize: grpc.deserialize<marketdata_pb.GetLastTradesResponse>;
}
interface IMarketDataServiceService_IGetClosePrices extends grpc.MethodDefinition<marketdata_pb.GetClosePricesRequest, marketdata_pb.GetClosePricesResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.MarketDataService/GetClosePrices";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<marketdata_pb.GetClosePricesRequest>;
    requestDeserialize: grpc.deserialize<marketdata_pb.GetClosePricesRequest>;
    responseSerialize: grpc.serialize<marketdata_pb.GetClosePricesResponse>;
    responseDeserialize: grpc.deserialize<marketdata_pb.GetClosePricesResponse>;
}
interface IMarketDataServiceService_IGetTechAnalysis extends grpc.MethodDefinition<marketdata_pb.GetTechAnalysisRequest, marketdata_pb.GetTechAnalysisResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.MarketDataService/GetTechAnalysis";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<marketdata_pb.GetTechAnalysisRequest>;
    requestDeserialize: grpc.deserialize<marketdata_pb.GetTechAnalysisRequest>;
    responseSerialize: grpc.serialize<marketdata_pb.GetTechAnalysisResponse>;
    responseDeserialize: grpc.deserialize<marketdata_pb.GetTechAnalysisResponse>;
}

export const MarketDataServiceService: IMarketDataServiceService;

export interface IMarketDataServiceServer {
    getCandles: grpc.handleUnaryCall<marketdata_pb.GetCandlesRequest, marketdata_pb.GetCandlesResponse>;
    getLastPrices: grpc.handleUnaryCall<marketdata_pb.GetLastPricesRequest, marketdata_pb.GetLastPricesResponse>;
    getOrderBook: grpc.handleUnaryCall<marketdata_pb.GetOrderBookRequest, marketdata_pb.GetOrderBookResponse>;
    getTradingStatus: grpc.handleUnaryCall<marketdata_pb.GetTradingStatusRequest, marketdata_pb.GetTradingStatusResponse>;
    getTradingStatuses: grpc.handleUnaryCall<marketdata_pb.GetTradingStatusesRequest, marketdata_pb.GetTradingStatusesResponse>;
    getLastTrades: grpc.handleUnaryCall<marketdata_pb.GetLastTradesRequest, marketdata_pb.GetLastTradesResponse>;
    getClosePrices: grpc.handleUnaryCall<marketdata_pb.GetClosePricesRequest, marketdata_pb.GetClosePricesResponse>;
    getTechAnalysis: grpc.handleUnaryCall<marketdata_pb.GetTechAnalysisRequest, marketdata_pb.GetTechAnalysisResponse>;
}

export interface IMarketDataServiceClient {
    getCandles(request: marketdata_pb.GetCandlesRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetCandlesResponse) => void): grpc.ClientUnaryCall;
    getCandles(request: marketdata_pb.GetCandlesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetCandlesResponse) => void): grpc.ClientUnaryCall;
    getCandles(request: marketdata_pb.GetCandlesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetCandlesResponse) => void): grpc.ClientUnaryCall;
    getLastPrices(request: marketdata_pb.GetLastPricesRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastPricesResponse) => void): grpc.ClientUnaryCall;
    getLastPrices(request: marketdata_pb.GetLastPricesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastPricesResponse) => void): grpc.ClientUnaryCall;
    getLastPrices(request: marketdata_pb.GetLastPricesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastPricesResponse) => void): grpc.ClientUnaryCall;
    getOrderBook(request: marketdata_pb.GetOrderBookRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetOrderBookResponse) => void): grpc.ClientUnaryCall;
    getOrderBook(request: marketdata_pb.GetOrderBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetOrderBookResponse) => void): grpc.ClientUnaryCall;
    getOrderBook(request: marketdata_pb.GetOrderBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetOrderBookResponse) => void): grpc.ClientUnaryCall;
    getTradingStatus(request: marketdata_pb.GetTradingStatusRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusResponse) => void): grpc.ClientUnaryCall;
    getTradingStatus(request: marketdata_pb.GetTradingStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusResponse) => void): grpc.ClientUnaryCall;
    getTradingStatus(request: marketdata_pb.GetTradingStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusResponse) => void): grpc.ClientUnaryCall;
    getTradingStatuses(request: marketdata_pb.GetTradingStatusesRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusesResponse) => void): grpc.ClientUnaryCall;
    getTradingStatuses(request: marketdata_pb.GetTradingStatusesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusesResponse) => void): grpc.ClientUnaryCall;
    getTradingStatuses(request: marketdata_pb.GetTradingStatusesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusesResponse) => void): grpc.ClientUnaryCall;
    getLastTrades(request: marketdata_pb.GetLastTradesRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastTradesResponse) => void): grpc.ClientUnaryCall;
    getLastTrades(request: marketdata_pb.GetLastTradesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastTradesResponse) => void): grpc.ClientUnaryCall;
    getLastTrades(request: marketdata_pb.GetLastTradesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastTradesResponse) => void): grpc.ClientUnaryCall;
    getClosePrices(request: marketdata_pb.GetClosePricesRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetClosePricesResponse) => void): grpc.ClientUnaryCall;
    getClosePrices(request: marketdata_pb.GetClosePricesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetClosePricesResponse) => void): grpc.ClientUnaryCall;
    getClosePrices(request: marketdata_pb.GetClosePricesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetClosePricesResponse) => void): grpc.ClientUnaryCall;
    getTechAnalysis(request: marketdata_pb.GetTechAnalysisRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTechAnalysisResponse) => void): grpc.ClientUnaryCall;
    getTechAnalysis(request: marketdata_pb.GetTechAnalysisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTechAnalysisResponse) => void): grpc.ClientUnaryCall;
    getTechAnalysis(request: marketdata_pb.GetTechAnalysisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTechAnalysisResponse) => void): grpc.ClientUnaryCall;
}

export class MarketDataServiceClient extends grpc.Client implements IMarketDataServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getCandles(request: marketdata_pb.GetCandlesRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetCandlesResponse) => void): grpc.ClientUnaryCall;
    public getCandles(request: marketdata_pb.GetCandlesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetCandlesResponse) => void): grpc.ClientUnaryCall;
    public getCandles(request: marketdata_pb.GetCandlesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetCandlesResponse) => void): grpc.ClientUnaryCall;
    public getLastPrices(request: marketdata_pb.GetLastPricesRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastPricesResponse) => void): grpc.ClientUnaryCall;
    public getLastPrices(request: marketdata_pb.GetLastPricesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastPricesResponse) => void): grpc.ClientUnaryCall;
    public getLastPrices(request: marketdata_pb.GetLastPricesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastPricesResponse) => void): grpc.ClientUnaryCall;
    public getOrderBook(request: marketdata_pb.GetOrderBookRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetOrderBookResponse) => void): grpc.ClientUnaryCall;
    public getOrderBook(request: marketdata_pb.GetOrderBookRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetOrderBookResponse) => void): grpc.ClientUnaryCall;
    public getOrderBook(request: marketdata_pb.GetOrderBookRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetOrderBookResponse) => void): grpc.ClientUnaryCall;
    public getTradingStatus(request: marketdata_pb.GetTradingStatusRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusResponse) => void): grpc.ClientUnaryCall;
    public getTradingStatus(request: marketdata_pb.GetTradingStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusResponse) => void): grpc.ClientUnaryCall;
    public getTradingStatus(request: marketdata_pb.GetTradingStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusResponse) => void): grpc.ClientUnaryCall;
    public getTradingStatuses(request: marketdata_pb.GetTradingStatusesRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusesResponse) => void): grpc.ClientUnaryCall;
    public getTradingStatuses(request: marketdata_pb.GetTradingStatusesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusesResponse) => void): grpc.ClientUnaryCall;
    public getTradingStatuses(request: marketdata_pb.GetTradingStatusesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTradingStatusesResponse) => void): grpc.ClientUnaryCall;
    public getLastTrades(request: marketdata_pb.GetLastTradesRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastTradesResponse) => void): grpc.ClientUnaryCall;
    public getLastTrades(request: marketdata_pb.GetLastTradesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastTradesResponse) => void): grpc.ClientUnaryCall;
    public getLastTrades(request: marketdata_pb.GetLastTradesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetLastTradesResponse) => void): grpc.ClientUnaryCall;
    public getClosePrices(request: marketdata_pb.GetClosePricesRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetClosePricesResponse) => void): grpc.ClientUnaryCall;
    public getClosePrices(request: marketdata_pb.GetClosePricesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetClosePricesResponse) => void): grpc.ClientUnaryCall;
    public getClosePrices(request: marketdata_pb.GetClosePricesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetClosePricesResponse) => void): grpc.ClientUnaryCall;
    public getTechAnalysis(request: marketdata_pb.GetTechAnalysisRequest, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTechAnalysisResponse) => void): grpc.ClientUnaryCall;
    public getTechAnalysis(request: marketdata_pb.GetTechAnalysisRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTechAnalysisResponse) => void): grpc.ClientUnaryCall;
    public getTechAnalysis(request: marketdata_pb.GetTechAnalysisRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: marketdata_pb.GetTechAnalysisResponse) => void): grpc.ClientUnaryCall;
}

interface IMarketDataStreamServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    marketDataStream: IMarketDataStreamServiceService_IMarketDataStream;
    marketDataServerSideStream: IMarketDataStreamServiceService_IMarketDataServerSideStream;
}

interface IMarketDataStreamServiceService_IMarketDataStream extends grpc.MethodDefinition<marketdata_pb.MarketDataRequest, marketdata_pb.MarketDataResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<marketdata_pb.MarketDataRequest>;
    requestDeserialize: grpc.deserialize<marketdata_pb.MarketDataRequest>;
    responseSerialize: grpc.serialize<marketdata_pb.MarketDataResponse>;
    responseDeserialize: grpc.deserialize<marketdata_pb.MarketDataResponse>;
}
interface IMarketDataStreamServiceService_IMarketDataServerSideStream extends grpc.MethodDefinition<marketdata_pb.MarketDataServerSideStreamRequest, marketdata_pb.MarketDataResponse> {
    path: "/tinkoff.public.invest.api.contract.v1.MarketDataStreamService/MarketDataServerSideStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<marketdata_pb.MarketDataServerSideStreamRequest>;
    requestDeserialize: grpc.deserialize<marketdata_pb.MarketDataServerSideStreamRequest>;
    responseSerialize: grpc.serialize<marketdata_pb.MarketDataResponse>;
    responseDeserialize: grpc.deserialize<marketdata_pb.MarketDataResponse>;
}

export const MarketDataStreamServiceService: IMarketDataStreamServiceService;

export interface IMarketDataStreamServiceServer {
    marketDataStream: grpc.handleBidiStreamingCall<marketdata_pb.MarketDataRequest, marketdata_pb.MarketDataResponse>;
    marketDataServerSideStream: grpc.handleServerStreamingCall<marketdata_pb.MarketDataServerSideStreamRequest, marketdata_pb.MarketDataResponse>;
}

export interface IMarketDataStreamServiceClient {
    marketDataStream(): grpc.ClientDuplexStream<marketdata_pb.MarketDataRequest, marketdata_pb.MarketDataResponse>;
    marketDataStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<marketdata_pb.MarketDataRequest, marketdata_pb.MarketDataResponse>;
    marketDataStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<marketdata_pb.MarketDataRequest, marketdata_pb.MarketDataResponse>;
    marketDataServerSideStream(request: marketdata_pb.MarketDataServerSideStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<marketdata_pb.MarketDataResponse>;
    marketDataServerSideStream(request: marketdata_pb.MarketDataServerSideStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<marketdata_pb.MarketDataResponse>;
}

export class MarketDataStreamServiceClient extends grpc.Client implements IMarketDataStreamServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public marketDataStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<marketdata_pb.MarketDataRequest, marketdata_pb.MarketDataResponse>;
    public marketDataStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<marketdata_pb.MarketDataRequest, marketdata_pb.MarketDataResponse>;
    public marketDataServerSideStream(request: marketdata_pb.MarketDataServerSideStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<marketdata_pb.MarketDataResponse>;
    public marketDataServerSideStream(request: marketdata_pb.MarketDataServerSideStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<marketdata_pb.MarketDataResponse>;
}
