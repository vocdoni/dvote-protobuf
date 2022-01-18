/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Wallet } from "../client-store/wallet";

export const protobufPackage = "dvote.types.v1";

/** / Helper to serialize and store a list of entries at once */
export interface AccountsStore {
  items: Account[];
}

/** / An account, containing the credentials and info of both entities and app voters */
export interface Account {
  /** / The name of the entity or an alias to help users identify the account */
  name: string;
  /** / The underlying root wallet, usable with the original passphrase or pin */
  wallet: Wallet | undefined;
  /** / The root address of the wallet, used to detect duplicate accounts */
  address: string;
  /** / Does the user have a back up of the account? */
  hasBackup: boolean;
  extra: Account_Extra | undefined;
  /**
   * EXTERNAL FIELDS
   * Allow to use arbitrary key/values so that
   * identities can be organized by custom values.
   */
  meta: { [key: string]: string };
}

export interface Account_AppVoter {
  /** / Random anonymized id for analytics */
  appAnalyticsID: string;
}

export interface Account_WebEntity {
  /** Random anonymized id for analytics */
  webAnalyticsID: string;
}

export interface Account_Extra {
  content?:
    | { $case: "appVoter"; appVoter: Account_AppVoter }
    | { $case: "webEntity"; webEntity: Account_WebEntity };
}

export interface Account_MetaEntry {
  key: string;
  value: string;
}

function createBaseAccountsStore(): AccountsStore {
  return { items: [] };
}

