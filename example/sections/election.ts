// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { NewElection } from "../../build/ts/protocol/transactions"
import { Transaction } from "../../build/ts/protocol/messages"
import { decodeTransaction, decodeTransactionReceipt, encodeTransaction, encodeTransactionSuccess } from "../common/messages"
import { ApprovalProposal, Election, Lifecycle_Types, Privacy_CensusProofs, Proposal, QuadraticProposal, RankedProposal, SingleChoiceProposal, SpreadProposal } from "../../build/ts/protocol/election"
import { CensusArbo, CensusCsp, CensusErc20, CensusNone, StorageProofErc20 } from "../../build/ts/protocol/census"

const dummySigningKey = new Uint8Array()

///////////////////////////////////////////////////////////////////////////////
// Frontend request
///////////////////////////////////////////////////////////////////////////////

const approvalProposal: ApprovalProposal = {}
const singleChoiceProposal: SingleChoiceProposal = { optionCount: 4 }
const quadraticProposal: QuadraticProposal = { optionCount: 5, costExponent: 2.7, maxSum: 20, maxValue: 3 }
const rankedProposal: RankedProposal = { optionCount: 10, maxItems: 3 }
const spreadProposal: SpreadProposal = { optionCount: 3 }

const proposal1: Proposal = { proposal: { $case: "approval", approval: approvalProposal } }
const proposal2: Proposal = { proposal: { $case: "singleChoice", singleChoice: singleChoiceProposal } }
const proposal3: Proposal = { proposal: { $case: "quadratic", quadratic: quadraticProposal } }
const proposal4: Proposal = { proposal: { $case: "ranked", ranked: rankedProposal } }
const proposal5: Proposal = { proposal: { $case: "spread", spread: spreadProposal } }

const censusNone: CensusNone = { body: { $case: "none", none: {} } }

