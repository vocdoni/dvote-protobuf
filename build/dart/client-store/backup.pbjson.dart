///
//  Generated code. Do not modify.
//  source: client-store/backup.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use backupLinkDescriptor instead')
const BackupLink$json = const {
  '1': 'BackupLink',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'version', '3': 2, '4': 1, '5': 9, '10': 'version'},
    const {'1': 'questions', '3': 3, '4': 3, '5': 9, '10': 'questions'},
    const {'1': 'auth', '3': 4, '4': 1, '5': 9, '10': 'auth'},
    const {'1': 'key', '3': 5, '4': 1, '5': 9, '10': 'key'},
  ],
};

/// Descriptor for `BackupLink`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List backupLinkDescriptor = $convert.base64Decode('CgpCYWNrdXBMaW5rEhIKBG5hbWUYASABKAlSBG5hbWUSGAoHdmVyc2lvbhgCIAEoCVIHdmVyc2lvbhIcCglxdWVzdGlvbnMYAyADKAlSCXF1ZXN0aW9ucxISCgRhdXRoGAQgASgJUgRhdXRoEhAKA2tleRgFIAEoCVIDa2V5');
