// package: tinkoff.public.invest.api.contract.v1
// file: orders.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";

export class TradesStreamRequest extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<string>;
    setAccountsList(value: Array<string>): TradesStreamRequest;
    addAccounts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradesStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TradesStreamRequest): TradesStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradesStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradesStreamRequest;
    static deserializeBinaryFromReader(message: TradesStreamRequest, reader: jspb.BinaryReader): TradesStreamRequest;
}

export namespace TradesStreamRequest {
    export type AsObject = {
        accountsList: Array<string>,
    }
}

export class TradesStreamResponse extends jspb.Message { 

    hasOrderTrades(): boolean;
    clearOrderTrades(): void;
    getOrderTrades(): OrderTrades | undefined;
    setOrderTrades(value?: OrderTrades): TradesStreamResponse;

    hasPing(): boolean;
    clearPing(): void;
    getPing(): common_pb.Ping | undefined;
    setPing(value?: common_pb.Ping): TradesStreamResponse;

    getPayloadCase(): TradesStreamResponse.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradesStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TradesStreamResponse): TradesStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradesStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradesStreamResponse;
    static deserializeBinaryFromReader(message: TradesStreamResponse, reader: jspb.BinaryReader): TradesStreamResponse;
}

export namespace TradesStreamResponse {
    export type AsObject = {
        orderTrades?: OrderTrades.AsObject,
        ping?: common_pb.Ping.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        ORDER_TRADES = 1,
        PING = 2,
    }

}

export class OrderTrades extends jspb.Message { 
    getOrderId(): string;
    setOrderId(value: string): OrderTrades;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OrderTrades;
    getDirection(): OrderDirection;
    setDirection(value: OrderDirection): OrderTrades;
    getFigi(): string;
    setFigi(value: string): OrderTrades;
    clearTradesList(): void;
    getTradesList(): Array<OrderTrade>;
    setTradesList(value: Array<OrderTrade>): OrderTrades;
    addTrades(value?: OrderTrade, index?: number): OrderTrade;
    getAccountId(): string;
    setAccountId(value: string): OrderTrades;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): OrderTrades;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderTrades.AsObject;
    static toObject(includeInstance: boolean, msg: OrderTrades): OrderTrades.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderTrades, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderTrades;
    static deserializeBinaryFromReader(message: OrderTrades, reader: jspb.BinaryReader): OrderTrades;
}

export namespace OrderTrades {
    export type AsObject = {
        orderId: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        direction: OrderDirection,
        figi: string,
        tradesList: Array<OrderTrade.AsObject>,
        accountId: string,
        instrumentUid: string,
    }
}

export class OrderTrade extends jspb.Message { 

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateTime(value?: google_protobuf_timestamp_pb.Timestamp): OrderTrade;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.Quotation | undefined;
    setPrice(value?: common_pb.Quotation): OrderTrade;
    getQuantity(): number;
    setQuantity(value: number): OrderTrade;
    getTradeId(): string;
    setTradeId(value: string): OrderTrade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderTrade.AsObject;
    static toObject(includeInstance: boolean, msg: OrderTrade): OrderTrade.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderTrade, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderTrade;
    static deserializeBinaryFromReader(message: OrderTrade, reader: jspb.BinaryReader): OrderTrade;
}

export namespace OrderTrade {
    export type AsObject = {
        dateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        price?: common_pb.Quotation.AsObject,
        quantity: number,
        tradeId: string,
    }
}

export class PostOrderRequest extends jspb.Message { 

    hasFigi(): boolean;
    clearFigi(): void;
    getFigi(): string | undefined;
    setFigi(value: string): PostOrderRequest;
    getQuantity(): number;
    setQuantity(value: number): PostOrderRequest;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.Quotation | undefined;
    setPrice(value?: common_pb.Quotation): PostOrderRequest;
    getDirection(): OrderDirection;
    setDirection(value: OrderDirection): PostOrderRequest;
    getAccountId(): string;
    setAccountId(value: string): PostOrderRequest;
    getOrderType(): OrderType;
    setOrderType(value: OrderType): PostOrderRequest;
    getOrderId(): string;
    setOrderId(value: string): PostOrderRequest;
    getInstrumentId(): string;
    setInstrumentId(value: string): PostOrderRequest;
    getTimeInForce(): TimeInForceType;
    setTimeInForce(value: TimeInForceType): PostOrderRequest;
    getPriceType(): common_pb.PriceType;
    setPriceType(value: common_pb.PriceType): PostOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PostOrderRequest): PostOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostOrderRequest;
    static deserializeBinaryFromReader(message: PostOrderRequest, reader: jspb.BinaryReader): PostOrderRequest;
}

export namespace PostOrderRequest {
    export type AsObject = {
        figi?: string,
        quantity: number,
        price?: common_pb.Quotation.AsObject,
        direction: OrderDirection,
        accountId: string,
        orderType: OrderType,
        orderId: string,
        instrumentId: string,
        timeInForce: TimeInForceType,
        priceType: common_pb.PriceType,
    }
}

