// package: tinkoff.public.invest.api.contract.v1
// file: operations.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";

export class OperationsRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): OperationsRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): OperationsRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): OperationsRequest;

    hasState(): boolean;
    clearState(): void;
    getState(): OperationState | undefined;
    setState(value: OperationState): OperationsRequest;

    hasFigi(): boolean;
    clearFigi(): void;
    getFigi(): string | undefined;
    setFigi(value: string): OperationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OperationsRequest): OperationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationsRequest;
    static deserializeBinaryFromReader(message: OperationsRequest, reader: jspb.BinaryReader): OperationsRequest;
}

export namespace OperationsRequest {
    export type AsObject = {
        accountId: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        state?: OperationState,
        figi?: string,
    }
}

export class OperationsResponse extends jspb.Message { 
    clearOperationsList(): void;
    getOperationsList(): Array<Operation>;
    setOperationsList(value: Array<Operation>): OperationsResponse;
    addOperations(value?: Operation, index?: number): Operation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OperationsResponse): OperationsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationsResponse;
    static deserializeBinaryFromReader(message: OperationsResponse, reader: jspb.BinaryReader): OperationsResponse;
}

export namespace OperationsResponse {
    export type AsObject = {
        operationsList: Array<Operation.AsObject>,
    }
}

export class Operation extends jspb.Message { 
    getId(): string;
    setId(value: string): Operation;
    getParentOperationId(): string;
    setParentOperationId(value: string): Operation;
    getCurrency(): string;
    setCurrency(value: string): Operation;

    hasPayment(): boolean;
    clearPayment(): void;
    getPayment(): common_pb.MoneyValue | undefined;
    setPayment(value?: common_pb.MoneyValue): Operation;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.MoneyValue | undefined;
    setPrice(value?: common_pb.MoneyValue): Operation;
    getState(): OperationState;
    setState(value: OperationState): Operation;
    getQuantity(): number;
    setQuantity(value: number): Operation;
    getQuantityRest(): number;
    setQuantityRest(value: number): Operation;
    getFigi(): string;
    setFigi(value: string): Operation;
    getInstrumentType(): string;
    setInstrumentType(value: string): Operation;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): Operation;
    getType(): string;
    setType(value: string): Operation;
    getOperationType(): OperationType;
    setOperationType(value: OperationType): Operation;
    clearTradesList(): void;
    getTradesList(): Array<OperationTrade>;
    setTradesList(value: Array<OperationTrade>): Operation;
    addTrades(value?: OperationTrade, index?: number): OperationTrade;
    getAssetUid(): string;
    setAssetUid(value: string): Operation;
    getPositionUid(): string;
    setPositionUid(value: string): Operation;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): Operation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Operation.AsObject;
    static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Operation;
    static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
    export type AsObject = {
        id: string,
        parentOperationId: string,
        currency: string,
        payment?: common_pb.MoneyValue.AsObject,
        price?: common_pb.MoneyValue.AsObject,
        state: OperationState,
        quantity: number,
        quantityRest: number,
        figi: string,
        instrumentType: string,
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        type: string,
        operationType: OperationType,
        tradesList: Array<OperationTrade.AsObject>,
        assetUid: string,
        positionUid: string,
        instrumentUid: string,
    }
}

export class OperationTrade extends jspb.Message { 
    getTradeId(): string;
    setTradeId(value: string): OperationTrade;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationTrade;
    getQuantity(): number;
    setQuantity(value: number): OperationTrade;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.MoneyValue | undefined;
    setPrice(value?: common_pb.MoneyValue): OperationTrade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationTrade.AsObject;
    static toObject(includeInstance: boolean, msg: OperationTrade): OperationTrade.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationTrade, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationTrade;
    static deserializeBinaryFromReader(message: OperationTrade, reader: jspb.BinaryReader): OperationTrade;
}

export namespace OperationTrade {
    export type AsObject = {
        tradeId: string,
        dateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        quantity: number,
        price?: common_pb.MoneyValue.AsObject,
    }
}

export class PortfolioRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): PortfolioRequest;

    hasCurrency(): boolean;
    clearCurrency(): void;
    getCurrency(): PortfolioRequest.CurrencyRequest | undefined;
    setCurrency(value: PortfolioRequest.CurrencyRequest): PortfolioRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioRequest): PortfolioRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioRequest;
    static deserializeBinaryFromReader(message: PortfolioRequest, reader: jspb.BinaryReader): PortfolioRequest;
}

export namespace PortfolioRequest {
    export type AsObject = {
        accountId: string,
        currency?: PortfolioRequest.CurrencyRequest,
    }

    export enum CurrencyRequest {
    RUB = 0,
    USD = 1,
    EUR = 2,
    }

}

export class PortfolioResponse extends jspb.Message { 

    hasTotalAmountShares(): boolean;
    clearTotalAmountShares(): void;
    getTotalAmountShares(): common_pb.MoneyValue | undefined;
    setTotalAmountShares(value?: common_pb.MoneyValue): PortfolioResponse;

    hasTotalAmountBonds(): boolean;
    clearTotalAmountBonds(): void;
    getTotalAmountBonds(): common_pb.MoneyValue | undefined;
    setTotalAmountBonds(value?: common_pb.MoneyValue): PortfolioResponse;

    hasTotalAmountEtf(): boolean;
    clearTotalAmountEtf(): void;
    getTotalAmountEtf(): common_pb.MoneyValue | undefined;
    setTotalAmountEtf(value?: common_pb.MoneyValue): PortfolioResponse;

    hasTotalAmountCurrencies(): boolean;
    clearTotalAmountCurrencies(): void;
    getTotalAmountCurrencies(): common_pb.MoneyValue | undefined;
    setTotalAmountCurrencies(value?: common_pb.MoneyValue): PortfolioResponse;

    hasTotalAmountFutures(): boolean;
    clearTotalAmountFutures(): void;
    getTotalAmountFutures(): common_pb.MoneyValue | undefined;
    setTotalAmountFutures(value?: common_pb.MoneyValue): PortfolioResponse;

    hasExpectedYield(): boolean;
    clearExpectedYield(): void;
    getExpectedYield(): common_pb.Quotation | undefined;
    setExpectedYield(value?: common_pb.Quotation): PortfolioResponse;
    clearPositionsList(): void;
    getPositionsList(): Array<PortfolioPosition>;
    setPositionsList(value: Array<PortfolioPosition>): PortfolioResponse;
    addPositions(value?: PortfolioPosition, index?: number): PortfolioPosition;
    getAccountId(): string;
    setAccountId(value: string): PortfolioResponse;

    hasTotalAmountOptions(): boolean;
    clearTotalAmountOptions(): void;
    getTotalAmountOptions(): common_pb.MoneyValue | undefined;
    setTotalAmountOptions(value?: common_pb.MoneyValue): PortfolioResponse;

    hasTotalAmountSp(): boolean;
    clearTotalAmountSp(): void;
    getTotalAmountSp(): common_pb.MoneyValue | undefined;
    setTotalAmountSp(value?: common_pb.MoneyValue): PortfolioResponse;

    hasTotalAmountPortfolio(): boolean;
    clearTotalAmountPortfolio(): void;
    getTotalAmountPortfolio(): common_pb.MoneyValue | undefined;
    setTotalAmountPortfolio(value?: common_pb.MoneyValue): PortfolioResponse;
    clearVirtualPositionsList(): void;
    getVirtualPositionsList(): Array<VirtualPortfolioPosition>;
    setVirtualPositionsList(value: Array<VirtualPortfolioPosition>): PortfolioResponse;
    addVirtualPositions(value?: VirtualPortfolioPosition, index?: number): VirtualPortfolioPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioResponse): PortfolioResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioResponse;
    static deserializeBinaryFromReader(message: PortfolioResponse, reader: jspb.BinaryReader): PortfolioResponse;
}

