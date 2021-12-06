/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Census } from "../protocol/census";

export const protobufPackage = "dvote.types.v2";

export enum Lifecycle {
  PAUSED_MUTABLE = 0,
  PAUSED_MUTABLE_ONCE = 1,
  STARTED_IMMUTABLE = 2,
  STARTED_MUTABLE = 3,
  AUTOSTART_IMMUTABLE = 4,
  AUTOSTART_MUTABLE = 5,
  UNRECOGNIZED = -1,
}

export function lifecycleFromJSON(object: any): Lifecycle {
  switch (object) {
    case 0:
    case "PAUSED_MUTABLE":
      return Lifecycle.PAUSED_MUTABLE;
    case 1:
    case "PAUSED_MUTABLE_ONCE":
      return Lifecycle.PAUSED_MUTABLE_ONCE;
    case 2:
    case "STARTED_IMMUTABLE":
      return Lifecycle.STARTED_IMMUTABLE;
    case 3:
    case "STARTED_MUTABLE":
      return Lifecycle.STARTED_MUTABLE;
    case 4:
    case "AUTOSTART_IMMUTABLE":
      return Lifecycle.AUTOSTART_IMMUTABLE;
    case 5:
    case "AUTOSTART_MUTABLE":
      return Lifecycle.AUTOSTART_MUTABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Lifecycle.UNRECOGNIZED;
  }
}

export function lifecycleToJSON(object: Lifecycle): string {
  switch (object) {
    case Lifecycle.PAUSED_MUTABLE:
      return "PAUSED_MUTABLE";
    case Lifecycle.PAUSED_MUTABLE_ONCE:
      return "PAUSED_MUTABLE_ONCE";
    case Lifecycle.STARTED_IMMUTABLE:
      return "STARTED_IMMUTABLE";
    case Lifecycle.STARTED_MUTABLE:
      return "STARTED_MUTABLE";
    case Lifecycle.AUTOSTART_IMMUTABLE:
      return "AUTOSTART_IMMUTABLE";
    case Lifecycle.AUTOSTART_MUTABLE:
      return "AUTOSTART_MUTABLE";
    default:
      return "UNKNOWN";
  }
}

/** / The following model defines the declaration of an election. These are just the settings, not the human readable information. */
export interface Election {
  /** See census.proto */
  primaryCensus: Census | undefined;
  secondaryCensus: Census | undefined;
  tertiaryCensus: Census | undefined;
  /** Used to select the zk circuit, determine the cost, etc */
  censusSize: number;
  /** The questions that people can vote */
  proposals: Proposal[];
  /** How data should be protected */
  privacy: Privacy | undefined;
  lifecycle: Lifecycle;
  metadataUri: string;
  startBlock: number;
  endBlock: number;
}

/** / The models below affect the whole election definition. */
export interface Privacy {
  realTimeResults: boolean;
  voteAnonymity: Privacy_VoteAnonimity;
}

export enum Privacy_VoteAnonimity {
  /** NONE - / Signed vote. Standard proof(s) are expected. */
  NONE = 0,
  /**
   * ZK_SNARKS - / Anonymous vote, submitted right away.
   * / The standard proof is part of the ZK circuit inputs. The ZK proof is expected.
   */
  ZK_SNARKS = 1,
  /**
   * ZK_SNARKS_PREREGISTER - / Anonymous vote, with voter registration prior to the election.
   * / The standard proof is part of the ZK circuit inputs. The ZK proof is expected.
   */
  ZK_SNARKS_PREREGISTER = 2,
  UNRECOGNIZED = -1,
}

export function privacy_VoteAnonimityFromJSON(
  object: any
): Privacy_VoteAnonimity {
  switch (object) {
    case 0:
    case "NONE":
      return Privacy_VoteAnonimity.NONE;
    case 1:
    case "ZK_SNARKS":
      return Privacy_VoteAnonimity.ZK_SNARKS;
    case 2:
    case "ZK_SNARKS_PREREGISTER":
      return Privacy_VoteAnonimity.ZK_SNARKS_PREREGISTER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Privacy_VoteAnonimity.UNRECOGNIZED;
  }
}