export class PostOrderResponse extends jspb.Message { 
    getOrderId(): string;
    setOrderId(value: string): PostOrderResponse;
    getExecutionReportStatus(): OrderExecutionReportStatus;
    setExecutionReportStatus(value: OrderExecutionReportStatus): PostOrderResponse;
    getLotsRequested(): number;
    setLotsRequested(value: number): PostOrderResponse;
    getLotsExecuted(): number;
    setLotsExecuted(value: number): PostOrderResponse;

    hasInitialOrderPrice(): boolean;
    clearInitialOrderPrice(): void;
    getInitialOrderPrice(): common_pb.MoneyValue | undefined;
    setInitialOrderPrice(value?: common_pb.MoneyValue): PostOrderResponse;

    hasExecutedOrderPrice(): boolean;
    clearExecutedOrderPrice(): void;
    getExecutedOrderPrice(): common_pb.MoneyValue | undefined;
    setExecutedOrderPrice(value?: common_pb.MoneyValue): PostOrderResponse;

    hasTotalOrderAmount(): boolean;
    clearTotalOrderAmount(): void;
    getTotalOrderAmount(): common_pb.MoneyValue | undefined;
    setTotalOrderAmount(value?: common_pb.MoneyValue): PostOrderResponse;

    hasInitialCommission(): boolean;
    clearInitialCommission(): void;
    getInitialCommission(): common_pb.MoneyValue | undefined;
    setInitialCommission(value?: common_pb.MoneyValue): PostOrderResponse;

    hasExecutedCommission(): boolean;
    clearExecutedCommission(): void;
    getExecutedCommission(): common_pb.MoneyValue | undefined;
    setExecutedCommission(value?: common_pb.MoneyValue): PostOrderResponse;

    hasAciValue(): boolean;
    clearAciValue(): void;
    getAciValue(): common_pb.MoneyValue | undefined;
    setAciValue(value?: common_pb.MoneyValue): PostOrderResponse;
    getFigi(): string;
    setFigi(value: string): PostOrderResponse;
    getDirection(): OrderDirection;
    setDirection(value: OrderDirection): PostOrderResponse;

    hasInitialSecurityPrice(): boolean;
    clearInitialSecurityPrice(): void;
    getInitialSecurityPrice(): common_pb.MoneyValue | undefined;
    setInitialSecurityPrice(value?: common_pb.MoneyValue): PostOrderResponse;
    getOrderType(): OrderType;
    setOrderType(value: OrderType): PostOrderResponse;
    getMessage(): string;
    setMessage(value: string): PostOrderResponse;

    hasInitialOrderPricePt(): boolean;
    clearInitialOrderPricePt(): void;
    getInitialOrderPricePt(): common_pb.Quotation | undefined;
    setInitialOrderPricePt(value?: common_pb.Quotation): PostOrderResponse;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): PostOrderResponse;
    getOrderRequestId(): string;
    setOrderRequestId(value: string): PostOrderResponse;

    hasResponseMetadata(): boolean;
    clearResponseMetadata(): void;
    getResponseMetadata(): common_pb.ResponseMetadata | undefined;
    setResponseMetadata(value?: common_pb.ResponseMetadata): PostOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PostOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PostOrderResponse): PostOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PostOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PostOrderResponse;
    static deserializeBinaryFromReader(message: PostOrderResponse, reader: jspb.BinaryReader): PostOrderResponse;
}

export namespace PostOrderResponse {
    export type AsObject = {
        orderId: string,
        executionReportStatus: OrderExecutionReportStatus,
        lotsRequested: number,
        lotsExecuted: number,
        initialOrderPrice?: common_pb.MoneyValue.AsObject,
        executedOrderPrice?: common_pb.MoneyValue.AsObject,
        totalOrderAmount?: common_pb.MoneyValue.AsObject,
        initialCommission?: common_pb.MoneyValue.AsObject,
        executedCommission?: common_pb.MoneyValue.AsObject,
        aciValue?: common_pb.MoneyValue.AsObject,
        figi: string,
        direction: OrderDirection,
        initialSecurityPrice?: common_pb.MoneyValue.AsObject,
        orderType: OrderType,
        message: string,
        initialOrderPricePt?: common_pb.Quotation.AsObject,
        instrumentUid: string,
        orderRequestId: string,
        responseMetadata?: common_pb.ResponseMetadata.AsObject,
    }
}

export class CancelOrderRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): CancelOrderRequest;
    getOrderId(): string;
    setOrderId(value: string): CancelOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CancelOrderRequest): CancelOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelOrderRequest;
    static deserializeBinaryFromReader(message: CancelOrderRequest, reader: jspb.BinaryReader): CancelOrderRequest;
}

export namespace CancelOrderRequest {
    export type AsObject = {
        accountId: string,
        orderId: string,
    }
}

