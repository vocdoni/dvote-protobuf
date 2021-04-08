///
//  Generated code. Do not modify.
//  source: client-store/wallet.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use walletDescriptor instead')
const Wallet$json = const {
  '1': 'Wallet',
  '2': const [
    const {'1': 'encryptedMnemonic', '3': 1, '4': 1, '5': 12, '10': 'encryptedMnemonic'},
    const {'1': 'hdPath', '3': 2, '4': 1, '5': 9, '10': 'hdPath'},
    const {'1': 'locale', '3': 3, '4': 1, '5': 9, '10': 'locale'},
    const {'1': 'authMethod', '3': 4, '4': 1, '5': 14, '6': '.dvote.types.v1.Wallet.AuthMethod', '10': 'authMethod'},
  ],
  '4': const [Wallet_AuthMethod$json],
};

@$core.Deprecated('Use walletDescriptor instead')
const Wallet_AuthMethod$json = const {
  '1': 'AuthMethod',
  '2': const [
    const {'1': 'PASS', '2': 0},
    const {'1': 'PIN', '2': 1},
  ],
};

/// Descriptor for `Wallet`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List walletDescriptor = $convert.base64Decode('CgZXYWxsZXQSLAoRZW5jcnlwdGVkTW5lbW9uaWMYASABKAxSEWVuY3J5cHRlZE1uZW1vbmljEhYKBmhkUGF0aBgCIAEoCVIGaGRQYXRoEhYKBmxvY2FsZRgDIAEoCVIGbG9jYWxlEkEKCmF1dGhNZXRob2QYBCABKA4yIS5kdm90ZS50eXBlcy52MS5XYWxsZXQuQXV0aE1ldGhvZFIKYXV0aE1ldGhvZCIfCgpBdXRoTWV0aG9kEggKBFBBU1MQABIHCgNQSU4QAQ==');
