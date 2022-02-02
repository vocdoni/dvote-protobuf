/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "dvote.types.v1";

/** Helper to serialize and store all cached data */
export interface EntityMetadataStore {
  items: EntityMetadata[];
}

/**
 * The metadata of an entity
 * https://vocdoni.io/docs/#/architecture/components/entity?id=json-schema
 */
export interface EntityMetadata {
  /** OWN FIELDS */
  version: string;
  languages: string[];
  /** locale-aware value */
  name: { [key: string]: string };
  /** locale-aware value */
  description: { [key: string]: string };
  votingProcesses: EntityMetadata_VotingProcesses | undefined;
  /** locale-aware value */
  newsFeed: { [key: string]: string };
  media: EntityMetadata_Media | undefined;
  actions: EntityMetadata_Action[];
  bootEntities: EntityReference[];
  fallbackBootNodeEntities: EntityReference[];
  trustedEntities: EntityReference[];
  censusServiceManagedEntities: EntityReference[];
  /**
   * EXTERNAL FIELDS
   * Allow to use arbitrary key/values so that
   * entities can be organized by custom values.
   */
  meta: { [key: string]: string };
}

export interface EntityMetadata_NameEntry {
  key: string;
  value: string;
}

export interface EntityMetadata_DescriptionEntry {
  key: string;
  value: string;
}

export interface EntityMetadata_VotingProcesses {
  active: string[];
  ended: string[];
}

export interface EntityMetadata_NewsFeedEntry {
  key: string;
  value: string;
}

export interface EntityMetadata_Media {
  avatar: string;
  header: string;
}

/**
 * See entity actions definition
 * https://vocdoni.io/docs/#/architecture/components/entity?id=entity-actions
 */
export interface EntityMetadata_Action {
  type: string;
  actionKey: string;
  /** locale-aware value */
  name: { [key: string]: string };
  /** A URL or "true" */
  visible: string;
  /** type = register / browser / submitMedia */
  url: string;
  imageSources: EntityMetadata_Action_ImageSource[];
}

export interface EntityMetadata_Action_NameEntry {
  key: string;
  value: string;
}

/** type = submitMedia */
export interface EntityMetadata_Action_ImageSource {
  type: string;
  name: string;
  orientation: string;
  overlay: string;
  /** locale-aware value */
  caption: { [key: string]: string };
}

export interface EntityMetadata_Action_ImageSource_CaptionEntry {
  key: string;
  value: string;
}

export interface EntityMetadata_MetaEntry {
  key: string;
  value: string;
}

/** Pointer to the place where the metadata of an Entity can be fetched */
export interface EntityReference {
  entityId: string;
  /** Web3 */
  entryPoints: string[];
}

function createBaseEntityMetadataStore(): EntityMetadataStore {
  return { items: [] };
}

