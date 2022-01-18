/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import {
  SignatureType,
  signatureTypeFromJSON,
  signatureTypeToJSON,
} from "../protocol/enums";
import { Proof } from "../protocol/census";

export const protobufPackage = "dvote.types.v2";

export interface Ballot {
  body?:
    | { $case: "signedBallot"; signedBallot: SignedBallot }
    | { $case: "anonymousBallot"; anonymousBallot: BallotBody };
}

export interface BallotBody {
  electionId: Uint8Array;
  nullifier: Uint8Array;
  /**
   * Contains the census proof(s), according to the census types defined in the Election
   * Non-anonymous: [ mainProof1, mainProof2, ..., secondaryProof1, secondaryProof2, ... ]
   * Anonymous:     [ ProofZkSnark ] if anonymous
   */
  proofs: Proof[];
  votes: BallotBody_VoteList | undefined;
}

export interface BallotBody_VoteList {
  /** Submitting only only one vote? */
  partial: boolean;
  /**
   * [v1, v2, v3...] when partial == false
   * [v3] when partial == true
   */
  votes: Vote[];
  /**
   * Index of the proposal being submitted.
   * Set to 0 when `partial = false` (ignored)
   */
  submittedIndex: number;
}

export interface SignedBallot {
  /** Serialized {BallotBody} bytes */
  ballot: Uint8Array;
  /** sign(bytes(BallotBody)) */
  signature: Uint8Array;
  signatureType: SignatureType;
}

export interface Vote {
  body?:
    | { $case: "encrypted"; encrypted: EncryptedVote }
    | { $case: "approval"; approval: ApprovalVote }
    | { $case: "singleChoice"; singleChoice: SingleChoiceVote }
    | { $case: "quadratic"; quadratic: QuadraticVote }
    | { $case: "ranked"; ranked: RankedVote }
    | { $case: "spread"; spread: SpreadVote };
}

export interface EncryptedVote {
  /** Encrypted bytes of {Vote}  (recursive) */
  payload: Uint8Array;
  /** Keys (in order) used to encrypt the payload */
  encryptionKeyIndexes: number[];
}

export interface ApprovalVote {
  approved: boolean;
  /** 16 random bytes */
  nonce: Uint8Array;
}

export interface SingleChoiceVote {
  /** Index of the chosen option */
  choice: number;
  /** 16 random bytes */
  nonce: Uint8Array;
}

export interface QuadraticVote {
  /** Points assigned to each choice index */
  choicePoints: number[];
  /** 16 random bytes */
  nonce: Uint8Array;
}

export interface RankedVote {
  /** Ranking of the chosen indexes, by preference */
  ranking: number[];
  /** 16 random bytes */
  nonce: Uint8Array;
}

export interface SpreadVote {
  /** Percent of weight assigned to each choice (from 0 to 100_00) */
  percentages: number[];
  /** 16 random bytes */
  nonce: Uint8Array;
}

function createBaseBallot(): Ballot {
  return { body: undefined };
}

