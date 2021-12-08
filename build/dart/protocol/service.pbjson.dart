///
//  Generated code. Do not modify.
//  source: protocol/service.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use electionRequestDescriptor instead')
const ElectionRequest$json = const {
  '1': 'ElectionRequest',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
    const {'1': 'getElection', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElection', '9': 0, '10': 'getElection'},
    const {'1': 'getElectionList', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionList', '9': 0, '10': 'getElectionList'},
    const {'1': 'getOrganization', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v2.GetOrganization', '9': 0, '10': 'getOrganization'},
    const {'1': 'getBallot', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v2.GetBallot', '9': 0, '10': 'getBallot'},
    const {'1': 'getElectionBallots', '3': 6, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionBallots', '9': 0, '10': 'getElectionBallots'},
    const {'1': 'getElectionKeys', '3': 7, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionKeys', '9': 0, '10': 'getElectionKeys'},
    const {'1': 'getElectionCircuitInfo', '3': 8, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionCircuitInfo', '9': 0, '10': 'getElectionCircuitInfo'},
    const {'1': 'getElectionResults', '3': 9, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionResults', '9': 0, '10': 'getElectionResults'},
    const {'1': 'getElectionWeight', '3': 10, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionWeight', '9': 0, '10': 'getElectionWeight'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `ElectionRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List electionRequestDescriptor = $convert.base64Decode('Cg9FbGVjdGlvblJlcXVlc3QSHgoKZWxlY3Rpb25JZBgBIAEoDFIKZWxlY3Rpb25JZBI/CgtnZXRFbGVjdGlvbhgCIAEoCzIbLmR2b3RlLnR5cGVzLnYyLkdldEVsZWN0aW9uSABSC2dldEVsZWN0aW9uEksKD2dldEVsZWN0aW9uTGlzdBgDIAEoCzIfLmR2b3RlLnR5cGVzLnYyLkdldEVsZWN0aW9uTGlzdEgAUg9nZXRFbGVjdGlvbkxpc3QSSwoPZ2V0T3JnYW5pemF0aW9uGAQgASgLMh8uZHZvdGUudHlwZXMudjIuR2V0T3JnYW5pemF0aW9uSABSD2dldE9yZ2FuaXphdGlvbhI5CglnZXRCYWxsb3QYBSABKAsyGS5kdm90ZS50eXBlcy52Mi5HZXRCYWxsb3RIAFIJZ2V0QmFsbG90ElQKEmdldEVsZWN0aW9uQmFsbG90cxgGIAEoCzIiLmR2b3RlLnR5cGVzLnYyLkdldEVsZWN0aW9uQmFsbG90c0gAUhJnZXRFbGVjdGlvbkJhbGxvdHMSSwoPZ2V0RWxlY3Rpb25LZXlzGAcgASgLMh8uZHZvdGUudHlwZXMudjIuR2V0RWxlY3Rpb25LZXlzSABSD2dldEVsZWN0aW9uS2V5cxJgChZnZXRFbGVjdGlvbkNpcmN1aXRJbmZvGAggASgLMiYuZHZvdGUudHlwZXMudjIuR2V0RWxlY3Rpb25DaXJjdWl0SW5mb0gAUhZnZXRFbGVjdGlvbkNpcmN1aXRJbmZvElQKEmdldEVsZWN0aW9uUmVzdWx0cxgJIAEoCzIiLmR2b3RlLnR5cGVzLnYyLkdldEVsZWN0aW9uUmVzdWx0c0gAUhJnZXRFbGVjdGlvblJlc3VsdHMSUQoRZ2V0RWxlY3Rpb25XZWlnaHQYCiABKAsyIS5kdm90ZS50eXBlcy52Mi5HZXRFbGVjdGlvbldlaWdodEgAUhFnZXRFbGVjdGlvbldlaWdodEIGCgRib2R5');
@$core.Deprecated('Use censusRequestDescriptor instead')
const CensusRequest$json = const {
  '1': 'CensusRequest',
  '2': const [
    const {'1': 'newCensus', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.NewCensus', '9': 0, '10': 'newCensus'},
    const {'1': 'addCensusKeys', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.AddCensusKeys', '9': 0, '10': 'addCensusKeys'},
    const {'1': 'getCensusRoot', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v2.GetCensusRoot', '9': 0, '10': 'getCensusRoot'},
    const {'1': 'getCensusSize', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v2.GetCensusSize', '9': 0, '10': 'getCensusSize'},
    const {'1': 'publishCensus', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v2.PublishCensus', '9': 0, '10': 'publishCensus'},
    const {'1': 'getCensusProof', '3': 6, '4': 1, '5': 11, '6': '.dvote.types.v2.GetCensusProof', '9': 0, '10': 'getCensusProof'},
    const {'1': 'dumpCensus', '3': 7, '4': 1, '5': 11, '6': '.dvote.types.v2.DumpCensus', '9': 0, '10': 'dumpCensus'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `CensusRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List censusRequestDescriptor = $convert.base64Decode('Cg1DZW5zdXNSZXF1ZXN0EjkKCW5ld0NlbnN1cxgBIAEoCzIZLmR2b3RlLnR5cGVzLnYyLk5ld0NlbnN1c0gAUgluZXdDZW5zdXMSRQoNYWRkQ2Vuc3VzS2V5cxgCIAEoCzIdLmR2b3RlLnR5cGVzLnYyLkFkZENlbnN1c0tleXNIAFINYWRkQ2Vuc3VzS2V5cxJFCg1nZXRDZW5zdXNSb290GAMgASgLMh0uZHZvdGUudHlwZXMudjIuR2V0Q2Vuc3VzUm9vdEgAUg1nZXRDZW5zdXNSb290EkUKDWdldENlbnN1c1NpemUYBCABKAsyHS5kdm90ZS50eXBlcy52Mi5HZXRDZW5zdXNTaXplSABSDWdldENlbnN1c1NpemUSRQoNcHVibGlzaENlbnN1cxgFIAEoCzIdLmR2b3RlLnR5cGVzLnYyLlB1Ymxpc2hDZW5zdXNIAFINcHVibGlzaENlbnN1cxJICg5nZXRDZW5zdXNQcm9vZhgGIAEoCzIeLmR2b3RlLnR5cGVzLnYyLkdldENlbnN1c1Byb29mSABSDmdldENlbnN1c1Byb29mEjwKCmR1bXBDZW5zdXMYByABKAsyGi5kdm90ZS50eXBlcy52Mi5EdW1wQ2Vuc3VzSABSCmR1bXBDZW5zdXNCBgoEYm9keQ==');
@$core.Deprecated('Use fileRequestDescriptor instead')
const FileRequest$json = const {
  '1': 'FileRequest',
  '2': const [
    const {'1': 'pinFile', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.PinFile', '9': 0, '10': 'pinFile'},
    const {'1': 'fetchFile', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.FetchFile', '9': 0, '10': 'fetchFile'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `FileRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List fileRequestDescriptor = $convert.base64Decode('CgtGaWxlUmVxdWVzdBIzCgdwaW5GaWxlGAEgASgLMhcuZHZvdGUudHlwZXMudjIuUGluRmlsZUgAUgdwaW5GaWxlEjkKCWZldGNoRmlsZRgCIAEoCzIZLmR2b3RlLnR5cGVzLnYyLkZldGNoRmlsZUgAUglmZXRjaEZpbGVCBgoEYm9keQ==');
@$core.Deprecated('Use networkRequestDescriptor instead')
const NetworkRequest$json = const {
  '1': 'NetworkRequest',
  '2': const [
    const {'1': 'getBlockStatus', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.GetBlockStatus', '9': 0, '10': 'getBlockStatus'},
    const {'1': 'getBlockCount', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.GetBlockCount', '9': 0, '10': 'getBlockCount'},
    const {'1': 'estimateElectionPrice', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v2.EstimateElectionPrice', '9': 0, '10': 'estimateElectionPrice'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `NetworkRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List networkRequestDescriptor = $convert.base64Decode('Cg5OZXR3b3JrUmVxdWVzdBJICg5nZXRCbG9ja1N0YXR1cxgBIAEoCzIeLmR2b3RlLnR5cGVzLnYyLkdldEJsb2NrU3RhdHVzSABSDmdldEJsb2NrU3RhdHVzEkUKDWdldEJsb2NrQ291bnQYAiABKAsyHS5kdm90ZS50eXBlcy52Mi5HZXRCbG9ja0NvdW50SABSDWdldEJsb2NrQ291bnQSXQoVZXN0aW1hdGVFbGVjdGlvblByaWNlGAMgASgLMiUuZHZvdGUudHlwZXMudjIuRXN0aW1hdGVFbGVjdGlvblByaWNlSABSFWVzdGltYXRlRWxlY3Rpb25QcmljZUIGCgRib2R5');
@$core.Deprecated('Use transactionRequestDescriptor instead')
const TransactionRequest$json = const {
  '1': 'TransactionRequest',
  '2': const [
    const {'1': 'getTx', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.GetTransaction', '9': 0, '10': 'getTx'},
    const {'1': 'waitTx', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.WaitTransaction', '9': 0, '10': 'waitTx'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `TransactionRequest`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List transactionRequestDescriptor = $convert.base64Decode('ChJUcmFuc2FjdGlvblJlcXVlc3QSNgoFZ2V0VHgYASABKAsyHi5kdm90ZS50eXBlcy52Mi5HZXRUcmFuc2FjdGlvbkgAUgVnZXRUeBI5CgZ3YWl0VHgYAiABKAsyHy5kdm90ZS50eXBlcy52Mi5XYWl0VHJhbnNhY3Rpb25IAFIGd2FpdFR4QgYKBGJvZHk=');
@$core.Deprecated('Use getElectionDescriptor instead')
const GetElection$json = const {
  '1': 'GetElection',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
  ],
};

/// Descriptor for `GetElection`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionDescriptor = $convert.base64Decode('CgtHZXRFbGVjdGlvbhIeCgplbGVjdGlvbklkGAEgASgMUgplbGVjdGlvbklk');
@$core.Deprecated('Use getElectionResponseDescriptor instead')
const GetElectionResponse$json = const {
  '1': 'GetElectionResponse',
  '2': const [
    const {'1': 'organizationId', '3': 1, '4': 1, '5': 12, '10': 'organizationId'},
    const {'1': 'parameters', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.Election', '10': 'parameters'},
    const {'1': 'statuses', '3': 3, '4': 3, '5': 14, '6': '.dvote.types.v2.ProposalStatus', '10': 'statuses'},
    const {'1': 'ballotCounts', '3': 4, '4': 3, '5': 5, '10': 'ballotCounts'},
  ],
};

/// Descriptor for `GetElectionResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionResponseDescriptor = $convert.base64Decode('ChNHZXRFbGVjdGlvblJlc3BvbnNlEiYKDm9yZ2FuaXphdGlvbklkGAEgASgMUg5vcmdhbml6YXRpb25JZBI4CgpwYXJhbWV0ZXJzGAIgASgLMhguZHZvdGUudHlwZXMudjIuRWxlY3Rpb25SCnBhcmFtZXRlcnMSOgoIc3RhdHVzZXMYAyADKA4yHi5kdm90ZS50eXBlcy52Mi5Qcm9wb3NhbFN0YXR1c1IIc3RhdHVzZXMSIgoMYmFsbG90Q291bnRzGAQgAygFUgxiYWxsb3RDb3VudHM=');
@$core.Deprecated('Use getElectionListDescriptor instead')
const GetElectionList$json = const {
  '1': 'GetElectionList',
  '2': const [
    const {'1': 'fromIndex', '3': 1, '4': 1, '5': 5, '10': 'fromIndex'},
    const {'1': 'organizationId', '3': 2, '4': 1, '5': 12, '9': 0, '10': 'organizationId', '17': true},
    const {'1': 'tokenAddress', '3': 3, '4': 1, '5': 12, '9': 1, '10': 'tokenAddress', '17': true},
    const {'1': 'status', '3': 4, '4': 1, '5': 14, '6': '.dvote.types.v2.ProposalStatus', '9': 2, '10': 'status', '17': true},
  ],
  '8': const [
    const {'1': '_organizationId'},
    const {'1': '_tokenAddress'},
    const {'1': '_status'},
  ],
};

/// Descriptor for `GetElectionList`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionListDescriptor = $convert.base64Decode('Cg9HZXRFbGVjdGlvbkxpc3QSHAoJZnJvbUluZGV4GAEgASgFUglmcm9tSW5kZXgSKwoOb3JnYW5pemF0aW9uSWQYAiABKAxIAFIOb3JnYW5pemF0aW9uSWSIAQESJwoMdG9rZW5BZGRyZXNzGAMgASgMSAFSDHRva2VuQWRkcmVzc4gBARI7CgZzdGF0dXMYBCABKA4yHi5kdm90ZS50eXBlcy52Mi5Qcm9wb3NhbFN0YXR1c0gCUgZzdGF0dXOIAQFCEQoPX29yZ2FuaXphdGlvbklkQg8KDV90b2tlbkFkZHJlc3NCCQoHX3N0YXR1cw==');
@$core.Deprecated('Use getElectionListResponseDescriptor instead')
const GetElectionListResponse$json = const {
  '1': 'GetElectionListResponse',
  '2': const [
    const {'1': 'electionIds', '3': 1, '4': 3, '5': 12, '10': 'electionIds'},
  ],
};

/// Descriptor for `GetElectionListResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionListResponseDescriptor = $convert.base64Decode('ChdHZXRFbGVjdGlvbkxpc3RSZXNwb25zZRIgCgtlbGVjdGlvbklkcxgBIAMoDFILZWxlY3Rpb25JZHM=');
@$core.Deprecated('Use getOrganizationDescriptor instead')
const GetOrganization$json = const {
  '1': 'GetOrganization',
  '2': const [
    const {'1': 'organizationId', '3': 1, '4': 1, '5': 12, '10': 'organizationId'},
  ],
};

/// Descriptor for `GetOrganization`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getOrganizationDescriptor = $convert.base64Decode('Cg9HZXRPcmdhbml6YXRpb24SJgoOb3JnYW5pemF0aW9uSWQYASABKAxSDm9yZ2FuaXphdGlvbklk');
@$core.Deprecated('Use getOrganizationResponseDescriptor instead')
const GetOrganizationResponse$json = const {
  '1': 'GetOrganizationResponse',
  '2': const [
    const {'1': 'organization', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.Organization', '10': 'organization'},
  ],
};

/// Descriptor for `GetOrganizationResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getOrganizationResponseDescriptor = $convert.base64Decode('ChdHZXRPcmdhbml6YXRpb25SZXNwb25zZRJACgxvcmdhbml6YXRpb24YASABKAsyHC5kdm90ZS50eXBlcy52Mi5Pcmdhbml6YXRpb25SDG9yZ2FuaXphdGlvbg==');
@$core.Deprecated('Use getBallotDescriptor instead')
const GetBallot$json = const {
  '1': 'GetBallot',
  '2': const [
    const {'1': 'nullifier', '3': 1, '4': 1, '5': 12, '10': 'nullifier'},
  ],
};

/// Descriptor for `GetBallot`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getBallotDescriptor = $convert.base64Decode('CglHZXRCYWxsb3QSHAoJbnVsbGlmaWVyGAEgASgMUgludWxsaWZpZXI=');
@$core.Deprecated('Use getBallotResponseDescriptor instead')
const GetBallotResponse$json = const {
  '1': 'GetBallotResponse',
  '2': const [
    const {'1': 'ballot', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.Ballot', '10': 'ballot'},
  ],
};

/// Descriptor for `GetBallotResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getBallotResponseDescriptor = $convert.base64Decode('ChFHZXRCYWxsb3RSZXNwb25zZRIuCgZiYWxsb3QYASABKAsyFi5kdm90ZS50eXBlcy52Mi5CYWxsb3RSBmJhbGxvdA==');
@$core.Deprecated('Use getElectionBallotsDescriptor instead')
const GetElectionBallots$json = const {
  '1': 'GetElectionBallots',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
    const {'1': 'fromIndex', '3': 2, '4': 1, '5': 5, '10': 'fromIndex'},
  ],
};

/// Descriptor for `GetElectionBallots`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionBallotsDescriptor = $convert.base64Decode('ChJHZXRFbGVjdGlvbkJhbGxvdHMSHgoKZWxlY3Rpb25JZBgBIAEoDFIKZWxlY3Rpb25JZBIcCglmcm9tSW5kZXgYAiABKAVSCWZyb21JbmRleA==');
@$core.Deprecated('Use getElectionBallotsResponseDescriptor instead')
const GetElectionBallotsResponse$json = const {
  '1': 'GetElectionBallotsResponse',
  '2': const [
    const {'1': 'ballot', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v2.Ballot', '10': 'ballot'},
  ],
};

/// Descriptor for `GetElectionBallotsResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionBallotsResponseDescriptor = $convert.base64Decode('ChpHZXRFbGVjdGlvbkJhbGxvdHNSZXNwb25zZRIuCgZiYWxsb3QYASADKAsyFi5kdm90ZS50eXBlcy52Mi5CYWxsb3RSBmJhbGxvdA==');
@$core.Deprecated('Use getElectionKeysDescriptor instead')
const GetElectionKeys$json = const {
  '1': 'GetElectionKeys',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
  ],
};

/// Descriptor for `GetElectionKeys`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionKeysDescriptor = $convert.base64Decode('Cg9HZXRFbGVjdGlvbktleXMSHgoKZWxlY3Rpb25JZBgBIAEoDFIKZWxlY3Rpb25JZA==');
@$core.Deprecated('Use getElectionKeysResponseDescriptor instead')
const GetElectionKeysResponse$json = const {
  '1': 'GetElectionKeysResponse',
  '2': const [
    const {'1': 'encryptionPublicKeys', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v2.GetElectionKeysResponse.KeyEntry', '10': 'encryptionPublicKeys'},
    const {'1': 'encryptionPrivateKeys', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v2.GetElectionKeysResponse.KeyEntry', '10': 'encryptionPrivateKeys'},
  ],
  '3': const [GetElectionKeysResponse_KeyEntry$json],
};

@$core.Deprecated('Use getElectionKeysResponseDescriptor instead')
const GetElectionKeysResponse_KeyEntry$json = const {
  '1': 'KeyEntry',
  '2': const [
    const {'1': 'index', '3': 1, '4': 1, '5': 5, '10': 'index'},
    const {'1': 'key', '3': 2, '4': 1, '5': 12, '10': 'key'},
  ],
};

/// Descriptor for `GetElectionKeysResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionKeysResponseDescriptor = $convert.base64Decode('ChdHZXRFbGVjdGlvbktleXNSZXNwb25zZRJkChRlbmNyeXB0aW9uUHVibGljS2V5cxgBIAMoCzIwLmR2b3RlLnR5cGVzLnYyLkdldEVsZWN0aW9uS2V5c1Jlc3BvbnNlLktleUVudHJ5UhRlbmNyeXB0aW9uUHVibGljS2V5cxJmChVlbmNyeXB0aW9uUHJpdmF0ZUtleXMYAiADKAsyMC5kdm90ZS50eXBlcy52Mi5HZXRFbGVjdGlvbktleXNSZXNwb25zZS5LZXlFbnRyeVIVZW5jcnlwdGlvblByaXZhdGVLZXlzGjIKCEtleUVudHJ5EhQKBWluZGV4GAEgASgFUgVpbmRleBIQCgNrZXkYAiABKAxSA2tleQ==');
@$core.Deprecated('Use getElectionCircuitInfoDescriptor instead')
const GetElectionCircuitInfo$json = const {
  '1': 'GetElectionCircuitInfo',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
  ],
};

/// Descriptor for `GetElectionCircuitInfo`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionCircuitInfoDescriptor = $convert.base64Decode('ChZHZXRFbGVjdGlvbkNpcmN1aXRJbmZvEh4KCmVsZWN0aW9uSWQYASABKAxSCmVsZWN0aW9uSWQ=');
@$core.Deprecated('Use getElectionCircuitInfoResponseDescriptor instead')
const GetElectionCircuitInfoResponse$json = const {
  '1': 'GetElectionCircuitInfoResponse',
  '2': const [
    const {'1': 'index', '3': 1, '4': 1, '5': 5, '10': 'index'},
    const {'1': 'baseUri', '3': 2, '4': 1, '5': 9, '10': 'baseUri'},
    const {'1': 'circuitPath', '3': 3, '4': 1, '5': 9, '10': 'circuitPath'},
    const {'1': 'maxSize', '3': 4, '4': 1, '5': 5, '10': 'maxSize'},
    const {'1': 'witnessHash', '3': 5, '4': 1, '5': 12, '10': 'witnessHash'},
    const {'1': 'zKeyHash', '3': 6, '4': 1, '5': 12, '10': 'zKeyHash'},
    const {'1': 'vKeyHash', '3': 7, '4': 1, '5': 12, '10': 'vKeyHash'},
  ],
};

/// Descriptor for `GetElectionCircuitInfoResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionCircuitInfoResponseDescriptor = $convert.base64Decode('Ch5HZXRFbGVjdGlvbkNpcmN1aXRJbmZvUmVzcG9uc2USFAoFaW5kZXgYASABKAVSBWluZGV4EhgKB2Jhc2VVcmkYAiABKAlSB2Jhc2VVcmkSIAoLY2lyY3VpdFBhdGgYAyABKAlSC2NpcmN1aXRQYXRoEhgKB21heFNpemUYBCABKAVSB21heFNpemUSIAoLd2l0bmVzc0hhc2gYBSABKAxSC3dpdG5lc3NIYXNoEhoKCHpLZXlIYXNoGAYgASgMUgh6S2V5SGFzaBIaCgh2S2V5SGFzaBgHIAEoDFIIdktleUhhc2g=');
@$core.Deprecated('Use getElectionResultsDescriptor instead')
const GetElectionResults$json = const {
  '1': 'GetElectionResults',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
  ],
};

/// Descriptor for `GetElectionResults`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionResultsDescriptor = $convert.base64Decode('ChJHZXRFbGVjdGlvblJlc3VsdHMSHgoKZWxlY3Rpb25JZBgBIAEoDFIKZWxlY3Rpb25JZA==');
@$core.Deprecated('Use getElectionResultsResponseDescriptor instead')
const GetElectionResultsResponse$json = const {
  '1': 'GetElectionResultsResponse',
  '2': const [
    const {'1': 'results', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.Results', '10': 'results'},
    const {'1': 'available', '3': 2, '4': 1, '5': 8, '10': 'available'},
  ],
};

/// Descriptor for `GetElectionResultsResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionResultsResponseDescriptor = $convert.base64Decode('ChpHZXRFbGVjdGlvblJlc3VsdHNSZXNwb25zZRIxCgdyZXN1bHRzGAEgASgLMhcuZHZvdGUudHlwZXMudjIuUmVzdWx0c1IHcmVzdWx0cxIcCglhdmFpbGFibGUYAiABKAhSCWF2YWlsYWJsZQ==');
@$core.Deprecated('Use getElectionWeightDescriptor instead')
const GetElectionWeight$json = const {
  '1': 'GetElectionWeight',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
  ],
};

/// Descriptor for `GetElectionWeight`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionWeightDescriptor = $convert.base64Decode('ChFHZXRFbGVjdGlvbldlaWdodBIeCgplbGVjdGlvbklkGAEgASgMUgplbGVjdGlvbklk');
@$core.Deprecated('Use getElectionWeightResponseDescriptor instead')
const GetElectionWeightResponse$json = const {
  '1': 'GetElectionWeightResponse',
  '2': const [
    const {'1': 'weight', '3': 1, '4': 1, '5': 9, '10': 'weight'},
  ],
};

/// Descriptor for `GetElectionWeightResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getElectionWeightResponseDescriptor = $convert.base64Decode('ChlHZXRFbGVjdGlvbldlaWdodFJlc3BvbnNlEhYKBndlaWdodBgBIAEoCVIGd2VpZ2h0');
@$core.Deprecated('Use newCensusDescriptor instead')
const NewCensus$json = const {
  '1': 'NewCensus',
  '2': const [
    const {'1': 'censusSalt', '3': 1, '4': 1, '5': 12, '10': 'censusSalt'},
    const {'1': 'managerPublicKeys', '3': 2, '4': 3, '5': 12, '10': 'managerPublicKeys'},
    const {'1': 'censusType', '3': 3, '4': 1, '5': 14, '6': '.dvote.types.v2.CensusType', '10': 'censusType'},
  ],
};

/// Descriptor for `NewCensus`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List newCensusDescriptor = $convert.base64Decode('CglOZXdDZW5zdXMSHgoKY2Vuc3VzU2FsdBgBIAEoDFIKY2Vuc3VzU2FsdBIsChFtYW5hZ2VyUHVibGljS2V5cxgCIAMoDFIRbWFuYWdlclB1YmxpY0tleXMSOgoKY2Vuc3VzVHlwZRgDIAEoDjIaLmR2b3RlLnR5cGVzLnYyLkNlbnN1c1R5cGVSCmNlbnN1c1R5cGU=');
@$core.Deprecated('Use newCensusResponseDescriptor instead')
const NewCensusResponse$json = const {
  '1': 'NewCensusResponse',
  '2': const [
    const {'1': 'censusId', '3': 1, '4': 1, '5': 9, '10': 'censusId'},
    const {'1': 'censusRoot', '3': 2, '4': 1, '5': 12, '10': 'censusRoot'},
  ],
};

/// Descriptor for `NewCensusResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List newCensusResponseDescriptor = $convert.base64Decode('ChFOZXdDZW5zdXNSZXNwb25zZRIaCghjZW5zdXNJZBgBIAEoCVIIY2Vuc3VzSWQSHgoKY2Vuc3VzUm9vdBgCIAEoDFIKY2Vuc3VzUm9vdA==');
@$core.Deprecated('Use addCensusKeysDescriptor instead')
const AddCensusKeys$json = const {
  '1': 'AddCensusKeys',
  '2': const [
    const {'1': 'censusId', '3': 1, '4': 1, '5': 9, '10': 'censusId'},
    const {'1': 'digested', '3': 2, '4': 1, '5': 8, '10': 'digested'},
    const {'1': 'entries', '3': 3, '4': 3, '5': 11, '6': '.dvote.types.v2.AddCensusKeys.CensusEntry', '10': 'entries'},
  ],
  '3': const [AddCensusKeys_CensusEntry$json],
};

@$core.Deprecated('Use addCensusKeysDescriptor instead')
const AddCensusKeys_CensusEntry$json = const {
  '1': 'CensusEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 12, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 12, '10': 'value'},
  ],
};

/// Descriptor for `AddCensusKeys`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List addCensusKeysDescriptor = $convert.base64Decode('Cg1BZGRDZW5zdXNLZXlzEhoKCGNlbnN1c0lkGAEgASgJUghjZW5zdXNJZBIaCghkaWdlc3RlZBgCIAEoCFIIZGlnZXN0ZWQSQwoHZW50cmllcxgDIAMoCzIpLmR2b3RlLnR5cGVzLnYyLkFkZENlbnN1c0tleXMuQ2Vuc3VzRW50cnlSB2VudHJpZXMaNQoLQ2Vuc3VzRW50cnkSEAoDa2V5GAEgASgMUgNrZXkSFAoFdmFsdWUYAiABKAxSBXZhbHVl');
@$core.Deprecated('Use addCensusKeysResponseDescriptor instead')
const AddCensusKeysResponse$json = const {
  '1': 'AddCensusKeysResponse',
  '2': const [
    const {'1': 'censusRoot', '3': 1, '4': 1, '5': 12, '10': 'censusRoot'},
    const {'1': 'keysAdded', '3': 2, '4': 1, '5': 5, '10': 'keysAdded'},
    const {'1': 'keysSkipped', '3': 3, '4': 1, '5': 5, '10': 'keysSkipped'},
  ],
};

/// Descriptor for `AddCensusKeysResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List addCensusKeysResponseDescriptor = $convert.base64Decode('ChVBZGRDZW5zdXNLZXlzUmVzcG9uc2USHgoKY2Vuc3VzUm9vdBgBIAEoDFIKY2Vuc3VzUm9vdBIcCglrZXlzQWRkZWQYAiABKAVSCWtleXNBZGRlZBIgCgtrZXlzU2tpcHBlZBgDIAEoBVILa2V5c1NraXBwZWQ=');
@$core.Deprecated('Use getCensusRootDescriptor instead')
const GetCensusRoot$json = const {
  '1': 'GetCensusRoot',
  '2': const [
    const {'1': 'censusId', '3': 1, '4': 1, '5': 9, '10': 'censusId'},
  ],
};

/// Descriptor for `GetCensusRoot`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getCensusRootDescriptor = $convert.base64Decode('Cg1HZXRDZW5zdXNSb290EhoKCGNlbnN1c0lkGAEgASgJUghjZW5zdXNJZA==');
@$core.Deprecated('Use getCensusRootResponseDescriptor instead')
const GetCensusRootResponse$json = const {
  '1': 'GetCensusRootResponse',
  '2': const [
    const {'1': 'censusRoot', '3': 1, '4': 1, '5': 12, '10': 'censusRoot'},
  ],
};

/// Descriptor for `GetCensusRootResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getCensusRootResponseDescriptor = $convert.base64Decode('ChVHZXRDZW5zdXNSb290UmVzcG9uc2USHgoKY2Vuc3VzUm9vdBgBIAEoDFIKY2Vuc3VzUm9vdA==');
@$core.Deprecated('Use getCensusSizeDescriptor instead')
const GetCensusSize$json = const {
  '1': 'GetCensusSize',
  '2': const [
    const {'1': 'censusId', '3': 1, '4': 1, '5': 9, '10': 'censusId'},
  ],
};

/// Descriptor for `GetCensusSize`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getCensusSizeDescriptor = $convert.base64Decode('Cg1HZXRDZW5zdXNTaXplEhoKCGNlbnN1c0lkGAEgASgJUghjZW5zdXNJZA==');
@$core.Deprecated('Use getCensusSizeResponseDescriptor instead')
const GetCensusSizeResponse$json = const {
  '1': 'GetCensusSizeResponse',
  '2': const [
    const {'1': 'size', '3': 1, '4': 1, '5': 5, '10': 'size'},
  ],
};

/// Descriptor for `GetCensusSizeResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getCensusSizeResponseDescriptor = $convert.base64Decode('ChVHZXRDZW5zdXNTaXplUmVzcG9uc2USEgoEc2l6ZRgBIAEoBVIEc2l6ZQ==');
@$core.Deprecated('Use publishCensusDescriptor instead')
const PublishCensus$json = const {
  '1': 'PublishCensus',
  '2': const [
    const {'1': 'censusId', '3': 1, '4': 1, '5': 9, '10': 'censusId'},
  ],
};

/// Descriptor for `PublishCensus`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List publishCensusDescriptor = $convert.base64Decode('Cg1QdWJsaXNoQ2Vuc3VzEhoKCGNlbnN1c0lkGAEgASgJUghjZW5zdXNJZA==');
@$core.Deprecated('Use publishCensusResponseDescriptor instead')
const PublishCensusResponse$json = const {
  '1': 'PublishCensusResponse',
  '2': const [
    const {'1': 'ipfsUri', '3': 1, '4': 1, '5': 9, '10': 'ipfsUri'},
  ],
};

/// Descriptor for `PublishCensusResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List publishCensusResponseDescriptor = $convert.base64Decode('ChVQdWJsaXNoQ2Vuc3VzUmVzcG9uc2USGAoHaXBmc1VyaRgBIAEoCVIHaXBmc1VyaQ==');
@$core.Deprecated('Use getCensusProofDescriptor instead')
const GetCensusProof$json = const {
  '1': 'GetCensusProof',
  '2': const [
    const {'1': 'census', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.Census', '10': 'census'},
    const {'1': 'key', '3': 2, '4': 1, '5': 12, '10': 'key'},
  ],
};

/// Descriptor for `GetCensusProof`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getCensusProofDescriptor = $convert.base64Decode('Cg5HZXRDZW5zdXNQcm9vZhIuCgZjZW5zdXMYASABKAsyFi5kdm90ZS50eXBlcy52Mi5DZW5zdXNSBmNlbnN1cxIQCgNrZXkYAiABKAxSA2tleQ==');
@$core.Deprecated('Use getCensusProofResponseDescriptor instead')
const GetCensusProofResponse$json = const {
  '1': 'GetCensusProofResponse',
  '2': const [
    const {'1': 'proof', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.Proof', '10': 'proof'},
  ],
};

/// Descriptor for `GetCensusProofResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getCensusProofResponseDescriptor = $convert.base64Decode('ChZHZXRDZW5zdXNQcm9vZlJlc3BvbnNlEisKBXByb29mGAEgASgLMhUuZHZvdGUudHlwZXMudjIuUHJvb2ZSBXByb29m');
@$core.Deprecated('Use dumpCensusDescriptor instead')
const DumpCensus$json = const {
  '1': 'DumpCensus',
  '2': const [
    const {'1': 'censusId', '3': 1, '4': 1, '5': 9, '10': 'censusId'},
  ],
};

/// Descriptor for `DumpCensus`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List dumpCensusDescriptor = $convert.base64Decode('CgpEdW1wQ2Vuc3VzEhoKCGNlbnN1c0lkGAEgASgJUghjZW5zdXNJZA==');
@$core.Deprecated('Use dumpCensusResponseDescriptor instead')
const DumpCensusResponse$json = const {
  '1': 'DumpCensusResponse',
  '2': const [
    const {'1': 'body', '3': 1, '4': 1, '5': 12, '10': 'body'},
  ],
};

/// Descriptor for `DumpCensusResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List dumpCensusResponseDescriptor = $convert.base64Decode('ChJEdW1wQ2Vuc3VzUmVzcG9uc2USEgoEYm9keRgBIAEoDFIEYm9keQ==');
@$core.Deprecated('Use pinFileDescriptor instead')
const PinFile$json = const {
  '1': 'PinFile',
  '2': const [
    const {'1': 'body', '3': 1, '4': 1, '5': 12, '10': 'body'},
    const {'1': 'retentionDays', '3': 2, '4': 1, '5': 5, '10': 'retentionDays'},
  ],
};

/// Descriptor for `PinFile`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List pinFileDescriptor = $convert.base64Decode('CgdQaW5GaWxlEhIKBGJvZHkYASABKAxSBGJvZHkSJAoNcmV0ZW50aW9uRGF5cxgCIAEoBVINcmV0ZW50aW9uRGF5cw==');
@$core.Deprecated('Use pinFileResponseDescriptor instead')
const PinFileResponse$json = const {
  '1': 'PinFileResponse',
  '2': const [
    const {'1': 'ipfsUri', '3': 1, '4': 1, '5': 9, '10': 'ipfsUri'},
  ],
};

/// Descriptor for `PinFileResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List pinFileResponseDescriptor = $convert.base64Decode('Cg9QaW5GaWxlUmVzcG9uc2USGAoHaXBmc1VyaRgBIAEoCVIHaXBmc1VyaQ==');
@$core.Deprecated('Use fetchFileDescriptor instead')
const FetchFile$json = const {
  '1': 'FetchFile',
  '2': const [
    const {'1': 'ipfsUri', '3': 1, '4': 1, '5': 9, '10': 'ipfsUri'},
  ],
};

/// Descriptor for `FetchFile`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List fetchFileDescriptor = $convert.base64Decode('CglGZXRjaEZpbGUSGAoHaXBmc1VyaRgBIAEoCVIHaXBmc1VyaQ==');
@$core.Deprecated('Use fetchFileResponseDescriptor instead')
const FetchFileResponse$json = const {
  '1': 'FetchFileResponse',
  '2': const [
    const {'1': 'body', '3': 1, '4': 1, '5': 12, '10': 'body'},
  ],
};

/// Descriptor for `FetchFileResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List fetchFileResponseDescriptor = $convert.base64Decode('ChFGZXRjaEZpbGVSZXNwb25zZRISCgRib2R5GAEgASgMUgRib2R5');
@$core.Deprecated('Use getBlockStatusDescriptor instead')
const GetBlockStatus$json = const {
  '1': 'GetBlockStatus',
};

/// Descriptor for `GetBlockStatus`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getBlockStatusDescriptor = $convert.base64Decode('Cg5HZXRCbG9ja1N0YXR1cw==');
@$core.Deprecated('Use getBlockStatusResponseDescriptor instead')
const GetBlockStatusResponse$json = const {
  '1': 'GetBlockStatusResponse',
  '2': const [
    const {'1': 'number', '3': 1, '4': 1, '5': 5, '10': 'number'},
    const {'1': 'blockTimestamp', '3': 2, '4': 1, '5': 5, '10': 'blockTimestamp'},
    const {'1': 'blockTimes', '3': 3, '4': 3, '5': 5, '10': 'blockTimes'},
  ],
};

/// Descriptor for `GetBlockStatusResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getBlockStatusResponseDescriptor = $convert.base64Decode('ChZHZXRCbG9ja1N0YXR1c1Jlc3BvbnNlEhYKBm51bWJlchgBIAEoBVIGbnVtYmVyEiYKDmJsb2NrVGltZXN0YW1wGAIgASgFUg5ibG9ja1RpbWVzdGFtcBIeCgpibG9ja1RpbWVzGAMgAygFUgpibG9ja1RpbWVz');
@$core.Deprecated('Use getBlockCountDescriptor instead')
const GetBlockCount$json = const {
  '1': 'GetBlockCount',
};

/// Descriptor for `GetBlockCount`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getBlockCountDescriptor = $convert.base64Decode('Cg1HZXRCbG9ja0NvdW50');
@$core.Deprecated('Use getBlockCountResponseDescriptor instead')
const GetBlockCountResponse$json = const {
  '1': 'GetBlockCountResponse',
  '2': const [
    const {'1': 'number', '3': 1, '4': 1, '5': 5, '10': 'number'},
  ],
};

/// Descriptor for `GetBlockCountResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getBlockCountResponseDescriptor = $convert.base64Decode('ChVHZXRCbG9ja0NvdW50UmVzcG9uc2USFgoGbnVtYmVyGAEgASgFUgZudW1iZXI=');
@$core.Deprecated('Use estimateElectionPriceDescriptor instead')
const EstimateElectionPrice$json = const {
  '1': 'EstimateElectionPrice',
};

/// Descriptor for `EstimateElectionPrice`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List estimateElectionPriceDescriptor = $convert.base64Decode('ChVFc3RpbWF0ZUVsZWN0aW9uUHJpY2U=');
@$core.Deprecated('Use estimateElectionPriceResponseDescriptor instead')
const EstimateElectionPriceResponse$json = const {
  '1': 'EstimateElectionPriceResponse',
};

/// Descriptor for `EstimateElectionPriceResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List estimateElectionPriceResponseDescriptor = $convert.base64Decode('Ch1Fc3RpbWF0ZUVsZWN0aW9uUHJpY2VSZXNwb25zZQ==');
@$core.Deprecated('Use getTransactionDescriptor instead')
const GetTransaction$json = const {
  '1': 'GetTransaction',
  '2': const [
    const {'1': 'txHash', '3': 1, '4': 1, '5': 12, '10': 'txHash'},
  ],
};

/// Descriptor for `GetTransaction`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getTransactionDescriptor = $convert.base64Decode('Cg5HZXRUcmFuc2FjdGlvbhIWCgZ0eEhhc2gYASABKAxSBnR4SGFzaA==');
@$core.Deprecated('Use getTransactionResponseDescriptor instead')
const GetTransactionResponse$json = const {
  '1': 'GetTransactionResponse',
  '2': const [
    const {'1': 'body', '3': 1, '4': 1, '5': 12, '10': 'body'},
  ],
};

/// Descriptor for `GetTransactionResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List getTransactionResponseDescriptor = $convert.base64Decode('ChZHZXRUcmFuc2FjdGlvblJlc3BvbnNlEhIKBGJvZHkYASABKAxSBGJvZHk=');
@$core.Deprecated('Use waitTransactionDescriptor instead')
const WaitTransaction$json = const {
  '1': 'WaitTransaction',
  '2': const [
    const {'1': 'txHash', '3': 1, '4': 1, '5': 12, '10': 'txHash'},
  ],
};

/// Descriptor for `WaitTransaction`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List waitTransactionDescriptor = $convert.base64Decode('Cg9XYWl0VHJhbnNhY3Rpb24SFgoGdHhIYXNoGAEgASgMUgZ0eEhhc2g=');
@$core.Deprecated('Use waitTransactionResponseDescriptor instead')
const WaitTransactionResponse$json = const {
  '1': 'WaitTransactionResponse',
  '2': const [
    const {'1': 'mined', '3': 1, '4': 1, '5': 8, '10': 'mined'},
  ],
};

/// Descriptor for `WaitTransactionResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List waitTransactionResponseDescriptor = $convert.base64Decode('ChdXYWl0VHJhbnNhY3Rpb25SZXNwb25zZRIUCgVtaW5lZBgBIAEoCFIFbWluZWQ=');
