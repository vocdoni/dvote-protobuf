/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "dvote.types.v1";

export enum SignatureType {
  UNKNOWN = 0,
  ECDSA = 1,
  ECDSA_PIDSALTED = 2,
  ECDSA_BLIND = 3,
  ECDSA_BLIND_PIDSALTED = 4,
  UNRECOGNIZED = -1,
}

export function signatureTypeFromJSON(object: any): SignatureType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return SignatureType.UNKNOWN;
    case 1:
    case "ECDSA":
      return SignatureType.ECDSA;
    case 2:
    case "ECDSA_PIDSALTED":
      return SignatureType.ECDSA_PIDSALTED;
    case 3:
    case "ECDSA_BLIND":
      return SignatureType.ECDSA_BLIND;
    case 4:
    case "ECDSA_BLIND_PIDSALTED":
      return SignatureType.ECDSA_BLIND_PIDSALTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignatureType.UNRECOGNIZED;
  }
}

export function signatureTypeToJSON(object: SignatureType): string {
  switch (object) {
    case SignatureType.UNKNOWN:
      return "UNKNOWN";
    case SignatureType.ECDSA:
      return "ECDSA";
    case SignatureType.ECDSA_PIDSALTED:
      return "ECDSA_PIDSALTED";
    case SignatureType.ECDSA_BLIND:
      return "ECDSA_BLIND";
    case SignatureType.ECDSA_BLIND_PIDSALTED:
      return "ECDSA_BLIND_PIDSALTED";
    default:
      return "UNKNOWN";
  }
}

export interface VoteEnvelope {
  /** Unique number per vote attempt, so that replay attacks can't reuse this payload */
  nonce: Uint8Array;
  /** The process for which the vote is casted */
  processId: Uint8Array;
  /** Merkle proof, ZK Proof or Ethereum storage proof */
  proof: Proof | undefined;
  /** base64 encoded bytes[] of the VotePackage */
  votePackage: Uint8Array;
  /** optional bytes nullifier = 5; */
  nullifier: Uint8Array;
  /** On encrypted votes, contains the (sorted) indexes of the keys used to encrypt */
  encryptionKeyIndexes: number[];
}

export interface Proof {
  payload?:
    | { $case: "graviton"; graviton: ProofGraviton }
    | { $case: "iden3"; iden3: ProofIden3 }
    | { $case: "ethereumStorage"; ethereumStorage: ProofEthereumStorage }
    | { $case: "ethereumAccount"; ethereumAccount: ProofEthereumAccount }
    | { $case: "ca"; ca: ProofCA };
}

export interface ProofGraviton {
  siblings: Uint8Array;
}

export interface ProofIden3 {
  siblings: Uint8Array;
}

export interface ProofCA {
  type: SignatureType;
  bundle: CAbundle | undefined;
  signature: Uint8Array;
}

export interface CAbundle {
  processId: Uint8Array;
  address: Uint8Array;
}

export interface ProofEthereumStorage {
  key: Uint8Array;
  value: Uint8Array;
  siblings: Uint8Array[];
}

export interface ProofEthereumAccount {
  nonce: Uint8Array;
  /** Big Int encoded as bytes */
  balance: Uint8Array;
  storageHash: Uint8Array;
  codeHash: Uint8Array;
  siblings: Uint8Array[];
}

const baseVoteEnvelope: object = { encryptionKeyIndexes: 0 };

