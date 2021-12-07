// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { Reader } from "protobufjs"
import { Body, Message, Message_Signatures, Transaction, TransactionError, TransactionReceipt, TransactionSuccess, Request, Response, ResponseSuccess, ResponseError } from "../../build/ts/protocol/messages"

///////////////////////////////////////////////////////////////////////////////
// Encoding
///////////////////////////////////////////////////////////////////////////////

export function encodeTransaction(tx: Transaction, signingKey: Uint8Array) {
    console.log("Wrapping transaction in a Body (oneof)")

    const id = randomBytes()
    const timestamp = Math.floor(Date.now() / 1000)

    const body = Body.encode({
        id,
        timestamp,
        body: { $case: "transaction", transaction: tx }
    })
    const bodyBytes = body.finish()

    console.log("Wrapping as a signed Message")

    const signature = dummySign(bodyBytes, signingKey)
    const msg = Message.encode({
        body: bodyBytes,
        signature,
        signatureType: Message_Signatures.SECP256K1
    })

    return msg.finish()
}

export function encodeTransactionSuccess(txHash: Uint8Array, requestId: Uint8Array, signingKey: Uint8Array): Uint8Array {
    console.log("Encoding the success receipt")

    const successReceipt = TransactionSuccess.fromPartial({ hash: txHash })
    const txReceipt = TransactionReceipt.fromPartial({
        body: {
            $case: "success",
            success: successReceipt
        }
    })

    console.log("Wrapping in a Body (oneof)")

    const timestamp = Math.floor(Date.now() / 1000)

    const body = Body.encode({
        id: requestId,
        timestamp,
        body: { $case: "receipt", receipt: txReceipt }
    })
    const bodyBytes = body.finish()

    console.log("Wrapping as a signed Message")

    const signature = dummySign(bodyBytes, signingKey)
    const msg = Message.encode({
        body: bodyBytes,
        signature,
        signatureType: Message_Signatures.SECP256K1
    })

    return msg.finish()
}

export function encodeTransactionError(message: string, code: number, requestId: Uint8Array, signingKey: Uint8Array): Uint8Array {
    console.log("Encoding the error receipt")

    const errorReceipt = TransactionError.fromPartial({ message, code })
    const txReceipt = TransactionReceipt.fromPartial({
        body: {
            $case: "error",
            error: errorReceipt
        }
    })

    console.log("Wrapping in a Body (oneof)")

    const timestamp = Math.floor(Date.now() / 1000)

    const body = Body.encode({
        id: requestId,
        timestamp,
        body: { $case: "receipt", receipt: txReceipt }
    })
    const bodyBytes = body.finish()

    console.log("Wrapping as a signed Message")

    const signature = dummySign(bodyBytes, signingKey)
    const msg = Message.encode({
        body: bodyBytes,
        signature,
        signatureType: Message_Signatures.SECP256K1
    })

    return msg.finish()
}

// Request / Response

export function encodeRequest(request: Request, signingKey?: Uint8Array) {
    console.log("Wrapping request in a Body")

    const id = randomBytes()
    const timestamp = Math.floor(Date.now() / 1000)

    const body = Body.encode({
        id,
        timestamp,
        body: { $case: "request", request }
    })
    const bodyBytes = body.finish()

    console.log("Wrapping as a signed Message")

    const signature = dummySign(bodyBytes, signingKey)
    const msg = Message.encode({
        body: bodyBytes,
        signature,
        signatureType: Message_Signatures.SECP256K1
    })

    return msg.finish()
}

export function encodeResponseSuccess(responseBody: Uint8Array, requestId: Uint8Array, signingKey: Uint8Array) {
    console.log("Wrapping response in a Body")

    const responseSuccess = ResponseSuccess.fromPartial({ body: responseBody })
    const response = Response.fromPartial({ body: { $case: "success", success: responseSuccess } })

    const timestamp = Math.floor(Date.now() / 1000)

    const body = Body.encode({
        id: requestId,
        timestamp,
        body: { $case: "response", response }
    })
    const bodyBytes = body.finish()

    console.log("Wrapping as a signed Message")

    const signature = dummySign(bodyBytes, signingKey)
    const msg = Message.encode({
        body: bodyBytes,
        signature,
        signatureType: Message_Signatures.SECP256K1
    })

    return msg.finish()
}

