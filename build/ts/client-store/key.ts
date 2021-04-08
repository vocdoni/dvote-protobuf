/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "dvote.types.v1";

export interface Key {
  /**
   * Human friendly seed phrase, derived with an HD path to produce a root private key
   * The root private key will still be uniquely derived for each entity
   */
  encryptedMnemonic: string;
  path: string;
  locale: string;
  address: string;
  /**
   * EXTERNAL FIELDS
   * Allow to use arbitrary key/values so that
   * keys can be organized by custom values.
   */
  meta: { [key: string]: string };
}

export interface Key_MetaEntry {
  key: string;
  value: string;
}

const baseKey: object = {
  encryptedMnemonic: "",
  path: "",
  locale: "",
  address: "",
};

export const Key = {
  encode(message: Key, writer: Writer = Writer.create()): Writer {
    if (message.encryptedMnemonic !== "") {
      writer.uint32(10).string(message.encryptedMnemonic);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    if (message.locale !== "") {
      writer.uint32(26).string(message.locale);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
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
          message.encryptedMnemonic = reader.string();
          break;
        case 2:
          message.path = reader.string();
          break;
        case 3:
          message.locale = reader.string();
          break;
        case 4:
          message.address = reader.string();
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
    if (
      object.encryptedMnemonic !== undefined &&
      object.encryptedMnemonic !== null
    ) {
      message.encryptedMnemonic = String(object.encryptedMnemonic);
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = String(object.path);
    }
    if (object.locale !== undefined && object.locale !== null) {
      message.locale = String(object.locale);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
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
    message.encryptedMnemonic !== undefined &&
      (obj.encryptedMnemonic = message.encryptedMnemonic);
    message.path !== undefined && (obj.path = message.path);
    message.locale !== undefined && (obj.locale = message.locale);
    message.address !== undefined && (obj.address = message.address);
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
    if (
      object.encryptedMnemonic !== undefined &&
      object.encryptedMnemonic !== null
    ) {
      message.encryptedMnemonic = object.encryptedMnemonic;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.locale !== undefined && object.locale !== null) {
      message.locale = object.locale;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
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
