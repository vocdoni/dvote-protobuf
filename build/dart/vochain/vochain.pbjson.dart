///
//  Generated code. Do not modify.
//  source: vochain/vochain.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use txTypeDescriptor instead')
const TxType$json = const {
  '1': 'TxType',
  '2': const [
    const {'1': 'TX_UNKNOWN', '2': 0},
    const {'1': 'NEW_PROCESS', '2': 1},
    const {'1': 'SET_PROCESS_STATUS', '2': 2},
    const {'1': 'SET_PROCESS_CENSUS', '2': 3},
    const {'1': 'SET_PROCESS_QUESTION_INDEX', '2': 4},
    const {'1': 'ADD_PROCESS_KEYS', '2': 5},
    const {'1': 'REVEAL_PROCESS_KEYS', '2': 6},
    const {'1': 'ADD_ORACLE', '2': 7},
    const {'1': 'REMOVE_ORACLE', '2': 8},
    const {'1': 'ADD_VALIDATOR', '2': 9},
    const {'1': 'REMOVE_VALIDATOR', '2': 10},
    const {'1': 'VOTE', '2': 11},
    const {'1': 'SET_PROCESS_RESULTS', '2': 12},
    const {'1': 'REGISTER_VOTER_KEY', '2': 13},
    const {'1': 'MINT_TOKENS', '2': 14},
    const {'1': 'SEND_TOKENS', '2': 15},
    const {'1': 'SET_TRANSACTION_COSTS', '2': 16},
    const {'1': 'SET_ACCOUNT_INFO', '2': 17},
    const {'1': 'ADD_DELEGATE_FOR_ACCOUNT', '2': 18},
    const {'1': 'DEL_DELEGATE_FOR_ACCOUNT', '2': 19},
    const {'1': 'COLLECT_FAUCET', '2': 20},
  ],
};

/// Descriptor for `TxType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List txTypeDescriptor = $convert.base64Decode('CgZUeFR5cGUSDgoKVFhfVU5LTk9XThAAEg8KC05FV19QUk9DRVNTEAESFgoSU0VUX1BST0NFU1NfU1RBVFVTEAISFgoSU0VUX1BST0NFU1NfQ0VOU1VTEAMSHgoaU0VUX1BST0NFU1NfUVVFU1RJT05fSU5ERVgQBBIUChBBRERfUFJPQ0VTU19LRVlTEAUSFwoTUkVWRUFMX1BST0NFU1NfS0VZUxAGEg4KCkFERF9PUkFDTEUQBxIRCg1SRU1PVkVfT1JBQ0xFEAgSEQoNQUREX1ZBTElEQVRPUhAJEhQKEFJFTU9WRV9WQUxJREFUT1IQChIICgRWT1RFEAsSFwoTU0VUX1BST0NFU1NfUkVTVUxUUxAMEhYKElJFR0lTVEVSX1ZPVEVSX0tFWRANEg8KC01JTlRfVE9LRU5TEA4SDwoLU0VORF9UT0tFTlMQDxIZChVTRVRfVFJBTlNBQ1RJT05fQ09TVFMQEBIUChBTRVRfQUNDT1VOVF9JTkZPEBESHAoYQUREX0RFTEVHQVRFX0ZPUl9BQ0NPVU5UEBISHAoYREVMX0RFTEVHQVRFX0ZPUl9BQ0NPVU5UEBMSEgoOQ09MTEVDVF9GQVVDRVQQFA==');
@$core.Deprecated('Use processStatusDescriptor instead')
const ProcessStatus$json = const {
  '1': 'ProcessStatus',
  '2': const [
    const {'1': 'PROCESS_UNKNOWN', '2': 0},
    const {'1': 'READY', '2': 1},
    const {'1': 'ENDED', '2': 2},
    const {'1': 'CANCELED', '2': 3},
    const {'1': 'PAUSED', '2': 4},
    const {'1': 'RESULTS', '2': 5},
  ],
};

/// Descriptor for `ProcessStatus`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List processStatusDescriptor = $convert.base64Decode('Cg1Qcm9jZXNzU3RhdHVzEhMKD1BST0NFU1NfVU5LTk9XThAAEgkKBVJFQURZEAESCQoFRU5ERUQQAhIMCghDQU5DRUxFRBADEgoKBlBBVVNFRBAEEgsKB1JFU1VMVFMQBQ==');
@$core.Deprecated('Use sourceNetworkIdDescriptor instead')
const SourceNetworkId$json = const {
  '1': 'SourceNetworkId',
  '2': const [
    const {'1': 'UNKNOWN', '2': 0},
    const {'1': 'ETH_MAINNET', '2': 1},
    const {'1': 'ETH_RINKEBY', '2': 2},
    const {'1': 'ETH_GOERLI', '2': 3},
    const {'1': 'POA_XDAI', '2': 4},
    const {'1': 'POA_SOKOL', '2': 5},
    const {'1': 'POLYGON', '2': 6},
    const {'1': 'BSC', '2': 7},
    const {'1': 'ETH_MAINNET_SIGNALING', '2': 8},
    const {'1': 'ETH_RINKEBY_SIGNALING', '2': 9},
    const {'1': 'AVAX_FUJI', '2': 10},
    const {'1': 'AVAX', '2': 11},
  ],
};

/// Descriptor for `SourceNetworkId`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List sourceNetworkIdDescriptor = $convert.base64Decode('Cg9Tb3VyY2VOZXR3b3JrSWQSCwoHVU5LTk9XThAAEg8KC0VUSF9NQUlOTkVUEAESDwoLRVRIX1JJTktFQlkQAhIOCgpFVEhfR09FUkxJEAMSDAoIUE9BX1hEQUkQBBINCglQT0FfU09LT0wQBRILCgdQT0xZR09OEAYSBwoDQlNDEAcSGQoVRVRIX01BSU5ORVRfU0lHTkFMSU5HEAgSGQoVRVRIX1JJTktFQllfU0lHTkFMSU5HEAkSDQoJQVZBWF9GVUpJEAoSCAoEQVZBWBAL');
@$core.Deprecated('Use censusOriginDescriptor instead')
const CensusOrigin$json = const {
  '1': 'CensusOrigin',
  '2': const [
    const {'1': 'CENSUS_UNKNOWN', '2': 0},
    const {'1': 'OFF_CHAIN_TREE', '2': 1},
    const {'1': 'OFF_CHAIN_TREE_WEIGHTED', '2': 2},
    const {'1': 'OFF_CHAIN_CA', '2': 3},
    const {'1': 'ERC20', '2': 11},
    const {'1': 'ERC721', '2': 12},
    const {'1': 'ERC1155', '2': 13},
    const {'1': 'ERC777', '2': 14},
    const {'1': 'MINI_ME', '2': 15},
  ],
};

