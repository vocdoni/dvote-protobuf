import {
    SignedTx,
    Tx,
    VoteEnvelope,
    Proof,
    ProofArbo,
    ProofArbo_Type,
} from "../build/ts/vochain/vochain"
import { Reader } from "protobufjs"

const dummyArray = new Uint8Array([100, 150, 200, 250])
const bigIntLeBuffer = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

// Serialize
let proof = Proof.fromPartial({ payload: { $case: "arbo", arbo: ProofArbo.fromPartial({ siblings: dummyArray, type: ProofArbo_Type.BLAKE2B, value: bigIntLeBuffer }) } })
let envelope = VoteEnvelope.fromPartial({ encryptionKeyIndexes: [], nonce: dummyArray, votePackage: dummyArray, nullifier: dummyArray, processId: dummyArray, proof })

let tx = Tx.fromPartial({ payload: { $case: "vote", vote: envelope } })
let signedTxBytes = SignedTx.encode({ tx: Tx.encode(tx).finish(), signature: new Uint8Array() }).finish()

// Deserialize
let recoveredSignedTx = SignedTx.decode(Reader.create(signedTxBytes))
console.log(recoveredSignedTx)

let recoveredTx = Tx.decode(Reader.create(recoveredSignedTx.tx))
console.log(recoveredTx)

let recoveredEnvelope: VoteEnvelope
switch (recoveredTx.payload.$case) {
    case "vote":
        recoveredEnvelope = recoveredTx.payload.vote
}

console.log(recoveredEnvelope)