export namespace PortfolioResponse {
    export type AsObject = {
        totalAmountShares?: common_pb.MoneyValue.AsObject,
        totalAmountBonds?: common_pb.MoneyValue.AsObject,
        totalAmountEtf?: common_pb.MoneyValue.AsObject,
        totalAmountCurrencies?: common_pb.MoneyValue.AsObject,
        totalAmountFutures?: common_pb.MoneyValue.AsObject,
        expectedYield?: common_pb.Quotation.AsObject,
        positionsList: Array<PortfolioPosition.AsObject>,
        accountId: string,
        totalAmountOptions?: common_pb.MoneyValue.AsObject,
        totalAmountSp?: common_pb.MoneyValue.AsObject,
        totalAmountPortfolio?: common_pb.MoneyValue.AsObject,
        virtualPositionsList: Array<VirtualPortfolioPosition.AsObject>,
    }
}

export class PositionsRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): PositionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsRequest): PositionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsRequest;
    static deserializeBinaryFromReader(message: PositionsRequest, reader: jspb.BinaryReader): PositionsRequest;
}

export namespace PositionsRequest {
    export type AsObject = {
        accountId: string,
    }
}

export class PositionsResponse extends jspb.Message { 
    clearMoneyList(): void;
    getMoneyList(): Array<common_pb.MoneyValue>;
    setMoneyList(value: Array<common_pb.MoneyValue>): PositionsResponse;
    addMoney(value?: common_pb.MoneyValue, index?: number): common_pb.MoneyValue;
    clearBlockedList(): void;
    getBlockedList(): Array<common_pb.MoneyValue>;
    setBlockedList(value: Array<common_pb.MoneyValue>): PositionsResponse;
    addBlocked(value?: common_pb.MoneyValue, index?: number): common_pb.MoneyValue;
    clearSecuritiesList(): void;
    getSecuritiesList(): Array<PositionsSecurities>;
    setSecuritiesList(value: Array<PositionsSecurities>): PositionsResponse;
    addSecurities(value?: PositionsSecurities, index?: number): PositionsSecurities;
    getLimitsLoadingInProgress(): boolean;
    setLimitsLoadingInProgress(value: boolean): PositionsResponse;
    clearFuturesList(): void;
    getFuturesList(): Array<PositionsFutures>;
    setFuturesList(value: Array<PositionsFutures>): PositionsResponse;
    addFutures(value?: PositionsFutures, index?: number): PositionsFutures;
    clearOptionsList(): void;
    getOptionsList(): Array<PositionsOptions>;
    setOptionsList(value: Array<PositionsOptions>): PositionsResponse;
    addOptions(value?: PositionsOptions, index?: number): PositionsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsResponse): PositionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsResponse;
    static deserializeBinaryFromReader(message: PositionsResponse, reader: jspb.BinaryReader): PositionsResponse;
}

export namespace PositionsResponse {
    export type AsObject = {
        moneyList: Array<common_pb.MoneyValue.AsObject>,
        blockedList: Array<common_pb.MoneyValue.AsObject>,
        securitiesList: Array<PositionsSecurities.AsObject>,
        limitsLoadingInProgress: boolean,
        futuresList: Array<PositionsFutures.AsObject>,
        optionsList: Array<PositionsOptions.AsObject>,
    }
}

export class WithdrawLimitsRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): WithdrawLimitsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawLimitsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawLimitsRequest): WithdrawLimitsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawLimitsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawLimitsRequest;
    static deserializeBinaryFromReader(message: WithdrawLimitsRequest, reader: jspb.BinaryReader): WithdrawLimitsRequest;
}

export namespace WithdrawLimitsRequest {
    export type AsObject = {
        accountId: string,
    }
}

export class WithdrawLimitsResponse extends jspb.Message { 
    clearMoneyList(): void;
    getMoneyList(): Array<common_pb.MoneyValue>;
    setMoneyList(value: Array<common_pb.MoneyValue>): WithdrawLimitsResponse;
    addMoney(value?: common_pb.MoneyValue, index?: number): common_pb.MoneyValue;
    clearBlockedList(): void;
    getBlockedList(): Array<common_pb.MoneyValue>;
    setBlockedList(value: Array<common_pb.MoneyValue>): WithdrawLimitsResponse;
    addBlocked(value?: common_pb.MoneyValue, index?: number): common_pb.MoneyValue;
    clearBlockedGuaranteeList(): void;
    getBlockedGuaranteeList(): Array<common_pb.MoneyValue>;
    setBlockedGuaranteeList(value: Array<common_pb.MoneyValue>): WithdrawLimitsResponse;
    addBlockedGuarantee(value?: common_pb.MoneyValue, index?: number): common_pb.MoneyValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawLimitsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawLimitsResponse): WithdrawLimitsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawLimitsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawLimitsResponse;
    static deserializeBinaryFromReader(message: WithdrawLimitsResponse, reader: jspb.BinaryReader): WithdrawLimitsResponse;
}

export namespace WithdrawLimitsResponse {
    export type AsObject = {
        moneyList: Array<common_pb.MoneyValue.AsObject>,
        blockedList: Array<common_pb.MoneyValue.AsObject>,
        blockedGuaranteeList: Array<common_pb.MoneyValue.AsObject>,
    }
}

export class PortfolioPosition extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): PortfolioPosition;
    getInstrumentType(): string;
    setInstrumentType(value: string): PortfolioPosition;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): common_pb.Quotation | undefined;
    setQuantity(value?: common_pb.Quotation): PortfolioPosition;

    hasAveragePositionPrice(): boolean;
    clearAveragePositionPrice(): void;
    getAveragePositionPrice(): common_pb.MoneyValue | undefined;
    setAveragePositionPrice(value?: common_pb.MoneyValue): PortfolioPosition;

    hasExpectedYield(): boolean;
    clearExpectedYield(): void;
    getExpectedYield(): common_pb.Quotation | undefined;
    setExpectedYield(value?: common_pb.Quotation): PortfolioPosition;

    hasCurrentNkd(): boolean;
    clearCurrentNkd(): void;
    getCurrentNkd(): common_pb.MoneyValue | undefined;
    setCurrentNkd(value?: common_pb.MoneyValue): PortfolioPosition;

    hasAveragePositionPricePt(): boolean;
    clearAveragePositionPricePt(): void;
    getAveragePositionPricePt(): common_pb.Quotation | undefined;
    setAveragePositionPricePt(value?: common_pb.Quotation): PortfolioPosition;

    hasCurrentPrice(): boolean;
    clearCurrentPrice(): void;
    getCurrentPrice(): common_pb.MoneyValue | undefined;
    setCurrentPrice(value?: common_pb.MoneyValue): PortfolioPosition;

    hasAveragePositionPriceFifo(): boolean;
    clearAveragePositionPriceFifo(): void;
    getAveragePositionPriceFifo(): common_pb.MoneyValue | undefined;
    setAveragePositionPriceFifo(value?: common_pb.MoneyValue): PortfolioPosition;

    hasQuantityLots(): boolean;
    clearQuantityLots(): void;
    getQuantityLots(): common_pb.Quotation | undefined;
    setQuantityLots(value?: common_pb.Quotation): PortfolioPosition;
    getBlocked(): boolean;
    setBlocked(value: boolean): PortfolioPosition;

    hasBlockedLots(): boolean;
    clearBlockedLots(): void;
    getBlockedLots(): common_pb.Quotation | undefined;
    setBlockedLots(value?: common_pb.Quotation): PortfolioPosition;
    getPositionUid(): string;
    setPositionUid(value: string): PortfolioPosition;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): PortfolioPosition;

    hasVarMargin(): boolean;
    clearVarMargin(): void;
    getVarMargin(): common_pb.MoneyValue | undefined;
    setVarMargin(value?: common_pb.MoneyValue): PortfolioPosition;

    hasExpectedYieldFifo(): boolean;
    clearExpectedYieldFifo(): void;
    getExpectedYieldFifo(): common_pb.Quotation | undefined;
    setExpectedYieldFifo(value?: common_pb.Quotation): PortfolioPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioPosition.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioPosition): PortfolioPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioPosition;
    static deserializeBinaryFromReader(message: PortfolioPosition, reader: jspb.BinaryReader): PortfolioPosition;
}

