///
//  Generated code. Do not modify.
//  source: common/vote.proto
//
// @dart = 2.3
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class VoteEnvelope extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'VoteEnvelope', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'processId', protoName: 'processId')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nullifier')
    ..p<$core.int>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptionKeyIndexes', $pb.PbFieldType.P3, protoName: 'encryptionKeyIndexes')
    ..aOS(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'votePackage', protoName: 'votePackage')
    ..hasRequiredFields = false
  ;

  VoteEnvelope._() : super();
  factory VoteEnvelope() => create();
  factory VoteEnvelope.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory VoteEnvelope.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  VoteEnvelope clone() => VoteEnvelope()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  VoteEnvelope copyWith(void Function(VoteEnvelope) updates) => super.copyWith((message) => updates(message as VoteEnvelope)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static VoteEnvelope create() => VoteEnvelope._();
  VoteEnvelope createEmptyInstance() => create();
  static $pb.PbList<VoteEnvelope> createRepeated() => $pb.PbList<VoteEnvelope>();
  @$core.pragma('dart2js:noInline')
  static VoteEnvelope getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<VoteEnvelope>(create);
  static VoteEnvelope _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get processId => $_getSZ(0);
  @$pb.TagNumber(1)
  set processId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasProcessId() => $_has(0);
  @$pb.TagNumber(1)
  void clearProcessId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get proof => $_getSZ(1);
  @$pb.TagNumber(2)
  set proof($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasProof() => $_has(1);
  @$pb.TagNumber(2)
  void clearProof() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get nonce => $_getSZ(2);
  @$pb.TagNumber(3)
  set nonce($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasNonce() => $_has(2);
  @$pb.TagNumber(3)
  void clearNonce() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get nullifier => $_getSZ(3);
  @$pb.TagNumber(4)
  set nullifier($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasNullifier() => $_has(3);
  @$pb.TagNumber(4)
  void clearNullifier() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$core.int> get encryptionKeyIndexes => $_getList(4);

  @$pb.TagNumber(6)
  $core.String get votePackage => $_getSZ(5);
  @$pb.TagNumber(6)
  set votePackage($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasVotePackage() => $_has(5);
  @$pb.TagNumber(6)
  void clearVotePackage() => clearField(6);
}

class VotePackage extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'VotePackage', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  VotePackage._() : super();
  factory VotePackage() => create();
  factory VotePackage.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory VotePackage.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  VotePackage clone() => VotePackage()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  VotePackage copyWith(void Function(VotePackage) updates) => super.copyWith((message) => updates(message as VotePackage)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static VotePackage create() => VotePackage._();
  VotePackage createEmptyInstance() => create();
  static $pb.PbList<VotePackage> createRepeated() => $pb.PbList<VotePackage>();
  @$core.pragma('dart2js:noInline')
  static VotePackage getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<VotePackage>(create);
  static VotePackage _defaultInstance;
}

