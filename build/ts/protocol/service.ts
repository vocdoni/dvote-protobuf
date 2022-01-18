/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import {
  CensusType,
  ProposalStatus,
  proposalStatusFromJSON,
  proposalStatusToJSON,
  censusTypeFromJSON,
  censusTypeToJSON,
} from "../protocol/enums";
import { Election } from "../protocol/election";
import { Organization } from "../protocol/organization";
import { Ballot } from "../protocol/ballot";
import { Results } from "../protocol/results";
import { Census, Proof } from "../protocol/census";

export const protobufPackage = "dvote.types.v2";

/** Request */
export interface GetElection {
  electionId: Uint8Array;
}

/** Response */
export interface GetElectionResponse {
  organizationId: Uint8Array;
  /** The originally defined params */
  parameters: Election | undefined;
  /** The status of each individual proposal */
  statuses: ProposalStatus[];
  /** How many ballots each proposal has */
  ballotCounts: number[];
}

/** Request */
export interface GetElectionList {
  /** Used for pagination */
  fromIndex: number;
  organizationId?: Uint8Array | undefined;
  tokenAddress?: Uint8Array | undefined;
  /** Some of its proposals in Ready, paused, ended, results */
  status?: ProposalStatus | undefined;
}

/** Response */
export interface GetElectionListResponse {
  electionIds: Uint8Array[];
}

/** Request */
export interface GetOrganization {
  organizationId: Uint8Array;
}

/** Response */
export interface GetOrganizationResponse {
  organization: Organization | undefined;
}

/** Request */
export interface GetBallot {
  nullifier: Uint8Array;
}

/** Response */
export interface GetBallotResponse {
  ballot: Ballot | undefined;
}

/** Request */
export interface GetElectionBallots {
  electionId: Uint8Array;
  /** Used to iterate the different envelopes by chunks */
  fromIndex: number;
}

/** Response */
export interface GetElectionBallotsResponse {
  ballots: Ballot[];
}

/** Request */
export interface GetElectionKeys {
  electionId: Uint8Array;
}

/** Response */
export interface GetElectionKeysResponse {
  encryptionPublicKeys: GetElectionKeysResponse_KeyEntry[];
  encryptionPrivateKeys: GetElectionKeysResponse_KeyEntry[];
}

export interface GetElectionKeysResponse_KeyEntry {
  index: number;
  key: Uint8Array;
}

/** Request */
export interface GetElectionCircuitInfo {
  electionId: Uint8Array;
}

/** Response */
export interface GetElectionCircuitInfoResponse {
  /** Circuit index */
  index: number;
  /** The prefix of the URI to fetch the artifacts from */
  baseUri: string;
  /** Relative path where the circuit is hosted */
  circuitPath: string;
  /** Maximum census size supported by the circuit */
  maxSize: number;
  witnessHash: Uint8Array;
  zKeyHash: Uint8Array;
  vKeyHash: Uint8Array;
}

/** Request */
export interface GetElectionResults {
  electionId: Uint8Array;
}

/** Response */
export interface GetElectionResultsResponse {
  results: Results | undefined;
}

/** Request */
export interface GetElectionResultsWeight {
  electionId: Uint8Array;
}

/** Response */
export interface GetElectionResultsWeightResponse {
  /** The total amount of vote weight that has been used on each proposal */
  weights: string[];
}

/** Request */
export interface NewCensus {
  censusSalt: Uint8Array;
  managerPublicKeys: Uint8Array[];
  censusType: CensusType;
}

/** Response */
export interface NewCensusResponse {
  censusId: string;
  censusRoot: Uint8Array;
}

/** Request */
export interface AddCensusKeys {
  censusId: string;
  digested: boolean;
  entries: AddCensusKeys_CensusEntry[];
}

export interface AddCensusKeys_CensusEntry {
  key: Uint8Array;
  value: Uint8Array;
}

/** Response */
export interface AddCensusKeysResponse {
  censusRoot: Uint8Array;
  keysAdded: number;
  keysSkipped: number;
}

/** Request */
export interface GetCensusRoot {
  censusId: string;
}

/** Response */
export interface GetCensusRootResponse {
  censusRoot: Uint8Array;
}

/** Request */
export interface GetCensusSize {
  censusId: string;
}

/** Response */
export interface GetCensusSizeResponse {
  size: number;
}

/** Request */
export interface PublishCensus {
  censusId: string;
}

/** Response */
export interface PublishCensusResponse {
  ipfsUri: string;
}

/** Request */
export interface GetCensusProof {
  /**
   * Defines the kind of census proof to receive back
   * Mostly:  CensusArbo, StorageProofErc20
   */
  census: Census | undefined;
  /** bytes value = 3; */
  key: Uint8Array;
}

/** Response */
export interface GetCensusProofResponse {
  proof: Proof | undefined;
}

/** Request */
export interface DumpCensus {
  censusId: string;
}

/** Response */
export interface DumpCensusResponse {
  body: Uint8Array;
}

/** Request */
export interface PinFile {
  body: Uint8Array;
  retentionDays: number;
}

/** Response */
export interface PinFileResponse {
  /** The URI at which the file can be addressed */
  ipfsUri: string;
}

/** Request */
export interface FetchFile {
  /** The URI at which the file can be addressed */
  ipfsUri: string;
}

/** Response */
export interface FetchFileResponse {
  body: Uint8Array;
}

/** Request */
export interface GetBlockStatus {}

/** Response */
export interface GetBlockStatusResponse {
  /** The current block height */
  number: number;
  /** The UNIX timestamp at which the block was mined */
  blockTimestamp: number;
  /** The average block times (in milliseconds) during the last minute, 10m, 1h, 6h and 24h */
  blockTimes: number[];
}

/** Request */
export interface GetBlockCount {}

/** Response */
export interface GetBlockCountResponse {
  /** The number of the last mined block */
  number: number;
}

/** Request */
export interface EstimateElectionPrice {}

/** Response */
export interface EstimateElectionPriceResponse {}

/** Request */
export interface GetTransaction {
  txHash: Uint8Array;
}

/** Response */
export interface GetTransactionResponse {
  /** The bytes of the {Transaction} model */
  body: Uint8Array;
}

/** Request: Get the bytes of the {Mesage} model, originally containing the signed {Transaction} */
export interface GetRawTransactionMessage {
  txHash: Uint8Array;
}

/** Response */
export interface GetRawTransactionMessageResponse {
  /** The bytes of the {Mesage} model originally containing the transaction */
  body: Uint8Array;
}

/** Request */
export interface WaitTransaction {
  txHash: Uint8Array;
}

/** Response */
export interface WaitTransactionResponse {
  /** Returns after waiting for 15 seconds, or as soon as the transaction is mined */
  mined: boolean;
}

function createBaseGetElection(): GetElection {
  return { electionId: new Uint8Array() };
}