export namespace PortfolioPosition {
    export type AsObject = {
        figi: string,
        instrumentType: string,
        quantity?: common_pb.Quotation.AsObject,
        averagePositionPrice?: common_pb.MoneyValue.AsObject,
        expectedYield?: common_pb.Quotation.AsObject,
        currentNkd?: common_pb.MoneyValue.AsObject,
        averagePositionPricePt?: common_pb.Quotation.AsObject,
        currentPrice?: common_pb.MoneyValue.AsObject,
        averagePositionPriceFifo?: common_pb.MoneyValue.AsObject,
        quantityLots?: common_pb.Quotation.AsObject,
        blocked: boolean,
        blockedLots?: common_pb.Quotation.AsObject,
        positionUid: string,
        instrumentUid: string,
        varMargin?: common_pb.MoneyValue.AsObject,
        expectedYieldFifo?: common_pb.Quotation.AsObject,
    }
}

export class VirtualPortfolioPosition extends jspb.Message { 
    getPositionUid(): string;
    setPositionUid(value: string): VirtualPortfolioPosition;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): VirtualPortfolioPosition;
    getFigi(): string;
    setFigi(value: string): VirtualPortfolioPosition;
    getInstrumentType(): string;
    setInstrumentType(value: string): VirtualPortfolioPosition;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): common_pb.Quotation | undefined;
    setQuantity(value?: common_pb.Quotation): VirtualPortfolioPosition;

    hasAveragePositionPrice(): boolean;
    clearAveragePositionPrice(): void;
    getAveragePositionPrice(): common_pb.MoneyValue | undefined;
    setAveragePositionPrice(value?: common_pb.MoneyValue): VirtualPortfolioPosition;

    hasExpectedYield(): boolean;
    clearExpectedYield(): void;
    getExpectedYield(): common_pb.Quotation | undefined;
    setExpectedYield(value?: common_pb.Quotation): VirtualPortfolioPosition;

    hasExpectedYieldFifo(): boolean;
    clearExpectedYieldFifo(): void;
    getExpectedYieldFifo(): common_pb.Quotation | undefined;
    setExpectedYieldFifo(value?: common_pb.Quotation): VirtualPortfolioPosition;

    hasExpireDate(): boolean;
    clearExpireDate(): void;
    getExpireDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpireDate(value?: google_protobuf_timestamp_pb.Timestamp): VirtualPortfolioPosition;

    hasCurrentPrice(): boolean;
    clearCurrentPrice(): void;
    getCurrentPrice(): common_pb.MoneyValue | undefined;
    setCurrentPrice(value?: common_pb.MoneyValue): VirtualPortfolioPosition;

    hasAveragePositionPriceFifo(): boolean;
    clearAveragePositionPriceFifo(): void;
    getAveragePositionPriceFifo(): common_pb.MoneyValue | undefined;
    setAveragePositionPriceFifo(value?: common_pb.MoneyValue): VirtualPortfolioPosition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VirtualPortfolioPosition.AsObject;
    static toObject(includeInstance: boolean, msg: VirtualPortfolioPosition): VirtualPortfolioPosition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VirtualPortfolioPosition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VirtualPortfolioPosition;
    static deserializeBinaryFromReader(message: VirtualPortfolioPosition, reader: jspb.BinaryReader): VirtualPortfolioPosition;
}

export namespace VirtualPortfolioPosition {
    export type AsObject = {
        positionUid: string,
        instrumentUid: string,
        figi: string,
        instrumentType: string,
        quantity?: common_pb.Quotation.AsObject,
        averagePositionPrice?: common_pb.MoneyValue.AsObject,
        expectedYield?: common_pb.Quotation.AsObject,
        expectedYieldFifo?: common_pb.Quotation.AsObject,
        expireDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        currentPrice?: common_pb.MoneyValue.AsObject,
        averagePositionPriceFifo?: common_pb.MoneyValue.AsObject,
    }
}

export class PositionsSecurities extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): PositionsSecurities;
    getBlocked(): number;
    setBlocked(value: number): PositionsSecurities;
    getBalance(): number;
    setBalance(value: number): PositionsSecurities;
    getPositionUid(): string;
    setPositionUid(value: string): PositionsSecurities;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): PositionsSecurities;
    getExchangeBlocked(): boolean;
    setExchangeBlocked(value: boolean): PositionsSecurities;
    getInstrumentType(): string;
    setInstrumentType(value: string): PositionsSecurities;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsSecurities.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsSecurities): PositionsSecurities.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsSecurities, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsSecurities;
    static deserializeBinaryFromReader(message: PositionsSecurities, reader: jspb.BinaryReader): PositionsSecurities;
}

export namespace PositionsSecurities {
    export type AsObject = {
        figi: string,
        blocked: number,
        balance: number,
        positionUid: string,
        instrumentUid: string,
        exchangeBlocked: boolean,
        instrumentType: string,
    }
}

export class PositionsFutures extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): PositionsFutures;
    getBlocked(): number;
    setBlocked(value: number): PositionsFutures;
    getBalance(): number;
    setBalance(value: number): PositionsFutures;
    getPositionUid(): string;
    setPositionUid(value: string): PositionsFutures;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): PositionsFutures;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsFutures.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsFutures): PositionsFutures.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsFutures, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsFutures;
    static deserializeBinaryFromReader(message: PositionsFutures, reader: jspb.BinaryReader): PositionsFutures;
}

export namespace PositionsFutures {
    export type AsObject = {
        figi: string,
        blocked: number,
        balance: number,
        positionUid: string,
        instrumentUid: string,
    }
}

export class PositionsOptions extends jspb.Message { 
    getPositionUid(): string;
    setPositionUid(value: string): PositionsOptions;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): PositionsOptions;
    getBlocked(): number;
    setBlocked(value: number): PositionsOptions;
    getBalance(): number;
    setBalance(value: number): PositionsOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsOptions.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsOptions): PositionsOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsOptions;
    static deserializeBinaryFromReader(message: PositionsOptions, reader: jspb.BinaryReader): PositionsOptions;
}

export namespace PositionsOptions {
    export type AsObject = {
        positionUid: string,
        instrumentUid: string,
        blocked: number,
        balance: number,
    }
}

export class BrokerReportRequest extends jspb.Message { 

    hasGenerateBrokerReportRequest(): boolean;
    clearGenerateBrokerReportRequest(): void;
    getGenerateBrokerReportRequest(): GenerateBrokerReportRequest | undefined;
    setGenerateBrokerReportRequest(value?: GenerateBrokerReportRequest): BrokerReportRequest;

    hasGetBrokerReportRequest(): boolean;
    clearGetBrokerReportRequest(): void;
    getGetBrokerReportRequest(): GetBrokerReportRequest | undefined;
    setGetBrokerReportRequest(value?: GetBrokerReportRequest): BrokerReportRequest;

    getPayloadCase(): BrokerReportRequest.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BrokerReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: BrokerReportRequest): BrokerReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BrokerReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BrokerReportRequest;
    static deserializeBinaryFromReader(message: BrokerReportRequest, reader: jspb.BinaryReader): BrokerReportRequest;
}

export namespace BrokerReportRequest {
    export type AsObject = {
        generateBrokerReportRequest?: GenerateBrokerReportRequest.AsObject,
        getBrokerReportRequest?: GetBrokerReportRequest.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        GENERATE_BROKER_REPORT_REQUEST = 1,
        GET_BROKER_REPORT_REQUEST = 2,
    }

}

export class BrokerReportResponse extends jspb.Message { 

    hasGenerateBrokerReportResponse(): boolean;
    clearGenerateBrokerReportResponse(): void;
    getGenerateBrokerReportResponse(): GenerateBrokerReportResponse | undefined;
    setGenerateBrokerReportResponse(value?: GenerateBrokerReportResponse): BrokerReportResponse;

    hasGetBrokerReportResponse(): boolean;
    clearGetBrokerReportResponse(): void;
    getGetBrokerReportResponse(): GetBrokerReportResponse | undefined;
    setGetBrokerReportResponse(value?: GetBrokerReportResponse): BrokerReportResponse;

    getPayloadCase(): BrokerReportResponse.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BrokerReportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BrokerReportResponse): BrokerReportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BrokerReportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BrokerReportResponse;
    static deserializeBinaryFromReader(message: BrokerReportResponse, reader: jspb.BinaryReader): BrokerReportResponse;
}

