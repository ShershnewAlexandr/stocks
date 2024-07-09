// package: tinkoff.public.invest.api.contract.v1
// file: marketdata.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";

export class MarketDataRequest extends jspb.Message { 

    hasSubscribeCandlesRequest(): boolean;
    clearSubscribeCandlesRequest(): void;
    getSubscribeCandlesRequest(): SubscribeCandlesRequest | undefined;
    setSubscribeCandlesRequest(value?: SubscribeCandlesRequest): MarketDataRequest;

    hasSubscribeOrderBookRequest(): boolean;
    clearSubscribeOrderBookRequest(): void;
    getSubscribeOrderBookRequest(): SubscribeOrderBookRequest | undefined;
    setSubscribeOrderBookRequest(value?: SubscribeOrderBookRequest): MarketDataRequest;

    hasSubscribeTradesRequest(): boolean;
    clearSubscribeTradesRequest(): void;
    getSubscribeTradesRequest(): SubscribeTradesRequest | undefined;
    setSubscribeTradesRequest(value?: SubscribeTradesRequest): MarketDataRequest;

    hasSubscribeInfoRequest(): boolean;
    clearSubscribeInfoRequest(): void;
    getSubscribeInfoRequest(): SubscribeInfoRequest | undefined;
    setSubscribeInfoRequest(value?: SubscribeInfoRequest): MarketDataRequest;

    hasSubscribeLastPriceRequest(): boolean;
    clearSubscribeLastPriceRequest(): void;
    getSubscribeLastPriceRequest(): SubscribeLastPriceRequest | undefined;
    setSubscribeLastPriceRequest(value?: SubscribeLastPriceRequest): MarketDataRequest;

    hasGetMySubscriptions(): boolean;
    clearGetMySubscriptions(): void;
    getGetMySubscriptions(): GetMySubscriptions | undefined;
    setGetMySubscriptions(value?: GetMySubscriptions): MarketDataRequest;

    getPayloadCase(): MarketDataRequest.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDataRequest): MarketDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDataRequest;
    static deserializeBinaryFromReader(message: MarketDataRequest, reader: jspb.BinaryReader): MarketDataRequest;
}

export namespace MarketDataRequest {
    export type AsObject = {
        subscribeCandlesRequest?: SubscribeCandlesRequest.AsObject,
        subscribeOrderBookRequest?: SubscribeOrderBookRequest.AsObject,
        subscribeTradesRequest?: SubscribeTradesRequest.AsObject,
        subscribeInfoRequest?: SubscribeInfoRequest.AsObject,
        subscribeLastPriceRequest?: SubscribeLastPriceRequest.AsObject,
        getMySubscriptions?: GetMySubscriptions.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        SUBSCRIBE_CANDLES_REQUEST = 1,
        SUBSCRIBE_ORDER_BOOK_REQUEST = 2,
        SUBSCRIBE_TRADES_REQUEST = 3,
        SUBSCRIBE_INFO_REQUEST = 4,
        SUBSCRIBE_LAST_PRICE_REQUEST = 5,
        GET_MY_SUBSCRIPTIONS = 6,
    }

}

export class MarketDataServerSideStreamRequest extends jspb.Message { 

    hasSubscribeCandlesRequest(): boolean;
    clearSubscribeCandlesRequest(): void;
    getSubscribeCandlesRequest(): SubscribeCandlesRequest | undefined;
    setSubscribeCandlesRequest(value?: SubscribeCandlesRequest): MarketDataServerSideStreamRequest;

    hasSubscribeOrderBookRequest(): boolean;
    clearSubscribeOrderBookRequest(): void;
    getSubscribeOrderBookRequest(): SubscribeOrderBookRequest | undefined;
    setSubscribeOrderBookRequest(value?: SubscribeOrderBookRequest): MarketDataServerSideStreamRequest;

    hasSubscribeTradesRequest(): boolean;
    clearSubscribeTradesRequest(): void;
    getSubscribeTradesRequest(): SubscribeTradesRequest | undefined;
    setSubscribeTradesRequest(value?: SubscribeTradesRequest): MarketDataServerSideStreamRequest;

    hasSubscribeInfoRequest(): boolean;
    clearSubscribeInfoRequest(): void;
    getSubscribeInfoRequest(): SubscribeInfoRequest | undefined;
    setSubscribeInfoRequest(value?: SubscribeInfoRequest): MarketDataServerSideStreamRequest;

    hasSubscribeLastPriceRequest(): boolean;
    clearSubscribeLastPriceRequest(): void;
    getSubscribeLastPriceRequest(): SubscribeLastPriceRequest | undefined;
    setSubscribeLastPriceRequest(value?: SubscribeLastPriceRequest): MarketDataServerSideStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDataServerSideStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDataServerSideStreamRequest): MarketDataServerSideStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDataServerSideStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDataServerSideStreamRequest;
    static deserializeBinaryFromReader(message: MarketDataServerSideStreamRequest, reader: jspb.BinaryReader): MarketDataServerSideStreamRequest;
}

export namespace MarketDataServerSideStreamRequest {
    export type AsObject = {
        subscribeCandlesRequest?: SubscribeCandlesRequest.AsObject,
        subscribeOrderBookRequest?: SubscribeOrderBookRequest.AsObject,
        subscribeTradesRequest?: SubscribeTradesRequest.AsObject,
        subscribeInfoRequest?: SubscribeInfoRequest.AsObject,
        subscribeLastPriceRequest?: SubscribeLastPriceRequest.AsObject,
    }
}

export class MarketDataResponse extends jspb.Message { 

    hasSubscribeCandlesResponse(): boolean;
    clearSubscribeCandlesResponse(): void;
    getSubscribeCandlesResponse(): SubscribeCandlesResponse | undefined;
    setSubscribeCandlesResponse(value?: SubscribeCandlesResponse): MarketDataResponse;

    hasSubscribeOrderBookResponse(): boolean;
    clearSubscribeOrderBookResponse(): void;
    getSubscribeOrderBookResponse(): SubscribeOrderBookResponse | undefined;
    setSubscribeOrderBookResponse(value?: SubscribeOrderBookResponse): MarketDataResponse;

    hasSubscribeTradesResponse(): boolean;
    clearSubscribeTradesResponse(): void;
    getSubscribeTradesResponse(): SubscribeTradesResponse | undefined;
    setSubscribeTradesResponse(value?: SubscribeTradesResponse): MarketDataResponse;

    hasSubscribeInfoResponse(): boolean;
    clearSubscribeInfoResponse(): void;
    getSubscribeInfoResponse(): SubscribeInfoResponse | undefined;
    setSubscribeInfoResponse(value?: SubscribeInfoResponse): MarketDataResponse;

    hasCandle(): boolean;
    clearCandle(): void;
    getCandle(): Candle | undefined;
    setCandle(value?: Candle): MarketDataResponse;

    hasTrade(): boolean;
    clearTrade(): void;
    getTrade(): Trade | undefined;
    setTrade(value?: Trade): MarketDataResponse;

    hasOrderbook(): boolean;
    clearOrderbook(): void;
    getOrderbook(): OrderBook | undefined;
    setOrderbook(value?: OrderBook): MarketDataResponse;

    hasTradingStatus(): boolean;
    clearTradingStatus(): void;
    getTradingStatus(): TradingStatus | undefined;
    setTradingStatus(value?: TradingStatus): MarketDataResponse;

    hasPing(): boolean;
    clearPing(): void;
    getPing(): common_pb.Ping | undefined;
    setPing(value?: common_pb.Ping): MarketDataResponse;

    hasSubscribeLastPriceResponse(): boolean;
    clearSubscribeLastPriceResponse(): void;
    getSubscribeLastPriceResponse(): SubscribeLastPriceResponse | undefined;
    setSubscribeLastPriceResponse(value?: SubscribeLastPriceResponse): MarketDataResponse;