export class CancelOrderResponse extends jspb.Message { 

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): CancelOrderResponse;

    hasResponseMetadata(): boolean;
    clearResponseMetadata(): void;
    getResponseMetadata(): common_pb.ResponseMetadata | undefined;
    setResponseMetadata(value?: common_pb.ResponseMetadata): CancelOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancelOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CancelOrderResponse): CancelOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancelOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancelOrderResponse;
    static deserializeBinaryFromReader(message: CancelOrderResponse, reader: jspb.BinaryReader): CancelOrderResponse;
}

export namespace CancelOrderResponse {
    export type AsObject = {
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        responseMetadata?: common_pb.ResponseMetadata.AsObject,
    }
}

export class GetOrderStateRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): GetOrderStateRequest;
    getOrderId(): string;
    setOrderId(value: string): GetOrderStateRequest;
    getPriceType(): common_pb.PriceType;
    setPriceType(value: common_pb.PriceType): GetOrderStateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderStateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderStateRequest): GetOrderStateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderStateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderStateRequest;
    static deserializeBinaryFromReader(message: GetOrderStateRequest, reader: jspb.BinaryReader): GetOrderStateRequest;
}

export namespace GetOrderStateRequest {
    export type AsObject = {
        accountId: string,
        orderId: string,
        priceType: common_pb.PriceType,
    }
}

export class GetOrdersRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): GetOrdersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersRequest): GetOrdersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersRequest;
    static deserializeBinaryFromReader(message: GetOrdersRequest, reader: jspb.BinaryReader): GetOrdersRequest;
}

export namespace GetOrdersRequest {
    export type AsObject = {
        accountId: string,
    }
}

export class GetOrdersResponse extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<OrderState>;
    setOrdersList(value: Array<OrderState>): GetOrdersResponse;
    addOrders(value?: OrderState, index?: number): OrderState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrdersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrdersResponse): GetOrdersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrdersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrdersResponse;
    static deserializeBinaryFromReader(message: GetOrdersResponse, reader: jspb.BinaryReader): GetOrdersResponse;
}

export namespace GetOrdersResponse {
    export type AsObject = {
        ordersList: Array<OrderState.AsObject>,
    }
}

export class OrderState extends jspb.Message { 
    getOrderId(): string;
    setOrderId(value: string): OrderState;
    getExecutionReportStatus(): OrderExecutionReportStatus;
    setExecutionReportStatus(value: OrderExecutionReportStatus): OrderState;
    getLotsRequested(): number;
    setLotsRequested(value: number): OrderState;
    getLotsExecuted(): number;
    setLotsExecuted(value: number): OrderState;

    hasInitialOrderPrice(): boolean;
    clearInitialOrderPrice(): void;
    getInitialOrderPrice(): common_pb.MoneyValue | undefined;
    setInitialOrderPrice(value?: common_pb.MoneyValue): OrderState;

    hasExecutedOrderPrice(): boolean;
    clearExecutedOrderPrice(): void;
    getExecutedOrderPrice(): common_pb.MoneyValue | undefined;
    setExecutedOrderPrice(value?: common_pb.MoneyValue): OrderState;

    hasTotalOrderAmount(): boolean;
    clearTotalOrderAmount(): void;
    getTotalOrderAmount(): common_pb.MoneyValue | undefined;
    setTotalOrderAmount(value?: common_pb.MoneyValue): OrderState;

    hasAveragePositionPrice(): boolean;
    clearAveragePositionPrice(): void;
    getAveragePositionPrice(): common_pb.MoneyValue | undefined;
    setAveragePositionPrice(value?: common_pb.MoneyValue): OrderState;

    hasInitialCommission(): boolean;
    clearInitialCommission(): void;
    getInitialCommission(): common_pb.MoneyValue | undefined;
    setInitialCommission(value?: common_pb.MoneyValue): OrderState;

    hasExecutedCommission(): boolean;
    clearExecutedCommission(): void;
    getExecutedCommission(): common_pb.MoneyValue | undefined;
    setExecutedCommission(value?: common_pb.MoneyValue): OrderState;
    getFigi(): string;
    setFigi(value: string): OrderState;
    getDirection(): OrderDirection;
    setDirection(value: OrderDirection): OrderState;

    hasInitialSecurityPrice(): boolean;
    clearInitialSecurityPrice(): void;
    getInitialSecurityPrice(): common_pb.MoneyValue | undefined;
    setInitialSecurityPrice(value?: common_pb.MoneyValue): OrderState;
    clearStagesList(): void;
    getStagesList(): Array<OrderStage>;
    setStagesList(value: Array<OrderStage>): OrderState;
    addStages(value?: OrderStage, index?: number): OrderStage;

    hasServiceCommission(): boolean;
    clearServiceCommission(): void;
    getServiceCommission(): common_pb.MoneyValue | undefined;
    setServiceCommission(value?: common_pb.MoneyValue): OrderState;
    getCurrency(): string;
    setCurrency(value: string): OrderState;
    getOrderType(): OrderType;
    setOrderType(value: OrderType): OrderState;

