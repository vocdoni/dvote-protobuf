/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "dvote.types.v1";

export interface AccountRecovery {
  version: string;
  questions: string[];
  auth: string;
  key: string;
}

const baseAccountRecovery: object = {
  version: "",
  questions: "",
  auth: "",
  key: "",
};

export const AccountRecovery = {
  encode(message: AccountRecovery, writer: Writer = Writer.create()): Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    for (const v of message.questions) {
      writer.uint32(18).string(v!);
    }
    if (message.auth !== "") {
      writer.uint32(26).string(message.auth);
    }
    if (message.key !== "") {
      writer.uint32(34).string(message.key);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AccountRecovery {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountRecovery } as AccountRecovery;
    message.questions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.questions.push(reader.string());
          break;
        case 3:
          message.auth = reader.string();
          break;
        case 4:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountRecovery {
    const message = { ...baseAccountRecovery } as AccountRecovery;
    message.questions = [];
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    }
    if (object.questions !== undefined && object.questions !== null) {
      for (const e of object.questions) {
        message.questions.push(String(e));
      }
    }
    if (object.auth !== undefined && object.auth !== null) {
      message.auth = String(object.auth);
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    return message;
  },

  toJSON(message: AccountRecovery): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    if (message.questions) {
      obj.questions = message.questions.map((e) => e);
    } else {
      obj.questions = [];
    }
    message.auth !== undefined && (obj.auth = message.auth);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountRecovery>): AccountRecovery {
    const message = { ...baseAccountRecovery } as AccountRecovery;
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
