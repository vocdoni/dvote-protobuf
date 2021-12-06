/* eslint-disable */
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import * as Long from "long";
import {
  SetOrganization,
  Transfer,
  Mint,
  ClaimTokens,
  NewElection,
  RegisterKey,
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
  GetElectionWeight,
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
  WaitTransaction,
} from "../protocol/service";

export const protobufPackage = "dvote.types.v2";

/** / Remote calls between components are a message, optionally signed */
export interface Message {
  /** / The bytes of the {Body} model being signed */
  body: Uint8Array;
  /**
   * / Optionally signed. Not expected when:
   * / - Submitting a vote
   * / - Performing a read-only operation
   * /
   */
  signature?: Uint8Array | undefined;
  signatureType: Message_Signatures;
}

export enum Message_Signatures {
  None = 0,
  Secp256k1 = 1,
  UNRECOGNIZED = -1,
}

export function message_SignaturesFromJSON(object: any): Message_Signatures {
  switch (object) {
    case 0:
    case "None":
      return Message_Signatures.None;
    case 1:
    case "Secp256k1":
      return Message_Signatures.Secp256k1;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Message_Signatures.UNRECOGNIZED;
  }
}

export function message_SignaturesToJSON(object: Message_Signatures): string {
  switch (object) {
    case Message_Signatures.None:
      return "None";
    case Message_Signatures.Secp256k1:
      return "Secp256k1";
    default:
      return "UNKNOWN";
  }
}

/** / The body contains the serialized bytes from a `Body`, which can host three types of interactions. */
export interface Body {
  id: Uint8Array;
  /** / UNIX timestamp */
  timestamp: number;
  body?:
    | { $case: "transaction"; transaction: Transaction }
    | { $case: "receipt"; receipt: TransactionReceipt }
    | { $case: "request"; request: Request }
    | { $case: "response"; response: Response };
}

/** / Vochain or VocOne transactions, all wrapped within a `Message > Body`. */
export interface Transaction {
  body?:
    | { $case: "setOrganization"; setOrganization: SetOrganization }
    | { $case: "transfer"; transfer: Transfer }
    | { $case: "mint"; mint: Mint }
    | { $case: "claimTokens"; claimTokens: ClaimTokens }
    | { $case: "newElection"; newElection: NewElection }
    | { $case: "registerKey"; registerKey: RegisterKey }
    | { $case: "submitBallot"; submitBallot: SubmitBallot }
    | { $case: "setElectionStatus"; setElectionStatus: SetElectionStatus }
    | { $case: "setProposalStatus"; setProposalStatus: SetProposalStatus };
}

/** / The response given to the transaction submitter: */
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

/** / Census Service, File gateways, and similar nodes expect `Request` models, and return `Response` models, all wrapped within a `Message > Body`. */
export interface Request {
  body?:
    | { $case: "GetElection"; GetElection: GetElection }
    | { $case: "GetElectionList"; GetElectionList: GetElectionList }
    | { $case: "GetOrganization"; GetOrganization: GetOrganization }
    | { $case: "GetBallot"; GetBallot: GetBallot }
    | { $case: "GetElectionBallots"; GetElectionBallots: GetElectionBallots }
    | { $case: "GetElectionKeys"; GetElectionKeys: GetElectionKeys }
    | {
        $case: "GetElectionCircuitInfo";
        GetElectionCircuitInfo: GetElectionCircuitInfo;
      }
    | { $case: "GetElectionResults"; GetElectionResults: GetElectionResults }
    | { $case: "GetElectionWeight"; GetElectionWeight: GetElectionWeight }
    | { $case: "NewCensus"; NewCensus: NewCensus }
    | { $case: "AddCensusKeys"; AddCensusKeys: AddCensusKeys }
    | { $case: "GetCensusRoot"; GetCensusRoot: GetCensusRoot }
    | { $case: "GetCensusSize"; GetCensusSize: GetCensusSize }
    | { $case: "PublishCensus"; PublishCensus: PublishCensus }
    | { $case: "GetCensusProof"; GetCensusProof: GetCensusProof }
    | { $case: "DumpCensus"; DumpCensus: DumpCensus }
    | { $case: "PinFile"; PinFile: PinFile }
    | { $case: "FetchFile"; FetchFile: FetchFile }
    | { $case: "GetBlockStatus"; GetBlockStatus: GetBlockStatus }
    | { $case: "GetBlockCount"; GetBlockCount: GetBlockCount }
    | {
        $case: "EstimateElectionPrice";
        EstimateElectionPrice: EstimateElectionPrice;
      }
    | { $case: "GetTransaction"; GetTransaction: GetTransaction }
    | { $case: "WaitTransaction"; WaitTransaction: WaitTransaction };
}

/** / Responses can either be successful or fail. The `Response` body depends on the type of request made originally, and the caller is responsible for deserializing the bytes into the according model, if any. */
export interface Response {
  body?:
    | { $case: "successResponse"; successResponse: SuccessResponse }
    | { $case: "errorResponse"; errorResponse: ErrorResponse };
}

