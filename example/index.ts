// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { createOrganization } from "./sections/organization"
import { claimTokens, mintTokens, transferTokens } from "./sections/tokens"
import { addCensusKeys, getCensusRoot, getCensusSize, newCensus, publishCensus } from "./sections/census"

function main() {
    // Transacations
    createOrganization()
    mintTokens()
    transferTokens()
    claimTokens()

    // Requests
    newCensus()
    addCensusKeys()
    getCensusRoot()
    getCensusSize()
    publishCensus()
    // createElection()
    // getCensusProof()
    // encodeBallot()
    // submitVote()
    // getResults()

    // serviceRequests()
    // vochainTransactions()
}

main()
