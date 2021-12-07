/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "dvote.types.v2";

/** The models below affect the whole election definition. */
export interface Census {
  body?:
    | { $case: "none"; none: CensusNone }
    | { $case: "arbo"; arbo: CensusArbo }
    | { $case: "csp"; csp: CensusCsp }
    | { $case: "erc20"; erc20: CensusErc20 }
    | { $case: "erc721"; erc721: CensusErc721 }
    | { $case: "erc1155"; erc1155: CensusErc1155 }
    | { $case: "erc777"; erc777: CensusErc721 }
    | { $case: "ercMiniMe"; ercMiniMe: CensusErcMiniMe };
}

export interface CensusNone {}

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
  proof: StorageProofErc20 | undefined;
  /** Ethereum block at which the state root is taken */
  sourceEthereumBlock: number;
}

/**
 * bytes tokenAddress = 1;
 * int32 balanceMapSlot = 2;
 * StorageProofErc721 proof = 3;
 * Ethereum block at which the state root is taken
 * int32 sourceEthereumBlock = 4;
 */
export interface CensusErc721 {}

/**
 * bytes tokenAddress = 1;
 * int32 balanceMapSlot = 2;
 * StorageProofErc1155 proof = 3;
 * Ethereum block at which the state root is taken
 * int32 sourceEthereumBlock = 4;
 */
export interface CensusErc1155 {}

/**
 * bytes tokenAddress = 1;
 * int32 balanceMapSlot = 2;
 * StorageProofErc777 proof = 3;
 * Ethereum block at which the state root is taken
 * int32 sourceEthereumBlock = 4;
 */
export interface CensusErc777 {}

