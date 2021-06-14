/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "dvote.types.v1";

/** Helper to serialize and store all cached posts from all entities */
export interface FeedStore {
  items: Feed[];
}

/** A JSON Feed, containing a collection of posts */
export interface Feed {
  /** OWN FIELDS */
  version: string;
  title: string;
  homePageUrl: string;
  description: string;
  feedUrl: string;
  icon: string;
  favicon: string;
  expired: boolean;
  items: FeedPost[];
  /**
   * EXTERNAL FIELDS
   * Allow to use arbitrary key/values so that
   * feeds can be organized by entity, language, etc.
   */
  meta: { [key: string]: string };
}

export interface Feed_MetaEntry {
  key: string;
  value: string;
}

export interface FeedPost {
  /** or guid */
  id: string;
  title: string;
  summary: string;
  contentText: string;
  contentHtml: string;
  url: string;
  image: string;
  tags: string[];
  datePublished: string;
  dateModified: string;
  author: FeedPost_Author | undefined;
}

export interface FeedPost_Author {
  name: string;
  url: string;
}

const baseFeedStore: object = {};

export const FeedStore = {
  encode(message: FeedStore, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Feed.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FeedStore {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeedStore } as FeedStore;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Feed.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeedStore {
    const message = { ...baseFeedStore } as FeedStore;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Feed.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: FeedStore): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => (e ? Feed.toJSON(e) : undefined));
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FeedStore>): FeedStore {
    const message = { ...baseFeedStore } as FeedStore;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Feed.fromPartial(e));
      }
    }
    return message;
  },
};

const baseFeed: object = {
  version: "",
  title: "",
  homePageUrl: "",
  description: "",
  feedUrl: "",
  icon: "",
  favicon: "",
  expired: false,
};