export const Ballot = {
  encode(message: Ballot, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "signedBallot") {
      SignedBallot.encode(
        message.body.signedBallot,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "anonymousBallot") {
      BallotBody.encode(
        message.body.anonymousBallot,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Ballot {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBallot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "signedBallot",
            signedBallot: SignedBallot.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "anonymousBallot",
            anonymousBallot: BallotBody.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ballot {
    return {
      body: isSet(object.signedBallot)
        ? {
            $case: "signedBallot",
            signedBallot: SignedBallot.fromJSON(object.signedBallot),
          }
        : isSet(object.anonymousBallot)
        ? {
            $case: "anonymousBallot",
            anonymousBallot: BallotBody.fromJSON(object.anonymousBallot),
          }
        : undefined,
    };
  },

  toJSON(message: Ballot): unknown {
    const obj: any = {};
    message.body?.$case === "signedBallot" &&
      (obj.signedBallot = message.body?.signedBallot
        ? SignedBallot.toJSON(message.body?.signedBallot)
        : undefined);
    message.body?.$case === "anonymousBallot" &&
      (obj.anonymousBallot = message.body?.anonymousBallot
        ? BallotBody.toJSON(message.body?.anonymousBallot)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Ballot>, I>>(object: I): Ballot {
    const message = createBaseBallot();
    if (
      object.body?.$case === "signedBallot" &&
      object.body?.signedBallot !== undefined &&
      object.body?.signedBallot !== null
    ) {
      message.body = {
        $case: "signedBallot",
        signedBallot: SignedBallot.fromPartial(object.body.signedBallot),
      };
    }
    if (
      object.body?.$case === "anonymousBallot" &&
      object.body?.anonymousBallot !== undefined &&
      object.body?.anonymousBallot !== null
    ) {
      message.body = {
        $case: "anonymousBallot",
        anonymousBallot: BallotBody.fromPartial(object.body.anonymousBallot),
      };
    }
    return message;
  },
};

function createBaseBallotBody(): BallotBody {
  return {
    electionId: new Uint8Array(),
    nullifier: new Uint8Array(),
    proofs: [],
    votes: undefined,
  };
}

export const BallotBody = {
  encode(message: BallotBody, writer: Writer = Writer.create()): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    if (message.nullifier.length !== 0) {
      writer.uint32(18).bytes(message.nullifier);
    }
    for (const v of message.proofs) {
      Proof.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.votes !== undefined) {
      BallotBody_VoteList.encode(
        message.votes,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BallotBody {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBallotBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        case 2:
          message.nullifier = reader.bytes();
          break;
        case 3:
          message.proofs.push(Proof.decode(reader, reader.uint32()));
          break;
        case 4:
          message.votes = BallotBody_VoteList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BallotBody {
    return {
      electionId: isSet(object.electionId)
        ? bytesFromBase64(object.electionId)
        : new Uint8Array(),
      nullifier: isSet(object.nullifier)
        ? bytesFromBase64(object.nullifier)
        : new Uint8Array(),
      proofs: Array.isArray(object?.proofs)
        ? object.proofs.map((e: any) => Proof.fromJSON(e))
        : [],
      votes: isSet(object.votes)
        ? BallotBody_VoteList.fromJSON(object.votes)
        : undefined,
    };
  },

  toJSON(message: BallotBody): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    message.nullifier !== undefined &&
      (obj.nullifier = base64FromBytes(
        message.nullifier !== undefined ? message.nullifier : new Uint8Array()
      ));
    if (message.proofs) {
      obj.proofs = message.proofs.map((e) => (e ? Proof.toJSON(e) : undefined));
    } else {
      obj.proofs = [];
    }
    message.votes !== undefined &&
      (obj.votes = message.votes
        ? BallotBody_VoteList.toJSON(message.votes)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BallotBody>, I>>(
    object: I
  ): BallotBody {
    const message = createBaseBallotBody();
    message.electionId = object.electionId ?? new Uint8Array();
    message.nullifier = object.nullifier ?? new Uint8Array();
    message.proofs = object.proofs?.map((e) => Proof.fromPartial(e)) || [];
    message.votes =
      object.votes !== undefined && object.votes !== null
        ? BallotBody_VoteList.fromPartial(object.votes)
        : undefined;
    return message;
  },
};

function createBaseBallotBody_VoteList(): BallotBody_VoteList {
  return { partial: false, votes: [], submittedIndex: 0 };
}

export const BallotBody_VoteList = {
  encode(
    message: BallotBody_VoteList,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.partial === true) {
      writer.uint32(8).bool(message.partial);
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.submittedIndex !== 0) {
      writer.uint32(24).int32(message.submittedIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BallotBody_VoteList {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBallotBody_VoteList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.partial = reader.bool();
          break;
        case 2:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 3:
          message.submittedIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BallotBody_VoteList {
    return {
      partial: isSet(object.partial) ? Boolean(object.partial) : false,
      votes: Array.isArray(object?.votes)
        ? object.votes.map((e: any) => Vote.fromJSON(e))
        : [],
      submittedIndex: isSet(object.submittedIndex)
        ? Number(object.submittedIndex)
        : 0,
    };
  },

  toJSON(message: BallotBody_VoteList): unknown {
    const obj: any = {};
    message.partial !== undefined && (obj.partial = message.partial);
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.submittedIndex !== undefined &&
      (obj.submittedIndex = Math.round(message.submittedIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BallotBody_VoteList>, I>>(
    object: I
  ): BallotBody_VoteList {
    const message = createBaseBallotBody_VoteList();
    message.partial = object.partial ?? false;
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    message.submittedIndex = object.submittedIndex ?? 0;
    return message;
  },
};

function createBaseSignedBallot(): SignedBallot {
  return {
    ballot: new Uint8Array(),
    signature: new Uint8Array(),
    signatureType: 0,
  };
}

export const SignedBallot = {
  encode(message: SignedBallot, writer: Writer = Writer.create()): Writer {
    if (message.ballot.length !== 0) {
      writer.uint32(10).bytes(message.ballot);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.signatureType !== 0) {
      writer.uint32(24).int32(message.signatureType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SignedBallot {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedBallot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ballot = reader.bytes();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        case 3:
          message.signatureType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedBallot {
    return {
      ballot: isSet(object.ballot)
        ? bytesFromBase64(object.ballot)
        : new Uint8Array(),
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : new Uint8Array(),
      signatureType: isSet(object.signatureType)
        ? signatureTypeFromJSON(object.signatureType)
        : 0,
    };
  },

  toJSON(message: SignedBallot): unknown {
    const obj: any = {};
    message.ballot !== undefined &&
      (obj.ballot = base64FromBytes(
        message.ballot !== undefined ? message.ballot : new Uint8Array()
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    message.signatureType !== undefined &&
      (obj.signatureType = signatureTypeToJSON(message.signatureType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignedBallot>, I>>(
    object: I
  ): SignedBallot {
    const message = createBaseSignedBallot();
    message.ballot = object.ballot ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    message.signatureType = object.signatureType ?? 0;
    return message;
  },
};

function createBaseVote(): Vote {
  return { body: undefined };
}

export const Vote = {
  encode(message: Vote, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "encrypted") {
      EncryptedVote.encode(
        message.body.encrypted,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "approval") {
      ApprovalVote.encode(
        message.body.approval,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.body?.$case === "singleChoice") {
      SingleChoiceVote.encode(
        message.body.singleChoice,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.body?.$case === "quadratic") {
      QuadraticVote.encode(
        message.body.quadratic,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.body?.$case === "ranked") {
      RankedVote.encode(
        message.body.ranked,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.body?.$case === "spread") {
      SpreadVote.encode(
        message.body.spread,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "encrypted",
            encrypted: EncryptedVote.decode(reader, reader.uint32()),
          };
          break;
        case 11:
          message.body = {
            $case: "approval",
            approval: ApprovalVote.decode(reader, reader.uint32()),
          };
          break;
        case 12:
          message.body = {
            $case: "singleChoice",
            singleChoice: SingleChoiceVote.decode(reader, reader.uint32()),
          };
          break;
        case 13:
          message.body = {
            $case: "quadratic",
            quadratic: QuadraticVote.decode(reader, reader.uint32()),
          };
          break;
        case 14:
          message.body = {
            $case: "ranked",
            ranked: RankedVote.decode(reader, reader.uint32()),
          };
          break;
        case 15:
          message.body = {
            $case: "spread",
            spread: SpreadVote.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    return {
      body: isSet(object.encrypted)
        ? {
            $case: "encrypted",
            encrypted: EncryptedVote.fromJSON(object.encrypted),
          }
        : isSet(object.approval)
        ? {
            $case: "approval",
            approval: ApprovalVote.fromJSON(object.approval),
          }
        : isSet(object.singleChoice)
        ? {
            $case: "singleChoice",
            singleChoice: SingleChoiceVote.fromJSON(object.singleChoice),
          }
        : isSet(object.quadratic)
        ? {
            $case: "quadratic",
            quadratic: QuadraticVote.fromJSON(object.quadratic),
          }
        : isSet(object.ranked)
        ? { $case: "ranked", ranked: RankedVote.fromJSON(object.ranked) }
        : isSet(object.spread)
        ? { $case: "spread", spread: SpreadVote.fromJSON(object.spread) }
        : undefined,
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.body?.$case === "encrypted" &&
      (obj.encrypted = message.body?.encrypted
        ? EncryptedVote.toJSON(message.body?.encrypted)
        : undefined);
    message.body?.$case === "approval" &&
      (obj.approval = message.body?.approval
        ? ApprovalVote.toJSON(message.body?.approval)
        : undefined);
    message.body?.$case === "singleChoice" &&
      (obj.singleChoice = message.body?.singleChoice
        ? SingleChoiceVote.toJSON(message.body?.singleChoice)
        : undefined);
    message.body?.$case === "quadratic" &&
      (obj.quadratic = message.body?.quadratic
        ? QuadraticVote.toJSON(message.body?.quadratic)
        : undefined);
    message.body?.$case === "ranked" &&
      (obj.ranked = message.body?.ranked
        ? RankedVote.toJSON(message.body?.ranked)
        : undefined);
    message.body?.$case === "spread" &&
      (obj.spread = message.body?.spread
        ? SpreadVote.toJSON(message.body?.spread)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote {
    const message = createBaseVote();
    if (
      object.body?.$case === "encrypted" &&
      object.body?.encrypted !== undefined &&
      object.body?.encrypted !== null
    ) {
      message.body = {
        $case: "encrypted",
        encrypted: EncryptedVote.fromPartial(object.body.encrypted),
      };
    }
    if (
      object.body?.$case === "approval" &&
      object.body?.approval !== undefined &&
      object.body?.approval !== null
    ) {
      message.body = {
        $case: "approval",
        approval: ApprovalVote.fromPartial(object.body.approval),
      };
    }
    if (
      object.body?.$case === "singleChoice" &&
      object.body?.singleChoice !== undefined &&
      object.body?.singleChoice !== null
    ) {
      message.body = {
        $case: "singleChoice",
        singleChoice: SingleChoiceVote.fromPartial(object.body.singleChoice),
      };
    }
    if (
      object.body?.$case === "quadratic" &&
      object.body?.quadratic !== undefined &&
      object.body?.quadratic !== null
    ) {
      message.body = {
        $case: "quadratic",
        quadratic: QuadraticVote.fromPartial(object.body.quadratic),
      };
    }
    if (
      object.body?.$case === "ranked" &&
      object.body?.ranked !== undefined &&
      object.body?.ranked !== null
    ) {
      message.body = {
        $case: "ranked",
        ranked: RankedVote.fromPartial(object.body.ranked),
      };
    }
    if (
      object.body?.$case === "spread" &&
      object.body?.spread !== undefined &&
      object.body?.spread !== null
    ) {
      message.body = {
        $case: "spread",
        spread: SpreadVote.fromPartial(object.body.spread),
      };
    }
    return message;
  },
};

function createBaseEncryptedVote(): EncryptedVote {
  return { payload: new Uint8Array(), encryptionKeyIndexes: [] };
}

export const EncryptedVote = {
  encode(message: EncryptedVote, writer: Writer = Writer.create()): Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    writer.uint32(18).fork();
    for (const v of message.encryptionKeyIndexes) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EncryptedVote {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEncryptedVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.encryptionKeyIndexes.push(reader.int32());
            }
          } else {
            message.encryptionKeyIndexes.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EncryptedVote {
    return {
      payload: isSet(object.payload)
        ? bytesFromBase64(object.payload)
        : new Uint8Array(),
      encryptionKeyIndexes: Array.isArray(object?.encryptionKeyIndexes)
        ? object.encryptionKeyIndexes.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: EncryptedVote): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    if (message.encryptionKeyIndexes) {
      obj.encryptionKeyIndexes = message.encryptionKeyIndexes.map((e) =>
        Math.round(e)
      );
    } else {
      obj.encryptionKeyIndexes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EncryptedVote>, I>>(
    object: I
  ): EncryptedVote {
    const message = createBaseEncryptedVote();
    message.payload = object.payload ?? new Uint8Array();
    message.encryptionKeyIndexes =
      object.encryptionKeyIndexes?.map((e) => e) || [];
    return message;
  },
};

function createBaseApprovalVote(): ApprovalVote {
  return { approved: false, nonce: new Uint8Array() };
}

export const ApprovalVote = {
  encode(message: ApprovalVote, writer: Writer = Writer.create()): Writer {
    if (message.approved === true) {
      writer.uint32(8).bool(message.approved);
    }
    if (message.nonce.length !== 0) {
      writer.uint32(18).bytes(message.nonce);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ApprovalVote {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApprovalVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approved = reader.bool();
          break;
        case 2:
          message.nonce = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ApprovalVote {
    return {
      approved: isSet(object.approved) ? Boolean(object.approved) : false,
      nonce: isSet(object.nonce)
        ? bytesFromBase64(object.nonce)
        : new Uint8Array(),
    };
  },

  toJSON(message: ApprovalVote): unknown {
    const obj: any = {};
    message.approved !== undefined && (obj.approved = message.approved);
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ApprovalVote>, I>>(
    object: I
  ): ApprovalVote {
    const message = createBaseApprovalVote();
    message.approved = object.approved ?? false;
    message.nonce = object.nonce ?? new Uint8Array();
    return message;
  },
};

function createBaseSingleChoiceVote(): SingleChoiceVote {
  return { choice: 0, nonce: new Uint8Array() };
}

export const SingleChoiceVote = {
  encode(message: SingleChoiceVote, writer: Writer = Writer.create()): Writer {
    if (message.choice !== 0) {
      writer.uint32(8).int32(message.choice);
    }
    if (message.nonce.length !== 0) {
      writer.uint32(18).bytes(message.nonce);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SingleChoiceVote {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingleChoiceVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.choice = reader.int32();
          break;
        case 2:
          message.nonce = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SingleChoiceVote {
    return {
      choice: isSet(object.choice) ? Number(object.choice) : 0,
      nonce: isSet(object.nonce)
        ? bytesFromBase64(object.nonce)
        : new Uint8Array(),
    };
  },

  toJSON(message: SingleChoiceVote): unknown {
    const obj: any = {};
    message.choice !== undefined && (obj.choice = Math.round(message.choice));
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SingleChoiceVote>, I>>(
    object: I
  ): SingleChoiceVote {
    const message = createBaseSingleChoiceVote();
    message.choice = object.choice ?? 0;
    message.nonce = object.nonce ?? new Uint8Array();
    return message;
  },
};

function createBaseQuadraticVote(): QuadraticVote {
  return { choicePoints: [], nonce: new Uint8Array() };
}

export const QuadraticVote = {
  encode(message: QuadraticVote, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).fork();
    for (const v of message.choicePoints) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.nonce.length !== 0) {
      writer.uint32(18).bytes(message.nonce);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuadraticVote {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuadraticVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.choicePoints.push(reader.int32());
            }
          } else {
            message.choicePoints.push(reader.int32());
          }
          break;
        case 2:
          message.nonce = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuadraticVote {
    return {
      choicePoints: Array.isArray(object?.choicePoints)
        ? object.choicePoints.map((e: any) => Number(e))
        : [],
      nonce: isSet(object.nonce)
        ? bytesFromBase64(object.nonce)
        : new Uint8Array(),
    };
  },

  toJSON(message: QuadraticVote): unknown {
    const obj: any = {};
    if (message.choicePoints) {
      obj.choicePoints = message.choicePoints.map((e) => Math.round(e));
    } else {
      obj.choicePoints = [];
    }
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuadraticVote>, I>>(
    object: I
  ): QuadraticVote {
    const message = createBaseQuadraticVote();
    message.choicePoints = object.choicePoints?.map((e) => e) || [];
    message.nonce = object.nonce ?? new Uint8Array();
    return message;
  },
};

function createBaseRankedVote(): RankedVote {
  return { ranking: [], nonce: new Uint8Array() };
}

export const RankedVote = {
  encode(message: RankedVote, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).fork();
    for (const v of message.ranking) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.nonce.length !== 0) {
      writer.uint32(18).bytes(message.nonce);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RankedVote {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRankedVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ranking.push(reader.int32());
            }
          } else {
            message.ranking.push(reader.int32());
          }
          break;
        case 2:
          message.nonce = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RankedVote {
    return {
      ranking: Array.isArray(object?.ranking)
        ? object.ranking.map((e: any) => Number(e))
        : [],
      nonce: isSet(object.nonce)
        ? bytesFromBase64(object.nonce)
        : new Uint8Array(),
    };
  },

  toJSON(message: RankedVote): unknown {
    const obj: any = {};
    if (message.ranking) {
      obj.ranking = message.ranking.map((e) => Math.round(e));
    } else {
      obj.ranking = [];
    }
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RankedVote>, I>>(
    object: I
  ): RankedVote {
    const message = createBaseRankedVote();
    message.ranking = object.ranking?.map((e) => e) || [];
    message.nonce = object.nonce ?? new Uint8Array();
    return message;
  },
};

function createBaseSpreadVote(): SpreadVote {
  return { percentages: [], nonce: new Uint8Array() };
}

export const SpreadVote = {
  encode(message: SpreadVote, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).fork();
    for (const v of message.percentages) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.nonce.length !== 0) {
      writer.uint32(18).bytes(message.nonce);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SpreadVote {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpreadVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.percentages.push(reader.int32());
            }
          } else {
            message.percentages.push(reader.int32());
          }
          break;
        case 2:
          message.nonce = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpreadVote {
    return {
      percentages: Array.isArray(object?.percentages)
        ? object.percentages.map((e: any) => Number(e))
        : [],
      nonce: isSet(object.nonce)
        ? bytesFromBase64(object.nonce)
        : new Uint8Array(),
    };
  },

  toJSON(message: SpreadVote): unknown {
    const obj: any = {};
    if (message.percentages) {
      obj.percentages = message.percentages.map((e) => Math.round(e));
    } else {
      obj.percentages = [];
    }
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpreadVote>, I>>(
    object: I
  ): SpreadVote {
    const message = createBaseSpreadVote();
    message.percentages = object.percentages?.map((e) => e) || [];
    message.nonce = object.nonce ?? new Uint8Array();
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