    hasOrderDate(): boolean;
    clearOrderDate(): void;
    getOrderDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setOrderDate(value?: google_protobuf_timestamp_pb.Timestamp): OrderState;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): OrderState;
    getOrderRequestId(): string;
    setOrderRequestId(value: string): OrderState;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderState.AsObject;
    static toObject(includeInstance: boolean, msg: OrderState): OrderState.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderState, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderState;
    static deserializeBinaryFromReader(message: OrderState, reader: jspb.BinaryReader): OrderState;
}

export namespace OrderState {
    export type AsObject = {
        orderId: string,
        executionReportStatus: OrderExecutionReportStatus,
        lotsRequested: number,
        lotsExecuted: number,
        initialOrderPrice?: common_pb.MoneyValue.AsObject,
        executedOrderPrice?: common_pb.MoneyValue.AsObject,
        totalOrderAmount?: common_pb.MoneyValue.AsObject,
        averagePositionPrice?: common_pb.MoneyValue.AsObject,
        initialCommission?: common_pb.MoneyValue.AsObject,
        executedCommission?: common_pb.MoneyValue.AsObject,
        figi: string,
        direction: OrderDirection,
        initialSecurityPrice?: common_pb.MoneyValue.AsObject,
        stagesList: Array<OrderStage.AsObject>,
        serviceCommission?: common_pb.MoneyValue.AsObject,
        currency: string,
        orderType: OrderType,
        orderDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        instrumentUid: string,
        orderRequestId: string,
    }
}

export class OrderStage extends jspb.Message { 

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.MoneyValue | undefined;
    setPrice(value?: common_pb.MoneyValue): OrderStage;
    getQuantity(): number;
    setQuantity(value: number): OrderStage;
    getTradeId(): string;
    setTradeId(value: string): OrderStage;

    hasExecutionTime(): boolean;
    clearExecutionTime(): void;
    getExecutionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExecutionTime(value?: google_protobuf_timestamp_pb.Timestamp): OrderStage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderStage.AsObject;
    static toObject(includeInstance: boolean, msg: OrderStage): OrderStage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderStage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderStage;
    static deserializeBinaryFromReader(message: OrderStage, reader: jspb.BinaryReader): OrderStage;
}

export namespace OrderStage {
    export type AsObject = {
        price?: common_pb.MoneyValue.AsObject,
        quantity: number,
        tradeId: string,
        executionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class ReplaceOrderRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): ReplaceOrderRequest;
    getOrderId(): string;
    setOrderId(value: string): ReplaceOrderRequest;
    getIdempotencyKey(): string;
    setIdempotencyKey(value: string): ReplaceOrderRequest;
    getQuantity(): number;
    setQuantity(value: number): ReplaceOrderRequest;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.Quotation | undefined;
    setPrice(value?: common_pb.Quotation): ReplaceOrderRequest;

    hasPriceType(): boolean;
    clearPriceType(): void;
    getPriceType(): common_pb.PriceType | undefined;
    setPriceType(value: common_pb.PriceType): ReplaceOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReplaceOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReplaceOrderRequest): ReplaceOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReplaceOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReplaceOrderRequest;
    static deserializeBinaryFromReader(message: ReplaceOrderRequest, reader: jspb.BinaryReader): ReplaceOrderRequest;
}

export namespace ReplaceOrderRequest {
    export type AsObject = {
        accountId: string,
        orderId: string,
        idempotencyKey: string,
        quantity: number,
        price?: common_pb.Quotation.AsObject,
        priceType?: common_pb.PriceType,
    }
}

export class GetMaxLotsRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): GetMaxLotsRequest;
    getInstrumentId(): string;
    setInstrumentId(value: string): GetMaxLotsRequest;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.Quotation | undefined;
    setPrice(value?: common_pb.Quotation): GetMaxLotsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMaxLotsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetMaxLotsRequest): GetMaxLotsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMaxLotsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMaxLotsRequest;
    static deserializeBinaryFromReader(message: GetMaxLotsRequest, reader: jspb.BinaryReader): GetMaxLotsRequest;
}

export namespace GetMaxLotsRequest {
    export type AsObject = {
        accountId: string,
        instrumentId: string,
        price?: common_pb.Quotation.AsObject,
    }
}

export class GetMaxLotsResponse extends jspb.Message { 
    getCurrency(): string;
    setCurrency(value: string): GetMaxLotsResponse;

    hasBuyLimits(): boolean;
    clearBuyLimits(): void;
    getBuyLimits(): GetMaxLotsResponse.BuyLimitsView | undefined;
    setBuyLimits(value?: GetMaxLotsResponse.BuyLimitsView): GetMaxLotsResponse;

    hasBuyMarginLimits(): boolean;
    clearBuyMarginLimits(): void;
    getBuyMarginLimits(): GetMaxLotsResponse.BuyLimitsView | undefined;
    setBuyMarginLimits(value?: GetMaxLotsResponse.BuyLimitsView): GetMaxLotsResponse;

    hasSellLimits(): boolean;
    clearSellLimits(): void;
    getSellLimits(): GetMaxLotsResponse.SellLimitsView | undefined;
    setSellLimits(value?: GetMaxLotsResponse.SellLimitsView): GetMaxLotsResponse;

