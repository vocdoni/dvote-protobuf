// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { Reader } from "protobufjs"
import { Organization } from "../../build/ts/protocol/organization"
import { SetOrganization } from "../../build/ts/protocol/transactions"
import { Body, Message, Message_Signatures, Transaction, TransactionReceipt, TransactionSuccess } from "../../build/ts/protocol/messages"

///////////////////////////////////////////////////////////////////////////////
// Frontend request
///////////////////////////////////////////////////////////////////////////////

export function createOrganization() {
    console.log("Encoding organizations parameters")

    const org = Organization.fromPartial({
        metadataUri: "ipfs://1234...",
        managers: []
    })

    console.log("Wrapping in a transaction (oneof)")

    const setOrgTx = SetOrganization.fromPartial({ organization: org })
    const tx = Transaction.fromPartial({
        body: {
            $case: "setOrganization",
            setOrganization: setOrgTx
        }
    })

    console.log("Wrapping in a Body (oneof)")

    const timestamp = Math.floor(Date.now() / 1000)

    const body = Body.encode({
        id: dummyRandomBytes(),
        timestamp,
        body: { $case: "transaction", transaction: tx }
    })
    const bodyBytes = body.finish()

    console.log("Wrapping as a signed Message")

    const signature = dummySign(bodyBytes)
    const msg = Message.encode({
        body: bodyBytes,
        signature,
        signatureType: Message_Signatures.SECP256K1
    })
    const msgBytes = msg.finish()

    console.log("Sending the payload to a Gateway")

    const responseBytes = dummyRemoteRequest(msgBytes)

    console.log("Handling the response")

    const responseMsg = Message.decode(Reader.create(responseBytes))
    // check responseMsg.signature and responseMsg.signatureType

    const responseBody = Body.decode(Reader.create(responseMsg.body))
    // check responseBody.id === body.id

    if (responseBody.body.$case !== "receipt") throw new Error("Not applicable here")

    // check body.timestamp diff
    const receipt = responseBody.body.receipt
    if (receipt.body.$case === "success") {
        const txHash = receipt.body.success.hash
        // Wait for the TX to be mined
    }
    else {
        // error
        throw new Error("The transaction was rejected: " + receipt.body.error)
    }
}

///////////////////////////////////////////////////////////////////////////////
// Fake backend responses
///////////////////////////////////////////////////////////////////////////////

const pad = "  "
function dummyRemoteRequest(reqBytes: Uint8Array): Uint8Array {
    console.log(pad + "Decoding request")

    const reqMsg = Message.decode(Reader.create(reqBytes))

    const signed = !!reqMsg.signature?.length

    if (signed && !dummyCheckSignature(reqMsg.body, reqMsg.signature, reqMsg.signatureType)) {
        throw new Error("Invalid signature")
    }
    const reqBody = Body.decode(Reader.create(reqMsg.body))
    // body.id
    // body.timestamp
    switch (reqBody.body.$case) {
        case "transaction":
            const tx = reqBody.body.transaction
            console.log(pad + "(Handle TX => check + add to mempool)")

            break
        default:
            throw new Error("Not applicable here")
    }

    console.log(pad + "Encoding response")

    const hash = dummyRandomBytes()
    const successReceipt = TransactionSuccess.fromPartial({ hash })
    const txReceipt = TransactionReceipt.fromPartial({
        body: {
            $case: "success",
            success: successReceipt
        }
    })

    console.log(pad + "Wrapping in a Body (oneof)")

    const timestamp = Math.floor(Date.now() / 1000)
    const body = Body.encode({
        id: reqBody.id,
        timestamp,
        body: {
            $case: "receipt",
            receipt: txReceipt
        }
    })
    const bodyBytes = body.finish()

    console.log(pad + "Wrapping as a signed Message")

    const signature = dummySign(bodyBytes)
    const msg = Message.encode({
        body: bodyBytes,
        signature,
        signatureType: Message_Signatures.SECP256K1
    })
    const msgBytes = msg.finish()

    return msgBytes
}

///////////////////////////////////////////////////////////////////////////////
// Helpers

function dummySign(body: Uint8Array) {
    return new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
}

function dummyCheckSignature(body: Uint8Array, signature: Uint8Array, signatureType: Message_Signatures) {
    return true
}
function dummyRandomBytes() {
    return new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])
}