/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Census } from "../protocol/census";

export const protobufPackage = "dvote.types.v2";

/** The following model defines the declaration of an election. These are just the settings, not the human readable information. */
export interface Election {
  /** See census.proto */
  mainCensus: Census | undefined;
  secondaryCensus: Census | undefined;
  tertiaryCensus: Census | undefined;
  /** Used to select the zk circuit, determine the cost, etc */
  censusSize: number;
  /** Settings of the questions that people can vote */
  proposals: Proposal[];
  /** How data and voters should be protected */
  privacy: Privacy | undefined;
  /** When to start and end */
  lifecycle: Lifecycle | undefined;
  metadataUri: string;
}

/** The models below affect the whole election definition. */
export interface Privacy {
  realTimeResults: boolean;
  censusProof: Privacy_CensusProofs;
}

export enum Privacy_CensusProofs {
  /** PLAIN - Signed vote. Standard proof(s) are expected. */
  PLAIN = 0,
  /**
   * ZK_SNARKS - Anonymous votes, submitted right away.
   * The standard proof is part of the ZK circuit inputs. The ZK proof is expected.
   */
  ZK_SNARKS = 1,
  /**
   * ZK_SNARKS_PREREGISTER - Anonymous votes, with voter registration prior to the election.
   * The standard proof is part of the ZK circuit inputs. The ZK proof is expected.
   */
  ZK_SNARKS_PREREGISTER = 2,
  UNRECOGNIZED = -1,
}

export function privacy_CensusProofsFromJSON(
  object: any
): Privacy_CensusProofs {
  switch (object) {
    case 0:
    case "PLAIN":
      return Privacy_CensusProofs.PLAIN;
    case 1:
    case "ZK_SNARKS":
      return Privacy_CensusProofs.ZK_SNARKS;
    case 2:
    case "ZK_SNARKS_PREREGISTER":
      return Privacy_CensusProofs.ZK_SNARKS_PREREGISTER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Privacy_CensusProofs.UNRECOGNIZED;
  }
}

export function privacy_CensusProofsToJSON(
  object: Privacy_CensusProofs
): string {
  switch (object) {
    case Privacy_CensusProofs.PLAIN:
      return "PLAIN";
    case Privacy_CensusProofs.ZK_SNARKS:
      return "ZK_SNARKS";
    case Privacy_CensusProofs.ZK_SNARKS_PREREGISTER:
      return "ZK_SNARKS_PREREGISTER";
    default:
      return "UNKNOWN";
  }
}

export interface Lifecycle {
  type: Lifecycle_Types;
  startBlock?: number | undefined;
  endBlock: number;
}

export enum Lifecycle_Types {
  PAUSED_MUTABLE = 0,
  PAUSED_MUTABLE_ONCE = 1,
  STARTED_IMMUTABLE = 2,
  STARTED_MUTABLE = 3,
  AUTOSTART_IMMUTABLE = 4,
  AUTOSTART_MUTABLE = 5,
  UNRECOGNIZED = -1,
}

export function lifecycle_TypesFromJSON(object: any): Lifecycle_Types {
  switch (object) {
    case 0:
    case "PAUSED_MUTABLE":
      return Lifecycle_Types.PAUSED_MUTABLE;
    case 1:
    case "PAUSED_MUTABLE_ONCE":
      return Lifecycle_Types.PAUSED_MUTABLE_ONCE;
    case 2:
    case "STARTED_IMMUTABLE":
      return Lifecycle_Types.STARTED_IMMUTABLE;
    case 3:
    case "STARTED_MUTABLE":
      return Lifecycle_Types.STARTED_MUTABLE;
    case 4:
    case "AUTOSTART_IMMUTABLE":
      return Lifecycle_Types.AUTOSTART_IMMUTABLE;
    case 5:
    case "AUTOSTART_MUTABLE":
      return Lifecycle_Types.AUTOSTART_MUTABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Lifecycle_Types.UNRECOGNIZED;
  }
}