export const VoteEnvelope = {
  encode(message: VoteEnvelope, writer: Writer = Writer.create()): Writer {
    if (message.nonce.length !== 0) {
      writer.uint32(10).bytes(message.nonce);
    }
    if (message.processId.length !== 0) {
      writer.uint32(18).bytes(message.processId);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    if (message.votePackage.length !== 0) {
      writer.uint32(34).bytes(message.votePackage);
    }
    if (message.nullifier.length !== 0) {
      writer.uint32(42).bytes(message.nullifier);
    }
    writer.uint32(50).fork();
    for (const v of message.encryptionKeyIndexes) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VoteEnvelope {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVoteEnvelope } as VoteEnvelope;
    message.encryptionKeyIndexes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.bytes();
          break;
        case 2:
          message.processId = reader.bytes();
          break;
        case 3:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        case 4:
          message.votePackage = reader.bytes();
          break;
        case 5:
          message.nullifier = reader.bytes();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.encryptionKeyIndexes.push(reader.uint32());
            }
          } else {
            message.encryptionKeyIndexes.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VoteEnvelope {
    const message = { ...baseVoteEnvelope } as VoteEnvelope;
    message.encryptionKeyIndexes = [];
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = bytesFromBase64(object.nonce);
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = bytesFromBase64(object.processId);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof);
    }
    if (object.votePackage !== undefined && object.votePackage !== null) {
      message.votePackage = bytesFromBase64(object.votePackage);
    }
    if (object.nullifier !== undefined && object.nullifier !== null) {
      message.nullifier = bytesFromBase64(object.nullifier);
    }
    if (
      object.encryptionKeyIndexes !== undefined &&
      object.encryptionKeyIndexes !== null
    ) {
      for (const e of object.encryptionKeyIndexes) {
        message.encryptionKeyIndexes.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: VoteEnvelope): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(
        message.processId !== undefined ? message.processId : new Uint8Array()
      ));
    message.proof !== undefined &&
      (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    message.votePackage !== undefined &&
      (obj.votePackage = base64FromBytes(
        message.votePackage !== undefined
          ? message.votePackage
          : new Uint8Array()
      ));
    message.nullifier !== undefined &&
      (obj.nullifier = base64FromBytes(
        message.nullifier !== undefined ? message.nullifier : new Uint8Array()
      ));
    if (message.encryptionKeyIndexes) {
      obj.encryptionKeyIndexes = message.encryptionKeyIndexes.map((e) => e);
    } else {
      obj.encryptionKeyIndexes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VoteEnvelope>): VoteEnvelope {
    const message = { ...baseVoteEnvelope } as VoteEnvelope;
    message.encryptionKeyIndexes = [];
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = object.processId;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    }
    if (object.votePackage !== undefined && object.votePackage !== null) {
      message.votePackage = object.votePackage;
    }
    if (object.nullifier !== undefined && object.nullifier !== null) {
      message.nullifier = object.nullifier;
    }
    if (
      object.encryptionKeyIndexes !== undefined &&
      object.encryptionKeyIndexes !== null
    ) {
      for (const e of object.encryptionKeyIndexes) {
        message.encryptionKeyIndexes.push(e);
      }
    }
    return message;
  },
};

const baseProof: object = {};

