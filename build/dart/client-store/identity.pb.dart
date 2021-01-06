///
//  Generated code. Do not modify.
//  source: client-store/identity.proto
//
// @dart = 2.3
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'key.pb.dart' as $0;
import '../metadata/entity.pb.dart' as $1;

import 'identity.pbenum.dart';

export 'identity.pbenum.dart';

class IdentitiesStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'IdentitiesStore', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..pc<Identity>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'items', $pb.PbFieldType.PM, subBuilder: Identity.create)
    ..hasRequiredFields = false
  ;

  IdentitiesStore._() : super();
  factory IdentitiesStore() => create();
  factory IdentitiesStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory IdentitiesStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  IdentitiesStore clone() => IdentitiesStore()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  IdentitiesStore copyWith(void Function(IdentitiesStore) updates) => super.copyWith((message) => updates(message as IdentitiesStore)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static IdentitiesStore create() => IdentitiesStore._();
  IdentitiesStore createEmptyInstance() => create();
  static $pb.PbList<IdentitiesStore> createRepeated() => $pb.PbList<IdentitiesStore>();
  @$core.pragma('dart2js:noInline')
  static IdentitiesStore getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<IdentitiesStore>(create);
  static IdentitiesStore _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Identity> get items => $_getList(0);
}

class Identity_Peers extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Identity.Peers', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..pc<$1.EntityReference>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'entities', $pb.PbFieldType.PM, subBuilder: $1.EntityReference.create)
    ..pc<PeerIdentity>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'identities', $pb.PbFieldType.PM, subBuilder: PeerIdentity.create)
    ..hasRequiredFields = false
  ;

  Identity_Peers._() : super();
  factory Identity_Peers() => create();
  factory Identity_Peers.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Identity_Peers.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Identity_Peers clone() => Identity_Peers()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Identity_Peers copyWith(void Function(Identity_Peers) updates) => super.copyWith((message) => updates(message as Identity_Peers)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Identity_Peers create() => Identity_Peers._();
  Identity_Peers createEmptyInstance() => create();
  static $pb.PbList<Identity_Peers> createRepeated() => $pb.PbList<Identity_Peers>();
  @$core.pragma('dart2js:noInline')
  static Identity_Peers getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Identity_Peers>(create);
  static Identity_Peers _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$1.EntityReference> get entities => $_getList(0);

  @$pb.TagNumber(2)
  $core.List<PeerIdentity> get identities => $_getList(1);
}

