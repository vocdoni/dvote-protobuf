/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import {
  ProposalStatus,
  proposalStatusFromJSON,
  proposalStatusToJSON,
} from "../protocol/enums";
import { Organization } from "../protocol/organization";
import { Election } from "../protocol/election";
import { Proof } from "../protocol/census";
import { Ballot } from "../protocol/ballot";

export const protobufPackage = "dvote.types.v2";

export interface SetOrganization {
  organization: Organization | undefined;
}

export interface Transfer {
  to: Uint8Array;
  /** string(bigint) */
  value: string;
}

export interface Mint {
  /** string(bigint) */
  amount: string;
}

export interface ClaimTokens {
  nonce: Uint8Array;
  /** address */
  sender: Uint8Array;
}

export interface NewElection {
  election: Election | undefined;
}

/** Register a key for an election */
export interface RegisterElectionKey {
  electionId: Uint8Array;
  /** Arbo proof, CSP, ERC20, etc */
  proofs: Proof[];
  /** hashed(secretKey) bigint */
  newKey: Uint8Array;
  /** string(bigint) */
  weight: string;
}

export interface SubmitBallot {
  ballot: Ballot | undefined;
}

/** Entire election (all its proposals) */
export interface SetElectionStatus {
  electionId: Uint8Array;
  newStatus: ProposalStatus;
}

/** Only one proposal */
export interface SetProposalStatus {
  electionId: Uint8Array;
  entries: SetProposalStatus_Entry[];
}

export interface SetProposalStatus_Entry {
  proposalIndex: number;
  newStatus: ProposalStatus;
}

function createBaseSetOrganization(): SetOrganization {
  return { organization: undefined };
}

