// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { NewElection, SetElectionStatus, SetProposalStatus, SubmitBallot } from "../../build/ts/protocol/transactions"
import { Transaction, Request } from "../../build/ts/protocol/messages"
import { decodeRequest, decodeResponse, decodeTransaction, decodeTransactionReceipt, encodeRequest, encodeResponseError, encodeResponseSuccess, encodeTransaction, encodeTransactionError, encodeTransactionSuccess } from "../common/messages"
import { ApprovalProposal, Election, Lifecycle_Types, Privacy_CensusProofs, Proposal, QuadraticProposal, RankedProposal, SingleChoiceProposal, SpreadProposal } from "../../build/ts/protocol/election"
import { CensusArbo, CensusCsp, CensusErc20, CensusErcMiniMe, CensusNone, StorageProofErc20, StorageProofMiniMe } from "../../build/ts/protocol/census"
import { ProposalStatus, SignatureType } from "../../build/ts/protocol/enums"
import { GetBallot, GetBallotResponse, GetElection, GetElectionBallots, GetElectionBallotsResponse, GetElectionCircuitInfo, GetElectionCircuitInfoResponse, GetElectionKeys, GetElectionKeysResponse, GetElectionList, GetElectionListResponse, GetElectionResponse, GetElectionResults, GetElectionResultsResponse, GetElectionResultsWeight, GetElectionResultsWeightResponse } from "../../build/ts/protocol/service"
import { Reader } from "protobufjs"
import { Ballot, BallotBody } from "../../build/ts/protocol/ballot"

