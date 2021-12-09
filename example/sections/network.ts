// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { GetBlockCount, GetBlockCountResponse, GetBlockStatus, GetBlockStatusResponse, GetRawTransactionMessage, GetRawTransactionMessageResponse, GetTransaction, GetTransactionResponse, WaitTransaction, WaitTransactionResponse } from "../../build/ts/protocol/service"
import { Message, Request, Transaction } from "../../build/ts/protocol/messages"
import { encodeRequest, decodeRequest, encodeResponseSuccess, decodeResponse, encodeResponseError, decodeTransaction, encodeTransactionSuccess, encodeTransaction, decodeTransactionReceipt, encodeTransactionError } from "../common/messages"
import { Reader } from "protobufjs"
import { Mint } from "../../build/ts/protocol/transactions"

const dummySigningKey = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])

///////////////////////////////////////////////////////////////////////////////
// Frontend request
///////////////////////////////////////////////////////////////////////////////

export function getBlockStatus() {
  console.log("-----------------------------------------------")
  console.log("Wrapping GetBlockStatus request")

  const request: Request = {
    body: {
      $case: "getBlockStatus",
      getBlockStatus: {}
    }
  }

  const reqBytes = encodeRequest(request, dummySigningKey)

  // Send
  console.log("Sending the payload to a Census Service")
  const responseBytes = dummyGatewayRequest(reqBytes)

  const { response } = decodeResponse(responseBytes)

  console.log("Handling the response")

  // Since we issued a `GetBlockStatus` call, we expect now to receive a `GetBlockStatusResponse`
  const getBlockStatusResponse = GetBlockStatusResponse.decode(Reader.create(response.body))
  const { blockTimes, blockTimestamp, number } = getBlockStatusResponse

  console.log("Block status", blockTimes, blockTimestamp, number)
}

export function getBlockCount() {
  console.log("-----------------------------------------------")
  console.log("Wrapping GetBlockCount request")

  const request: Request = {
    body: {
      $case: "getBlockCount",
      getBlockCount: {}
    }
  }

  const reqBytes = encodeRequest(request, dummySigningKey)

  // Send
  console.log("Sending the payload to a Census Service")
  const responseBytes = dummyGatewayRequest(reqBytes)

  const { response } = decodeResponse(responseBytes)

  console.log("Handling the response")

  // Since we issued a `GetBlockCount` call, we expect now to receive a `GetBlockCountResponse`
  const getBlockCountResponse = GetBlockCountResponse.decode(Reader.create(response.body))
  const { number } = getBlockCountResponse

  console.log("Block status", number)
}

export function getTransaction() {
  console.log("-----------------------------------------------")
  console.log("Wrapping GetTransaction request")

  const reqBody: GetTransaction = {
    txHash: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
  }
  const request: Request = {
    body: {
      $case: "getTransaction",
      getTransaction: reqBody
    }
  }

  const reqBytes = encodeRequest(request, dummySigningKey)

  // Send
  console.log("Sending the payload to a Census Service")
  const responseBytes = dummyGatewayRequest(reqBytes)

  const { response } = decodeResponse(responseBytes)

  console.log("Handling the response")

  // Since we issued a `GetTransaction` call, we expect now to receive a `GetTransactionResponse`
  const getTransactionResponse = GetTransactionResponse.decode(Reader.create(response.body))
  const { body } = getTransactionResponse

  const transaction = Transaction.decode(Reader.create(body))

  console.log("Transaction:", transaction)
}

export function getRawTransactionMessage() {
  console.log("-----------------------------------------------")
  console.log("Wrapping GetRawTransactionMessage request")

  const reqBody: GetRawTransactionMessage = {
    txHash: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
  }
  const request: Request = {
    body: {
      $case: "getRawTransactionMessage",
      getRawTransactionMessage: reqBody
    }
  }

  const reqBytes = encodeRequest(request, dummySigningKey)

  // Send
  console.log("Sending the payload to a Census Service")
  const responseBytes = dummyGatewayRequest(reqBytes)

  const { response } = decodeResponse(responseBytes)

  console.log("Handling the response")

  // Since we issued a `GetRawTransactionMessage` call, we expect now to receive a `GetRawTransactionMessageResponse`
  const getRawTransactionMessageResponse = GetRawTransactionMessageResponse.decode(Reader.create(response.body))
  const { body } = getRawTransactionMessageResponse

  const message = Message.decode(Reader.create(body))

  console.log("Original message:", message)
}

