///
//  Generated code. Do not modify.
//  source: identity.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

import 'key.pb.dart' as $0;
import 'entity.pb.dart' as $1;

import 'identity.pbenum.dart';

export 'identity.pbenum.dart';

class IdentitiesStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('IdentitiesStore', package: const $pb.PackageName('dvote'))
    ..pc<Identity>(1, 'items', $pb.PbFieldType.PM,Identity.create)
    ..hasRequiredFields = false
  ;

  IdentitiesStore._() : super();
  factory IdentitiesStore() => create();
  factory IdentitiesStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory IdentitiesStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  IdentitiesStore clone() => IdentitiesStore()..mergeFromMessage(this);
  IdentitiesStore copyWith(void Function(IdentitiesStore) updates) => super.copyWith((message) => updates(message as IdentitiesStore));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static IdentitiesStore create() => IdentitiesStore._();
  IdentitiesStore createEmptyInstance() => create();
  static $pb.PbList<IdentitiesStore> createRepeated() => $pb.PbList<IdentitiesStore>();
  static IdentitiesStore getDefault() => _defaultInstance ??= create()..freeze();
  static IdentitiesStore _defaultInstance;

  $core.List<Identity> get items => $_getList(0);
}

class Identity_Peers extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Identity.Peers', package: const $pb.PackageName('dvote'))
    ..pc<$1.EntityReference>(1, 'entities', $pb.PbFieldType.PM,$1.EntityReference.create)
    ..pc<PeerIdentity>(2, 'identities', $pb.PbFieldType.PM,PeerIdentity.create)
    ..hasRequiredFields = false
  ;

  Identity_Peers._() : super();
  factory Identity_Peers() => create();
  factory Identity_Peers.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Identity_Peers.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Identity_Peers clone() => Identity_Peers()..mergeFromMessage(this);
  Identity_Peers copyWith(void Function(Identity_Peers) updates) => super.copyWith((message) => updates(message as Identity_Peers));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Identity_Peers create() => Identity_Peers._();
  Identity_Peers createEmptyInstance() => create();
  static $pb.PbList<Identity_Peers> createRepeated() => $pb.PbList<Identity_Peers>();
  static Identity_Peers getDefault() => _defaultInstance ??= create()..freeze();
  static Identity_Peers _defaultInstance;

  $core.List<$1.EntityReference> get entities => $_getList(0);

  $core.List<PeerIdentity> get identities => $_getList(1);
}

class Identity_Claim extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Identity.Claim', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'index')
    ..aOS(2, 'proof')
    ..aOS(3, 'data')
    ..pPS(4, 'tags')
    ..hasRequiredFields = false
  ;

  Identity_Claim._() : super();
  factory Identity_Claim() => create();
  factory Identity_Claim.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Identity_Claim.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Identity_Claim clone() => Identity_Claim()..mergeFromMessage(this);
  Identity_Claim copyWith(void Function(Identity_Claim) updates) => super.copyWith((message) => updates(message as Identity_Claim));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Identity_Claim create() => Identity_Claim._();
  Identity_Claim createEmptyInstance() => create();
  static $pb.PbList<Identity_Claim> createRepeated() => $pb.PbList<Identity_Claim>();
  static Identity_Claim getDefault() => _defaultInstance ??= create()..freeze();
  static Identity_Claim _defaultInstance;

  $core.String get index => $_getS(0, '');
  set index($core.String v) { $_setString(0, v); }
  $core.bool hasIndex() => $_has(0);
  void clearIndex() => clearField(1);

  $core.String get proof => $_getS(1, '');
  set proof($core.String v) { $_setString(1, v); }
  $core.bool hasProof() => $_has(1);
  void clearProof() => clearField(2);

  $core.String get data => $_getS(2, '');
  set data($core.String v) { $_setString(2, v); }
  $core.bool hasData() => $_has(2);
  void clearData() => clearField(3);

  $core.List<$core.String> get tags => $_getList(3);
}

