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
  /** FAVORITE_BOOK - What is your favorite book? */
  FAVORITE_BOOK = 0,
  /** FIRST_PET - What was the name of your first pet? */
  FIRST_PET = 1,
  /** WHERE_HIGH_SCHOOL_COLLEGE - Where did you go to high school/college? */
  WHERE_HIGH_SCHOOL_COLLEGE = 2,
  /** CITY_OF_BIRTH - What city were you born in? */
  CITY_OF_BIRTH = 3,
  /** FAVORITE_CHILDHOOD_FRIEND - What is the name of your favorite childhood friend? */
  FAVORITE_CHILDHOOD_FRIEND = 4,
  /** WHERE_FATHER_AND_MOTHER_MET - Where did your mother and father meet? */
  WHERE_FATHER_AND_MOTHER_MET = 5,
  /** FAVORITE_MOVIE - What is your favorite movie? */
  FAVORITE_MOVIE = 6,
  /** FAVORITE_SPORT_HIGH_SCHOOL - What was your favorite sport in high school? */
  FAVORITE_SPORT_HIGH_SCHOOL = 7,
  /** FAVORITE_TEACHER_HIGH_SCHOOL - What was your favorite teacher in high school? */
  FAVORITE_TEACHER_HIGH_SCHOOL = 8,
  /** FAVORITE_BAND - What is your favorite band? */
  FAVORITE_BAND = 9,
  /** CHILDHOOD_SPORTS_HERO - Who is your childhood sports hero? */
  CHILDHOOD_SPORTS_HERO = 10,
  /** COMPANY_FIRST_JOB - What is the name of the company where you had your first job? */
  COMPANY_FIRST_JOB = 11,
  /** CHILD_NICKNAME - What was your nickname as a child? */
  CHILD_NICKNAME = 12,
  /** NAME_FIRST_PARTNER - What is the name of your first girlfriend or boyfriend? */
  NAME_FIRST_PARTNER = 13,
  /** WHERE_MEET_PARTNER - Where did you meet your partner? */
  WHERE_MEET_PARTNER = 14,
  /** MOTHER_MAIDEN_NAME - What is your mother's maiden name? */
  MOTHER_MAIDEN_NAME = 15,
  /** MATERNAL_GRANDMOTHER_FULL_NAME - What is your maternal grandmother's full name? */
  MATERNAL_GRANDMOTHER_FULL_NAME = 16,
  /** PARENTAL_GRANDMOTHER_FULL_NAME - What is your paternal grandmother's full name? */
  PARENTAL_GRANDMOTHER_FULL_NAME = 17,
  /** NAME_OLDEST_COUSIN - What is the name of your oldest cousin? */
  NAME_OLDEST_COUSIN = 18,
  UNRECOGNIZED = -1,
}

