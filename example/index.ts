// NOTE: 
// This code is a simulation of an end-to-end voting flow. 
// The only purpose is to exemplify the usage of the protocol models.
// No real functionality is being executed here.

import { createOrganization, getOrganization } from "./sections/organization"
import { claimTokens, mintTokens, transferTokens } from "./sections/tokens"
import { addCensusKeys, getArboProof, getCensusRoot, getCensusSize, getErc20Proof, newCensus, publishCensus, registerVoterKey } from "./sections/census"
import { createAnonymousElection, createAnonymousPreregisterElection, createCspBlindElection, createCspElection, createDualCensusElection, createErc20Election, createMiniMeElection, createNonRealTimeResultsElection, createSimpleElection, createStepByStepElection, getElection, getElectionKeys, setElectionStatus, setProposalStatus } from "./sections/election"

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
    createSimpleElection()
    createCspElection()   // Credential Service Provider based (non-anonymous)
    createCspBlindElection()   // Credential Service Provider based (anonymous)
    createErc20Election()
    createMiniMeElection()
    createDualCensusElection()
    createAnonymousElection()
    createAnonymousPreregisterElection()
    createNonRealTimeResultsElection()

    createStepByStepElection()
    setElectionStatus()
    setProposalStatus()

    registerVoterKey()

    // Requests
    getOrganization()
    getElection()
    getElectionKeys()
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
