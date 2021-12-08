// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { Organization } from "../../build/ts/protocol/organization"
import { SetOrganization } from "../../build/ts/protocol/transactions"
import { Transaction, Request } from "../../build/ts/protocol/messages"
import { decodeRequest, decodeResponse, decodeTransaction, decodeTransactionReceipt, encodeRequest, encodeResponseError, encodeResponseSuccess, encodeTransaction, encodeTransactionError, encodeTransactionSuccess } from "../common/messages"
import { GetOrganization, GetOrganizationResponse } from "../../build/ts/protocol/service"
import { Reader } from "protobufjs"

const dummySigningKey = new Uint8Array()

///////////////////////////////////////////////////////////////////////////////
// Frontend requests
///////////////////////////////////////////////////////////////////////////////

export function createOrganization() {
    console.log("-----------------------------------------------")
    console.log("Encoding organizations parameters")

    const org = Organization.fromPartial({
        metadataUri: "ipfs://1234...",
        managers: []
    })

    console.log("Wrapping in a transaction (oneof)")

    const txBody: SetOrganization = {
        organization: org
    }
    const tx: Transaction = {
        body: {
            $case: "setOrganization",
            setOrganization: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyVochainRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    console.log("Handling the response")

    const txHash = receipt.hash
    // Wait for the TX to be mined
}

export function getOrganization() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetOrganization request")

    const requestData: GetOrganization = {
        organizationId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
    }
    const request: Request = {
        body: {
            $case: "getOrganization",
            getOrganization: requestData
        }
    }

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyGatewayRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetOrganization` call, we expect now to receive a `GetOrganizationResponse`
    const responseData = GetOrganizationResponse.decode(Reader.create(response.body))
    const { organization } = responseData

    console.log("Organization:", organization)
}

///////////////////////////////////////////////////////////////////////////////
// Simulated Vochain responses
///////////////////////////////////////////////////////////////////////////////

const pad = "  "
function dummyVochainRequest(reqBytes: Uint8Array): Uint8Array {
    const { transaction, publicKey, requestId } = decodeTransaction(reqBytes)

    console.log(pad + "Received TX", transaction.body.$case)
    switch (transaction.body.$case) {
        case "setOrganization":
            const { organization } = transaction.body.setOrganization
            console.log(pad + "Set organization", organization)
            break

        default:
            return encodeTransactionError("Unexpected transaction: " + transaction.body.$case, 0, requestId, dummySigningKey)
    }
    console.log(pad + "(Handle TX => check + add to mempool)")

    console.log(pad + "Encoding response")

    const hash = dummyRandomHash()
    const msgBytes = encodeTransactionSuccess(hash, requestId, dummySigningKey)

    return msgBytes
}

function dummyRandomHash() {
    return new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
}

///////////////////////////////////////////////////////////////////////////////
// Simulated Census Service responses
///////////////////////////////////////////////////////////////////////////////

function dummyGatewayRequest(reqBytes: Uint8Array): Uint8Array {
    const { request, publicKey, requestId } = decodeRequest(reqBytes)
    let msgBytes: Uint8Array

    console.log(pad + "Received Request", request.body.$case)
    switch (request.body.$case) {
        case "getOrganization":
            const { organizationId } = request.body.getOrganization
            console.log(pad + "Get organization", organizationId)

            const newCensusResponseBytes = GetOrganizationResponse.encode({
                organization: {
                    metadataUri: "ipfs://1234...",
                    managers: []
                }
            }).finish()

            msgBytes = encodeResponseSuccess(newCensusResponseBytes, requestId, dummySigningKey)
            break

        default:
            msgBytes = encodeResponseError("Unsupported request", null, requestId, dummySigningKey)
            break
    }

    console.log(pad + "Encoding response")

    return msgBytes
}
