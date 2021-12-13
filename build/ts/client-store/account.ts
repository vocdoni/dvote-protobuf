/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import { Wallet } from "../client-store/wallet";
import { EntityReference } from "../metadata/entity";

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
  /** / Subscribed entities */
  entities: EntityReference[];
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

const baseAccountsStore: object = {};

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
    const message = { ...baseAccountsStore } as AccountsStore;
    message.items = [];
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
    const message = { ...baseAccountsStore } as AccountsStore;
    message.items = (object.items ?? []).map((e: any) => Account.fromJSON(e));
    return message;
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
    const message = { ...baseAccountsStore } as AccountsStore;
    message.items = object.items?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

const baseAccount: object = { name: "", address: "", hasBackup: false };

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
    const message = { ...baseAccount } as Account;
    message.meta = {};
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
    const message = { ...baseAccount } as Account;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.wallet =
      object.wallet !== undefined && object.wallet !== null
        ? Wallet.fromJSON(object.wallet)
        : undefined;
    message.address =
      object.address !== undefined && object.address !== null
        ? String(object.address)
        : "";
    message.hasBackup =
      object.hasBackup !== undefined && object.hasBackup !== null
        ? Boolean(object.hasBackup)
        : false;
    message.extra =
      object.extra !== undefined && object.extra !== null
        ? Account_Extra.fromJSON(object.extra)
        : undefined;
    message.meta = Object.entries(object.meta ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
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
    const message = { ...baseAccount } as Account;
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

const baseAccount_AppVoter: object = { appAnalyticsID: "" };

export const Account_AppVoter = {
  encode(message: Account_AppVoter, writer: Writer = Writer.create()): Writer {
    if (message.appAnalyticsID !== "") {
      writer.uint32(10).string(message.appAnalyticsID);
    }
    for (const v of message.entities) {
      EntityReference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Account_AppVoter {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccount_AppVoter } as Account_AppVoter;
    message.entities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appAnalyticsID = reader.string();
          break;
        case 2:
          message.entities.push(
            EntityReference.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account_AppVoter {
    const message = { ...baseAccount_AppVoter } as Account_AppVoter;
    message.appAnalyticsID =
      object.appAnalyticsID !== undefined && object.appAnalyticsID !== null
        ? String(object.appAnalyticsID)
        : "";
    message.entities = (object.entities ?? []).map((e: any) =>
      EntityReference.fromJSON(e)
    );
    return message;
  },

  toJSON(message: Account_AppVoter): unknown {
    const obj: any = {};
    message.appAnalyticsID !== undefined &&
      (obj.appAnalyticsID = message.appAnalyticsID);
    if (message.entities) {
      obj.entities = message.entities.map((e) =>
        e ? EntityReference.toJSON(e) : undefined
      );
    } else {
      obj.entities = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Account_AppVoter>, I>>(
    object: I
  ): Account_AppVoter {
    const message = { ...baseAccount_AppVoter } as Account_AppVoter;
    message.appAnalyticsID = object.appAnalyticsID ?? "";
    message.entities =
      object.entities?.map((e) => EntityReference.fromPartial(e)) || [];
    return message;
  },
};

const baseAccount_WebEntity: object = { webAnalyticsID: "" };

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
    const message = { ...baseAccount_WebEntity } as Account_WebEntity;
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
    const message = { ...baseAccount_WebEntity } as Account_WebEntity;
    message.webAnalyticsID =
      object.webAnalyticsID !== undefined && object.webAnalyticsID !== null
        ? String(object.webAnalyticsID)
        : "";
    return message;
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
    const message = { ...baseAccount_WebEntity } as Account_WebEntity;
    message.webAnalyticsID = object.webAnalyticsID ?? "";
    return message;
  },
};

const baseAccount_Extra: object = {};

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
    const message = { ...baseAccount_Extra } as Account_Extra;
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
    const message = { ...baseAccount_Extra } as Account_Extra;
    if (object.appVoter !== undefined && object.appVoter !== null) {
      message.content = {
        $case: "appVoter",
        appVoter: Account_AppVoter.fromJSON(object.appVoter),
      };
    }
    if (object.webEntity !== undefined && object.webEntity !== null) {
      message.content = {
        $case: "webEntity",
        webEntity: Account_WebEntity.fromJSON(object.webEntity),
      };
    }
    return message;
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
    const message = { ...baseAccount_Extra } as Account_Extra;
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

const baseAccount_MetaEntry: object = { key: "", value: "" };

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
    const message = { ...baseAccount_MetaEntry } as Account_MetaEntry;
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
    const message = { ...baseAccount_MetaEntry } as Account_MetaEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
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
    const message = { ...baseAccount_MetaEntry } as Account_MetaEntry;
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
