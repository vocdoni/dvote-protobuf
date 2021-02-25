///
//  Generated code. Do not modify.
//  source: client-store/backup.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class BackupLink extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'BackupLink', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'version')
    ..pPS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'questions')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'auth')
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key')
    ..hasRequiredFields = false
  ;

  BackupLink._() : super();
  factory BackupLink({
    $core.String name,
    $core.String version,
    $core.Iterable<$core.String> questions,
    $core.String auth,
    $core.String key,
  }) {
    final _result = create();
    if (name != null) {
      _result.name = name;
    }
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
  factory BackupLink.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BackupLink.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BackupLink clone() => BackupLink()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BackupLink copyWith(void Function(BackupLink) updates) => super.copyWith((message) => updates(message as BackupLink)) as BackupLink; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BackupLink create() => BackupLink._();
  BackupLink createEmptyInstance() => create();
  static $pb.PbList<BackupLink> createRepeated() => $pb.PbList<BackupLink>();
  @$core.pragma('dart2js:noInline')
  static BackupLink getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BackupLink>(create);
  static BackupLink _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get version => $_getSZ(1);
  @$pb.TagNumber(2)
  set version($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasVersion() => $_has(1);
  @$pb.TagNumber(2)
  void clearVersion() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.String> get questions => $_getList(2);

  @$pb.TagNumber(4)
  $core.String get auth => $_getSZ(3);
  @$pb.TagNumber(4)
  set auth($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasAuth() => $_has(3);
  @$pb.TagNumber(4)
  void clearAuth() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get key => $_getSZ(4);
  @$pb.TagNumber(5)
  set key($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasKey() => $_has(4);
  @$pb.TagNumber(5)
  void clearKey() => clearField(5);
}