export function privacy_VoteAnonimityToJSON(
  object: Privacy_VoteAnonimity
): string {
  switch (object) {
    case Privacy_VoteAnonimity.NONE:
      return "NONE";
    case Privacy_VoteAnonimity.ZK_SNARKS:
      return "ZK_SNARKS";
    case Privacy_VoteAnonimity.ZK_SNARKS_PREREGISTER:
      return "ZK_SNARKS_PREREGISTER";
    default:
      return "UNKNOWN";
  }
}

export interface Proposal {
  proposal?:
    | { $case: "approvalProposal"; approvalProposal: ApprovalProposal }
    | {
        $case: "singleChoiceProposal";
        singleChoiceProposal: SingleChoiceProposal;
      }
    | { $case: "quadraticProposal"; quadraticProposal: QuadraticProposal }
    | { $case: "rankedProposal"; rankedProposal: RankedProposal }
    | { $case: "spreadProposal"; spreadProposal: SpreadProposal };
}

/** Submodels */
export interface ApprovalProposal {}

export interface SingleChoiceProposal {
  optionCount: number;
}

export interface QuadraticProposal {
  optionCount: number;
  costExponent: number;
  /** / Assigning points from 0 to maxValue */
  maxValue: number;
  /** / The exponentiated sum of values must not exceed maxSum */
  maxSum: number;
}

export interface RankedProposal {
  optionCount: number;
  /** / Up to how many indexes can be ranked */
  maxItems: number;
}

export interface SpreadProposal {
  optionCount: number;
}

const baseElection: object = {
  censusSize: 0,
  lifecycle: 0,
  metadataUri: "",
  startBlock: 0,
  endBlock: 0,
};