export interface SuccessResponse {
  /** / Serialized response according to the request model */
  body: Uint8Array;
}

export interface ErrorResponse {
  message: string;
  /** / Serialized response that corresponds to the request model */
  body: Uint8Array;
}

const baseMessage: object = { signatureType: 0 };

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
    const message = { ...baseMessage } as Message;
    message.body = new Uint8Array();
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
    const message = { ...baseMessage } as Message;
    message.body =
      object.body !== undefined && object.body !== null
        ? bytesFromBase64(object.body)
        : new Uint8Array();
    message.signature =
      object.signature !== undefined && object.signature !== null
        ? bytesFromBase64(object.signature)
        : undefined;
    message.signatureType =
      object.signatureType !== undefined && object.signatureType !== null
        ? message_SignaturesFromJSON(object.signatureType)
        : 0;
    return message;
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
      (obj.signatureType = message_SignaturesToJSON(message.signatureType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = { ...baseMessage } as Message;
    message.body = object.body ?? new Uint8Array();
    message.signature = object.signature ?? undefined;
    message.signatureType = object.signatureType ?? 0;
    return message;
  },
};

const baseBody: object = { timestamp: 0 };

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
    const message = { ...baseBody } as Body;
    message.id = new Uint8Array();
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
    const message = { ...baseBody } as Body;
    message.id =
      object.id !== undefined && object.id !== null
        ? bytesFromBase64(object.id)
        : new Uint8Array();
    message.timestamp =
      object.timestamp !== undefined && object.timestamp !== null
        ? Number(object.timestamp)
        : 0;
    if (object.transaction !== undefined && object.transaction !== null) {
      message.body = {
        $case: "transaction",
        transaction: Transaction.fromJSON(object.transaction),
      };
    }
    if (object.receipt !== undefined && object.receipt !== null) {
      message.body = {
        $case: "receipt",
        receipt: TransactionReceipt.fromJSON(object.receipt),
      };
    }
    if (object.request !== undefined && object.request !== null) {
      message.body = {
        $case: "request",
        request: Request.fromJSON(object.request),
      };
    }
    if (object.response !== undefined && object.response !== null) {
      message.body = {
        $case: "response",
        response: Response.fromJSON(object.response),
      };
    }
    return message;
  },

  toJSON(message: Body): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = base64FromBytes(
        message.id !== undefined ? message.id : new Uint8Array()
      ));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
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
    const message = { ...baseBody } as Body;
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

