///
//  Generated code. Do not modify.
//  source: protocol/enums.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use proposalStatusDescriptor instead')
const ProposalStatus$json = const {
  '1': 'ProposalStatus',
  '2': const [
    const {'1': 'UNKNOWN_PROPOSAL_STATUS', '2': 0},
    const {'1': 'READY', '2': 1},
    const {'1': 'ENDED', '2': 2},
    const {'1': 'CANCELED', '2': 3},
    const {'1': 'PAUSED', '2': 4},
    const {'1': 'RESULTS', '2': 5},
  ],
};

/// Descriptor for `ProposalStatus`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List proposalStatusDescriptor = $convert.base64Decode('Cg5Qcm9wb3NhbFN0YXR1cxIbChdVTktOT1dOX1BST1BPU0FMX1NUQVRVUxAAEgkKBVJFQURZEAESCQoFRU5ERUQQAhIMCghDQU5DRUxFRBADEgoKBlBBVVNFRBAEEgsKB1JFU1VMVFMQBQ==');
@$core.Deprecated('Use censusOffchainTypeDescriptor instead')
const CensusOffchainType$json = const {
  '1': 'CensusOffchainType',
  '2': const [
    const {'1': 'UNKNOWN_OFFCHAIN_CENSUS_TYPE', '2': 0},
    const {'1': 'ARBO_BLAKE2B', '2': 1},
  ],
};

/// Descriptor for `CensusOffchainType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List censusOffchainTypeDescriptor = $convert.base64Decode('ChJDZW5zdXNPZmZjaGFpblR5cGUSIAocVU5LTk9XTl9PRkZDSEFJTl9DRU5TVVNfVFlQRRAAEhAKDEFSQk9fQkxBS0UyQhAB');
