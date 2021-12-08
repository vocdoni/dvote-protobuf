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

export interface ElectionRequest {
  electionId: Uint8Array;
  body?:
    | { $case: "getElection"; getElection: GetElection }
    | { $case: "getElectionList"; getElectionList: GetElectionList }
    | { $case: "getOrganization"; getOrganization: GetOrganization }
    | { $case: "getBallot"; getBallot: GetBallot }
    | { $case: "getElectionBallots"; getElectionBallots: GetElectionBallots }
    | { $case: "getElectionKeys"; getElectionKeys: GetElectionKeys }
    | {
        $case: "getElectionCircuitInfo";
        getElectionCircuitInfo: GetElectionCircuitInfo;
      }
    | { $case: "getElectionResults"; getElectionResults: GetElectionResults }
    | { $case: "getElectionWeight"; getElectionWeight: GetElectionWeight };
}

export interface CensusRequest {
  body?:
    | { $case: "newCensus"; newCensus: NewCensus }
    | { $case: "addCensusKeys"; addCensusKeys: AddCensusKeys }
    | { $case: "getCensusRoot"; getCensusRoot: GetCensusRoot }
    | { $case: "getCensusSize"; getCensusSize: GetCensusSize }
    | { $case: "publishCensus"; publishCensus: PublishCensus }
    | { $case: "getCensusProof"; getCensusProof: GetCensusProof }
    | { $case: "dumpCensus"; dumpCensus: DumpCensus };
}

export interface FileRequest {
  body?:
    | { $case: "pinFile"; pinFile: PinFile }
    | { $case: "fetchFile"; fetchFile: FetchFile };
}

export interface NetworkRequest {
  body?:
    | { $case: "getBlockStatus"; getBlockStatus: GetBlockStatus }
    | { $case: "getBlockCount"; getBlockCount: GetBlockCount }
    | {
        $case: "estimateElectionPrice";
        estimateElectionPrice: EstimateElectionPrice;
      };
}

export interface TransactionRequest {
  body?:
    | { $case: "getTx"; getTx: GetTransaction }
    | { $case: "waitTx"; waitTx: WaitTransaction };
}

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
  ballot: Ballot[];
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
  /** Whether the results are available and final */
  available: boolean;
}

/** Request */
export interface GetElectionWeight {
  electionId: Uint8Array;
}

/** Response */
export interface GetElectionWeightResponse {
  /** The total amount of vote weight that has been used */
  weight: string;
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
  /** The timestamp at which the block was mined */
  blockTimestamp: number;
  /** The average block times during the last minute, 10m, 1h, 6h and 24h */
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
  /** The bytes of the body encode a {Transaction} model */
  body: Uint8Array;
}

/** Request */
export interface WaitTransaction {
  txHash: Uint8Array;
}

/** Response */
export interface WaitTransactionResponse {
  /** Returns after waiting for 15 seconds */
  mined: boolean;
}

const baseElectionRequest: object = {};

