/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

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

function createBaseFeedStore(): FeedStore {
  return { items: [] };
}

export const FeedStore = {
  encode(
    message: FeedStore,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.items) {
      Feed.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedStore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedStore();
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
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => Feed.fromJSON(e))
        : [],
    };
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

  fromPartial<I extends Exact<DeepPartial<FeedStore>, I>>(
    object: I
  ): FeedStore {
    const message = createBaseFeedStore();
    message.items = object.items?.map((e) => Feed.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeed(): Feed {
  return {
    version: "",
    title: "",
    homePageUrl: "",
    description: "",
    feedUrl: "",
    icon: "",
    favicon: "",
    expired: false,
    items: [],
    meta: {},
  };
}

export const Feed = {
  encode(message: Feed, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Feed {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeed();
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
    return {
      version: isSet(object.version) ? String(object.version) : "",
      title: isSet(object.title) ? String(object.title) : "",
      homePageUrl: isSet(object.homePageUrl) ? String(object.homePageUrl) : "",
      description: isSet(object.description) ? String(object.description) : "",
      feedUrl: isSet(object.feedUrl) ? String(object.feedUrl) : "",
      icon: isSet(object.icon) ? String(object.icon) : "",
      favicon: isSet(object.favicon) ? String(object.favicon) : "",
      expired: isSet(object.expired) ? Boolean(object.expired) : false,
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => FeedPost.fromJSON(e))
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

  fromPartial<I extends Exact<DeepPartial<Feed>, I>>(object: I): Feed {
    const message = createBaseFeed();
    message.version = object.version ?? "";
    message.title = object.title ?? "";
    message.homePageUrl = object.homePageUrl ?? "";
    message.description = object.description ?? "";
    message.feedUrl = object.feedUrl ?? "";
    message.icon = object.icon ?? "";
    message.favicon = object.favicon ?? "";
    message.expired = object.expired ?? false;
    message.items = object.items?.map((e) => FeedPost.fromPartial(e)) || [];
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

function createBaseFeed_MetaEntry(): Feed_MetaEntry {
  return { key: "", value: "" };
}

export const Feed_MetaEntry = {
  encode(
    message: Feed_MetaEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Feed_MetaEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeed_MetaEntry();
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
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Feed_MetaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Feed_MetaEntry>, I>>(
    object: I
  ): Feed_MetaEntry {
    const message = createBaseFeed_MetaEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseFeedPost(): FeedPost {
  return {
    id: "",
    title: "",
    summary: "",
    contentText: "",
    contentHtml: "",
    url: "",
    image: "",
    tags: [],
    datePublished: "",
    dateModified: "",
    author: undefined,
  };
}

export const FeedPost = {
  encode(
    message: FeedPost,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedPost {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedPost();
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : "",
      contentText: isSet(object.contentText) ? String(object.contentText) : "",
      contentHtml: isSet(object.contentHtml) ? String(object.contentHtml) : "",
      url: isSet(object.url) ? String(object.url) : "",
      image: isSet(object.image) ? String(object.image) : "",
      tags: Array.isArray(object?.tags)
        ? object.tags.map((e: any) => String(e))
        : [],
      datePublished: isSet(object.datePublished)
        ? String(object.datePublished)
        : "",
      dateModified: isSet(object.dateModified)
        ? String(object.dateModified)
        : "",
      author: isSet(object.author)
        ? FeedPost_Author.fromJSON(object.author)
        : undefined,
    };
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

  fromPartial<I extends Exact<DeepPartial<FeedPost>, I>>(object: I): FeedPost {
    const message = createBaseFeedPost();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.contentText = object.contentText ?? "";
    message.contentHtml = object.contentHtml ?? "";
    message.url = object.url ?? "";
    message.image = object.image ?? "";
    message.tags = object.tags?.map((e) => e) || [];
    message.datePublished = object.datePublished ?? "";
    message.dateModified = object.dateModified ?? "";
    message.author =
      object.author !== undefined && object.author !== null
        ? FeedPost_Author.fromPartial(object.author)
        : undefined;
    return message;
  },
};

function createBaseFeedPost_Author(): FeedPost_Author {
  return { name: "", url: "" };
}

export const FeedPost_Author = {
  encode(
    message: FeedPost_Author,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeedPost_Author {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeedPost_Author();
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
    return {
      name: isSet(object.name) ? String(object.name) : "",
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: FeedPost_Author): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeedPost_Author>, I>>(
    object: I
  ): FeedPost_Author {
    const message = createBaseFeedPost_Author();
    message.name = object.name ?? "";
    message.url = object.url ?? "";
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
