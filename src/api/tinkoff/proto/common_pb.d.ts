// package: tinkoff.public.invest.api.contract.v1
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class MoneyValue extends jspb.Message { 
    getCurrency(): string;
    setCurrency(value: string): MoneyValue;
    getUnits(): number;
    setUnits(value: number): MoneyValue;
    getNano(): number;
    setNano(value: number): MoneyValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MoneyValue.AsObject;
    static toObject(includeInstance: boolean, msg: MoneyValue): MoneyValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MoneyValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MoneyValue;
    static deserializeBinaryFromReader(message: MoneyValue, reader: jspb.BinaryReader): MoneyValue;
}

export namespace MoneyValue {
    export type AsObject = {
        currency: string,
        units: number,
        nano: number,
    }
}

export class Quotation extends jspb.Message { 
    getUnits(): number;
    setUnits(value: number): Quotation;
    getNano(): number;
    setNano(value: number): Quotation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Quotation.AsObject;
    static toObject(includeInstance: boolean, msg: Quotation): Quotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Quotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Quotation;
    static deserializeBinaryFromReader(message: Quotation, reader: jspb.BinaryReader): Quotation;
}

export namespace Quotation {
    export type AsObject = {
        units: number,
        nano: number,
    }
}

export class Ping extends jspb.Message { 

    hasTime(): boolean;
    clearTime(): void;
    getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTime(value?: google_protobuf_timestamp_pb.Timestamp): Ping;
    getStreamId(): string;
    setStreamId(value: string): Ping;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ping.AsObject;
    static toObject(includeInstance: boolean, msg: Ping): Ping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ping;
    static deserializeBinaryFromReader(message: Ping, reader: jspb.BinaryReader): Ping;
}

export namespace Ping {
    export type AsObject = {
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        streamId: string,
    }
}

export class Page extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): Page;
    getPageNumber(): number;
    setPageNumber(value: number): Page;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Page.AsObject;
    static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Page;
    static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
    export type AsObject = {
        limit: number,
        pageNumber: number,
    }
}

export class PageResponse extends jspb.Message { 
    getLimit(): number;
    setLimit(value: number): PageResponse;
    getPageNumber(): number;
    setPageNumber(value: number): PageResponse;
    getTotalCount(): number;
    setTotalCount(value: number): PageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PageResponse): PageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageResponse;
    static deserializeBinaryFromReader(message: PageResponse, reader: jspb.BinaryReader): PageResponse;
}

export namespace PageResponse {
    export type AsObject = {
        limit: number,
        pageNumber: number,
        totalCount: number,
    }
}

export class ResponseMetadata extends jspb.Message { 
    getTrackingId(): string;
    setTrackingId(value: string): ResponseMetadata;

    hasServerTime(): boolean;
    clearServerTime(): void;
    getServerTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setServerTime(value?: google_protobuf_timestamp_pb.Timestamp): ResponseMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseMetadata): ResponseMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseMetadata;
    static deserializeBinaryFromReader(message: ResponseMetadata, reader: jspb.BinaryReader): ResponseMetadata;
}

export namespace ResponseMetadata {
    export type AsObject = {
        trackingId: string,
        serverTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class BrandData extends jspb.Message { 
    getLogoName(): string;
    setLogoName(value: string): BrandData;
    getLogoBaseColor(): string;
    setLogoBaseColor(value: string): BrandData;
    getTextColor(): string;
    setTextColor(value: string): BrandData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BrandData.AsObject;
    static toObject(includeInstance: boolean, msg: BrandData): BrandData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BrandData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BrandData;
    static deserializeBinaryFromReader(message: BrandData, reader: jspb.BinaryReader): BrandData;
}

export namespace BrandData {
    export type AsObject = {
        logoName: string,
        logoBaseColor: string,
        textColor: string,
    }
}

export enum InstrumentType {
    INSTRUMENT_TYPE_UNSPECIFIED = 0,
    INSTRUMENT_TYPE_BOND = 1,
    INSTRUMENT_TYPE_SHARE = 2,
    INSTRUMENT_TYPE_CURRENCY = 3,
    INSTRUMENT_TYPE_ETF = 4,
    INSTRUMENT_TYPE_FUTURES = 5,
    INSTRUMENT_TYPE_SP = 6,
    INSTRUMENT_TYPE_OPTION = 7,
    INSTRUMENT_TYPE_CLEARING_CERTIFICATE = 8,
    INSTRUMENT_TYPE_INDEX = 9,
    INSTRUMENT_TYPE_COMMODITY = 10,
}

export enum SecurityTradingStatus {
    SECURITY_TRADING_STATUS_UNSPECIFIED = 0,
    SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING = 1,
    SECURITY_TRADING_STATUS_OPENING_PERIOD = 2,
    SECURITY_TRADING_STATUS_CLOSING_PERIOD = 3,
    SECURITY_TRADING_STATUS_BREAK_IN_TRADING = 4,
    SECURITY_TRADING_STATUS_NORMAL_TRADING = 5,
    SECURITY_TRADING_STATUS_CLOSING_AUCTION = 6,
    SECURITY_TRADING_STATUS_DARK_POOL_AUCTION = 7,
    SECURITY_TRADING_STATUS_DISCRETE_AUCTION = 8,
    SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD = 9,
    SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE = 10,
    SECURITY_TRADING_STATUS_SESSION_ASSIGNED = 11,
    SECURITY_TRADING_STATUS_SESSION_CLOSE = 12,
    SECURITY_TRADING_STATUS_SESSION_OPEN = 13,
    SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING = 14,
    SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING = 15,
    SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING = 16,
}

export enum PriceType {
    PRICE_TYPE_UNSPECIFIED = 0,
    PRICE_TYPE_POINT = 1,
    PRICE_TYPE_CURRENCY = 2,
}