export const AccountsStore = {
  encode(message: AccountsStore, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AccountsStore {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountsStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountsStore {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Account.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountsStore): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Account.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountsStore>, I>>(
    object: I
  ): AccountsStore {
    const message = createBaseAccountsStore();
    message.items = object.items?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccount(): Account {
  return {
    name: "",
    wallet: undefined,
    address: "",
    hasBackup: false,
    extra: undefined,
    meta: {},
  };
}

export const Account = {
  encode(message: Account, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.wallet !== undefined) {
      Wallet.encode(message.wallet, writer.uint32(18).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.hasBackup === true) {
      writer.uint32(32).bool(message.hasBackup);
    }
    if (message.extra !== undefined) {
      Account_Extra.encode(message.extra, writer.uint32(42).fork()).ldelim();
    }
    Object.entries(message.meta).forEach(([key, value]) => {
      Account_MetaEntry.encode(
        { key: key as any, value },
        writer.uint32(802).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.wallet = Wallet.decode(reader, reader.uint32());
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.hasBackup = reader.bool();
          break;
        case 5:
          message.extra = Account_Extra.decode(reader, reader.uint32());
          break;
        case 100:
          const entry100 = Account_MetaEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): Account {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      wallet: isSet(object.wallet) ? Wallet.fromJSON(object.wallet) : undefined,
      address: isSet(object.address) ? String(object.address) : "",
      hasBackup: isSet(object.hasBackup) ? Boolean(object.hasBackup) : false,
      extra: isSet(object.extra)
        ? Account_Extra.fromJSON(object.extra)
        : undefined,
      meta: isObject(object.meta)
        ? Object.entries(object.meta).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.wallet !== undefined &&
      (obj.wallet = message.wallet ? Wallet.toJSON(message.wallet) : undefined);
    message.address !== undefined && (obj.address = message.address);
    message.hasBackup !== undefined && (obj.hasBackup = message.hasBackup);
    message.extra !== undefined &&
      (obj.extra = message.extra
        ? Account_Extra.toJSON(message.extra)
        : undefined);
    obj.meta = {};
    if (message.meta) {
      Object.entries(message.meta).forEach(([k, v]) => {
        obj.meta[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Account>, I>>(object: I): Account {
    const message = createBaseAccount();
    message.name = object.name ?? "";
    message.wallet =
      object.wallet !== undefined && object.wallet !== null
        ? Wallet.fromPartial(object.wallet)
        : undefined;
    message.address = object.address ?? "";
    message.hasBackup = object.hasBackup ?? false;
    message.extra =
      object.extra !== undefined && object.extra !== null
        ? Account_Extra.fromPartial(object.extra)
        : undefined;
    message.meta = Object.entries(object.meta ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseAccount_AppVoter(): Account_AppVoter {
  return { appAnalyticsID: "" };
}

export const Account_AppVoter = {
  encode(message: Account_AppVoter, writer: Writer = Writer.create()): Writer {
    if (message.appAnalyticsID !== "") {
      writer.uint32(10).string(message.appAnalyticsID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Account_AppVoter {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount_AppVoter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appAnalyticsID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account_AppVoter {
    return {
      appAnalyticsID: isSet(object.appAnalyticsID)
        ? String(object.appAnalyticsID)
        : "",
    };
  },

  toJSON(message: Account_AppVoter): unknown {
    const obj: any = {};
    message.appAnalyticsID !== undefined &&
      (obj.appAnalyticsID = message.appAnalyticsID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Account_AppVoter>, I>>(
    object: I
  ): Account_AppVoter {
    const message = createBaseAccount_AppVoter();
    message.appAnalyticsID = object.appAnalyticsID ?? "";
    return message;
  },
};

function createBaseAccount_WebEntity(): Account_WebEntity {
  return { webAnalyticsID: "" };
}

export const Account_WebEntity = {
  encode(message: Account_WebEntity, writer: Writer = Writer.create()): Writer {
    if (message.webAnalyticsID !== "") {
      writer.uint32(10).string(message.webAnalyticsID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Account_WebEntity {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount_WebEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.webAnalyticsID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account_WebEntity {
    return {
      webAnalyticsID: isSet(object.webAnalyticsID)
        ? String(object.webAnalyticsID)
        : "",
    };
  },

  toJSON(message: Account_WebEntity): unknown {
    const obj: any = {};
    message.webAnalyticsID !== undefined &&
      (obj.webAnalyticsID = message.webAnalyticsID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Account_WebEntity>, I>>(
    object: I
  ): Account_WebEntity {
    const message = createBaseAccount_WebEntity();
    message.webAnalyticsID = object.webAnalyticsID ?? "";
    return message;
  },
};

function createBaseAccount_Extra(): Account_Extra {
  return { content: undefined };
}

export const Account_Extra = {
  encode(message: Account_Extra, writer: Writer = Writer.create()): Writer {
    if (message.content?.$case === "appVoter") {
      Account_AppVoter.encode(
        message.content.appVoter,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.content?.$case === "webEntity") {
      Account_WebEntity.encode(
        message.content.webEntity,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Account_Extra {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount_Extra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = {
            $case: "appVoter",
            appVoter: Account_AppVoter.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.content = {
            $case: "webEntity",
            webEntity: Account_WebEntity.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account_Extra {
    return {
      content: isSet(object.appVoter)
        ? {
            $case: "appVoter",
            appVoter: Account_AppVoter.fromJSON(object.appVoter),
          }
        : isSet(object.webEntity)
        ? {
            $case: "webEntity",
            webEntity: Account_WebEntity.fromJSON(object.webEntity),
          }
        : undefined,
    };
  },

  toJSON(message: Account_Extra): unknown {
    const obj: any = {};
    message.content?.$case === "appVoter" &&
      (obj.appVoter = message.content?.appVoter
        ? Account_AppVoter.toJSON(message.content?.appVoter)
        : undefined);
    message.content?.$case === "webEntity" &&
      (obj.webEntity = message.content?.webEntity
        ? Account_WebEntity.toJSON(message.content?.webEntity)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Account_Extra>, I>>(
    object: I
  ): Account_Extra {
    const message = createBaseAccount_Extra();
    if (
      object.content?.$case === "appVoter" &&
      object.content?.appVoter !== undefined &&
      object.content?.appVoter !== null
    ) {
      message.content = {
        $case: "appVoter",
        appVoter: Account_AppVoter.fromPartial(object.content.appVoter),
      };
    }
    if (
      object.content?.$case === "webEntity" &&
      object.content?.webEntity !== undefined &&
      object.content?.webEntity !== null
    ) {
      message.content = {
        $case: "webEntity",
        webEntity: Account_WebEntity.fromPartial(object.content.webEntity),
      };
    }
    return message;
  },
};

function createBaseAccount_MetaEntry(): Account_MetaEntry {
  return { key: "", value: "" };
}

export const Account_MetaEntry = {
  encode(message: Account_MetaEntry, writer: Writer = Writer.create()): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Account_MetaEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount_MetaEntry();
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

  fromJSON(object: any): Account_MetaEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Account_MetaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Account_MetaEntry>, I>>(
    object: I
  ): Account_MetaEntry {
    const message = createBaseAccount_MetaEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
