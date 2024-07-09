// package: tinkoff.public.invest.api.contract.v1
// file: instruments.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_pb from "./common_pb";
import * as google_api_field_behavior_pb from "./google/api/field_behavior_pb";

export class TradingSchedulesRequest extends jspb.Message { 

    hasExchange(): boolean;
    clearExchange(): void;
    getExchange(): string | undefined;
    setExchange(value: string): TradingSchedulesRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): TradingSchedulesRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): TradingSchedulesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradingSchedulesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TradingSchedulesRequest): TradingSchedulesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradingSchedulesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradingSchedulesRequest;
    static deserializeBinaryFromReader(message: TradingSchedulesRequest, reader: jspb.BinaryReader): TradingSchedulesRequest;
}

export namespace TradingSchedulesRequest {
    export type AsObject = {
        exchange?: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TradingSchedulesResponse extends jspb.Message { 
    clearExchangesList(): void;
    getExchangesList(): Array<TradingSchedule>;
    setExchangesList(value: Array<TradingSchedule>): TradingSchedulesResponse;
    addExchanges(value?: TradingSchedule, index?: number): TradingSchedule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradingSchedulesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TradingSchedulesResponse): TradingSchedulesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradingSchedulesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradingSchedulesResponse;
    static deserializeBinaryFromReader(message: TradingSchedulesResponse, reader: jspb.BinaryReader): TradingSchedulesResponse;
}

export namespace TradingSchedulesResponse {
    export type AsObject = {
        exchangesList: Array<TradingSchedule.AsObject>,
    }
}

export class TradingSchedule extends jspb.Message { 
    getExchange(): string;
    setExchange(value: string): TradingSchedule;
    clearDaysList(): void;
    getDaysList(): Array<TradingDay>;
    setDaysList(value: Array<TradingDay>): TradingSchedule;
    addDays(value?: TradingDay, index?: number): TradingDay;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradingSchedule.AsObject;
    static toObject(includeInstance: boolean, msg: TradingSchedule): TradingSchedule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradingSchedule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradingSchedule;
    static deserializeBinaryFromReader(message: TradingSchedule, reader: jspb.BinaryReader): TradingSchedule;
}

export namespace TradingSchedule {
    export type AsObject = {
        exchange: string,
        daysList: Array<TradingDay.AsObject>,
    }
}

export class TradingDay extends jspb.Message { 

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
    getIsTradingDay(): boolean;
    setIsTradingDay(value: boolean): TradingDay;

    hasStartTime(): boolean;
    clearStartTime(): void;
    getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasEndTime(): boolean;
    clearEndTime(): void;
    getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasOpeningAuctionStartTime(): boolean;
    clearOpeningAuctionStartTime(): void;
    getOpeningAuctionStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setOpeningAuctionStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasClosingAuctionEndTime(): boolean;
    clearClosingAuctionEndTime(): void;
    getClosingAuctionEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setClosingAuctionEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasEveningOpeningAuctionStartTime(): boolean;
    clearEveningOpeningAuctionStartTime(): void;
    getEveningOpeningAuctionStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEveningOpeningAuctionStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasEveningStartTime(): boolean;
    clearEveningStartTime(): void;
    getEveningStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEveningStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasEveningEndTime(): boolean;
    clearEveningEndTime(): void;
    getEveningEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setEveningEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasClearingStartTime(): boolean;
    clearClearingStartTime(): void;
    getClearingStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setClearingStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasClearingEndTime(): boolean;
    clearClearingEndTime(): void;
    getClearingEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setClearingEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasPremarketStartTime(): boolean;
    clearPremarketStartTime(): void;
    getPremarketStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPremarketStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasPremarketEndTime(): boolean;
    clearPremarketEndTime(): void;
    getPremarketEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPremarketEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasClosingAuctionStartTime(): boolean;
    clearClosingAuctionStartTime(): void;
    getClosingAuctionStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setClosingAuctionStartTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;

    hasOpeningAuctionEndTime(): boolean;
    clearOpeningAuctionEndTime(): void;
    getOpeningAuctionEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setOpeningAuctionEndTime(value?: google_protobuf_timestamp_pb.Timestamp): TradingDay;
    clearIntervalsList(): void;
    getIntervalsList(): Array<TradingInterval>;
    setIntervalsList(value: Array<TradingInterval>): TradingDay;
    addIntervals(value?: TradingInterval, index?: number): TradingInterval;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradingDay.AsObject;
    static toObject(includeInstance: boolean, msg: TradingDay): TradingDay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradingDay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradingDay;
    static deserializeBinaryFromReader(message: TradingDay, reader: jspb.BinaryReader): TradingDay;
}

export namespace TradingDay {
    export type AsObject = {
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        isTradingDay: boolean,
        startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        openingAuctionStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        closingAuctionEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        eveningOpeningAuctionStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        eveningStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        eveningEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        clearingStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        clearingEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        premarketStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        premarketEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        closingAuctionStartTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        openingAuctionEndTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        intervalsList: Array<TradingInterval.AsObject>,
    }
}

export class InstrumentRequest extends jspb.Message { 
    getIdType(): InstrumentIdType;
    setIdType(value: InstrumentIdType): InstrumentRequest;

    hasClassCode(): boolean;
    clearClassCode(): void;
    getClassCode(): string | undefined;
    setClassCode(value: string): InstrumentRequest;
    getId(): string;
    setId(value: string): InstrumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstrumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InstrumentRequest): InstrumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstrumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstrumentRequest;
    static deserializeBinaryFromReader(message: InstrumentRequest, reader: jspb.BinaryReader): InstrumentRequest;
}

export namespace InstrumentRequest {
    export type AsObject = {
        idType: InstrumentIdType,
        classCode?: string,
        id: string,
    }
}

export class InstrumentsRequest extends jspb.Message { 

    hasInstrumentStatus(): boolean;
    clearInstrumentStatus(): void;
    getInstrumentStatus(): InstrumentStatus | undefined;
    setInstrumentStatus(value: InstrumentStatus): InstrumentsRequest;

    hasInstrumentExchange(): boolean;
    clearInstrumentExchange(): void;
    getInstrumentExchange(): InstrumentExchangeType | undefined;
    setInstrumentExchange(value: InstrumentExchangeType): InstrumentsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstrumentsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InstrumentsRequest): InstrumentsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstrumentsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstrumentsRequest;
    static deserializeBinaryFromReader(message: InstrumentsRequest, reader: jspb.BinaryReader): InstrumentsRequest;
}

export namespace InstrumentsRequest {
    export type AsObject = {
        instrumentStatus?: InstrumentStatus,
        instrumentExchange?: InstrumentExchangeType,
    }
}

export class FilterOptionsRequest extends jspb.Message { 

    hasBasicAssetUid(): boolean;
    clearBasicAssetUid(): void;
    getBasicAssetUid(): string | undefined;
    setBasicAssetUid(value: string): FilterOptionsRequest;

    hasBasicAssetPositionUid(): boolean;
    clearBasicAssetPositionUid(): void;
    getBasicAssetPositionUid(): string | undefined;
    setBasicAssetPositionUid(value: string): FilterOptionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterOptionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FilterOptionsRequest): FilterOptionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterOptionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterOptionsRequest;
    static deserializeBinaryFromReader(message: FilterOptionsRequest, reader: jspb.BinaryReader): FilterOptionsRequest;
}

export namespace FilterOptionsRequest {
    export type AsObject = {
        basicAssetUid?: string,
        basicAssetPositionUid?: string,
    }
}

export class BondResponse extends jspb.Message { 

    hasInstrument(): boolean;
    clearInstrument(): void;
    getInstrument(): Bond | undefined;
    setInstrument(value?: Bond): BondResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BondResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BondResponse): BondResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BondResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BondResponse;
    static deserializeBinaryFromReader(message: BondResponse, reader: jspb.BinaryReader): BondResponse;
}

export namespace BondResponse {
    export type AsObject = {
        instrument?: Bond.AsObject,
    }
}

export class BondsResponse extends jspb.Message { 
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<Bond>;
    setInstrumentsList(value: Array<Bond>): BondsResponse;
    addInstruments(value?: Bond, index?: number): Bond;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BondsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BondsResponse): BondsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BondsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BondsResponse;
    static deserializeBinaryFromReader(message: BondsResponse, reader: jspb.BinaryReader): BondsResponse;
}

export namespace BondsResponse {
    export type AsObject = {
        instrumentsList: Array<Bond.AsObject>,
    }
}

export class GetBondCouponsRequest extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): GetBondCouponsRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetBondCouponsRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetBondCouponsRequest;
    getInstrumentId(): string;
    setInstrumentId(value: string): GetBondCouponsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBondCouponsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBondCouponsRequest): GetBondCouponsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBondCouponsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBondCouponsRequest;
    static deserializeBinaryFromReader(message: GetBondCouponsRequest, reader: jspb.BinaryReader): GetBondCouponsRequest;
}

export namespace GetBondCouponsRequest {
    export type AsObject = {
        figi: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        instrumentId: string,
    }
}

export class GetBondCouponsResponse extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<Coupon>;
    setEventsList(value: Array<Coupon>): GetBondCouponsResponse;
    addEvents(value?: Coupon, index?: number): Coupon;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBondCouponsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBondCouponsResponse): GetBondCouponsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBondCouponsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBondCouponsResponse;
    static deserializeBinaryFromReader(message: GetBondCouponsResponse, reader: jspb.BinaryReader): GetBondCouponsResponse;
}

export namespace GetBondCouponsResponse {
    export type AsObject = {
        eventsList: Array<Coupon.AsObject>,
    }
}

export class GetBondEventsRequest extends jspb.Message { 

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetBondEventsRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetBondEventsRequest;
    getInstrumentId(): string;
    setInstrumentId(value: string): GetBondEventsRequest;
    getType(): GetBondEventsRequest.EventType;
    setType(value: GetBondEventsRequest.EventType): GetBondEventsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBondEventsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBondEventsRequest): GetBondEventsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBondEventsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBondEventsRequest;
    static deserializeBinaryFromReader(message: GetBondEventsRequest, reader: jspb.BinaryReader): GetBondEventsRequest;
}

export namespace GetBondEventsRequest {
    export type AsObject = {
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        instrumentId: string,
        type: GetBondEventsRequest.EventType,
    }

    export enum EventType {
    EVENT_TYPE_UNSPECIFIED = 0,
    EVENT_TYPE_CPN = 1,
    EVENT_TYPE_CALL = 2,
    EVENT_TYPE_MTY = 3,
    EVENT_TYPE_CONV = 4,
    }

}

export class GetBondEventsResponse extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<GetBondEventsResponse.BondEvent>;
    setEventsList(value: Array<GetBondEventsResponse.BondEvent>): GetBondEventsResponse;
    addEvents(value?: GetBondEventsResponse.BondEvent, index?: number): GetBondEventsResponse.BondEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBondEventsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBondEventsResponse): GetBondEventsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBondEventsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBondEventsResponse;
    static deserializeBinaryFromReader(message: GetBondEventsResponse, reader: jspb.BinaryReader): GetBondEventsResponse;
}

export namespace GetBondEventsResponse {
    export type AsObject = {
        eventsList: Array<GetBondEventsResponse.BondEvent.AsObject>,
    }


    export class BondEvent extends jspb.Message { 
        getInstrumentId(): string;
        setInstrumentId(value: string): BondEvent;
        getEventNumber(): number;
        setEventNumber(value: number): BondEvent;

        hasEventDate(): boolean;
        clearEventDate(): void;
        getEventDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEventDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;
        getEventType(): GetBondEventsRequest.EventType;
        setEventType(value: GetBondEventsRequest.EventType): BondEvent;

        hasEventTotalVol(): boolean;
        clearEventTotalVol(): void;
        getEventTotalVol(): common_pb.Quotation | undefined;
        setEventTotalVol(value?: common_pb.Quotation): BondEvent;

        hasFixDate(): boolean;
        clearFixDate(): void;
        getFixDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setFixDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;

        hasRateDate(): boolean;
        clearRateDate(): void;
        getRateDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setRateDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;

        hasDefaultDate(): boolean;
        clearDefaultDate(): void;
        getDefaultDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setDefaultDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;

        hasRealPayDate(): boolean;
        clearRealPayDate(): void;
        getRealPayDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setRealPayDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;

        hasPayDate(): boolean;
        clearPayDate(): void;
        getPayDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setPayDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;

        hasPayOneBond(): boolean;
        clearPayOneBond(): void;
        getPayOneBond(): common_pb.MoneyValue | undefined;
        setPayOneBond(value?: common_pb.MoneyValue): BondEvent;

        hasMoneyFlowVal(): boolean;
        clearMoneyFlowVal(): void;
        getMoneyFlowVal(): common_pb.MoneyValue | undefined;
        setMoneyFlowVal(value?: common_pb.MoneyValue): BondEvent;
        getExecution(): string;
        setExecution(value: string): BondEvent;
        getOperationType(): string;
        setOperationType(value: string): BondEvent;

        hasValue(): boolean;
        clearValue(): void;
        getValue(): common_pb.Quotation | undefined;
        setValue(value?: common_pb.Quotation): BondEvent;
        getNote(): string;
        setNote(value: string): BondEvent;
        getConvertToFinToolId(): string;
        setConvertToFinToolId(value: string): BondEvent;

        hasCouponStartDate(): boolean;
        clearCouponStartDate(): void;
        getCouponStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCouponStartDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;

        hasCouponEndDate(): boolean;
        clearCouponEndDate(): void;
        getCouponEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCouponEndDate(value?: google_protobuf_timestamp_pb.Timestamp): BondEvent;
        getCouponPeriod(): number;
        setCouponPeriod(value: number): BondEvent;

        hasCouponInterestRate(): boolean;
        clearCouponInterestRate(): void;
        getCouponInterestRate(): common_pb.Quotation | undefined;
        setCouponInterestRate(value?: common_pb.Quotation): BondEvent;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BondEvent.AsObject;
        static toObject(includeInstance: boolean, msg: BondEvent): BondEvent.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BondEvent, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BondEvent;
        static deserializeBinaryFromReader(message: BondEvent, reader: jspb.BinaryReader): BondEvent;
    }

    export namespace BondEvent {
        export type AsObject = {
            instrumentId: string,
            eventNumber: number,
            eventDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            eventType: GetBondEventsRequest.EventType,
            eventTotalVol?: common_pb.Quotation.AsObject,
            fixDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            rateDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            defaultDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            realPayDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            payDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            payOneBond?: common_pb.MoneyValue.AsObject,
            moneyFlowVal?: common_pb.MoneyValue.AsObject,
            execution: string,
            operationType: string,
            value?: common_pb.Quotation.AsObject,
            note: string,
            convertToFinToolId: string,
            couponStartDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            couponEndDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            couponPeriod: number,
            couponInterestRate?: common_pb.Quotation.AsObject,
        }
    }

}

export class Coupon extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): Coupon;

    hasCouponDate(): boolean;
    clearCouponDate(): void;
    getCouponDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCouponDate(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;
    getCouponNumber(): number;
    setCouponNumber(value: number): Coupon;

    hasFixDate(): boolean;
    clearFixDate(): void;
    getFixDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFixDate(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;

    hasPayOneBond(): boolean;
    clearPayOneBond(): void;
    getPayOneBond(): common_pb.MoneyValue | undefined;
    setPayOneBond(value?: common_pb.MoneyValue): Coupon;
    getCouponType(): CouponType;
    setCouponType(value: CouponType): Coupon;

    hasCouponStartDate(): boolean;
    clearCouponStartDate(): void;
    getCouponStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCouponStartDate(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;

    hasCouponEndDate(): boolean;
    clearCouponEndDate(): void;
    getCouponEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCouponEndDate(value?: google_protobuf_timestamp_pb.Timestamp): Coupon;
    getCouponPeriod(): number;
    setCouponPeriod(value: number): Coupon;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Coupon.AsObject;
    static toObject(includeInstance: boolean, msg: Coupon): Coupon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Coupon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Coupon;
    static deserializeBinaryFromReader(message: Coupon, reader: jspb.BinaryReader): Coupon;
}

export namespace Coupon {
    export type AsObject = {
        figi: string,
        couponDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        couponNumber: number,
        fixDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        payOneBond?: common_pb.MoneyValue.AsObject,
        couponType: CouponType,
        couponStartDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        couponEndDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        couponPeriod: number,
    }
}

export class CurrencyResponse extends jspb.Message { 

    hasInstrument(): boolean;
    clearInstrument(): void;
    getInstrument(): Currency | undefined;
    setInstrument(value?: Currency): CurrencyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrencyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CurrencyResponse): CurrencyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrencyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrencyResponse;
    static deserializeBinaryFromReader(message: CurrencyResponse, reader: jspb.BinaryReader): CurrencyResponse;
}

export namespace CurrencyResponse {
    export type AsObject = {
        instrument?: Currency.AsObject,
    }
}

export class CurrenciesResponse extends jspb.Message { 
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<Currency>;
    setInstrumentsList(value: Array<Currency>): CurrenciesResponse;
    addInstruments(value?: Currency, index?: number): Currency;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrenciesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CurrenciesResponse): CurrenciesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrenciesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrenciesResponse;
    static deserializeBinaryFromReader(message: CurrenciesResponse, reader: jspb.BinaryReader): CurrenciesResponse;
}

export namespace CurrenciesResponse {
    export type AsObject = {
        instrumentsList: Array<Currency.AsObject>,
    }
}

export class EtfResponse extends jspb.Message { 

    hasInstrument(): boolean;
    clearInstrument(): void;
    getInstrument(): Etf | undefined;
    setInstrument(value?: Etf): EtfResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EtfResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EtfResponse): EtfResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EtfResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EtfResponse;
    static deserializeBinaryFromReader(message: EtfResponse, reader: jspb.BinaryReader): EtfResponse;
}

export namespace EtfResponse {
    export type AsObject = {
        instrument?: Etf.AsObject,
    }
}

export class EtfsResponse extends jspb.Message { 
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<Etf>;
    setInstrumentsList(value: Array<Etf>): EtfsResponse;
    addInstruments(value?: Etf, index?: number): Etf;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EtfsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EtfsResponse): EtfsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EtfsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EtfsResponse;
    static deserializeBinaryFromReader(message: EtfsResponse, reader: jspb.BinaryReader): EtfsResponse;
}

export namespace EtfsResponse {
    export type AsObject = {
        instrumentsList: Array<Etf.AsObject>,
    }
}

export class FutureResponse extends jspb.Message { 

