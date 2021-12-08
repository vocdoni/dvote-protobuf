/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "dvote.types.v2";

export interface Results {
  electionId: Uint8Array;
  /** One result object for each Proposal within the Election */
  proposalResults: Result[];
}

/** The outcome of a proposal */
export interface Result {
  body?:
    | { $case: "pendingResult"; pendingResult: PendingResults }
    | { $case: "approvalResult"; approvalResult: ApprovalResult }
    | { $case: "singleChoiceResult"; singleChoiceResult: SingleChoiceResult }
    | { $case: "quadraticResult"; quadraticResult: QuadraticResult }
    | { $case: "rankedResult"; rankedResult: RankedResult }
    | { $case: "spreadResult"; spreadResult: SpreadResult };
}

export interface PendingResults {}

export interface ApprovalResult {
  /** How many (weighted) rejections */
  rejected: string;
  /** How many (weighted) approvals */
  approved: string;
}

export interface SingleChoiceResult {
  /** How many (weighted) votes each index got */
  votes: string[];
}

export interface QuadraticResult {
  /** How many (weighted) points each index got */
  points: string[];
}

export interface RankedResult {
  /** The results of each choice */
  choices: RankedResult_RankedChoiceResult[];
}

export interface RankedResult_RankedChoiceResult {
  /** The results of the choice at every valid rank position */
  entries: RankedResult_RankedChoiceResult_RankedChoicePositionResult[];
}

export interface RankedResult_RankedChoiceResult_RankedChoicePositionResult {
  /** The rank position of the choice, for which the points below have been achieved */
  position: number;
  /** How many (weighted) points the choice got at the current rank position */
  points: string;
}

export interface SpreadResult {
  /** How many (weighted) points each index got */
  points: string[];
}

const baseResults: object = {};

