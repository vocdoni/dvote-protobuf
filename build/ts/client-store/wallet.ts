/* eslint-disable */
import _m0 from "protobufjs/minimal";

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
    case Wallet_AuthMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseWallet(): Wallet {
  return { encryptedMnemonic: new Uint8Array(), hdPath: "", locale: "", authMethod: 0 };
}

export const Wallet = {
  encode(message: Wallet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Wallet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWallet();
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
    return {
      encryptedMnemonic: isSet(object.encryptedMnemonic) ? bytesFromBase64(object.encryptedMnemonic) : new Uint8Array(),
      hdPath: isSet(object.hdPath) ? String(object.hdPath) : "",
      locale: isSet(object.locale) ? String(object.locale) : "",
      authMethod: isSet(object.authMethod) ? wallet_AuthMethodFromJSON(object.authMethod) : 0,
    };
  },

  toJSON(message: Wallet): unknown {
    const obj: any = {};
    message.encryptedMnemonic !== undefined &&
      (obj.encryptedMnemonic = base64FromBytes(
        message.encryptedMnemonic !== undefined ? message.encryptedMnemonic : new Uint8Array(),
      ));
    message.hdPath !== undefined && (obj.hdPath = message.hdPath);
    message.locale !== undefined && (obj.locale = message.locale);
    message.authMethod !== undefined && (obj.authMethod = wallet_AuthMethodToJSON(message.authMethod));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Wallet>, I>>(object: I): Wallet {
    const message = createBaseWallet();
    message.encryptedMnemonic = object.encryptedMnemonic ?? new Uint8Array();
    message.hdPath = object.hdPath ?? "";
    message.locale = object.locale ?? "";
    message.authMethod = object.authMethod ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
