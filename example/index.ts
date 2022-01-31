import {
    SignedTx,
    Tx,
    VoteEnvelope,
} from "../build/ts/vochain/vochain"
import {
    Proof,
    Proof_Arbo_Type,
    Proof_CSP_Type,
} from "../build/ts/common/census"
import { Reader } from "protobufjs"

const dummyArray1 = new Uint8Array([10, 15, 20, 25])
const dummyArray2 = new Uint8Array([100, 150, 200, 250])
const dummyArray3 = new Uint8Array([200, 201, 202, 203, 204, 205, 206, 207, 208, 209])
const bigIntLeBuffer = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

// Serialize
const proof1: Proof = {
    body: {
        $case: "arbo",
        arbo: {
            type: Proof_Arbo_Type.BLAKE2B,
            value: bigIntLeBuffer,
            siblings: dummyArray1,
        }
    }
}
const proof2: Proof = {
    body: {
        $case: "csp",
        csp: {
            type: Proof_CSP_Type.ECDSA_BLIND_PIDSALTED,
            bundle: { address: dummyArray2, processId: dummyArray3 },
            signature: new Uint8Array(),
        }
    }
}
const envelope: VoteEnvelope = {
    encryptionKeyIndexes: [],
    nonce: dummyArray1,
    votePackage: dummyArray1,
    nullifier: dummyArray2,
    processId: dummyArray3,
    proofs: [proof1, proof2]
}

const tx: Tx = { payload: { $case: "vote", vote: envelope } }

// Serialize to bytes
const signedTxBytes = SignedTx.encode({ tx: Tx.encode(tx).finish(), signature: new Uint8Array() }).finish()

// Deserialize
const recoveredSignedTx = SignedTx.decode(Reader.create(signedTxBytes))
console.log(recoveredSignedTx)

const recoveredTx = Tx.decode(Reader.create(recoveredSignedTx.tx))
console.log(recoveredTx)

let recoveredEnvelope: VoteEnvelope
switch (recoveredTx?.payload?.$case) {
    case "vote":
        recoveredEnvelope = recoveredTx.payload.vote
        console.log(recoveredEnvelope)
}
