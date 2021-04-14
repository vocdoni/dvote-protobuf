/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Wallet } from "../client-store/wallet";

export const protobufPackage = "dvote.types.v1";

export interface WalletBackup {
  /** / A name to help identify the wallet backed up */
  name: string;
  /** / When it was exported. Unix timestamp (seconds) */
  timestamp: number;
  /**
   * / Data to import the wallet, given the original passphrase or pin
   * / Contains the encrypted mnemonic
   */
  wallet: Wallet | undefined;
  passphraseRecovery: WalletBackup_Recovery | undefined;
}

/** / Data to recover the original passphrase, given some recovery questions */
export interface WalletBackup_Recovery {
  /** / The indexes of the questions used */
  questionIds: WalletBackup_Recovery_QuestionEnum[];
  encryptedPassphrase: Uint8Array;
}

export enum WalletBackup_Recovery_QuestionEnum {
  STUFFED_TOY = 0,
  FAVORITE_TEACHER = 1,
  DRIVING_INSTRUCTOR = 2,
  FIRST_KISSED = 3,
  CHILDHOOD_NICKNAME = 4,
  UNRECOGNIZED = -1,
}

export function walletBackup_Recovery_QuestionEnumFromJSON(
  object: any
): WalletBackup_Recovery_QuestionEnum {
  switch (object) {
    case 0:
    case "STUFFED_TOY":
      return WalletBackup_Recovery_QuestionEnum.STUFFED_TOY;
    case 1:
    case "FAVORITE_TEACHER":
      return WalletBackup_Recovery_QuestionEnum.FAVORITE_TEACHER;
    case 2:
    case "DRIVING_INSTRUCTOR":
      return WalletBackup_Recovery_QuestionEnum.DRIVING_INSTRUCTOR;
    case 3:
    case "FIRST_KISSED":
      return WalletBackup_Recovery_QuestionEnum.FIRST_KISSED;
    case 4:
    case "CHILDHOOD_NICKNAME":
      return WalletBackup_Recovery_QuestionEnum.CHILDHOOD_NICKNAME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WalletBackup_Recovery_QuestionEnum.UNRECOGNIZED;
  }
}

export function walletBackup_Recovery_QuestionEnumToJSON(
  object: WalletBackup_Recovery_QuestionEnum
): string {
  switch (object) {
    case WalletBackup_Recovery_QuestionEnum.STUFFED_TOY:
      return "STUFFED_TOY";
    case WalletBackup_Recovery_QuestionEnum.FAVORITE_TEACHER:
      return "FAVORITE_TEACHER";
    case WalletBackup_Recovery_QuestionEnum.DRIVING_INSTRUCTOR:
      return "DRIVING_INSTRUCTOR";
    case WalletBackup_Recovery_QuestionEnum.FIRST_KISSED:
      return "FIRST_KISSED";
    case WalletBackup_Recovery_QuestionEnum.CHILDHOOD_NICKNAME:
      return "CHILDHOOD_NICKNAME";
    default:
      return "UNKNOWN";
  }
}

const baseWalletBackup: object = { name: "", timestamp: 0 };

export const WalletBackup = {
  encode(message: WalletBackup, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.wallet !== undefined) {
      Wallet.encode(message.wallet, writer.uint32(26).fork()).ldelim();
    }
    if (message.passphraseRecovery !== undefined) {
      WalletBackup_Recovery.encode(
        message.passphraseRecovery,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WalletBackup {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWalletBackup } as WalletBackup;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.wallet = Wallet.decode(reader, reader.uint32());
          break;
        case 4:
          message.passphraseRecovery = WalletBackup_Recovery.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WalletBackup {
    const message = { ...baseWalletBackup } as WalletBackup;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Number(object.timestamp);
    }
    if (object.wallet !== undefined && object.wallet !== null) {
      message.wallet = Wallet.fromJSON(object.wallet);
    }
    if (
      object.passphraseRecovery !== undefined &&
      object.passphraseRecovery !== null
    ) {
      message.passphraseRecovery = WalletBackup_Recovery.fromJSON(
        object.passphraseRecovery
      );
    }
    return message;
  },

  toJSON(message: WalletBackup): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.wallet !== undefined &&
      (obj.wallet = message.wallet ? Wallet.toJSON(message.wallet) : undefined);
    message.passphraseRecovery !== undefined &&
      (obj.passphraseRecovery = message.passphraseRecovery
        ? WalletBackup_Recovery.toJSON(message.passphraseRecovery)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<WalletBackup>): WalletBackup {
    const message = { ...baseWalletBackup } as WalletBackup;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    }
    if (object.wallet !== undefined && object.wallet !== null) {
      message.wallet = Wallet.fromPartial(object.wallet);
    }
    if (
      object.passphraseRecovery !== undefined &&
      object.passphraseRecovery !== null
    ) {
      message.passphraseRecovery = WalletBackup_Recovery.fromPartial(
        object.passphraseRecovery
      );
    }
    return message;
  },
};

const baseWalletBackup_Recovery: object = { questionIds: 0 };

export const WalletBackup_Recovery = {
  encode(
    message: WalletBackup_Recovery,
    writer: Writer = Writer.create()
  ): Writer {
    writer.uint32(10).fork();
    for (const v of message.questionIds) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.encryptedPassphrase.length !== 0) {
      writer.uint32(18).bytes(message.encryptedPassphrase);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): WalletBackup_Recovery {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWalletBackup_Recovery } as WalletBackup_Recovery;
    message.questionIds = [];
    message.encryptedPassphrase = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.questionIds.push(reader.int32() as any);
            }
          } else {
            message.questionIds.push(reader.int32() as any);
          }
          break;
        case 2:
          message.encryptedPassphrase = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WalletBackup_Recovery {
    const message = { ...baseWalletBackup_Recovery } as WalletBackup_Recovery;
    message.questionIds = [];
    message.encryptedPassphrase = new Uint8Array();
    if (object.questionIds !== undefined && object.questionIds !== null) {
      for (const e of object.questionIds) {
        message.questionIds.push(walletBackup_Recovery_QuestionEnumFromJSON(e));
      }
    }
    if (
      object.encryptedPassphrase !== undefined &&
      object.encryptedPassphrase !== null
    ) {
      message.encryptedPassphrase = bytesFromBase64(object.encryptedPassphrase);
    }
    return message;
  },

  toJSON(message: WalletBackup_Recovery): unknown {
    const obj: any = {};
    if (message.questionIds) {
      obj.questionIds = message.questionIds.map((e) =>
        walletBackup_Recovery_QuestionEnumToJSON(e)
      );
    } else {
      obj.questionIds = [];
    }
    message.encryptedPassphrase !== undefined &&
      (obj.encryptedPassphrase = base64FromBytes(
        message.encryptedPassphrase !== undefined
          ? message.encryptedPassphrase
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<WalletBackup_Recovery>
  ): WalletBackup_Recovery {
    const message = { ...baseWalletBackup_Recovery } as WalletBackup_Recovery;
    message.questionIds = [];
    if (object.questionIds !== undefined && object.questionIds !== null) {
      for (const e of object.questionIds) {
        message.questionIds.push(e);
      }
    }
    if (
      object.encryptedPassphrase !== undefined &&
      object.encryptedPassphrase !== null
    ) {
      message.encryptedPassphrase = object.encryptedPassphrase;
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