    hasLastPrice(): boolean;
    clearLastPrice(): void;
    getLastPrice(): LastPrice | undefined;
    setLastPrice(value?: LastPrice): MarketDataResponse;

    getPayloadCase(): MarketDataResponse.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MarketDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MarketDataResponse): MarketDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MarketDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MarketDataResponse;
    static deserializeBinaryFromReader(message: MarketDataResponse, reader: jspb.BinaryReader): MarketDataResponse;
}

export namespace MarketDataResponse {
    export type AsObject = {
        subscribeCandlesResponse?: SubscribeCandlesResponse.AsObject,
        subscribeOrderBookResponse?: SubscribeOrderBookResponse.AsObject,
        subscribeTradesResponse?: SubscribeTradesResponse.AsObject,
        subscribeInfoResponse?: SubscribeInfoResponse.AsObject,
        candle?: Candle.AsObject,
        trade?: Trade.AsObject,
        orderbook?: OrderBook.AsObject,
        tradingStatus?: TradingStatus.AsObject,
        ping?: common_pb.Ping.AsObject,
        subscribeLastPriceResponse?: SubscribeLastPriceResponse.AsObject,
        lastPrice?: LastPrice.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        SUBSCRIBE_CANDLES_RESPONSE = 1,
        SUBSCRIBE_ORDER_BOOK_RESPONSE = 2,
        SUBSCRIBE_TRADES_RESPONSE = 3,
        SUBSCRIBE_INFO_RESPONSE = 4,
        CANDLE = 5,
        TRADE = 6,
        ORDERBOOK = 7,
        TRADING_STATUS = 8,
        PING = 9,
        SUBSCRIBE_LAST_PRICE_RESPONSE = 10,
        LAST_PRICE = 11,
    }

}

export class SubscribeCandlesRequest extends jspb.Message { 
    getSubscriptionAction(): SubscriptionAction;
    setSubscriptionAction(value: SubscriptionAction): SubscribeCandlesRequest;
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<CandleInstrument>;
    setInstrumentsList(value: Array<CandleInstrument>): SubscribeCandlesRequest;
    addInstruments(value?: CandleInstrument, index?: number): CandleInstrument;
    getWaitingClose(): boolean;
    setWaitingClose(value: boolean): SubscribeCandlesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeCandlesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeCandlesRequest): SubscribeCandlesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeCandlesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeCandlesRequest;
    static deserializeBinaryFromReader(message: SubscribeCandlesRequest, reader: jspb.BinaryReader): SubscribeCandlesRequest;
}

export namespace SubscribeCandlesRequest {
    export type AsObject = {
        subscriptionAction: SubscriptionAction,
        instrumentsList: Array<CandleInstrument.AsObject>,
        waitingClose: boolean,
    }
}

export class CandleInstrument extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): CandleInstrument;
    getInterval(): SubscriptionInterval;
    setInterval(value: SubscriptionInterval): CandleInstrument;
    getInstrumentId(): string;
    setInstrumentId(value: string): CandleInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandleInstrument.AsObject;
    static toObject(includeInstance: boolean, msg: CandleInstrument): CandleInstrument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CandleInstrument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandleInstrument;
    static deserializeBinaryFromReader(message: CandleInstrument, reader: jspb.BinaryReader): CandleInstrument;
}

export namespace CandleInstrument {
    export type AsObject = {
        figi: string,
        interval: SubscriptionInterval,
        instrumentId: string,
    }
}

export class SubscribeCandlesResponse extends jspb.Message { 
    getTrackingId(): string;
    setTrackingId(value: string): SubscribeCandlesResponse;
    clearCandlesSubscriptionsList(): void;
    getCandlesSubscriptionsList(): Array<CandleSubscription>;
    setCandlesSubscriptionsList(value: Array<CandleSubscription>): SubscribeCandlesResponse;
    addCandlesSubscriptions(value?: CandleSubscription, index?: number): CandleSubscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeCandlesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeCandlesResponse): SubscribeCandlesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeCandlesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeCandlesResponse;
    static deserializeBinaryFromReader(message: SubscribeCandlesResponse, reader: jspb.BinaryReader): SubscribeCandlesResponse;
}

export namespace SubscribeCandlesResponse {
    export type AsObject = {
        trackingId: string,
        candlesSubscriptionsList: Array<CandleSubscription.AsObject>,
    }
}

export class CandleSubscription extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): CandleSubscription;
    getInterval(): SubscriptionInterval;
    setInterval(value: SubscriptionInterval): CandleSubscription;
    getSubscriptionStatus(): SubscriptionStatus;
    setSubscriptionStatus(value: SubscriptionStatus): CandleSubscription;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): CandleSubscription;
    getWaitingClose(): boolean;
    setWaitingClose(value: boolean): CandleSubscription;
    getStreamId(): string;
    setStreamId(value: string): CandleSubscription;
    getSubscriptionId(): string;
    setSubscriptionId(value: string): CandleSubscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CandleSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: CandleSubscription): CandleSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CandleSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CandleSubscription;
    static deserializeBinaryFromReader(message: CandleSubscription, reader: jspb.BinaryReader): CandleSubscription;
}

export namespace CandleSubscription {
    export type AsObject = {
        figi: string,
        interval: SubscriptionInterval,
        subscriptionStatus: SubscriptionStatus,
        instrumentUid: string,
        waitingClose: boolean,
        streamId: string,
        subscriptionId: string,
    }
}

export class SubscribeOrderBookRequest extends jspb.Message { 
    getSubscriptionAction(): SubscriptionAction;
    setSubscriptionAction(value: SubscriptionAction): SubscribeOrderBookRequest;
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<OrderBookInstrument>;
    setInstrumentsList(value: Array<OrderBookInstrument>): SubscribeOrderBookRequest;
    addInstruments(value?: OrderBookInstrument, index?: number): OrderBookInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeOrderBookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeOrderBookRequest): SubscribeOrderBookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeOrderBookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeOrderBookRequest;
    static deserializeBinaryFromReader(message: SubscribeOrderBookRequest, reader: jspb.BinaryReader): SubscribeOrderBookRequest;
}

export namespace SubscribeOrderBookRequest {
    export type AsObject = {
        subscriptionAction: SubscriptionAction,
        instrumentsList: Array<OrderBookInstrument.AsObject>,
    }
}

export class OrderBookInstrument extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): OrderBookInstrument;
    getDepth(): number;
    setDepth(value: number): OrderBookInstrument;
    getInstrumentId(): string;
    setInstrumentId(value: string): OrderBookInstrument;
    getOrderBookType(): OrderBookType;
    setOrderBookType(value: OrderBookType): OrderBookInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderBookInstrument.AsObject;
    static toObject(includeInstance: boolean, msg: OrderBookInstrument): OrderBookInstrument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderBookInstrument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderBookInstrument;
    static deserializeBinaryFromReader(message: OrderBookInstrument, reader: jspb.BinaryReader): OrderBookInstrument;
}

export namespace OrderBookInstrument {
    export type AsObject = {
        figi: string,
        depth: number,
        instrumentId: string,
        orderBookType: OrderBookType,
    }
}

export class SubscribeOrderBookResponse extends jspb.Message { 
    getTrackingId(): string;
    setTrackingId(value: string): SubscribeOrderBookResponse;
    clearOrderBookSubscriptionsList(): void;
    getOrderBookSubscriptionsList(): Array<OrderBookSubscription>;
    setOrderBookSubscriptionsList(value: Array<OrderBookSubscription>): SubscribeOrderBookResponse;
    addOrderBookSubscriptions(value?: OrderBookSubscription, index?: number): OrderBookSubscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeOrderBookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeOrderBookResponse): SubscribeOrderBookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeOrderBookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeOrderBookResponse;
    static deserializeBinaryFromReader(message: SubscribeOrderBookResponse, reader: jspb.BinaryReader): SubscribeOrderBookResponse;
}

