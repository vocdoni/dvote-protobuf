/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "dvote.types.v1";

export enum TxType {
  TX_UNKNOWN = 0,
  NEW_PROCESS = 1,
  SET_PROCESS_STATUS = 2,
  SET_PROCESS_CENSUS = 3,
  SET_PROCESS_QUESTION_INDEX = 4,
  ADD_PROCESS_KEYS = 5,
  REVEAL_PROCESS_KEYS = 6,
  ADD_ORACLE = 7,
  REMOVE_ORACLE = 8,
  ADD_VALIDATOR = 9,
  REMOVE_VALIDATOR = 10,
  VOTE = 11,
  SET_PROCESS_RESULTS = 12,
  UNRECOGNIZED = -1,
}

export function txTypeFromJSON(object: any): TxType {
  switch (object) {
    case 0:
    case "TX_UNKNOWN":
      return TxType.TX_UNKNOWN;
    case 1:
    case "NEW_PROCESS":
      return TxType.NEW_PROCESS;
    case 2:
    case "SET_PROCESS_STATUS":
      return TxType.SET_PROCESS_STATUS;
    case 3:
    case "SET_PROCESS_CENSUS":
      return TxType.SET_PROCESS_CENSUS;
    case 4:
    case "SET_PROCESS_QUESTION_INDEX":
      return TxType.SET_PROCESS_QUESTION_INDEX;
    case 5:
    case "ADD_PROCESS_KEYS":
      return TxType.ADD_PROCESS_KEYS;
    case 6:
    case "REVEAL_PROCESS_KEYS":
      return TxType.REVEAL_PROCESS_KEYS;
    case 7:
    case "ADD_ORACLE":
      return TxType.ADD_ORACLE;
    case 8:
    case "REMOVE_ORACLE":
      return TxType.REMOVE_ORACLE;
    case 9:
    case "ADD_VALIDATOR":
      return TxType.ADD_VALIDATOR;
    case 10:
    case "REMOVE_VALIDATOR":
      return TxType.REMOVE_VALIDATOR;
    case 11:
    case "VOTE":
      return TxType.VOTE;
    case 12:
    case "SET_PROCESS_RESULTS":
      return TxType.SET_PROCESS_RESULTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TxType.UNRECOGNIZED;
  }
}

export function txTypeToJSON(object: TxType): string {
  switch (object) {
    case TxType.TX_UNKNOWN:
      return "TX_UNKNOWN";
    case TxType.NEW_PROCESS:
      return "NEW_PROCESS";
    case TxType.SET_PROCESS_STATUS:
      return "SET_PROCESS_STATUS";
    case TxType.SET_PROCESS_CENSUS:
      return "SET_PROCESS_CENSUS";
    case TxType.SET_PROCESS_QUESTION_INDEX:
      return "SET_PROCESS_QUESTION_INDEX";
    case TxType.ADD_PROCESS_KEYS:
      return "ADD_PROCESS_KEYS";
    case TxType.REVEAL_PROCESS_KEYS:
      return "REVEAL_PROCESS_KEYS";
    case TxType.ADD_ORACLE:
      return "ADD_ORACLE";
    case TxType.REMOVE_ORACLE:
      return "REMOVE_ORACLE";
    case TxType.ADD_VALIDATOR:
      return "ADD_VALIDATOR";
    case TxType.REMOVE_VALIDATOR:
      return "REMOVE_VALIDATOR";
    case TxType.VOTE:
      return "VOTE";
    case TxType.SET_PROCESS_RESULTS:
      return "SET_PROCESS_RESULTS";
    default:
      return "UNKNOWN";
  }
}

export enum ProcessStatus {
  PROCESS_UNKNOWN = 0,
  READY = 1,
  ENDED = 2,
  CANCELED = 3,
  PAUSED = 4,
  RESULTS = 5,
  UNRECOGNIZED = -1,
}

export function processStatusFromJSON(object: any): ProcessStatus {
  switch (object) {
    case 0:
    case "PROCESS_UNKNOWN":
      return ProcessStatus.PROCESS_UNKNOWN;
    case 1:
    case "READY":
      return ProcessStatus.READY;
    case 2:
    case "ENDED":
      return ProcessStatus.ENDED;
    case 3:
    case "CANCELED":
      return ProcessStatus.CANCELED;
    case 4:
    case "PAUSED":
      return ProcessStatus.PAUSED;
    case 5:
    case "RESULTS":
      return ProcessStatus.RESULTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProcessStatus.UNRECOGNIZED;
  }
}

export function processStatusToJSON(object: ProcessStatus): string {
  switch (object) {
    case ProcessStatus.PROCESS_UNKNOWN:
      return "PROCESS_UNKNOWN";
    case ProcessStatus.READY:
      return "READY";
    case ProcessStatus.ENDED:
      return "ENDED";
    case ProcessStatus.CANCELED:
      return "CANCELED";
    case ProcessStatus.PAUSED:
      return "PAUSED";
    case ProcessStatus.RESULTS:
      return "RESULTS";
    default:
      return "UNKNOWN";
  }
}

export enum CensusOrigin {
  CENSUS_UNKNOWN = 0,
  OFF_CHAIN_TREE = 1,
  OFF_CHAIN_TREE_WEIGHTED = 2,
  OFF_CHAIN_CA = 3,
  ERC20 = 11,
  ERC721 = 12,
  ERC1155 = 13,
  ERC777 = 14,
  MINI_ME = 15,
  UNRECOGNIZED = -1,
}

export function censusOriginFromJSON(object: any): CensusOrigin {
  switch (object) {
    case 0:
    case "CENSUS_UNKNOWN":
      return CensusOrigin.CENSUS_UNKNOWN;
    case 1:
    case "OFF_CHAIN_TREE":
      return CensusOrigin.OFF_CHAIN_TREE;
    case 2:
    case "OFF_CHAIN_TREE_WEIGHTED":
      return CensusOrigin.OFF_CHAIN_TREE_WEIGHTED;
    case 3:
    case "OFF_CHAIN_CA":
      return CensusOrigin.OFF_CHAIN_CA;
    case 11:
    case "ERC20":
      return CensusOrigin.ERC20;
    case 12:
    case "ERC721":
      return CensusOrigin.ERC721;
    case 13:
    case "ERC1155":
      return CensusOrigin.ERC1155;
    case 14:
    case "ERC777":
      return CensusOrigin.ERC777;
    case 15:
    case "MINI_ME":
      return CensusOrigin.MINI_ME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CensusOrigin.UNRECOGNIZED;
  }
}

export function censusOriginToJSON(object: CensusOrigin): string {
  switch (object) {
    case CensusOrigin.CENSUS_UNKNOWN:
      return "CENSUS_UNKNOWN";
    case CensusOrigin.OFF_CHAIN_TREE:
      return "OFF_CHAIN_TREE";
    case CensusOrigin.OFF_CHAIN_TREE_WEIGHTED:
      return "OFF_CHAIN_TREE_WEIGHTED";
    case CensusOrigin.OFF_CHAIN_CA:
      return "OFF_CHAIN_CA";
    case CensusOrigin.ERC20:
      return "ERC20";
    case CensusOrigin.ERC721:
      return "ERC721";
    case CensusOrigin.ERC1155:
      return "ERC1155";
    case CensusOrigin.ERC777:
      return "ERC777";
    case CensusOrigin.MINI_ME:
      return "MINI_ME";
    default:
      return "UNKNOWN";
  }
}

export interface VoteEnvelope {
  /** Unique number per vote attempt, so that replay attacks can't reuse this payload */
  nonce: Uint8Array;
  /** The process for which the vote is casted */
  processId: Uint8Array;
  /** One of ProofGraviton, ProofIden3, ProofEthereumStorage, ProofEthereumAccount, or ProofCA */
  proof: Proof | undefined;
  /** JSON string of the Vote Package (potentially encrypted), encoded as bytes. */
  votePackage: Uint8Array;
  /** optional bytes nullifier = 5; */
  nullifier: Uint8Array;
  /** On encrypted votes, contains the (sorted) indexes of the keys used to encrypt */
  encryptionKeyIndexes: number[];
}

export interface Proof {
  payload?:
    | { $case: "graviton"; graviton: ProofGraviton }
    | { $case: "iden3"; iden3: ProofIden3 }
    | { $case: "ethereumStorage"; ethereumStorage: ProofEthereumStorage }
    | { $case: "ethereumAccount"; ethereumAccount: ProofEthereumAccount }
    | { $case: "ca"; ca: ProofCA };
}

export interface ProofGraviton {
  siblings: Uint8Array;
}

export interface ProofIden3 {
  siblings: Uint8Array;
}

export interface ProofCA {
  type: ProofCA_Type;
  bundle: CAbundle | undefined;
  signature: Uint8Array;
}

export enum ProofCA_Type {
  UNKNOWN = 0,
  ECDSA = 1,
  ECDSA_PIDSALTED = 2,
  ECDSA_BLIND = 3,
  ECDSA_BLIND_PIDSALTED = 4,
  UNRECOGNIZED = -1,
}

export function proofCA_TypeFromJSON(object: any): ProofCA_Type {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ProofCA_Type.UNKNOWN;
    case 1:
    case "ECDSA":
      return ProofCA_Type.ECDSA;
    case 2:
    case "ECDSA_PIDSALTED":
      return ProofCA_Type.ECDSA_PIDSALTED;
    case 3:
    case "ECDSA_BLIND":
      return ProofCA_Type.ECDSA_BLIND;
    case 4:
    case "ECDSA_BLIND_PIDSALTED":
      return ProofCA_Type.ECDSA_BLIND_PIDSALTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProofCA_Type.UNRECOGNIZED;
  }
}

export function proofCA_TypeToJSON(object: ProofCA_Type): string {
  switch (object) {
    case ProofCA_Type.UNKNOWN:
      return "UNKNOWN";
    case ProofCA_Type.ECDSA:
      return "ECDSA";
    case ProofCA_Type.ECDSA_PIDSALTED:
      return "ECDSA_PIDSALTED";
    case ProofCA_Type.ECDSA_BLIND:
      return "ECDSA_BLIND";
    case ProofCA_Type.ECDSA_BLIND_PIDSALTED:
      return "ECDSA_BLIND_PIDSALTED";
    default:
      return "UNKNOWN";
  }
}

export interface CAbundle {
  processId: Uint8Array;
  address: Uint8Array;
}

export interface ProofEthereumStorage {
  key: Uint8Array;
  value: Uint8Array;
  siblings: Uint8Array[];
}

export interface ProofEthereumAccount {
  nonce: Uint8Array;
  /** Big Int encoded as bytes */
  balance: Uint8Array;
  storageHash: Uint8Array;
  codeHash: Uint8Array;
  siblings: Uint8Array[];
}

export interface Tx {
  payload?:
    | { $case: "vote"; vote: VoteEnvelope }
    | { $case: "newProcess"; newProcess: NewProcessTx }
    | { $case: "admin"; admin: AdminTx }
    | { $case: "setProcess"; setProcess: SetProcessTx };
}

export interface SignedTx {
  /** The bytes produced by Marshaling a Tx{} message */
  tx: Uint8Array;
  /** The signature for the tx bytes. */
  signature?: Uint8Array | undefined;
}