export const GetElection = {
  encode(message: GetElection, writer: Writer = Writer.create()): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetElection {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElection {
    return {
      electionId: isSet(object.electionId)
        ? bytesFromBase64(object.electionId)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetElection): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElection>, I>>(
    object: I
  ): GetElection {
    const message = createBaseGetElection();
    message.electionId = object.electionId ?? new Uint8Array();
    return message;
  },
};

function createBaseGetElectionResponse(): GetElectionResponse {
  return {
    organizationId: new Uint8Array(),
    parameters: undefined,
    statuses: [],
    ballotCounts: [],
  };
}

export const GetElectionResponse = {
  encode(
    message: GetElectionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.organizationId.length !== 0) {
      writer.uint32(10).bytes(message.organizationId);
    }
    if (message.parameters !== undefined) {
      Election.encode(message.parameters, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.statuses) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.ballotCounts) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetElectionResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizationId = reader.bytes();
          break;
        case 2:
          message.parameters = Election.decode(reader, reader.uint32());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.statuses.push(reader.int32() as any);
            }
          } else {
            message.statuses.push(reader.int32() as any);
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ballotCounts.push(reader.int32());
            }
          } else {
            message.ballotCounts.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionResponse {
    return {
      organizationId: isSet(object.organizationId)
        ? bytesFromBase64(object.organizationId)
        : new Uint8Array(),
      parameters: isSet(object.parameters)
        ? Election.fromJSON(object.parameters)
        : undefined,
      statuses: Array.isArray(object?.statuses)
        ? object.statuses.map((e: any) => proposalStatusFromJSON(e))
        : [],
      ballotCounts: Array.isArray(object?.ballotCounts)
        ? object.ballotCounts.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: GetElectionResponse): unknown {
    const obj: any = {};
    message.organizationId !== undefined &&
      (obj.organizationId = base64FromBytes(
        message.organizationId !== undefined
          ? message.organizationId
          : new Uint8Array()
      ));
    message.parameters !== undefined &&
      (obj.parameters = message.parameters
        ? Election.toJSON(message.parameters)
        : undefined);
    if (message.statuses) {
      obj.statuses = message.statuses.map((e) => proposalStatusToJSON(e));
    } else {
      obj.statuses = [];
    }
    if (message.ballotCounts) {
      obj.ballotCounts = message.ballotCounts.map((e) => Math.round(e));
    } else {
      obj.ballotCounts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionResponse>, I>>(
    object: I
  ): GetElectionResponse {
    const message = createBaseGetElectionResponse();
    message.organizationId = object.organizationId ?? new Uint8Array();
    message.parameters =
      object.parameters !== undefined && object.parameters !== null
        ? Election.fromPartial(object.parameters)
        : undefined;
    message.statuses = object.statuses?.map((e) => e) || [];
    message.ballotCounts = object.ballotCounts?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetElectionList(): GetElectionList {
  return {
    fromIndex: 0,
    organizationId: undefined,
    tokenAddress: undefined,
    status: undefined,
  };
}

export const GetElectionList = {
  encode(message: GetElectionList, writer: Writer = Writer.create()): Writer {
    if (message.fromIndex !== 0) {
      writer.uint32(8).int32(message.fromIndex);
    }
    if (message.organizationId !== undefined) {
      writer.uint32(18).bytes(message.organizationId);
    }
    if (message.tokenAddress !== undefined) {
      writer.uint32(26).bytes(message.tokenAddress);
    }
    if (message.status !== undefined) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetElectionList {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromIndex = reader.int32();
          break;
        case 2:
          message.organizationId = reader.bytes();
          break;
        case 3:
          message.tokenAddress = reader.bytes();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionList {
    return {
      fromIndex: isSet(object.fromIndex) ? Number(object.fromIndex) : 0,
      organizationId: isSet(object.organizationId)
        ? bytesFromBase64(object.organizationId)
        : undefined,
      tokenAddress: isSet(object.tokenAddress)
        ? bytesFromBase64(object.tokenAddress)
        : undefined,
      status: isSet(object.status)
        ? proposalStatusFromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: GetElectionList): unknown {
    const obj: any = {};
    message.fromIndex !== undefined &&
      (obj.fromIndex = Math.round(message.fromIndex));
    message.organizationId !== undefined &&
      (obj.organizationId =
        message.organizationId !== undefined
          ? base64FromBytes(message.organizationId)
          : undefined);
    message.tokenAddress !== undefined &&
      (obj.tokenAddress =
        message.tokenAddress !== undefined
          ? base64FromBytes(message.tokenAddress)
          : undefined);
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? proposalStatusToJSON(message.status)
          : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionList>, I>>(
    object: I
  ): GetElectionList {
    const message = createBaseGetElectionList();
    message.fromIndex = object.fromIndex ?? 0;
    message.organizationId = object.organizationId ?? undefined;
    message.tokenAddress = object.tokenAddress ?? undefined;
    message.status = object.status ?? undefined;
    return message;
  },
};

function createBaseGetElectionListResponse(): GetElectionListResponse {
  return { electionIds: [] };
}

export const GetElectionListResponse = {
  encode(
    message: GetElectionListResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.electionIds) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetElectionListResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionIds.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionListResponse {
    return {
      electionIds: Array.isArray(object?.electionIds)
        ? object.electionIds.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: GetElectionListResponse): unknown {
    const obj: any = {};
    if (message.electionIds) {
      obj.electionIds = message.electionIds.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.electionIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionListResponse>, I>>(
    object: I
  ): GetElectionListResponse {
    const message = createBaseGetElectionListResponse();
    message.electionIds = object.electionIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetOrganization(): GetOrganization {
  return { organizationId: new Uint8Array() };
}

export const GetOrganization = {
  encode(message: GetOrganization, writer: Writer = Writer.create()): Writer {
    if (message.organizationId.length !== 0) {
      writer.uint32(10).bytes(message.organizationId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetOrganization {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrganization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizationId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOrganization {
    return {
      organizationId: isSet(object.organizationId)
        ? bytesFromBase64(object.organizationId)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetOrganization): unknown {
    const obj: any = {};
    message.organizationId !== undefined &&
      (obj.organizationId = base64FromBytes(
        message.organizationId !== undefined
          ? message.organizationId
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetOrganization>, I>>(
    object: I
  ): GetOrganization {
    const message = createBaseGetOrganization();
    message.organizationId = object.organizationId ?? new Uint8Array();
    return message;
  },
};

function createBaseGetOrganizationResponse(): GetOrganizationResponse {
  return { organization: undefined };
}

export const GetOrganizationResponse = {
  encode(
    message: GetOrganizationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.organization !== undefined) {
      Organization.encode(
        message.organization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetOrganizationResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrganizationResponse();
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

  fromJSON(object: any): GetOrganizationResponse {
    return {
      organization: isSet(object.organization)
        ? Organization.fromJSON(object.organization)
        : undefined,
    };
  },

  toJSON(message: GetOrganizationResponse): unknown {
    const obj: any = {};
    message.organization !== undefined &&
      (obj.organization = message.organization
        ? Organization.toJSON(message.organization)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetOrganizationResponse>, I>>(
    object: I
  ): GetOrganizationResponse {
    const message = createBaseGetOrganizationResponse();
    message.organization =
      object.organization !== undefined && object.organization !== null
        ? Organization.fromPartial(object.organization)
        : undefined;
    return message;
  },
};

function createBaseGetBallot(): GetBallot {
  return { nullifier: new Uint8Array() };
}

export const GetBallot = {
  encode(message: GetBallot, writer: Writer = Writer.create()): Writer {
    if (message.nullifier.length !== 0) {
      writer.uint32(10).bytes(message.nullifier);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetBallot {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBallot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nullifier = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBallot {
    return {
      nullifier: isSet(object.nullifier)
        ? bytesFromBase64(object.nullifier)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetBallot): unknown {
    const obj: any = {};
    message.nullifier !== undefined &&
      (obj.nullifier = base64FromBytes(
        message.nullifier !== undefined ? message.nullifier : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBallot>, I>>(
    object: I
  ): GetBallot {
    const message = createBaseGetBallot();
    message.nullifier = object.nullifier ?? new Uint8Array();
    return message;
  },
};

function createBaseGetBallotResponse(): GetBallotResponse {
  return { ballot: undefined };
}

export const GetBallotResponse = {
  encode(message: GetBallotResponse, writer: Writer = Writer.create()): Writer {
    if (message.ballot !== undefined) {
      Ballot.encode(message.ballot, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetBallotResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBallotResponse();
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

  fromJSON(object: any): GetBallotResponse {
    return {
      ballot: isSet(object.ballot) ? Ballot.fromJSON(object.ballot) : undefined,
    };
  },

  toJSON(message: GetBallotResponse): unknown {
    const obj: any = {};
    message.ballot !== undefined &&
      (obj.ballot = message.ballot ? Ballot.toJSON(message.ballot) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBallotResponse>, I>>(
    object: I
  ): GetBallotResponse {
    const message = createBaseGetBallotResponse();
    message.ballot =
      object.ballot !== undefined && object.ballot !== null
        ? Ballot.fromPartial(object.ballot)
        : undefined;
    return message;
  },
};

function createBaseGetElectionBallots(): GetElectionBallots {
  return { electionId: new Uint8Array(), fromIndex: 0 };
}

export const GetElectionBallots = {
  encode(
    message: GetElectionBallots,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    if (message.fromIndex !== 0) {
      writer.uint32(16).int32(message.fromIndex);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetElectionBallots {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionBallots();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        case 2:
          message.fromIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionBallots {
    return {
      electionId: isSet(object.electionId)
        ? bytesFromBase64(object.electionId)
        : new Uint8Array(),
      fromIndex: isSet(object.fromIndex) ? Number(object.fromIndex) : 0,
    };
  },

  toJSON(message: GetElectionBallots): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    message.fromIndex !== undefined &&
      (obj.fromIndex = Math.round(message.fromIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionBallots>, I>>(
    object: I
  ): GetElectionBallots {
    const message = createBaseGetElectionBallots();
    message.electionId = object.electionId ?? new Uint8Array();
    message.fromIndex = object.fromIndex ?? 0;
    return message;
  },
};

function createBaseGetElectionBallotsResponse(): GetElectionBallotsResponse {
  return { ballots: [] };
}

export const GetElectionBallotsResponse = {
  encode(
    message: GetElectionBallotsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.ballots) {
      Ballot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetElectionBallotsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionBallotsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ballots.push(Ballot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionBallotsResponse {
    return {
      ballots: Array.isArray(object?.ballots)
        ? object.ballots.map((e: any) => Ballot.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetElectionBallotsResponse): unknown {
    const obj: any = {};
    if (message.ballots) {
      obj.ballots = message.ballots.map((e) =>
        e ? Ballot.toJSON(e) : undefined
      );
    } else {
      obj.ballots = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionBallotsResponse>, I>>(
    object: I
  ): GetElectionBallotsResponse {
    const message = createBaseGetElectionBallotsResponse();
    message.ballots = object.ballots?.map((e) => Ballot.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetElectionKeys(): GetElectionKeys {
  return { electionId: new Uint8Array() };
}

export const GetElectionKeys = {
  encode(message: GetElectionKeys, writer: Writer = Writer.create()): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetElectionKeys {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionKeys {
    return {
      electionId: isSet(object.electionId)
        ? bytesFromBase64(object.electionId)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetElectionKeys): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionKeys>, I>>(
    object: I
  ): GetElectionKeys {
    const message = createBaseGetElectionKeys();
    message.electionId = object.electionId ?? new Uint8Array();
    return message;
  },
};

function createBaseGetElectionKeysResponse(): GetElectionKeysResponse {
  return { encryptionPublicKeys: [], encryptionPrivateKeys: [] };
}

export const GetElectionKeysResponse = {
  encode(
    message: GetElectionKeysResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.encryptionPublicKeys) {
      GetElectionKeysResponse_KeyEntry.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.encryptionPrivateKeys) {
      GetElectionKeysResponse_KeyEntry.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetElectionKeysResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encryptionPublicKeys.push(
            GetElectionKeysResponse_KeyEntry.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.encryptionPrivateKeys.push(
            GetElectionKeysResponse_KeyEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionKeysResponse {
    return {
      encryptionPublicKeys: Array.isArray(object?.encryptionPublicKeys)
        ? object.encryptionPublicKeys.map((e: any) =>
            GetElectionKeysResponse_KeyEntry.fromJSON(e)
          )
        : [],
      encryptionPrivateKeys: Array.isArray(object?.encryptionPrivateKeys)
        ? object.encryptionPrivateKeys.map((e: any) =>
            GetElectionKeysResponse_KeyEntry.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GetElectionKeysResponse): unknown {
    const obj: any = {};
    if (message.encryptionPublicKeys) {
      obj.encryptionPublicKeys = message.encryptionPublicKeys.map((e) =>
        e ? GetElectionKeysResponse_KeyEntry.toJSON(e) : undefined
      );
    } else {
      obj.encryptionPublicKeys = [];
    }
    if (message.encryptionPrivateKeys) {
      obj.encryptionPrivateKeys = message.encryptionPrivateKeys.map((e) =>
        e ? GetElectionKeysResponse_KeyEntry.toJSON(e) : undefined
      );
    } else {
      obj.encryptionPrivateKeys = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionKeysResponse>, I>>(
    object: I
  ): GetElectionKeysResponse {
    const message = createBaseGetElectionKeysResponse();
    message.encryptionPublicKeys =
      object.encryptionPublicKeys?.map((e) =>
        GetElectionKeysResponse_KeyEntry.fromPartial(e)
      ) || [];
    message.encryptionPrivateKeys =
      object.encryptionPrivateKeys?.map((e) =>
        GetElectionKeysResponse_KeyEntry.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseGetElectionKeysResponse_KeyEntry(): GetElectionKeysResponse_KeyEntry {
  return { index: 0, key: new Uint8Array() };
}

export const GetElectionKeysResponse_KeyEntry = {
  encode(
    message: GetElectionKeysResponse_KeyEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== 0) {
      writer.uint32(8).int32(message.index);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetElectionKeysResponse_KeyEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionKeysResponse_KeyEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int32();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionKeysResponse_KeyEntry {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
    };
  },

  toJSON(message: GetElectionKeysResponse_KeyEntry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetElectionKeysResponse_KeyEntry>, I>
  >(object: I): GetElectionKeysResponse_KeyEntry {
    const message = createBaseGetElectionKeysResponse_KeyEntry();
    message.index = object.index ?? 0;
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

function createBaseGetElectionCircuitInfo(): GetElectionCircuitInfo {
  return { electionId: new Uint8Array() };
}

export const GetElectionCircuitInfo = {
  encode(
    message: GetElectionCircuitInfo,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetElectionCircuitInfo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionCircuitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionCircuitInfo {
    return {
      electionId: isSet(object.electionId)
        ? bytesFromBase64(object.electionId)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetElectionCircuitInfo): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionCircuitInfo>, I>>(
    object: I
  ): GetElectionCircuitInfo {
    const message = createBaseGetElectionCircuitInfo();
    message.electionId = object.electionId ?? new Uint8Array();
    return message;
  },
};

function createBaseGetElectionCircuitInfoResponse(): GetElectionCircuitInfoResponse {
  return {
    index: 0,
    baseUri: "",
    circuitPath: "",
    maxSize: 0,
    witnessHash: new Uint8Array(),
    zKeyHash: new Uint8Array(),
    vKeyHash: new Uint8Array(),
  };
}

export const GetElectionCircuitInfoResponse = {
  encode(
    message: GetElectionCircuitInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== 0) {
      writer.uint32(8).int32(message.index);
    }
    if (message.baseUri !== "") {
      writer.uint32(18).string(message.baseUri);
    }
    if (message.circuitPath !== "") {
      writer.uint32(26).string(message.circuitPath);
    }
    if (message.maxSize !== 0) {
      writer.uint32(32).int32(message.maxSize);
    }
    if (message.witnessHash.length !== 0) {
      writer.uint32(42).bytes(message.witnessHash);
    }
    if (message.zKeyHash.length !== 0) {
      writer.uint32(50).bytes(message.zKeyHash);
    }
    if (message.vKeyHash.length !== 0) {
      writer.uint32(58).bytes(message.vKeyHash);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetElectionCircuitInfoResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionCircuitInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int32();
          break;
        case 2:
          message.baseUri = reader.string();
          break;
        case 3:
          message.circuitPath = reader.string();
          break;
        case 4:
          message.maxSize = reader.int32();
          break;
        case 5:
          message.witnessHash = reader.bytes();
          break;
        case 6:
          message.zKeyHash = reader.bytes();
          break;
        case 7:
          message.vKeyHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionCircuitInfoResponse {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      baseUri: isSet(object.baseUri) ? String(object.baseUri) : "",
      circuitPath: isSet(object.circuitPath) ? String(object.circuitPath) : "",
      maxSize: isSet(object.maxSize) ? Number(object.maxSize) : 0,
      witnessHash: isSet(object.witnessHash)
        ? bytesFromBase64(object.witnessHash)
        : new Uint8Array(),
      zKeyHash: isSet(object.zKeyHash)
        ? bytesFromBase64(object.zKeyHash)
        : new Uint8Array(),
      vKeyHash: isSet(object.vKeyHash)
        ? bytesFromBase64(object.vKeyHash)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetElectionCircuitInfoResponse): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.baseUri !== undefined && (obj.baseUri = message.baseUri);
    message.circuitPath !== undefined &&
      (obj.circuitPath = message.circuitPath);
    message.maxSize !== undefined &&
      (obj.maxSize = Math.round(message.maxSize));
    message.witnessHash !== undefined &&
      (obj.witnessHash = base64FromBytes(
        message.witnessHash !== undefined
          ? message.witnessHash
          : new Uint8Array()
      ));
    message.zKeyHash !== undefined &&
      (obj.zKeyHash = base64FromBytes(
        message.zKeyHash !== undefined ? message.zKeyHash : new Uint8Array()
      ));
    message.vKeyHash !== undefined &&
      (obj.vKeyHash = base64FromBytes(
        message.vKeyHash !== undefined ? message.vKeyHash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionCircuitInfoResponse>, I>>(
    object: I
  ): GetElectionCircuitInfoResponse {
    const message = createBaseGetElectionCircuitInfoResponse();
    message.index = object.index ?? 0;
    message.baseUri = object.baseUri ?? "";
    message.circuitPath = object.circuitPath ?? "";
    message.maxSize = object.maxSize ?? 0;
    message.witnessHash = object.witnessHash ?? new Uint8Array();
    message.zKeyHash = object.zKeyHash ?? new Uint8Array();
    message.vKeyHash = object.vKeyHash ?? new Uint8Array();
    return message;
  },
};

function createBaseGetElectionResults(): GetElectionResults {
  return { electionId: new Uint8Array() };
}

export const GetElectionResults = {
  encode(
    message: GetElectionResults,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetElectionResults {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionResults();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionResults {
    return {
      electionId: isSet(object.electionId)
        ? bytesFromBase64(object.electionId)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetElectionResults): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionResults>, I>>(
    object: I
  ): GetElectionResults {
    const message = createBaseGetElectionResults();
    message.electionId = object.electionId ?? new Uint8Array();
    return message;
  },
};

function createBaseGetElectionResultsResponse(): GetElectionResultsResponse {
  return { results: undefined };
}

export const GetElectionResultsResponse = {
  encode(
    message: GetElectionResultsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.results !== undefined) {
      Results.encode(message.results, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetElectionResultsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionResultsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results = Results.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionResultsResponse {
    return {
      results: isSet(object.results)
        ? Results.fromJSON(object.results)
        : undefined,
    };
  },

  toJSON(message: GetElectionResultsResponse): unknown {
    const obj: any = {};
    message.results !== undefined &&
      (obj.results = message.results
        ? Results.toJSON(message.results)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionResultsResponse>, I>>(
    object: I
  ): GetElectionResultsResponse {
    const message = createBaseGetElectionResultsResponse();
    message.results =
      object.results !== undefined && object.results !== null
        ? Results.fromPartial(object.results)
        : undefined;
    return message;
  },
};

function createBaseGetElectionResultsWeight(): GetElectionResultsWeight {
  return { electionId: new Uint8Array() };
}

export const GetElectionResultsWeight = {
  encode(
    message: GetElectionResultsWeight,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetElectionResultsWeight {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionResultsWeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionResultsWeight {
    return {
      electionId: isSet(object.electionId)
        ? bytesFromBase64(object.electionId)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetElectionResultsWeight): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionResultsWeight>, I>>(
    object: I
  ): GetElectionResultsWeight {
    const message = createBaseGetElectionResultsWeight();
    message.electionId = object.electionId ?? new Uint8Array();
    return message;
  },
};

function createBaseGetElectionResultsWeightResponse(): GetElectionResultsWeightResponse {
  return { weights: [] };
}

export const GetElectionResultsWeightResponse = {
  encode(
    message: GetElectionResultsWeightResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.weights) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetElectionResultsWeightResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetElectionResultsWeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weights.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionResultsWeightResponse {
    return {
      weights: Array.isArray(object?.weights)
        ? object.weights.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GetElectionResultsWeightResponse): unknown {
    const obj: any = {};
    if (message.weights) {
      obj.weights = message.weights.map((e) => e);
    } else {
      obj.weights = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetElectionResultsWeightResponse>, I>
  >(object: I): GetElectionResultsWeightResponse {
    const message = createBaseGetElectionResultsWeightResponse();
    message.weights = object.weights?.map((e) => e) || [];
    return message;
  },
};

function createBaseNewCensus(): NewCensus {
  return { censusSalt: new Uint8Array(), managerPublicKeys: [], censusType: 0 };
}

export const NewCensus = {
  encode(message: NewCensus, writer: Writer = Writer.create()): Writer {
    if (message.censusSalt.length !== 0) {
      writer.uint32(10).bytes(message.censusSalt);
    }
    for (const v of message.managerPublicKeys) {
      writer.uint32(18).bytes(v!);
    }
    if (message.censusType !== 0) {
      writer.uint32(24).int32(message.censusType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NewCensus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewCensus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.censusSalt = reader.bytes();
          break;
        case 2:
          message.managerPublicKeys.push(reader.bytes());
          break;
        case 3:
          message.censusType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewCensus {
    return {
      censusSalt: isSet(object.censusSalt)
        ? bytesFromBase64(object.censusSalt)
        : new Uint8Array(),
      managerPublicKeys: Array.isArray(object?.managerPublicKeys)
        ? object.managerPublicKeys.map((e: any) => bytesFromBase64(e))
        : [],
      censusType: isSet(object.censusType)
        ? censusTypeFromJSON(object.censusType)
        : 0,
    };
  },

  toJSON(message: NewCensus): unknown {
    const obj: any = {};
    message.censusSalt !== undefined &&
      (obj.censusSalt = base64FromBytes(
        message.censusSalt !== undefined ? message.censusSalt : new Uint8Array()
      ));
    if (message.managerPublicKeys) {
      obj.managerPublicKeys = message.managerPublicKeys.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.managerPublicKeys = [];
    }
    message.censusType !== undefined &&
      (obj.censusType = censusTypeToJSON(message.censusType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewCensus>, I>>(
    object: I
  ): NewCensus {
    const message = createBaseNewCensus();
    message.censusSalt = object.censusSalt ?? new Uint8Array();
    message.managerPublicKeys = object.managerPublicKeys?.map((e) => e) || [];
    message.censusType = object.censusType ?? 0;
    return message;
  },
};

function createBaseNewCensusResponse(): NewCensusResponse {
  return { censusId: "", censusRoot: new Uint8Array() };
}

export const NewCensusResponse = {
  encode(message: NewCensusResponse, writer: Writer = Writer.create()): Writer {
    if (message.censusId !== "") {
      writer.uint32(10).string(message.censusId);
    }
    if (message.censusRoot.length !== 0) {
      writer.uint32(18).bytes(message.censusRoot);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NewCensusResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewCensusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.censusId = reader.string();
          break;
        case 2:
          message.censusRoot = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewCensusResponse {
    return {
      censusId: isSet(object.censusId) ? String(object.censusId) : "",
      censusRoot: isSet(object.censusRoot)
        ? bytesFromBase64(object.censusRoot)
        : new Uint8Array(),
    };
  },

  toJSON(message: NewCensusResponse): unknown {
    const obj: any = {};
    message.censusId !== undefined && (obj.censusId = message.censusId);
    message.censusRoot !== undefined &&
      (obj.censusRoot = base64FromBytes(
        message.censusRoot !== undefined ? message.censusRoot : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewCensusResponse>, I>>(
    object: I
  ): NewCensusResponse {
    const message = createBaseNewCensusResponse();
    message.censusId = object.censusId ?? "";
    message.censusRoot = object.censusRoot ?? new Uint8Array();
    return message;
  },
};

function createBaseAddCensusKeys(): AddCensusKeys {
  return { censusId: "", digested: false, entries: [] };
}

export const AddCensusKeys = {
  encode(message: AddCensusKeys, writer: Writer = Writer.create()): Writer {
    if (message.censusId !== "") {
      writer.uint32(10).string(message.censusId);
    }
    if (message.digested === true) {
      writer.uint32(16).bool(message.digested);
    }
    for (const v of message.entries) {
      AddCensusKeys_CensusEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AddCensusKeys {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCensusKeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.censusId = reader.string();
          break;
        case 2:
          message.digested = reader.bool();
          break;
        case 3:
          message.entries.push(
            AddCensusKeys_CensusEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddCensusKeys {
    return {
      censusId: isSet(object.censusId) ? String(object.censusId) : "",
      digested: isSet(object.digested) ? Boolean(object.digested) : false,
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => AddCensusKeys_CensusEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AddCensusKeys): unknown {
    const obj: any = {};
    message.censusId !== undefined && (obj.censusId = message.censusId);
    message.digested !== undefined && (obj.digested = message.digested);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? AddCensusKeys_CensusEntry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCensusKeys>, I>>(
    object: I
  ): AddCensusKeys {
    const message = createBaseAddCensusKeys();
    message.censusId = object.censusId ?? "";
    message.digested = object.digested ?? false;
    message.entries =
      object.entries?.map((e) => AddCensusKeys_CensusEntry.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseAddCensusKeys_CensusEntry(): AddCensusKeys_CensusEntry {
  return { key: new Uint8Array(), value: new Uint8Array() };
}

export const AddCensusKeys_CensusEntry = {
  encode(
    message: AddCensusKeys_CensusEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AddCensusKeys_CensusEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCensusKeys_CensusEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddCensusKeys_CensusEntry {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
    };
  },

  toJSON(message: AddCensusKeys_CensusEntry): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCensusKeys_CensusEntry>, I>>(
    object: I
  ): AddCensusKeys_CensusEntry {
    const message = createBaseAddCensusKeys_CensusEntry();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseAddCensusKeysResponse(): AddCensusKeysResponse {
  return { censusRoot: new Uint8Array(), keysAdded: 0, keysSkipped: 0 };
}

export const AddCensusKeysResponse = {
  encode(
    message: AddCensusKeysResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.censusRoot.length !== 0) {
      writer.uint32(10).bytes(message.censusRoot);
    }
    if (message.keysAdded !== 0) {
      writer.uint32(16).int32(message.keysAdded);
    }
    if (message.keysSkipped !== 0) {
      writer.uint32(24).int32(message.keysSkipped);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AddCensusKeysResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCensusKeysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.censusRoot = reader.bytes();
          break;
        case 2:
          message.keysAdded = reader.int32();
          break;
        case 3:
          message.keysSkipped = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AddCensusKeysResponse {
    return {
      censusRoot: isSet(object.censusRoot)
        ? bytesFromBase64(object.censusRoot)
        : new Uint8Array(),
      keysAdded: isSet(object.keysAdded) ? Number(object.keysAdded) : 0,
      keysSkipped: isSet(object.keysSkipped) ? Number(object.keysSkipped) : 0,
    };
  },

  toJSON(message: AddCensusKeysResponse): unknown {
    const obj: any = {};
    message.censusRoot !== undefined &&
      (obj.censusRoot = base64FromBytes(
        message.censusRoot !== undefined ? message.censusRoot : new Uint8Array()
      ));
    message.keysAdded !== undefined &&
      (obj.keysAdded = Math.round(message.keysAdded));
    message.keysSkipped !== undefined &&
      (obj.keysSkipped = Math.round(message.keysSkipped));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCensusKeysResponse>, I>>(
    object: I
  ): AddCensusKeysResponse {
    const message = createBaseAddCensusKeysResponse();
    message.censusRoot = object.censusRoot ?? new Uint8Array();
    message.keysAdded = object.keysAdded ?? 0;
    message.keysSkipped = object.keysSkipped ?? 0;
    return message;
  },
};

function createBaseGetCensusRoot(): GetCensusRoot {
  return { censusId: "" };
}

export const GetCensusRoot = {
  encode(message: GetCensusRoot, writer: Writer = Writer.create()): Writer {
    if (message.censusId !== "") {
      writer.uint32(10).string(message.censusId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetCensusRoot {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCensusRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.censusId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCensusRoot {
    return {
      censusId: isSet(object.censusId) ? String(object.censusId) : "",
    };
  },

  toJSON(message: GetCensusRoot): unknown {
    const obj: any = {};
    message.censusId !== undefined && (obj.censusId = message.censusId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCensusRoot>, I>>(
    object: I
  ): GetCensusRoot {
    const message = createBaseGetCensusRoot();
    message.censusId = object.censusId ?? "";
    return message;
  },
};

function createBaseGetCensusRootResponse(): GetCensusRootResponse {
  return { censusRoot: new Uint8Array() };
}

export const GetCensusRootResponse = {
  encode(
    message: GetCensusRootResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.censusRoot.length !== 0) {
      writer.uint32(10).bytes(message.censusRoot);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetCensusRootResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCensusRootResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.censusRoot = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCensusRootResponse {
    return {
      censusRoot: isSet(object.censusRoot)
        ? bytesFromBase64(object.censusRoot)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetCensusRootResponse): unknown {
    const obj: any = {};
    message.censusRoot !== undefined &&
      (obj.censusRoot = base64FromBytes(
        message.censusRoot !== undefined ? message.censusRoot : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCensusRootResponse>, I>>(
    object: I
  ): GetCensusRootResponse {
    const message = createBaseGetCensusRootResponse();
    message.censusRoot = object.censusRoot ?? new Uint8Array();
    return message;
  },
};

function createBaseGetCensusSize(): GetCensusSize {
  return { censusId: "" };
}

export const GetCensusSize = {
  encode(message: GetCensusSize, writer: Writer = Writer.create()): Writer {
    if (message.censusId !== "") {
      writer.uint32(10).string(message.censusId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetCensusSize {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCensusSize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.censusId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCensusSize {
    return {
      censusId: isSet(object.censusId) ? String(object.censusId) : "",
    };
  },

  toJSON(message: GetCensusSize): unknown {
    const obj: any = {};
    message.censusId !== undefined && (obj.censusId = message.censusId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCensusSize>, I>>(
    object: I
  ): GetCensusSize {
    const message = createBaseGetCensusSize();
    message.censusId = object.censusId ?? "";
    return message;
  },
};

function createBaseGetCensusSizeResponse(): GetCensusSizeResponse {
  return { size: 0 };
}

export const GetCensusSizeResponse = {
  encode(
    message: GetCensusSizeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.size !== 0) {
      writer.uint32(8).int32(message.size);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetCensusSizeResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCensusSizeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.size = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCensusSizeResponse {
    return {
      size: isSet(object.size) ? Number(object.size) : 0,
    };
  },

  toJSON(message: GetCensusSizeResponse): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCensusSizeResponse>, I>>(
    object: I
  ): GetCensusSizeResponse {
    const message = createBaseGetCensusSizeResponse();
    message.size = object.size ?? 0;
    return message;
  },
};

function createBasePublishCensus(): PublishCensus {
  return { censusId: "" };
}

export const PublishCensus = {
  encode(message: PublishCensus, writer: Writer = Writer.create()): Writer {
    if (message.censusId !== "") {
      writer.uint32(10).string(message.censusId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PublishCensus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishCensus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.censusId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishCensus {
    return {
      censusId: isSet(object.censusId) ? String(object.censusId) : "",
    };
  },

  toJSON(message: PublishCensus): unknown {
    const obj: any = {};
    message.censusId !== undefined && (obj.censusId = message.censusId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublishCensus>, I>>(
    object: I
  ): PublishCensus {
    const message = createBasePublishCensus();
    message.censusId = object.censusId ?? "";
    return message;
  },
};

function createBasePublishCensusResponse(): PublishCensusResponse {
  return { ipfsUri: "" };
}

export const PublishCensusResponse = {
  encode(
    message: PublishCensusResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ipfsUri !== "") {
      writer.uint32(10).string(message.ipfsUri);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PublishCensusResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublishCensusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ipfsUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PublishCensusResponse {
    return {
      ipfsUri: isSet(object.ipfsUri) ? String(object.ipfsUri) : "",
    };
  },

  toJSON(message: PublishCensusResponse): unknown {
    const obj: any = {};
    message.ipfsUri !== undefined && (obj.ipfsUri = message.ipfsUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublishCensusResponse>, I>>(
    object: I
  ): PublishCensusResponse {
    const message = createBasePublishCensusResponse();
    message.ipfsUri = object.ipfsUri ?? "";
    return message;
  },
};

function createBaseGetCensusProof(): GetCensusProof {
  return { census: undefined, key: new Uint8Array() };
}

export const GetCensusProof = {
  encode(message: GetCensusProof, writer: Writer = Writer.create()): Writer {
    if (message.census !== undefined) {
      Census.encode(message.census, writer.uint32(10).fork()).ldelim();
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetCensusProof {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCensusProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.census = Census.decode(reader, reader.uint32());
          break;
        case 2:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCensusProof {
    return {
      census: isSet(object.census) ? Census.fromJSON(object.census) : undefined,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
    };
  },

  toJSON(message: GetCensusProof): unknown {
    const obj: any = {};
    message.census !== undefined &&
      (obj.census = message.census ? Census.toJSON(message.census) : undefined);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCensusProof>, I>>(
    object: I
  ): GetCensusProof {
    const message = createBaseGetCensusProof();
    message.census =
      object.census !== undefined && object.census !== null
        ? Census.fromPartial(object.census)
        : undefined;
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

function createBaseGetCensusProofResponse(): GetCensusProofResponse {
  return { proof: undefined };
}

export const GetCensusProofResponse = {
  encode(
    message: GetCensusProofResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetCensusProofResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCensusProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCensusProofResponse {
    return {
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
    };
  },

  toJSON(message: GetCensusProofResponse): unknown {
    const obj: any = {};
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCensusProofResponse>, I>>(
    object: I
  ): GetCensusProofResponse {
    const message = createBaseGetCensusProofResponse();
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? Proof.fromPartial(object.proof)
        : undefined;
    return message;
  },
};

function createBaseDumpCensus(): DumpCensus {
  return { censusId: "" };
}

export const DumpCensus = {
  encode(message: DumpCensus, writer: Writer = Writer.create()): Writer {
    if (message.censusId !== "") {
      writer.uint32(10).string(message.censusId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DumpCensus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDumpCensus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.censusId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DumpCensus {
    return {
      censusId: isSet(object.censusId) ? String(object.censusId) : "",
    };
  },

  toJSON(message: DumpCensus): unknown {
    const obj: any = {};
    message.censusId !== undefined && (obj.censusId = message.censusId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DumpCensus>, I>>(
    object: I
  ): DumpCensus {
    const message = createBaseDumpCensus();
    message.censusId = object.censusId ?? "";
    return message;
  },
};

function createBaseDumpCensusResponse(): DumpCensusResponse {
  return { body: new Uint8Array() };
}

export const DumpCensusResponse = {
  encode(
    message: DumpCensusResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.body.length !== 0) {
      writer.uint32(10).bytes(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): DumpCensusResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDumpCensusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DumpCensusResponse {
    return {
      body: isSet(object.body)
        ? bytesFromBase64(object.body)
        : new Uint8Array(),
    };
  },

  toJSON(message: DumpCensusResponse): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = base64FromBytes(
        message.body !== undefined ? message.body : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DumpCensusResponse>, I>>(
    object: I
  ): DumpCensusResponse {
    const message = createBaseDumpCensusResponse();
    message.body = object.body ?? new Uint8Array();
    return message;
  },
};

function createBasePinFile(): PinFile {
  return { body: new Uint8Array(), retentionDays: 0 };
}

export const PinFile = {
  encode(message: PinFile, writer: Writer = Writer.create()): Writer {
    if (message.body.length !== 0) {
      writer.uint32(10).bytes(message.body);
    }
    if (message.retentionDays !== 0) {
      writer.uint32(16).int32(message.retentionDays);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PinFile {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.bytes();
          break;
        case 2:
          message.retentionDays = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PinFile {
    return {
      body: isSet(object.body)
        ? bytesFromBase64(object.body)
        : new Uint8Array(),
      retentionDays: isSet(object.retentionDays)
        ? Number(object.retentionDays)
        : 0,
    };
  },

  toJSON(message: PinFile): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = base64FromBytes(
        message.body !== undefined ? message.body : new Uint8Array()
      ));
    message.retentionDays !== undefined &&
      (obj.retentionDays = Math.round(message.retentionDays));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PinFile>, I>>(object: I): PinFile {
    const message = createBasePinFile();
    message.body = object.body ?? new Uint8Array();
    message.retentionDays = object.retentionDays ?? 0;
    return message;
  },
};

function createBasePinFileResponse(): PinFileResponse {
  return { ipfsUri: "" };
}

export const PinFileResponse = {
  encode(message: PinFileResponse, writer: Writer = Writer.create()): Writer {
    if (message.ipfsUri !== "") {
      writer.uint32(10).string(message.ipfsUri);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PinFileResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ipfsUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PinFileResponse {
    return {
      ipfsUri: isSet(object.ipfsUri) ? String(object.ipfsUri) : "",
    };
  },

  toJSON(message: PinFileResponse): unknown {
    const obj: any = {};
    message.ipfsUri !== undefined && (obj.ipfsUri = message.ipfsUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PinFileResponse>, I>>(
    object: I
  ): PinFileResponse {
    const message = createBasePinFileResponse();
    message.ipfsUri = object.ipfsUri ?? "";
    return message;
  },
};

function createBaseFetchFile(): FetchFile {
  return { ipfsUri: "" };
}

export const FetchFile = {
  encode(message: FetchFile, writer: Writer = Writer.create()): Writer {
    if (message.ipfsUri !== "") {
      writer.uint32(10).string(message.ipfsUri);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FetchFile {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ipfsUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchFile {
    return {
      ipfsUri: isSet(object.ipfsUri) ? String(object.ipfsUri) : "",
    };
  },

  toJSON(message: FetchFile): unknown {
    const obj: any = {};
    message.ipfsUri !== undefined && (obj.ipfsUri = message.ipfsUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FetchFile>, I>>(
    object: I
  ): FetchFile {
    const message = createBaseFetchFile();
    message.ipfsUri = object.ipfsUri ?? "";
    return message;
  },
};

function createBaseFetchFileResponse(): FetchFileResponse {
  return { body: new Uint8Array() };
}

export const FetchFileResponse = {
  encode(message: FetchFileResponse, writer: Writer = Writer.create()): Writer {
    if (message.body.length !== 0) {
      writer.uint32(10).bytes(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FetchFileResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchFileResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FetchFileResponse {
    return {
      body: isSet(object.body)
        ? bytesFromBase64(object.body)
        : new Uint8Array(),
    };
  },

  toJSON(message: FetchFileResponse): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = base64FromBytes(
        message.body !== undefined ? message.body : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FetchFileResponse>, I>>(
    object: I
  ): FetchFileResponse {
    const message = createBaseFetchFileResponse();
    message.body = object.body ?? new Uint8Array();
    return message;
  },
};

function createBaseGetBlockStatus(): GetBlockStatus {
  return {};
}

export const GetBlockStatus = {
  encode(_: GetBlockStatus, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetBlockStatus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockStatus();
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

  fromJSON(_: any): GetBlockStatus {
    return {};
  },

  toJSON(_: GetBlockStatus): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlockStatus>, I>>(
    _: I
  ): GetBlockStatus {
    const message = createBaseGetBlockStatus();
    return message;
  },
};

function createBaseGetBlockStatusResponse(): GetBlockStatusResponse {
  return { number: 0, blockTimestamp: 0, blockTimes: [] };
}

export const GetBlockStatusResponse = {
  encode(
    message: GetBlockStatusResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.number !== 0) {
      writer.uint32(8).int32(message.number);
    }
    if (message.blockTimestamp !== 0) {
      writer.uint32(16).int32(message.blockTimestamp);
    }
    writer.uint32(26).fork();
    for (const v of message.blockTimes) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetBlockStatusResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.int32();
          break;
        case 2:
          message.blockTimestamp = reader.int32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.blockTimes.push(reader.int32());
            }
          } else {
            message.blockTimes.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockStatusResponse {
    return {
      number: isSet(object.number) ? Number(object.number) : 0,
      blockTimestamp: isSet(object.blockTimestamp)
        ? Number(object.blockTimestamp)
        : 0,
      blockTimes: Array.isArray(object?.blockTimes)
        ? object.blockTimes.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: GetBlockStatusResponse): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.blockTimestamp !== undefined &&
      (obj.blockTimestamp = Math.round(message.blockTimestamp));
    if (message.blockTimes) {
      obj.blockTimes = message.blockTimes.map((e) => Math.round(e));
    } else {
      obj.blockTimes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlockStatusResponse>, I>>(
    object: I
  ): GetBlockStatusResponse {
    const message = createBaseGetBlockStatusResponse();
    message.number = object.number ?? 0;
    message.blockTimestamp = object.blockTimestamp ?? 0;
    message.blockTimes = object.blockTimes?.map((e) => e) || [];
    return message;
  },
};

function createBaseGetBlockCount(): GetBlockCount {
  return {};
}

export const GetBlockCount = {
  encode(_: GetBlockCount, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetBlockCount {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockCount();
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

  fromJSON(_: any): GetBlockCount {
    return {};
  },

  toJSON(_: GetBlockCount): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlockCount>, I>>(
    _: I
  ): GetBlockCount {
    const message = createBaseGetBlockCount();
    return message;
  },
};

function createBaseGetBlockCountResponse(): GetBlockCountResponse {
  return { number: 0 };
}

export const GetBlockCountResponse = {
  encode(
    message: GetBlockCountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.number !== 0) {
      writer.uint32(8).int32(message.number);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetBlockCountResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBlockCountResponse {
    return {
      number: isSet(object.number) ? Number(object.number) : 0,
    };
  },

  toJSON(message: GetBlockCountResponse): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = Math.round(message.number));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlockCountResponse>, I>>(
    object: I
  ): GetBlockCountResponse {
    const message = createBaseGetBlockCountResponse();
    message.number = object.number ?? 0;
    return message;
  },
};

function createBaseEstimateElectionPrice(): EstimateElectionPrice {
  return {};
}

export const EstimateElectionPrice = {
  encode(_: EstimateElectionPrice, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EstimateElectionPrice {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateElectionPrice();
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

  fromJSON(_: any): EstimateElectionPrice {
    return {};
  },

  toJSON(_: EstimateElectionPrice): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateElectionPrice>, I>>(
    _: I
  ): EstimateElectionPrice {
    const message = createBaseEstimateElectionPrice();
    return message;
  },
};

function createBaseEstimateElectionPriceResponse(): EstimateElectionPriceResponse {
  return {};
}

export const EstimateElectionPriceResponse = {
  encode(
    _: EstimateElectionPriceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateElectionPriceResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimateElectionPriceResponse();
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

  fromJSON(_: any): EstimateElectionPriceResponse {
    return {};
  },

  toJSON(_: EstimateElectionPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateElectionPriceResponse>, I>>(
    _: I
  ): EstimateElectionPriceResponse {
    const message = createBaseEstimateElectionPriceResponse();
    return message;
  },
};

function createBaseGetTransaction(): GetTransaction {
  return { txHash: new Uint8Array() };
}

export const GetTransaction = {
  encode(message: GetTransaction, writer: Writer = Writer.create()): Writer {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetTransaction {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTransaction {
    return {
      txHash: isSet(object.txHash)
        ? bytesFromBase64(object.txHash)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetTransaction): unknown {
    const obj: any = {};
    message.txHash !== undefined &&
      (obj.txHash = base64FromBytes(
        message.txHash !== undefined ? message.txHash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTransaction>, I>>(
    object: I
  ): GetTransaction {
    const message = createBaseGetTransaction();
    message.txHash = object.txHash ?? new Uint8Array();
    return message;
  },
};

function createBaseGetTransactionResponse(): GetTransactionResponse {
  return { body: new Uint8Array() };
}

export const GetTransactionResponse = {
  encode(
    message: GetTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.body.length !== 0) {
      writer.uint32(10).bytes(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetTransactionResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTransactionResponse {
    return {
      body: isSet(object.body)
        ? bytesFromBase64(object.body)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetTransactionResponse): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = base64FromBytes(
        message.body !== undefined ? message.body : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetTransactionResponse>, I>>(
    object: I
  ): GetTransactionResponse {
    const message = createBaseGetTransactionResponse();
    message.body = object.body ?? new Uint8Array();
    return message;
  },
};

function createBaseGetRawTransactionMessage(): GetRawTransactionMessage {
  return { txHash: new Uint8Array() };
}

export const GetRawTransactionMessage = {
  encode(
    message: GetRawTransactionMessage,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetRawTransactionMessage {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRawTransactionMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRawTransactionMessage {
    return {
      txHash: isSet(object.txHash)
        ? bytesFromBase64(object.txHash)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetRawTransactionMessage): unknown {
    const obj: any = {};
    message.txHash !== undefined &&
      (obj.txHash = base64FromBytes(
        message.txHash !== undefined ? message.txHash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRawTransactionMessage>, I>>(
    object: I
  ): GetRawTransactionMessage {
    const message = createBaseGetRawTransactionMessage();
    message.txHash = object.txHash ?? new Uint8Array();
    return message;
  },
};

function createBaseGetRawTransactionMessageResponse(): GetRawTransactionMessageResponse {
  return { body: new Uint8Array() };
}

export const GetRawTransactionMessageResponse = {
  encode(
    message: GetRawTransactionMessageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.body.length !== 0) {
      writer.uint32(10).bytes(message.body);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetRawTransactionMessageResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRawTransactionMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRawTransactionMessageResponse {
    return {
      body: isSet(object.body)
        ? bytesFromBase64(object.body)
        : new Uint8Array(),
    };
  },

  toJSON(message: GetRawTransactionMessageResponse): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = base64FromBytes(
        message.body !== undefined ? message.body : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetRawTransactionMessageResponse>, I>
  >(object: I): GetRawTransactionMessageResponse {
    const message = createBaseGetRawTransactionMessageResponse();
    message.body = object.body ?? new Uint8Array();
    return message;
  },
};

function createBaseWaitTransaction(): WaitTransaction {
  return { txHash: new Uint8Array() };
}

export const WaitTransaction = {
  encode(message: WaitTransaction, writer: Writer = Writer.create()): Writer {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WaitTransaction {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWaitTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WaitTransaction {
    return {
      txHash: isSet(object.txHash)
        ? bytesFromBase64(object.txHash)
        : new Uint8Array(),
    };
  },

  toJSON(message: WaitTransaction): unknown {
    const obj: any = {};
    message.txHash !== undefined &&
      (obj.txHash = base64FromBytes(
        message.txHash !== undefined ? message.txHash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WaitTransaction>, I>>(
    object: I
  ): WaitTransaction {
    const message = createBaseWaitTransaction();
    message.txHash = object.txHash ?? new Uint8Array();
    return message;
  },
};

function createBaseWaitTransactionResponse(): WaitTransactionResponse {
  return { mined: false };
}

export const WaitTransactionResponse = {
  encode(
    message: WaitTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.mined === true) {
      writer.uint32(8).bool(message.mined);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WaitTransactionResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWaitTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mined = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WaitTransactionResponse {
    return {
      mined: isSet(object.mined) ? Boolean(object.mined) : false,
    };
  },

  toJSON(message: WaitTransactionResponse): unknown {
    const obj: any = {};
    message.mined !== undefined && (obj.mined = message.mined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WaitTransactionResponse>, I>>(
    object: I
  ): WaitTransactionResponse {
    const message = createBaseWaitTransactionResponse();
    message.mined = object.mined ?? false;
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
