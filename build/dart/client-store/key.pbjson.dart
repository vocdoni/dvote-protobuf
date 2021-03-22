///
//  Generated code. Do not modify.
//  source: client-store/key.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use keyDescriptor instead')
const Key$json = const {
  '1': 'Key',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.Key.Type', '10': 'type'},
    const {'1': 'encryptedMnemonic', '3': 2, '4': 1, '5': 9, '10': 'encryptedMnemonic'},
    const {'1': 'encryptedRootPrivateKey', '3': 3, '4': 1, '5': 9, '10': 'encryptedRootPrivateKey'},
    const {'1': 'rootPublicKey', '3': 4, '4': 1, '5': 9, '10': 'rootPublicKey'},
    const {'1': 'rootAddress', '3': 5, '4': 1, '5': 9, '10': 'rootAddress'},
    const {'1': 'meta', '3': 100, '4': 3, '5': 11, '6': '.dvote.types.v1.Key.MetaEntry', '10': 'meta'},
  ],
  '3': const [Key_MetaEntry$json],
  '4': const [Key_Type$json],
};

@$core.Deprecated('Use keyDescriptor instead')
const Key_MetaEntry$json = const {
  '1': 'MetaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use keyDescriptor instead')
const Key_Type$json = const {
  '1': 'Type',
  '2': const [
    const {'1': 'SECP256K1', '2': 0},
    const {'1': 'BABYJUBJUB', '2': 1},
  ],
};

/// Descriptor for `Key`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List keyDescriptor = $convert.base64Decode('CgNLZXkSLAoEdHlwZRgBIAEoDjIYLmR2b3RlLnR5cGVzLnYxLktleS5UeXBlUgR0eXBlEiwKEWVuY3J5cHRlZE1uZW1vbmljGAIgASgJUhFlbmNyeXB0ZWRNbmVtb25pYxI4ChdlbmNyeXB0ZWRSb290UHJpdmF0ZUtleRgDIAEoCVIXZW5jcnlwdGVkUm9vdFByaXZhdGVLZXkSJAoNcm9vdFB1YmxpY0tleRgEIAEoCVINcm9vdFB1YmxpY0tleRIgCgtyb290QWRkcmVzcxgFIAEoCVILcm9vdEFkZHJlc3MSMQoEbWV0YRhkIAMoCzIdLmR2b3RlLnR5cGVzLnYxLktleS5NZXRhRW50cnlSBG1ldGEaNwoJTWV0YUVudHJ5EhAKA2tleRgBIAEoCVIDa2V5EhQKBXZhbHVlGAIgASgJUgV2YWx1ZToCOAEiJQoEVHlwZRINCglTRUNQMjU2SzEQABIOCgpCQUJZSlVCSlVCEAE=');