export interface NewProcessTx {
  txtype: TxType;
  nonce: Uint8Array;
  process: Process | undefined;
}

export interface SetProcessTx {
  txtype: TxType;
  nonce: Uint8Array;
  processId: Uint8Array;
  status?: ProcessStatus | undefined;
  questionIndex?: number | undefined;
  censusRoot?: Uint8Array | undefined;
  censusURI?: string | undefined;
  proof?: Proof | undefined;
  results?: ProcessResult | undefined;
}

export interface AdminTx {
  txtype: TxType;
  processId: Uint8Array;
  address?: Uint8Array | undefined;
  commitmentKey?: Uint8Array | undefined;
  encryptionPrivateKey?: Uint8Array | undefined;
  encryptionPublicKey?: Uint8Array | undefined;
  keyIndex?: number | undefined;
  power?: number | undefined;
  publicKey?: Uint8Array | undefined;
  revealKey?: Uint8Array | undefined;
  nonce: Uint8Array;
}

export interface Process {
  processId: Uint8Array;
  /** EntityId identifies unequivocally a process */
  entityId: Uint8Array;
  /** StartBlock represents the tendermint block where the process goes from scheduled to active */
  startBlock: number;
  /** BlockCount represents the amount of tendermint blocks that the process will last */
  blockCount: number;
  /** CensusRoot merkle root of all the census in the process */
  censusRoot: Uint8Array;
  /** CensusURI where to find the census */
  censusURI?: string | undefined;
  /** CommitmentKeys are the reveal keys hashed */
  commitmentKeys: string[];
  /** EncryptionPrivateKeys are the keys required to decrypt the votes */
  encryptionPrivateKeys: string[];
  /** EncryptionPublicKeys are the keys required to encrypt the votes */
  encryptionPublicKeys: string[];
  /** RevealKeys are the seed of the CommitmentKeys */
  revealKeys: string[];
  keyIndex?: number | undefined;
  status: ProcessStatus;
  paramsSignature?: Uint8Array | undefined;
  namespace: number;
  envelopeType: EnvelopeType | undefined;
  mode: ProcessMode | undefined;
  questionIndex?: number | undefined;
  questionCount?: number | undefined;
  voteOptions: ProcessVoteOptions | undefined;
  censusOrigin: CensusOrigin;
  results: ProcessResult | undefined;
  resultsSignatures: Uint8Array[];
  ethIndexSlot?: number | undefined;
  /** SourceBlockHeight is the block height of the origin blockchain (if any) */
  sourceBlockHeight?: number | undefined;
  /** Owner is the creator of a process (if any) otherwise is assumed the creator is the entityId */
  owner?: Uint8Array | undefined;
  /** Metadata is the content hashed URI of the JSON meta data (See Data Origins) */
  metadata?: string | undefined;
}

export interface EnvelopeType {
  serial: boolean;
  anonymous: boolean;
  encryptedVotes: boolean;
  uniqueValues: boolean;
  costFromWeight: boolean;
}

export interface ProcessMode {
  autoStart: boolean;
  interruptible: boolean;
  dynamicCensus: boolean;
  encryptedMetaData: boolean;
}

export interface ProcessVoteOptions {
  maxCount: number;
  maxValue: number;
  maxVoteOverwrites: number;
  maxTotalCost: number;
  costExponent: number;
}

export interface OracleList {
  oracles: Uint8Array[];
}

export interface ValidatorList {
  validators: Validator[];
}

export interface Validator {
  address: Uint8Array;
  pubKey: Uint8Array;
  power: number;
  name: string;
}

export interface Vote {
  height: number;
  nullifier: Uint8Array;
  processId: Uint8Array;
  votePackage: Uint8Array;
  encryptionKeyIndexes: number[];
  weight: Uint8Array;
}

export interface TendermintHeader {
  /** basic block info */
  chainId: string;
  height: number;
  timestamp: number;
  /** prev block info */
  blockID: Uint8Array;
  /** hashes of block data */
  lastCommitHash: Uint8Array;
  /** transactions */
  dataHash: Uint8Array;
  /** hashes from the app output from the prev block */
  validatorsHash: Uint8Array;
  /** validators for the next block */
  nextValidatorsHash: Uint8Array;
  /** consensus params for current block */
  consensusHash: Uint8Array;
  /** state after txs from the previous block */
  appHash: Uint8Array;
  /** root hash of all results from the txs from the previous block */
  lastResultsHash: Uint8Array;
  /** consensus info */
  evidenceHash: Uint8Array;
  /** original proposer of the block */
  proposerAddress: Uint8Array;
}

/** Scrutinizer */
export interface ProcessResult {
  votes: QuestionResult[];
  processId?: Uint8Array | undefined;
  entityId?: Uint8Array | undefined;
}

export interface QuestionResult {
  question: Uint8Array[];
}

export interface ProcessEndingList {
  processList: Uint8Array[];
}

/** KeyKeeper */
export interface StoredKeys {
  pids: Uint8Array[];
}

const baseVoteEnvelope: object = { encryptionKeyIndexes: 0 };

export const VoteEnvelope = {
  encode(message: VoteEnvelope, writer: Writer = Writer.create()): Writer {
    if (message.nonce.length !== 0) {
      writer.uint32(10).bytes(message.nonce);
    }
    if (message.processId.length !== 0) {
      writer.uint32(18).bytes(message.processId);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    if (message.votePackage.length !== 0) {
      writer.uint32(34).bytes(message.votePackage);
    }
    if (message.nullifier.length !== 0) {
      writer.uint32(42).bytes(message.nullifier);
    }
    writer.uint32(50).fork();
    for (const v of message.encryptionKeyIndexes) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VoteEnvelope {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoteEnvelope } as VoteEnvelope;
    message.encryptionKeyIndexes = [];
    message.nonce = new Uint8Array();
    message.processId = new Uint8Array();
    message.votePackage = new Uint8Array();
    message.nullifier = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.bytes();
          break;
        case 2:
          message.processId = reader.bytes();
          break;
        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        case 4:
          message.votePackage = reader.bytes();
          break;
        case 5:
          message.nullifier = reader.bytes();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.encryptionKeyIndexes.push(reader.uint32());
            }
          } else {
            message.encryptionKeyIndexes.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteEnvelope {
    const message = { ...baseVoteEnvelope } as VoteEnvelope;
    message.encryptionKeyIndexes = [];
    message.nonce = new Uint8Array();
    message.processId = new Uint8Array();
    message.votePackage = new Uint8Array();
    message.nullifier = new Uint8Array();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = bytesFromBase64(object.nonce);
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = bytesFromBase64(object.processId);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    }
    if (object.votePackage !== undefined && object.votePackage !== null) {
      message.votePackage = bytesFromBase64(object.votePackage);
    }
    if (object.nullifier !== undefined && object.nullifier !== null) {
      message.nullifier = bytesFromBase64(object.nullifier);
    }
    if (
      object.encryptionKeyIndexes !== undefined &&
      object.encryptionKeyIndexes !== null
    ) {
      for (const e of object.encryptionKeyIndexes) {
        message.encryptionKeyIndexes.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: VoteEnvelope): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(
        message.processId !== undefined ? message.processId : new Uint8Array()
      ));
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.votePackage !== undefined &&
      (obj.votePackage = base64FromBytes(
        message.votePackage !== undefined
          ? message.votePackage
          : new Uint8Array()
      ));
    message.nullifier !== undefined &&
      (obj.nullifier = base64FromBytes(
        message.nullifier !== undefined ? message.nullifier : new Uint8Array()
      ));
    if (message.encryptionKeyIndexes) {
      obj.encryptionKeyIndexes = message.encryptionKeyIndexes.map((e) => e);
    } else {
      obj.encryptionKeyIndexes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VoteEnvelope>): VoteEnvelope {
    const message = { ...baseVoteEnvelope } as VoteEnvelope;
    message.encryptionKeyIndexes = [];
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = object.processId;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    }
    if (object.votePackage !== undefined && object.votePackage !== null) {
      message.votePackage = object.votePackage;
    }
    if (object.nullifier !== undefined && object.nullifier !== null) {
      message.nullifier = object.nullifier;
    }
    if (
      object.encryptionKeyIndexes !== undefined &&
      object.encryptionKeyIndexes !== null
    ) {
      for (const e of object.encryptionKeyIndexes) {
        message.encryptionKeyIndexes.push(e);
      }
    }
    return message;
  },
};

const baseProof: object = {};

