/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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
  REGISTER_VOTER_KEY = 13,
  MINT_TOKENS = 14,
  SEND_TOKENS = 15,
  SET_TRANSACTION_COSTS = 16,
  SET_ACCOUNT_INFO_URI = 17,
  ADD_DELEGATE_FOR_ACCOUNT = 18,
  DEL_DELEGATE_FOR_ACCOUNT = 19,
  COLLECT_FAUCET = 20,
  ADD_KEYKEEPER = 21,
  DELETE_KEYKEEPER = 22,
  CREATE_ACCOUNT = 23,
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
    case 13:
    case "REGISTER_VOTER_KEY":
      return TxType.REGISTER_VOTER_KEY;
    case 14:
    case "MINT_TOKENS":
      return TxType.MINT_TOKENS;
    case 15:
    case "SEND_TOKENS":
      return TxType.SEND_TOKENS;
    case 16:
    case "SET_TRANSACTION_COSTS":
      return TxType.SET_TRANSACTION_COSTS;
    case 17:
    case "SET_ACCOUNT_INFO_URI":
      return TxType.SET_ACCOUNT_INFO_URI;
    case 18:
    case "ADD_DELEGATE_FOR_ACCOUNT":
      return TxType.ADD_DELEGATE_FOR_ACCOUNT;
    case 19:
    case "DEL_DELEGATE_FOR_ACCOUNT":
      return TxType.DEL_DELEGATE_FOR_ACCOUNT;
    case 20:
    case "COLLECT_FAUCET":
      return TxType.COLLECT_FAUCET;
    case 21:
    case "ADD_KEYKEEPER":
      return TxType.ADD_KEYKEEPER;
    case 22:
    case "DELETE_KEYKEEPER":
      return TxType.DELETE_KEYKEEPER;
    case 23:
    case "CREATE_ACCOUNT":
      return TxType.CREATE_ACCOUNT;
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
    case TxType.REGISTER_VOTER_KEY:
      return "REGISTER_VOTER_KEY";
    case TxType.MINT_TOKENS:
      return "MINT_TOKENS";
    case TxType.SEND_TOKENS:
      return "SEND_TOKENS";
    case TxType.SET_TRANSACTION_COSTS:
      return "SET_TRANSACTION_COSTS";
    case TxType.SET_ACCOUNT_INFO_URI:
      return "SET_ACCOUNT_INFO_URI";
    case TxType.ADD_DELEGATE_FOR_ACCOUNT:
      return "ADD_DELEGATE_FOR_ACCOUNT";
    case TxType.DEL_DELEGATE_FOR_ACCOUNT:
      return "DEL_DELEGATE_FOR_ACCOUNT";
    case TxType.COLLECT_FAUCET:
      return "COLLECT_FAUCET";
    case TxType.ADD_KEYKEEPER:
      return "ADD_KEYKEEPER";
    case TxType.DELETE_KEYKEEPER:
      return "DELETE_KEYKEEPER";
    case TxType.CREATE_ACCOUNT:
      return "CREATE_ACCOUNT";
    case TxType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case ProcessStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SourceNetworkId {
  UNKNOWN = 0,
  ETH_MAINNET = 1,
  ETH_RINKEBY = 2,
  ETH_GOERLI = 3,
  POA_XDAI = 4,
  POA_SOKOL = 5,
  POLYGON = 6,
  BSC = 7,
  ETH_MAINNET_SIGNALING = 8,
  ETH_RINKEBY_SIGNALING = 9,
  AVAX_FUJI = 10,
  AVAX = 11,
  POLYGON_MUMBAI = 12,
  OPTIMISM = 13,
  ARBITRUM = 14,
  UNRECOGNIZED = -1,
}

export function sourceNetworkIdFromJSON(object: any): SourceNetworkId {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return SourceNetworkId.UNKNOWN;
    case 1:
    case "ETH_MAINNET":
      return SourceNetworkId.ETH_MAINNET;
    case 2:
    case "ETH_RINKEBY":
      return SourceNetworkId.ETH_RINKEBY;
    case 3:
    case "ETH_GOERLI":
      return SourceNetworkId.ETH_GOERLI;
    case 4:
    case "POA_XDAI":
      return SourceNetworkId.POA_XDAI;
    case 5:
    case "POA_SOKOL":
      return SourceNetworkId.POA_SOKOL;
    case 6:
    case "POLYGON":
      return SourceNetworkId.POLYGON;
    case 7:
    case "BSC":
      return SourceNetworkId.BSC;
    case 8:
    case "ETH_MAINNET_SIGNALING":
      return SourceNetworkId.ETH_MAINNET_SIGNALING;
    case 9:
    case "ETH_RINKEBY_SIGNALING":
      return SourceNetworkId.ETH_RINKEBY_SIGNALING;
    case 10:
    case "AVAX_FUJI":
      return SourceNetworkId.AVAX_FUJI;
    case 11:
    case "AVAX":
      return SourceNetworkId.AVAX;
    case 12:
    case "POLYGON_MUMBAI":
      return SourceNetworkId.POLYGON_MUMBAI;
    case 13:
    case "OPTIMISM":
      return SourceNetworkId.OPTIMISM;
    case 14:
    case "ARBITRUM":
      return SourceNetworkId.ARBITRUM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SourceNetworkId.UNRECOGNIZED;
  }
}

