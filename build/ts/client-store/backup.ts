/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "dvote.types.v1";

export interface AccountBackup {
  questions: AccountBackup_Questions[];
  auth: AccountBackup_Auth;
  key: Uint8Array;
  alias: string;
}

export enum AccountBackup_Questions {
  STUFFED_TOY = 0,
  FAVORITE_TEACHER = 1,
  DRIVING_INSTRUCTOR = 2,
  FIRST_KISSED = 3,
  CHILDHOOD_NICKNAME = 4,
  UNRECOGNIZED = -1,
}

export function accountBackup_QuestionsFromJSON(
  object: any
): AccountBackup_Questions {
  switch (object) {
    case 0:
    case "STUFFED_TOY":
      return AccountBackup_Questions.STUFFED_TOY;
    case 1:
    case "FAVORITE_TEACHER":
      return AccountBackup_Questions.FAVORITE_TEACHER;
    case 2:
    case "DRIVING_INSTRUCTOR":
      return AccountBackup_Questions.DRIVING_INSTRUCTOR;
    case 3:
    case "FIRST_KISSED":
      return AccountBackup_Questions.FIRST_KISSED;
    case 4:
    case "CHILDHOOD_NICKNAME":
      return AccountBackup_Questions.CHILDHOOD_NICKNAME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountBackup_Questions.UNRECOGNIZED;
  }
}

export function accountBackup_QuestionsToJSON(
  object: AccountBackup_Questions
): string {
  switch (object) {
    case AccountBackup_Questions.STUFFED_TOY:
      return "STUFFED_TOY";
    case AccountBackup_Questions.FAVORITE_TEACHER:
      return "FAVORITE_TEACHER";
    case AccountBackup_Questions.DRIVING_INSTRUCTOR:
      return "DRIVING_INSTRUCTOR";
    case AccountBackup_Questions.FIRST_KISSED:
      return "FIRST_KISSED";
    case AccountBackup_Questions.CHILDHOOD_NICKNAME:
      return "CHILDHOOD_NICKNAME";
    default:
      return "UNKNOWN";
  }
}

export enum AccountBackup_Auth {
  PIN = 0,
  PASS = 1,
  UNRECOGNIZED = -1,
}

export function accountBackup_AuthFromJSON(object: any): AccountBackup_Auth {
  switch (object) {
    case 0:
    case "PIN":
      return AccountBackup_Auth.PIN;
    case 1:
    case "PASS":
      return AccountBackup_Auth.PASS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountBackup_Auth.UNRECOGNIZED;
  }
}

export function accountBackup_AuthToJSON(object: AccountBackup_Auth): string {
  switch (object) {
    case AccountBackup_Auth.PIN:
      return "PIN";
    case AccountBackup_Auth.PASS:
      return "PASS";
    default:
      return "UNKNOWN";
  }
}

const baseAccountBackup: object = { questions: 0, auth: 0, alias: "" };

export const AccountBackup = {
  encode(message: AccountBackup, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).fork();
    for (const v of message.questions) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.auth !== 0) {
      writer.uint32(16).int32(message.auth);
    }
    if (message.key.length !== 0) {
      writer.uint32(26).bytes(message.key);
    }
    if (message.alias !== "") {
      writer.uint32(34).string(message.alias);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AccountBackup {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountBackup } as AccountBackup;
    message.questions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.questions.push(reader.int32() as any);
            }
          } else {
            message.questions.push(reader.int32() as any);
          }
          break;
        case 2:
          message.auth = reader.int32() as any;
          break;
        case 3:
          message.key = reader.bytes();
          break;
        case 4:
          message.alias = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountBackup {
    const message = { ...baseAccountBackup } as AccountBackup;
    message.questions = [];
    if (object.questions !== undefined && object.questions !== null) {
      for (const e of object.questions) {
        message.questions.push(accountBackup_QuestionsFromJSON(e));
      }
    }
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = accountBackup_AuthFromJSON(object.auth);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = String(object.alias);
    }
    return message;
  },

  toJSON(message: AccountBackup): unknown {
    const obj: any = {};
    if (message.questions) {
      obj.questions = message.questions.map((e) =>
        accountBackup_QuestionsToJSON(e)
      );
    } else {
      obj.questions = [];
    }
    message.auth !== undefined &&
      (obj.auth = accountBackup_AuthToJSON(message.auth));
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    message.alias !== undefined && (obj.alias = message.alias);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountBackup>): AccountBackup {
    const message = { ...baseAccountBackup } as AccountBackup;
    message.questions = [];
    if (object.questions !== undefined && object.questions !== null) {
      for (const e of object.questions) {
        message.questions.push(e);
      }
    }
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = object.auth;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = object.alias;
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