const baseTransaction: object = {};

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
    if (message.body?.$case === "registerKey") {
      RegisterKey.encode(
        message.body.registerKey,
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
    const message = { ...baseTransaction } as Transaction;
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
            $case: "registerKey",
            registerKey: RegisterKey.decode(reader, reader.uint32()),
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
    const message = { ...baseTransaction } as Transaction;
    if (
      object.setOrganization !== undefined &&
      object.setOrganization !== null
    ) {
      message.body = {
        $case: "setOrganization",
        setOrganization: SetOrganization.fromJSON(object.setOrganization),
      };
    }
    if (object.transfer !== undefined && object.transfer !== null) {
      message.body = {
        $case: "transfer",
        transfer: Transfer.fromJSON(object.transfer),
      };
    }
    if (object.mint !== undefined && object.mint !== null) {
      message.body = { $case: "mint", mint: Mint.fromJSON(object.mint) };
    }
    if (object.claimTokens !== undefined && object.claimTokens !== null) {
      message.body = {
        $case: "claimTokens",
        claimTokens: ClaimTokens.fromJSON(object.claimTokens),
      };
    }
    if (object.newElection !== undefined && object.newElection !== null) {
      message.body = {
        $case: "newElection",
        newElection: NewElection.fromJSON(object.newElection),
      };
    }
    if (object.registerKey !== undefined && object.registerKey !== null) {
      message.body = {
        $case: "registerKey",
        registerKey: RegisterKey.fromJSON(object.registerKey),
      };
    }
    if (object.submitBallot !== undefined && object.submitBallot !== null) {
      message.body = {
        $case: "submitBallot",
        submitBallot: SubmitBallot.fromJSON(object.submitBallot),
      };
    }
    if (
      object.setElectionStatus !== undefined &&
      object.setElectionStatus !== null
    ) {
      message.body = {
        $case: "setElectionStatus",
        setElectionStatus: SetElectionStatus.fromJSON(object.setElectionStatus),
      };
    }
    if (
      object.setProposalStatus !== undefined &&
      object.setProposalStatus !== null
    ) {
      message.body = {
        $case: "setProposalStatus",
        setProposalStatus: SetProposalStatus.fromJSON(object.setProposalStatus),
      };
    }
    return message;
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
    message.body?.$case === "registerKey" &&
      (obj.registerKey = message.body?.registerKey
        ? RegisterKey.toJSON(message.body?.registerKey)
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
    const message = { ...baseTransaction } as Transaction;
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
      object.body?.$case === "registerKey" &&
      object.body?.registerKey !== undefined &&
      object.body?.registerKey !== null
    ) {
      message.body = {
        $case: "registerKey",
        registerKey: RegisterKey.fromPartial(object.body.registerKey),
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

const baseTransactionReceipt: object = {};

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
    const message = { ...baseTransactionReceipt } as TransactionReceipt;
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
    const message = { ...baseTransactionReceipt } as TransactionReceipt;
    if (object.success !== undefined && object.success !== null) {
      message.body = {
        $case: "success",
        success: TransactionSuccess.fromJSON(object.success),
      };
    }
    if (object.error !== undefined && object.error !== null) {
      message.body = {
        $case: "error",
        error: TransactionError.fromJSON(object.error),
      };
    }
    return message;
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
    const message = { ...baseTransactionReceipt } as TransactionReceipt;
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

const baseTransactionSuccess: object = {};

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
    const message = { ...baseTransactionSuccess } as TransactionSuccess;
    message.hash = new Uint8Array();
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
    const message = { ...baseTransactionSuccess } as TransactionSuccess;
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? bytesFromBase64(object.hash)
        : new Uint8Array();
    return message;
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
    const message = { ...baseTransactionSuccess } as TransactionSuccess;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
};

const baseTransactionError: object = { message: "", code: 0 };

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
    const message = { ...baseTransactionError } as TransactionError;
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
    const message = { ...baseTransactionError } as TransactionError;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    message.code =
      object.code !== undefined && object.code !== null
        ? Number(object.code)
        : 0;
    return message;
  },

  toJSON(message: TransactionError): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransactionError>, I>>(
    object: I
  ): TransactionError {
    const message = { ...baseTransactionError } as TransactionError;
    message.message = object.message ?? "";
    message.code = object.code ?? 0;
    return message;
  },
};

const baseRequest: object = {};

export const Request = {
  encode(message: Request, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "GetElection") {
      GetElection.encode(
        message.body.GetElection,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetElectionList") {
      GetElectionList.encode(
        message.body.GetElectionList,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetOrganization") {
      GetOrganization.encode(
        message.body.GetOrganization,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetBallot") {
      GetBallot.encode(
        message.body.GetBallot,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetElectionBallots") {
      GetElectionBallots.encode(
        message.body.GetElectionBallots,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetElectionKeys") {
      GetElectionKeys.encode(
        message.body.GetElectionKeys,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetElectionCircuitInfo") {
      GetElectionCircuitInfo.encode(
        message.body.GetElectionCircuitInfo,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetElectionResults") {
      GetElectionResults.encode(
        message.body.GetElectionResults,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetElectionWeight") {
      GetElectionWeight.encode(
        message.body.GetElectionWeight,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.body?.$case === "NewCensus") {
      NewCensus.encode(
        message.body.NewCensus,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.body?.$case === "AddCensusKeys") {
      AddCensusKeys.encode(
        message.body.AddCensusKeys,
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetCensusRoot") {
      GetCensusRoot.encode(
        message.body.GetCensusRoot,
        writer.uint32(266).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetCensusSize") {
      GetCensusSize.encode(
        message.body.GetCensusSize,
        writer.uint32(274).fork()
      ).ldelim();
    }
    if (message.body?.$case === "PublishCensus") {
      PublishCensus.encode(
        message.body.PublishCensus,
        writer.uint32(282).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetCensusProof") {
      GetCensusProof.encode(
        message.body.GetCensusProof,
        writer.uint32(290).fork()
      ).ldelim();
    }
    if (message.body?.$case === "DumpCensus") {
      DumpCensus.encode(
        message.body.DumpCensus,
        writer.uint32(298).fork()
      ).ldelim();
    }
    if (message.body?.$case === "PinFile") {
      PinFile.encode(message.body.PinFile, writer.uint32(410).fork()).ldelim();
    }
    if (message.body?.$case === "FetchFile") {
      FetchFile.encode(
        message.body.FetchFile,
        writer.uint32(418).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetBlockStatus") {
      GetBlockStatus.encode(
        message.body.GetBlockStatus,
        writer.uint32(490).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetBlockCount") {
      GetBlockCount.encode(
        message.body.GetBlockCount,
        writer.uint32(498).fork()
      ).ldelim();
    }
    if (message.body?.$case === "EstimateElectionPrice") {
      EstimateElectionPrice.encode(
        message.body.EstimateElectionPrice,
        writer.uint32(506).fork()
      ).ldelim();
    }
    if (message.body?.$case === "GetTransaction") {
      GetTransaction.encode(
        message.body.GetTransaction,
        writer.uint32(650).fork()
      ).ldelim();
    }
    if (message.body?.$case === "WaitTransaction") {
      WaitTransaction.encode(
        message.body.WaitTransaction,
        writer.uint32(658).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRequest } as Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "GetElection",
            GetElection: GetElection.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "GetElectionList",
            GetElectionList: GetElectionList.decode(reader, reader.uint32()),
          };
          break;
        case 3:
          message.body = {
            $case: "GetOrganization",
            GetOrganization: GetOrganization.decode(reader, reader.uint32()),
          };
          break;
        case 4:
          message.body = {
            $case: "GetBallot",
            GetBallot: GetBallot.decode(reader, reader.uint32()),
          };
          break;
        case 5:
          message.body = {
            $case: "GetElectionBallots",
            GetElectionBallots: GetElectionBallots.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 6:
          message.body = {
            $case: "GetElectionKeys",
            GetElectionKeys: GetElectionKeys.decode(reader, reader.uint32()),
          };
          break;
        case 7:
          message.body = {
            $case: "GetElectionCircuitInfo",
            GetElectionCircuitInfo: GetElectionCircuitInfo.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 8:
          message.body = {
            $case: "GetElectionResults",
            GetElectionResults: GetElectionResults.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 9:
          message.body = {
            $case: "GetElectionWeight",
            GetElectionWeight: GetElectionWeight.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 31:
          message.body = {
            $case: "NewCensus",
            NewCensus: NewCensus.decode(reader, reader.uint32()),
          };
          break;
        case 32:
          message.body = {
            $case: "AddCensusKeys",
            AddCensusKeys: AddCensusKeys.decode(reader, reader.uint32()),
          };
          break;
        case 33:
          message.body = {
            $case: "GetCensusRoot",
            GetCensusRoot: GetCensusRoot.decode(reader, reader.uint32()),
          };
          break;
        case 34:
          message.body = {
            $case: "GetCensusSize",
            GetCensusSize: GetCensusSize.decode(reader, reader.uint32()),
          };
          break;
        case 35:
          message.body = {
            $case: "PublishCensus",
            PublishCensus: PublishCensus.decode(reader, reader.uint32()),
          };
          break;
        case 36:
          message.body = {
            $case: "GetCensusProof",
            GetCensusProof: GetCensusProof.decode(reader, reader.uint32()),
          };
          break;
        case 37:
          message.body = {
            $case: "DumpCensus",
            DumpCensus: DumpCensus.decode(reader, reader.uint32()),
          };
          break;
        case 51:
          message.body = {
            $case: "PinFile",
            PinFile: PinFile.decode(reader, reader.uint32()),
          };
          break;
        case 52:
          message.body = {
            $case: "FetchFile",
            FetchFile: FetchFile.decode(reader, reader.uint32()),
          };
          break;
        case 61:
          message.body = {
            $case: "GetBlockStatus",
            GetBlockStatus: GetBlockStatus.decode(reader, reader.uint32()),
          };
          break;
        case 62:
          message.body = {
            $case: "GetBlockCount",
            GetBlockCount: GetBlockCount.decode(reader, reader.uint32()),
          };
          break;
        case 63:
          message.body = {
            $case: "EstimateElectionPrice",
            EstimateElectionPrice: EstimateElectionPrice.decode(
              reader,
              reader.uint32()
            ),
          };
          break;
        case 81:
          message.body = {
            $case: "GetTransaction",
            GetTransaction: GetTransaction.decode(reader, reader.uint32()),
          };
          break;
        case 82:
          message.body = {
            $case: "WaitTransaction",
            WaitTransaction: WaitTransaction.decode(reader, reader.uint32()),
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
    const message = { ...baseRequest } as Request;
    if (object.GetElection !== undefined && object.GetElection !== null) {
      message.body = {
        $case: "GetElection",
        GetElection: GetElection.fromJSON(object.GetElection),
      };
    }
    if (
      object.GetElectionList !== undefined &&
      object.GetElectionList !== null
    ) {
      message.body = {
        $case: "GetElectionList",
        GetElectionList: GetElectionList.fromJSON(object.GetElectionList),
      };
    }
    if (
      object.GetOrganization !== undefined &&
      object.GetOrganization !== null
    ) {
      message.body = {
        $case: "GetOrganization",
        GetOrganization: GetOrganization.fromJSON(object.GetOrganization),
      };
    }
    if (object.GetBallot !== undefined && object.GetBallot !== null) {
      message.body = {
        $case: "GetBallot",
        GetBallot: GetBallot.fromJSON(object.GetBallot),
      };
    }
    if (
      object.GetElectionBallots !== undefined &&
      object.GetElectionBallots !== null
    ) {
      message.body = {
        $case: "GetElectionBallots",
        GetElectionBallots: GetElectionBallots.fromJSON(
          object.GetElectionBallots
        ),
      };
    }
    if (
      object.GetElectionKeys !== undefined &&
      object.GetElectionKeys !== null
    ) {
      message.body = {
        $case: "GetElectionKeys",
        GetElectionKeys: GetElectionKeys.fromJSON(object.GetElectionKeys),
      };
    }
    if (
      object.GetElectionCircuitInfo !== undefined &&
      object.GetElectionCircuitInfo !== null
    ) {
      message.body = {
        $case: "GetElectionCircuitInfo",
        GetElectionCircuitInfo: GetElectionCircuitInfo.fromJSON(
          object.GetElectionCircuitInfo
        ),
      };
    }
    if (
      object.GetElectionResults !== undefined &&
      object.GetElectionResults !== null
    ) {
      message.body = {
        $case: "GetElectionResults",
        GetElectionResults: GetElectionResults.fromJSON(
          object.GetElectionResults
        ),
      };
    }
    if (
      object.GetElectionWeight !== undefined &&
      object.GetElectionWeight !== null
    ) {
      message.body = {
        $case: "GetElectionWeight",
        GetElectionWeight: GetElectionWeight.fromJSON(object.GetElectionWeight),
      };
    }
    if (object.NewCensus !== undefined && object.NewCensus !== null) {
      message.body = {
        $case: "NewCensus",
        NewCensus: NewCensus.fromJSON(object.NewCensus),
      };
    }
    if (object.AddCensusKeys !== undefined && object.AddCensusKeys !== null) {
      message.body = {
        $case: "AddCensusKeys",
        AddCensusKeys: AddCensusKeys.fromJSON(object.AddCensusKeys),
      };
    }
    if (object.GetCensusRoot !== undefined && object.GetCensusRoot !== null) {
      message.body = {
        $case: "GetCensusRoot",
        GetCensusRoot: GetCensusRoot.fromJSON(object.GetCensusRoot),
      };
    }
    if (object.GetCensusSize !== undefined && object.GetCensusSize !== null) {
      message.body = {
        $case: "GetCensusSize",
        GetCensusSize: GetCensusSize.fromJSON(object.GetCensusSize),
      };
    }
    if (object.PublishCensus !== undefined && object.PublishCensus !== null) {
      message.body = {
        $case: "PublishCensus",
        PublishCensus: PublishCensus.fromJSON(object.PublishCensus),
      };
    }
    if (object.GetCensusProof !== undefined && object.GetCensusProof !== null) {
      message.body = {
        $case: "GetCensusProof",
        GetCensusProof: GetCensusProof.fromJSON(object.GetCensusProof),
      };
    }
    if (object.DumpCensus !== undefined && object.DumpCensus !== null) {
      message.body = {
        $case: "DumpCensus",
        DumpCensus: DumpCensus.fromJSON(object.DumpCensus),
      };
    }
    if (object.PinFile !== undefined && object.PinFile !== null) {
      message.body = {
        $case: "PinFile",
        PinFile: PinFile.fromJSON(object.PinFile),
      };
    }
    if (object.FetchFile !== undefined && object.FetchFile !== null) {
      message.body = {
        $case: "FetchFile",
        FetchFile: FetchFile.fromJSON(object.FetchFile),
      };
    }
    if (object.GetBlockStatus !== undefined && object.GetBlockStatus !== null) {
      message.body = {
        $case: "GetBlockStatus",
        GetBlockStatus: GetBlockStatus.fromJSON(object.GetBlockStatus),
      };
    }
    if (object.GetBlockCount !== undefined && object.GetBlockCount !== null) {
      message.body = {
        $case: "GetBlockCount",
        GetBlockCount: GetBlockCount.fromJSON(object.GetBlockCount),
      };
    }
    if (
      object.EstimateElectionPrice !== undefined &&
      object.EstimateElectionPrice !== null
    ) {
      message.body = {
        $case: "EstimateElectionPrice",
        EstimateElectionPrice: EstimateElectionPrice.fromJSON(
          object.EstimateElectionPrice
        ),
      };
    }
    if (object.GetTransaction !== undefined && object.GetTransaction !== null) {
      message.body = {
        $case: "GetTransaction",
        GetTransaction: GetTransaction.fromJSON(object.GetTransaction),
      };
    }
    if (
      object.WaitTransaction !== undefined &&
      object.WaitTransaction !== null
    ) {
      message.body = {
        $case: "WaitTransaction",
        WaitTransaction: WaitTransaction.fromJSON(object.WaitTransaction),
      };
    }
    return message;
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.body?.$case === "GetElection" &&
      (obj.GetElection = message.body?.GetElection
        ? GetElection.toJSON(message.body?.GetElection)
        : undefined);
    message.body?.$case === "GetElectionList" &&
      (obj.GetElectionList = message.body?.GetElectionList
        ? GetElectionList.toJSON(message.body?.GetElectionList)
        : undefined);
    message.body?.$case === "GetOrganization" &&
      (obj.GetOrganization = message.body?.GetOrganization
        ? GetOrganization.toJSON(message.body?.GetOrganization)
        : undefined);
    message.body?.$case === "GetBallot" &&
      (obj.GetBallot = message.body?.GetBallot
        ? GetBallot.toJSON(message.body?.GetBallot)
        : undefined);
    message.body?.$case === "GetElectionBallots" &&
      (obj.GetElectionBallots = message.body?.GetElectionBallots
        ? GetElectionBallots.toJSON(message.body?.GetElectionBallots)
        : undefined);
    message.body?.$case === "GetElectionKeys" &&
      (obj.GetElectionKeys = message.body?.GetElectionKeys
        ? GetElectionKeys.toJSON(message.body?.GetElectionKeys)
        : undefined);
    message.body?.$case === "GetElectionCircuitInfo" &&
      (obj.GetElectionCircuitInfo = message.body?.GetElectionCircuitInfo
        ? GetElectionCircuitInfo.toJSON(message.body?.GetElectionCircuitInfo)
        : undefined);
    message.body?.$case === "GetElectionResults" &&
      (obj.GetElectionResults = message.body?.GetElectionResults
        ? GetElectionResults.toJSON(message.body?.GetElectionResults)
        : undefined);
    message.body?.$case === "GetElectionWeight" &&
      (obj.GetElectionWeight = message.body?.GetElectionWeight
        ? GetElectionWeight.toJSON(message.body?.GetElectionWeight)
        : undefined);
    message.body?.$case === "NewCensus" &&
      (obj.NewCensus = message.body?.NewCensus
        ? NewCensus.toJSON(message.body?.NewCensus)
        : undefined);
    message.body?.$case === "AddCensusKeys" &&
      (obj.AddCensusKeys = message.body?.AddCensusKeys
        ? AddCensusKeys.toJSON(message.body?.AddCensusKeys)
        : undefined);
    message.body?.$case === "GetCensusRoot" &&
      (obj.GetCensusRoot = message.body?.GetCensusRoot
        ? GetCensusRoot.toJSON(message.body?.GetCensusRoot)
        : undefined);
    message.body?.$case === "GetCensusSize" &&
      (obj.GetCensusSize = message.body?.GetCensusSize
        ? GetCensusSize.toJSON(message.body?.GetCensusSize)
        : undefined);
    message.body?.$case === "PublishCensus" &&
      (obj.PublishCensus = message.body?.PublishCensus
        ? PublishCensus.toJSON(message.body?.PublishCensus)
        : undefined);
    message.body?.$case === "GetCensusProof" &&
      (obj.GetCensusProof = message.body?.GetCensusProof
        ? GetCensusProof.toJSON(message.body?.GetCensusProof)
        : undefined);
    message.body?.$case === "DumpCensus" &&
      (obj.DumpCensus = message.body?.DumpCensus
        ? DumpCensus.toJSON(message.body?.DumpCensus)
        : undefined);
    message.body?.$case === "PinFile" &&
      (obj.PinFile = message.body?.PinFile
        ? PinFile.toJSON(message.body?.PinFile)
        : undefined);
    message.body?.$case === "FetchFile" &&
      (obj.FetchFile = message.body?.FetchFile
        ? FetchFile.toJSON(message.body?.FetchFile)
        : undefined);
    message.body?.$case === "GetBlockStatus" &&
      (obj.GetBlockStatus = message.body?.GetBlockStatus
        ? GetBlockStatus.toJSON(message.body?.GetBlockStatus)
        : undefined);
    message.body?.$case === "GetBlockCount" &&
      (obj.GetBlockCount = message.body?.GetBlockCount
        ? GetBlockCount.toJSON(message.body?.GetBlockCount)
        : undefined);
    message.body?.$case === "EstimateElectionPrice" &&
      (obj.EstimateElectionPrice = message.body?.EstimateElectionPrice
        ? EstimateElectionPrice.toJSON(message.body?.EstimateElectionPrice)
        : undefined);
    message.body?.$case === "GetTransaction" &&
      (obj.GetTransaction = message.body?.GetTransaction
        ? GetTransaction.toJSON(message.body?.GetTransaction)
        : undefined);
    message.body?.$case === "WaitTransaction" &&
      (obj.WaitTransaction = message.body?.WaitTransaction
        ? WaitTransaction.toJSON(message.body?.WaitTransaction)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = { ...baseRequest } as Request;
    if (
      object.body?.$case === "GetElection" &&
      object.body?.GetElection !== undefined &&
      object.body?.GetElection !== null
    ) {
      message.body = {
        $case: "GetElection",
        GetElection: GetElection.fromPartial(object.body.GetElection),
      };
    }
    if (
      object.body?.$case === "GetElectionList" &&
      object.body?.GetElectionList !== undefined &&
      object.body?.GetElectionList !== null
    ) {
      message.body = {
        $case: "GetElectionList",
        GetElectionList: GetElectionList.fromPartial(
          object.body.GetElectionList
        ),
      };
    }
    if (
      object.body?.$case === "GetOrganization" &&
      object.body?.GetOrganization !== undefined &&
      object.body?.GetOrganization !== null
    ) {
      message.body = {
        $case: "GetOrganization",
        GetOrganization: GetOrganization.fromPartial(
          object.body.GetOrganization
        ),
      };
    }
    if (
      object.body?.$case === "GetBallot" &&
      object.body?.GetBallot !== undefined &&
      object.body?.GetBallot !== null
    ) {
      message.body = {
        $case: "GetBallot",
        GetBallot: GetBallot.fromPartial(object.body.GetBallot),
      };
    }
    if (
      object.body?.$case === "GetElectionBallots" &&
      object.body?.GetElectionBallots !== undefined &&
      object.body?.GetElectionBallots !== null
    ) {
      message.body = {
        $case: "GetElectionBallots",
        GetElectionBallots: GetElectionBallots.fromPartial(
          object.body.GetElectionBallots
        ),
      };
    }
    if (
      object.body?.$case === "GetElectionKeys" &&
      object.body?.GetElectionKeys !== undefined &&
      object.body?.GetElectionKeys !== null
    ) {
      message.body = {
        $case: "GetElectionKeys",
        GetElectionKeys: GetElectionKeys.fromPartial(
          object.body.GetElectionKeys
        ),
      };
    }
    if (
      object.body?.$case === "GetElectionCircuitInfo" &&
      object.body?.GetElectionCircuitInfo !== undefined &&
      object.body?.GetElectionCircuitInfo !== null
    ) {
      message.body = {
        $case: "GetElectionCircuitInfo",
        GetElectionCircuitInfo: GetElectionCircuitInfo.fromPartial(
          object.body.GetElectionCircuitInfo
        ),
      };
    }
    if (
      object.body?.$case === "GetElectionResults" &&
      object.body?.GetElectionResults !== undefined &&
      object.body?.GetElectionResults !== null
    ) {
      message.body = {
        $case: "GetElectionResults",
        GetElectionResults: GetElectionResults.fromPartial(
          object.body.GetElectionResults
        ),
      };
    }
    if (
      object.body?.$case === "GetElectionWeight" &&
      object.body?.GetElectionWeight !== undefined &&
      object.body?.GetElectionWeight !== null
    ) {
      message.body = {
        $case: "GetElectionWeight",
        GetElectionWeight: GetElectionWeight.fromPartial(
          object.body.GetElectionWeight
        ),
      };
    }
    if (
      object.body?.$case === "NewCensus" &&
      object.body?.NewCensus !== undefined &&
      object.body?.NewCensus !== null
    ) {
      message.body = {
        $case: "NewCensus",
        NewCensus: NewCensus.fromPartial(object.body.NewCensus),
      };
    }
    if (
      object.body?.$case === "AddCensusKeys" &&
      object.body?.AddCensusKeys !== undefined &&
      object.body?.AddCensusKeys !== null
    ) {
      message.body = {
        $case: "AddCensusKeys",
        AddCensusKeys: AddCensusKeys.fromPartial(object.body.AddCensusKeys),
      };
    }
    if (
      object.body?.$case === "GetCensusRoot" &&
      object.body?.GetCensusRoot !== undefined &&
      object.body?.GetCensusRoot !== null
    ) {
      message.body = {
        $case: "GetCensusRoot",
        GetCensusRoot: GetCensusRoot.fromPartial(object.body.GetCensusRoot),
      };
    }
    if (
      object.body?.$case === "GetCensusSize" &&
      object.body?.GetCensusSize !== undefined &&
      object.body?.GetCensusSize !== null
    ) {
      message.body = {
        $case: "GetCensusSize",
        GetCensusSize: GetCensusSize.fromPartial(object.body.GetCensusSize),
      };
    }
    if (
      object.body?.$case === "PublishCensus" &&
      object.body?.PublishCensus !== undefined &&
      object.body?.PublishCensus !== null
    ) {
      message.body = {
        $case: "PublishCensus",
        PublishCensus: PublishCensus.fromPartial(object.body.PublishCensus),
      };
    }
    if (
      object.body?.$case === "GetCensusProof" &&
      object.body?.GetCensusProof !== undefined &&
      object.body?.GetCensusProof !== null
    ) {
      message.body = {
        $case: "GetCensusProof",
        GetCensusProof: GetCensusProof.fromPartial(object.body.GetCensusProof),
      };
    }
    if (
      object.body?.$case === "DumpCensus" &&
      object.body?.DumpCensus !== undefined &&
      object.body?.DumpCensus !== null
    ) {
      message.body = {
        $case: "DumpCensus",
        DumpCensus: DumpCensus.fromPartial(object.body.DumpCensus),
      };
    }
    if (
      object.body?.$case === "PinFile" &&
      object.body?.PinFile !== undefined &&
      object.body?.PinFile !== null
    ) {
      message.body = {
        $case: "PinFile",
        PinFile: PinFile.fromPartial(object.body.PinFile),
      };
    }
    if (
      object.body?.$case === "FetchFile" &&
      object.body?.FetchFile !== undefined &&
      object.body?.FetchFile !== null
    ) {
      message.body = {
        $case: "FetchFile",
        FetchFile: FetchFile.fromPartial(object.body.FetchFile),
      };
    }
    if (
      object.body?.$case === "GetBlockStatus" &&
      object.body?.GetBlockStatus !== undefined &&
      object.body?.GetBlockStatus !== null
    ) {
      message.body = {
        $case: "GetBlockStatus",
        GetBlockStatus: GetBlockStatus.fromPartial(object.body.GetBlockStatus),
      };
    }
    if (
      object.body?.$case === "GetBlockCount" &&
      object.body?.GetBlockCount !== undefined &&
      object.body?.GetBlockCount !== null
    ) {
      message.body = {
        $case: "GetBlockCount",
        GetBlockCount: GetBlockCount.fromPartial(object.body.GetBlockCount),
      };
    }
    if (
      object.body?.$case === "EstimateElectionPrice" &&
      object.body?.EstimateElectionPrice !== undefined &&
      object.body?.EstimateElectionPrice !== null
    ) {
      message.body = {
        $case: "EstimateElectionPrice",
        EstimateElectionPrice: EstimateElectionPrice.fromPartial(
          object.body.EstimateElectionPrice
        ),
      };
    }
    if (
      object.body?.$case === "GetTransaction" &&
      object.body?.GetTransaction !== undefined &&
      object.body?.GetTransaction !== null
    ) {
      message.body = {
        $case: "GetTransaction",
        GetTransaction: GetTransaction.fromPartial(object.body.GetTransaction),
      };
    }
    if (
      object.body?.$case === "WaitTransaction" &&
      object.body?.WaitTransaction !== undefined &&
      object.body?.WaitTransaction !== null
    ) {
      message.body = {
        $case: "WaitTransaction",
        WaitTransaction: WaitTransaction.fromPartial(
          object.body.WaitTransaction
        ),
      };
    }
    return message;
  },
};

const baseResponse: object = {};

export const Response = {
  encode(message: Response, writer: Writer = Writer.create()): Writer {
    if (message.body?.$case === "successResponse") {
      SuccessResponse.encode(
        message.body.successResponse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.body?.$case === "errorResponse") {
      ErrorResponse.encode(
        message.body.errorResponse,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponse } as Response;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = {
            $case: "successResponse",
            successResponse: SuccessResponse.decode(reader, reader.uint32()),
          };
          break;
        case 2:
          message.body = {
            $case: "errorResponse",
            errorResponse: ErrorResponse.decode(reader, reader.uint32()),
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
    const message = { ...baseResponse } as Response;
    if (
      object.successResponse !== undefined &&
      object.successResponse !== null
    ) {
      message.body = {
        $case: "successResponse",
        successResponse: SuccessResponse.fromJSON(object.successResponse),
      };
    }
    if (object.errorResponse !== undefined && object.errorResponse !== null) {
      message.body = {
        $case: "errorResponse",
        errorResponse: ErrorResponse.fromJSON(object.errorResponse),
      };
    }
    return message;
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.body?.$case === "successResponse" &&
      (obj.successResponse = message.body?.successResponse
        ? SuccessResponse.toJSON(message.body?.successResponse)
        : undefined);
    message.body?.$case === "errorResponse" &&
      (obj.errorResponse = message.body?.errorResponse
        ? ErrorResponse.toJSON(message.body?.errorResponse)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = { ...baseResponse } as Response;
    if (
      object.body?.$case === "successResponse" &&
      object.body?.successResponse !== undefined &&
      object.body?.successResponse !== null
    ) {
      message.body = {
        $case: "successResponse",
        successResponse: SuccessResponse.fromPartial(
          object.body.successResponse
        ),
      };
    }
    if (
      object.body?.$case === "errorResponse" &&
      object.body?.errorResponse !== undefined &&
      object.body?.errorResponse !== null
    ) {
      message.body = {
        $case: "errorResponse",
        errorResponse: ErrorResponse.fromPartial(object.body.errorResponse),
      };
    }
    return message;
  },
};

const baseSuccessResponse: object = {};

export const SuccessResponse = {
  encode(message: SuccessResponse, writer: Writer = Writer.create()): Writer {
    if (message.body.length !== 0) {
      writer.uint32(10).bytes(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SuccessResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSuccessResponse } as SuccessResponse;
    message.body = new Uint8Array();
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

  fromJSON(object: any): SuccessResponse {
    const message = { ...baseSuccessResponse } as SuccessResponse;
    message.body =
      object.body !== undefined && object.body !== null
        ? bytesFromBase64(object.body)
        : new Uint8Array();
    return message;
  },

  toJSON(message: SuccessResponse): unknown {
    const obj: any = {};
    message.body !== undefined &&
      (obj.body = base64FromBytes(
        message.body !== undefined ? message.body : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SuccessResponse>, I>>(
    object: I
  ): SuccessResponse {
    const message = { ...baseSuccessResponse } as SuccessResponse;
    message.body = object.body ?? new Uint8Array();
    return message;
  },
};

const baseErrorResponse: object = { message: "" };

export const ErrorResponse = {
  encode(message: ErrorResponse, writer: Writer = Writer.create()): Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.body.length !== 0) {
      writer.uint32(18).bytes(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ErrorResponse {
    const reader = input instanceof Reader ? input : new Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseErrorResponse } as ErrorResponse;
    message.body = new Uint8Array();
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

  fromJSON(object: any): ErrorResponse {
    const message = { ...baseErrorResponse } as ErrorResponse;
    message.message =
      object.message !== undefined && object.message !== null
        ? String(object.message)
        : "";
    message.body =
      object.body !== undefined && object.body !== null
        ? bytesFromBase64(object.body)
        : new Uint8Array();
    return message;
  },

  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.body !== undefined &&
      (obj.body = base64FromBytes(
        message.body !== undefined ? message.body : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ErrorResponse>, I>>(
    object: I
  ): ErrorResponse {
    const message = { ...baseErrorResponse } as ErrorResponse;
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