export namespace SubscribeOrderBookResponse {
    export type AsObject = {
        trackingId: string,
        orderBookSubscriptionsList: Array<OrderBookSubscription.AsObject>,
    }
}

export class OrderBookSubscription extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): OrderBookSubscription;
    getDepth(): number;
    setDepth(value: number): OrderBookSubscription;
    getSubscriptionStatus(): SubscriptionStatus;
    setSubscriptionStatus(value: SubscriptionStatus): OrderBookSubscription;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): OrderBookSubscription;
    getStreamId(): string;
    setStreamId(value: string): OrderBookSubscription;
    getSubscriptionId(): string;
    setSubscriptionId(value: string): OrderBookSubscription;
    getOrderBookType(): OrderBookType;
    setOrderBookType(value: OrderBookType): OrderBookSubscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderBookSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: OrderBookSubscription): OrderBookSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderBookSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderBookSubscription;
    static deserializeBinaryFromReader(message: OrderBookSubscription, reader: jspb.BinaryReader): OrderBookSubscription;
}

export namespace OrderBookSubscription {
    export type AsObject = {
        figi: string,
        depth: number,
        subscriptionStatus: SubscriptionStatus,
        instrumentUid: string,
        streamId: string,
        subscriptionId: string,
        orderBookType: OrderBookType,
    }
}

export class SubscribeTradesRequest extends jspb.Message { 
    getSubscriptionAction(): SubscriptionAction;
    setSubscriptionAction(value: SubscriptionAction): SubscribeTradesRequest;
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<TradeInstrument>;
    setInstrumentsList(value: Array<TradeInstrument>): SubscribeTradesRequest;
    addInstruments(value?: TradeInstrument, index?: number): TradeInstrument;
    getTradeType(): TradeSourceType;
    setTradeType(value: TradeSourceType): SubscribeTradesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeTradesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeTradesRequest): SubscribeTradesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeTradesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeTradesRequest;
    static deserializeBinaryFromReader(message: SubscribeTradesRequest, reader: jspb.BinaryReader): SubscribeTradesRequest;
}

export namespace SubscribeTradesRequest {
    export type AsObject = {
        subscriptionAction: SubscriptionAction,
        instrumentsList: Array<TradeInstrument.AsObject>,
        tradeType: TradeSourceType,
    }
}

export class TradeInstrument extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): TradeInstrument;
    getInstrumentId(): string;
    setInstrumentId(value: string): TradeInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradeInstrument.AsObject;
    static toObject(includeInstance: boolean, msg: TradeInstrument): TradeInstrument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradeInstrument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradeInstrument;
    static deserializeBinaryFromReader(message: TradeInstrument, reader: jspb.BinaryReader): TradeInstrument;
}

export namespace TradeInstrument {
    export type AsObject = {
        figi: string,
        instrumentId: string,
    }
}

export class SubscribeTradesResponse extends jspb.Message { 
    getTrackingId(): string;
    setTrackingId(value: string): SubscribeTradesResponse;
    clearTradeSubscriptionsList(): void;
    getTradeSubscriptionsList(): Array<TradeSubscription>;
    setTradeSubscriptionsList(value: Array<TradeSubscription>): SubscribeTradesResponse;
    addTradeSubscriptions(value?: TradeSubscription, index?: number): TradeSubscription;
    getTradeType(): TradeSourceType;
    setTradeType(value: TradeSourceType): SubscribeTradesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeTradesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeTradesResponse): SubscribeTradesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeTradesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeTradesResponse;
    static deserializeBinaryFromReader(message: SubscribeTradesResponse, reader: jspb.BinaryReader): SubscribeTradesResponse;
}

export namespace SubscribeTradesResponse {
    export type AsObject = {
        trackingId: string,
        tradeSubscriptionsList: Array<TradeSubscription.AsObject>,
        tradeType: TradeSourceType,
    }
}

export class TradeSubscription extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): TradeSubscription;
    getSubscriptionStatus(): SubscriptionStatus;
    setSubscriptionStatus(value: SubscriptionStatus): TradeSubscription;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): TradeSubscription;
    getStreamId(): string;
    setStreamId(value: string): TradeSubscription;
    getSubscriptionId(): string;
    setSubscriptionId(value: string): TradeSubscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradeSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: TradeSubscription): TradeSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradeSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradeSubscription;
    static deserializeBinaryFromReader(message: TradeSubscription, reader: jspb.BinaryReader): TradeSubscription;
}

export namespace TradeSubscription {
    export type AsObject = {
        figi: string,
        subscriptionStatus: SubscriptionStatus,
        instrumentUid: string,
        streamId: string,
        subscriptionId: string,
    }
}

export class SubscribeInfoRequest extends jspb.Message { 
    getSubscriptionAction(): SubscriptionAction;
    setSubscriptionAction(value: SubscriptionAction): SubscribeInfoRequest;
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<InfoInstrument>;
    setInstrumentsList(value: Array<InfoInstrument>): SubscribeInfoRequest;
    addInstruments(value?: InfoInstrument, index?: number): InfoInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeInfoRequest): SubscribeInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeInfoRequest;
    static deserializeBinaryFromReader(message: SubscribeInfoRequest, reader: jspb.BinaryReader): SubscribeInfoRequest;
}

export namespace SubscribeInfoRequest {
    export type AsObject = {
        subscriptionAction: SubscriptionAction,
        instrumentsList: Array<InfoInstrument.AsObject>,
    }
}

export class InfoInstrument extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): InfoInstrument;
    getInstrumentId(): string;
    setInstrumentId(value: string): InfoInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfoInstrument.AsObject;
    static toObject(includeInstance: boolean, msg: InfoInstrument): InfoInstrument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfoInstrument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfoInstrument;
    static deserializeBinaryFromReader(message: InfoInstrument, reader: jspb.BinaryReader): InfoInstrument;
}

export namespace InfoInstrument {
    export type AsObject = {
        figi: string,
        instrumentId: string,
    }
}

export class SubscribeInfoResponse extends jspb.Message { 
    getTrackingId(): string;
    setTrackingId(value: string): SubscribeInfoResponse;
    clearInfoSubscriptionsList(): void;
    getInfoSubscriptionsList(): Array<InfoSubscription>;
    setInfoSubscriptionsList(value: Array<InfoSubscription>): SubscribeInfoResponse;
    addInfoSubscriptions(value?: InfoSubscription, index?: number): InfoSubscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeInfoResponse): SubscribeInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeInfoResponse;
    static deserializeBinaryFromReader(message: SubscribeInfoResponse, reader: jspb.BinaryReader): SubscribeInfoResponse;
}

export namespace SubscribeInfoResponse {
    export type AsObject = {
        trackingId: string,
        infoSubscriptionsList: Array<InfoSubscription.AsObject>,
    }
}

export class InfoSubscription extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): InfoSubscription;
    getSubscriptionStatus(): SubscriptionStatus;
    setSubscriptionStatus(value: SubscriptionStatus): InfoSubscription;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): InfoSubscription;
    getStreamId(): string;
    setStreamId(value: string): InfoSubscription;
    getSubscriptionId(): string;
    setSubscriptionId(value: string): InfoSubscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InfoSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: InfoSubscription): InfoSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InfoSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InfoSubscription;
    static deserializeBinaryFromReader(message: InfoSubscription, reader: jspb.BinaryReader): InfoSubscription;
}