export function encodeResponseError(message: string, responseBody: Uint8Array, requestId: Uint8Array, signingKey: Uint8Array) {
    console.log("Wrapping response in a Body")

    const responseError = ResponseError.fromPartial({ message, body: responseBody ?? new Uint8Array() })
    const response = Response.fromPartial({ body: { $case: "error", error: responseError } })

    const timestamp = Math.floor(Date.now() / 1000)

    const body = Body.encode({
        id: requestId,
        timestamp,
        body: { $case: "response", response }
    })
    const bodyBytes = body.finish()

    console.log("Wrapping as a signed Message")

    const signature = dummySign(bodyBytes, signingKey)
    const msg = Message.encode({
        body: bodyBytes,
        signature,
        signatureType: Message_Signatures.SECP256K1
    })

    return msg.finish()
}


///////////////////////////////////////////////////////////////////////////////
// Decoding
///////////////////////////////////////////////////////////////////////////////

function decodeMessage(msgBytes: Uint8Array) {
    console.log("Decoding the message")

    const msg = Message.decode(Reader.create(msgBytes))

    const signed = !!msg.signature?.length
    const body = Body.decode(Reader.create(msg.body))
    const publicKey = signed ?
        dummyExtractPublicKey(msg.body, msg.signature, msg.signatureType) :
        new Uint8Array()

    // check body.timestamp diff

    return {
        body: body.body,
        signed,
        publicKey,
        requestId: body.id
    }
}

export function decodeTransaction(msgBytes: Uint8Array) {
    const { body, requestId, publicKey } = decodeMessage(msgBytes)

    if (body.$case !== "transaction") throw new Error("The message body is not a Transaction")

    return {
        transaction: body.transaction,
        requestId,
        publicKey
    }
}

export function decodeTransactionReceipt(msgBytes: Uint8Array) {
    const { body, requestId, publicKey } = decodeMessage(msgBytes)

    if (body.$case !== "receipt") throw new Error("The message body is not a TransactionReceipt")

    // Success or error?
    const receipt = body.receipt
    if (receipt.body.$case !== "success") { // error
        throw new Error("The transaction was rejected: " + receipt.body.error.message)
    }

    return {
        receipt: receipt.body.success,
        requestId,
        publicKey
    }
}

export function decodeRequest(msgBytes: Uint8Array) {
    const { body, requestId, publicKey } = decodeMessage(msgBytes)

    if (body.$case !== "request") throw new Error("The message body is not a Request")

    return {
        request: body.request,
        requestId,
        publicKey
    }
}

export function decodeResponse(msgBytes: Uint8Array) {
    const { body, requestId, publicKey } = decodeMessage(msgBytes)

    if (body.$case !== "response") throw new Error("The message body is not a Response")

    // Success or error?
    const response = body.response
    if (response.body.$case !== "success") { // error
        throw new Error(response.body.error.message)
    }

    return {
        response: response.body.success,
        requestId,
        publicKey
    }
}


///////////////////////////////////////////////////////////////////////////////
// Helpers
///////////////////////////////////////////////////////////////////////////////

function dummySign(body: Uint8Array, signingKey?: Uint8Array) {
    if (!signingKey) return new Uint8Array()
    return new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
}

function dummyExtractPublicKey(body: Uint8Array, signature: Uint8Array, signatureType: Message_Signatures) {
    return new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33])
}

function randomBytes() {
    const result = new Uint8Array(32)
    for (let i = 0; i < 32; i++) {
        result[i] = Math.floor(Math.random() * 256)
    }

    return result
}