export const Results = {
  encode(message: Results, writer: Writer = Writer.create()): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    for (const v of message.proposalResults) {
      Result.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Results {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResults } as Results;
    message.proposalResults = [];
    message.electionId = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        case 2:
          message.proposalResults.push(Result.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Results {
    const message = { ...baseResults } as Results;
    message.electionId =
      object.electionId !== undefined && object.electionId !== null
        ? bytesFromBase64(object.electionId)
        : new Uint8Array();
    message.proposalResults = (object.proposalResults ?? []).map((e: any) =>
      Result.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Results): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    if (message.proposalResults) {
      obj.proposalResults = message.proposalResults.map((e) =>
        e ? Result.toJSON(e) : undefined
      );
    } else {
      obj.proposalResults = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Results>, I>>(object: I): Results {
    const message = { ...baseResults } as Results;
    message.electionId = object.electionId ?? new Uint8Array();
    message.proposalResults =
      object.proposalResults?.map((e) => Result.fromPartial(e)) || [];
    return message;
  },
};

const baseResult: object = {};

export const Result = {
  encode(message: Result, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "pendingResult") {
      PendingResults.encode(
        message.body.pendingResult,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "approvalResult") {
      ApprovalResult.encode(
        message.body.approvalResult,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.body?.$case === "singleChoiceResult") {
      SingleChoiceResult.encode(
        message.body.singleChoiceResult,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.body?.$case === "quadraticResult") {
      QuadraticResult.encode(
        message.body.quadraticResult,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.body?.$case === "rankedResult") {
      RankedResult.encode(
        message.body.rankedResult,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.body?.$case === "spreadResult") {
      SpreadResult.encode(
        message.body.spreadResult,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Result {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResult } as Result;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "pendingResult",
            pendingResult: PendingResults.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "approvalResult",
            approvalResult: ApprovalResult.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.body = {
            $case: "singleChoiceResult",
            singleChoiceResult: SingleChoiceResult.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.body = {
            $case: "quadraticResult",
            quadraticResult: QuadraticResult.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.body = {
            $case: "rankedResult",
            rankedResult: RankedResult.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.body = {
            $case: "spreadResult",
            spreadResult: SpreadResult.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Result {
    const message = { ...baseResult } as Result;
    if (object.pendingResult !== undefined && object.pendingResult !== null) {
      message.body = {
        $case: "pendingResult",
        pendingResult: PendingResults.fromJSON(object.pendingResult),
      };
    }
    if (object.approvalResult !== undefined && object.approvalResult !== null) {
      message.body = {
        $case: "approvalResult",
        approvalResult: ApprovalResult.fromJSON(object.approvalResult),
      };
    }
    if (
      object.singleChoiceResult !== undefined &&
      object.singleChoiceResult !== null
    ) {
      message.body = {
        $case: "singleChoiceResult",
        singleChoiceResult: SingleChoiceResult.fromJSON(
          object.singleChoiceResult
        ),
      };
    }
    if (
      object.quadraticResult !== undefined &&
      object.quadraticResult !== null
    ) {
      message.body = {
        $case: "quadraticResult",
        quadraticResult: QuadraticResult.fromJSON(object.quadraticResult),
      };
    }
    if (object.rankedResult !== undefined && object.rankedResult !== null) {
      message.body = {
        $case: "rankedResult",
        rankedResult: RankedResult.fromJSON(object.rankedResult),
      };
    }
    if (object.spreadResult !== undefined && object.spreadResult !== null) {
      message.body = {
        $case: "spreadResult",
        spreadResult: SpreadResult.fromJSON(object.spreadResult),
      };
    }
    return message;
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.body?.$case === "pendingResult" &&
      (obj.pendingResult = message.body?.pendingResult
        ? PendingResults.toJSON(message.body?.pendingResult)
        : undefined);
    message.body?.$case === "approvalResult" &&
      (obj.approvalResult = message.body?.approvalResult
        ? ApprovalResult.toJSON(message.body?.approvalResult)
        : undefined);
    message.body?.$case === "singleChoiceResult" &&
      (obj.singleChoiceResult = message.body?.singleChoiceResult
        ? SingleChoiceResult.toJSON(message.body?.singleChoiceResult)
        : undefined);
    message.body?.$case === "quadraticResult" &&
      (obj.quadraticResult = message.body?.quadraticResult
        ? QuadraticResult.toJSON(message.body?.quadraticResult)
        : undefined);
    message.body?.$case === "rankedResult" &&
      (obj.rankedResult = message.body?.rankedResult
        ? RankedResult.toJSON(message.body?.rankedResult)
        : undefined);
    message.body?.$case === "spreadResult" &&
      (obj.spreadResult = message.body?.spreadResult
        ? SpreadResult.toJSON(message.body?.spreadResult)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result {
    const message = { ...baseResult } as Result;
    if (
      object.body?.$case === "pendingResult" &&
      object.body?.pendingResult !== undefined &&
      object.body?.pendingResult !== null
    ) {
      message.body = {
        $case: "pendingResult",
        pendingResult: PendingResults.fromPartial(object.body.pendingResult),
      };
    }
    if (
      object.body?.$case === "approvalResult" &&
      object.body?.approvalResult !== undefined &&
      object.body?.approvalResult !== null
    ) {
      message.body = {
        $case: "approvalResult",
        approvalResult: ApprovalResult.fromPartial(object.body.approvalResult),
      };
    }
    if (
      object.body?.$case === "singleChoiceResult" &&
      object.body?.singleChoiceResult !== undefined &&
      object.body?.singleChoiceResult !== null
    ) {
      message.body = {
        $case: "singleChoiceResult",
        singleChoiceResult: SingleChoiceResult.fromPartial(
          object.body.singleChoiceResult
        ),
      };
    }
    if (
      object.body?.$case === "quadraticResult" &&
      object.body?.quadraticResult !== undefined &&
      object.body?.quadraticResult !== null
    ) {
      message.body = {
        $case: "quadraticResult",
        quadraticResult: QuadraticResult.fromPartial(
          object.body.quadraticResult
        ),
      };
    }
    if (
      object.body?.$case === "rankedResult" &&
      object.body?.rankedResult !== undefined &&
      object.body?.rankedResult !== null
    ) {
      message.body = {
        $case: "rankedResult",
        rankedResult: RankedResult.fromPartial(object.body.rankedResult),
      };
    }
    if (
      object.body?.$case === "spreadResult" &&
      object.body?.spreadResult !== undefined &&
      object.body?.spreadResult !== null
    ) {
      message.body = {
        $case: "spreadResult",
        spreadResult: SpreadResult.fromPartial(object.body.spreadResult),
      };
    }
    return message;
  },
};

const basePendingResults: object = {};

export const PendingResults = {
  encode(_: PendingResults, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PendingResults {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePendingResults } as PendingResults;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): PendingResults {
    const message = { ...basePendingResults } as PendingResults;
    return message;
  },

  toJSON(_: PendingResults): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PendingResults>, I>>(
    _: I
  ): PendingResults {
    const message = { ...basePendingResults } as PendingResults;
    return message;
  },
};

const baseApprovalResult: object = { rejected: "", approved: "" };

export const ApprovalResult = {
  encode(message: ApprovalResult, writer: Writer = Writer.create()): Writer {
    if (message.rejected !== "") {
      writer.uint32(10).string(message.rejected);
    }
    if (message.approved !== "") {
      writer.uint32(18).string(message.approved);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApprovalResult {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApprovalResult } as ApprovalResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rejected = reader.string();
          break;
        case 2:
          message.approved = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApprovalResult {
    const message = { ...baseApprovalResult } as ApprovalResult;
    message.rejected =
      object.rejected !== undefined && object.rejected !== null
        ? String(object.rejected)
        : "";
    message.approved =
      object.approved !== undefined && object.approved !== null
        ? String(object.approved)
        : "";
    return message;
  },

  toJSON(message: ApprovalResult): unknown {
    const obj: any = {};
    message.rejected !== undefined && (obj.rejected = message.rejected);
    message.approved !== undefined && (obj.approved = message.approved);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApprovalResult>, I>>(
    object: I
  ): ApprovalResult {
    const message = { ...baseApprovalResult } as ApprovalResult;
    message.rejected = object.rejected ?? "";
    message.approved = object.approved ?? "";
    return message;
  },
};

const baseSingleChoiceResult: object = { votes: "" };

export const SingleChoiceResult = {
  encode(
    message: SingleChoiceResult,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.votes) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SingleChoiceResult {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSingleChoiceResult } as SingleChoiceResult;
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SingleChoiceResult {
    const message = { ...baseSingleChoiceResult } as SingleChoiceResult;
    message.votes = (object.votes ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: SingleChoiceResult): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => e);
    } else {
      obj.votes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SingleChoiceResult>, I>>(
    object: I
  ): SingleChoiceResult {
    const message = { ...baseSingleChoiceResult } as SingleChoiceResult;
    message.votes = object.votes?.map((e) => e) || [];
    return message;
  },
};

const baseQuadraticResult: object = { points: "" };

export const QuadraticResult = {
  encode(message: QuadraticResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.points) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuadraticResult {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuadraticResult } as QuadraticResult;
    message.points = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.points.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuadraticResult {
    const message = { ...baseQuadraticResult } as QuadraticResult;
    message.points = (object.points ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: QuadraticResult): unknown {
    const obj: any = {};
    if (message.points) {
      obj.points = message.points.map((e) => e);
    } else {
      obj.points = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuadraticResult>, I>>(
    object: I
  ): QuadraticResult {
    const message = { ...baseQuadraticResult } as QuadraticResult;
    message.points = object.points?.map((e) => e) || [];
    return message;
  },
};

const baseRankedResult: object = {};

export const RankedResult = {
  encode(message: RankedResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.choices) {
      RankedResult_RankedChoiceResult.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RankedResult {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRankedResult } as RankedResult;
    message.choices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.choices.push(
            RankedResult_RankedChoiceResult.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RankedResult {
    const message = { ...baseRankedResult } as RankedResult;
    message.choices = (object.choices ?? []).map((e: any) =>
      RankedResult_RankedChoiceResult.fromJSON(e)
    );
    return message;
  },

  toJSON(message: RankedResult): unknown {
    const obj: any = {};
    if (message.choices) {
      obj.choices = message.choices.map((e) =>
        e ? RankedResult_RankedChoiceResult.toJSON(e) : undefined
      );
    } else {
      obj.choices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RankedResult>, I>>(
    object: I
  ): RankedResult {
    const message = { ...baseRankedResult } as RankedResult;
    message.choices =
      object.choices?.map((e) =>
        RankedResult_RankedChoiceResult.fromPartial(e)
      ) || [];
    return message;
  },
};

const baseRankedResult_RankedChoiceResult: object = {};

export const RankedResult_RankedChoiceResult = {
  encode(
    message: RankedResult_RankedChoiceResult,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.entries) {
      RankedResult_RankedChoiceResult_RankedChoicePositionResult.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RankedResult_RankedChoiceResult {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRankedResult_RankedChoiceResult,
    } as RankedResult_RankedChoiceResult;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(
            RankedResult_RankedChoiceResult_RankedChoicePositionResult.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RankedResult_RankedChoiceResult {
    const message = {
      ...baseRankedResult_RankedChoiceResult,
    } as RankedResult_RankedChoiceResult;
    message.entries = (object.entries ?? []).map((e: any) =>
      RankedResult_RankedChoiceResult_RankedChoicePositionResult.fromJSON(e)
    );
    return message;
  },

  toJSON(message: RankedResult_RankedChoiceResult): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e
          ? RankedResult_RankedChoiceResult_RankedChoicePositionResult.toJSON(e)
          : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RankedResult_RankedChoiceResult>, I>>(
    object: I
  ): RankedResult_RankedChoiceResult {
    const message = {
      ...baseRankedResult_RankedChoiceResult,
    } as RankedResult_RankedChoiceResult;
    message.entries =
      object.entries?.map((e) =>
        RankedResult_RankedChoiceResult_RankedChoicePositionResult.fromPartial(
          e
        )
      ) || [];
    return message;
  },
};

const baseRankedResult_RankedChoiceResult_RankedChoicePositionResult: object = {
  position: 0,
  points: "",
};

export const RankedResult_RankedChoiceResult_RankedChoicePositionResult = {
  encode(
    message: RankedResult_RankedChoiceResult_RankedChoicePositionResult,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.position !== 0) {
      writer.uint32(8).int32(message.position);
    }
    if (message.points !== "") {
      writer.uint32(18).string(message.points);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RankedResult_RankedChoiceResult_RankedChoicePositionResult {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRankedResult_RankedChoiceResult_RankedChoicePositionResult,
    } as RankedResult_RankedChoiceResult_RankedChoicePositionResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = reader.int32();
          break;
        case 2:
          message.points = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): RankedResult_RankedChoiceResult_RankedChoicePositionResult {
    const message = {
      ...baseRankedResult_RankedChoiceResult_RankedChoicePositionResult,
    } as RankedResult_RankedChoiceResult_RankedChoicePositionResult;
    message.position =
      object.position !== undefined && object.position !== null
        ? Number(object.position)
        : 0;
    message.points =
      object.points !== undefined && object.points !== null
        ? String(object.points)
        : "";
    return message;
  },

  toJSON(
    message: RankedResult_RankedChoiceResult_RankedChoicePositionResult
  ): unknown {
    const obj: any = {};
    message.position !== undefined && (obj.position = message.position);
    message.points !== undefined && (obj.points = message.points);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<RankedResult_RankedChoiceResult_RankedChoicePositionResult>,
      I
    >
  >(object: I): RankedResult_RankedChoiceResult_RankedChoicePositionResult {
    const message = {
      ...baseRankedResult_RankedChoiceResult_RankedChoicePositionResult,
    } as RankedResult_RankedChoiceResult_RankedChoicePositionResult;
    message.position = object.position ?? 0;
    message.points = object.points ?? "";
    return message;
  },
};

const baseSpreadResult: object = { points: "" };

export const SpreadResult = {
  encode(message: SpreadResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.points) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SpreadResult {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpreadResult } as SpreadResult;
    message.points = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.points.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpreadResult {
    const message = { ...baseSpreadResult } as SpreadResult;
    message.points = (object.points ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: SpreadResult): unknown {
    const obj: any = {};
    if (message.points) {
      obj.points = message.points.map((e) => e);
    } else {
      obj.points = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpreadResult>, I>>(
    object: I
  ): SpreadResult {
    const message = { ...baseSpreadResult } as SpreadResult;
    message.points = object.points?.map((e) => e) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & {
      $case: T["$case"];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