export namespace InfoSubscription {
    export type AsObject = {
        figi: string,
        subscriptionStatus: SubscriptionStatus,
        instrumentUid: string,
        streamId: string,
        subscriptionId: string,
    }
}

export class SubscribeLastPriceRequest extends jspb.Message { 
    getSubscriptionAction(): SubscriptionAction;
    setSubscriptionAction(value: SubscriptionAction): SubscribeLastPriceRequest;
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<LastPriceInstrument>;
    setInstrumentsList(value: Array<LastPriceInstrument>): SubscribeLastPriceRequest;
    addInstruments(value?: LastPriceInstrument, index?: number): LastPriceInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeLastPriceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeLastPriceRequest): SubscribeLastPriceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeLastPriceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeLastPriceRequest;
    static deserializeBinaryFromReader(message: SubscribeLastPriceRequest, reader: jspb.BinaryReader): SubscribeLastPriceRequest;
}

export namespace SubscribeLastPriceRequest {
    export type AsObject = {
        subscriptionAction: SubscriptionAction,
        instrumentsList: Array<LastPriceInstrument.AsObject>,
    }
}

export class LastPriceInstrument extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): LastPriceInstrument;
    getInstrumentId(): string;
    setInstrumentId(value: string): LastPriceInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LastPriceInstrument.AsObject;
    static toObject(includeInstance: boolean, msg: LastPriceInstrument): LastPriceInstrument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LastPriceInstrument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LastPriceInstrument;
    static deserializeBinaryFromReader(message: LastPriceInstrument, reader: jspb.BinaryReader): LastPriceInstrument;
}

export namespace LastPriceInstrument {
    export type AsObject = {
        figi: string,
        instrumentId: string,
    }
}

export class SubscribeLastPriceResponse extends jspb.Message { 
    getTrackingId(): string;
    setTrackingId(value: string): SubscribeLastPriceResponse;
    clearLastPriceSubscriptionsList(): void;
    getLastPriceSubscriptionsList(): Array<LastPriceSubscription>;
    setLastPriceSubscriptionsList(value: Array<LastPriceSubscription>): SubscribeLastPriceResponse;
    addLastPriceSubscriptions(value?: LastPriceSubscription, index?: number): LastPriceSubscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscribeLastPriceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscribeLastPriceResponse): SubscribeLastPriceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscribeLastPriceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscribeLastPriceResponse;
    static deserializeBinaryFromReader(message: SubscribeLastPriceResponse, reader: jspb.BinaryReader): SubscribeLastPriceResponse;
}

export namespace SubscribeLastPriceResponse {
    export type AsObject = {
        trackingId: string,
        lastPriceSubscriptionsList: Array<LastPriceSubscription.AsObject>,
    }
}

export class LastPriceSubscription extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): LastPriceSubscription;
    getSubscriptionStatus(): SubscriptionStatus;
    setSubscriptionStatus(value: SubscriptionStatus): LastPriceSubscription;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): LastPriceSubscription;
    getStreamId(): string;
    setStreamId(value: string): LastPriceSubscription;
    getSubscriptionId(): string;
    setSubscriptionId(value: string): LastPriceSubscription;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LastPriceSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: LastPriceSubscription): LastPriceSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LastPriceSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LastPriceSubscription;
    static deserializeBinaryFromReader(message: LastPriceSubscription, reader: jspb.BinaryReader): LastPriceSubscription;
}

export namespace LastPriceSubscription {
    export type AsObject = {
        figi: string,
        subscriptionStatus: SubscriptionStatus,
        instrumentUid: string,
        streamId: string,
        subscriptionId: string,
    }
}

export class Candle extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): Candle;
    getInterval(): SubscriptionInterval;
    setInterval(value: SubscriptionInterval): Candle;

    hasOpen(): boolean;
    clearOpen(): void;
    getOpen(): common_pb.Quotation | undefined;
    setOpen(value?: common_pb.Quotation): Candle;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): common_pb.Quotation | undefined;
    setHigh(value?: common_pb.Quotation): Candle;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): common_pb.Quotation | undefined;
    setLow(value?: common_pb.Quotation): Candle;

    hasClose(): boolean;
    clearClose(): void;
    getClose(): common_pb.Quotation | undefined;
    setClose(value?: common_pb.Quotation): Candle;
    getVolume(): number;
    setVolume(value: number): Candle;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): Candle;

    hasLastTradeTs(): boolean;
    clearLastTradeTs(): void;
    getLastTradeTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastTradeTs(value?: google_protobuf_timestamp_pb.Timestamp): Candle;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): Candle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Candle.AsObject;
    static toObject(includeInstance: boolean, msg: Candle): Candle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Candle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Candle;
    static deserializeBinaryFromReader(message: Candle, reader: jspb.BinaryReader): Candle;
}

export namespace Candle {
    export type AsObject = {
        figi: string,
        interval: SubscriptionInterval,
        open?: common_pb.Quotation.AsObject,
        high?: common_pb.Quotation.AsObject,
        low?: common_pb.Quotation.AsObject,
        close?: common_pb.Quotation.AsObject,
        volume: number,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastTradeTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        instrumentUid: string,
    }
}

export class OrderBook extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): OrderBook;
    getDepth(): number;
    setDepth(value: number): OrderBook;
    getIsConsistent(): boolean;
    setIsConsistent(value: boolean): OrderBook;
    clearBidsList(): void;
    getBidsList(): Array<Order>;
    setBidsList(value: Array<Order>): OrderBook;
    addBids(value?: Order, index?: number): Order;
    clearAsksList(): void;
    getAsksList(): Array<Order>;
    setAsksList(value: Array<Order>): OrderBook;
    addAsks(value?: Order, index?: number): Order;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): OrderBook;

    hasLimitUp(): boolean;
    clearLimitUp(): void;
    getLimitUp(): common_pb.Quotation | undefined;
    setLimitUp(value?: common_pb.Quotation): OrderBook;

    hasLimitDown(): boolean;
    clearLimitDown(): void;
    getLimitDown(): common_pb.Quotation | undefined;
    setLimitDown(value?: common_pb.Quotation): OrderBook;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): OrderBook;
    getOrderBookType(): OrderBookType;
    setOrderBookType(value: OrderBookType): OrderBook;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderBook.AsObject;
    static toObject(includeInstance: boolean, msg: OrderBook): OrderBook.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderBook, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderBook;
    static deserializeBinaryFromReader(message: OrderBook, reader: jspb.BinaryReader): OrderBook;
}

export namespace OrderBook {
    export type AsObject = {
        figi: string,
        depth: number,
        isConsistent: boolean,
        bidsList: Array<Order.AsObject>,
        asksList: Array<Order.AsObject>,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        limitUp?: common_pb.Quotation.AsObject,
        limitDown?: common_pb.Quotation.AsObject,
        instrumentUid: string,
        orderBookType: OrderBookType,
    }
}

export class Order extends jspb.Message { 

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.Quotation | undefined;
    setPrice(value?: common_pb.Quotation): Order;
    getQuantity(): number;
    setQuantity(value: number): Order;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        price?: common_pb.Quotation.AsObject,
        quantity: number,
    }
}

export class Trade extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): Trade;
    getDirection(): TradeDirection;
    setDirection(value: TradeDirection): Trade;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.Quotation | undefined;
    setPrice(value?: common_pb.Quotation): Trade;
    getQuantity(): number;
    setQuantity(value: number): Trade;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): Trade;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): Trade;
    getTradesource(): TradeSourceType;
    setTradesource(value: TradeSourceType): Trade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Trade.AsObject;
    static toObject(includeInstance: boolean, msg: Trade): Trade.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Trade, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Trade;
    static deserializeBinaryFromReader(message: Trade, reader: jspb.BinaryReader): Trade;
}