export const Proof = {
  encode(message: Proof, writer: Writer = Writer.create()): Writer {
    if (message.payload?.$case === "graviton") {
      ProofGraviton.encode(
        message.payload.graviton,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "iden3") {
      ProofIden3.encode(
        message.payload.iden3,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "ethereumStorage") {
      ProofEthereumStorage.encode(
        message.payload.ethereumStorage,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "ethereumAccount") {
      ProofEthereumAccount.encode(
        message.payload.ethereumAccount,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.payload?.$case === "ca") {
      ProofCA.encode(message.payload.ca, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProof } as Proof;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = {
            $case: "graviton",
            graviton: ProofGraviton.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.payload = {
            $case: "iden3",
            iden3: ProofIden3.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.payload = {
            $case: "ethereumStorage",
            ethereumStorage: ProofEthereumStorage.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 4:
          message.payload = {
            $case: "ethereumAccount",
            ethereumAccount: ProofEthereumAccount.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 5:
          message.payload = {
            $case: "ca",
            ca: ProofCA.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proof {
    const message = { ...baseProof } as Proof;
    if (object.graviton !== undefined && object.graviton !== null) {
      message.payload = {
        $case: "graviton",
        graviton: ProofGraviton.fromJSON(object.graviton),
      };
    }
    if (object.iden3 !== undefined && object.iden3 !== null) {
      message.payload = {
        $case: "iden3",
        iden3: ProofIden3.fromJSON(object.iden3),
      };
    }
    if (
      object.ethereumStorage !== undefined &&
      object.ethereumStorage !== null
    ) {
      message.payload = {
        $case: "ethereumStorage",
        ethereumStorage: ProofEthereumStorage.fromJSON(object.ethereumStorage),
      };
    }
    if (
      object.ethereumAccount !== undefined &&
      object.ethereumAccount !== null
    ) {
      message.payload = {
        $case: "ethereumAccount",
        ethereumAccount: ProofEthereumAccount.fromJSON(object.ethereumAccount),
      };
    }
    if (object.ca !== undefined && object.ca !== null) {
      message.payload = { $case: "ca", ca: ProofCA.fromJSON(object.ca) };
    }
    return message;
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.payload?.$case === "graviton" &&
      (obj.graviton = message.payload?.graviton
        ? ProofGraviton.toJSON(message.payload?.graviton)
        : undefined);
    message.payload?.$case === "iden3" &&
      (obj.iden3 = message.payload?.iden3
        ? ProofIden3.toJSON(message.payload?.iden3)
        : undefined);
    message.payload?.$case === "ethereumStorage" &&
      (obj.ethereumStorage = message.payload?.ethereumStorage
        ? ProofEthereumStorage.toJSON(message.payload?.ethereumStorage)
        : undefined);
    message.payload?.$case === "ethereumAccount" &&
      (obj.ethereumAccount = message.payload?.ethereumAccount
        ? ProofEthereumAccount.toJSON(message.payload?.ethereumAccount)
        : undefined);
    message.payload?.$case === "ca" &&
      (obj.ca = message.payload?.ca
        ? ProofCA.toJSON(message.payload?.ca)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = { ...baseProof } as Proof;
    if (
      object.payload?.$case === "graviton" &&
      object.payload?.graviton !== undefined &&
      object.payload?.graviton !== null
    ) {
      message.payload = {
        $case: "graviton",
        graviton: ProofGraviton.fromPartial(object.payload.graviton),
      };
    }
    if (
      object.payload?.$case === "iden3" &&
      object.payload?.iden3 !== undefined &&
      object.payload?.iden3 !== null
    ) {
      message.payload = {
        $case: "iden3",
        iden3: ProofIden3.fromPartial(object.payload.iden3),
      };
    }
    if (
      object.payload?.$case === "ethereumStorage" &&
      object.payload?.ethereumStorage !== undefined &&
      object.payload?.ethereumStorage !== null
    ) {
      message.payload = {
        $case: "ethereumStorage",
        ethereumStorage: ProofEthereumStorage.fromPartial(
          object.payload.ethereumStorage
        ),
      };
    }
    if (
      object.payload?.$case === "ethereumAccount" &&
      object.payload?.ethereumAccount !== undefined &&
      object.payload?.ethereumAccount !== null
    ) {
      message.payload = {
        $case: "ethereumAccount",
        ethereumAccount: ProofEthereumAccount.fromPartial(
          object.payload.ethereumAccount
        ),
      };
    }
    if (
      object.payload?.$case === "ca" &&
      object.payload?.ca !== undefined &&
      object.payload?.ca !== null
    ) {
      message.payload = {
        $case: "ca",
        ca: ProofCA.fromPartial(object.payload.ca),
      };
    }
    return message;
  },
};

const baseProofGraviton: object = {};

export const ProofGraviton = {
  encode(message: ProofGraviton, writer: Writer = Writer.create()): Writer {
    if (message.siblings.length !== 0) {
      writer.uint32(10).bytes(message.siblings);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofGraviton {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofGraviton } as ProofGraviton;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.siblings = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofGraviton {
    const message = { ...baseProofGraviton } as ProofGraviton;
    if (object.siblings !== undefined && object.siblings !== null) {
      message.siblings = bytesFromBase64(object.siblings);
    }
    return message;
  },

  toJSON(message: ProofGraviton): unknown {
    const obj: any = {};
    message.siblings !== undefined &&
      (obj.siblings = base64FromBytes(
        message.siblings !== undefined ? message.siblings : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ProofGraviton>): ProofGraviton {
    const message = { ...baseProofGraviton } as ProofGraviton;
    if (object.siblings !== undefined && object.siblings !== null) {
      message.siblings = object.siblings;
    }
    return message;
  },
};

const baseProofIden3: object = {};

export const ProofIden3 = {
  encode(message: ProofIden3, writer: Writer = Writer.create()): Writer {
    if (message.siblings.length !== 0) {
      writer.uint32(10).bytes(message.siblings);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofIden3 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofIden3 } as ProofIden3;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.siblings = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofIden3 {
    const message = { ...baseProofIden3 } as ProofIden3;
    if (object.siblings !== undefined && object.siblings !== null) {
      message.siblings = bytesFromBase64(object.siblings);
    }
    return message;
  },

  toJSON(message: ProofIden3): unknown {
    const obj: any = {};
    message.siblings !== undefined &&
      (obj.siblings = base64FromBytes(
        message.siblings !== undefined ? message.siblings : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ProofIden3>): ProofIden3 {
    const message = { ...baseProofIden3 } as ProofIden3;
    if (object.siblings !== undefined && object.siblings !== null) {
      message.siblings = object.siblings;
    }
    return message;
  },
};

const baseProofCA: object = { type: 0 };

export const ProofCA = {
  encode(message: ProofCA, writer: Writer = Writer.create()): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.bundle !== undefined) {
      CAbundle.encode(message.bundle, writer.uint32(18).fork()).ldelim();
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofCA {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofCA } as ProofCA;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.bundle = CAbundle.decode(reader, reader.uint32());
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofCA {
    const message = { ...baseProofCA } as ProofCA;
    if (object.type !== undefined && object.type !== null) {
      message.type = signatureTypeFromJSON(object.type);
    }
    if (object.bundle !== undefined && object.bundle !== null) {
      message.bundle = CAbundle.fromJSON(object.bundle);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },

  toJSON(message: ProofCA): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = signatureTypeToJSON(message.type));
    message.bundle !== undefined &&
      (obj.bundle = message.bundle
        ? CAbundle.toJSON(message.bundle)
        : undefined);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<ProofCA>): ProofCA {
    const message = { ...baseProofCA } as ProofCA;
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.bundle !== undefined && object.bundle !== null) {
      message.bundle = CAbundle.fromPartial(object.bundle);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature;
    }
    return message;
  },
};

const baseCAbundle: object = {};

export const CAbundle = {
  encode(message: CAbundle, writer: Writer = Writer.create()): Writer {
    if (message.processId.length !== 0) {
      writer.uint32(10).bytes(message.processId);
    }
    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CAbundle {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCAbundle } as CAbundle;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.processId = reader.bytes();
          break;
        case 2:
          message.address = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CAbundle {
    const message = { ...baseCAbundle } as CAbundle;
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = bytesFromBase64(object.processId);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = bytesFromBase64(object.address);
    }
    return message;
  },

  toJSON(message: CAbundle): unknown {
    const obj: any = {};
    message.processId !== undefined &&
      (obj.processId = base64FromBytes(
        message.processId !== undefined ? message.processId : new Uint8Array()
      ));
    message.address !== undefined &&
      (obj.address = base64FromBytes(
        message.address !== undefined ? message.address : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<CAbundle>): CAbundle {
    const message = { ...baseCAbundle } as CAbundle;
    if (object.processId !== undefined && object.processId !== null) {
      message.processId = object.processId;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
};

const baseProofEthereumStorage: object = {};

export const ProofEthereumStorage = {
  encode(
    message: ProofEthereumStorage,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    for (const v of message.siblings) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofEthereumStorage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofEthereumStorage } as ProofEthereumStorage;
    message.siblings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.siblings.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofEthereumStorage {
    const message = { ...baseProofEthereumStorage } as ProofEthereumStorage;
    message.siblings = [];
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.siblings !== undefined && object.siblings !== null) {
      for (const e of object.siblings) {
        message.siblings.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: ProofEthereumStorage): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    if (message.siblings) {
      obj.siblings = message.siblings.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.siblings = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProofEthereumStorage>): ProofEthereumStorage {
    const message = { ...baseProofEthereumStorage } as ProofEthereumStorage;
    message.siblings = [];
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.siblings !== undefined && object.siblings !== null) {
      for (const e of object.siblings) {
        message.siblings.push(e);
      }
    }
    return message;
  },
};

const baseProofEthereumAccount: object = {};

export const ProofEthereumAccount = {
  encode(
    message: ProofEthereumAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nonce.length !== 0) {
      writer.uint32(10).bytes(message.nonce);
    }
    if (message.balance.length !== 0) {
      writer.uint32(18).bytes(message.balance);
    }
    if (message.storageHash.length !== 0) {
      writer.uint32(26).bytes(message.storageHash);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(34).bytes(message.codeHash);
    }
    for (const v of message.siblings) {
      writer.uint32(42).bytes(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ProofEthereumAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProofEthereumAccount } as ProofEthereumAccount;
    message.siblings = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.bytes();
          break;
        case 2:
          message.balance = reader.bytes();
          break;
        case 3:
          message.storageHash = reader.bytes();
          break;
        case 4:
          message.codeHash = reader.bytes();
          break;
        case 5:
          message.siblings.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProofEthereumAccount {
    const message = { ...baseProofEthereumAccount } as ProofEthereumAccount;
    message.siblings = [];
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = bytesFromBase64(object.nonce);
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = bytesFromBase64(object.balance);
    }
    if (object.storageHash !== undefined && object.storageHash !== null) {
      message.storageHash = bytesFromBase64(object.storageHash);
    }
    if (object.codeHash !== undefined && object.codeHash !== null) {
      message.codeHash = bytesFromBase64(object.codeHash);
    }
    if (object.siblings !== undefined && object.siblings !== null) {
      for (const e of object.siblings) {
        message.siblings.push(bytesFromBase64(e));
      }
    }
    return message;
  },

  toJSON(message: ProofEthereumAccount): unknown {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(
        message.nonce !== undefined ? message.nonce : new Uint8Array()
      ));
    message.balance !== undefined &&
      (obj.balance = base64FromBytes(
        message.balance !== undefined ? message.balance : new Uint8Array()
      ));
    message.storageHash !== undefined &&
      (obj.storageHash = base64FromBytes(
        message.storageHash !== undefined
          ? message.storageHash
          : new Uint8Array()
      ));
    message.codeHash !== undefined &&
      (obj.codeHash = base64FromBytes(
        message.codeHash !== undefined ? message.codeHash : new Uint8Array()
      ));
    if (message.siblings) {
      obj.siblings = message.siblings.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.siblings = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ProofEthereumAccount>): ProofEthereumAccount {
    const message = { ...baseProofEthereumAccount } as ProofEthereumAccount;
    message.siblings = [];
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    }
    if (object.storageHash !== undefined && object.storageHash !== null) {
      message.storageHash = object.storageHash;
    }
    if (object.codeHash !== undefined && object.codeHash !== null) {
      message.codeHash = object.codeHash;
    }
    if (object.siblings !== undefined && object.siblings !== null) {
      for (const e of object.siblings) {
        message.siblings.push(e);
      }
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

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