    hasInstrument(): boolean;
    clearInstrument(): void;
    getInstrument(): Future | undefined;
    setInstrument(value?: Future): FutureResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FutureResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FutureResponse): FutureResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FutureResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FutureResponse;
    static deserializeBinaryFromReader(message: FutureResponse, reader: jspb.BinaryReader): FutureResponse;
}

export namespace FutureResponse {
    export type AsObject = {
        instrument?: Future.AsObject,
    }
}

export class FuturesResponse extends jspb.Message { 
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<Future>;
    setInstrumentsList(value: Array<Future>): FuturesResponse;
    addInstruments(value?: Future, index?: number): Future;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FuturesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FuturesResponse): FuturesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FuturesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FuturesResponse;
    static deserializeBinaryFromReader(message: FuturesResponse, reader: jspb.BinaryReader): FuturesResponse;
}

export namespace FuturesResponse {
    export type AsObject = {
        instrumentsList: Array<Future.AsObject>,
    }
}

export class OptionResponse extends jspb.Message { 

    hasInstrument(): boolean;
    clearInstrument(): void;
    getInstrument(): Option | undefined;
    setInstrument(value?: Option): OptionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OptionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OptionResponse): OptionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OptionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OptionResponse;
    static deserializeBinaryFromReader(message: OptionResponse, reader: jspb.BinaryReader): OptionResponse;
}

export namespace OptionResponse {
    export type AsObject = {
        instrument?: Option.AsObject,
    }
}

export class OptionsResponse extends jspb.Message { 
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<Option>;
    setInstrumentsList(value: Array<Option>): OptionsResponse;
    addInstruments(value?: Option, index?: number): Option;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OptionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OptionsResponse): OptionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OptionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OptionsResponse;
    static deserializeBinaryFromReader(message: OptionsResponse, reader: jspb.BinaryReader): OptionsResponse;
}

export namespace OptionsResponse {
    export type AsObject = {
        instrumentsList: Array<Option.AsObject>,
    }
}

export class Option extends jspb.Message { 
    getUid(): string;
    setUid(value: string): Option;
    getPositionUid(): string;
    setPositionUid(value: string): Option;
    getTicker(): string;
    setTicker(value: string): Option;
    getClassCode(): string;
    setClassCode(value: string): Option;
    getBasicAssetPositionUid(): string;
    setBasicAssetPositionUid(value: string): Option;
    getTradingStatus(): common_pb.SecurityTradingStatus;
    setTradingStatus(value: common_pb.SecurityTradingStatus): Option;
    getRealExchange(): RealExchange;
    setRealExchange(value: RealExchange): Option;
    getDirection(): OptionDirection;
    setDirection(value: OptionDirection): Option;
    getPaymentType(): OptionPaymentType;
    setPaymentType(value: OptionPaymentType): Option;
    getStyle(): OptionStyle;
    setStyle(value: OptionStyle): Option;
    getSettlementType(): OptionSettlementType;
    setSettlementType(value: OptionSettlementType): Option;
    getName(): string;
    setName(value: string): Option;
    getCurrency(): string;
    setCurrency(value: string): Option;
    getSettlementCurrency(): string;
    setSettlementCurrency(value: string): Option;
    getAssetType(): string;
    setAssetType(value: string): Option;
    getBasicAsset(): string;
    setBasicAsset(value: string): Option;
    getExchange(): string;
    setExchange(value: string): Option;
    getCountryOfRisk(): string;
    setCountryOfRisk(value: string): Option;
    getCountryOfRiskName(): string;
    setCountryOfRiskName(value: string): Option;
    getSector(): string;
    setSector(value: string): Option;

    hasBrand(): boolean;
    clearBrand(): void;
    getBrand(): common_pb.BrandData | undefined;
    setBrand(value?: common_pb.BrandData): Option;
    getLot(): number;
    setLot(value: number): Option;

    hasBasicAssetSize(): boolean;
    clearBasicAssetSize(): void;
    getBasicAssetSize(): common_pb.Quotation | undefined;
    setBasicAssetSize(value?: common_pb.Quotation): Option;

    hasKlong(): boolean;
    clearKlong(): void;
    getKlong(): common_pb.Quotation | undefined;
    setKlong(value?: common_pb.Quotation): Option;

    hasKshort(): boolean;
    clearKshort(): void;
    getKshort(): common_pb.Quotation | undefined;
    setKshort(value?: common_pb.Quotation): Option;

    hasDlong(): boolean;
    clearDlong(): void;
    getDlong(): common_pb.Quotation | undefined;
    setDlong(value?: common_pb.Quotation): Option;

    hasDshort(): boolean;
    clearDshort(): void;
    getDshort(): common_pb.Quotation | undefined;
    setDshort(value?: common_pb.Quotation): Option;

    hasDlongMin(): boolean;
    clearDlongMin(): void;
    getDlongMin(): common_pb.Quotation | undefined;
    setDlongMin(value?: common_pb.Quotation): Option;

    hasDshortMin(): boolean;
    clearDshortMin(): void;
    getDshortMin(): common_pb.Quotation | undefined;
    setDshortMin(value?: common_pb.Quotation): Option;

    hasMinPriceIncrement(): boolean;
    clearMinPriceIncrement(): void;
    getMinPriceIncrement(): common_pb.Quotation | undefined;
    setMinPriceIncrement(value?: common_pb.Quotation): Option;

    hasStrikePrice(): boolean;
    clearStrikePrice(): void;
    getStrikePrice(): common_pb.MoneyValue | undefined;
    setStrikePrice(value?: common_pb.MoneyValue): Option;

    hasExpirationDate(): boolean;
    clearExpirationDate(): void;
    getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): Option;

    hasFirstTradeDate(): boolean;
    clearFirstTradeDate(): void;
    getFirstTradeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirstTradeDate(value?: google_protobuf_timestamp_pb.Timestamp): Option;

    hasLastTradeDate(): boolean;
    clearLastTradeDate(): void;
    getLastTradeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastTradeDate(value?: google_protobuf_timestamp_pb.Timestamp): Option;

    hasFirst1minCandleDate(): boolean;
    clearFirst1minCandleDate(): void;
    getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Option;

    hasFirst1dayCandleDate(): boolean;
    clearFirst1dayCandleDate(): void;
    getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Option;
    getShortEnabledFlag(): boolean;
    setShortEnabledFlag(value: boolean): Option;
    getForIisFlag(): boolean;
    setForIisFlag(value: boolean): Option;
    getOtcFlag(): boolean;
    setOtcFlag(value: boolean): Option;
    getBuyAvailableFlag(): boolean;
    setBuyAvailableFlag(value: boolean): Option;
    getSellAvailableFlag(): boolean;
    setSellAvailableFlag(value: boolean): Option;
    getForQualInvestorFlag(): boolean;
    setForQualInvestorFlag(value: boolean): Option;
    getWeekendFlag(): boolean;
    setWeekendFlag(value: boolean): Option;
    getBlockedTcaFlag(): boolean;
    setBlockedTcaFlag(value: boolean): Option;
    getApiTradeAvailableFlag(): boolean;
    setApiTradeAvailableFlag(value: boolean): Option;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Option.AsObject;
    static toObject(includeInstance: boolean, msg: Option): Option.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Option, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Option;
    static deserializeBinaryFromReader(message: Option, reader: jspb.BinaryReader): Option;
}

export namespace Option {
    export type AsObject = {
        uid: string,
        positionUid: string,
        ticker: string,
        classCode: string,
        basicAssetPositionUid: string,
        tradingStatus: common_pb.SecurityTradingStatus,
        realExchange: RealExchange,
        direction: OptionDirection,
        paymentType: OptionPaymentType,
        style: OptionStyle,
        settlementType: OptionSettlementType,
        name: string,
        currency: string,
        settlementCurrency: string,
        assetType: string,
        basicAsset: string,
        exchange: string,
        countryOfRisk: string,
        countryOfRiskName: string,
        sector: string,
        brand?: common_pb.BrandData.AsObject,
        lot: number,
        basicAssetSize?: common_pb.Quotation.AsObject,
        klong?: common_pb.Quotation.AsObject,
        kshort?: common_pb.Quotation.AsObject,
        dlong?: common_pb.Quotation.AsObject,
        dshort?: common_pb.Quotation.AsObject,
        dlongMin?: common_pb.Quotation.AsObject,
        dshortMin?: common_pb.Quotation.AsObject,
        minPriceIncrement?: common_pb.Quotation.AsObject,
        strikePrice?: common_pb.MoneyValue.AsObject,
        expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        firstTradeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastTradeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        shortEnabledFlag: boolean,
        forIisFlag: boolean,
        otcFlag: boolean,
        buyAvailableFlag: boolean,
        sellAvailableFlag: boolean,
        forQualInvestorFlag: boolean,
        weekendFlag: boolean,
        blockedTcaFlag: boolean,
        apiTradeAvailableFlag: boolean,
    }
}

export class ShareResponse extends jspb.Message { 

    hasInstrument(): boolean;
    clearInstrument(): void;
    getInstrument(): Share | undefined;
    setInstrument(value?: Share): ShareResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShareResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ShareResponse): ShareResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShareResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShareResponse;
    static deserializeBinaryFromReader(message: ShareResponse, reader: jspb.BinaryReader): ShareResponse;
}

export namespace ShareResponse {
    export type AsObject = {
        instrument?: Share.AsObject,
    }
}

export class SharesResponse extends jspb.Message { 
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<Share>;
    setInstrumentsList(value: Array<Share>): SharesResponse;
    addInstruments(value?: Share, index?: number): Share;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SharesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SharesResponse): SharesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SharesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SharesResponse;
    static deserializeBinaryFromReader(message: SharesResponse, reader: jspb.BinaryReader): SharesResponse;
}

export namespace SharesResponse {
    export type AsObject = {
        instrumentsList: Array<Share.AsObject>,
    }
}

export class Bond extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): Bond;
    getTicker(): string;
    setTicker(value: string): Bond;
    getClassCode(): string;
    setClassCode(value: string): Bond;
    getIsin(): string;
    setIsin(value: string): Bond;
    getLot(): number;
    setLot(value: number): Bond;
    getCurrency(): string;
    setCurrency(value: string): Bond;

    hasKlong(): boolean;
    clearKlong(): void;
    getKlong(): common_pb.Quotation | undefined;
    setKlong(value?: common_pb.Quotation): Bond;

    hasKshort(): boolean;
    clearKshort(): void;
    getKshort(): common_pb.Quotation | undefined;
    setKshort(value?: common_pb.Quotation): Bond;

    hasDlong(): boolean;
    clearDlong(): void;
    getDlong(): common_pb.Quotation | undefined;
    setDlong(value?: common_pb.Quotation): Bond;

    hasDshort(): boolean;
    clearDshort(): void;
    getDshort(): common_pb.Quotation | undefined;
    setDshort(value?: common_pb.Quotation): Bond;

    hasDlongMin(): boolean;
    clearDlongMin(): void;
    getDlongMin(): common_pb.Quotation | undefined;
    setDlongMin(value?: common_pb.Quotation): Bond;

    hasDshortMin(): boolean;
    clearDshortMin(): void;
    getDshortMin(): common_pb.Quotation | undefined;
    setDshortMin(value?: common_pb.Quotation): Bond;
    getShortEnabledFlag(): boolean;
    setShortEnabledFlag(value: boolean): Bond;
    getName(): string;
    setName(value: string): Bond;
    getExchange(): string;
    setExchange(value: string): Bond;
    getCouponQuantityPerYear(): number;
    setCouponQuantityPerYear(value: number): Bond;

    hasMaturityDate(): boolean;
    clearMaturityDate(): void;
    getMaturityDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setMaturityDate(value?: google_protobuf_timestamp_pb.Timestamp): Bond;

    hasNominal(): boolean;
    clearNominal(): void;
    getNominal(): common_pb.MoneyValue | undefined;
    setNominal(value?: common_pb.MoneyValue): Bond;

    hasInitialNominal(): boolean;
    clearInitialNominal(): void;
    getInitialNominal(): common_pb.MoneyValue | undefined;
    setInitialNominal(value?: common_pb.MoneyValue): Bond;

    hasStateRegDate(): boolean;
    clearStateRegDate(): void;
    getStateRegDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStateRegDate(value?: google_protobuf_timestamp_pb.Timestamp): Bond;

    hasPlacementDate(): boolean;
    clearPlacementDate(): void;
    getPlacementDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPlacementDate(value?: google_protobuf_timestamp_pb.Timestamp): Bond;

    hasPlacementPrice(): boolean;
    clearPlacementPrice(): void;
    getPlacementPrice(): common_pb.MoneyValue | undefined;
    setPlacementPrice(value?: common_pb.MoneyValue): Bond;

    hasAciValue(): boolean;
    clearAciValue(): void;
    getAciValue(): common_pb.MoneyValue | undefined;
    setAciValue(value?: common_pb.MoneyValue): Bond;
    getCountryOfRisk(): string;
    setCountryOfRisk(value: string): Bond;
    getCountryOfRiskName(): string;
    setCountryOfRiskName(value: string): Bond;
    getSector(): string;
    setSector(value: string): Bond;
    getIssueKind(): string;
    setIssueKind(value: string): Bond;
    getIssueSize(): number;
    setIssueSize(value: number): Bond;
    getIssueSizePlan(): number;
    setIssueSizePlan(value: number): Bond;
    getTradingStatus(): common_pb.SecurityTradingStatus;
    setTradingStatus(value: common_pb.SecurityTradingStatus): Bond;
    getOtcFlag(): boolean;
    setOtcFlag(value: boolean): Bond;
    getBuyAvailableFlag(): boolean;
    setBuyAvailableFlag(value: boolean): Bond;
    getSellAvailableFlag(): boolean;
    setSellAvailableFlag(value: boolean): Bond;
    getFloatingCouponFlag(): boolean;
    setFloatingCouponFlag(value: boolean): Bond;
    getPerpetualFlag(): boolean;
    setPerpetualFlag(value: boolean): Bond;
    getAmortizationFlag(): boolean;
    setAmortizationFlag(value: boolean): Bond;

    hasMinPriceIncrement(): boolean;
    clearMinPriceIncrement(): void;
    getMinPriceIncrement(): common_pb.Quotation | undefined;
    setMinPriceIncrement(value?: common_pb.Quotation): Bond;
    getApiTradeAvailableFlag(): boolean;
    setApiTradeAvailableFlag(value: boolean): Bond;
    getUid(): string;
    setUid(value: string): Bond;
    getRealExchange(): RealExchange;
    setRealExchange(value: RealExchange): Bond;
    getPositionUid(): string;
    setPositionUid(value: string): Bond;
    getAssetUid(): string;
    setAssetUid(value: string): Bond;
    getForIisFlag(): boolean;
    setForIisFlag(value: boolean): Bond;
    getForQualInvestorFlag(): boolean;
    setForQualInvestorFlag(value: boolean): Bond;
    getWeekendFlag(): boolean;
    setWeekendFlag(value: boolean): Bond;
    getBlockedTcaFlag(): boolean;
    setBlockedTcaFlag(value: boolean): Bond;
    getSubordinatedFlag(): boolean;
    setSubordinatedFlag(value: boolean): Bond;
    getLiquidityFlag(): boolean;
    setLiquidityFlag(value: boolean): Bond;

    hasFirst1minCandleDate(): boolean;
    clearFirst1minCandleDate(): void;
    getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Bond;

    hasFirst1dayCandleDate(): boolean;
    clearFirst1dayCandleDate(): void;
    getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Bond;
    getRiskLevel(): RiskLevel;
    setRiskLevel(value: RiskLevel): Bond;

    hasBrand(): boolean;
    clearBrand(): void;
    getBrand(): common_pb.BrandData | undefined;
    setBrand(value?: common_pb.BrandData): Bond;
    getBondType(): BondType;
    setBondType(value: BondType): Bond;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Bond.AsObject;
    static toObject(includeInstance: boolean, msg: Bond): Bond.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Bond, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Bond;
    static deserializeBinaryFromReader(message: Bond, reader: jspb.BinaryReader): Bond;
}

export namespace Bond {
    export type AsObject = {
        figi: string,
        ticker: string,
        classCode: string,
        isin: string,
        lot: number,
        currency: string,
        klong?: common_pb.Quotation.AsObject,
        kshort?: common_pb.Quotation.AsObject,
        dlong?: common_pb.Quotation.AsObject,
        dshort?: common_pb.Quotation.AsObject,
        dlongMin?: common_pb.Quotation.AsObject,
        dshortMin?: common_pb.Quotation.AsObject,
        shortEnabledFlag: boolean,
        name: string,
        exchange: string,
        couponQuantityPerYear: number,
        maturityDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        nominal?: common_pb.MoneyValue.AsObject,
        initialNominal?: common_pb.MoneyValue.AsObject,
        stateRegDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        placementDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        placementPrice?: common_pb.MoneyValue.AsObject,
        aciValue?: common_pb.MoneyValue.AsObject,
        countryOfRisk: string,
        countryOfRiskName: string,
        sector: string,
        issueKind: string,
        issueSize: number,
        issueSizePlan: number,
        tradingStatus: common_pb.SecurityTradingStatus,
        otcFlag: boolean,
        buyAvailableFlag: boolean,
        sellAvailableFlag: boolean,
        floatingCouponFlag: boolean,
        perpetualFlag: boolean,
        amortizationFlag: boolean,
        minPriceIncrement?: common_pb.Quotation.AsObject,
        apiTradeAvailableFlag: boolean,
        uid: string,
        realExchange: RealExchange,
        positionUid: string,
        assetUid: string,
        forIisFlag: boolean,
        forQualInvestorFlag: boolean,
        weekendFlag: boolean,
        blockedTcaFlag: boolean,
        subordinatedFlag: boolean,
        liquidityFlag: boolean,
        first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        riskLevel: RiskLevel,
        brand?: common_pb.BrandData.AsObject,
        bondType: BondType,
    }
}