const dummySigningKey = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
const dummyElectionId = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])

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
    const responseBytes = dummyVochainRequest(reqBytes)

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
        blind: false    // false will expect a plain signature from the CSP
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
            type: Lifecycle_Types.AUTOSTART_MUTABLE,
            startBlock: 1500,   // only if lifecycle is AUTOSTART_*
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
    const responseBytes = dummyVochainRequest(reqBytes)

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
            type: Lifecycle_Types.AUTOSTART_MUTABLE,
            startBlock: 1500,   // only if lifecycle is AUTOSTART_*
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
    const responseBytes = dummyVochainRequest(reqBytes)

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
        proof: {
            key: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            proof: [new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])],
            value: new Uint8Array([1, 0, 0, 0, 0, 0])
        },
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
            type: Lifecycle_Types.AUTOSTART_MUTABLE,
            startBlock: 1500,   // only if lifecycle is AUTOSTART_*
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
    const responseBytes = dummyVochainRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createMiniMeElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (MiniMe) transaction")

    // Census layers
    const ercMiniMeCensus: CensusErcMiniMe = {
        balanceMapSlot: 2,
        tokenAddress: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        // Obtanied from the census service
        proof: {
            key: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            proof: [new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])],
            value: new Uint8Array([1, 0, 0, 0, 0, 0]),
        },
        sourceEthereumBlock: 12345678
    }

    // Election params
    const election: Election = {
        // who can vote
        mainCensus: { body: { $case: "ercMiniMe", ercMiniMe: ercMiniMeCensus } },
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
            type: Lifecycle_Types.AUTOSTART_MUTABLE,
            startBlock: 1500,   // only if lifecycle is AUTOSTART_*
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
    const responseBytes = dummyVochainRequest(reqBytes)

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
        proof: {
            key: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            proof: [new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])],
            value: new Uint8Array([1, 0, 0, 0, 0, 0])
        },
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
    const responseBytes = dummyVochainRequest(reqBytes)

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
    const responseBytes = dummyVochainRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createAnonymousPreregisterElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (anonymous preregister) transaction")

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
    const responseBytes = dummyVochainRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createNonRealTimeResultsElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (non real time) transaction")

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
    const responseBytes = dummyVochainRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function createStepByStepElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewElection (step by step) transaction")

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
            type: Lifecycle_Types.PAUSED_MUTABLE,
            startBlock: 0, // N/A
            endBlock: 5000,
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
    const responseBytes = dummyVochainRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function setElectionStatus() {
    console.log("-----------------------------------------------")
    console.log("Wrapping SetElectionStatus transaction")

    // Election lifecycle type must be mutable

    const txBody: SetElectionStatus = {
        electionId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        newStatus: ProposalStatus.PAUSED
    }
    const tx: Transaction = {
        body: {
            $case: "setElectionStatus",
            setElectionStatus: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyVochainRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function setProposalStatus() {
    console.log("-----------------------------------------------")
    console.log("Wrapping SetProposalStatus transaction")

    // Election lifecycle type must be mutable

    const txBody: SetProposalStatus = {
        electionId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        entries: [
            { proposalIndex: 2, newStatus: ProposalStatus.ENDED },
            { proposalIndex: 3, newStatus: ProposalStatus.READY },
        ]
    }
    const tx: Transaction = {
        body: {
            $case: "setProposalStatus",
            setProposalStatus: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyVochainRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function getElection() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetElection request")

    const requestData: GetElection = {
        electionId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
    }
    const request: Request = {
        body: {
            $case: "getElection",
            getElection: requestData
        }
    }

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyGatewayRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetElection` call, we expect now to receive a `GetElectionResponse`
    const responseData = GetElectionResponse.decode(Reader.create(response.body))
    const { organizationId, parameters, statuses, ballotCounts } = responseData

    console.log("Election parameters:", organizationId, parameters, statuses, ballotCounts)
}

export function getElectionKeys() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetElectionKeys request")

    const requestData: GetElectionKeys = {
        electionId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
    }
    const request: Request = {
        body: {
            $case: "getElectionKeys",
            getElectionKeys: requestData
        }
    }

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyGatewayRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetElectionKeys` call, we expect now to receive a `GetElectionKeysResponse`
    const responseData = GetElectionKeysResponse.decode(Reader.create(response.body))
    const { encryptionPrivateKeys, encryptionPublicKeys } = responseData

    console.log("Election keys:", encryptionPrivateKeys, encryptionPublicKeys)
}

export function getElectionCircuitInfo() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetElectionCircuitInfo request")

    const requestData: GetElectionCircuitInfo = {
        electionId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
    }
    const request: Request = {
        body: {
            $case: "getElectionCircuitInfo",
            getElectionCircuitInfo: requestData
        }
    }

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyGatewayRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetElectionCircuitInfo` call, we expect now to receive a `GetElectionCircuitInfoResponse`
    const responseData = GetElectionCircuitInfoResponse.decode(Reader.create(response.body))
    const { index, baseUri, maxSize, circuitPath, witnessHash, zKeyHash, vKeyHash } = responseData

    console.log("Election circuit info:", index, baseUri, maxSize)
}

export function submitBallot() {
    console.log("-----------------------------------------------")
    console.log("Wrapping SubmimtBallot transaction")

    const ballot = dummyEncodeBallot()  // Generated elsewhere. See ballot.ts

    const txBody: SubmitBallot = {
        ballot
    }
    const tx: Transaction = {
        body: {
            $case: "submitBallot",
            submitBallot: txBody
        }
    }

    const reqBytes = encodeTransaction(tx, dummySigningKey)

    console.log("Sending the payload to a Gateway")
    const responseBytes = dummyVochainRequest(reqBytes)

    const { receipt } = decodeTransactionReceipt(responseBytes)

    const txHash = receipt.hash
    // Wait for the TX to be mined

    console.log("Handling the response for transaction", txHash)
}

export function getElectionResults() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetElectionResults request")

    const requestData: GetElectionResults = {
        electionId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
    }
    const request: Request = {
        body: {
            $case: "getElectionResults",
            getElectionResults: requestData
        }
    }

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyGatewayRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetElectionResults` call, we expect now to receive a `GetElectionResultsResponse`
    const responseData = GetElectionResultsResponse.decode(Reader.create(response.body))
    const { results } = responseData

    console.log("Election results:", results)
}

export function getElectionResultsWeight() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetElectionResultsWeight request")

    const requestData: GetElectionResultsWeight = {
        electionId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
    }
    const request: Request = {
        body: {
            $case: "getElectionResultsWeight",
            getElectionResultsWeight: requestData
        }
    }

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyGatewayRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetElectionResultsWeight` call, we expect now to receive a `GetElectionResultsWeightResponse`
    const responseData = GetElectionResultsWeightResponse.decode(Reader.create(response.body))
    const { weights } = responseData

    console.log("Election result weights (per proposal):", weights)
}

export function getElectionList() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetElectionList request")

    const requestData: GetElectionList = {
        organizationId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        fromIndex: 0,
        // status: ProposalStatus.READY,
        // tokenAddress
    }
    const request: Request = {
        body: {
            $case: "getElectionList",
            getElectionList: requestData
        }
    }

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyGatewayRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetElectionList` call, we expect now to receive a `GetElectionListResponse`
    const responseData = GetElectionListResponse.decode(Reader.create(response.body))
    const { electionIds } = responseData

    console.log("Election list (page 0):", electionIds)
}

export function getBallot() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetBallot request")

    const requestData: GetBallot = {
        nullifier: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
    }
    const request: Request = {
        body: {
            $case: "getBallot",
            getBallot: requestData
        }
    }

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyGatewayRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetBallot` call, we expect now to receive a `GetBallotResponse`
    const responseData = GetBallotResponse.decode(Reader.create(response.body))
    const { ballot } = responseData

    console.log("Ballot:", ballot)
}

export function getElectionBallots() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetElectionBallots request")

    const requestData: GetElectionBallots = {
        electionId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        fromIndex: 0
    }
    const request: Request = {
        body: {
            $case: "getElectionBallots",
            getElectionBallots: requestData
        }
    }

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyGatewayRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetElectionBallots` call, we expect now to receive a `GetElectionBallotsResponse`
    const responseData = GetElectionBallotsResponse.decode(Reader.create(response.body))
    const { ballots } = responseData

    console.log("Election ballots (page 0):", ballots)
}

///////////////////////////////////////////////////////////////////////////////
// Simulated Vochain responses
///////////////////////////////////////////////////////////////////////////////

const pad = "  "
function dummyVochainRequest(reqBytes: Uint8Array): Uint8Array {
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

        case "setElectionStatus":
            const { electionId: eId1, newStatus } = transaction.body.setElectionStatus
            console.log("Set election", eId1, "status to", newStatus)
            break

        case "setProposalStatus":
            const { electionId: eId2, entries } = transaction.body.setProposalStatus
            console.log("Set election", eId2, "proposal statuses to", entries)
            break

        case "submitBallot":
            const { ballot } = transaction.body.submitBallot
            console.log("Election received ballot", ballot.body)
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
// Simulated Gateway responses
///////////////////////////////////////////////////////////////////////////////

function dummyGatewayRequest(reqBytes: Uint8Array): Uint8Array {
    const { request, publicKey, requestId } = decodeRequest(reqBytes)
    let msgBytes: Uint8Array

    console.log(pad + "Received Request", request.body.$case)
    switch (request.body.$case) {
        case "getElection":
            msgBytes = simulateGetElection(requestId, request.body.getElection)
            break

        case "getElectionKeys":
            msgBytes = simulateGetElectionKeys(requestId, request.body.getElectionKeys)
            break

        case "getElectionResults":
            msgBytes = simulateGetElectionResults(requestId, request.body.getElectionResults)
            break

        case "getElectionResultsWeight":
            msgBytes = simulateGetElectionResultsWeight(requestId, request.body.getElectionResultsWeight)
            break

        case "getElectionList":
            msgBytes = simulateGetElectionList(requestId, request.body.getElectionList)
            break

        case "getBallot":
            msgBytes = simulateGetBallot(requestId, request.body.getBallot)
            break

        case "getElectionBallots":
            msgBytes = simulateGetElectionBallots(requestId, request.body.getElectionBallots)
            break

        case "getElectionCircuitInfo":
            msgBytes = simulateGetElectionCircuitInfo(requestId, request.body.getElectionCircuitInfo)
            break

        default:
            msgBytes = encodeResponseError("Unsupported request: " + request.body.$case, null, requestId, dummySigningKey)
            break
    }

    console.log(pad + "Encoding response")

    return msgBytes
}

///////////////////////////////////////////////////////////////////////////////
// Helpers
///////////////////////////////////////////////////////////////////////////////

function dummyGetNullifier(electionId: Uint8Array, privateKey?: Uint8Array) {
    return new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
}

function dummySign(body: Uint8Array, signingKey?: Uint8Array) {
    if (!signingKey) return new Uint8Array()
    return new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
}

function dummyEncodeBallot(): Ballot {
    const ballotBodyBytes = BallotBody.encode({
        electionId: dummyElectionId,
        nullifier: dummyGetNullifier(dummyElectionId, dummySigningKey),
        proofs: [
            { body: { $case: "arbo", arbo: { siblings: [new Uint8Array([0, 1, 2, 3])] } } },
            { body: { $case: "none", none: {} } },
            { body: { $case: "none", none: {} } },
        ],
        votes: {
            partial: false,      // all votes included here
            submittedIndex: 0,   // N/A
            votes: [
                { body: { $case: "approval", approval: { approved: false, nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "singleChoice", singleChoice: { choice: 2, nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "quadratic", quadratic: { choicePoints: [1, 2, 0, 0, 0], nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "ranked", ranked: { ranking: [4, 2, 5], nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "spread", spread: { percentages: [10, 35, 0, 45, 10], nonce: new Uint8Array([1, 2, 3]) } } },
            ]
        }
    }).finish()

    const signature = dummySign(ballotBodyBytes, dummySigningKey)
    const ballot: Ballot = {
        body: {
            $case: "signedBallot",
            signedBallot: {
                ballot: ballotBodyBytes,
                signature,
                signatureType: SignatureType.SECP256K1
            }
        }
    }
    return ballot
}

///////////////////////////////////////////////////////////////////////////////
// Dummy Gateway handlers
///////////////////////////////////////////////////////////////////////////////

function simulateGetElection(requestId: Uint8Array, request: GetElection) {
    const { electionId } = request
    console.log(pad + "Get election", electionId)

    const cspCensus: CensusCsp = { cspPublicKey: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]), cspUri: "https://prefix.server.net/v1/", blind: true }
    const getElectionResponseBytes = GetElectionResponse.encode({
        organizationId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        parameters: {
            mainCensus: { body: { $case: "csp", csp: cspCensus } },
            secondaryCensus: censusNone,
            tertiaryCensus: censusNone,
            censusSize: 500,    // affects how many votes are expected at most
            proposals: [
                proposal1,   // approval
                proposal2,   // singleChoice
                proposal3,   // quadratic
                proposal4,   // ranked
                proposal5,   // spread
            ],
            lifecycle: {
                type: Lifecycle_Types.PAUSED_MUTABLE,
                startBlock: 0,
                endBlock: 2000,
            },
            privacy: {
                realTimeResults: true,
                censusProof: Privacy_CensusProofs.PLAIN
            },
            metadataUri: "ipfs://1234...",
        },
        ballotCounts: [
            50,  // Proposal 1 got 50 votes
            40,  // Proposal 2 got 40 votes
            22,  // Proposal 3 has 22 votes
            0,   // Proposal 4 has no votes yet
            0    // Proposal 5 has no votes yet
        ],
        statuses: [
            ProposalStatus.RESULTS,
            ProposalStatus.ENDED,
            ProposalStatus.READY,
            ProposalStatus.PAUSED,
            ProposalStatus.PAUSED,
        ]
    }).finish()

    return encodeResponseSuccess(getElectionResponseBytes, requestId, dummySigningKey)
}

function simulateGetElectionKeys(requestId: Uint8Array, request: GetElectionKeys) {
    const { electionId } = request
    console.log(pad + "Get election keys", electionId)

    const getElectionKeysResponseBytes = GetElectionKeysResponse.encode({
        encryptionPublicKeys: [
            { index: 0, key: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]) },
            { index: 1, key: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]) },
        ],
        encryptionPrivateKeys: [
            { index: 0, key: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]) },
            { index: 1, key: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]) },
        ]
    }).finish()

    return encodeResponseSuccess(getElectionKeysResponseBytes, requestId, dummySigningKey)
}