export const ElectionRequest = {
  encode(message: ElectionRequest, writer: Writer = Writer.create()): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    if (message.body?.$case === "getElection") {
      GetElection.encode(
        message.body.getElection,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionList") {
      GetElectionList.encode(
        message.body.getElectionList,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getOrganization") {
      GetOrganization.encode(
        message.body.getOrganization,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getBallot") {
      GetBallot.encode(
        message.body.getBallot,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionBallots") {
      GetElectionBallots.encode(
        message.body.getElectionBallots,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionKeys") {
      GetElectionKeys.encode(
        message.body.getElectionKeys,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionCircuitInfo") {
      GetElectionCircuitInfo.encode(
        message.body.getElectionCircuitInfo,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionResults") {
      GetElectionResults.encode(
        message.body.getElectionResults,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionWeight") {
      GetElectionWeight.encode(
        message.body.getElectionWeight,
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ElectionRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseElectionRequest } as ElectionRequest;
    message.electionId = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.electionId = reader.bytes();
          break;
        case 2:
          message.body = {
            $case: "getElection",
            getElection: GetElection.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.body = {
            $case: "getElectionList",
            getElectionList: GetElectionList.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.body = {
            $case: "getOrganization",
            getOrganization: GetOrganization.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.body = {
            $case: "getBallot",
            getBallot: GetBallot.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.body = {
            $case: "getElectionBallots",
            getElectionBallots: GetElectionBallots.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 7:
          message.body = {
            $case: "getElectionKeys",
            getElectionKeys: GetElectionKeys.decode(reader, reader.uint32()),
          };
          break;
        case 8:
          message.body = {
            $case: "getElectionCircuitInfo",
            getElectionCircuitInfo: GetElectionCircuitInfo.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 9:
          message.body = {
            $case: "getElectionResults",
            getElectionResults: GetElectionResults.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 10:
          message.body = {
            $case: "getElectionWeight",
            getElectionWeight: GetElectionWeight.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ElectionRequest {
    const message = { ...baseElectionRequest } as ElectionRequest;
    message.electionId =
      object.electionId !== undefined && object.electionId !== null
        ? bytesFromBase64(object.electionId)
        : new Uint8Array();
    if (object.getElection !== undefined && object.getElection !== null) {
      message.body = {
        $case: "getElection",
        getElection: GetElection.fromJSON(object.getElection),
      };
    }
    if (
      object.getElectionList !== undefined &&
      object.getElectionList !== null
    ) {
      message.body = {
        $case: "getElectionList",
        getElectionList: GetElectionList.fromJSON(object.getElectionList),
      };
    }
    if (
      object.getOrganization !== undefined &&
      object.getOrganization !== null
    ) {
      message.body = {
        $case: "getOrganization",
        getOrganization: GetOrganization.fromJSON(object.getOrganization),
      };
    }
    if (object.getBallot !== undefined && object.getBallot !== null) {
      message.body = {
        $case: "getBallot",
        getBallot: GetBallot.fromJSON(object.getBallot),
      };
    }
    if (
      object.getElectionBallots !== undefined &&
      object.getElectionBallots !== null
    ) {
      message.body = {
        $case: "getElectionBallots",
        getElectionBallots: GetElectionBallots.fromJSON(
          object.getElectionBallots
        ),
      };
    }
    if (
      object.getElectionKeys !== undefined &&
      object.getElectionKeys !== null
    ) {
      message.body = {
        $case: "getElectionKeys",
        getElectionKeys: GetElectionKeys.fromJSON(object.getElectionKeys),
      };
    }
    if (
      object.getElectionCircuitInfo !== undefined &&
      object.getElectionCircuitInfo !== null
    ) {
      message.body = {
        $case: "getElectionCircuitInfo",
        getElectionCircuitInfo: GetElectionCircuitInfo.fromJSON(
          object.getElectionCircuitInfo
        ),
      };
    }
    if (
      object.getElectionResults !== undefined &&
      object.getElectionResults !== null
    ) {
      message.body = {
        $case: "getElectionResults",
        getElectionResults: GetElectionResults.fromJSON(
          object.getElectionResults
        ),
      };
    }
    if (
      object.getElectionWeight !== undefined &&
      object.getElectionWeight !== null
    ) {
      message.body = {
        $case: "getElectionWeight",
        getElectionWeight: GetElectionWeight.fromJSON(object.getElectionWeight),
      };
    }
    return message;
  },

  toJSON(message: ElectionRequest): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    message.body?.$case === "getElection" &&
      (obj.getElection = message.body?.getElection
        ? GetElection.toJSON(message.body?.getElection)
        : undefined);
    message.body?.$case === "getElectionList" &&
      (obj.getElectionList = message.body?.getElectionList
        ? GetElectionList.toJSON(message.body?.getElectionList)
        : undefined);
    message.body?.$case === "getOrganization" &&
      (obj.getOrganization = message.body?.getOrganization
        ? GetOrganization.toJSON(message.body?.getOrganization)
        : undefined);
    message.body?.$case === "getBallot" &&
      (obj.getBallot = message.body?.getBallot
        ? GetBallot.toJSON(message.body?.getBallot)
        : undefined);
    message.body?.$case === "getElectionBallots" &&
      (obj.getElectionBallots = message.body?.getElectionBallots
        ? GetElectionBallots.toJSON(message.body?.getElectionBallots)
        : undefined);
    message.body?.$case === "getElectionKeys" &&
      (obj.getElectionKeys = message.body?.getElectionKeys
        ? GetElectionKeys.toJSON(message.body?.getElectionKeys)
        : undefined);
    message.body?.$case === "getElectionCircuitInfo" &&
      (obj.getElectionCircuitInfo = message.body?.getElectionCircuitInfo
        ? GetElectionCircuitInfo.toJSON(message.body?.getElectionCircuitInfo)
        : undefined);
    message.body?.$case === "getElectionResults" &&
      (obj.getElectionResults = message.body?.getElectionResults
        ? GetElectionResults.toJSON(message.body?.getElectionResults)
        : undefined);
    message.body?.$case === "getElectionWeight" &&
      (obj.getElectionWeight = message.body?.getElectionWeight
        ? GetElectionWeight.toJSON(message.body?.getElectionWeight)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ElectionRequest>, I>>(
    object: I
  ): ElectionRequest {
    const message = { ...baseElectionRequest } as ElectionRequest;
    message.electionId = object.electionId ?? new Uint8Array();
    if (
      object.body?.$case === "getElection" &&
      object.body?.getElection !== undefined &&
      object.body?.getElection !== null
    ) {
      message.body = {
        $case: "getElection",
        getElection: GetElection.fromPartial(object.body.getElection),
      };
    }
    if (
      object.body?.$case === "getElectionList" &&
      object.body?.getElectionList !== undefined &&
      object.body?.getElectionList !== null
    ) {
      message.body = {
        $case: "getElectionList",
        getElectionList: GetElectionList.fromPartial(
          object.body.getElectionList
        ),
      };
    }
    if (
      object.body?.$case === "getOrganization" &&
      object.body?.getOrganization !== undefined &&
      object.body?.getOrganization !== null
    ) {
      message.body = {
        $case: "getOrganization",
        getOrganization: GetOrganization.fromPartial(
          object.body.getOrganization
        ),
      };
    }
    if (
      object.body?.$case === "getBallot" &&
      object.body?.getBallot !== undefined &&
      object.body?.getBallot !== null
    ) {
      message.body = {
        $case: "getBallot",
        getBallot: GetBallot.fromPartial(object.body.getBallot),
      };
    }
    if (
      object.body?.$case === "getElectionBallots" &&
      object.body?.getElectionBallots !== undefined &&
      object.body?.getElectionBallots !== null
    ) {
      message.body = {
        $case: "getElectionBallots",
        getElectionBallots: GetElectionBallots.fromPartial(
          object.body.getElectionBallots
        ),
      };
    }
    if (
      object.body?.$case === "getElectionKeys" &&
      object.body?.getElectionKeys !== undefined &&
      object.body?.getElectionKeys !== null
    ) {
      message.body = {
        $case: "getElectionKeys",
        getElectionKeys: GetElectionKeys.fromPartial(
          object.body.getElectionKeys
        ),
      };
    }
    if (
      object.body?.$case === "getElectionCircuitInfo" &&
      object.body?.getElectionCircuitInfo !== undefined &&
      object.body?.getElectionCircuitInfo !== null
    ) {
      message.body = {
        $case: "getElectionCircuitInfo",
        getElectionCircuitInfo: GetElectionCircuitInfo.fromPartial(
          object.body.getElectionCircuitInfo
        ),
      };
    }
    if (
      object.body?.$case === "getElectionResults" &&
      object.body?.getElectionResults !== undefined &&
      object.body?.getElectionResults !== null
    ) {
      message.body = {
        $case: "getElectionResults",
        getElectionResults: GetElectionResults.fromPartial(
          object.body.getElectionResults
        ),
      };
    }
    if (
      object.body?.$case === "getElectionWeight" &&
      object.body?.getElectionWeight !== undefined &&
      object.body?.getElectionWeight !== null
    ) {
      message.body = {
        $case: "getElectionWeight",
        getElectionWeight: GetElectionWeight.fromPartial(
          object.body.getElectionWeight
        ),
      };
    }
    return message;
  },
};

const baseCensusRequest: object = {};

export const CensusRequest = {
  encode(message: CensusRequest, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "newCensus") {
      NewCensus.encode(
        message.body.newCensus,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "addCensusKeys") {
      AddCensusKeys.encode(
        message.body.addCensusKeys,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getCensusRoot") {
      GetCensusRoot.encode(
        message.body.getCensusRoot,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getCensusSize") {
      GetCensusSize.encode(
        message.body.getCensusSize,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.body?.$case === "publishCensus") {
      PublishCensus.encode(
        message.body.publishCensus,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getCensusProof") {
      GetCensusProof.encode(
        message.body.getCensusProof,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.body?.$case === "dumpCensus") {
      DumpCensus.encode(
        message.body.dumpCensus,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCensusRequest } as CensusRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "newCensus",
            newCensus: NewCensus.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "addCensusKeys",
            addCensusKeys: AddCensusKeys.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.body = {
            $case: "getCensusRoot",
            getCensusRoot: GetCensusRoot.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.body = {
            $case: "getCensusSize",
            getCensusSize: GetCensusSize.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.body = {
            $case: "publishCensus",
            publishCensus: PublishCensus.decode(reader, reader.uint32()),
          };
          break;
        case 6:
          message.body = {
            $case: "getCensusProof",
            getCensusProof: GetCensusProof.decode(reader, reader.uint32()),
          };
          break;
        case 7:
          message.body = {
            $case: "dumpCensus",
            dumpCensus: DumpCensus.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CensusRequest {
    const message = { ...baseCensusRequest } as CensusRequest;
    if (object.newCensus !== undefined && object.newCensus !== null) {
      message.body = {
        $case: "newCensus",
        newCensus: NewCensus.fromJSON(object.newCensus),
      };
    }
    if (object.addCensusKeys !== undefined && object.addCensusKeys !== null) {
      message.body = {
        $case: "addCensusKeys",
        addCensusKeys: AddCensusKeys.fromJSON(object.addCensusKeys),
      };
    }
    if (object.getCensusRoot !== undefined && object.getCensusRoot !== null) {
      message.body = {
        $case: "getCensusRoot",
        getCensusRoot: GetCensusRoot.fromJSON(object.getCensusRoot),
      };
    }
    if (object.getCensusSize !== undefined && object.getCensusSize !== null) {
      message.body = {
        $case: "getCensusSize",
        getCensusSize: GetCensusSize.fromJSON(object.getCensusSize),
      };
    }
    if (object.publishCensus !== undefined && object.publishCensus !== null) {
      message.body = {
        $case: "publishCensus",
        publishCensus: PublishCensus.fromJSON(object.publishCensus),
      };
    }
    if (object.getCensusProof !== undefined && object.getCensusProof !== null) {
      message.body = {
        $case: "getCensusProof",
        getCensusProof: GetCensusProof.fromJSON(object.getCensusProof),
      };
    }
    if (object.dumpCensus !== undefined && object.dumpCensus !== null) {
      message.body = {
        $case: "dumpCensus",
        dumpCensus: DumpCensus.fromJSON(object.dumpCensus),
      };
    }
    return message;
  },

  toJSON(message: CensusRequest): unknown {
    const obj: any = {};
    message.body?.$case === "newCensus" &&
      (obj.newCensus = message.body?.newCensus
        ? NewCensus.toJSON(message.body?.newCensus)
        : undefined);
    message.body?.$case === "addCensusKeys" &&
      (obj.addCensusKeys = message.body?.addCensusKeys
        ? AddCensusKeys.toJSON(message.body?.addCensusKeys)
        : undefined);
    message.body?.$case === "getCensusRoot" &&
      (obj.getCensusRoot = message.body?.getCensusRoot
        ? GetCensusRoot.toJSON(message.body?.getCensusRoot)
        : undefined);
    message.body?.$case === "getCensusSize" &&
      (obj.getCensusSize = message.body?.getCensusSize
        ? GetCensusSize.toJSON(message.body?.getCensusSize)
        : undefined);
    message.body?.$case === "publishCensus" &&
      (obj.publishCensus = message.body?.publishCensus
        ? PublishCensus.toJSON(message.body?.publishCensus)
        : undefined);
    message.body?.$case === "getCensusProof" &&
      (obj.getCensusProof = message.body?.getCensusProof
        ? GetCensusProof.toJSON(message.body?.getCensusProof)
        : undefined);
    message.body?.$case === "dumpCensus" &&
      (obj.dumpCensus = message.body?.dumpCensus
        ? DumpCensus.toJSON(message.body?.dumpCensus)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusRequest>, I>>(
    object: I
  ): CensusRequest {
    const message = { ...baseCensusRequest } as CensusRequest;
    if (
      object.body?.$case === "newCensus" &&
      object.body?.newCensus !== undefined &&
      object.body?.newCensus !== null
    ) {
      message.body = {
        $case: "newCensus",
        newCensus: NewCensus.fromPartial(object.body.newCensus),
      };
    }
    if (
      object.body?.$case === "addCensusKeys" &&
      object.body?.addCensusKeys !== undefined &&
      object.body?.addCensusKeys !== null
    ) {
      message.body = {
        $case: "addCensusKeys",
        addCensusKeys: AddCensusKeys.fromPartial(object.body.addCensusKeys),
      };
    }
    if (
      object.body?.$case === "getCensusRoot" &&
      object.body?.getCensusRoot !== undefined &&
      object.body?.getCensusRoot !== null
    ) {
      message.body = {
        $case: "getCensusRoot",
        getCensusRoot: GetCensusRoot.fromPartial(object.body.getCensusRoot),
      };
    }
    if (
      object.body?.$case === "getCensusSize" &&
      object.body?.getCensusSize !== undefined &&
      object.body?.getCensusSize !== null
    ) {
      message.body = {
        $case: "getCensusSize",
        getCensusSize: GetCensusSize.fromPartial(object.body.getCensusSize),
      };
    }
    if (
      object.body?.$case === "publishCensus" &&
      object.body?.publishCensus !== undefined &&
      object.body?.publishCensus !== null
    ) {
      message.body = {
        $case: "publishCensus",
        publishCensus: PublishCensus.fromPartial(object.body.publishCensus),
      };
    }
    if (
      object.body?.$case === "getCensusProof" &&
      object.body?.getCensusProof !== undefined &&
      object.body?.getCensusProof !== null
    ) {
      message.body = {
        $case: "getCensusProof",
        getCensusProof: GetCensusProof.fromPartial(object.body.getCensusProof),
      };
    }
    if (
      object.body?.$case === "dumpCensus" &&
      object.body?.dumpCensus !== undefined &&
      object.body?.dumpCensus !== null
    ) {
      message.body = {
        $case: "dumpCensus",
        dumpCensus: DumpCensus.fromPartial(object.body.dumpCensus),
      };
    }
    return message;
  },
};

const baseFileRequest: object = {};

export const FileRequest = {
  encode(message: FileRequest, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "pinFile") {
      PinFile.encode(message.body.pinFile, writer.uint32(10).fork()).ldelim();
    }
    if (message.body?.$case === "fetchFile") {
      FetchFile.encode(
        message.body.fetchFile,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FileRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFileRequest } as FileRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "pinFile",
            pinFile: PinFile.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "fetchFile",
            fetchFile: FetchFile.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileRequest {
    const message = { ...baseFileRequest } as FileRequest;
    if (object.pinFile !== undefined && object.pinFile !== null) {
      message.body = {
        $case: "pinFile",
        pinFile: PinFile.fromJSON(object.pinFile),
      };
    }
    if (object.fetchFile !== undefined && object.fetchFile !== null) {
      message.body = {
        $case: "fetchFile",
        fetchFile: FetchFile.fromJSON(object.fetchFile),
      };
    }
    return message;
  },

  toJSON(message: FileRequest): unknown {
    const obj: any = {};
    message.body?.$case === "pinFile" &&
      (obj.pinFile = message.body?.pinFile
        ? PinFile.toJSON(message.body?.pinFile)
        : undefined);
    message.body?.$case === "fetchFile" &&
      (obj.fetchFile = message.body?.fetchFile
        ? FetchFile.toJSON(message.body?.fetchFile)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FileRequest>, I>>(
    object: I
  ): FileRequest {
    const message = { ...baseFileRequest } as FileRequest;
    if (
      object.body?.$case === "pinFile" &&
      object.body?.pinFile !== undefined &&
      object.body?.pinFile !== null
    ) {
      message.body = {
        $case: "pinFile",
        pinFile: PinFile.fromPartial(object.body.pinFile),
      };
    }
    if (
      object.body?.$case === "fetchFile" &&
      object.body?.fetchFile !== undefined &&
      object.body?.fetchFile !== null
    ) {
      message.body = {
        $case: "fetchFile",
        fetchFile: FetchFile.fromPartial(object.body.fetchFile),
      };
    }
    return message;
  },
};

const baseNetworkRequest: object = {};

export const NetworkRequest = {
  encode(message: NetworkRequest, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "getBlockStatus") {
      GetBlockStatus.encode(
        message.body.getBlockStatus,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getBlockCount") {
      GetBlockCount.encode(
        message.body.getBlockCount,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.body?.$case === "estimateElectionPrice") {
      EstimateElectionPrice.encode(
        message.body.estimateElectionPrice,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NetworkRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNetworkRequest } as NetworkRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "getBlockStatus",
            getBlockStatus: GetBlockStatus.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "getBlockCount",
            getBlockCount: GetBlockCount.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.body = {
            $case: "estimateElectionPrice",
            estimateElectionPrice: EstimateElectionPrice.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetworkRequest {
    const message = { ...baseNetworkRequest } as NetworkRequest;
    if (object.getBlockStatus !== undefined && object.getBlockStatus !== null) {
      message.body = {
        $case: "getBlockStatus",
        getBlockStatus: GetBlockStatus.fromJSON(object.getBlockStatus),
      };
    }
    if (object.getBlockCount !== undefined && object.getBlockCount !== null) {
      message.body = {
        $case: "getBlockCount",
        getBlockCount: GetBlockCount.fromJSON(object.getBlockCount),
      };
    }
    if (
      object.estimateElectionPrice !== undefined &&
      object.estimateElectionPrice !== null
    ) {
      message.body = {
        $case: "estimateElectionPrice",
        estimateElectionPrice: EstimateElectionPrice.fromJSON(
          object.estimateElectionPrice
        ),
      };
    }
    return message;
  },

  toJSON(message: NetworkRequest): unknown {
    const obj: any = {};
    message.body?.$case === "getBlockStatus" &&
      (obj.getBlockStatus = message.body?.getBlockStatus
        ? GetBlockStatus.toJSON(message.body?.getBlockStatus)
        : undefined);
    message.body?.$case === "getBlockCount" &&
      (obj.getBlockCount = message.body?.getBlockCount
        ? GetBlockCount.toJSON(message.body?.getBlockCount)
        : undefined);
    message.body?.$case === "estimateElectionPrice" &&
      (obj.estimateElectionPrice = message.body?.estimateElectionPrice
        ? EstimateElectionPrice.toJSON(message.body?.estimateElectionPrice)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkRequest>, I>>(
    object: I
  ): NetworkRequest {
    const message = { ...baseNetworkRequest } as NetworkRequest;
    if (
      object.body?.$case === "getBlockStatus" &&
      object.body?.getBlockStatus !== undefined &&
      object.body?.getBlockStatus !== null
    ) {
      message.body = {
        $case: "getBlockStatus",
        getBlockStatus: GetBlockStatus.fromPartial(object.body.getBlockStatus),
      };
    }
    if (
      object.body?.$case === "getBlockCount" &&
      object.body?.getBlockCount !== undefined &&
      object.body?.getBlockCount !== null
    ) {
      message.body = {
        $case: "getBlockCount",
        getBlockCount: GetBlockCount.fromPartial(object.body.getBlockCount),
      };
    }
    if (
      object.body?.$case === "estimateElectionPrice" &&
      object.body?.estimateElectionPrice !== undefined &&
      object.body?.estimateElectionPrice !== null
    ) {
      message.body = {
        $case: "estimateElectionPrice",
        estimateElectionPrice: EstimateElectionPrice.fromPartial(
          object.body.estimateElectionPrice
        ),
      };
    }
    return message;
  },
};

const baseTransactionRequest: object = {};

export const TransactionRequest = {
  encode(
    message: TransactionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.body?.$case === "getTx") {
      GetTransaction.encode(
        message.body.getTx,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "waitTx") {
      WaitTransaction.encode(
        message.body.waitTx,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TransactionRequest {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransactionRequest } as TransactionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "getTx",
            getTx: GetTransaction.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "waitTx",
            waitTx: WaitTransaction.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionRequest {
    const message = { ...baseTransactionRequest } as TransactionRequest;
    if (object.getTx !== undefined && object.getTx !== null) {
      message.body = {
        $case: "getTx",
        getTx: GetTransaction.fromJSON(object.getTx),
      };
    }
    if (object.waitTx !== undefined && object.waitTx !== null) {
      message.body = {
        $case: "waitTx",
        waitTx: WaitTransaction.fromJSON(object.waitTx),
      };
    }
    return message;
  },

  toJSON(message: TransactionRequest): unknown {
    const obj: any = {};
    message.body?.$case === "getTx" &&
      (obj.getTx = message.body?.getTx
        ? GetTransaction.toJSON(message.body?.getTx)
        : undefined);
    message.body?.$case === "waitTx" &&
      (obj.waitTx = message.body?.waitTx
        ? WaitTransaction.toJSON(message.body?.waitTx)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransactionRequest>, I>>(
    object: I
  ): TransactionRequest {
    const message = { ...baseTransactionRequest } as TransactionRequest;
    if (
      object.body?.$case === "getTx" &&
      object.body?.getTx !== undefined &&
      object.body?.getTx !== null
    ) {
      message.body = {
        $case: "getTx",
        getTx: GetTransaction.fromPartial(object.body.getTx),
      };
    }
    if (
      object.body?.$case === "waitTx" &&
      object.body?.waitTx !== undefined &&
      object.body?.waitTx !== null
    ) {
      message.body = {
        $case: "waitTx",
        waitTx: WaitTransaction.fromPartial(object.body.waitTx),
      };
    }
    return message;
  },
};

const baseGetElection: object = {};

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
    const message = { ...baseGetElection } as GetElection;
    message.electionId = new Uint8Array();
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
    const message = { ...baseGetElection } as GetElection;
    message.electionId =
      object.electionId !== undefined && object.electionId !== null
        ? bytesFromBase64(object.electionId)
        : new Uint8Array();
    return message;
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
    const message = { ...baseGetElection } as GetElection;
    message.electionId = object.electionId ?? new Uint8Array();
    return message;
  },
};

const baseGetElectionResponse: object = { statuses: 0, ballotCounts: 0 };

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
    const message = { ...baseGetElectionResponse } as GetElectionResponse;
    message.statuses = [];
    message.ballotCounts = [];
    message.organizationId = new Uint8Array();
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
    const message = { ...baseGetElectionResponse } as GetElectionResponse;
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? bytesFromBase64(object.organizationId)
        : new Uint8Array();
    message.parameters =
      object.parameters !== undefined && object.parameters !== null
        ? Election.fromJSON(object.parameters)
        : undefined;
    message.statuses = (object.statuses ?? []).map((e: any) =>
      proposalStatusFromJSON(e)
    );
    message.ballotCounts = (object.ballotCounts ?? []).map((e: any) =>
      Number(e)
    );
    return message;
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
      obj.ballotCounts = message.ballotCounts.map((e) => e);
    } else {
      obj.ballotCounts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionResponse>, I>>(
    object: I
  ): GetElectionResponse {
    const message = { ...baseGetElectionResponse } as GetElectionResponse;
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

const baseGetElectionList: object = { fromIndex: 0 };

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
    const message = { ...baseGetElectionList } as GetElectionList;
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
    const message = { ...baseGetElectionList } as GetElectionList;
    message.fromIndex =
      object.fromIndex !== undefined && object.fromIndex !== null
        ? Number(object.fromIndex)
        : 0;
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? bytesFromBase64(object.organizationId)
        : undefined;
    message.tokenAddress =
      object.tokenAddress !== undefined && object.tokenAddress !== null
        ? bytesFromBase64(object.tokenAddress)
        : undefined;
    message.status =
      object.status !== undefined && object.status !== null
        ? proposalStatusFromJSON(object.status)
        : undefined;
    return message;
  },

  toJSON(message: GetElectionList): unknown {
    const obj: any = {};
    message.fromIndex !== undefined && (obj.fromIndex = message.fromIndex);
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
    const message = { ...baseGetElectionList } as GetElectionList;
    message.fromIndex = object.fromIndex ?? 0;
    message.organizationId = object.organizationId ?? undefined;
    message.tokenAddress = object.tokenAddress ?? undefined;
    message.status = object.status ?? undefined;
    return message;
  },
};

const baseGetElectionListResponse: object = {};

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
    const message = {
      ...baseGetElectionListResponse,
    } as GetElectionListResponse;
    message.electionIds = [];
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
    const message = {
      ...baseGetElectionListResponse,
    } as GetElectionListResponse;
    message.electionIds = (object.electionIds ?? []).map((e: any) =>
      bytesFromBase64(e)
    );
    return message;
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
    const message = {
      ...baseGetElectionListResponse,
    } as GetElectionListResponse;
    message.electionIds = object.electionIds?.map((e) => e) || [];
    return message;
  },
};

const baseGetOrganization: object = {};

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
    const message = { ...baseGetOrganization } as GetOrganization;
    message.organizationId = new Uint8Array();
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
    const message = { ...baseGetOrganization } as GetOrganization;
    message.organizationId =
      object.organizationId !== undefined && object.organizationId !== null
        ? bytesFromBase64(object.organizationId)
        : new Uint8Array();
    return message;
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
    const message = { ...baseGetOrganization } as GetOrganization;
    message.organizationId = object.organizationId ?? new Uint8Array();
    return message;
  },
};

const baseGetOrganizationResponse: object = {};

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
    const message = {
      ...baseGetOrganizationResponse,
    } as GetOrganizationResponse;
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
    const message = {
      ...baseGetOrganizationResponse,
    } as GetOrganizationResponse;
    message.organization =
      object.organization !== undefined && object.organization !== null
        ? Organization.fromJSON(object.organization)
        : undefined;
    return message;
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
    const message = {
      ...baseGetOrganizationResponse,
    } as GetOrganizationResponse;
    message.organization =
      object.organization !== undefined && object.organization !== null
        ? Organization.fromPartial(object.organization)
        : undefined;
    return message;
  },
};

const baseGetBallot: object = {};

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
    const message = { ...baseGetBallot } as GetBallot;
    message.nullifier = new Uint8Array();
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
    const message = { ...baseGetBallot } as GetBallot;
    message.nullifier =
      object.nullifier !== undefined && object.nullifier !== null
        ? bytesFromBase64(object.nullifier)
        : new Uint8Array();
    return message;
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
    const message = { ...baseGetBallot } as GetBallot;
    message.nullifier = object.nullifier ?? new Uint8Array();
    return message;
  },
};

const baseGetBallotResponse: object = {};

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
    const message = { ...baseGetBallotResponse } as GetBallotResponse;
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
    const message = { ...baseGetBallotResponse } as GetBallotResponse;
    message.ballot =
      object.ballot !== undefined && object.ballot !== null
        ? Ballot.fromJSON(object.ballot)
        : undefined;
    return message;
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
    const message = { ...baseGetBallotResponse } as GetBallotResponse;
    message.ballot =
      object.ballot !== undefined && object.ballot !== null
        ? Ballot.fromPartial(object.ballot)
        : undefined;
    return message;
  },
};

const baseGetElectionBallots: object = { fromIndex: 0 };

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
    const message = { ...baseGetElectionBallots } as GetElectionBallots;
    message.electionId = new Uint8Array();
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
    const message = { ...baseGetElectionBallots } as GetElectionBallots;
    message.electionId =
      object.electionId !== undefined && object.electionId !== null
        ? bytesFromBase64(object.electionId)
        : new Uint8Array();
    message.fromIndex =
      object.fromIndex !== undefined && object.fromIndex !== null
        ? Number(object.fromIndex)
        : 0;
    return message;
  },

  toJSON(message: GetElectionBallots): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    message.fromIndex !== undefined && (obj.fromIndex = message.fromIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionBallots>, I>>(
    object: I
  ): GetElectionBallots {
    const message = { ...baseGetElectionBallots } as GetElectionBallots;
    message.electionId = object.electionId ?? new Uint8Array();
    message.fromIndex = object.fromIndex ?? 0;
    return message;
  },
};

const baseGetElectionBallotsResponse: object = {};

export const GetElectionBallotsResponse = {
  encode(
    message: GetElectionBallotsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.ballot) {
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
    const message = {
      ...baseGetElectionBallotsResponse,
    } as GetElectionBallotsResponse;
    message.ballot = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ballot.push(Ballot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionBallotsResponse {
    const message = {
      ...baseGetElectionBallotsResponse,
    } as GetElectionBallotsResponse;
    message.ballot = (object.ballot ?? []).map((e: any) => Ballot.fromJSON(e));
    return message;
  },

  toJSON(message: GetElectionBallotsResponse): unknown {
    const obj: any = {};
    if (message.ballot) {
      obj.ballot = message.ballot.map((e) =>
        e ? Ballot.toJSON(e) : undefined
      );
    } else {
      obj.ballot = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionBallotsResponse>, I>>(
    object: I
  ): GetElectionBallotsResponse {
    const message = {
      ...baseGetElectionBallotsResponse,
    } as GetElectionBallotsResponse;
    message.ballot = object.ballot?.map((e) => Ballot.fromPartial(e)) || [];
    return message;
  },
};

const baseGetElectionKeys: object = {};

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
    const message = { ...baseGetElectionKeys } as GetElectionKeys;
    message.electionId = new Uint8Array();
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
    const message = { ...baseGetElectionKeys } as GetElectionKeys;
    message.electionId =
      object.electionId !== undefined && object.electionId !== null
        ? bytesFromBase64(object.electionId)
        : new Uint8Array();
    return message;
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
    const message = { ...baseGetElectionKeys } as GetElectionKeys;
    message.electionId = object.electionId ?? new Uint8Array();
    return message;
  },
};

const baseGetElectionKeysResponse: object = {};

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
    const message = {
      ...baseGetElectionKeysResponse,
    } as GetElectionKeysResponse;
    message.encryptionPublicKeys = [];
    message.encryptionPrivateKeys = [];
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
    const message = {
      ...baseGetElectionKeysResponse,
    } as GetElectionKeysResponse;
    message.encryptionPublicKeys = (object.encryptionPublicKeys ?? []).map(
      (e: any) => GetElectionKeysResponse_KeyEntry.fromJSON(e)
    );
    message.encryptionPrivateKeys = (object.encryptionPrivateKeys ?? []).map(
      (e: any) => GetElectionKeysResponse_KeyEntry.fromJSON(e)
    );
    return message;
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
    const message = {
      ...baseGetElectionKeysResponse,
    } as GetElectionKeysResponse;
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

const baseGetElectionKeysResponse_KeyEntry: object = { index: 0 };

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
    const message = {
      ...baseGetElectionKeysResponse_KeyEntry,
    } as GetElectionKeysResponse_KeyEntry;
    message.key = new Uint8Array();
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
    const message = {
      ...baseGetElectionKeysResponse_KeyEntry,
    } as GetElectionKeysResponse_KeyEntry;
    message.index =
      object.index !== undefined && object.index !== null
        ? Number(object.index)
        : 0;
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GetElectionKeysResponse_KeyEntry): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetElectionKeysResponse_KeyEntry>, I>
  >(object: I): GetElectionKeysResponse_KeyEntry {
    const message = {
      ...baseGetElectionKeysResponse_KeyEntry,
    } as GetElectionKeysResponse_KeyEntry;
    message.index = object.index ?? 0;
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

const baseGetElectionCircuitInfo: object = {};

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
    const message = { ...baseGetElectionCircuitInfo } as GetElectionCircuitInfo;
    message.electionId = new Uint8Array();
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
    const message = { ...baseGetElectionCircuitInfo } as GetElectionCircuitInfo;
    message.electionId =
      object.electionId !== undefined && object.electionId !== null
        ? bytesFromBase64(object.electionId)
        : new Uint8Array();
    return message;
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
    const message = { ...baseGetElectionCircuitInfo } as GetElectionCircuitInfo;
    message.electionId = object.electionId ?? new Uint8Array();
    return message;
  },
};

const baseGetElectionCircuitInfoResponse: object = {
  index: 0,
  baseUri: "",
  circuitPath: "",
  maxSize: 0,
};

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
    const message = {
      ...baseGetElectionCircuitInfoResponse,
    } as GetElectionCircuitInfoResponse;
    message.witnessHash = new Uint8Array();
    message.zKeyHash = new Uint8Array();
    message.vKeyHash = new Uint8Array();
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
    const message = {
      ...baseGetElectionCircuitInfoResponse,
    } as GetElectionCircuitInfoResponse;
    message.index =
      object.index !== undefined && object.index !== null
        ? Number(object.index)
        : 0;
    message.baseUri =
      object.baseUri !== undefined && object.baseUri !== null
        ? String(object.baseUri)
        : "";
    message.circuitPath =
      object.circuitPath !== undefined && object.circuitPath !== null
        ? String(object.circuitPath)
        : "";
    message.maxSize =
      object.maxSize !== undefined && object.maxSize !== null
        ? Number(object.maxSize)
        : 0;
    message.witnessHash =
      object.witnessHash !== undefined && object.witnessHash !== null
        ? bytesFromBase64(object.witnessHash)
        : new Uint8Array();
    message.zKeyHash =
      object.zKeyHash !== undefined && object.zKeyHash !== null
        ? bytesFromBase64(object.zKeyHash)
        : new Uint8Array();
    message.vKeyHash =
      object.vKeyHash !== undefined && object.vKeyHash !== null
        ? bytesFromBase64(object.vKeyHash)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GetElectionCircuitInfoResponse): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.baseUri !== undefined && (obj.baseUri = message.baseUri);
    message.circuitPath !== undefined &&
      (obj.circuitPath = message.circuitPath);
    message.maxSize !== undefined && (obj.maxSize = message.maxSize);
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
    const message = {
      ...baseGetElectionCircuitInfoResponse,
    } as GetElectionCircuitInfoResponse;
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

const baseGetElectionResults: object = {};

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
    const message = { ...baseGetElectionResults } as GetElectionResults;
    message.electionId = new Uint8Array();
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
    const message = { ...baseGetElectionResults } as GetElectionResults;
    message.electionId =
      object.electionId !== undefined && object.electionId !== null
        ? bytesFromBase64(object.electionId)
        : new Uint8Array();
    return message;
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
    const message = { ...baseGetElectionResults } as GetElectionResults;
    message.electionId = object.electionId ?? new Uint8Array();
    return message;
  },
};

const baseGetElectionResultsResponse: object = { available: false };

export const GetElectionResultsResponse = {
  encode(
    message: GetElectionResultsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.results !== undefined) {
      Results.encode(message.results, writer.uint32(10).fork()).ldelim();
    }
    if (message.available === true) {
      writer.uint32(16).bool(message.available);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetElectionResultsResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetElectionResultsResponse,
    } as GetElectionResultsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results = Results.decode(reader, reader.uint32());
          break;
        case 2:
          message.available = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionResultsResponse {
    const message = {
      ...baseGetElectionResultsResponse,
    } as GetElectionResultsResponse;
    message.results =
      object.results !== undefined && object.results !== null
        ? Results.fromJSON(object.results)
        : undefined;
    message.available =
      object.available !== undefined && object.available !== null
        ? Boolean(object.available)
        : false;
    return message;
  },

  toJSON(message: GetElectionResultsResponse): unknown {
    const obj: any = {};
    message.results !== undefined &&
      (obj.results = message.results
        ? Results.toJSON(message.results)
        : undefined);
    message.available !== undefined && (obj.available = message.available);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionResultsResponse>, I>>(
    object: I
  ): GetElectionResultsResponse {
    const message = {
      ...baseGetElectionResultsResponse,
    } as GetElectionResultsResponse;
    message.results =
      object.results !== undefined && object.results !== null
        ? Results.fromPartial(object.results)
        : undefined;
    message.available = object.available ?? false;
    return message;
  },
};

const baseGetElectionWeight: object = {};

export const GetElectionWeight = {
  encode(message: GetElectionWeight, writer: Writer = Writer.create()): Writer {
    if (message.electionId.length !== 0) {
      writer.uint32(10).bytes(message.electionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetElectionWeight {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetElectionWeight } as GetElectionWeight;
    message.electionId = new Uint8Array();
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

  fromJSON(object: any): GetElectionWeight {
    const message = { ...baseGetElectionWeight } as GetElectionWeight;
    message.electionId =
      object.electionId !== undefined && object.electionId !== null
        ? bytesFromBase64(object.electionId)
        : new Uint8Array();
    return message;
  },

  toJSON(message: GetElectionWeight): unknown {
    const obj: any = {};
    message.electionId !== undefined &&
      (obj.electionId = base64FromBytes(
        message.electionId !== undefined ? message.electionId : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionWeight>, I>>(
    object: I
  ): GetElectionWeight {
    const message = { ...baseGetElectionWeight } as GetElectionWeight;
    message.electionId = object.electionId ?? new Uint8Array();
    return message;
  },
};

const baseGetElectionWeightResponse: object = { weight: "" };

export const GetElectionWeightResponse = {
  encode(
    message: GetElectionWeightResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.weight !== "") {
      writer.uint32(10).string(message.weight);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): GetElectionWeightResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseGetElectionWeightResponse,
    } as GetElectionWeightResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetElectionWeightResponse {
    const message = {
      ...baseGetElectionWeightResponse,
    } as GetElectionWeightResponse;
    message.weight =
      object.weight !== undefined && object.weight !== null
        ? String(object.weight)
        : "";
    return message;
  },

  toJSON(message: GetElectionWeightResponse): unknown {
    const obj: any = {};
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetElectionWeightResponse>, I>>(
    object: I
  ): GetElectionWeightResponse {
    const message = {
      ...baseGetElectionWeightResponse,
    } as GetElectionWeightResponse;
    message.weight = object.weight ?? "";
    return message;
  },
};

const baseNewCensus: object = { censusType: 0 };

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
    const message = { ...baseNewCensus } as NewCensus;
    message.managerPublicKeys = [];
    message.censusSalt = new Uint8Array();
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
    const message = { ...baseNewCensus } as NewCensus;
    message.censusSalt =
      object.censusSalt !== undefined && object.censusSalt !== null
        ? bytesFromBase64(object.censusSalt)
        : new Uint8Array();
    message.managerPublicKeys = (object.managerPublicKeys ?? []).map((e: any) =>
      bytesFromBase64(e)
    );
    message.censusType =
      object.censusType !== undefined && object.censusType !== null
        ? censusTypeFromJSON(object.censusType)
        : 0;
    return message;
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
    const message = { ...baseNewCensus } as NewCensus;
    message.censusSalt = object.censusSalt ?? new Uint8Array();
    message.managerPublicKeys = object.managerPublicKeys?.map((e) => e) || [];
    message.censusType = object.censusType ?? 0;
    return message;
  },
};

const baseNewCensusResponse: object = { censusId: "" };

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
    const message = { ...baseNewCensusResponse } as NewCensusResponse;
    message.censusRoot = new Uint8Array();
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
    const message = { ...baseNewCensusResponse } as NewCensusResponse;
    message.censusId =
      object.censusId !== undefined && object.censusId !== null
        ? String(object.censusId)
        : "";
    message.censusRoot =
      object.censusRoot !== undefined && object.censusRoot !== null
        ? bytesFromBase64(object.censusRoot)
        : new Uint8Array();
    return message;
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
    const message = { ...baseNewCensusResponse } as NewCensusResponse;
    message.censusId = object.censusId ?? "";
    message.censusRoot = object.censusRoot ?? new Uint8Array();
    return message;
  },
};

const baseAddCensusKeys: object = { censusId: "", digested: false };

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
    const message = { ...baseAddCensusKeys } as AddCensusKeys;
    message.entries = [];
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
    const message = { ...baseAddCensusKeys } as AddCensusKeys;
    message.censusId =
      object.censusId !== undefined && object.censusId !== null
        ? String(object.censusId)
        : "";
    message.digested =
      object.digested !== undefined && object.digested !== null
        ? Boolean(object.digested)
        : false;
    message.entries = (object.entries ?? []).map((e: any) =>
      AddCensusKeys_CensusEntry.fromJSON(e)
    );
    return message;
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
    const message = { ...baseAddCensusKeys } as AddCensusKeys;
    message.censusId = object.censusId ?? "";
    message.digested = object.digested ?? false;
    message.entries =
      object.entries?.map((e) => AddCensusKeys_CensusEntry.fromPartial(e)) ||
      [];
    return message;
  },
};

const baseAddCensusKeys_CensusEntry: object = {};

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
    const message = {
      ...baseAddCensusKeys_CensusEntry,
    } as AddCensusKeys_CensusEntry;
    message.key = new Uint8Array();
    message.value = new Uint8Array();
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
    const message = {
      ...baseAddCensusKeys_CensusEntry,
    } as AddCensusKeys_CensusEntry;
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    return message;
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
    const message = {
      ...baseAddCensusKeys_CensusEntry,
    } as AddCensusKeys_CensusEntry;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

const baseAddCensusKeysResponse: object = { keysAdded: 0, keysSkipped: 0 };

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
    const message = { ...baseAddCensusKeysResponse } as AddCensusKeysResponse;
    message.censusRoot = new Uint8Array();
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
    const message = { ...baseAddCensusKeysResponse } as AddCensusKeysResponse;
    message.censusRoot =
      object.censusRoot !== undefined && object.censusRoot !== null
        ? bytesFromBase64(object.censusRoot)
        : new Uint8Array();
    message.keysAdded =
      object.keysAdded !== undefined && object.keysAdded !== null
        ? Number(object.keysAdded)
        : 0;
    message.keysSkipped =
      object.keysSkipped !== undefined && object.keysSkipped !== null
        ? Number(object.keysSkipped)
        : 0;
    return message;
  },

  toJSON(message: AddCensusKeysResponse): unknown {
    const obj: any = {};
    message.censusRoot !== undefined &&
      (obj.censusRoot = base64FromBytes(
        message.censusRoot !== undefined ? message.censusRoot : new Uint8Array()
      ));
    message.keysAdded !== undefined && (obj.keysAdded = message.keysAdded);
    message.keysSkipped !== undefined &&
      (obj.keysSkipped = message.keysSkipped);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddCensusKeysResponse>, I>>(
    object: I
  ): AddCensusKeysResponse {
    const message = { ...baseAddCensusKeysResponse } as AddCensusKeysResponse;
    message.censusRoot = object.censusRoot ?? new Uint8Array();
    message.keysAdded = object.keysAdded ?? 0;
    message.keysSkipped = object.keysSkipped ?? 0;
    return message;
  },
};

const baseGetCensusRoot: object = { censusId: "" };

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
    const message = { ...baseGetCensusRoot } as GetCensusRoot;
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
    const message = { ...baseGetCensusRoot } as GetCensusRoot;
    message.censusId =
      object.censusId !== undefined && object.censusId !== null
        ? String(object.censusId)
        : "";
    return message;
  },

  toJSON(message: GetCensusRoot): unknown {
    const obj: any = {};
    message.censusId !== undefined && (obj.censusId = message.censusId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCensusRoot>, I>>(
    object: I
  ): GetCensusRoot {
    const message = { ...baseGetCensusRoot } as GetCensusRoot;
    message.censusId = object.censusId ?? "";
    return message;
  },
};

const baseGetCensusRootResponse: object = {};

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
    const message = { ...baseGetCensusRootResponse } as GetCensusRootResponse;
    message.censusRoot = new Uint8Array();
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
    const message = { ...baseGetCensusRootResponse } as GetCensusRootResponse;
    message.censusRoot =
      object.censusRoot !== undefined && object.censusRoot !== null
        ? bytesFromBase64(object.censusRoot)
        : new Uint8Array();
    return message;
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
    const message = { ...baseGetCensusRootResponse } as GetCensusRootResponse;
    message.censusRoot = object.censusRoot ?? new Uint8Array();
    return message;
  },
};

const baseGetCensusSize: object = { censusId: "" };

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
    const message = { ...baseGetCensusSize } as GetCensusSize;
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
    const message = { ...baseGetCensusSize } as GetCensusSize;
    message.censusId =
      object.censusId !== undefined && object.censusId !== null
        ? String(object.censusId)
        : "";
    return message;
  },

  toJSON(message: GetCensusSize): unknown {
    const obj: any = {};
    message.censusId !== undefined && (obj.censusId = message.censusId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCensusSize>, I>>(
    object: I
  ): GetCensusSize {
    const message = { ...baseGetCensusSize } as GetCensusSize;
    message.censusId = object.censusId ?? "";
    return message;
  },
};

const baseGetCensusSizeResponse: object = { size: 0 };

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
    const message = { ...baseGetCensusSizeResponse } as GetCensusSizeResponse;
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
    const message = { ...baseGetCensusSizeResponse } as GetCensusSizeResponse;
    message.size =
      object.size !== undefined && object.size !== null
        ? Number(object.size)
        : 0;
    return message;
  },

  toJSON(message: GetCensusSizeResponse): unknown {
    const obj: any = {};
    message.size !== undefined && (obj.size = message.size);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCensusSizeResponse>, I>>(
    object: I
  ): GetCensusSizeResponse {
    const message = { ...baseGetCensusSizeResponse } as GetCensusSizeResponse;
    message.size = object.size ?? 0;
    return message;
  },
};

const basePublishCensus: object = { censusId: "" };

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
    const message = { ...basePublishCensus } as PublishCensus;
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
    const message = { ...basePublishCensus } as PublishCensus;
    message.censusId =
      object.censusId !== undefined && object.censusId !== null
        ? String(object.censusId)
        : "";
    return message;
  },

  toJSON(message: PublishCensus): unknown {
    const obj: any = {};
    message.censusId !== undefined && (obj.censusId = message.censusId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublishCensus>, I>>(
    object: I
  ): PublishCensus {
    const message = { ...basePublishCensus } as PublishCensus;
    message.censusId = object.censusId ?? "";
    return message;
  },
};

const basePublishCensusResponse: object = { ipfsUri: "" };

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
    const message = { ...basePublishCensusResponse } as PublishCensusResponse;
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
    const message = { ...basePublishCensusResponse } as PublishCensusResponse;
    message.ipfsUri =
      object.ipfsUri !== undefined && object.ipfsUri !== null
        ? String(object.ipfsUri)
        : "";
    return message;
  },

  toJSON(message: PublishCensusResponse): unknown {
    const obj: any = {};
    message.ipfsUri !== undefined && (obj.ipfsUri = message.ipfsUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PublishCensusResponse>, I>>(
    object: I
  ): PublishCensusResponse {
    const message = { ...basePublishCensusResponse } as PublishCensusResponse;
    message.ipfsUri = object.ipfsUri ?? "";
    return message;
  },
};

const baseGetCensusProof: object = {};

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
    const message = { ...baseGetCensusProof } as GetCensusProof;
    message.key = new Uint8Array();
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
    const message = { ...baseGetCensusProof } as GetCensusProof;
    message.census =
      object.census !== undefined && object.census !== null
        ? Census.fromJSON(object.census)
        : undefined;
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    return message;
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
    const message = { ...baseGetCensusProof } as GetCensusProof;
    message.census =
      object.census !== undefined && object.census !== null
        ? Census.fromPartial(object.census)
        : undefined;
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

const baseGetCensusProofResponse: object = {};

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
    const message = { ...baseGetCensusProofResponse } as GetCensusProofResponse;
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
    const message = { ...baseGetCensusProofResponse } as GetCensusProofResponse;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? Proof.fromJSON(object.proof)
        : undefined;
    return message;
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
    const message = { ...baseGetCensusProofResponse } as GetCensusProofResponse;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? Proof.fromPartial(object.proof)
        : undefined;
    return message;
  },
};

const baseDumpCensus: object = { censusId: "" };

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
    const message = { ...baseDumpCensus } as DumpCensus;
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
    const message = { ...baseDumpCensus } as DumpCensus;
    message.censusId =
      object.censusId !== undefined && object.censusId !== null
        ? String(object.censusId)
        : "";
    return message;
  },

  toJSON(message: DumpCensus): unknown {
    const obj: any = {};
    message.censusId !== undefined && (obj.censusId = message.censusId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DumpCensus>, I>>(
    object: I
  ): DumpCensus {
    const message = { ...baseDumpCensus } as DumpCensus;
    message.censusId = object.censusId ?? "";
    return message;
  },
};

const baseDumpCensusResponse: object = {};

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
    const message = { ...baseDumpCensusResponse } as DumpCensusResponse;
    message.body = new Uint8Array();
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
    const message = { ...baseDumpCensusResponse } as DumpCensusResponse;
    message.body =
      object.body !== undefined && object.body !== null
        ? bytesFromBase64(object.body)
        : new Uint8Array();
    return message;
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
    const message = { ...baseDumpCensusResponse } as DumpCensusResponse;
    message.body = object.body ?? new Uint8Array();
    return message;
  },
};

const basePinFile: object = { retentionDays: 0 };

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
    const message = { ...basePinFile } as PinFile;
    message.body = new Uint8Array();
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
    const message = { ...basePinFile } as PinFile;
    message.body =
      object.body !== undefined && object.body !== null
        ? bytesFromBase64(object.body)
        : new Uint8Array();
    message.retentionDays =
      object.retentionDays !== undefined && object.retentionDays !== null
        ? Number(object.retentionDays)
        : 0;
    return message;
  },

  toJSON(message: PinFile): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = base64FromBytes(
        message.body !== undefined ? message.body : new Uint8Array()
      ));
    message.retentionDays !== undefined &&
      (obj.retentionDays = message.retentionDays);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PinFile>, I>>(object: I): PinFile {
    const message = { ...basePinFile } as PinFile;
    message.body = object.body ?? new Uint8Array();
    message.retentionDays = object.retentionDays ?? 0;
    return message;
  },
};

const basePinFileResponse: object = { ipfsUri: "" };

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
    const message = { ...basePinFileResponse } as PinFileResponse;
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
    const message = { ...basePinFileResponse } as PinFileResponse;
    message.ipfsUri =
      object.ipfsUri !== undefined && object.ipfsUri !== null
        ? String(object.ipfsUri)
        : "";
    return message;
  },

  toJSON(message: PinFileResponse): unknown {
    const obj: any = {};
    message.ipfsUri !== undefined && (obj.ipfsUri = message.ipfsUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PinFileResponse>, I>>(
    object: I
  ): PinFileResponse {
    const message = { ...basePinFileResponse } as PinFileResponse;
    message.ipfsUri = object.ipfsUri ?? "";
    return message;
  },
};

const baseFetchFile: object = { ipfsUri: "" };

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
    const message = { ...baseFetchFile } as FetchFile;
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
    const message = { ...baseFetchFile } as FetchFile;
    message.ipfsUri =
      object.ipfsUri !== undefined && object.ipfsUri !== null
        ? String(object.ipfsUri)
        : "";
    return message;
  },

  toJSON(message: FetchFile): unknown {
    const obj: any = {};
    message.ipfsUri !== undefined && (obj.ipfsUri = message.ipfsUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FetchFile>, I>>(
    object: I
  ): FetchFile {
    const message = { ...baseFetchFile } as FetchFile;
    message.ipfsUri = object.ipfsUri ?? "";
    return message;
  },
};

const baseFetchFileResponse: object = {};

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
    const message = { ...baseFetchFileResponse } as FetchFileResponse;
    message.body = new Uint8Array();
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
    const message = { ...baseFetchFileResponse } as FetchFileResponse;
    message.body =
      object.body !== undefined && object.body !== null
        ? bytesFromBase64(object.body)
        : new Uint8Array();
    return message;
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
    const message = { ...baseFetchFileResponse } as FetchFileResponse;
    message.body = object.body ?? new Uint8Array();
    return message;
  },
};

const baseGetBlockStatus: object = {};

export const GetBlockStatus = {
  encode(_: GetBlockStatus, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetBlockStatus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBlockStatus } as GetBlockStatus;
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
    const message = { ...baseGetBlockStatus } as GetBlockStatus;
    return message;
  },

  toJSON(_: GetBlockStatus): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlockStatus>, I>>(
    _: I
  ): GetBlockStatus {
    const message = { ...baseGetBlockStatus } as GetBlockStatus;
    return message;
  },
};

const baseGetBlockStatusResponse: object = {
  number: 0,
  blockTimestamp: 0,
  blockTimes: 0,
};

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
    const message = { ...baseGetBlockStatusResponse } as GetBlockStatusResponse;
    message.blockTimes = [];
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
    const message = { ...baseGetBlockStatusResponse } as GetBlockStatusResponse;
    message.number =
      object.number !== undefined && object.number !== null
        ? Number(object.number)
        : 0;
    message.blockTimestamp =
      object.blockTimestamp !== undefined && object.blockTimestamp !== null
        ? Number(object.blockTimestamp)
        : 0;
    message.blockTimes = (object.blockTimes ?? []).map((e: any) => Number(e));
    return message;
  },

  toJSON(message: GetBlockStatusResponse): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = message.number);
    message.blockTimestamp !== undefined &&
      (obj.blockTimestamp = message.blockTimestamp);
    if (message.blockTimes) {
      obj.blockTimes = message.blockTimes.map((e) => e);
    } else {
      obj.blockTimes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlockStatusResponse>, I>>(
    object: I
  ): GetBlockStatusResponse {
    const message = { ...baseGetBlockStatusResponse } as GetBlockStatusResponse;
    message.number = object.number ?? 0;
    message.blockTimestamp = object.blockTimestamp ?? 0;
    message.blockTimes = object.blockTimes?.map((e) => e) || [];
    return message;
  },
};

const baseGetBlockCount: object = {};

export const GetBlockCount = {
  encode(_: GetBlockCount, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GetBlockCount {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetBlockCount } as GetBlockCount;
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
    const message = { ...baseGetBlockCount } as GetBlockCount;
    return message;
  },

  toJSON(_: GetBlockCount): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlockCount>, I>>(
    _: I
  ): GetBlockCount {
    const message = { ...baseGetBlockCount } as GetBlockCount;
    return message;
  },
};

const baseGetBlockCountResponse: object = { number: 0 };

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
    const message = { ...baseGetBlockCountResponse } as GetBlockCountResponse;
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
    const message = { ...baseGetBlockCountResponse } as GetBlockCountResponse;
    message.number =
      object.number !== undefined && object.number !== null
        ? Number(object.number)
        : 0;
    return message;
  },

  toJSON(message: GetBlockCountResponse): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = message.number);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetBlockCountResponse>, I>>(
    object: I
  ): GetBlockCountResponse {
    const message = { ...baseGetBlockCountResponse } as GetBlockCountResponse;
    message.number = object.number ?? 0;
    return message;
  },
};

const baseEstimateElectionPrice: object = {};

export const EstimateElectionPrice = {
  encode(_: EstimateElectionPrice, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EstimateElectionPrice {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEstimateElectionPrice } as EstimateElectionPrice;
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
    const message = { ...baseEstimateElectionPrice } as EstimateElectionPrice;
    return message;
  },

  toJSON(_: EstimateElectionPrice): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateElectionPrice>, I>>(
    _: I
  ): EstimateElectionPrice {
    const message = { ...baseEstimateElectionPrice } as EstimateElectionPrice;
    return message;
  },
};

const baseEstimateElectionPriceResponse: object = {};

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
    const message = {
      ...baseEstimateElectionPriceResponse,
    } as EstimateElectionPriceResponse;
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
    const message = {
      ...baseEstimateElectionPriceResponse,
    } as EstimateElectionPriceResponse;
    return message;
  },

  toJSON(_: EstimateElectionPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimateElectionPriceResponse>, I>>(
    _: I
  ): EstimateElectionPriceResponse {
    const message = {
      ...baseEstimateElectionPriceResponse,
    } as EstimateElectionPriceResponse;
    return message;
  },
};

const baseGetTransaction: object = {};

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
    const message = { ...baseGetTransaction } as GetTransaction;
    message.txHash = new Uint8Array();
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
    const message = { ...baseGetTransaction } as GetTransaction;
    message.txHash =
      object.txHash !== undefined && object.txHash !== null
        ? bytesFromBase64(object.txHash)
        : new Uint8Array();
    return message;
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
    const message = { ...baseGetTransaction } as GetTransaction;
    message.txHash = object.txHash ?? new Uint8Array();
    return message;
  },
};

const baseGetTransactionResponse: object = {};

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
    const message = { ...baseGetTransactionResponse } as GetTransactionResponse;
    message.body = new Uint8Array();
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
    const message = { ...baseGetTransactionResponse } as GetTransactionResponse;
    message.body =
      object.body !== undefined && object.body !== null
        ? bytesFromBase64(object.body)
        : new Uint8Array();
    return message;
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
    const message = { ...baseGetTransactionResponse } as GetTransactionResponse;
    message.body = object.body ?? new Uint8Array();
    return message;
  },
};

const baseWaitTransaction: object = {};

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
    const message = { ...baseWaitTransaction } as WaitTransaction;
    message.txHash = new Uint8Array();
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
    const message = { ...baseWaitTransaction } as WaitTransaction;
    message.txHash =
      object.txHash !== undefined && object.txHash !== null
        ? bytesFromBase64(object.txHash)
        : new Uint8Array();
    return message;
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
    const message = { ...baseWaitTransaction } as WaitTransaction;
    message.txHash = object.txHash ?? new Uint8Array();
    return message;
  },
};

const baseWaitTransactionResponse: object = { mined: false };

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
    const message = {
      ...baseWaitTransactionResponse,
    } as WaitTransactionResponse;
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
    const message = {
      ...baseWaitTransactionResponse,
    } as WaitTransactionResponse;
    message.mined =
      object.mined !== undefined && object.mined !== null
        ? Boolean(object.mined)
        : false;
    return message;
  },

  toJSON(message: WaitTransactionResponse): unknown {
    const obj: any = {};
    message.mined !== undefined && (obj.mined = message.mined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WaitTransactionResponse>, I>>(
    object: I
  ): WaitTransactionResponse {
    const message = {
      ...baseWaitTransactionResponse,
    } as WaitTransactionResponse;
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