export interface CensusErcMiniMe {
  tokenAddress: Uint8Array;
  balanceMapSlot: number;
  proof: StorageProofMiniMe | undefined;
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

const baseCensus: object = {};

export const Census = {
  encode(message: Census, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "none") {
      CensusNone.encode(message.body.none, writer.uint32(10).fork()).ldelim();
    }
    if (message.body?.$case === "arbo") {
      CensusArbo.encode(message.body.arbo, writer.uint32(90).fork()).ldelim();
    }
    if (message.body?.$case === "csp") {
      CensusCsp.encode(message.body.csp, writer.uint32(98).fork()).ldelim();
    }
    if (message.body?.$case === "erc20") {
      CensusErc20.encode(
        message.body.erc20,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.body?.$case === "erc721") {
      CensusErc721.encode(
        message.body.erc721,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.body?.$case === "erc1155") {
      CensusErc1155.encode(
        message.body.erc1155,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.body?.$case === "erc777") {
      CensusErc721.encode(
        message.body.erc777,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.body?.$case === "ercMiniMe") {
      CensusErcMiniMe.encode(
        message.body.ercMiniMe,
        writer.uint32(242).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Census {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCensus } as Census;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "none",
            none: CensusNone.decode(reader, reader.uint32()),
          };
          break;
        case 11:
          message.body = {
            $case: "arbo",
            arbo: CensusArbo.decode(reader, reader.uint32()),
          };
          break;
        case 12:
          message.body = {
            $case: "csp",
            csp: CensusCsp.decode(reader, reader.uint32()),
          };
          break;
        case 21:
          message.body = {
            $case: "erc20",
            erc20: CensusErc20.decode(reader, reader.uint32()),
          };
          break;
        case 22:
          message.body = {
            $case: "erc721",
            erc721: CensusErc721.decode(reader, reader.uint32()),
          };
          break;
        case 23:
          message.body = {
            $case: "erc1155",
            erc1155: CensusErc1155.decode(reader, reader.uint32()),
          };
          break;
        case 24:
          message.body = {
            $case: "erc777",
            erc777: CensusErc721.decode(reader, reader.uint32()),
          };
          break;
        case 30:
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
    const message = { ...baseCensus } as Census;
    if (object.none !== undefined && object.none !== null) {
      message.body = { $case: "none", none: CensusNone.fromJSON(object.none) };
    }
    if (object.arbo !== undefined && object.arbo !== null) {
      message.body = { $case: "arbo", arbo: CensusArbo.fromJSON(object.arbo) };
    }
    if (object.csp !== undefined && object.csp !== null) {
      message.body = { $case: "csp", csp: CensusCsp.fromJSON(object.csp) };
    }
    if (object.erc20 !== undefined && object.erc20 !== null) {
      message.body = {
        $case: "erc20",
        erc20: CensusErc20.fromJSON(object.erc20),
      };
    }
    if (object.erc721 !== undefined && object.erc721 !== null) {
      message.body = {
        $case: "erc721",
        erc721: CensusErc721.fromJSON(object.erc721),
      };
    }
    if (object.erc1155 !== undefined && object.erc1155 !== null) {
      message.body = {
        $case: "erc1155",
        erc1155: CensusErc1155.fromJSON(object.erc1155),
      };
    }
    if (object.erc777 !== undefined && object.erc777 !== null) {
      message.body = {
        $case: "erc777",
        erc777: CensusErc721.fromJSON(object.erc777),
      };
    }
    if (object.ercMiniMe !== undefined && object.ercMiniMe !== null) {
      message.body = {
        $case: "ercMiniMe",
        ercMiniMe: CensusErcMiniMe.fromJSON(object.ercMiniMe),
      };
    }
    return message;
  },

  toJSON(message: Census): unknown {
    const obj: any = {};
    message.body?.$case === "none" &&
      (obj.none = message.body?.none
        ? CensusNone.toJSON(message.body?.none)
        : undefined);
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
    const message = { ...baseCensus } as Census;
    if (
      object.body?.$case === "none" &&
      object.body?.none !== undefined &&
      object.body?.none !== null
    ) {
      message.body = {
        $case: "none",
        none: CensusNone.fromPartial(object.body.none),
      };
    }
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

const baseCensusNone: object = {};

export const CensusNone = {
  encode(_: CensusNone, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusNone {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCensusNone } as CensusNone;
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

  fromJSON(_: any): CensusNone {
    const message = { ...baseCensusNone } as CensusNone;
    return message;
  },

  toJSON(_: CensusNone): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusNone>, I>>(_: I): CensusNone {
    const message = { ...baseCensusNone } as CensusNone;
    return message;
  },
};

const baseCensusArbo: object = { censusUri: "" };

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
    const message = { ...baseCensusArbo } as CensusArbo;
    message.censusRoot = new Uint8Array();
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
    const message = { ...baseCensusArbo } as CensusArbo;
    message.censusRoot =
      object.censusRoot !== undefined && object.censusRoot !== null
        ? bytesFromBase64(object.censusRoot)
        : new Uint8Array();
    message.censusUri =
      object.censusUri !== undefined && object.censusUri !== null
        ? String(object.censusUri)
        : "";
    return message;
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
    const message = { ...baseCensusArbo } as CensusArbo;
    message.censusRoot = object.censusRoot ?? new Uint8Array();
    message.censusUri = object.censusUri ?? "";
    return message;
  },
};

const baseCensusCsp: object = { cspUri: "", blind: false };

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
    const message = { ...baseCensusCsp } as CensusCsp;
    message.cspPublicKey = new Uint8Array();
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
    const message = { ...baseCensusCsp } as CensusCsp;
    message.cspUri =
      object.cspUri !== undefined && object.cspUri !== null
        ? String(object.cspUri)
        : "";
    message.cspPublicKey =
      object.cspPublicKey !== undefined && object.cspPublicKey !== null
        ? bytesFromBase64(object.cspPublicKey)
        : new Uint8Array();
    message.blind =
      object.blind !== undefined && object.blind !== null
        ? Boolean(object.blind)
        : false;
    return message;
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
    const message = { ...baseCensusCsp } as CensusCsp;
    message.cspUri = object.cspUri ?? "";
    message.cspPublicKey = object.cspPublicKey ?? new Uint8Array();
    message.blind = object.blind ?? false;
    return message;
  },
};

const baseCensusErc20: object = { balanceMapSlot: 0, sourceEthereumBlock: 0 };

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
    const message = { ...baseCensusErc20 } as CensusErc20;
    message.tokenAddress = new Uint8Array();
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
    const message = { ...baseCensusErc20 } as CensusErc20;
    message.tokenAddress =
      object.tokenAddress !== undefined && object.tokenAddress !== null
        ? bytesFromBase64(object.tokenAddress)
        : new Uint8Array();
    message.balanceMapSlot =
      object.balanceMapSlot !== undefined && object.balanceMapSlot !== null
        ? Number(object.balanceMapSlot)
        : 0;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? StorageProofErc20.fromJSON(object.proof)
        : undefined;
    message.sourceEthereumBlock =
      object.sourceEthereumBlock !== undefined &&
      object.sourceEthereumBlock !== null
        ? Number(object.sourceEthereumBlock)
        : 0;
    return message;
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
      (obj.balanceMapSlot = message.balanceMapSlot);
    message.proof !== undefined &&
      (obj.proof = message.proof
        ? StorageProofErc20.toJSON(message.proof)
        : undefined);
    message.sourceEthereumBlock !== undefined &&
      (obj.sourceEthereumBlock = message.sourceEthereumBlock);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusErc20>, I>>(
    object: I
  ): CensusErc20 {
    const message = { ...baseCensusErc20 } as CensusErc20;
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

const baseCensusErc721: object = {};

export const CensusErc721 = {
  encode(_: CensusErc721, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusErc721 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCensusErc721 } as CensusErc721;
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
    const message = { ...baseCensusErc721 } as CensusErc721;
    return message;
  },

  toJSON(_: CensusErc721): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusErc721>, I>>(
    _: I
  ): CensusErc721 {
    const message = { ...baseCensusErc721 } as CensusErc721;
    return message;
  },
};

const baseCensusErc1155: object = {};

export const CensusErc1155 = {
  encode(_: CensusErc1155, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusErc1155 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCensusErc1155 } as CensusErc1155;
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
    const message = { ...baseCensusErc1155 } as CensusErc1155;
    return message;
  },

  toJSON(_: CensusErc1155): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusErc1155>, I>>(
    _: I
  ): CensusErc1155 {
    const message = { ...baseCensusErc1155 } as CensusErc1155;
    return message;
  },
};

const baseCensusErc777: object = {};

export const CensusErc777 = {
  encode(_: CensusErc777, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CensusErc777 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCensusErc777 } as CensusErc777;
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
    const message = { ...baseCensusErc777 } as CensusErc777;
    return message;
  },

  toJSON(_: CensusErc777): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusErc777>, I>>(
    _: I
  ): CensusErc777 {
    const message = { ...baseCensusErc777 } as CensusErc777;
    return message;
  },
};

const baseCensusErcMiniMe: object = {
  balanceMapSlot: 0,
  sourceEthereumBlock: 0,
};

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
    const message = { ...baseCensusErcMiniMe } as CensusErcMiniMe;
    message.tokenAddress = new Uint8Array();
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
    const message = { ...baseCensusErcMiniMe } as CensusErcMiniMe;
    message.tokenAddress =
      object.tokenAddress !== undefined && object.tokenAddress !== null
        ? bytesFromBase64(object.tokenAddress)
        : new Uint8Array();
    message.balanceMapSlot =
      object.balanceMapSlot !== undefined && object.balanceMapSlot !== null
        ? Number(object.balanceMapSlot)
        : 0;
    message.proof =
      object.proof !== undefined && object.proof !== null
        ? StorageProofMiniMe.fromJSON(object.proof)
        : undefined;
    message.sourceEthereumBlock =
      object.sourceEthereumBlock !== undefined &&
      object.sourceEthereumBlock !== null
        ? Number(object.sourceEthereumBlock)
        : 0;
    return message;
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
      (obj.balanceMapSlot = message.balanceMapSlot);
    message.proof !== undefined &&
      (obj.proof = message.proof
        ? StorageProofMiniMe.toJSON(message.proof)
        : undefined);
    message.sourceEthereumBlock !== undefined &&
      (obj.sourceEthereumBlock = message.sourceEthereumBlock);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CensusErcMiniMe>, I>>(
    object: I
  ): CensusErcMiniMe {
    const message = { ...baseCensusErcMiniMe } as CensusErcMiniMe;
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

const baseProof: object = {};

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
    const message = { ...baseProof } as Proof;
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
    const message = { ...baseProof } as Proof;
    if (object.none !== undefined && object.none !== null) {
      message.body = { $case: "none", none: ProofNone.fromJSON(object.none) };
    }
    if (object.arbo !== undefined && object.arbo !== null) {
      message.body = { $case: "arbo", arbo: ProofArbo.fromJSON(object.arbo) };
    }
    if (object.csp !== undefined && object.csp !== null) {
      message.body = { $case: "csp", csp: ProofCSP.fromJSON(object.csp) };
    }
    if (object.erc20 !== undefined && object.erc20 !== null) {
      message.body = {
        $case: "erc20",
        erc20: StorageProofErc20.fromJSON(object.erc20),
      };
    }
    if (object.erc721 !== undefined && object.erc721 !== null) {
      message.body = {
        $case: "erc721",
        erc721: StorageProofErc721.fromJSON(object.erc721),
      };
    }
    if (object.erc1155 !== undefined && object.erc1155 !== null) {
      message.body = {
        $case: "erc1155",
        erc1155: StorageProofErc1155.fromJSON(object.erc1155),
      };
    }
    if (object.erc777 !== undefined && object.erc777 !== null) {
      message.body = {
        $case: "erc777",
        erc777: StorageProofErc777.fromJSON(object.erc777),
      };
    }
    if (object.miniMe !== undefined && object.miniMe !== null) {
      message.body = {
        $case: "miniMe",
        miniMe: StorageProofMiniMe.fromJSON(object.miniMe),
      };
    }
    if (object.zkSnark !== undefined && object.zkSnark !== null) {
      message.body = {
        $case: "zkSnark",
        zkSnark: ProofZkSnark.fromJSON(object.zkSnark),
      };
    }
    return message;
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
    const message = { ...baseProof } as Proof;
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

const baseProofNone: object = {};

export const ProofNone = {
  encode(_: ProofNone, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofNone {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofNone } as ProofNone;
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
    const message = { ...baseProofNone } as ProofNone;
    return message;
  },

  toJSON(_: ProofNone): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofNone>, I>>(_: I): ProofNone {
    const message = { ...baseProofNone } as ProofNone;
    return message;
  },
};

const baseProofArbo: object = {};

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
    const message = { ...baseProofArbo } as ProofArbo;
    message.siblings = [];
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
    const message = { ...baseProofArbo } as ProofArbo;
    message.siblings = (object.siblings ?? []).map((e: any) =>
      bytesFromBase64(e)
    );
    return message;
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
    const message = { ...baseProofArbo } as ProofArbo;
    message.siblings = object.siblings?.map((e) => e) || [];
    return message;
  },
};

const baseProofCSP: object = {};

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
    const message = { ...baseProofCSP } as ProofCSP;
    message.payload = new Uint8Array();
    message.signature = new Uint8Array();
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
    const message = { ...baseProofCSP } as ProofCSP;
    message.payload =
      object.payload !== undefined && object.payload !== null
        ? bytesFromBase64(object.payload)
        : new Uint8Array();
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? bytesFromBase64(object.signature)
        : new Uint8Array();
    return message;
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
    const message = { ...baseProofCSP } as ProofCSP;
    message.payload = object.payload ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

const baseStorageProofErc20: object = {};

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
    const message = { ...baseStorageProofErc20 } as StorageProofErc20;
    message.proof = [];
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
    const message = { ...baseStorageProofErc20 } as StorageProofErc20;
    message.key =
      object.key !== undefined && object.key !== null
        ? bytesFromBase64(object.key)
        : new Uint8Array();
    message.value =
      object.value !== undefined && object.value !== null
        ? bytesFromBase64(object.value)
        : new Uint8Array();
    message.proof = (object.proof ?? []).map((e: any) => bytesFromBase64(e));
    return message;
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
    const message = { ...baseStorageProofErc20 } as StorageProofErc20;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proof = object.proof?.map((e) => e) || [];
    return message;
  },
};

