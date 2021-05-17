///
//  Generated code. Do not modify.
//  source: client-store/backup.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use walletBackupDescriptor instead')
const WalletBackup$json = const {
  '1': 'WalletBackup',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'timestamp', '3': 2, '4': 1, '5': 4, '10': 'timestamp'},
    const {'1': 'wallet', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v1.Wallet', '10': 'wallet'},
    const {'1': 'passphraseRecovery', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v1.WalletBackup.Recovery', '10': 'passphraseRecovery'},
  ],
  '3': const [WalletBackup_Recovery$json],
};

@$core.Deprecated('Use walletBackupDescriptor instead')
const WalletBackup_Recovery$json = const {
  '1': 'Recovery',
  '2': const [
    const {'1': 'questionIds', '3': 1, '4': 3, '5': 14, '6': '.dvote.types.v1.WalletBackup.Recovery.QuestionEnum', '10': 'questionIds'},
    const {'1': 'encryptedPassphrase', '3': 2, '4': 1, '5': 12, '10': 'encryptedPassphrase'},
  ],
  '4': const [WalletBackup_Recovery_QuestionEnum$json],
};

@$core.Deprecated('Use walletBackupDescriptor instead')
const WalletBackup_Recovery_QuestionEnum$json = const {
  '1': 'QuestionEnum',
  '2': const [
    const {'1': 'STUFFED_TOY', '2': 0},
    const {'1': 'FAVORITE_TEACHER', '2': 1},
    const {'1': 'DRIVING_INSTRUCTOR', '2': 2},
    const {'1': 'FIRST_KISSED', '2': 3},
    const {'1': 'CHILDHOOD_NICKNAME', '2': 4},
  ],
};

/// Descriptor for `WalletBackup`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List walletBackupDescriptor = $convert.base64Decode('CgxXYWxsZXRCYWNrdXASEgoEbmFtZRgBIAEoCVIEbmFtZRIcCgl0aW1lc3RhbXAYAiABKARSCXRpbWVzdGFtcBIuCgZ3YWxsZXQYAyABKAsyFi5kdm90ZS50eXBlcy52MS5XYWxsZXRSBndhbGxldBJVChJwYXNzcGhyYXNlUmVjb3ZlcnkYBCABKAsyJS5kdm90ZS50eXBlcy52MS5XYWxsZXRCYWNrdXAuUmVjb3ZlcnlSEnBhc3NwaHJhc2VSZWNvdmVyeRqLAgoIUmVjb3ZlcnkSVAoLcXVlc3Rpb25JZHMYASADKA4yMi5kdm90ZS50eXBlcy52MS5XYWxsZXRCYWNrdXAuUmVjb3ZlcnkuUXVlc3Rpb25FbnVtUgtxdWVzdGlvbklkcxIwChNlbmNyeXB0ZWRQYXNzcGhyYXNlGAIgASgMUhNlbmNyeXB0ZWRQYXNzcGhyYXNlIncKDFF1ZXN0aW9uRW51bRIPCgtTVFVGRkVEX1RPWRAAEhQKEEZBVk9SSVRFX1RFQUNIRVIQARIWChJEUklWSU5HX0lOU1RSVUNUT1IQAhIQCgxGSVJTVF9LSVNTRUQQAxIWChJDSElMREhPT0RfTklDS05BTUUQBA==');