export class Currency extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): Currency;
    getTicker(): string;
    setTicker(value: string): Currency;
    getClassCode(): string;
    setClassCode(value: string): Currency;
    getIsin(): string;
    setIsin(value: string): Currency;
    getLot(): number;
    setLot(value: number): Currency;
    getCurrency(): string;
    setCurrency(value: string): Currency;

    hasKlong(): boolean;
    clearKlong(): void;
    getKlong(): common_pb.Quotation | undefined;
    setKlong(value?: common_pb.Quotation): Currency;

    hasKshort(): boolean;
    clearKshort(): void;
    getKshort(): common_pb.Quotation | undefined;
    setKshort(value?: common_pb.Quotation): Currency;

    hasDlong(): boolean;
    clearDlong(): void;
    getDlong(): common_pb.Quotation | undefined;
    setDlong(value?: common_pb.Quotation): Currency;

    hasDshort(): boolean;
    clearDshort(): void;
    getDshort(): common_pb.Quotation | undefined;
    setDshort(value?: common_pb.Quotation): Currency;

    hasDlongMin(): boolean;
    clearDlongMin(): void;
    getDlongMin(): common_pb.Quotation | undefined;
    setDlongMin(value?: common_pb.Quotation): Currency;

    hasDshortMin(): boolean;
    clearDshortMin(): void;
    getDshortMin(): common_pb.Quotation | undefined;
    setDshortMin(value?: common_pb.Quotation): Currency;
    getShortEnabledFlag(): boolean;
    setShortEnabledFlag(value: boolean): Currency;
    getName(): string;
    setName(value: string): Currency;
    getExchange(): string;
    setExchange(value: string): Currency;

    hasNominal(): boolean;
    clearNominal(): void;
    getNominal(): common_pb.MoneyValue | undefined;
    setNominal(value?: common_pb.MoneyValue): Currency;
    getCountryOfRisk(): string;
    setCountryOfRisk(value: string): Currency;
    getCountryOfRiskName(): string;
    setCountryOfRiskName(value: string): Currency;
    getTradingStatus(): common_pb.SecurityTradingStatus;
    setTradingStatus(value: common_pb.SecurityTradingStatus): Currency;
    getOtcFlag(): boolean;
    setOtcFlag(value: boolean): Currency;
    getBuyAvailableFlag(): boolean;
    setBuyAvailableFlag(value: boolean): Currency;
    getSellAvailableFlag(): boolean;
    setSellAvailableFlag(value: boolean): Currency;
    getIsoCurrencyName(): string;
    setIsoCurrencyName(value: string): Currency;

    hasMinPriceIncrement(): boolean;
    clearMinPriceIncrement(): void;
    getMinPriceIncrement(): common_pb.Quotation | undefined;
    setMinPriceIncrement(value?: common_pb.Quotation): Currency;
    getApiTradeAvailableFlag(): boolean;
    setApiTradeAvailableFlag(value: boolean): Currency;
    getUid(): string;
    setUid(value: string): Currency;
    getRealExchange(): RealExchange;
    setRealExchange(value: RealExchange): Currency;
    getPositionUid(): string;
    setPositionUid(value: string): Currency;
    getForIisFlag(): boolean;
    setForIisFlag(value: boolean): Currency;
    getForQualInvestorFlag(): boolean;
    setForQualInvestorFlag(value: boolean): Currency;
    getWeekendFlag(): boolean;
    setWeekendFlag(value: boolean): Currency;
    getBlockedTcaFlag(): boolean;
    setBlockedTcaFlag(value: boolean): Currency;

    hasFirst1minCandleDate(): boolean;
    clearFirst1minCandleDate(): void;
    getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Currency;

    hasFirst1dayCandleDate(): boolean;
    clearFirst1dayCandleDate(): void;
    getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Currency;

    hasBrand(): boolean;
    clearBrand(): void;
    getBrand(): common_pb.BrandData | undefined;
    setBrand(value?: common_pb.BrandData): Currency;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Currency.AsObject;
    static toObject(includeInstance: boolean, msg: Currency): Currency.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Currency, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Currency;
    static deserializeBinaryFromReader(message: Currency, reader: jspb.BinaryReader): Currency;
}

export namespace Currency {
    export type AsObject = {
        figi: string,
        ticker: string,
        classCode: string,
        isin: string,
        lot: number,
        currency: string,
        klong?: common_pb.Quotation.AsObject,
        kshort?: common_pb.Quotation.AsObject,
        dlong?: common_pb.Quotation.AsObject,
        dshort?: common_pb.Quotation.AsObject,
        dlongMin?: common_pb.Quotation.AsObject,
        dshortMin?: common_pb.Quotation.AsObject,
        shortEnabledFlag: boolean,
        name: string,
        exchange: string,
        nominal?: common_pb.MoneyValue.AsObject,
        countryOfRisk: string,
        countryOfRiskName: string,
        tradingStatus: common_pb.SecurityTradingStatus,
        otcFlag: boolean,
        buyAvailableFlag: boolean,
        sellAvailableFlag: boolean,
        isoCurrencyName: string,
        minPriceIncrement?: common_pb.Quotation.AsObject,
        apiTradeAvailableFlag: boolean,
        uid: string,
        realExchange: RealExchange,
        positionUid: string,
        forIisFlag: boolean,
        forQualInvestorFlag: boolean,
        weekendFlag: boolean,
        blockedTcaFlag: boolean,
        first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        brand?: common_pb.BrandData.AsObject,
    }
}

export class Etf extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): Etf;
    getTicker(): string;
    setTicker(value: string): Etf;
    getClassCode(): string;
    setClassCode(value: string): Etf;
    getIsin(): string;
    setIsin(value: string): Etf;
    getLot(): number;
    setLot(value: number): Etf;
    getCurrency(): string;
    setCurrency(value: string): Etf;

    hasKlong(): boolean;
    clearKlong(): void;
    getKlong(): common_pb.Quotation | undefined;
    setKlong(value?: common_pb.Quotation): Etf;

    hasKshort(): boolean;
    clearKshort(): void;
    getKshort(): common_pb.Quotation | undefined;
    setKshort(value?: common_pb.Quotation): Etf;

    hasDlong(): boolean;
    clearDlong(): void;
    getDlong(): common_pb.Quotation | undefined;
    setDlong(value?: common_pb.Quotation): Etf;

    hasDshort(): boolean;
    clearDshort(): void;
    getDshort(): common_pb.Quotation | undefined;
    setDshort(value?: common_pb.Quotation): Etf;

    hasDlongMin(): boolean;
    clearDlongMin(): void;
    getDlongMin(): common_pb.Quotation | undefined;
    setDlongMin(value?: common_pb.Quotation): Etf;

    hasDshortMin(): boolean;
    clearDshortMin(): void;
    getDshortMin(): common_pb.Quotation | undefined;
    setDshortMin(value?: common_pb.Quotation): Etf;
    getShortEnabledFlag(): boolean;
    setShortEnabledFlag(value: boolean): Etf;
    getName(): string;
    setName(value: string): Etf;
    getExchange(): string;
    setExchange(value: string): Etf;

    hasFixedCommission(): boolean;
    clearFixedCommission(): void;
    getFixedCommission(): common_pb.Quotation | undefined;
    setFixedCommission(value?: common_pb.Quotation): Etf;
    getFocusType(): string;
    setFocusType(value: string): Etf;

    hasReleasedDate(): boolean;
    clearReleasedDate(): void;
    getReleasedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReleasedDate(value?: google_protobuf_timestamp_pb.Timestamp): Etf;

    hasNumShares(): boolean;
    clearNumShares(): void;
    getNumShares(): common_pb.Quotation | undefined;
    setNumShares(value?: common_pb.Quotation): Etf;
    getCountryOfRisk(): string;
    setCountryOfRisk(value: string): Etf;
    getCountryOfRiskName(): string;
    setCountryOfRiskName(value: string): Etf;
    getSector(): string;
    setSector(value: string): Etf;
    getRebalancingFreq(): string;
    setRebalancingFreq(value: string): Etf;
    getTradingStatus(): common_pb.SecurityTradingStatus;
    setTradingStatus(value: common_pb.SecurityTradingStatus): Etf;
    getOtcFlag(): boolean;
    setOtcFlag(value: boolean): Etf;
    getBuyAvailableFlag(): boolean;
    setBuyAvailableFlag(value: boolean): Etf;
    getSellAvailableFlag(): boolean;
    setSellAvailableFlag(value: boolean): Etf;

    hasMinPriceIncrement(): boolean;
    clearMinPriceIncrement(): void;
    getMinPriceIncrement(): common_pb.Quotation | undefined;
    setMinPriceIncrement(value?: common_pb.Quotation): Etf;
    getApiTradeAvailableFlag(): boolean;
    setApiTradeAvailableFlag(value: boolean): Etf;
    getUid(): string;
    setUid(value: string): Etf;
    getRealExchange(): RealExchange;
    setRealExchange(value: RealExchange): Etf;
    getPositionUid(): string;
    setPositionUid(value: string): Etf;
    getAssetUid(): string;
    setAssetUid(value: string): Etf;
    getInstrumentExchange(): InstrumentExchangeType;
    setInstrumentExchange(value: InstrumentExchangeType): Etf;
    getForIisFlag(): boolean;
    setForIisFlag(value: boolean): Etf;
    getForQualInvestorFlag(): boolean;
    setForQualInvestorFlag(value: boolean): Etf;
    getWeekendFlag(): boolean;
    setWeekendFlag(value: boolean): Etf;
    getBlockedTcaFlag(): boolean;
    setBlockedTcaFlag(value: boolean): Etf;
    getLiquidityFlag(): boolean;
    setLiquidityFlag(value: boolean): Etf;

    hasFirst1minCandleDate(): boolean;
    clearFirst1minCandleDate(): void;
    getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Etf;

    hasFirst1dayCandleDate(): boolean;
    clearFirst1dayCandleDate(): void;
    getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Etf;

    hasBrand(): boolean;
    clearBrand(): void;
    getBrand(): common_pb.BrandData | undefined;
    setBrand(value?: common_pb.BrandData): Etf;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Etf.AsObject;
    static toObject(includeInstance: boolean, msg: Etf): Etf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Etf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Etf;
    static deserializeBinaryFromReader(message: Etf, reader: jspb.BinaryReader): Etf;
}

export namespace Etf {
    export type AsObject = {
        figi: string,
        ticker: string,
        classCode: string,
        isin: string,
        lot: number,
        currency: string,
        klong?: common_pb.Quotation.AsObject,
        kshort?: common_pb.Quotation.AsObject,
        dlong?: common_pb.Quotation.AsObject,
        dshort?: common_pb.Quotation.AsObject,
        dlongMin?: common_pb.Quotation.AsObject,
        dshortMin?: common_pb.Quotation.AsObject,
        shortEnabledFlag: boolean,
        name: string,
        exchange: string,
        fixedCommission?: common_pb.Quotation.AsObject,
        focusType: string,
        releasedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        numShares?: common_pb.Quotation.AsObject,
        countryOfRisk: string,
        countryOfRiskName: string,
        sector: string,
        rebalancingFreq: string,
        tradingStatus: common_pb.SecurityTradingStatus,
        otcFlag: boolean,
        buyAvailableFlag: boolean,
        sellAvailableFlag: boolean,
        minPriceIncrement?: common_pb.Quotation.AsObject,
        apiTradeAvailableFlag: boolean,
        uid: string,
        realExchange: RealExchange,
        positionUid: string,
        assetUid: string,
        instrumentExchange: InstrumentExchangeType,
        forIisFlag: boolean,
        forQualInvestorFlag: boolean,
        weekendFlag: boolean,
        blockedTcaFlag: boolean,
        liquidityFlag: boolean,
        first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        brand?: common_pb.BrandData.AsObject,
    }
}

export class Future extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): Future;
    getTicker(): string;
    setTicker(value: string): Future;
    getClassCode(): string;
    setClassCode(value: string): Future;
    getLot(): number;
    setLot(value: number): Future;
    getCurrency(): string;
    setCurrency(value: string): Future;

    hasKlong(): boolean;
    clearKlong(): void;
    getKlong(): common_pb.Quotation | undefined;
    setKlong(value?: common_pb.Quotation): Future;

    hasKshort(): boolean;
    clearKshort(): void;
    getKshort(): common_pb.Quotation | undefined;
    setKshort(value?: common_pb.Quotation): Future;

    hasDlong(): boolean;
    clearDlong(): void;
    getDlong(): common_pb.Quotation | undefined;
    setDlong(value?: common_pb.Quotation): Future;

    hasDshort(): boolean;
    clearDshort(): void;
    getDshort(): common_pb.Quotation | undefined;
    setDshort(value?: common_pb.Quotation): Future;

    hasDlongMin(): boolean;
    clearDlongMin(): void;
    getDlongMin(): common_pb.Quotation | undefined;
    setDlongMin(value?: common_pb.Quotation): Future;

    hasDshortMin(): boolean;
    clearDshortMin(): void;
    getDshortMin(): common_pb.Quotation | undefined;
    setDshortMin(value?: common_pb.Quotation): Future;
    getShortEnabledFlag(): boolean;
    setShortEnabledFlag(value: boolean): Future;
    getName(): string;
    setName(value: string): Future;
    getExchange(): string;
    setExchange(value: string): Future;

    hasFirstTradeDate(): boolean;
    clearFirstTradeDate(): void;
    getFirstTradeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirstTradeDate(value?: google_protobuf_timestamp_pb.Timestamp): Future;

    hasLastTradeDate(): boolean;
    clearLastTradeDate(): void;
    getLastTradeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastTradeDate(value?: google_protobuf_timestamp_pb.Timestamp): Future;
    getFuturesType(): string;
    setFuturesType(value: string): Future;
    getAssetType(): string;
    setAssetType(value: string): Future;
    getBasicAsset(): string;
    setBasicAsset(value: string): Future;

    hasBasicAssetSize(): boolean;
    clearBasicAssetSize(): void;
    getBasicAssetSize(): common_pb.Quotation | undefined;
    setBasicAssetSize(value?: common_pb.Quotation): Future;
    getCountryOfRisk(): string;
    setCountryOfRisk(value: string): Future;
    getCountryOfRiskName(): string;
    setCountryOfRiskName(value: string): Future;
    getSector(): string;
    setSector(value: string): Future;

    hasExpirationDate(): boolean;
    clearExpirationDate(): void;
    getExpirationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setExpirationDate(value?: google_protobuf_timestamp_pb.Timestamp): Future;
    getTradingStatus(): common_pb.SecurityTradingStatus;
    setTradingStatus(value: common_pb.SecurityTradingStatus): Future;
    getOtcFlag(): boolean;
    setOtcFlag(value: boolean): Future;
    getBuyAvailableFlag(): boolean;
    setBuyAvailableFlag(value: boolean): Future;
    getSellAvailableFlag(): boolean;
    setSellAvailableFlag(value: boolean): Future;

    hasMinPriceIncrement(): boolean;
    clearMinPriceIncrement(): void;
    getMinPriceIncrement(): common_pb.Quotation | undefined;
    setMinPriceIncrement(value?: common_pb.Quotation): Future;
    getApiTradeAvailableFlag(): boolean;
    setApiTradeAvailableFlag(value: boolean): Future;
    getUid(): string;
    setUid(value: string): Future;
    getRealExchange(): RealExchange;
    setRealExchange(value: RealExchange): Future;
    getPositionUid(): string;
    setPositionUid(value: string): Future;
    getBasicAssetPositionUid(): string;
    setBasicAssetPositionUid(value: string): Future;
    getForIisFlag(): boolean;
    setForIisFlag(value: boolean): Future;
    getForQualInvestorFlag(): boolean;
    setForQualInvestorFlag(value: boolean): Future;
    getWeekendFlag(): boolean;
    setWeekendFlag(value: boolean): Future;
    getBlockedTcaFlag(): boolean;
    setBlockedTcaFlag(value: boolean): Future;

    hasFirst1minCandleDate(): boolean;
    clearFirst1minCandleDate(): void;
    getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Future;

    hasFirst1dayCandleDate(): boolean;
    clearFirst1dayCandleDate(): void;
    getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Future;

    hasInitialMarginOnBuy(): boolean;
    clearInitialMarginOnBuy(): void;
    getInitialMarginOnBuy(): common_pb.MoneyValue | undefined;
    setInitialMarginOnBuy(value?: common_pb.MoneyValue): Future;

    hasInitialMarginOnSell(): boolean;
    clearInitialMarginOnSell(): void;
    getInitialMarginOnSell(): common_pb.MoneyValue | undefined;
    setInitialMarginOnSell(value?: common_pb.MoneyValue): Future;

    hasMinPriceIncrementAmount(): boolean;
    clearMinPriceIncrementAmount(): void;
    getMinPriceIncrementAmount(): common_pb.Quotation | undefined;
    setMinPriceIncrementAmount(value?: common_pb.Quotation): Future;

    hasBrand(): boolean;
    clearBrand(): void;
    getBrand(): common_pb.BrandData | undefined;
    setBrand(value?: common_pb.BrandData): Future;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Future.AsObject;
    static toObject(includeInstance: boolean, msg: Future): Future.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Future, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Future;
    static deserializeBinaryFromReader(message: Future, reader: jspb.BinaryReader): Future;
}

export namespace Future {
    export type AsObject = {
        figi: string,
        ticker: string,
        classCode: string,
        lot: number,
        currency: string,
        klong?: common_pb.Quotation.AsObject,
        kshort?: common_pb.Quotation.AsObject,
        dlong?: common_pb.Quotation.AsObject,
        dshort?: common_pb.Quotation.AsObject,
        dlongMin?: common_pb.Quotation.AsObject,
        dshortMin?: common_pb.Quotation.AsObject,
        shortEnabledFlag: boolean,
        name: string,
        exchange: string,
        firstTradeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastTradeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        futuresType: string,
        assetType: string,
        basicAsset: string,
        basicAssetSize?: common_pb.Quotation.AsObject,
        countryOfRisk: string,
        countryOfRiskName: string,
        sector: string,
        expirationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        tradingStatus: common_pb.SecurityTradingStatus,
        otcFlag: boolean,
        buyAvailableFlag: boolean,
        sellAvailableFlag: boolean,
        minPriceIncrement?: common_pb.Quotation.AsObject,
        apiTradeAvailableFlag: boolean,
        uid: string,
        realExchange: RealExchange,
        positionUid: string,
        basicAssetPositionUid: string,
        forIisFlag: boolean,
        forQualInvestorFlag: boolean,
        weekendFlag: boolean,
        blockedTcaFlag: boolean,
        first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        initialMarginOnBuy?: common_pb.MoneyValue.AsObject,
        initialMarginOnSell?: common_pb.MoneyValue.AsObject,
        minPriceIncrementAmount?: common_pb.Quotation.AsObject,
        brand?: common_pb.BrandData.AsObject,
    }
}