export namespace Trade {
    export type AsObject = {
        figi: string,
        direction: TradeDirection,
        price?: common_pb.Quotation.AsObject,
        quantity: number,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        instrumentUid: string,
        tradesource: TradeSourceType,
    }
}

export class TradingStatus extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): TradingStatus;
    getTradingStatus(): common_pb.SecurityTradingStatus;
    setTradingStatus(value: common_pb.SecurityTradingStatus): TradingStatus;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingStatus;
    getLimitOrderAvailableFlag(): boolean;
    setLimitOrderAvailableFlag(value: boolean): TradingStatus;
    getMarketOrderAvailableFlag(): boolean;
    setMarketOrderAvailableFlag(value: boolean): TradingStatus;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): TradingStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradingStatus.AsObject;
    static toObject(includeInstance: boolean, msg: TradingStatus): TradingStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradingStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradingStatus;
    static deserializeBinaryFromReader(message: TradingStatus, reader: jspb.BinaryReader): TradingStatus;
}

export namespace TradingStatus {
    export type AsObject = {
        figi: string,
        tradingStatus: common_pb.SecurityTradingStatus,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        limitOrderAvailableFlag: boolean,
        marketOrderAvailableFlag: boolean,
        instrumentUid: string,
    }
}

export class GetCandlesRequest extends jspb.Message { 

    hasFigi(): boolean;
    clearFigi(): void;
    getFigi(): string | undefined;
    setFigi(value: string): GetCandlesRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetCandlesRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetCandlesRequest;
    getInterval(): CandleInterval;
    setInterval(value: CandleInterval): GetCandlesRequest;

    hasInstrumentId(): boolean;
    clearInstrumentId(): void;
    getInstrumentId(): string | undefined;
    setInstrumentId(value: string): GetCandlesRequest;

    hasCandleSourceType(): boolean;
    clearCandleSourceType(): void;
    getCandleSourceType(): GetCandlesRequest.CandleSource | undefined;
    setCandleSourceType(value: GetCandlesRequest.CandleSource): GetCandlesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCandlesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCandlesRequest): GetCandlesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCandlesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCandlesRequest;
    static deserializeBinaryFromReader(message: GetCandlesRequest, reader: jspb.BinaryReader): GetCandlesRequest;
}

export namespace GetCandlesRequest {
    export type AsObject = {
        figi?: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        interval: CandleInterval,
        instrumentId?: string,
        candleSourceType?: GetCandlesRequest.CandleSource,
    }

    export enum CandleSource {
    CANDLE_SOURCE_UNSPECIFIED = 0,
    CANDLE_SOURCE_EXCHANGE = 1,
    }

}

export class GetCandlesResponse extends jspb.Message { 
    clearCandlesList(): void;
    getCandlesList(): Array<HistoricCandle>;
    setCandlesList(value: Array<HistoricCandle>): GetCandlesResponse;
    addCandles(value?: HistoricCandle, index?: number): HistoricCandle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCandlesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCandlesResponse): GetCandlesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCandlesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCandlesResponse;
    static deserializeBinaryFromReader(message: GetCandlesResponse, reader: jspb.BinaryReader): GetCandlesResponse;
}

export namespace GetCandlesResponse {
    export type AsObject = {
        candlesList: Array<HistoricCandle.AsObject>,
    }
}

export class HistoricCandle extends jspb.Message { 

    hasOpen(): boolean;
    clearOpen(): void;
    getOpen(): common_pb.Quotation | undefined;
    setOpen(value?: common_pb.Quotation): HistoricCandle;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): common_pb.Quotation | undefined;
    setHigh(value?: common_pb.Quotation): HistoricCandle;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): common_pb.Quotation | undefined;
    setLow(value?: common_pb.Quotation): HistoricCandle;

    hasClose(): boolean;
    clearClose(): void;
    getClose(): common_pb.Quotation | undefined;
    setClose(value?: common_pb.Quotation): HistoricCandle;
    getVolume(): number;
    setVolume(value: number): HistoricCandle;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): HistoricCandle;
    getIsComplete(): boolean;
    setIsComplete(value: boolean): HistoricCandle;
    getCandleSource(): CandleSource;
    setCandleSource(value: CandleSource): HistoricCandle;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HistoricCandle.AsObject;
    static toObject(includeInstance: boolean, msg: HistoricCandle): HistoricCandle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HistoricCandle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HistoricCandle;
    static deserializeBinaryFromReader(message: HistoricCandle, reader: jspb.BinaryReader): HistoricCandle;
}

export namespace HistoricCandle {
    export type AsObject = {
        open?: common_pb.Quotation.AsObject,
        high?: common_pb.Quotation.AsObject,
        low?: common_pb.Quotation.AsObject,
        close?: common_pb.Quotation.AsObject,
        volume: number,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        isComplete: boolean,
        candleSource: CandleSource,
    }
}

export class GetLastPricesRequest extends jspb.Message { 
    clearFigiList(): void;
    getFigiList(): Array<string>;
    setFigiList(value: Array<string>): GetLastPricesRequest;
    addFigi(value: string, index?: number): string;
    clearInstrumentIdList(): void;
    getInstrumentIdList(): Array<string>;
    setInstrumentIdList(value: Array<string>): GetLastPricesRequest;
    addInstrumentId(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLastPricesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLastPricesRequest): GetLastPricesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLastPricesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLastPricesRequest;
    static deserializeBinaryFromReader(message: GetLastPricesRequest, reader: jspb.BinaryReader): GetLastPricesRequest;
}

export namespace GetLastPricesRequest {
    export type AsObject = {
        figiList: Array<string>,
        instrumentIdList: Array<string>,
    }
}

export class GetLastPricesResponse extends jspb.Message { 
    clearLastPricesList(): void;
    getLastPricesList(): Array<LastPrice>;
    setLastPricesList(value: Array<LastPrice>): GetLastPricesResponse;
    addLastPrices(value?: LastPrice, index?: number): LastPrice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLastPricesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLastPricesResponse): GetLastPricesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLastPricesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLastPricesResponse;
    static deserializeBinaryFromReader(message: GetLastPricesResponse, reader: jspb.BinaryReader): GetLastPricesResponse;
}

export namespace GetLastPricesResponse {
    export type AsObject = {
        lastPricesList: Array<LastPrice.AsObject>,
    }
}

export class LastPrice extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): LastPrice;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.Quotation | undefined;
    setPrice(value?: common_pb.Quotation): LastPrice;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): LastPrice;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): LastPrice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LastPrice.AsObject;
    static toObject(includeInstance: boolean, msg: LastPrice): LastPrice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LastPrice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LastPrice;
    static deserializeBinaryFromReader(message: LastPrice, reader: jspb.BinaryReader): LastPrice;
}

export namespace LastPrice {
    export type AsObject = {
        figi: string,
        price?: common_pb.Quotation.AsObject,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        instrumentUid: string,
    }
}

export class GetOrderBookRequest extends jspb.Message { 

    hasFigi(): boolean;
    clearFigi(): void;
    getFigi(): string | undefined;
    setFigi(value: string): GetOrderBookRequest;
    getDepth(): number;
    setDepth(value: number): GetOrderBookRequest;

    hasInstrumentId(): boolean;
    clearInstrumentId(): void;
    getInstrumentId(): string | undefined;
    setInstrumentId(value: string): GetOrderBookRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderBookRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderBookRequest): GetOrderBookRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderBookRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderBookRequest;
    static deserializeBinaryFromReader(message: GetOrderBookRequest, reader: jspb.BinaryReader): GetOrderBookRequest;
}

export namespace GetOrderBookRequest {
    export type AsObject = {
        figi?: string,
        depth: number,
        instrumentId?: string,
    }
}

