// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { createOrganization } from "./sections/organization"
import { claimTokens, mintTokens, transferTokens } from "./sections/tokens"
import { addCensusKeys, getArboProof, getCensusRoot, getCensusSize, getErc20Proof, newCensus, publishCensus } from "./sections/census"

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

    // Transactions
    // createSimpleElection()
    // createBlindElection()
    // createErc20Election()
    // createDualCensusElection()
    // createAnonymousElection()
    // createDualAnonymousElection()

    // createStepByStepElection()
    // setElectionState()
    // setProposalsState()

    // registerVoterKey()

    // Requests
    // getOrganization()
    // getElection()
    // getElectionKeys()
    getArboProof()
    getErc20Proof()

    // Computations
    // encodeBallot()
    
    // Transactions
    // submitVote()

    // Requests
    // getResults()
    // getResultsWeight()
    // networkRequests()
}

main()
