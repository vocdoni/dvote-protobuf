/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "dvote.types.v1";

/** Helper to serialize and store all cached data */
export interface ProcessMetadataStore {
  items: ProcessMetadata[];
}

export interface ProcessMetadata {
  version: string;
  title: { [key: string]: string };
  description: { [key: string]: string };
  media: { [key: string]: string };
  questions: ProcessMetadata_Question[];
  results:
    | ProcessMetadata_Results
    | undefined;
  /**
   * EXTERNAL FIELDS
   * Allow to use arbitrary key/values so that
   * processes can be tagged and organized by custom values.
   */
  meta: { [key: string]: string };
}

export interface ProcessMetadata_TitleEntry {
  key: string;
  value: string;
}

export interface ProcessMetadata_DescriptionEntry {
  key: string;
  value: string;
}

export interface ProcessMetadata_MediaEntry {
  key: string;
  value: string;
}

export interface ProcessMetadata_Question {
  title: { [key: string]: string };
  description: { [key: string]: string };
  choices: ProcessMetadata_Question_VoteOption[];
}

export interface ProcessMetadata_Question_TitleEntry {
  key: string;
  value: string;
}

export interface ProcessMetadata_Question_DescriptionEntry {
  key: string;
  value: string;
}

export interface ProcessMetadata_Question_VoteOption {
  /** locale-aware value */
  title: { [key: string]: string };
  value: number;
}

export interface ProcessMetadata_Question_VoteOption_TitleEntry {
  key: string;
  value: string;
}

export interface ProcessMetadata_Results {
  aggregation: string;
  display: string;
}

export interface ProcessMetadata_MetaEntry {
  key: string;
  value: string;
}

function createBaseProcessMetadataStore(): ProcessMetadataStore {
  return { items: [] };
}

