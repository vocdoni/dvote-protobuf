/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "dvote.types.v1";

/** / An encrypted wallet with the details to allow its usage, given a passphrase or a pin */
export interface Wallet {
  /**
   * / Human friendly seed phrase, derived with an HD path to produce a root private key
   * / The root private key will still be uniquely derived for each entity
   */
  encryptedMnemonic: Uint8Array;
  hdPath: string;
  locale: string;
  authMethod: Wallet_AuthMethod;
}

export enum Wallet_AuthMethod {
  PASS = 0,
  PIN = 1,
  UNRECOGNIZED = -1,
}

export function wallet_AuthMethodFromJSON(object: any): Wallet_AuthMethod {
  switch (object) {
    case 0:
    case "PASS":
      return Wallet_AuthMethod.PASS;
    case 1:
    case "PIN":
      return Wallet_AuthMethod.PIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Wallet_AuthMethod.UNRECOGNIZED;
  }
}

export function wallet_AuthMethodToJSON(object: Wallet_AuthMethod): string {
  switch (object) {
    case Wallet_AuthMethod.PASS:
      return "PASS";
    case Wallet_AuthMethod.PIN:
      return "PIN";
    default:
      return "UNKNOWN";
  }
}

const baseWallet: object = { hdPath: "", locale: "", authMethod: 0 };

export const Wallet = {
  encode(message: Wallet, writer: Writer = Writer.create()): Writer {
    if (message.encryptedMnemonic.length !== 0) {
      writer.uint32(10).bytes(message.encryptedMnemonic);
    }
    if (message.hdPath !== "") {
      writer.uint32(18).string(message.hdPath);
    }
    if (message.locale !== "") {
      writer.uint32(26).string(message.locale);
    }
    if (message.authMethod !== 0) {
      writer.uint32(32).int32(message.authMethod);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Wallet {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWallet } as Wallet;
    message.encryptedMnemonic = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.encryptedMnemonic = reader.bytes();
          break;
        case 2:
          message.hdPath = reader.string();
          break;
        case 3:
          message.locale = reader.string();
          break;
        case 4:
          message.authMethod = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Wallet {
    const message = { ...baseWallet } as Wallet;
    message.encryptedMnemonic = new Uint8Array();
    if (
      object.encryptedMnemonic !== undefined &&
      object.encryptedMnemonic !== null
    ) {
      message.encryptedMnemonic = bytesFromBase64(object.encryptedMnemonic);
    }
    if (object.hdPath !== undefined && object.hdPath !== null) {
      message.hdPath = String(object.hdPath);
    }
    if (object.locale !== undefined && object.locale !== null) {
      message.locale = String(object.locale);
    }
    if (object.authMethod !== undefined && object.authMethod !== null) {
      message.authMethod = wallet_AuthMethodFromJSON(object.authMethod);
    }
    return message;
  },

  toJSON(message: Wallet): unknown {
    const obj: any = {};
    message.encryptedMnemonic !== undefined &&
      (obj.encryptedMnemonic = base64FromBytes(
        message.encryptedMnemonic !== undefined
          ? message.encryptedMnemonic
          : new Uint8Array()
      ));
    message.hdPath !== undefined && (obj.hdPath = message.hdPath);
    message.locale !== undefined && (obj.locale = message.locale);
    message.authMethod !== undefined &&
      (obj.authMethod = wallet_AuthMethodToJSON(message.authMethod));
    return obj;
  },

  fromPartial(object: DeepPartial<Wallet>): Wallet {
    const message = { ...baseWallet } as Wallet;
    if (
      object.encryptedMnemonic !== undefined &&
      object.encryptedMnemonic !== null
    ) {
      message.encryptedMnemonic = object.encryptedMnemonic;
    }
    if (object.hdPath !== undefined && object.hdPath !== null) {
      message.hdPath = object.hdPath;
    }
    if (object.locale !== undefined && object.locale !== null) {
      message.locale = object.locale;
    }
    if (object.authMethod !== undefined && object.authMethod !== null) {
      message.authMethod = object.authMethod;
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
