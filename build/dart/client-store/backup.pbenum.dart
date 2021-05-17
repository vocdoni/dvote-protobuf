///
//  Generated code. Do not modify.
//  source: client-store/backup.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class WalletBackup_Recovery_QuestionEnum extends $pb.ProtobufEnum {
  static const WalletBackup_Recovery_QuestionEnum STUFFED_TOY = WalletBackup_Recovery_QuestionEnum._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'STUFFED_TOY');
  static const WalletBackup_Recovery_QuestionEnum FAVORITE_TEACHER = WalletBackup_Recovery_QuestionEnum._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'FAVORITE_TEACHER');
  static const WalletBackup_Recovery_QuestionEnum DRIVING_INSTRUCTOR = WalletBackup_Recovery_QuestionEnum._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'DRIVING_INSTRUCTOR');
  static const WalletBackup_Recovery_QuestionEnum FIRST_KISSED = WalletBackup_Recovery_QuestionEnum._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'FIRST_KISSED');
  static const WalletBackup_Recovery_QuestionEnum CHILDHOOD_NICKNAME = WalletBackup_Recovery_QuestionEnum._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'CHILDHOOD_NICKNAME');

  static const $core.List<WalletBackup_Recovery_QuestionEnum> values = <WalletBackup_Recovery_QuestionEnum> [
    STUFFED_TOY,
    FAVORITE_TEACHER,
    DRIVING_INSTRUCTOR,
    FIRST_KISSED,
    CHILDHOOD_NICKNAME,
  ];

  static final $core.Map<$core.int, WalletBackup_Recovery_QuestionEnum> _byValue = $pb.ProtobufEnum.initByValue(values);
  static WalletBackup_Recovery_QuestionEnum valueOf($core.int value) => _byValue[value];

  const WalletBackup_Recovery_QuestionEnum._($core.int v, $core.String n) : super(v, n);
}

