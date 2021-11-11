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

const baseEntityMetadataStore: object = {};

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
    const message = { ...baseEntityMetadataStore } as EntityMetadataStore;
    message.items = [];
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
    const message = { ...baseEntityMetadataStore } as EntityMetadataStore;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(EntityMetadata.fromJSON(e));
      }
    }
    return message;
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

  fromPartial(object: DeepPartial<EntityMetadataStore>): EntityMetadataStore {
    const message = { ...baseEntityMetadataStore } as EntityMetadataStore;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(EntityMetadata.fromPartial(e));
      }
    }
    return message;
  },
};

const baseEntityMetadata: object = { version: "", languages: "" };

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
    const message = { ...baseEntityMetadata } as EntityMetadata;
    message.languages = [];
    message.name = {};
    message.description = {};
    message.newsFeed = {};
    message.actions = [];
    message.bootEntities = [];
    message.fallbackBootNodeEntities = [];
    message.trustedEntities = [];
    message.censusServiceManagedEntities = [];
    message.meta = {};
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
    const message = { ...baseEntityMetadata } as EntityMetadata;
    message.languages = [];
    message.name = {};
    message.description = {};
    message.newsFeed = {};
    message.actions = [];
    message.bootEntities = [];
    message.fallbackBootNodeEntities = [];
    message.trustedEntities = [];
    message.censusServiceManagedEntities = [];
    message.meta = {};
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    }
    if (object.languages !== undefined && object.languages !== null) {
      for (const e of object.languages) {
        message.languages.push(String(e));
      }
    }
    if (object.name !== undefined && object.name !== null) {
      Object.entries(object.name).forEach(([key, value]) => {
        message.name[key] = String(value);
      });
    }
    if (object.description !== undefined && object.description !== null) {
      Object.entries(object.description).forEach(([key, value]) => {
        message.description[key] = String(value);
      });
    }
    if (
      object.votingProcesses !== undefined &&
      object.votingProcesses !== null
    ) {
      message.votingProcesses = EntityMetadata_VotingProcesses.fromJSON(
        object.votingProcesses
      );
    }
    if (object.newsFeed !== undefined && object.newsFeed !== null) {
      Object.entries(object.newsFeed).forEach(([key, value]) => {
        message.newsFeed[key] = String(value);
      });
    }
    if (object.media !== undefined && object.media !== null) {
      message.media = EntityMetadata_Media.fromJSON(object.media);
    }
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(EntityMetadata_Action.fromJSON(e));
      }
    }
    if (object.bootEntities !== undefined && object.bootEntities !== null) {
      for (const e of object.bootEntities) {
        message.bootEntities.push(EntityReference.fromJSON(e));
      }
    }
    if (
      object.fallbackBootNodeEntities !== undefined &&
      object.fallbackBootNodeEntities !== null
    ) {
      for (const e of object.fallbackBootNodeEntities) {
        message.fallbackBootNodeEntities.push(EntityReference.fromJSON(e));
      }
    }
    if (
      object.trustedEntities !== undefined &&
      object.trustedEntities !== null
    ) {
      for (const e of object.trustedEntities) {
        message.trustedEntities.push(EntityReference.fromJSON(e));
      }
    }
    if (
      object.censusServiceManagedEntities !== undefined &&
      object.censusServiceManagedEntities !== null
    ) {
      for (const e of object.censusServiceManagedEntities) {
        message.censusServiceManagedEntities.push(EntityReference.fromJSON(e));
      }
    }
    if (object.meta !== undefined && object.meta !== null) {
      Object.entries(object.meta).forEach(([key, value]) => {
        message.meta[key] = String(value);
      });
    }
    return message;
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

  fromPartial(object: DeepPartial<EntityMetadata>): EntityMetadata {
    const message = { ...baseEntityMetadata } as EntityMetadata;
    message.version = object.version ?? "";
    message.languages = [];
    if (object.languages !== undefined && object.languages !== null) {
      for (const e of object.languages) {
        message.languages.push(e);
      }
    }
    message.name = {};
    if (object.name !== undefined && object.name !== null) {
      Object.entries(object.name).forEach(([key, value]) => {
        if (value !== undefined) {
          message.name[key] = String(value);
        }
      });
    }
    message.description = {};
    if (object.description !== undefined && object.description !== null) {
      Object.entries(object.description).forEach(([key, value]) => {
        if (value !== undefined) {
          message.description[key] = String(value);
        }
      });
    }
    if (
      object.votingProcesses !== undefined &&
      object.votingProcesses !== null
    ) {
      message.votingProcesses = EntityMetadata_VotingProcesses.fromPartial(
        object.votingProcesses
      );
    } else {
      message.votingProcesses = undefined;
    }
    message.newsFeed = {};
    if (object.newsFeed !== undefined && object.newsFeed !== null) {
      Object.entries(object.newsFeed).forEach(([key, value]) => {
        if (value !== undefined) {
          message.newsFeed[key] = String(value);
        }
      });
    }
    if (object.media !== undefined && object.media !== null) {
      message.media = EntityMetadata_Media.fromPartial(object.media);
    } else {
      message.media = undefined;
    }
    message.actions = [];
    if (object.actions !== undefined && object.actions !== null) {
      for (const e of object.actions) {
        message.actions.push(EntityMetadata_Action.fromPartial(e));
      }
    }
    message.bootEntities = [];
    if (object.bootEntities !== undefined && object.bootEntities !== null) {
      for (const e of object.bootEntities) {
        message.bootEntities.push(EntityReference.fromPartial(e));
      }
    }
    message.fallbackBootNodeEntities = [];
    if (
      object.fallbackBootNodeEntities !== undefined &&
      object.fallbackBootNodeEntities !== null
    ) {
      for (const e of object.fallbackBootNodeEntities) {
        message.fallbackBootNodeEntities.push(EntityReference.fromPartial(e));
      }
    }
    message.trustedEntities = [];
    if (
      object.trustedEntities !== undefined &&
      object.trustedEntities !== null
    ) {
      for (const e of object.trustedEntities) {
        message.trustedEntities.push(EntityReference.fromPartial(e));
      }
    }
    message.censusServiceManagedEntities = [];
    if (
      object.censusServiceManagedEntities !== undefined &&
      object.censusServiceManagedEntities !== null
    ) {
      for (const e of object.censusServiceManagedEntities) {
        message.censusServiceManagedEntities.push(
          EntityReference.fromPartial(e)
        );
      }
    }
    message.meta = {};
    if (object.meta !== undefined && object.meta !== null) {
      Object.entries(object.meta).forEach(([key, value]) => {
        if (value !== undefined) {
          message.meta[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseEntityMetadata_NameEntry: object = { key: "", value: "" };

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
    const message = {
      ...baseEntityMetadata_NameEntry,
    } as EntityMetadata_NameEntry;
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
    const message = {
      ...baseEntityMetadata_NameEntry,
    } as EntityMetadata_NameEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: EntityMetadata_NameEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EntityMetadata_NameEntry>
  ): EntityMetadata_NameEntry {
    const message = {
      ...baseEntityMetadata_NameEntry,
    } as EntityMetadata_NameEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseEntityMetadata_DescriptionEntry: object = { key: "", value: "" };

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
    const message = {
      ...baseEntityMetadata_DescriptionEntry,
    } as EntityMetadata_DescriptionEntry;
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
    const message = {
      ...baseEntityMetadata_DescriptionEntry,
    } as EntityMetadata_DescriptionEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: EntityMetadata_DescriptionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EntityMetadata_DescriptionEntry>
  ): EntityMetadata_DescriptionEntry {
    const message = {
      ...baseEntityMetadata_DescriptionEntry,
    } as EntityMetadata_DescriptionEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseEntityMetadata_VotingProcesses: object = { active: "", ended: "" };

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
    const message = {
      ...baseEntityMetadata_VotingProcesses,
    } as EntityMetadata_VotingProcesses;
    message.active = [];
    message.ended = [];
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
    const message = {
      ...baseEntityMetadata_VotingProcesses,
    } as EntityMetadata_VotingProcesses;
    message.active = [];
    message.ended = [];
    if (object.active !== undefined && object.active !== null) {
      for (const e of object.active) {
        message.active.push(String(e));
      }
    }
    if (object.ended !== undefined && object.ended !== null) {
      for (const e of object.ended) {
        message.ended.push(String(e));
      }
    }
    return message;
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

  fromPartial(
    object: DeepPartial<EntityMetadata_VotingProcesses>
  ): EntityMetadata_VotingProcesses {
    const message = {
      ...baseEntityMetadata_VotingProcesses,
    } as EntityMetadata_VotingProcesses;
    message.active = [];
    if (object.active !== undefined && object.active !== null) {
      for (const e of object.active) {
        message.active.push(e);
      }
    }
    message.ended = [];
    if (object.ended !== undefined && object.ended !== null) {
      for (const e of object.ended) {
        message.ended.push(e);
      }
    }
    return message;
  },
};

const baseEntityMetadata_NewsFeedEntry: object = { key: "", value: "" };

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
    const message = {
      ...baseEntityMetadata_NewsFeedEntry,
    } as EntityMetadata_NewsFeedEntry;
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
    const message = {
      ...baseEntityMetadata_NewsFeedEntry,
    } as EntityMetadata_NewsFeedEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: EntityMetadata_NewsFeedEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EntityMetadata_NewsFeedEntry>
  ): EntityMetadata_NewsFeedEntry {
    const message = {
      ...baseEntityMetadata_NewsFeedEntry,
    } as EntityMetadata_NewsFeedEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseEntityMetadata_Media: object = { avatar: "", header: "" };

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
    const message = { ...baseEntityMetadata_Media } as EntityMetadata_Media;
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
    const message = { ...baseEntityMetadata_Media } as EntityMetadata_Media;
    if (object.avatar !== undefined && object.avatar !== null) {
      message.avatar = String(object.avatar);
    }
    if (object.header !== undefined && object.header !== null) {
      message.header = String(object.header);
    }
    return message;
  },

  toJSON(message: EntityMetadata_Media): unknown {
    const obj: any = {};
    message.avatar !== undefined && (obj.avatar = message.avatar);
    message.header !== undefined && (obj.header = message.header);
    return obj;
  },

  fromPartial(object: DeepPartial<EntityMetadata_Media>): EntityMetadata_Media {
    const message = { ...baseEntityMetadata_Media } as EntityMetadata_Media;
    message.avatar = object.avatar ?? "";
    message.header = object.header ?? "";
    return message;
  },
};

const baseEntityMetadata_Action: object = {
  type: "",
  actionKey: "",
  visible: "",
  url: "",
};

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
    const message = { ...baseEntityMetadata_Action } as EntityMetadata_Action;
    message.name = {};
    message.imageSources = [];
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
    const message = { ...baseEntityMetadata_Action } as EntityMetadata_Action;
    message.name = {};
    message.imageSources = [];
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    }
    if (object.actionKey !== undefined && object.actionKey !== null) {
      message.actionKey = String(object.actionKey);
    }
    if (object.name !== undefined && object.name !== null) {
      Object.entries(object.name).forEach(([key, value]) => {
        message.name[key] = String(value);
      });
    }
    if (object.visible !== undefined && object.visible !== null) {
      message.visible = String(object.visible);
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    }
    if (object.imageSources !== undefined && object.imageSources !== null) {
      for (const e of object.imageSources) {
        message.imageSources.push(
          EntityMetadata_Action_ImageSource.fromJSON(e)
        );
      }
    }
    return message;
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

  fromPartial(
    object: DeepPartial<EntityMetadata_Action>
  ): EntityMetadata_Action {
    const message = { ...baseEntityMetadata_Action } as EntityMetadata_Action;
    message.type = object.type ?? "";
    message.actionKey = object.actionKey ?? "";
    message.name = {};
    if (object.name !== undefined && object.name !== null) {
      Object.entries(object.name).forEach(([key, value]) => {
        if (value !== undefined) {
          message.name[key] = String(value);
        }
      });
    }
    message.visible = object.visible ?? "";
    message.url = object.url ?? "";
    message.imageSources = [];
    if (object.imageSources !== undefined && object.imageSources !== null) {
      for (const e of object.imageSources) {
        message.imageSources.push(
          EntityMetadata_Action_ImageSource.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseEntityMetadata_Action_NameEntry: object = { key: "", value: "" };

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
    const message = {
      ...baseEntityMetadata_Action_NameEntry,
    } as EntityMetadata_Action_NameEntry;
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
    const message = {
      ...baseEntityMetadata_Action_NameEntry,
    } as EntityMetadata_Action_NameEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: EntityMetadata_Action_NameEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EntityMetadata_Action_NameEntry>
  ): EntityMetadata_Action_NameEntry {
    const message = {
      ...baseEntityMetadata_Action_NameEntry,
    } as EntityMetadata_Action_NameEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseEntityMetadata_Action_ImageSource: object = {
  type: "",
  name: "",
  orientation: "",
  overlay: "",
};

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
    const message = {
      ...baseEntityMetadata_Action_ImageSource,
    } as EntityMetadata_Action_ImageSource;
    message.caption = {};
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
    const message = {
      ...baseEntityMetadata_Action_ImageSource,
    } as EntityMetadata_Action_ImageSource;
    message.caption = {};
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    if (object.orientation !== undefined && object.orientation !== null) {
      message.orientation = String(object.orientation);
    }
    if (object.overlay !== undefined && object.overlay !== null) {
      message.overlay = String(object.overlay);
    }
    if (object.caption !== undefined && object.caption !== null) {
      Object.entries(object.caption).forEach(([key, value]) => {
        message.caption[key] = String(value);
      });
    }
    return message;
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

  fromPartial(
    object: DeepPartial<EntityMetadata_Action_ImageSource>
  ): EntityMetadata_Action_ImageSource {
    const message = {
      ...baseEntityMetadata_Action_ImageSource,
    } as EntityMetadata_Action_ImageSource;
    message.type = object.type ?? "";
    message.name = object.name ?? "";
    message.orientation = object.orientation ?? "";
    message.overlay = object.overlay ?? "";
    message.caption = {};
    if (object.caption !== undefined && object.caption !== null) {
      Object.entries(object.caption).forEach(([key, value]) => {
        if (value !== undefined) {
          message.caption[key] = String(value);
        }
      });
    }
    return message;
  },
};

const baseEntityMetadata_Action_ImageSource_CaptionEntry: object = {
  key: "",
  value: "",
};

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
    const message = {
      ...baseEntityMetadata_Action_ImageSource_CaptionEntry,
    } as EntityMetadata_Action_ImageSource_CaptionEntry;
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
    const message = {
      ...baseEntityMetadata_Action_ImageSource_CaptionEntry,
    } as EntityMetadata_Action_ImageSource_CaptionEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: EntityMetadata_Action_ImageSource_CaptionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EntityMetadata_Action_ImageSource_CaptionEntry>
  ): EntityMetadata_Action_ImageSource_CaptionEntry {
    const message = {
      ...baseEntityMetadata_Action_ImageSource_CaptionEntry,
    } as EntityMetadata_Action_ImageSource_CaptionEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseEntityMetadata_MetaEntry: object = { key: "", value: "" };

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
    const message = {
      ...baseEntityMetadata_MetaEntry,
    } as EntityMetadata_MetaEntry;
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
    const message = {
      ...baseEntityMetadata_MetaEntry,
    } as EntityMetadata_MetaEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: EntityMetadata_MetaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EntityMetadata_MetaEntry>
  ): EntityMetadata_MetaEntry {
    const message = {
      ...baseEntityMetadata_MetaEntry,
    } as EntityMetadata_MetaEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseEntityReference: object = { entityId: "", entryPoints: "" };

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
    const message = { ...baseEntityReference } as EntityReference;
    message.entryPoints = [];
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
    const message = { ...baseEntityReference } as EntityReference;
    message.entryPoints = [];
    if (object.entityId !== undefined && object.entityId !== null) {
      message.entityId = String(object.entityId);
    }
    if (object.entryPoints !== undefined && object.entryPoints !== null) {
      for (const e of object.entryPoints) {
        message.entryPoints.push(String(e));
      }
    }
    return message;
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

  fromPartial(object: DeepPartial<EntityReference>): EntityReference {
    const message = { ...baseEntityReference } as EntityReference;
    message.entityId = object.entityId ?? "";
    message.entryPoints = [];
    if (object.entryPoints !== undefined && object.entryPoints !== null) {
      for (const e of object.entryPoints) {
        message.entryPoints.push(e);
      }
    }
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
