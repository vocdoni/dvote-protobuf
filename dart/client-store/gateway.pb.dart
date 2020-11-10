///
//  Generated code. Do not modify.
//  source: client-store/gateway.proto
//
// @dart = 2.3
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class BootNodeGateways_NetworkNodes_DVote extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'BootNodeGateways.NetworkNodes.DVote', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'uri')
    ..pPS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'apis')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'pubKey', protoName: 'pubKey')
    ..hasRequiredFields = false
  ;

  BootNodeGateways_NetworkNodes_DVote._() : super();
  factory BootNodeGateways_NetworkNodes_DVote() => create();
  factory BootNodeGateways_NetworkNodes_DVote.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BootNodeGateways_NetworkNodes_DVote.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BootNodeGateways_NetworkNodes_DVote clone() => BootNodeGateways_NetworkNodes_DVote()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BootNodeGateways_NetworkNodes_DVote copyWith(void Function(BootNodeGateways_NetworkNodes_DVote) updates) => super.copyWith((message) => updates(message as BootNodeGateways_NetworkNodes_DVote)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BootNodeGateways_NetworkNodes_DVote create() => BootNodeGateways_NetworkNodes_DVote._();
  BootNodeGateways_NetworkNodes_DVote createEmptyInstance() => create();
  static $pb.PbList<BootNodeGateways_NetworkNodes_DVote> createRepeated() => $pb.PbList<BootNodeGateways_NetworkNodes_DVote>();
  @$core.pragma('dart2js:noInline')
  static BootNodeGateways_NetworkNodes_DVote getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BootNodeGateways_NetworkNodes_DVote>(create);
  static BootNodeGateways_NetworkNodes_DVote _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get uri => $_getSZ(0);
  @$pb.TagNumber(1)
  set uri($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasUri() => $_has(0);
  @$pb.TagNumber(1)
  void clearUri() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.String> get apis => $_getList(1);

  @$pb.TagNumber(3)
  $core.String get pubKey => $_getSZ(2);
  @$pb.TagNumber(3)
  set pubKey($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasPubKey() => $_has(2);
  @$pb.TagNumber(3)
  void clearPubKey() => clearField(3);
}

class BootNodeGateways_NetworkNodes_Web3 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'BootNodeGateways.NetworkNodes.Web3', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'uri')
    ..hasRequiredFields = false
  ;

  BootNodeGateways_NetworkNodes_Web3._() : super();
  factory BootNodeGateways_NetworkNodes_Web3() => create();
  factory BootNodeGateways_NetworkNodes_Web3.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BootNodeGateways_NetworkNodes_Web3.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BootNodeGateways_NetworkNodes_Web3 clone() => BootNodeGateways_NetworkNodes_Web3()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BootNodeGateways_NetworkNodes_Web3 copyWith(void Function(BootNodeGateways_NetworkNodes_Web3) updates) => super.copyWith((message) => updates(message as BootNodeGateways_NetworkNodes_Web3)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BootNodeGateways_NetworkNodes_Web3 create() => BootNodeGateways_NetworkNodes_Web3._();
  BootNodeGateways_NetworkNodes_Web3 createEmptyInstance() => create();
  static $pb.PbList<BootNodeGateways_NetworkNodes_Web3> createRepeated() => $pb.PbList<BootNodeGateways_NetworkNodes_Web3>();
  @$core.pragma('dart2js:noInline')
  static BootNodeGateways_NetworkNodes_Web3 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BootNodeGateways_NetworkNodes_Web3>(create);
  static BootNodeGateways_NetworkNodes_Web3 _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get uri => $_getSZ(0);
  @$pb.TagNumber(1)
  set uri($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasUri() => $_has(0);
  @$pb.TagNumber(1)
  void clearUri() => clearField(1);
}

class BootNodeGateways_NetworkNodes extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'BootNodeGateways.NetworkNodes', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote'), createEmptyInstance: create)
    ..pc<BootNodeGateways_NetworkNodes_DVote>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'dvote', $pb.PbFieldType.PM, subBuilder: BootNodeGateways_NetworkNodes_DVote.create)
    ..pc<BootNodeGateways_NetworkNodes_Web3>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'web3', $pb.PbFieldType.PM, subBuilder: BootNodeGateways_NetworkNodes_Web3.create)
    ..hasRequiredFields = false
  ;

  BootNodeGateways_NetworkNodes._() : super();
  factory BootNodeGateways_NetworkNodes() => create();
  factory BootNodeGateways_NetworkNodes.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BootNodeGateways_NetworkNodes.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BootNodeGateways_NetworkNodes clone() => BootNodeGateways_NetworkNodes()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BootNodeGateways_NetworkNodes copyWith(void Function(BootNodeGateways_NetworkNodes) updates) => super.copyWith((message) => updates(message as BootNodeGateways_NetworkNodes)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BootNodeGateways_NetworkNodes create() => BootNodeGateways_NetworkNodes._();
  BootNodeGateways_NetworkNodes createEmptyInstance() => create();
  static $pb.PbList<BootNodeGateways_NetworkNodes> createRepeated() => $pb.PbList<BootNodeGateways_NetworkNodes>();
  @$core.pragma('dart2js:noInline')
  static BootNodeGateways_NetworkNodes getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BootNodeGateways_NetworkNodes>(create);
  static BootNodeGateways_NetworkNodes _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<BootNodeGateways_NetworkNodes_DVote> get dvote => $_getList(0);

  @$pb.TagNumber(2)
  $core.List<BootNodeGateways_NetworkNodes_Web3> get web3 => $_getList(1);
}

