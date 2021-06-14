/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "dvote.types.v1";

/** Implementing the data structure from https://vocdoni.io/docs/#/architecture/components/bootnode */
export interface BootNodeGateways {
  /** network Id's */
  homestead: BootNodeGateways_NetworkNodes | undefined;
  goerli: BootNodeGateways_NetworkNodes | undefined;
  xdai: BootNodeGateways_NetworkNodes | undefined;
  sokol: BootNodeGateways_NetworkNodes | undefined;
  rinkeby: BootNodeGateways_NetworkNodes | undefined;
  /**
   * EXTERNAL FIELDS
   * Allow to use arbitrary key/values so that
   * gateways can be organized by custom values.
   */
  meta: { [key: string]: string };
}

export interface BootNodeGateways_NetworkNodes {
  dvote: BootNodeGateways_NetworkNodes_DVote[];
  web3: BootNodeGateways_NetworkNodes_Web3[];
}

export interface BootNodeGateways_NetworkNodes_DVote {
  uri: string;
  apis: string[];
  pubKey: string;
}

export interface BootNodeGateways_NetworkNodes_Web3 {}

export interface BootNodeGateways_NetworkNodes_Web3_Endpoints {
  uri: string;
}

export interface BootNodeGateways_NetworkNodes_Web3_Contracts {
  ensPublicRegistry: string;
  ensPublicResolver: string;
  entityResolver: string;
  genesis: string;
  namespaces: string;
  processes: string;
  tokenStorageProofs: string;
  results: string;
}

export interface BootNodeGateways_MetaEntry {
  key: string;
  value: string;
}

const baseBootNodeGateways: object = {};