const baseStorageProofErc721: object = {};

export const StorageProofErc721 = {
  encode(_: StorageProofErc721, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StorageProofErc721 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStorageProofErc721 } as StorageProofErc721;
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
    const message = { ...baseStorageProofErc721 } as StorageProofErc721;
    return message;
  },

  toJSON(_: StorageProofErc721): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProofErc721>, I>>(
    _: I
  ): StorageProofErc721 {
    const message = { ...baseStorageProofErc721 } as StorageProofErc721;
    return message;
  },
};

const baseStorageProofErc1155: object = {};

export const StorageProofErc1155 = {
  encode(_: StorageProofErc1155, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StorageProofErc1155 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStorageProofErc1155 } as StorageProofErc1155;
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
    const message = { ...baseStorageProofErc1155 } as StorageProofErc1155;
    return message;
  },

  toJSON(_: StorageProofErc1155): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProofErc1155>, I>>(
    _: I
  ): StorageProofErc1155 {
    const message = { ...baseStorageProofErc1155 } as StorageProofErc1155;
    return message;
  },
};

const baseStorageProofErc777: object = {};

export const StorageProofErc777 = {
  encode(_: StorageProofErc777, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StorageProofErc777 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStorageProofErc777 } as StorageProofErc777;
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
    const message = { ...baseStorageProofErc777 } as StorageProofErc777;
    return message;
  },

  toJSON(_: StorageProofErc777): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProofErc777>, I>>(
    _: I
  ): StorageProofErc777 {
    const message = { ...baseStorageProofErc777 } as StorageProofErc777;
    return message;
  },
};

