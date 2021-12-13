///
//  Generated code. Do not modify.
//  source: client-store/backup.proto
//
// @dart = 2.12
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
    const {'1': 'FAVORITE_BOOK', '2': 0},
    const {'1': 'FIRST_PET', '2': 1},
    const {'1': 'WHERE_HIGH_SCHOOL_COLLEGE', '2': 2},
    const {'1': 'CITY_OF_BIRTH', '2': 3},
    const {'1': 'FAVORITE_CHILDHOOD_FRIEND', '2': 4},
    const {'1': 'WHERE_FATHER_AND_MOTHER_MET', '2': 5},
    const {'1': 'FAVORITE_MOVIE', '2': 6},
    const {'1': 'FAVORITE_SPORT_HIGH_SCHOOL', '2': 7},
    const {'1': 'FAVORITE_TEACHER_HIGH_SCHOOL', '2': 8},
    const {'1': 'FAVORITE_BAND', '2': 9},
    const {'1': 'CHILDHOOD_SPORTS_HERO', '2': 10},
    const {'1': 'COMPANY_FIRST_JOB', '2': 11},
    const {'1': 'CHILD_NICKNAME', '2': 12},
    const {'1': 'NAME_FIRST_PARTNER', '2': 13},
    const {'1': 'WHERE_MEET_PARTNER', '2': 14},
    const {'1': 'MOTHER_MAIDEN_NAME', '2': 15},
    const {'1': 'MATERNAL_GRANDMOTHER_FULL_NAME', '2': 16},
    const {'1': 'PARENTAL_GRANDMOTHER_FULL_NAME', '2': 17},
    const {'1': 'NAME_OLDEST_COUSIN', '2': 18},
  ],
};

/// Descriptor for `WalletBackup`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List walletBackupDescriptor = $convert.base64Decode('CgxXYWxsZXRCYWNrdXASEgoEbmFtZRgBIAEoCVIEbmFtZRIcCgl0aW1lc3RhbXAYAiABKARSCXRpbWVzdGFtcBIuCgZ3YWxsZXQYAyABKAsyFi5kdm90ZS50eXBlcy52MS5XYWxsZXRSBndhbGxldBJVChJwYXNzcGhyYXNlUmVjb3ZlcnkYBCABKAsyJS5kdm90ZS50eXBlcy52MS5XYWxsZXRCYWNrdXAuUmVjb3ZlcnlSEnBhc3NwaHJhc2VSZWNvdmVyeRqOBQoIUmVjb3ZlcnkSVAoLcXVlc3Rpb25JZHMYASADKA4yMi5kdm90ZS50eXBlcy52MS5XYWxsZXRCYWNrdXAuUmVjb3ZlcnkuUXVlc3Rpb25FbnVtUgtxdWVzdGlvbklkcxIwChNlbmNyeXB0ZWRQYXNzcGhyYXNlGAIgASgMUhNlbmNyeXB0ZWRQYXNzcGhyYXNlIvkDCgxRdWVzdGlvbkVudW0SEQoNRkFWT1JJVEVfQk9PSxAAEg0KCUZJUlNUX1BFVBABEh0KGVdIRVJFX0hJR0hfU0NIT09MX0NPTExFR0UQAhIRCg1DSVRZX09GX0JJUlRIEAMSHQoZRkFWT1JJVEVfQ0hJTERIT09EX0ZSSUVORBAEEh8KG1dIRVJFX0ZBVEhFUl9BTkRfTU9USEVSX01FVBAFEhIKDkZBVk9SSVRFX01PVklFEAYSHgoaRkFWT1JJVEVfU1BPUlRfSElHSF9TQ0hPT0wQBxIgChxGQVZPUklURV9URUFDSEVSX0hJR0hfU0NIT09MEAgSEQoNRkFWT1JJVEVfQkFORBAJEhkKFUNISUxESE9PRF9TUE9SVFNfSEVSTxAKEhUKEUNPTVBBTllfRklSU1RfSk9CEAsSEgoOQ0hJTERfTklDS05BTUUQDBIWChJOQU1FX0ZJUlNUX1BBUlRORVIQDRIWChJXSEVSRV9NRUVUX1BBUlRORVIQDhIWChJNT1RIRVJfTUFJREVOX05BTUUQDxIiCh5NQVRFUk5BTF9HUkFORE1PVEhFUl9GVUxMX05BTUUQEBIiCh5QQVJFTlRBTF9HUkFORE1PVEhFUl9GVUxMX05BTUUQERIWChJOQU1FX09MREVTVF9DT1VTSU4QEg==');