export const EntityMetadataStore = {
  encode(
    message: EntityMetadataStore,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      EntityMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EntityMetadataStore {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadataStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(EntityMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityMetadataStore {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => EntityMetadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EntityMetadataStore): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? EntityMetadata.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityMetadataStore>, I>>(
    object: I
  ): EntityMetadataStore {
    const message = createBaseEntityMetadataStore();
    message.items =
      object.items?.map((e) => EntityMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEntityMetadata(): EntityMetadata {
  return {
    version: "",
    languages: [],
    name: {},
    description: {},
    votingProcesses: undefined,
    newsFeed: {},
    media: undefined,
    actions: [],
    bootEntities: [],
    fallbackBootNodeEntities: [],
    trustedEntities: [],
    censusServiceManagedEntities: [],
    meta: {},
  };
}

export const EntityMetadata = {
  encode(message: EntityMetadata, writer: Writer = Writer.create()): Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    for (const v of message.languages) {
      writer.uint32(18).string(v!);
    }
    Object.entries(message.name).forEach(([key, value]) => {
      EntityMetadata_NameEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    Object.entries(message.description).forEach(([key, value]) => {
      EntityMetadata_DescriptionEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    if (message.votingProcesses !== undefined) {
      EntityMetadata_VotingProcesses.encode(
        message.votingProcesses,
        writer.uint32(42).fork()
      ).ldelim();
    }
    Object.entries(message.newsFeed).forEach(([key, value]) => {
      EntityMetadata_NewsFeedEntry.encode(
        { key: key as any, value },
        writer.uint32(50).fork()
      ).ldelim();
    });
    if (message.media !== undefined) {
      EntityMetadata_Media.encode(
        message.media,
        writer.uint32(58).fork()
      ).ldelim();
    }
    for (const v of message.actions) {
      EntityMetadata_Action.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.bootEntities) {
      EntityReference.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.fallbackBootNodeEntities) {
      EntityReference.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.trustedEntities) {
      EntityReference.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.censusServiceManagedEntities) {
      EntityReference.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    Object.entries(message.meta).forEach(([key, value]) => {
      EntityMetadata_MetaEntry.encode(
        { key: key as any, value },
        writer.uint32(802).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EntityMetadata {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.languages.push(reader.string());
          break;
        case 3:
          const entry3 = EntityMetadata_NameEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.name[entry3.key] = entry3.value;
          }
          break;
        case 4:
          const entry4 = EntityMetadata_DescriptionEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.description[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.votingProcesses = EntityMetadata_VotingProcesses.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          const entry6 = EntityMetadata_NewsFeedEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry6.value !== undefined) {
            message.newsFeed[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.media = EntityMetadata_Media.decode(reader, reader.uint32());
          break;
        case 8:
          message.actions.push(
            EntityMetadata_Action.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.bootEntities.push(
            EntityReference.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.fallbackBootNodeEntities.push(
            EntityReference.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.trustedEntities.push(
            EntityReference.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.censusServiceManagedEntities.push(
            EntityReference.decode(reader, reader.uint32())
          );
          break;
        case 100:
          const entry100 = EntityMetadata_MetaEntry.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): EntityMetadata {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      languages: Array.isArray(object?.languages)
        ? object.languages.map((e: any) => String(e))
        : [],
      name: isObject(object.name)
        ? Object.entries(object.name).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
      description: isObject(object.description)
        ? Object.entries(object.description).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
      votingProcesses: isSet(object.votingProcesses)
        ? EntityMetadata_VotingProcesses.fromJSON(object.votingProcesses)
        : undefined,
      newsFeed: isObject(object.newsFeed)
        ? Object.entries(object.newsFeed).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
      media: isSet(object.media)
        ? EntityMetadata_Media.fromJSON(object.media)
        : undefined,
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => EntityMetadata_Action.fromJSON(e))
        : [],
      bootEntities: Array.isArray(object?.bootEntities)
        ? object.bootEntities.map((e: any) => EntityReference.fromJSON(e))
        : [],
      fallbackBootNodeEntities: Array.isArray(object?.fallbackBootNodeEntities)
        ? object.fallbackBootNodeEntities.map((e: any) =>
            EntityReference.fromJSON(e)
          )
        : [],
      trustedEntities: Array.isArray(object?.trustedEntities)
        ? object.trustedEntities.map((e: any) => EntityReference.fromJSON(e))
        : [],
      censusServiceManagedEntities: Array.isArray(
        object?.censusServiceManagedEntities
      )
        ? object.censusServiceManagedEntities.map((e: any) =>
            EntityReference.fromJSON(e)
          )
        : [],
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

  toJSON(message: EntityMetadata): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    if (message.languages) {
      obj.languages = message.languages.map((e) => e);
    } else {
      obj.languages = [];
    }
    obj.name = {};
    if (message.name) {
      Object.entries(message.name).forEach(([k, v]) => {
        obj.name[k] = v;
      });
    }
    obj.description = {};
    if (message.description) {
      Object.entries(message.description).forEach(([k, v]) => {
        obj.description[k] = v;
      });
    }
    message.votingProcesses !== undefined &&
      (obj.votingProcesses = message.votingProcesses
        ? EntityMetadata_VotingProcesses.toJSON(message.votingProcesses)
        : undefined);
    obj.newsFeed = {};
    if (message.newsFeed) {
      Object.entries(message.newsFeed).forEach(([k, v]) => {
        obj.newsFeed[k] = v;
      });
    }
    message.media !== undefined &&
      (obj.media = message.media
        ? EntityMetadata_Media.toJSON(message.media)
        : undefined);
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? EntityMetadata_Action.toJSON(e) : undefined
      );
    } else {
      obj.actions = [];
    }
    if (message.bootEntities) {
      obj.bootEntities = message.bootEntities.map((e) =>
        e ? EntityReference.toJSON(e) : undefined
      );
    } else {
      obj.bootEntities = [];
    }
    if (message.fallbackBootNodeEntities) {
      obj.fallbackBootNodeEntities = message.fallbackBootNodeEntities.map((e) =>
        e ? EntityReference.toJSON(e) : undefined
      );
    } else {
      obj.fallbackBootNodeEntities = [];
    }
    if (message.trustedEntities) {
      obj.trustedEntities = message.trustedEntities.map((e) =>
        e ? EntityReference.toJSON(e) : undefined
      );
    } else {
      obj.trustedEntities = [];
    }
    if (message.censusServiceManagedEntities) {
      obj.censusServiceManagedEntities =
        message.censusServiceManagedEntities.map((e) =>
          e ? EntityReference.toJSON(e) : undefined
        );
    } else {
      obj.censusServiceManagedEntities = [];
    }
    obj.meta = {};
    if (message.meta) {
      Object.entries(message.meta).forEach(([k, v]) => {
        obj.meta[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityMetadata>, I>>(
    object: I
  ): EntityMetadata {
    const message = createBaseEntityMetadata();
    message.version = object.version ?? "";
    message.languages = object.languages?.map((e) => e) || [];
    message.name = Object.entries(object.name ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.description = Object.entries(object.description ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.votingProcesses =
      object.votingProcesses !== undefined && object.votingProcesses !== null
        ? EntityMetadata_VotingProcesses.fromPartial(object.votingProcesses)
        : undefined;
    message.newsFeed = Object.entries(object.newsFeed ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.media =
      object.media !== undefined && object.media !== null
        ? EntityMetadata_Media.fromPartial(object.media)
        : undefined;
    message.actions =
      object.actions?.map((e) => EntityMetadata_Action.fromPartial(e)) || [];
    message.bootEntities =
      object.bootEntities?.map((e) => EntityReference.fromPartial(e)) || [];
    message.fallbackBootNodeEntities =
      object.fallbackBootNodeEntities?.map((e) =>
        EntityReference.fromPartial(e)
      ) || [];
    message.trustedEntities =
      object.trustedEntities?.map((e) => EntityReference.fromPartial(e)) || [];
    message.censusServiceManagedEntities =
      object.censusServiceManagedEntities?.map((e) =>
        EntityReference.fromPartial(e)
      ) || [];
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

function createBaseEntityMetadata_NameEntry(): EntityMetadata_NameEntry {
  return { key: "", value: "" };
}

export const EntityMetadata_NameEntry = {
  encode(
    message: EntityMetadata_NameEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EntityMetadata_NameEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata_NameEntry();
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

  fromJSON(object: any): EntityMetadata_NameEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: EntityMetadata_NameEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityMetadata_NameEntry>, I>>(
    object: I
  ): EntityMetadata_NameEntry {
    const message = createBaseEntityMetadata_NameEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseEntityMetadata_DescriptionEntry(): EntityMetadata_DescriptionEntry {
  return { key: "", value: "" };
}

export const EntityMetadata_DescriptionEntry = {
  encode(
    message: EntityMetadata_DescriptionEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EntityMetadata_DescriptionEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata_DescriptionEntry();
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

  fromJSON(object: any): EntityMetadata_DescriptionEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: EntityMetadata_DescriptionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityMetadata_DescriptionEntry>, I>>(
    object: I
  ): EntityMetadata_DescriptionEntry {
    const message = createBaseEntityMetadata_DescriptionEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseEntityMetadata_VotingProcesses(): EntityMetadata_VotingProcesses {
  return { active: [], ended: [] };
}

export const EntityMetadata_VotingProcesses = {
  encode(
    message: EntityMetadata_VotingProcesses,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.active) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.ended) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EntityMetadata_VotingProcesses {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata_VotingProcesses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active.push(reader.string());
          break;
        case 2:
          message.ended.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityMetadata_VotingProcesses {
    return {
      active: Array.isArray(object?.active)
        ? object.active.map((e: any) => String(e))
        : [],
      ended: Array.isArray(object?.ended)
        ? object.ended.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: EntityMetadata_VotingProcesses): unknown {
    const obj: any = {};
    if (message.active) {
      obj.active = message.active.map((e) => e);
    } else {
      obj.active = [];
    }
    if (message.ended) {
      obj.ended = message.ended.map((e) => e);
    } else {
      obj.ended = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityMetadata_VotingProcesses>, I>>(
    object: I
  ): EntityMetadata_VotingProcesses {
    const message = createBaseEntityMetadata_VotingProcesses();
    message.active = object.active?.map((e) => e) || [];
    message.ended = object.ended?.map((e) => e) || [];
    return message;
  },
};

function createBaseEntityMetadata_NewsFeedEntry(): EntityMetadata_NewsFeedEntry {
  return { key: "", value: "" };
}

export const EntityMetadata_NewsFeedEntry = {
  encode(
    message: EntityMetadata_NewsFeedEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EntityMetadata_NewsFeedEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata_NewsFeedEntry();
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

  fromJSON(object: any): EntityMetadata_NewsFeedEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: EntityMetadata_NewsFeedEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityMetadata_NewsFeedEntry>, I>>(
    object: I
  ): EntityMetadata_NewsFeedEntry {
    const message = createBaseEntityMetadata_NewsFeedEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseEntityMetadata_Media(): EntityMetadata_Media {
  return { avatar: "", header: "" };
}

export const EntityMetadata_Media = {
  encode(
    message: EntityMetadata_Media,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.avatar !== "") {
      writer.uint32(10).string(message.avatar);
    }
    if (message.header !== "") {
      writer.uint32(18).string(message.header);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EntityMetadata_Media {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata_Media();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.avatar = reader.string();
          break;
        case 2:
          message.header = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityMetadata_Media {
    return {
      avatar: isSet(object.avatar) ? String(object.avatar) : "",
      header: isSet(object.header) ? String(object.header) : "",
    };
  },

  toJSON(message: EntityMetadata_Media): unknown {
    const obj: any = {};
    message.avatar !== undefined && (obj.avatar = message.avatar);
    message.header !== undefined && (obj.header = message.header);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityMetadata_Media>, I>>(
    object: I
  ): EntityMetadata_Media {
    const message = createBaseEntityMetadata_Media();
    message.avatar = object.avatar ?? "";
    message.header = object.header ?? "";
    return message;
  },
};

function createBaseEntityMetadata_Action(): EntityMetadata_Action {
  return {
    type: "",
    actionKey: "",
    name: {},
    visible: "",
    url: "",
    imageSources: [],
  };
}

export const EntityMetadata_Action = {
  encode(
    message: EntityMetadata_Action,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.actionKey !== "") {
      writer.uint32(58).string(message.actionKey);
    }
    Object.entries(message.name).forEach(([key, value]) => {
      EntityMetadata_Action_NameEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    if (message.visible !== "") {
      writer.uint32(26).string(message.visible);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    for (const v of message.imageSources) {
      EntityMetadata_Action_ImageSource.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EntityMetadata_Action {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata_Action();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 7:
          message.actionKey = reader.string();
          break;
        case 2:
          const entry2 = EntityMetadata_Action_NameEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.name[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.visible = reader.string();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.imageSources.push(
            EntityMetadata_Action_ImageSource.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityMetadata_Action {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      actionKey: isSet(object.actionKey) ? String(object.actionKey) : "",
      name: isObject(object.name)
        ? Object.entries(object.name).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
      visible: isSet(object.visible) ? String(object.visible) : "",
      url: isSet(object.url) ? String(object.url) : "",
      imageSources: Array.isArray(object?.imageSources)
        ? object.imageSources.map((e: any) =>
            EntityMetadata_Action_ImageSource.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: EntityMetadata_Action): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.actionKey !== undefined && (obj.actionKey = message.actionKey);
    obj.name = {};
    if (message.name) {
      Object.entries(message.name).forEach(([k, v]) => {
        obj.name[k] = v;
      });
    }
    message.visible !== undefined && (obj.visible = message.visible);
    message.url !== undefined && (obj.url = message.url);
    if (message.imageSources) {
      obj.imageSources = message.imageSources.map((e) =>
        e ? EntityMetadata_Action_ImageSource.toJSON(e) : undefined
      );
    } else {
      obj.imageSources = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityMetadata_Action>, I>>(
    object: I
  ): EntityMetadata_Action {
    const message = createBaseEntityMetadata_Action();
    message.type = object.type ?? "";
    message.actionKey = object.actionKey ?? "";
    message.name = Object.entries(object.name ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.visible = object.visible ?? "";
    message.url = object.url ?? "";
    message.imageSources =
      object.imageSources?.map((e) =>
        EntityMetadata_Action_ImageSource.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseEntityMetadata_Action_NameEntry(): EntityMetadata_Action_NameEntry {
  return { key: "", value: "" };
}

export const EntityMetadata_Action_NameEntry = {
  encode(
    message: EntityMetadata_Action_NameEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EntityMetadata_Action_NameEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata_Action_NameEntry();
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

  fromJSON(object: any): EntityMetadata_Action_NameEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: EntityMetadata_Action_NameEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityMetadata_Action_NameEntry>, I>>(
    object: I
  ): EntityMetadata_Action_NameEntry {
    const message = createBaseEntityMetadata_Action_NameEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseEntityMetadata_Action_ImageSource(): EntityMetadata_Action_ImageSource {
  return { type: "", name: "", orientation: "", overlay: "", caption: {} };
}

export const EntityMetadata_Action_ImageSource = {
  encode(
    message: EntityMetadata_Action_ImageSource,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.orientation !== "") {
      writer.uint32(26).string(message.orientation);
    }
    if (message.overlay !== "") {
      writer.uint32(34).string(message.overlay);
    }
    Object.entries(message.caption).forEach(([key, value]) => {
      EntityMetadata_Action_ImageSource_CaptionEntry.encode(
        { key: key as any, value },
        writer.uint32(42).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EntityMetadata_Action_ImageSource {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata_Action_ImageSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.orientation = reader.string();
          break;
        case 4:
          message.overlay = reader.string();
          break;
        case 5:
          const entry5 = EntityMetadata_Action_ImageSource_CaptionEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry5.value !== undefined) {
            message.caption[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityMetadata_Action_ImageSource {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      name: isSet(object.name) ? String(object.name) : "",
      orientation: isSet(object.orientation) ? String(object.orientation) : "",
      overlay: isSet(object.overlay) ? String(object.overlay) : "",
      caption: isObject(object.caption)
        ? Object.entries(object.caption).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: EntityMetadata_Action_ImageSource): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.name !== undefined && (obj.name = message.name);
    message.orientation !== undefined &&
      (obj.orientation = message.orientation);
    message.overlay !== undefined && (obj.overlay = message.overlay);
    obj.caption = {};
    if (message.caption) {
      Object.entries(message.caption).forEach(([k, v]) => {
        obj.caption[k] = v;
      });
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<EntityMetadata_Action_ImageSource>, I>
  >(object: I): EntityMetadata_Action_ImageSource {
    const message = createBaseEntityMetadata_Action_ImageSource();
    message.type = object.type ?? "";
    message.name = object.name ?? "";
    message.orientation = object.orientation ?? "";
    message.overlay = object.overlay ?? "";
    message.caption = Object.entries(object.caption ?? {}).reduce<{
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

function createBaseEntityMetadata_Action_ImageSource_CaptionEntry(): EntityMetadata_Action_ImageSource_CaptionEntry {
  return { key: "", value: "" };
}

export const EntityMetadata_Action_ImageSource_CaptionEntry = {
  encode(
    message: EntityMetadata_Action_ImageSource_CaptionEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EntityMetadata_Action_ImageSource_CaptionEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata_Action_ImageSource_CaptionEntry();
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

  fromJSON(object: any): EntityMetadata_Action_ImageSource_CaptionEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: EntityMetadata_Action_ImageSource_CaptionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<EntityMetadata_Action_ImageSource_CaptionEntry>,
      I
    >
  >(object: I): EntityMetadata_Action_ImageSource_CaptionEntry {
    const message = createBaseEntityMetadata_Action_ImageSource_CaptionEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseEntityMetadata_MetaEntry(): EntityMetadata_MetaEntry {
  return { key: "", value: "" };
}

export const EntityMetadata_MetaEntry = {
  encode(
    message: EntityMetadata_MetaEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EntityMetadata_MetaEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityMetadata_MetaEntry();
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

  fromJSON(object: any): EntityMetadata_MetaEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: EntityMetadata_MetaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityMetadata_MetaEntry>, I>>(
    object: I
  ): EntityMetadata_MetaEntry {
    const message = createBaseEntityMetadata_MetaEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseEntityReference(): EntityReference {
  return { entityId: "", entryPoints: [] };
}

export const EntityReference = {
  encode(message: EntityReference, writer: Writer = Writer.create()): Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    for (const v of message.entryPoints) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EntityReference {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        case 2:
          message.entryPoints.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityReference {
    return {
      entityId: isSet(object.entityId) ? String(object.entityId) : "",
      entryPoints: Array.isArray(object?.entryPoints)
        ? object.entryPoints.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: EntityReference): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entityId = message.entityId);
    if (message.entryPoints) {
      obj.entryPoints = message.entryPoints.map((e) => e);
    } else {
      obj.entryPoints = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EntityReference>, I>>(
    object: I
  ): EntityReference {
    const message = createBaseEntityReference();
    message.entityId = object.entityId ?? "";
    message.entryPoints = object.entryPoints?.map((e) => e) || [];
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