    hasSellMarginLimits(): boolean;
    clearSellMarginLimits(): void;
    getSellMarginLimits(): GetMaxLotsResponse.SellLimitsView | undefined;
    setSellMarginLimits(value?: GetMaxLotsResponse.SellLimitsView): GetMaxLotsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetMaxLotsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetMaxLotsResponse): GetMaxLotsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetMaxLotsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetMaxLotsResponse;
    static deserializeBinaryFromReader(message: GetMaxLotsResponse, reader: jspb.BinaryReader): GetMaxLotsResponse;
}

export namespace GetMaxLotsResponse {
    export type AsObject = {
        currency: string,
        buyLimits?: GetMaxLotsResponse.BuyLimitsView.AsObject,
        buyMarginLimits?: GetMaxLotsResponse.BuyLimitsView.AsObject,
        sellLimits?: GetMaxLotsResponse.SellLimitsView.AsObject,
        sellMarginLimits?: GetMaxLotsResponse.SellLimitsView.AsObject,
    }


    export class BuyLimitsView extends jspb.Message { 

        hasBuyMoneyAmount(): boolean;
        clearBuyMoneyAmount(): void;
        getBuyMoneyAmount(): common_pb.Quotation | undefined;
        setBuyMoneyAmount(value?: common_pb.Quotation): BuyLimitsView;
        getBuyMaxLots(): number;
        setBuyMaxLots(value: number): BuyLimitsView;
        getBuyMaxMarketLots(): number;
        setBuyMaxMarketLots(value: number): BuyLimitsView;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BuyLimitsView.AsObject;
        static toObject(includeInstance: boolean, msg: BuyLimitsView): BuyLimitsView.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BuyLimitsView, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BuyLimitsView;
        static deserializeBinaryFromReader(message: BuyLimitsView, reader: jspb.BinaryReader): BuyLimitsView;
    }

    export namespace BuyLimitsView {
        export type AsObject = {
            buyMoneyAmount?: common_pb.Quotation.AsObject,
            buyMaxLots: number,
            buyMaxMarketLots: number,
        }
    }

    export class SellLimitsView extends jspb.Message { 
        getSellMaxLots(): number;
        setSellMaxLots(value: number): SellLimitsView;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SellLimitsView.AsObject;
        static toObject(includeInstance: boolean, msg: SellLimitsView): SellLimitsView.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SellLimitsView, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SellLimitsView;
        static deserializeBinaryFromReader(message: SellLimitsView, reader: jspb.BinaryReader): SellLimitsView;
    }

    export namespace SellLimitsView {
        export type AsObject = {
            sellMaxLots: number,
        }
    }

}

export class GetOrderPriceRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): GetOrderPriceRequest;
    getInstrumentId(): string;
    setInstrumentId(value: string): GetOrderPriceRequest;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.Quotation | undefined;
    setPrice(value?: common_pb.Quotation): GetOrderPriceRequest;
    getDirection(): OrderDirection;
    setDirection(value: OrderDirection): GetOrderPriceRequest;
    getQuantity(): number;
    setQuantity(value: number): GetOrderPriceRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderPriceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderPriceRequest): GetOrderPriceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderPriceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderPriceRequest;
    static deserializeBinaryFromReader(message: GetOrderPriceRequest, reader: jspb.BinaryReader): GetOrderPriceRequest;
}

export namespace GetOrderPriceRequest {
    export type AsObject = {
        accountId: string,
        instrumentId: string,
        price?: common_pb.Quotation.AsObject,
        direction: OrderDirection,
        quantity: number,
    }
}

export class GetOrderPriceResponse extends jspb.Message { 

    hasTotalOrderAmount(): boolean;
    clearTotalOrderAmount(): void;
    getTotalOrderAmount(): common_pb.MoneyValue | undefined;
    setTotalOrderAmount(value?: common_pb.MoneyValue): GetOrderPriceResponse;

    hasInitialOrderAmount(): boolean;
    clearInitialOrderAmount(): void;
    getInitialOrderAmount(): common_pb.MoneyValue | undefined;
    setInitialOrderAmount(value?: common_pb.MoneyValue): GetOrderPriceResponse;
    getLotsRequested(): number;
    setLotsRequested(value: number): GetOrderPriceResponse;

    hasExecutedCommission(): boolean;
    clearExecutedCommission(): void;
    getExecutedCommission(): common_pb.MoneyValue | undefined;
    setExecutedCommission(value?: common_pb.MoneyValue): GetOrderPriceResponse;

    hasExecutedCommissionRub(): boolean;
    clearExecutedCommissionRub(): void;
    getExecutedCommissionRub(): common_pb.MoneyValue | undefined;
    setExecutedCommissionRub(value?: common_pb.MoneyValue): GetOrderPriceResponse;

    hasServiceCommission(): boolean;
    clearServiceCommission(): void;
    getServiceCommission(): common_pb.MoneyValue | undefined;
    setServiceCommission(value?: common_pb.MoneyValue): GetOrderPriceResponse;

