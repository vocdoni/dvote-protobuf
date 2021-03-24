///
//  Generated code. Do not modify.
//  source: client-store/backup.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use accountBackupDescriptor instead')
const AccountBackup$json = const {
  '1': 'AccountBackup',
  '2': const [
    const {'1': 'version', '3': 1, '4': 1, '5': 9, '10': 'version'},
    const {'1': 'questions', '3': 2, '4': 3, '5': 14, '6': '.dvote.types.v1.AccountBackup.Questions', '10': 'questions'},
    const {'1': 'auth', '3': 3, '4': 1, '5': 14, '6': '.dvote.types.v1.AccountBackup.Auth', '10': 'auth'},
    const {'1': 'key', '3': 4, '4': 1, '5': 12, '10': 'key'},
  ],
  '4': const [AccountBackup_Questions$json, AccountBackup_DeprecatedQuestions$json, AccountBackup_Auth$json],
};

@$core.Deprecated('Use accountBackupDescriptor instead')
const AccountBackup_Questions$json = const {
  '1': 'Questions',
  '2': const [
    const {'1': 'EMPTY', '2': 0},
    const {'1': 'DRIVING_INSTRUCTOR', '2': 3},
    const {'1': 'FIRST_KISSED', '2': 4},
    const {'1': 'CHILDHOOD_NICKNAME', '2': 5},
  ],
};

@$core.Deprecated('Use accountBackupDescriptor instead')
const AccountBackup_DeprecatedQuestions$json = const {
  '1': 'DeprecatedQuestions',
  '2': const [
    const {'1': 'EMPTY_DEPRECATED', '2': 0},
    const {'1': 'STUFFED_TOY', '2': 1},
    const {'1': 'FAVORITE_TEACHER', '2': 2},
  ],
};

@$core.Deprecated('Use accountBackupDescriptor instead')
const AccountBackup_Auth$json = const {
  '1': 'Auth',
  '2': const [
    const {'1': 'PIN', '2': 0},
    const {'1': 'PASS', '2': 1},
  ],
};

/// Descriptor for `AccountBackup`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List accountBackupDescriptor = $convert.base64Decode('Cg1BY2NvdW50QmFja3VwEhgKB3ZlcnNpb24YASABKAlSB3ZlcnNpb24SRQoJcXVlc3Rpb25zGAIgAygOMicuZHZvdGUudHlwZXMudjEuQWNjb3VudEJhY2t1cC5RdWVzdGlvbnNSCXF1ZXN0aW9ucxI2CgRhdXRoGAMgASgOMiIuZHZvdGUudHlwZXMudjEuQWNjb3VudEJhY2t1cC5BdXRoUgRhdXRoEhAKA2tleRgEIAEoDFIDa2V5IlgKCVF1ZXN0aW9ucxIJCgVFTVBUWRAAEhYKEkRSSVZJTkdfSU5TVFJVQ1RPUhADEhAKDEZJUlNUX0tJU1NFRBAEEhYKEkNISUxESE9PRF9OSUNLTkFNRRAFIlIKE0RlcHJlY2F0ZWRRdWVzdGlvbnMSFAoQRU1QVFlfREVQUkVDQVRFRBAAEg8KC1NUVUZGRURfVE9ZEAESFAoQRkFWT1JJVEVfVEVBQ0hFUhACIhkKBEF1dGgSBwoDUElOEAASCAoEUEFTUxAB');