export const BootNodeGateways = {
  encode(message: BootNodeGateways, writer: Writer = Writer.create()): Writer {
    if (message.homestead !== undefined) {
      BootNodeGateways_NetworkNodes.encode(
        message.homestead,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.goerli !== undefined) {
      BootNodeGateways_NetworkNodes.encode(
        message.goerli,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.xdai !== undefined) {
      BootNodeGateways_NetworkNodes.encode(
        message.xdai,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.sokol !== undefined) {
      BootNodeGateways_NetworkNodes.encode(
        message.sokol,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.rinkeby !== undefined) {
      BootNodeGateways_NetworkNodes.encode(
        message.rinkeby,
        writer.uint32(42).fork()
      ).ldelim();
    }
    Object.entries(message.meta).forEach(([key, value]) => {
      BootNodeGateways_MetaEntry.encode(
        { key: key as any, value },
        writer.uint32(802).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BootNodeGateways {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBootNodeGateways } as BootNodeGateways;
    message.meta = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.homestead = BootNodeGateways_NetworkNodes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.goerli = BootNodeGateways_NetworkNodes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.xdai = BootNodeGateways_NetworkNodes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.sokol = BootNodeGateways_NetworkNodes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.rinkeby = BootNodeGateways_NetworkNodes.decode(
            reader,
            reader.uint32()
          );
          break;
        case 100:
          const entry100 = BootNodeGateways_MetaEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry100.value !== undefined) {
            message.meta[entry100.key] = entry100.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BootNodeGateways {
    const message = { ...baseBootNodeGateways } as BootNodeGateways;
    message.meta = {};
    if (object.homestead !== undefined && object.homestead !== null) {
      message.homestead = BootNodeGateways_NetworkNodes.fromJSON(
        object.homestead
      );
    }
    if (object.goerli !== undefined && object.goerli !== null) {
      message.goerli = BootNodeGateways_NetworkNodes.fromJSON(object.goerli);
    }
    if (object.xdai !== undefined && object.xdai !== null) {
      message.xdai = BootNodeGateways_NetworkNodes.fromJSON(object.xdai);
    }
    if (object.sokol !== undefined && object.sokol !== null) {
      message.sokol = BootNodeGateways_NetworkNodes.fromJSON(object.sokol);
    }
    if (object.rinkeby !== undefined && object.rinkeby !== null) {
      message.rinkeby = BootNodeGateways_NetworkNodes.fromJSON(object.rinkeby);
    }
    if (object.meta !== undefined && object.meta !== null) {
      Object.entries(object.meta).forEach(([key, value]) => {
        message.meta[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: BootNodeGateways): unknown {
    const obj: any = {};
    message.homestead !== undefined &&
      (obj.homestead = message.homestead
        ? BootNodeGateways_NetworkNodes.toJSON(message.homestead)
        : undefined);
    message.goerli !== undefined &&
      (obj.goerli = message.goerli
        ? BootNodeGateways_NetworkNodes.toJSON(message.goerli)
        : undefined);
    message.xdai !== undefined &&
      (obj.xdai = message.xdai
        ? BootNodeGateways_NetworkNodes.toJSON(message.xdai)
        : undefined);
    message.sokol !== undefined &&
      (obj.sokol = message.sokol
        ? BootNodeGateways_NetworkNodes.toJSON(message.sokol)
        : undefined);
    message.rinkeby !== undefined &&
      (obj.rinkeby = message.rinkeby
        ? BootNodeGateways_NetworkNodes.toJSON(message.rinkeby)
        : undefined);
    obj.meta = {};
    if (message.meta) {
      Object.entries(message.meta).forEach(([k, v]) => {
        obj.meta[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BootNodeGateways>): BootNodeGateways {
    const message = { ...baseBootNodeGateways } as BootNodeGateways;
    message.meta = {};
    if (object.homestead !== undefined && object.homestead !== null) {
      message.homestead = BootNodeGateways_NetworkNodes.fromPartial(
        object.homestead
      );
    }
    if (object.goerli !== undefined && object.goerli !== null) {
      message.goerli = BootNodeGateways_NetworkNodes.fromPartial(object.goerli);
    }
    if (object.xdai !== undefined && object.xdai !== null) {
      message.xdai = BootNodeGateways_NetworkNodes.fromPartial(object.xdai);
    }
    if (object.sokol !== undefined && object.sokol !== null) {
      message.sokol = BootNodeGateways_NetworkNodes.fromPartial(object.sokol);
    }
    if (object.rinkeby !== undefined && object.rinkeby !== null) {
      message.rinkeby = BootNodeGateways_NetworkNodes.fromPartial(
        object.rinkeby
      );
    }
    if (object.meta !== undefined && object.meta !== null) {
      Object.entries(object.meta).forEach(([key, value]) => {
        if (value !== undefined) {
          message.meta[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseBootNodeGateways_NetworkNodes: object = {};

export const BootNodeGateways_NetworkNodes = {
  encode(
    message: BootNodeGateways_NetworkNodes,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.dvote) {
      BootNodeGateways_NetworkNodes_DVote.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.web3) {
      BootNodeGateways_NetworkNodes_Web3.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BootNodeGateways_NetworkNodes {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBootNodeGateways_NetworkNodes,
    } as BootNodeGateways_NetworkNodes;
    message.dvote = [];
    message.web3 = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dvote.push(
            BootNodeGateways_NetworkNodes_DVote.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.web3.push(
            BootNodeGateways_NetworkNodes_Web3.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BootNodeGateways_NetworkNodes {
    const message = {
      ...baseBootNodeGateways_NetworkNodes,
    } as BootNodeGateways_NetworkNodes;
    message.dvote = [];
    message.web3 = [];
    if (object.dvote !== undefined && object.dvote !== null) {
      for (const e of object.dvote) {
        message.dvote.push(BootNodeGateways_NetworkNodes_DVote.fromJSON(e));
      }
    }
    if (object.web3 !== undefined && object.web3 !== null) {
      for (const e of object.web3) {
        message.web3.push(BootNodeGateways_NetworkNodes_Web3.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BootNodeGateways_NetworkNodes): unknown {
    const obj: any = {};
    if (message.dvote) {
      obj.dvote = message.dvote.map((e) =>
        e ? BootNodeGateways_NetworkNodes_DVote.toJSON(e) : undefined
      );
    } else {
      obj.dvote = [];
    }
    if (message.web3) {
      obj.web3 = message.web3.map((e) =>
        e ? BootNodeGateways_NetworkNodes_Web3.toJSON(e) : undefined
      );
    } else {
      obj.web3 = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<BootNodeGateways_NetworkNodes>
  ): BootNodeGateways_NetworkNodes {
    const message = {
      ...baseBootNodeGateways_NetworkNodes,
    } as BootNodeGateways_NetworkNodes;
    message.dvote = [];
    message.web3 = [];
    if (object.dvote !== undefined && object.dvote !== null) {
      for (const e of object.dvote) {
        message.dvote.push(BootNodeGateways_NetworkNodes_DVote.fromPartial(e));
      }
    }
    if (object.web3 !== undefined && object.web3 !== null) {
      for (const e of object.web3) {
        message.web3.push(BootNodeGateways_NetworkNodes_Web3.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBootNodeGateways_NetworkNodes_DVote: object = {
  uri: "",
  apis: "",
  pubKey: "",
};

export const BootNodeGateways_NetworkNodes_DVote = {
  encode(
    message: BootNodeGateways_NetworkNodes_DVote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    for (const v of message.apis) {
      writer.uint32(18).string(v!);
    }
    if (message.pubKey !== "") {
      writer.uint32(26).string(message.pubKey);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BootNodeGateways_NetworkNodes_DVote {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBootNodeGateways_NetworkNodes_DVote,
    } as BootNodeGateways_NetworkNodes_DVote;
    message.apis = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        case 2:
          message.apis.push(reader.string());
          break;
        case 3:
          message.pubKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BootNodeGateways_NetworkNodes_DVote {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_DVote,
    } as BootNodeGateways_NetworkNodes_DVote;
    message.apis = [];
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    }
    if (object.apis !== undefined && object.apis !== null) {
      for (const e of object.apis) {
        message.apis.push(String(e));
      }
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey);
    }
    return message;
  },

  toJSON(message: BootNodeGateways_NetworkNodes_DVote): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    if (message.apis) {
      obj.apis = message.apis.map((e) => e);
    } else {
      obj.apis = [];
    }
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BootNodeGateways_NetworkNodes_DVote>
  ): BootNodeGateways_NetworkNodes_DVote {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_DVote,
    } as BootNodeGateways_NetworkNodes_DVote;
    message.apis = [];
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.apis !== undefined && object.apis !== null) {
      for (const e of object.apis) {
        message.apis.push(e);
      }
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey;
    }
    return message;
  },
};

const baseBootNodeGateways_NetworkNodes_Web3: object = {};

export const BootNodeGateways_NetworkNodes_Web3 = {
  encode(
    _: BootNodeGateways_NetworkNodes_Web3,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BootNodeGateways_NetworkNodes_Web3 {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3,
    } as BootNodeGateways_NetworkNodes_Web3;
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

  fromJSON(_: any): BootNodeGateways_NetworkNodes_Web3 {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3,
    } as BootNodeGateways_NetworkNodes_Web3;
    return message;
  },

  toJSON(_: BootNodeGateways_NetworkNodes_Web3): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<BootNodeGateways_NetworkNodes_Web3>
  ): BootNodeGateways_NetworkNodes_Web3 {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3,
    } as BootNodeGateways_NetworkNodes_Web3;
    return message;
  },
};

const baseBootNodeGateways_NetworkNodes_Web3_Endpoints: object = { uri: "" };

export const BootNodeGateways_NetworkNodes_Web3_Endpoints = {
  encode(
    message: BootNodeGateways_NetworkNodes_Web3_Endpoints,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BootNodeGateways_NetworkNodes_Web3_Endpoints {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3_Endpoints,
    } as BootNodeGateways_NetworkNodes_Web3_Endpoints;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BootNodeGateways_NetworkNodes_Web3_Endpoints {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3_Endpoints,
    } as BootNodeGateways_NetworkNodes_Web3_Endpoints;
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    }
    return message;
  },

  toJSON(message: BootNodeGateways_NetworkNodes_Web3_Endpoints): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BootNodeGateways_NetworkNodes_Web3_Endpoints>
  ): BootNodeGateways_NetworkNodes_Web3_Endpoints {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3_Endpoints,
    } as BootNodeGateways_NetworkNodes_Web3_Endpoints;
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    return message;
  },
};

const baseBootNodeGateways_NetworkNodes_Web3_Contracts: object = {
  ensPublicRegistry: "",
  ensPublicResolver: "",
  entityResolver: "",
  genesis: "",
  namespaces: "",
  processes: "",
  tokenStorageProofs: "",
  results: "",
};

export const BootNodeGateways_NetworkNodes_Web3_Contracts = {
  encode(
    message: BootNodeGateways_NetworkNodes_Web3_Contracts,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ensPublicRegistry !== "") {
      writer.uint32(10).string(message.ensPublicRegistry);
    }
    if (message.ensPublicResolver !== "") {
      writer.uint32(18).string(message.ensPublicResolver);
    }
    if (message.entityResolver !== "") {
      writer.uint32(26).string(message.entityResolver);
    }
    if (message.genesis !== "") {
      writer.uint32(34).string(message.genesis);
    }
    if (message.namespaces !== "") {
      writer.uint32(42).string(message.namespaces);
    }
    if (message.processes !== "") {
      writer.uint32(50).string(message.processes);
    }
    if (message.tokenStorageProofs !== "") {
      writer.uint32(58).string(message.tokenStorageProofs);
    }
    if (message.results !== "") {
      writer.uint32(66).string(message.results);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BootNodeGateways_NetworkNodes_Web3_Contracts {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3_Contracts,
    } as BootNodeGateways_NetworkNodes_Web3_Contracts;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ensPublicRegistry = reader.string();
          break;
        case 2:
          message.ensPublicResolver = reader.string();
          break;
        case 3:
          message.entityResolver = reader.string();
          break;
        case 4:
          message.genesis = reader.string();
          break;
        case 5:
          message.namespaces = reader.string();
          break;
        case 6:
          message.processes = reader.string();
          break;
        case 7:
          message.tokenStorageProofs = reader.string();
          break;
        case 8:
          message.results = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BootNodeGateways_NetworkNodes_Web3_Contracts {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3_Contracts,
    } as BootNodeGateways_NetworkNodes_Web3_Contracts;
    if (
      object.ensPublicRegistry !== undefined &&
      object.ensPublicRegistry !== null
    ) {
      message.ensPublicRegistry = String(object.ensPublicRegistry);
    }
    if (
      object.ensPublicResolver !== undefined &&
      object.ensPublicResolver !== null
    ) {
      message.ensPublicResolver = String(object.ensPublicResolver);
    }
    if (object.entityResolver !== undefined && object.entityResolver !== null) {
      message.entityResolver = String(object.entityResolver);
    }
    if (object.genesis !== undefined && object.genesis !== null) {
      message.genesis = String(object.genesis);
    }
    if (object.namespaces !== undefined && object.namespaces !== null) {
      message.namespaces = String(object.namespaces);
    }
    if (object.processes !== undefined && object.processes !== null) {
      message.processes = String(object.processes);
    }
    if (
      object.tokenStorageProofs !== undefined &&
      object.tokenStorageProofs !== null
    ) {
      message.tokenStorageProofs = String(object.tokenStorageProofs);
    }
    if (object.results !== undefined && object.results !== null) {
      message.results = String(object.results);
    }
    return message;
  },

  toJSON(message: BootNodeGateways_NetworkNodes_Web3_Contracts): unknown {
    const obj: any = {};
    message.ensPublicRegistry !== undefined &&
      (obj.ensPublicRegistry = message.ensPublicRegistry);
    message.ensPublicResolver !== undefined &&
      (obj.ensPublicResolver = message.ensPublicResolver);
    message.entityResolver !== undefined &&
      (obj.entityResolver = message.entityResolver);
    message.genesis !== undefined && (obj.genesis = message.genesis);
    message.namespaces !== undefined && (obj.namespaces = message.namespaces);
    message.processes !== undefined && (obj.processes = message.processes);
    message.tokenStorageProofs !== undefined &&
      (obj.tokenStorageProofs = message.tokenStorageProofs);
    message.results !== undefined && (obj.results = message.results);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BootNodeGateways_NetworkNodes_Web3_Contracts>
  ): BootNodeGateways_NetworkNodes_Web3_Contracts {
    const message = {
      ...baseBootNodeGateways_NetworkNodes_Web3_Contracts,
    } as BootNodeGateways_NetworkNodes_Web3_Contracts;
    if (
      object.ensPublicRegistry !== undefined &&
      object.ensPublicRegistry !== null
    ) {
      message.ensPublicRegistry = object.ensPublicRegistry;
    }
    if (
      object.ensPublicResolver !== undefined &&
      object.ensPublicResolver !== null
    ) {
      message.ensPublicResolver = object.ensPublicResolver;
    }
    if (object.entityResolver !== undefined && object.entityResolver !== null) {
      message.entityResolver = object.entityResolver;
    }
    if (object.genesis !== undefined && object.genesis !== null) {
      message.genesis = object.genesis;
    }
    if (object.namespaces !== undefined && object.namespaces !== null) {
      message.namespaces = object.namespaces;
    }
    if (object.processes !== undefined && object.processes !== null) {
      message.processes = object.processes;
    }
    if (
      object.tokenStorageProofs !== undefined &&
      object.tokenStorageProofs !== null
    ) {
      message.tokenStorageProofs = object.tokenStorageProofs;
    }
    if (object.results !== undefined && object.results !== null) {
      message.results = object.results;
    }
    return message;
  },
};

const baseBootNodeGateways_MetaEntry: object = { key: "", value: "" };

export const BootNodeGateways_MetaEntry = {
  encode(
    message: BootNodeGateways_MetaEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BootNodeGateways_MetaEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBootNodeGateways_MetaEntry,
    } as BootNodeGateways_MetaEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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

  fromJSON(object: any): BootNodeGateways_MetaEntry {
    const message = {
      ...baseBootNodeGateways_MetaEntry,
    } as BootNodeGateways_MetaEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: BootNodeGateways_MetaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<BootNodeGateways_MetaEntry>
  ): BootNodeGateways_MetaEntry {
    const message = {
      ...baseBootNodeGateways_MetaEntry,
    } as BootNodeGateways_MetaEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
