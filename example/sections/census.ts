// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { NewCensus, NewCensusResponse, AddCensusKeys, AddCensusKeysResponse, AddCensusKeys_CensusEntry, GetCensusRoot, GetCensusRootResponse, GetCensusSize, GetCensusSizeResponse, PublishCensus, PublishCensusResponse, GetCensusProof, GetCensusProofResponse } from "../../build/ts/protocol/service"
import { Census, Proof } from "../../build/ts/protocol/census"
import { Request, Transaction } from "../../build/ts/protocol/messages"
import { encodeRequest, decodeRequest, encodeResponseSuccess, decodeResponse, encodeResponseError, decodeTransaction, encodeTransactionSuccess, encodeTransaction, decodeTransactionReceipt, encodeTransactionError } from "../common/messages"
import { CensusType } from "../../build/ts/protocol/enums"
import { Reader } from "protobufjs"
import { RegisterElectionKey } from "../../build/ts/protocol/transactions"

const dummySigningKey = new Uint8Array()
const dummyPublicKey = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33])
const arboProof: Proof = {
    body: {
        $case: "arbo",
        arbo: {
            siblings: [new Uint8Array([1, 2, 3]), new Uint8Array([4, 5, 6]), new Uint8Array([7, 8, 9])]
        }
    }
}
const erc20Proof: Proof = {
    body: {
        $case: "erc20",
        erc20: {
            key: new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            value: new Uint8Array([1, 0, 0, 0, 0]),
            proof: [new Uint8Array([10, 20, 30]), new Uint8Array([40, 50, 60]), new Uint8Array([70, 80, 90])]
        }
    }
}

///////////////////////////////////////////////////////////////////////////////
// Frontend request
///////////////////////////////////////////////////////////////////////////////

export function newCensus() {
    console.log("-----------------------------------------------")
    console.log("Wrapping NewCensus request")

    const censusSalt = new Uint8Array([10, 20, 30, 40, 50, 60, 70, 80])

    const requestData = NewCensus.fromPartial({
        censusSalt,
        censusType: CensusType.ARBO_BLAKE2B,
        managerPublicKeys: [dummyPublicKey]
    })
    const request = Request.fromPartial({
        body: {
            $case: "newCensus",
            newCensus: requestData
        }
    })

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyCensusServiceRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `NewCensus` call, we expect now to receive a `NewCensusResponse`
    const newCensusResponse = NewCensusResponse.decode(Reader.create(response.body))
    const { censusId, censusRoot } = newCensusResponse

    console.log("Created census", censusId, "with root", censusRoot.toString())
}

export function addCensusKeys() {
    console.log("-----------------------------------------------")
    console.log("Wrapping AddCensusKeys request")

    const newEntries: Array<AddCensusKeys_CensusEntry> = [
        { key: dummyPublicKey, value: new Uint8Array([200]) },
        { key: dummyPublicKey.reverse(), value: new Uint8Array([125]) },
        // ...
    ]
    const requestData = AddCensusKeys.fromPartial({
        censusId: "0x1234",
        digested: false,
        entries: newEntries
    })
    const request = Request.fromPartial({
        body: {
            $case: "addCensusKeys",
            addCensusKeys: requestData
        }
    })

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyCensusServiceRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `AddCensusKeys` call, we expect now to receive a `AddCensusKeysResponse`
    const addCensusKeysResponse = AddCensusKeysResponse.decode(Reader.create(response.body))
    const { censusRoot, keysAdded, keysSkipped } = addCensusKeysResponse

    console.log("Added", keysAdded, "keys to the census. New root:", censusRoot.toString())
}

export function getCensusRoot() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetCensusRoot request")

    const requestData = GetCensusRoot.fromPartial({
        censusId: "0x1234"
    })
    const request = Request.fromPartial({
        body: {
            $case: "getCensusRoot",
            getCensusRoot: requestData
        }
    })

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyCensusServiceRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetCensusRoot` call, we expect now to receive a `GetCensusRootResponse`
    const responseData = GetCensusRootResponse.decode(Reader.create(response.body))
    const { censusRoot } = responseData

    console.log("Census root for 0x1234 is", censusRoot.toString())
}

export function getCensusSize() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetCensusSize request")

    const requestData = GetCensusSize.fromPartial({
        censusId: "0x1234"
    })
    const request = Request.fromPartial({
        body: {
            $case: "getCensusSize",
            getCensusSize: requestData
        }
    })

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyCensusServiceRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetCensusSize` call, we expect now to receive a `GetCensusSizeResponse`
    const responseData = GetCensusSizeResponse.decode(Reader.create(response.body))
    const { size } = responseData

    console.log("Census size for 0x1234 is", size)
}

