// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { NewCensus, NewCensusResponse, AddCensusKeys, AddCensusKeysResponse, AddCensusKeys_CensusEntry, GetCensusRoot, GetCensusRootResponse, GetCensusSize, GetCensusSizeResponse, PublishCensus, PublishCensusResponse, GetCensusProof, GetCensusProofResponse } from "../../build/ts/protocol/service"
import { } from "../../build/ts/protocol/census"
import { Request } from "../../build/ts/protocol/messages"
import { encodeRequest, decodeRequest, encodeResponseSuccess, decodeResponse, encodeResponseError } from "../common/messages"
import { CensusType } from "../../build/ts/protocol/enums"
import { Reader } from "protobufjs"

const dummySigningKey = new Uint8Array()
const dummyPublicKey = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33])

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
    const responseBytes = dummyRemoteRequest(reqBytes)

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
    const responseBytes = dummyRemoteRequest(reqBytes)

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
    const responseBytes = dummyRemoteRequest(reqBytes)

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
    const responseBytes = dummyRemoteRequest(reqBytes)

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
    const responseBytes = dummyRemoteRequest(reqBytes)

    const { response } = decodeResponse(responseBytes)

    console.log("Handling the response")

    // Since we issued a `PublishCensus` call, we expect now to receive a `PublishCensusResponse`
    const responseData = PublishCensusResponse.decode(Reader.create(response.body))
    const { ipfsUri } = responseData

    console.log("Census 0x1234 published at", ipfsUri)
}

///////////////////////////////////////////////////////////////////////////////
// Simulated Census Service responses
///////////////////////////////////////////////////////////////////////////////

const pad = "  "
function dummyRemoteRequest(reqBytes: Uint8Array): Uint8Array {
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