export function walletBackup_Recovery_QuestionEnumFromJSON(
  object: any
): WalletBackup_Recovery_QuestionEnum {
  switch (object) {
    case 0:
    case "FAVORITE_BOOK":
      return WalletBackup_Recovery_QuestionEnum.FAVORITE_BOOK;
    case 1:
    case "FIRST_PET":
      return WalletBackup_Recovery_QuestionEnum.FIRST_PET;
    case 2:
    case "WHERE_HIGH_SCHOOL_COLLEGE":
      return WalletBackup_Recovery_QuestionEnum.WHERE_HIGH_SCHOOL_COLLEGE;
    case 3:
    case "CITY_OF_BIRTH":
      return WalletBackup_Recovery_QuestionEnum.CITY_OF_BIRTH;
    case 4:
    case "FAVORITE_CHILDHOOD_FRIEND":
      return WalletBackup_Recovery_QuestionEnum.FAVORITE_CHILDHOOD_FRIEND;
    case 5:
    case "WHERE_FATHER_AND_MOTHER_MET":
      return WalletBackup_Recovery_QuestionEnum.WHERE_FATHER_AND_MOTHER_MET;
    case 6:
    case "FAVORITE_MOVIE":
      return WalletBackup_Recovery_QuestionEnum.FAVORITE_MOVIE;
    case 7:
    case "FAVORITE_SPORT_HIGH_SCHOOL":
      return WalletBackup_Recovery_QuestionEnum.FAVORITE_SPORT_HIGH_SCHOOL;
    case 8:
    case "FAVORITE_TEACHER_HIGH_SCHOOL":
      return WalletBackup_Recovery_QuestionEnum.FAVORITE_TEACHER_HIGH_SCHOOL;
    case 9:
    case "FAVORITE_BAND":
      return WalletBackup_Recovery_QuestionEnum.FAVORITE_BAND;
    case 10:
    case "CHILDHOOD_SPORTS_HERO":
      return WalletBackup_Recovery_QuestionEnum.CHILDHOOD_SPORTS_HERO;
    case 11:
    case "COMPANY_FIRST_JOB":
      return WalletBackup_Recovery_QuestionEnum.COMPANY_FIRST_JOB;
    case 12:
    case "CHILD_NICKNAME":
      return WalletBackup_Recovery_QuestionEnum.CHILD_NICKNAME;
    case 13:
    case "NAME_FIRST_PARTNER":
      return WalletBackup_Recovery_QuestionEnum.NAME_FIRST_PARTNER;
    case 14:
    case "WHERE_MEET_PARTNER":
      return WalletBackup_Recovery_QuestionEnum.WHERE_MEET_PARTNER;
    case 15:
    case "MOTHER_MAIDEN_NAME":
      return WalletBackup_Recovery_QuestionEnum.MOTHER_MAIDEN_NAME;
    case 16:
    case "MATERNAL_GRANDMOTHER_FULL_NAME":
      return WalletBackup_Recovery_QuestionEnum.MATERNAL_GRANDMOTHER_FULL_NAME;
    case 17:
    case "PARENTAL_GRANDMOTHER_FULL_NAME":
      return WalletBackup_Recovery_QuestionEnum.PARENTAL_GRANDMOTHER_FULL_NAME;
    case 18:
    case "NAME_OLDEST_COUSIN":
      return WalletBackup_Recovery_QuestionEnum.NAME_OLDEST_COUSIN;
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
    case WalletBackup_Recovery_QuestionEnum.FAVORITE_BOOK:
      return "FAVORITE_BOOK";
    case WalletBackup_Recovery_QuestionEnum.FIRST_PET:
      return "FIRST_PET";
    case WalletBackup_Recovery_QuestionEnum.WHERE_HIGH_SCHOOL_COLLEGE:
      return "WHERE_HIGH_SCHOOL_COLLEGE";
    case WalletBackup_Recovery_QuestionEnum.CITY_OF_BIRTH:
      return "CITY_OF_BIRTH";
    case WalletBackup_Recovery_QuestionEnum.FAVORITE_CHILDHOOD_FRIEND:
      return "FAVORITE_CHILDHOOD_FRIEND";
    case WalletBackup_Recovery_QuestionEnum.WHERE_FATHER_AND_MOTHER_MET:
      return "WHERE_FATHER_AND_MOTHER_MET";
    case WalletBackup_Recovery_QuestionEnum.FAVORITE_MOVIE:
      return "FAVORITE_MOVIE";
    case WalletBackup_Recovery_QuestionEnum.FAVORITE_SPORT_HIGH_SCHOOL:
      return "FAVORITE_SPORT_HIGH_SCHOOL";
    case WalletBackup_Recovery_QuestionEnum.FAVORITE_TEACHER_HIGH_SCHOOL:
      return "FAVORITE_TEACHER_HIGH_SCHOOL";
    case WalletBackup_Recovery_QuestionEnum.FAVORITE_BAND:
      return "FAVORITE_BAND";
    case WalletBackup_Recovery_QuestionEnum.CHILDHOOD_SPORTS_HERO:
      return "CHILDHOOD_SPORTS_HERO";
    case WalletBackup_Recovery_QuestionEnum.COMPANY_FIRST_JOB:
      return "COMPANY_FIRST_JOB";
    case WalletBackup_Recovery_QuestionEnum.CHILD_NICKNAME:
      return "CHILD_NICKNAME";
    case WalletBackup_Recovery_QuestionEnum.NAME_FIRST_PARTNER:
      return "NAME_FIRST_PARTNER";
    case WalletBackup_Recovery_QuestionEnum.WHERE_MEET_PARTNER:
      return "WHERE_MEET_PARTNER";
    case WalletBackup_Recovery_QuestionEnum.MOTHER_MAIDEN_NAME:
      return "MOTHER_MAIDEN_NAME";
    case WalletBackup_Recovery_QuestionEnum.MATERNAL_GRANDMOTHER_FULL_NAME:
      return "MATERNAL_GRANDMOTHER_FULL_NAME";
    case WalletBackup_Recovery_QuestionEnum.PARENTAL_GRANDMOTHER_FULL_NAME:
      return "PARENTAL_GRANDMOTHER_FULL_NAME";
    case WalletBackup_Recovery_QuestionEnum.NAME_OLDEST_COUSIN:
      return "NAME_OLDEST_COUSIN";
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
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Number(object.timestamp)
        : 0;
    message.wallet =
      object.wallet !== undefined && object.wallet !== null
        ? Wallet.fromJSON(object.wallet)
        : undefined;
    message.passphraseRecovery =
      object.passphraseRecovery !== undefined &&
      object.passphraseRecovery !== null
        ? WalletBackup_Recovery.fromJSON(object.passphraseRecovery)
        : undefined;
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

  fromPartial<I extends Exact<DeepPartial<WalletBackup>, I>>(
    object: I
  ): WalletBackup {
    const message = { ...baseWalletBackup } as WalletBackup;
    message.name = object.name ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.wallet =
      object.wallet !== undefined && object.wallet !== null
        ? Wallet.fromPartial(object.wallet)
        : undefined;
    message.passphraseRecovery =
      object.passphraseRecovery !== undefined &&
      object.passphraseRecovery !== null
        ? WalletBackup_Recovery.fromPartial(object.passphraseRecovery)
        : undefined;
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
    message.questionIds = (object.questionIds ?? []).map((e: any) =>
      walletBackup_Recovery_QuestionEnumFromJSON(e)
    );
    message.encryptedPassphrase =
      object.encryptedPassphrase !== undefined &&
      object.encryptedPassphrase !== null
        ? bytesFromBase64(object.encryptedPassphrase)
        : new Uint8Array();
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

  fromPartial<I extends Exact<DeepPartial<WalletBackup_Recovery>, I>>(
    object: I
  ): WalletBackup_Recovery {
    const message = { ...baseWalletBackup_Recovery } as WalletBackup_Recovery;
    message.questionIds = object.questionIds?.map((e) => e) || [];
    message.encryptedPassphrase =
      object.encryptedPassphrase ?? new Uint8Array();
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