class Identity extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Identity', package: const $pb.PackageName('dvote'))
    ..e<Identity_Type>(1, 'type', $pb.PbFieldType.OE, Identity_Type.ECDSA_SECP256k1, Identity_Type.valueOf, Identity_Type.values)
    ..aOS(2, 'alias')
    ..aOS(3, 'identityId')
    ..pc<$0.Key>(4, 'keys', $pb.PbFieldType.PM,$0.Key.create)
    ..a<Identity_Peers>(5, 'peers', $pb.PbFieldType.OM, Identity_Peers.getDefault, Identity_Peers.create)
    ..pc<Identity_Claim>(6, 'receivedClaims', $pb.PbFieldType.PM,Identity_Claim.create)
    ..pc<Identity_Claim>(7, 'issuedClaims', $pb.PbFieldType.PM,Identity_Claim.create)
    ..m<$core.String, $core.String>(100, 'meta', 'Identity.MetaEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..hasRequiredFields = false
  ;

  Identity._() : super();
  factory Identity() => create();
  factory Identity.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Identity.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Identity clone() => Identity()..mergeFromMessage(this);
  Identity copyWith(void Function(Identity) updates) => super.copyWith((message) => updates(message as Identity));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Identity create() => Identity._();
  Identity createEmptyInstance() => create();
  static $pb.PbList<Identity> createRepeated() => $pb.PbList<Identity>();
  static Identity getDefault() => _defaultInstance ??= create()..freeze();
  static Identity _defaultInstance;

  Identity_Type get type => $_getN(0);
  set type(Identity_Type v) { setField(1, v); }
  $core.bool hasType() => $_has(0);
  void clearType() => clearField(1);

  $core.String get alias => $_getS(1, '');
  set alias($core.String v) { $_setString(1, v); }
  $core.bool hasAlias() => $_has(1);
  void clearAlias() => clearField(2);

  $core.String get identityId => $_getS(2, '');
  set identityId($core.String v) { $_setString(2, v); }
  $core.bool hasIdentityId() => $_has(2);
  void clearIdentityId() => clearField(3);

  $core.List<$0.Key> get keys => $_getList(3);

  Identity_Peers get peers => $_getN(4);
  set peers(Identity_Peers v) { setField(5, v); }
  $core.bool hasPeers() => $_has(4);
  void clearPeers() => clearField(5);

  $core.List<Identity_Claim> get receivedClaims => $_getList(5);

  $core.List<Identity_Claim> get issuedClaims => $_getList(6);

  $core.Map<$core.String, $core.String> get meta => $_getMap(7);
}

class PeerIdentity extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PeerIdentity', package: const $pb.PackageName('dvote'))
    ..e<PeerIdentity_Type>(1, 'type', $pb.PbFieldType.OE, PeerIdentity_Type.ECDSA_SECP256k1, PeerIdentity_Type.valueOf, PeerIdentity_Type.values)
    ..aOS(2, 'alias')
    ..aOS(3, 'identityId')
    ..hasRequiredFields = false
  ;

  PeerIdentity._() : super();
  factory PeerIdentity() => create();
  factory PeerIdentity.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PeerIdentity.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PeerIdentity clone() => PeerIdentity()..mergeFromMessage(this);
  PeerIdentity copyWith(void Function(PeerIdentity) updates) => super.copyWith((message) => updates(message as PeerIdentity));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PeerIdentity create() => PeerIdentity._();
  PeerIdentity createEmptyInstance() => create();
  static $pb.PbList<PeerIdentity> createRepeated() => $pb.PbList<PeerIdentity>();
  static PeerIdentity getDefault() => _defaultInstance ??= create()..freeze();
  static PeerIdentity _defaultInstance;

  PeerIdentity_Type get type => $_getN(0);
  set type(PeerIdentity_Type v) { setField(1, v); }
  $core.bool hasType() => $_has(0);
  void clearType() => clearField(1);

  $core.String get alias => $_getS(1, '');
  set alias($core.String v) { $_setString(1, v); }
  $core.bool hasAlias() => $_has(1);
  void clearAlias() => clearField(2);

  $core.String get identityId => $_getS(2, '');
  set identityId($core.String v) { $_setString(2, v); }
  $core.bool hasIdentityId() => $_has(2);
  void clearIdentityId() => clearField(3);
}

