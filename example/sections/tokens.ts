// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { Mint, Transfer, ClaimTokens } from "../../build/ts/protocol/transactions"
import { Transaction } from "../../build/ts/protocol/messages"
import { decodeTransaction, decodeTransactionReceipt, encodeTransaction, encodeTransactionError, encodeTransactionSuccess } from "../common/messages"

const dummySigningKey = new Uint8Array()

///////////////////////////////////////////////////////////////////////////////
// Frontend request
///////////////////////////////////////////////////////////////////////////////

export function mintTokens() {
    console.log("-----------------------------------------------")
    console.log("Wrapping Mint transaction")

    const txBody: Mint = { amount: "1000" }
    const tx: Transaction = {
        body: {
            $case: "mint",
            mint: txBody
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

export function transferTokens() {
    console.log("-----------------------------------------------")
    console.log("Wrapping Transfer transaction")

    const recipientAddr = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])

    const txBody = Transfer.fromPartial({ to: recipientAddr, value: "1234" })
    const tx = Transaction.fromPartial({
        body: {
            $case: "transfer",
            transfer: txBody
        }
    })

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyVochainRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    console.log("Handling the response")

    const txHash = receipt.hash
    // Wait for the TX to be mined
}

export function claimTokens() {
    console.log("-----------------------------------------------")
    console.log("Wrapping ClaimTokens transaction")

    const nonce = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
    const senderAddr = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])

    const txBody = ClaimTokens.fromPartial({ nonce, sender: senderAddr })
    const tx = Transaction.fromPartial({
        body: {
            $case: "claimTokens",
            claimTokens: txBody
        }
    })

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyVochainRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    console.log("Handling the response")

    const txHash = receipt.hash
    // Wait for the TX to be mined
}

///////////////////////////////////////////////////////////////////////////////
// Simulated gateway responses
///////////////////////////////////////////////////////////////////////////////

const pad = "  "
function dummyVochainRequest(reqBytes: Uint8Array): Uint8Array {
    const { transaction, publicKey, requestId } = decodeTransaction(reqBytes)

    console.log(pad + "Received TX", transaction.body.$case)
    switch (transaction.body.$case) {
        case "mint":
            const { amount } = transaction.body.mint
            console.log(pad + "Mint", amount, "tokens to", publicKey)
            break

        case "transfer":
            const { to, value } = transaction.body.transfer
            console.log(pad + "Transfer", value, "tokens to", to)
            break

        case "claimTokens":
            const { nonce, sender } = transaction.body.claimTokens
            console.log(pad + "Claim from", sender, "and nonce", nonce)
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
