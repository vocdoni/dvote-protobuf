///
//  Generated code. Do not modify.
//  source: client-store/backup.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class AccountBackup_Questions extends $pb.ProtobufEnum {
  static const AccountBackup_Questions EMPTY = AccountBackup_Questions._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'EMPTY');
  static const AccountBackup_Questions STUFFED_TOY = AccountBackup_Questions._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'STUFFED_TOY');
  static const AccountBackup_Questions FAVORITE_TEACHER = AccountBackup_Questions._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'FAVORITE_TEACHER');
  static const AccountBackup_Questions DRIVING_INSTRUCTOR = AccountBackup_Questions._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'DRIVING_INSTRUCTOR');
  static const AccountBackup_Questions FIRST_KISSED = AccountBackup_Questions._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'FIRST_KISSED');
  static const AccountBackup_Questions CHILDHOOD_NICKNAME = AccountBackup_Questions._(5, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'CHILDHOOD_NICKNAME');

  static const $core.List<AccountBackup_Questions> values = <AccountBackup_Questions> [
    EMPTY,
    STUFFED_TOY,
    FAVORITE_TEACHER,
    DRIVING_INSTRUCTOR,
    FIRST_KISSED,
    CHILDHOOD_NICKNAME,
  ];

  static final $core.Map<$core.int, AccountBackup_Questions> _byValue = $pb.ProtobufEnum.initByValue(values);
  static AccountBackup_Questions valueOf($core.int value) => _byValue[value];

  const AccountBackup_Questions._($core.int v, $core.String n) : super(v, n);
}

class AccountBackup_DeprecatedQuestions extends $pb.ProtobufEnum {
  static const AccountBackup_DeprecatedQuestions EMPTY_DEPRECATED = AccountBackup_DeprecatedQuestions._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'EMPTY_DEPRECATED');

  static const $core.List<AccountBackup_DeprecatedQuestions> values = <AccountBackup_DeprecatedQuestions> [
    EMPTY_DEPRECATED,
  ];

  static final $core.Map<$core.int, AccountBackup_DeprecatedQuestions> _byValue = $pb.ProtobufEnum.initByValue(values);
  static AccountBackup_DeprecatedQuestions valueOf($core.int value) => _byValue[value];

  const AccountBackup_DeprecatedQuestions._($core.int v, $core.String n) : super(v, n);
}

class AccountBackup_Auth extends $pb.ProtobufEnum {
  static const AccountBackup_Auth PIN = AccountBackup_Auth._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PIN');
  static const AccountBackup_Auth PASS = AccountBackup_Auth._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PASS');

  static const $core.List<AccountBackup_Auth> values = <AccountBackup_Auth> [
    PIN,
    PASS,
  ];

  static final $core.Map<$core.int, AccountBackup_Auth> _byValue = $pb.ProtobufEnum.initByValue(values);
  static AccountBackup_Auth valueOf($core.int value) => _byValue[value];

  const AccountBackup_Auth._($core.int v, $core.String n) : super(v, n);
}