const baseStorageProofMiniMe: object = {};

export const StorageProofMiniMe = {
  encode(_: StorageProofMiniMe, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): StorageProofMiniMe {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStorageProofMiniMe } as StorageProofMiniMe;
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
    const message = { ...baseStorageProofMiniMe } as StorageProofMiniMe;
    return message;
  },

  toJSON(_: StorageProofMiniMe): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StorageProofMiniMe>, I>>(
    _: I
  ): StorageProofMiniMe {
    const message = { ...baseStorageProofMiniMe } as StorageProofMiniMe;
    return message;
  },
};

const baseProofZkSnark: object = {};

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
    const message = { ...baseProofZkSnark } as ProofZkSnark;
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
    const message = { ...baseProofZkSnark } as ProofZkSnark;
    if (object.proof1k !== undefined && object.proof1k !== null) {
      message.body = {
        $case: "proof1k",
        proof1k: ProofZkSnark_Poseidon1kCensus.fromJSON(object.proof1k),
      };
    }
    if (object.proof50k !== undefined && object.proof50k !== null) {
      message.body = {
        $case: "proof50k",
        proof50k: ProofZkSnark_Poseidon50kCensus.fromJSON(object.proof50k),
      };
    }
    if (object.proof250k !== undefined && object.proof250k !== null) {
      message.body = {
        $case: "proof250k",
        proof250k: ProofZkSnark_Poseidon250kCensus.fromJSON(object.proof250k),
      };
    }
    return message;
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
    const message = { ...baseProofZkSnark } as ProofZkSnark;
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