export class Share extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): Share;
    getTicker(): string;
    setTicker(value: string): Share;
    getClassCode(): string;
    setClassCode(value: string): Share;
    getIsin(): string;
    setIsin(value: string): Share;
    getLot(): number;
    setLot(value: number): Share;
    getCurrency(): string;
    setCurrency(value: string): Share;

    hasKlong(): boolean;
    clearKlong(): void;
    getKlong(): common_pb.Quotation | undefined;
    setKlong(value?: common_pb.Quotation): Share;

    hasKshort(): boolean;
    clearKshort(): void;
    getKshort(): common_pb.Quotation | undefined;
    setKshort(value?: common_pb.Quotation): Share;

    hasDlong(): boolean;
    clearDlong(): void;
    getDlong(): common_pb.Quotation | undefined;
    setDlong(value?: common_pb.Quotation): Share;

    hasDshort(): boolean;
    clearDshort(): void;
    getDshort(): common_pb.Quotation | undefined;
    setDshort(value?: common_pb.Quotation): Share;

    hasDlongMin(): boolean;
    clearDlongMin(): void;
    getDlongMin(): common_pb.Quotation | undefined;
    setDlongMin(value?: common_pb.Quotation): Share;

    hasDshortMin(): boolean;
    clearDshortMin(): void;
    getDshortMin(): common_pb.Quotation | undefined;
    setDshortMin(value?: common_pb.Quotation): Share;
    getShortEnabledFlag(): boolean;
    setShortEnabledFlag(value: boolean): Share;
    getName(): string;
    setName(value: string): Share;
    getExchange(): string;
    setExchange(value: string): Share;

    hasIpoDate(): boolean;
    clearIpoDate(): void;
    getIpoDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setIpoDate(value?: google_protobuf_timestamp_pb.Timestamp): Share;
    getIssueSize(): number;
    setIssueSize(value: number): Share;
    getCountryOfRisk(): string;
    setCountryOfRisk(value: string): Share;
    getCountryOfRiskName(): string;
    setCountryOfRiskName(value: string): Share;
    getSector(): string;
    setSector(value: string): Share;
    getIssueSizePlan(): number;
    setIssueSizePlan(value: number): Share;

    hasNominal(): boolean;
    clearNominal(): void;
    getNominal(): common_pb.MoneyValue | undefined;
    setNominal(value?: common_pb.MoneyValue): Share;
    getTradingStatus(): common_pb.SecurityTradingStatus;
    setTradingStatus(value: common_pb.SecurityTradingStatus): Share;
    getOtcFlag(): boolean;
    setOtcFlag(value: boolean): Share;
    getBuyAvailableFlag(): boolean;
    setBuyAvailableFlag(value: boolean): Share;
    getSellAvailableFlag(): boolean;
    setSellAvailableFlag(value: boolean): Share;
    getDivYieldFlag(): boolean;
    setDivYieldFlag(value: boolean): Share;
    getShareType(): ShareType;
    setShareType(value: ShareType): Share;

    hasMinPriceIncrement(): boolean;
    clearMinPriceIncrement(): void;
    getMinPriceIncrement(): common_pb.Quotation | undefined;
    setMinPriceIncrement(value?: common_pb.Quotation): Share;
    getApiTradeAvailableFlag(): boolean;
    setApiTradeAvailableFlag(value: boolean): Share;
    getUid(): string;
    setUid(value: string): Share;
    getRealExchange(): RealExchange;
    setRealExchange(value: RealExchange): Share;
    getPositionUid(): string;
    setPositionUid(value: string): Share;
    getAssetUid(): string;
    setAssetUid(value: string): Share;
    getInstrumentExchange(): InstrumentExchangeType;
    setInstrumentExchange(value: InstrumentExchangeType): Share;
    getForIisFlag(): boolean;
    setForIisFlag(value: boolean): Share;
    getForQualInvestorFlag(): boolean;
    setForQualInvestorFlag(value: boolean): Share;
    getWeekendFlag(): boolean;
    setWeekendFlag(value: boolean): Share;
    getBlockedTcaFlag(): boolean;
    setBlockedTcaFlag(value: boolean): Share;
    getLiquidityFlag(): boolean;
    setLiquidityFlag(value: boolean): Share;

    hasFirst1minCandleDate(): boolean;
    clearFirst1minCandleDate(): void;
    getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Share;

    hasFirst1dayCandleDate(): boolean;
    clearFirst1dayCandleDate(): void;
    getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Share;

    hasBrand(): boolean;
    clearBrand(): void;
    getBrand(): common_pb.BrandData | undefined;
    setBrand(value?: common_pb.BrandData): Share;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Share.AsObject;
    static toObject(includeInstance: boolean, msg: Share): Share.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Share, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Share;
    static deserializeBinaryFromReader(message: Share, reader: jspb.BinaryReader): Share;
}

export namespace Share {
    export type AsObject = {
        figi: string,
        ticker: string,
        classCode: string,
        isin: string,
        lot: number,
        currency: string,
        klong?: common_pb.Quotation.AsObject,
        kshort?: common_pb.Quotation.AsObject,
        dlong?: common_pb.Quotation.AsObject,
        dshort?: common_pb.Quotation.AsObject,
        dlongMin?: common_pb.Quotation.AsObject,
        dshortMin?: common_pb.Quotation.AsObject,
        shortEnabledFlag: boolean,
        name: string,
        exchange: string,
        ipoDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        issueSize: number,
        countryOfRisk: string,
        countryOfRiskName: string,
        sector: string,
        issueSizePlan: number,
        nominal?: common_pb.MoneyValue.AsObject,
        tradingStatus: common_pb.SecurityTradingStatus,
        otcFlag: boolean,
        buyAvailableFlag: boolean,
        sellAvailableFlag: boolean,
        divYieldFlag: boolean,
        shareType: ShareType,
        minPriceIncrement?: common_pb.Quotation.AsObject,
        apiTradeAvailableFlag: boolean,
        uid: string,
        realExchange: RealExchange,
        positionUid: string,
        assetUid: string,
        instrumentExchange: InstrumentExchangeType,
        forIisFlag: boolean,
        forQualInvestorFlag: boolean,
        weekendFlag: boolean,
        blockedTcaFlag: boolean,
        liquidityFlag: boolean,
        first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        brand?: common_pb.BrandData.AsObject,
    }
}

export class GetAccruedInterestsRequest extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): GetAccruedInterestsRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetAccruedInterestsRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetAccruedInterestsRequest;
    getInstrumentId(): string;
    setInstrumentId(value: string): GetAccruedInterestsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccruedInterestsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccruedInterestsRequest): GetAccruedInterestsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccruedInterestsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccruedInterestsRequest;
    static deserializeBinaryFromReader(message: GetAccruedInterestsRequest, reader: jspb.BinaryReader): GetAccruedInterestsRequest;
}

export namespace GetAccruedInterestsRequest {
    export type AsObject = {
        figi: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        instrumentId: string,
    }
}

export class GetAccruedInterestsResponse extends jspb.Message { 
    clearAccruedInterestsList(): void;
    getAccruedInterestsList(): Array<AccruedInterest>;
    setAccruedInterestsList(value: Array<AccruedInterest>): GetAccruedInterestsResponse;
    addAccruedInterests(value?: AccruedInterest, index?: number): AccruedInterest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccruedInterestsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccruedInterestsResponse): GetAccruedInterestsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccruedInterestsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccruedInterestsResponse;
    static deserializeBinaryFromReader(message: GetAccruedInterestsResponse, reader: jspb.BinaryReader): GetAccruedInterestsResponse;
}

export namespace GetAccruedInterestsResponse {
    export type AsObject = {
        accruedInterestsList: Array<AccruedInterest.AsObject>,
    }
}

export class AccruedInterest extends jspb.Message { 

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): AccruedInterest;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): common_pb.Quotation | undefined;
    setValue(value?: common_pb.Quotation): AccruedInterest;

    hasValuePercent(): boolean;
    clearValuePercent(): void;
    getValuePercent(): common_pb.Quotation | undefined;
    setValuePercent(value?: common_pb.Quotation): AccruedInterest;

    hasNominal(): boolean;
    clearNominal(): void;
    getNominal(): common_pb.Quotation | undefined;
    setNominal(value?: common_pb.Quotation): AccruedInterest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccruedInterest.AsObject;
    static toObject(includeInstance: boolean, msg: AccruedInterest): AccruedInterest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccruedInterest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccruedInterest;
    static deserializeBinaryFromReader(message: AccruedInterest, reader: jspb.BinaryReader): AccruedInterest;
}

export namespace AccruedInterest {
    export type AsObject = {
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        value?: common_pb.Quotation.AsObject,
        valuePercent?: common_pb.Quotation.AsObject,
        nominal?: common_pb.Quotation.AsObject,
    }
}

export class GetFuturesMarginRequest extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): GetFuturesMarginRequest;
    getInstrumentId(): string;
    setInstrumentId(value: string): GetFuturesMarginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFuturesMarginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFuturesMarginRequest): GetFuturesMarginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFuturesMarginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFuturesMarginRequest;
    static deserializeBinaryFromReader(message: GetFuturesMarginRequest, reader: jspb.BinaryReader): GetFuturesMarginRequest;
}

export namespace GetFuturesMarginRequest {
    export type AsObject = {
        figi: string,
        instrumentId: string,
    }
}

export class GetFuturesMarginResponse extends jspb.Message { 

    hasInitialMarginOnBuy(): boolean;
    clearInitialMarginOnBuy(): void;
    getInitialMarginOnBuy(): common_pb.MoneyValue | undefined;
    setInitialMarginOnBuy(value?: common_pb.MoneyValue): GetFuturesMarginResponse;

    hasInitialMarginOnSell(): boolean;
    clearInitialMarginOnSell(): void;
    getInitialMarginOnSell(): common_pb.MoneyValue | undefined;
    setInitialMarginOnSell(value?: common_pb.MoneyValue): GetFuturesMarginResponse;

    hasMinPriceIncrement(): boolean;
    clearMinPriceIncrement(): void;
    getMinPriceIncrement(): common_pb.Quotation | undefined;
    setMinPriceIncrement(value?: common_pb.Quotation): GetFuturesMarginResponse;

    hasMinPriceIncrementAmount(): boolean;
    clearMinPriceIncrementAmount(): void;
    getMinPriceIncrementAmount(): common_pb.Quotation | undefined;
    setMinPriceIncrementAmount(value?: common_pb.Quotation): GetFuturesMarginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFuturesMarginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFuturesMarginResponse): GetFuturesMarginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFuturesMarginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFuturesMarginResponse;
    static deserializeBinaryFromReader(message: GetFuturesMarginResponse, reader: jspb.BinaryReader): GetFuturesMarginResponse;
}

export namespace GetFuturesMarginResponse {
    export type AsObject = {
        initialMarginOnBuy?: common_pb.MoneyValue.AsObject,
        initialMarginOnSell?: common_pb.MoneyValue.AsObject,
        minPriceIncrement?: common_pb.Quotation.AsObject,
        minPriceIncrementAmount?: common_pb.Quotation.AsObject,
    }
}

export class InstrumentResponse extends jspb.Message { 

    hasInstrument(): boolean;
    clearInstrument(): void;
    getInstrument(): Instrument | undefined;
    setInstrument(value?: Instrument): InstrumentResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstrumentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InstrumentResponse): InstrumentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstrumentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstrumentResponse;
    static deserializeBinaryFromReader(message: InstrumentResponse, reader: jspb.BinaryReader): InstrumentResponse;
}

export namespace InstrumentResponse {
    export type AsObject = {
        instrument?: Instrument.AsObject,
    }
}

export class Instrument extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): Instrument;
    getTicker(): string;
    setTicker(value: string): Instrument;
    getClassCode(): string;
    setClassCode(value: string): Instrument;
    getIsin(): string;
    setIsin(value: string): Instrument;
    getLot(): number;
    setLot(value: number): Instrument;
    getCurrency(): string;
    setCurrency(value: string): Instrument;

    hasKlong(): boolean;
    clearKlong(): void;
    getKlong(): common_pb.Quotation | undefined;
    setKlong(value?: common_pb.Quotation): Instrument;

    hasKshort(): boolean;
    clearKshort(): void;
    getKshort(): common_pb.Quotation | undefined;
    setKshort(value?: common_pb.Quotation): Instrument;

    hasDlong(): boolean;
    clearDlong(): void;
    getDlong(): common_pb.Quotation | undefined;
    setDlong(value?: common_pb.Quotation): Instrument;

    hasDshort(): boolean;
    clearDshort(): void;
    getDshort(): common_pb.Quotation | undefined;
    setDshort(value?: common_pb.Quotation): Instrument;

    hasDlongMin(): boolean;
    clearDlongMin(): void;
    getDlongMin(): common_pb.Quotation | undefined;
    setDlongMin(value?: common_pb.Quotation): Instrument;

    hasDshortMin(): boolean;
    clearDshortMin(): void;
    getDshortMin(): common_pb.Quotation | undefined;
    setDshortMin(value?: common_pb.Quotation): Instrument;
    getShortEnabledFlag(): boolean;
    setShortEnabledFlag(value: boolean): Instrument;
    getName(): string;
    setName(value: string): Instrument;
    getExchange(): string;
    setExchange(value: string): Instrument;
    getCountryOfRisk(): string;
    setCountryOfRisk(value: string): Instrument;
    getCountryOfRiskName(): string;
    setCountryOfRiskName(value: string): Instrument;
    getInstrumentType(): string;
    setInstrumentType(value: string): Instrument;
    getTradingStatus(): common_pb.SecurityTradingStatus;
    setTradingStatus(value: common_pb.SecurityTradingStatus): Instrument;
    getOtcFlag(): boolean;
    setOtcFlag(value: boolean): Instrument;
    getBuyAvailableFlag(): boolean;
    setBuyAvailableFlag(value: boolean): Instrument;
    getSellAvailableFlag(): boolean;
    setSellAvailableFlag(value: boolean): Instrument;

    hasMinPriceIncrement(): boolean;
    clearMinPriceIncrement(): void;
    getMinPriceIncrement(): common_pb.Quotation | undefined;
    setMinPriceIncrement(value?: common_pb.Quotation): Instrument;
    getApiTradeAvailableFlag(): boolean;
    setApiTradeAvailableFlag(value: boolean): Instrument;
    getUid(): string;
    setUid(value: string): Instrument;
    getRealExchange(): RealExchange;
    setRealExchange(value: RealExchange): Instrument;
    getPositionUid(): string;
    setPositionUid(value: string): Instrument;
    getAssetUid(): string;
    setAssetUid(value: string): Instrument;
    getForIisFlag(): boolean;
    setForIisFlag(value: boolean): Instrument;
    getForQualInvestorFlag(): boolean;
    setForQualInvestorFlag(value: boolean): Instrument;
    getWeekendFlag(): boolean;
    setWeekendFlag(value: boolean): Instrument;
    getBlockedTcaFlag(): boolean;
    setBlockedTcaFlag(value: boolean): Instrument;
    getInstrumentKind(): common_pb.InstrumentType;
    setInstrumentKind(value: common_pb.InstrumentType): Instrument;

    hasFirst1minCandleDate(): boolean;
    clearFirst1minCandleDate(): void;
    getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Instrument;

    hasFirst1dayCandleDate(): boolean;
    clearFirst1dayCandleDate(): void;
    getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): Instrument;

    hasBrand(): boolean;
    clearBrand(): void;
    getBrand(): common_pb.BrandData | undefined;
    setBrand(value?: common_pb.BrandData): Instrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Instrument.AsObject;
    static toObject(includeInstance: boolean, msg: Instrument): Instrument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Instrument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Instrument;
    static deserializeBinaryFromReader(message: Instrument, reader: jspb.BinaryReader): Instrument;
}

export namespace Instrument {
    export type AsObject = {
        figi: string,
        ticker: string,
        classCode: string,
        isin: string,
        lot: number,
        currency: string,
        klong?: common_pb.Quotation.AsObject,
        kshort?: common_pb.Quotation.AsObject,
        dlong?: common_pb.Quotation.AsObject,
        dshort?: common_pb.Quotation.AsObject,
        dlongMin?: common_pb.Quotation.AsObject,
        dshortMin?: common_pb.Quotation.AsObject,
        shortEnabledFlag: boolean,
        name: string,
        exchange: string,
        countryOfRisk: string,
        countryOfRiskName: string,
        instrumentType: string,
        tradingStatus: common_pb.SecurityTradingStatus,
        otcFlag: boolean,
        buyAvailableFlag: boolean,
        sellAvailableFlag: boolean,
        minPriceIncrement?: common_pb.Quotation.AsObject,
        apiTradeAvailableFlag: boolean,
        uid: string,
        realExchange: RealExchange,
        positionUid: string,
        assetUid: string,
        forIisFlag: boolean,
        forQualInvestorFlag: boolean,
        weekendFlag: boolean,
        blockedTcaFlag: boolean,
        instrumentKind: common_pb.InstrumentType,
        first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        brand?: common_pb.BrandData.AsObject,
    }
}

export class GetDividendsRequest extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): GetDividendsRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetDividendsRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetDividendsRequest;
    getInstrumentId(): string;
    setInstrumentId(value: string): GetDividendsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDividendsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetDividendsRequest): GetDividendsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDividendsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDividendsRequest;
    static deserializeBinaryFromReader(message: GetDividendsRequest, reader: jspb.BinaryReader): GetDividendsRequest;
}

export namespace GetDividendsRequest {
    export type AsObject = {
        figi: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        instrumentId: string,
    }
}

export class GetDividendsResponse extends jspb.Message { 
    clearDividendsList(): void;
    getDividendsList(): Array<Dividend>;
    setDividendsList(value: Array<Dividend>): GetDividendsResponse;
    addDividends(value?: Dividend, index?: number): Dividend;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetDividendsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetDividendsResponse): GetDividendsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetDividendsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetDividendsResponse;
    static deserializeBinaryFromReader(message: GetDividendsResponse, reader: jspb.BinaryReader): GetDividendsResponse;
}

export namespace GetDividendsResponse {
    export type AsObject = {
        dividendsList: Array<Dividend.AsObject>,
    }
}

export class Dividend extends jspb.Message { 

    hasDividendNet(): boolean;
    clearDividendNet(): void;
    getDividendNet(): common_pb.MoneyValue | undefined;
    setDividendNet(value?: common_pb.MoneyValue): Dividend;

    hasPaymentDate(): boolean;
    clearPaymentDate(): void;
    getPaymentDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPaymentDate(value?: google_protobuf_timestamp_pb.Timestamp): Dividend;