    hasDealCommission(): boolean;
    clearDealCommission(): void;
    getDealCommission(): common_pb.MoneyValue | undefined;
    setDealCommission(value?: common_pb.MoneyValue): GetOrderPriceResponse;

    hasExtraBond(): boolean;
    clearExtraBond(): void;
    getExtraBond(): GetOrderPriceResponse.ExtraBond | undefined;
    setExtraBond(value?: GetOrderPriceResponse.ExtraBond): GetOrderPriceResponse;

    hasExtraFuture(): boolean;
    clearExtraFuture(): void;
    getExtraFuture(): GetOrderPriceResponse.ExtraFuture | undefined;
    setExtraFuture(value?: GetOrderPriceResponse.ExtraFuture): GetOrderPriceResponse;

    getInstrumentExtraCase(): GetOrderPriceResponse.InstrumentExtraCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderPriceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderPriceResponse): GetOrderPriceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderPriceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderPriceResponse;
    static deserializeBinaryFromReader(message: GetOrderPriceResponse, reader: jspb.BinaryReader): GetOrderPriceResponse;
}

export namespace GetOrderPriceResponse {
    export type AsObject = {
        totalOrderAmount?: common_pb.MoneyValue.AsObject,
        initialOrderAmount?: common_pb.MoneyValue.AsObject,
        lotsRequested: number,
        executedCommission?: common_pb.MoneyValue.AsObject,
        executedCommissionRub?: common_pb.MoneyValue.AsObject,
        serviceCommission?: common_pb.MoneyValue.AsObject,
        dealCommission?: common_pb.MoneyValue.AsObject,
        extraBond?: GetOrderPriceResponse.ExtraBond.AsObject,
        extraFuture?: GetOrderPriceResponse.ExtraFuture.AsObject,
    }


    export class ExtraBond extends jspb.Message { 

        hasAciValue(): boolean;
        clearAciValue(): void;
        getAciValue(): common_pb.MoneyValue | undefined;
        setAciValue(value?: common_pb.MoneyValue): ExtraBond;

        hasNominalConversionRate(): boolean;
        clearNominalConversionRate(): void;
        getNominalConversionRate(): common_pb.Quotation | undefined;
        setNominalConversionRate(value?: common_pb.Quotation): ExtraBond;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ExtraBond.AsObject;
        static toObject(includeInstance: boolean, msg: ExtraBond): ExtraBond.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ExtraBond, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ExtraBond;
        static deserializeBinaryFromReader(message: ExtraBond, reader: jspb.BinaryReader): ExtraBond;
    }

    export namespace ExtraBond {
        export type AsObject = {
            aciValue?: common_pb.MoneyValue.AsObject,
            nominalConversionRate?: common_pb.Quotation.AsObject,
        }
    }

    export class ExtraFuture extends jspb.Message { 

        hasInitialMargin(): boolean;
        clearInitialMargin(): void;
        getInitialMargin(): common_pb.MoneyValue | undefined;
        setInitialMargin(value?: common_pb.MoneyValue): ExtraFuture;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ExtraFuture.AsObject;
        static toObject(includeInstance: boolean, msg: ExtraFuture): ExtraFuture.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ExtraFuture, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ExtraFuture;
        static deserializeBinaryFromReader(message: ExtraFuture, reader: jspb.BinaryReader): ExtraFuture;
    }

    export namespace ExtraFuture {
        export type AsObject = {
            initialMargin?: common_pb.MoneyValue.AsObject,
        }
    }


    export enum InstrumentExtraCase {
        INSTRUMENT_EXTRA_NOT_SET = 0,
        EXTRA_BOND = 12,
        EXTRA_FUTURE = 13,
    }

}

export class OrderStateStreamRequest extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<string>;
    setAccountsList(value: Array<string>): OrderStateStreamRequest;
    addAccounts(value: string, index?: number): string;

    hasPingDelayMillis(): boolean;
    clearPingDelayMillis(): void;
    getPingDelayMillis(): number | undefined;
    setPingDelayMillis(value: number): OrderStateStreamRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderStateStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrderStateStreamRequest): OrderStateStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderStateStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderStateStreamRequest;
    static deserializeBinaryFromReader(message: OrderStateStreamRequest, reader: jspb.BinaryReader): OrderStateStreamRequest;
}

export namespace OrderStateStreamRequest {
    export type AsObject = {
        accountsList: Array<string>,
        pingDelayMillis?: number,
    }
}

export class OrderStateStreamResponse extends jspb.Message { 

    hasOrderState(): boolean;
    clearOrderState(): void;
    getOrderState(): OrderStateStreamResponse.OrderState | undefined;
    setOrderState(value?: OrderStateStreamResponse.OrderState): OrderStateStreamResponse;

    hasPing(): boolean;
    clearPing(): void;
    getPing(): common_pb.Ping | undefined;
    setPing(value?: common_pb.Ping): OrderStateStreamResponse;

    hasSubscription(): boolean;
    clearSubscription(): void;
    getSubscription(): OrderStateStreamResponse.SubscriptionResponse | undefined;
    setSubscription(value?: OrderStateStreamResponse.SubscriptionResponse): OrderStateStreamResponse;