export function createSimpleElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (simple) transaction")

    // Census layers
    const arboCensus: CensusArbo = {
        censusRoot: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]),
        censusUri: "ipfs://1234..."
    }

    // Election params
    const election: Election = {
        // who can vote
        mainCensus: { body: { $case: "arbo", arbo: arboCensus } },
        secondaryCensus: censusNone,
        tertiaryCensus: censusNone,
        censusSize: 500,    // affects how many votes are expected at most
        // per-proposal settings
        proposals: [
            proposal1,   // approval
            proposal2,   // singleChoice
            proposal3,   // quadratic
            proposal4,   // ranked
            proposal5,   // spread
        ],
        // lifecycle
        lifecycle: {
            type: Lifecycle_Types.AUTOSTART_MUTABLE,
            startBlock: 1500,   // only if lifecycle is AUTOSTART_*
            endBlock: 2000,
        },
        // vote privacy
        privacy: {
            realTimeResults: true,
            censusProof: Privacy_CensusProofs.PLAIN
        },
        // human readable metadata (protobuf)
        metadataUri: "ipfs://1234...",
    }

    const txBody: NewElection = { election }
    const tx: Transaction = {
        body: {
            $case: "newElection",
            newElection: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyRemoteRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createCspElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (CSP plain) transaction")

    // Census layers
    const cspCensus: CensusCsp = {
        cspPublicKey: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]),
        cspUri: "https://prefix.server.net/v1/",
        blind: true    // false will expect a plain signature from the CSP
    }
    // Election params
    const election: Election = {
        // who can vote
        mainCensus: { body: { $case: "csp", csp: cspCensus } },
        secondaryCensus: censusNone,
        tertiaryCensus: censusNone,
        censusSize: 500,    // affects how many votes are expected at most
        // per-proposal settings
        proposals: [
            proposal1,   // approval
            proposal2,   // singleChoice
            proposal3,   // quadratic
            proposal4,   // ranked
            proposal5,   // spread
        ],
        // lifecycle
        lifecycle: {
            type: Lifecycle_Types.STARTED_IMMUTABLE,
            startBlock: 0,  // N/A
            endBlock: 2000,
        },
        // vote privacy
        privacy: {
            realTimeResults: false,     // Votes need to be encrypted
            censusProof: Privacy_CensusProofs.PLAIN
        },
        // human readable metadata (protobuf)
        metadataUri: "ipfs://1234...",
    }

    const txBody: NewElection = { election }
    const tx: Transaction = {
        body: {
            $case: "newElection",
            newElection: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyRemoteRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createCspBlindElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (CSP blind) transaction")

    // Census layers
    const cspCensus: CensusCsp = {
        cspPublicKey: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]),
        cspUri: "https://prefix.server.net/v1/",
        blind: true   // Voters should obtain a blind signature from the CSP
    }
    // Election params
    const election: Election = {
        // who can vote
        mainCensus: { body: { $case: "csp", csp: cspCensus } },
        secondaryCensus: censusNone,
        tertiaryCensus: censusNone,
        censusSize: 500,    // affects how many votes are expected at most
        // per-proposal settings
        proposals: [
            proposal4,   // ranked
            proposal1,   // approval
            proposal5,   // spread
            proposal3,   // quadratic
            proposal2,   // singleChoice
        ],
        // lifecycle
        lifecycle: {
            type: Lifecycle_Types.STARTED_MUTABLE,
            startBlock: 0,  // N/A
            endBlock: 2000,
        },
        // vote privacy
        privacy: {
            realTimeResults: false,     // Votes need to be encrypted
            censusProof: Privacy_CensusProofs.PLAIN
        },
        // human readable metadata (protobuf)
        metadataUri: "ipfs://1234...",
    }

    const txBody: NewElection = { election }
    const tx: Transaction = {
        body: {
            $case: "newElection",
            newElection: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyRemoteRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createErc20Election() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (ERC20) transaction")

    // Census layers
    const erc20Census: CensusErc20 = {
        balanceMapSlot: 2,
        tokenAddress: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        // Obtanied from the census service
        proof: StorageProofErc20.fromPartial({
            key: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            proof: [new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])],
            value: new Uint8Array([1, 0, 0, 0, 0, 0])
        }),
        sourceEthereumBlock: 12345678
    }

    // Election params
    const election: Election = {
        // who can vote
        mainCensus: { body: { $case: "erc20", erc20: erc20Census } },
        secondaryCensus: censusNone,
        tertiaryCensus: censusNone,
        censusSize: 500,    // affects how many votes are expected at most
        // per-proposal settings
        proposals: [
            proposal4,   // ranked
            proposal1,   // approval
            proposal5,   // spread
            proposal3,   // quadratic
            proposal2,   // singleChoice
        ],
        // lifecycle
        lifecycle: {
            type: Lifecycle_Types.STARTED_MUTABLE,
            startBlock: 0,  // N/A
            endBlock: 2000,
        },
        // vote privacy
        privacy: {
            realTimeResults: false,     // Votes need to be encrypted
            censusProof: Privacy_CensusProofs.PLAIN
        },
        // human readable metadata (protobuf)
        metadataUri: "ipfs://1234...",
    }

    const txBody: NewElection = { election }
    const tx: Transaction = {
        body: {
            $case: "newElection",
            newElection: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyRemoteRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createMiniMeElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (MiniMe) transaction")

    // Census layers
    const erc20Census: CensusErc20 = {
        balanceMapSlot: 2,
        tokenAddress: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        // Obtanied from the census service
        proof: StorageProofErc20.fromPartial({
            key: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            proof: [new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])],
            value: new Uint8Array([1, 0, 0, 0, 0, 0])
        }),
        sourceEthereumBlock: 12345678
    }

    // Election params
    const election: Election = {
        // who can vote
        mainCensus: { body: { $case: "erc20", erc20: erc20Census } },
        secondaryCensus: censusNone,
        tertiaryCensus: censusNone,
        censusSize: 500,    // affects how many votes are expected at most
        // per-proposal settings
        proposals: [
            proposal4,   // ranked
            proposal1,   // approval
            proposal5,   // spread
            proposal3,   // quadratic
            proposal2,   // singleChoice
        ],
        // lifecycle
        lifecycle: {
            type: Lifecycle_Types.STARTED_MUTABLE,
            startBlock: 0,  // N/A
            endBlock: 2000,
        },
        // vote privacy
        privacy: {
            realTimeResults: false,     // Votes need to be encrypted
            censusProof: Privacy_CensusProofs.PLAIN
        },
        // human readable metadata (protobuf)
        metadataUri: "ipfs://1234...",
    }

    const txBody: NewElection = { election }
    const tx: Transaction = {
        body: {
            $case: "newElection",
            newElection: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyRemoteRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createDualCensusElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (dual census) transaction")

    // Census layers: The signing wallet should present a valid Arbo proof, as well as an ERC20 storage proof
    //                matching the given parameters
    const arboCensus: CensusArbo = {
        censusRoot: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]),
        censusUri: "ipfs://1234..."
    }
    const erc20Census: CensusErc20 = {
        balanceMapSlot: 2,
        tokenAddress: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        // Obtanied from the census service
        proof: StorageProofErc20.fromPartial({
            key: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            proof: [new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])],
            value: new Uint8Array([1, 0, 0, 0, 0, 0])
        }),
        sourceEthereumBlock: 12345678
    }

    // Election params
    const election: Election = {
        // who can vote
        mainCensus: { body: { $case: "arbo", arbo: arboCensus } },
        secondaryCensus: { body: { $case: "erc20", erc20: erc20Census } },
        tertiaryCensus: censusNone,
        censusSize: 500,    // affects how many votes are expected at most
        // per-proposal settings
        proposals: [
            proposal1,   // approval
            proposal2,   // singleChoice
            proposal3,   // quadratic
            proposal4,   // ranked
            proposal5,   // spread
        ],
        // lifecycle
        lifecycle: {
            type: Lifecycle_Types.AUTOSTART_MUTABLE,
            startBlock: 1500,   // only if lifecycle is AUTOSTART_*
            endBlock: 2000,
        },
        // vote privacy
        privacy: {
            realTimeResults: true,
            censusProof: Privacy_CensusProofs.PLAIN
        },
        // human readable metadata (protobuf)
        metadataUri: "ipfs://1234...",
    }

    const txBody: NewElection = { election }
    const tx: Transaction = {
        body: {
            $case: "newElection",
            newElection: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyRemoteRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createAnonymousElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (anonymous) transaction")

    // Census layers
    const arboCensus: CensusArbo = {
        censusRoot: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]),
        censusUri: "ipfs://1234..."
    }

    // Election params
    const election: Election = {
        // who can vote
        mainCensus: { body: { $case: "arbo", arbo: arboCensus } },
        secondaryCensus: censusNone,
        tertiaryCensus: censusNone,
        censusSize: 500,    // affects how many votes are expected at most
        // per-proposal settings
        proposals: [
            proposal1,   // approval
            proposal2,   // singleChoice
            proposal3,   // quadratic
            proposal4,   // ranked
            proposal5,   // spread
        ],
        // lifecycle
        lifecycle: {
            type: Lifecycle_Types.AUTOSTART_MUTABLE,
            startBlock: 1500,   // only if lifecycle is AUTOSTART_*
            endBlock: 2000,
        },
        // vote privacy
        privacy: {
            realTimeResults: true,
            censusProof: Privacy_CensusProofs.ZK_SNARKS    // The ZK proof needs to receive a proof for the mainCensus
        },
        // human readable metadata (protobuf)
        metadataUri: "ipfs://1234...",
    }

    const txBody: NewElection = { election }
    const tx: Transaction = {
        body: {
            $case: "newElection",
            newElection: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyRemoteRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createAnonymousPreregisterElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (anonymous) transaction")

    // Census layers
    const arboCensus: CensusArbo = {
        censusRoot: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]),
        censusUri: "ipfs://1234..."
    }

    // Election params
    const election: Election = {
        // who can vote
        mainCensus: { body: { $case: "arbo", arbo: arboCensus } },
        secondaryCensus: censusNone,
        tertiaryCensus: censusNone,
        censusSize: 500,    // affects how many votes are expected at most
        // per-proposal settings
        proposals: [
            proposal1,   // approval
            proposal2,   // singleChoice
            proposal3,   // quadratic
            proposal4,   // ranked
            proposal5,   // spread
        ],
        // lifecycle
        lifecycle: {
            type: Lifecycle_Types.AUTOSTART_MUTABLE,
            startBlock: 1500,   // only if lifecycle is AUTOSTART_*
            endBlock: 2000,
        },
        // vote privacy
        privacy: {
            realTimeResults: true,
            // Voters need to send RegisterVoterKey
            // before the election starts.
            // The ZK proof needs to receive a proof for the mainCensus
            censusProof: Privacy_CensusProofs.ZK_SNARKS_PREREGISTER
        },
        // human readable metadata (protobuf)
        metadataUri: "ipfs://1234...",
    }

    const txBody: NewElection = { election }
    const tx: Transaction = {
        body: {
            $case: "newElection",
            newElection: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyRemoteRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createNonRealTimeResultsElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (simple) transaction")

    // Census layers
    const arboCensus: CensusArbo = {
        censusRoot: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]),
        censusUri: "ipfs://1234..."
    }

    // Election params
    const election: Election = {
        // who can vote
        mainCensus: { body: { $case: "arbo", arbo: arboCensus } },
        secondaryCensus: censusNone,
        tertiaryCensus: censusNone,
        censusSize: 500,    // affects how many votes are expected at most
        // per-proposal settings
        proposals: [
            proposal1,   // approval
            proposal2,   // singleChoice
            proposal3,   // quadratic
            proposal4,   // ranked
            proposal5,   // spread
        ],
        // lifecycle
        lifecycle: {
            type: Lifecycle_Types.AUTOSTART_MUTABLE,
            startBlock: 1500,   // only if lifecycle is AUTOSTART_*
            endBlock: 2000,
        },
        // vote privacy
        privacy: {
            realTimeResults: false,
            censusProof: Privacy_CensusProofs.PLAIN
        },
        // human readable metadata (protobuf)
        metadataUri: "ipfs://1234...",
    }

    const txBody: NewElection = { election }
    const tx: Transaction = {
        body: {
            $case: "newElection",
            newElection: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyRemoteRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

///////////////////////////////////////////////////////////////////////////////
// Simulated gateway responses
///////////////////////////////////////////////////////////////////////////////

const pad = "  "
function dummyRemoteRequest(reqBytes: Uint8Array): Uint8Array {
    const { transaction, publicKey, requestId } = decodeTransaction(reqBytes)

    console.log(pad + "Received TX", transaction.body.$case)
    switch (transaction.body.$case) {
        case "newElection":
            const { election } = transaction.body.newElection
            console.log(pad + "New election from", publicKey)
            console.log(pad + pad + "- Census 1:", election.mainCensus.body.$case)
            console.log(pad + pad + "- Census 2:", election.secondaryCensus.body.$case)
            console.log(pad + pad + "- Census 3:", election.tertiaryCensus.body.$case)
            console.log(pad + pad + "- Privacy:", election.privacy)
            break

        default: throw new Error("Unexpected transaction")
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
