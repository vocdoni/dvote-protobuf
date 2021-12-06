/* eslint-disable */
import { util, configure } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "dvote.types.v2";

export enum ProposalStatus {
  UNKNOWN_PROPOSAL_STATUS = 0,
  READY = 1,
  ENDED = 2,
  CANCELED = 3,
  PAUSED = 4,
  RESULTS = 5,
  UNRECOGNIZED = -1,
}

export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "UNKNOWN_PROPOSAL_STATUS":
      return ProposalStatus.UNKNOWN_PROPOSAL_STATUS;
    case 1:
    case "READY":
      return ProposalStatus.READY;
    case 2:
    case "ENDED":
      return ProposalStatus.ENDED;
    case 3:
    case "CANCELED":
      return ProposalStatus.CANCELED;
    case 4:
    case "PAUSED":
      return ProposalStatus.PAUSED;
    case 5:
    case "RESULTS":
      return ProposalStatus.RESULTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}

export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.UNKNOWN_PROPOSAL_STATUS:
      return "UNKNOWN_PROPOSAL_STATUS";
    case ProposalStatus.READY:
      return "READY";
    case ProposalStatus.ENDED:
      return "ENDED";
    case ProposalStatus.CANCELED:
      return "CANCELED";
    case ProposalStatus.PAUSED:
      return "PAUSED";
    case ProposalStatus.RESULTS:
      return "RESULTS";
    default:
      return "UNKNOWN";
  }
}

export enum CensusOffchainType {
  UNKNOWN_OFFCHAIN_CENSUS_TYPE = 0,
  ARBO_BLAKE2B = 1,
  UNRECOGNIZED = -1,
}

export function censusOffchainTypeFromJSON(object: any): CensusOffchainType {
  switch (object) {
    case 0:
    case "UNKNOWN_OFFCHAIN_CENSUS_TYPE":
      return CensusOffchainType.UNKNOWN_OFFCHAIN_CENSUS_TYPE;
    case 1:
    case "ARBO_BLAKE2B":
      return CensusOffchainType.ARBO_BLAKE2B;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CensusOffchainType.UNRECOGNIZED;
  }
}

export function censusOffchainTypeToJSON(object: CensusOffchainType): string {
  switch (object) {
    case CensusOffchainType.UNKNOWN_OFFCHAIN_CENSUS_TYPE:
      return "UNKNOWN_OFFCHAIN_CENSUS_TYPE";
    case CensusOffchainType.ARBO_BLAKE2B:
      return "ARBO_BLAKE2B";
    default:
      return "UNKNOWN";
  }
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