export class GetOrderBookResponse extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): GetOrderBookResponse;
    getDepth(): number;
    setDepth(value: number): GetOrderBookResponse;
    clearBidsList(): void;
    getBidsList(): Array<Order>;
    setBidsList(value: Array<Order>): GetOrderBookResponse;
    addBids(value?: Order, index?: number): Order;
    clearAsksList(): void;
    getAsksList(): Array<Order>;
    setAsksList(value: Array<Order>): GetOrderBookResponse;
    addAsks(value?: Order, index?: number): Order;

    hasLastPrice(): boolean;
    clearLastPrice(): void;
    getLastPrice(): common_pb.Quotation | undefined;
    setLastPrice(value?: common_pb.Quotation): GetOrderBookResponse;

    hasClosePrice(): boolean;
    clearClosePrice(): void;
    getClosePrice(): common_pb.Quotation | undefined;
    setClosePrice(value?: common_pb.Quotation): GetOrderBookResponse;

    hasLimitUp(): boolean;
    clearLimitUp(): void;
    getLimitUp(): common_pb.Quotation | undefined;
    setLimitUp(value?: common_pb.Quotation): GetOrderBookResponse;

    hasLimitDown(): boolean;
    clearLimitDown(): void;
    getLimitDown(): common_pb.Quotation | undefined;
    setLimitDown(value?: common_pb.Quotation): GetOrderBookResponse;

    hasLastPriceTs(): boolean;
    clearLastPriceTs(): void;
    getLastPriceTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastPriceTs(value?: google_protobuf_timestamp_pb.Timestamp): GetOrderBookResponse;

    hasClosePriceTs(): boolean;
    clearClosePriceTs(): void;
    getClosePriceTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setClosePriceTs(value?: google_protobuf_timestamp_pb.Timestamp): GetOrderBookResponse;

    hasOrderbookTs(): boolean;
    clearOrderbookTs(): void;
    getOrderbookTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setOrderbookTs(value?: google_protobuf_timestamp_pb.Timestamp): GetOrderBookResponse;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): GetOrderBookResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderBookResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderBookResponse): GetOrderBookResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderBookResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderBookResponse;
    static deserializeBinaryFromReader(message: GetOrderBookResponse, reader: jspb.BinaryReader): GetOrderBookResponse;
}

export namespace GetOrderBookResponse {
    export type AsObject = {
        figi: string,
        depth: number,
        bidsList: Array<Order.AsObject>,
        asksList: Array<Order.AsObject>,
        lastPrice?: common_pb.Quotation.AsObject,
        closePrice?: common_pb.Quotation.AsObject,
        limitUp?: common_pb.Quotation.AsObject,
        limitDown?: common_pb.Quotation.AsObject,
        lastPriceTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        closePriceTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        orderbookTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        instrumentUid: string,
    }
}

export class GetTradingStatusRequest extends jspb.Message { 

    hasFigi(): boolean;
    clearFigi(): void;
    getFigi(): string | undefined;
    setFigi(value: string): GetTradingStatusRequest;

    hasInstrumentId(): boolean;
    clearInstrumentId(): void;
    getInstrumentId(): string | undefined;
    setInstrumentId(value: string): GetTradingStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradingStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradingStatusRequest): GetTradingStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradingStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradingStatusRequest;
    static deserializeBinaryFromReader(message: GetTradingStatusRequest, reader: jspb.BinaryReader): GetTradingStatusRequest;
}

export namespace GetTradingStatusRequest {
    export type AsObject = {
        figi?: string,
        instrumentId?: string,
    }
}

export class GetTradingStatusesRequest extends jspb.Message { 
    clearInstrumentIdList(): void;
    getInstrumentIdList(): Array<string>;
    setInstrumentIdList(value: Array<string>): GetTradingStatusesRequest;
    addInstrumentId(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradingStatusesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradingStatusesRequest): GetTradingStatusesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradingStatusesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradingStatusesRequest;
    static deserializeBinaryFromReader(message: GetTradingStatusesRequest, reader: jspb.BinaryReader): GetTradingStatusesRequest;
}

export namespace GetTradingStatusesRequest {
    export type AsObject = {
        instrumentIdList: Array<string>,
    }
}

export class GetTradingStatusesResponse extends jspb.Message { 
    clearTradingStatusesList(): void;
    getTradingStatusesList(): Array<GetTradingStatusResponse>;
    setTradingStatusesList(value: Array<GetTradingStatusResponse>): GetTradingStatusesResponse;
    addTradingStatuses(value?: GetTradingStatusResponse, index?: number): GetTradingStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradingStatusesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradingStatusesResponse): GetTradingStatusesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradingStatusesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradingStatusesResponse;
    static deserializeBinaryFromReader(message: GetTradingStatusesResponse, reader: jspb.BinaryReader): GetTradingStatusesResponse;
}

export namespace GetTradingStatusesResponse {
    export type AsObject = {
        tradingStatusesList: Array<GetTradingStatusResponse.AsObject>,
    }
}

export class GetTradingStatusResponse extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): GetTradingStatusResponse;
    getTradingStatus(): common_pb.SecurityTradingStatus;
    setTradingStatus(value: common_pb.SecurityTradingStatus): GetTradingStatusResponse;
    getLimitOrderAvailableFlag(): boolean;
    setLimitOrderAvailableFlag(value: boolean): GetTradingStatusResponse;
    getMarketOrderAvailableFlag(): boolean;
    setMarketOrderAvailableFlag(value: boolean): GetTradingStatusResponse;
    getApiTradeAvailableFlag(): boolean;
    setApiTradeAvailableFlag(value: boolean): GetTradingStatusResponse;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): GetTradingStatusResponse;
    getBestpriceOrderAvailableFlag(): boolean;
    setBestpriceOrderAvailableFlag(value: boolean): GetTradingStatusResponse;
    getOnlyBestPrice(): boolean;
    setOnlyBestPrice(value: boolean): GetTradingStatusResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTradingStatusResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTradingStatusResponse): GetTradingStatusResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTradingStatusResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTradingStatusResponse;
    static deserializeBinaryFromReader(message: GetTradingStatusResponse, reader: jspb.BinaryReader): GetTradingStatusResponse;
}

export namespace GetTradingStatusResponse {
    export type AsObject = {
        figi: string,
        tradingStatus: common_pb.SecurityTradingStatus,
        limitOrderAvailableFlag: boolean,
        marketOrderAvailableFlag: boolean,
        apiTradeAvailableFlag: boolean,
        instrumentUid: string,
        bestpriceOrderAvailableFlag: boolean,
        onlyBestPrice: boolean,
    }
}

export class GetLastTradesRequest extends jspb.Message { 

    hasFigi(): boolean;
    clearFigi(): void;
    getFigi(): string | undefined;
    setFigi(value: string): GetLastTradesRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetLastTradesRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetLastTradesRequest;

    hasInstrumentId(): boolean;
    clearInstrumentId(): void;
    getInstrumentId(): string | undefined;
    setInstrumentId(value: string): GetLastTradesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLastTradesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetLastTradesRequest): GetLastTradesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLastTradesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLastTradesRequest;
    static deserializeBinaryFromReader(message: GetLastTradesRequest, reader: jspb.BinaryReader): GetLastTradesRequest;
}

export namespace GetLastTradesRequest {
    export type AsObject = {
        figi?: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        instrumentId?: string,
    }
}

export class GetLastTradesResponse extends jspb.Message { 
    clearTradesList(): void;
    getTradesList(): Array<Trade>;
    setTradesList(value: Array<Trade>): GetLastTradesResponse;
    addTrades(value?: Trade, index?: number): Trade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetLastTradesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetLastTradesResponse): GetLastTradesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetLastTradesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetLastTradesResponse;
    static deserializeBinaryFromReader(message: GetLastTradesResponse, reader: jspb.BinaryReader): GetLastTradesResponse;
}

