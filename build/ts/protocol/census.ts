/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "dvote.types.v2";

/** The models below affect the whole election definition. */
export interface Census {
  body?:
    | { $case: "arbo"; arbo: CensusArbo }
    | { $case: "csp"; csp: CensusCsp }
    | { $case: "erc20"; erc20: CensusErc20 }
    | { $case: "erc721"; erc721: CensusErc721 }
    | { $case: "erc1155"; erc1155: CensusErc1155 }
    | { $case: "erc777"; erc777: CensusErc721 }
    | { $case: "ercMiniMe"; ercMiniMe: CensusErcMiniMe };
}

export interface CensusArbo {
  censusRoot: Uint8Array;
  censusUri: string;
}

export interface CensusCsp {
  cspUri: string;
  cspPublicKey: Uint8Array;
  /** Whether a plain or blind signature is expected as a proof */
  blind: boolean;
}

export interface CensusErc20 {
  tokenAddress: Uint8Array;
  balanceMapSlot: number;
  proof?: StorageProofErc20 | undefined;
  /** Ethereum block at which the state root is taken */
  sourceEthereumBlock: number;
}

/**
 * bytes tokenAddress = 1;
 * int32 balanceMapSlot = 2;
 * optional StorageProofErc721 proof = 3;
 * Ethereum block at which the state root is taken
 * int32 sourceEthereumBlock = 4;
 */
export interface CensusErc721 {}

/**
 * bytes tokenAddress = 1;
 * int32 balanceMapSlot = 2;
 * optional StorageProofErc1155 proof = 3;
 * Ethereum block at which the state root is taken
 * int32 sourceEthereumBlock = 4;
 */
export interface CensusErc1155 {}

/**
 * bytes tokenAddress = 1;
 * int32 balanceMapSlot = 2;
 * optional StorageProofErc777 proof = 3;
 * Ethereum block at which the state root is taken
 * int32 sourceEthereumBlock = 4;
 */
export interface CensusErc777 {}

export interface CensusErcMiniMe {
  tokenAddress: Uint8Array;
  balanceMapSlot: number;
  proof?: StorageProofMiniMe | undefined;
  /** Ethereum block at which the state root is taken */
  sourceEthereumBlock: number;
}

export interface Proof {
  body?:
    | { $case: "none"; none: ProofNone }
    | { $case: "arbo"; arbo: ProofArbo }
    | { $case: "csp"; csp: ProofCSP }
    | { $case: "erc20"; erc20: StorageProofErc20 }
    | { $case: "erc721"; erc721: StorageProofErc721 }
    | { $case: "erc1155"; erc1155: StorageProofErc1155 }
    | { $case: "erc777"; erc777: StorageProofErc777 }
    | { $case: "miniMe"; miniMe: StorageProofMiniMe }
    | { $case: "zkSnark"; zkSnark: ProofZkSnark };
}

export interface ProofNone {}

export interface ProofArbo {
  siblings: Uint8Array[];
}

export interface ProofCSP {
  /** {electionId, address, weight} */
  payload: Uint8Array;
  signature: Uint8Array;
}

export interface StorageProofErc20 {
  key: Uint8Array;
  value: Uint8Array;
  proof: Uint8Array[];
}

export interface StorageProofErc721 {}

export interface StorageProofErc1155 {}

export interface StorageProofErc777 {}

export interface StorageProofMiniMe {}

/** Used in elections where the voter anonimity is set to either `ZK_SNARKS` or `ZK_SNARKS_PREREGISTER` */
export interface ProofZkSnark {
  body?:
    | { $case: "proof1k"; proof1k: ProofZkSnark_Poseidon1kCensus }
    | { $case: "proof50k"; proof50k: ProofZkSnark_Poseidon50kCensus }
    | { $case: "proof250k"; proof250k: ProofZkSnark_Poseidon250kCensus };
}

/** ... */
export interface ProofZkSnark_Poseidon1kCensus {}

/** ... */
export interface ProofZkSnark_Poseidon50kCensus {}

/** ... */
export interface ProofZkSnark_Poseidon250kCensus {}

function createBaseCensus(): Census {
  return { body: undefined };
}