export function lifecycle_TypesToJSON(object: Lifecycle_Types): string {
  switch (object) {
    case Lifecycle_Types.PAUSED_MUTABLE:
      return "PAUSED_MUTABLE";
    case Lifecycle_Types.PAUSED_MUTABLE_ONCE:
      return "PAUSED_MUTABLE_ONCE";
    case Lifecycle_Types.STARTED_IMMUTABLE:
      return "STARTED_IMMUTABLE";
    case Lifecycle_Types.STARTED_MUTABLE:
      return "STARTED_MUTABLE";
    case Lifecycle_Types.AUTOSTART_IMMUTABLE:
      return "AUTOSTART_IMMUTABLE";
    case Lifecycle_Types.AUTOSTART_MUTABLE:
      return "AUTOSTART_MUTABLE";
    default:
      return "UNKNOWN";
  }
}

export interface Proposal {
  proposal?:
    | { $case: "approval"; approval: ApprovalProposal }
    | { $case: "singleChoice"; singleChoice: SingleChoiceProposal }
    | { $case: "quadratic"; quadratic: QuadraticProposal }
    | { $case: "ranked"; ranked: RankedProposal }
    | { $case: "spread"; spread: SpreadProposal };
}

/** Submodels */
export interface ApprovalProposal {}

export interface SingleChoiceProposal {
  optionCount: number;
}

export interface QuadraticProposal {
  optionCount: number;
  costExponent: number;
  /** Assigning points from 0 to maxValue */
  maxValue: number;
  /** The exponentiated sum of values must not exceed maxSum */
  maxSum: number;
}

export interface RankedProposal {
  optionCount: number;
  /** Up to how many indexes can be ranked */
  maxItems: number;
}

export interface SpreadProposal {
  optionCount: number;
}

const baseElection: object = { censusSize: 0, metadataUri: "" };