    hasDeclaredDate(): boolean;
    clearDeclaredDate(): void;
    getDeclaredDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeclaredDate(value?: google_protobuf_timestamp_pb.Timestamp): Dividend;

    hasLastBuyDate(): boolean;
    clearLastBuyDate(): void;
    getLastBuyDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setLastBuyDate(value?: google_protobuf_timestamp_pb.Timestamp): Dividend;
    getDividendType(): string;
    setDividendType(value: string): Dividend;

    hasRecordDate(): boolean;
    clearRecordDate(): void;
    getRecordDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRecordDate(value?: google_protobuf_timestamp_pb.Timestamp): Dividend;
    getRegularity(): string;
    setRegularity(value: string): Dividend;

    hasClosePrice(): boolean;
    clearClosePrice(): void;
    getClosePrice(): common_pb.MoneyValue | undefined;
    setClosePrice(value?: common_pb.MoneyValue): Dividend;

    hasYieldValue(): boolean;
    clearYieldValue(): void;
    getYieldValue(): common_pb.Quotation | undefined;
    setYieldValue(value?: common_pb.Quotation): Dividend;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Dividend;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dividend.AsObject;
    static toObject(includeInstance: boolean, msg: Dividend): Dividend.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dividend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dividend;
    static deserializeBinaryFromReader(message: Dividend, reader: jspb.BinaryReader): Dividend;
}

export namespace Dividend {
    export type AsObject = {
        dividendNet?: common_pb.MoneyValue.AsObject,
        paymentDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        declaredDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        lastBuyDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        dividendType: string,
        recordDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        regularity: string,
        closePrice?: common_pb.MoneyValue.AsObject,
        yieldValue?: common_pb.Quotation.AsObject,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class AssetRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): AssetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssetRequest): AssetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetRequest;
    static deserializeBinaryFromReader(message: AssetRequest, reader: jspb.BinaryReader): AssetRequest;
}

export namespace AssetRequest {
    export type AsObject = {
        id: string,
    }
}

export class AssetResponse extends jspb.Message { 

    hasAsset(): boolean;
    clearAsset(): void;
    getAsset(): AssetFull | undefined;
    setAsset(value?: AssetFull): AssetResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssetResponse): AssetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetResponse;
    static deserializeBinaryFromReader(message: AssetResponse, reader: jspb.BinaryReader): AssetResponse;
}

export namespace AssetResponse {
    export type AsObject = {
        asset?: AssetFull.AsObject,
    }
}

export class AssetsRequest extends jspb.Message { 

    hasInstrumentType(): boolean;
    clearInstrumentType(): void;
    getInstrumentType(): common_pb.InstrumentType | undefined;
    setInstrumentType(value: common_pb.InstrumentType): AssetsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AssetsRequest): AssetsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetsRequest;
    static deserializeBinaryFromReader(message: AssetsRequest, reader: jspb.BinaryReader): AssetsRequest;
}

export namespace AssetsRequest {
    export type AsObject = {
        instrumentType?: common_pb.InstrumentType,
    }
}

export class AssetsResponse extends jspb.Message { 
    clearAssetsList(): void;
    getAssetsList(): Array<Asset>;
    setAssetsList(value: Array<Asset>): AssetsResponse;
    addAssets(value?: Asset, index?: number): Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AssetsResponse): AssetsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetsResponse;
    static deserializeBinaryFromReader(message: AssetsResponse, reader: jspb.BinaryReader): AssetsResponse;
}

export namespace AssetsResponse {
    export type AsObject = {
        assetsList: Array<Asset.AsObject>,
    }
}

export class AssetFull extends jspb.Message { 
    getUid(): string;
    setUid(value: string): AssetFull;
    getType(): AssetType;
    setType(value: AssetType): AssetFull;
    getName(): string;
    setName(value: string): AssetFull;
    getNameBrief(): string;
    setNameBrief(value: string): AssetFull;
    getDescription(): string;
    setDescription(value: string): AssetFull;

    hasDeletedAt(): boolean;
    clearDeletedAt(): void;
    getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): AssetFull;
    clearRequiredTestsList(): void;
    getRequiredTestsList(): Array<string>;
    setRequiredTestsList(value: Array<string>): AssetFull;
    addRequiredTests(value: string, index?: number): string;

    hasCurrency(): boolean;
    clearCurrency(): void;
    getCurrency(): AssetCurrency | undefined;
    setCurrency(value?: AssetCurrency): AssetFull;

    hasSecurity(): boolean;
    clearSecurity(): void;
    getSecurity(): AssetSecurity | undefined;
    setSecurity(value?: AssetSecurity): AssetFull;
    getGosRegCode(): string;
    setGosRegCode(value: string): AssetFull;
    getCfi(): string;
    setCfi(value: string): AssetFull;
    getCodeNsd(): string;
    setCodeNsd(value: string): AssetFull;
    getStatus(): string;
    setStatus(value: string): AssetFull;

    hasBrand(): boolean;
    clearBrand(): void;
    getBrand(): Brand | undefined;
    setBrand(value?: Brand): AssetFull;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AssetFull;
    getBrCode(): string;
    setBrCode(value: string): AssetFull;
    getBrCodeName(): string;
    setBrCodeName(value: string): AssetFull;
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<AssetInstrument>;
    setInstrumentsList(value: Array<AssetInstrument>): AssetFull;
    addInstruments(value?: AssetInstrument, index?: number): AssetInstrument;

    getExtCase(): AssetFull.ExtCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetFull.AsObject;
    static toObject(includeInstance: boolean, msg: AssetFull): AssetFull.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetFull, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetFull;
    static deserializeBinaryFromReader(message: AssetFull, reader: jspb.BinaryReader): AssetFull;
}

export namespace AssetFull {
    export type AsObject = {
        uid: string,
        type: AssetType,
        name: string,
        nameBrief: string,
        description: string,
        deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        requiredTestsList: Array<string>,
        currency?: AssetCurrency.AsObject,
        security?: AssetSecurity.AsObject,
        gosRegCode: string,
        cfi: string,
        codeNsd: string,
        status: string,
        brand?: Brand.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        brCode: string,
        brCodeName: string,
        instrumentsList: Array<AssetInstrument.AsObject>,
    }

    export enum ExtCase {
        EXT_NOT_SET = 0,
        CURRENCY = 8,
        SECURITY = 9,
    }

}

export class Asset extends jspb.Message { 
    getUid(): string;
    setUid(value: string): Asset;
    getType(): AssetType;
    setType(value: AssetType): Asset;
    getName(): string;
    setName(value: string): Asset;
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<AssetInstrument>;
    setInstrumentsList(value: Array<AssetInstrument>): Asset;
    addInstruments(value?: AssetInstrument, index?: number): AssetInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Asset.AsObject;
    static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Asset;
    static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
    export type AsObject = {
        uid: string,
        type: AssetType,
        name: string,
        instrumentsList: Array<AssetInstrument.AsObject>,
    }
}

export class AssetCurrency extends jspb.Message { 
    getBaseCurrency(): string;
    setBaseCurrency(value: string): AssetCurrency;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetCurrency.AsObject;
    static toObject(includeInstance: boolean, msg: AssetCurrency): AssetCurrency.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetCurrency, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetCurrency;
    static deserializeBinaryFromReader(message: AssetCurrency, reader: jspb.BinaryReader): AssetCurrency;
}

export namespace AssetCurrency {
    export type AsObject = {
        baseCurrency: string,
    }
}

export class AssetSecurity extends jspb.Message { 
    getIsin(): string;
    setIsin(value: string): AssetSecurity;
    getType(): string;
    setType(value: string): AssetSecurity;
    getInstrumentKind(): common_pb.InstrumentType;
    setInstrumentKind(value: common_pb.InstrumentType): AssetSecurity;

    hasShare(): boolean;
    clearShare(): void;
    getShare(): AssetShare | undefined;
    setShare(value?: AssetShare): AssetSecurity;

    hasBond(): boolean;
    clearBond(): void;
    getBond(): AssetBond | undefined;
    setBond(value?: AssetBond): AssetSecurity;

    hasSp(): boolean;
    clearSp(): void;
    getSp(): AssetStructuredProduct | undefined;
    setSp(value?: AssetStructuredProduct): AssetSecurity;

    hasEtf(): boolean;
    clearEtf(): void;
    getEtf(): AssetEtf | undefined;
    setEtf(value?: AssetEtf): AssetSecurity;

    hasClearingCertificate(): boolean;
    clearClearingCertificate(): void;
    getClearingCertificate(): AssetClearingCertificate | undefined;
    setClearingCertificate(value?: AssetClearingCertificate): AssetSecurity;

    getExtCase(): AssetSecurity.ExtCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetSecurity.AsObject;
    static toObject(includeInstance: boolean, msg: AssetSecurity): AssetSecurity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetSecurity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetSecurity;
    static deserializeBinaryFromReader(message: AssetSecurity, reader: jspb.BinaryReader): AssetSecurity;
}

export namespace AssetSecurity {
    export type AsObject = {
        isin: string,
        type: string,
        instrumentKind: common_pb.InstrumentType,
        share?: AssetShare.AsObject,
        bond?: AssetBond.AsObject,
        sp?: AssetStructuredProduct.AsObject,
        etf?: AssetEtf.AsObject,
        clearingCertificate?: AssetClearingCertificate.AsObject,
    }

    export enum ExtCase {
        EXT_NOT_SET = 0,
        SHARE = 3,
        BOND = 4,
        SP = 5,
        ETF = 6,
        CLEARING_CERTIFICATE = 7,
    }

}

export class AssetShare extends jspb.Message { 
    getType(): ShareType;
    setType(value: ShareType): AssetShare;

    hasIssueSize(): boolean;
    clearIssueSize(): void;
    getIssueSize(): common_pb.Quotation | undefined;
    setIssueSize(value?: common_pb.Quotation): AssetShare;

    hasNominal(): boolean;
    clearNominal(): void;
    getNominal(): common_pb.Quotation | undefined;
    setNominal(value?: common_pb.Quotation): AssetShare;
    getNominalCurrency(): string;
    setNominalCurrency(value: string): AssetShare;
    getPrimaryIndex(): string;
    setPrimaryIndex(value: string): AssetShare;

    hasDividendRate(): boolean;
    clearDividendRate(): void;
    getDividendRate(): common_pb.Quotation | undefined;
    setDividendRate(value?: common_pb.Quotation): AssetShare;
    getPreferredShareType(): string;
    setPreferredShareType(value: string): AssetShare;

    hasIpoDate(): boolean;
    clearIpoDate(): void;
    getIpoDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setIpoDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetShare;

    hasRegistryDate(): boolean;
    clearRegistryDate(): void;
    getRegistryDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setRegistryDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetShare;
    getDivYieldFlag(): boolean;
    setDivYieldFlag(value: boolean): AssetShare;
    getIssueKind(): string;
    setIssueKind(value: string): AssetShare;

    hasPlacementDate(): boolean;
    clearPlacementDate(): void;
    getPlacementDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPlacementDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetShare;
    getRepresIsin(): string;
    setRepresIsin(value: string): AssetShare;

    hasIssueSizePlan(): boolean;
    clearIssueSizePlan(): void;
    getIssueSizePlan(): common_pb.Quotation | undefined;
    setIssueSizePlan(value?: common_pb.Quotation): AssetShare;

    hasTotalFloat(): boolean;
    clearTotalFloat(): void;
    getTotalFloat(): common_pb.Quotation | undefined;
    setTotalFloat(value?: common_pb.Quotation): AssetShare;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetShare.AsObject;
    static toObject(includeInstance: boolean, msg: AssetShare): AssetShare.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetShare, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetShare;
    static deserializeBinaryFromReader(message: AssetShare, reader: jspb.BinaryReader): AssetShare;
}

export namespace AssetShare {
    export type AsObject = {
        type: ShareType,
        issueSize?: common_pb.Quotation.AsObject,
        nominal?: common_pb.Quotation.AsObject,
        nominalCurrency: string,
        primaryIndex: string,
        dividendRate?: common_pb.Quotation.AsObject,
        preferredShareType: string,
        ipoDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        registryDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        divYieldFlag: boolean,
        issueKind: string,
        placementDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        represIsin: string,
        issueSizePlan?: common_pb.Quotation.AsObject,
        totalFloat?: common_pb.Quotation.AsObject,
    }
}

export class AssetBond extends jspb.Message { 

    hasCurrentNominal(): boolean;
    clearCurrentNominal(): void;
    getCurrentNominal(): common_pb.Quotation | undefined;
    setCurrentNominal(value?: common_pb.Quotation): AssetBond;
    getBorrowName(): string;
    setBorrowName(value: string): AssetBond;

    hasIssueSize(): boolean;
    clearIssueSize(): void;
    getIssueSize(): common_pb.Quotation | undefined;
    setIssueSize(value?: common_pb.Quotation): AssetBond;

    hasNominal(): boolean;
    clearNominal(): void;
    getNominal(): common_pb.Quotation | undefined;
    setNominal(value?: common_pb.Quotation): AssetBond;
    getNominalCurrency(): string;
    setNominalCurrency(value: string): AssetBond;
    getIssueKind(): string;
    setIssueKind(value: string): AssetBond;
    getInterestKind(): string;
    setInterestKind(value: string): AssetBond;
    getCouponQuantityPerYear(): number;
    setCouponQuantityPerYear(value: number): AssetBond;
    getIndexedNominalFlag(): boolean;
    setIndexedNominalFlag(value: boolean): AssetBond;
    getSubordinatedFlag(): boolean;
    setSubordinatedFlag(value: boolean): AssetBond;
    getCollateralFlag(): boolean;
    setCollateralFlag(value: boolean): AssetBond;
    getTaxFreeFlag(): boolean;
    setTaxFreeFlag(value: boolean): AssetBond;
    getAmortizationFlag(): boolean;
    setAmortizationFlag(value: boolean): AssetBond;
    getFloatingCouponFlag(): boolean;
    setFloatingCouponFlag(value: boolean): AssetBond;
    getPerpetualFlag(): boolean;
    setPerpetualFlag(value: boolean): AssetBond;

    hasMaturityDate(): boolean;
    clearMaturityDate(): void;
    getMaturityDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setMaturityDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetBond;
    getReturnCondition(): string;
    setReturnCondition(value: string): AssetBond;

    hasStateRegDate(): boolean;
    clearStateRegDate(): void;
    getStateRegDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setStateRegDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetBond;

    hasPlacementDate(): boolean;
    clearPlacementDate(): void;
    getPlacementDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPlacementDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetBond;

    hasPlacementPrice(): boolean;
    clearPlacementPrice(): void;
    getPlacementPrice(): common_pb.Quotation | undefined;
    setPlacementPrice(value?: common_pb.Quotation): AssetBond;

    hasIssueSizePlan(): boolean;
    clearIssueSizePlan(): void;
    getIssueSizePlan(): common_pb.Quotation | undefined;
    setIssueSizePlan(value?: common_pb.Quotation): AssetBond;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetBond.AsObject;
    static toObject(includeInstance: boolean, msg: AssetBond): AssetBond.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetBond, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetBond;
    static deserializeBinaryFromReader(message: AssetBond, reader: jspb.BinaryReader): AssetBond;
}

export namespace AssetBond {
    export type AsObject = {
        currentNominal?: common_pb.Quotation.AsObject,
        borrowName: string,
        issueSize?: common_pb.Quotation.AsObject,
        nominal?: common_pb.Quotation.AsObject,
        nominalCurrency: string,
        issueKind: string,
        interestKind: string,
        couponQuantityPerYear: number,
        indexedNominalFlag: boolean,
        subordinatedFlag: boolean,
        collateralFlag: boolean,
        taxFreeFlag: boolean,
        amortizationFlag: boolean,
        floatingCouponFlag: boolean,
        perpetualFlag: boolean,
        maturityDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        returnCondition: string,
        stateRegDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        placementDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        placementPrice?: common_pb.Quotation.AsObject,
        issueSizePlan?: common_pb.Quotation.AsObject,
    }
}

export class AssetStructuredProduct extends jspb.Message { 
    getBorrowName(): string;
    setBorrowName(value: string): AssetStructuredProduct;

    hasNominal(): boolean;
    clearNominal(): void;
    getNominal(): common_pb.Quotation | undefined;
    setNominal(value?: common_pb.Quotation): AssetStructuredProduct;
    getNominalCurrency(): string;
    setNominalCurrency(value: string): AssetStructuredProduct;
    getType(): StructuredProductType;
    setType(value: StructuredProductType): AssetStructuredProduct;
    getLogicPortfolio(): string;
    setLogicPortfolio(value: string): AssetStructuredProduct;
    getAssetType(): AssetType;
    setAssetType(value: AssetType): AssetStructuredProduct;
    getBasicAsset(): string;
    setBasicAsset(value: string): AssetStructuredProduct;

    hasSafetyBarrier(): boolean;
    clearSafetyBarrier(): void;
    getSafetyBarrier(): common_pb.Quotation | undefined;
    setSafetyBarrier(value?: common_pb.Quotation): AssetStructuredProduct;

    hasMaturityDate(): boolean;
    clearMaturityDate(): void;
    getMaturityDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setMaturityDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetStructuredProduct;

    hasIssueSizePlan(): boolean;
    clearIssueSizePlan(): void;
    getIssueSizePlan(): common_pb.Quotation | undefined;
    setIssueSizePlan(value?: common_pb.Quotation): AssetStructuredProduct;

    hasIssueSize(): boolean;
    clearIssueSize(): void;
    getIssueSize(): common_pb.Quotation | undefined;
    setIssueSize(value?: common_pb.Quotation): AssetStructuredProduct;

    hasPlacementDate(): boolean;
    clearPlacementDate(): void;
    getPlacementDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setPlacementDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetStructuredProduct;
    getIssueKind(): string;
    setIssueKind(value: string): AssetStructuredProduct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetStructuredProduct.AsObject;
    static toObject(includeInstance: boolean, msg: AssetStructuredProduct): AssetStructuredProduct.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetStructuredProduct, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetStructuredProduct;
    static deserializeBinaryFromReader(message: AssetStructuredProduct, reader: jspb.BinaryReader): AssetStructuredProduct;
}