export function publishCensus() {
    console.log("-----------------------------------------------")
    console.log("Wrapping PublishCensus request")

    const requestData = PublishCensus.fromPartial({
        censusId: "0x1234"
    })
    const request = Request.fromPartial({
        body: {
            $case: "publishCensus",
            publishCensus: requestData
        }
    })

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyCensusServiceRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `PublishCensus` call, we expect now to receive a `PublishCensusResponse`
    const responseData = PublishCensusResponse.decode(Reader.create(response.body))
    const { ipfsUri } = responseData

    console.log("Census 0x1234 published at", ipfsUri)
}

export function getArboProof() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetCensusProof (Arbo) request")

    // By indicating CensusArbo, we are telling the CS that we want a proof for this census
    const targetCensus = Census.fromPartial({
        body: {
            $case: "arbo",
            arbo: {
                censusRoot: new Uint8Array([0, 1, 2, 3, 4, 5]), // censusId
                censusUri: "ipfs://1234..."
            }
        }
    })
    const requestData = GetCensusProof.fromPartial({
        census: targetCensus,
        key: dummyPublicKey
    })
    const request = Request.fromPartial({
        body: {
            $case: "getCensusProof",
            getCensusProof: requestData
        }
    })

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyCensusServiceRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetCensusProof` call, we expect now to receive a `GetCensusProofResponse`
    const responseData = GetCensusProofResponse.decode(Reader.create(response.body))
    const { proof } = responseData

    console.log("Census proof:", proof)
}

export function getErc20Proof() {
    console.log("-----------------------------------------------")
    console.log("Wrapping GetCensusProof (ERC20) request")

    // By indicating CensusErc20, we are telling the CS that we want a proof for this census
    const targetCensus = Census.fromPartial({
        body: {
            $case: "erc20",
            erc20: {
                balanceMapSlot: 2,
                tokenAddress: new Uint8Array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200])
            }
        }
    })
    const requestData = GetCensusProof.fromPartial({
        census: targetCensus,
        key: dummyPublicKey
    })
    const request = Request.fromPartial({
        body: {
            $case: "getCensusProof",
            getCensusProof: requestData
        }
    })

    const reqBytes = encodeRequest(request, dummySigningKey)

    // Send
    console.log("Sending the payload to a Census Service")
    const responseBytes = dummyCensusServiceRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `GetCensusProof` call, we expect now to receive a `GetCensusProofResponse`
    const responseData = GetCensusProofResponse.decode(Reader.create(response.body))
    const { proof } = responseData

    console.log("Census proof:", proof)
}

export function registerVoterKey() {
    console.log("-----------------------------------------------")
    console.log("Wrapping RegisterElectionKey transaction")

    // Election lifecycle type must be mutable

    const txBody: RegisterElectionKey = {
        electionId: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        newKey: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        proofs: [
            arboProof,  // Proofs corresponding to the settings defined on the election
            erc20Proof
        ],
        weight: "1234"   // bigint
    }

    const tx: Transaction = {
        body: {
            $case: "registerElectionKey",
            registerElectionKey: txBody
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

///////////////////////////////////////////////////////////////////////////////
// Simulated Census Service responses
///////////////////////////////////////////////////////////////////////////////

const pad = "  "
function dummyCensusServiceRequest(reqBytes: Uint8Array): Uint8Array {
    const { request, publicKey, requestId } = decodeRequest(reqBytes)
    let msgBytes: Uint8Array

    console.log(pad + "Received Request", request.body.$case)
    switch (request.body.$case) {
        case "newCensus":
            msgBytes = simulateNewCensus(request.body.newCensus, requestId)
            break

        case "addCensusKeys":
            msgBytes = simulateAddCensusKeys(request.body.addCensusKeys, requestId)
            break

        case "getCensusRoot":
            msgBytes = simulateGetCensusRoot(request.body.getCensusRoot, requestId)
            break

        case "getCensusSize":
            msgBytes = simulateGetCensusSize(request.body.getCensusSize, requestId)
            break

        case "publishCensus":
            msgBytes = simulatePublishCensus(request.body.publishCensus, requestId)
            break

        case "getCensusProof":
            try {
                msgBytes = simulateGetCensusProof(request.body.getCensusProof, requestId)
            }
            catch (err) {
                msgBytes = encodeResponseError(err.message, null, requestId, dummySigningKey)
            }
            break

        default:
            msgBytes = encodeResponseError("Unsupported request", null, requestId, dummySigningKey)
            break
    }

    console.log(pad + "Encoding response")

    return msgBytes
}

function simulateNewCensus(request: NewCensus, requestId: Uint8Array) {
    const { censusSalt, censusType, managerPublicKeys } = request
    console.log(pad + "New census with salt", censusSalt, "managed by", managerPublicKeys)

    const newCensusResponseBytes = NewCensusResponse.encode({
        censusId: "0x1234",
        censusRoot: new Uint8Array([0, 1, 2, 3])
    }).finish()

    return encodeResponseSuccess(newCensusResponseBytes, requestId, dummySigningKey)
}

function simulateAddCensusKeys(request: AddCensusKeys, requestId: Uint8Array) {
    const { censusId, digested, entries } = request
    console.log(pad + "Add", entries.length, "keys to", censusId)

    const addCensusKeysResponseBytes = AddCensusKeysResponse.encode({
        censusRoot: new Uint8Array([0, 1, 2, 3]),
        keysAdded: 2,
        keysSkipped: 0
    }).finish()

    return encodeResponseSuccess(addCensusKeysResponseBytes, requestId, dummySigningKey)
}

function simulateGetCensusRoot(request: GetCensusRoot, requestId: Uint8Array) {
    const { censusId } = request
    console.log(pad + "Get census root for", censusId)

    const getCensusRootResponseBytes = GetCensusRootResponse.encode({
        censusRoot: new Uint8Array([10, 20, 30, 40])
    }).finish()

    return encodeResponseSuccess(getCensusRootResponseBytes, requestId, dummySigningKey)
}

function simulateGetCensusSize(request: GetCensusSize, requestId: Uint8Array) {
    const { censusId } = request
    console.log(pad + "Get census size for", censusId)

    const getCensusSizeResponseBytes = GetCensusSizeResponse.encode({
        size: 1234
    }).finish()

    return encodeResponseSuccess(getCensusSizeResponseBytes, requestId, dummySigningKey)
}

function simulatePublishCensus(request: PublishCensus, requestId: Uint8Array) {
    const { censusId } = request
    console.log(pad + "Publish census", censusId)

    const publishCensusResponseBytes = PublishCensusResponse.encode({
        ipfsUri: "ipfs://1234..."
    }).finish()

    return encodeResponseSuccess(publishCensusResponseBytes, requestId, dummySigningKey)
}

function simulateGetCensusProof(request: GetCensusProof, requestId: Uint8Array) {
    const { census, key } = request
    console.log(pad + "Get census proof for type", census.body.$case)

    let getCensusProofResponseBytes: Uint8Array

    switch (census.body.$case) {
        case "arbo":
            getCensusProofResponseBytes = GetCensusProofResponse.encode({ proof: arboProof }).finish()
            break
        case "erc20":
            const erc20Proof = Proof.fromPartial({
                body: {
                    $case: "erc20",
                    erc20: {
                        key,
                        value: new Uint8Array([1, 0, 0, 0, 0]),
                        proof: [new Uint8Array([10, 20, 30]), new Uint8Array([40, 50, 60]), new Uint8Array([70, 80, 90])]
                    }
                }
            })
            getCensusProofResponseBytes = GetCensusProofResponse.encode({ proof: erc20Proof }).finish()
            break
        default:
            throw new Error("Type of census not supported")
    }

    return encodeResponseSuccess(getCensusProofResponseBytes, requestId, dummySigningKey)
}

///////////////////////////////////////////////////////////////////////////////
// Simulated Transaction responses
///////////////////////////////////////////////////////////////////////////////

function dummyVochainRequest(reqBytes: Uint8Array): Uint8Array {
    const { transaction, publicKey, requestId } = decodeTransaction(reqBytes)

    console.log(pad + "Received TX", transaction.body.$case)
    switch (transaction.body.$case) {
        case "registerElectionKey":
            const { electionId, newKey, proofs, weight } = transaction.body.registerElectionKey
            console.log("Register election", electionId, "key", newKey, "with weight", weight, "and proofs", proofs)
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