export const Election = {
  encode(message: Election, writer: Writer = Writer.create()): Writer {
    if (message.mainCensus !== undefined) {
      Census.encode(message.mainCensus, writer.uint32(10).fork()).ldelim();
    }
    if (message.secondaryCensus !== undefined) {
      Census.encode(message.secondaryCensus, writer.uint32(18).fork()).ldelim();
    }
    if (message.tertiaryCensus !== undefined) {
      Census.encode(message.tertiaryCensus, writer.uint32(26).fork()).ldelim();
    }
    if (message.censusSize !== 0) {
      writer.uint32(88).int32(message.censusSize);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.privacy !== undefined) {
      Privacy.encode(message.privacy, writer.uint32(106).fork()).ldelim();
    }
    if (message.lifecycle !== undefined) {
      Lifecycle.encode(message.lifecycle, writer.uint32(114).fork()).ldelim();
    }
    if (message.metadataUri !== "") {
      writer.uint32(122).string(message.metadataUri);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Election {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseElection } as Election;
    message.proposals = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mainCensus = Census.decode(reader, reader.uint32());
          break;
        case 2:
          message.secondaryCensus = Census.decode(reader, reader.uint32());
          break;
        case 3:
          message.tertiaryCensus = Census.decode(reader, reader.uint32());
          break;
        case 11:
          message.censusSize = reader.int32();
          break;
        case 12:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 13:
          message.privacy = Privacy.decode(reader, reader.uint32());
          break;
        case 14:
          message.lifecycle = Lifecycle.decode(reader, reader.uint32());
          break;
        case 15:
          message.metadataUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Election {
    const message = { ...baseElection } as Election;
    message.mainCensus =
      object.mainCensus !== undefined && object.mainCensus !== null
        ? Census.fromJSON(object.mainCensus)
        : undefined;
    message.secondaryCensus =
      object.secondaryCensus !== undefined && object.secondaryCensus !== null
        ? Census.fromJSON(object.secondaryCensus)
        : undefined;
    message.tertiaryCensus =
      object.tertiaryCensus !== undefined && object.tertiaryCensus !== null
        ? Census.fromJSON(object.tertiaryCensus)
        : undefined;
    message.censusSize =
      object.censusSize !== undefined && object.censusSize !== null
        ? Number(object.censusSize)
        : 0;
    message.proposals = (object.proposals ?? []).map((e: any) =>
      Proposal.fromJSON(e)
    );
    message.privacy =
      object.privacy !== undefined && object.privacy !== null
        ? Privacy.fromJSON(object.privacy)
        : undefined;
    message.lifecycle =
      object.lifecycle !== undefined && object.lifecycle !== null
        ? Lifecycle.fromJSON(object.lifecycle)
        : undefined;
    message.metadataUri =
      object.metadataUri !== undefined && object.metadataUri !== null
        ? String(object.metadataUri)
        : "";
    return message;
  },

  toJSON(message: Election): unknown {
    const obj: any = {};
    message.mainCensus !== undefined &&
      (obj.mainCensus = message.mainCensus
        ? Census.toJSON(message.mainCensus)
        : undefined);
    message.secondaryCensus !== undefined &&
      (obj.secondaryCensus = message.secondaryCensus
        ? Census.toJSON(message.secondaryCensus)
        : undefined);
    message.tertiaryCensus !== undefined &&
      (obj.tertiaryCensus = message.tertiaryCensus
        ? Census.toJSON(message.tertiaryCensus)
        : undefined);
    message.censusSize !== undefined && (obj.censusSize = message.censusSize);
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? Proposal.toJSON(e) : undefined
      );
    } else {
      obj.proposals = [];
    }
    message.privacy !== undefined &&
      (obj.privacy = message.privacy
        ? Privacy.toJSON(message.privacy)
        : undefined);
    message.lifecycle !== undefined &&
      (obj.lifecycle = message.lifecycle
        ? Lifecycle.toJSON(message.lifecycle)
        : undefined);
    message.metadataUri !== undefined &&
      (obj.metadataUri = message.metadataUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Election>, I>>(object: I): Election {
    const message = { ...baseElection } as Election;
    message.mainCensus =
      object.mainCensus !== undefined && object.mainCensus !== null
        ? Census.fromPartial(object.mainCensus)
        : undefined;
    message.secondaryCensus =
      object.secondaryCensus !== undefined && object.secondaryCensus !== null
        ? Census.fromPartial(object.secondaryCensus)
        : undefined;
    message.tertiaryCensus =
      object.tertiaryCensus !== undefined && object.tertiaryCensus !== null
        ? Census.fromPartial(object.tertiaryCensus)
        : undefined;
    message.censusSize = object.censusSize ?? 0;
    message.proposals =
      object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    message.privacy =
      object.privacy !== undefined && object.privacy !== null
        ? Privacy.fromPartial(object.privacy)
        : undefined;
    message.lifecycle =
      object.lifecycle !== undefined && object.lifecycle !== null
        ? Lifecycle.fromPartial(object.lifecycle)
        : undefined;
    message.metadataUri = object.metadataUri ?? "";
    return message;
  },
};

const basePrivacy: object = { realTimeResults: false, censusProof: 0 };

export const Privacy = {
  encode(message: Privacy, writer: Writer = Writer.create()): Writer {
    if (message.realTimeResults === true) {
      writer.uint32(8).bool(message.realTimeResults);
    }
    if (message.censusProof !== 0) {
      writer.uint32(16).int32(message.censusProof);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Privacy {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePrivacy } as Privacy;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.realTimeResults = reader.bool();
          break;
        case 2:
          message.censusProof = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Privacy {
    const message = { ...basePrivacy } as Privacy;
    message.realTimeResults =
      object.realTimeResults !== undefined && object.realTimeResults !== null
        ? Boolean(object.realTimeResults)
        : false;
    message.censusProof =
      object.censusProof !== undefined && object.censusProof !== null
        ? privacy_CensusProofsFromJSON(object.censusProof)
        : 0;
    return message;
  },

  toJSON(message: Privacy): unknown {
    const obj: any = {};
    message.realTimeResults !== undefined &&
      (obj.realTimeResults = message.realTimeResults);
    message.censusProof !== undefined &&
      (obj.censusProof = privacy_CensusProofsToJSON(message.censusProof));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Privacy>, I>>(object: I): Privacy {
    const message = { ...basePrivacy } as Privacy;
    message.realTimeResults = object.realTimeResults ?? false;
    message.censusProof = object.censusProof ?? 0;
    return message;
  },
};

const baseLifecycle: object = { type: 0, endBlock: 0 };

export const Lifecycle = {
  encode(message: Lifecycle, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.startBlock !== undefined) {
      writer.uint32(16).int32(message.startBlock);
    }
    if (message.endBlock !== 0) {
      writer.uint32(24).int32(message.endBlock);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Lifecycle {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLifecycle } as Lifecycle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.startBlock = reader.int32();
          break;
        case 3:
          message.endBlock = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Lifecycle {
    const message = { ...baseLifecycle } as Lifecycle;
    message.type =
      object.type !== undefined && object.type !== null
        ? lifecycle_TypesFromJSON(object.type)
        : 0;
    message.startBlock =
      object.startBlock !== undefined && object.startBlock !== null
        ? Number(object.startBlock)
        : undefined;
    message.endBlock =
      object.endBlock !== undefined && object.endBlock !== null
        ? Number(object.endBlock)
        : 0;
    return message;
  },

  toJSON(message: Lifecycle): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = lifecycle_TypesToJSON(message.type));
    message.startBlock !== undefined && (obj.startBlock = message.startBlock);
    message.endBlock !== undefined && (obj.endBlock = message.endBlock);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Lifecycle>, I>>(
    object: I
  ): Lifecycle {
    const message = { ...baseLifecycle } as Lifecycle;
    message.type = object.type ?? 0;
    message.startBlock = object.startBlock ?? undefined;
    message.endBlock = object.endBlock ?? 0;
    return message;
  },
};

const baseProposal: object = {};

export const Proposal = {
  encode(message: Proposal, writer: Writer = Writer.create()): Writer {
    if (message.proposal?.$case === "approval") {
      ApprovalProposal.encode(
        message.proposal.approval,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.proposal?.$case === "singleChoice") {
      SingleChoiceProposal.encode(
        message.proposal.singleChoice,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.proposal?.$case === "quadratic") {
      QuadraticProposal.encode(
        message.proposal.quadratic,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.proposal?.$case === "ranked") {
      RankedProposal.encode(
        message.proposal.ranked,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.proposal?.$case === "spread") {
      SpreadProposal.encode(
        message.proposal.spread,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProposal } as Proposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = {
            $case: "approval",
            approval: ApprovalProposal.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.proposal = {
            $case: "singleChoice",
            singleChoice: SingleChoiceProposal.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.proposal = {
            $case: "quadratic",
            quadratic: QuadraticProposal.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.proposal = {
            $case: "ranked",
            ranked: RankedProposal.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.proposal = {
            $case: "spread",
            spread: SpreadProposal.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    const message = { ...baseProposal } as Proposal;
    if (object.approval !== undefined && object.approval !== null) {
      message.proposal = {
        $case: "approval",
        approval: ApprovalProposal.fromJSON(object.approval),
      };
    }
    if (object.singleChoice !== undefined && object.singleChoice !== null) {
      message.proposal = {
        $case: "singleChoice",
        singleChoice: SingleChoiceProposal.fromJSON(object.singleChoice),
      };
    }
    if (object.quadratic !== undefined && object.quadratic !== null) {
      message.proposal = {
        $case: "quadratic",
        quadratic: QuadraticProposal.fromJSON(object.quadratic),
      };
    }
    if (object.ranked !== undefined && object.ranked !== null) {
      message.proposal = {
        $case: "ranked",
        ranked: RankedProposal.fromJSON(object.ranked),
      };
    }
    if (object.spread !== undefined && object.spread !== null) {
      message.proposal = {
        $case: "spread",
        spread: SpreadProposal.fromJSON(object.spread),
      };
    }
    return message;
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.proposal?.$case === "approval" &&
      (obj.approval = message.proposal?.approval
        ? ApprovalProposal.toJSON(message.proposal?.approval)
        : undefined);
    message.proposal?.$case === "singleChoice" &&
      (obj.singleChoice = message.proposal?.singleChoice
        ? SingleChoiceProposal.toJSON(message.proposal?.singleChoice)
        : undefined);
    message.proposal?.$case === "quadratic" &&
      (obj.quadratic = message.proposal?.quadratic
        ? QuadraticProposal.toJSON(message.proposal?.quadratic)
        : undefined);
    message.proposal?.$case === "ranked" &&
      (obj.ranked = message.proposal?.ranked
        ? RankedProposal.toJSON(message.proposal?.ranked)
        : undefined);
    message.proposal?.$case === "spread" &&
      (obj.spread = message.proposal?.spread
        ? SpreadProposal.toJSON(message.proposal?.spread)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = { ...baseProposal } as Proposal;
    if (
      object.proposal?.$case === "approval" &&
      object.proposal?.approval !== undefined &&
      object.proposal?.approval !== null
    ) {
      message.proposal = {
        $case: "approval",
        approval: ApprovalProposal.fromPartial(object.proposal.approval),
      };
    }
    if (
      object.proposal?.$case === "singleChoice" &&
      object.proposal?.singleChoice !== undefined &&
      object.proposal?.singleChoice !== null
    ) {
      message.proposal = {
        $case: "singleChoice",
        singleChoice: SingleChoiceProposal.fromPartial(
          object.proposal.singleChoice
        ),
      };
    }
    if (
      object.proposal?.$case === "quadratic" &&
      object.proposal?.quadratic !== undefined &&
      object.proposal?.quadratic !== null
    ) {
      message.proposal = {
        $case: "quadratic",
        quadratic: QuadraticProposal.fromPartial(object.proposal.quadratic),
      };
    }
    if (
      object.proposal?.$case === "ranked" &&
      object.proposal?.ranked !== undefined &&
      object.proposal?.ranked !== null
    ) {
      message.proposal = {
        $case: "ranked",
        ranked: RankedProposal.fromPartial(object.proposal.ranked),
      };
    }
    if (
      object.proposal?.$case === "spread" &&
      object.proposal?.spread !== undefined &&
      object.proposal?.spread !== null
    ) {
      message.proposal = {
        $case: "spread",
        spread: SpreadProposal.fromPartial(object.proposal.spread),
      };
    }
    return message;
  },
};

const baseApprovalProposal: object = {};

export const ApprovalProposal = {
  encode(_: ApprovalProposal, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApprovalProposal {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseApprovalProposal } as ApprovalProposal;
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

  fromJSON(_: any): ApprovalProposal {
    const message = { ...baseApprovalProposal } as ApprovalProposal;
    return message;
  },

  toJSON(_: ApprovalProposal): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApprovalProposal>, I>>(
    _: I
  ): ApprovalProposal {
    const message = { ...baseApprovalProposal } as ApprovalProposal;
    return message;
  },
};

const baseSingleChoiceProposal: object = { optionCount: 0 };

export const SingleChoiceProposal = {
  encode(
    message: SingleChoiceProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.optionCount !== 0) {
      writer.uint32(8).int32(message.optionCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SingleChoiceProposal {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSingleChoiceProposal } as SingleChoiceProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.optionCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SingleChoiceProposal {
    const message = { ...baseSingleChoiceProposal } as SingleChoiceProposal;
    message.optionCount =
      object.optionCount !== undefined && object.optionCount !== null
        ? Number(object.optionCount)
        : 0;
    return message;
  },

  toJSON(message: SingleChoiceProposal): unknown {
    const obj: any = {};
    message.optionCount !== undefined &&
      (obj.optionCount = message.optionCount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SingleChoiceProposal>, I>>(
    object: I
  ): SingleChoiceProposal {
    const message = { ...baseSingleChoiceProposal } as SingleChoiceProposal;
    message.optionCount = object.optionCount ?? 0;
    return message;
  },
};

const baseQuadraticProposal: object = {
  optionCount: 0,
  costExponent: 0,
  maxValue: 0,
  maxSum: 0,
};

export const QuadraticProposal = {
  encode(message: QuadraticProposal, writer: Writer = Writer.create()): Writer {
    if (message.optionCount !== 0) {
      writer.uint32(8).int32(message.optionCount);
    }
    if (message.costExponent !== 0) {
      writer.uint32(21).float(message.costExponent);
    }
    if (message.maxValue !== 0) {
      writer.uint32(24).int32(message.maxValue);
    }
    if (message.maxSum !== 0) {
      writer.uint32(32).int32(message.maxSum);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuadraticProposal {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuadraticProposal } as QuadraticProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.optionCount = reader.int32();
          break;
        case 2:
          message.costExponent = reader.float();
          break;
        case 3:
          message.maxValue = reader.int32();
          break;
        case 4:
          message.maxSum = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuadraticProposal {
    const message = { ...baseQuadraticProposal } as QuadraticProposal;
    message.optionCount =
      object.optionCount !== undefined && object.optionCount !== null
        ? Number(object.optionCount)
        : 0;
    message.costExponent =
      object.costExponent !== undefined && object.costExponent !== null
        ? Number(object.costExponent)
        : 0;
    message.maxValue =
      object.maxValue !== undefined && object.maxValue !== null
        ? Number(object.maxValue)
        : 0;
    message.maxSum =
      object.maxSum !== undefined && object.maxSum !== null
        ? Number(object.maxSum)
        : 0;
    return message;
  },

  toJSON(message: QuadraticProposal): unknown {
    const obj: any = {};
    message.optionCount !== undefined &&
      (obj.optionCount = message.optionCount);
    message.costExponent !== undefined &&
      (obj.costExponent = message.costExponent);
    message.maxValue !== undefined && (obj.maxValue = message.maxValue);
    message.maxSum !== undefined && (obj.maxSum = message.maxSum);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuadraticProposal>, I>>(
    object: I
  ): QuadraticProposal {
    const message = { ...baseQuadraticProposal } as QuadraticProposal;
    message.optionCount = object.optionCount ?? 0;
    message.costExponent = object.costExponent ?? 0;
    message.maxValue = object.maxValue ?? 0;
    message.maxSum = object.maxSum ?? 0;
    return message;
  },
};

const baseRankedProposal: object = { optionCount: 0, maxItems: 0 };

export const RankedProposal = {
  encode(message: RankedProposal, writer: Writer = Writer.create()): Writer {
    if (message.optionCount !== 0) {
      writer.uint32(8).int32(message.optionCount);
    }
    if (message.maxItems !== 0) {
      writer.uint32(16).int32(message.maxItems);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RankedProposal {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRankedProposal } as RankedProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.optionCount = reader.int32();
          break;
        case 2:
          message.maxItems = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RankedProposal {
    const message = { ...baseRankedProposal } as RankedProposal;
    message.optionCount =
      object.optionCount !== undefined && object.optionCount !== null
        ? Number(object.optionCount)
        : 0;
    message.maxItems =
      object.maxItems !== undefined && object.maxItems !== null
        ? Number(object.maxItems)
        : 0;
    return message;
  },

  toJSON(message: RankedProposal): unknown {
    const obj: any = {};
    message.optionCount !== undefined &&
      (obj.optionCount = message.optionCount);
    message.maxItems !== undefined && (obj.maxItems = message.maxItems);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RankedProposal>, I>>(
    object: I
  ): RankedProposal {
    const message = { ...baseRankedProposal } as RankedProposal;
    message.optionCount = object.optionCount ?? 0;
    message.maxItems = object.maxItems ?? 0;
    return message;
  },
};

const baseSpreadProposal: object = { optionCount: 0 };

export const SpreadProposal = {
  encode(message: SpreadProposal, writer: Writer = Writer.create()): Writer {
    if (message.optionCount !== 0) {
      writer.uint32(8).int32(message.optionCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SpreadProposal {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSpreadProposal } as SpreadProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.optionCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpreadProposal {
    const message = { ...baseSpreadProposal } as SpreadProposal;
    message.optionCount =
      object.optionCount !== undefined && object.optionCount !== null
        ? Number(object.optionCount)
        : 0;
    return message;
  },

  toJSON(message: SpreadProposal): unknown {
    const obj: any = {};
    message.optionCount !== undefined &&
      (obj.optionCount = message.optionCount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpreadProposal>, I>>(
    object: I
  ): SpreadProposal {
    const message = { ...baseSpreadProposal } as SpreadProposal;
    message.optionCount = object.optionCount ?? 0;
    return message;
  },
};

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