export const Proof = {
  encode(message: Proof, writer: Writer = Writer.create()): Writer {
    if (message.payload?.$case === "graviton") {
      ProofGraviton.encode(
        message.payload.graviton,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "iden3") {
      ProofIden3.encode(
        message.payload.iden3,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "ethereumStorage") {
      ProofEthereumStorage.encode(
        message.payload.ethereumStorage,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "ethereumAccount") {
      ProofEthereumAccount.encode(
        message.payload.ethereumAccount,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "ca") {
      ProofCA.encode(message.payload.ca, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProof } as Proof;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = {
            $case: "graviton",
            graviton: ProofGraviton.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.payload = {
            $case: "iden3",
            iden3: ProofIden3.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.payload = {
            $case: "ethereumStorage",
            ethereumStorage: ProofEthereumStorage.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.payload = {
            $case: "ethereumAccount",
            ethereumAccount: ProofEthereumAccount.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 5:
          message.payload = {
            $case: "ca",
            ca: ProofCA.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proof {
    const message = { ...baseProof } as Proof;
    if (object.graviton !== undefined && object.graviton !== null) {
      message.payload = {
        $case: "graviton",
        graviton: ProofGraviton.fromJSON(object.graviton),
      };
    }
    if (object.iden3 !== undefined && object.iden3 !== null) {
      message.payload = {
        $case: "iden3",
        iden3: ProofIden3.fromJSON(object.iden3),
      };
    }
    if (
      object.ethereumStorage !== undefined &&
      object.ethereumStorage !== null
    ) {
      message.payload = {
        $case: "ethereumStorage",
        ethereumStorage: ProofEthereumStorage.fromJSON(object.ethereumStorage),
      };
    }
    if (
      object.ethereumAccount !== undefined &&
      object.ethereumAccount !== null
    ) {
      message.payload = {
        $case: "ethereumAccount",
        ethereumAccount: ProofEthereumAccount.fromJSON(object.ethereumAccount),
      };
    }
    if (object.ca !== undefined && object.ca !== null) {
      message.payload = { $case: "ca", ca: ProofCA.fromJSON(object.ca) };
    }
    return message;
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.payload?.$case === "graviton" &&
      (obj.graviton = message.payload?.graviton
        ? ProofGraviton.toJSON(message.payload?.graviton)
        : undefined);
    message.payload?.$case === "iden3" &&
      (obj.iden3 = message.payload?.iden3
        ? ProofIden3.toJSON(message.payload?.iden3)
        : undefined);
    message.payload?.$case === "ethereumStorage" &&
      (obj.ethereumStorage = message.payload?.ethereumStorage
        ? ProofEthereumStorage.toJSON(message.payload?.ethereumStorage)
        : undefined);
    message.payload?.$case === "ethereumAccount" &&
      (obj.ethereumAccount = message.payload?.ethereumAccount
        ? ProofEthereumAccount.toJSON(message.payload?.ethereumAccount)
        : undefined);
    message.payload?.$case === "ca" &&
      (obj.ca = message.payload?.ca
        ? ProofCA.toJSON(message.payload?.ca)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = { ...baseProof } as Proof;
    if (
      object.payload?.$case === "graviton" &&
      object.payload?.graviton !== undefined &&
      object.payload?.graviton !== null
    ) {
      message.payload = {
        $case: "graviton",
        graviton: ProofGraviton.fromPartial(object.payload.graviton),
      };
    }
    if (
      object.payload?.$case === "iden3" &&
      object.payload?.iden3 !== undefined &&
      object.payload?.iden3 !== null
    ) {
      message.payload = {
        $case: "iden3",
        iden3: ProofIden3.fromPartial(object.payload.iden3),
      };
    }
    if (
      object.payload?.$case === "ethereumStorage" &&
      object.payload?.ethereumStorage !== undefined &&
      object.payload?.ethereumStorage !== null
    ) {
      message.payload = {
        $case: "ethereumStorage",
        ethereumStorage: ProofEthereumStorage.fromPartial(
          object.payload.ethereumStorage
        ),
      };
    }
    if (
      object.payload?.$case === "ethereumAccount" &&
      object.payload?.ethereumAccount !== undefined &&
      object.payload?.ethereumAccount !== null
    ) {
      message.payload = {
        $case: "ethereumAccount",
        ethereumAccount: ProofEthereumAccount.fromPartial(
          object.payload.ethereumAccount
        ),
      };
    }
    if (
      object.payload?.$case === "ca" &&
      object.payload?.ca !== undefined &&
      object.payload?.ca !== null
    ) {
      message.payload = {
        $case: "ca",
        ca: ProofCA.fromPartial(object.payload.ca),
      };
    }
    return message;
  },
};

const baseProofGraviton: object = {};

export const ProofGraviton = {
  encode(message: ProofGraviton, writer: Writer = Writer.create()): Writer {
    if (message.siblings.length !== 0) {
      writer.uint32(10).bytes(message.siblings);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofGraviton {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofGraviton } as ProofGraviton;
    message.siblings = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.siblings = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofGraviton {
    const message = { ...baseProofGraviton } as ProofGraviton;
    message.siblings = new Uint8Array();
    if (object.siblings !== undefined && object.siblings !== null) {
      message.siblings = bytesFromBase64(object.siblings);
    }
    return message;
  },

  toJSON(message: ProofGraviton): unknown {
    const obj: any = {};
    message.siblings !== undefined &&
      (obj.siblings = base64FromBytes(
        message.siblings !== undefined ? message.siblings : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ProofGraviton>): ProofGraviton {
    const message = { ...baseProofGraviton } as ProofGraviton;
    if (object.siblings !== undefined && object.siblings !== null) {
      message.siblings = object.siblings;
    }
    return message;
  },
};

const baseProofIden3: object = {};

export const ProofIden3 = {
  encode(message: ProofIden3, writer: Writer = Writer.create()): Writer {
    if (message.siblings.length !== 0) {
      writer.uint32(10).bytes(message.siblings);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofIden3 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofIden3 } as ProofIden3;
    message.siblings = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.siblings = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofIden3 {
    const message = { ...baseProofIden3 } as ProofIden3;
    message.siblings = new Uint8Array();
    if (object.siblings !== undefined && object.siblings !== null) {
      message.siblings = bytesFromBase64(object.siblings);
    }
    return message;
  },

  toJSON(message: ProofIden3): unknown {
    const obj: any = {};
    message.siblings !== undefined &&
      (obj.siblings = base64FromBytes(
        message.siblings !== undefined ? message.siblings : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ProofIden3>): ProofIden3 {
    const message = { ...baseProofIden3 } as ProofIden3;
    if (object.siblings !== undefined && object.siblings !== null) {
      message.siblings = object.siblings;
    }
    return message;
  },
};

const baseProofCA: object = { type: 0 };

export const ProofCA = {
  encode(message: ProofCA, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.bundle !== undefined) {
      CAbundle.encode(message.bundle, writer.uint32(18).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofCA {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofCA } as ProofCA;
    message.signature = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.bundle = CAbundle.decode(reader, reader.uint32());
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofCA {
    const message = { ...baseProofCA } as ProofCA;
    message.signature = new Uint8Array();
    if (object.type !== undefined && object.type !== null) {
      message.type = proofCA_TypeFromJSON(object.type);
    }
    if (object.bundle !== undefined && object.bundle !== null) {
      message.bundle = CAbundle.fromJSON(object.bundle);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },

  toJSON(message: ProofCA): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = proofCA_TypeToJSON(message.type));
    message.bundle !== undefined &&
      (obj.bundle = message.bundle
        ? CAbundle.toJSON(message.bundle)
        : undefined);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ProofCA>): ProofCA {
    const message = { ...baseProofCA } as ProofCA;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.bundle !== undefined && object.bundle !== null) {
      message.bundle = CAbundle.fromPartial(object.bundle);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    }
    return message;
  },
};

const baseCAbundle: object = {};

export const CAbundle = {
  encode(message: CAbundle, writer: Writer = Writer.create()): Writer {
    if (message.processId.length !== 0) {
      writer.uint32(10).bytes(message.processId);
    }
    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CAbundle {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCAbundle } as CAbundle;
    message.processId = new Uint8Array();
    message.address = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.processId = reader.bytes();
          break;
        case 2:
          message.address = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAbundle {
    const message = { ...baseCAbundle } as CAbundle;
    message.processId = new Uint8Array();
    message.address = new Uint8Array();
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = bytesFromBase64(object.processId);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    return message;
  },

  toJSON(message: CAbundle): unknown {
    const obj: any = {};
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(
        message.processId !== undefined ? message.processId : new Uint8Array()
      ));
    message.address !== undefined &&
      (obj.address = base64FromBytes(
        message.address !== undefined ? message.address : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<CAbundle>): CAbundle {
    const message = { ...baseCAbundle } as CAbundle;
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = object.processId;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
};

const baseProofEthereumStorage: object = {};

export const ProofEthereumStorage = {
  encode(
    message: ProofEthereumStorage,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    for (const v of message.siblings) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofEthereumStorage {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofEthereumStorage } as ProofEthereumStorage;
    message.siblings = [];
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
        case 3:
          message.siblings.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofEthereumStorage {
    const message = { ...baseProofEthereumStorage } as ProofEthereumStorage;
    message.siblings = [];
    message.key = new Uint8Array();
    message.value = new Uint8Array();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.siblings !== undefined && object.siblings !== null) {
      for (const e of object.siblings) {
        message.siblings.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: ProofEthereumStorage): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    if (message.siblings) {
      obj.siblings = message.siblings.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.siblings = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProofEthereumStorage>): ProofEthereumStorage {
    const message = { ...baseProofEthereumStorage } as ProofEthereumStorage;
    message.siblings = [];
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.siblings !== undefined && object.siblings !== null) {
      for (const e of object.siblings) {
        message.siblings.push(e);
      }
    }
    return message;
  },
};

const baseProofEthereumAccount: object = {};

export const ProofEthereumAccount = {
  encode(
    message: ProofEthereumAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nonce.length !== 0) {
      writer.uint32(10).bytes(message.nonce);
    }
    if (message.balance.length !== 0) {
      writer.uint32(18).bytes(message.balance);
    }
    if (message.storageHash.length !== 0) {
      writer.uint32(26).bytes(message.storageHash);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(34).bytes(message.codeHash);
    }
    for (const v of message.siblings) {
      writer.uint32(42).bytes(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofEthereumAccount {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofEthereumAccount } as ProofEthereumAccount;
    message.siblings = [];
    message.nonce = new Uint8Array();
    message.balance = new Uint8Array();
    message.storageHash = new Uint8Array();
    message.codeHash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.bytes();
          break;
        case 2:
          message.balance = reader.bytes();
          break;
        case 3:
          message.storageHash = reader.bytes();
          break;
        case 4:
          message.codeHash = reader.bytes();
          break;
        case 5:
          message.siblings.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofEthereumAccount {
    const message = { ...baseProofEthereumAccount } as ProofEthereumAccount;
    message.siblings = [];
    message.nonce = new Uint8Array();
    message.balance = new Uint8Array();
    message.storageHash = new Uint8Array();
    message.codeHash = new Uint8Array();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = bytesFromBase64(object.nonce);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = bytesFromBase64(object.balance);
    }
    if (object.storageHash !== undefined && object.storageHash !== null) {
      message.storageHash = bytesFromBase64(object.storageHash);
    }
    if (object.codeHash !== undefined && object.codeHash !== null) {
      message.codeHash = bytesFromBase64(object.codeHash);
    }
    if (object.siblings !== undefined && object.siblings !== null) {
      for (const e of object.siblings) {
        message.siblings.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: ProofEthereumAccount): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    message.balance !== undefined &&
      (obj.balance = base64FromBytes(
        message.balance !== undefined ? message.balance : new Uint8Array()
      ));
    message.storageHash !== undefined &&
      (obj.storageHash = base64FromBytes(
        message.storageHash !== undefined
          ? message.storageHash
          : new Uint8Array()
      ));
    message.codeHash !== undefined &&
      (obj.codeHash = base64FromBytes(
        message.codeHash !== undefined ? message.codeHash : new Uint8Array()
      ));
    if (message.siblings) {
      obj.siblings = message.siblings.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.siblings = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProofEthereumAccount>): ProofEthereumAccount {
    const message = { ...baseProofEthereumAccount } as ProofEthereumAccount;
    message.siblings = [];
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.storageHash !== undefined && object.storageHash !== null) {
      message.storageHash = object.storageHash;
    }
    if (object.codeHash !== undefined && object.codeHash !== null) {
      message.codeHash = object.codeHash;
    }
    if (object.siblings !== undefined && object.siblings !== null) {
      for (const e of object.siblings) {
        message.siblings.push(e);
      }
    }
    return message;
  },
};

const baseTx: object = {};

export const Tx = {
  encode(message: Tx, writer: Writer = Writer.create()): Writer {
    if (message.payload?.$case === "vote") {
      VoteEnvelope.encode(
        message.payload.vote,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "newProcess") {
      NewProcessTx.encode(
        message.payload.newProcess,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "admin") {
      AdminTx.encode(message.payload.admin, writer.uint32(26).fork()).ldelim();
    }
    if (message.payload?.$case === "setProcess") {
      SetProcessTx.encode(
        message.payload.setProcess,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Tx {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTx } as Tx;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = {
            $case: "vote",
            vote: VoteEnvelope.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.payload = {
            $case: "newProcess",
            newProcess: NewProcessTx.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.payload = {
            $case: "admin",
            admin: AdminTx.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.payload = {
            $case: "setProcess",
            setProcess: SetProcessTx.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tx {
    const message = { ...baseTx } as Tx;
    if (object.vote !== undefined && object.vote !== null) {
      message.payload = {
        $case: "vote",
        vote: VoteEnvelope.fromJSON(object.vote),
      };
    }
    if (object.newProcess !== undefined && object.newProcess !== null) {
      message.payload = {
        $case: "newProcess",
        newProcess: NewProcessTx.fromJSON(object.newProcess),
      };
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.payload = {
        $case: "admin",
        admin: AdminTx.fromJSON(object.admin),
      };
    }
    if (object.setProcess !== undefined && object.setProcess !== null) {
      message.payload = {
        $case: "setProcess",
        setProcess: SetProcessTx.fromJSON(object.setProcess),
      };
    }
    return message;
  },

  toJSON(message: Tx): unknown {
    const obj: any = {};
    message.payload?.$case === "vote" &&
      (obj.vote = message.payload?.vote
        ? VoteEnvelope.toJSON(message.payload?.vote)
        : undefined);
    message.payload?.$case === "newProcess" &&
      (obj.newProcess = message.payload?.newProcess
        ? NewProcessTx.toJSON(message.payload?.newProcess)
        : undefined);
    message.payload?.$case === "admin" &&
      (obj.admin = message.payload?.admin
        ? AdminTx.toJSON(message.payload?.admin)
        : undefined);
    message.payload?.$case === "setProcess" &&
      (obj.setProcess = message.payload?.setProcess
        ? SetProcessTx.toJSON(message.payload?.setProcess)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Tx>): Tx {
    const message = { ...baseTx } as Tx;
    if (
      object.payload?.$case === "vote" &&
      object.payload?.vote !== undefined &&
      object.payload?.vote !== null
    ) {
      message.payload = {
        $case: "vote",
        vote: VoteEnvelope.fromPartial(object.payload.vote),
      };
    }
    if (
      object.payload?.$case === "newProcess" &&
      object.payload?.newProcess !== undefined &&
      object.payload?.newProcess !== null
    ) {
      message.payload = {
        $case: "newProcess",
        newProcess: NewProcessTx.fromPartial(object.payload.newProcess),
      };
    }
    if (
      object.payload?.$case === "admin" &&
      object.payload?.admin !== undefined &&
      object.payload?.admin !== null
    ) {
      message.payload = {
        $case: "admin",
        admin: AdminTx.fromPartial(object.payload.admin),
      };
    }
    if (
      object.payload?.$case === "setProcess" &&
      object.payload?.setProcess !== undefined &&
      object.payload?.setProcess !== null
    ) {
      message.payload = {
        $case: "setProcess",
        setProcess: SetProcessTx.fromPartial(object.payload.setProcess),
      };
    }
    return message;
  },
};

const baseSignedTx: object = {};

export const SignedTx = {
  encode(message: SignedTx, writer: Writer = Writer.create()): Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.signature !== undefined) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SignedTx {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSignedTx } as SignedTx;
    message.tx = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignedTx {
    const message = { ...baseSignedTx } as SignedTx;
    message.tx = new Uint8Array();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = bytesFromBase64(object.tx);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },

  toJSON(message: SignedTx): unknown {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = base64FromBytes(
        message.tx !== undefined ? message.tx : new Uint8Array()
      ));
    message.signature !== undefined &&
      (obj.signature =
        message.signature !== undefined
          ? base64FromBytes(message.signature)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SignedTx>): SignedTx {
    const message = { ...baseSignedTx } as SignedTx;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = object.tx;
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    }
    return message;
  },
};

const baseNewProcessTx: object = { txtype: 0 };

export const NewProcessTx = {
  encode(message: NewProcessTx, writer: Writer = Writer.create()): Writer {
    if (message.txtype !== 0) {
      writer.uint32(8).int32(message.txtype);
    }
    if (message.nonce.length !== 0) {
      writer.uint32(18).bytes(message.nonce);
    }
    if (message.process !== undefined) {
      Process.encode(message.process, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NewProcessTx {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNewProcessTx } as NewProcessTx;
    message.nonce = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txtype = reader.int32() as any;
          break;
        case 2:
          message.nonce = reader.bytes();
          break;
        case 3:
          message.process = Process.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewProcessTx {
    const message = { ...baseNewProcessTx } as NewProcessTx;
    message.nonce = new Uint8Array();
    if (object.txtype !== undefined && object.txtype !== null) {
      message.txtype = txTypeFromJSON(object.txtype);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = bytesFromBase64(object.nonce);
    }
    if (object.process !== undefined && object.process !== null) {
      message.process = Process.fromJSON(object.process);
    }
    return message;
  },

  toJSON(message: NewProcessTx): unknown {
    const obj: any = {};
    message.txtype !== undefined && (obj.txtype = txTypeToJSON(message.txtype));
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    message.process !== undefined &&
      (obj.process = message.process
        ? Process.toJSON(message.process)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<NewProcessTx>): NewProcessTx {
    const message = { ...baseNewProcessTx } as NewProcessTx;
    if (object.txtype !== undefined && object.txtype !== null) {
      message.txtype = object.txtype;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    if (object.process !== undefined && object.process !== null) {
      message.process = Process.fromPartial(object.process);
    }
    return message;
  },
};

const baseSetProcessTx: object = { txtype: 0 };

export const SetProcessTx = {
  encode(message: SetProcessTx, writer: Writer = Writer.create()): Writer {
    if (message.txtype !== 0) {
      writer.uint32(8).int32(message.txtype);
    }
    if (message.nonce.length !== 0) {
      writer.uint32(18).bytes(message.nonce);
    }
    if (message.processId.length !== 0) {
      writer.uint32(26).bytes(message.processId);
    }
    if (message.status !== undefined) {
      writer.uint32(32).int32(message.status);
    }
    if (message.questionIndex !== undefined) {
      writer.uint32(40).uint32(message.questionIndex);
    }
    if (message.censusRoot !== undefined) {
      writer.uint32(50).bytes(message.censusRoot);
    }
    if (message.censusURI !== undefined) {
      writer.uint32(58).string(message.censusURI);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(66).fork()).ldelim();
    }
    if (message.results !== undefined) {
      ProcessResult.encode(message.results, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SetProcessTx {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSetProcessTx } as SetProcessTx;
    message.nonce = new Uint8Array();
    message.processId = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txtype = reader.int32() as any;
          break;
        case 2:
          message.nonce = reader.bytes();
          break;
        case 3:
          message.processId = reader.bytes();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.questionIndex = reader.uint32();
          break;
        case 6:
          message.censusRoot = reader.bytes();
          break;
        case 7:
          message.censusURI = reader.string();
          break;
        case 8:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        case 9:
          message.results = ProcessResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetProcessTx {
    const message = { ...baseSetProcessTx } as SetProcessTx;
    message.nonce = new Uint8Array();
    message.processId = new Uint8Array();
    if (object.txtype !== undefined && object.txtype !== null) {
      message.txtype = txTypeFromJSON(object.txtype);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = bytesFromBase64(object.nonce);
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = bytesFromBase64(object.processId);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = processStatusFromJSON(object.status);
    }
    if (object.questionIndex !== undefined && object.questionIndex !== null) {
      message.questionIndex = Number(object.questionIndex);
    }
    if (object.censusRoot !== undefined && object.censusRoot !== null) {
      message.censusRoot = bytesFromBase64(object.censusRoot);
    }
    if (object.censusURI !== undefined && object.censusURI !== null) {
      message.censusURI = String(object.censusURI);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    }
    if (object.results !== undefined && object.results !== null) {
      message.results = ProcessResult.fromJSON(object.results);
    }
    return message;
  },

  toJSON(message: SetProcessTx): unknown {
    const obj: any = {};
    message.txtype !== undefined && (obj.txtype = txTypeToJSON(message.txtype));
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(
        message.processId !== undefined ? message.processId : new Uint8Array()
      ));
    message.status !== undefined &&
      (obj.status =
        message.status !== undefined
          ? processStatusToJSON(message.status)
          : undefined);
    message.questionIndex !== undefined &&
      (obj.questionIndex = message.questionIndex);
    message.censusRoot !== undefined &&
      (obj.censusRoot =
        message.censusRoot !== undefined
          ? base64FromBytes(message.censusRoot)
          : undefined);
    message.censusURI !== undefined && (obj.censusURI = message.censusURI);
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.results !== undefined &&
      (obj.results = message.results
        ? ProcessResult.toJSON(message.results)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SetProcessTx>): SetProcessTx {
    const message = { ...baseSetProcessTx } as SetProcessTx;
    if (object.txtype !== undefined && object.txtype !== null) {
      message.txtype = object.txtype;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = object.processId;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.questionIndex !== undefined && object.questionIndex !== null) {
      message.questionIndex = object.questionIndex;
    }
    if (object.censusRoot !== undefined && object.censusRoot !== null) {
      message.censusRoot = object.censusRoot;
    }
    if (object.censusURI !== undefined && object.censusURI !== null) {
      message.censusURI = object.censusURI;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    }
    if (object.results !== undefined && object.results !== null) {
      message.results = ProcessResult.fromPartial(object.results);
    }
    return message;
  },
};

const baseAdminTx: object = { txtype: 0 };

export const AdminTx = {
  encode(message: AdminTx, writer: Writer = Writer.create()): Writer {
    if (message.txtype !== 0) {
      writer.uint32(8).int32(message.txtype);
    }
    if (message.processId.length !== 0) {
      writer.uint32(18).bytes(message.processId);
    }
    if (message.address !== undefined) {
      writer.uint32(26).bytes(message.address);
    }
    if (message.commitmentKey !== undefined) {
      writer.uint32(34).bytes(message.commitmentKey);
    }
    if (message.encryptionPrivateKey !== undefined) {
      writer.uint32(42).bytes(message.encryptionPrivateKey);
    }
    if (message.encryptionPublicKey !== undefined) {
      writer.uint32(50).bytes(message.encryptionPublicKey);
    }
    if (message.keyIndex !== undefined) {
      writer.uint32(56).uint32(message.keyIndex);
    }
    if (message.power !== undefined) {
      writer.uint32(64).uint64(message.power);
    }
    if (message.publicKey !== undefined) {
      writer.uint32(74).bytes(message.publicKey);
    }
    if (message.revealKey !== undefined) {
      writer.uint32(82).bytes(message.revealKey);
    }
    if (message.nonce.length !== 0) {
      writer.uint32(90).bytes(message.nonce);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AdminTx {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAdminTx } as AdminTx;
    message.processId = new Uint8Array();
    message.nonce = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txtype = reader.int32() as any;
          break;
        case 2:
          message.processId = reader.bytes();
          break;
        case 3:
          message.address = reader.bytes();
          break;
        case 4:
          message.commitmentKey = reader.bytes();
          break;
        case 5:
          message.encryptionPrivateKey = reader.bytes();
          break;
        case 6:
          message.encryptionPublicKey = reader.bytes();
          break;
        case 7:
          message.keyIndex = reader.uint32();
          break;
        case 8:
          message.power = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.publicKey = reader.bytes();
          break;
        case 10:
          message.revealKey = reader.bytes();
          break;
        case 11:
          message.nonce = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminTx {
    const message = { ...baseAdminTx } as AdminTx;
    message.processId = new Uint8Array();
    message.nonce = new Uint8Array();
    if (object.txtype !== undefined && object.txtype !== null) {
      message.txtype = txTypeFromJSON(object.txtype);
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = bytesFromBase64(object.processId);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.commitmentKey !== undefined && object.commitmentKey !== null) {
      message.commitmentKey = bytesFromBase64(object.commitmentKey);
    }
    if (
      object.encryptionPrivateKey !== undefined &&
      object.encryptionPrivateKey !== null
    ) {
      message.encryptionPrivateKey = bytesFromBase64(
        object.encryptionPrivateKey
      );
    }
    if (
      object.encryptionPublicKey !== undefined &&
      object.encryptionPublicKey !== null
    ) {
      message.encryptionPublicKey = bytesFromBase64(object.encryptionPublicKey);
    }
    if (object.keyIndex !== undefined && object.keyIndex !== null) {
      message.keyIndex = Number(object.keyIndex);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Number(object.power);
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = bytesFromBase64(object.publicKey);
    }
    if (object.revealKey !== undefined && object.revealKey !== null) {
      message.revealKey = bytesFromBase64(object.revealKey);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = bytesFromBase64(object.nonce);
    }
    return message;
  },

  toJSON(message: AdminTx): unknown {
    const obj: any = {};
    message.txtype !== undefined && (obj.txtype = txTypeToJSON(message.txtype));
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(
        message.processId !== undefined ? message.processId : new Uint8Array()
      ));
    message.address !== undefined &&
      (obj.address =
        message.address !== undefined
          ? base64FromBytes(message.address)
          : undefined);
    message.commitmentKey !== undefined &&
      (obj.commitmentKey =
        message.commitmentKey !== undefined
          ? base64FromBytes(message.commitmentKey)
          : undefined);
    message.encryptionPrivateKey !== undefined &&
      (obj.encryptionPrivateKey =
        message.encryptionPrivateKey !== undefined
          ? base64FromBytes(message.encryptionPrivateKey)
          : undefined);
    message.encryptionPublicKey !== undefined &&
      (obj.encryptionPublicKey =
        message.encryptionPublicKey !== undefined
          ? base64FromBytes(message.encryptionPublicKey)
          : undefined);
    message.keyIndex !== undefined && (obj.keyIndex = message.keyIndex);
    message.power !== undefined && (obj.power = message.power);
    message.publicKey !== undefined &&
      (obj.publicKey =
        message.publicKey !== undefined
          ? base64FromBytes(message.publicKey)
          : undefined);
    message.revealKey !== undefined &&
      (obj.revealKey =
        message.revealKey !== undefined
          ? base64FromBytes(message.revealKey)
          : undefined);
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<AdminTx>): AdminTx {
    const message = { ...baseAdminTx } as AdminTx;
    if (object.txtype !== undefined && object.txtype !== null) {
      message.txtype = object.txtype;
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = object.processId;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.commitmentKey !== undefined && object.commitmentKey !== null) {
      message.commitmentKey = object.commitmentKey;
    }
    if (
      object.encryptionPrivateKey !== undefined &&
      object.encryptionPrivateKey !== null
    ) {
      message.encryptionPrivateKey = object.encryptionPrivateKey;
    }
    if (
      object.encryptionPublicKey !== undefined &&
      object.encryptionPublicKey !== null
    ) {
      message.encryptionPublicKey = object.encryptionPublicKey;
    }
    if (object.keyIndex !== undefined && object.keyIndex !== null) {
      message.keyIndex = object.keyIndex;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    }
    if (object.revealKey !== undefined && object.revealKey !== null) {
      message.revealKey = object.revealKey;
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    return message;
  },
};

const baseProcess: object = {
  startBlock: 0,
  blockCount: 0,
  commitmentKeys: "",
  encryptionPrivateKeys: "",
  encryptionPublicKeys: "",
  revealKeys: "",
  status: 0,
  namespace: 0,
  censusOrigin: 0,
};

export const Process = {
  encode(message: Process, writer: Writer = Writer.create()): Writer {
    if (message.processId.length !== 0) {
      writer.uint32(10).bytes(message.processId);
    }
    if (message.entityId.length !== 0) {
      writer.uint32(18).bytes(message.entityId);
    }
    if (message.startBlock !== 0) {
      writer.uint32(24).uint32(message.startBlock);
    }
    if (message.blockCount !== 0) {
      writer.uint32(32).uint32(message.blockCount);
    }
    if (message.censusRoot.length !== 0) {
      writer.uint32(42).bytes(message.censusRoot);
    }
    if (message.censusURI !== undefined) {
      writer.uint32(50).string(message.censusURI);
    }
    for (const v of message.commitmentKeys) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.encryptionPrivateKeys) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.encryptionPublicKeys) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.revealKeys) {
      writer.uint32(82).string(v!);
    }
    if (message.keyIndex !== undefined) {
      writer.uint32(88).uint32(message.keyIndex);
    }
    if (message.status !== 0) {
      writer.uint32(96).int32(message.status);
    }
    if (message.paramsSignature !== undefined) {
      writer.uint32(106).bytes(message.paramsSignature);
    }
    if (message.namespace !== 0) {
      writer.uint32(112).uint32(message.namespace);
    }
    if (message.envelopeType !== undefined) {
      EnvelopeType.encode(
        message.envelopeType,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.mode !== undefined) {
      ProcessMode.encode(message.mode, writer.uint32(130).fork()).ldelim();
    }
    if (message.questionIndex !== undefined) {
      writer.uint32(136).uint32(message.questionIndex);
    }
    if (message.questionCount !== undefined) {
      writer.uint32(144).uint32(message.questionCount);
    }
    if (message.voteOptions !== undefined) {
      ProcessVoteOptions.encode(
        message.voteOptions,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.censusOrigin !== 0) {
      writer.uint32(160).int32(message.censusOrigin);
    }
    if (message.results !== undefined) {
      ProcessResult.encode(message.results, writer.uint32(170).fork()).ldelim();
    }
    for (const v of message.resultsSignatures) {
      writer.uint32(178).bytes(v!);
    }
    if (message.ethIndexSlot !== undefined) {
      writer.uint32(184).uint32(message.ethIndexSlot);
    }
    if (message.sourceBlockHeight !== undefined) {
      writer.uint32(192).uint64(message.sourceBlockHeight);
    }
    if (message.owner !== undefined) {
      writer.uint32(202).bytes(message.owner);
    }
    if (message.metadata !== undefined) {
      writer.uint32(210).string(message.metadata);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Process {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProcess } as Process;
    message.commitmentKeys = [];
    message.encryptionPrivateKeys = [];
    message.encryptionPublicKeys = [];
    message.revealKeys = [];
    message.resultsSignatures = [];
    message.processId = new Uint8Array();
    message.entityId = new Uint8Array();
    message.censusRoot = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.processId = reader.bytes();
          break;
        case 2:
          message.entityId = reader.bytes();
          break;
        case 3:
          message.startBlock = reader.uint32();
          break;
        case 4:
          message.blockCount = reader.uint32();
          break;
        case 5:
          message.censusRoot = reader.bytes();
          break;
        case 6:
          message.censusURI = reader.string();
          break;
        case 7:
          message.commitmentKeys.push(reader.string());
          break;
        case 8:
          message.encryptionPrivateKeys.push(reader.string());
          break;
        case 9:
          message.encryptionPublicKeys.push(reader.string());
          break;
        case 10:
          message.revealKeys.push(reader.string());
          break;
        case 11:
          message.keyIndex = reader.uint32();
          break;
        case 12:
          message.status = reader.int32() as any;
          break;
        case 13:
          message.paramsSignature = reader.bytes();
          break;
        case 14:
          message.namespace = reader.uint32();
          break;
        case 15:
          message.envelopeType = EnvelopeType.decode(reader, reader.uint32());
          break;
        case 16:
          message.mode = ProcessMode.decode(reader, reader.uint32());
          break;
        case 17:
          message.questionIndex = reader.uint32();
          break;
        case 18:
          message.questionCount = reader.uint32();
          break;
        case 19:
          message.voteOptions = ProcessVoteOptions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.censusOrigin = reader.int32() as any;
          break;
        case 21:
          message.results = ProcessResult.decode(reader, reader.uint32());
          break;
        case 22:
          message.resultsSignatures.push(reader.bytes());
          break;
        case 23:
          message.ethIndexSlot = reader.uint32();
          break;
        case 24:
          message.sourceBlockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 25:
          message.owner = reader.bytes();
          break;
        case 26:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Process {
    const message = { ...baseProcess } as Process;
    message.commitmentKeys = [];
    message.encryptionPrivateKeys = [];
    message.encryptionPublicKeys = [];
    message.revealKeys = [];
    message.resultsSignatures = [];
    message.processId = new Uint8Array();
    message.entityId = new Uint8Array();
    message.censusRoot = new Uint8Array();
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = bytesFromBase64(object.processId);
    }
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = bytesFromBase64(object.entityId);
    }
    if (object.startBlock !== undefined && object.startBlock !== null) {
      message.startBlock = Number(object.startBlock);
    }
    if (object.blockCount !== undefined && object.blockCount !== null) {
      message.blockCount = Number(object.blockCount);
    }
    if (object.censusRoot !== undefined && object.censusRoot !== null) {
      message.censusRoot = bytesFromBase64(object.censusRoot);
    }
    if (object.censusURI !== undefined && object.censusURI !== null) {
      message.censusURI = String(object.censusURI);
    }
    if (object.commitmentKeys !== undefined && object.commitmentKeys !== null) {
      for (const e of object.commitmentKeys) {
        message.commitmentKeys.push(String(e));
      }
    }
    if (
      object.encryptionPrivateKeys !== undefined &&
      object.encryptionPrivateKeys !== null
    ) {
      for (const e of object.encryptionPrivateKeys) {
        message.encryptionPrivateKeys.push(String(e));
      }
    }
    if (
      object.encryptionPublicKeys !== undefined &&
      object.encryptionPublicKeys !== null
    ) {
      for (const e of object.encryptionPublicKeys) {
        message.encryptionPublicKeys.push(String(e));
      }
    }
    if (object.revealKeys !== undefined && object.revealKeys !== null) {
      for (const e of object.revealKeys) {
        message.revealKeys.push(String(e));
      }
    }
    if (object.keyIndex !== undefined && object.keyIndex !== null) {
      message.keyIndex = Number(object.keyIndex);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = processStatusFromJSON(object.status);
    }
    if (
      object.paramsSignature !== undefined &&
      object.paramsSignature !== null
    ) {
      message.paramsSignature = bytesFromBase64(object.paramsSignature);
    }
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = Number(object.namespace);
    }
    if (object.envelopeType !== undefined && object.envelopeType !== null) {
      message.envelopeType = EnvelopeType.fromJSON(object.envelopeType);
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = ProcessMode.fromJSON(object.mode);
    }
    if (object.questionIndex !== undefined && object.questionIndex !== null) {
      message.questionIndex = Number(object.questionIndex);
    }
    if (object.questionCount !== undefined && object.questionCount !== null) {
      message.questionCount = Number(object.questionCount);
    }
    if (object.voteOptions !== undefined && object.voteOptions !== null) {
      message.voteOptions = ProcessVoteOptions.fromJSON(object.voteOptions);
    }
    if (object.censusOrigin !== undefined && object.censusOrigin !== null) {
      message.censusOrigin = censusOriginFromJSON(object.censusOrigin);
    }
    if (object.results !== undefined && object.results !== null) {
      message.results = ProcessResult.fromJSON(object.results);
    }
    if (
      object.resultsSignatures !== undefined &&
      object.resultsSignatures !== null
    ) {
      for (const e of object.resultsSignatures) {
        message.resultsSignatures.push(bytesFromBase64(e));
      }
    }
    if (object.ethIndexSlot !== undefined && object.ethIndexSlot !== null) {
      message.ethIndexSlot = Number(object.ethIndexSlot);
    }
    if (
      object.sourceBlockHeight !== undefined &&
      object.sourceBlockHeight !== null
    ) {
      message.sourceBlockHeight = Number(object.sourceBlockHeight);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = bytesFromBase64(object.owner);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    }
    return message;
  },

  toJSON(message: Process): unknown {
    const obj: any = {};
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(
        message.processId !== undefined ? message.processId : new Uint8Array()
      ));
    message.entityId !== undefined &&
      (obj.entityId = base64FromBytes(
        message.entityId !== undefined ? message.entityId : new Uint8Array()
      ));
    message.startBlock !== undefined && (obj.startBlock = message.startBlock);
    message.blockCount !== undefined && (obj.blockCount = message.blockCount);
    message.censusRoot !== undefined &&
      (obj.censusRoot = base64FromBytes(
        message.censusRoot !== undefined ? message.censusRoot : new Uint8Array()
      ));
    message.censusURI !== undefined && (obj.censusURI = message.censusURI);
    if (message.commitmentKeys) {
      obj.commitmentKeys = message.commitmentKeys.map((e) => e);
    } else {
      obj.commitmentKeys = [];
    }
    if (message.encryptionPrivateKeys) {
      obj.encryptionPrivateKeys = message.encryptionPrivateKeys.map((e) => e);
    } else {
      obj.encryptionPrivateKeys = [];
    }
    if (message.encryptionPublicKeys) {
      obj.encryptionPublicKeys = message.encryptionPublicKeys.map((e) => e);
    } else {
      obj.encryptionPublicKeys = [];
    }
    if (message.revealKeys) {
      obj.revealKeys = message.revealKeys.map((e) => e);
    } else {
      obj.revealKeys = [];
    }
    message.keyIndex !== undefined && (obj.keyIndex = message.keyIndex);
    message.status !== undefined &&
      (obj.status = processStatusToJSON(message.status));
    message.paramsSignature !== undefined &&
      (obj.paramsSignature =
        message.paramsSignature !== undefined
          ? base64FromBytes(message.paramsSignature)
          : undefined);
    message.namespace !== undefined && (obj.namespace = message.namespace);
    message.envelopeType !== undefined &&
      (obj.envelopeType = message.envelopeType
        ? EnvelopeType.toJSON(message.envelopeType)
        : undefined);
    message.mode !== undefined &&
      (obj.mode = message.mode ? ProcessMode.toJSON(message.mode) : undefined);
    message.questionIndex !== undefined &&
      (obj.questionIndex = message.questionIndex);
    message.questionCount !== undefined &&
      (obj.questionCount = message.questionCount);
    message.voteOptions !== undefined &&
      (obj.voteOptions = message.voteOptions
        ? ProcessVoteOptions.toJSON(message.voteOptions)
        : undefined);
    message.censusOrigin !== undefined &&
      (obj.censusOrigin = censusOriginToJSON(message.censusOrigin));
    message.results !== undefined &&
      (obj.results = message.results
        ? ProcessResult.toJSON(message.results)
        : undefined);
    if (message.resultsSignatures) {
      obj.resultsSignatures = message.resultsSignatures.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.resultsSignatures = [];
    }
    message.ethIndexSlot !== undefined &&
      (obj.ethIndexSlot = message.ethIndexSlot);
    message.sourceBlockHeight !== undefined &&
      (obj.sourceBlockHeight = message.sourceBlockHeight);
    message.owner !== undefined &&
      (obj.owner =
        message.owner !== undefined
          ? base64FromBytes(message.owner)
          : undefined);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial(object: DeepPartial<Process>): Process {
    const message = { ...baseProcess } as Process;
    message.commitmentKeys = [];
    message.encryptionPrivateKeys = [];
    message.encryptionPublicKeys = [];
    message.revealKeys = [];
    message.resultsSignatures = [];
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = object.processId;
    }
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    }
    if (object.startBlock !== undefined && object.startBlock !== null) {
      message.startBlock = object.startBlock;
    }
    if (object.blockCount !== undefined && object.blockCount !== null) {
      message.blockCount = object.blockCount;
    }
    if (object.censusRoot !== undefined && object.censusRoot !== null) {
      message.censusRoot = object.censusRoot;
    }
    if (object.censusURI !== undefined && object.censusURI !== null) {
      message.censusURI = object.censusURI;
    }
    if (object.commitmentKeys !== undefined && object.commitmentKeys !== null) {
      for (const e of object.commitmentKeys) {
        message.commitmentKeys.push(e);
      }
    }
    if (
      object.encryptionPrivateKeys !== undefined &&
      object.encryptionPrivateKeys !== null
    ) {
      for (const e of object.encryptionPrivateKeys) {
        message.encryptionPrivateKeys.push(e);
      }
    }
    if (
      object.encryptionPublicKeys !== undefined &&
      object.encryptionPublicKeys !== null
    ) {
      for (const e of object.encryptionPublicKeys) {
        message.encryptionPublicKeys.push(e);
      }
    }
    if (object.revealKeys !== undefined && object.revealKeys !== null) {
      for (const e of object.revealKeys) {
        message.revealKeys.push(e);
      }
    }
    if (object.keyIndex !== undefined && object.keyIndex !== null) {
      message.keyIndex = object.keyIndex;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (
      object.paramsSignature !== undefined &&
      object.paramsSignature !== null
    ) {
      message.paramsSignature = object.paramsSignature;
    }
    if (object.namespace !== undefined && object.namespace !== null) {
      message.namespace = object.namespace;
    }
    if (object.envelopeType !== undefined && object.envelopeType !== null) {
      message.envelopeType = EnvelopeType.fromPartial(object.envelopeType);
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = ProcessMode.fromPartial(object.mode);
    }
    if (object.questionIndex !== undefined && object.questionIndex !== null) {
      message.questionIndex = object.questionIndex;
    }
    if (object.questionCount !== undefined && object.questionCount !== null) {
      message.questionCount = object.questionCount;
    }
    if (object.voteOptions !== undefined && object.voteOptions !== null) {
      message.voteOptions = ProcessVoteOptions.fromPartial(object.voteOptions);
    }
    if (object.censusOrigin !== undefined && object.censusOrigin !== null) {
      message.censusOrigin = object.censusOrigin;
    }
    if (object.results !== undefined && object.results !== null) {
      message.results = ProcessResult.fromPartial(object.results);
    }
    if (
      object.resultsSignatures !== undefined &&
      object.resultsSignatures !== null
    ) {
      for (const e of object.resultsSignatures) {
        message.resultsSignatures.push(e);
      }
    }
    if (object.ethIndexSlot !== undefined && object.ethIndexSlot !== null) {
      message.ethIndexSlot = object.ethIndexSlot;
    }
    if (
      object.sourceBlockHeight !== undefined &&
      object.sourceBlockHeight !== null
    ) {
      message.sourceBlockHeight = object.sourceBlockHeight;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
};

const baseEnvelopeType: object = {
  serial: false,
  anonymous: false,
  encryptedVotes: false,
  uniqueValues: false,
  costFromWeight: false,
};

export const EnvelopeType = {
  encode(message: EnvelopeType, writer: Writer = Writer.create()): Writer {
    if (message.serial === true) {
      writer.uint32(8).bool(message.serial);
    }
    if (message.anonymous === true) {
      writer.uint32(16).bool(message.anonymous);
    }
    if (message.encryptedVotes === true) {
      writer.uint32(24).bool(message.encryptedVotes);
    }
    if (message.uniqueValues === true) {
      writer.uint32(32).bool(message.uniqueValues);
    }
    if (message.costFromWeight === true) {
      writer.uint32(40).bool(message.costFromWeight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EnvelopeType {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEnvelopeType } as EnvelopeType;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.serial = reader.bool();
          break;
        case 2:
          message.anonymous = reader.bool();
          break;
        case 3:
          message.encryptedVotes = reader.bool();
          break;
        case 4:
          message.uniqueValues = reader.bool();
          break;
        case 5:
          message.costFromWeight = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnvelopeType {
    const message = { ...baseEnvelopeType } as EnvelopeType;
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = Boolean(object.serial);
    }
    if (object.anonymous !== undefined && object.anonymous !== null) {
      message.anonymous = Boolean(object.anonymous);
    }
    if (object.encryptedVotes !== undefined && object.encryptedVotes !== null) {
      message.encryptedVotes = Boolean(object.encryptedVotes);
    }
    if (object.uniqueValues !== undefined && object.uniqueValues !== null) {
      message.uniqueValues = Boolean(object.uniqueValues);
    }
    if (object.costFromWeight !== undefined && object.costFromWeight !== null) {
      message.costFromWeight = Boolean(object.costFromWeight);
    }
    return message;
  },

  toJSON(message: EnvelopeType): unknown {
    const obj: any = {};
    message.serial !== undefined && (obj.serial = message.serial);
    message.anonymous !== undefined && (obj.anonymous = message.anonymous);
    message.encryptedVotes !== undefined &&
      (obj.encryptedVotes = message.encryptedVotes);
    message.uniqueValues !== undefined &&
      (obj.uniqueValues = message.uniqueValues);
    message.costFromWeight !== undefined &&
      (obj.costFromWeight = message.costFromWeight);
    return obj;
  },

  fromPartial(object: DeepPartial<EnvelopeType>): EnvelopeType {
    const message = { ...baseEnvelopeType } as EnvelopeType;
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    }
    if (object.anonymous !== undefined && object.anonymous !== null) {
      message.anonymous = object.anonymous;
    }
    if (object.encryptedVotes !== undefined && object.encryptedVotes !== null) {
      message.encryptedVotes = object.encryptedVotes;
    }
    if (object.uniqueValues !== undefined && object.uniqueValues !== null) {
      message.uniqueValues = object.uniqueValues;
    }
    if (object.costFromWeight !== undefined && object.costFromWeight !== null) {
      message.costFromWeight = object.costFromWeight;
    }
    return message;
  },
};

const baseProcessMode: object = {
  autoStart: false,
  interruptible: false,
  dynamicCensus: false,
  encryptedMetaData: false,
};

export const ProcessMode = {
  encode(message: ProcessMode, writer: Writer = Writer.create()): Writer {
    if (message.autoStart === true) {
      writer.uint32(8).bool(message.autoStart);
    }
    if (message.interruptible === true) {
      writer.uint32(16).bool(message.interruptible);
    }
    if (message.dynamicCensus === true) {
      writer.uint32(24).bool(message.dynamicCensus);
    }
    if (message.encryptedMetaData === true) {
      writer.uint32(32).bool(message.encryptedMetaData);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProcessMode {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProcessMode } as ProcessMode;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.autoStart = reader.bool();
          break;
        case 2:
          message.interruptible = reader.bool();
          break;
        case 3:
          message.dynamicCensus = reader.bool();
          break;
        case 4:
          message.encryptedMetaData = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessMode {
    const message = { ...baseProcessMode } as ProcessMode;
    if (object.autoStart !== undefined && object.autoStart !== null) {
      message.autoStart = Boolean(object.autoStart);
    }
    if (object.interruptible !== undefined && object.interruptible !== null) {
      message.interruptible = Boolean(object.interruptible);
    }
    if (object.dynamicCensus !== undefined && object.dynamicCensus !== null) {
      message.dynamicCensus = Boolean(object.dynamicCensus);
    }
    if (
      object.encryptedMetaData !== undefined &&
      object.encryptedMetaData !== null
    ) {
      message.encryptedMetaData = Boolean(object.encryptedMetaData);
    }
    return message;
  },

  toJSON(message: ProcessMode): unknown {
    const obj: any = {};
    message.autoStart !== undefined && (obj.autoStart = message.autoStart);
    message.interruptible !== undefined &&
      (obj.interruptible = message.interruptible);
    message.dynamicCensus !== undefined &&
      (obj.dynamicCensus = message.dynamicCensus);
    message.encryptedMetaData !== undefined &&
      (obj.encryptedMetaData = message.encryptedMetaData);
    return obj;
  },

  fromPartial(object: DeepPartial<ProcessMode>): ProcessMode {
    const message = { ...baseProcessMode } as ProcessMode;
    if (object.autoStart !== undefined && object.autoStart !== null) {
      message.autoStart = object.autoStart;
    }
    if (object.interruptible !== undefined && object.interruptible !== null) {
      message.interruptible = object.interruptible;
    }
    if (object.dynamicCensus !== undefined && object.dynamicCensus !== null) {
      message.dynamicCensus = object.dynamicCensus;
    }
    if (
      object.encryptedMetaData !== undefined &&
      object.encryptedMetaData !== null
    ) {
      message.encryptedMetaData = object.encryptedMetaData;
    }
    return message;
  },
};

const baseProcessVoteOptions: object = {
  maxCount: 0,
  maxValue: 0,
  maxVoteOverwrites: 0,
  maxTotalCost: 0,
  costExponent: 0,
};

export const ProcessVoteOptions = {
  encode(
    message: ProcessVoteOptions,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.maxCount !== 0) {
      writer.uint32(8).uint32(message.maxCount);
    }
    if (message.maxValue !== 0) {
      writer.uint32(16).uint32(message.maxValue);
    }
    if (message.maxVoteOverwrites !== 0) {
      writer.uint32(24).uint32(message.maxVoteOverwrites);
    }
    if (message.maxTotalCost !== 0) {
      writer.uint32(32).uint32(message.maxTotalCost);
    }
    if (message.costExponent !== 0) {
      writer.uint32(40).uint32(message.costExponent);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProcessVoteOptions {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProcessVoteOptions } as ProcessVoteOptions;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxCount = reader.uint32();
          break;
        case 2:
          message.maxValue = reader.uint32();
          break;
        case 3:
          message.maxVoteOverwrites = reader.uint32();
          break;
        case 4:
          message.maxTotalCost = reader.uint32();
          break;
        case 5:
          message.costExponent = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessVoteOptions {
    const message = { ...baseProcessVoteOptions } as ProcessVoteOptions;
    if (object.maxCount !== undefined && object.maxCount !== null) {
      message.maxCount = Number(object.maxCount);
    }
    if (object.maxValue !== undefined && object.maxValue !== null) {
      message.maxValue = Number(object.maxValue);
    }
    if (
      object.maxVoteOverwrites !== undefined &&
      object.maxVoteOverwrites !== null
    ) {
      message.maxVoteOverwrites = Number(object.maxVoteOverwrites);
    }
    if (object.maxTotalCost !== undefined && object.maxTotalCost !== null) {
      message.maxTotalCost = Number(object.maxTotalCost);
    }
    if (object.costExponent !== undefined && object.costExponent !== null) {
      message.costExponent = Number(object.costExponent);
    }
    return message;
  },

  toJSON(message: ProcessVoteOptions): unknown {
    const obj: any = {};
    message.maxCount !== undefined && (obj.maxCount = message.maxCount);
    message.maxValue !== undefined && (obj.maxValue = message.maxValue);
    message.maxVoteOverwrites !== undefined &&
      (obj.maxVoteOverwrites = message.maxVoteOverwrites);
    message.maxTotalCost !== undefined &&
      (obj.maxTotalCost = message.maxTotalCost);
    message.costExponent !== undefined &&
      (obj.costExponent = message.costExponent);
    return obj;
  },

  fromPartial(object: DeepPartial<ProcessVoteOptions>): ProcessVoteOptions {
    const message = { ...baseProcessVoteOptions } as ProcessVoteOptions;
    if (object.maxCount !== undefined && object.maxCount !== null) {
      message.maxCount = object.maxCount;
    }
    if (object.maxValue !== undefined && object.maxValue !== null) {
      message.maxValue = object.maxValue;
    }
    if (
      object.maxVoteOverwrites !== undefined &&
      object.maxVoteOverwrites !== null
    ) {
      message.maxVoteOverwrites = object.maxVoteOverwrites;
    }
    if (object.maxTotalCost !== undefined && object.maxTotalCost !== null) {
      message.maxTotalCost = object.maxTotalCost;
    }
    if (object.costExponent !== undefined && object.costExponent !== null) {
      message.costExponent = object.costExponent;
    }
    return message;
  },
};

const baseOracleList: object = {};

export const OracleList = {
  encode(message: OracleList, writer: Writer = Writer.create()): Writer {
    for (const v of message.oracles) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OracleList {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOracleList } as OracleList;
    message.oracles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracles.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleList {
    const message = { ...baseOracleList } as OracleList;
    message.oracles = [];
    if (object.oracles !== undefined && object.oracles !== null) {
      for (const e of object.oracles) {
        message.oracles.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: OracleList): unknown {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.oracles = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OracleList>): OracleList {
    const message = { ...baseOracleList } as OracleList;
    message.oracles = [];
    if (object.oracles !== undefined && object.oracles !== null) {
      for (const e of object.oracles) {
        message.oracles.push(e);
      }
    }
    return message;
  },
};

const baseValidatorList: object = {};

export const ValidatorList = {
  encode(message: ValidatorList, writer: Writer = Writer.create()): Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ValidatorList {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidatorList } as ValidatorList;
    message.validators = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorList {
    const message = { ...baseValidatorList } as ValidatorList;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ValidatorList): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.validators = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorList>): ValidatorList {
    const message = { ...baseValidatorList } as ValidatorList;
    message.validators = [];
    if (object.validators !== undefined && object.validators !== null) {
      for (const e of object.validators) {
        message.validators.push(Validator.fromPartial(e));
      }
    }
    return message;
  },
};

const baseValidator: object = { power: 0, name: "" };

export const Validator = {
  encode(message: Validator, writer: Writer = Writer.create()): Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.pubKey.length !== 0) {
      writer.uint32(18).bytes(message.pubKey);
    }
    if (message.power !== 0) {
      writer.uint32(24).uint64(message.power);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseValidator } as Validator;
    message.address = new Uint8Array();
    message.pubKey = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.pubKey = reader.bytes();
          break;
        case 3:
          message.power = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    const message = { ...baseValidator } as Validator;
    message.address = new Uint8Array();
    message.pubKey = new Uint8Array();
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = bytesFromBase64(object.pubKey);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = Number(object.power);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    return message;
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(
        message.address !== undefined ? message.address : new Uint8Array()
      ));
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(
        message.pubKey !== undefined ? message.pubKey : new Uint8Array()
      ));
    message.power !== undefined && (obj.power = message.power);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = { ...baseValidator } as Validator;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = object.power;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
};

const baseVote: object = { height: 0, encryptionKeyIndexes: 0 };

export const Vote = {
  encode(message: Vote, writer: Writer = Writer.create()): Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint32(message.height);
    }
    if (message.nullifier.length !== 0) {
      writer.uint32(18).bytes(message.nullifier);
    }
    if (message.processId.length !== 0) {
      writer.uint32(26).bytes(message.processId);
    }
    if (message.votePackage.length !== 0) {
      writer.uint32(34).bytes(message.votePackage);
    }
    writer.uint32(42).fork();
    for (const v of message.encryptionKeyIndexes) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.weight.length !== 0) {
      writer.uint32(50).bytes(message.weight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Vote {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVote } as Vote;
    message.encryptionKeyIndexes = [];
    message.nullifier = new Uint8Array();
    message.processId = new Uint8Array();
    message.votePackage = new Uint8Array();
    message.weight = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint32();
          break;
        case 2:
          message.nullifier = reader.bytes();
          break;
        case 3:
          message.processId = reader.bytes();
          break;
        case 4:
          message.votePackage = reader.bytes();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.encryptionKeyIndexes.push(reader.uint32());
            }
          } else {
            message.encryptionKeyIndexes.push(reader.uint32());
          }
          break;
        case 6:
          message.weight = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vote {
    const message = { ...baseVote } as Vote;
    message.encryptionKeyIndexes = [];
    message.nullifier = new Uint8Array();
    message.processId = new Uint8Array();
    message.votePackage = new Uint8Array();
    message.weight = new Uint8Array();
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    }
    if (object.nullifier !== undefined && object.nullifier !== null) {
      message.nullifier = bytesFromBase64(object.nullifier);
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = bytesFromBase64(object.processId);
    }
    if (object.votePackage !== undefined && object.votePackage !== null) {
      message.votePackage = bytesFromBase64(object.votePackage);
    }
    if (
      object.encryptionKeyIndexes !== undefined &&
      object.encryptionKeyIndexes !== null
    ) {
      for (const e of object.encryptionKeyIndexes) {
        message.encryptionKeyIndexes.push(Number(e));
      }
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = bytesFromBase64(object.weight);
    }
    return message;
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    message.nullifier !== undefined &&
      (obj.nullifier = base64FromBytes(
        message.nullifier !== undefined ? message.nullifier : new Uint8Array()
      ));
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(
        message.processId !== undefined ? message.processId : new Uint8Array()
      ));
    message.votePackage !== undefined &&
      (obj.votePackage = base64FromBytes(
        message.votePackage !== undefined
          ? message.votePackage
          : new Uint8Array()
      ));
    if (message.encryptionKeyIndexes) {
      obj.encryptionKeyIndexes = message.encryptionKeyIndexes.map((e) => e);
    } else {
      obj.encryptionKeyIndexes = [];
    }
    message.weight !== undefined &&
      (obj.weight = base64FromBytes(
        message.weight !== undefined ? message.weight : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = { ...baseVote } as Vote;
    message.encryptionKeyIndexes = [];
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    }
    if (object.nullifier !== undefined && object.nullifier !== null) {
      message.nullifier = object.nullifier;
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = object.processId;
    }
    if (object.votePackage !== undefined && object.votePackage !== null) {
      message.votePackage = object.votePackage;
    }
    if (
      object.encryptionKeyIndexes !== undefined &&
      object.encryptionKeyIndexes !== null
    ) {
      for (const e of object.encryptionKeyIndexes) {
        message.encryptionKeyIndexes.push(e);
      }
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
};

const baseTendermintHeader: object = { chainId: "", height: 0, timestamp: 0 };

export const TendermintHeader = {
  encode(message: TendermintHeader, writer: Writer = Writer.create()): Writer {
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.height !== 0) {
      writer.uint32(24).int64(message.height);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).int64(message.timestamp);
    }
    if (message.blockID.length !== 0) {
      writer.uint32(42).bytes(message.blockID);
    }
    if (message.lastCommitHash.length !== 0) {
      writer.uint32(50).bytes(message.lastCommitHash);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(58).bytes(message.dataHash);
    }
    if (message.validatorsHash.length !== 0) {
      writer.uint32(66).bytes(message.validatorsHash);
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(74).bytes(message.nextValidatorsHash);
    }
    if (message.consensusHash.length !== 0) {
      writer.uint32(82).bytes(message.consensusHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(90).bytes(message.appHash);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.evidenceHash.length !== 0) {
      writer.uint32(106).bytes(message.evidenceHash);
    }
    if (message.proposerAddress.length !== 0) {
      writer.uint32(114).bytes(message.proposerAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TendermintHeader {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTendermintHeader } as TendermintHeader;
    message.blockID = new Uint8Array();
    message.lastCommitHash = new Uint8Array();
    message.dataHash = new Uint8Array();
    message.validatorsHash = new Uint8Array();
    message.nextValidatorsHash = new Uint8Array();
    message.consensusHash = new Uint8Array();
    message.appHash = new Uint8Array();
    message.lastResultsHash = new Uint8Array();
    message.evidenceHash = new Uint8Array();
    message.proposerAddress = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.height = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.timestamp = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.blockID = reader.bytes();
          break;
        case 6:
          message.lastCommitHash = reader.bytes();
          break;
        case 7:
          message.dataHash = reader.bytes();
          break;
        case 8:
          message.validatorsHash = reader.bytes();
          break;
        case 9:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 10:
          message.consensusHash = reader.bytes();
          break;
        case 11:
          message.appHash = reader.bytes();
          break;
        case 12:
          message.lastResultsHash = reader.bytes();
          break;
        case 13:
          message.evidenceHash = reader.bytes();
          break;
        case 14:
          message.proposerAddress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TendermintHeader {
    const message = { ...baseTendermintHeader } as TendermintHeader;
    message.blockID = new Uint8Array();
    message.lastCommitHash = new Uint8Array();
    message.dataHash = new Uint8Array();
    message.validatorsHash = new Uint8Array();
    message.nextValidatorsHash = new Uint8Array();
    message.consensusHash = new Uint8Array();
    message.appHash = new Uint8Array();
    message.lastResultsHash = new Uint8Array();
    message.evidenceHash = new Uint8Array();
    message.proposerAddress = new Uint8Array();
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    }
    if (object.blockID !== undefined && object.blockID !== null) {
      message.blockID = bytesFromBase64(object.blockID);
    }
    if (object.lastCommitHash !== undefined && object.lastCommitHash !== null) {
      message.lastCommitHash = bytesFromBase64(object.lastCommitHash);
    }
    if (object.dataHash !== undefined && object.dataHash !== null) {
      message.dataHash = bytesFromBase64(object.dataHash);
    }
    if (object.validatorsHash !== undefined && object.validatorsHash !== null) {
      message.validatorsHash = bytesFromBase64(object.validatorsHash);
    }
    if (
      object.nextValidatorsHash !== undefined &&
      object.nextValidatorsHash !== null
    ) {
      message.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    }
    if (object.consensusHash !== undefined && object.consensusHash !== null) {
      message.consensusHash = bytesFromBase64(object.consensusHash);
    }
    if (object.appHash !== undefined && object.appHash !== null) {
      message.appHash = bytesFromBase64(object.appHash);
    }
    if (
      object.lastResultsHash !== undefined &&
      object.lastResultsHash !== null
    ) {
      message.lastResultsHash = bytesFromBase64(object.lastResultsHash);
    }
    if (object.evidenceHash !== undefined && object.evidenceHash !== null) {
      message.evidenceHash = bytesFromBase64(object.evidenceHash);
    }
    if (
      object.proposerAddress !== undefined &&
      object.proposerAddress !== null
    ) {
      message.proposerAddress = bytesFromBase64(object.proposerAddress);
    }
    return message;
  },

  toJSON(message: TendermintHeader): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined && (obj.height = message.height);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.blockID !== undefined &&
      (obj.blockID = base64FromBytes(
        message.blockID !== undefined ? message.blockID : new Uint8Array()
      ));
    message.lastCommitHash !== undefined &&
      (obj.lastCommitHash = base64FromBytes(
        message.lastCommitHash !== undefined
          ? message.lastCommitHash
          : new Uint8Array()
      ));
    message.dataHash !== undefined &&
      (obj.dataHash = base64FromBytes(
        message.dataHash !== undefined ? message.dataHash : new Uint8Array()
      ));
    message.validatorsHash !== undefined &&
      (obj.validatorsHash = base64FromBytes(
        message.validatorsHash !== undefined
          ? message.validatorsHash
          : new Uint8Array()
      ));
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined
          ? message.nextValidatorsHash
          : new Uint8Array()
      ));
    message.consensusHash !== undefined &&
      (obj.consensusHash = base64FromBytes(
        message.consensusHash !== undefined
          ? message.consensusHash
          : new Uint8Array()
      ));
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(
        message.appHash !== undefined ? message.appHash : new Uint8Array()
      ));
    message.lastResultsHash !== undefined &&
      (obj.lastResultsHash = base64FromBytes(
        message.lastResultsHash !== undefined
          ? message.lastResultsHash
          : new Uint8Array()
      ));
    message.evidenceHash !== undefined &&
      (obj.evidenceHash = base64FromBytes(
        message.evidenceHash !== undefined
          ? message.evidenceHash
          : new Uint8Array()
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined
          ? message.proposerAddress
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<TendermintHeader>): TendermintHeader {
    const message = { ...baseTendermintHeader } as TendermintHeader;
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    }
    if (object.blockID !== undefined && object.blockID !== null) {
      message.blockID = object.blockID;
    }
    if (object.lastCommitHash !== undefined && object.lastCommitHash !== null) {
      message.lastCommitHash = object.lastCommitHash;
    }
    if (object.dataHash !== undefined && object.dataHash !== null) {
      message.dataHash = object.dataHash;
    }
    if (object.validatorsHash !== undefined && object.validatorsHash !== null) {
      message.validatorsHash = object.validatorsHash;
    }
    if (
      object.nextValidatorsHash !== undefined &&
      object.nextValidatorsHash !== null
    ) {
      message.nextValidatorsHash = object.nextValidatorsHash;
    }
    if (object.consensusHash !== undefined && object.consensusHash !== null) {
      message.consensusHash = object.consensusHash;
    }
    if (object.appHash !== undefined && object.appHash !== null) {
      message.appHash = object.appHash;
    }
    if (
      object.lastResultsHash !== undefined &&
      object.lastResultsHash !== null
    ) {
      message.lastResultsHash = object.lastResultsHash;
    }
    if (object.evidenceHash !== undefined && object.evidenceHash !== null) {
      message.evidenceHash = object.evidenceHash;
    }
    if (
      object.proposerAddress !== undefined &&
      object.proposerAddress !== null
    ) {
      message.proposerAddress = object.proposerAddress;
    }
    return message;
  },
};

const baseProcessResult: object = {};

export const ProcessResult = {
  encode(message: ProcessResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.votes) {
      QuestionResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.processId !== undefined) {
      writer.uint32(18).bytes(message.processId);
    }
    if (message.entityId !== undefined) {
      writer.uint32(26).bytes(message.entityId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProcessResult {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProcessResult } as ProcessResult;
    message.votes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(QuestionResult.decode(reader, reader.uint32()));
          break;
        case 2:
          message.processId = reader.bytes();
          break;
        case 3:
          message.entityId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessResult {
    const message = { ...baseProcessResult } as ProcessResult;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(QuestionResult.fromJSON(e));
      }
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = bytesFromBase64(object.processId);
    }
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = bytesFromBase64(object.entityId);
    }
    return message;
  },

  toJSON(message: ProcessResult): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) =>
        e ? QuestionResult.toJSON(e) : undefined
      );
    } else {
      obj.votes = [];
    }
    message.processId !== undefined &&
      (obj.processId =
        message.processId !== undefined
          ? base64FromBytes(message.processId)
          : undefined);
    message.entityId !== undefined &&
      (obj.entityId =
        message.entityId !== undefined
          ? base64FromBytes(message.entityId)
          : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProcessResult>): ProcessResult {
    const message = { ...baseProcessResult } as ProcessResult;
    message.votes = [];
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(QuestionResult.fromPartial(e));
      }
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = object.processId;
    }
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = object.entityId;
    }
    return message;
  },
};

const baseQuestionResult: object = {};

export const QuestionResult = {
  encode(message: QuestionResult, writer: Writer = Writer.create()): Writer {
    for (const v of message.question) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QuestionResult {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuestionResult } as QuestionResult;
    message.question = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.question.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuestionResult {
    const message = { ...baseQuestionResult } as QuestionResult;
    message.question = [];
    if (object.question !== undefined && object.question !== null) {
      for (const e of object.question) {
        message.question.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: QuestionResult): unknown {
    const obj: any = {};
    if (message.question) {
      obj.question = message.question.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.question = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QuestionResult>): QuestionResult {
    const message = { ...baseQuestionResult } as QuestionResult;
    message.question = [];
    if (object.question !== undefined && object.question !== null) {
      for (const e of object.question) {
        message.question.push(e);
      }
    }
    return message;
  },
};

const baseProcessEndingList: object = {};

export const ProcessEndingList = {
  encode(message: ProcessEndingList, writer: Writer = Writer.create()): Writer {
    for (const v of message.processList) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProcessEndingList {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProcessEndingList } as ProcessEndingList;
    message.processList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.processList.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessEndingList {
    const message = { ...baseProcessEndingList } as ProcessEndingList;
    message.processList = [];
    if (object.processList !== undefined && object.processList !== null) {
      for (const e of object.processList) {
        message.processList.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: ProcessEndingList): unknown {
    const obj: any = {};
    if (message.processList) {
      obj.processList = message.processList.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.processList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProcessEndingList>): ProcessEndingList {
    const message = { ...baseProcessEndingList } as ProcessEndingList;
    message.processList = [];
    if (object.processList !== undefined && object.processList !== null) {
      for (const e of object.processList) {
        message.processList.push(e);
      }
    }
    return message;
  },
};

const baseStoredKeys: object = {};

export const StoredKeys = {
  encode(message: StoredKeys, writer: Writer = Writer.create()): Writer {
    for (const v of message.pids) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StoredKeys {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStoredKeys } as StoredKeys;
    message.pids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pids.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoredKeys {
    const message = { ...baseStoredKeys } as StoredKeys;
    message.pids = [];
    if (object.pids !== undefined && object.pids !== null) {
      for (const e of object.pids) {
        message.pids.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: StoredKeys): unknown {
    const obj: any = {};
    if (message.pids) {
      obj.pids = message.pids.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.pids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<StoredKeys>): StoredKeys {
    const message = { ...baseStoredKeys } as StoredKeys;
    message.pids = [];
    if (object.pids !== undefined && object.pids !== null) {
      for (const e of object.pids) {
        message.pids.push(e);
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
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
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