export namespace BrokerReportResponse {
    export type AsObject = {
        generateBrokerReportResponse?: GenerateBrokerReportResponse.AsObject,
        getBrokerReportResponse?: GetBrokerReportResponse.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        GENERATE_BROKER_REPORT_RESPONSE = 1,
        GET_BROKER_REPORT_RESPONSE = 2,
    }

}

export class GenerateBrokerReportRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): GenerateBrokerReportRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GenerateBrokerReportRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GenerateBrokerReportRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateBrokerReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateBrokerReportRequest): GenerateBrokerReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateBrokerReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateBrokerReportRequest;
    static deserializeBinaryFromReader(message: GenerateBrokerReportRequest, reader: jspb.BinaryReader): GenerateBrokerReportRequest;
}

export namespace GenerateBrokerReportRequest {
    export type AsObject = {
        accountId: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GenerateBrokerReportResponse extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): GenerateBrokerReportResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateBrokerReportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateBrokerReportResponse): GenerateBrokerReportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateBrokerReportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateBrokerReportResponse;
    static deserializeBinaryFromReader(message: GenerateBrokerReportResponse, reader: jspb.BinaryReader): GenerateBrokerReportResponse;
}

export namespace GenerateBrokerReportResponse {
    export type AsObject = {
        taskId: string,
    }
}

export class GetBrokerReportRequest extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): GetBrokerReportRequest;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): number | undefined;
    setPage(value: number): GetBrokerReportRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBrokerReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBrokerReportRequest): GetBrokerReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBrokerReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBrokerReportRequest;
    static deserializeBinaryFromReader(message: GetBrokerReportRequest, reader: jspb.BinaryReader): GetBrokerReportRequest;
}

export namespace GetBrokerReportRequest {
    export type AsObject = {
        taskId: string,
        page?: number,
    }
}

export class GetBrokerReportResponse extends jspb.Message { 
    clearBrokerReportList(): void;
    getBrokerReportList(): Array<BrokerReport>;
    setBrokerReportList(value: Array<BrokerReport>): GetBrokerReportResponse;
    addBrokerReport(value?: BrokerReport, index?: number): BrokerReport;
    getItemscount(): number;
    setItemscount(value: number): GetBrokerReportResponse;
    getPagescount(): number;
    setPagescount(value: number): GetBrokerReportResponse;
    getPage(): number;
    setPage(value: number): GetBrokerReportResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBrokerReportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBrokerReportResponse): GetBrokerReportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBrokerReportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBrokerReportResponse;
    static deserializeBinaryFromReader(message: GetBrokerReportResponse, reader: jspb.BinaryReader): GetBrokerReportResponse;
}

export namespace GetBrokerReportResponse {
    export type AsObject = {
        brokerReportList: Array<BrokerReport.AsObject>,
        itemscount: number,
        pagescount: number,
        page: number,
    }
}

export class BrokerReport extends jspb.Message { 
    getTradeId(): string;
    setTradeId(value: string): BrokerReport;
    getOrderId(): string;
    setOrderId(value: string): BrokerReport;
    getFigi(): string;
    setFigi(value: string): BrokerReport;
    getExecuteSign(): string;
    setExecuteSign(value: string): BrokerReport;

    hasTradeDatetime(): boolean;
    clearTradeDatetime(): void;
    getTradeDatetime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTradeDatetime(value?: google_protobuf_timestamp_pb.Timestamp): BrokerReport;
    getExchange(): string;
    setExchange(value: string): BrokerReport;
    getClassCode(): string;
    setClassCode(value: string): BrokerReport;
    getDirection(): string;
    setDirection(value: string): BrokerReport;
    getName(): string;
    setName(value: string): BrokerReport;
    getTicker(): string;
    setTicker(value: string): BrokerReport;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.MoneyValue | undefined;
    setPrice(value?: common_pb.MoneyValue): BrokerReport;
    getQuantity(): number;
    setQuantity(value: number): BrokerReport;

    hasOrderAmount(): boolean;
    clearOrderAmount(): void;
    getOrderAmount(): common_pb.MoneyValue | undefined;
    setOrderAmount(value?: common_pb.MoneyValue): BrokerReport;

    hasAciValue(): boolean;
    clearAciValue(): void;
    getAciValue(): common_pb.Quotation | undefined;
    setAciValue(value?: common_pb.Quotation): BrokerReport;

    hasTotalOrderAmount(): boolean;
    clearTotalOrderAmount(): void;
    getTotalOrderAmount(): common_pb.MoneyValue | undefined;
    setTotalOrderAmount(value?: common_pb.MoneyValue): BrokerReport;

    hasBrokerCommission(): boolean;
    clearBrokerCommission(): void;
    getBrokerCommission(): common_pb.MoneyValue | undefined;
    setBrokerCommission(value?: common_pb.MoneyValue): BrokerReport;

    hasExchangeCommission(): boolean;
    clearExchangeCommission(): void;
    getExchangeCommission(): common_pb.MoneyValue | undefined;
    setExchangeCommission(value?: common_pb.MoneyValue): BrokerReport;

    hasExchangeClearingCommission(): boolean;
    clearExchangeClearingCommission(): void;
    getExchangeClearingCommission(): common_pb.MoneyValue | undefined;
    setExchangeClearingCommission(value?: common_pb.MoneyValue): BrokerReport;

    hasRepoRate(): boolean;
    clearRepoRate(): void;
    getRepoRate(): common_pb.Quotation | undefined;
    setRepoRate(value?: common_pb.Quotation): BrokerReport;
    getParty(): string;
    setParty(value: string): BrokerReport;

    hasClearValueDate(): boolean;
    clearClearValueDate(): void;
    getClearValueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setClearValueDate(value?: google_protobuf_timestamp_pb.Timestamp): BrokerReport;

    hasSecValueDate(): boolean;
    clearSecValueDate(): void;
    getSecValueDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setSecValueDate(value?: google_protobuf_timestamp_pb.Timestamp): BrokerReport;
    getBrokerStatus(): string;
    setBrokerStatus(value: string): BrokerReport;
    getSeparateAgreementType(): string;
    setSeparateAgreementType(value: string): BrokerReport;
    getSeparateAgreementNumber(): string;
    setSeparateAgreementNumber(value: string): BrokerReport;
    getSeparateAgreementDate(): string;
    setSeparateAgreementDate(value: string): BrokerReport;
    getDeliveryType(): string;
    setDeliveryType(value: string): BrokerReport;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BrokerReport.AsObject;
    static toObject(includeInstance: boolean, msg: BrokerReport): BrokerReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BrokerReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BrokerReport;
    static deserializeBinaryFromReader(message: BrokerReport, reader: jspb.BinaryReader): BrokerReport;
}

export namespace BrokerReport {
    export type AsObject = {
        tradeId: string,
        orderId: string,
        figi: string,
        executeSign: string,
        tradeDatetime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        exchange: string,
        classCode: string,
        direction: string,
        name: string,
        ticker: string,
        price?: common_pb.MoneyValue.AsObject,
        quantity: number,
        orderAmount?: common_pb.MoneyValue.AsObject,
        aciValue?: common_pb.Quotation.AsObject,
        totalOrderAmount?: common_pb.MoneyValue.AsObject,
        brokerCommission?: common_pb.MoneyValue.AsObject,
        exchangeCommission?: common_pb.MoneyValue.AsObject,
        exchangeClearingCommission?: common_pb.MoneyValue.AsObject,
        repoRate?: common_pb.Quotation.AsObject,
        party: string,
        clearValueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        secValueDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        brokerStatus: string,
        separateAgreementType: string,
        separateAgreementNumber: string,
        separateAgreementDate: string,
        deliveryType: string,
    }
}

export class GetDividendsForeignIssuerRequest extends jspb.Message { 

    hasGenerateDivForeignIssuerReport(): boolean;
    clearGenerateDivForeignIssuerReport(): void;
    getGenerateDivForeignIssuerReport(): GenerateDividendsForeignIssuerReportRequest | undefined;
    setGenerateDivForeignIssuerReport(value?: GenerateDividendsForeignIssuerReportRequest): GetDividendsForeignIssuerRequest;

