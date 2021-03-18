/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "dvote.types.v1";

export interface Key {
  type: Key_Type;
  /**
   * Human friendly seed phrase, derived with an HD path to produce a root private key
   * The root private key will still be uniquely derived for each entity
   */
  encryptedMnemonic: string;
  /** Accouts have an N:N mapping with entities and private keys */
  encryptedRootPrivateKey: string;
  rootPublicKey: string;
  rootAddress: string;
  /**
   * Allow to use arbitrary key/values so that
   * keys can be organized by custom values.
   */
  meta: { [key: string]: string };
}

export enum Key_Type {
  /** SECP256K1 - ETHEREUM */
  SECP256K1 = 0,
  BABYJUBJUB = 1,
  UNRECOGNIZED = -1,
}

export function key_TypeFromJSON(object: any): Key_Type {
  switch (object) {
    case 0:
    case "SECP256K1":
      return Key_Type.SECP256K1;
    case 1:
    case "BABYJUBJUB":
      return Key_Type.BABYJUBJUB;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Key_Type.UNRECOGNIZED;
  }
}

export function key_TypeToJSON(object: Key_Type): string {
  switch (object) {
    case Key_Type.SECP256K1:
      return "SECP256K1";
    case Key_Type.BABYJUBJUB:
      return "BABYJUBJUB";
    default:
      return "UNKNOWN";
  }
}

export interface Key_MetaEntry {
  key: string;
  value: string;
}

const baseKey: object = {
  type: 0,
  encryptedMnemonic: "",
  encryptedRootPrivateKey: "",
  rootPublicKey: "",
  rootAddress: "",
};

export const Key = {
  encode(message: Key, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.encryptedMnemonic !== "") {
      writer.uint32(18).string(message.encryptedMnemonic);
    }
    if (message.encryptedRootPrivateKey !== "") {
      writer.uint32(26).string(message.encryptedRootPrivateKey);
    }
    if (message.rootPublicKey !== "") {
      writer.uint32(34).string(message.rootPublicKey);
    }
    if (message.rootAddress !== "") {
      writer.uint32(42).string(message.rootAddress);
    }
    Object.entries(message.meta).forEach(([key, value]) => {
      Key_MetaEntry.encode(
        { key: key as any, value },
        writer.uint32(802).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKey } as Key;
    message.meta = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.encryptedMnemonic = reader.string();
          break;
        case 3:
          message.encryptedRootPrivateKey = reader.string();
          break;
        case 4:
          message.rootPublicKey = reader.string();
          break;
        case 5:
          message.rootAddress = reader.string();
          break;
        case 100:
          const entry100 = Key_MetaEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): Key {
    const message = { ...baseKey } as Key;
    message.meta = {};
    if (object.type !== undefined && object.type !== null) {
      message.type = key_TypeFromJSON(object.type);
    }
    if (
      object.encryptedMnemonic !== undefined &&
      object.encryptedMnemonic !== null
    ) {
      message.encryptedMnemonic = String(object.encryptedMnemonic);
    }
    if (
      object.encryptedRootPrivateKey !== undefined &&
      object.encryptedRootPrivateKey !== null
    ) {
      message.encryptedRootPrivateKey = String(object.encryptedRootPrivateKey);
    }
    if (object.rootPublicKey !== undefined && object.rootPublicKey !== null) {
      message.rootPublicKey = String(object.rootPublicKey);
    }
    if (object.rootAddress !== undefined && object.rootAddress !== null) {
      message.rootAddress = String(object.rootAddress);
    }
    if (object.meta !== undefined && object.meta !== null) {
      Object.entries(object.meta).forEach(([key, value]) => {
        message.meta[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = key_TypeToJSON(message.type));
    message.encryptedMnemonic !== undefined &&
      (obj.encryptedMnemonic = message.encryptedMnemonic);
    message.encryptedRootPrivateKey !== undefined &&
      (obj.encryptedRootPrivateKey = message.encryptedRootPrivateKey);
    message.rootPublicKey !== undefined &&
      (obj.rootPublicKey = message.rootPublicKey);
    message.rootAddress !== undefined &&
      (obj.rootAddress = message.rootAddress);
    obj.meta = {};
    if (message.meta) {
      Object.entries(message.meta).forEach(([k, v]) => {
        obj.meta[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Key>): Key {
    const message = { ...baseKey } as Key;
    message.meta = {};
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (
      object.encryptedMnemonic !== undefined &&
      object.encryptedMnemonic !== null
    ) {
      message.encryptedMnemonic = object.encryptedMnemonic;
    }
    if (
      object.encryptedRootPrivateKey !== undefined &&
      object.encryptedRootPrivateKey !== null
    ) {
      message.encryptedRootPrivateKey = object.encryptedRootPrivateKey;
    }
    if (object.rootPublicKey !== undefined && object.rootPublicKey !== null) {
      message.rootPublicKey = object.rootPublicKey;
    }
    if (object.rootAddress !== undefined && object.rootAddress !== null) {
      message.rootAddress = object.rootAddress;
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

const baseKey_MetaEntry: object = { key: "", value: "" };

export const Key_MetaEntry = {
  encode(message: Key_MetaEntry, writer: Writer = Writer.create()): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Key_MetaEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseKey_MetaEntry } as Key_MetaEntry;
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

  fromJSON(object: any): Key_MetaEntry {
    const message = { ...baseKey_MetaEntry } as Key_MetaEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: Key_MetaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Key_MetaEntry>): Key_MetaEntry {
    const message = { ...baseKey_MetaEntry } as Key_MetaEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
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
