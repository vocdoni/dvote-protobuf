///
//  Generated code. Do not modify.
//  source: common/vote.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use signatureTypeDescriptor instead')
const SignatureType$json = const {
  '1': 'SignatureType',
  '2': const [
    const {'1': 'UNKNOWN', '2': 0},
    const {'1': 'ECDSA', '2': 1},
    const {'1': 'ECDSA_PIDSALTED', '2': 2},
    const {'1': 'ECDSA_BLIND', '2': 3},
    const {'1': 'ECDSA_BLIND_PIDSALTED', '2': 4},
  ],
};

/// Descriptor for `SignatureType`. Decode as a `google.protobuf.EnumDescriptorProto`.
final $typed_data.Uint8List signatureTypeDescriptor = $convert.base64Decode('Cg1TaWduYXR1cmVUeXBlEgsKB1VOS05PV04QABIJCgVFQ0RTQRABEhMKD0VDRFNBX1BJRFNBTFRFRBACEg8KC0VDRFNBX0JMSU5EEAMSGQoVRUNEU0FfQkxJTkRfUElEU0FMVEVEEAQ=');
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
@$core.Deprecated('Use proofDescriptor instead')
const Proof$json = const {
  '1': 'Proof',
  '2': const [
    const {'1': 'graviton', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofGraviton', '9': 0, '10': 'graviton'},
    const {'1': 'iden3', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofIden3', '9': 0, '10': 'iden3'},
    const {'1': 'ethereumStorage', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofEthereumStorage', '9': 0, '10': 'ethereumStorage'},
    const {'1': 'ethereumAccount', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofEthereumAccount', '9': 0, '10': 'ethereumAccount'},
    const {'1': 'ca', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofCA', '9': 0, '10': 'ca'},
  ],
  '8': const [
    const {'1': 'payload'},
  ],
};

/// Descriptor for `Proof`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofDescriptor = $convert.base64Decode('CgVQcm9vZhI7CghncmF2aXRvbhgBIAEoCzIdLmR2b3RlLnR5cGVzLnYxLlByb29mR3Jhdml0b25IAFIIZ3Jhdml0b24SMgoFaWRlbjMYAiABKAsyGi5kdm90ZS50eXBlcy52MS5Qcm9vZklkZW4zSABSBWlkZW4zElAKD2V0aGVyZXVtU3RvcmFnZRgDIAEoCzIkLmR2b3RlLnR5cGVzLnYxLlByb29mRXRoZXJldW1TdG9yYWdlSABSD2V0aGVyZXVtU3RvcmFnZRJQCg9ldGhlcmV1bUFjY291bnQYBCABKAsyJC5kdm90ZS50eXBlcy52MS5Qcm9vZkV0aGVyZXVtQWNjb3VudEgAUg9ldGhlcmV1bUFjY291bnQSKQoCY2EYBSABKAsyFy5kdm90ZS50eXBlcy52MS5Qcm9vZkNBSABSAmNhQgkKB3BheWxvYWQ=');
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
@$core.Deprecated('Use proofCADescriptor instead')
const ProofCA$json = const {
  '1': 'ProofCA',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.SignatureType', '10': 'type'},
    const {'1': 'bundle', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.CAbundle', '10': 'bundle'},
    const {'1': 'signature', '3': 3, '4': 1, '5': 12, '10': 'signature'},
  ],
};

/// Descriptor for `ProofCA`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List proofCADescriptor = $convert.base64Decode('CgdQcm9vZkNBEjEKBHR5cGUYASABKA4yHS5kdm90ZS50eXBlcy52MS5TaWduYXR1cmVUeXBlUgR0eXBlEjAKBmJ1bmRsZRgCIAEoCzIYLmR2b3RlLnR5cGVzLnYxLkNBYnVuZGxlUgZidW5kbGUSHAoJc2lnbmF0dXJlGAMgASgMUglzaWduYXR1cmU=');
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
