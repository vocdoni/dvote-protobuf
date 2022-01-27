///
//  Generated code. Do not modify.
//  source: protocol/election.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use electionDescriptor instead')
const Election$json = const {
  '1': 'Election',
  '2': const [
    const {'1': 'mainCensus', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v2.Census', '10': 'mainCensus'},
    const {'1': 'validationCensus', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v2.Census', '10': 'validationCensus'},
    const {'1': 'censusSize', '3': 11, '4': 1, '5': 5, '10': 'censusSize'},
    const {'1': 'proposals', '3': 12, '4': 3, '5': 11, '6': '.dvote.types.v2.Proposal', '10': 'proposals'},
    const {'1': 'privacy', '3': 13, '4': 1, '5': 11, '6': '.dvote.types.v2.Privacy', '10': 'privacy'},
    const {'1': 'lifecycle', '3': 14, '4': 1, '5': 11, '6': '.dvote.types.v2.Lifecycle', '10': 'lifecycle'},
    const {'1': 'metadataUri', '3': 15, '4': 1, '5': 9, '10': 'metadataUri'},
  ],
};

/// Descriptor for `Election`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List electionDescriptor = $convert.base64Decode('CghFbGVjdGlvbhI2CgptYWluQ2Vuc3VzGAEgAygLMhYuZHZvdGUudHlwZXMudjIuQ2Vuc3VzUgptYWluQ2Vuc3VzEkIKEHZhbGlkYXRpb25DZW5zdXMYAiADKAsyFi5kdm90ZS50eXBlcy52Mi5DZW5zdXNSEHZhbGlkYXRpb25DZW5zdXMSHgoKY2Vuc3VzU2l6ZRgLIAEoBVIKY2Vuc3VzU2l6ZRI2Cglwcm9wb3NhbHMYDCADKAsyGC5kdm90ZS50eXBlcy52Mi5Qcm9wb3NhbFIJcHJvcG9zYWxzEjEKB3ByaXZhY3kYDSABKAsyFy5kdm90ZS50eXBlcy52Mi5Qcml2YWN5Ugdwcml2YWN5EjcKCWxpZmVjeWNsZRgOIAEoCzIZLmR2b3RlLnR5cGVzLnYyLkxpZmVjeWNsZVIJbGlmZWN5Y2xlEiAKC21ldGFkYXRhVXJpGA8gASgJUgttZXRhZGF0YVVyaQ==');
@$core.Deprecated('Use privacyDescriptor instead')
const Privacy$json = const {
  '1': 'Privacy',
  '2': const [
    const {'1': 'realTimeResults', '3': 1, '4': 1, '5': 8, '10': 'realTimeResults'},
    const {'1': 'censusProof', '3': 2, '4': 1, '5': 14, '6': '.dvote.types.v2.Privacy.CensusProofs', '10': 'censusProof'},
  ],
  '4': const [Privacy_CensusProofs$json],
};

@$core.Deprecated('Use privacyDescriptor instead')
const Privacy_CensusProofs$json = const {
  '1': 'CensusProofs',
  '2': const [
    const {'1': 'PLAIN', '2': 0},
    const {'1': 'ZK_SNARKS', '2': 1},
    const {'1': 'ZK_SNARKS_PREREGISTER', '2': 2},
  ],
};

/// Descriptor for `Privacy`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List privacyDescriptor = $convert.base64Decode('CgdQcml2YWN5EigKD3JlYWxUaW1lUmVzdWx0cxgBIAEoCFIPcmVhbFRpbWVSZXN1bHRzEkYKC2NlbnN1c1Byb29mGAIgASgOMiQuZHZvdGUudHlwZXMudjIuUHJpdmFjeS5DZW5zdXNQcm9vZnNSC2NlbnN1c1Byb29mIkMKDENlbnN1c1Byb29mcxIJCgVQTEFJThAAEg0KCVpLX1NOQVJLUxABEhkKFVpLX1NOQVJLU19QUkVSRUdJU1RFUhAC');
@$core.Deprecated('Use lifecycleDescriptor instead')
const Lifecycle$json = const {
  '1': 'Lifecycle',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v2.Lifecycle.Types', '10': 'type'},
    const {'1': 'startBlock', '3': 2, '4': 1, '5': 5, '9': 0, '10': 'startBlock', '17': true},
    const {'1': 'endBlock', '3': 3, '4': 1, '5': 5, '10': 'endBlock'},
  ],
  '4': const [Lifecycle_Types$json],
  '8': const [
    const {'1': '_startBlock'},
  ],
};

@$core.Deprecated('Use lifecycleDescriptor instead')
const Lifecycle_Types$json = const {
  '1': 'Types',
  '2': const [
    const {'1': 'PAUSED_MUTABLE', '2': 0},
    const {'1': 'PAUSED_MUTABLE_ONCE', '2': 1},
    const {'1': 'STARTED_IMMUTABLE', '2': 2},
    const {'1': 'STARTED_MUTABLE', '2': 3},
    const {'1': 'AUTOSTART_IMMUTABLE', '2': 4},
    const {'1': 'AUTOSTART_MUTABLE', '2': 5},
  ],
};

/// Descriptor for `Lifecycle`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List lifecycleDescriptor = $convert.base64Decode('CglMaWZlY3ljbGUSMwoEdHlwZRgBIAEoDjIfLmR2b3RlLnR5cGVzLnYyLkxpZmVjeWNsZS5UeXBlc1IEdHlwZRIjCgpzdGFydEJsb2NrGAIgASgFSABSCnN0YXJ0QmxvY2uIAQESGgoIZW5kQmxvY2sYAyABKAVSCGVuZEJsb2NrIpABCgVUeXBlcxISCg5QQVVTRURfTVVUQUJMRRAAEhcKE1BBVVNFRF9NVVRBQkxFX09OQ0UQARIVChFTVEFSVEVEX0lNTVVUQUJMRRACEhMKD1NUQVJURURfTVVUQUJMRRADEhcKE0FVVE9TVEFSVF9JTU1VVEFCTEUQBBIVChFBVVRPU1RBUlRfTVVUQUJMRRAFQg0KC19zdGFydEJsb2Nr');
@$core.Deprecated('Use proposalDescriptor instead')
const Proposal$json = const {
  '1': 'Proposal',
  '2': const [
    const {'1': 'approval', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.ApprovalProposal', '9': 0, '10': 'approval'},
    const {'1': 'singleChoice', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.SingleChoiceProposal', '9': 0, '10': 'singleChoice'},
    const {'1': 'quadratic', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v2.QuadraticProposal', '9': 0, '10': 'quadratic'},
    const {'1': 'ranked', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v2.RankedProposal', '9': 0, '10': 'ranked'},
    const {'1': 'spread', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v2.SpreadProposal', '9': 0, '10': 'spread'},
  ],
  '8': const [
    const {'1': 'proposal'},
  ],
};

/// Descriptor for `Proposal`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proposalDescriptor = $convert.base64Decode('CghQcm9wb3NhbBI+CghhcHByb3ZhbBgBIAEoCzIgLmR2b3RlLnR5cGVzLnYyLkFwcHJvdmFsUHJvcG9zYWxIAFIIYXBwcm92YWwSSgoMc2luZ2xlQ2hvaWNlGAIgASgLMiQuZHZvdGUudHlwZXMudjIuU2luZ2xlQ2hvaWNlUHJvcG9zYWxIAFIMc2luZ2xlQ2hvaWNlEkEKCXF1YWRyYXRpYxgDIAEoCzIhLmR2b3RlLnR5cGVzLnYyLlF1YWRyYXRpY1Byb3Bvc2FsSABSCXF1YWRyYXRpYxI4CgZyYW5rZWQYBCABKAsyHi5kdm90ZS50eXBlcy52Mi5SYW5rZWRQcm9wb3NhbEgAUgZyYW5rZWQSOAoGc3ByZWFkGAUgASgLMh4uZHZvdGUudHlwZXMudjIuU3ByZWFkUHJvcG9zYWxIAFIGc3ByZWFkQgoKCHByb3Bvc2Fs');
@$core.Deprecated('Use approvalProposalDescriptor instead')
const ApprovalProposal$json = const {
  '1': 'ApprovalProposal',
};

/// Descriptor for `ApprovalProposal`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List approvalProposalDescriptor = $convert.base64Decode('ChBBcHByb3ZhbFByb3Bvc2Fs');
@$core.Deprecated('Use singleChoiceProposalDescriptor instead')
const SingleChoiceProposal$json = const {
  '1': 'SingleChoiceProposal',
  '2': const [
    const {'1': 'optionCount', '3': 1, '4': 1, '5': 5, '10': 'optionCount'},
  ],
};

/// Descriptor for `SingleChoiceProposal`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List singleChoiceProposalDescriptor = $convert.base64Decode('ChRTaW5nbGVDaG9pY2VQcm9wb3NhbBIgCgtvcHRpb25Db3VudBgBIAEoBVILb3B0aW9uQ291bnQ=');
@$core.Deprecated('Use quadraticProposalDescriptor instead')
const QuadraticProposal$json = const {
  '1': 'QuadraticProposal',
  '2': const [
    const {'1': 'optionCount', '3': 1, '4': 1, '5': 5, '10': 'optionCount'},
    const {'1': 'costExponent', '3': 2, '4': 1, '5': 2, '10': 'costExponent'},
    const {'1': 'maxValue', '3': 3, '4': 1, '5': 5, '10': 'maxValue'},
    const {'1': 'maxSum', '3': 4, '4': 1, '5': 5, '10': 'maxSum'},
  ],
};

/// Descriptor for `QuadraticProposal`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List quadraticProposalDescriptor = $convert.base64Decode('ChFRdWFkcmF0aWNQcm9wb3NhbBIgCgtvcHRpb25Db3VudBgBIAEoBVILb3B0aW9uQ291bnQSIgoMY29zdEV4cG9uZW50GAIgASgCUgxjb3N0RXhwb25lbnQSGgoIbWF4VmFsdWUYAyABKAVSCG1heFZhbHVlEhYKBm1heFN1bRgEIAEoBVIGbWF4U3Vt');
@$core.Deprecated('Use rankedProposalDescriptor instead')
const RankedProposal$json = const {
  '1': 'RankedProposal',
  '2': const [
    const {'1': 'optionCount', '3': 1, '4': 1, '5': 5, '10': 'optionCount'},
    const {'1': 'maxItems', '3': 2, '4': 1, '5': 5, '10': 'maxItems'},
  ],
};

/// Descriptor for `RankedProposal`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List rankedProposalDescriptor = $convert.base64Decode('Cg5SYW5rZWRQcm9wb3NhbBIgCgtvcHRpb25Db3VudBgBIAEoBVILb3B0aW9uQ291bnQSGgoIbWF4SXRlbXMYAiABKAVSCG1heEl0ZW1z');
@$core.Deprecated('Use spreadProposalDescriptor instead')
const SpreadProposal$json = const {
  '1': 'SpreadProposal',
  '2': const [
    const {'1': 'optionCount', '3': 1, '4': 1, '5': 5, '10': 'optionCount'},
  ],
};

/// Descriptor for `SpreadProposal`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List spreadProposalDescriptor = $convert.base64Decode('Cg5TcHJlYWRQcm9wb3NhbBIgCgtvcHRpb25Db3VudBgBIAEoBVILb3B0aW9uQ291bnQ=');
