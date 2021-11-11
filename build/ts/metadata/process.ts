/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";

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
  results: ProcessMetadata_Results | undefined;
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

const baseProcessMetadataStore: object = {};

export const ProcessMetadataStore = {
  encode(
    message: ProcessMetadataStore,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.items) {
      ProcessMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProcessMetadataStore {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProcessMetadataStore } as ProcessMetadataStore;
    message.items = [];
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
    const message = { ...baseProcessMetadataStore } as ProcessMetadataStore;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ProcessMetadata.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ProcessMetadataStore): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? ProcessMetadata.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProcessMetadataStore>): ProcessMetadataStore {
    const message = { ...baseProcessMetadataStore } as ProcessMetadataStore;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(ProcessMetadata.fromPartial(e));
      }
    }
    return message;
  },
};

const baseProcessMetadata: object = { version: "" };

export const ProcessMetadata = {
  encode(message: ProcessMetadata, writer: Writer = Writer.create()): Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    Object.entries(message.title).forEach(([key, value]) => {
      ProcessMetadata_TitleEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    Object.entries(message.description).forEach(([key, value]) => {
      ProcessMetadata_DescriptionEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    Object.entries(message.media).forEach(([key, value]) => {
      ProcessMetadata_MediaEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    for (const v of message.questions) {
      ProcessMetadata_Question.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.results !== undefined) {
      ProcessMetadata_Results.encode(
        message.results,
        writer.uint32(50).fork()
      ).ldelim();
    }
    Object.entries(message.meta).forEach(([key, value]) => {
      ProcessMetadata_MetaEntry.encode(
        { key: key as any, value },
        writer.uint32(802).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProcessMetadata {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProcessMetadata } as ProcessMetadata;
    message.title = {};
    message.description = {};
    message.media = {};
    message.questions = [];
    message.meta = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          const entry2 = ProcessMetadata_TitleEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.title[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = ProcessMetadata_DescriptionEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry3.value !== undefined) {
            message.description[entry3.key] = entry3.value;
          }
          break;
        case 4:
          const entry4 = ProcessMetadata_MediaEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.media[entry4.key] = entry4.value;
          }
          break;
        case 5:
          message.questions.push(
            ProcessMetadata_Question.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.results = ProcessMetadata_Results.decode(
            reader,
            reader.uint32()
          );
          break;
        case 100:
          const entry100 = ProcessMetadata_MetaEntry.decode(
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

  fromJSON(object: any): ProcessMetadata {
    const message = { ...baseProcessMetadata } as ProcessMetadata;
    message.title = {};
    message.description = {};
    message.media = {};
    message.questions = [];
    message.meta = {};
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    }
    if (object.title !== undefined && object.title !== null) {
      Object.entries(object.title).forEach(([key, value]) => {
        message.title[key] = String(value);
      });
    }
    if (object.description !== undefined && object.description !== null) {
      Object.entries(object.description).forEach(([key, value]) => {
        message.description[key] = String(value);
      });
    }
    if (object.media !== undefined && object.media !== null) {
      Object.entries(object.media).forEach(([key, value]) => {
        message.media[key] = String(value);
      });
    }
    if (object.questions !== undefined && object.questions !== null) {
      for (const e of object.questions) {
        message.questions.push(ProcessMetadata_Question.fromJSON(e));
      }
    }
    if (object.results !== undefined && object.results !== null) {
      message.results = ProcessMetadata_Results.fromJSON(object.results);
    }
    if (object.meta !== undefined && object.meta !== null) {
      Object.entries(object.meta).forEach(([key, value]) => {
        message.meta[key] = String(value);
      });
    }
    return message;
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
      obj.questions = message.questions.map((e) =>
        e ? ProcessMetadata_Question.toJSON(e) : undefined
      );
    } else {
      obj.questions = [];
    }
    message.results !== undefined &&
      (obj.results = message.results
        ? ProcessMetadata_Results.toJSON(message.results)
        : undefined);
    obj.meta = {};
    if (message.meta) {
      Object.entries(message.meta).forEach(([k, v]) => {
        obj.meta[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProcessMetadata>): ProcessMetadata {
    const message = { ...baseProcessMetadata } as ProcessMetadata;
    message.version = object.version ?? "";
    message.title = {};
    if (object.title !== undefined && object.title !== null) {
      Object.entries(object.title).forEach(([key, value]) => {
        if (value !== undefined) {
          message.title[key] = String(value);
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
    message.media = {};
    if (object.media !== undefined && object.media !== null) {
      Object.entries(object.media).forEach(([key, value]) => {
        if (value !== undefined) {
          message.media[key] = String(value);
        }
      });
    }
    message.questions = [];
    if (object.questions !== undefined && object.questions !== null) {
      for (const e of object.questions) {
        message.questions.push(ProcessMetadata_Question.fromPartial(e));
      }
    }
    if (object.results !== undefined && object.results !== null) {
      message.results = ProcessMetadata_Results.fromPartial(object.results);
    } else {
      message.results = undefined;
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

const baseProcessMetadata_TitleEntry: object = { key: "", value: "" };

export const ProcessMetadata_TitleEntry = {
  encode(
    message: ProcessMetadata_TitleEntry,
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
  ): ProcessMetadata_TitleEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProcessMetadata_TitleEntry,
    } as ProcessMetadata_TitleEntry;
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
    const message = {
      ...baseProcessMetadata_TitleEntry,
    } as ProcessMetadata_TitleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: ProcessMetadata_TitleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProcessMetadata_TitleEntry>
  ): ProcessMetadata_TitleEntry {
    const message = {
      ...baseProcessMetadata_TitleEntry,
    } as ProcessMetadata_TitleEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseProcessMetadata_DescriptionEntry: object = { key: "", value: "" };

export const ProcessMetadata_DescriptionEntry = {
  encode(
    message: ProcessMetadata_DescriptionEntry,
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
  ): ProcessMetadata_DescriptionEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProcessMetadata_DescriptionEntry,
    } as ProcessMetadata_DescriptionEntry;
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
    const message = {
      ...baseProcessMetadata_DescriptionEntry,
    } as ProcessMetadata_DescriptionEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: ProcessMetadata_DescriptionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProcessMetadata_DescriptionEntry>
  ): ProcessMetadata_DescriptionEntry {
    const message = {
      ...baseProcessMetadata_DescriptionEntry,
    } as ProcessMetadata_DescriptionEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseProcessMetadata_MediaEntry: object = { key: "", value: "" };

export const ProcessMetadata_MediaEntry = {
  encode(
    message: ProcessMetadata_MediaEntry,
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
  ): ProcessMetadata_MediaEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProcessMetadata_MediaEntry,
    } as ProcessMetadata_MediaEntry;
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
    const message = {
      ...baseProcessMetadata_MediaEntry,
    } as ProcessMetadata_MediaEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: ProcessMetadata_MediaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProcessMetadata_MediaEntry>
  ): ProcessMetadata_MediaEntry {
    const message = {
      ...baseProcessMetadata_MediaEntry,
    } as ProcessMetadata_MediaEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseProcessMetadata_Question: object = {};

export const ProcessMetadata_Question = {
  encode(
    message: ProcessMetadata_Question,
    writer: Writer = Writer.create()
  ): Writer {
    Object.entries(message.title).forEach(([key, value]) => {
      ProcessMetadata_Question_TitleEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    Object.entries(message.description).forEach(([key, value]) => {
      ProcessMetadata_Question_DescriptionEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    for (const v of message.choices) {
      ProcessMetadata_Question_VoteOption.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ProcessMetadata_Question {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProcessMetadata_Question,
    } as ProcessMetadata_Question;
    message.title = {};
    message.description = {};
    message.choices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ProcessMetadata_Question_TitleEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry1.value !== undefined) {
            message.title[entry1.key] = entry1.value;
          }
          break;
        case 2:
          const entry2 = ProcessMetadata_Question_DescriptionEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.description[entry2.key] = entry2.value;
          }
          break;
        case 3:
          message.choices.push(
            ProcessMetadata_Question_VoteOption.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcessMetadata_Question {
    const message = {
      ...baseProcessMetadata_Question,
    } as ProcessMetadata_Question;
    message.title = {};
    message.description = {};
    message.choices = [];
    if (object.title !== undefined && object.title !== null) {
      Object.entries(object.title).forEach(([key, value]) => {
        message.title[key] = String(value);
      });
    }
    if (object.description !== undefined && object.description !== null) {
      Object.entries(object.description).forEach(([key, value]) => {
        message.description[key] = String(value);
      });
    }
    if (object.choices !== undefined && object.choices !== null) {
      for (const e of object.choices) {
        message.choices.push(ProcessMetadata_Question_VoteOption.fromJSON(e));
      }
    }
    return message;
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
      obj.choices = message.choices.map((e) =>
        e ? ProcessMetadata_Question_VoteOption.toJSON(e) : undefined
      );
    } else {
      obj.choices = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProcessMetadata_Question>
  ): ProcessMetadata_Question {
    const message = {
      ...baseProcessMetadata_Question,
    } as ProcessMetadata_Question;
    message.title = {};
    if (object.title !== undefined && object.title !== null) {
      Object.entries(object.title).forEach(([key, value]) => {
        if (value !== undefined) {
          message.title[key] = String(value);
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
    message.choices = [];
    if (object.choices !== undefined && object.choices !== null) {
      for (const e of object.choices) {
        message.choices.push(
          ProcessMetadata_Question_VoteOption.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseProcessMetadata_Question_TitleEntry: object = { key: "", value: "" };

export const ProcessMetadata_Question_TitleEntry = {
  encode(
    message: ProcessMetadata_Question_TitleEntry,
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
  ): ProcessMetadata_Question_TitleEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProcessMetadata_Question_TitleEntry,
    } as ProcessMetadata_Question_TitleEntry;
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
    const message = {
      ...baseProcessMetadata_Question_TitleEntry,
    } as ProcessMetadata_Question_TitleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: ProcessMetadata_Question_TitleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProcessMetadata_Question_TitleEntry>
  ): ProcessMetadata_Question_TitleEntry {
    const message = {
      ...baseProcessMetadata_Question_TitleEntry,
    } as ProcessMetadata_Question_TitleEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseProcessMetadata_Question_DescriptionEntry: object = {
  key: "",
  value: "",
};

export const ProcessMetadata_Question_DescriptionEntry = {
  encode(
    message: ProcessMetadata_Question_DescriptionEntry,
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
  ): ProcessMetadata_Question_DescriptionEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProcessMetadata_Question_DescriptionEntry,
    } as ProcessMetadata_Question_DescriptionEntry;
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
    const message = {
      ...baseProcessMetadata_Question_DescriptionEntry,
    } as ProcessMetadata_Question_DescriptionEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: ProcessMetadata_Question_DescriptionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProcessMetadata_Question_DescriptionEntry>
  ): ProcessMetadata_Question_DescriptionEntry {
    const message = {
      ...baseProcessMetadata_Question_DescriptionEntry,
    } as ProcessMetadata_Question_DescriptionEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseProcessMetadata_Question_VoteOption: object = { value: 0 };

export const ProcessMetadata_Question_VoteOption = {
  encode(
    message: ProcessMetadata_Question_VoteOption,
    writer: Writer = Writer.create()
  ): Writer {
    Object.entries(message.title).forEach(([key, value]) => {
      ProcessMetadata_Question_VoteOption_TitleEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): ProcessMetadata_Question_VoteOption {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProcessMetadata_Question_VoteOption,
    } as ProcessMetadata_Question_VoteOption;
    message.title = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ProcessMetadata_Question_VoteOption_TitleEntry.decode(
            reader,
            reader.uint32()
          );
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
    const message = {
      ...baseProcessMetadata_Question_VoteOption,
    } as ProcessMetadata_Question_VoteOption;
    message.title = {};
    if (object.title !== undefined && object.title !== null) {
      Object.entries(object.title).forEach(([key, value]) => {
        message.title[key] = String(value);
      });
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value);
    }
    return message;
  },

  toJSON(message: ProcessMetadata_Question_VoteOption): unknown {
    const obj: any = {};
    obj.title = {};
    if (message.title) {
      Object.entries(message.title).forEach(([k, v]) => {
        obj.title[k] = v;
      });
    }
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProcessMetadata_Question_VoteOption>
  ): ProcessMetadata_Question_VoteOption {
    const message = {
      ...baseProcessMetadata_Question_VoteOption,
    } as ProcessMetadata_Question_VoteOption;
    message.title = {};
    if (object.title !== undefined && object.title !== null) {
      Object.entries(object.title).forEach(([key, value]) => {
        if (value !== undefined) {
          message.title[key] = String(value);
        }
      });
    }
    message.value = object.value ?? 0;
    return message;
  },
};

const baseProcessMetadata_Question_VoteOption_TitleEntry: object = {
  key: "",
  value: "",
};

export const ProcessMetadata_Question_VoteOption_TitleEntry = {
  encode(
    message: ProcessMetadata_Question_VoteOption_TitleEntry,
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
  ): ProcessMetadata_Question_VoteOption_TitleEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProcessMetadata_Question_VoteOption_TitleEntry,
    } as ProcessMetadata_Question_VoteOption_TitleEntry;
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
    const message = {
      ...baseProcessMetadata_Question_VoteOption_TitleEntry,
    } as ProcessMetadata_Question_VoteOption_TitleEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: ProcessMetadata_Question_VoteOption_TitleEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProcessMetadata_Question_VoteOption_TitleEntry>
  ): ProcessMetadata_Question_VoteOption_TitleEntry {
    const message = {
      ...baseProcessMetadata_Question_VoteOption_TitleEntry,
    } as ProcessMetadata_Question_VoteOption_TitleEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseProcessMetadata_Results: object = { aggregation: "", display: "" };

export const ProcessMetadata_Results = {
  encode(
    message: ProcessMetadata_Results,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.aggregation !== "") {
      writer.uint32(10).string(message.aggregation);
    }
    if (message.display !== "") {
      writer.uint32(18).string(message.display);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProcessMetadata_Results {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProcessMetadata_Results,
    } as ProcessMetadata_Results;
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
    const message = {
      ...baseProcessMetadata_Results,
    } as ProcessMetadata_Results;
    if (object.aggregation !== undefined && object.aggregation !== null) {
      message.aggregation = String(object.aggregation);
    }
    if (object.display !== undefined && object.display !== null) {
      message.display = String(object.display);
    }
    return message;
  },

  toJSON(message: ProcessMetadata_Results): unknown {
    const obj: any = {};
    message.aggregation !== undefined &&
      (obj.aggregation = message.aggregation);
    message.display !== undefined && (obj.display = message.display);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProcessMetadata_Results>
  ): ProcessMetadata_Results {
    const message = {
      ...baseProcessMetadata_Results,
    } as ProcessMetadata_Results;
    message.aggregation = object.aggregation ?? "";
    message.display = object.display ?? "";
    return message;
  },
};

const baseProcessMetadata_MetaEntry: object = { key: "", value: "" };

export const ProcessMetadata_MetaEntry = {
  encode(
    message: ProcessMetadata_MetaEntry,
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
  ): ProcessMetadata_MetaEntry {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseProcessMetadata_MetaEntry,
    } as ProcessMetadata_MetaEntry;
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
    const message = {
      ...baseProcessMetadata_MetaEntry,
    } as ProcessMetadata_MetaEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: ProcessMetadata_MetaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ProcessMetadata_MetaEntry>
  ): ProcessMetadata_MetaEntry {
    const message = {
      ...baseProcessMetadata_MetaEntry,
    } as ProcessMetadata_MetaEntry;
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