const baseProofZkSnark_Poseidon1kCensus: object = {};

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
    const message = {
      ...baseProofZkSnark_Poseidon1kCensus,
    } as ProofZkSnark_Poseidon1kCensus;
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
    const message = {
      ...baseProofZkSnark_Poseidon1kCensus,
    } as ProofZkSnark_Poseidon1kCensus;
    return message;
  },

  toJSON(_: ProofZkSnark_Poseidon1kCensus): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofZkSnark_Poseidon1kCensus>, I>>(
    _: I
  ): ProofZkSnark_Poseidon1kCensus {
    const message = {
      ...baseProofZkSnark_Poseidon1kCensus,
    } as ProofZkSnark_Poseidon1kCensus;
    return message;
  },
};

const baseProofZkSnark_Poseidon50kCensus: object = {};

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
    const message = {
      ...baseProofZkSnark_Poseidon50kCensus,
    } as ProofZkSnark_Poseidon50kCensus;
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
    const message = {
      ...baseProofZkSnark_Poseidon50kCensus,
    } as ProofZkSnark_Poseidon50kCensus;
    return message;
  },

  toJSON(_: ProofZkSnark_Poseidon50kCensus): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofZkSnark_Poseidon50kCensus>, I>>(
    _: I
  ): ProofZkSnark_Poseidon50kCensus {
    const message = {
      ...baseProofZkSnark_Poseidon50kCensus,
    } as ProofZkSnark_Poseidon50kCensus;
    return message;
  },
};

const baseProofZkSnark_Poseidon250kCensus: object = {};

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
    const message = {
      ...baseProofZkSnark_Poseidon250kCensus,
    } as ProofZkSnark_Poseidon250kCensus;
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
    const message = {
      ...baseProofZkSnark_Poseidon250kCensus,
    } as ProofZkSnark_Poseidon250kCensus;
    return message;
  },

  toJSON(_: ProofZkSnark_Poseidon250kCensus): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProofZkSnark_Poseidon250kCensus>, I>>(
    _: I
  ): ProofZkSnark_Poseidon250kCensus {
    const message = {
      ...baseProofZkSnark_Poseidon250kCensus,
    } as ProofZkSnark_Poseidon250kCensus;
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