function simulateGetElectionResults(requestId: Uint8Array, request: GetElectionResults) {
    const { electionId } = request
    console.log(pad + "Get election results", electionId)

    const getElectionResultsResponseBytes = GetElectionResultsResponse.encode({
        results: {
            electionId,
            proposalResults: [
                // For each proposal
                { body: { $case: "approvalResult", approvalResult: { approved: "20", rejected: "30" } } },
                { body: { $case: "singleChoiceResult", singleChoiceResult: { votes: ["10", "40", "30", "45", "0"] } } },
                { body: { $case: "quadraticResult", quadraticResult: { points: ["16", "50", "35", "60", "50"] } } },
                {
                    body: {
                        $case: "rankedResult", rankedResult: {
                            choices: [
                                { entries: [{ position: 1, points: "10" }, { position: 2, points: "4" }, { position: 3, points: "5" }, { position: 4, points: "1" }, { position: 5, points: "0" }] },
                                { entries: [{ position: 1, points: "1" }, { position: 2, points: "8" }, { position: 3, points: "4" }, { position: 4, points: "3" }, { position: 5, points: "1" }] },
                                { entries: [{ position: 1, points: "2" }, { position: 2, points: "4" }, { position: 3, points: "2" }, { position: 4, points: "8" }, { position: 5, points: "8" }] },
                                { entries: [{ position: 1, points: "5" }, { position: 2, points: "5" }, { position: 3, points: "4" }, { position: 4, points: "6" }, { position: 5, points: "4" }] },
                                { entries: [{ position: 1, points: "4" }, { position: 2, points: "2" }, { position: 3, points: "8" }, { position: 4, points: "9" }, { position: 5, points: "10" }] },
                            ]
                        }
                    }
                },
                { body: { $case: "spreadResult", spreadResult: { points: ["1234", "2345", "3456", "4567", "5678"] } } },
                // { body: { $case: "pendingResult", pendingResult: {} } },
            ]
        }
    }).finish()

    return encodeResponseSuccess(getElectionResultsResponseBytes, requestId, dummySigningKey)
}

