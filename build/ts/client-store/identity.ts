/* eslint-disable */
import { Key } from "../client-store/key";
import { EntityReference } from "../metadata/entity";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "dvote.types.v1";

/** Helper to serialize and store a set of entries */
export interface IdentitiesStore {
  items: Identity[];
}

export interface Identity {
  type: Identity_Type;
  alias: string;
  identityId: string;
  /** Associated keys */
  keys: Key[];
  peers: Identity_Peers | undefined;
  receivedClaims: Identity_Claim[];
  issuedClaims: Identity_Claim[];
  /** App version information */
  version: string;
  /** App user has backed up their account */
  backedUp: boolean;
  /** Random anonymized id for app analytics */
  analyticsID: string;
  /**
   * EXTERNAL FIELDS
   * Allow to use arbitrary key/values so that
   * identities can be organized by custom values.
   */
  meta: { [key: string]: string };
}

export enum Identity_Type {
  /** ECDSA - Ethereum key pairs */
  ECDSA = 0,
  UNRECOGNIZED = -1,
}

export function identity_TypeFromJSON(object: any): Identity_Type {
  switch (object) {
    case 0:
    case "ECDSA":
      return Identity_Type.ECDSA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Identity_Type.UNRECOGNIZED;
  }
}

export function identity_TypeToJSON(object: Identity_Type): string {
  switch (object) {
    case Identity_Type.ECDSA:
      return "ECDSA";
    default:
      return "UNKNOWN";
  }
}

/** Pointer to fetch the subscribed entities */
export interface Identity_Peers {
  entities: EntityReference[];
  /** external identities that we have interacted with */
  identities: PeerIdentity[];
}

export interface Identity_Claim {
  /** The index on the Merkle Tree */
  index: string;
  /** The Merkle Tree siblings of a ZK proof */
  proof: string;
  /** The claim itself */
  data: string;
  tags: string[];
}

export interface Identity_MetaEntry {
  key: string;
  value: string;
}

export interface PeerIdentity {
  type: PeerIdentity_Type;
  alias: string;
  identityId: string;
}

export enum PeerIdentity_Type {
  /** ECDSA - Ethereum key pairs */
  ECDSA = 0,
  UNRECOGNIZED = -1,
}

export function peerIdentity_TypeFromJSON(object: any): PeerIdentity_Type {
  switch (object) {
    case 0:
    case "ECDSA":
      return PeerIdentity_Type.ECDSA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PeerIdentity_Type.UNRECOGNIZED;
  }
}

export function peerIdentity_TypeToJSON(object: PeerIdentity_Type): string {
  switch (object) {
    case PeerIdentity_Type.ECDSA:
      return "ECDSA";
    default:
      return "UNKNOWN";
  }
}

const baseIdentitiesStore: object = {};