export const ProcessMetadataStore = {
  encode(message: ProcessMetadataStore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      ProcessMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadataStore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadataStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(ProcessMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessMetadataStore {
    return { items: Array.isArray(object?.items) ? object.items.map((e: any) => ProcessMetadata.fromJSON(e)) : [] };
  },

  toJSON(message: ProcessMetadataStore): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) => e ? ProcessMetadata.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadataStore>, I>>(object: I): ProcessMetadataStore {
    const message = createBaseProcessMetadataStore();
    message.items = object.items?.map((e) => ProcessMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProcessMetadata(): ProcessMetadata {
  return { version: "", title: {}, description: {}, media: {}, questions: [], results: undefined, meta: {} };
}

export const ProcessMetadata = {
  encode(message: ProcessMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    Object.entries(message.title).forEach(([key, value]) => {
      ProcessMetadata_TitleEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.description).forEach(([key, value]) => {
      ProcessMetadata_DescriptionEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    Object.entries(message.media).forEach(([key, value]) => {
      ProcessMetadata_MediaEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    for (const v of message.questions) {
      ProcessMetadata_Question.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.results !== undefined) {
      ProcessMetadata_Results.encode(message.results, writer.uint32(50).fork()).ldelim();
    }
    Object.entries(message.meta).forEach(([key, value]) => {
      ProcessMetadata_MetaEntry.encode({ key: key as any, value }, writer.uint32(802).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          const entry2 = ProcessMetadata_TitleEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.title[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = ProcessMetadata_DescriptionEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.description[entry3.key] = entry3.value;
          }
          break;
        case 4:
          const entry4 = ProcessMetadata_MediaEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.media[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.questions.push(ProcessMetadata_Question.decode(reader, reader.uint32()));
          break;
        case 6:
          message.results = ProcessMetadata_Results.decode(reader, reader.uint32());
          break;
        case 100:
          const entry100 = ProcessMetadata_MetaEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): ProcessMetadata {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      title: isObject(object.title)
        ? Object.entries(object.title).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      description: isObject(object.description)
        ? Object.entries(object.description).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      media: isObject(object.media)
        ? Object.entries(object.media).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      questions: Array.isArray(object?.questions)
        ? object.questions.map((e: any) => ProcessMetadata_Question.fromJSON(e))
        : [],
      results: isSet(object.results) ? ProcessMetadata_Results.fromJSON(object.results) : undefined,
      meta: isObject(object.meta)
        ? Object.entries(object.meta).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ProcessMetadata): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    obj.title = {};
    if (message.title) {
      Object.entries(message.title).forEach(([k, v]) => {
        obj.title[k] = v;
      });
    }
    obj.description = {};
    if (message.description) {
      Object.entries(message.description).forEach(([k, v]) => {
        obj.description[k] = v;
      });
    }
    obj.media = {};
    if (message.media) {
      Object.entries(message.media).forEach(([k, v]) => {
        obj.media[k] = v;
      });
    }
    if (message.questions) {
      obj.questions = message.questions.map((e) => e ? ProcessMetadata_Question.toJSON(e) : undefined);
    } else {
      obj.questions = [];
    }
    message.results !== undefined &&
      (obj.results = message.results ? ProcessMetadata_Results.toJSON(message.results) : undefined);
    obj.meta = {};
    if (message.meta) {
      Object.entries(message.meta).forEach(([k, v]) => {
        obj.meta[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadata>, I>>(object: I): ProcessMetadata {
    const message = createBaseProcessMetadata();
    message.version = object.version ?? "";
    message.title = Object.entries(object.title ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.description = Object.entries(object.description ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.media = Object.entries(object.media ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.questions = object.questions?.map((e) => ProcessMetadata_Question.fromPartial(e)) || [];
    message.results = (object.results !== undefined && object.results !== null)
      ? ProcessMetadata_Results.fromPartial(object.results)
      : undefined;
    message.meta = Object.entries(object.meta ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseProcessMetadata_TitleEntry(): ProcessMetadata_TitleEntry {
  return { key: "", value: "" };
}

export const ProcessMetadata_TitleEntry = {
  encode(message: ProcessMetadata_TitleEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadata_TitleEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadata_TitleEntry();
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

  fromJSON(object: any): ProcessMetadata_TitleEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProcessMetadata_TitleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadata_TitleEntry>, I>>(object: I): ProcessMetadata_TitleEntry {
    const message = createBaseProcessMetadata_TitleEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProcessMetadata_DescriptionEntry(): ProcessMetadata_DescriptionEntry {
  return { key: "", value: "" };
}

export const ProcessMetadata_DescriptionEntry = {
  encode(message: ProcessMetadata_DescriptionEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadata_DescriptionEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadata_DescriptionEntry();
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

  fromJSON(object: any): ProcessMetadata_DescriptionEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProcessMetadata_DescriptionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadata_DescriptionEntry>, I>>(
    object: I,
  ): ProcessMetadata_DescriptionEntry {
    const message = createBaseProcessMetadata_DescriptionEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProcessMetadata_MediaEntry(): ProcessMetadata_MediaEntry {
  return { key: "", value: "" };
}

export const ProcessMetadata_MediaEntry = {
  encode(message: ProcessMetadata_MediaEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadata_MediaEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadata_MediaEntry();
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

  fromJSON(object: any): ProcessMetadata_MediaEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProcessMetadata_MediaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadata_MediaEntry>, I>>(object: I): ProcessMetadata_MediaEntry {
    const message = createBaseProcessMetadata_MediaEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProcessMetadata_Question(): ProcessMetadata_Question {
  return { title: {}, description: {}, choices: [] };
}

export const ProcessMetadata_Question = {
  encode(message: ProcessMetadata_Question, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.title).forEach(([key, value]) => {
      ProcessMetadata_Question_TitleEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.description).forEach(([key, value]) => {
      ProcessMetadata_Question_DescriptionEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    for (const v of message.choices) {
      ProcessMetadata_Question_VoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadata_Question {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadata_Question();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ProcessMetadata_Question_TitleEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.title[entry1.key] = entry1.value;
          }
          break;
        case 2:
          const entry2 = ProcessMetadata_Question_DescriptionEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.description[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.choices.push(ProcessMetadata_Question_VoteOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessMetadata_Question {
    return {
      title: isObject(object.title)
        ? Object.entries(object.title).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      description: isObject(object.description)
        ? Object.entries(object.description).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      choices: Array.isArray(object?.choices)
        ? object.choices.map((e: any) => ProcessMetadata_Question_VoteOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProcessMetadata_Question): unknown {
    const obj: any = {};
    obj.title = {};
    if (message.title) {
      Object.entries(message.title).forEach(([k, v]) => {
        obj.title[k] = v;
      });
    }
    obj.description = {};
    if (message.description) {
      Object.entries(message.description).forEach(([k, v]) => {
        obj.description[k] = v;
      });
    }
    if (message.choices) {
      obj.choices = message.choices.map((e) => e ? ProcessMetadata_Question_VoteOption.toJSON(e) : undefined);
    } else {
      obj.choices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadata_Question>, I>>(object: I): ProcessMetadata_Question {
    const message = createBaseProcessMetadata_Question();
    message.title = Object.entries(object.title ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.description = Object.entries(object.description ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    message.choices = object.choices?.map((e) => ProcessMetadata_Question_VoteOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProcessMetadata_Question_TitleEntry(): ProcessMetadata_Question_TitleEntry {
  return { key: "", value: "" };
}

export const ProcessMetadata_Question_TitleEntry = {
  encode(message: ProcessMetadata_Question_TitleEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadata_Question_TitleEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadata_Question_TitleEntry();
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

  fromJSON(object: any): ProcessMetadata_Question_TitleEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProcessMetadata_Question_TitleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadata_Question_TitleEntry>, I>>(
    object: I,
  ): ProcessMetadata_Question_TitleEntry {
    const message = createBaseProcessMetadata_Question_TitleEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProcessMetadata_Question_DescriptionEntry(): ProcessMetadata_Question_DescriptionEntry {
  return { key: "", value: "" };
}

export const ProcessMetadata_Question_DescriptionEntry = {
  encode(message: ProcessMetadata_Question_DescriptionEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadata_Question_DescriptionEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadata_Question_DescriptionEntry();
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

  fromJSON(object: any): ProcessMetadata_Question_DescriptionEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProcessMetadata_Question_DescriptionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadata_Question_DescriptionEntry>, I>>(
    object: I,
  ): ProcessMetadata_Question_DescriptionEntry {
    const message = createBaseProcessMetadata_Question_DescriptionEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProcessMetadata_Question_VoteOption(): ProcessMetadata_Question_VoteOption {
  return { title: {}, value: 0 };
}

export const ProcessMetadata_Question_VoteOption = {
  encode(message: ProcessMetadata_Question_VoteOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.title).forEach(([key, value]) => {
      ProcessMetadata_Question_VoteOption_TitleEntry.encode({ key: key as any, value }, writer.uint32(10).fork())
        .ldelim();
    });
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadata_Question_VoteOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadata_Question_VoteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ProcessMetadata_Question_VoteOption_TitleEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.title[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessMetadata_Question_VoteOption {
    return {
      title: isObject(object.title)
        ? Object.entries(object.title).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: ProcessMetadata_Question_VoteOption): unknown {
    const obj: any = {};
    obj.title = {};
    if (message.title) {
      Object.entries(message.title).forEach(([k, v]) => {
        obj.title[k] = v;
      });
    }
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadata_Question_VoteOption>, I>>(
    object: I,
  ): ProcessMetadata_Question_VoteOption {
    const message = createBaseProcessMetadata_Question_VoteOption();
    message.title = Object.entries(object.title ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseProcessMetadata_Question_VoteOption_TitleEntry(): ProcessMetadata_Question_VoteOption_TitleEntry {
  return { key: "", value: "" };
}

export const ProcessMetadata_Question_VoteOption_TitleEntry = {
  encode(
    message: ProcessMetadata_Question_VoteOption_TitleEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadata_Question_VoteOption_TitleEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadata_Question_VoteOption_TitleEntry();
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

  fromJSON(object: any): ProcessMetadata_Question_VoteOption_TitleEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProcessMetadata_Question_VoteOption_TitleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadata_Question_VoteOption_TitleEntry>, I>>(
    object: I,
  ): ProcessMetadata_Question_VoteOption_TitleEntry {
    const message = createBaseProcessMetadata_Question_VoteOption_TitleEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseProcessMetadata_Results(): ProcessMetadata_Results {
  return { aggregation: "", display: "" };
}

export const ProcessMetadata_Results = {
  encode(message: ProcessMetadata_Results, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aggregation !== "") {
      writer.uint32(10).string(message.aggregation);
    }
    if (message.display !== "") {
      writer.uint32(18).string(message.display);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadata_Results {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadata_Results();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregation = reader.string();
          break;
        case 2:
          message.display = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessMetadata_Results {
    return {
      aggregation: isSet(object.aggregation) ? String(object.aggregation) : "",
      display: isSet(object.display) ? String(object.display) : "",
    };
  },

  toJSON(message: ProcessMetadata_Results): unknown {
    const obj: any = {};
    message.aggregation !== undefined && (obj.aggregation = message.aggregation);
    message.display !== undefined && (obj.display = message.display);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadata_Results>, I>>(object: I): ProcessMetadata_Results {
    const message = createBaseProcessMetadata_Results();
    message.aggregation = object.aggregation ?? "";
    message.display = object.display ?? "";
    return message;
  },
};

function createBaseProcessMetadata_MetaEntry(): ProcessMetadata_MetaEntry {
  return { key: "", value: "" };
}

export const ProcessMetadata_MetaEntry = {
  encode(message: ProcessMetadata_MetaEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMetadata_MetaEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcessMetadata_MetaEntry();
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

  fromJSON(object: any): ProcessMetadata_MetaEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: ProcessMetadata_MetaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcessMetadata_MetaEntry>, I>>(object: I): ProcessMetadata_MetaEntry {
    const message = createBaseProcessMetadata_MetaEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