    hasGetDivForeignIssuerReport(): boolean;
    clearGetDivForeignIssuerReport(): void;
    getGetDivForeignIssuerReport(): GetDividendsForeignIssuerReportRequest | undefined;
    setGetDivForeignIssuerReport(value?: GetDividendsForeignIssuerReportRequest): GetDividendsForeignIssuerRequest;

    getPayloadCase(): GetDividendsForeignIssuerRequest.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDividendsForeignIssuerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDividendsForeignIssuerRequest): GetDividendsForeignIssuerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDividendsForeignIssuerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDividendsForeignIssuerRequest;
    static deserializeBinaryFromReader(message: GetDividendsForeignIssuerRequest, reader: jspb.BinaryReader): GetDividendsForeignIssuerRequest;
}

export namespace GetDividendsForeignIssuerRequest {
    export type AsObject = {
        generateDivForeignIssuerReport?: GenerateDividendsForeignIssuerReportRequest.AsObject,
        getDivForeignIssuerReport?: GetDividendsForeignIssuerReportRequest.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        GENERATE_DIV_FOREIGN_ISSUER_REPORT = 1,
        GET_DIV_FOREIGN_ISSUER_REPORT = 2,
    }

}

export class GetDividendsForeignIssuerResponse extends jspb.Message { 

    hasGenerateDivForeignIssuerReportResponse(): boolean;
    clearGenerateDivForeignIssuerReportResponse(): void;
    getGenerateDivForeignIssuerReportResponse(): GenerateDividendsForeignIssuerReportResponse | undefined;
    setGenerateDivForeignIssuerReportResponse(value?: GenerateDividendsForeignIssuerReportResponse): GetDividendsForeignIssuerResponse;

    hasDivForeignIssuerReport(): boolean;
    clearDivForeignIssuerReport(): void;
    getDivForeignIssuerReport(): GetDividendsForeignIssuerReportResponse | undefined;
    setDivForeignIssuerReport(value?: GetDividendsForeignIssuerReportResponse): GetDividendsForeignIssuerResponse;

    getPayloadCase(): GetDividendsForeignIssuerResponse.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDividendsForeignIssuerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDividendsForeignIssuerResponse): GetDividendsForeignIssuerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDividendsForeignIssuerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDividendsForeignIssuerResponse;
    static deserializeBinaryFromReader(message: GetDividendsForeignIssuerResponse, reader: jspb.BinaryReader): GetDividendsForeignIssuerResponse;
}

export namespace GetDividendsForeignIssuerResponse {
    export type AsObject = {
        generateDivForeignIssuerReportResponse?: GenerateDividendsForeignIssuerReportResponse.AsObject,
        divForeignIssuerReport?: GetDividendsForeignIssuerReportResponse.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        GENERATE_DIV_FOREIGN_ISSUER_REPORT_RESPONSE = 1,
        DIV_FOREIGN_ISSUER_REPORT = 2,
    }

}

export class GenerateDividendsForeignIssuerReportRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): GenerateDividendsForeignIssuerReportRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GenerateDividendsForeignIssuerReportRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GenerateDividendsForeignIssuerReportRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateDividendsForeignIssuerReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateDividendsForeignIssuerReportRequest): GenerateDividendsForeignIssuerReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateDividendsForeignIssuerReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateDividendsForeignIssuerReportRequest;
    static deserializeBinaryFromReader(message: GenerateDividendsForeignIssuerReportRequest, reader: jspb.BinaryReader): GenerateDividendsForeignIssuerReportRequest;
}

export namespace GenerateDividendsForeignIssuerReportRequest {
    export type AsObject = {
        accountId: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetDividendsForeignIssuerReportRequest extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): GetDividendsForeignIssuerReportRequest;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): number | undefined;
    setPage(value: number): GetDividendsForeignIssuerReportRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDividendsForeignIssuerReportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDividendsForeignIssuerReportRequest): GetDividendsForeignIssuerReportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDividendsForeignIssuerReportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDividendsForeignIssuerReportRequest;
    static deserializeBinaryFromReader(message: GetDividendsForeignIssuerReportRequest, reader: jspb.BinaryReader): GetDividendsForeignIssuerReportRequest;
}

export namespace GetDividendsForeignIssuerReportRequest {
    export type AsObject = {
        taskId: string,
        page?: number,
    }
}

export class GenerateDividendsForeignIssuerReportResponse extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): GenerateDividendsForeignIssuerReportResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateDividendsForeignIssuerReportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateDividendsForeignIssuerReportResponse): GenerateDividendsForeignIssuerReportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateDividendsForeignIssuerReportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateDividendsForeignIssuerReportResponse;
    static deserializeBinaryFromReader(message: GenerateDividendsForeignIssuerReportResponse, reader: jspb.BinaryReader): GenerateDividendsForeignIssuerReportResponse;
}

export namespace GenerateDividendsForeignIssuerReportResponse {
    export type AsObject = {
        taskId: string,
    }
}

export class GetDividendsForeignIssuerReportResponse extends jspb.Message { 
    clearDividendsForeignIssuerReportList(): void;
    getDividendsForeignIssuerReportList(): Array<DividendsForeignIssuerReport>;
    setDividendsForeignIssuerReportList(value: Array<DividendsForeignIssuerReport>): GetDividendsForeignIssuerReportResponse;
    addDividendsForeignIssuerReport(value?: DividendsForeignIssuerReport, index?: number): DividendsForeignIssuerReport;
    getItemscount(): number;
    setItemscount(value: number): GetDividendsForeignIssuerReportResponse;
    getPagescount(): number;
    setPagescount(value: number): GetDividendsForeignIssuerReportResponse;
    getPage(): number;
    setPage(value: number): GetDividendsForeignIssuerReportResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDividendsForeignIssuerReportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDividendsForeignIssuerReportResponse): GetDividendsForeignIssuerReportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDividendsForeignIssuerReportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDividendsForeignIssuerReportResponse;
    static deserializeBinaryFromReader(message: GetDividendsForeignIssuerReportResponse, reader: jspb.BinaryReader): GetDividendsForeignIssuerReportResponse;
}

export namespace GetDividendsForeignIssuerReportResponse {
    export type AsObject = {
        dividendsForeignIssuerReportList: Array<DividendsForeignIssuerReport.AsObject>,
        itemscount: number,
        pagescount: number,
        page: number,
    }
}

export class DividendsForeignIssuerReport extends jspb.Message { 

    hasRecordDate(): boolean;
    clearRecordDate(): void;
    getRecordDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRecordDate(value?: google_protobuf_timestamp_pb.Timestamp): DividendsForeignIssuerReport;

    hasPaymentDate(): boolean;
    clearPaymentDate(): void;
    getPaymentDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPaymentDate(value?: google_protobuf_timestamp_pb.Timestamp): DividendsForeignIssuerReport;
    getSecurityName(): string;
    setSecurityName(value: string): DividendsForeignIssuerReport;
    getIsin(): string;
    setIsin(value: string): DividendsForeignIssuerReport;
    getIssuerCountry(): string;
    setIssuerCountry(value: string): DividendsForeignIssuerReport;
    getQuantity(): number;
    setQuantity(value: number): DividendsForeignIssuerReport;

    hasDividend(): boolean;
    clearDividend(): void;
    getDividend(): common_pb.Quotation | undefined;
    setDividend(value?: common_pb.Quotation): DividendsForeignIssuerReport;

    hasExternalCommission(): boolean;
    clearExternalCommission(): void;
    getExternalCommission(): common_pb.Quotation | undefined;
    setExternalCommission(value?: common_pb.Quotation): DividendsForeignIssuerReport;

    hasDividendGross(): boolean;
    clearDividendGross(): void;
    getDividendGross(): common_pb.Quotation | undefined;
    setDividendGross(value?: common_pb.Quotation): DividendsForeignIssuerReport;

    hasTax(): boolean;
    clearTax(): void;
    getTax(): common_pb.Quotation | undefined;
    setTax(value?: common_pb.Quotation): DividendsForeignIssuerReport;