export const IdentitiesStore = {
  encode(message: IdentitiesStore, writer: Writer = Writer.create()): Writer {
    for (const v of message.items) {
      Identity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IdentitiesStore {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentitiesStore } as IdentitiesStore;
    message.items = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Identity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IdentitiesStore {
    const message = { ...baseIdentitiesStore } as IdentitiesStore;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Identity.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: IdentitiesStore): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? Identity.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<IdentitiesStore>): IdentitiesStore {
    const message = { ...baseIdentitiesStore } as IdentitiesStore;
    message.items = [];
    if (object.items !== undefined && object.items !== null) {
      for (const e of object.items) {
        message.items.push(Identity.fromPartial(e));
      }
    }
    return message;
  },
};

const baseIdentity: object = {
  type: 0,
  alias: "",
  identityId: "",
  version: "",
  backedUp: false,
  analyticsID: "",
};

export const Identity = {
  encode(message: Identity, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    if (message.identityId !== "") {
      writer.uint32(26).string(message.identityId);
    }
    for (const v of message.keys) {
      Key.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.peers !== undefined) {
      Identity_Peers.encode(message.peers, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.receivedClaims) {
      Identity_Claim.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.issuedClaims) {
      Identity_Claim.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.version !== "") {
      writer.uint32(66).string(message.version);
    }
    if (message.backedUp === true) {
      writer.uint32(72).bool(message.backedUp);
    }
    if (message.analyticsID !== "") {
      writer.uint32(82).string(message.analyticsID);
    }
    Object.entries(message.meta).forEach(([key, value]) => {
      Identity_MetaEntry.encode(
        { key: key as any, value },
        writer.uint32(802).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Identity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentity } as Identity;
    message.keys = [];
    message.receivedClaims = [];
    message.issuedClaims = [];
    message.meta = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.alias = reader.string();
          break;
        case 3:
          message.identityId = reader.string();
          break;
        case 4:
          message.keys.push(Key.decode(reader, reader.uint32()));
          break;
        case 5:
          message.peers = Identity_Peers.decode(reader, reader.uint32());
          break;
        case 6:
          message.receivedClaims.push(
            Identity_Claim.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.issuedClaims.push(
            Identity_Claim.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.version = reader.string();
          break;
        case 9:
          message.backedUp = reader.bool();
          break;
        case 10:
          message.analyticsID = reader.string();
          break;
        case 100:
          const entry100 = Identity_MetaEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): Identity {
    const message = { ...baseIdentity } as Identity;
    message.keys = [];
    message.receivedClaims = [];
    message.issuedClaims = [];
    message.meta = {};
    if (object.type !== undefined && object.type !== null) {
      message.type = identity_TypeFromJSON(object.type);
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = String(object.alias);
    }
    if (object.identityId !== undefined && object.identityId !== null) {
      message.identityId = String(object.identityId);
    }
    if (object.keys !== undefined && object.keys !== null) {
      for (const e of object.keys) {
        message.keys.push(Key.fromJSON(e));
      }
    }
    if (object.peers !== undefined && object.peers !== null) {
      message.peers = Identity_Peers.fromJSON(object.peers);
    }
    if (object.receivedClaims !== undefined && object.receivedClaims !== null) {
      for (const e of object.receivedClaims) {
        message.receivedClaims.push(Identity_Claim.fromJSON(e));
      }
    }
    if (object.issuedClaims !== undefined && object.issuedClaims !== null) {
      for (const e of object.issuedClaims) {
        message.issuedClaims.push(Identity_Claim.fromJSON(e));
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version);
    }
    if (object.backedUp !== undefined && object.backedUp !== null) {
      message.backedUp = Boolean(object.backedUp);
    }
    if (object.analyticsID !== undefined && object.analyticsID !== null) {
      message.analyticsID = String(object.analyticsID);
    }
    if (object.meta !== undefined && object.meta !== null) {
      Object.entries(object.meta).forEach(([key, value]) => {
        message.meta[key] = String(value);
      });
    }
    return message;
  },

  toJSON(message: Identity): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = identity_TypeToJSON(message.type));
    message.alias !== undefined && (obj.alias = message.alias);
    message.identityId !== undefined && (obj.identityId = message.identityId);
    if (message.keys) {
      obj.keys = message.keys.map((e) => (e ? Key.toJSON(e) : undefined));
    } else {
      obj.keys = [];
    }
    message.peers !== undefined &&
      (obj.peers = message.peers
        ? Identity_Peers.toJSON(message.peers)
        : undefined);
    if (message.receivedClaims) {
      obj.receivedClaims = message.receivedClaims.map((e) =>
        e ? Identity_Claim.toJSON(e) : undefined
      );
    } else {
      obj.receivedClaims = [];
    }
    if (message.issuedClaims) {
      obj.issuedClaims = message.issuedClaims.map((e) =>
        e ? Identity_Claim.toJSON(e) : undefined
      );
    } else {
      obj.issuedClaims = [];
    }
    message.version !== undefined && (obj.version = message.version);
    message.backedUp !== undefined && (obj.backedUp = message.backedUp);
    message.analyticsID !== undefined &&
      (obj.analyticsID = message.analyticsID);
    obj.meta = {};
    if (message.meta) {
      Object.entries(message.meta).forEach(([k, v]) => {
        obj.meta[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Identity>): Identity {
    const message = { ...baseIdentity } as Identity;
    message.keys = [];
    message.receivedClaims = [];
    message.issuedClaims = [];
    message.meta = {};
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = object.alias;
    }
    if (object.identityId !== undefined && object.identityId !== null) {
      message.identityId = object.identityId;
    }
    if (object.keys !== undefined && object.keys !== null) {
      for (const e of object.keys) {
        message.keys.push(Key.fromPartial(e));
      }
    }
    if (object.peers !== undefined && object.peers !== null) {
      message.peers = Identity_Peers.fromPartial(object.peers);
    }
    if (object.receivedClaims !== undefined && object.receivedClaims !== null) {
      for (const e of object.receivedClaims) {
        message.receivedClaims.push(Identity_Claim.fromPartial(e));
      }
    }
    if (object.issuedClaims !== undefined && object.issuedClaims !== null) {
      for (const e of object.issuedClaims) {
        message.issuedClaims.push(Identity_Claim.fromPartial(e));
      }
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.backedUp !== undefined && object.backedUp !== null) {
      message.backedUp = object.backedUp;
    }
    if (object.analyticsID !== undefined && object.analyticsID !== null) {
      message.analyticsID = object.analyticsID;
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

const baseIdentity_Peers: object = {};

export const Identity_Peers = {
  encode(message: Identity_Peers, writer: Writer = Writer.create()): Writer {
    for (const v of message.entities) {
      EntityReference.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.identities) {
      PeerIdentity.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Identity_Peers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentity_Peers } as Identity_Peers;
    message.entities = [];
    message.identities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entities.push(
            EntityReference.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.identities.push(PeerIdentity.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Identity_Peers {
    const message = { ...baseIdentity_Peers } as Identity_Peers;
    message.entities = [];
    message.identities = [];
    if (object.entities !== undefined && object.entities !== null) {
      for (const e of object.entities) {
        message.entities.push(EntityReference.fromJSON(e));
      }
    }
    if (object.identities !== undefined && object.identities !== null) {
      for (const e of object.identities) {
        message.identities.push(PeerIdentity.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Identity_Peers): unknown {
    const obj: any = {};
    if (message.entities) {
      obj.entities = message.entities.map((e) =>
        e ? EntityReference.toJSON(e) : undefined
      );
    } else {
      obj.entities = [];
    }
    if (message.identities) {
      obj.identities = message.identities.map((e) =>
        e ? PeerIdentity.toJSON(e) : undefined
      );
    } else {
      obj.identities = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Identity_Peers>): Identity_Peers {
    const message = { ...baseIdentity_Peers } as Identity_Peers;
    message.entities = [];
    message.identities = [];
    if (object.entities !== undefined && object.entities !== null) {
      for (const e of object.entities) {
        message.entities.push(EntityReference.fromPartial(e));
      }
    }
    if (object.identities !== undefined && object.identities !== null) {
      for (const e of object.identities) {
        message.identities.push(PeerIdentity.fromPartial(e));
      }
    }
    return message;
  },
};

const baseIdentity_Claim: object = { index: "", proof: "", data: "", tags: "" };

export const Identity_Claim = {
  encode(message: Identity_Claim, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.proof !== "") {
      writer.uint32(18).string(message.proof);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    for (const v of message.tags) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Identity_Claim {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentity_Claim } as Identity_Claim;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.proof = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        case 4:
          message.tags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Identity_Claim {
    const message = { ...baseIdentity_Claim } as Identity_Claim;
    message.tags = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = String(object.proof);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Identity_Claim): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.proof !== undefined && (obj.proof = message.proof);
    message.data !== undefined && (obj.data = message.data);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Identity_Claim>): Identity_Claim {
    const message = { ...baseIdentity_Claim } as Identity_Claim;
    message.tags = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = object.proof;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(e);
      }
    }
    return message;
  },
};

const baseIdentity_MetaEntry: object = { key: "", value: "" };

export const Identity_MetaEntry = {
  encode(
    message: Identity_MetaEntry,
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

  decode(input: Reader | Uint8Array, length?: number): Identity_MetaEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIdentity_MetaEntry } as Identity_MetaEntry;
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

  fromJSON(object: any): Identity_MetaEntry {
    const message = { ...baseIdentity_MetaEntry } as Identity_MetaEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    }
    return message;
  },

  toJSON(message: Identity_MetaEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<Identity_MetaEntry>): Identity_MetaEntry {
    const message = { ...baseIdentity_MetaEntry } as Identity_MetaEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
};

const basePeerIdentity: object = { type: 0, alias: "", identityId: "" };

export const PeerIdentity = {
  encode(message: PeerIdentity, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.alias !== "") {
      writer.uint32(18).string(message.alias);
    }
    if (message.identityId !== "") {
      writer.uint32(26).string(message.identityId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PeerIdentity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePeerIdentity } as PeerIdentity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.alias = reader.string();
          break;
        case 3:
          message.identityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PeerIdentity {
    const message = { ...basePeerIdentity } as PeerIdentity;
    if (object.type !== undefined && object.type !== null) {
      message.type = peerIdentity_TypeFromJSON(object.type);
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = String(object.alias);
    }
    if (object.identityId !== undefined && object.identityId !== null) {
      message.identityId = String(object.identityId);
    }
    return message;
  },

  toJSON(message: PeerIdentity): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = peerIdentity_TypeToJSON(message.type));
    message.alias !== undefined && (obj.alias = message.alias);
    message.identityId !== undefined && (obj.identityId = message.identityId);
    return obj;
  },

  fromPartial(object: DeepPartial<PeerIdentity>): PeerIdentity {
    const message = { ...basePeerIdentity } as PeerIdentity;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.alias !== undefined && object.alias !== null) {
      message.alias = object.alias;
    }
    if (object.identityId !== undefined && object.identityId !== null) {
      message.identityId = object.identityId;
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