export const Election = {
  encode(message: Election, writer: Writer = Writer.create()): Writer {
    if (message.primaryCensus !== undefined) {
      Census.encode(message.primaryCensus, writer.uint32(10).fork()).ldelim();
    }
    if (message.secondaryCensus !== undefined) {
      Census.encode(message.secondaryCensus, writer.uint32(18).fork()).ldelim();
    }
    if (message.tertiaryCensus !== undefined) {
      Census.encode(message.tertiaryCensus, writer.uint32(26).fork()).ldelim();
    }
    if (message.censusSize !== 0) {
      writer.uint32(32).int32(message.censusSize);
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.privacy !== undefined) {
      Privacy.encode(message.privacy, writer.uint32(50).fork()).ldelim();
    }
    if (message.lifecycle !== 0) {
      writer.uint32(56).int32(message.lifecycle);
    }
    if (message.metadataUri !== "") {
      writer.uint32(66).string(message.metadataUri);
    }
    if (message.startBlock !== 0) {
      writer.uint32(72).int32(message.startBlock);
    }
    if (message.endBlock !== 0) {
      writer.uint32(80).int32(message.endBlock);
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
          message.primaryCensus = Census.decode(reader, reader.uint32());
          break;
        case 2:
          message.secondaryCensus = Census.decode(reader, reader.uint32());
          break;
        case 3:
          message.tertiaryCensus = Census.decode(reader, reader.uint32());
          break;
        case 4:
          message.censusSize = reader.int32();
          break;
        case 5:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 6:
          message.privacy = Privacy.decode(reader, reader.uint32());
          break;
        case 7:
          message.lifecycle = reader.int32() as any;
          break;
        case 8:
          message.metadataUri = reader.string();
          break;
        case 9:
          message.startBlock = reader.int32();
          break;
        case 10:
          message.endBlock = reader.int32();
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
    message.primaryCensus =
      object.primaryCensus !== undefined && object.primaryCensus !== null
        ? Census.fromJSON(object.primaryCensus)
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
        ? lifecycleFromJSON(object.lifecycle)
        : 0;
    message.metadataUri =
      object.metadataUri !== undefined && object.metadataUri !== null
        ? String(object.metadataUri)
        : "";
    message.startBlock =
      object.startBlock !== undefined && object.startBlock !== null
        ? Number(object.startBlock)
        : 0;
    message.endBlock =
      object.endBlock !== undefined && object.endBlock !== null
        ? Number(object.endBlock)
        : 0;
    return message;
  },

  toJSON(message: Election): unknown {
    const obj: any = {};
    message.primaryCensus !== undefined &&
      (obj.primaryCensus = message.primaryCensus
        ? Census.toJSON(message.primaryCensus)
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
      (obj.lifecycle = lifecycleToJSON(message.lifecycle));
    message.metadataUri !== undefined &&
      (obj.metadataUri = message.metadataUri);
    message.startBlock !== undefined && (obj.startBlock = message.startBlock);
    message.endBlock !== undefined && (obj.endBlock = message.endBlock);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Election>, I>>(object: I): Election {
    const message = { ...baseElection } as Election;
    message.primaryCensus =
      object.primaryCensus !== undefined && object.primaryCensus !== null
        ? Census.fromPartial(object.primaryCensus)
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
    message.lifecycle = object.lifecycle ?? 0;
    message.metadataUri = object.metadataUri ?? "";
    message.startBlock = object.startBlock ?? 0;
    message.endBlock = object.endBlock ?? 0;
    return message;
  },
};

const basePrivacy: object = { realTimeResults: false, voteAnonymity: 0 };

export const Privacy = {
  encode(message: Privacy, writer: Writer = Writer.create()): Writer {
    if (message.realTimeResults === true) {
      writer.uint32(8).bool(message.realTimeResults);
    }
    if (message.voteAnonymity !== 0) {
      writer.uint32(16).int32(message.voteAnonymity);
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
          message.voteAnonymity = reader.int32() as any;
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
    message.voteAnonymity =
      object.voteAnonymity !== undefined && object.voteAnonymity !== null
        ? privacy_VoteAnonimityFromJSON(object.voteAnonymity)
        : 0;
    return message;
  },

  toJSON(message: Privacy): unknown {
    const obj: any = {};
    message.realTimeResults !== undefined &&
      (obj.realTimeResults = message.realTimeResults);
    message.voteAnonymity !== undefined &&
      (obj.voteAnonymity = privacy_VoteAnonimityToJSON(message.voteAnonymity));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Privacy>, I>>(object: I): Privacy {
    const message = { ...basePrivacy } as Privacy;
    message.realTimeResults = object.realTimeResults ?? false;
    message.voteAnonymity = object.voteAnonymity ?? 0;
    return message;
  },
};

const baseProposal: object = {};

export const Proposal = {
  encode(message: Proposal, writer: Writer = Writer.create()): Writer {
    if (message.proposal?.$case === "approvalProposal") {
      ApprovalProposal.encode(
        message.proposal.approvalProposal,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.proposal?.$case === "singleChoiceProposal") {
      SingleChoiceProposal.encode(
        message.proposal.singleChoiceProposal,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.proposal?.$case === "quadraticProposal") {
      QuadraticProposal.encode(
        message.proposal.quadraticProposal,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.proposal?.$case === "rankedProposal") {
      RankedProposal.encode(
        message.proposal.rankedProposal,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.proposal?.$case === "spreadProposal") {
      SpreadProposal.encode(
        message.proposal.spreadProposal,
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
            $case: "approvalProposal",
            approvalProposal: ApprovalProposal.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.proposal = {
            $case: "singleChoiceProposal",
            singleChoiceProposal: SingleChoiceProposal.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 3:
          message.proposal = {
            $case: "quadraticProposal",
            quadraticProposal: QuadraticProposal.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.proposal = {
            $case: "rankedProposal",
            rankedProposal: RankedProposal.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.proposal = {
            $case: "spreadProposal",
            spreadProposal: SpreadProposal.decode(reader, reader.uint32()),
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
    if (
      object.approvalProposal !== undefined &&
      object.approvalProposal !== null
    ) {
      message.proposal = {
        $case: "approvalProposal",
        approvalProposal: ApprovalProposal.fromJSON(object.approvalProposal),
      };
    }
    if (
      object.singleChoiceProposal !== undefined &&
      object.singleChoiceProposal !== null
    ) {
      message.proposal = {
        $case: "singleChoiceProposal",
        singleChoiceProposal: SingleChoiceProposal.fromJSON(
          object.singleChoiceProposal
        ),
      };
    }
    if (
      object.quadraticProposal !== undefined &&
      object.quadraticProposal !== null
    ) {
      message.proposal = {
        $case: "quadraticProposal",
        quadraticProposal: QuadraticProposal.fromJSON(object.quadraticProposal),
      };
    }
    if (object.rankedProposal !== undefined && object.rankedProposal !== null) {
      message.proposal = {
        $case: "rankedProposal",
        rankedProposal: RankedProposal.fromJSON(object.rankedProposal),
      };
    }
    if (object.spreadProposal !== undefined && object.spreadProposal !== null) {
      message.proposal = {
        $case: "spreadProposal",
        spreadProposal: SpreadProposal.fromJSON(object.spreadProposal),
      };
    }
    return message;
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.proposal?.$case === "approvalProposal" &&
      (obj.approvalProposal = message.proposal?.approvalProposal
        ? ApprovalProposal.toJSON(message.proposal?.approvalProposal)
        : undefined);
    message.proposal?.$case === "singleChoiceProposal" &&
      (obj.singleChoiceProposal = message.proposal?.singleChoiceProposal
        ? SingleChoiceProposal.toJSON(message.proposal?.singleChoiceProposal)
        : undefined);
    message.proposal?.$case === "quadraticProposal" &&
      (obj.quadraticProposal = message.proposal?.quadraticProposal
        ? QuadraticProposal.toJSON(message.proposal?.quadraticProposal)
        : undefined);
    message.proposal?.$case === "rankedProposal" &&
      (obj.rankedProposal = message.proposal?.rankedProposal
        ? RankedProposal.toJSON(message.proposal?.rankedProposal)
        : undefined);
    message.proposal?.$case === "spreadProposal" &&
      (obj.spreadProposal = message.proposal?.spreadProposal
        ? SpreadProposal.toJSON(message.proposal?.spreadProposal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = { ...baseProposal } as Proposal;
    if (
      object.proposal?.$case === "approvalProposal" &&
      object.proposal?.approvalProposal !== undefined &&
      object.proposal?.approvalProposal !== null
    ) {
      message.proposal = {
        $case: "approvalProposal",
        approvalProposal: ApprovalProposal.fromPartial(
          object.proposal.approvalProposal
        ),
      };
    }
    if (
      object.proposal?.$case === "singleChoiceProposal" &&
      object.proposal?.singleChoiceProposal !== undefined &&
      object.proposal?.singleChoiceProposal !== null
    ) {
      message.proposal = {
        $case: "singleChoiceProposal",
        singleChoiceProposal: SingleChoiceProposal.fromPartial(
          object.proposal.singleChoiceProposal
        ),
      };
    }
    if (
      object.proposal?.$case === "quadraticProposal" &&
      object.proposal?.quadraticProposal !== undefined &&
      object.proposal?.quadraticProposal !== null
    ) {
      message.proposal = {
        $case: "quadraticProposal",
        quadraticProposal: QuadraticProposal.fromPartial(
          object.proposal.quadraticProposal
        ),
      };
    }
    if (
      object.proposal?.$case === "rankedProposal" &&
      object.proposal?.rankedProposal !== undefined &&
      object.proposal?.rankedProposal !== null
    ) {
      message.proposal = {
        $case: "rankedProposal",
        rankedProposal: RankedProposal.fromPartial(
          object.proposal.rankedProposal
        ),
      };
    }
    if (
      object.proposal?.$case === "spreadProposal" &&
      object.proposal?.spreadProposal !== undefined &&
      object.proposal?.spreadProposal !== null
    ) {
      message.proposal = {
        $case: "spreadProposal",
        spreadProposal: SpreadProposal.fromPartial(
          object.proposal.spreadProposal
        ),
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