export namespace AssetStructuredProduct {
    export type AsObject = {
        borrowName: string,
        nominal?: common_pb.Quotation.AsObject,
        nominalCurrency: string,
        type: StructuredProductType,
        logicPortfolio: string,
        assetType: AssetType,
        basicAsset: string,
        safetyBarrier?: common_pb.Quotation.AsObject,
        maturityDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        issueSizePlan?: common_pb.Quotation.AsObject,
        issueSize?: common_pb.Quotation.AsObject,
        placementDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        issueKind: string,
    }
}

export class AssetEtf extends jspb.Message { 

    hasTotalExpense(): boolean;
    clearTotalExpense(): void;
    getTotalExpense(): common_pb.Quotation | undefined;
    setTotalExpense(value?: common_pb.Quotation): AssetEtf;

    hasHurdleRate(): boolean;
    clearHurdleRate(): void;
    getHurdleRate(): common_pb.Quotation | undefined;
    setHurdleRate(value?: common_pb.Quotation): AssetEtf;

    hasPerformanceFee(): boolean;
    clearPerformanceFee(): void;
    getPerformanceFee(): common_pb.Quotation | undefined;
    setPerformanceFee(value?: common_pb.Quotation): AssetEtf;

    hasFixedCommission(): boolean;
    clearFixedCommission(): void;
    getFixedCommission(): common_pb.Quotation | undefined;
    setFixedCommission(value?: common_pb.Quotation): AssetEtf;
    getPaymentType(): string;
    setPaymentType(value: string): AssetEtf;
    getWatermarkFlag(): boolean;
    setWatermarkFlag(value: boolean): AssetEtf;

    hasBuyPremium(): boolean;
    clearBuyPremium(): void;
    getBuyPremium(): common_pb.Quotation | undefined;
    setBuyPremium(value?: common_pb.Quotation): AssetEtf;

    hasSellDiscount(): boolean;
    clearSellDiscount(): void;
    getSellDiscount(): common_pb.Quotation | undefined;
    setSellDiscount(value?: common_pb.Quotation): AssetEtf;
    getRebalancingFlag(): boolean;
    setRebalancingFlag(value: boolean): AssetEtf;
    getRebalancingFreq(): string;
    setRebalancingFreq(value: string): AssetEtf;
    getManagementType(): string;
    setManagementType(value: string): AssetEtf;
    getPrimaryIndex(): string;
    setPrimaryIndex(value: string): AssetEtf;
    getFocusType(): string;
    setFocusType(value: string): AssetEtf;
    getLeveragedFlag(): boolean;
    setLeveragedFlag(value: boolean): AssetEtf;

    hasNumShare(): boolean;
    clearNumShare(): void;
    getNumShare(): common_pb.Quotation | undefined;
    setNumShare(value?: common_pb.Quotation): AssetEtf;
    getUcitsFlag(): boolean;
    setUcitsFlag(value: boolean): AssetEtf;

    hasReleasedDate(): boolean;
    clearReleasedDate(): void;
    getReleasedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setReleasedDate(value?: google_protobuf_timestamp_pb.Timestamp): AssetEtf;
    getDescription(): string;
    setDescription(value: string): AssetEtf;
    getPrimaryIndexDescription(): string;
    setPrimaryIndexDescription(value: string): AssetEtf;
    getPrimaryIndexCompany(): string;
    setPrimaryIndexCompany(value: string): AssetEtf;

    hasIndexRecoveryPeriod(): boolean;
    clearIndexRecoveryPeriod(): void;
    getIndexRecoveryPeriod(): common_pb.Quotation | undefined;
    setIndexRecoveryPeriod(value?: common_pb.Quotation): AssetEtf;
    getInavCode(): string;
    setInavCode(value: string): AssetEtf;
    getDivYieldFlag(): boolean;
    setDivYieldFlag(value: boolean): AssetEtf;

    hasExpenseCommission(): boolean;
    clearExpenseCommission(): void;
    getExpenseCommission(): common_pb.Quotation | undefined;
    setExpenseCommission(value?: common_pb.Quotation): AssetEtf;

    hasPrimaryIndexTrackingError(): boolean;
    clearPrimaryIndexTrackingError(): void;
    getPrimaryIndexTrackingError(): common_pb.Quotation | undefined;
    setPrimaryIndexTrackingError(value?: common_pb.Quotation): AssetEtf;
    getRebalancingPlan(): string;
    setRebalancingPlan(value: string): AssetEtf;
    getTaxRate(): string;
    setTaxRate(value: string): AssetEtf;
    clearRebalancingDatesList(): void;
    getRebalancingDatesList(): Array<google_protobuf_timestamp_pb.Timestamp>;
    setRebalancingDatesList(value: Array<google_protobuf_timestamp_pb.Timestamp>): AssetEtf;
    addRebalancingDates(value?: google_protobuf_timestamp_pb.Timestamp, index?: number): google_protobuf_timestamp_pb.Timestamp;
    getIssueKind(): string;
    setIssueKind(value: string): AssetEtf;

    hasNominal(): boolean;
    clearNominal(): void;
    getNominal(): common_pb.Quotation | undefined;
    setNominal(value?: common_pb.Quotation): AssetEtf;
    getNominalCurrency(): string;
    setNominalCurrency(value: string): AssetEtf;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetEtf.AsObject;
    static toObject(includeInstance: boolean, msg: AssetEtf): AssetEtf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetEtf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetEtf;
    static deserializeBinaryFromReader(message: AssetEtf, reader: jspb.BinaryReader): AssetEtf;
}

export namespace AssetEtf {
    export type AsObject = {
        totalExpense?: common_pb.Quotation.AsObject,
        hurdleRate?: common_pb.Quotation.AsObject,
        performanceFee?: common_pb.Quotation.AsObject,
        fixedCommission?: common_pb.Quotation.AsObject,
        paymentType: string,
        watermarkFlag: boolean,
        buyPremium?: common_pb.Quotation.AsObject,
        sellDiscount?: common_pb.Quotation.AsObject,
        rebalancingFlag: boolean,
        rebalancingFreq: string,
        managementType: string,
        primaryIndex: string,
        focusType: string,
        leveragedFlag: boolean,
        numShare?: common_pb.Quotation.AsObject,
        ucitsFlag: boolean,
        releasedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        description: string,
        primaryIndexDescription: string,
        primaryIndexCompany: string,
        indexRecoveryPeriod?: common_pb.Quotation.AsObject,
        inavCode: string,
        divYieldFlag: boolean,
        expenseCommission?: common_pb.Quotation.AsObject,
        primaryIndexTrackingError?: common_pb.Quotation.AsObject,
        rebalancingPlan: string,
        taxRate: string,
        rebalancingDatesList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>,
        issueKind: string,
        nominal?: common_pb.Quotation.AsObject,
        nominalCurrency: string,
    }
}

export class AssetClearingCertificate extends jspb.Message { 

    hasNominal(): boolean;
    clearNominal(): void;
    getNominal(): common_pb.Quotation | undefined;
    setNominal(value?: common_pb.Quotation): AssetClearingCertificate;
    getNominalCurrency(): string;
    setNominalCurrency(value: string): AssetClearingCertificate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetClearingCertificate.AsObject;
    static toObject(includeInstance: boolean, msg: AssetClearingCertificate): AssetClearingCertificate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetClearingCertificate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetClearingCertificate;
    static deserializeBinaryFromReader(message: AssetClearingCertificate, reader: jspb.BinaryReader): AssetClearingCertificate;
}

export namespace AssetClearingCertificate {
    export type AsObject = {
        nominal?: common_pb.Quotation.AsObject,
        nominalCurrency: string,
    }
}

export class Brand extends jspb.Message { 
    getUid(): string;
    setUid(value: string): Brand;
    getName(): string;
    setName(value: string): Brand;
    getDescription(): string;
    setDescription(value: string): Brand;
    getInfo(): string;
    setInfo(value: string): Brand;
    getCompany(): string;
    setCompany(value: string): Brand;
    getSector(): string;
    setSector(value: string): Brand;
    getCountryOfRisk(): string;
    setCountryOfRisk(value: string): Brand;
    getCountryOfRiskName(): string;
    setCountryOfRiskName(value: string): Brand;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Brand.AsObject;
    static toObject(includeInstance: boolean, msg: Brand): Brand.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Brand, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Brand;
    static deserializeBinaryFromReader(message: Brand, reader: jspb.BinaryReader): Brand;
}

export namespace Brand {
    export type AsObject = {
        uid: string,
        name: string,
        description: string,
        info: string,
        company: string,
        sector: string,
        countryOfRisk: string,
        countryOfRiskName: string,
    }
}

export class AssetInstrument extends jspb.Message { 
    getUid(): string;
    setUid(value: string): AssetInstrument;
    getFigi(): string;
    setFigi(value: string): AssetInstrument;
    getInstrumentType(): string;
    setInstrumentType(value: string): AssetInstrument;
    getTicker(): string;
    setTicker(value: string): AssetInstrument;
    getClassCode(): string;
    setClassCode(value: string): AssetInstrument;
    clearLinksList(): void;
    getLinksList(): Array<InstrumentLink>;
    setLinksList(value: Array<InstrumentLink>): AssetInstrument;
    addLinks(value?: InstrumentLink, index?: number): InstrumentLink;
    getInstrumentKind(): common_pb.InstrumentType;
    setInstrumentKind(value: common_pb.InstrumentType): AssetInstrument;
    getPositionUid(): string;
    setPositionUid(value: string): AssetInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssetInstrument.AsObject;
    static toObject(includeInstance: boolean, msg: AssetInstrument): AssetInstrument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssetInstrument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssetInstrument;
    static deserializeBinaryFromReader(message: AssetInstrument, reader: jspb.BinaryReader): AssetInstrument;
}

export namespace AssetInstrument {
    export type AsObject = {
        uid: string,
        figi: string,
        instrumentType: string,
        ticker: string,
        classCode: string,
        linksList: Array<InstrumentLink.AsObject>,
        instrumentKind: common_pb.InstrumentType,
        positionUid: string,
    }
}

export class InstrumentLink extends jspb.Message { 
    getType(): string;
    setType(value: string): InstrumentLink;
    getInstrumentUid(): string;
    setInstrumentUid(value: string): InstrumentLink;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstrumentLink.AsObject;
    static toObject(includeInstance: boolean, msg: InstrumentLink): InstrumentLink.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstrumentLink, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstrumentLink;
    static deserializeBinaryFromReader(message: InstrumentLink, reader: jspb.BinaryReader): InstrumentLink;
}

export namespace InstrumentLink {
    export type AsObject = {
        type: string,
        instrumentUid: string,
    }
}

export class GetFavoritesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFavoritesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFavoritesRequest): GetFavoritesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFavoritesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFavoritesRequest;
    static deserializeBinaryFromReader(message: GetFavoritesRequest, reader: jspb.BinaryReader): GetFavoritesRequest;
}

export namespace GetFavoritesRequest {
    export type AsObject = {
    }
}

export class GetFavoritesResponse extends jspb.Message { 
    clearFavoriteInstrumentsList(): void;
    getFavoriteInstrumentsList(): Array<FavoriteInstrument>;
    setFavoriteInstrumentsList(value: Array<FavoriteInstrument>): GetFavoritesResponse;
    addFavoriteInstruments(value?: FavoriteInstrument, index?: number): FavoriteInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFavoritesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetFavoritesResponse): GetFavoritesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFavoritesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFavoritesResponse;
    static deserializeBinaryFromReader(message: GetFavoritesResponse, reader: jspb.BinaryReader): GetFavoritesResponse;
}

export namespace GetFavoritesResponse {
    export type AsObject = {
        favoriteInstrumentsList: Array<FavoriteInstrument.AsObject>,
    }
}

export class FavoriteInstrument extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): FavoriteInstrument;
    getTicker(): string;
    setTicker(value: string): FavoriteInstrument;
    getClassCode(): string;
    setClassCode(value: string): FavoriteInstrument;
    getIsin(): string;
    setIsin(value: string): FavoriteInstrument;
    getInstrumentType(): string;
    setInstrumentType(value: string): FavoriteInstrument;
    getName(): string;
    setName(value: string): FavoriteInstrument;
    getUid(): string;
    setUid(value: string): FavoriteInstrument;
    getOtcFlag(): boolean;
    setOtcFlag(value: boolean): FavoriteInstrument;
    getApiTradeAvailableFlag(): boolean;
    setApiTradeAvailableFlag(value: boolean): FavoriteInstrument;
    getInstrumentKind(): common_pb.InstrumentType;
    setInstrumentKind(value: common_pb.InstrumentType): FavoriteInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FavoriteInstrument.AsObject;
    static toObject(includeInstance: boolean, msg: FavoriteInstrument): FavoriteInstrument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FavoriteInstrument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FavoriteInstrument;
    static deserializeBinaryFromReader(message: FavoriteInstrument, reader: jspb.BinaryReader): FavoriteInstrument;
}

export namespace FavoriteInstrument {
    export type AsObject = {
        figi: string,
        ticker: string,
        classCode: string,
        isin: string,
        instrumentType: string,
        name: string,
        uid: string,
        otcFlag: boolean,
        apiTradeAvailableFlag: boolean,
        instrumentKind: common_pb.InstrumentType,
    }
}

export class EditFavoritesRequest extends jspb.Message { 
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<EditFavoritesRequestInstrument>;
    setInstrumentsList(value: Array<EditFavoritesRequestInstrument>): EditFavoritesRequest;
    addInstruments(value?: EditFavoritesRequestInstrument, index?: number): EditFavoritesRequestInstrument;
    getActionType(): EditFavoritesActionType;
    setActionType(value: EditFavoritesActionType): EditFavoritesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditFavoritesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EditFavoritesRequest): EditFavoritesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditFavoritesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditFavoritesRequest;
    static deserializeBinaryFromReader(message: EditFavoritesRequest, reader: jspb.BinaryReader): EditFavoritesRequest;
}

export namespace EditFavoritesRequest {
    export type AsObject = {
        instrumentsList: Array<EditFavoritesRequestInstrument.AsObject>,
        actionType: EditFavoritesActionType,
    }
}

export class EditFavoritesRequestInstrument extends jspb.Message { 

    hasFigi(): boolean;
    clearFigi(): void;
    getFigi(): string | undefined;
    setFigi(value: string): EditFavoritesRequestInstrument;
    getInstrumentId(): string;
    setInstrumentId(value: string): EditFavoritesRequestInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditFavoritesRequestInstrument.AsObject;
    static toObject(includeInstance: boolean, msg: EditFavoritesRequestInstrument): EditFavoritesRequestInstrument.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditFavoritesRequestInstrument, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditFavoritesRequestInstrument;
    static deserializeBinaryFromReader(message: EditFavoritesRequestInstrument, reader: jspb.BinaryReader): EditFavoritesRequestInstrument;
}

export namespace EditFavoritesRequestInstrument {
    export type AsObject = {
        figi?: string,
        instrumentId: string,
    }
}

export class EditFavoritesResponse extends jspb.Message { 
    clearFavoriteInstrumentsList(): void;
    getFavoriteInstrumentsList(): Array<FavoriteInstrument>;
    setFavoriteInstrumentsList(value: Array<FavoriteInstrument>): EditFavoritesResponse;
    addFavoriteInstruments(value?: FavoriteInstrument, index?: number): FavoriteInstrument;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditFavoritesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EditFavoritesResponse): EditFavoritesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditFavoritesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditFavoritesResponse;
    static deserializeBinaryFromReader(message: EditFavoritesResponse, reader: jspb.BinaryReader): EditFavoritesResponse;
}

export namespace EditFavoritesResponse {
    export type AsObject = {
        favoriteInstrumentsList: Array<FavoriteInstrument.AsObject>,
    }
}

export class GetCountriesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCountriesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCountriesRequest): GetCountriesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCountriesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCountriesRequest;
    static deserializeBinaryFromReader(message: GetCountriesRequest, reader: jspb.BinaryReader): GetCountriesRequest;
}

export namespace GetCountriesRequest {
    export type AsObject = {
    }
}

export class GetCountriesResponse extends jspb.Message { 
    clearCountriesList(): void;
    getCountriesList(): Array<CountryResponse>;
    setCountriesList(value: Array<CountryResponse>): GetCountriesResponse;
    addCountries(value?: CountryResponse, index?: number): CountryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCountriesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCountriesResponse): GetCountriesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCountriesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCountriesResponse;
    static deserializeBinaryFromReader(message: GetCountriesResponse, reader: jspb.BinaryReader): GetCountriesResponse;
}

export namespace GetCountriesResponse {
    export type AsObject = {
        countriesList: Array<CountryResponse.AsObject>,
    }
}

export class IndicativesRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndicativesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: IndicativesRequest): IndicativesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndicativesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndicativesRequest;
    static deserializeBinaryFromReader(message: IndicativesRequest, reader: jspb.BinaryReader): IndicativesRequest;
}

export namespace IndicativesRequest {
    export type AsObject = {
    }
}

export class IndicativesResponse extends jspb.Message { 
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<IndicativeResponse>;
    setInstrumentsList(value: Array<IndicativeResponse>): IndicativesResponse;
    addInstruments(value?: IndicativeResponse, index?: number): IndicativeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndicativesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IndicativesResponse): IndicativesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndicativesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndicativesResponse;
    static deserializeBinaryFromReader(message: IndicativesResponse, reader: jspb.BinaryReader): IndicativesResponse;
}

export namespace IndicativesResponse {
    export type AsObject = {
        instrumentsList: Array<IndicativeResponse.AsObject>,
    }
}

export class IndicativeResponse extends jspb.Message { 
    getFigi(): string;
    setFigi(value: string): IndicativeResponse;
    getTicker(): string;
    setTicker(value: string): IndicativeResponse;
    getClassCode(): string;
    setClassCode(value: string): IndicativeResponse;
    getCurrency(): string;
    setCurrency(value: string): IndicativeResponse;
    getInstrumentKind(): common_pb.InstrumentType;
    setInstrumentKind(value: common_pb.InstrumentType): IndicativeResponse;
    getName(): string;
    setName(value: string): IndicativeResponse;
    getExchange(): string;
    setExchange(value: string): IndicativeResponse;
    getUid(): string;
    setUid(value: string): IndicativeResponse;
    getBuyAvailableFlag(): boolean;
    setBuyAvailableFlag(value: boolean): IndicativeResponse;
    getSellAvailableFlag(): boolean;
    setSellAvailableFlag(value: boolean): IndicativeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IndicativeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: IndicativeResponse): IndicativeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IndicativeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IndicativeResponse;
    static deserializeBinaryFromReader(message: IndicativeResponse, reader: jspb.BinaryReader): IndicativeResponse;
}

