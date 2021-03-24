/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "dvote.types.v1";

export interface AccountBackup {
  version: string;
  questions: AccountBackup_Questions[];
  auth: AccountBackup_Auth;
  key: Uint8Array;
}

export enum AccountBackup_Questions {
  EMPTY = 0,
  /**
   * DRIVING_INSTRUCTOR - STUFFED_TOY = 1;
   * FAVORITE_TEACHER = 2;
   */
  DRIVING_INSTRUCTOR = 3,
  FIRST_KISSED = 4,
  CHILDHOOD_NICKNAME = 5,
  UNRECOGNIZED = -1,
}

export function accountBackup_QuestionsFromJSON(
  object: any
): AccountBackup_Questions {
  switch (object) {
    case 0:
    case "EMPTY":
      return AccountBackup_Questions.EMPTY;
    case 3:
    case "DRIVING_INSTRUCTOR":
      return AccountBackup_Questions.DRIVING_INSTRUCTOR;
    case 4:
    case "FIRST_KISSED":
      return AccountBackup_Questions.FIRST_KISSED;
    case 5:
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
    case AccountBackup_Questions.EMPTY:
      return "EMPTY";
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

export enum AccountBackup_DeprecatedQuestions {
  EMPTY_DEPRECATED = 0,
  STUFFED_TOY = 1,
  FAVORITE_TEACHER = 2,
  UNRECOGNIZED = -1,
}

export function accountBackup_DeprecatedQuestionsFromJSON(
  object: any
): AccountBackup_DeprecatedQuestions {
  switch (object) {
    case 0:
    case "EMPTY_DEPRECATED":
      return AccountBackup_DeprecatedQuestions.EMPTY_DEPRECATED;
    case 1:
    case "STUFFED_TOY":
      return AccountBackup_DeprecatedQuestions.STUFFED_TOY;
    case 2:
    case "FAVORITE_TEACHER":
      return AccountBackup_DeprecatedQuestions.FAVORITE_TEACHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountBackup_DeprecatedQuestions.UNRECOGNIZED;
  }
}

export function accountBackup_DeprecatedQuestionsToJSON(
  object: AccountBackup_DeprecatedQuestions
): string {
  switch (object) {
    case AccountBackup_DeprecatedQuestions.EMPTY_DEPRECATED:
      return "EMPTY_DEPRECATED";
    case AccountBackup_DeprecatedQuestions.STUFFED_TOY:
      return "STUFFED_TOY";
    case AccountBackup_DeprecatedQuestions.FAVORITE_TEACHER:
      return "FAVORITE_TEACHER";
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

const baseAccountBackup: object = { version: "", questions: 0, auth: 0 };

export const AccountBackup = {
  encode(message: AccountBackup, writer: Writer = Writer.create()): Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    writer.uint32(18).fork();
    for (const v of message.questions) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.auth !== 0) {
      writer.uint32(24).int32(message.auth);
    }
    if (message.key.length !== 0) {
      writer.uint32(34).bytes(message.key);
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
          message.version = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.questions.push(reader.int32() as any);
            }
          } else {
            message.questions.push(reader.int32() as any);
          }
          break;
        case 3:
          message.auth = reader.int32() as any;
          break;
        case 4:
          message.key = reader.bytes();
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
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    }
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
    return message;
  },

  toJSON(message: AccountBackup): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
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
    return obj;
  },

  fromPartial(object: DeepPartial<AccountBackup>): AccountBackup {
    const message = { ...baseAccountBackup } as AccountBackup;
    message.questions = [];
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
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