    getPayloadCase(): OrderStateStreamResponse.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderStateStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrderStateStreamResponse): OrderStateStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderStateStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderStateStreamResponse;
    static deserializeBinaryFromReader(message: OrderStateStreamResponse, reader: jspb.BinaryReader): OrderStateStreamResponse;
}

export namespace OrderStateStreamResponse {
    export type AsObject = {
        orderState?: OrderStateStreamResponse.OrderState.AsObject,
        ping?: common_pb.Ping.AsObject,
        subscription?: OrderStateStreamResponse.SubscriptionResponse.AsObject,
    }


    export class SubscriptionResponse extends jspb.Message { 
        getTrackingId(): string;
        setTrackingId(value: string): SubscriptionResponse;
        getStatus(): OrderStateStreamResponse.SubscriptionResponse.SubscriptionStatus;
        setStatus(value: OrderStateStreamResponse.SubscriptionResponse.SubscriptionStatus): SubscriptionResponse;
        getStreamId(): string;
        setStreamId(value: string): SubscriptionResponse;
        clearAccountsList(): void;
        getAccountsList(): Array<string>;
        setAccountsList(value: Array<string>): SubscriptionResponse;
        addAccounts(value: string, index?: number): string;

        hasError(): boolean;
        clearError(): void;
        getError(): OrderStateStreamResponse.SubscriptionResponse.ErrorDetail | undefined;
        setError(value?: OrderStateStreamResponse.SubscriptionResponse.ErrorDetail): SubscriptionResponse;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SubscriptionResponse.AsObject;
        static toObject(includeInstance: boolean, msg: SubscriptionResponse): SubscriptionResponse.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SubscriptionResponse, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SubscriptionResponse;
        static deserializeBinaryFromReader(message: SubscriptionResponse, reader: jspb.BinaryReader): SubscriptionResponse;
    }

    export namespace SubscriptionResponse {
        export type AsObject = {
            trackingId: string,
            status: OrderStateStreamResponse.SubscriptionResponse.SubscriptionStatus,
            streamId: string,
            accountsList: Array<string>,
            error?: OrderStateStreamResponse.SubscriptionResponse.ErrorDetail.AsObject,
        }


        export class ErrorDetail extends jspb.Message { 
            getCode(): string;
            setCode(value: string): ErrorDetail;
            getMessage(): string;
            setMessage(value: string): ErrorDetail;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ErrorDetail.AsObject;
            static toObject(includeInstance: boolean, msg: ErrorDetail): ErrorDetail.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ErrorDetail, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ErrorDetail;
            static deserializeBinaryFromReader(message: ErrorDetail, reader: jspb.BinaryReader): ErrorDetail;
        }

        export namespace ErrorDetail {
            export type AsObject = {
                code: string,
                message: string,
            }
        }


        export enum SubscriptionStatus {
    SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
    SUBSCRIPTION_STATUS_OK = 1,
    SUBSCRIPTION_STATUS_ERROR = 13,
        }

    }

    export class OrderState extends jspb.Message { 
        getOrderId(): string;
        setOrderId(value: string): OrderState;

        hasOrderRequestId(): boolean;
        clearOrderRequestId(): void;
        getOrderRequestId(): string | undefined;
        setOrderRequestId(value: string): OrderState;
        getClientCode(): string;
        setClientCode(value: string): OrderState;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): OrderState;
        getExecutionReportStatus(): OrderExecutionReportStatus;
        setExecutionReportStatus(value: OrderExecutionReportStatus): OrderState;

        hasStatusInfo(): boolean;
        clearStatusInfo(): void;
        getStatusInfo(): OrderStateStreamResponse.StatusCauseInfo | undefined;
        setStatusInfo(value: OrderStateStreamResponse.StatusCauseInfo): OrderState;
        getTicker(): string;
        setTicker(value: string): OrderState;
        getClassCode(): string;
        setClassCode(value: string): OrderState;
        getLotSize(): number;
        setLotSize(value: number): OrderState;
        getDirection(): OrderDirection;
        setDirection(value: OrderDirection): OrderState;
        getTimeInForce(): TimeInForceType;
        setTimeInForce(value: TimeInForceType): OrderState;
        getOrderType(): OrderType;
        setOrderType(value: OrderType): OrderState;
        getAccountId(): string;
        setAccountId(value: string): OrderState;

        hasInitialOrderPrice(): boolean;
        clearInitialOrderPrice(): void;
        getInitialOrderPrice(): common_pb.MoneyValue | undefined;
        setInitialOrderPrice(value?: common_pb.MoneyValue): OrderState;

        hasOrderPrice(): boolean;
        clearOrderPrice(): void;
        getOrderPrice(): common_pb.MoneyValue | undefined;
        setOrderPrice(value?: common_pb.MoneyValue): OrderState;

        hasAmount(): boolean;
        clearAmount(): void;
        getAmount(): common_pb.MoneyValue | undefined;
        setAmount(value?: common_pb.MoneyValue): OrderState;

