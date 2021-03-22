///
//  Generated code. Do not modify.
//  source: client-store/recovery.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class AccountRecovery extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AccountRecovery', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'version')
    ..pPS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'questions')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'auth')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key')
    ..hasRequiredFields = false
  ;

  AccountRecovery._() : super();
  factory AccountRecovery({
    $core.String version,
    $core.Iterable<$core.String> questions,
    $core.String auth,
    $core.String key,
  }) {
    final _result = create();
    if (version != null) {
      _result.version = version;
    }
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
  factory AccountRecovery.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AccountRecovery.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AccountRecovery clone() => AccountRecovery()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AccountRecovery copyWith(void Function(AccountRecovery) updates) => super.copyWith((message) => updates(message as AccountRecovery)) as AccountRecovery; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AccountRecovery create() => AccountRecovery._();
  AccountRecovery createEmptyInstance() => create();
  static $pb.PbList<AccountRecovery> createRepeated() => $pb.PbList<AccountRecovery>();
  @$core.pragma('dart2js:noInline')
  static AccountRecovery getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AccountRecovery>(create);
  static AccountRecovery _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get version => $_getSZ(0);
  @$pb.TagNumber(1)
  set version($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasVersion() => $_has(0);
  @$pb.TagNumber(1)
  void clearVersion() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.String> get questions => $_getList(1);

  @$pb.TagNumber(3)
  $core.String get auth => $_getSZ(2);
  @$pb.TagNumber(3)
  set auth($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAuth() => $_has(2);
  @$pb.TagNumber(3)
  void clearAuth() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get key => $_getSZ(3);
  @$pb.TagNumber(4)
  set key($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasKey() => $_has(3);
  @$pb.TagNumber(4)
  void clearKey() => clearField(4);
}