class Identity_Claim extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Identity.Claim', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'index')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'data')
    ..pPS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'tags')
    ..hasRequiredFields = false
  ;

  Identity_Claim._() : super();
  factory Identity_Claim() => create();
  factory Identity_Claim.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Identity_Claim.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Identity_Claim clone() => Identity_Claim()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Identity_Claim copyWith(void Function(Identity_Claim) updates) => super.copyWith((message) => updates(message as Identity_Claim)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Identity_Claim create() => Identity_Claim._();
  Identity_Claim createEmptyInstance() => create();
  static $pb.PbList<Identity_Claim> createRepeated() => $pb.PbList<Identity_Claim>();
  @$core.pragma('dart2js:noInline')
  static Identity_Claim getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Identity_Claim>(create);
  static Identity_Claim _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get index => $_getSZ(0);
  @$pb.TagNumber(1)
  set index($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasIndex() => $_has(0);
  @$pb.TagNumber(1)
  void clearIndex() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get proof => $_getSZ(1);
  @$pb.TagNumber(2)
  set proof($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasProof() => $_has(1);
  @$pb.TagNumber(2)
  void clearProof() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get data => $_getSZ(2);
  @$pb.TagNumber(3)
  set data($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasData() => $_has(2);
  @$pb.TagNumber(3)
  void clearData() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.String> get tags => $_getList(3);
}

class Identity extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Identity', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..e<Identity_Type>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'type', $pb.PbFieldType.OE, defaultOrMaker: Identity_Type.ECDSA, valueOf: Identity_Type.valueOf, enumValues: Identity_Type.values)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'alias')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'identityId', protoName: 'identityId')
    ..pc<$0.Key>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'keys', $pb.PbFieldType.PM, subBuilder: $0.Key.create)
    ..aOM<Identity_Peers>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'peers', subBuilder: Identity_Peers.create)
    ..pc<Identity_Claim>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'receivedClaims', $pb.PbFieldType.PM, protoName: 'receivedClaims', subBuilder: Identity_Claim.create)
    ..pc<Identity_Claim>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'issuedClaims', $pb.PbFieldType.PM, protoName: 'issuedClaims', subBuilder: Identity_Claim.create)
    ..aOS(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'version')
    ..aOB(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'backedUp', protoName: 'backedUp')
    ..m<$core.String, $core.String>(100, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'meta', entryClassName: 'Identity.MetaEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..hasRequiredFields = false
  ;

  Identity._() : super();
  factory Identity() => create();
  factory Identity.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Identity.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Identity clone() => Identity()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Identity copyWith(void Function(Identity) updates) => super.copyWith((message) => updates(message as Identity)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Identity create() => Identity._();
  Identity createEmptyInstance() => create();
  static $pb.PbList<Identity> createRepeated() => $pb.PbList<Identity>();
  @$core.pragma('dart2js:noInline')
  static Identity getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Identity>(create);
  static Identity _defaultInstance;

  @$pb.TagNumber(1)
  Identity_Type get type => $_getN(0);
  @$pb.TagNumber(1)
  set type(Identity_Type v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasType() => $_has(0);
  @$pb.TagNumber(1)
  void clearType() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get alias => $_getSZ(1);
  @$pb.TagNumber(2)
  set alias($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlias() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlias() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get identityId => $_getSZ(2);
  @$pb.TagNumber(3)
  set identityId($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasIdentityId() => $_has(2);
  @$pb.TagNumber(3)
  void clearIdentityId() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$0.Key> get keys => $_getList(3);

  @$pb.TagNumber(5)
  Identity_Peers get peers => $_getN(4);
  @$pb.TagNumber(5)
  set peers(Identity_Peers v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasPeers() => $_has(4);
  @$pb.TagNumber(5)
  void clearPeers() => clearField(5);
  @$pb.TagNumber(5)
  Identity_Peers ensurePeers() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.List<Identity_Claim> get receivedClaims => $_getList(5);

  @$pb.TagNumber(7)
  $core.List<Identity_Claim> get issuedClaims => $_getList(6);

  @$pb.TagNumber(8)
  $core.String get version => $_getSZ(7);
  @$pb.TagNumber(8)
  set version($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasVersion() => $_has(7);
  @$pb.TagNumber(8)
  void clearVersion() => clearField(8);

  @$pb.TagNumber(9)
  $core.bool get backedUp => $_getBF(8);
  @$pb.TagNumber(9)
  set backedUp($core.bool v) { $_setBool(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasBackedUp() => $_has(8);
  @$pb.TagNumber(9)
  void clearBackedUp() => clearField(9);

  @$pb.TagNumber(100)
  $core.Map<$core.String, $core.String> get meta => $_getMap(9);
}

class PeerIdentity extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PeerIdentity', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..e<PeerIdentity_Type>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'type', $pb.PbFieldType.OE, defaultOrMaker: PeerIdentity_Type.ECDSA, valueOf: PeerIdentity_Type.valueOf, enumValues: PeerIdentity_Type.values)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'alias')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'identityId', protoName: 'identityId')
    ..hasRequiredFields = false
  ;

  PeerIdentity._() : super();
  factory PeerIdentity() => create();
  factory PeerIdentity.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PeerIdentity.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PeerIdentity clone() => PeerIdentity()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PeerIdentity copyWith(void Function(PeerIdentity) updates) => super.copyWith((message) => updates(message as PeerIdentity)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PeerIdentity create() => PeerIdentity._();
  PeerIdentity createEmptyInstance() => create();
  static $pb.PbList<PeerIdentity> createRepeated() => $pb.PbList<PeerIdentity>();
  @$core.pragma('dart2js:noInline')
  static PeerIdentity getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PeerIdentity>(create);
  static PeerIdentity _defaultInstance;

  @$pb.TagNumber(1)
  PeerIdentity_Type get type => $_getN(0);
  @$pb.TagNumber(1)
  set type(PeerIdentity_Type v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasType() => $_has(0);
  @$pb.TagNumber(1)
  void clearType() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get alias => $_getSZ(1);
  @$pb.TagNumber(2)
  set alias($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAlias() => $_has(1);
  @$pb.TagNumber(2)
  void clearAlias() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get identityId => $_getSZ(2);
  @$pb.TagNumber(3)
  set identityId($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasIdentityId() => $_has(2);
  @$pb.TagNumber(3)
  void clearIdentityId() => clearField(3);
}