/// Descriptor for `CensusOrigin`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List censusOriginDescriptor = $convert.base64Decode('CgxDZW5zdXNPcmlnaW4SEgoOQ0VOU1VTX1VOS05PV04QABISCg5PRkZfQ0hBSU5fVFJFRRABEhsKF09GRl9DSEFJTl9UUkVFX1dFSUdIVEVEEAISEAoMT0ZGX0NIQUlOX0NBEAMSCQoFRVJDMjAQCxIKCgZFUkM3MjEQDBILCgdFUkMxMTU1EA0SCgoGRVJDNzc3EA4SCwoHTUlOSV9NRRAP');
@$core.Deprecated('Use voteEnvelopeDescriptor instead')
const VoteEnvelope$json = const {
  '1': 'VoteEnvelope',
  '2': const [
    const {'1': 'nonce', '3': 1, '4': 1, '5': 12, '10': 'nonce'},
    const {'1': 'processId', '3': 2, '4': 1, '5': 12, '10': 'processId'},
    const {'1': 'proof', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v1.Proof', '10': 'proof'},
    const {'1': 'votePackage', '3': 4, '4': 1, '5': 12, '10': 'votePackage'},
    const {'1': 'nullifier', '3': 5, '4': 1, '5': 12, '10': 'nullifier'},
    const {'1': 'encryptionKeyIndexes', '3': 6, '4': 3, '5': 13, '10': 'encryptionKeyIndexes'},
  ],
};

/// Descriptor for `VoteEnvelope`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List voteEnvelopeDescriptor = $convert.base64Decode('CgxWb3RlRW52ZWxvcGUSFAoFbm9uY2UYASABKAxSBW5vbmNlEhwKCXByb2Nlc3NJZBgCIAEoDFIJcHJvY2Vzc0lkEisKBXByb29mGAMgASgLMhUuZHZvdGUudHlwZXMudjEuUHJvb2ZSBXByb29mEiAKC3ZvdGVQYWNrYWdlGAQgASgMUgt2b3RlUGFja2FnZRIcCgludWxsaWZpZXIYBSABKAxSCW51bGxpZmllchIyChRlbmNyeXB0aW9uS2V5SW5kZXhlcxgGIAMoDVIUZW5jcnlwdGlvbktleUluZGV4ZXM=');
@$core.Deprecated('Use censusDescriptor instead')
const Census$json = const {
  '1': 'Census',
  '4': const [Census_Type$json],
};

@$core.Deprecated('Use censusDescriptor instead')
const Census_Type$json = const {
  '1': 'Type',
  '2': const [
    const {'1': 'UNKNOWN', '2': 0},
    const {'1': 'ARBO_BLAKE2B', '2': 1},
    const {'1': 'ARBO_POSEIDON', '2': 2},
    const {'1': 'ETHEREUMSTORAGE', '2': 3},
    const {'1': 'ETHEREUMACCOUNT', '2': 4},
    const {'1': 'CA', '2': 5},
    const {'1': 'GRAVITON', '2': 1001},
    const {'1': 'IDEN3', '2': 1002},
  ],
};

/// Descriptor for `Census`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List censusDescriptor = $convert.base64Decode('CgZDZW5zdXMihQEKBFR5cGUSCwoHVU5LTk9XThAAEhAKDEFSQk9fQkxBS0UyQhABEhEKDUFSQk9fUE9TRUlET04QAhITCg9FVEhFUkVVTVNUT1JBR0UQAxITCg9FVEhFUkVVTUFDQ09VTlQQBBIGCgJDQRAFEg0KCEdSQVZJVE9OEOkHEgoKBUlERU4zEOoH');
@$core.Deprecated('Use proofDescriptor instead')
const Proof$json = const {
  '1': 'Proof',
  '2': const [
    const {'1': 'graviton', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofGraviton', '9': 0, '10': 'graviton'},
    const {'1': 'iden3', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofIden3', '9': 0, '10': 'iden3'},
    const {'1': 'ethereumStorage', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofEthereumStorage', '9': 0, '10': 'ethereumStorage'},
    const {'1': 'ethereumAccount', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofEthereumAccount', '9': 0, '10': 'ethereumAccount'},
    const {'1': 'ca', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofCA', '9': 0, '10': 'ca'},
    const {'1': 'arbo', '3': 6, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofArbo', '9': 0, '10': 'arbo'},
    const {'1': 'zkSnark', '3': 7, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofZkSNARK', '9': 0, '10': 'zkSnark'},
    const {'1': 'minimeStorage', '3': 8, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofMinime', '9': 0, '10': 'minimeStorage'},
  ],
  '8': const [
    const {'1': 'payload'},
  ],
};

/// Descriptor for `Proof`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofDescriptor = $convert.base64Decode('CgVQcm9vZhI7CghncmF2aXRvbhgBIAEoCzIdLmR2b3RlLnR5cGVzLnYxLlByb29mR3Jhdml0b25IAFIIZ3Jhdml0b24SMgoFaWRlbjMYAiABKAsyGi5kdm90ZS50eXBlcy52MS5Qcm9vZklkZW4zSABSBWlkZW4zElAKD2V0aGVyZXVtU3RvcmFnZRgDIAEoCzIkLmR2b3RlLnR5cGVzLnYxLlByb29mRXRoZXJldW1TdG9yYWdlSABSD2V0aGVyZXVtU3RvcmFnZRJQCg9ldGhlcmV1bUFjY291bnQYBCABKAsyJC5kdm90ZS50eXBlcy52MS5Qcm9vZkV0aGVyZXVtQWNjb3VudEgAUg9ldGhlcmV1bUFjY291bnQSKQoCY2EYBSABKAsyFy5kdm90ZS50eXBlcy52MS5Qcm9vZkNBSABSAmNhEi8KBGFyYm8YBiABKAsyGS5kdm90ZS50eXBlcy52MS5Qcm9vZkFyYm9IAFIEYXJibxI4Cgd6a1NuYXJrGAcgASgLMhwuZHZvdGUudHlwZXMudjEuUHJvb2Zaa1NOQVJLSABSB3prU25hcmsSQwoNbWluaW1lU3RvcmFnZRgIIAEoCzIbLmR2b3RlLnR5cGVzLnYxLlByb29mTWluaW1lSABSDW1pbmltZVN0b3JhZ2VCCQoHcGF5bG9hZA==');
@$core.Deprecated('Use proofGravitonDescriptor instead')
const ProofGraviton$json = const {
  '1': 'ProofGraviton',
  '2': const [
    const {'1': 'siblings', '3': 1, '4': 1, '5': 12, '10': 'siblings'},
  ],
};

/// Descriptor for `ProofGraviton`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofGravitonDescriptor = $convert.base64Decode('Cg1Qcm9vZkdyYXZpdG9uEhoKCHNpYmxpbmdzGAEgASgMUghzaWJsaW5ncw==');
@$core.Deprecated('Use proofIden3Descriptor instead')
const ProofIden3$json = const {
  '1': 'ProofIden3',
  '2': const [
    const {'1': 'siblings', '3': 1, '4': 1, '5': 12, '10': 'siblings'},
  ],
};

/// Descriptor for `ProofIden3`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofIden3Descriptor = $convert.base64Decode('CgpQcm9vZklkZW4zEhoKCHNpYmxpbmdzGAEgASgMUghzaWJsaW5ncw==');
@$core.Deprecated('Use proofEthereumStorageDescriptor instead')
const ProofEthereumStorage$json = const {
  '1': 'ProofEthereumStorage',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 12, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 12, '10': 'value'},
    const {'1': 'siblings', '3': 3, '4': 3, '5': 12, '10': 'siblings'},
  ],
};

/// Descriptor for `ProofEthereumStorage`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofEthereumStorageDescriptor = $convert.base64Decode('ChRQcm9vZkV0aGVyZXVtU3RvcmFnZRIQCgNrZXkYASABKAxSA2tleRIUCgV2YWx1ZRgCIAEoDFIFdmFsdWUSGgoIc2libGluZ3MYAyADKAxSCHNpYmxpbmdz');
@$core.Deprecated('Use proofEthereumAccountDescriptor instead')
const ProofEthereumAccount$json = const {
  '1': 'ProofEthereumAccount',
  '2': const [
    const {'1': 'nonce', '3': 1, '4': 1, '5': 12, '10': 'nonce'},
    const {'1': 'balance', '3': 2, '4': 1, '5': 12, '10': 'balance'},
    const {'1': 'storageHash', '3': 3, '4': 1, '5': 12, '10': 'storageHash'},
    const {'1': 'codeHash', '3': 4, '4': 1, '5': 12, '10': 'codeHash'},
    const {'1': 'siblings', '3': 5, '4': 3, '5': 12, '10': 'siblings'},
  ],
};

/// Descriptor for `ProofEthereumAccount`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofEthereumAccountDescriptor = $convert.base64Decode('ChRQcm9vZkV0aGVyZXVtQWNjb3VudBIUCgVub25jZRgBIAEoDFIFbm9uY2USGAoHYmFsYW5jZRgCIAEoDFIHYmFsYW5jZRIgCgtzdG9yYWdlSGFzaBgDIAEoDFILc3RvcmFnZUhhc2gSGgoIY29kZUhhc2gYBCABKAxSCGNvZGVIYXNoEhoKCHNpYmxpbmdzGAUgAygMUghzaWJsaW5ncw==');
@$core.Deprecated('Use proofMinimeDescriptor instead')
const ProofMinime$json = const {
  '1': 'ProofMinime',
  '2': const [
    const {'1': 'proofPrevBlock', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofEthereumStorage', '10': 'proofPrevBlock'},
    const {'1': 'proofNextBlock', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofEthereumStorage', '10': 'proofNextBlock'},
  ],
};

/// Descriptor for `ProofMinime`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofMinimeDescriptor = $convert.base64Decode('CgtQcm9vZk1pbmltZRJMCg5wcm9vZlByZXZCbG9jaxgBIAEoCzIkLmR2b3RlLnR5cGVzLnYxLlByb29mRXRoZXJldW1TdG9yYWdlUg5wcm9vZlByZXZCbG9jaxJMCg5wcm9vZk5leHRCbG9jaxgCIAEoCzIkLmR2b3RlLnR5cGVzLnYxLlByb29mRXRoZXJldW1TdG9yYWdlUg5wcm9vZk5leHRCbG9jaw==');
@$core.Deprecated('Use proofCADescriptor instead')
const ProofCA$json = const {
  '1': 'ProofCA',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.ProofCA.Type', '10': 'type'},
    const {'1': 'bundle', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.CAbundle', '10': 'bundle'},
    const {'1': 'signature', '3': 3, '4': 1, '5': 12, '10': 'signature'},
  ],
  '4': const [ProofCA_Type$json],
};

@$core.Deprecated('Use proofCADescriptor instead')
const ProofCA_Type$json = const {
  '1': 'Type',
  '2': const [
    const {'1': 'UNKNOWN', '2': 0},
    const {'1': 'ECDSA', '2': 1},
    const {'1': 'ECDSA_PIDSALTED', '2': 2},
    const {'1': 'ECDSA_BLIND', '2': 3},
    const {'1': 'ECDSA_BLIND_PIDSALTED', '2': 4},
  ],
};

/// Descriptor for `ProofCA`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofCADescriptor = $convert.base64Decode('CgdQcm9vZkNBEjAKBHR5cGUYASABKA4yHC5kdm90ZS50eXBlcy52MS5Qcm9vZkNBLlR5cGVSBHR5cGUSMAoGYnVuZGxlGAIgASgLMhguZHZvdGUudHlwZXMudjEuQ0FidW5kbGVSBmJ1bmRsZRIcCglzaWduYXR1cmUYAyABKAxSCXNpZ25hdHVyZSJfCgRUeXBlEgsKB1VOS05PV04QABIJCgVFQ0RTQRABEhMKD0VDRFNBX1BJRFNBTFRFRBACEg8KC0VDRFNBX0JMSU5EEAMSGQoVRUNEU0FfQkxJTkRfUElEU0FMVEVEEAQ=');
@$core.Deprecated('Use cAbundleDescriptor instead')
const CAbundle$json = const {
  '1': 'CAbundle',
  '2': const [
    const {'1': 'processId', '3': 1, '4': 1, '5': 12, '10': 'processId'},
    const {'1': 'address', '3': 2, '4': 1, '5': 12, '10': 'address'},
  ],
};

/// Descriptor for `CAbundle`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List cAbundleDescriptor = $convert.base64Decode('CghDQWJ1bmRsZRIcCglwcm9jZXNzSWQYASABKAxSCXByb2Nlc3NJZBIYCgdhZGRyZXNzGAIgASgMUgdhZGRyZXNz');
@$core.Deprecated('Use proofArboDescriptor instead')
const ProofArbo$json = const {
  '1': 'ProofArbo',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.ProofArbo.Type', '10': 'type'},
    const {'1': 'siblings', '3': 2, '4': 1, '5': 12, '10': 'siblings'},
    const {'1': 'value', '3': 3, '4': 1, '5': 12, '10': 'value'},
  ],
  '4': const [ProofArbo_Type$json],
};

@$core.Deprecated('Use proofArboDescriptor instead')
const ProofArbo_Type$json = const {
  '1': 'Type',
  '2': const [
    const {'1': 'BLAKE2B', '2': 0},
    const {'1': 'POSEIDON', '2': 1},
  ],
};

/// Descriptor for `ProofArbo`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofArboDescriptor = $convert.base64Decode('CglQcm9vZkFyYm8SMgoEdHlwZRgBIAEoDjIeLmR2b3RlLnR5cGVzLnYxLlByb29mQXJiby5UeXBlUgR0eXBlEhoKCHNpYmxpbmdzGAIgASgMUghzaWJsaW5ncxIUCgV2YWx1ZRgDIAEoDFIFdmFsdWUiIQoEVHlwZRILCgdCTEFLRTJCEAASDAoIUE9TRUlET04QAQ==');
@$core.Deprecated('Use proofZkSNARKDescriptor instead')
const ProofZkSNARK$json = const {
  '1': 'ProofZkSNARK',
  '2': const [
    const {'1': 'circuitParametersIndex', '3': 1, '4': 1, '5': 5, '10': 'circuitParametersIndex'},
    const {'1': 'a', '3': 2, '4': 3, '5': 9, '10': 'a'},
    const {'1': 'b', '3': 3, '4': 3, '5': 9, '10': 'b'},
    const {'1': 'c', '3': 4, '4': 3, '5': 9, '10': 'c'},
    const {'1': 'publicInputs', '3': 5, '4': 3, '5': 9, '10': 'publicInputs'},
  ],
};

/// Descriptor for `ProofZkSNARK`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofZkSNARKDescriptor = $convert.base64Decode('CgxQcm9vZlprU05BUksSNgoWY2lyY3VpdFBhcmFtZXRlcnNJbmRleBgBIAEoBVIWY2lyY3VpdFBhcmFtZXRlcnNJbmRleBIMCgFhGAIgAygJUgFhEgwKAWIYAyADKAlSAWISDAoBYxgEIAMoCVIBYxIiCgxwdWJsaWNJbnB1dHMYBSADKAlSDHB1YmxpY0lucHV0cw==');
@$core.Deprecated('Use accountDescriptor instead')
const Account$json = const {
  '1': 'Account',
  '2': const [
    const {'1': 'balance', '3': 1, '4': 1, '5': 4, '10': 'balance'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 13, '10': 'nonce'},
    const {'1': 'infoURI', '3': 3, '4': 1, '5': 9, '10': 'infoURI'},
    const {'1': 'delegateAddrs', '3': 4, '4': 3, '5': 12, '10': 'delegateAddrs'},
  ],
};

/// Descriptor for `Account`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List accountDescriptor = $convert.base64Decode('CgdBY2NvdW50EhgKB2JhbGFuY2UYASABKARSB2JhbGFuY2USFAoFbm9uY2UYAiABKA1SBW5vbmNlEhgKB2luZm9VUkkYAyABKAlSB2luZm9VUkkSJAoNZGVsZWdhdGVBZGRycxgEIAMoDFINZGVsZWdhdGVBZGRycw==');
@$core.Deprecated('Use txDescriptor instead')
const Tx$json = const {
  '1': 'Tx',
  '2': const [
    const {'1': 'vote', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v1.VoteEnvelope', '9': 0, '10': 'vote'},
    const {'1': 'newProcess', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.NewProcessTx', '9': 0, '10': 'newProcess'},
    const {'1': 'admin', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v1.AdminTx', '9': 0, '10': 'admin'},
    const {'1': 'setProcess', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v1.SetProcessTx', '9': 0, '10': 'setProcess'},
    const {'1': 'registerKey', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v1.RegisterKeyTx', '9': 0, '10': 'registerKey'},
    const {'1': 'mintTokens', '3': 6, '4': 1, '5': 11, '6': '.dvote.types.v1.MintTokensTx', '9': 0, '10': 'mintTokens'},
    const {'1': 'sendTokens', '3': 7, '4': 1, '5': 11, '6': '.dvote.types.v1.SendTokensTx', '9': 0, '10': 'sendTokens'},
    const {'1': 'setTransactionCosts', '3': 8, '4': 1, '5': 11, '6': '.dvote.types.v1.SetTransactionCostsTx', '9': 0, '10': 'setTransactionCosts'},
    const {'1': 'setAccountInfo', '3': 9, '4': 1, '5': 11, '6': '.dvote.types.v1.SetAccountInfoTx', '9': 0, '10': 'setAccountInfo'},
    const {'1': 'setAccountDelegateTx', '3': 10, '4': 1, '5': 11, '6': '.dvote.types.v1.SetAccountDelegateTx', '9': 0, '10': 'setAccountDelegateTx'},
    const {'1': 'collectFaucet', '3': 11, '4': 1, '5': 11, '6': '.dvote.types.v1.CollectFaucetTx', '9': 0, '10': 'collectFaucet'},
  ],
  '8': const [
    const {'1': 'payload'},
  ],
};

/// Descriptor for `Tx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List txDescriptor = $convert.base64Decode('CgJUeBIyCgR2b3RlGAEgASgLMhwuZHZvdGUudHlwZXMudjEuVm90ZUVudmVsb3BlSABSBHZvdGUSPgoKbmV3UHJvY2VzcxgCIAEoCzIcLmR2b3RlLnR5cGVzLnYxLk5ld1Byb2Nlc3NUeEgAUgpuZXdQcm9jZXNzEi8KBWFkbWluGAMgASgLMhcuZHZvdGUudHlwZXMudjEuQWRtaW5UeEgAUgVhZG1pbhI+CgpzZXRQcm9jZXNzGAQgASgLMhwuZHZvdGUudHlwZXMudjEuU2V0UHJvY2Vzc1R4SABSCnNldFByb2Nlc3MSQQoLcmVnaXN0ZXJLZXkYBSABKAsyHS5kdm90ZS50eXBlcy52MS5SZWdpc3RlcktleVR4SABSC3JlZ2lzdGVyS2V5Ej4KCm1pbnRUb2tlbnMYBiABKAsyHC5kdm90ZS50eXBlcy52MS5NaW50VG9rZW5zVHhIAFIKbWludFRva2VucxI+CgpzZW5kVG9rZW5zGAcgASgLMhwuZHZvdGUudHlwZXMudjEuU2VuZFRva2Vuc1R4SABSCnNlbmRUb2tlbnMSWQoTc2V0VHJhbnNhY3Rpb25Db3N0cxgIIAEoCzIlLmR2b3RlLnR5cGVzLnYxLlNldFRyYW5zYWN0aW9uQ29zdHNUeEgAUhNzZXRUcmFuc2FjdGlvbkNvc3RzEkoKDnNldEFjY291bnRJbmZvGAkgASgLMiAuZHZvdGUudHlwZXMudjEuU2V0QWNjb3VudEluZm9UeEgAUg5zZXRBY2NvdW50SW5mbxJaChRzZXRBY2NvdW50RGVsZWdhdGVUeBgKIAEoCzIkLmR2b3RlLnR5cGVzLnYxLlNldEFjY291bnREZWxlZ2F0ZVR4SABSFHNldEFjY291bnREZWxlZ2F0ZVR4EkcKDWNvbGxlY3RGYXVjZXQYCyABKAsyHy5kdm90ZS50eXBlcy52MS5Db2xsZWN0RmF1Y2V0VHhIAFINY29sbGVjdEZhdWNldEIJCgdwYXlsb2Fk');
@$core.Deprecated('Use signedTxDescriptor instead')
const SignedTx$json = const {
  '1': 'SignedTx',
  '2': const [
    const {'1': 'tx', '3': 1, '4': 1, '5': 12, '10': 'tx'},
    const {'1': 'signature', '3': 2, '4': 1, '5': 12, '9': 0, '10': 'signature', '17': true},
  ],
  '8': const [
    const {'1': '_signature'},
  ],
};

/// Descriptor for `SignedTx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signedTxDescriptor = $convert.base64Decode('CghTaWduZWRUeBIOCgJ0eBgBIAEoDFICdHgSIQoJc2lnbmF0dXJlGAIgASgMSABSCXNpZ25hdHVyZYgBAUIMCgpfc2lnbmF0dXJl');
@$core.Deprecated('Use newProcessTxDescriptor instead')
const NewProcessTx$json = const {
  '1': 'NewProcessTx',
  '2': const [
    const {'1': 'txtype', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.TxType', '10': 'txtype'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 12, '10': 'nonce'},
    const {'1': 'process', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v1.Process', '10': 'process'},
  ],
};

/// Descriptor for `NewProcessTx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List newProcessTxDescriptor = $convert.base64Decode('CgxOZXdQcm9jZXNzVHgSLgoGdHh0eXBlGAEgASgOMhYuZHZvdGUudHlwZXMudjEuVHhUeXBlUgZ0eHR5cGUSFAoFbm9uY2UYAiABKAxSBW5vbmNlEjEKB3Byb2Nlc3MYAyABKAsyFy5kdm90ZS50eXBlcy52MS5Qcm9jZXNzUgdwcm9jZXNz');
@$core.Deprecated('Use setProcessTxDescriptor instead')
const SetProcessTx$json = const {
  '1': 'SetProcessTx',
  '2': const [
    const {'1': 'txtype', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.TxType', '10': 'txtype'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 12, '10': 'nonce'},
    const {'1': 'processId', '3': 3, '4': 1, '5': 12, '10': 'processId'},
    const {'1': 'status', '3': 4, '4': 1, '5': 14, '6': '.dvote.types.v1.ProcessStatus', '9': 0, '10': 'status', '17': true},
    const {'1': 'questionIndex', '3': 5, '4': 1, '5': 13, '9': 1, '10': 'questionIndex', '17': true},
    const {'1': 'censusRoot', '3': 6, '4': 1, '5': 12, '9': 2, '10': 'censusRoot', '17': true},
    const {'1': 'censusURI', '3': 7, '4': 1, '5': 9, '9': 3, '10': 'censusURI', '17': true},
    const {'1': 'proof', '3': 8, '4': 1, '5': 11, '6': '.dvote.types.v1.Proof', '9': 4, '10': 'proof', '17': true},
    const {'1': 'results', '3': 9, '4': 1, '5': 11, '6': '.dvote.types.v1.ProcessResult', '9': 5, '10': 'results', '17': true},
  ],
  '8': const [
    const {'1': '_status'},
    const {'1': '_questionIndex'},
    const {'1': '_censusRoot'},
    const {'1': '_censusURI'},
    const {'1': '_proof'},
    const {'1': '_results'},
  ],
};

/// Descriptor for `SetProcessTx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List setProcessTxDescriptor = $convert.base64Decode('CgxTZXRQcm9jZXNzVHgSLgoGdHh0eXBlGAEgASgOMhYuZHZvdGUudHlwZXMudjEuVHhUeXBlUgZ0eHR5cGUSFAoFbm9uY2UYAiABKAxSBW5vbmNlEhwKCXByb2Nlc3NJZBgDIAEoDFIJcHJvY2Vzc0lkEjoKBnN0YXR1cxgEIAEoDjIdLmR2b3RlLnR5cGVzLnYxLlByb2Nlc3NTdGF0dXNIAFIGc3RhdHVziAEBEikKDXF1ZXN0aW9uSW5kZXgYBSABKA1IAVINcXVlc3Rpb25JbmRleIgBARIjCgpjZW5zdXNSb290GAYgASgMSAJSCmNlbnN1c1Jvb3SIAQESIQoJY2Vuc3VzVVJJGAcgASgJSANSCWNlbnN1c1VSSYgBARIwCgVwcm9vZhgIIAEoCzIVLmR2b3RlLnR5cGVzLnYxLlByb29mSARSBXByb29miAEBEjwKB3Jlc3VsdHMYCSABKAsyHS5kdm90ZS50eXBlcy52MS5Qcm9jZXNzUmVzdWx0SAVSB3Jlc3VsdHOIAQFCCQoHX3N0YXR1c0IQCg5fcXVlc3Rpb25JbmRleEINCgtfY2Vuc3VzUm9vdEIMCgpfY2Vuc3VzVVJJQggKBl9wcm9vZkIKCghfcmVzdWx0cw==');
@$core.Deprecated('Use adminTxDescriptor instead')
const AdminTx$json = const {
  '1': 'AdminTx',
  '2': const [
    const {'1': 'txtype', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.TxType', '10': 'txtype'},
    const {'1': 'processId', '3': 2, '4': 1, '5': 12, '10': 'processId'},
    const {'1': 'address', '3': 3, '4': 1, '5': 12, '9': 0, '10': 'address', '17': true},
    const {'1': 'encryptionPrivateKey', '3': 5, '4': 1, '5': 12, '9': 1, '10': 'encryptionPrivateKey', '17': true},
    const {'1': 'encryptionPublicKey', '3': 6, '4': 1, '5': 12, '9': 2, '10': 'encryptionPublicKey', '17': true},
    const {'1': 'keyIndex', '3': 7, '4': 1, '5': 13, '9': 3, '10': 'keyIndex', '17': true},
    const {'1': 'power', '3': 8, '4': 1, '5': 4, '9': 4, '10': 'power', '17': true},
    const {'1': 'publicKey', '3': 9, '4': 1, '5': 12, '9': 5, '10': 'publicKey', '17': true},
    const {'1': 'nonce', '3': 11, '4': 1, '5': 12, '10': 'nonce'},
  ],
  '8': const [
    const {'1': '_address'},
    const {'1': '_encryptionPrivateKey'},
    const {'1': '_encryptionPublicKey'},
    const {'1': '_keyIndex'},
    const {'1': '_power'},
    const {'1': '_publicKey'},
  ],
};

/// Descriptor for `AdminTx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List adminTxDescriptor = $convert.base64Decode('CgdBZG1pblR4Ei4KBnR4dHlwZRgBIAEoDjIWLmR2b3RlLnR5cGVzLnYxLlR4VHlwZVIGdHh0eXBlEhwKCXByb2Nlc3NJZBgCIAEoDFIJcHJvY2Vzc0lkEh0KB2FkZHJlc3MYAyABKAxIAFIHYWRkcmVzc4gBARI3ChRlbmNyeXB0aW9uUHJpdmF0ZUtleRgFIAEoDEgBUhRlbmNyeXB0aW9uUHJpdmF0ZUtleYgBARI1ChNlbmNyeXB0aW9uUHVibGljS2V5GAYgASgMSAJSE2VuY3J5cHRpb25QdWJsaWNLZXmIAQESHwoIa2V5SW5kZXgYByABKA1IA1IIa2V5SW5kZXiIAQESGQoFcG93ZXIYCCABKARIBFIFcG93ZXKIAQESIQoJcHVibGljS2V5GAkgASgMSAVSCXB1YmxpY0tleYgBARIUCgVub25jZRgLIAEoDFIFbm9uY2VCCgoIX2FkZHJlc3NCFwoVX2VuY3J5cHRpb25Qcml2YXRlS2V5QhYKFF9lbmNyeXB0aW9uUHVibGljS2V5QgsKCV9rZXlJbmRleEIICgZfcG93ZXJCDAoKX3B1YmxpY0tleQ==');
@$core.Deprecated('Use registerKeyTxDescriptor instead')
const RegisterKeyTx$json = const {
  '1': 'RegisterKeyTx',
  '2': const [
    const {'1': 'nonce', '3': 1, '4': 1, '5': 12, '10': 'nonce'},
    const {'1': 'processId', '3': 2, '4': 1, '5': 12, '10': 'processId'},
    const {'1': 'proof', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v1.Proof', '10': 'proof'},
    const {'1': 'newKey', '3': 4, '4': 1, '5': 12, '10': 'newKey'},
    const {'1': 'weight', '3': 5, '4': 1, '5': 9, '10': 'weight'},
  ],
};

/// Descriptor for `RegisterKeyTx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List registerKeyTxDescriptor = $convert.base64Decode('Cg1SZWdpc3RlcktleVR4EhQKBW5vbmNlGAEgASgMUgVub25jZRIcCglwcm9jZXNzSWQYAiABKAxSCXByb2Nlc3NJZBIrCgVwcm9vZhgDIAEoCzIVLmR2b3RlLnR5cGVzLnYxLlByb29mUgVwcm9vZhIWCgZuZXdLZXkYBCABKAxSBm5ld0tleRIWCgZ3ZWlnaHQYBSABKAlSBndlaWdodA==');
@$core.Deprecated('Use mintTokensTxDescriptor instead')
const MintTokensTx$json = const {
  '1': 'MintTokensTx',
  '2': const [
    const {'1': 'txtype', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.TxType', '10': 'txtype'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 13, '10': 'nonce'},
    const {'1': 'to', '3': 3, '4': 1, '5': 12, '10': 'to'},
    const {'1': 'value', '3': 4, '4': 1, '5': 4, '10': 'value'},
  ],
};

/// Descriptor for `MintTokensTx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List mintTokensTxDescriptor = $convert.base64Decode('CgxNaW50VG9rZW5zVHgSLgoGdHh0eXBlGAEgASgOMhYuZHZvdGUudHlwZXMudjEuVHhUeXBlUgZ0eHR5cGUSFAoFbm9uY2UYAiABKA1SBW5vbmNlEg4KAnRvGAMgASgMUgJ0bxIUCgV2YWx1ZRgEIAEoBFIFdmFsdWU=');
@$core.Deprecated('Use sendTokensTxDescriptor instead')
const SendTokensTx$json = const {
  '1': 'SendTokensTx',
  '2': const [
    const {'1': 'txtype', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.TxType', '10': 'txtype'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 13, '10': 'nonce'},
    const {'1': 'from', '3': 3, '4': 1, '5': 12, '10': 'from'},
    const {'1': 'to', '3': 4, '4': 1, '5': 12, '10': 'to'},
    const {'1': 'value', '3': 5, '4': 1, '5': 4, '10': 'value'},
  ],
};

/// Descriptor for `SendTokensTx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List sendTokensTxDescriptor = $convert.base64Decode('CgxTZW5kVG9rZW5zVHgSLgoGdHh0eXBlGAEgASgOMhYuZHZvdGUudHlwZXMudjEuVHhUeXBlUgZ0eHR5cGUSFAoFbm9uY2UYAiABKA1SBW5vbmNlEhIKBGZyb20YAyABKAxSBGZyb20SDgoCdG8YBCABKAxSAnRvEhQKBXZhbHVlGAUgASgEUgV2YWx1ZQ==');
@$core.Deprecated('Use setTransactionCostsTxDescriptor instead')
const SetTransactionCostsTx$json = const {
  '1': 'SetTransactionCostsTx',
  '2': const [
    const {'1': 'txtype', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.TxType', '10': 'txtype'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 13, '10': 'nonce'},
    const {'1': 'value', '3': 3, '4': 1, '5': 4, '10': 'value'},
  ],
};

/// Descriptor for `SetTransactionCostsTx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List setTransactionCostsTxDescriptor = $convert.base64Decode('ChVTZXRUcmFuc2FjdGlvbkNvc3RzVHgSLgoGdHh0eXBlGAEgASgOMhYuZHZvdGUudHlwZXMudjEuVHhUeXBlUgZ0eHR5cGUSFAoFbm9uY2UYAiABKA1SBW5vbmNlEhQKBXZhbHVlGAMgASgEUgV2YWx1ZQ==');
@$core.Deprecated('Use setAccountInfoTxDescriptor instead')
const SetAccountInfoTx$json = const {
  '1': 'SetAccountInfoTx',
  '2': const [
    const {'1': 'txtype', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.TxType', '10': 'txtype'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 13, '10': 'nonce'},
    const {'1': 'infoURI', '3': 3, '4': 1, '5': 9, '10': 'infoURI'},
  ],
};

/// Descriptor for `SetAccountInfoTx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List setAccountInfoTxDescriptor = $convert.base64Decode('ChBTZXRBY2NvdW50SW5mb1R4Ei4KBnR4dHlwZRgBIAEoDjIWLmR2b3RlLnR5cGVzLnYxLlR4VHlwZVIGdHh0eXBlEhQKBW5vbmNlGAIgASgNUgVub25jZRIYCgdpbmZvVVJJGAMgASgJUgdpbmZvVVJJ');
@$core.Deprecated('Use setAccountDelegateTxDescriptor instead')
const SetAccountDelegateTx$json = const {
  '1': 'SetAccountDelegateTx',
  '2': const [
    const {'1': 'txtype', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.TxType', '10': 'txtype'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 13, '10': 'nonce'},
    const {'1': 'delegate', '3': 3, '4': 1, '5': 12, '10': 'delegate'},
  ],
};

/// Descriptor for `SetAccountDelegateTx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List setAccountDelegateTxDescriptor = $convert.base64Decode('ChRTZXRBY2NvdW50RGVsZWdhdGVUeBIuCgZ0eHR5cGUYASABKA4yFi5kdm90ZS50eXBlcy52MS5UeFR5cGVSBnR4dHlwZRIUCgVub25jZRgCIAEoDVIFbm9uY2USGgoIZGVsZWdhdGUYAyABKAxSCGRlbGVnYXRl');
@$core.Deprecated('Use collectFaucetTxDescriptor instead')
const CollectFaucetTx$json = const {
  '1': 'CollectFaucetTx',
  '2': const [
    const {'1': 'txType', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.TxType', '10': 'txType'},
    const {'1': 'faucetPackage', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.FaucetPackage', '10': 'faucetPackage'},
  ],
};

/// Descriptor for `CollectFaucetTx`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List collectFaucetTxDescriptor = $convert.base64Decode('Cg9Db2xsZWN0RmF1Y2V0VHgSLgoGdHhUeXBlGAEgASgOMhYuZHZvdGUudHlwZXMudjEuVHhUeXBlUgZ0eFR5cGUSQwoNZmF1Y2V0UGFja2FnZRgCIAEoCzIdLmR2b3RlLnR5cGVzLnYxLkZhdWNldFBhY2thZ2VSDWZhdWNldFBhY2thZ2U=');
@$core.Deprecated('Use faucetPayloadDescriptor instead')
const FaucetPayload$json = const {
  '1': 'FaucetPayload',
  '2': const [
    const {'1': 'identifier', '3': 1, '4': 1, '5': 4, '10': 'identifier'},
    const {'1': 'to', '3': 2, '4': 1, '5': 12, '10': 'to'},
    const {'1': 'amount', '3': 3, '4': 1, '5': 4, '10': 'amount'},
  ],
};

/// Descriptor for `FaucetPayload`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List faucetPayloadDescriptor = $convert.base64Decode('Cg1GYXVjZXRQYXlsb2FkEh4KCmlkZW50aWZpZXIYASABKARSCmlkZW50aWZpZXISDgoCdG8YAiABKAxSAnRvEhYKBmFtb3VudBgDIAEoBFIGYW1vdW50');
@$core.Deprecated('Use faucetPackageDescriptor instead')
const FaucetPackage$json = const {
  '1': 'FaucetPackage',
  '2': const [
    const {'1': 'payload', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v1.FaucetPayload', '10': 'payload'},
    const {'1': 'signature', '3': 2, '4': 1, '5': 12, '10': 'signature'},
  ],
};

/// Descriptor for `FaucetPackage`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List faucetPackageDescriptor = $convert.base64Decode('Cg1GYXVjZXRQYWNrYWdlEjcKB3BheWxvYWQYASABKAsyHS5kdm90ZS50eXBlcy52MS5GYXVjZXRQYXlsb2FkUgdwYXlsb2FkEhwKCXNpZ25hdHVyZRgCIAEoDFIJc2lnbmF0dXJl');
@$core.Deprecated('Use processDescriptor instead')
const Process$json = const {
  '1': 'Process',
  '2': const [
    const {'1': 'processId', '3': 1, '4': 1, '5': 12, '10': 'processId'},
    const {'1': 'entityId', '3': 2, '4': 1, '5': 12, '10': 'entityId'},
    const {'1': 'startBlock', '3': 3, '4': 1, '5': 13, '10': 'startBlock'},
    const {'1': 'blockCount', '3': 4, '4': 1, '5': 13, '10': 'blockCount'},
    const {'1': 'censusRoot', '3': 5, '4': 1, '5': 12, '10': 'censusRoot'},
    const {'1': 'censusURI', '3': 6, '4': 1, '5': 9, '9': 0, '10': 'censusURI', '17': true},
    const {'1': 'encryptionPrivateKeys', '3': 8, '4': 3, '5': 9, '10': 'encryptionPrivateKeys'},
    const {'1': 'encryptionPublicKeys', '3': 9, '4': 3, '5': 9, '10': 'encryptionPublicKeys'},
    const {'1': 'keyIndex', '3': 11, '4': 1, '5': 13, '9': 1, '10': 'keyIndex', '17': true},
    const {'1': 'status', '3': 12, '4': 1, '5': 14, '6': '.dvote.types.v1.ProcessStatus', '10': 'status'},
    const {'1': 'paramsSignature', '3': 13, '4': 1, '5': 12, '9': 2, '10': 'paramsSignature', '17': true},
    const {'1': 'namespace', '3': 14, '4': 1, '5': 13, '10': 'namespace'},
    const {'1': 'envelopeType', '3': 15, '4': 1, '5': 11, '6': '.dvote.types.v1.EnvelopeType', '10': 'envelopeType'},
    const {'1': 'mode', '3': 16, '4': 1, '5': 11, '6': '.dvote.types.v1.ProcessMode', '10': 'mode'},
    const {'1': 'questionIndex', '3': 17, '4': 1, '5': 13, '9': 3, '10': 'questionIndex', '17': true},
    const {'1': 'questionCount', '3': 18, '4': 1, '5': 13, '9': 4, '10': 'questionCount', '17': true},
    const {'1': 'voteOptions', '3': 19, '4': 1, '5': 11, '6': '.dvote.types.v1.ProcessVoteOptions', '10': 'voteOptions'},
    const {'1': 'censusOrigin', '3': 20, '4': 1, '5': 14, '6': '.dvote.types.v1.CensusOrigin', '10': 'censusOrigin'},
    const {'1': 'results', '3': 21, '4': 1, '5': 11, '6': '.dvote.types.v1.ProcessResult', '10': 'results'},
    const {'1': 'resultsSignatures', '3': 22, '4': 3, '5': 12, '10': 'resultsSignatures'},
    const {'1': 'ethIndexSlot', '3': 23, '4': 1, '5': 13, '9': 5, '10': 'ethIndexSlot', '17': true},
    const {'1': 'sourceBlockHeight', '3': 24, '4': 1, '5': 4, '9': 6, '10': 'sourceBlockHeight', '17': true},
    const {'1': 'owner', '3': 25, '4': 1, '5': 12, '9': 7, '10': 'owner', '17': true},
    const {'1': 'metadata', '3': 26, '4': 1, '5': 9, '9': 8, '10': 'metadata', '17': true},
    const {'1': 'sourceNetworkId', '3': 27, '4': 1, '5': 14, '6': '.dvote.types.v1.SourceNetworkId', '10': 'sourceNetworkId'},
    const {'1': 'maxCensusSize', '3': 28, '4': 1, '5': 4, '9': 9, '10': 'maxCensusSize', '17': true},
    const {'1': 'rollingCensusRoot', '3': 29, '4': 1, '5': 12, '9': 10, '10': 'rollingCensusRoot', '17': true},
    const {'1': 'rollingCensusSize', '3': 30, '4': 1, '5': 4, '9': 11, '10': 'rollingCensusSize', '17': true},
    const {'1': 'nullifiersRoot', '3': 31, '4': 1, '5': 12, '9': 12, '10': 'nullifiersRoot', '17': true},
  ],
  '8': const [
    const {'1': '_censusURI'},
    const {'1': '_keyIndex'},
    const {'1': '_paramsSignature'},
    const {'1': '_questionIndex'},
    const {'1': '_questionCount'},
    const {'1': '_ethIndexSlot'},
    const {'1': '_sourceBlockHeight'},
    const {'1': '_owner'},
    const {'1': '_metadata'},
    const {'1': '_maxCensusSize'},
    const {'1': '_rollingCensusRoot'},
    const {'1': '_rollingCensusSize'},
    const {'1': '_nullifiersRoot'},
  ],
};

/// Descriptor for `Process`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List processDescriptor = $convert.base64Decode('CgdQcm9jZXNzEhwKCXByb2Nlc3NJZBgBIAEoDFIJcHJvY2Vzc0lkEhoKCGVudGl0eUlkGAIgASgMUghlbnRpdHlJZBIeCgpzdGFydEJsb2NrGAMgASgNUgpzdGFydEJsb2NrEh4KCmJsb2NrQ291bnQYBCABKA1SCmJsb2NrQ291bnQSHgoKY2Vuc3VzUm9vdBgFIAEoDFIKY2Vuc3VzUm9vdBIhCgljZW5zdXNVUkkYBiABKAlIAFIJY2Vuc3VzVVJJiAEBEjQKFWVuY3J5cHRpb25Qcml2YXRlS2V5cxgIIAMoCVIVZW5jcnlwdGlvblByaXZhdGVLZXlzEjIKFGVuY3J5cHRpb25QdWJsaWNLZXlzGAkgAygJUhRlbmNyeXB0aW9uUHVibGljS2V5cxIfCghrZXlJbmRleBgLIAEoDUgBUghrZXlJbmRleIgBARI1CgZzdGF0dXMYDCABKA4yHS5kdm90ZS50eXBlcy52MS5Qcm9jZXNzU3RhdHVzUgZzdGF0dXMSLQoPcGFyYW1zU2lnbmF0dXJlGA0gASgMSAJSD3BhcmFtc1NpZ25hdHVyZYgBARIcCgluYW1lc3BhY2UYDiABKA1SCW5hbWVzcGFjZRJACgxlbnZlbG9wZVR5cGUYDyABKAsyHC5kdm90ZS50eXBlcy52MS5FbnZlbG9wZVR5cGVSDGVudmVsb3BlVHlwZRIvCgRtb2RlGBAgASgLMhsuZHZvdGUudHlwZXMudjEuUHJvY2Vzc01vZGVSBG1vZGUSKQoNcXVlc3Rpb25JbmRleBgRIAEoDUgDUg1xdWVzdGlvbkluZGV4iAEBEikKDXF1ZXN0aW9uQ291bnQYEiABKA1IBFINcXVlc3Rpb25Db3VudIgBARJECgt2b3RlT3B0aW9ucxgTIAEoCzIiLmR2b3RlLnR5cGVzLnYxLlByb2Nlc3NWb3RlT3B0aW9uc1ILdm90ZU9wdGlvbnMSQAoMY2Vuc3VzT3JpZ2luGBQgASgOMhwuZHZvdGUudHlwZXMudjEuQ2Vuc3VzT3JpZ2luUgxjZW5zdXNPcmlnaW4SNwoHcmVzdWx0cxgVIAEoCzIdLmR2b3RlLnR5cGVzLnYxLlByb2Nlc3NSZXN1bHRSB3Jlc3VsdHMSLAoRcmVzdWx0c1NpZ25hdHVyZXMYFiADKAxSEXJlc3VsdHNTaWduYXR1cmVzEicKDGV0aEluZGV4U2xvdBgXIAEoDUgFUgxldGhJbmRleFNsb3SIAQESMQoRc291cmNlQmxvY2tIZWlnaHQYGCABKARIBlIRc291cmNlQmxvY2tIZWlnaHSIAQESGQoFb3duZXIYGSABKAxIB1IFb3duZXKIAQESHwoIbWV0YWRhdGEYGiABKAlICFIIbWV0YWRhdGGIAQESSQoPc291cmNlTmV0d29ya0lkGBsgASgOMh8uZHZvdGUudHlwZXMudjEuU291cmNlTmV0d29ya0lkUg9zb3VyY2VOZXR3b3JrSWQSKQoNbWF4Q2Vuc3VzU2l6ZRgcIAEoBEgJUg1tYXhDZW5zdXNTaXpliAEBEjEKEXJvbGxpbmdDZW5zdXNSb290GB0gASgMSApSEXJvbGxpbmdDZW5zdXNSb290iAEBEjEKEXJvbGxpbmdDZW5zdXNTaXplGB4gASgESAtSEXJvbGxpbmdDZW5zdXNTaXpliAEBEisKDm51bGxpZmllcnNSb290GB8gASgMSAxSDm51bGxpZmllcnNSb290iAEBQgwKCl9jZW5zdXNVUklCCwoJX2tleUluZGV4QhIKEF9wYXJhbXNTaWduYXR1cmVCEAoOX3F1ZXN0aW9uSW5kZXhCEAoOX3F1ZXN0aW9uQ291bnRCDwoNX2V0aEluZGV4U2xvdEIUChJfc291cmNlQmxvY2tIZWlnaHRCCAoGX293bmVyQgsKCV9tZXRhZGF0YUIQCg5fbWF4Q2Vuc3VzU2l6ZUIUChJfcm9sbGluZ0NlbnN1c1Jvb3RCFAoSX3JvbGxpbmdDZW5zdXNTaXplQhEKD19udWxsaWZpZXJzUm9vdA==');
@$core.Deprecated('Use envelopeTypeDescriptor instead')
const EnvelopeType$json = const {
  '1': 'EnvelopeType',
  '2': const [
    const {'1': 'serial', '3': 1, '4': 1, '5': 8, '10': 'serial'},
    const {'1': 'anonymous', '3': 2, '4': 1, '5': 8, '10': 'anonymous'},
    const {'1': 'encryptedVotes', '3': 3, '4': 1, '5': 8, '10': 'encryptedVotes'},
    const {'1': 'uniqueValues', '3': 4, '4': 1, '5': 8, '10': 'uniqueValues'},
    const {'1': 'costFromWeight', '3': 5, '4': 1, '5': 8, '10': 'costFromWeight'},
  ],
};

/// Descriptor for `EnvelopeType`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List envelopeTypeDescriptor = $convert.base64Decode('CgxFbnZlbG9wZVR5cGUSFgoGc2VyaWFsGAEgASgIUgZzZXJpYWwSHAoJYW5vbnltb3VzGAIgASgIUglhbm9ueW1vdXMSJgoOZW5jcnlwdGVkVm90ZXMYAyABKAhSDmVuY3J5cHRlZFZvdGVzEiIKDHVuaXF1ZVZhbHVlcxgEIAEoCFIMdW5pcXVlVmFsdWVzEiYKDmNvc3RGcm9tV2VpZ2h0GAUgASgIUg5jb3N0RnJvbVdlaWdodA==');
@$core.Deprecated('Use processModeDescriptor instead')
const ProcessMode$json = const {
  '1': 'ProcessMode',
  '2': const [
    const {'1': 'autoStart', '3': 1, '4': 1, '5': 8, '10': 'autoStart'},
    const {'1': 'interruptible', '3': 2, '4': 1, '5': 8, '10': 'interruptible'},
    const {'1': 'dynamicCensus', '3': 3, '4': 1, '5': 8, '10': 'dynamicCensus'},
    const {'1': 'encryptedMetaData', '3': 4, '4': 1, '5': 8, '10': 'encryptedMetaData'},
    const {'1': 'preRegister', '3': 5, '4': 1, '5': 8, '10': 'preRegister'},
  ],
};

/// Descriptor for `ProcessMode`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List processModeDescriptor = $convert.base64Decode('CgtQcm9jZXNzTW9kZRIcCglhdXRvU3RhcnQYASABKAhSCWF1dG9TdGFydBIkCg1pbnRlcnJ1cHRpYmxlGAIgASgIUg1pbnRlcnJ1cHRpYmxlEiQKDWR5bmFtaWNDZW5zdXMYAyABKAhSDWR5bmFtaWNDZW5zdXMSLAoRZW5jcnlwdGVkTWV0YURhdGEYBCABKAhSEWVuY3J5cHRlZE1ldGFEYXRhEiAKC3ByZVJlZ2lzdGVyGAUgASgIUgtwcmVSZWdpc3Rlcg==');
@$core.Deprecated('Use processVoteOptionsDescriptor instead')
const ProcessVoteOptions$json = const {
  '1': 'ProcessVoteOptions',
  '2': const [
    const {'1': 'maxCount', '3': 1, '4': 1, '5': 13, '10': 'maxCount'},
    const {'1': 'maxValue', '3': 2, '4': 1, '5': 13, '10': 'maxValue'},
    const {'1': 'maxVoteOverwrites', '3': 3, '4': 1, '5': 13, '10': 'maxVoteOverwrites'},
    const {'1': 'maxTotalCost', '3': 4, '4': 1, '5': 13, '10': 'maxTotalCost'},
    const {'1': 'costExponent', '3': 5, '4': 1, '5': 13, '10': 'costExponent'},
  ],
};

/// Descriptor for `ProcessVoteOptions`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List processVoteOptionsDescriptor = $convert.base64Decode('ChJQcm9jZXNzVm90ZU9wdGlvbnMSGgoIbWF4Q291bnQYASABKA1SCG1heENvdW50EhoKCG1heFZhbHVlGAIgASgNUghtYXhWYWx1ZRIsChFtYXhWb3RlT3ZlcndyaXRlcxgDIAEoDVIRbWF4Vm90ZU92ZXJ3cml0ZXMSIgoMbWF4VG90YWxDb3N0GAQgASgNUgxtYXhUb3RhbENvc3QSIgoMY29zdEV4cG9uZW50GAUgASgNUgxjb3N0RXhwb25lbnQ=');
@$core.Deprecated('Use oracleListDescriptor instead')
const OracleList$json = const {
  '1': 'OracleList',
  '2': const [
    const {'1': 'oracles', '3': 1, '4': 3, '5': 12, '10': 'oracles'},
  ],
};

/// Descriptor for `OracleList`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List oracleListDescriptor = $convert.base64Decode('CgpPcmFjbGVMaXN0EhgKB29yYWNsZXMYASADKAxSB29yYWNsZXM=');
@$core.Deprecated('Use validatorListDescriptor instead')
const ValidatorList$json = const {
  '1': 'ValidatorList',
  '2': const [
    const {'1': 'validators', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.Validator', '10': 'validators'},
  ],
};

/// Descriptor for `ValidatorList`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List validatorListDescriptor = $convert.base64Decode('Cg1WYWxpZGF0b3JMaXN0EjkKCnZhbGlkYXRvcnMYASADKAsyGS5kdm90ZS50eXBlcy52MS5WYWxpZGF0b3JSCnZhbGlkYXRvcnM=');
@$core.Deprecated('Use validatorDescriptor instead')
const Validator$json = const {
  '1': 'Validator',
  '2': const [
    const {'1': 'address', '3': 1, '4': 1, '5': 12, '10': 'address'},
    const {'1': 'pubKey', '3': 2, '4': 1, '5': 12, '10': 'pubKey'},
    const {'1': 'power', '3': 3, '4': 1, '5': 4, '10': 'power'},
    const {'1': 'name', '3': 4, '4': 1, '5': 9, '10': 'name'},
  ],
};

/// Descriptor for `Validator`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List validatorDescriptor = $convert.base64Decode('CglWYWxpZGF0b3ISGAoHYWRkcmVzcxgBIAEoDFIHYWRkcmVzcxIWCgZwdWJLZXkYAiABKAxSBnB1YktleRIUCgVwb3dlchgDIAEoBFIFcG93ZXISEgoEbmFtZRgEIAEoCVIEbmFtZQ==');
@$core.Deprecated('Use voteDescriptor instead')
const Vote$json = const {
  '1': 'Vote',
  '2': const [
    const {'1': 'height', '3': 1, '4': 1, '5': 13, '10': 'height'},
    const {'1': 'nullifier', '3': 2, '4': 1, '5': 12, '10': 'nullifier'},
    const {'1': 'processId', '3': 3, '4': 1, '5': 12, '10': 'processId'},
    const {'1': 'votePackage', '3': 4, '4': 1, '5': 12, '10': 'votePackage'},
    const {'1': 'encryptionKeyIndexes', '3': 5, '4': 3, '5': 13, '10': 'encryptionKeyIndexes'},
    const {'1': 'weight', '3': 6, '4': 1, '5': 12, '10': 'weight'},
  ],
};

/// Descriptor for `Vote`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List voteDescriptor = $convert.base64Decode('CgRWb3RlEhYKBmhlaWdodBgBIAEoDVIGaGVpZ2h0EhwKCW51bGxpZmllchgCIAEoDFIJbnVsbGlmaWVyEhwKCXByb2Nlc3NJZBgDIAEoDFIJcHJvY2Vzc0lkEiAKC3ZvdGVQYWNrYWdlGAQgASgMUgt2b3RlUGFja2FnZRIyChRlbmNyeXB0aW9uS2V5SW5kZXhlcxgFIAMoDVIUZW5jcnlwdGlvbktleUluZGV4ZXMSFgoGd2VpZ2h0GAYgASgMUgZ3ZWlnaHQ=');
@$core.Deprecated('Use tendermintHeaderDescriptor instead')
const TendermintHeader$json = const {
  '1': 'TendermintHeader',
  '2': const [
    const {'1': 'chain_id', '3': 2, '4': 1, '5': 9, '10': 'chainId'},
    const {'1': 'height', '3': 3, '4': 1, '5': 3, '10': 'height'},
    const {'1': 'timestamp', '3': 4, '4': 1, '5': 3, '10': 'timestamp'},
    const {'1': 'blockID', '3': 5, '4': 1, '5': 12, '10': 'blockID'},
    const {'1': 'last_commit_hash', '3': 6, '4': 1, '5': 12, '10': 'lastCommitHash'},
    const {'1': 'data_hash', '3': 7, '4': 1, '5': 12, '10': 'dataHash'},
    const {'1': 'validators_hash', '3': 8, '4': 1, '5': 12, '10': 'validatorsHash'},
    const {'1': 'next_validators_hash', '3': 9, '4': 1, '5': 12, '10': 'nextValidatorsHash'},
    const {'1': 'consensus_hash', '3': 10, '4': 1, '5': 12, '10': 'consensusHash'},
    const {'1': 'app_hash', '3': 11, '4': 1, '5': 12, '10': 'appHash'},
    const {'1': 'last_results_hash', '3': 12, '4': 1, '5': 12, '10': 'lastResultsHash'},
    const {'1': 'evidence_hash', '3': 13, '4': 1, '5': 12, '10': 'evidenceHash'},
    const {'1': 'proposer_address', '3': 14, '4': 1, '5': 12, '10': 'proposerAddress'},
  ],
};

/// Descriptor for `TendermintHeader`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List tendermintHeaderDescriptor = $convert.base64Decode('ChBUZW5kZXJtaW50SGVhZGVyEhkKCGNoYWluX2lkGAIgASgJUgdjaGFpbklkEhYKBmhlaWdodBgDIAEoA1IGaGVpZ2h0EhwKCXRpbWVzdGFtcBgEIAEoA1IJdGltZXN0YW1wEhgKB2Jsb2NrSUQYBSABKAxSB2Jsb2NrSUQSKAoQbGFzdF9jb21taXRfaGFzaBgGIAEoDFIObGFzdENvbW1pdEhhc2gSGwoJZGF0YV9oYXNoGAcgASgMUghkYXRhSGFzaBInCg92YWxpZGF0b3JzX2hhc2gYCCABKAxSDnZhbGlkYXRvcnNIYXNoEjAKFG5leHRfdmFsaWRhdG9yc19oYXNoGAkgASgMUhJuZXh0VmFsaWRhdG9yc0hhc2gSJQoOY29uc2Vuc3VzX2hhc2gYCiABKAxSDWNvbnNlbnN1c0hhc2gSGQoIYXBwX2hhc2gYCyABKAxSB2FwcEhhc2gSKgoRbGFzdF9yZXN1bHRzX2hhc2gYDCABKAxSD2xhc3RSZXN1bHRzSGFzaBIjCg1ldmlkZW5jZV9oYXNoGA0gASgMUgxldmlkZW5jZUhhc2gSKQoQcHJvcG9zZXJfYWRkcmVzcxgOIAEoDFIPcHJvcG9zZXJBZGRyZXNz');
@$core.Deprecated('Use processResultDescriptor instead')
const ProcessResult$json = const {
  '1': 'ProcessResult',
  '2': const [
    const {'1': 'votes', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.QuestionResult', '10': 'votes'},
    const {'1': 'processId', '3': 2, '4': 1, '5': 12, '9': 0, '10': 'processId', '17': true},
    const {'1': 'entityId', '3': 3, '4': 1, '5': 12, '9': 1, '10': 'entityId', '17': true},
    const {'1': 'signature', '3': 4, '4': 1, '5': 12, '9': 2, '10': 'signature', '17': true},
  ],
  '8': const [
    const {'1': '_processId'},
    const {'1': '_entityId'},
    const {'1': '_signature'},
  ],
};

/// Descriptor for `ProcessResult`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List processResultDescriptor = $convert.base64Decode('Cg1Qcm9jZXNzUmVzdWx0EjQKBXZvdGVzGAEgAygLMh4uZHZvdGUudHlwZXMudjEuUXVlc3Rpb25SZXN1bHRSBXZvdGVzEiEKCXByb2Nlc3NJZBgCIAEoDEgAUglwcm9jZXNzSWSIAQESHwoIZW50aXR5SWQYAyABKAxIAVIIZW50aXR5SWSIAQESIQoJc2lnbmF0dXJlGAQgASgMSAJSCXNpZ25hdHVyZYgBAUIMCgpfcHJvY2Vzc0lkQgsKCV9lbnRpdHlJZEIMCgpfc2lnbmF0dXJl');
@$core.Deprecated('Use questionResultDescriptor instead')
const QuestionResult$json = const {
  '1': 'QuestionResult',
  '2': const [
    const {'1': 'question', '3': 1, '4': 3, '5': 12, '10': 'question'},
  ],
};

/// Descriptor for `QuestionResult`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List questionResultDescriptor = $convert.base64Decode('Cg5RdWVzdGlvblJlc3VsdBIaCghxdWVzdGlvbhgBIAMoDFIIcXVlc3Rpb24=');
@$core.Deprecated('Use processEndingListDescriptor instead')
const ProcessEndingList$json = const {
  '1': 'ProcessEndingList',
  '2': const [
    const {'1': 'processList', '3': 1, '4': 3, '5': 12, '10': 'processList'},
  ],
};

/// Descriptor for `ProcessEndingList`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List processEndingListDescriptor = $convert.base64Decode('ChFQcm9jZXNzRW5kaW5nTGlzdBIgCgtwcm9jZXNzTGlzdBgBIAMoDFILcHJvY2Vzc0xpc3Q=');
@$core.Deprecated('Use storedKeysDescriptor instead')
const StoredKeys$json = const {
  '1': 'StoredKeys',
  '2': const [
    const {'1': 'pids', '3': 1, '4': 3, '5': 12, '10': 'pids'},
  ],
};

/// Descriptor for `StoredKeys`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List storedKeysDescriptor = $convert.base64Decode('CgpTdG9yZWRLZXlzEhIKBHBpZHMYASADKAxSBHBpZHM=');