export namespace IndicativeResponse {
    export type AsObject = {
        figi: string,
        ticker: string,
        classCode: string,
        currency: string,
        instrumentKind: common_pb.InstrumentType,
        name: string,
        exchange: string,
        uid: string,
        buyAvailableFlag: boolean,
        sellAvailableFlag: boolean,
    }
}

export class CountryResponse extends jspb.Message { 
    getAlfaTwo(): string;
    setAlfaTwo(value: string): CountryResponse;
    getAlfaThree(): string;
    setAlfaThree(value: string): CountryResponse;
    getName(): string;
    setName(value: string): CountryResponse;
    getNameBrief(): string;
    setNameBrief(value: string): CountryResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CountryResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CountryResponse): CountryResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CountryResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CountryResponse;
    static deserializeBinaryFromReader(message: CountryResponse, reader: jspb.BinaryReader): CountryResponse;
}

export namespace CountryResponse {
    export type AsObject = {
        alfaTwo: string,
        alfaThree: string,
        name: string,
        nameBrief: string,
    }
}

export class FindInstrumentRequest extends jspb.Message { 
    getQuery(): string;
    setQuery(value: string): FindInstrumentRequest;

    hasInstrumentKind(): boolean;
    clearInstrumentKind(): void;
    getInstrumentKind(): common_pb.InstrumentType | undefined;
    setInstrumentKind(value: common_pb.InstrumentType): FindInstrumentRequest;

    hasApiTradeAvailableFlag(): boolean;
    clearApiTradeAvailableFlag(): void;
    getApiTradeAvailableFlag(): boolean | undefined;
    setApiTradeAvailableFlag(value: boolean): FindInstrumentRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindInstrumentRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindInstrumentRequest): FindInstrumentRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindInstrumentRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindInstrumentRequest;
    static deserializeBinaryFromReader(message: FindInstrumentRequest, reader: jspb.BinaryReader): FindInstrumentRequest;
}

export namespace FindInstrumentRequest {
    export type AsObject = {
        query: string,
        instrumentKind?: common_pb.InstrumentType,
        apiTradeAvailableFlag?: boolean,
    }
}

export class FindInstrumentResponse extends jspb.Message { 
    clearInstrumentsList(): void;
    getInstrumentsList(): Array<InstrumentShort>;
    setInstrumentsList(value: Array<InstrumentShort>): FindInstrumentResponse;
    addInstruments(value?: InstrumentShort, index?: number): InstrumentShort;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindInstrumentResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindInstrumentResponse): FindInstrumentResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindInstrumentResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindInstrumentResponse;
    static deserializeBinaryFromReader(message: FindInstrumentResponse, reader: jspb.BinaryReader): FindInstrumentResponse;
}

export namespace FindInstrumentResponse {
    export type AsObject = {
        instrumentsList: Array<InstrumentShort.AsObject>,
    }
}

export class InstrumentShort extends jspb.Message { 
    getIsin(): string;
    setIsin(value: string): InstrumentShort;
    getFigi(): string;
    setFigi(value: string): InstrumentShort;
    getTicker(): string;
    setTicker(value: string): InstrumentShort;
    getClassCode(): string;
    setClassCode(value: string): InstrumentShort;
    getInstrumentType(): string;
    setInstrumentType(value: string): InstrumentShort;
    getName(): string;
    setName(value: string): InstrumentShort;
    getUid(): string;
    setUid(value: string): InstrumentShort;
    getPositionUid(): string;
    setPositionUid(value: string): InstrumentShort;
    getInstrumentKind(): common_pb.InstrumentType;
    setInstrumentKind(value: common_pb.InstrumentType): InstrumentShort;
    getApiTradeAvailableFlag(): boolean;
    setApiTradeAvailableFlag(value: boolean): InstrumentShort;
    getForIisFlag(): boolean;
    setForIisFlag(value: boolean): InstrumentShort;

    hasFirst1minCandleDate(): boolean;
    clearFirst1minCandleDate(): void;
    getFirst1minCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1minCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): InstrumentShort;

    hasFirst1dayCandleDate(): boolean;
    clearFirst1dayCandleDate(): void;
    getFirst1dayCandleDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFirst1dayCandleDate(value?: google_protobuf_timestamp_pb.Timestamp): InstrumentShort;
    getForQualInvestorFlag(): boolean;
    setForQualInvestorFlag(value: boolean): InstrumentShort;
    getWeekendFlag(): boolean;
    setWeekendFlag(value: boolean): InstrumentShort;
    getBlockedTcaFlag(): boolean;
    setBlockedTcaFlag(value: boolean): InstrumentShort;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InstrumentShort.AsObject;
    static toObject(includeInstance: boolean, msg: InstrumentShort): InstrumentShort.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InstrumentShort, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InstrumentShort;
    static deserializeBinaryFromReader(message: InstrumentShort, reader: jspb.BinaryReader): InstrumentShort;
}

export namespace InstrumentShort {
    export type AsObject = {
        isin: string,
        figi: string,
        ticker: string,
        classCode: string,
        instrumentType: string,
        name: string,
        uid: string,
        positionUid: string,
        instrumentKind: common_pb.InstrumentType,
        apiTradeAvailableFlag: boolean,
        forIisFlag: boolean,
        first1minCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        first1dayCandleDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        forQualInvestorFlag: boolean,
        weekendFlag: boolean,
        blockedTcaFlag: boolean,
    }
}

export class GetBrandsRequest extends jspb.Message { 

    hasPaging(): boolean;
    clearPaging(): void;
    getPaging(): common_pb.Page | undefined;
    setPaging(value?: common_pb.Page): GetBrandsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBrandsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBrandsRequest): GetBrandsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBrandsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBrandsRequest;
    static deserializeBinaryFromReader(message: GetBrandsRequest, reader: jspb.BinaryReader): GetBrandsRequest;
}

export namespace GetBrandsRequest {
    export type AsObject = {
        paging?: common_pb.Page.AsObject,
    }
}

export class GetBrandRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetBrandRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBrandRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetBrandRequest): GetBrandRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBrandRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBrandRequest;
    static deserializeBinaryFromReader(message: GetBrandRequest, reader: jspb.BinaryReader): GetBrandRequest;
}

export namespace GetBrandRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetBrandsResponse extends jspb.Message { 
    clearBrandsList(): void;
    getBrandsList(): Array<Brand>;
    setBrandsList(value: Array<Brand>): GetBrandsResponse;
    addBrands(value?: Brand, index?: number): Brand;

    hasPaging(): boolean;
    clearPaging(): void;
    getPaging(): common_pb.PageResponse | undefined;
    setPaging(value?: common_pb.PageResponse): GetBrandsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetBrandsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetBrandsResponse): GetBrandsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetBrandsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetBrandsResponse;
    static deserializeBinaryFromReader(message: GetBrandsResponse, reader: jspb.BinaryReader): GetBrandsResponse;
}

export namespace GetBrandsResponse {
    export type AsObject = {
        brandsList: Array<Brand.AsObject>,
        paging?: common_pb.PageResponse.AsObject,
    }
}

export class GetAssetFundamentalsRequest extends jspb.Message { 
    clearAssetsList(): void;
    getAssetsList(): Array<string>;
    setAssetsList(value: Array<string>): GetAssetFundamentalsRequest;
    addAssets(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAssetFundamentalsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAssetFundamentalsRequest): GetAssetFundamentalsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAssetFundamentalsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAssetFundamentalsRequest;
    static deserializeBinaryFromReader(message: GetAssetFundamentalsRequest, reader: jspb.BinaryReader): GetAssetFundamentalsRequest;
}

export namespace GetAssetFundamentalsRequest {
    export type AsObject = {
        assetsList: Array<string>,
    }
}

export class GetAssetFundamentalsResponse extends jspb.Message { 
    clearFundamentalsList(): void;
    getFundamentalsList(): Array<GetAssetFundamentalsResponse.StatisticResponse>;
    setFundamentalsList(value: Array<GetAssetFundamentalsResponse.StatisticResponse>): GetAssetFundamentalsResponse;
    addFundamentals(value?: GetAssetFundamentalsResponse.StatisticResponse, index?: number): GetAssetFundamentalsResponse.StatisticResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAssetFundamentalsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAssetFundamentalsResponse): GetAssetFundamentalsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAssetFundamentalsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAssetFundamentalsResponse;
    static deserializeBinaryFromReader(message: GetAssetFundamentalsResponse, reader: jspb.BinaryReader): GetAssetFundamentalsResponse;
}

export namespace GetAssetFundamentalsResponse {
    export type AsObject = {
        fundamentalsList: Array<GetAssetFundamentalsResponse.StatisticResponse.AsObject>,
    }


    export class StatisticResponse extends jspb.Message { 
        getAssetUid(): string;
        setAssetUid(value: string): StatisticResponse;
        getCurrency(): string;
        setCurrency(value: string): StatisticResponse;
        getMarketCapitalization(): number;
        setMarketCapitalization(value: number): StatisticResponse;
        getHighPriceLast52Weeks(): number;
        setHighPriceLast52Weeks(value: number): StatisticResponse;
        getLowPriceLast52Weeks(): number;
        setLowPriceLast52Weeks(value: number): StatisticResponse;
        getAverageDailyVolumeLast10Days(): number;
        setAverageDailyVolumeLast10Days(value: number): StatisticResponse;
        getAverageDailyVolumeLast4Weeks(): number;
        setAverageDailyVolumeLast4Weeks(value: number): StatisticResponse;
        getBeta(): number;
        setBeta(value: number): StatisticResponse;
        getFreeFloat(): number;
        setFreeFloat(value: number): StatisticResponse;
        getForwardAnnualDividendYield(): number;
        setForwardAnnualDividendYield(value: number): StatisticResponse;
        getSharesOutstanding(): number;
        setSharesOutstanding(value: number): StatisticResponse;
        getRevenueTtm(): number;
        setRevenueTtm(value: number): StatisticResponse;
        getEbitdaTtm(): number;
        setEbitdaTtm(value: number): StatisticResponse;
        getNetIncomeTtm(): number;
        setNetIncomeTtm(value: number): StatisticResponse;
        getEpsTtm(): number;
        setEpsTtm(value: number): StatisticResponse;
        getDilutedEpsTtm(): number;
        setDilutedEpsTtm(value: number): StatisticResponse;
        getFreeCashFlowTtm(): number;
        setFreeCashFlowTtm(value: number): StatisticResponse;
        getFiveYearAnnualRevenueGrowthRate(): number;
        setFiveYearAnnualRevenueGrowthRate(value: number): StatisticResponse;
        getThreeYearAnnualRevenueGrowthRate(): number;
        setThreeYearAnnualRevenueGrowthRate(value: number): StatisticResponse;
        getPeRatioTtm(): number;
        setPeRatioTtm(value: number): StatisticResponse;
        getPriceToSalesTtm(): number;
        setPriceToSalesTtm(value: number): StatisticResponse;
        getPriceToBookTtm(): number;
        setPriceToBookTtm(value: number): StatisticResponse;
        getPriceToFreeCashFlowTtm(): number;
        setPriceToFreeCashFlowTtm(value: number): StatisticResponse;
        getTotalEnterpriseValueMrq(): number;
        setTotalEnterpriseValueMrq(value: number): StatisticResponse;
        getEvToEbitdaMrq(): number;
        setEvToEbitdaMrq(value: number): StatisticResponse;
        getNetMarginMrq(): number;
        setNetMarginMrq(value: number): StatisticResponse;
        getNetInterestMarginMrq(): number;
        setNetInterestMarginMrq(value: number): StatisticResponse;
        getRoe(): number;
        setRoe(value: number): StatisticResponse;
        getRoa(): number;
        setRoa(value: number): StatisticResponse;
        getRoic(): number;
        setRoic(value: number): StatisticResponse;
        getTotalDebtMrq(): number;
        setTotalDebtMrq(value: number): StatisticResponse;
        getTotalDebtToEquityMrq(): number;
        setTotalDebtToEquityMrq(value: number): StatisticResponse;
        getTotalDebtToEbitdaMrq(): number;
        setTotalDebtToEbitdaMrq(value: number): StatisticResponse;
        getFreeCashFlowToPrice(): number;
        setFreeCashFlowToPrice(value: number): StatisticResponse;
        getNetDebtToEbitda(): number;
        setNetDebtToEbitda(value: number): StatisticResponse;
        getCurrentRatioMrq(): number;
        setCurrentRatioMrq(value: number): StatisticResponse;
        getFixedChargeCoverageRatioFy(): number;
        setFixedChargeCoverageRatioFy(value: number): StatisticResponse;
        getDividendYieldDailyTtm(): number;
        setDividendYieldDailyTtm(value: number): StatisticResponse;
        getDividendRateTtm(): number;
        setDividendRateTtm(value: number): StatisticResponse;
        getDividendsPerShare(): number;
        setDividendsPerShare(value: number): StatisticResponse;
        getFiveYearsAverageDividendYield(): number;
        setFiveYearsAverageDividendYield(value: number): StatisticResponse;
        getFiveYearAnnualDividendGrowthRate(): number;
        setFiveYearAnnualDividendGrowthRate(value: number): StatisticResponse;
        getDividendPayoutRatioFy(): number;
        setDividendPayoutRatioFy(value: number): StatisticResponse;
        getBuyBackTtm(): number;
        setBuyBackTtm(value: number): StatisticResponse;
        getOneYearAnnualRevenueGrowthRate(): number;
        setOneYearAnnualRevenueGrowthRate(value: number): StatisticResponse;
        getDomicileIndicatorCode(): string;
        setDomicileIndicatorCode(value: string): StatisticResponse;
        getAdrToCommonShareRatio(): number;
        setAdrToCommonShareRatio(value: number): StatisticResponse;
        getNumberOfEmployees(): number;
        setNumberOfEmployees(value: number): StatisticResponse;

        hasExDividendDate(): boolean;
        clearExDividendDate(): void;
        getExDividendDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setExDividendDate(value?: google_protobuf_timestamp_pb.Timestamp): StatisticResponse;

        hasFiscalPeriodStartDate(): boolean;
        clearFiscalPeriodStartDate(): void;
        getFiscalPeriodStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setFiscalPeriodStartDate(value?: google_protobuf_timestamp_pb.Timestamp): StatisticResponse;

        hasFiscalPeriodEndDate(): boolean;
        clearFiscalPeriodEndDate(): void;
        getFiscalPeriodEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setFiscalPeriodEndDate(value?: google_protobuf_timestamp_pb.Timestamp): StatisticResponse;
        getRevenueChangeFiveYears(): number;
        setRevenueChangeFiveYears(value: number): StatisticResponse;
        getEpsChangeFiveYears(): number;
        setEpsChangeFiveYears(value: number): StatisticResponse;
        getEbitdaChangeFiveYears(): number;
        setEbitdaChangeFiveYears(value: number): StatisticResponse;
        getTotalDebtChangeFiveYears(): number;
        setTotalDebtChangeFiveYears(value: number): StatisticResponse;
        getEvToSales(): number;
        setEvToSales(value: number): StatisticResponse;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StatisticResponse.AsObject;
        static toObject(includeInstance: boolean, msg: StatisticResponse): StatisticResponse.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StatisticResponse, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StatisticResponse;
        static deserializeBinaryFromReader(message: StatisticResponse, reader: jspb.BinaryReader): StatisticResponse;
    }

    export namespace StatisticResponse {
        export type AsObject = {
            assetUid: string,
            currency: string,
            marketCapitalization: number,
            highPriceLast52Weeks: number,
            lowPriceLast52Weeks: number,
            averageDailyVolumeLast10Days: number,
            averageDailyVolumeLast4Weeks: number,
            beta: number,
            freeFloat: number,
            forwardAnnualDividendYield: number,
            sharesOutstanding: number,
            revenueTtm: number,
            ebitdaTtm: number,
            netIncomeTtm: number,
            epsTtm: number,
            dilutedEpsTtm: number,
            freeCashFlowTtm: number,
            fiveYearAnnualRevenueGrowthRate: number,
            threeYearAnnualRevenueGrowthRate: number,
            peRatioTtm: number,
            priceToSalesTtm: number,
            priceToBookTtm: number,
            priceToFreeCashFlowTtm: number,
            totalEnterpriseValueMrq: number,
            evToEbitdaMrq: number,
            netMarginMrq: number,
            netInterestMarginMrq: number,
            roe: number,
            roa: number,
            roic: number,
            totalDebtMrq: number,
            totalDebtToEquityMrq: number,
            totalDebtToEbitdaMrq: number,
            freeCashFlowToPrice: number,
            netDebtToEbitda: number,
            currentRatioMrq: number,
            fixedChargeCoverageRatioFy: number,
            dividendYieldDailyTtm: number,
            dividendRateTtm: number,
            dividendsPerShare: number,
            fiveYearsAverageDividendYield: number,
            fiveYearAnnualDividendGrowthRate: number,
            dividendPayoutRatioFy: number,
            buyBackTtm: number,
            oneYearAnnualRevenueGrowthRate: number,
            domicileIndicatorCode: string,
            adrToCommonShareRatio: number,
            numberOfEmployees: number,
            exDividendDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            fiscalPeriodStartDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            fiscalPeriodEndDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            revenueChangeFiveYears: number,
            epsChangeFiveYears: number,
            ebitdaChangeFiveYears: number,
            totalDebtChangeFiveYears: number,
            evToSales: number,
        }
    }

}

export class GetAssetReportsRequest extends jspb.Message { 
    getInstrumentId(): string;
    setInstrumentId(value: string): GetAssetReportsRequest;

    hasFrom(): boolean;
    clearFrom(): void;
    getFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setFrom(value?: google_protobuf_timestamp_pb.Timestamp): GetAssetReportsRequest;

    hasTo(): boolean;
    clearTo(): void;
    getTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTo(value?: google_protobuf_timestamp_pb.Timestamp): GetAssetReportsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAssetReportsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAssetReportsRequest): GetAssetReportsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAssetReportsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAssetReportsRequest;
    static deserializeBinaryFromReader(message: GetAssetReportsRequest, reader: jspb.BinaryReader): GetAssetReportsRequest;
}