        hasExecutedOrderPrice(): boolean;
        clearExecutedOrderPrice(): void;
        getExecutedOrderPrice(): common_pb.MoneyValue | undefined;
        setExecutedOrderPrice(value?: common_pb.MoneyValue): OrderState;
        getCurrency(): string;
        setCurrency(value: string): OrderState;
        getLotsRequested(): number;
        setLotsRequested(value: number): OrderState;
        getLotsExecuted(): number;
        setLotsExecuted(value: number): OrderState;
        getLotsLeft(): number;
        setLotsLeft(value: number): OrderState;
        getLotsCancelled(): number;
        setLotsCancelled(value: number): OrderState;

        hasMarker(): boolean;
        clearMarker(): void;
        getMarker(): OrderStateStreamResponse.MarkerType | undefined;
        setMarker(value: OrderStateStreamResponse.MarkerType): OrderState;
        clearTradesList(): void;
        getTradesList(): Array<OrderTrade>;
        setTradesList(value: Array<OrderTrade>): OrderState;
        addTrades(value?: OrderTrade, index?: number): OrderTrade;

        hasCompletionTime(): boolean;
        clearCompletionTime(): void;
        getCompletionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCompletionTime(value?: google_protobuf_timestamp_pb.Timestamp): OrderState;
        getExchange(): string;
        setExchange(value: string): OrderState;
        getInstrumentUid(): string;
        setInstrumentUid(value: string): OrderState;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OrderState.AsObject;
        static toObject(includeInstance: boolean, msg: OrderState): OrderState.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OrderState, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OrderState;
        static deserializeBinaryFromReader(message: OrderState, reader: jspb.BinaryReader): OrderState;
    }

    export namespace OrderState {
        export type AsObject = {
            orderId: string,
            orderRequestId?: string,
            clientCode: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            executionReportStatus: OrderExecutionReportStatus,
            statusInfo?: OrderStateStreamResponse.StatusCauseInfo,
            ticker: string,
            classCode: string,
            lotSize: number,
            direction: OrderDirection,
            timeInForce: TimeInForceType,
            orderType: OrderType,
            accountId: string,
            initialOrderPrice?: common_pb.MoneyValue.AsObject,
            orderPrice?: common_pb.MoneyValue.AsObject,
            amount?: common_pb.MoneyValue.AsObject,
            executedOrderPrice?: common_pb.MoneyValue.AsObject,
            currency: string,
            lotsRequested: number,
            lotsExecuted: number,
            lotsLeft: number,
            lotsCancelled: number,
            marker?: OrderStateStreamResponse.MarkerType,
            tradesList: Array<OrderTrade.AsObject>,
            completionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            exchange: string,
            instrumentUid: string,
        }
    }


    export enum MarkerType {
    MARKER_UNKNOWN = 0,
    MARKER_BROKER = 1,
    MARKER_CHAT = 2,
    MARKER_PAPER = 3,
    MARKER_MARGIN = 4,
    MARKER_TKBNM = 5,
    MARKER_SHORT = 6,
    MARKER_SPECMM = 7,
    MARKER_PO = 8,
    }

    export enum StatusCauseInfo {
    CAUSE_UNSPECIFIED = 0,
    CAUSE_CANCELLED_BY_CLIENT = 15,
    CAUSE_CANCELLED_BY_EXCHANGE = 1,
    CAUSE_CANCELLED_NOT_ENOUGH_POSITION = 2,
    CAUSE_CANCELLED_BY_CLIENT_BLOCK = 3,
    CAUSE_REJECTED_BY_BROKER = 4,
    CAUSE_REJECTED_BY_EXCHANGE = 5,
    CAUSE_CANCELLED_BY_BROKER = 6,
    }


    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        ORDER_STATE = 1,
        PING = 2,
        SUBSCRIPTION = 3,
    }

}

export enum OrderDirection {
    ORDER_DIRECTION_UNSPECIFIED = 0,
    ORDER_DIRECTION_BUY = 1,
    ORDER_DIRECTION_SELL = 2,
}

export enum OrderType {
    ORDER_TYPE_UNSPECIFIED = 0,
    ORDER_TYPE_LIMIT = 1,
    ORDER_TYPE_MARKET = 2,
    ORDER_TYPE_BESTPRICE = 3,
}

export enum OrderExecutionReportStatus {
    EXECUTION_REPORT_STATUS_UNSPECIFIED = 0,
    EXECUTION_REPORT_STATUS_FILL = 1,
    EXECUTION_REPORT_STATUS_REJECTED = 2,
    EXECUTION_REPORT_STATUS_CANCELLED = 3,
    EXECUTION_REPORT_STATUS_NEW = 4,
    EXECUTION_REPORT_STATUS_PARTIALLYFILL = 5,
}

export enum TimeInForceType {
    TIME_IN_FORCE_UNSPECIFIED = 0,
    TIME_IN_FORCE_DAY = 1,
    TIME_IN_FORCE_FILL_AND_KILL = 2,
    TIME_IN_FORCE_FILL_OR_KILL = 3,
}