export function waitTransaction() {
  console.log("-----------------------------------------------")
  console.log("Wrapping WaitTransaction request")

  const reqBody: WaitTransaction = {
    txHash: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
  }
  const request: Request = {
    body: {
      $case: "waitTransaction",
      waitTransaction: reqBody
    }
  }

  const reqBytes = encodeRequest(request, dummySigningKey)

  // Send
  console.log("Sending the payload to a Census Service")
  const responseBytes = dummyGatewayRequest(reqBytes)

  const { response } = decodeResponse(responseBytes)

  console.log("Handling the response")

  // Since we issued a `WaitTransaction` call, we expect now to receive a `WaitTransactionResponse`
  const waitTransactionResponse = WaitTransactionResponse.decode(Reader.create(response.body))
  const { mined } = waitTransactionResponse

  console.log("Transaction mined:", mined)
}

///////////////////////////////////////////////////////////////////////////////
// Simulated Gateway responses
///////////////////////////////////////////////////////////////////////////////

const pad = "  "
function dummyGatewayRequest(reqBytes: Uint8Array): Uint8Array {
  const { request, publicKey, requestId } = decodeRequest(reqBytes)
  let msgBytes: Uint8Array

  console.log(pad + "Received Request", request.body.$case)
  switch (request.body.$case) {
    case "getBlockStatus":
      msgBytes = simulateGetBlockStatus(request.body.getBlockStatus, requestId)
      break

    case "getBlockCount":
      msgBytes = simulateGetBlockCount(request.body.getBlockCount, requestId)
      break

    case "getTransaction":
      msgBytes = simulateGetTransaction(request.body.getTransaction, requestId)
      break

    case "getRawTransactionMessage":
      msgBytes = simulateGetRawTransactionMessage(request.body.getRawTransactionMessage, requestId)
      break

    case "waitTransaction":
      msgBytes = simulateWaitTransaction(request.body.waitTransaction, requestId)
      break

    default:
      msgBytes = encodeResponseError("Unsupported request", null, requestId, dummySigningKey)
      break
  }

  console.log(pad + "Encoding response")

  return msgBytes
}

function simulateGetBlockStatus(request: GetBlockStatus, requestId: Uint8Array) {
  const { } = request
  console.log(pad + "Get block status")

  const responseBytes = GetBlockStatusResponse.encode({
    number: 12345678,
    blockTimestamp: 1638992593,  // Unix timestamp
    // 1m, 10m, 1h, 6h, 24h in milliseconds
    blockTimes: [12100, 11934, 12000, 12042, 12049]
  }).finish()

  return encodeResponseSuccess(responseBytes, requestId, dummySigningKey)
}

function simulateGetBlockCount(request: GetBlockCount, requestId: Uint8Array) {
  const { } = request
  console.log(pad + "Get block count")

  const responseBytes = GetBlockCountResponse.encode({
    number: 12345678
  }).finish()

  return encodeResponseSuccess(responseBytes, requestId, dummySigningKey)
}

function simulateGetTransaction(request: GetTransaction, requestId: Uint8Array) {
  const { txHash } = request
  console.log(pad + "Get transaction", txHash)

  // Read from the Vochain and return the encoded result
  const txBody: Mint = { amount: "1000" }
  const tx: Transaction = {
    body: {
      $case: "mint",
      mint: txBody
    }
  }
  const txBytes = Transaction.encode(tx).finish()

  const responseBytes = GetTransactionResponse.encode({
    body: txBytes
  }).finish()

  return encodeResponseSuccess(responseBytes, requestId, dummySigningKey)
}

function simulateGetRawTransactionMessage(request: GetRawTransactionMessage, requestId: Uint8Array) {
  const { txHash } = request
  console.log(pad + "Get raw transaction message", txHash)

  // Read from the Vochain and return the encoded result
  const txBody: Mint = { amount: "1000" }
  const tx: Transaction = {
    body: {
      $case: "mint",
      mint: txBody
    }
  }
  const msgBytes = encodeTransaction(tx, dummySigningKey)

  const responseBytes = GetRawTransactionMessageResponse.encode({
    body: msgBytes
  }).finish()

  return encodeResponseSuccess(responseBytes, requestId, dummySigningKey)
}

function simulateWaitTransaction(request: WaitTransaction, requestId: Uint8Array) {
  const { txHash } = request
  console.log(pad + "Wait transaction", txHash)

  // Read from the Vochain and return the encoded result
  const responseBytes = WaitTransactionResponse.encode({
    mined: true
  }).finish()

  return encodeResponseSuccess(responseBytes, requestId, dummySigningKey)
}