export namespace GetAssetReportsRequest {
    export type AsObject = {
        instrumentId: string,
        from?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        to?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class GetAssetReportsResponse extends jspb.Message { 
    clearEventsList(): void;
    getEventsList(): Array<GetAssetReportsResponse.GetAssetReportsEvent>;
    setEventsList(value: Array<GetAssetReportsResponse.GetAssetReportsEvent>): GetAssetReportsResponse;
    addEvents(value?: GetAssetReportsResponse.GetAssetReportsEvent, index?: number): GetAssetReportsResponse.GetAssetReportsEvent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAssetReportsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAssetReportsResponse): GetAssetReportsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAssetReportsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAssetReportsResponse;
    static deserializeBinaryFromReader(message: GetAssetReportsResponse, reader: jspb.BinaryReader): GetAssetReportsResponse;
}

export namespace GetAssetReportsResponse {
    export type AsObject = {
        eventsList: Array<GetAssetReportsResponse.GetAssetReportsEvent.AsObject>,
    }


    export class GetAssetReportsEvent extends jspb.Message { 
        getInstrumentId(): string;
        setInstrumentId(value: string): GetAssetReportsEvent;

        hasReportDate(): boolean;
        clearReportDate(): void;
        getReportDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setReportDate(value?: google_protobuf_timestamp_pb.Timestamp): GetAssetReportsEvent;
        getPeriodYear(): number;
        setPeriodYear(value: number): GetAssetReportsEvent;
        getPeriodNum(): number;
        setPeriodNum(value: number): GetAssetReportsEvent;
        getPeriodType(): GetAssetReportsResponse.AssetReportPeriodType;
        setPeriodType(value: GetAssetReportsResponse.AssetReportPeriodType): GetAssetReportsEvent;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetAssetReportsEvent;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GetAssetReportsEvent.AsObject;
        static toObject(includeInstance: boolean, msg: GetAssetReportsEvent): GetAssetReportsEvent.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GetAssetReportsEvent, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GetAssetReportsEvent;
        static deserializeBinaryFromReader(message: GetAssetReportsEvent, reader: jspb.BinaryReader): GetAssetReportsEvent;
    }

    export namespace GetAssetReportsEvent {
        export type AsObject = {
            instrumentId: string,
            reportDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            periodYear: number,
            periodNum: number,
            periodType: GetAssetReportsResponse.AssetReportPeriodType,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }


    export enum AssetReportPeriodType {
    PERIOD_TYPE_UNSPECIFIED = 0,
    PERIOD_TYPE_QUARTER = 1,
    PERIOD_TYPE_SEMIANNUAL = 2,
    PERIOD_TYPE_ANNUAL = 3,
    }

}

export class GetConsensusForecastsRequest extends jspb.Message { 

    hasPaging(): boolean;
    clearPaging(): void;
    getPaging(): common_pb.Page | undefined;
    setPaging(value?: common_pb.Page): GetConsensusForecastsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConsensusForecastsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetConsensusForecastsRequest): GetConsensusForecastsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConsensusForecastsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConsensusForecastsRequest;
    static deserializeBinaryFromReader(message: GetConsensusForecastsRequest, reader: jspb.BinaryReader): GetConsensusForecastsRequest;
}

export namespace GetConsensusForecastsRequest {
    export type AsObject = {
        paging?: common_pb.Page.AsObject,
    }
}

export class GetConsensusForecastsResponse extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<GetConsensusForecastsResponse.ConsensusForecastsItem>;
    setItemsList(value: Array<GetConsensusForecastsResponse.ConsensusForecastsItem>): GetConsensusForecastsResponse;
    addItems(value?: GetConsensusForecastsResponse.ConsensusForecastsItem, index?: number): GetConsensusForecastsResponse.ConsensusForecastsItem;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): common_pb.PageResponse | undefined;
    setPage(value?: common_pb.PageResponse): GetConsensusForecastsResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetConsensusForecastsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetConsensusForecastsResponse): GetConsensusForecastsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetConsensusForecastsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetConsensusForecastsResponse;
    static deserializeBinaryFromReader(message: GetConsensusForecastsResponse, reader: jspb.BinaryReader): GetConsensusForecastsResponse;
}

export namespace GetConsensusForecastsResponse {
    export type AsObject = {
        itemsList: Array<GetConsensusForecastsResponse.ConsensusForecastsItem.AsObject>,
        page?: common_pb.PageResponse.AsObject,
    }


    export class ConsensusForecastsItem extends jspb.Message { 
        getUid(): string;
        setUid(value: string): ConsensusForecastsItem;
        getAssetUid(): string;
        setAssetUid(value: string): ConsensusForecastsItem;

        hasCreatedAt(): boolean;
        clearCreatedAt(): void;
        getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ConsensusForecastsItem;

        hasBestTargetPrice(): boolean;
        clearBestTargetPrice(): void;
        getBestTargetPrice(): common_pb.Quotation | undefined;
        setBestTargetPrice(value?: common_pb.Quotation): ConsensusForecastsItem;

        hasBestTargetLow(): boolean;
        clearBestTargetLow(): void;
        getBestTargetLow(): common_pb.Quotation | undefined;
        setBestTargetLow(value?: common_pb.Quotation): ConsensusForecastsItem;

        hasBestTargetHigh(): boolean;
        clearBestTargetHigh(): void;
        getBestTargetHigh(): common_pb.Quotation | undefined;
        setBestTargetHigh(value?: common_pb.Quotation): ConsensusForecastsItem;
        getTotalBuyRecommend(): number;
        setTotalBuyRecommend(value: number): ConsensusForecastsItem;
        getTotalHoldRecommend(): number;
        setTotalHoldRecommend(value: number): ConsensusForecastsItem;
        getTotalSellRecommend(): number;
        setTotalSellRecommend(value: number): ConsensusForecastsItem;
        getCurrency(): string;
        setCurrency(value: string): ConsensusForecastsItem;
        getConsensus(): Recommendation;
        setConsensus(value: Recommendation): ConsensusForecastsItem;

        hasPrognosisDate(): boolean;
        clearPrognosisDate(): void;
        getPrognosisDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setPrognosisDate(value?: google_protobuf_timestamp_pb.Timestamp): ConsensusForecastsItem;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ConsensusForecastsItem.AsObject;
        static toObject(includeInstance: boolean, msg: ConsensusForecastsItem): ConsensusForecastsItem.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ConsensusForecastsItem, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ConsensusForecastsItem;
        static deserializeBinaryFromReader(message: ConsensusForecastsItem, reader: jspb.BinaryReader): ConsensusForecastsItem;
    }

    export namespace ConsensusForecastsItem {
        export type AsObject = {
            uid: string,
            assetUid: string,
            createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            bestTargetPrice?: common_pb.Quotation.AsObject,
            bestTargetLow?: common_pb.Quotation.AsObject,
            bestTargetHigh?: common_pb.Quotation.AsObject,
            totalBuyRecommend: number,
            totalHoldRecommend: number,
            totalSellRecommend: number,
            currency: string,
            consensus: Recommendation,
            prognosisDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

}

export class GetForecastRequest extends jspb.Message { 
    getInstrumentId(): string;
    setInstrumentId(value: string): GetForecastRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetForecastRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetForecastRequest): GetForecastRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetForecastRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetForecastRequest;
    static deserializeBinaryFromReader(message: GetForecastRequest, reader: jspb.BinaryReader): GetForecastRequest;
}

export namespace GetForecastRequest {
    export type AsObject = {
        instrumentId: string,
    }
}

export class GetForecastResponse extends jspb.Message { 
    clearTargetsList(): void;
    getTargetsList(): Array<GetForecastResponse.TargetItem>;
    setTargetsList(value: Array<GetForecastResponse.TargetItem>): GetForecastResponse;
    addTargets(value?: GetForecastResponse.TargetItem, index?: number): GetForecastResponse.TargetItem;

    hasConsensus(): boolean;
    clearConsensus(): void;
    getConsensus(): GetForecastResponse.ConsensusItem | undefined;
    setConsensus(value?: GetForecastResponse.ConsensusItem): GetForecastResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetForecastResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetForecastResponse): GetForecastResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetForecastResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetForecastResponse;
    static deserializeBinaryFromReader(message: GetForecastResponse, reader: jspb.BinaryReader): GetForecastResponse;
}

export namespace GetForecastResponse {
    export type AsObject = {
        targetsList: Array<GetForecastResponse.TargetItem.AsObject>,
        consensus?: GetForecastResponse.ConsensusItem.AsObject,
    }


    export class TargetItem extends jspb.Message { 
        getUid(): string;
        setUid(value: string): TargetItem;
        getTicker(): string;
        setTicker(value: string): TargetItem;
        getCompany(): string;
        setCompany(value: string): TargetItem;
        getRecommendation(): Recommendation;
        setRecommendation(value: Recommendation): TargetItem;

        hasRecommendationDate(): boolean;
        clearRecommendationDate(): void;
        getRecommendationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setRecommendationDate(value?: google_protobuf_timestamp_pb.Timestamp): TargetItem;
        getCurrency(): string;
        setCurrency(value: string): TargetItem;

        hasCurrentPrice(): boolean;
        clearCurrentPrice(): void;
        getCurrentPrice(): common_pb.Quotation | undefined;
        setCurrentPrice(value?: common_pb.Quotation): TargetItem;

        hasTargetPrice(): boolean;
        clearTargetPrice(): void;
        getTargetPrice(): common_pb.Quotation | undefined;
        setTargetPrice(value?: common_pb.Quotation): TargetItem;

        hasPriceChange(): boolean;
        clearPriceChange(): void;
        getPriceChange(): common_pb.Quotation | undefined;
        setPriceChange(value?: common_pb.Quotation): TargetItem;

        hasPriceChangeRel(): boolean;
        clearPriceChangeRel(): void;
        getPriceChangeRel(): common_pb.Quotation | undefined;
        setPriceChangeRel(value?: common_pb.Quotation): TargetItem;
        getShowName(): string;
        setShowName(value: string): TargetItem;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TargetItem.AsObject;
        static toObject(includeInstance: boolean, msg: TargetItem): TargetItem.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TargetItem, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TargetItem;
        static deserializeBinaryFromReader(message: TargetItem, reader: jspb.BinaryReader): TargetItem;
    }

    export namespace TargetItem {
        export type AsObject = {
            uid: string,
            ticker: string,
            company: string,
            recommendation: Recommendation,
            recommendationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            currency: string,
            currentPrice?: common_pb.Quotation.AsObject,
            targetPrice?: common_pb.Quotation.AsObject,
            priceChange?: common_pb.Quotation.AsObject,
            priceChangeRel?: common_pb.Quotation.AsObject,
            showName: string,
        }
    }

    export class ConsensusItem extends jspb.Message { 
        getUid(): string;
        setUid(value: string): ConsensusItem;
        getTicker(): string;
        setTicker(value: string): ConsensusItem;
        getRecommendation(): Recommendation;
        setRecommendation(value: Recommendation): ConsensusItem;
        getCurrency(): string;
        setCurrency(value: string): ConsensusItem;

        hasCurrentPrice(): boolean;
        clearCurrentPrice(): void;
        getCurrentPrice(): common_pb.Quotation | undefined;
        setCurrentPrice(value?: common_pb.Quotation): ConsensusItem;

        hasConsensus(): boolean;
        clearConsensus(): void;
        getConsensus(): common_pb.Quotation | undefined;
        setConsensus(value?: common_pb.Quotation): ConsensusItem;

        hasMinTarget(): boolean;
        clearMinTarget(): void;
        getMinTarget(): common_pb.Quotation | undefined;
        setMinTarget(value?: common_pb.Quotation): ConsensusItem;

        hasMaxTarget(): boolean;
        clearMaxTarget(): void;
        getMaxTarget(): common_pb.Quotation | undefined;
        setMaxTarget(value?: common_pb.Quotation): ConsensusItem;

        hasPriceChange(): boolean;
        clearPriceChange(): void;
        getPriceChange(): common_pb.Quotation | undefined;
        setPriceChange(value?: common_pb.Quotation): ConsensusItem;

        hasPriceChangeRel(): boolean;
        clearPriceChangeRel(): void;
        getPriceChangeRel(): common_pb.Quotation | undefined;
        setPriceChangeRel(value?: common_pb.Quotation): ConsensusItem;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ConsensusItem.AsObject;
        static toObject(includeInstance: boolean, msg: ConsensusItem): ConsensusItem.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ConsensusItem, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ConsensusItem;
        static deserializeBinaryFromReader(message: ConsensusItem, reader: jspb.BinaryReader): ConsensusItem;
    }

    export namespace ConsensusItem {
        export type AsObject = {
            uid: string,
            ticker: string,
            recommendation: Recommendation,
            currency: string,
            currentPrice?: common_pb.Quotation.AsObject,
            consensus?: common_pb.Quotation.AsObject,
            minTarget?: common_pb.Quotation.AsObject,
            maxTarget?: common_pb.Quotation.AsObject,
            priceChange?: common_pb.Quotation.AsObject,
            priceChangeRel?: common_pb.Quotation.AsObject,
        }
    }

}

export class TradingInterval extends jspb.Message { 
    getType(): string;
    setType(value: string): TradingInterval;

    hasInterval(): boolean;
    clearInterval(): void;
    getInterval(): TradingInterval.TimeInterval | undefined;
    setInterval(value?: TradingInterval.TimeInterval): TradingInterval;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TradingInterval.AsObject;
    static toObject(includeInstance: boolean, msg: TradingInterval): TradingInterval.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TradingInterval, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TradingInterval;
    static deserializeBinaryFromReader(message: TradingInterval, reader: jspb.BinaryReader): TradingInterval;
}

export namespace TradingInterval {
    export type AsObject = {
        type: string,
        interval?: TradingInterval.TimeInterval.AsObject,
    }


    export class TimeInterval extends jspb.Message { 

        hasStartTs(): boolean;
        clearStartTs(): void;
        getStartTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setStartTs(value?: google_protobuf_timestamp_pb.Timestamp): TimeInterval;

        hasEndTs(): boolean;
        clearEndTs(): void;
        getEndTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
        setEndTs(value?: google_protobuf_timestamp_pb.Timestamp): TimeInterval;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TimeInterval.AsObject;
        static toObject(includeInstance: boolean, msg: TimeInterval): TimeInterval.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TimeInterval, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TimeInterval;
        static deserializeBinaryFromReader(message: TimeInterval, reader: jspb.BinaryReader): TimeInterval;
    }

    export namespace TimeInterval {
        export type AsObject = {
            startTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
            endTs?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        }
    }

}

export enum CouponType {
    COUPON_TYPE_UNSPECIFIED = 0,
    COUPON_TYPE_CONSTANT = 1,
    COUPON_TYPE_FLOATING = 2,
    COUPON_TYPE_DISCOUNT = 3,
    COUPON_TYPE_MORTGAGE = 4,
    COUPON_TYPE_FIX = 5,
    COUPON_TYPE_VARIABLE = 6,
    COUPON_TYPE_OTHER = 7,
}

export enum OptionDirection {
    OPTION_DIRECTION_UNSPECIFIED = 0,
    OPTION_DIRECTION_PUT = 1,
    OPTION_DIRECTION_CALL = 2,
}

export enum OptionPaymentType {
    OPTION_PAYMENT_TYPE_UNSPECIFIED = 0,
    OPTION_PAYMENT_TYPE_PREMIUM = 1,
    OPTION_PAYMENT_TYPE_MARGINAL = 2,
}

export enum OptionStyle {
    OPTION_STYLE_UNSPECIFIED = 0,
    OPTION_STYLE_AMERICAN = 1,
    OPTION_STYLE_EUROPEAN = 2,
}

export enum OptionSettlementType {
    OPTION_EXECUTION_TYPE_UNSPECIFIED = 0,
    OPTION_EXECUTION_TYPE_PHYSICAL_DELIVERY = 1,
    OPTION_EXECUTION_TYPE_CASH_SETTLEMENT = 2,
}

export enum InstrumentIdType {
    INSTRUMENT_ID_UNSPECIFIED = 0,
    INSTRUMENT_ID_TYPE_FIGI = 1,
    INSTRUMENT_ID_TYPE_TICKER = 2,
    INSTRUMENT_ID_TYPE_UID = 3,
    INSTRUMENT_ID_TYPE_POSITION_UID = 4,
}

export enum InstrumentStatus {
    INSTRUMENT_STATUS_UNSPECIFIED = 0,
    INSTRUMENT_STATUS_BASE = 1,
    INSTRUMENT_STATUS_ALL = 2,
}

export enum ShareType {
    SHARE_TYPE_UNSPECIFIED = 0,
    SHARE_TYPE_COMMON = 1,
    SHARE_TYPE_PREFERRED = 2,
    SHARE_TYPE_ADR = 3,
    SHARE_TYPE_GDR = 4,
    SHARE_TYPE_MLP = 5,
    SHARE_TYPE_NY_REG_SHRS = 6,
    SHARE_TYPE_CLOSED_END_FUND = 7,
    SHARE_TYPE_REIT = 8,
}

export enum AssetType {
    ASSET_TYPE_UNSPECIFIED = 0,
    ASSET_TYPE_CURRENCY = 1,
    ASSET_TYPE_COMMODITY = 2,
    ASSET_TYPE_INDEX = 3,
    ASSET_TYPE_SECURITY = 4,
}

export enum StructuredProductType {
    SP_TYPE_UNSPECIFIED = 0,
    SP_TYPE_DELIVERABLE = 1,
    SP_TYPE_NON_DELIVERABLE = 2,
}

export enum EditFavoritesActionType {
    EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED = 0,
    EDIT_FAVORITES_ACTION_TYPE_ADD = 1,
    EDIT_FAVORITES_ACTION_TYPE_DEL = 2,
}

export enum RealExchange {
    REAL_EXCHANGE_UNSPECIFIED = 0,
    REAL_EXCHANGE_MOEX = 1,
    REAL_EXCHANGE_RTS = 2,
    REAL_EXCHANGE_OTC = 3,
}

export enum Recommendation {
    RECOMMENDATION_UNSPECIFIED = 0,
    RECOMMENDATION_BUY = 1,
    RECOMMENDATION_HOLD = 2,
    RECOMMENDATION_SELL = 3,
}

export enum RiskLevel {
    RISK_LEVEL_UNSPECIFIED = 0,
    RISK_LEVEL_LOW = 1,
    RISK_LEVEL_MODERATE = 2,
    RISK_LEVEL_HIGH = 3,
}

export enum BondType {
    BOND_TYPE_UNSPECIFIED = 0,
    BOND_TYPE_REPLACED = 1,
}

export enum InstrumentExchangeType {
    INSTRUMENT_EXCHANGE_UNSPECIFIED = 0,
    INSTRUMENT_EXCHANGE_DEALER = 1,
}
