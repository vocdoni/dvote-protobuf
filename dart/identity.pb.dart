///
//  Generated code. Do not modify.
//  source: identity.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

import 'key.pb.dart' as $0;

class Identity_Entity extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Identity.Entity', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'entityId')
    ..aOS(2, 'resolverAddress')
    ..aOS(3, 'networkId')
    ..pPS(4, 'entryPoints')
    ..hasRequiredFields = false
  ;

  Identity_Entity._() : super();
  factory Identity_Entity() => create();
  factory Identity_Entity.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Identity_Entity.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Identity_Entity clone() => Identity_Entity()..mergeFromMessage(this);
  Identity_Entity copyWith(void Function(Identity_Entity) updates) => super.copyWith((message) => updates(message as Identity_Entity));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Identity_Entity create() => Identity_Entity._();
  Identity_Entity createEmptyInstance() => create();
  static $pb.PbList<Identity_Entity> createRepeated() => $pb.PbList<Identity_Entity>();
  static Identity_Entity getDefault() => _defaultInstance ??= create()..freeze();
  static Identity_Entity _defaultInstance;

  $core.String get entityId => $_getS(0, '');
  set entityId($core.String v) { $_setString(0, v); }
  $core.bool hasEntityId() => $_has(0);
  void clearEntityId() => clearField(1);

  $core.String get resolverAddress => $_getS(1, '');
  set resolverAddress($core.String v) { $_setString(1, v); }
  $core.bool hasResolverAddress() => $_has(1);
  void clearResolverAddress() => clearField(2);

  $core.String get networkId => $_getS(2, '');
  set networkId($core.String v) { $_setString(2, v); }
  $core.bool hasNetworkId() => $_has(2);
  void clearNetworkId() => clearField(3);

  $core.List<$core.String> get entryPoints => $_getList(3);
}

class Identity_Claim extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Identity.Claim', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'index')
    ..aOS(2, 'proof')
    ..aOS(3, 'data')
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
}

class Identity extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Identity', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'name')
    ..aOS(2, 'identityId')
    ..pc<$0.Key>(3, 'keys', $pb.PbFieldType.PM,$0.Key.create)
    ..pc<Identity_Entity>(4, 'subscriptions', $pb.PbFieldType.PM,Identity_Entity.create)
    ..pc<Identity_Claim>(5, 'claims', $pb.PbFieldType.PM,Identity_Claim.create)
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

  $core.String get name => $_getS(0, '');
  set name($core.String v) { $_setString(0, v); }
  $core.bool hasName() => $_has(0);
  void clearName() => clearField(1);

  $core.String get identityId => $_getS(1, '');
  set identityId($core.String v) { $_setString(1, v); }
  $core.bool hasIdentityId() => $_has(1);
  void clearIdentityId() => clearField(2);

  $core.List<$0.Key> get keys => $_getList(2);

  $core.List<Identity_Entity> get subscriptions => $_getList(3);

  $core.List<Identity_Claim> get claims => $_getList(4);
}

class IdentitiesStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('IdentitiesStore', package: const $pb.PackageName('dvote'))
    ..pc<Identity>(1, 'identities', $pb.PbFieldType.PM,Identity.create)
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

  $core.List<Identity> get identities => $_getList(0);
}

