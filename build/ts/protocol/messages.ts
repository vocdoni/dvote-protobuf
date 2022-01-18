/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import {
  SignatureType,
  signatureTypeFromJSON,
  signatureTypeToJSON,
} from "../protocol/enums";
import {
  SetOrganization,
  Transfer,
  Mint,
  ClaimTokens,
  NewElection,
  RegisterElectionKey,
  SubmitBallot,
  SetElectionStatus,
  SetProposalStatus,
} from "../protocol/transactions";
import {
  GetElection,
  GetElectionList,
  GetOrganization,
  GetBallot,
  GetElectionBallots,
  GetElectionKeys,
  GetElectionCircuitInfo,
  GetElectionResults,
  GetElectionResultsWeight,
  NewCensus,
  AddCensusKeys,
  GetCensusRoot,
  GetCensusSize,
  PublishCensus,
  GetCensusProof,
  DumpCensus,
  PinFile,
  FetchFile,
  GetBlockStatus,
  GetBlockCount,
  EstimateElectionPrice,
  GetTransaction,
  GetRawTransactionMessage,
  WaitTransaction,
} from "../protocol/service";

export const protobufPackage = "dvote.types.v2";

/** Remote calls between components are a message, optionally signed */
export interface Message {
  /** The bytes of the {Body} model being signed */
  body: Uint8Array;
  /**
   * Optionally signed. Not expected when:
   * - Submitting a vote
   * - Performing a read-only operation
   */
  signature?: Uint8Array | undefined;
  signatureType: SignatureType;
}

/** The body contains the serialized bytes from a `Body`, which can host three types of interactions. */
export interface Body {
  id: Uint8Array;
  /** UNIX timestamp */
  timestamp: number;
  body?:
    | { $case: "transaction"; transaction: Transaction }
    | { $case: "receipt"; receipt: TransactionReceipt }
    | { $case: "request"; request: Request }
    | { $case: "response"; response: Response };
}

/** Vochain or VocOne transactions, all wrapped within a `Message > Body`. */
export interface Transaction {
  body?:
    | { $case: "setOrganization"; setOrganization: SetOrganization }
    | { $case: "transfer"; transfer: Transfer }
    | { $case: "mint"; mint: Mint }
    | { $case: "claimTokens"; claimTokens: ClaimTokens }
    | { $case: "newElection"; newElection: NewElection }
    | { $case: "registerElectionKey"; registerElectionKey: RegisterElectionKey }
    | { $case: "submitBallot"; submitBallot: SubmitBallot }
    | { $case: "setElectionStatus"; setElectionStatus: SetElectionStatus }
    | { $case: "setProposalStatus"; setProposalStatus: SetProposalStatus };
}

/** The response given to the transaction submitter: */
export interface TransactionReceipt {
  body?:
    | { $case: "success"; success: TransactionSuccess }
    | { $case: "error"; error: TransactionError };
}

export interface TransactionSuccess {
  hash: Uint8Array;
}

export interface TransactionError {
  message: string;
  code: number;
}

/** Census Service, File gateways, and similar nodes expect `Request` models, and return `Response` models, all wrapped within a `Message > Body`. */
export interface Request {
  body?:
    | { $case: "getElection"; getElection: GetElection }
    | { $case: "getElectionList"; getElectionList: GetElectionList }
    | { $case: "getOrganization"; getOrganization: GetOrganization }
    | { $case: "getBallot"; getBallot: GetBallot }
    | { $case: "getElectionBallots"; getElectionBallots: GetElectionBallots }
    | { $case: "getElectionKeys"; getElectionKeys: GetElectionKeys }
    | {
        $case: "getElectionCircuitInfo";
        getElectionCircuitInfo: GetElectionCircuitInfo;
      }
    | { $case: "getElectionResults"; getElectionResults: GetElectionResults }
    | {
        $case: "getElectionResultsWeight";
        getElectionResultsWeight: GetElectionResultsWeight;
      }
    | { $case: "newCensus"; newCensus: NewCensus }
    | { $case: "addCensusKeys"; addCensusKeys: AddCensusKeys }
    | { $case: "getCensusRoot"; getCensusRoot: GetCensusRoot }
    | { $case: "getCensusSize"; getCensusSize: GetCensusSize }
    | { $case: "publishCensus"; publishCensus: PublishCensus }
    | { $case: "getCensusProof"; getCensusProof: GetCensusProof }
    | { $case: "dumpCensus"; dumpCensus: DumpCensus }
    | { $case: "pinFile"; pinFile: PinFile }
    | { $case: "fetchFile"; fetchFile: FetchFile }
    | { $case: "getBlockStatus"; getBlockStatus: GetBlockStatus }
    | { $case: "getBlockCount"; getBlockCount: GetBlockCount }
    | {
        $case: "estimateElectionPrice";
        estimateElectionPrice: EstimateElectionPrice;
      }
    | { $case: "getTransaction"; getTransaction: GetTransaction }
    | {
        $case: "getRawTransactionMessage";
        getRawTransactionMessage: GetRawTransactionMessage;
      }
    | { $case: "waitTransaction"; waitTransaction: WaitTransaction };
}

/** Responses can either be successful or fail. The `Response` body depends on the type of request made originally, and the caller is responsible for deserializing the bytes into the according model, if any. */
export interface Response {
  body?:
    | { $case: "success"; success: ResponseSuccess }
    | { $case: "error"; error: ResponseError };
}

export interface ResponseSuccess {
  /** Serialized response, related to the request model */
  body: Uint8Array;
}

export interface ResponseError {
  message: string;
  /** Serialized response, related to the request model */
  body: Uint8Array;
}

function createBaseMessage(): Message {
  return { body: new Uint8Array(), signature: undefined, signatureType: 0 };
}