function simulateGetElectionResultsWeight(requestId: Uint8Array, request: GetElectionResultsWeight) {
    const { electionId } = request
    console.log(pad + "Get election results weight", electionId)

    const getElectionResultsWeightResponseBytes = GetElectionResultsWeightResponse.encode({
        weights: [
            "1234",   // weight used on proposal 1
            "2345",   // weight used on proposal 2
            "3456",   // weight used on proposal 3
            "4567",   // weight used on proposal 4
            "5678",   // weight used on proposal 5
        ]
    }).finish()

    return encodeResponseSuccess(getElectionResultsWeightResponseBytes, requestId, dummySigningKey)
}

function simulateGetElectionList(requestId: Uint8Array, request: GetElectionList) {
    const { organizationId, fromIndex, status, tokenAddress } = request
    console.log(pad + "Get election list", organizationId, fromIndex, status, tokenAddress)

    const responseBytes = GetElectionListResponse.encode({
        electionIds: [
            new Uint8Array([1, 2, 3, 4, 5, 6]),
            new Uint8Array([2, 3, 4, 5, 6, 7]),
            new Uint8Array([3, 4, 5, 6, 7, 8]),
        ]
    }).finish()

    return encodeResponseSuccess(responseBytes, requestId, dummySigningKey)
}