export const Census = {
  encode(message: Census, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "arbo") {
      CensusArbo.encode(message.body.arbo, writer.uint32(10).fork()).ldelim();
    }
    if (message.body?.$case === "csp") {
      CensusCsp.encode(message.body.csp, writer.uint32(18).fork()).ldelim();
    }
    if (message.body?.$case === "erc20") {
      CensusErc20.encode(message.body.erc20, writer.uint32(90).fork()).ldelim();
    }
    if (message.body?.$case === "erc721") {
      CensusErc721.encode(
        message.body.erc721,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.body?.$case === "erc1155") {
      CensusErc1155.encode(
        message.body.erc1155,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.body?.$case === "erc777") {
      CensusErc721.encode(
        message.body.erc777,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.body?.$case === "ercMiniMe") {
      CensusErcMiniMe.encode(
        message.body.ercMiniMe,
        writer.uint32(162).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Census {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCensus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "arbo",
            arbo: CensusArbo.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "csp",
            csp: CensusCsp.decode(reader, reader.uint32()),
          };
          break;
        case 11:
          message.body = {
            $case: "erc20",
            erc20: CensusErc20.decode(reader, reader.uint32()),
          };
          break;
        case 12:
          message.body = {
            $case: "erc721",
            erc721: CensusErc721.decode(reader, reader.uint32()),
          };
          break;
        case 13:
          message.body = {
            $case: "erc1155",
            erc1155: CensusErc1155.decode(reader, reader.uint32()),
          };
          break;
        case 14:
          message.body = {
            $case: "erc777",
            erc777: CensusErc721.decode(reader, reader.uint32()),
          };
          break;
        case 20:
          message.body = {
            $case: "ercMiniMe",
            ercMiniMe: CensusErcMiniMe.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Census {
    return {
      body: isSet(object.arbo)
        ? { $case: "arbo", arbo: CensusArbo.fromJSON(object.arbo) }
        : isSet(object.csp)
        ? { $case: "csp", csp: CensusCsp.fromJSON(object.csp) }
        : isSet(object.erc20)
        ? { $case: "erc20", erc20: CensusErc20.fromJSON(object.erc20) }
        : isSet(object.erc721)
        ? { $case: "erc721", erc721: CensusErc721.fromJSON(object.erc721) }
        : isSet(object.erc1155)
        ? { $case: "erc1155", erc1155: CensusErc1155.fromJSON(object.erc1155) }
        : isSet(object.erc777)
        ? { $case: "erc777", erc777: CensusErc721.fromJSON(object.erc777) }
        : isSet(object.ercMiniMe)
        ? {
            $case: "ercMiniMe",
            ercMiniMe: CensusErcMiniMe.fromJSON(object.ercMiniMe),
          }
        : undefined,
    };
  },

  toJSON(message: Census): unknown {
    const obj: any = {};
    message.body?.$case === "arbo" &&
      (obj.arbo = message.body?.arbo
        ? CensusArbo.toJSON(message.body?.arbo)
        : undefined);
    message.body?.$case === "csp" &&
      (obj.csp = message.body?.csp
        ? CensusCsp.toJSON(message.body?.csp)
        : undefined);
    message.body?.$case === "erc20" &&
      (obj.erc20 = message.body?.erc20
        ? CensusErc20.toJSON(message.body?.erc20)
        : undefined);
    message.body?.$case === "erc721" &&
      (obj.erc721 = message.body?.erc721
        ? CensusErc721.toJSON(message.body?.erc721)
        : undefined);
    message.body?.$case === "erc1155" &&
      (obj.erc1155 = message.body?.erc1155
        ? CensusErc1155.toJSON(message.body?.erc1155)
        : undefined);
    message.body?.$case === "erc777" &&
      (obj.erc777 = message.body?.erc777
        ? CensusErc721.toJSON(message.body?.erc777)
        : undefined);
    message.body?.$case === "ercMiniMe" &&
      (obj.ercMiniMe = message.body?.ercMiniMe
        ? CensusErcMiniMe.toJSON(message.body?.ercMiniMe)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Census>, I>>(object: I): Census {
    const message = createBaseCensus();
    if (
      object.body?.$case === "arbo" &&
      object.body?.arbo !== undefined &&
      object.body?.arbo !== null
    ) {
      message.body = {
        $case: "arbo",
        arbo: CensusArbo.fromPartial(object.body.arbo),
      };
    }
    if (
      object.body?.$case === "csp" &&
      object.body?.csp !== undefined &&
      object.body?.csp !== null
    ) {
      message.body = {
        $case: "csp",
        csp: CensusCsp.fromPartial(object.body.csp),
      };
    }
    if (
      object.body?.$case === "erc20" &&
      object.body?.erc20 !== undefined &&
      object.body?.erc20 !== null
    ) {
      message.body = {
        $case: "erc20",
        erc20: CensusErc20.fromPartial(object.body.erc20),
      };
    }
    if (
      object.body?.$case === "erc721" &&
      object.body?.erc721 !== undefined &&
      object.body?.erc721 !== null
    ) {
      message.body = {
        $case: "erc721",
        erc721: CensusErc721.fromPartial(object.body.erc721),
      };
    }
    if (
      object.body?.$case === "erc1155" &&
      object.body?.erc1155 !== undefined &&
      object.body?.erc1155 !== null
    ) {
      message.body = {
        $case: "erc1155",
        erc1155: CensusErc1155.fromPartial(object.body.erc1155),
      };
    }
    if (
      object.body?.$case === "erc777" &&
      object.body?.erc777 !== undefined &&
      object.body?.erc777 !== null
    ) {
      message.body = {
        $case: "erc777",
        erc777: CensusErc721.fromPartial(object.body.erc777),
      };
    }
    if (
      object.body?.$case === "ercMiniMe" &&
      object.body?.ercMiniMe !== undefined &&
      object.body?.ercMiniMe !== null
    ) {
      message.body = {
        $case: "ercMiniMe",
        ercMiniMe: CensusErcMiniMe.fromPartial(object.body.ercMiniMe),
      };
    }
    return message;
  },
};

function createBaseCensusArbo(): CensusArbo {
  return { censusRoot: new Uint8Array(), censusUri: "" };
}

export const CensusArbo = {
  encode(message: CensusArbo, writer: Writer = Writer.create()): Writer {
    if (message.censusRoot.length !== 0) {
      writer.uint32(10).bytes(message.censusRoot);
    }
    if (message.censusUri !== "") {
      writer.uint32(18).string(message.censusUri);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusArbo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCensusArbo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.censusRoot = reader.bytes();
          break;
        case 2:
          message.censusUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CensusArbo {
    return {
      censusRoot: isSet(object.censusRoot)
        ? bytesFromBase64(object.censusRoot)
        : new Uint8Array(),
      censusUri: isSet(object.censusUri) ? String(object.censusUri) : "",
    };
  },

  toJSON(message: CensusArbo): unknown {
    const obj: any = {};
    message.censusRoot !== undefined &&
      (obj.censusRoot = base64FromBytes(
        message.censusRoot !== undefined ? message.censusRoot : new Uint8Array()
      ));
    message.censusUri !== undefined && (obj.censusUri = message.censusUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusArbo>, I>>(
    object: I
  ): CensusArbo {
    const message = createBaseCensusArbo();
    message.censusRoot = object.censusRoot ?? new Uint8Array();
    message.censusUri = object.censusUri ?? "";
    return message;
  },
};

function createBaseCensusCsp(): CensusCsp {
  return { cspUri: "", cspPublicKey: new Uint8Array(), blind: false };
}

export const CensusCsp = {
  encode(message: CensusCsp, writer: Writer = Writer.create()): Writer {
    if (message.cspUri !== "") {
      writer.uint32(10).string(message.cspUri);
    }
    if (message.cspPublicKey.length !== 0) {
      writer.uint32(18).bytes(message.cspPublicKey);
    }
    if (message.blind === true) {
      writer.uint32(24).bool(message.blind);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusCsp {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCensusCsp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cspUri = reader.string();
          break;
        case 2:
          message.cspPublicKey = reader.bytes();
          break;
        case 3:
          message.blind = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CensusCsp {
    return {
      cspUri: isSet(object.cspUri) ? String(object.cspUri) : "",
      cspPublicKey: isSet(object.cspPublicKey)
        ? bytesFromBase64(object.cspPublicKey)
        : new Uint8Array(),
      blind: isSet(object.blind) ? Boolean(object.blind) : false,
    };
  },

  toJSON(message: CensusCsp): unknown {
    const obj: any = {};
    message.cspUri !== undefined && (obj.cspUri = message.cspUri);
    message.cspPublicKey !== undefined &&
      (obj.cspPublicKey = base64FromBytes(
        message.cspPublicKey !== undefined
          ? message.cspPublicKey
          : new Uint8Array()
      ));
    message.blind !== undefined && (obj.blind = message.blind);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusCsp>, I>>(
    object: I
  ): CensusCsp {
    const message = createBaseCensusCsp();
    message.cspUri = object.cspUri ?? "";
    message.cspPublicKey = object.cspPublicKey ?? new Uint8Array();
    message.blind = object.blind ?? false;
    return message;
  },
};

function createBaseCensusErc20(): CensusErc20 {
  return {
    tokenAddress: new Uint8Array(),
    balanceMapSlot: 0,
    proof: undefined,
    sourceEthereumBlock: 0,
  };
}

export const CensusErc20 = {
  encode(message: CensusErc20, writer: Writer = Writer.create()): Writer {
    if (message.tokenAddress.length !== 0) {
      writer.uint32(10).bytes(message.tokenAddress);
    }
    if (message.balanceMapSlot !== 0) {
      writer.uint32(16).int32(message.balanceMapSlot);
    }
    if (message.proof !== undefined) {
      StorageProofErc20.encode(
        message.proof,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.sourceEthereumBlock !== 0) {
      writer.uint32(32).int32(message.sourceEthereumBlock);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusErc20 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCensusErc20();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenAddress = reader.bytes();
          break;
        case 2:
          message.balanceMapSlot = reader.int32();
          break;
        case 3:
          message.proof = StorageProofErc20.decode(reader, reader.uint32());
          break;
        case 4:
          message.sourceEthereumBlock = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CensusErc20 {
    return {
      tokenAddress: isSet(object.tokenAddress)
        ? bytesFromBase64(object.tokenAddress)
        : new Uint8Array(),
      balanceMapSlot: isSet(object.balanceMapSlot)
        ? Number(object.balanceMapSlot)
        : 0,
      proof: isSet(object.proof)
        ? StorageProofErc20.fromJSON(object.proof)
        : undefined,
      sourceEthereumBlock: isSet(object.sourceEthereumBlock)
        ? Number(object.sourceEthereumBlock)
        : 0,
    };
  },

  toJSON(message: CensusErc20): unknown {
    const obj: any = {};
    message.tokenAddress !== undefined &&
      (obj.tokenAddress = base64FromBytes(
        message.tokenAddress !== undefined
          ? message.tokenAddress
          : new Uint8Array()
      ));
    message.balanceMapSlot !== undefined &&
      (obj.balanceMapSlot = Math.round(message.balanceMapSlot));
    message.proof !== undefined &&
      (obj.proof = message.proof
        ? StorageProofErc20.toJSON(message.proof)
        : undefined);
    message.sourceEthereumBlock !== undefined &&
      (obj.sourceEthereumBlock = Math.round(message.sourceEthereumBlock));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusErc20>, I>>(
    object: I
  ): CensusErc20 {
    const message = createBaseCensusErc20();
    message.tokenAddress = object.tokenAddress ?? new Uint8Array();
    message.balanceMapSlot = object.balanceMapSlot ?? 0;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? StorageProofErc20.fromPartial(object.proof)
        : undefined;
    message.sourceEthereumBlock = object.sourceEthereumBlock ?? 0;
    return message;
  },
};

function createBaseCensusErc721(): CensusErc721 {
  return {};
}

export const CensusErc721 = {
  encode(_: CensusErc721, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusErc721 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCensusErc721();
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

  fromJSON(_: any): CensusErc721 {
    return {};
  },

  toJSON(_: CensusErc721): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusErc721>, I>>(
    _: I
  ): CensusErc721 {
    const message = createBaseCensusErc721();
    return message;
  },
};

function createBaseCensusErc1155(): CensusErc1155 {
  return {};
}

export const CensusErc1155 = {
  encode(_: CensusErc1155, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusErc1155 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCensusErc1155();
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

  fromJSON(_: any): CensusErc1155 {
    return {};
  },

  toJSON(_: CensusErc1155): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusErc1155>, I>>(
    _: I
  ): CensusErc1155 {
    const message = createBaseCensusErc1155();
    return message;
  },
};

function createBaseCensusErc777(): CensusErc777 {
  return {};
}

export const CensusErc777 = {
  encode(_: CensusErc777, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusErc777 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCensusErc777();
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

  fromJSON(_: any): CensusErc777 {
    return {};
  },

  toJSON(_: CensusErc777): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusErc777>, I>>(
    _: I
  ): CensusErc777 {
    const message = createBaseCensusErc777();
    return message;
  },
};

function createBaseCensusErcMiniMe(): CensusErcMiniMe {
  return {
    tokenAddress: new Uint8Array(),
    balanceMapSlot: 0,
    proof: undefined,
    sourceEthereumBlock: 0,
  };
}

export const CensusErcMiniMe = {
  encode(message: CensusErcMiniMe, writer: Writer = Writer.create()): Writer {
    if (message.tokenAddress.length !== 0) {
      writer.uint32(10).bytes(message.tokenAddress);
    }
    if (message.balanceMapSlot !== 0) {
      writer.uint32(16).int32(message.balanceMapSlot);
    }
    if (message.proof !== undefined) {
      StorageProofMiniMe.encode(
        message.proof,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.sourceEthereumBlock !== 0) {
      writer.uint32(32).int32(message.sourceEthereumBlock);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusErcMiniMe {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCensusErcMiniMe();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenAddress = reader.bytes();
          break;
        case 2:
          message.balanceMapSlot = reader.int32();
          break;
        case 3:
          message.proof = StorageProofMiniMe.decode(reader, reader.uint32());
          break;
        case 4:
          message.sourceEthereumBlock = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CensusErcMiniMe {
    return {
      tokenAddress: isSet(object.tokenAddress)
        ? bytesFromBase64(object.tokenAddress)
        : new Uint8Array(),
      balanceMapSlot: isSet(object.balanceMapSlot)
        ? Number(object.balanceMapSlot)
        : 0,
      proof: isSet(object.proof)
        ? StorageProofMiniMe.fromJSON(object.proof)
        : undefined,
      sourceEthereumBlock: isSet(object.sourceEthereumBlock)
        ? Number(object.sourceEthereumBlock)
        : 0,
    };
  },

  toJSON(message: CensusErcMiniMe): unknown {
    const obj: any = {};
    message.tokenAddress !== undefined &&
      (obj.tokenAddress = base64FromBytes(
        message.tokenAddress !== undefined
          ? message.tokenAddress
          : new Uint8Array()
      ));
    message.balanceMapSlot !== undefined &&
      (obj.balanceMapSlot = Math.round(message.balanceMapSlot));
    message.proof !== undefined &&
      (obj.proof = message.proof
        ? StorageProofMiniMe.toJSON(message.proof)
        : undefined);
    message.sourceEthereumBlock !== undefined &&
      (obj.sourceEthereumBlock = Math.round(message.sourceEthereumBlock));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusErcMiniMe>, I>>(
    object: I
  ): CensusErcMiniMe {
    const message = createBaseCensusErcMiniMe();
    message.tokenAddress = object.tokenAddress ?? new Uint8Array();
    message.balanceMapSlot = object.balanceMapSlot ?? 0;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? StorageProofMiniMe.fromPartial(object.proof)
        : undefined;
    message.sourceEthereumBlock = object.sourceEthereumBlock ?? 0;
    return message;
  },
};

function createBaseProof(): Proof {
  return { body: undefined };
}

export const Proof = {
  encode(message: Proof, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "none") {
      ProofNone.encode(message.body.none, writer.uint32(10).fork()).ldelim();
    }
    if (message.body?.$case === "arbo") {
      ProofArbo.encode(message.body.arbo, writer.uint32(90).fork()).ldelim();
    }
    if (message.body?.$case === "csp") {
      ProofCSP.encode(message.body.csp, writer.uint32(98).fork()).ldelim();
    }
    if (message.body?.$case === "erc20") {
      StorageProofErc20.encode(
        message.body.erc20,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.body?.$case === "erc721") {
      StorageProofErc721.encode(
        message.body.erc721,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.body?.$case === "erc1155") {
      StorageProofErc1155.encode(
        message.body.erc1155,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.body?.$case === "erc777") {
      StorageProofErc777.encode(
        message.body.erc777,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.body?.$case === "miniMe") {
      StorageProofMiniMe.encode(
        message.body.miniMe,
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.body?.$case === "zkSnark") {
      ProofZkSnark.encode(
        message.body.zkSnark,
        writer.uint32(802).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "none",
            none: ProofNone.decode(reader, reader.uint32()),
          };
          break;
        case 11:
          message.body = {
            $case: "arbo",
            arbo: ProofArbo.decode(reader, reader.uint32()),
          };
          break;
        case 12:
          message.body = {
            $case: "csp",
            csp: ProofCSP.decode(reader, reader.uint32()),
          };
          break;
        case 21:
          message.body = {
            $case: "erc20",
            erc20: StorageProofErc20.decode(reader, reader.uint32()),
          };
          break;
        case 22:
          message.body = {
            $case: "erc721",
            erc721: StorageProofErc721.decode(reader, reader.uint32()),
          };
          break;
        case 23:
          message.body = {
            $case: "erc1155",
            erc1155: StorageProofErc1155.decode(reader, reader.uint32()),
          };
          break;
        case 24:
          message.body = {
            $case: "erc777",
            erc777: StorageProofErc777.decode(reader, reader.uint32()),
          };
          break;
        case 30:
          message.body = {
            $case: "miniMe",
            miniMe: StorageProofMiniMe.decode(reader, reader.uint32()),
          };
          break;
        case 100:
          message.body = {
            $case: "zkSnark",
            zkSnark: ProofZkSnark.decode(reader, reader.uint32()),
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
    return {
      body: isSet(object.none)
        ? { $case: "none", none: ProofNone.fromJSON(object.none) }
        : isSet(object.arbo)
        ? { $case: "arbo", arbo: ProofArbo.fromJSON(object.arbo) }
        : isSet(object.csp)
        ? { $case: "csp", csp: ProofCSP.fromJSON(object.csp) }
        : isSet(object.erc20)
        ? { $case: "erc20", erc20: StorageProofErc20.fromJSON(object.erc20) }
        : isSet(object.erc721)
        ? {
            $case: "erc721",
            erc721: StorageProofErc721.fromJSON(object.erc721),
          }
        : isSet(object.erc1155)
        ? {
            $case: "erc1155",
            erc1155: StorageProofErc1155.fromJSON(object.erc1155),
          }
        : isSet(object.erc777)
        ? {
            $case: "erc777",
            erc777: StorageProofErc777.fromJSON(object.erc777),
          }
        : isSet(object.miniMe)
        ? {
            $case: "miniMe",
            miniMe: StorageProofMiniMe.fromJSON(object.miniMe),
          }
        : isSet(object.zkSnark)
        ? { $case: "zkSnark", zkSnark: ProofZkSnark.fromJSON(object.zkSnark) }
        : undefined,
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.body?.$case === "none" &&
      (obj.none = message.body?.none
        ? ProofNone.toJSON(message.body?.none)
        : undefined);
    message.body?.$case === "arbo" &&
      (obj.arbo = message.body?.arbo
        ? ProofArbo.toJSON(message.body?.arbo)
        : undefined);
    message.body?.$case === "csp" &&
      (obj.csp = message.body?.csp
        ? ProofCSP.toJSON(message.body?.csp)
        : undefined);
    message.body?.$case === "erc20" &&
      (obj.erc20 = message.body?.erc20
        ? StorageProofErc20.toJSON(message.body?.erc20)
        : undefined);
    message.body?.$case === "erc721" &&
      (obj.erc721 = message.body?.erc721
        ? StorageProofErc721.toJSON(message.body?.erc721)
        : undefined);
    message.body?.$case === "erc1155" &&
      (obj.erc1155 = message.body?.erc1155
        ? StorageProofErc1155.toJSON(message.body?.erc1155)
        : undefined);
    message.body?.$case === "erc777" &&
      (obj.erc777 = message.body?.erc777
        ? StorageProofErc777.toJSON(message.body?.erc777)
        : undefined);
    message.body?.$case === "miniMe" &&
      (obj.miniMe = message.body?.miniMe
        ? StorageProofMiniMe.toJSON(message.body?.miniMe)
        : undefined);
    message.body?.$case === "zkSnark" &&
      (obj.zkSnark = message.body?.zkSnark
        ? ProofZkSnark.toJSON(message.body?.zkSnark)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    if (
      object.body?.$case === "none" &&
      object.body?.none !== undefined &&
      object.body?.none !== null
    ) {
      message.body = {
        $case: "none",
        none: ProofNone.fromPartial(object.body.none),
      };
    }
    if (
      object.body?.$case === "arbo" &&
      object.body?.arbo !== undefined &&
      object.body?.arbo !== null
    ) {
      message.body = {
        $case: "arbo",
        arbo: ProofArbo.fromPartial(object.body.arbo),
      };
    }
    if (
      object.body?.$case === "csp" &&
      object.body?.csp !== undefined &&
      object.body?.csp !== null
    ) {
      message.body = {
        $case: "csp",
        csp: ProofCSP.fromPartial(object.body.csp),
      };
    }
    if (
      object.body?.$case === "erc20" &&
      object.body?.erc20 !== undefined &&
      object.body?.erc20 !== null
    ) {
      message.body = {
        $case: "erc20",
        erc20: StorageProofErc20.fromPartial(object.body.erc20),
      };
    }
    if (
      object.body?.$case === "erc721" &&
      object.body?.erc721 !== undefined &&
      object.body?.erc721 !== null
    ) {
      message.body = {
        $case: "erc721",
        erc721: StorageProofErc721.fromPartial(object.body.erc721),
      };
    }
    if (
      object.body?.$case === "erc1155" &&
      object.body?.erc1155 !== undefined &&
      object.body?.erc1155 !== null
    ) {
      message.body = {
        $case: "erc1155",
        erc1155: StorageProofErc1155.fromPartial(object.body.erc1155),
      };
    }
    if (
      object.body?.$case === "erc777" &&
      object.body?.erc777 !== undefined &&
      object.body?.erc777 !== null
    ) {
      message.body = {
        $case: "erc777",
        erc777: StorageProofErc777.fromPartial(object.body.erc777),
      };
    }
    if (
      object.body?.$case === "miniMe" &&
      object.body?.miniMe !== undefined &&
      object.body?.miniMe !== null
    ) {
      message.body = {
        $case: "miniMe",
        miniMe: StorageProofMiniMe.fromPartial(object.body.miniMe),
      };
    }
    if (
      object.body?.$case === "zkSnark" &&
      object.body?.zkSnark !== undefined &&
      object.body?.zkSnark !== null
    ) {
      message.body = {
        $case: "zkSnark",
        zkSnark: ProofZkSnark.fromPartial(object.body.zkSnark),
      };
    }
    return message;
  },
};

function createBaseProofNone(): ProofNone {
  return {};
}

export const ProofNone = {
  encode(_: ProofNone, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofNone {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofNone();
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

  fromJSON(_: any): ProofNone {
    return {};
  },

  toJSON(_: ProofNone): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofNone>, I>>(_: I): ProofNone {
    const message = createBaseProofNone();
    return message;
  },
};

function createBaseProofArbo(): ProofArbo {
  return { siblings: [] };
}

export const ProofArbo = {
  encode(message: ProofArbo, writer: Writer = Writer.create()): Writer {
    for (const v of message.siblings) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofArbo {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofArbo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.siblings.push(reader.bytes());
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
      siblings: Array.isArray(object?.siblings)
        ? object.siblings.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: ProofArbo): unknown {
    const obj: any = {};
    if (message.siblings) {
      obj.siblings = message.siblings.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.siblings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofArbo>, I>>(
    object: I
  ): ProofArbo {
    const message = createBaseProofArbo();
    message.siblings = object.siblings?.map((e) => e) || [];
    return message;
  },
};

function createBaseProofCSP(): ProofCSP {
  return { payload: new Uint8Array(), signature: new Uint8Array() };
}

export const ProofCSP = {
  encode(message: ProofCSP, writer: Writer = Writer.create()): Writer {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofCSP {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofCSP();
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

  fromJSON(object: any): ProofCSP {
    return {
      payload: isSet(object.payload)
        ? bytesFromBase64(object.payload)
        : new Uint8Array(),
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : new Uint8Array(),
    };
  },

  toJSON(message: ProofCSP): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = base64FromBytes(
        message.payload !== undefined ? message.payload : new Uint8Array()
      ));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofCSP>, I>>(object: I): ProofCSP {
    const message = createBaseProofCSP();
    message.payload = object.payload ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseStorageProofErc20(): StorageProofErc20 {
  return { key: new Uint8Array(), value: new Uint8Array(), proof: [] };
}

export const StorageProofErc20 = {
  encode(message: StorageProofErc20, writer: Writer = Writer.create()): Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    for (const v of message.proof) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StorageProofErc20 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageProofErc20();
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
          message.proof.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StorageProofErc20 {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
      proof: Array.isArray(object?.proof)
        ? object.proof.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: StorageProofErc20): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    if (message.proof) {
      obj.proof = message.proof.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.proof = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProofErc20>, I>>(
    object: I
  ): StorageProofErc20 {
    const message = createBaseStorageProofErc20();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proof = object.proof?.map((e) => e) || [];
    return message;
  },
};

function createBaseStorageProofErc721(): StorageProofErc721 {
  return {};
}

export const StorageProofErc721 = {
  encode(_: StorageProofErc721, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StorageProofErc721 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageProofErc721();
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

  fromJSON(_: any): StorageProofErc721 {
    return {};
  },

  toJSON(_: StorageProofErc721): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProofErc721>, I>>(
    _: I
  ): StorageProofErc721 {
    const message = createBaseStorageProofErc721();
    return message;
  },
};

function createBaseStorageProofErc1155(): StorageProofErc1155 {
  return {};
}

export const StorageProofErc1155 = {
  encode(_: StorageProofErc1155, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StorageProofErc1155 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageProofErc1155();
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

  fromJSON(_: any): StorageProofErc1155 {
    return {};
  },

  toJSON(_: StorageProofErc1155): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProofErc1155>, I>>(
    _: I
  ): StorageProofErc1155 {
    const message = createBaseStorageProofErc1155();
    return message;
  },
};

function createBaseStorageProofErc777(): StorageProofErc777 {
  return {};
}

export const StorageProofErc777 = {
  encode(_: StorageProofErc777, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StorageProofErc777 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageProofErc777();
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

  fromJSON(_: any): StorageProofErc777 {
    return {};
  },

  toJSON(_: StorageProofErc777): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProofErc777>, I>>(
    _: I
  ): StorageProofErc777 {
    const message = createBaseStorageProofErc777();
    return message;
  },
};

function createBaseStorageProofMiniMe(): StorageProofMiniMe {
  return {};
}

export const StorageProofMiniMe = {
  encode(_: StorageProofMiniMe, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StorageProofMiniMe {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageProofMiniMe();
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

  fromJSON(_: any): StorageProofMiniMe {
    return {};
  },

  toJSON(_: StorageProofMiniMe): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProofMiniMe>, I>>(
    _: I
  ): StorageProofMiniMe {
    const message = createBaseStorageProofMiniMe();
    return message;
  },
};

function createBaseProofZkSnark(): ProofZkSnark {
  return { body: undefined };
}

export const ProofZkSnark = {
  encode(message: ProofZkSnark, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "proof1k") {
      ProofZkSnark_Poseidon1kCensus.encode(
        message.body.proof1k,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "proof50k") {
      ProofZkSnark_Poseidon50kCensus.encode(
        message.body.proof50k,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.body?.$case === "proof250k") {
      ProofZkSnark_Poseidon250kCensus.encode(
        message.body.proof250k,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofZkSnark {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofZkSnark();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "proof1k",
            proof1k: ProofZkSnark_Poseidon1kCensus.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 2:
          message.body = {
            $case: "proof50k",
            proof50k: ProofZkSnark_Poseidon50kCensus.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 3:
          message.body = {
            $case: "proof250k",
            proof250k: ProofZkSnark_Poseidon250kCensus.decode(
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

  fromJSON(object: any): ProofZkSnark {
    return {
      body: isSet(object.proof1k)
        ? {
            $case: "proof1k",
            proof1k: ProofZkSnark_Poseidon1kCensus.fromJSON(object.proof1k),
          }
        : isSet(object.proof50k)
        ? {
            $case: "proof50k",
            proof50k: ProofZkSnark_Poseidon50kCensus.fromJSON(object.proof50k),
          }
        : isSet(object.proof250k)
        ? {
            $case: "proof250k",
            proof250k: ProofZkSnark_Poseidon250kCensus.fromJSON(
              object.proof250k
            ),
          }
        : undefined,
    };
  },

  toJSON(message: ProofZkSnark): unknown {
    const obj: any = {};
    message.body?.$case === "proof1k" &&
      (obj.proof1k = message.body?.proof1k
        ? ProofZkSnark_Poseidon1kCensus.toJSON(message.body?.proof1k)
        : undefined);
    message.body?.$case === "proof50k" &&
      (obj.proof50k = message.body?.proof50k
        ? ProofZkSnark_Poseidon50kCensus.toJSON(message.body?.proof50k)
        : undefined);
    message.body?.$case === "proof250k" &&
      (obj.proof250k = message.body?.proof250k
        ? ProofZkSnark_Poseidon250kCensus.toJSON(message.body?.proof250k)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofZkSnark>, I>>(
    object: I
  ): ProofZkSnark {
    const message = createBaseProofZkSnark();
    if (
      object.body?.$case === "proof1k" &&
      object.body?.proof1k !== undefined &&
      object.body?.proof1k !== null
    ) {
      message.body = {
        $case: "proof1k",
        proof1k: ProofZkSnark_Poseidon1kCensus.fromPartial(object.body.proof1k),
      };
    }
    if (
      object.body?.$case === "proof50k" &&
      object.body?.proof50k !== undefined &&
      object.body?.proof50k !== null
    ) {
      message.body = {
        $case: "proof50k",
        proof50k: ProofZkSnark_Poseidon50kCensus.fromPartial(
          object.body.proof50k
        ),
      };
    }
    if (
      object.body?.$case === "proof250k" &&
      object.body?.proof250k !== undefined &&
      object.body?.proof250k !== null
    ) {
      message.body = {
        $case: "proof250k",
        proof250k: ProofZkSnark_Poseidon250kCensus.fromPartial(
          object.body.proof250k
        ),
      };
    }
    return message;
  },
};

function createBaseProofZkSnark_Poseidon1kCensus(): ProofZkSnark_Poseidon1kCensus {
  return {};
}

export const ProofZkSnark_Poseidon1kCensus = {
  encode(
    _: ProofZkSnark_Poseidon1kCensus,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ProofZkSnark_Poseidon1kCensus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofZkSnark_Poseidon1kCensus();
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

  fromJSON(_: any): ProofZkSnark_Poseidon1kCensus {
    return {};
  },

  toJSON(_: ProofZkSnark_Poseidon1kCensus): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofZkSnark_Poseidon1kCensus>, I>>(
    _: I
  ): ProofZkSnark_Poseidon1kCensus {
    const message = createBaseProofZkSnark_Poseidon1kCensus();
    return message;
  },
};

function createBaseProofZkSnark_Poseidon50kCensus(): ProofZkSnark_Poseidon50kCensus {
  return {};
}

export const ProofZkSnark_Poseidon50kCensus = {
  encode(
    _: ProofZkSnark_Poseidon50kCensus,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ProofZkSnark_Poseidon50kCensus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofZkSnark_Poseidon50kCensus();
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

  fromJSON(_: any): ProofZkSnark_Poseidon50kCensus {
    return {};
  },

  toJSON(_: ProofZkSnark_Poseidon50kCensus): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofZkSnark_Poseidon50kCensus>, I>>(
    _: I
  ): ProofZkSnark_Poseidon50kCensus {
    const message = createBaseProofZkSnark_Poseidon50kCensus();
    return message;
  },
};

function createBaseProofZkSnark_Poseidon250kCensus(): ProofZkSnark_Poseidon250kCensus {
  return {};
}

export const ProofZkSnark_Poseidon250kCensus = {
  encode(
    _: ProofZkSnark_Poseidon250kCensus,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ProofZkSnark_Poseidon250kCensus {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofZkSnark_Poseidon250kCensus();
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

  fromJSON(_: any): ProofZkSnark_Poseidon250kCensus {
    return {};
  },

  toJSON(_: ProofZkSnark_Poseidon250kCensus): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofZkSnark_Poseidon250kCensus>, I>>(
    _: I
  ): ProofZkSnark_Poseidon250kCensus {
    const message = createBaseProofZkSnark_Poseidon250kCensus();
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
