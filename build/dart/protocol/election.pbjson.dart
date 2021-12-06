///
//  Generated code. Do not modify.
//  source: protocol/election.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use lifecycleDescriptor instead')
const Lifecycle$json = const {
  '1': 'Lifecycle',
  '2': const [
    const {'1': 'PAUSED_MUTABLE', '2': 0},
    const {'1': 'PAUSED_MUTABLE_ONCE', '2': 1},
    const {'1': 'STARTED_IMMUTABLE', '2': 2},
    const {'1': 'STARTED_MUTABLE', '2': 3},
    const {'1': 'AUTOSTART_IMMUTABLE', '2': 4},
    const {'1': 'AUTOSTART_MUTABLE', '2': 5},
  ],
};

/// Descriptor for `Lifecycle`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List lifecycleDescriptor = $convert.base64Decode('CglMaWZlY3ljbGUSEgoOUEFVU0VEX01VVEFCTEUQABIXChNQQVVTRURfTVVUQUJMRV9PTkNFEAESFQoRU1RBUlRFRF9JTU1VVEFCTEUQAhITCg9TVEFSVEVEX01VVEFCTEUQAxIXChNBVVRPU1RBUlRfSU1NVVRBQkxFEAQSFQoRQVVUT1NUQVJUX01VVEFCTEUQBQ==');
@$core.Deprecated('Use electionDescriptor instead')
const Election$json = const {
  '1': 'Election',
  '2': const [
    const {'1': 'primaryCensus', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.Census', '10': 'primaryCensus'},
    const {'1': 'secondaryCensus', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.Census', '10': 'secondaryCensus'},
    const {'1': 'tertiaryCensus', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v2.Census', '10': 'tertiaryCensus'},
    const {'1': 'censusSize', '3': 4, '4': 1, '5': 5, '10': 'censusSize'},
    const {'1': 'proposals', '3': 5, '4': 3, '5': 11, '6': '.dvote.types.v2.Proposal', '10': 'proposals'},
    const {'1': 'privacy', '3': 6, '4': 1, '5': 11, '6': '.dvote.types.v2.Privacy', '10': 'privacy'},
    const {'1': 'lifecycle', '3': 7, '4': 1, '5': 14, '6': '.dvote.types.v2.Lifecycle', '10': 'lifecycle'},
    const {'1': 'metadataUri', '3': 8, '4': 1, '5': 9, '10': 'metadataUri'},
    const {'1': 'startBlock', '3': 9, '4': 1, '5': 5, '10': 'startBlock'},
    const {'1': 'endBlock', '3': 10, '4': 1, '5': 5, '10': 'endBlock'},
  ],
};

/// Descriptor for `Election`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List electionDescriptor = $convert.base64Decode('CghFbGVjdGlvbhI8Cg1wcmltYXJ5Q2Vuc3VzGAEgASgLMhYuZHZvdGUudHlwZXMudjIuQ2Vuc3VzUg1wcmltYXJ5Q2Vuc3VzEkAKD3NlY29uZGFyeUNlbnN1cxgCIAEoCzIWLmR2b3RlLnR5cGVzLnYyLkNlbnN1c1IPc2Vjb25kYXJ5Q2Vuc3VzEj4KDnRlcnRpYXJ5Q2Vuc3VzGAMgASgLMhYuZHZvdGUudHlwZXMudjIuQ2Vuc3VzUg50ZXJ0aWFyeUNlbnN1cxIeCgpjZW5zdXNTaXplGAQgASgFUgpjZW5zdXNTaXplEjYKCXByb3Bvc2FscxgFIAMoCzIYLmR2b3RlLnR5cGVzLnYyLlByb3Bvc2FsUglwcm9wb3NhbHMSMQoHcHJpdmFjeRgGIAEoCzIXLmR2b3RlLnR5cGVzLnYyLlByaXZhY3lSB3ByaXZhY3kSNwoJbGlmZWN5Y2xlGAcgASgOMhkuZHZvdGUudHlwZXMudjIuTGlmZWN5Y2xlUglsaWZlY3ljbGUSIAoLbWV0YWRhdGFVcmkYCCABKAlSC21ldGFkYXRhVXJpEh4KCnN0YXJ0QmxvY2sYCSABKAVSCnN0YXJ0QmxvY2sSGgoIZW5kQmxvY2sYCiABKAVSCGVuZEJsb2Nr');
@$core.Deprecated('Use privacyDescriptor instead')
const Privacy$json = const {
  '1': 'Privacy',
  '2': const [
    const {'1': 'realTimeResults', '3': 1, '4': 1, '5': 8, '10': 'realTimeResults'},
    const {'1': 'voteAnonymity', '3': 2, '4': 1, '5': 14, '6': '.dvote.types.v2.Privacy.VoteAnonimity', '10': 'voteAnonymity'},
  ],
  '4': const [Privacy_VoteAnonimity$json],
};

@$core.Deprecated('Use privacyDescriptor instead')
const Privacy_VoteAnonimity$json = const {
  '1': 'VoteAnonimity',
  '2': const [
    const {'1': 'NONE', '2': 0},
    const {'1': 'ZK_SNARKS', '2': 1},
    const {'1': 'ZK_SNARKS_PREREGISTER', '2': 2},
  ],
};

/// Descriptor for `Privacy`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List privacyDescriptor = $convert.base64Decode('CgdQcml2YWN5EigKD3JlYWxUaW1lUmVzdWx0cxgBIAEoCFIPcmVhbFRpbWVSZXN1bHRzEksKDXZvdGVBbm9ueW1pdHkYAiABKA4yJS5kdm90ZS50eXBlcy52Mi5Qcml2YWN5LlZvdGVBbm9uaW1pdHlSDXZvdGVBbm9ueW1pdHkiQwoNVm90ZUFub25pbWl0eRIICgROT05FEAASDQoJWktfU05BUktTEAESGQoVWktfU05BUktTX1BSRVJFR0lTVEVSEAI=');
@$core.Deprecated('Use proposalDescriptor instead')
const Proposal$json = const {
  '1': 'Proposal',
  '2': const [
    const {'1': 'approvalProposal', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.ApprovalProposal', '9': 0, '10': 'approvalProposal'},
    const {'1': 'singleChoiceProposal', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.SingleChoiceProposal', '9': 0, '10': 'singleChoiceProposal'},
    const {'1': 'quadraticProposal', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v2.QuadraticProposal', '9': 0, '10': 'quadraticProposal'},
    const {'1': 'rankedProposal', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v2.RankedProposal', '9': 0, '10': 'rankedProposal'},
    const {'1': 'spreadProposal', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v2.SpreadProposal', '9': 0, '10': 'spreadProposal'},
  ],
  '8': const [
    const {'1': 'proposal'},
  ],
};

/// Descriptor for `Proposal`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proposalDescriptor = $convert.base64Decode('CghQcm9wb3NhbBJOChBhcHByb3ZhbFByb3Bvc2FsGAEgASgLMiAuZHZvdGUudHlwZXMudjIuQXBwcm92YWxQcm9wb3NhbEgAUhBhcHByb3ZhbFByb3Bvc2FsEloKFHNpbmdsZUNob2ljZVByb3Bvc2FsGAIgASgLMiQuZHZvdGUudHlwZXMudjIuU2luZ2xlQ2hvaWNlUHJvcG9zYWxIAFIUc2luZ2xlQ2hvaWNlUHJvcG9zYWwSUQoRcXVhZHJhdGljUHJvcG9zYWwYAyABKAsyIS5kdm90ZS50eXBlcy52Mi5RdWFkcmF0aWNQcm9wb3NhbEgAUhFxdWFkcmF0aWNQcm9wb3NhbBJICg5yYW5rZWRQcm9wb3NhbBgEIAEoCzIeLmR2b3RlLnR5cGVzLnYyLlJhbmtlZFByb3Bvc2FsSABSDnJhbmtlZFByb3Bvc2FsEkgKDnNwcmVhZFByb3Bvc2FsGAUgASgLMh4uZHZvdGUudHlwZXMudjIuU3ByZWFkUHJvcG9zYWxIAFIOc3ByZWFkUHJvcG9zYWxCCgoIcHJvcG9zYWw=');
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
