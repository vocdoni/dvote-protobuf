///
//  Generated code. Do not modify.
//  source: client-store/backup.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'backup.pbenum.dart';

export 'backup.pbenum.dart';

class AccountBackup extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AccountBackup', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..pc<AccountBackup_Questions>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'questions', $pb.PbFieldType.PE, valueOf: AccountBackup_Questions.valueOf, enumValues: AccountBackup_Questions.values)
    ..e<AccountBackup_Auth>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'auth', $pb.PbFieldType.OE, defaultOrMaker: AccountBackup_Auth.PIN, valueOf: AccountBackup_Auth.valueOf, enumValues: AccountBackup_Auth.values)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  AccountBackup._() : super();
  factory AccountBackup({
    $core.Iterable<AccountBackup_Questions> questions,
    AccountBackup_Auth auth,
    $core.List<$core.int> key,
  }) {
    final _result = create();
    if (questions != null) {
      _result.questions.addAll(questions);
    }
    if (auth != null) {
      _result.auth = auth;
    }
    if (key != null) {
      _result.key = key;
    }
    return _result;
  }
  factory AccountBackup.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AccountBackup.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AccountBackup clone() => AccountBackup()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AccountBackup copyWith(void Function(AccountBackup) updates) => super.copyWith((message) => updates(message as AccountBackup)) as AccountBackup; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AccountBackup create() => AccountBackup._();
  AccountBackup createEmptyInstance() => create();
  static $pb.PbList<AccountBackup> createRepeated() => $pb.PbList<AccountBackup>();
  @$core.pragma('dart2js:noInline')
  static AccountBackup getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AccountBackup>(create);
  static AccountBackup _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<AccountBackup_Questions> get questions => $_getList(0);

  @$pb.TagNumber(2)
  AccountBackup_Auth get auth => $_getN(1);
  @$pb.TagNumber(2)
  set auth(AccountBackup_Auth v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasAuth() => $_has(1);
  @$pb.TagNumber(2)
  void clearAuth() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get key => $_getN(2);
  @$pb.TagNumber(3)
  set key($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasKey() => $_has(2);
  @$pb.TagNumber(3)
  void clearKey() => clearField(3);
}