export function sourceNetworkIdToJSON(object: SourceNetworkId): string {
  switch (object) {
    case SourceNetworkId.UNKNOWN:
      return "UNKNOWN";
    case SourceNetworkId.ETH_MAINNET:
      return "ETH_MAINNET";
    case SourceNetworkId.ETH_RINKEBY:
      return "ETH_RINKEBY";
    case SourceNetworkId.ETH_GOERLI:
      return "ETH_GOERLI";
    case SourceNetworkId.POA_XDAI:
      return "POA_XDAI";
    case SourceNetworkId.POA_SOKOL:
      return "POA_SOKOL";
    case SourceNetworkId.POLYGON:
      return "POLYGON";
    case SourceNetworkId.BSC:
      return "BSC";
    case SourceNetworkId.ETH_MAINNET_SIGNALING:
      return "ETH_MAINNET_SIGNALING";
    case SourceNetworkId.ETH_RINKEBY_SIGNALING:
      return "ETH_RINKEBY_SIGNALING";
    case SourceNetworkId.AVAX_FUJI:
      return "AVAX_FUJI";
    case SourceNetworkId.AVAX:
      return "AVAX";
    case SourceNetworkId.POLYGON_MUMBAI:
      return "POLYGON_MUMBAI";
    case SourceNetworkId.OPTIMISM:
      return "OPTIMISM";
    case SourceNetworkId.ARBITRUM:
      return "ARBITRUM";
    case SourceNetworkId.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
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
    case CensusOrigin.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface VoteEnvelope {
  /** Unique number per vote attempt, so that replay attacks can't reuse this payload */
  nonce: Uint8Array;
  /** The process for which the vote is casted */
  processId: Uint8Array;
  /** Franchise proof */
  proof:
    | Proof
    | undefined;
  /** JSON string of the Vote Package (potentially encrypted), encoded as bytes. */
  votePackage: Uint8Array;
  /** Hash of the private key + processId */
  nullifier: Uint8Array;
  /** On encrypted votes, contains the (sorted) indexes of the keys used to encrypt */
  encryptionKeyIndexes: number[];
}

export interface Census {
}

export enum Census_Type {
  UNKNOWN = 0,
  ARBO_BLAKE2B = 1,
  ARBO_POSEIDON = 2,
  ETHEREUMSTORAGE = 3,
  ETHEREUMACCOUNT = 4,
  CA = 5,
  GRAVITON = 1001,
  IDEN3 = 1002,
  UNRECOGNIZED = -1,
}

export function census_TypeFromJSON(object: any): Census_Type {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return Census_Type.UNKNOWN;
    case 1:
    case "ARBO_BLAKE2B":
      return Census_Type.ARBO_BLAKE2B;
    case 2:
    case "ARBO_POSEIDON":
      return Census_Type.ARBO_POSEIDON;
    case 3:
    case "ETHEREUMSTORAGE":
      return Census_Type.ETHEREUMSTORAGE;
    case 4:
    case "ETHEREUMACCOUNT":
      return Census_Type.ETHEREUMACCOUNT;
    case 5:
    case "CA":
      return Census_Type.CA;
    case 1001:
    case "GRAVITON":
      return Census_Type.GRAVITON;
    case 1002:
    case "IDEN3":
      return Census_Type.IDEN3;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Census_Type.UNRECOGNIZED;
  }
}

export function census_TypeToJSON(object: Census_Type): string {
  switch (object) {
    case Census_Type.UNKNOWN:
      return "UNKNOWN";
    case Census_Type.ARBO_BLAKE2B:
      return "ARBO_BLAKE2B";
    case Census_Type.ARBO_POSEIDON:
      return "ARBO_POSEIDON";
    case Census_Type.ETHEREUMSTORAGE:
      return "ETHEREUMSTORAGE";
    case Census_Type.ETHEREUMACCOUNT:
      return "ETHEREUMACCOUNT";
    case Census_Type.CA:
      return "CA";
    case Census_Type.GRAVITON:
      return "GRAVITON";
    case Census_Type.IDEN3:
      return "IDEN3";
    case Census_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Proof {
  payload?:
    | { $case: "graviton"; graviton: ProofGraviton }
    | { $case: "iden3"; iden3: ProofIden3 }
    | { $case: "ethereumStorage"; ethereumStorage: ProofEthereumStorage }
    | { $case: "ethereumAccount"; ethereumAccount: ProofEthereumAccount }
    | { $case: "ca"; ca: ProofCA }
    | { $case: "arbo"; arbo: ProofArbo }
    | { $case: "zkSnark"; zkSnark: ProofZkSNARK }
    | { $case: "minimeStorage"; minimeStorage: ProofMinime };
}

export interface ProofGraviton {
  siblings: Uint8Array;
}

export interface ProofIden3 {
  siblings: Uint8Array;
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

export interface ProofMinime {
  proofPrevBlock: ProofEthereumStorage | undefined;
  proofNextBlock: ProofEthereumStorage | undefined;
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
    case ProofCA_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CAbundle {
  processId: Uint8Array;
  address: Uint8Array;
}

export interface ProofArbo {
  type: ProofArbo_Type;
  siblings: Uint8Array;
  value: Uint8Array;
  keyType: ProofArbo_KeyType;
}

export enum ProofArbo_Type {
  BLAKE2B = 0,
  POSEIDON = 1,
  UNRECOGNIZED = -1,
}

export function proofArbo_TypeFromJSON(object: any): ProofArbo_Type {
  switch (object) {
    case 0:
    case "BLAKE2B":
      return ProofArbo_Type.BLAKE2B;
    case 1:
    case "POSEIDON":
      return ProofArbo_Type.POSEIDON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProofArbo_Type.UNRECOGNIZED;
  }
}

export function proofArbo_TypeToJSON(object: ProofArbo_Type): string {
  switch (object) {
    case ProofArbo_Type.BLAKE2B:
      return "BLAKE2B";
    case ProofArbo_Type.POSEIDON:
      return "POSEIDON";
    case ProofArbo_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ProofArbo_KeyType {
  PUBKEY = 0,
  ADDRESS = 1,
  UNRECOGNIZED = -1,
}

export function proofArbo_KeyTypeFromJSON(object: any): ProofArbo_KeyType {
  switch (object) {
    case 0:
    case "PUBKEY":
      return ProofArbo_KeyType.PUBKEY;
    case 1:
    case "ADDRESS":
      return ProofArbo_KeyType.ADDRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProofArbo_KeyType.UNRECOGNIZED;
  }
}

export function proofArbo_KeyTypeToJSON(object: ProofArbo_KeyType): string {
  switch (object) {
    case ProofArbo_KeyType.PUBKEY:
      return "PUBKEY";
    case ProofArbo_KeyType.ADDRESS:
      return "ADDRESS";
    case ProofArbo_KeyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Groth16 zkSNARK proof + public inputs */
export interface ProofZkSNARK {
  /**
   * circuitParametersIndex defines the index of the parameter set of the
   * circuit. Each process has defined a set of available parameters for
   * the same circuit, the 'parametersIndex' defines the index of the set
   * for which the ProofZkSNARK belongs for the circuit used in that
   * process.
   */
  circuitParametersIndex: number;
  /** a represents a G1 point in Affine coordinates */
  a: string[];
  /**
   * b represents a G2 point in Affine coordinates, represented by an
   * array of arrays: []string => [2][2]bigint).
   * [w, x, y, z] => [[w, x], [y, z]]
   */
  b: string[];
  /** c represents a G1 point in Affine coordinates */
  c: string[];
  publicInputs: string[];
}

/** Account represents an entity with an amount of tokens, usually attached to an address. */
export interface Account {
  balance: number;
  nonce: number;
  infoURI: string;
  delegateAddrs: Uint8Array[];
  processIndex: number;
}

export interface Treasurer {
  address: Uint8Array;
  nonce: number;
}

export interface Tx {
  payload?:
    | { $case: "vote"; vote: VoteEnvelope }
    | { $case: "newProcess"; newProcess: NewProcessTx }
    | { $case: "admin"; admin: AdminTx }
    | { $case: "setProcess"; setProcess: SetProcessTx }
    | { $case: "registerKey"; registerKey: RegisterKeyTx }
    | { $case: "mintTokens"; mintTokens: MintTokensTx }
    | { $case: "sendTokens"; sendTokens: SendTokensTx }
    | { $case: "setTransactionCosts"; setTransactionCosts: SetTransactionCostsTx }
    | { $case: "setAccount"; setAccount: SetAccountTx }
    | { $case: "collectFaucet"; collectFaucet: CollectFaucetTx }
    | { $case: "setKeykeeper"; setKeykeeper: SetKeykeeperTx };
}

export interface SignedTx {
  /** The bytes produced by Marshaling a Tx{} message */
  tx: Uint8Array;
  /**
   * The signature for the tx bytes.
   * signature is only required in those transactions that actually need signature.
   * I.e zk-Snarks based transactions won't needed, however the transaction should use
   * this message type in order to preserve consistency on the Vochain
   */
  signature?: Uint8Array | undefined;
}

export interface NewProcessTx {
  txtype: TxType;
  nonce: number;
  process: Process | undefined;
}

export interface SetProcessTx {
  txtype: TxType;
  nonce: number;
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
  encryptionPrivateKey?: Uint8Array | undefined;
  encryptionPublicKey?: Uint8Array | undefined;
  keyIndex?: number | undefined;
  power?: number | undefined;
  publicKey?: Uint8Array | undefined;
  nonce: number;
}

export interface RegisterKeyTx {
  /** Unique number per vote attempt, so that replay attacks can't reuse this payload */
  nonce: number;
  /** The process for which the vote is casted */
  processId: Uint8Array;
  /** Franchise proof */
  proof:
    | Proof
    | undefined;
  /** New key to register */
  newKey: Uint8Array;
  /** Weight to delegate to newKey */
  weight: string;
}

export interface MintTokensTx {
  txtype: TxType;
  nonce: number;
  to: Uint8Array;
  value: number;
}

export interface SendTokensTx {
  txtype: TxType;
  nonce: number;
  from: Uint8Array;
  to: Uint8Array;
  value: number;
}

export interface SetTransactionCostsTx {
  txtype: TxType;
  nonce: number;
  value: number;
}

export interface SetAccountTx {
  txtype: TxType;
  nonce?: number | undefined;
  infoURI?: string | undefined;
  account?: Uint8Array | undefined;
  faucetPackage?: FaucetPackage | undefined;
  delegates: Uint8Array[];
}

export interface CollectFaucetTx {
  txType: TxType;
  faucetPackage: FaucetPackage | undefined;
  nonce: number;
}

export interface FaucetPayload {
  identifier: number;
  to: Uint8Array;
  amount: number;
}

export interface FaucetPackage {
  payload: Uint8Array;
  signature: Uint8Array;
}

export interface SetKeykeeperTx {
  txtype: TxType;
  nonce: number;
  keykeeper: Uint8Array;
}

export interface Process {
  processId: Uint8Array;
  /** EntityId identifies unequivocally an entity */
  entityId: Uint8Array;
  /** StartBlock represents the tendermint block where the process goes from scheduled to active */
  startBlock: number;
  /** BlockCount represents the amount of tendermint blocks that the process will last */
  blockCount: number;
  /** CensusRoot merkle root of all the census in the process */
  censusRoot: Uint8Array;
  /** CensusURI where to find the census */
  censusURI?:
    | string
    | undefined;
  /** EncryptionPrivateKeys are the keys required to decrypt the votes */
  encryptionPrivateKeys: string[];
  /** EncryptionPublicKeys are the keys required to encrypt the votes */
  encryptionPublicKeys: string[];
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
  results: ProcessResult[];
  resultsSignatures: Uint8Array[];
  ethIndexSlot?:
    | number
    | undefined;
  /** SourceBlockHeight is the block height of the origin blockchain (if any) */
  sourceBlockHeight?:
    | number
    | undefined;
  /** Owner is the creator of a process (if any) otherwise is assumed the creator is the entityId */
  owner?:
    | Uint8Array
    | undefined;
  /** Metadata is the content hashed URI of the JSON meta data (See Data Origins) */
  metadata?:
    | string
    | undefined;
  /** SourceNetworkId is the identifier of the network origin (where the process have been created) */
  sourceNetworkId: SourceNetworkId;
  /** MaxCensusSize is set by the Process creator. */
  maxCensusSize?:
    | number
    | undefined;
  /**
   * RollingCensusRoot merkle root of the rolling census.  Set by the
   * vocdoni-node when Mode.Process = true
   */
  rollingCensusRoot?:
    | Uint8Array
    | undefined;
  /**
   * RollingCensusSize is set by the vocdoni-node when Mode.PreRegister =
   * true and the StartBlock has been reached.
   */
  rollingCensusSize?:
    | number
    | undefined;
  /**
   * NullifiersRoot is the root of the pre-census nullifiers merkle tree.
   * Used when Mode.PreRegister = true.
   */
  nullifiersRoot?:
    | Uint8Array
    | undefined;
  /**
   * sourceNetworkContractAddr is used for EVM token based voting and it is
   * the contract address of the token that is going to define the census
   */
  sourceNetworkContractAddr?:
    | Uint8Array
    | undefined;
  /**
   * tokenDecimals represents the number of decimals of the token (i.e ERC20) used for voting.
   * It is normally used for processes with on-chain census
   */
  tokenDecimals?: number | undefined;
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
  preRegister: boolean;
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
  oracleAddress?: Uint8Array | undefined;
  signature?: Uint8Array | undefined;
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

function createBaseVoteEnvelope(): VoteEnvelope {
  return {
    nonce: new Uint8Array(),
    processId: new Uint8Array(),
    proof: undefined,
    votePackage: new Uint8Array(),
    nullifier: new Uint8Array(),
    encryptionKeyIndexes: [],
  };
}

export const VoteEnvelope = {
  encode(message: VoteEnvelope, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteEnvelope {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteEnvelope();
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
    return {
      nonce: isSet(object.nonce) ? bytesFromBase64(object.nonce) : new Uint8Array(),
      processId: isSet(object.processId) ? bytesFromBase64(object.processId) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
      votePackage: isSet(object.votePackage) ? bytesFromBase64(object.votePackage) : new Uint8Array(),
      nullifier: isSet(object.nullifier) ? bytesFromBase64(object.nullifier) : new Uint8Array(),
      encryptionKeyIndexes: Array.isArray(object?.encryptionKeyIndexes)
        ? object.encryptionKeyIndexes.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: VoteEnvelope): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(message.nonce !== undefined ? message.nonce : new Uint8Array()));
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(message.processId !== undefined ? message.processId : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.votePackage !== undefined &&
      (obj.votePackage = base64FromBytes(message.votePackage !== undefined ? message.votePackage : new Uint8Array()));
    message.nullifier !== undefined &&
      (obj.nullifier = base64FromBytes(message.nullifier !== undefined ? message.nullifier : new Uint8Array()));
    if (message.encryptionKeyIndexes) {
      obj.encryptionKeyIndexes = message.encryptionKeyIndexes.map((e) => Math.round(e));
    } else {
      obj.encryptionKeyIndexes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VoteEnvelope>, I>>(base?: I): VoteEnvelope {
    return VoteEnvelope.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VoteEnvelope>, I>>(object: I): VoteEnvelope {
    const message = createBaseVoteEnvelope();
    message.nonce = object.nonce ?? new Uint8Array();
    message.processId = object.processId ?? new Uint8Array();
    message.proof = (object.proof !== undefined && object.proof !== null) ? Proof.fromPartial(object.proof) : undefined;
    message.votePackage = object.votePackage ?? new Uint8Array();
    message.nullifier = object.nullifier ?? new Uint8Array();
    message.encryptionKeyIndexes = object.encryptionKeyIndexes?.map((e) => e) || [];
    return message;
  },
};

function createBaseCensus(): Census {
  return {};
}

export const Census = {
  encode(_: Census, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Census {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCensus();
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

  fromJSON(_: any): Census {
    return {};
  },

  toJSON(_: Census): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Census>, I>>(base?: I): Census {
    return Census.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Census>, I>>(_: I): Census {
    const message = createBaseCensus();
    return message;
  },
};

function createBaseProof(): Proof {
  return { payload: undefined };
}

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload?.$case === "graviton") {
      ProofGraviton.encode(message.payload.graviton, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload?.$case === "iden3") {
      ProofIden3.encode(message.payload.iden3, writer.uint32(18).fork()).ldelim();
    }
    if (message.payload?.$case === "ethereumStorage") {
      ProofEthereumStorage.encode(message.payload.ethereumStorage, writer.uint32(26).fork()).ldelim();
    }
    if (message.payload?.$case === "ethereumAccount") {
      ProofEthereumAccount.encode(message.payload.ethereumAccount, writer.uint32(34).fork()).ldelim();
    }
    if (message.payload?.$case === "ca") {
      ProofCA.encode(message.payload.ca, writer.uint32(42).fork()).ldelim();
    }
    if (message.payload?.$case === "arbo") {
      ProofArbo.encode(message.payload.arbo, writer.uint32(50).fork()).ldelim();
    }
    if (message.payload?.$case === "zkSnark") {
      ProofZkSNARK.encode(message.payload.zkSnark, writer.uint32(58).fork()).ldelim();
    }
    if (message.payload?.$case === "minimeStorage") {
      ProofMinime.encode(message.payload.minimeStorage, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = { $case: "graviton", graviton: ProofGraviton.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.payload = { $case: "iden3", iden3: ProofIden3.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.payload = {
            $case: "ethereumStorage",
            ethereumStorage: ProofEthereumStorage.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.payload = {
            $case: "ethereumAccount",
            ethereumAccount: ProofEthereumAccount.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.payload = { $case: "ca", ca: ProofCA.decode(reader, reader.uint32()) };
          break;
        case 6:
          message.payload = { $case: "arbo", arbo: ProofArbo.decode(reader, reader.uint32()) };
          break;
        case 7:
          message.payload = { $case: "zkSnark", zkSnark: ProofZkSNARK.decode(reader, reader.uint32()) };
          break;
        case 8:
          message.payload = { $case: "minimeStorage", minimeStorage: ProofMinime.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proof {
    return {
      payload: isSet(object.graviton)
        ? { $case: "graviton", graviton: ProofGraviton.fromJSON(object.graviton) }
        : isSet(object.iden3)
        ? { $case: "iden3", iden3: ProofIden3.fromJSON(object.iden3) }
        : isSet(object.ethereumStorage)
        ? { $case: "ethereumStorage", ethereumStorage: ProofEthereumStorage.fromJSON(object.ethereumStorage) }
        : isSet(object.ethereumAccount)
        ? { $case: "ethereumAccount", ethereumAccount: ProofEthereumAccount.fromJSON(object.ethereumAccount) }
        : isSet(object.ca)
        ? { $case: "ca", ca: ProofCA.fromJSON(object.ca) }
        : isSet(object.arbo)
        ? { $case: "arbo", arbo: ProofArbo.fromJSON(object.arbo) }
        : isSet(object.zkSnark)
        ? { $case: "zkSnark", zkSnark: ProofZkSNARK.fromJSON(object.zkSnark) }
        : isSet(object.minimeStorage)
        ? { $case: "minimeStorage", minimeStorage: ProofMinime.fromJSON(object.minimeStorage) }
        : undefined,
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.payload?.$case === "graviton" &&
      (obj.graviton = message.payload?.graviton ? ProofGraviton.toJSON(message.payload?.graviton) : undefined);
    message.payload?.$case === "iden3" &&
      (obj.iden3 = message.payload?.iden3 ? ProofIden3.toJSON(message.payload?.iden3) : undefined);
    message.payload?.$case === "ethereumStorage" && (obj.ethereumStorage = message.payload?.ethereumStorage
      ? ProofEthereumStorage.toJSON(message.payload?.ethereumStorage)
      : undefined);
    message.payload?.$case === "ethereumAccount" && (obj.ethereumAccount = message.payload?.ethereumAccount
      ? ProofEthereumAccount.toJSON(message.payload?.ethereumAccount)
      : undefined);
    message.payload?.$case === "ca" && (obj.ca = message.payload?.ca ? ProofCA.toJSON(message.payload?.ca) : undefined);
    message.payload?.$case === "arbo" &&
      (obj.arbo = message.payload?.arbo ? ProofArbo.toJSON(message.payload?.arbo) : undefined);
    message.payload?.$case === "zkSnark" &&
      (obj.zkSnark = message.payload?.zkSnark ? ProofZkSNARK.toJSON(message.payload?.zkSnark) : undefined);
    message.payload?.$case === "minimeStorage" && (obj.minimeStorage = message.payload?.minimeStorage
      ? ProofMinime.toJSON(message.payload?.minimeStorage)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof>, I>>(base?: I): Proof {
    return Proof.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    if (
      object.payload?.$case === "graviton" &&
      object.payload?.graviton !== undefined &&
      object.payload?.graviton !== null
    ) {
      message.payload = { $case: "graviton", graviton: ProofGraviton.fromPartial(object.payload.graviton) };
    }
    if (object.payload?.$case === "iden3" && object.payload?.iden3 !== undefined && object.payload?.iden3 !== null) {
      message.payload = { $case: "iden3", iden3: ProofIden3.fromPartial(object.payload.iden3) };
    }
    if (
      object.payload?.$case === "ethereumStorage" &&
      object.payload?.ethereumStorage !== undefined &&
      object.payload?.ethereumStorage !== null
    ) {
      message.payload = {
        $case: "ethereumStorage",
        ethereumStorage: ProofEthereumStorage.fromPartial(object.payload.ethereumStorage),
      };
    }
    if (
      object.payload?.$case === "ethereumAccount" &&
      object.payload?.ethereumAccount !== undefined &&
      object.payload?.ethereumAccount !== null
    ) {
      message.payload = {
        $case: "ethereumAccount",
        ethereumAccount: ProofEthereumAccount.fromPartial(object.payload.ethereumAccount),
      };
    }
    if (object.payload?.$case === "ca" && object.payload?.ca !== undefined && object.payload?.ca !== null) {
      message.payload = { $case: "ca", ca: ProofCA.fromPartial(object.payload.ca) };
    }
    if (object.payload?.$case === "arbo" && object.payload?.arbo !== undefined && object.payload?.arbo !== null) {
      message.payload = { $case: "arbo", arbo: ProofArbo.fromPartial(object.payload.arbo) };
    }
    if (
      object.payload?.$case === "zkSnark" && object.payload?.zkSnark !== undefined && object.payload?.zkSnark !== null
    ) {
      message.payload = { $case: "zkSnark", zkSnark: ProofZkSNARK.fromPartial(object.payload.zkSnark) };
    }
    if (
      object.payload?.$case === "minimeStorage" &&
      object.payload?.minimeStorage !== undefined &&
      object.payload?.minimeStorage !== null
    ) {
      message.payload = {
        $case: "minimeStorage",
        minimeStorage: ProofMinime.fromPartial(object.payload.minimeStorage),
      };
    }
    return message;
  },
};

function createBaseProofGraviton(): ProofGraviton {
  return { siblings: new Uint8Array() };
}

export const ProofGraviton = {
  encode(message: ProofGraviton, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.siblings.length !== 0) {
      writer.uint32(10).bytes(message.siblings);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofGraviton {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofGraviton();
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
    return { siblings: isSet(object.siblings) ? bytesFromBase64(object.siblings) : new Uint8Array() };
  },

  toJSON(message: ProofGraviton): unknown {
    const obj: any = {};
    message.siblings !== undefined &&
      (obj.siblings = base64FromBytes(message.siblings !== undefined ? message.siblings : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProofGraviton>, I>>(base?: I): ProofGraviton {
    return ProofGraviton.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProofGraviton>, I>>(object: I): ProofGraviton {
    const message = createBaseProofGraviton();
    message.siblings = object.siblings ?? new Uint8Array();
    return message;
  },
};

function createBaseProofIden3(): ProofIden3 {
  return { siblings: new Uint8Array() };
}

export const ProofIden3 = {
  encode(message: ProofIden3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.siblings.length !== 0) {
      writer.uint32(10).bytes(message.siblings);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofIden3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofIden3();
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
    return { siblings: isSet(object.siblings) ? bytesFromBase64(object.siblings) : new Uint8Array() };
  },

  toJSON(message: ProofIden3): unknown {
    const obj: any = {};
    message.siblings !== undefined &&
      (obj.siblings = base64FromBytes(message.siblings !== undefined ? message.siblings : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProofIden3>, I>>(base?: I): ProofIden3 {
    return ProofIden3.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProofIden3>, I>>(object: I): ProofIden3 {
    const message = createBaseProofIden3();
    message.siblings = object.siblings ?? new Uint8Array();
    return message;
  },
};

function createBaseProofEthereumStorage(): ProofEthereumStorage {
  return { key: new Uint8Array(), value: new Uint8Array(), siblings: [] };
}

export const ProofEthereumStorage = {
  encode(message: ProofEthereumStorage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofEthereumStorage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofEthereumStorage();
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
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      siblings: Array.isArray(object?.siblings) ? object.siblings.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: ProofEthereumStorage): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    if (message.siblings) {
      obj.siblings = message.siblings.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.siblings = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProofEthereumStorage>, I>>(base?: I): ProofEthereumStorage {
    return ProofEthereumStorage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProofEthereumStorage>, I>>(object: I): ProofEthereumStorage {
    const message = createBaseProofEthereumStorage();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.siblings = object.siblings?.map((e) => e) || [];
    return message;
  },
};

function createBaseProofEthereumAccount(): ProofEthereumAccount {
  return {
    nonce: new Uint8Array(),
    balance: new Uint8Array(),
    storageHash: new Uint8Array(),
    codeHash: new Uint8Array(),
    siblings: [],
  };
}

export const ProofEthereumAccount = {
  encode(message: ProofEthereumAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofEthereumAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofEthereumAccount();
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
    return {
      nonce: isSet(object.nonce) ? bytesFromBase64(object.nonce) : new Uint8Array(),
      balance: isSet(object.balance) ? bytesFromBase64(object.balance) : new Uint8Array(),
      storageHash: isSet(object.storageHash) ? bytesFromBase64(object.storageHash) : new Uint8Array(),
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(),
      siblings: Array.isArray(object?.siblings) ? object.siblings.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: ProofEthereumAccount): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(message.nonce !== undefined ? message.nonce : new Uint8Array()));
    message.balance !== undefined &&
      (obj.balance = base64FromBytes(message.balance !== undefined ? message.balance : new Uint8Array()));
    message.storageHash !== undefined &&
      (obj.storageHash = base64FromBytes(message.storageHash !== undefined ? message.storageHash : new Uint8Array()));
    message.codeHash !== undefined &&
      (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array()));
    if (message.siblings) {
      obj.siblings = message.siblings.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.siblings = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProofEthereumAccount>, I>>(base?: I): ProofEthereumAccount {
    return ProofEthereumAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProofEthereumAccount>, I>>(object: I): ProofEthereumAccount {
    const message = createBaseProofEthereumAccount();
    message.nonce = object.nonce ?? new Uint8Array();
    message.balance = object.balance ?? new Uint8Array();
    message.storageHash = object.storageHash ?? new Uint8Array();
    message.codeHash = object.codeHash ?? new Uint8Array();
    message.siblings = object.siblings?.map((e) => e) || [];
    return message;
  },
};

function createBaseProofMinime(): ProofMinime {
  return { proofPrevBlock: undefined, proofNextBlock: undefined };
}

export const ProofMinime = {
  encode(message: ProofMinime, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proofPrevBlock !== undefined) {
      ProofEthereumStorage.encode(message.proofPrevBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofNextBlock !== undefined) {
      ProofEthereumStorage.encode(message.proofNextBlock, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofMinime {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofMinime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofPrevBlock = ProofEthereumStorage.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofNextBlock = ProofEthereumStorage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofMinime {
    return {
      proofPrevBlock: isSet(object.proofPrevBlock) ? ProofEthereumStorage.fromJSON(object.proofPrevBlock) : undefined,
      proofNextBlock: isSet(object.proofNextBlock) ? ProofEthereumStorage.fromJSON(object.proofNextBlock) : undefined,
    };
  },

  toJSON(message: ProofMinime): unknown {
    const obj: any = {};
    message.proofPrevBlock !== undefined &&
      (obj.proofPrevBlock = message.proofPrevBlock ? ProofEthereumStorage.toJSON(message.proofPrevBlock) : undefined);
    message.proofNextBlock !== undefined &&
      (obj.proofNextBlock = message.proofNextBlock ? ProofEthereumStorage.toJSON(message.proofNextBlock) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProofMinime>, I>>(base?: I): ProofMinime {
    return ProofMinime.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProofMinime>, I>>(object: I): ProofMinime {
    const message = createBaseProofMinime();
    message.proofPrevBlock = (object.proofPrevBlock !== undefined && object.proofPrevBlock !== null)
      ? ProofEthereumStorage.fromPartial(object.proofPrevBlock)
      : undefined;
    message.proofNextBlock = (object.proofNextBlock !== undefined && object.proofNextBlock !== null)
      ? ProofEthereumStorage.fromPartial(object.proofNextBlock)
      : undefined;
    return message;
  },
};

function createBaseProofCA(): ProofCA {
  return { type: 0, bundle: undefined, signature: new Uint8Array() };
}

export const ProofCA = {
  encode(message: ProofCA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofCA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofCA();
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
    return {
      type: isSet(object.type) ? proofCA_TypeFromJSON(object.type) : 0,
      bundle: isSet(object.bundle) ? CAbundle.fromJSON(object.bundle) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: ProofCA): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = proofCA_TypeToJSON(message.type));
    message.bundle !== undefined && (obj.bundle = message.bundle ? CAbundle.toJSON(message.bundle) : undefined);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProofCA>, I>>(base?: I): ProofCA {
    return ProofCA.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProofCA>, I>>(object: I): ProofCA {
    const message = createBaseProofCA();
    message.type = object.type ?? 0;
    message.bundle = (object.bundle !== undefined && object.bundle !== null)
      ? CAbundle.fromPartial(object.bundle)
      : undefined;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseCAbundle(): CAbundle {
  return { processId: new Uint8Array(), address: new Uint8Array() };
}

export const CAbundle = {
  encode(message: CAbundle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.processId.length !== 0) {
      writer.uint32(10).bytes(message.processId);
    }
    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CAbundle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCAbundle();
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
    return {
      processId: isSet(object.processId) ? bytesFromBase64(object.processId) : new Uint8Array(),
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
    };
  },

  toJSON(message: CAbundle): unknown {
    const obj: any = {};
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(message.processId !== undefined ? message.processId : new Uint8Array()));
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<CAbundle>, I>>(base?: I): CAbundle {
    return CAbundle.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CAbundle>, I>>(object: I): CAbundle {
    const message = createBaseCAbundle();
    message.processId = object.processId ?? new Uint8Array();
    message.address = object.address ?? new Uint8Array();
    return message;
  },
};

function createBaseProofArbo(): ProofArbo {
  return { type: 0, siblings: new Uint8Array(), value: new Uint8Array(), keyType: 0 };
}

export const ProofArbo = {
  encode(message: ProofArbo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.siblings.length !== 0) {
      writer.uint32(18).bytes(message.siblings);
    }
    if (message.value.length !== 0) {
      writer.uint32(26).bytes(message.value);
    }
    if (message.keyType !== 0) {
      writer.uint32(32).int32(message.keyType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofArbo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofArbo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.siblings = reader.bytes();
          break;
        case 3:
          message.value = reader.bytes();
          break;
        case 4:
          message.keyType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofArbo {
    return {
      type: isSet(object.type) ? proofArbo_TypeFromJSON(object.type) : 0,
      siblings: isSet(object.siblings) ? bytesFromBase64(object.siblings) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      keyType: isSet(object.keyType) ? proofArbo_KeyTypeFromJSON(object.keyType) : 0,
    };
  },

  toJSON(message: ProofArbo): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = proofArbo_TypeToJSON(message.type));
    message.siblings !== undefined &&
      (obj.siblings = base64FromBytes(message.siblings !== undefined ? message.siblings : new Uint8Array()));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.keyType !== undefined && (obj.keyType = proofArbo_KeyTypeToJSON(message.keyType));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProofArbo>, I>>(base?: I): ProofArbo {
    return ProofArbo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProofArbo>, I>>(object: I): ProofArbo {
    const message = createBaseProofArbo();
    message.type = object.type ?? 0;
    message.siblings = object.siblings ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.keyType = object.keyType ?? 0;
    return message;
  },
};

function createBaseProofZkSNARK(): ProofZkSNARK {
  return { circuitParametersIndex: 0, a: [], b: [], c: [], publicInputs: [] };
}

export const ProofZkSNARK = {
  encode(message: ProofZkSNARK, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.circuitParametersIndex !== 0) {
      writer.uint32(8).int32(message.circuitParametersIndex);
    }
    for (const v of message.a) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.b) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.c) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.publicInputs) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProofZkSNARK {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofZkSNARK();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.circuitParametersIndex = reader.int32();
          break;
        case 2:
          message.a.push(reader.string());
          break;
        case 3:
          message.b.push(reader.string());
          break;
        case 4:
          message.c.push(reader.string());
          break;
        case 5:
          message.publicInputs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofZkSNARK {
    return {
      circuitParametersIndex: isSet(object.circuitParametersIndex) ? Number(object.circuitParametersIndex) : 0,
      a: Array.isArray(object?.a) ? object.a.map((e: any) => String(e)) : [],
      b: Array.isArray(object?.b) ? object.b.map((e: any) => String(e)) : [],
      c: Array.isArray(object?.c) ? object.c.map((e: any) => String(e)) : [],
      publicInputs: Array.isArray(object?.publicInputs) ? object.publicInputs.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ProofZkSNARK): unknown {
    const obj: any = {};
    message.circuitParametersIndex !== undefined &&
      (obj.circuitParametersIndex = Math.round(message.circuitParametersIndex));
    if (message.a) {
      obj.a = message.a.map((e) => e);
    } else {
      obj.a = [];
    }
    if (message.b) {
      obj.b = message.b.map((e) => e);
    } else {
      obj.b = [];
    }
    if (message.c) {
      obj.c = message.c.map((e) => e);
    } else {
      obj.c = [];
    }
    if (message.publicInputs) {
      obj.publicInputs = message.publicInputs.map((e) => e);
    } else {
      obj.publicInputs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProofZkSNARK>, I>>(base?: I): ProofZkSNARK {
    return ProofZkSNARK.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProofZkSNARK>, I>>(object: I): ProofZkSNARK {
    const message = createBaseProofZkSNARK();
    message.circuitParametersIndex = object.circuitParametersIndex ?? 0;
    message.a = object.a?.map((e) => e) || [];
    message.b = object.b?.map((e) => e) || [];
    message.c = object.c?.map((e) => e) || [];
    message.publicInputs = object.publicInputs?.map((e) => e) || [];
    return message;
  },
};

function createBaseAccount(): Account {
  return { balance: 0, nonce: 0, infoURI: "", delegateAddrs: [], processIndex: 0 };
}

export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== 0) {
      writer.uint32(8).uint64(message.balance);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint32(message.nonce);
    }
    if (message.infoURI !== "") {
      writer.uint32(26).string(message.infoURI);
    }
    for (const v of message.delegateAddrs) {
      writer.uint32(34).bytes(v!);
    }
    if (message.processIndex !== 0) {
      writer.uint32(40).uint32(message.processIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.nonce = reader.uint32();
          break;
        case 3:
          message.infoURI = reader.string();
          break;
        case 4:
          message.delegateAddrs.push(reader.bytes());
          break;
        case 5:
          message.processIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      infoURI: isSet(object.infoURI) ? String(object.infoURI) : "",
      delegateAddrs: Array.isArray(object?.delegateAddrs)
        ? object.delegateAddrs.map((e: any) => bytesFromBase64(e))
        : [],
      processIndex: isSet(object.processIndex) ? Number(object.processIndex) : 0,
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = Math.round(message.balance));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.infoURI !== undefined && (obj.infoURI = message.infoURI);
    if (message.delegateAddrs) {
      obj.delegateAddrs = message.delegateAddrs.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.delegateAddrs = [];
    }
    message.processIndex !== undefined && (obj.processIndex = Math.round(message.processIndex));
    return obj;
  },

  create<I extends Exact<DeepPartial<Account>, I>>(base?: I): Account {
    return Account.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Account>, I>>(object: I): Account {
    const message = createBaseAccount();
    message.balance = object.balance ?? 0;
    message.nonce = object.nonce ?? 0;
    message.infoURI = object.infoURI ?? "";
    message.delegateAddrs = object.delegateAddrs?.map((e) => e) || [];
    message.processIndex = object.processIndex ?? 0;
    return message;
  },
};

function createBaseTreasurer(): Treasurer {
  return { address: new Uint8Array(), nonce: 0 };
}

export const Treasurer = {
  encode(message: Treasurer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint32(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Treasurer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTreasurer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;
        case 2:
          message.nonce = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Treasurer {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
    };
  },

  toJSON(message: Treasurer): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    return obj;
  },

  create<I extends Exact<DeepPartial<Treasurer>, I>>(base?: I): Treasurer {
    return Treasurer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Treasurer>, I>>(object: I): Treasurer {
    const message = createBaseTreasurer();
    message.address = object.address ?? new Uint8Array();
    message.nonce = object.nonce ?? 0;
    return message;
  },
};

function createBaseTx(): Tx {
  return { payload: undefined };
}

export const Tx = {
  encode(message: Tx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload?.$case === "vote") {
      VoteEnvelope.encode(message.payload.vote, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload?.$case === "newProcess") {
      NewProcessTx.encode(message.payload.newProcess, writer.uint32(18).fork()).ldelim();
    }
    if (message.payload?.$case === "admin") {
      AdminTx.encode(message.payload.admin, writer.uint32(26).fork()).ldelim();
    }
    if (message.payload?.$case === "setProcess") {
      SetProcessTx.encode(message.payload.setProcess, writer.uint32(34).fork()).ldelim();
    }
    if (message.payload?.$case === "registerKey") {
      RegisterKeyTx.encode(message.payload.registerKey, writer.uint32(42).fork()).ldelim();
    }
    if (message.payload?.$case === "mintTokens") {
      MintTokensTx.encode(message.payload.mintTokens, writer.uint32(50).fork()).ldelim();
    }
    if (message.payload?.$case === "sendTokens") {
      SendTokensTx.encode(message.payload.sendTokens, writer.uint32(58).fork()).ldelim();
    }
    if (message.payload?.$case === "setTransactionCosts") {
      SetTransactionCostsTx.encode(message.payload.setTransactionCosts, writer.uint32(66).fork()).ldelim();
    }
    if (message.payload?.$case === "setAccount") {
      SetAccountTx.encode(message.payload.setAccount, writer.uint32(74).fork()).ldelim();
    }
    if (message.payload?.$case === "collectFaucet") {
      CollectFaucetTx.encode(message.payload.collectFaucet, writer.uint32(82).fork()).ldelim();
    }
    if (message.payload?.$case === "setKeykeeper") {
      SetKeykeeperTx.encode(message.payload.setKeykeeper, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = { $case: "vote", vote: VoteEnvelope.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.payload = { $case: "newProcess", newProcess: NewProcessTx.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.payload = { $case: "admin", admin: AdminTx.decode(reader, reader.uint32()) };
          break;
        case 4:
          message.payload = { $case: "setProcess", setProcess: SetProcessTx.decode(reader, reader.uint32()) };
          break;
        case 5:
          message.payload = { $case: "registerKey", registerKey: RegisterKeyTx.decode(reader, reader.uint32()) };
          break;
        case 6:
          message.payload = { $case: "mintTokens", mintTokens: MintTokensTx.decode(reader, reader.uint32()) };
          break;
        case 7:
          message.payload = { $case: "sendTokens", sendTokens: SendTokensTx.decode(reader, reader.uint32()) };
          break;
        case 8:
          message.payload = {
            $case: "setTransactionCosts",
            setTransactionCosts: SetTransactionCostsTx.decode(reader, reader.uint32()),
          };
          break;
        case 9:
          message.payload = { $case: "setAccount", setAccount: SetAccountTx.decode(reader, reader.uint32()) };
          break;
        case 10:
          message.payload = { $case: "collectFaucet", collectFaucet: CollectFaucetTx.decode(reader, reader.uint32()) };
          break;
        case 11:
          message.payload = { $case: "setKeykeeper", setKeykeeper: SetKeykeeperTx.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tx {
    return {
      payload: isSet(object.vote)
        ? { $case: "vote", vote: VoteEnvelope.fromJSON(object.vote) }
        : isSet(object.newProcess)
        ? { $case: "newProcess", newProcess: NewProcessTx.fromJSON(object.newProcess) }
        : isSet(object.admin)
        ? { $case: "admin", admin: AdminTx.fromJSON(object.admin) }
        : isSet(object.setProcess)
        ? { $case: "setProcess", setProcess: SetProcessTx.fromJSON(object.setProcess) }
        : isSet(object.registerKey)
        ? { $case: "registerKey", registerKey: RegisterKeyTx.fromJSON(object.registerKey) }
        : isSet(object.mintTokens)
        ? { $case: "mintTokens", mintTokens: MintTokensTx.fromJSON(object.mintTokens) }
        : isSet(object.sendTokens)
        ? { $case: "sendTokens", sendTokens: SendTokensTx.fromJSON(object.sendTokens) }
        : isSet(object.setTransactionCosts)
        ? {
          $case: "setTransactionCosts",
          setTransactionCosts: SetTransactionCostsTx.fromJSON(object.setTransactionCosts),
        }
        : isSet(object.setAccount)
        ? { $case: "setAccount", setAccount: SetAccountTx.fromJSON(object.setAccount) }
        : isSet(object.collectFaucet)
        ? { $case: "collectFaucet", collectFaucet: CollectFaucetTx.fromJSON(object.collectFaucet) }
        : isSet(object.setKeykeeper)
        ? { $case: "setKeykeeper", setKeykeeper: SetKeykeeperTx.fromJSON(object.setKeykeeper) }
        : undefined,
    };
  },

  toJSON(message: Tx): unknown {
    const obj: any = {};
    message.payload?.$case === "vote" &&
      (obj.vote = message.payload?.vote ? VoteEnvelope.toJSON(message.payload?.vote) : undefined);
    message.payload?.$case === "newProcess" &&
      (obj.newProcess = message.payload?.newProcess ? NewProcessTx.toJSON(message.payload?.newProcess) : undefined);
    message.payload?.$case === "admin" &&
      (obj.admin = message.payload?.admin ? AdminTx.toJSON(message.payload?.admin) : undefined);
    message.payload?.$case === "setProcess" &&
      (obj.setProcess = message.payload?.setProcess ? SetProcessTx.toJSON(message.payload?.setProcess) : undefined);
    message.payload?.$case === "registerKey" &&
      (obj.registerKey = message.payload?.registerKey ? RegisterKeyTx.toJSON(message.payload?.registerKey) : undefined);
    message.payload?.$case === "mintTokens" &&
      (obj.mintTokens = message.payload?.mintTokens ? MintTokensTx.toJSON(message.payload?.mintTokens) : undefined);
    message.payload?.$case === "sendTokens" &&
      (obj.sendTokens = message.payload?.sendTokens ? SendTokensTx.toJSON(message.payload?.sendTokens) : undefined);
    message.payload?.$case === "setTransactionCosts" && (obj.setTransactionCosts = message.payload?.setTransactionCosts
      ? SetTransactionCostsTx.toJSON(message.payload?.setTransactionCosts)
      : undefined);
    message.payload?.$case === "setAccount" &&
      (obj.setAccount = message.payload?.setAccount ? SetAccountTx.toJSON(message.payload?.setAccount) : undefined);
    message.payload?.$case === "collectFaucet" && (obj.collectFaucet = message.payload?.collectFaucet
      ? CollectFaucetTx.toJSON(message.payload?.collectFaucet)
      : undefined);
    message.payload?.$case === "setKeykeeper" && (obj.setKeykeeper = message.payload?.setKeykeeper
      ? SetKeykeeperTx.toJSON(message.payload?.setKeykeeper)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Tx>, I>>(base?: I): Tx {
    return Tx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Tx>, I>>(object: I): Tx {
    const message = createBaseTx();
    if (object.payload?.$case === "vote" && object.payload?.vote !== undefined && object.payload?.vote !== null) {
      message.payload = { $case: "vote", vote: VoteEnvelope.fromPartial(object.payload.vote) };
    }
    if (
      object.payload?.$case === "newProcess" &&
      object.payload?.newProcess !== undefined &&
      object.payload?.newProcess !== null
    ) {
      message.payload = { $case: "newProcess", newProcess: NewProcessTx.fromPartial(object.payload.newProcess) };
    }
    if (object.payload?.$case === "admin" && object.payload?.admin !== undefined && object.payload?.admin !== null) {
      message.payload = { $case: "admin", admin: AdminTx.fromPartial(object.payload.admin) };
    }
    if (
      object.payload?.$case === "setProcess" &&
      object.payload?.setProcess !== undefined &&
      object.payload?.setProcess !== null
    ) {
      message.payload = { $case: "setProcess", setProcess: SetProcessTx.fromPartial(object.payload.setProcess) };
    }
    if (
      object.payload?.$case === "registerKey" &&
      object.payload?.registerKey !== undefined &&
      object.payload?.registerKey !== null
    ) {
      message.payload = { $case: "registerKey", registerKey: RegisterKeyTx.fromPartial(object.payload.registerKey) };
    }
    if (
      object.payload?.$case === "mintTokens" &&
      object.payload?.mintTokens !== undefined &&
      object.payload?.mintTokens !== null
    ) {
      message.payload = { $case: "mintTokens", mintTokens: MintTokensTx.fromPartial(object.payload.mintTokens) };
    }
    if (
      object.payload?.$case === "sendTokens" &&
      object.payload?.sendTokens !== undefined &&
      object.payload?.sendTokens !== null
    ) {
      message.payload = { $case: "sendTokens", sendTokens: SendTokensTx.fromPartial(object.payload.sendTokens) };
    }
    if (
      object.payload?.$case === "setTransactionCosts" &&
      object.payload?.setTransactionCosts !== undefined &&
      object.payload?.setTransactionCosts !== null
    ) {
      message.payload = {
        $case: "setTransactionCosts",
        setTransactionCosts: SetTransactionCostsTx.fromPartial(object.payload.setTransactionCosts),
      };
    }
    if (
      object.payload?.$case === "setAccount" &&
      object.payload?.setAccount !== undefined &&
      object.payload?.setAccount !== null
    ) {
      message.payload = { $case: "setAccount", setAccount: SetAccountTx.fromPartial(object.payload.setAccount) };
    }
    if (
      object.payload?.$case === "collectFaucet" &&
      object.payload?.collectFaucet !== undefined &&
      object.payload?.collectFaucet !== null
    ) {
      message.payload = {
        $case: "collectFaucet",
        collectFaucet: CollectFaucetTx.fromPartial(object.payload.collectFaucet),
      };
    }
    if (
      object.payload?.$case === "setKeykeeper" &&
      object.payload?.setKeykeeper !== undefined &&
      object.payload?.setKeykeeper !== null
    ) {
      message.payload = {
        $case: "setKeykeeper",
        setKeykeeper: SetKeykeeperTx.fromPartial(object.payload.setKeykeeper),
      };
    }
    return message;
  },
};

function createBaseSignedTx(): SignedTx {
  return { tx: new Uint8Array(), signature: undefined };
}

export const SignedTx = {
  encode(message: SignedTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }
    if (message.signature !== undefined) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedTx();
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
    return {
      tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
    };
  },

  toJSON(message: SignedTx): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
    message.signature !== undefined &&
      (obj.signature = message.signature !== undefined ? base64FromBytes(message.signature) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SignedTx>, I>>(base?: I): SignedTx {
    return SignedTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SignedTx>, I>>(object: I): SignedTx {
    const message = createBaseSignedTx();
    message.tx = object.tx ?? new Uint8Array();
    message.signature = object.signature ?? undefined;
    return message;
  },
};

function createBaseNewProcessTx(): NewProcessTx {
  return { txtype: 0, nonce: 0, process: undefined };
}

export const NewProcessTx = {
  encode(message: NewProcessTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txtype !== 0) {
      writer.uint32(8).int32(message.txtype);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint32(message.nonce);
    }
    if (message.process !== undefined) {
      Process.encode(message.process, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewProcessTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewProcessTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txtype = reader.int32() as any;
          break;
        case 2:
          message.nonce = reader.uint32();
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
    return {
      txtype: isSet(object.txtype) ? txTypeFromJSON(object.txtype) : 0,
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      process: isSet(object.process) ? Process.fromJSON(object.process) : undefined,
    };
  },

  toJSON(message: NewProcessTx): unknown {
    const obj: any = {};
    message.txtype !== undefined && (obj.txtype = txTypeToJSON(message.txtype));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.process !== undefined && (obj.process = message.process ? Process.toJSON(message.process) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<NewProcessTx>, I>>(base?: I): NewProcessTx {
    return NewProcessTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NewProcessTx>, I>>(object: I): NewProcessTx {
    const message = createBaseNewProcessTx();
    message.txtype = object.txtype ?? 0;
    message.nonce = object.nonce ?? 0;
    message.process = (object.process !== undefined && object.process !== null)
      ? Process.fromPartial(object.process)
      : undefined;
    return message;
  },
};

function createBaseSetProcessTx(): SetProcessTx {
  return {
    txtype: 0,
    nonce: 0,
    processId: new Uint8Array(),
    status: undefined,
    questionIndex: undefined,
    censusRoot: undefined,
    censusURI: undefined,
    proof: undefined,
    results: undefined,
  };
}

export const SetProcessTx = {
  encode(message: SetProcessTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txtype !== 0) {
      writer.uint32(8).int32(message.txtype);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint32(message.nonce);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): SetProcessTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetProcessTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txtype = reader.int32() as any;
          break;
        case 2:
          message.nonce = reader.uint32();
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
    return {
      txtype: isSet(object.txtype) ? txTypeFromJSON(object.txtype) : 0,
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      processId: isSet(object.processId) ? bytesFromBase64(object.processId) : new Uint8Array(),
      status: isSet(object.status) ? processStatusFromJSON(object.status) : undefined,
      questionIndex: isSet(object.questionIndex) ? Number(object.questionIndex) : undefined,
      censusRoot: isSet(object.censusRoot) ? bytesFromBase64(object.censusRoot) : undefined,
      censusURI: isSet(object.censusURI) ? String(object.censusURI) : undefined,
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
      results: isSet(object.results) ? ProcessResult.fromJSON(object.results) : undefined,
    };
  },

  toJSON(message: SetProcessTx): unknown {
    const obj: any = {};
    message.txtype !== undefined && (obj.txtype = txTypeToJSON(message.txtype));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(message.processId !== undefined ? message.processId : new Uint8Array()));
    message.status !== undefined &&
      (obj.status = message.status !== undefined ? processStatusToJSON(message.status) : undefined);
    message.questionIndex !== undefined && (obj.questionIndex = Math.round(message.questionIndex));
    message.censusRoot !== undefined &&
      (obj.censusRoot = message.censusRoot !== undefined ? base64FromBytes(message.censusRoot) : undefined);
    message.censusURI !== undefined && (obj.censusURI = message.censusURI);
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.results !== undefined &&
      (obj.results = message.results ? ProcessResult.toJSON(message.results) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<SetProcessTx>, I>>(base?: I): SetProcessTx {
    return SetProcessTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetProcessTx>, I>>(object: I): SetProcessTx {
    const message = createBaseSetProcessTx();
    message.txtype = object.txtype ?? 0;
    message.nonce = object.nonce ?? 0;
    message.processId = object.processId ?? new Uint8Array();
    message.status = object.status ?? undefined;
    message.questionIndex = object.questionIndex ?? undefined;
    message.censusRoot = object.censusRoot ?? undefined;
    message.censusURI = object.censusURI ?? undefined;
    message.proof = (object.proof !== undefined && object.proof !== null) ? Proof.fromPartial(object.proof) : undefined;
    message.results = (object.results !== undefined && object.results !== null)
      ? ProcessResult.fromPartial(object.results)
      : undefined;
    return message;
  },
};

function createBaseAdminTx(): AdminTx {
  return {
    txtype: 0,
    processId: new Uint8Array(),
    address: undefined,
    encryptionPrivateKey: undefined,
    encryptionPublicKey: undefined,
    keyIndex: undefined,
    power: undefined,
    publicKey: undefined,
    nonce: 0,
  };
}

export const AdminTx = {
  encode(message: AdminTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txtype !== 0) {
      writer.uint32(8).int32(message.txtype);
    }
    if (message.processId.length !== 0) {
      writer.uint32(18).bytes(message.processId);
    }
    if (message.address !== undefined) {
      writer.uint32(26).bytes(message.address);
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
    if (message.nonce !== 0) {
      writer.uint32(88).uint32(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdminTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminTx();
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
        case 11:
          message.nonce = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AdminTx {
    return {
      txtype: isSet(object.txtype) ? txTypeFromJSON(object.txtype) : 0,
      processId: isSet(object.processId) ? bytesFromBase64(object.processId) : new Uint8Array(),
      address: isSet(object.address) ? bytesFromBase64(object.address) : undefined,
      encryptionPrivateKey: isSet(object.encryptionPrivateKey)
        ? bytesFromBase64(object.encryptionPrivateKey)
        : undefined,
      encryptionPublicKey: isSet(object.encryptionPublicKey) ? bytesFromBase64(object.encryptionPublicKey) : undefined,
      keyIndex: isSet(object.keyIndex) ? Number(object.keyIndex) : undefined,
      power: isSet(object.power) ? Number(object.power) : undefined,
      publicKey: isSet(object.publicKey) ? bytesFromBase64(object.publicKey) : undefined,
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
    };
  },

  toJSON(message: AdminTx): unknown {
    const obj: any = {};
    message.txtype !== undefined && (obj.txtype = txTypeToJSON(message.txtype));
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(message.processId !== undefined ? message.processId : new Uint8Array()));
    message.address !== undefined &&
      (obj.address = message.address !== undefined ? base64FromBytes(message.address) : undefined);
    message.encryptionPrivateKey !== undefined && (obj.encryptionPrivateKey = message.encryptionPrivateKey !== undefined
      ? base64FromBytes(message.encryptionPrivateKey)
      : undefined);
    message.encryptionPublicKey !== undefined && (obj.encryptionPublicKey = message.encryptionPublicKey !== undefined
      ? base64FromBytes(message.encryptionPublicKey)
      : undefined);
    message.keyIndex !== undefined && (obj.keyIndex = Math.round(message.keyIndex));
    message.power !== undefined && (obj.power = Math.round(message.power));
    message.publicKey !== undefined &&
      (obj.publicKey = message.publicKey !== undefined ? base64FromBytes(message.publicKey) : undefined);
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    return obj;
  },

  create<I extends Exact<DeepPartial<AdminTx>, I>>(base?: I): AdminTx {
    return AdminTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AdminTx>, I>>(object: I): AdminTx {
    const message = createBaseAdminTx();
    message.txtype = object.txtype ?? 0;
    message.processId = object.processId ?? new Uint8Array();
    message.address = object.address ?? undefined;
    message.encryptionPrivateKey = object.encryptionPrivateKey ?? undefined;
    message.encryptionPublicKey = object.encryptionPublicKey ?? undefined;
    message.keyIndex = object.keyIndex ?? undefined;
    message.power = object.power ?? undefined;
    message.publicKey = object.publicKey ?? undefined;
    message.nonce = object.nonce ?? 0;
    return message;
  },
};

function createBaseRegisterKeyTx(): RegisterKeyTx {
  return { nonce: 0, processId: new Uint8Array(), proof: undefined, newKey: new Uint8Array(), weight: "" };
}

export const RegisterKeyTx = {
  encode(message: RegisterKeyTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint32(message.nonce);
    }
    if (message.processId.length !== 0) {
      writer.uint32(18).bytes(message.processId);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    if (message.newKey.length !== 0) {
      writer.uint32(34).bytes(message.newKey);
    }
    if (message.weight !== "") {
      writer.uint32(42).string(message.weight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterKeyTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterKeyTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint32();
          break;
        case 2:
          message.processId = reader.bytes();
          break;
        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        case 4:
          message.newKey = reader.bytes();
          break;
        case 5:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterKeyTx {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      processId: isSet(object.processId) ? bytesFromBase64(object.processId) : new Uint8Array(),
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
      newKey: isSet(object.newKey) ? bytesFromBase64(object.newKey) : new Uint8Array(),
      weight: isSet(object.weight) ? String(object.weight) : "",
    };
  },

  toJSON(message: RegisterKeyTx): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(message.processId !== undefined ? message.processId : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.newKey !== undefined &&
      (obj.newKey = base64FromBytes(message.newKey !== undefined ? message.newKey : new Uint8Array()));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterKeyTx>, I>>(base?: I): RegisterKeyTx {
    return RegisterKeyTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RegisterKeyTx>, I>>(object: I): RegisterKeyTx {
    const message = createBaseRegisterKeyTx();
    message.nonce = object.nonce ?? 0;
    message.processId = object.processId ?? new Uint8Array();
    message.proof = (object.proof !== undefined && object.proof !== null) ? Proof.fromPartial(object.proof) : undefined;
    message.newKey = object.newKey ?? new Uint8Array();
    message.weight = object.weight ?? "";
    return message;
  },
};

function createBaseMintTokensTx(): MintTokensTx {
  return { txtype: 0, nonce: 0, to: new Uint8Array(), value: 0 };
}

export const MintTokensTx = {
  encode(message: MintTokensTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txtype !== 0) {
      writer.uint32(8).int32(message.txtype);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint32(message.nonce);
    }
    if (message.to.length !== 0) {
      writer.uint32(26).bytes(message.to);
    }
    if (message.value !== 0) {
      writer.uint32(32).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MintTokensTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMintTokensTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txtype = reader.int32() as any;
          break;
        case 2:
          message.nonce = reader.uint32();
          break;
        case 3:
          message.to = reader.bytes();
          break;
        case 4:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MintTokensTx {
    return {
      txtype: isSet(object.txtype) ? txTypeFromJSON(object.txtype) : 0,
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(),
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: MintTokensTx): unknown {
    const obj: any = {};
    message.txtype !== undefined && (obj.txtype = txTypeToJSON(message.txtype));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.to !== undefined && (obj.to = base64FromBytes(message.to !== undefined ? message.to : new Uint8Array()));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<MintTokensTx>, I>>(base?: I): MintTokensTx {
    return MintTokensTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MintTokensTx>, I>>(object: I): MintTokensTx {
    const message = createBaseMintTokensTx();
    message.txtype = object.txtype ?? 0;
    message.nonce = object.nonce ?? 0;
    message.to = object.to ?? new Uint8Array();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseSendTokensTx(): SendTokensTx {
  return { txtype: 0, nonce: 0, from: new Uint8Array(), to: new Uint8Array(), value: 0 };
}

export const SendTokensTx = {
  encode(message: SendTokensTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txtype !== 0) {
      writer.uint32(8).int32(message.txtype);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint32(message.nonce);
    }
    if (message.from.length !== 0) {
      writer.uint32(26).bytes(message.from);
    }
    if (message.to.length !== 0) {
      writer.uint32(34).bytes(message.to);
    }
    if (message.value !== 0) {
      writer.uint32(40).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendTokensTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendTokensTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txtype = reader.int32() as any;
          break;
        case 2:
          message.nonce = reader.uint32();
          break;
        case 3:
          message.from = reader.bytes();
          break;
        case 4:
          message.to = reader.bytes();
          break;
        case 5:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendTokensTx {
    return {
      txtype: isSet(object.txtype) ? txTypeFromJSON(object.txtype) : 0,
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      from: isSet(object.from) ? bytesFromBase64(object.from) : new Uint8Array(),
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(),
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: SendTokensTx): unknown {
    const obj: any = {};
    message.txtype !== undefined && (obj.txtype = txTypeToJSON(message.txtype));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.from !== undefined &&
      (obj.from = base64FromBytes(message.from !== undefined ? message.from : new Uint8Array()));
    message.to !== undefined && (obj.to = base64FromBytes(message.to !== undefined ? message.to : new Uint8Array()));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<SendTokensTx>, I>>(base?: I): SendTokensTx {
    return SendTokensTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SendTokensTx>, I>>(object: I): SendTokensTx {
    const message = createBaseSendTokensTx();
    message.txtype = object.txtype ?? 0;
    message.nonce = object.nonce ?? 0;
    message.from = object.from ?? new Uint8Array();
    message.to = object.to ?? new Uint8Array();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseSetTransactionCostsTx(): SetTransactionCostsTx {
  return { txtype: 0, nonce: 0, value: 0 };
}

export const SetTransactionCostsTx = {
  encode(message: SetTransactionCostsTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txtype !== 0) {
      writer.uint32(8).int32(message.txtype);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint32(message.nonce);
    }
    if (message.value !== 0) {
      writer.uint32(24).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetTransactionCostsTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetTransactionCostsTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txtype = reader.int32() as any;
          break;
        case 2:
          message.nonce = reader.uint32();
          break;
        case 3:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetTransactionCostsTx {
    return {
      txtype: isSet(object.txtype) ? txTypeFromJSON(object.txtype) : 0,
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: SetTransactionCostsTx): unknown {
    const obj: any = {};
    message.txtype !== undefined && (obj.txtype = txTypeToJSON(message.txtype));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  create<I extends Exact<DeepPartial<SetTransactionCostsTx>, I>>(base?: I): SetTransactionCostsTx {
    return SetTransactionCostsTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetTransactionCostsTx>, I>>(object: I): SetTransactionCostsTx {
    const message = createBaseSetTransactionCostsTx();
    message.txtype = object.txtype ?? 0;
    message.nonce = object.nonce ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseSetAccountTx(): SetAccountTx {
  return {
    txtype: 0,
    nonce: undefined,
    infoURI: undefined,
    account: undefined,
    faucetPackage: undefined,
    delegates: [],
  };
}

export const SetAccountTx = {
  encode(message: SetAccountTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txtype !== 0) {
      writer.uint32(8).int32(message.txtype);
    }
    if (message.nonce !== undefined) {
      writer.uint32(16).uint32(message.nonce);
    }
    if (message.infoURI !== undefined) {
      writer.uint32(26).string(message.infoURI);
    }
    if (message.account !== undefined) {
      writer.uint32(34).bytes(message.account);
    }
    if (message.faucetPackage !== undefined) {
      FaucetPackage.encode(message.faucetPackage, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.delegates) {
      writer.uint32(50).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetAccountTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetAccountTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txtype = reader.int32() as any;
          break;
        case 2:
          message.nonce = reader.uint32();
          break;
        case 3:
          message.infoURI = reader.string();
          break;
        case 4:
          message.account = reader.bytes();
          break;
        case 5:
          message.faucetPackage = FaucetPackage.decode(reader, reader.uint32());
          break;
        case 6:
          message.delegates.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetAccountTx {
    return {
      txtype: isSet(object.txtype) ? txTypeFromJSON(object.txtype) : 0,
      nonce: isSet(object.nonce) ? Number(object.nonce) : undefined,
      infoURI: isSet(object.infoURI) ? String(object.infoURI) : undefined,
      account: isSet(object.account) ? bytesFromBase64(object.account) : undefined,
      faucetPackage: isSet(object.faucetPackage) ? FaucetPackage.fromJSON(object.faucetPackage) : undefined,
      delegates: Array.isArray(object?.delegates) ? object.delegates.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: SetAccountTx): unknown {
    const obj: any = {};
    message.txtype !== undefined && (obj.txtype = txTypeToJSON(message.txtype));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.infoURI !== undefined && (obj.infoURI = message.infoURI);
    message.account !== undefined &&
      (obj.account = message.account !== undefined ? base64FromBytes(message.account) : undefined);
    message.faucetPackage !== undefined &&
      (obj.faucetPackage = message.faucetPackage ? FaucetPackage.toJSON(message.faucetPackage) : undefined);
    if (message.delegates) {
      obj.delegates = message.delegates.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.delegates = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetAccountTx>, I>>(base?: I): SetAccountTx {
    return SetAccountTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetAccountTx>, I>>(object: I): SetAccountTx {
    const message = createBaseSetAccountTx();
    message.txtype = object.txtype ?? 0;
    message.nonce = object.nonce ?? undefined;
    message.infoURI = object.infoURI ?? undefined;
    message.account = object.account ?? undefined;
    message.faucetPackage = (object.faucetPackage !== undefined && object.faucetPackage !== null)
      ? FaucetPackage.fromPartial(object.faucetPackage)
      : undefined;
    message.delegates = object.delegates?.map((e) => e) || [];
    return message;
  },
};

function createBaseCollectFaucetTx(): CollectFaucetTx {
  return { txType: 0, faucetPackage: undefined, nonce: 0 };
}

export const CollectFaucetTx = {
  encode(message: CollectFaucetTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txType !== 0) {
      writer.uint32(8).int32(message.txType);
    }
    if (message.faucetPackage !== undefined) {
      FaucetPackage.encode(message.faucetPackage, writer.uint32(18).fork()).ldelim();
    }
    if (message.nonce !== 0) {
      writer.uint32(24).uint32(message.nonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectFaucetTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectFaucetTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txType = reader.int32() as any;
          break;
        case 2:
          message.faucetPackage = FaucetPackage.decode(reader, reader.uint32());
          break;
        case 3:
          message.nonce = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectFaucetTx {
    return {
      txType: isSet(object.txType) ? txTypeFromJSON(object.txType) : 0,
      faucetPackage: isSet(object.faucetPackage) ? FaucetPackage.fromJSON(object.faucetPackage) : undefined,
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
    };
  },

  toJSON(message: CollectFaucetTx): unknown {
    const obj: any = {};
    message.txType !== undefined && (obj.txType = txTypeToJSON(message.txType));
    message.faucetPackage !== undefined &&
      (obj.faucetPackage = message.faucetPackage ? FaucetPackage.toJSON(message.faucetPackage) : undefined);
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    return obj;
  },

  create<I extends Exact<DeepPartial<CollectFaucetTx>, I>>(base?: I): CollectFaucetTx {
    return CollectFaucetTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CollectFaucetTx>, I>>(object: I): CollectFaucetTx {
    const message = createBaseCollectFaucetTx();
    message.txType = object.txType ?? 0;
    message.faucetPackage = (object.faucetPackage !== undefined && object.faucetPackage !== null)
      ? FaucetPackage.fromPartial(object.faucetPackage)
      : undefined;
    message.nonce = object.nonce ?? 0;
    return message;
  },
};

function createBaseFaucetPayload(): FaucetPayload {
  return { identifier: 0, to: new Uint8Array(), amount: 0 };
}

export const FaucetPayload = {
  encode(message: FaucetPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== 0) {
      writer.uint32(8).uint64(message.identifier);
    }
    if (message.to.length !== 0) {
      writer.uint32(18).bytes(message.to);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FaucetPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaucetPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.to = reader.bytes();
          break;
        case 3:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FaucetPayload {
    return {
      identifier: isSet(object.identifier) ? Number(object.identifier) : 0,
      to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(),
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: FaucetPayload): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = Math.round(message.identifier));
    message.to !== undefined && (obj.to = base64FromBytes(message.to !== undefined ? message.to : new Uint8Array()));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  create<I extends Exact<DeepPartial<FaucetPayload>, I>>(base?: I): FaucetPayload {
    return FaucetPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FaucetPayload>, I>>(object: I): FaucetPayload {
    const message = createBaseFaucetPayload();
    message.identifier = object.identifier ?? 0;
    message.to = object.to ?? new Uint8Array();
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseFaucetPackage(): FaucetPackage {
  return { payload: new Uint8Array(), signature: new Uint8Array() };
}

export const FaucetPackage = {
  encode(message: FaucetPackage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FaucetPackage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFaucetPackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes();
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

  fromJSON(object: any): FaucetPackage {
    return {
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: FaucetPackage): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<FaucetPackage>, I>>(base?: I): FaucetPackage {
    return FaucetPackage.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FaucetPackage>, I>>(object: I): FaucetPackage {
    const message = createBaseFaucetPackage();
    message.payload = object.payload ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseSetKeykeeperTx(): SetKeykeeperTx {
  return { txtype: 0, nonce: 0, keykeeper: new Uint8Array() };
}

export const SetKeykeeperTx = {
  encode(message: SetKeykeeperTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txtype !== 0) {
      writer.uint32(8).int32(message.txtype);
    }
    if (message.nonce !== 0) {
      writer.uint32(16).uint32(message.nonce);
    }
    if (message.keykeeper.length !== 0) {
      writer.uint32(26).bytes(message.keykeeper);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetKeykeeperTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetKeykeeperTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txtype = reader.int32() as any;
          break;
        case 2:
          message.nonce = reader.uint32();
          break;
        case 3:
          message.keykeeper = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetKeykeeperTx {
    return {
      txtype: isSet(object.txtype) ? txTypeFromJSON(object.txtype) : 0,
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      keykeeper: isSet(object.keykeeper) ? bytesFromBase64(object.keykeeper) : new Uint8Array(),
    };
  },

  toJSON(message: SetKeykeeperTx): unknown {
    const obj: any = {};
    message.txtype !== undefined && (obj.txtype = txTypeToJSON(message.txtype));
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.keykeeper !== undefined &&
      (obj.keykeeper = base64FromBytes(message.keykeeper !== undefined ? message.keykeeper : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<SetKeykeeperTx>, I>>(base?: I): SetKeykeeperTx {
    return SetKeykeeperTx.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SetKeykeeperTx>, I>>(object: I): SetKeykeeperTx {
    const message = createBaseSetKeykeeperTx();
    message.txtype = object.txtype ?? 0;
    message.nonce = object.nonce ?? 0;
    message.keykeeper = object.keykeeper ?? new Uint8Array();
    return message;
  },
};

function createBaseProcess(): Process {
  return {
    processId: new Uint8Array(),
    entityId: new Uint8Array(),
    startBlock: 0,
    blockCount: 0,
    censusRoot: new Uint8Array(),
    censusURI: undefined,
    encryptionPrivateKeys: [],
    encryptionPublicKeys: [],
    keyIndex: undefined,
    status: 0,
    paramsSignature: undefined,
    namespace: 0,
    envelopeType: undefined,
    mode: undefined,
    questionIndex: undefined,
    questionCount: undefined,
    voteOptions: undefined,
    censusOrigin: 0,
    results: [],
    resultsSignatures: [],
    ethIndexSlot: undefined,
    sourceBlockHeight: undefined,
    owner: undefined,
    metadata: undefined,
    sourceNetworkId: 0,
    maxCensusSize: undefined,
    rollingCensusRoot: undefined,
    rollingCensusSize: undefined,
    nullifiersRoot: undefined,
    sourceNetworkContractAddr: undefined,
    tokenDecimals: undefined,
  };
}

export const Process = {
  encode(message: Process, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    for (const v of message.encryptionPrivateKeys) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.encryptionPublicKeys) {
      writer.uint32(74).string(v!);
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
      EnvelopeType.encode(message.envelopeType, writer.uint32(122).fork()).ldelim();
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
      ProcessVoteOptions.encode(message.voteOptions, writer.uint32(154).fork()).ldelim();
    }
    if (message.censusOrigin !== 0) {
      writer.uint32(160).int32(message.censusOrigin);
    }
    for (const v of message.results) {
      ProcessResult.encode(v!, writer.uint32(170).fork()).ldelim();
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
    if (message.sourceNetworkId !== 0) {
      writer.uint32(216).int32(message.sourceNetworkId);
    }
    if (message.maxCensusSize !== undefined) {
      writer.uint32(224).uint64(message.maxCensusSize);
    }
    if (message.rollingCensusRoot !== undefined) {
      writer.uint32(234).bytes(message.rollingCensusRoot);
    }
    if (message.rollingCensusSize !== undefined) {
      writer.uint32(240).uint64(message.rollingCensusSize);
    }
    if (message.nullifiersRoot !== undefined) {
      writer.uint32(250).bytes(message.nullifiersRoot);
    }
    if (message.sourceNetworkContractAddr !== undefined) {
      writer.uint32(258).bytes(message.sourceNetworkContractAddr);
    }
    if (message.tokenDecimals !== undefined) {
      writer.uint32(264).uint32(message.tokenDecimals);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Process {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcess();
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
        case 8:
          message.encryptionPrivateKeys.push(reader.string());
          break;
        case 9:
          message.encryptionPublicKeys.push(reader.string());
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
          message.voteOptions = ProcessVoteOptions.decode(reader, reader.uint32());
          break;
        case 20:
          message.censusOrigin = reader.int32() as any;
          break;
        case 21:
          message.results.push(ProcessResult.decode(reader, reader.uint32()));
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
        case 27:
          message.sourceNetworkId = reader.int32() as any;
          break;
        case 28:
          message.maxCensusSize = longToNumber(reader.uint64() as Long);
          break;
        case 29:
          message.rollingCensusRoot = reader.bytes();
          break;
        case 30:
          message.rollingCensusSize = longToNumber(reader.uint64() as Long);
          break;
        case 31:
          message.nullifiersRoot = reader.bytes();
          break;
        case 32:
          message.sourceNetworkContractAddr = reader.bytes();
          break;
        case 33:
          message.tokenDecimals = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Process {
    return {
      processId: isSet(object.processId) ? bytesFromBase64(object.processId) : new Uint8Array(),
      entityId: isSet(object.entityId) ? bytesFromBase64(object.entityId) : new Uint8Array(),
      startBlock: isSet(object.startBlock) ? Number(object.startBlock) : 0,
      blockCount: isSet(object.blockCount) ? Number(object.blockCount) : 0,
      censusRoot: isSet(object.censusRoot) ? bytesFromBase64(object.censusRoot) : new Uint8Array(),
      censusURI: isSet(object.censusURI) ? String(object.censusURI) : undefined,
      encryptionPrivateKeys: Array.isArray(object?.encryptionPrivateKeys)
        ? object.encryptionPrivateKeys.map((e: any) => String(e))
        : [],
      encryptionPublicKeys: Array.isArray(object?.encryptionPublicKeys)
        ? object.encryptionPublicKeys.map((e: any) => String(e))
        : [],
      keyIndex: isSet(object.keyIndex) ? Number(object.keyIndex) : undefined,
      status: isSet(object.status) ? processStatusFromJSON(object.status) : 0,
      paramsSignature: isSet(object.paramsSignature) ? bytesFromBase64(object.paramsSignature) : undefined,
      namespace: isSet(object.namespace) ? Number(object.namespace) : 0,
      envelopeType: isSet(object.envelopeType) ? EnvelopeType.fromJSON(object.envelopeType) : undefined,
      mode: isSet(object.mode) ? ProcessMode.fromJSON(object.mode) : undefined,
      questionIndex: isSet(object.questionIndex) ? Number(object.questionIndex) : undefined,
      questionCount: isSet(object.questionCount) ? Number(object.questionCount) : undefined,
      voteOptions: isSet(object.voteOptions) ? ProcessVoteOptions.fromJSON(object.voteOptions) : undefined,
      censusOrigin: isSet(object.censusOrigin) ? censusOriginFromJSON(object.censusOrigin) : 0,
      results: Array.isArray(object?.results) ? object.results.map((e: any) => ProcessResult.fromJSON(e)) : [],
      resultsSignatures: Array.isArray(object?.resultsSignatures)
        ? object.resultsSignatures.map((e: any) => bytesFromBase64(e))
        : [],
      ethIndexSlot: isSet(object.ethIndexSlot) ? Number(object.ethIndexSlot) : undefined,
      sourceBlockHeight: isSet(object.sourceBlockHeight) ? Number(object.sourceBlockHeight) : undefined,
      owner: isSet(object.owner) ? bytesFromBase64(object.owner) : undefined,
      metadata: isSet(object.metadata) ? String(object.metadata) : undefined,
      sourceNetworkId: isSet(object.sourceNetworkId) ? sourceNetworkIdFromJSON(object.sourceNetworkId) : 0,
      maxCensusSize: isSet(object.maxCensusSize) ? Number(object.maxCensusSize) : undefined,
      rollingCensusRoot: isSet(object.rollingCensusRoot) ? bytesFromBase64(object.rollingCensusRoot) : undefined,
      rollingCensusSize: isSet(object.rollingCensusSize) ? Number(object.rollingCensusSize) : undefined,
      nullifiersRoot: isSet(object.nullifiersRoot) ? bytesFromBase64(object.nullifiersRoot) : undefined,
      sourceNetworkContractAddr: isSet(object.sourceNetworkContractAddr)
        ? bytesFromBase64(object.sourceNetworkContractAddr)
        : undefined,
      tokenDecimals: isSet(object.tokenDecimals) ? Number(object.tokenDecimals) : undefined,
    };
  },

  toJSON(message: Process): unknown {
    const obj: any = {};
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(message.processId !== undefined ? message.processId : new Uint8Array()));
    message.entityId !== undefined &&
      (obj.entityId = base64FromBytes(message.entityId !== undefined ? message.entityId : new Uint8Array()));
    message.startBlock !== undefined && (obj.startBlock = Math.round(message.startBlock));
    message.blockCount !== undefined && (obj.blockCount = Math.round(message.blockCount));
    message.censusRoot !== undefined &&
      (obj.censusRoot = base64FromBytes(message.censusRoot !== undefined ? message.censusRoot : new Uint8Array()));
    message.censusURI !== undefined && (obj.censusURI = message.censusURI);
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
    message.keyIndex !== undefined && (obj.keyIndex = Math.round(message.keyIndex));
    message.status !== undefined && (obj.status = processStatusToJSON(message.status));
    message.paramsSignature !== undefined && (obj.paramsSignature = message.paramsSignature !== undefined
      ? base64FromBytes(message.paramsSignature)
      : undefined);
    message.namespace !== undefined && (obj.namespace = Math.round(message.namespace));
    message.envelopeType !== undefined &&
      (obj.envelopeType = message.envelopeType ? EnvelopeType.toJSON(message.envelopeType) : undefined);
    message.mode !== undefined && (obj.mode = message.mode ? ProcessMode.toJSON(message.mode) : undefined);
    message.questionIndex !== undefined && (obj.questionIndex = Math.round(message.questionIndex));
    message.questionCount !== undefined && (obj.questionCount = Math.round(message.questionCount));
    message.voteOptions !== undefined &&
      (obj.voteOptions = message.voteOptions ? ProcessVoteOptions.toJSON(message.voteOptions) : undefined);
    message.censusOrigin !== undefined && (obj.censusOrigin = censusOriginToJSON(message.censusOrigin));
    if (message.results) {
      obj.results = message.results.map((e) => e ? ProcessResult.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    if (message.resultsSignatures) {
      obj.resultsSignatures = message.resultsSignatures.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.resultsSignatures = [];
    }
    message.ethIndexSlot !== undefined && (obj.ethIndexSlot = Math.round(message.ethIndexSlot));
    message.sourceBlockHeight !== undefined && (obj.sourceBlockHeight = Math.round(message.sourceBlockHeight));
    message.owner !== undefined &&
      (obj.owner = message.owner !== undefined ? base64FromBytes(message.owner) : undefined);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.sourceNetworkId !== undefined && (obj.sourceNetworkId = sourceNetworkIdToJSON(message.sourceNetworkId));
    message.maxCensusSize !== undefined && (obj.maxCensusSize = Math.round(message.maxCensusSize));
    message.rollingCensusRoot !== undefined && (obj.rollingCensusRoot = message.rollingCensusRoot !== undefined
      ? base64FromBytes(message.rollingCensusRoot)
      : undefined);
    message.rollingCensusSize !== undefined && (obj.rollingCensusSize = Math.round(message.rollingCensusSize));
    message.nullifiersRoot !== undefined &&
      (obj.nullifiersRoot = message.nullifiersRoot !== undefined ? base64FromBytes(message.nullifiersRoot) : undefined);
    message.sourceNetworkContractAddr !== undefined &&
      (obj.sourceNetworkContractAddr = message.sourceNetworkContractAddr !== undefined
        ? base64FromBytes(message.sourceNetworkContractAddr)
        : undefined);
    message.tokenDecimals !== undefined && (obj.tokenDecimals = Math.round(message.tokenDecimals));
    return obj;
  },

  create<I extends Exact<DeepPartial<Process>, I>>(base?: I): Process {
    return Process.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Process>, I>>(object: I): Process {
    const message = createBaseProcess();
    message.processId = object.processId ?? new Uint8Array();
    message.entityId = object.entityId ?? new Uint8Array();
    message.startBlock = object.startBlock ?? 0;
    message.blockCount = object.blockCount ?? 0;
    message.censusRoot = object.censusRoot ?? new Uint8Array();
    message.censusURI = object.censusURI ?? undefined;
    message.encryptionPrivateKeys = object.encryptionPrivateKeys?.map((e) => e) || [];
    message.encryptionPublicKeys = object.encryptionPublicKeys?.map((e) => e) || [];
    message.keyIndex = object.keyIndex ?? undefined;
    message.status = object.status ?? 0;
    message.paramsSignature = object.paramsSignature ?? undefined;
    message.namespace = object.namespace ?? 0;
    message.envelopeType = (object.envelopeType !== undefined && object.envelopeType !== null)
      ? EnvelopeType.fromPartial(object.envelopeType)
      : undefined;
    message.mode = (object.mode !== undefined && object.mode !== null)
      ? ProcessMode.fromPartial(object.mode)
      : undefined;
    message.questionIndex = object.questionIndex ?? undefined;
    message.questionCount = object.questionCount ?? undefined;
    message.voteOptions = (object.voteOptions !== undefined && object.voteOptions !== null)
      ? ProcessVoteOptions.fromPartial(object.voteOptions)
      : undefined;
    message.censusOrigin = object.censusOrigin ?? 0;
    message.results = object.results?.map((e) => ProcessResult.fromPartial(e)) || [];
    message.resultsSignatures = object.resultsSignatures?.map((e) => e) || [];
    message.ethIndexSlot = object.ethIndexSlot ?? undefined;
    message.sourceBlockHeight = object.sourceBlockHeight ?? undefined;
    message.owner = object.owner ?? undefined;
    message.metadata = object.metadata ?? undefined;
    message.sourceNetworkId = object.sourceNetworkId ?? 0;
    message.maxCensusSize = object.maxCensusSize ?? undefined;
    message.rollingCensusRoot = object.rollingCensusRoot ?? undefined;
    message.rollingCensusSize = object.rollingCensusSize ?? undefined;
    message.nullifiersRoot = object.nullifiersRoot ?? undefined;
    message.sourceNetworkContractAddr = object.sourceNetworkContractAddr ?? undefined;
    message.tokenDecimals = object.tokenDecimals ?? undefined;
    return message;
  },
};

function createBaseEnvelopeType(): EnvelopeType {
  return { serial: false, anonymous: false, encryptedVotes: false, uniqueValues: false, costFromWeight: false };
}

export const EnvelopeType = {
  encode(message: EnvelopeType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EnvelopeType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvelopeType();
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
    return {
      serial: isSet(object.serial) ? Boolean(object.serial) : false,
      anonymous: isSet(object.anonymous) ? Boolean(object.anonymous) : false,
      encryptedVotes: isSet(object.encryptedVotes) ? Boolean(object.encryptedVotes) : false,
      uniqueValues: isSet(object.uniqueValues) ? Boolean(object.uniqueValues) : false,
      costFromWeight: isSet(object.costFromWeight) ? Boolean(object.costFromWeight) : false,
    };
  },

  toJSON(message: EnvelopeType): unknown {
    const obj: any = {};
    message.serial !== undefined && (obj.serial = message.serial);
    message.anonymous !== undefined && (obj.anonymous = message.anonymous);
    message.encryptedVotes !== undefined && (obj.encryptedVotes = message.encryptedVotes);
    message.uniqueValues !== undefined && (obj.uniqueValues = message.uniqueValues);
    message.costFromWeight !== undefined && (obj.costFromWeight = message.costFromWeight);
    return obj;
  },

  create<I extends Exact<DeepPartial<EnvelopeType>, I>>(base?: I): EnvelopeType {
    return EnvelopeType.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EnvelopeType>, I>>(object: I): EnvelopeType {
    const message = createBaseEnvelopeType();
    message.serial = object.serial ?? false;
    message.anonymous = object.anonymous ?? false;
    message.encryptedVotes = object.encryptedVotes ?? false;
    message.uniqueValues = object.uniqueValues ?? false;
    message.costFromWeight = object.costFromWeight ?? false;
    return message;
  },
};

function createBaseProcessMode(): ProcessMode {
  return { autoStart: false, interruptible: false, dynamicCensus: false, encryptedMetaData: false, preRegister: false };
}

export const ProcessMode = {
  encode(message: ProcessMode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.preRegister === true) {
      writer.uint32(40).bool(message.preRegister);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMode();
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
        case 5:
          message.preRegister = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessMode {
    return {
      autoStart: isSet(object.autoStart) ? Boolean(object.autoStart) : false,
      interruptible: isSet(object.interruptible) ? Boolean(object.interruptible) : false,
      dynamicCensus: isSet(object.dynamicCensus) ? Boolean(object.dynamicCensus) : false,
      encryptedMetaData: isSet(object.encryptedMetaData) ? Boolean(object.encryptedMetaData) : false,
      preRegister: isSet(object.preRegister) ? Boolean(object.preRegister) : false,
    };
  },

  toJSON(message: ProcessMode): unknown {
    const obj: any = {};
    message.autoStart !== undefined && (obj.autoStart = message.autoStart);
    message.interruptible !== undefined && (obj.interruptible = message.interruptible);
    message.dynamicCensus !== undefined && (obj.dynamicCensus = message.dynamicCensus);
    message.encryptedMetaData !== undefined && (obj.encryptedMetaData = message.encryptedMetaData);
    message.preRegister !== undefined && (obj.preRegister = message.preRegister);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessMode>, I>>(base?: I): ProcessMode {
    return ProcessMode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMode>, I>>(object: I): ProcessMode {
    const message = createBaseProcessMode();
    message.autoStart = object.autoStart ?? false;
    message.interruptible = object.interruptible ?? false;
    message.dynamicCensus = object.dynamicCensus ?? false;
    message.encryptedMetaData = object.encryptedMetaData ?? false;
    message.preRegister = object.preRegister ?? false;
    return message;
  },
};

function createBaseProcessVoteOptions(): ProcessVoteOptions {
  return { maxCount: 0, maxValue: 0, maxVoteOverwrites: 0, maxTotalCost: 0, costExponent: 0 };
}

export const ProcessVoteOptions = {
  encode(message: ProcessVoteOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessVoteOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessVoteOptions();
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
    return {
      maxCount: isSet(object.maxCount) ? Number(object.maxCount) : 0,
      maxValue: isSet(object.maxValue) ? Number(object.maxValue) : 0,
      maxVoteOverwrites: isSet(object.maxVoteOverwrites) ? Number(object.maxVoteOverwrites) : 0,
      maxTotalCost: isSet(object.maxTotalCost) ? Number(object.maxTotalCost) : 0,
      costExponent: isSet(object.costExponent) ? Number(object.costExponent) : 0,
    };
  },

  toJSON(message: ProcessVoteOptions): unknown {
    const obj: any = {};
    message.maxCount !== undefined && (obj.maxCount = Math.round(message.maxCount));
    message.maxValue !== undefined && (obj.maxValue = Math.round(message.maxValue));
    message.maxVoteOverwrites !== undefined && (obj.maxVoteOverwrites = Math.round(message.maxVoteOverwrites));
    message.maxTotalCost !== undefined && (obj.maxTotalCost = Math.round(message.maxTotalCost));
    message.costExponent !== undefined && (obj.costExponent = Math.round(message.costExponent));
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessVoteOptions>, I>>(base?: I): ProcessVoteOptions {
    return ProcessVoteOptions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProcessVoteOptions>, I>>(object: I): ProcessVoteOptions {
    const message = createBaseProcessVoteOptions();
    message.maxCount = object.maxCount ?? 0;
    message.maxValue = object.maxValue ?? 0;
    message.maxVoteOverwrites = object.maxVoteOverwrites ?? 0;
    message.maxTotalCost = object.maxTotalCost ?? 0;
    message.costExponent = object.costExponent ?? 0;
    return message;
  },
};

function createBaseOracleList(): OracleList {
  return { oracles: [] };
}

export const OracleList = {
  encode(message: OracleList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracles) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleList();
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
    return { oracles: Array.isArray(object?.oracles) ? object.oracles.map((e: any) => bytesFromBase64(e)) : [] };
  },

  toJSON(message: OracleList): unknown {
    const obj: any = {};
    if (message.oracles) {
      obj.oracles = message.oracles.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.oracles = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OracleList>, I>>(base?: I): OracleList {
    return OracleList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OracleList>, I>>(object: I): OracleList {
    const message = createBaseOracleList();
    message.oracles = object.oracles?.map((e) => e) || [];
    return message;
  },
};

function createBaseValidatorList(): ValidatorList {
  return { validators: [] };
}

export const ValidatorList = {
  encode(message: ValidatorList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorList();
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
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
    };
  },

  toJSON(message: ValidatorList): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorList>, I>>(base?: I): ValidatorList {
    return ValidatorList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorList>, I>>(object: I): ValidatorList {
    const message = createBaseValidatorList();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    return message;
  },
};

function createBaseValidator(): Validator {
  return { address: new Uint8Array(), pubKey: new Uint8Array(), power: 0, name: "" };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
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
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      power: isSet(object.power) ? Number(object.power) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.pubKey !== undefined &&
      (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    message.power !== undefined && (obj.power = Math.round(message.power));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create<I extends Exact<DeepPartial<Validator>, I>>(base?: I): Validator {
    return Validator.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.power = object.power ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseTendermintHeader(): TendermintHeader {
  return {
    chainId: "",
    height: 0,
    timestamp: 0,
    blockID: new Uint8Array(),
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    evidenceHash: new Uint8Array(),
    proposerAddress: new Uint8Array(),
  };
}

export const TendermintHeader = {
  encode(message: TendermintHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): TendermintHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTendermintHeader();
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
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      height: isSet(object.height) ? Number(object.height) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      blockID: isSet(object.blockID) ? bytesFromBase64(object.blockID) : new Uint8Array(),
      lastCommitHash: isSet(object.lastCommitHash) ? bytesFromBase64(object.lastCommitHash) : new Uint8Array(),
      dataHash: isSet(object.dataHash) ? bytesFromBase64(object.dataHash) : new Uint8Array(),
      validatorsHash: isSet(object.validatorsHash) ? bytesFromBase64(object.validatorsHash) : new Uint8Array(),
      nextValidatorsHash: isSet(object.nextValidatorsHash)
        ? bytesFromBase64(object.nextValidatorsHash)
        : new Uint8Array(),
      consensusHash: isSet(object.consensusHash) ? bytesFromBase64(object.consensusHash) : new Uint8Array(),
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array(),
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(),
      evidenceHash: isSet(object.evidenceHash) ? bytesFromBase64(object.evidenceHash) : new Uint8Array(),
      proposerAddress: isSet(object.proposerAddress) ? bytesFromBase64(object.proposerAddress) : new Uint8Array(),
    };
  },

  toJSON(message: TendermintHeader): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.blockID !== undefined &&
      (obj.blockID = base64FromBytes(message.blockID !== undefined ? message.blockID : new Uint8Array()));
    message.lastCommitHash !== undefined &&
      (obj.lastCommitHash = base64FromBytes(
        message.lastCommitHash !== undefined ? message.lastCommitHash : new Uint8Array(),
      ));
    message.dataHash !== undefined &&
      (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
    message.validatorsHash !== undefined &&
      (obj.validatorsHash = base64FromBytes(
        message.validatorsHash !== undefined ? message.validatorsHash : new Uint8Array(),
      ));
    message.nextValidatorsHash !== undefined &&
      (obj.nextValidatorsHash = base64FromBytes(
        message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array(),
      ));
    message.consensusHash !== undefined &&
      (obj.consensusHash = base64FromBytes(
        message.consensusHash !== undefined ? message.consensusHash : new Uint8Array(),
      ));
    message.appHash !== undefined &&
      (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    message.lastResultsHash !== undefined &&
      (obj.lastResultsHash = base64FromBytes(
        message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array(),
      ));
    message.evidenceHash !== undefined &&
      (obj.evidenceHash = base64FromBytes(
        message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array(),
      ));
    message.proposerAddress !== undefined &&
      (obj.proposerAddress = base64FromBytes(
        message.proposerAddress !== undefined ? message.proposerAddress : new Uint8Array(),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<TendermintHeader>, I>>(base?: I): TendermintHeader {
    return TendermintHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TendermintHeader>, I>>(object: I): TendermintHeader {
    const message = createBaseTendermintHeader();
    message.chainId = object.chainId ?? "";
    message.height = object.height ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.blockID = object.blockID ?? new Uint8Array();
    message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.validatorsHash = object.validatorsHash ?? new Uint8Array();
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.consensusHash = object.consensusHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? new Uint8Array();
    return message;
  },
};

function createBaseProcessResult(): ProcessResult {
  return { votes: [], processId: undefined, entityId: undefined, oracleAddress: undefined, signature: undefined };
}

export const ProcessResult = {
  encode(message: ProcessResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.votes) {
      QuestionResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.processId !== undefined) {
      writer.uint32(18).bytes(message.processId);
    }
    if (message.entityId !== undefined) {
      writer.uint32(26).bytes(message.entityId);
    }
    if (message.oracleAddress !== undefined) {
      writer.uint32(34).bytes(message.oracleAddress);
    }
    if (message.signature !== undefined) {
      writer.uint32(42).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessResult();
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
        case 4:
          message.oracleAddress = reader.bytes();
          break;
        case 5:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessResult {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => QuestionResult.fromJSON(e)) : [],
      processId: isSet(object.processId) ? bytesFromBase64(object.processId) : undefined,
      entityId: isSet(object.entityId) ? bytesFromBase64(object.entityId) : undefined,
      oracleAddress: isSet(object.oracleAddress) ? bytesFromBase64(object.oracleAddress) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
    };
  },

  toJSON(message: ProcessResult): unknown {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => e ? QuestionResult.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.processId !== undefined &&
      (obj.processId = message.processId !== undefined ? base64FromBytes(message.processId) : undefined);
    message.entityId !== undefined &&
      (obj.entityId = message.entityId !== undefined ? base64FromBytes(message.entityId) : undefined);
    message.oracleAddress !== undefined &&
      (obj.oracleAddress = message.oracleAddress !== undefined ? base64FromBytes(message.oracleAddress) : undefined);
    message.signature !== undefined &&
      (obj.signature = message.signature !== undefined ? base64FromBytes(message.signature) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessResult>, I>>(base?: I): ProcessResult {
    return ProcessResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProcessResult>, I>>(object: I): ProcessResult {
    const message = createBaseProcessResult();
    message.votes = object.votes?.map((e) => QuestionResult.fromPartial(e)) || [];
    message.processId = object.processId ?? undefined;
    message.entityId = object.entityId ?? undefined;
    message.oracleAddress = object.oracleAddress ?? undefined;
    message.signature = object.signature ?? undefined;
    return message;
  },
};

function createBaseQuestionResult(): QuestionResult {
  return { question: [] };
}

export const QuestionResult = {
  encode(message: QuestionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.question) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuestionResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuestionResult();
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
    return { question: Array.isArray(object?.question) ? object.question.map((e: any) => bytesFromBase64(e)) : [] };
  },

  toJSON(message: QuestionResult): unknown {
    const obj: any = {};
    if (message.question) {
      obj.question = message.question.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.question = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuestionResult>, I>>(base?: I): QuestionResult {
    return QuestionResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuestionResult>, I>>(object: I): QuestionResult {
    const message = createBaseQuestionResult();
    message.question = object.question?.map((e) => e) || [];
    return message;
  },
};

function createBaseProcessEndingList(): ProcessEndingList {
  return { processList: [] };
}

export const ProcessEndingList = {
  encode(message: ProcessEndingList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.processList) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessEndingList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessEndingList();
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
    return {
      processList: Array.isArray(object?.processList) ? object.processList.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: ProcessEndingList): unknown {
    const obj: any = {};
    if (message.processList) {
      obj.processList = message.processList.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.processList = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessEndingList>, I>>(base?: I): ProcessEndingList {
    return ProcessEndingList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProcessEndingList>, I>>(object: I): ProcessEndingList {
    const message = createBaseProcessEndingList();
    message.processList = object.processList?.map((e) => e) || [];
    return message;
  },
};

function createBaseStoredKeys(): StoredKeys {
  return { pids: [] };
}

export const StoredKeys = {
  encode(message: StoredKeys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pids) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoredKeys {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoredKeys();
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
    return { pids: Array.isArray(object?.pids) ? object.pids.map((e: any) => bytesFromBase64(e)) : [] };
  },

  toJSON(message: StoredKeys): unknown {
    const obj: any = {};
    if (message.pids) {
      obj.pids = message.pids.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.pids = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StoredKeys>, I>>(base?: I): StoredKeys {
    return StoredKeys.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StoredKeys>, I>>(object: I): StoredKeys {
    const message = createBaseStoredKeys();
    message.pids = object.pids?.map((e) => e) || [];
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