    hasDividendAmount(): boolean;
    clearDividendAmount(): void;
    getDividendAmount(): common_pb.Quotation | undefined;
    setDividendAmount(value?: common_pb.Quotation): DividendsForeignIssuerReport;
    getCurrency(): string;
    setCurrency(value: string): DividendsForeignIssuerReport;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DividendsForeignIssuerReport.AsObject;
    static toObject(includeInstance: boolean, msg: DividendsForeignIssuerReport): DividendsForeignIssuerReport.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DividendsForeignIssuerReport, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DividendsForeignIssuerReport;
    static deserializeBinaryFromReader(message: DividendsForeignIssuerReport, reader: jspb.BinaryReader): DividendsForeignIssuerReport;
}

export namespace DividendsForeignIssuerReport {
    export type AsObject = {
        recordDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        paymentDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        securityName: string,
        isin: string,
        issuerCountry: string,
        quantity: number,
        dividend?: common_pb.Quotation.AsObject,
        externalCommission?: common_pb.Quotation.AsObject,
        dividendGross?: common_pb.Quotation.AsObject,
        tax?: common_pb.Quotation.AsObject,
        dividendAmount?: common_pb.Quotation.AsObject,
        currency: string,
    }
}

export class PortfolioStreamRequest extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<string>;
    setAccountsList(value: Array<string>): PortfolioStreamRequest;
    addAccounts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioStreamRequest): PortfolioStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioStreamRequest;
    static deserializeBinaryFromReader(message: PortfolioStreamRequest, reader: jspb.BinaryReader): PortfolioStreamRequest;
}

export namespace PortfolioStreamRequest {
    export type AsObject = {
        accountsList: Array<string>,
    }
}

export class PortfolioStreamResponse extends jspb.Message { 

    hasSubscriptions(): boolean;
    clearSubscriptions(): void;
    getSubscriptions(): PortfolioSubscriptionResult | undefined;
    setSubscriptions(value?: PortfolioSubscriptionResult): PortfolioStreamResponse;

    hasPortfolio(): boolean;
    clearPortfolio(): void;
    getPortfolio(): PortfolioResponse | undefined;
    setPortfolio(value?: PortfolioResponse): PortfolioStreamResponse;

    hasPing(): boolean;
    clearPing(): void;
    getPing(): common_pb.Ping | undefined;
    setPing(value?: common_pb.Ping): PortfolioStreamResponse;

    getPayloadCase(): PortfolioStreamResponse.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioStreamResponse): PortfolioStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioStreamResponse;
    static deserializeBinaryFromReader(message: PortfolioStreamResponse, reader: jspb.BinaryReader): PortfolioStreamResponse;
}

export namespace PortfolioStreamResponse {
    export type AsObject = {
        subscriptions?: PortfolioSubscriptionResult.AsObject,
        portfolio?: PortfolioResponse.AsObject,
        ping?: common_pb.Ping.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        SUBSCRIPTIONS = 1,
        PORTFOLIO = 2,
        PING = 3,
    }

}

export class PortfolioSubscriptionResult extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<AccountSubscriptionStatus>;
    setAccountsList(value: Array<AccountSubscriptionStatus>): PortfolioSubscriptionResult;
    addAccounts(value?: AccountSubscriptionStatus, index?: number): AccountSubscriptionStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PortfolioSubscriptionResult.AsObject;
    static toObject(includeInstance: boolean, msg: PortfolioSubscriptionResult): PortfolioSubscriptionResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PortfolioSubscriptionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PortfolioSubscriptionResult;
    static deserializeBinaryFromReader(message: PortfolioSubscriptionResult, reader: jspb.BinaryReader): PortfolioSubscriptionResult;
}

export namespace PortfolioSubscriptionResult {
    export type AsObject = {
        accountsList: Array<AccountSubscriptionStatus.AsObject>,
    }
}

export class AccountSubscriptionStatus extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): AccountSubscriptionStatus;
    getSubscriptionStatus(): PortfolioSubscriptionStatus;
    setSubscriptionStatus(value: PortfolioSubscriptionStatus): AccountSubscriptionStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountSubscriptionStatus.AsObject;
    static toObject(includeInstance: boolean, msg: AccountSubscriptionStatus): AccountSubscriptionStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountSubscriptionStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountSubscriptionStatus;
    static deserializeBinaryFromReader(message: AccountSubscriptionStatus, reader: jspb.BinaryReader): AccountSubscriptionStatus;
}

export namespace AccountSubscriptionStatus {
    export type AsObject = {
        accountId: string,
        subscriptionStatus: PortfolioSubscriptionStatus,
    }
}

export class GetOperationsByCursorRequest extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): GetOperationsByCursorRequest;

    hasInstrumentId(): boolean;
    clearInstrumentId(): void;
    getInstrumentId(): string | undefined;
    setInstrumentId(value: string): GetOperationsByCursorRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetOperationsByCursorRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetOperationsByCursorRequest;

    hasCursor(): boolean;
    clearCursor(): void;
    getCursor(): string | undefined;
    setCursor(value: string): GetOperationsByCursorRequest;

    hasLimit(): boolean;
    clearLimit(): void;
    getLimit(): number | undefined;
    setLimit(value: number): GetOperationsByCursorRequest;
    clearOperationTypesList(): void;
    getOperationTypesList(): Array<OperationType>;
    setOperationTypesList(value: Array<OperationType>): GetOperationsByCursorRequest;
    addOperationTypes(value: OperationType, index?: number): OperationType;

    hasState(): boolean;
    clearState(): void;
    getState(): OperationState | undefined;
    setState(value: OperationState): GetOperationsByCursorRequest;

    hasWithoutCommissions(): boolean;
    clearWithoutCommissions(): void;
    getWithoutCommissions(): boolean | undefined;
    setWithoutCommissions(value: boolean): GetOperationsByCursorRequest;

    hasWithoutTrades(): boolean;
    clearWithoutTrades(): void;
    getWithoutTrades(): boolean | undefined;
    setWithoutTrades(value: boolean): GetOperationsByCursorRequest;

    hasWithoutOvernights(): boolean;
    clearWithoutOvernights(): void;
    getWithoutOvernights(): boolean | undefined;
    setWithoutOvernights(value: boolean): GetOperationsByCursorRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOperationsByCursorRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOperationsByCursorRequest): GetOperationsByCursorRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOperationsByCursorRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOperationsByCursorRequest;
    static deserializeBinaryFromReader(message: GetOperationsByCursorRequest, reader: jspb.BinaryReader): GetOperationsByCursorRequest;
}

export namespace GetOperationsByCursorRequest {
    export type AsObject = {
        accountId: string,
        instrumentId?: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        cursor?: string,
        limit?: number,
        operationTypesList: Array<OperationType>,
        state?: OperationState,
        withoutCommissions?: boolean,
        withoutTrades?: boolean,
        withoutOvernights?: boolean,
    }
}

export class GetOperationsByCursorResponse extends jspb.Message { 
    getHasNext(): boolean;
    setHasNext(value: boolean): GetOperationsByCursorResponse;
    getNextCursor(): string;
    setNextCursor(value: string): GetOperationsByCursorResponse;
    clearItemsList(): void;
    getItemsList(): Array<OperationItem>;
    setItemsList(value: Array<OperationItem>): GetOperationsByCursorResponse;
    addItems(value?: OperationItem, index?: number): OperationItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOperationsByCursorResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOperationsByCursorResponse): GetOperationsByCursorResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOperationsByCursorResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOperationsByCursorResponse;
    static deserializeBinaryFromReader(message: GetOperationsByCursorResponse, reader: jspb.BinaryReader): GetOperationsByCursorResponse;
}

export namespace GetOperationsByCursorResponse {
    export type AsObject = {
        hasNext: boolean,
        nextCursor: string,
        itemsList: Array<OperationItem.AsObject>,
    }
}

