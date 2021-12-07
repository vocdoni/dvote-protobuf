///
//  Generated code. Do not modify.
//  source: protocol/census.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use censusDescriptor instead')
const Census$json = const {
  '1': 'Census',
  '2': const [
    const {'1': 'none', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.CensusNone', '9': 0, '10': 'none'},
    const {'1': 'arbo', '3': 11, '4': 1, '5': 11, '6': '.dvote.types.v2.CensusArbo', '9': 0, '10': 'arbo'},
    const {'1': 'csp', '3': 12, '4': 1, '5': 11, '6': '.dvote.types.v2.CensusCsp', '9': 0, '10': 'csp'},
    const {'1': 'erc20', '3': 21, '4': 1, '5': 11, '6': '.dvote.types.v2.CensusErc20', '9': 0, '10': 'erc20'},
    const {'1': 'erc721', '3': 22, '4': 1, '5': 11, '6': '.dvote.types.v2.CensusErc721', '9': 0, '10': 'erc721'},
    const {'1': 'erc1155', '3': 23, '4': 1, '5': 11, '6': '.dvote.types.v2.CensusErc1155', '9': 0, '10': 'erc1155'},
    const {'1': 'erc777', '3': 24, '4': 1, '5': 11, '6': '.dvote.types.v2.CensusErc721', '9': 0, '10': 'erc777'},
    const {'1': 'ercMiniMe', '3': 30, '4': 1, '5': 11, '6': '.dvote.types.v2.CensusErcMiniMe', '9': 0, '10': 'ercMiniMe'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `Census`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List censusDescriptor = $convert.base64Decode('CgZDZW5zdXMSMAoEbm9uZRgBIAEoCzIaLmR2b3RlLnR5cGVzLnYyLkNlbnN1c05vbmVIAFIEbm9uZRIwCgRhcmJvGAsgASgLMhouZHZvdGUudHlwZXMudjIuQ2Vuc3VzQXJib0gAUgRhcmJvEi0KA2NzcBgMIAEoCzIZLmR2b3RlLnR5cGVzLnYyLkNlbnN1c0NzcEgAUgNjc3ASMwoFZXJjMjAYFSABKAsyGy5kdm90ZS50eXBlcy52Mi5DZW5zdXNFcmMyMEgAUgVlcmMyMBI2CgZlcmM3MjEYFiABKAsyHC5kdm90ZS50eXBlcy52Mi5DZW5zdXNFcmM3MjFIAFIGZXJjNzIxEjkKB2VyYzExNTUYFyABKAsyHS5kdm90ZS50eXBlcy52Mi5DZW5zdXNFcmMxMTU1SABSB2VyYzExNTUSNgoGZXJjNzc3GBggASgLMhwuZHZvdGUudHlwZXMudjIuQ2Vuc3VzRXJjNzIxSABSBmVyYzc3NxI/CgllcmNNaW5pTWUYHiABKAsyHy5kdm90ZS50eXBlcy52Mi5DZW5zdXNFcmNNaW5pTWVIAFIJZXJjTWluaU1lQgYKBGJvZHk=');
@$core.Deprecated('Use censusNoneDescriptor instead')
const CensusNone$json = const {
  '1': 'CensusNone',
};

/// Descriptor for `CensusNone`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List censusNoneDescriptor = $convert.base64Decode('CgpDZW5zdXNOb25l');
@$core.Deprecated('Use censusArboDescriptor instead')
const CensusArbo$json = const {
  '1': 'CensusArbo',
  '2': const [
    const {'1': 'censusRoot', '3': 1, '4': 1, '5': 12, '10': 'censusRoot'},
    const {'1': 'censusUri', '3': 2, '4': 1, '5': 9, '10': 'censusUri'},
  ],
};

/// Descriptor for `CensusArbo`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List censusArboDescriptor = $convert.base64Decode('CgpDZW5zdXNBcmJvEh4KCmNlbnN1c1Jvb3QYASABKAxSCmNlbnN1c1Jvb3QSHAoJY2Vuc3VzVXJpGAIgASgJUgljZW5zdXNVcmk=');
@$core.Deprecated('Use censusCspDescriptor instead')
const CensusCsp$json = const {
  '1': 'CensusCsp',
  '2': const [
    const {'1': 'cspUri', '3': 1, '4': 1, '5': 9, '10': 'cspUri'},
    const {'1': 'cspPublicKey', '3': 2, '4': 1, '5': 12, '10': 'cspPublicKey'},
    const {'1': 'blind', '3': 3, '4': 1, '5': 8, '10': 'blind'},
  ],
};

/// Descriptor for `CensusCsp`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List censusCspDescriptor = $convert.base64Decode('CglDZW5zdXNDc3ASFgoGY3NwVXJpGAEgASgJUgZjc3BVcmkSIgoMY3NwUHVibGljS2V5GAIgASgMUgxjc3BQdWJsaWNLZXkSFAoFYmxpbmQYAyABKAhSBWJsaW5k');
@$core.Deprecated('Use censusErc20Descriptor instead')
const CensusErc20$json = const {
  '1': 'CensusErc20',
  '2': const [
    const {'1': 'tokenAddress', '3': 1, '4': 1, '5': 12, '10': 'tokenAddress'},
    const {'1': 'balanceMapSlot', '3': 2, '4': 1, '5': 5, '10': 'balanceMapSlot'},
  ],
};

/// Descriptor for `CensusErc20`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List censusErc20Descriptor = $convert.base64Decode('CgtDZW5zdXNFcmMyMBIiCgx0b2tlbkFkZHJlc3MYASABKAxSDHRva2VuQWRkcmVzcxImCg5iYWxhbmNlTWFwU2xvdBgCIAEoBVIOYmFsYW5jZU1hcFNsb3Q=');
@$core.Deprecated('Use censusErc721Descriptor instead')
const CensusErc721$json = const {
  '1': 'CensusErc721',
};

/// Descriptor for `CensusErc721`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List censusErc721Descriptor = $convert.base64Decode('CgxDZW5zdXNFcmM3MjE=');
@$core.Deprecated('Use censusErc1155Descriptor instead')
const CensusErc1155$json = const {
  '1': 'CensusErc1155',
};

/// Descriptor for `CensusErc1155`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List censusErc1155Descriptor = $convert.base64Decode('Cg1DZW5zdXNFcmMxMTU1');
@$core.Deprecated('Use censusErc777Descriptor instead')
const CensusErc777$json = const {
  '1': 'CensusErc777',
};

/// Descriptor for `CensusErc777`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List censusErc777Descriptor = $convert.base64Decode('CgxDZW5zdXNFcmM3Nzc=');
@$core.Deprecated('Use censusErcMiniMeDescriptor instead')
const CensusErcMiniMe$json = const {
  '1': 'CensusErcMiniMe',
  '2': const [
    const {'1': 'tokenAddress', '3': 1, '4': 1, '5': 12, '10': 'tokenAddress'},
    const {'1': 'balanceMapSlot', '3': 2, '4': 1, '5': 5, '10': 'balanceMapSlot'},
  ],
};

/// Descriptor for `CensusErcMiniMe`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List censusErcMiniMeDescriptor = $convert.base64Decode('Cg9DZW5zdXNFcmNNaW5pTWUSIgoMdG9rZW5BZGRyZXNzGAEgASgMUgx0b2tlbkFkZHJlc3MSJgoOYmFsYW5jZU1hcFNsb3QYAiABKAVSDmJhbGFuY2VNYXBTbG90');
@$core.Deprecated('Use proofDescriptor instead')
const Proof$json = const {
  '1': 'Proof',
  '2': const [
    const {'1': 'none', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.ProofNone', '9': 0, '10': 'none'},
    const {'1': 'arbo', '3': 11, '4': 1, '5': 11, '6': '.dvote.types.v2.ProofArbo', '9': 0, '10': 'arbo'},
    const {'1': 'csp', '3': 12, '4': 1, '5': 11, '6': '.dvote.types.v2.ProofCSP', '9': 0, '10': 'csp'},
    const {'1': 'proofERC20', '3': 21, '4': 1, '5': 11, '6': '.dvote.types.v2.StorageProofERC20', '9': 0, '10': 'proofERC20'},
    const {'1': 'proofERC721', '3': 22, '4': 1, '5': 11, '6': '.dvote.types.v2.StorageProofERC721', '9': 0, '10': 'proofERC721'},
    const {'1': 'proofERC1155', '3': 23, '4': 1, '5': 11, '6': '.dvote.types.v2.StorageProofERC1155', '9': 0, '10': 'proofERC1155'},
    const {'1': 'proofERC777', '3': 24, '4': 1, '5': 11, '6': '.dvote.types.v2.StorageProofERC777', '9': 0, '10': 'proofERC777'},
    const {'1': 'proofMiniMe', '3': 30, '4': 1, '5': 11, '6': '.dvote.types.v2.StorageProofMiniMe', '9': 0, '10': 'proofMiniMe'},
    const {'1': 'zkSnark', '3': 100, '4': 1, '5': 11, '6': '.dvote.types.v2.ProofZkSnark', '9': 0, '10': 'zkSnark'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `Proof`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofDescriptor = $convert.base64Decode('CgVQcm9vZhIvCgRub25lGAEgASgLMhkuZHZvdGUudHlwZXMudjIuUHJvb2ZOb25lSABSBG5vbmUSLwoEYXJibxgLIAEoCzIZLmR2b3RlLnR5cGVzLnYyLlByb29mQXJib0gAUgRhcmJvEiwKA2NzcBgMIAEoCzIYLmR2b3RlLnR5cGVzLnYyLlByb29mQ1NQSABSA2NzcBJDCgpwcm9vZkVSQzIwGBUgASgLMiEuZHZvdGUudHlwZXMudjIuU3RvcmFnZVByb29mRVJDMjBIAFIKcHJvb2ZFUkMyMBJGCgtwcm9vZkVSQzcyMRgWIAEoCzIiLmR2b3RlLnR5cGVzLnYyLlN0b3JhZ2VQcm9vZkVSQzcyMUgAUgtwcm9vZkVSQzcyMRJJCgxwcm9vZkVSQzExNTUYFyABKAsyIy5kdm90ZS50eXBlcy52Mi5TdG9yYWdlUHJvb2ZFUkMxMTU1SABSDHByb29mRVJDMTE1NRJGCgtwcm9vZkVSQzc3NxgYIAEoCzIiLmR2b3RlLnR5cGVzLnYyLlN0b3JhZ2VQcm9vZkVSQzc3N0gAUgtwcm9vZkVSQzc3NxJGCgtwcm9vZk1pbmlNZRgeIAEoCzIiLmR2b3RlLnR5cGVzLnYyLlN0b3JhZ2VQcm9vZk1pbmlNZUgAUgtwcm9vZk1pbmlNZRI4Cgd6a1NuYXJrGGQgASgLMhwuZHZvdGUudHlwZXMudjIuUHJvb2Zaa1NuYXJrSABSB3prU25hcmtCBgoEYm9keQ==');
@$core.Deprecated('Use proofNoneDescriptor instead')
const ProofNone$json = const {
  '1': 'ProofNone',
};

/// Descriptor for `ProofNone`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofNoneDescriptor = $convert.base64Decode('CglQcm9vZk5vbmU=');
@$core.Deprecated('Use proofArboDescriptor instead')
const ProofArbo$json = const {
  '1': 'ProofArbo',
  '2': const [
    const {'1': 'siblings', '3': 1, '4': 3, '5': 12, '10': 'siblings'},
  ],
};

/// Descriptor for `ProofArbo`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofArboDescriptor = $convert.base64Decode('CglQcm9vZkFyYm8SGgoIc2libGluZ3MYASADKAxSCHNpYmxpbmdz');
@$core.Deprecated('Use proofCSPDescriptor instead')
const ProofCSP$json = const {
  '1': 'ProofCSP',
  '2': const [
    const {'1': 'payload', '3': 1, '4': 1, '5': 12, '10': 'payload'},
    const {'1': 'signature', '3': 2, '4': 1, '5': 12, '10': 'signature'},
  ],
};

/// Descriptor for `ProofCSP`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofCSPDescriptor = $convert.base64Decode('CghQcm9vZkNTUBIYCgdwYXlsb2FkGAEgASgMUgdwYXlsb2FkEhwKCXNpZ25hdHVyZRgCIAEoDFIJc2lnbmF0dXJl');
@$core.Deprecated('Use storageProofERC20Descriptor instead')
const StorageProofERC20$json = const {
  '1': 'StorageProofERC20',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 12, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 12, '10': 'value'},
    const {'1': 'proof', '3': 3, '4': 3, '5': 12, '10': 'proof'},
  ],
};

/// Descriptor for `StorageProofERC20`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List storageProofERC20Descriptor = $convert.base64Decode('ChFTdG9yYWdlUHJvb2ZFUkMyMBIQCgNrZXkYASABKAxSA2tleRIUCgV2YWx1ZRgCIAEoDFIFdmFsdWUSFAoFcHJvb2YYAyADKAxSBXByb29m');
@$core.Deprecated('Use storageProofERC721Descriptor instead')
const StorageProofERC721$json = const {
  '1': 'StorageProofERC721',
};

/// Descriptor for `StorageProofERC721`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List storageProofERC721Descriptor = $convert.base64Decode('ChJTdG9yYWdlUHJvb2ZFUkM3MjE=');
@$core.Deprecated('Use storageProofERC1155Descriptor instead')
const StorageProofERC1155$json = const {
  '1': 'StorageProofERC1155',
};

/// Descriptor for `StorageProofERC1155`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List storageProofERC1155Descriptor = $convert.base64Decode('ChNTdG9yYWdlUHJvb2ZFUkMxMTU1');
@$core.Deprecated('Use storageProofERC777Descriptor instead')
const StorageProofERC777$json = const {
  '1': 'StorageProofERC777',
};

/// Descriptor for `StorageProofERC777`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List storageProofERC777Descriptor = $convert.base64Decode('ChJTdG9yYWdlUHJvb2ZFUkM3Nzc=');
@$core.Deprecated('Use storageProofMiniMeDescriptor instead')
const StorageProofMiniMe$json = const {
  '1': 'StorageProofMiniMe',
};

/// Descriptor for `StorageProofMiniMe`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List storageProofMiniMeDescriptor = $convert.base64Decode('ChJTdG9yYWdlUHJvb2ZNaW5pTWU=');
@$core.Deprecated('Use proofZkSnarkDescriptor instead')
const ProofZkSnark$json = const {
  '1': 'ProofZkSnark',
  '2': const [
    const {'1': 'proof1k', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.ProofZkSnark.Poseidon1kCensus', '9': 0, '10': 'proof1k'},
    const {'1': 'proof50k', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.ProofZkSnark.Poseidon50kCensus', '9': 0, '10': 'proof50k'},
    const {'1': 'proof250k', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v2.ProofZkSnark.Poseidon250kCensus', '9': 0, '10': 'proof250k'},
  ],
  '3': const [ProofZkSnark_Poseidon1kCensus$json, ProofZkSnark_Poseidon50kCensus$json, ProofZkSnark_Poseidon250kCensus$json],
  '8': const [
    const {'1': 'body'},
  ],
};

@$core.Deprecated('Use proofZkSnarkDescriptor instead')
const ProofZkSnark_Poseidon1kCensus$json = const {
  '1': 'Poseidon1kCensus',
};

@$core.Deprecated('Use proofZkSnarkDescriptor instead')
const ProofZkSnark_Poseidon50kCensus$json = const {
  '1': 'Poseidon50kCensus',
};

@$core.Deprecated('Use proofZkSnarkDescriptor instead')
const ProofZkSnark_Poseidon250kCensus$json = const {
  '1': 'Poseidon250kCensus',
};

/// Descriptor for `ProofZkSnark`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofZkSnarkDescriptor = $convert.base64Decode('CgxQcm9vZlprU25hcmsSSQoHcHJvb2YxaxgBIAEoCzItLmR2b3RlLnR5cGVzLnYyLlByb29mWmtTbmFyay5Qb3NlaWRvbjFrQ2Vuc3VzSABSB3Byb29mMWsSTAoIcHJvb2Y1MGsYAiABKAsyLi5kdm90ZS50eXBlcy52Mi5Qcm9vZlprU25hcmsuUG9zZWlkb241MGtDZW5zdXNIAFIIcHJvb2Y1MGsSTwoJcHJvb2YyNTBrGAMgASgLMi8uZHZvdGUudHlwZXMudjIuUHJvb2Zaa1NuYXJrLlBvc2VpZG9uMjUwa0NlbnN1c0gAUglwcm9vZjI1MGsaEgoQUG9zZWlkb24xa0NlbnN1cxoTChFQb3NlaWRvbjUwa0NlbnN1cxoUChJQb3NlaWRvbjI1MGtDZW5zdXNCBgoEYm9keQ==');