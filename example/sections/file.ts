// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { FetchFile, FetchFileResponse, GetBlockCount, GetBlockCountResponse, GetBlockStatus, GetBlockStatusResponse, PinFile, PinFileResponse } from "../../build/ts/protocol/service"
import { Request } from "../../build/ts/protocol/messages"
import { encodeRequest, decodeRequest, encodeResponseSuccess, decodeResponse, encodeResponseError, decodeTransaction, encodeTransactionSuccess, encodeTransaction, decodeTransactionReceipt, encodeTransactionError } from "../common/messages"
import { Reader } from "protobufjs"

const dummySigningKey = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])

///////////////////////////////////////////////////////////////////////////////
// Frontend request
///////////////////////////////////////////////////////////////////////////////

export function pinFile() {
  console.log("-----------------------------------------------")
  console.log("Wrapping PinFile request")

  const reqBody: PinFile = {
    body: new Uint8Array([1, 5, 10, 50, 100, 250]),
    retentionDays: 15
  }
  const request: Request = {
    body: {
      $case: "pinFile",
      pinFile: reqBody
    }
  }

  const reqBytes = encodeRequest(request, dummySigningKey)

  // Send
  console.log("Sending the payload to a Census Service")
  const responseBytes = dummyGatewayRequest(reqBytes)

  const { response } = decodeResponse(responseBytes)

  console.log("Handling the response")

  // Since we issued a `PinFile` call, we expect now to receive a `PinFileResponse`
  const pinFileResponse = PinFileResponse.decode(Reader.create(response.body))
  const { ipfsUri } = pinFileResponse

  console.log("File pinned at:", ipfsUri)
}

export function fetchFile() {
  console.log("-----------------------------------------------")
  console.log("Wrapping FetchFile request")

  const reqBody: FetchFile = {
    ipfsUri: "ipfs://1234..."
  }
  const request: Request = {
    body: {
      $case: "fetchFile",
      fetchFile: reqBody
    }
  }

  const reqBytes = encodeRequest(request, dummySigningKey)

  // Send
  console.log("Sending the payload to a Census Service")
  const responseBytes = dummyGatewayRequest(reqBytes)

  const { response } = decodeResponse(responseBytes)

  console.log("Handling the response")

  // Since we issued a `FetchFile` call, we expect now to receive a `FetchFileResponse`
  const fetchFileResponse = FetchFileResponse.decode(Reader.create(response.body))
  const { body } = fetchFileResponse

  console.log("File body:", body)
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
    case "pinFile":
      msgBytes = simulatePinFile(request.body.pinFile, requestId)
      break

    case "fetchFile":
      msgBytes = simulateFetchFile(request.body.fetchFile, requestId)
      break

    default:
      msgBytes = encodeResponseError("Unsupported request", null, requestId, dummySigningKey)
      break
  }

  console.log(pad + "Encoding response")

  return msgBytes
}

///////////////////////////////////////////////////////////////////////////////
// Helpers
///////////////////////////////////////////////////////////////////////////////

function simulatePinFile(request: PinFile, requestId: Uint8Array) {
  const { } = request
  console.log(pad + "Get block status")

  const responseBytes = PinFileResponse.encode({
    ipfsUri: "ipfs://1234..."
  }).finish()

  return encodeResponseSuccess(responseBytes, requestId, dummySigningKey)
}

function simulateFetchFile(request: FetchFile, requestId: Uint8Array) {
  const { } = request
  console.log(pad + "Get block count")

  const responseBytes = FetchFileResponse.encode({
    body: new Uint8Array([1, 5, 10, 50, 100, 250])
  }).finish()

  return encodeResponseSuccess(responseBytes, requestId, dummySigningKey)
}