export const Message = {
  encode(message: Message, writer: Writer = Writer.create()): Writer {
    if (message.body.length !== 0) {
      writer.uint32(10).bytes(message.body);
    }
    if (message.signature !== undefined) {
      writer.uint32(18).bytes(message.signature);
    }
    if (message.signatureType !== 0) {
      writer.uint32(24).int32(message.signatureType);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.bytes();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        case 3:
          message.signatureType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      body: isSet(object.body)
        ? bytesFromBase64(object.body)
        : new Uint8Array(),
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : undefined,
      signatureType: isSet(object.signatureType)
        ? signatureTypeFromJSON(object.signatureType)
        : 0,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = base64FromBytes(
        message.body !== undefined ? message.body : new Uint8Array()
      ));
    message.signature !== undefined &&
      (obj.signature =
        message.signature !== undefined
          ? base64FromBytes(message.signature)
          : undefined);
    message.signatureType !== undefined &&
      (obj.signatureType = signatureTypeToJSON(message.signatureType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.body = object.body ?? new Uint8Array();
    message.signature = object.signature ?? undefined;
    message.signatureType = object.signatureType ?? 0;
    return message;
  },
};

function createBaseBody(): Body {
  return { id: new Uint8Array(), timestamp: 0, body: undefined };
}

export const Body = {
  encode(message: Body, writer: Writer = Writer.create()): Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).int32(message.timestamp);
    }
    if (message.body?.$case === "transaction") {
      Transaction.encode(
        message.body.transaction,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.body?.$case === "receipt") {
      TransactionReceipt.encode(
        message.body.receipt,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.body?.$case === "request") {
      Request.encode(message.body.request, writer.uint32(106).fork()).ldelim();
    }
    if (message.body?.$case === "response") {
      Response.encode(
        message.body.response,
        writer.uint32(114).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Body {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.timestamp = reader.int32();
          break;
        case 11:
          message.body = {
            $case: "transaction",
            transaction: Transaction.decode(reader, reader.uint32()),
          };
          break;
        case 12:
          message.body = {
            $case: "receipt",
            receipt: TransactionReceipt.decode(reader, reader.uint32()),
          };
          break;
        case 13:
          message.body = {
            $case: "request",
            request: Request.decode(reader, reader.uint32()),
          };
          break;
        case 14:
          message.body = {
            $case: "response",
            response: Response.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Body {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      body: isSet(object.transaction)
        ? {
            $case: "transaction",
            transaction: Transaction.fromJSON(object.transaction),
          }
        : isSet(object.receipt)
        ? {
            $case: "receipt",
            receipt: TransactionReceipt.fromJSON(object.receipt),
          }
        : isSet(object.request)
        ? { $case: "request", request: Request.fromJSON(object.request) }
        : isSet(object.response)
        ? { $case: "response", response: Response.fromJSON(object.response) }
        : undefined,
    };
  },

  toJSON(message: Body): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = base64FromBytes(
        message.id !== undefined ? message.id : new Uint8Array()
      ));
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.body?.$case === "transaction" &&
      (obj.transaction = message.body?.transaction
        ? Transaction.toJSON(message.body?.transaction)
        : undefined);
    message.body?.$case === "receipt" &&
      (obj.receipt = message.body?.receipt
        ? TransactionReceipt.toJSON(message.body?.receipt)
        : undefined);
    message.body?.$case === "request" &&
      (obj.request = message.body?.request
        ? Request.toJSON(message.body?.request)
        : undefined);
    message.body?.$case === "response" &&
      (obj.response = message.body?.response
        ? Response.toJSON(message.body?.response)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Body>, I>>(object: I): Body {
    const message = createBaseBody();
    message.id = object.id ?? new Uint8Array();
    message.timestamp = object.timestamp ?? 0;
    if (
      object.body?.$case === "transaction" &&
      object.body?.transaction !== undefined &&
      object.body?.transaction !== null
    ) {
      message.body = {
        $case: "transaction",
        transaction: Transaction.fromPartial(object.body.transaction),
      };
    }
    if (
      object.body?.$case === "receipt" &&
      object.body?.receipt !== undefined &&
      object.body?.receipt !== null
    ) {
      message.body = {
        $case: "receipt",
        receipt: TransactionReceipt.fromPartial(object.body.receipt),
      };
    }
    if (
      object.body?.$case === "request" &&
      object.body?.request !== undefined &&
      object.body?.request !== null
    ) {
      message.body = {
        $case: "request",
        request: Request.fromPartial(object.body.request),
      };
    }
    if (
      object.body?.$case === "response" &&
      object.body?.response !== undefined &&
      object.body?.response !== null
    ) {
      message.body = {
        $case: "response",
        response: Response.fromPartial(object.body.response),
      };
    }
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return { body: undefined };
}

export const Transaction = {
  encode(message: Transaction, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "setOrganization") {
      SetOrganization.encode(
        message.body.setOrganization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "transfer") {
      Transfer.encode(message.body.transfer, writer.uint32(18).fork()).ldelim();
    }
    if (message.body?.$case === "mint") {
      Mint.encode(message.body.mint, writer.uint32(26).fork()).ldelim();
    }
    if (message.body?.$case === "claimTokens") {
      ClaimTokens.encode(
        message.body.claimTokens,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.body?.$case === "newElection") {
      NewElection.encode(
        message.body.newElection,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.body?.$case === "registerElectionKey") {
      RegisterElectionKey.encode(
        message.body.registerElectionKey,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.body?.$case === "submitBallot") {
      SubmitBallot.encode(
        message.body.submitBallot,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.body?.$case === "setElectionStatus") {
      SetElectionStatus.encode(
        message.body.setElectionStatus,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.body?.$case === "setProposalStatus") {
      SetProposalStatus.encode(
        message.body.setProposalStatus,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "setOrganization",
            setOrganization: SetOrganization.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "transfer",
            transfer: Transfer.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.body = {
            $case: "mint",
            mint: Mint.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.body = {
            $case: "claimTokens",
            claimTokens: ClaimTokens.decode(reader, reader.uint32()),
          };
          break;
        case 11:
          message.body = {
            $case: "newElection",
            newElection: NewElection.decode(reader, reader.uint32()),
          };
          break;
        case 12:
          message.body = {
            $case: "registerElectionKey",
            registerElectionKey: RegisterElectionKey.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 13:
          message.body = {
            $case: "submitBallot",
            submitBallot: SubmitBallot.decode(reader, reader.uint32()),
          };
          break;
        case 14:
          message.body = {
            $case: "setElectionStatus",
            setElectionStatus: SetElectionStatus.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 15:
          message.body = {
            $case: "setProposalStatus",
            setProposalStatus: SetProposalStatus.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      body: isSet(object.setOrganization)
        ? {
            $case: "setOrganization",
            setOrganization: SetOrganization.fromJSON(object.setOrganization),
          }
        : isSet(object.transfer)
        ? { $case: "transfer", transfer: Transfer.fromJSON(object.transfer) }
        : isSet(object.mint)
        ? { $case: "mint", mint: Mint.fromJSON(object.mint) }
        : isSet(object.claimTokens)
        ? {
            $case: "claimTokens",
            claimTokens: ClaimTokens.fromJSON(object.claimTokens),
          }
        : isSet(object.newElection)
        ? {
            $case: "newElection",
            newElection: NewElection.fromJSON(object.newElection),
          }
        : isSet(object.registerElectionKey)
        ? {
            $case: "registerElectionKey",
            registerElectionKey: RegisterElectionKey.fromJSON(
              object.registerElectionKey
            ),
          }
        : isSet(object.submitBallot)
        ? {
            $case: "submitBallot",
            submitBallot: SubmitBallot.fromJSON(object.submitBallot),
          }
        : isSet(object.setElectionStatus)
        ? {
            $case: "setElectionStatus",
            setElectionStatus: SetElectionStatus.fromJSON(
              object.setElectionStatus
            ),
          }
        : isSet(object.setProposalStatus)
        ? {
            $case: "setProposalStatus",
            setProposalStatus: SetProposalStatus.fromJSON(
              object.setProposalStatus
            ),
          }
        : undefined,
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.body?.$case === "setOrganization" &&
      (obj.setOrganization = message.body?.setOrganization
        ? SetOrganization.toJSON(message.body?.setOrganization)
        : undefined);
    message.body?.$case === "transfer" &&
      (obj.transfer = message.body?.transfer
        ? Transfer.toJSON(message.body?.transfer)
        : undefined);
    message.body?.$case === "mint" &&
      (obj.mint = message.body?.mint
        ? Mint.toJSON(message.body?.mint)
        : undefined);
    message.body?.$case === "claimTokens" &&
      (obj.claimTokens = message.body?.claimTokens
        ? ClaimTokens.toJSON(message.body?.claimTokens)
        : undefined);
    message.body?.$case === "newElection" &&
      (obj.newElection = message.body?.newElection
        ? NewElection.toJSON(message.body?.newElection)
        : undefined);
    message.body?.$case === "registerElectionKey" &&
      (obj.registerElectionKey = message.body?.registerElectionKey
        ? RegisterElectionKey.toJSON(message.body?.registerElectionKey)
        : undefined);
    message.body?.$case === "submitBallot" &&
      (obj.submitBallot = message.body?.submitBallot
        ? SubmitBallot.toJSON(message.body?.submitBallot)
        : undefined);
    message.body?.$case === "setElectionStatus" &&
      (obj.setElectionStatus = message.body?.setElectionStatus
        ? SetElectionStatus.toJSON(message.body?.setElectionStatus)
        : undefined);
    message.body?.$case === "setProposalStatus" &&
      (obj.setProposalStatus = message.body?.setProposalStatus
        ? SetProposalStatus.toJSON(message.body?.setProposalStatus)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(
    object: I
  ): Transaction {
    const message = createBaseTransaction();
    if (
      object.body?.$case === "setOrganization" &&
      object.body?.setOrganization !== undefined &&
      object.body?.setOrganization !== null
    ) {
      message.body = {
        $case: "setOrganization",
        setOrganization: SetOrganization.fromPartial(
          object.body.setOrganization
        ),
      };
    }
    if (
      object.body?.$case === "transfer" &&
      object.body?.transfer !== undefined &&
      object.body?.transfer !== null
    ) {
      message.body = {
        $case: "transfer",
        transfer: Transfer.fromPartial(object.body.transfer),
      };
    }
    if (
      object.body?.$case === "mint" &&
      object.body?.mint !== undefined &&
      object.body?.mint !== null
    ) {
      message.body = {
        $case: "mint",
        mint: Mint.fromPartial(object.body.mint),
      };
    }
    if (
      object.body?.$case === "claimTokens" &&
      object.body?.claimTokens !== undefined &&
      object.body?.claimTokens !== null
    ) {
      message.body = {
        $case: "claimTokens",
        claimTokens: ClaimTokens.fromPartial(object.body.claimTokens),
      };
    }
    if (
      object.body?.$case === "newElection" &&
      object.body?.newElection !== undefined &&
      object.body?.newElection !== null
    ) {
      message.body = {
        $case: "newElection",
        newElection: NewElection.fromPartial(object.body.newElection),
      };
    }
    if (
      object.body?.$case === "registerElectionKey" &&
      object.body?.registerElectionKey !== undefined &&
      object.body?.registerElectionKey !== null
    ) {
      message.body = {
        $case: "registerElectionKey",
        registerElectionKey: RegisterElectionKey.fromPartial(
          object.body.registerElectionKey
        ),
      };
    }
    if (
      object.body?.$case === "submitBallot" &&
      object.body?.submitBallot !== undefined &&
      object.body?.submitBallot !== null
    ) {
      message.body = {
        $case: "submitBallot",
        submitBallot: SubmitBallot.fromPartial(object.body.submitBallot),
      };
    }
    if (
      object.body?.$case === "setElectionStatus" &&
      object.body?.setElectionStatus !== undefined &&
      object.body?.setElectionStatus !== null
    ) {
      message.body = {
        $case: "setElectionStatus",
        setElectionStatus: SetElectionStatus.fromPartial(
          object.body.setElectionStatus
        ),
      };
    }
    if (
      object.body?.$case === "setProposalStatus" &&
      object.body?.setProposalStatus !== undefined &&
      object.body?.setProposalStatus !== null
    ) {
      message.body = {
        $case: "setProposalStatus",
        setProposalStatus: SetProposalStatus.fromPartial(
          object.body.setProposalStatus
        ),
      };
    }
    return message;
  },
};

function createBaseTransactionReceipt(): TransactionReceipt {
  return { body: undefined };
}

export const TransactionReceipt = {
  encode(
    message: TransactionReceipt,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.body?.$case === "success") {
      TransactionSuccess.encode(
        message.body.success,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "error") {
      TransactionError.encode(
        message.body.error,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TransactionReceipt {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "success",
            success: TransactionSuccess.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "error",
            error: TransactionError.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionReceipt {
    return {
      body: isSet(object.success)
        ? {
            $case: "success",
            success: TransactionSuccess.fromJSON(object.success),
          }
        : isSet(object.error)
        ? { $case: "error", error: TransactionError.fromJSON(object.error) }
        : undefined,
    };
  },

  toJSON(message: TransactionReceipt): unknown {
    const obj: any = {};
    message.body?.$case === "success" &&
      (obj.success = message.body?.success
        ? TransactionSuccess.toJSON(message.body?.success)
        : undefined);
    message.body?.$case === "error" &&
      (obj.error = message.body?.error
        ? TransactionError.toJSON(message.body?.error)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransactionReceipt>, I>>(
    object: I
  ): TransactionReceipt {
    const message = createBaseTransactionReceipt();
    if (
      object.body?.$case === "success" &&
      object.body?.success !== undefined &&
      object.body?.success !== null
    ) {
      message.body = {
        $case: "success",
        success: TransactionSuccess.fromPartial(object.body.success),
      };
    }
    if (
      object.body?.$case === "error" &&
      object.body?.error !== undefined &&
      object.body?.error !== null
    ) {
      message.body = {
        $case: "error",
        error: TransactionError.fromPartial(object.body.error),
      };
    }
    return message;
  },
};

function createBaseTransactionSuccess(): TransactionSuccess {
  return { hash: new Uint8Array() };
}

export const TransactionSuccess = {
  encode(
    message: TransactionSuccess,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TransactionSuccess {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionSuccess {
    return {
      hash: isSet(object.hash)
        ? bytesFromBase64(object.hash)
        : new Uint8Array(),
    };
  },

  toJSON(message: TransactionSuccess): unknown {
    const obj: any = {};
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransactionSuccess>, I>>(
    object: I
  ): TransactionSuccess {
    const message = createBaseTransactionSuccess();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
};

function createBaseTransactionError(): TransactionError {
  return { message: "", code: 0 };
}

export const TransactionError = {
  encode(message: TransactionError, writer: Writer = Writer.create()): Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.code !== 0) {
      writer.uint32(16).int32(message.code);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TransactionError {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.code = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionError {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      code: isSet(object.code) ? Number(object.code) : 0,
    };
  },

  toJSON(message: TransactionError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransactionError>, I>>(
    object: I
  ): TransactionError {
    const message = createBaseTransactionError();
    message.message = object.message ?? "";
    message.code = object.code ?? 0;
    return message;
  },
};

function createBaseRequest(): Request {
  return { body: undefined };
}

export const Request = {
  encode(message: Request, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "getElection") {
      GetElection.encode(
        message.body.getElection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionList") {
      GetElectionList.encode(
        message.body.getElectionList,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getOrganization") {
      GetOrganization.encode(
        message.body.getOrganization,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getBallot") {
      GetBallot.encode(
        message.body.getBallot,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionBallots") {
      GetElectionBallots.encode(
        message.body.getElectionBallots,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionKeys") {
      GetElectionKeys.encode(
        message.body.getElectionKeys,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionCircuitInfo") {
      GetElectionCircuitInfo.encode(
        message.body.getElectionCircuitInfo,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionResults") {
      GetElectionResults.encode(
        message.body.getElectionResults,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getElectionResultsWeight") {
      GetElectionResultsWeight.encode(
        message.body.getElectionResultsWeight,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.body?.$case === "newCensus") {
      NewCensus.encode(
        message.body.newCensus,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.body?.$case === "addCensusKeys") {
      AddCensusKeys.encode(
        message.body.addCensusKeys,
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getCensusRoot") {
      GetCensusRoot.encode(
        message.body.getCensusRoot,
        writer.uint32(266).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getCensusSize") {
      GetCensusSize.encode(
        message.body.getCensusSize,
        writer.uint32(274).fork()
      ).ldelim();
    }
    if (message.body?.$case === "publishCensus") {
      PublishCensus.encode(
        message.body.publishCensus,
        writer.uint32(282).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getCensusProof") {
      GetCensusProof.encode(
        message.body.getCensusProof,
        writer.uint32(290).fork()
      ).ldelim();
    }
    if (message.body?.$case === "dumpCensus") {
      DumpCensus.encode(
        message.body.dumpCensus,
        writer.uint32(298).fork()
      ).ldelim();
    }
    if (message.body?.$case === "pinFile") {
      PinFile.encode(message.body.pinFile, writer.uint32(410).fork()).ldelim();
    }
    if (message.body?.$case === "fetchFile") {
      FetchFile.encode(
        message.body.fetchFile,
        writer.uint32(418).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getBlockStatus") {
      GetBlockStatus.encode(
        message.body.getBlockStatus,
        writer.uint32(490).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getBlockCount") {
      GetBlockCount.encode(
        message.body.getBlockCount,
        writer.uint32(498).fork()
      ).ldelim();
    }
    if (message.body?.$case === "estimateElectionPrice") {
      EstimateElectionPrice.encode(
        message.body.estimateElectionPrice,
        writer.uint32(506).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getTransaction") {
      GetTransaction.encode(
        message.body.getTransaction,
        writer.uint32(650).fork()
      ).ldelim();
    }
    if (message.body?.$case === "getRawTransactionMessage") {
      GetRawTransactionMessage.encode(
        message.body.getRawTransactionMessage,
        writer.uint32(658).fork()
      ).ldelim();
    }
    if (message.body?.$case === "waitTransaction") {
      WaitTransaction.encode(
        message.body.waitTransaction,
        writer.uint32(666).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "getElection",
            getElection: GetElection.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "getElectionList",
            getElectionList: GetElectionList.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.body = {
            $case: "getOrganization",
            getOrganization: GetOrganization.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.body = {
            $case: "getBallot",
            getBallot: GetBallot.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.body = {
            $case: "getElectionBallots",
            getElectionBallots: GetElectionBallots.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 6:
          message.body = {
            $case: "getElectionKeys",
            getElectionKeys: GetElectionKeys.decode(reader, reader.uint32()),
          };
          break;
        case 7:
          message.body = {
            $case: "getElectionCircuitInfo",
            getElectionCircuitInfo: GetElectionCircuitInfo.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 8:
          message.body = {
            $case: "getElectionResults",
            getElectionResults: GetElectionResults.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 9:
          message.body = {
            $case: "getElectionResultsWeight",
            getElectionResultsWeight: GetElectionResultsWeight.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 31:
          message.body = {
            $case: "newCensus",
            newCensus: NewCensus.decode(reader, reader.uint32()),
          };
          break;
        case 32:
          message.body = {
            $case: "addCensusKeys",
            addCensusKeys: AddCensusKeys.decode(reader, reader.uint32()),
          };
          break;
        case 33:
          message.body = {
            $case: "getCensusRoot",
            getCensusRoot: GetCensusRoot.decode(reader, reader.uint32()),
          };
          break;
        case 34:
          message.body = {
            $case: "getCensusSize",
            getCensusSize: GetCensusSize.decode(reader, reader.uint32()),
          };
          break;
        case 35:
          message.body = {
            $case: "publishCensus",
            publishCensus: PublishCensus.decode(reader, reader.uint32()),
          };
          break;
        case 36:
          message.body = {
            $case: "getCensusProof",
            getCensusProof: GetCensusProof.decode(reader, reader.uint32()),
          };
          break;
        case 37:
          message.body = {
            $case: "dumpCensus",
            dumpCensus: DumpCensus.decode(reader, reader.uint32()),
          };
          break;
        case 51:
          message.body = {
            $case: "pinFile",
            pinFile: PinFile.decode(reader, reader.uint32()),
          };
          break;
        case 52:
          message.body = {
            $case: "fetchFile",
            fetchFile: FetchFile.decode(reader, reader.uint32()),
          };
          break;
        case 61:
          message.body = {
            $case: "getBlockStatus",
            getBlockStatus: GetBlockStatus.decode(reader, reader.uint32()),
          };
          break;
        case 62:
          message.body = {
            $case: "getBlockCount",
            getBlockCount: GetBlockCount.decode(reader, reader.uint32()),
          };
          break;
        case 63:
          message.body = {
            $case: "estimateElectionPrice",
            estimateElectionPrice: EstimateElectionPrice.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 81:
          message.body = {
            $case: "getTransaction",
            getTransaction: GetTransaction.decode(reader, reader.uint32()),
          };
          break;
        case 82:
          message.body = {
            $case: "getRawTransactionMessage",
            getRawTransactionMessage: GetRawTransactionMessage.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 83:
          message.body = {
            $case: "waitTransaction",
            waitTransaction: WaitTransaction.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      body: isSet(object.getElection)
        ? {
            $case: "getElection",
            getElection: GetElection.fromJSON(object.getElection),
          }
        : isSet(object.getElectionList)
        ? {
            $case: "getElectionList",
            getElectionList: GetElectionList.fromJSON(object.getElectionList),
          }
        : isSet(object.getOrganization)
        ? {
            $case: "getOrganization",
            getOrganization: GetOrganization.fromJSON(object.getOrganization),
          }
        : isSet(object.getBallot)
        ? {
            $case: "getBallot",
            getBallot: GetBallot.fromJSON(object.getBallot),
          }
        : isSet(object.getElectionBallots)
        ? {
            $case: "getElectionBallots",
            getElectionBallots: GetElectionBallots.fromJSON(
              object.getElectionBallots
            ),
          }
        : isSet(object.getElectionKeys)
        ? {
            $case: "getElectionKeys",
            getElectionKeys: GetElectionKeys.fromJSON(object.getElectionKeys),
          }
        : isSet(object.getElectionCircuitInfo)
        ? {
            $case: "getElectionCircuitInfo",
            getElectionCircuitInfo: GetElectionCircuitInfo.fromJSON(
              object.getElectionCircuitInfo
            ),
          }
        : isSet(object.getElectionResults)
        ? {
            $case: "getElectionResults",
            getElectionResults: GetElectionResults.fromJSON(
              object.getElectionResults
            ),
          }
        : isSet(object.getElectionResultsWeight)
        ? {
            $case: "getElectionResultsWeight",
            getElectionResultsWeight: GetElectionResultsWeight.fromJSON(
              object.getElectionResultsWeight
            ),
          }
        : isSet(object.newCensus)
        ? {
            $case: "newCensus",
            newCensus: NewCensus.fromJSON(object.newCensus),
          }
        : isSet(object.addCensusKeys)
        ? {
            $case: "addCensusKeys",
            addCensusKeys: AddCensusKeys.fromJSON(object.addCensusKeys),
          }
        : isSet(object.getCensusRoot)
        ? {
            $case: "getCensusRoot",
            getCensusRoot: GetCensusRoot.fromJSON(object.getCensusRoot),
          }
        : isSet(object.getCensusSize)
        ? {
            $case: "getCensusSize",
            getCensusSize: GetCensusSize.fromJSON(object.getCensusSize),
          }
        : isSet(object.publishCensus)
        ? {
            $case: "publishCensus",
            publishCensus: PublishCensus.fromJSON(object.publishCensus),
          }
        : isSet(object.getCensusProof)
        ? {
            $case: "getCensusProof",
            getCensusProof: GetCensusProof.fromJSON(object.getCensusProof),
          }
        : isSet(object.dumpCensus)
        ? {
            $case: "dumpCensus",
            dumpCensus: DumpCensus.fromJSON(object.dumpCensus),
          }
        : isSet(object.pinFile)
        ? { $case: "pinFile", pinFile: PinFile.fromJSON(object.pinFile) }
        : isSet(object.fetchFile)
        ? {
            $case: "fetchFile",
            fetchFile: FetchFile.fromJSON(object.fetchFile),
          }
        : isSet(object.getBlockStatus)
        ? {
            $case: "getBlockStatus",
            getBlockStatus: GetBlockStatus.fromJSON(object.getBlockStatus),
          }
        : isSet(object.getBlockCount)
        ? {
            $case: "getBlockCount",
            getBlockCount: GetBlockCount.fromJSON(object.getBlockCount),
          }
        : isSet(object.estimateElectionPrice)
        ? {
            $case: "estimateElectionPrice",
            estimateElectionPrice: EstimateElectionPrice.fromJSON(
              object.estimateElectionPrice
            ),
          }
        : isSet(object.getTransaction)
        ? {
            $case: "getTransaction",
            getTransaction: GetTransaction.fromJSON(object.getTransaction),
          }
        : isSet(object.getRawTransactionMessage)
        ? {
            $case: "getRawTransactionMessage",
            getRawTransactionMessage: GetRawTransactionMessage.fromJSON(
              object.getRawTransactionMessage
            ),
          }
        : isSet(object.waitTransaction)
        ? {
            $case: "waitTransaction",
            waitTransaction: WaitTransaction.fromJSON(object.waitTransaction),
          }
        : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.body?.$case === "getElection" &&
      (obj.getElection = message.body?.getElection
        ? GetElection.toJSON(message.body?.getElection)
        : undefined);
    message.body?.$case === "getElectionList" &&
      (obj.getElectionList = message.body?.getElectionList
        ? GetElectionList.toJSON(message.body?.getElectionList)
        : undefined);
    message.body?.$case === "getOrganization" &&
      (obj.getOrganization = message.body?.getOrganization
        ? GetOrganization.toJSON(message.body?.getOrganization)
        : undefined);
    message.body?.$case === "getBallot" &&
      (obj.getBallot = message.body?.getBallot
        ? GetBallot.toJSON(message.body?.getBallot)
        : undefined);
    message.body?.$case === "getElectionBallots" &&
      (obj.getElectionBallots = message.body?.getElectionBallots
        ? GetElectionBallots.toJSON(message.body?.getElectionBallots)
        : undefined);
    message.body?.$case === "getElectionKeys" &&
      (obj.getElectionKeys = message.body?.getElectionKeys
        ? GetElectionKeys.toJSON(message.body?.getElectionKeys)
        : undefined);
    message.body?.$case === "getElectionCircuitInfo" &&
      (obj.getElectionCircuitInfo = message.body?.getElectionCircuitInfo
        ? GetElectionCircuitInfo.toJSON(message.body?.getElectionCircuitInfo)
        : undefined);
    message.body?.$case === "getElectionResults" &&
      (obj.getElectionResults = message.body?.getElectionResults
        ? GetElectionResults.toJSON(message.body?.getElectionResults)
        : undefined);
    message.body?.$case === "getElectionResultsWeight" &&
      (obj.getElectionResultsWeight = message.body?.getElectionResultsWeight
        ? GetElectionResultsWeight.toJSON(
            message.body?.getElectionResultsWeight
          )
        : undefined);
    message.body?.$case === "newCensus" &&
      (obj.newCensus = message.body?.newCensus
        ? NewCensus.toJSON(message.body?.newCensus)
        : undefined);
    message.body?.$case === "addCensusKeys" &&
      (obj.addCensusKeys = message.body?.addCensusKeys
        ? AddCensusKeys.toJSON(message.body?.addCensusKeys)
        : undefined);
    message.body?.$case === "getCensusRoot" &&
      (obj.getCensusRoot = message.body?.getCensusRoot
        ? GetCensusRoot.toJSON(message.body?.getCensusRoot)
        : undefined);
    message.body?.$case === "getCensusSize" &&
      (obj.getCensusSize = message.body?.getCensusSize
        ? GetCensusSize.toJSON(message.body?.getCensusSize)
        : undefined);
    message.body?.$case === "publishCensus" &&
      (obj.publishCensus = message.body?.publishCensus
        ? PublishCensus.toJSON(message.body?.publishCensus)
        : undefined);
    message.body?.$case === "getCensusProof" &&
      (obj.getCensusProof = message.body?.getCensusProof
        ? GetCensusProof.toJSON(message.body?.getCensusProof)
        : undefined);
    message.body?.$case === "dumpCensus" &&
      (obj.dumpCensus = message.body?.dumpCensus
        ? DumpCensus.toJSON(message.body?.dumpCensus)
        : undefined);
    message.body?.$case === "pinFile" &&
      (obj.pinFile = message.body?.pinFile
        ? PinFile.toJSON(message.body?.pinFile)
        : undefined);
    message.body?.$case === "fetchFile" &&
      (obj.fetchFile = message.body?.fetchFile
        ? FetchFile.toJSON(message.body?.fetchFile)
        : undefined);
    message.body?.$case === "getBlockStatus" &&
      (obj.getBlockStatus = message.body?.getBlockStatus
        ? GetBlockStatus.toJSON(message.body?.getBlockStatus)
        : undefined);
    message.body?.$case === "getBlockCount" &&
      (obj.getBlockCount = message.body?.getBlockCount
        ? GetBlockCount.toJSON(message.body?.getBlockCount)
        : undefined);
    message.body?.$case === "estimateElectionPrice" &&
      (obj.estimateElectionPrice = message.body?.estimateElectionPrice
        ? EstimateElectionPrice.toJSON(message.body?.estimateElectionPrice)
        : undefined);
    message.body?.$case === "getTransaction" &&
      (obj.getTransaction = message.body?.getTransaction
        ? GetTransaction.toJSON(message.body?.getTransaction)
        : undefined);
    message.body?.$case === "getRawTransactionMessage" &&
      (obj.getRawTransactionMessage = message.body?.getRawTransactionMessage
        ? GetRawTransactionMessage.toJSON(
            message.body?.getRawTransactionMessage
          )
        : undefined);
    message.body?.$case === "waitTransaction" &&
      (obj.waitTransaction = message.body?.waitTransaction
        ? WaitTransaction.toJSON(message.body?.waitTransaction)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    if (
      object.body?.$case === "getElection" &&
      object.body?.getElection !== undefined &&
      object.body?.getElection !== null
    ) {
      message.body = {
        $case: "getElection",
        getElection: GetElection.fromPartial(object.body.getElection),
      };
    }
    if (
      object.body?.$case === "getElectionList" &&
      object.body?.getElectionList !== undefined &&
      object.body?.getElectionList !== null
    ) {
      message.body = {
        $case: "getElectionList",
        getElectionList: GetElectionList.fromPartial(
          object.body.getElectionList
        ),
      };
    }
    if (
      object.body?.$case === "getOrganization" &&
      object.body?.getOrganization !== undefined &&
      object.body?.getOrganization !== null
    ) {
      message.body = {
        $case: "getOrganization",
        getOrganization: GetOrganization.fromPartial(
          object.body.getOrganization
        ),
      };
    }
    if (
      object.body?.$case === "getBallot" &&
      object.body?.getBallot !== undefined &&
      object.body?.getBallot !== null
    ) {
      message.body = {
        $case: "getBallot",
        getBallot: GetBallot.fromPartial(object.body.getBallot),
      };
    }
    if (
      object.body?.$case === "getElectionBallots" &&
      object.body?.getElectionBallots !== undefined &&
      object.body?.getElectionBallots !== null
    ) {
      message.body = {
        $case: "getElectionBallots",
        getElectionBallots: GetElectionBallots.fromPartial(
          object.body.getElectionBallots
        ),
      };
    }
    if (
      object.body?.$case === "getElectionKeys" &&
      object.body?.getElectionKeys !== undefined &&
      object.body?.getElectionKeys !== null
    ) {
      message.body = {
        $case: "getElectionKeys",
        getElectionKeys: GetElectionKeys.fromPartial(
          object.body.getElectionKeys
        ),
      };
    }
    if (
      object.body?.$case === "getElectionCircuitInfo" &&
      object.body?.getElectionCircuitInfo !== undefined &&
      object.body?.getElectionCircuitInfo !== null
    ) {
      message.body = {
        $case: "getElectionCircuitInfo",
        getElectionCircuitInfo: GetElectionCircuitInfo.fromPartial(
          object.body.getElectionCircuitInfo
        ),
      };
    }
    if (
      object.body?.$case === "getElectionResults" &&
      object.body?.getElectionResults !== undefined &&
      object.body?.getElectionResults !== null
    ) {
      message.body = {
        $case: "getElectionResults",
        getElectionResults: GetElectionResults.fromPartial(
          object.body.getElectionResults
        ),
      };
    }
    if (
      object.body?.$case === "getElectionResultsWeight" &&
      object.body?.getElectionResultsWeight !== undefined &&
      object.body?.getElectionResultsWeight !== null
    ) {
      message.body = {
        $case: "getElectionResultsWeight",
        getElectionResultsWeight: GetElectionResultsWeight.fromPartial(
          object.body.getElectionResultsWeight
        ),
      };
    }
    if (
      object.body?.$case === "newCensus" &&
      object.body?.newCensus !== undefined &&
      object.body?.newCensus !== null
    ) {
      message.body = {
        $case: "newCensus",
        newCensus: NewCensus.fromPartial(object.body.newCensus),
      };
    }
    if (
      object.body?.$case === "addCensusKeys" &&
      object.body?.addCensusKeys !== undefined &&
      object.body?.addCensusKeys !== null
    ) {
      message.body = {
        $case: "addCensusKeys",
        addCensusKeys: AddCensusKeys.fromPartial(object.body.addCensusKeys),
      };
    }
    if (
      object.body?.$case === "getCensusRoot" &&
      object.body?.getCensusRoot !== undefined &&
      object.body?.getCensusRoot !== null
    ) {
      message.body = {
        $case: "getCensusRoot",
        getCensusRoot: GetCensusRoot.fromPartial(object.body.getCensusRoot),
      };
    }
    if (
      object.body?.$case === "getCensusSize" &&
      object.body?.getCensusSize !== undefined &&
      object.body?.getCensusSize !== null
    ) {
      message.body = {
        $case: "getCensusSize",
        getCensusSize: GetCensusSize.fromPartial(object.body.getCensusSize),
      };
    }
    if (
      object.body?.$case === "publishCensus" &&
      object.body?.publishCensus !== undefined &&
      object.body?.publishCensus !== null
    ) {
      message.body = {
        $case: "publishCensus",
        publishCensus: PublishCensus.fromPartial(object.body.publishCensus),
      };
    }
    if (
      object.body?.$case === "getCensusProof" &&
      object.body?.getCensusProof !== undefined &&
      object.body?.getCensusProof !== null
    ) {
      message.body = {
        $case: "getCensusProof",
        getCensusProof: GetCensusProof.fromPartial(object.body.getCensusProof),
      };
    }
    if (
      object.body?.$case === "dumpCensus" &&
      object.body?.dumpCensus !== undefined &&
      object.body?.dumpCensus !== null
    ) {
      message.body = {
        $case: "dumpCensus",
        dumpCensus: DumpCensus.fromPartial(object.body.dumpCensus),
      };
    }
    if (
      object.body?.$case === "pinFile" &&
      object.body?.pinFile !== undefined &&
      object.body?.pinFile !== null
    ) {
      message.body = {
        $case: "pinFile",
        pinFile: PinFile.fromPartial(object.body.pinFile),
      };
    }
    if (
      object.body?.$case === "fetchFile" &&
      object.body?.fetchFile !== undefined &&
      object.body?.fetchFile !== null
    ) {
      message.body = {
        $case: "fetchFile",
        fetchFile: FetchFile.fromPartial(object.body.fetchFile),
      };
    }
    if (
      object.body?.$case === "getBlockStatus" &&
      object.body?.getBlockStatus !== undefined &&
      object.body?.getBlockStatus !== null
    ) {
      message.body = {
        $case: "getBlockStatus",
        getBlockStatus: GetBlockStatus.fromPartial(object.body.getBlockStatus),
      };
    }
    if (
      object.body?.$case === "getBlockCount" &&
      object.body?.getBlockCount !== undefined &&
      object.body?.getBlockCount !== null
    ) {
      message.body = {
        $case: "getBlockCount",
        getBlockCount: GetBlockCount.fromPartial(object.body.getBlockCount),
      };
    }
    if (
      object.body?.$case === "estimateElectionPrice" &&
      object.body?.estimateElectionPrice !== undefined &&
      object.body?.estimateElectionPrice !== null
    ) {
      message.body = {
        $case: "estimateElectionPrice",
        estimateElectionPrice: EstimateElectionPrice.fromPartial(
          object.body.estimateElectionPrice
        ),
      };
    }
    if (
      object.body?.$case === "getTransaction" &&
      object.body?.getTransaction !== undefined &&
      object.body?.getTransaction !== null
    ) {
      message.body = {
        $case: "getTransaction",
        getTransaction: GetTransaction.fromPartial(object.body.getTransaction),
      };
    }
    if (
      object.body?.$case === "getRawTransactionMessage" &&
      object.body?.getRawTransactionMessage !== undefined &&
      object.body?.getRawTransactionMessage !== null
    ) {
      message.body = {
        $case: "getRawTransactionMessage",
        getRawTransactionMessage: GetRawTransactionMessage.fromPartial(
          object.body.getRawTransactionMessage
        ),
      };
    }
    if (
      object.body?.$case === "waitTransaction" &&
      object.body?.waitTransaction !== undefined &&
      object.body?.waitTransaction !== null
    ) {
      message.body = {
        $case: "waitTransaction",
        waitTransaction: WaitTransaction.fromPartial(
          object.body.waitTransaction
        ),
      };
    }
    return message;
  },
};

function createBaseResponse(): Response {
  return { body: undefined };
}

export const Response = {
  encode(message: Response, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "success") {
      ResponseSuccess.encode(
        message.body.success,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "error") {
      ResponseError.encode(
        message.body.error,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "success",
            success: ResponseSuccess.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "error",
            error: ResponseError.decode(reader, reader.uint32()),
          };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      body: isSet(object.success)
        ? {
            $case: "success",
            success: ResponseSuccess.fromJSON(object.success),
          }
        : isSet(object.error)
        ? { $case: "error", error: ResponseError.fromJSON(object.error) }
        : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.body?.$case === "success" &&
      (obj.success = message.body?.success
        ? ResponseSuccess.toJSON(message.body?.success)
        : undefined);
    message.body?.$case === "error" &&
      (obj.error = message.body?.error
        ? ResponseError.toJSON(message.body?.error)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    if (
      object.body?.$case === "success" &&
      object.body?.success !== undefined &&
      object.body?.success !== null
    ) {
      message.body = {
        $case: "success",
        success: ResponseSuccess.fromPartial(object.body.success),
      };
    }
    if (
      object.body?.$case === "error" &&
      object.body?.error !== undefined &&
      object.body?.error !== null
    ) {
      message.body = {
        $case: "error",
        error: ResponseError.fromPartial(object.body.error),
      };
    }
    return message;
  },
};

function createBaseResponseSuccess(): ResponseSuccess {
  return { body: new Uint8Array() };
}

export const ResponseSuccess = {
  encode(message: ResponseSuccess, writer: Writer = Writer.create()): Writer {
    if (message.body.length !== 0) {
      writer.uint32(10).bytes(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ResponseSuccess {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseSuccess {
    return {
      body: isSet(object.body)
        ? bytesFromBase64(object.body)
        : new Uint8Array(),
    };
  },

  toJSON(message: ResponseSuccess): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = base64FromBytes(
        message.body !== undefined ? message.body : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseSuccess>, I>>(
    object: I
  ): ResponseSuccess {
    const message = createBaseResponseSuccess();
    message.body = object.body ?? new Uint8Array();
    return message;
  },
};

function createBaseResponseError(): ResponseError {
  return { message: "", body: new Uint8Array() };
}

export const ResponseError = {
  encode(message: ResponseError, writer: Writer = Writer.create()): Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.body.length !== 0) {
      writer.uint32(18).bytes(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ResponseError {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.body = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseError {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      body: isSet(object.body)
        ? bytesFromBase64(object.body)
        : new Uint8Array(),
    };
  },

  toJSON(message: ResponseError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.body !== undefined &&
      (obj.body = base64FromBytes(
        message.body !== undefined ? message.body : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseError>, I>>(
    object: I
  ): ResponseError {
    const message = createBaseResponseError();
    message.message = object.message ?? "";
    message.body = object.body ?? new Uint8Array();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
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
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