function simulateGetBallot(requestId: Uint8Array, request: GetBallot) {
    const { nullifier } = request
    console.log(pad + "Get ballot", nullifier)

    const proof = { /* zkProof, public signals */ }
    const ballotBody: BallotBody = {
        electionId: dummyElectionId,
        nullifier: dummyGetNullifier(dummyElectionId, dummySigningKey),
        proofs: [
            { body: { $case: "zkSnark", zkSnark: { body: { $case: "proof1k", proof1k: proof } } } },
            { body: { $case: "none", none: {} } },
            { body: { $case: "none", none: {} } },
        ],
        votes: {
            partial: false,      // all votes included here
            submittedIndex: 0,   // N/A
            votes: [
                { body: { $case: "approval", approval: { approved: false, nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "singleChoice", singleChoice: { choice: 2, nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "quadratic", quadratic: { choicePoints: [1, 2, 0, 0, 0], nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "ranked", ranked: { ranking: [4, 2, 5], nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "spread", spread: { percentages: [10, 35, 0, 45, 10], nonce: new Uint8Array([1, 2, 3]) } } },
            ]
        }
    }
    const ballot: Ballot = {
        body: {
            $case: "anonymousBallot",
            anonymousBallot: ballotBody
        }
    }
    const responseBytes = GetBallotResponse.encode({
        ballot
    }).finish()

    return encodeResponseSuccess(responseBytes, requestId, dummySigningKey)
}

function simulateGetElectionBallots(requestId: Uint8Array, request: GetElectionBallots) {
    const { electionId, fromIndex } = request
    console.log(pad + "Get ballots from election", electionId)

    const proof = { /* zkProof, public signals */ }
    const ballotBody: BallotBody = {
        electionId: dummyElectionId,
        nullifier: dummyGetNullifier(dummyElectionId, dummySigningKey),
        proofs: [
            { body: { $case: "zkSnark", zkSnark: { body: { $case: "proof1k", proof1k: proof } } } },
            { body: { $case: "none", none: {} } },
            { body: { $case: "none", none: {} } },
        ],
        votes: {
            partial: false,      // all votes included here
            submittedIndex: 0,   // N/A
            votes: [
                { body: { $case: "approval", approval: { approved: false, nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "singleChoice", singleChoice: { choice: 2, nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "quadratic", quadratic: { choicePoints: [1, 2, 0, 0, 0], nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "ranked", ranked: { ranking: [4, 2, 5], nonce: new Uint8Array([1, 2, 3]) } } },
                { body: { $case: "spread", spread: { percentages: [10, 35, 0, 45, 10], nonce: new Uint8Array([1, 2, 3]) } } },
            ]
        }
    }
    const ballot: Ballot = {
        body: {
            $case: "anonymousBallot",
            anonymousBallot: ballotBody
        }
    }
    const responseBytes = GetElectionBallotsResponse.encode({
        ballots: [ballot, ballot, ballot]
    }).finish()

    return encodeResponseSuccess(responseBytes, requestId, dummySigningKey)
}

function simulateGetElectionCircuitInfo(requestId: Uint8Array, request: GetElectionCircuitInfo) {
    const { electionId } = request
    console.log(pad + "Get election circuit info", electionId)

    const getElectionCircuitInfoResponseBytes = GetElectionCircuitInfoResponse.encode({
        index: 5,
        baseUri: "",
        maxSize: 500,
        circuitPath: "",
        witnessHash: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]),
        zKeyHash: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]),
        vKeyHash: new Uint8Array([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]),
    }).finish()

    return encodeResponseSuccess(getElectionCircuitInfoResponseBytes, requestId, dummySigningKey)
}