class BootNodeGateways extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'BootNodeGateways', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote'), createEmptyInstance: create)
    ..aOM<BootNodeGateways_NetworkNodes>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'homestead', subBuilder: BootNodeGateways_NetworkNodes.create)
    ..aOM<BootNodeGateways_NetworkNodes>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'goerli', subBuilder: BootNodeGateways_NetworkNodes.create)
    ..aOM<BootNodeGateways_NetworkNodes>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'xdai', subBuilder: BootNodeGateways_NetworkNodes.create)
    ..aOM<BootNodeGateways_NetworkNodes>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'sokol', subBuilder: BootNodeGateways_NetworkNodes.create)
    ..m<$core.String, $core.String>(100, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'meta', entryClassName: 'BootNodeGateways.MetaEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote'))
    ..hasRequiredFields = false
  ;

  BootNodeGateways._() : super();
  factory BootNodeGateways() => create();
  factory BootNodeGateways.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BootNodeGateways.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BootNodeGateways clone() => BootNodeGateways()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BootNodeGateways copyWith(void Function(BootNodeGateways) updates) => super.copyWith((message) => updates(message as BootNodeGateways)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BootNodeGateways create() => BootNodeGateways._();
  BootNodeGateways createEmptyInstance() => create();
  static $pb.PbList<BootNodeGateways> createRepeated() => $pb.PbList<BootNodeGateways>();
  @$core.pragma('dart2js:noInline')
  static BootNodeGateways getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BootNodeGateways>(create);
  static BootNodeGateways _defaultInstance;

  @$pb.TagNumber(1)
  BootNodeGateways_NetworkNodes get homestead => $_getN(0);
  @$pb.TagNumber(1)
  set homestead(BootNodeGateways_NetworkNodes v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasHomestead() => $_has(0);
  @$pb.TagNumber(1)
  void clearHomestead() => clearField(1);
  @$pb.TagNumber(1)
  BootNodeGateways_NetworkNodes ensureHomestead() => $_ensure(0);

  @$pb.TagNumber(2)
  BootNodeGateways_NetworkNodes get goerli => $_getN(1);
  @$pb.TagNumber(2)
  set goerli(BootNodeGateways_NetworkNodes v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasGoerli() => $_has(1);
  @$pb.TagNumber(2)
  void clearGoerli() => clearField(2);
  @$pb.TagNumber(2)
  BootNodeGateways_NetworkNodes ensureGoerli() => $_ensure(1);

  @$pb.TagNumber(3)
  BootNodeGateways_NetworkNodes get xdai => $_getN(2);
  @$pb.TagNumber(3)
  set xdai(BootNodeGateways_NetworkNodes v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasXdai() => $_has(2);
  @$pb.TagNumber(3)
  void clearXdai() => clearField(3);
  @$pb.TagNumber(3)
  BootNodeGateways_NetworkNodes ensureXdai() => $_ensure(2);

  @$pb.TagNumber(4)
  BootNodeGateways_NetworkNodes get sokol => $_getN(3);
  @$pb.TagNumber(4)
  set sokol(BootNodeGateways_NetworkNodes v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasSokol() => $_has(3);
  @$pb.TagNumber(4)
  void clearSokol() => clearField(4);
  @$pb.TagNumber(4)
  BootNodeGateways_NetworkNodes ensureSokol() => $_ensure(3);

  @$pb.TagNumber(100)
  $core.Map<$core.String, $core.String> get meta => $_getMap(4);
}