export const SetOrganization = {
  encode(message: SetOrganization, writer: Writer = Writer.create()): Writer {
    if (message.organization !== undefined) {
      Organization.encode(
        message.organization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetOrganization {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetOrganization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organization = Organization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetOrganization {
    return {
      organization: isSet(object.organization)
        ? Organization.fromJSON(object.organization)
        : undefined,
    };
  },

  toJSON(message: SetOrganization): unknown {
    const obj: any = {};
    message.organization !== undefined &&
      (obj.organization = message.organization
        ? Organization.toJSON(message.organization)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetOrganization>, I>>(
    object: I
  ): SetOrganization {
    const message = createBaseSetOrganization();
    message.organization =
      object.organization !== undefined && object.organization !== null
        ? Organization.fromPartial(object.organization)
        : undefined;
    return message;
  },
};

function createBaseTransfer(): Transfer {
  return { to: new Uint8Array(), value: "" };
}

export const Transfer = {
  encode(message: Transfer, writer: Writer = Writer.create()): Writer {
    if (message.to.length !== 0) {
      writer.uint32(10).bytes(message.to);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Transfer {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.to = reader.bytes();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transfer {
    return {
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(),
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Transfer): unknown {
    const obj: any = {};
    message.to !== undefined &&
      (obj.to = base64FromBytes(
        message.to !== undefined ? message.to : new Uint8Array()
      ));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transfer>, I>>(object: I): Transfer {
    const message = createBaseTransfer();
    message.to = object.to ?? new Uint8Array();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMint(): Mint {
  return { amount: "" };
}

export const Mint = {
  encode(message: Mint, writer: Writer = Writer.create()): Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Mint {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Mint {
    return {
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: Mint): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mint>, I>>(object: I): Mint {
    const message = createBaseMint();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseClaimTokens(): ClaimTokens {
  return { nonce: new Uint8Array(), sender: new Uint8Array() };
}

export const ClaimTokens = {
  encode(message: ClaimTokens, writer: Writer = Writer.create()): Writer {
    if (message.nonce.length !== 0) {
      writer.uint32(10).bytes(message.nonce);
    }
    if (message.sender.length !== 0) {
      writer.uint32(18).bytes(message.sender);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ClaimTokens {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.bytes();
          break;
        case 2:
          message.sender = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClaimTokens {
    return {
      nonce: isSet(object.nonce)
        ? bytesFromBase64(object.nonce)
        : new Uint8Array(),
      sender: isSet(object.sender)
        ? bytesFromBase64(object.sender)
        : new Uint8Array(),
    };
  },

  toJSON(message: ClaimTokens): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    message.sender !== undefined &&
      (obj.sender = base64FromBytes(
        message.sender !== undefined ? message.sender : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClaimTokens>, I>>(
    object: I
  ): ClaimTokens {
    const message = createBaseClaimTokens();
    message.nonce = object.nonce ?? new Uint8Array();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  },
};

function createBaseNewElection(): NewElection {
  return { election: undefined };
}

export const NewElection = {
  encode(message: NewElection, writer: Writer = Writer.create()): Writer {
    if (message.election !== undefined) {
      Election.encode(message.election, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NewElection {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewElection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.election = Election.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewElection {
    return {
      election: isSet(object.election)
        ? Election.fromJSON(object.election)
        : undefined,
    };
  },

  toJSON(message: NewElection): unknown {
    const obj: any = {};
    message.election !== undefined &&
      (obj.election = message.election
        ? Election.toJSON(message.election)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewElection>, I>>(
    object: I
  ): NewElection {
    const message = createBaseNewElection();
    message.election =
      object.election !== undefined && object.election !== null
        ? Election.fromPartial(object.election)
        : undefined;
    return message;
  },
};

function createBaseRegisterElectionKey(): RegisterElectionKey {
  return {
    electionId: new Uint8Array(),
    proofs: [],
    newKey: new Uint8Array(),
    weight: "",
  };
}

export const RegisterElectionKey = {
  encode(
    message: RegisterElectionKey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    for (const v of message.proofs) {
      Proof.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.newKey.length !== 0) {
      writer.uint32(26).bytes(message.newKey);
    }
    if (message.weight !== "") {
      writer.uint32(34).string(message.weight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegisterElectionKey {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterElectionKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        case 2:
          message.proofs.push(Proof.decode(reader, reader.uint32()));
          break;
        case 3:
          message.newKey = reader.bytes();
          break;
        case 4:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterElectionKey {
    return {
      electionId: isSet(object.electionId)
        ? bytesFromBase64(object.electionId)
        : new Uint8Array(),
      proofs: Array.isArray(object?.proofs)
        ? object.proofs.map((e: any) => Proof.fromJSON(e))
        : [],
      newKey: isSet(object.newKey)
        ? bytesFromBase64(object.newKey)
        : new Uint8Array(),
      weight: isSet(object.weight) ? String(object.weight) : "",
    };
  },

  toJSON(message: RegisterElectionKey): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    if (message.proofs) {
      obj.proofs = message.proofs.map((e) => (e ? Proof.toJSON(e) : undefined));
    } else {
      obj.proofs = [];
    }
    message.newKey !== undefined &&
      (obj.newKey = base64FromBytes(
        message.newKey !== undefined ? message.newKey : new Uint8Array()
      ));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterElectionKey>, I>>(
    object: I
  ): RegisterElectionKey {
    const message = createBaseRegisterElectionKey();
    message.electionId = object.electionId ?? new Uint8Array();
    message.proofs = object.proofs?.map((e) => Proof.fromPartial(e)) || [];
    message.newKey = object.newKey ?? new Uint8Array();
    message.weight = object.weight ?? "";
    return message;
  },
};

function createBaseSubmitBallot(): SubmitBallot {
  return { ballot: undefined };
}

export const SubmitBallot = {
  encode(message: SubmitBallot, writer: Writer = Writer.create()): Writer {
    if (message.ballot !== undefined) {
      Ballot.encode(message.ballot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SubmitBallot {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitBallot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ballot = Ballot.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitBallot {
    return {
      ballot: isSet(object.ballot) ? Ballot.fromJSON(object.ballot) : undefined,
    };
  },

  toJSON(message: SubmitBallot): unknown {
    const obj: any = {};
    message.ballot !== undefined &&
      (obj.ballot = message.ballot ? Ballot.toJSON(message.ballot) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitBallot>, I>>(
    object: I
  ): SubmitBallot {
    const message = createBaseSubmitBallot();
    message.ballot =
      object.ballot !== undefined && object.ballot !== null
        ? Ballot.fromPartial(object.ballot)
        : undefined;
    return message;
  },
};

function createBaseSetElectionStatus(): SetElectionStatus {
  return { electionId: new Uint8Array(), newStatus: 0 };
}

export const SetElectionStatus = {
  encode(message: SetElectionStatus, writer: Writer = Writer.create()): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    if (message.newStatus !== 0) {
      writer.uint32(16).int32(message.newStatus);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetElectionStatus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetElectionStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        case 2:
          message.newStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetElectionStatus {
    return {
      electionId: isSet(object.electionId)
        ? bytesFromBase64(object.electionId)
        : new Uint8Array(),
      newStatus: isSet(object.newStatus)
        ? proposalStatusFromJSON(object.newStatus)
        : 0,
    };
  },

  toJSON(message: SetElectionStatus): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    message.newStatus !== undefined &&
      (obj.newStatus = proposalStatusToJSON(message.newStatus));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetElectionStatus>, I>>(
    object: I
  ): SetElectionStatus {
    const message = createBaseSetElectionStatus();
    message.electionId = object.electionId ?? new Uint8Array();
    message.newStatus = object.newStatus ?? 0;
    return message;
  },
};

function createBaseSetProposalStatus(): SetProposalStatus {
  return { electionId: new Uint8Array(), entries: [] };
}

export const SetProposalStatus = {
  encode(message: SetProposalStatus, writer: Writer = Writer.create()): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    for (const v of message.entries) {
      SetProposalStatus_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetProposalStatus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetProposalStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        case 2:
          message.entries.push(
            SetProposalStatus_Entry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetProposalStatus {
    return {
      electionId: isSet(object.electionId)
        ? bytesFromBase64(object.electionId)
        : new Uint8Array(),
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => SetProposalStatus_Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SetProposalStatus): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? SetProposalStatus_Entry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetProposalStatus>, I>>(
    object: I
  ): SetProposalStatus {
    const message = createBaseSetProposalStatus();
    message.electionId = object.electionId ?? new Uint8Array();
    message.entries =
      object.entries?.map((e) => SetProposalStatus_Entry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSetProposalStatus_Entry(): SetProposalStatus_Entry {
  return { proposalIndex: 0, newStatus: 0 };
}

export const SetProposalStatus_Entry = {
  encode(
    message: SetProposalStatus_Entry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposalIndex !== 0) {
      writer.uint32(16).int32(message.proposalIndex);
    }
    if (message.newStatus !== 0) {
      writer.uint32(24).int32(message.newStatus);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetProposalStatus_Entry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetProposalStatus_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.proposalIndex = reader.int32();
          break;
        case 3:
          message.newStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetProposalStatus_Entry {
    return {
      proposalIndex: isSet(object.proposalIndex)
        ? Number(object.proposalIndex)
        : 0,
      newStatus: isSet(object.newStatus)
        ? proposalStatusFromJSON(object.newStatus)
        : 0,
    };
  },

  toJSON(message: SetProposalStatus_Entry): unknown {
    const obj: any = {};
    message.proposalIndex !== undefined &&
      (obj.proposalIndex = Math.round(message.proposalIndex));
    message.newStatus !== undefined &&
      (obj.newStatus = proposalStatusToJSON(message.newStatus));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetProposalStatus_Entry>, I>>(
    object: I
  ): SetProposalStatus_Entry {
    const message = createBaseSetProposalStatus_Entry();
    message.proposalIndex = object.proposalIndex ?? 0;
    message.newStatus = object.newStatus ?? 0;
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