export namespace GetLastTradesResponse {
    export type AsObject = {
        tradesList: Array<Trade.AsObject>,
    }
}

export class GetMySubscriptions extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMySubscriptions.AsObject;
    static toObject(includeInstance: boolean, msg: GetMySubscriptions): GetMySubscriptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMySubscriptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMySubscriptions;
    static deserializeBinaryFromReader(message: GetMySubscriptions, reader: jspb.BinaryReader): GetMySubscriptions;
}

export namespace GetMySubscriptions {
    export type AsObject = {
    }
}

export class GetClosePricesRequest extends jspb.Message { 
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<InstrumentClosePriceRequest>;
    setInstrumentsList(value: Array<InstrumentClosePriceRequest>): GetClosePricesRequest;
    addInstruments(value?: InstrumentClosePriceRequest, index?: number): InstrumentClosePriceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetClosePricesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetClosePricesRequest): GetClosePricesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetClosePricesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetClosePricesRequest;
    static deserializeBinaryFromReader(message: GetClosePricesRequest, reader: jspb.BinaryReader): GetClosePricesRequest;
}

export namespace GetClosePricesRequest {
    export type AsObject = {
        instrumentsList: Array<InstrumentClosePriceRequest.AsObject>,
    }
}

export class InstrumentClosePriceRequest extends jspb.Message { 
    getInstrumentId(): string;
    setInstrumentId(value: string): InstrumentClosePriceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstrumentClosePriceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InstrumentClosePriceRequest): InstrumentClosePriceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstrumentClosePriceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstrumentClosePriceRequest;
    static deserializeBinaryFromReader(message: InstrumentClosePriceRequest, reader: jspb.BinaryReader): InstrumentClosePriceRequest;
}

export namespace InstrumentClosePriceRequest {
    export type AsObject = {
        instrumentId: string,
    }
}

export class GetClosePricesResponse extends jspb.Message { 
    clearClosePricesList(): void;
    getClosePricesList(): Array<InstrumentClosePriceResponse>;
    setClosePricesList(value: Array<InstrumentClosePriceResponse>): GetClosePricesResponse;
    addClosePrices(value?: InstrumentClosePriceResponse, index?: number): InstrumentClosePriceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetClosePricesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetClosePricesResponse): GetClosePricesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetClosePricesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetClosePricesResponse;
    static deserializeBinaryFromReader(message: GetClosePricesResponse, reader: jspb.BinaryReader): GetClosePricesResponse;
}

export namespace GetClosePricesResponse {
    export type AsObject = {
        closePricesList: Array<InstrumentClosePriceResponse.AsObject>,
    }
}

export class InstrumentClosePriceResponse extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): InstrumentClosePriceResponse;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): InstrumentClosePriceResponse;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.Quotation | undefined;
    setPrice(value?: common_pb.Quotation): InstrumentClosePriceResponse;

    hasEveningSessionPrice(): boolean;
    clearEveningSessionPrice(): void;
    getEveningSessionPrice(): common_pb.Quotation | undefined;
    setEveningSessionPrice(value?: common_pb.Quotation): InstrumentClosePriceResponse;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): InstrumentClosePriceResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstrumentClosePriceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InstrumentClosePriceResponse): InstrumentClosePriceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstrumentClosePriceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstrumentClosePriceResponse;
    static deserializeBinaryFromReader(message: InstrumentClosePriceResponse, reader: jspb.BinaryReader): InstrumentClosePriceResponse;
}

export namespace InstrumentClosePriceResponse {
    export type AsObject = {
        figi: string,
        instrumentUid: string,
        price?: common_pb.Quotation.AsObject,
        eveningSessionPrice?: common_pb.Quotation.AsObject,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetTechAnalysisRequest extends jspb.Message { 
    getIndicatorType(): GetTechAnalysisRequest.IndicatorType;
    setIndicatorType(value: GetTechAnalysisRequest.IndicatorType): GetTechAnalysisRequest;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): GetTechAnalysisRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetTechAnalysisRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetTechAnalysisRequest;
    getInterval(): GetTechAnalysisRequest.IndicatorInterval;
    setInterval(value: GetTechAnalysisRequest.IndicatorInterval): GetTechAnalysisRequest;
    getTypeOfPrice(): GetTechAnalysisRequest.TypeOfPrice;
    setTypeOfPrice(value: GetTechAnalysisRequest.TypeOfPrice): GetTechAnalysisRequest;
    getLength(): number;
    setLength(value: number): GetTechAnalysisRequest;

    hasDeviation(): boolean;
    clearDeviation(): void;
    getDeviation(): GetTechAnalysisRequest.Deviation | undefined;
    setDeviation(value?: GetTechAnalysisRequest.Deviation): GetTechAnalysisRequest;

    hasSmoothing(): boolean;
    clearSmoothing(): void;
    getSmoothing(): GetTechAnalysisRequest.Smoothing | undefined;
    setSmoothing(value?: GetTechAnalysisRequest.Smoothing): GetTechAnalysisRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTechAnalysisRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTechAnalysisRequest): GetTechAnalysisRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTechAnalysisRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTechAnalysisRequest;
    static deserializeBinaryFromReader(message: GetTechAnalysisRequest, reader: jspb.BinaryReader): GetTechAnalysisRequest;
}

export namespace GetTechAnalysisRequest {
    export type AsObject = {
        indicatorType: GetTechAnalysisRequest.IndicatorType,
        instrumentUid: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        interval: GetTechAnalysisRequest.IndicatorInterval,
        typeOfPrice: GetTechAnalysisRequest.TypeOfPrice,
        length: number,
        deviation?: GetTechAnalysisRequest.Deviation.AsObject,
        smoothing?: GetTechAnalysisRequest.Smoothing.AsObject,
    }


    export class Smoothing extends jspb.Message { 
        getFastLength(): number;
        setFastLength(value: number): Smoothing;
        getSlowLength(): number;
        setSlowLength(value: number): Smoothing;
        getSignalSmoothing(): number;
        setSignalSmoothing(value: number): Smoothing;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Smoothing.AsObject;
        static toObject(includeInstance: boolean, msg: Smoothing): Smoothing.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Smoothing, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Smoothing;
        static deserializeBinaryFromReader(message: Smoothing, reader: jspb.BinaryReader): Smoothing;
    }

    export namespace Smoothing {
        export type AsObject = {
            fastLength: number,
            slowLength: number,
            signalSmoothing: number,
        }
    }

    export class Deviation extends jspb.Message { 

        hasDeviationMultiplier(): boolean;
        clearDeviationMultiplier(): void;
        getDeviationMultiplier(): common_pb.Quotation | undefined;
        setDeviationMultiplier(value?: common_pb.Quotation): Deviation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Deviation.AsObject;
        static toObject(includeInstance: boolean, msg: Deviation): Deviation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Deviation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Deviation;
        static deserializeBinaryFromReader(message: Deviation, reader: jspb.BinaryReader): Deviation;
    }

    export namespace Deviation {
        export type AsObject = {
            deviationMultiplier?: common_pb.Quotation.AsObject,
        }
    }


    export enum IndicatorInterval {
    INDICATOR_INTERVAL_UNSPECIFIED = 0,
    INDICATOR_INTERVAL_ONE_MINUTE = 1,
    INDICATOR_INTERVAL_FIVE_MINUTES = 2,
    INDICATOR_INTERVAL_FIFTEEN_MINUTES = 3,
    INDICATOR_INTERVAL_ONE_HOUR = 4,
    INDICATOR_INTERVAL_ONE_DAY = 5,
    INDICATOR_INTERVAL_2_MIN = 6,
    INDICATOR_INTERVAL_3_MIN = 7,
    INDICATOR_INTERVAL_10_MIN = 8,
    INDICATOR_INTERVAL_30_MIN = 9,
    INDICATOR_INTERVAL_2_HOUR = 10,
    INDICATOR_INTERVAL_4_HOUR = 11,
    INDICATOR_INTERVAL_WEEK = 12,
    INDICATOR_INTERVAL_MONTH = 13,
    }