export class OperationItem extends jspb.Message { 
    getCursor(): string;
    setCursor(value: string): OperationItem;
    getBrokerAccountId(): string;
    setBrokerAccountId(value: string): OperationItem;
    getId(): string;
    setId(value: string): OperationItem;
    getParentOperationId(): string;
    setParentOperationId(value: string): OperationItem;
    getName(): string;
    setName(value: string): OperationItem;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): OperationItem;
    getType(): OperationType;
    setType(value: OperationType): OperationItem;
    getDescription(): string;
    setDescription(value: string): OperationItem;
    getState(): OperationState;
    setState(value: OperationState): OperationItem;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): OperationItem;
    getFigi(): string;
    setFigi(value: string): OperationItem;
    getInstrumentType(): string;
    setInstrumentType(value: string): OperationItem;
    getInstrumentKind(): common_pb.InstrumentType;
    setInstrumentKind(value: common_pb.InstrumentType): OperationItem;
    getPositionUid(): string;
    setPositionUid(value: string): OperationItem;

    hasPayment(): boolean;
    clearPayment(): void;
    getPayment(): common_pb.MoneyValue | undefined;
    setPayment(value?: common_pb.MoneyValue): OperationItem;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.MoneyValue | undefined;
    setPrice(value?: common_pb.MoneyValue): OperationItem;

    hasCommission(): boolean;
    clearCommission(): void;
    getCommission(): common_pb.MoneyValue | undefined;
    setCommission(value?: common_pb.MoneyValue): OperationItem;

    hasYield(): boolean;
    clearYield(): void;
    getYield(): common_pb.MoneyValue | undefined;
    setYield(value?: common_pb.MoneyValue): OperationItem;

    hasYieldRelative(): boolean;
    clearYieldRelative(): void;
    getYieldRelative(): common_pb.Quotation | undefined;
    setYieldRelative(value?: common_pb.Quotation): OperationItem;

    hasAccruedInt(): boolean;
    clearAccruedInt(): void;
    getAccruedInt(): common_pb.MoneyValue | undefined;
    setAccruedInt(value?: common_pb.MoneyValue): OperationItem;
    getQuantity(): number;
    setQuantity(value: number): OperationItem;
    getQuantityRest(): number;
    setQuantityRest(value: number): OperationItem;
    getQuantityDone(): number;
    setQuantityDone(value: number): OperationItem;

    hasCancelDateTime(): boolean;
    clearCancelDateTime(): void;
    getCancelDateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCancelDateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationItem;
    getCancelReason(): string;
    setCancelReason(value: string): OperationItem;

    hasTradesInfo(): boolean;
    clearTradesInfo(): void;
    getTradesInfo(): OperationItemTrades | undefined;
    setTradesInfo(value?: OperationItemTrades): OperationItem;
    getAssetUid(): string;
    setAssetUid(value: string): OperationItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationItem.AsObject;
    static toObject(includeInstance: boolean, msg: OperationItem): OperationItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationItem;
    static deserializeBinaryFromReader(message: OperationItem, reader: jspb.BinaryReader): OperationItem;
}

export namespace OperationItem {
    export type AsObject = {
        cursor: string,
        brokerAccountId: string,
        id: string,
        parentOperationId: string,
        name: string,
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        type: OperationType,
        description: string,
        state: OperationState,
        instrumentUid: string,
        figi: string,
        instrumentType: string,
        instrumentKind: common_pb.InstrumentType,
        positionUid: string,
        payment?: common_pb.MoneyValue.AsObject,
        price?: common_pb.MoneyValue.AsObject,
        commission?: common_pb.MoneyValue.AsObject,
        yield?: common_pb.MoneyValue.AsObject,
        yieldRelative?: common_pb.Quotation.AsObject,
        accruedInt?: common_pb.MoneyValue.AsObject,
        quantity: number,
        quantityRest: number,
        quantityDone: number,
        cancelDateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        cancelReason: string,
        tradesInfo?: OperationItemTrades.AsObject,
        assetUid: string,
    }
}

export class OperationItemTrades extends jspb.Message { 
    clearTradesList(): void;
    getTradesList(): Array<OperationItemTrade>;
    setTradesList(value: Array<OperationItemTrade>): OperationItemTrades;
    addTrades(value?: OperationItemTrade, index?: number): OperationItemTrade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationItemTrades.AsObject;
    static toObject(includeInstance: boolean, msg: OperationItemTrades): OperationItemTrades.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationItemTrades, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationItemTrades;
    static deserializeBinaryFromReader(message: OperationItemTrades, reader: jspb.BinaryReader): OperationItemTrades;
}

export namespace OperationItemTrades {
    export type AsObject = {
        tradesList: Array<OperationItemTrade.AsObject>,
    }
}

export class OperationItemTrade extends jspb.Message { 
    getNum(): string;
    setNum(value: string): OperationItemTrade;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): OperationItemTrade;
    getQuantity(): number;
    setQuantity(value: number): OperationItemTrade;

    hasPrice(): boolean;
    clearPrice(): void;
    getPrice(): common_pb.MoneyValue | undefined;
    setPrice(value?: common_pb.MoneyValue): OperationItemTrade;

    hasYield(): boolean;
    clearYield(): void;
    getYield(): common_pb.MoneyValue | undefined;
    setYield(value?: common_pb.MoneyValue): OperationItemTrade;

    hasYieldRelative(): boolean;
    clearYieldRelative(): void;
    getYieldRelative(): common_pb.Quotation | undefined;
    setYieldRelative(value?: common_pb.Quotation): OperationItemTrade;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationItemTrade.AsObject;
    static toObject(includeInstance: boolean, msg: OperationItemTrade): OperationItemTrade.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationItemTrade, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationItemTrade;
    static deserializeBinaryFromReader(message: OperationItemTrade, reader: jspb.BinaryReader): OperationItemTrade;
}

export namespace OperationItemTrade {
    export type AsObject = {
        num: string,
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        quantity: number,
        price?: common_pb.MoneyValue.AsObject,
        yield?: common_pb.MoneyValue.AsObject,
        yieldRelative?: common_pb.Quotation.AsObject,
    }
}

export class PositionsStreamRequest extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<string>;
    setAccountsList(value: Array<string>): PositionsStreamRequest;
    addAccounts(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsStreamRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsStreamRequest): PositionsStreamRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsStreamRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsStreamRequest;
    static deserializeBinaryFromReader(message: PositionsStreamRequest, reader: jspb.BinaryReader): PositionsStreamRequest;
}

export namespace PositionsStreamRequest {
    export type AsObject = {
        accountsList: Array<string>,
    }
}

export class PositionsStreamResponse extends jspb.Message { 

    hasSubscriptions(): boolean;
    clearSubscriptions(): void;
    getSubscriptions(): PositionsSubscriptionResult | undefined;
    setSubscriptions(value?: PositionsSubscriptionResult): PositionsStreamResponse;

    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): PositionData | undefined;
    setPosition(value?: PositionData): PositionsStreamResponse;

    hasPing(): boolean;
    clearPing(): void;
    getPing(): common_pb.Ping | undefined;
    setPing(value?: common_pb.Ping): PositionsStreamResponse;

    getPayloadCase(): PositionsStreamResponse.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsStreamResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsStreamResponse): PositionsStreamResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsStreamResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsStreamResponse;
    static deserializeBinaryFromReader(message: PositionsStreamResponse, reader: jspb.BinaryReader): PositionsStreamResponse;
}

export namespace PositionsStreamResponse {
    export type AsObject = {
        subscriptions?: PositionsSubscriptionResult.AsObject,
        position?: PositionData.AsObject,
        ping?: common_pb.Ping.AsObject,
    }

    export enum PayloadCase {
        PAYLOAD_NOT_SET = 0,
        SUBSCRIPTIONS = 1,
        POSITION = 2,
        PING = 3,
    }

}

export class PositionsSubscriptionResult extends jspb.Message { 
    clearAccountsList(): void;
    getAccountsList(): Array<PositionsSubscriptionStatus>;
    setAccountsList(value: Array<PositionsSubscriptionStatus>): PositionsSubscriptionResult;
    addAccounts(value?: PositionsSubscriptionStatus, index?: number): PositionsSubscriptionStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsSubscriptionResult.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsSubscriptionResult): PositionsSubscriptionResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsSubscriptionResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsSubscriptionResult;
    static deserializeBinaryFromReader(message: PositionsSubscriptionResult, reader: jspb.BinaryReader): PositionsSubscriptionResult;
}

