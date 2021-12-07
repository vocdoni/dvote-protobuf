// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { Organization } from "../../build/ts/protocol/organization"
import { SetOrganization } from "../../build/ts/protocol/transactions"
import { Transaction } from "../../build/ts/protocol/messages"
import { decodeTransaction, decodeTransactionReceipt, encodeTransaction, encodeTransactionSuccess } from "../common/messages"

const dummySigningKey = new Uint8Array()

///////////////////////////////////////////////////////////////////////////////
// Frontend request
///////////////////////////////////////////////////////////////////////////////

export function createOrganization() {
    console.log("-----------------------------------------------")
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

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyRemoteRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    console.log("Handling the response")

    const txHash = receipt.hash
    // Wait for the TX to be mined
}

///////////////////////////////////////////////////////////////////////////////
// Simulated gateway responses
///////////////////////////////////////////////////////////////////////////////

const pad = "  "
function dummyRemoteRequest(reqBytes: Uint8Array): Uint8Array {
    const { transaction, publicKey, requestId } = decodeTransaction(reqBytes)

    if (transaction.body.$case != "setOrganization") throw new Error("Unexpected transaction")
    const organizationData = transaction.body.setOrganization.organization
    console.log(pad + "(Handle TX => check + add to mempool)", organizationData)

    console.log(pad + "Encoding response")

    const hash = dummyRandomHash()
    const msgBytes = encodeTransactionSuccess(hash, requestId, dummySigningKey)

    return msgBytes
}

function dummyRandomHash() {
    return new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
}