    export enum TypeOfPrice {
    TYPE_OF_PRICE_UNSPECIFIED = 0,
    TYPE_OF_PRICE_CLOSE = 1,
    TYPE_OF_PRICE_OPEN = 2,
    TYPE_OF_PRICE_HIGH = 3,
    TYPE_OF_PRICE_LOW = 4,
    TYPE_OF_PRICE_AVG = 5,
    }

    export enum IndicatorType {
    INDICATOR_TYPE_UNSPECIFIED = 0,
    INDICATOR_TYPE_BB = 1,
    INDICATOR_TYPE_EMA = 2,
    INDICATOR_TYPE_RSI = 3,
    INDICATOR_TYPE_MACD = 4,
    INDICATOR_TYPE_SMA = 5,
    }

}

export class GetTechAnalysisResponse extends jspb.Message { 
    clearTechnicalIndicatorsList(): void;
    getTechnicalIndicatorsList(): Array<GetTechAnalysisResponse.TechAnalysisItem>;
    setTechnicalIndicatorsList(value: Array<GetTechAnalysisResponse.TechAnalysisItem>): GetTechAnalysisResponse;
    addTechnicalIndicators(value?: GetTechAnalysisResponse.TechAnalysisItem, index?: number): GetTechAnalysisResponse.TechAnalysisItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTechAnalysisResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTechAnalysisResponse): GetTechAnalysisResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTechAnalysisResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTechAnalysisResponse;
    static deserializeBinaryFromReader(message: GetTechAnalysisResponse, reader: jspb.BinaryReader): GetTechAnalysisResponse;
}

export namespace GetTechAnalysisResponse {
    export type AsObject = {
        technicalIndicatorsList: Array<GetTechAnalysisResponse.TechAnalysisItem.AsObject>,
    }


    export class TechAnalysisItem extends jspb.Message { 

        hasTimestamp(): boolean;
        clearTimestamp(): void;
        getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): TechAnalysisItem;

        hasMiddleBand(): boolean;
        clearMiddleBand(): void;
        getMiddleBand(): common_pb.Quotation | undefined;
        setMiddleBand(value?: common_pb.Quotation): TechAnalysisItem;

        hasUpperBand(): boolean;
        clearUpperBand(): void;
        getUpperBand(): common_pb.Quotation | undefined;
        setUpperBand(value?: common_pb.Quotation): TechAnalysisItem;

        hasLowerBand(): boolean;
        clearLowerBand(): void;
        getLowerBand(): common_pb.Quotation | undefined;
        setLowerBand(value?: common_pb.Quotation): TechAnalysisItem;

        hasSignal(): boolean;
        clearSignal(): void;
        getSignal(): common_pb.Quotation | undefined;
        setSignal(value?: common_pb.Quotation): TechAnalysisItem;

        hasMacd(): boolean;
        clearMacd(): void;
        getMacd(): common_pb.Quotation | undefined;
        setMacd(value?: common_pb.Quotation): TechAnalysisItem;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TechAnalysisItem.AsObject;
        static toObject(includeInstance: boolean, msg: TechAnalysisItem): TechAnalysisItem.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TechAnalysisItem, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TechAnalysisItem;
        static deserializeBinaryFromReader(message: TechAnalysisItem, reader: jspb.BinaryReader): TechAnalysisItem;
    }

    export namespace TechAnalysisItem {
        export type AsObject = {
            timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            middleBand?: common_pb.Quotation.AsObject,
            upperBand?: common_pb.Quotation.AsObject,
            lowerBand?: common_pb.Quotation.AsObject,
            signal?: common_pb.Quotation.AsObject,
            macd?: common_pb.Quotation.AsObject,
        }
    }

}

export enum SubscriptionAction {
    SUBSCRIPTION_ACTION_UNSPECIFIED = 0,
    SUBSCRIPTION_ACTION_SUBSCRIBE = 1,
    SUBSCRIPTION_ACTION_UNSUBSCRIBE = 2,
}

export enum SubscriptionInterval {
    SUBSCRIPTION_INTERVAL_UNSPECIFIED = 0,
    SUBSCRIPTION_INTERVAL_ONE_MINUTE = 1,
    SUBSCRIPTION_INTERVAL_FIVE_MINUTES = 2,
    SUBSCRIPTION_INTERVAL_FIFTEEN_MINUTES = 3,
    SUBSCRIPTION_INTERVAL_ONE_HOUR = 4,
    SUBSCRIPTION_INTERVAL_ONE_DAY = 5,
    SUBSCRIPTION_INTERVAL_2_MIN = 6,
    SUBSCRIPTION_INTERVAL_3_MIN = 7,
    SUBSCRIPTION_INTERVAL_10_MIN = 8,
    SUBSCRIPTION_INTERVAL_30_MIN = 9,
    SUBSCRIPTION_INTERVAL_2_HOUR = 10,
    SUBSCRIPTION_INTERVAL_4_HOUR = 11,
    SUBSCRIPTION_INTERVAL_WEEK = 12,
    SUBSCRIPTION_INTERVAL_MONTH = 13,
}

export enum SubscriptionStatus {
    SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
    SUBSCRIPTION_STATUS_SUCCESS = 1,
    SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND = 2,
    SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID = 3,
    SUBSCRIPTION_STATUS_DEPTH_IS_INVALID = 4,
    SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID = 5,
    SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED = 6,
    SUBSCRIPTION_STATUS_INTERNAL_ERROR = 7,
    SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS = 8,
    SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND = 9,
}

export enum TradeSourceType {
    TRADE_SOURCE_UNSPECIFIED = 0,
    TRADE_SOURCE_EXCHANGE = 1,
    TRADE_SOURCE_DEALER = 2,
    TRADE_SOURCE_ALL = 3,
}

export enum TradeDirection {
    TRADE_DIRECTION_UNSPECIFIED = 0,
    TRADE_DIRECTION_BUY = 1,
    TRADE_DIRECTION_SELL = 2,
}

export enum CandleInterval {
    CANDLE_INTERVAL_UNSPECIFIED = 0,
    CANDLE_INTERVAL_1_MIN = 1,
    CANDLE_INTERVAL_5_MIN = 2,
    CANDLE_INTERVAL_15_MIN = 3,
    CANDLE_INTERVAL_HOUR = 4,
    CANDLE_INTERVAL_DAY = 5,
    CANDLE_INTERVAL_2_MIN = 6,
    CANDLE_INTERVAL_3_MIN = 7,
    CANDLE_INTERVAL_10_MIN = 8,
    CANDLE_INTERVAL_30_MIN = 9,
    CANDLE_INTERVAL_2_HOUR = 10,
    CANDLE_INTERVAL_4_HOUR = 11,
    CANDLE_INTERVAL_WEEK = 12,
    CANDLE_INTERVAL_MONTH = 13,
}

export enum CandleSource {
    CANDLE_SOURCE_UNSPECIFIED = 0,
    CANDLE_SOURCE_EXCHANGE = 1,
    CANDLE_SOURCE_DEALER_WEEKEND = 2,
}

export enum OrderBookType {
    ORDERBOOK_TYPE_UNSPECIFIED = 0,
    ORDERBOOK_TYPE_EXCHANGE = 1,
    ORDERBOOK_TYPE_DEALER = 2,
}
