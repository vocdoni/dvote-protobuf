// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { ApprovalVote, Ballot, BallotBody, EncryptedVote, QuadraticVote, RankedVote, SingleChoiceVote, SpreadVote } from "../../build/ts/protocol/ballot"
import { ProofZkSnark } from "../../build/ts/protocol/census"
import { SignatureType } from "../../build/ts/protocol/enums"

const dummySigningKey = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
const dummyElectionId = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])

///////////////////////////////////////////////////////////////////////////////
// Frontend requests
///////////////////////////////////////////////////////////////////////////////

export function encodeSignedBallot() {
  console.log("-----------------------------------------------")
  console.log("Encoding a signed ballot with 5 proposal votes")

  // An election with 5 proposals, each being a different type of proposal.
  // Results are not encrypted.
  // Census proofs are signed.

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
  const ballotBytes = Ballot.encode(ballot).finish()

  console.log("Encoded signed ballot", ballot)
}

export function encodeSignedEncryptedBallot() {
  console.log("-----------------------------------------------")
  console.log("Encoding a signed ballot with 5 proposal votes")

  // An election with 5 proposals, each being a different type of proposal.
  // Results are encrypted.
  // Census proofs are signed.

  const proposal1Vote: ApprovalVote = { approved: false, nonce: new Uint8Array([1, 2, 3]) }
  const proposal2Vote: SingleChoiceVote = { choice: 2, nonce: new Uint8Array([1, 2, 3]) }
  const proposal3Vote: QuadraticVote = { choicePoints: [1, 2, 0, 0, 0], nonce: new Uint8Array([1, 2, 3]) }
  const proposal4Vote: RankedVote = { ranking: [4, 2, 5], nonce: new Uint8Array([1, 2, 3]) }
  const proposal5Vote: SpreadVote = { percentages: [10, 35, 0, 45, 10], nonce: new Uint8Array([1, 2, 3]) }

  const proposal1EncryptedVote: EncryptedVote = {
    encryptionKeyIndexes: [1, 0],
    payload: ApprovalVote.encode(proposal1Vote).finish()
  }
  const proposal2EncryptedVote: EncryptedVote = {
    encryptionKeyIndexes: [1, 0],
    payload: SingleChoiceVote.encode(proposal2Vote).finish()
  }
  const proposal3EncryptedVote: EncryptedVote = {
    encryptionKeyIndexes: [1, 0],
    payload: QuadraticVote.encode(proposal3Vote).finish()
  }
  const proposal4EncryptedVote: EncryptedVote = {
    encryptionKeyIndexes: [1, 0],
    payload: RankedVote.encode(proposal4Vote).finish()
  }
  const proposal5EncryptedVote: EncryptedVote = {
    encryptionKeyIndexes: [1, 0],
    payload: SpreadVote.encode(proposal5Vote).finish()
  }

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
        { body: { $case: "encrypted", encrypted: proposal1EncryptedVote } },
        { body: { $case: "encrypted", encrypted: proposal2EncryptedVote } },
        { body: { $case: "encrypted", encrypted: proposal3EncryptedVote } },
        { body: { $case: "encrypted", encrypted: proposal4EncryptedVote } },
        { body: { $case: "encrypted", encrypted: proposal5EncryptedVote } },
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
  const ballotBytes = Ballot.encode(ballot).finish()

  console.log("Encoded signed encrypted ballot", ballot)
}

export function encodeSignedStepByStepBallot() {
  console.log("-----------------------------------------------")
  console.log("Encoding a signed ballot with 5 proposals, voting on the third one")

  // An election with 5 proposals, each being a different type of proposal.
  // Voting the third proposal only
  // Results are not encrypted.
  // Census proofs are signed.

  const ballotBodyBytes = BallotBody.encode({
    electionId: dummyElectionId,
    nullifier: dummyGetNullifier(dummyElectionId, dummySigningKey),
    proofs: [
      { body: { $case: "arbo", arbo: { siblings: [new Uint8Array([0, 1, 2, 3])] } } },
      { body: { $case: "none", none: {} } },
      { body: { $case: "none", none: {} } },
    ],
    votes: {
      partial: true,       // all votes included here
      submittedIndex: 2,   // N/A
      votes: [
        // Only the element being voted now
        { body: { $case: "quadratic", quadratic: { choicePoints: [1, 2, 0, 0, 0], nonce: new Uint8Array([1, 2, 3]) } } },
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
  const ballotBytes = Ballot.encode(ballot).finish()

  console.log("Encoded signed ballot for proposal 3", ballot)
}

export function encodeAnonymousBallot() {
  console.log("-----------------------------------------------")
  console.log("Encoding a signed ballot with 5 proposal votes")

  // An election with 5 proposals, each being a different type of proposal.
  // Results are not encrypted.
  // Census proof is anonymous.

  const proof = { /* zkProof, public signals */ } // computeZkProof(arboProof, ..., secretKey)

  const proofZkSnark: ProofZkSnark = {
    body: {
      $case: "proof1k",
      proof1k: proof
    }
  }

  const ballotBody: BallotBody = {
    electionId: dummyElectionId,
    nullifier: dummyGetNullifier(dummyElectionId, dummySigningKey),
    proofs: [
      { body: { $case: "zkSnark", zkSnark: proofZkSnark } },
      { body: { $case: "none", none: {} } },   // Expected to be none in anonymous voting
      { body: { $case: "none", none: {} } },   // Expected to be none in anonymous voting
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

  // This ballot must not be signed

  const ballot: Ballot = {
    body: {
      $case: "anonymousBallot",
      anonymousBallot: ballotBody
    }
  }
  const ballotBytes = Ballot.encode(ballot).finish()

  console.log("Encoded anonymous ballot", ballot)
}

///////////////////////////////////////////////////////////////////////////////
// Helpers
///////////////////////////////////////////////////////////////////////////////

function dummySign(body: Uint8Array, signingKey?: Uint8Array) {
  if (!signingKey) return new Uint8Array()
  return new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
}

function dummyGetNullifier(electionId: Uint8Array, privateKey?: Uint8Array) {
  return new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31])
}
