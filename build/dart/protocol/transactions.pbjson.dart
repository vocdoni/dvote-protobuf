///
//  Generated code. Do not modify.
//  source: protocol/transactions.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use setOrganizationDescriptor instead')
const SetOrganization$json = const {
  '1': 'SetOrganization',
  '2': const [
    const {'1': 'organization', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.Organization', '10': 'organization'},
  ],
};

/// Descriptor for `SetOrganization`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List setOrganizationDescriptor = $convert.base64Decode('Cg9TZXRPcmdhbml6YXRpb24SQAoMb3JnYW5pemF0aW9uGAEgASgLMhwuZHZvdGUudHlwZXMudjIuT3JnYW5pemF0aW9uUgxvcmdhbml6YXRpb24=');
@$core.Deprecated('Use transferDescriptor instead')
const Transfer$json = const {
  '1': 'Transfer',
  '2': const [
    const {'1': 'to', '3': 1, '4': 1, '5': 12, '10': 'to'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
};

/// Descriptor for `Transfer`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List transferDescriptor = $convert.base64Decode('CghUcmFuc2ZlchIOCgJ0bxgBIAEoDFICdG8SFAoFdmFsdWUYAiABKAlSBXZhbHVl');
@$core.Deprecated('Use mintDescriptor instead')
const Mint$json = const {
  '1': 'Mint',
  '2': const [
    const {'1': 'amount', '3': 1, '4': 1, '5': 9, '10': 'amount'},
  ],
};

/// Descriptor for `Mint`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List mintDescriptor = $convert.base64Decode('CgRNaW50EhYKBmFtb3VudBgBIAEoCVIGYW1vdW50');
@$core.Deprecated('Use claimTokensDescriptor instead')
const ClaimTokens$json = const {
  '1': 'ClaimTokens',
  '2': const [
    const {'1': 'nonce', '3': 1, '4': 1, '5': 12, '10': 'nonce'},
    const {'1': 'sender', '3': 2, '4': 1, '5': 12, '10': 'sender'},
  ],
};

/// Descriptor for `ClaimTokens`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List claimTokensDescriptor = $convert.base64Decode('CgtDbGFpbVRva2VucxIUCgVub25jZRgBIAEoDFIFbm9uY2USFgoGc2VuZGVyGAIgASgMUgZzZW5kZXI=');
@$core.Deprecated('Use newElectionDescriptor instead')
const NewElection$json = const {
  '1': 'NewElection',
  '2': const [
    const {'1': 'election', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.Election', '10': 'election'},
  ],
};

/// Descriptor for `NewElection`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List newElectionDescriptor = $convert.base64Decode('CgtOZXdFbGVjdGlvbhI0CghlbGVjdGlvbhgBIAEoCzIYLmR2b3RlLnR5cGVzLnYyLkVsZWN0aW9uUghlbGVjdGlvbg==');
@$core.Deprecated('Use registerKeyDescriptor instead')
const RegisterKey$json = const {
  '1': 'RegisterKey',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
    const {'1': 'proofs', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v2.Proof', '10': 'proofs'},
    const {'1': 'newKey', '3': 3, '4': 1, '5': 12, '10': 'newKey'},
    const {'1': 'weight', '3': 4, '4': 1, '5': 9, '10': 'weight'},
  ],
};

/// Descriptor for `RegisterKey`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List registerKeyDescriptor = $convert.base64Decode('CgtSZWdpc3RlcktleRIeCgplbGVjdGlvbklkGAEgASgMUgplbGVjdGlvbklkEi0KBnByb29mcxgCIAMoCzIVLmR2b3RlLnR5cGVzLnYyLlByb29mUgZwcm9vZnMSFgoGbmV3S2V5GAMgASgMUgZuZXdLZXkSFgoGd2VpZ2h0GAQgASgJUgZ3ZWlnaHQ=');
@$core.Deprecated('Use submitBallotDescriptor instead')
const SubmitBallot$json = const {
  '1': 'SubmitBallot',
  '2': const [
    const {'1': 'ballot', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.Ballot', '10': 'ballot'},
  ],
};

/// Descriptor for `SubmitBallot`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List submitBallotDescriptor = $convert.base64Decode('CgxTdWJtaXRCYWxsb3QSLgoGYmFsbG90GAEgASgLMhYuZHZvdGUudHlwZXMudjIuQmFsbG90UgZiYWxsb3Q=');
@$core.Deprecated('Use setElectionStatusDescriptor instead')
const SetElectionStatus$json = const {
  '1': 'SetElectionStatus',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
    const {'1': 'newStatus', '3': 2, '4': 1, '5': 14, '6': '.dvote.types.v2.ProposalStatus', '10': 'newStatus'},
  ],
};

/// Descriptor for `SetElectionStatus`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List setElectionStatusDescriptor = $convert.base64Decode('ChFTZXRFbGVjdGlvblN0YXR1cxIeCgplbGVjdGlvbklkGAEgASgMUgplbGVjdGlvbklkEjwKCW5ld1N0YXR1cxgCIAEoDjIeLmR2b3RlLnR5cGVzLnYyLlByb3Bvc2FsU3RhdHVzUgluZXdTdGF0dXM=');
@$core.Deprecated('Use setProposalStatusDescriptor instead')
const SetProposalStatus$json = const {
  '1': 'SetProposalStatus',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
    const {'1': 'proposalIndex', '3': 2, '4': 1, '5': 5, '10': 'proposalIndex'},
    const {'1': 'newStatus', '3': 3, '4': 1, '5': 14, '6': '.dvote.types.v2.ProposalStatus', '10': 'newStatus'},
  ],
};

/// Descriptor for `SetProposalStatus`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List setProposalStatusDescriptor = $convert.base64Decode('ChFTZXRQcm9wb3NhbFN0YXR1cxIeCgplbGVjdGlvbklkGAEgASgMUgplbGVjdGlvbklkEiQKDXByb3Bvc2FsSW5kZXgYAiABKAVSDXByb3Bvc2FsSW5kZXgSPAoJbmV3U3RhdHVzGAMgASgOMh4uZHZvdGUudHlwZXMudjIuUHJvcG9zYWxTdGF0dXNSCW5ld1N0YXR1cw==');