export const Feed = {
  encode(message: Feed, writer: Writer = Writer.create()): Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.homePageUrl !== "") {
      writer.uint32(26).string(message.homePageUrl);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.feedUrl !== "") {
      writer.uint32(42).string(message.feedUrl);
    }
    if (message.icon !== "") {
      writer.uint32(50).string(message.icon);
    }
    if (message.favicon !== "") {
      writer.uint32(58).string(message.favicon);
    }
    if (message.expired === true) {
      writer.uint32(64).bool(message.expired);
    }
    for (const v of message.items) {
      FeedPost.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    Object.entries(message.meta).forEach(([key, value]) => {
      Feed_MetaEntry.encode(
        { key: key as any, value },
        writer.uint32(802).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Feed {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeed } as Feed;
    message.items = [];
    message.meta = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.homePageUrl = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.feedUrl = reader.string();
          break;
        case 6:
          message.icon = reader.string();
          break;
        case 7:
          message.favicon = reader.string();
          break;
        case 8:
          message.expired = reader.bool();
          break;
        case 9:
          message.items.push(FeedPost.decode(reader, reader.uint32()));
          break;
        case 100:
          const entry100 = Feed_MetaEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): Feed {
    const message = { ...baseFeed } as Feed;
    message.items = [];
    message.meta = {};
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    }
    if (object.homePageUrl !== undefined && object.homePageUrl !== null) {
      message.homePageUrl = String(object.homePageUrl);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    }
    if (object.feedUrl !== undefined && object.feedUrl !== null) {
      message.feedUrl = String(object.feedUrl);
    }
    if (object.icon !== undefined && object.icon !== null) {
      message.icon = String(object.icon);
    }
    if (object.favicon !== undefined && object.favicon !== null) {
      message.favicon = String(object.favicon);
    }
    if (object.expired !== undefined && object.expired !== null) {
      message.expired = Boolean(object.expired);
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FeedPost.fromJSON(e));
      }
    }
    if (object.meta !== undefined && object.meta !== null) {
      Object.entries(object.meta).forEach(([key, value]) => {
        message.meta[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: Feed): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.title !== undefined && (obj.title = message.title);
    message.homePageUrl !== undefined &&
      (obj.homePageUrl = message.homePageUrl);
    message.description !== undefined &&
      (obj.description = message.description);
    message.feedUrl !== undefined && (obj.feedUrl = message.feedUrl);
    message.icon !== undefined && (obj.icon = message.icon);
    message.favicon !== undefined && (obj.favicon = message.favicon);
    message.expired !== undefined && (obj.expired = message.expired);
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? FeedPost.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    obj.meta = {};
    if (message.meta) {
      Object.entries(message.meta).forEach(([k, v]) => {
        obj.meta[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Feed>): Feed {
    const message = { ...baseFeed } as Feed;
    message.items = [];
    message.meta = {};
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.homePageUrl !== undefined && object.homePageUrl !== null) {
      message.homePageUrl = object.homePageUrl;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.feedUrl !== undefined && object.feedUrl !== null) {
      message.feedUrl = object.feedUrl;
    }
    if (object.icon !== undefined && object.icon !== null) {
      message.icon = object.icon;
    }
    if (object.favicon !== undefined && object.favicon !== null) {
      message.favicon = object.favicon;
    }
    if (object.expired !== undefined && object.expired !== null) {
      message.expired = object.expired;
    }
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(FeedPost.fromPartial(e));
      }
    }
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

const baseFeed_MetaEntry: object = { key: "", value: "" };

export const Feed_MetaEntry = {
  encode(message: Feed_MetaEntry, writer: Writer = Writer.create()): Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Feed_MetaEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeed_MetaEntry } as Feed_MetaEntry;
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

  fromJSON(object: any): Feed_MetaEntry {
    const message = { ...baseFeed_MetaEntry } as Feed_MetaEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: Feed_MetaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Feed_MetaEntry>): Feed_MetaEntry {
    const message = { ...baseFeed_MetaEntry } as Feed_MetaEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
};

const baseFeedPost: object = {
  id: "",
  title: "",
  summary: "",
  contentText: "",
  contentHtml: "",
  url: "",
  image: "",
  tags: "",
  datePublished: "",
  dateModified: "",
};

export const FeedPost = {
  encode(message: FeedPost, writer: Writer = Writer.create()): Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(26).string(message.summary);
    }
    if (message.contentText !== "") {
      writer.uint32(34).string(message.contentText);
    }
    if (message.contentHtml !== "") {
      writer.uint32(42).string(message.contentHtml);
    }
    if (message.url !== "") {
      writer.uint32(50).string(message.url);
    }
    if (message.image !== "") {
      writer.uint32(58).string(message.image);
    }
    for (const v of message.tags) {
      writer.uint32(66).string(v!);
    }
    if (message.datePublished !== "") {
      writer.uint32(74).string(message.datePublished);
    }
    if (message.dateModified !== "") {
      writer.uint32(82).string(message.dateModified);
    }
    if (message.author !== undefined) {
      FeedPost_Author.encode(message.author, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FeedPost {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeedPost } as FeedPost;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.summary = reader.string();
          break;
        case 4:
          message.contentText = reader.string();
          break;
        case 5:
          message.contentHtml = reader.string();
          break;
        case 6:
          message.url = reader.string();
          break;
        case 7:
          message.image = reader.string();
          break;
        case 8:
          message.tags.push(reader.string());
          break;
        case 9:
          message.datePublished = reader.string();
          break;
        case 10:
          message.dateModified = reader.string();
          break;
        case 11:
          message.author = FeedPost_Author.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeedPost {
    const message = { ...baseFeedPost } as FeedPost;
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = String(object.summary);
    }
    if (object.contentText !== undefined && object.contentText !== null) {
      message.contentText = String(object.contentText);
    }
    if (object.contentHtml !== undefined && object.contentHtml !== null) {
      message.contentHtml = String(object.contentHtml);
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image);
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(String(e));
      }
    }
    if (object.datePublished !== undefined && object.datePublished !== null) {
      message.datePublished = String(object.datePublished);
    }
    if (object.dateModified !== undefined && object.dateModified !== null) {
      message.dateModified = String(object.dateModified);
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = FeedPost_Author.fromJSON(object.author);
    }
    return message;
  },

  toJSON(message: FeedPost): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    message.contentText !== undefined &&
      (obj.contentText = message.contentText);
    message.contentHtml !== undefined &&
      (obj.contentHtml = message.contentHtml);
    message.url !== undefined && (obj.url = message.url);
    message.image !== undefined && (obj.image = message.image);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.datePublished !== undefined &&
      (obj.datePublished = message.datePublished);
    message.dateModified !== undefined &&
      (obj.dateModified = message.dateModified);
    message.author !== undefined &&
      (obj.author = message.author
        ? FeedPost_Author.toJSON(message.author)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FeedPost>): FeedPost {
    const message = { ...baseFeedPost } as FeedPost;
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    }
    if (object.contentText !== undefined && object.contentText !== null) {
      message.contentText = object.contentText;
    }
    if (object.contentHtml !== undefined && object.contentHtml !== null) {
      message.contentHtml = object.contentHtml;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(e);
      }
    }
    if (object.datePublished !== undefined && object.datePublished !== null) {
      message.datePublished = object.datePublished;
    }
    if (object.dateModified !== undefined && object.dateModified !== null) {
      message.dateModified = object.dateModified;
    }
    if (object.author !== undefined && object.author !== null) {
      message.author = FeedPost_Author.fromPartial(object.author);
    }
    return message;
  },
};

const baseFeedPost_Author: object = { name: "", url: "" };

export const FeedPost_Author = {
  encode(message: FeedPost_Author, writer: Writer = Writer.create()): Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): FeedPost_Author {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFeedPost_Author } as FeedPost_Author;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeedPost_Author {
    const message = { ...baseFeedPost_Author } as FeedPost_Author;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = String(object.url);
    }
    return message;
  },

  toJSON(message: FeedPost_Author): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(object: DeepPartial<FeedPost_Author>): FeedPost_Author {
    const message = { ...baseFeedPost_Author } as FeedPost_Author;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
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