export namespace PositionsSubscriptionResult {
    export type AsObject = {
        accountsList: Array<PositionsSubscriptionStatus.AsObject>,
    }
}

export class PositionsSubscriptionStatus extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): PositionsSubscriptionStatus;
    getSubscriptionStatus(): PositionsAccountSubscriptionStatus;
    setSubscriptionStatus(value: PositionsAccountSubscriptionStatus): PositionsSubscriptionStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsSubscriptionStatus.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsSubscriptionStatus): PositionsSubscriptionStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsSubscriptionStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsSubscriptionStatus;
    static deserializeBinaryFromReader(message: PositionsSubscriptionStatus, reader: jspb.BinaryReader): PositionsSubscriptionStatus;
}

export namespace PositionsSubscriptionStatus {
    export type AsObject = {
        accountId: string,
        subscriptionStatus: PositionsAccountSubscriptionStatus,
    }
}

export class PositionData extends jspb.Message { 
    getAccountId(): string;
    setAccountId(value: string): PositionData;
    clearMoneyList(): void;
    getMoneyList(): Array<PositionsMoney>;
    setMoneyList(value: Array<PositionsMoney>): PositionData;
    addMoney(value?: PositionsMoney, index?: number): PositionsMoney;
    clearSecuritiesList(): void;
    getSecuritiesList(): Array<PositionsSecurities>;
    setSecuritiesList(value: Array<PositionsSecurities>): PositionData;
    addSecurities(value?: PositionsSecurities, index?: number): PositionsSecurities;
    clearFuturesList(): void;
    getFuturesList(): Array<PositionsFutures>;
    setFuturesList(value: Array<PositionsFutures>): PositionData;
    addFutures(value?: PositionsFutures, index?: number): PositionsFutures;
    clearOptionsList(): void;
    getOptionsList(): Array<PositionsOptions>;
    setOptionsList(value: Array<PositionsOptions>): PositionData;
    addOptions(value?: PositionsOptions, index?: number): PositionsOptions;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): PositionData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionData.AsObject;
    static toObject(includeInstance: boolean, msg: PositionData): PositionData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionData;
    static deserializeBinaryFromReader(message: PositionData, reader: jspb.BinaryReader): PositionData;
}

export namespace PositionData {
    export type AsObject = {
        accountId: string,
        moneyList: Array<PositionsMoney.AsObject>,
        securitiesList: Array<PositionsSecurities.AsObject>,
        futuresList: Array<PositionsFutures.AsObject>,
        optionsList: Array<PositionsOptions.AsObject>,
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class PositionsMoney extends jspb.Message { 

    hasAvailableValue(): boolean;
    clearAvailableValue(): void;
    getAvailableValue(): common_pb.MoneyValue | undefined;
    setAvailableValue(value?: common_pb.MoneyValue): PositionsMoney;

    hasBlockedValue(): boolean;
    clearBlockedValue(): void;
    getBlockedValue(): common_pb.MoneyValue | undefined;
    setBlockedValue(value?: common_pb.MoneyValue): PositionsMoney;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsMoney.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsMoney): PositionsMoney.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsMoney, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsMoney;
    static deserializeBinaryFromReader(message: PositionsMoney, reader: jspb.BinaryReader): PositionsMoney;
}

export namespace PositionsMoney {
    export type AsObject = {
        availableValue?: common_pb.MoneyValue.AsObject,
        blockedValue?: common_pb.MoneyValue.AsObject,
    }
}

export enum OperationState {
    OPERATION_STATE_UNSPECIFIED = 0,
    OPERATION_STATE_EXECUTED = 1,
    OPERATION_STATE_CANCELED = 2,
    OPERATION_STATE_PROGRESS = 3,
}

export enum OperationType {
    OPERATION_TYPE_UNSPECIFIED = 0,
    OPERATION_TYPE_INPUT = 1,
    OPERATION_TYPE_BOND_TAX = 2,
    OPERATION_TYPE_OUTPUT_SECURITIES = 3,
    OPERATION_TYPE_OVERNIGHT = 4,
    OPERATION_TYPE_TAX = 5,
    OPERATION_TYPE_BOND_REPAYMENT_FULL = 6,
    OPERATION_TYPE_SELL_CARD = 7,
    OPERATION_TYPE_DIVIDEND_TAX = 8,
    OPERATION_TYPE_OUTPUT = 9,
    OPERATION_TYPE_BOND_REPAYMENT = 10,
    OPERATION_TYPE_TAX_CORRECTION = 11,
    OPERATION_TYPE_SERVICE_FEE = 12,
    OPERATION_TYPE_BENEFIT_TAX = 13,
    OPERATION_TYPE_MARGIN_FEE = 14,
    OPERATION_TYPE_BUY = 15,
    OPERATION_TYPE_BUY_CARD = 16,
    OPERATION_TYPE_INPUT_SECURITIES = 17,
    OPERATION_TYPE_SELL_MARGIN = 18,
    OPERATION_TYPE_BROKER_FEE = 19,
    OPERATION_TYPE_BUY_MARGIN = 20,
    OPERATION_TYPE_DIVIDEND = 21,
    OPERATION_TYPE_SELL = 22,
    OPERATION_TYPE_COUPON = 23,
    OPERATION_TYPE_SUCCESS_FEE = 24,
    OPERATION_TYPE_DIVIDEND_TRANSFER = 25,
    OPERATION_TYPE_ACCRUING_VARMARGIN = 26,
    OPERATION_TYPE_WRITING_OFF_VARMARGIN = 27,
    OPERATION_TYPE_DELIVERY_BUY = 28,
    OPERATION_TYPE_DELIVERY_SELL = 29,
    OPERATION_TYPE_TRACK_MFEE = 30,
    OPERATION_TYPE_TRACK_PFEE = 31,
    OPERATION_TYPE_TAX_PROGRESSIVE = 32,
    OPERATION_TYPE_BOND_TAX_PROGRESSIVE = 33,
    OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE = 34,
    OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE = 35,
    OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE = 36,
    OPERATION_TYPE_TAX_REPO_PROGRESSIVE = 37,
    OPERATION_TYPE_TAX_REPO = 38,
    OPERATION_TYPE_TAX_REPO_HOLD = 39,
    OPERATION_TYPE_TAX_REPO_REFUND = 40,
    OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE = 41,
    OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE = 42,
    OPERATION_TYPE_DIV_EXT = 43,
    OPERATION_TYPE_TAX_CORRECTION_COUPON = 44,
    OPERATION_TYPE_CASH_FEE = 45,
    OPERATION_TYPE_OUT_FEE = 46,
    OPERATION_TYPE_OUT_STAMP_DUTY = 47,
    OPERATION_TYPE_OUTPUT_SWIFT = 50,
    OPERATION_TYPE_INPUT_SWIFT = 51,
    OPERATION_TYPE_OUTPUT_ACQUIRING = 53,
    OPERATION_TYPE_INPUT_ACQUIRING = 54,
    OPERATION_TYPE_OUTPUT_PENALTY = 55,
    OPERATION_TYPE_ADVICE_FEE = 56,
    OPERATION_TYPE_TRANS_IIS_BS = 57,
    OPERATION_TYPE_TRANS_BS_BS = 58,
    OPERATION_TYPE_OUT_MULTI = 59,
    OPERATION_TYPE_INP_MULTI = 60,
    OPERATION_TYPE_OVER_PLACEMENT = 61,
    OPERATION_TYPE_OVER_COM = 62,
    OPERATION_TYPE_OVER_INCOME = 63,
    OPERATION_TYPE_OPTION_EXPIRATION = 64,
}

export enum PortfolioSubscriptionStatus {
    PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
    PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS = 1,
    PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = 2,
    PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR = 3,
}

export enum PositionsAccountSubscriptionStatus {
    POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
    POSITIONS_SUBSCRIPTION_STATUS_SUCCESS = 1,
    POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = 2,
    POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR = 3,
}
