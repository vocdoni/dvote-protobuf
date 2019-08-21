///
//  Generated code. Do not modify.
//  source: entity.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

import 'gateway.pb.dart' as $0;

class EntityMetadataStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityMetadataStore', package: const $pb.PackageName('dvote'))
    ..pc<EntityMetadata>(1, 'items', $pb.PbFieldType.PM,EntityMetadata.create)
    ..hasRequiredFields = false
  ;

  EntityMetadataStore._() : super();
  factory EntityMetadataStore() => create();
  factory EntityMetadataStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadataStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntityMetadataStore clone() => EntityMetadataStore()..mergeFromMessage(this);
  EntityMetadataStore copyWith(void Function(EntityMetadataStore) updates) => super.copyWith((message) => updates(message as EntityMetadataStore));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadataStore create() => EntityMetadataStore._();
  EntityMetadataStore createEmptyInstance() => create();
  static $pb.PbList<EntityMetadataStore> createRepeated() => $pb.PbList<EntityMetadataStore>();
  static EntityMetadataStore getDefault() => _defaultInstance ??= create()..freeze();
  static EntityMetadataStore _defaultInstance;

  $core.List<EntityMetadata> get items => $_getList(0);
}

class EntityMetadata_ContractsInfo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityMetadata.ContractsInfo', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'resolverAddress')
    ..aOS(2, 'votingAddress')
    ..aOS(3, 'networkId')
    ..hasRequiredFields = false
  ;

  EntityMetadata_ContractsInfo._() : super();
  factory EntityMetadata_ContractsInfo() => create();
  factory EntityMetadata_ContractsInfo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata_ContractsInfo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntityMetadata_ContractsInfo clone() => EntityMetadata_ContractsInfo()..mergeFromMessage(this);
  EntityMetadata_ContractsInfo copyWith(void Function(EntityMetadata_ContractsInfo) updates) => super.copyWith((message) => updates(message as EntityMetadata_ContractsInfo));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_ContractsInfo create() => EntityMetadata_ContractsInfo._();
  EntityMetadata_ContractsInfo createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata_ContractsInfo> createRepeated() => $pb.PbList<EntityMetadata_ContractsInfo>();
  static EntityMetadata_ContractsInfo getDefault() => _defaultInstance ??= create()..freeze();
  static EntityMetadata_ContractsInfo _defaultInstance;

  $core.String get resolverAddress => $_getS(0, '');
  set resolverAddress($core.String v) { $_setString(0, v); }
  $core.bool hasResolverAddress() => $_has(0);
  void clearResolverAddress() => clearField(1);

  $core.String get votingAddress => $_getS(1, '');
  set votingAddress($core.String v) { $_setString(1, v); }
  $core.bool hasVotingAddress() => $_has(1);
  void clearVotingAddress() => clearField(2);

  $core.String get networkId => $_getS(2, '');
  set networkId($core.String v) { $_setString(2, v); }
  $core.bool hasNetworkId() => $_has(2);
  void clearNetworkId() => clearField(3);
}

class EntityMetadata_VotingProcesses extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityMetadata.VotingProcesses', package: const $pb.PackageName('dvote'))
    ..pPS(1, 'active')
    ..pPS(2, 'ended')
    ..hasRequiredFields = false
  ;

  EntityMetadata_VotingProcesses._() : super();
  factory EntityMetadata_VotingProcesses() => create();
  factory EntityMetadata_VotingProcesses.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata_VotingProcesses.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntityMetadata_VotingProcesses clone() => EntityMetadata_VotingProcesses()..mergeFromMessage(this);
  EntityMetadata_VotingProcesses copyWith(void Function(EntityMetadata_VotingProcesses) updates) => super.copyWith((message) => updates(message as EntityMetadata_VotingProcesses));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_VotingProcesses create() => EntityMetadata_VotingProcesses._();
  EntityMetadata_VotingProcesses createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata_VotingProcesses> createRepeated() => $pb.PbList<EntityMetadata_VotingProcesses>();
  static EntityMetadata_VotingProcesses getDefault() => _defaultInstance ??= create()..freeze();
  static EntityMetadata_VotingProcesses _defaultInstance;

  $core.List<$core.String> get active => $_getList(0);

  $core.List<$core.String> get ended => $_getList(1);
}

class EntityMetadata_Media extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityMetadata.Media', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'avatar')
    ..aOS(2, 'header')
    ..hasRequiredFields = false
  ;

  EntityMetadata_Media._() : super();
  factory EntityMetadata_Media() => create();
  factory EntityMetadata_Media.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata_Media.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntityMetadata_Media clone() => EntityMetadata_Media()..mergeFromMessage(this);
  EntityMetadata_Media copyWith(void Function(EntityMetadata_Media) updates) => super.copyWith((message) => updates(message as EntityMetadata_Media));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_Media create() => EntityMetadata_Media._();
  EntityMetadata_Media createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata_Media> createRepeated() => $pb.PbList<EntityMetadata_Media>();
  static EntityMetadata_Media getDefault() => _defaultInstance ??= create()..freeze();
  static EntityMetadata_Media _defaultInstance;

  $core.String get avatar => $_getS(0, '');
  set avatar($core.String v) { $_setString(0, v); }
  $core.bool hasAvatar() => $_has(0);
  void clearAvatar() => clearField(1);

  $core.String get header => $_getS(1, '');
  set header($core.String v) { $_setString(1, v); }
  $core.bool hasHeader() => $_has(1);
  void clearHeader() => clearField(2);
}

class EntityMetadata_Action_ImageSource extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityMetadata.Action.ImageSource', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'type')
    ..aOS(2, 'name')
    ..aOS(3, 'orientation')
    ..aOS(4, 'overlay')
    ..m<$core.String, $core.String>(5, 'caption', 'EntityMetadata.Action.ImageSource.CaptionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..hasRequiredFields = false
  ;

  EntityMetadata_Action_ImageSource._() : super();
  factory EntityMetadata_Action_ImageSource() => create();
  factory EntityMetadata_Action_ImageSource.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata_Action_ImageSource.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntityMetadata_Action_ImageSource clone() => EntityMetadata_Action_ImageSource()..mergeFromMessage(this);
  EntityMetadata_Action_ImageSource copyWith(void Function(EntityMetadata_Action_ImageSource) updates) => super.copyWith((message) => updates(message as EntityMetadata_Action_ImageSource));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_Action_ImageSource create() => EntityMetadata_Action_ImageSource._();
  EntityMetadata_Action_ImageSource createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata_Action_ImageSource> createRepeated() => $pb.PbList<EntityMetadata_Action_ImageSource>();
  static EntityMetadata_Action_ImageSource getDefault() => _defaultInstance ??= create()..freeze();
  static EntityMetadata_Action_ImageSource _defaultInstance;

  $core.String get type => $_getS(0, '');
  set type($core.String v) { $_setString(0, v); }
  $core.bool hasType() => $_has(0);
  void clearType() => clearField(1);

  $core.String get name => $_getS(1, '');
  set name($core.String v) { $_setString(1, v); }
  $core.bool hasName() => $_has(1);
  void clearName() => clearField(2);

  $core.String get orientation => $_getS(2, '');
  set orientation($core.String v) { $_setString(2, v); }
  $core.bool hasOrientation() => $_has(2);
  void clearOrientation() => clearField(3);

  $core.String get overlay => $_getS(3, '');
  set overlay($core.String v) { $_setString(3, v); }
  $core.bool hasOverlay() => $_has(3);
  void clearOverlay() => clearField(4);

  $core.Map<$core.String, $core.String> get caption => $_getMap(4);
}

class EntityMetadata_Action extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityMetadata.Action', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'type')
    ..m<$core.String, $core.String>(2, 'name', 'EntityMetadata.Action.NameEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..aOS(3, 'visible')
    ..aOS(4, 'url')
    ..pc<EntityMetadata_Action_ImageSource>(5, 'imageSources', $pb.PbFieldType.PM,EntityMetadata_Action_ImageSource.create)
    ..aOB(6, 'register')
    ..hasRequiredFields = false
  ;

  EntityMetadata_Action._() : super();
  factory EntityMetadata_Action() => create();
  factory EntityMetadata_Action.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata_Action.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntityMetadata_Action clone() => EntityMetadata_Action()..mergeFromMessage(this);
  EntityMetadata_Action copyWith(void Function(EntityMetadata_Action) updates) => super.copyWith((message) => updates(message as EntityMetadata_Action));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_Action create() => EntityMetadata_Action._();
  EntityMetadata_Action createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata_Action> createRepeated() => $pb.PbList<EntityMetadata_Action>();
  static EntityMetadata_Action getDefault() => _defaultInstance ??= create()..freeze();
  static EntityMetadata_Action _defaultInstance;

  $core.String get type => $_getS(0, '');
  set type($core.String v) { $_setString(0, v); }
  $core.bool hasType() => $_has(0);
  void clearType() => clearField(1);

  $core.Map<$core.String, $core.String> get name => $_getMap(1);

  $core.String get visible => $_getS(2, '');
  set visible($core.String v) { $_setString(2, v); }
  $core.bool hasVisible() => $_has(2);
  void clearVisible() => clearField(3);

  $core.String get url => $_getS(3, '');
  set url($core.String v) { $_setString(3, v); }
  $core.bool hasUrl() => $_has(3);
  void clearUrl() => clearField(4);

  $core.List<EntityMetadata_Action_ImageSource> get imageSources => $_getList(4);

  $core.bool get register => $_get(5, false);
  set register($core.bool v) { $_setBool(5, v); }
  $core.bool hasRegister() => $_has(5);
  void clearRegister() => clearField(6);
}

class EntityMetadata_GatewayBootNode extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityMetadata.GatewayBootNode', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'fetchUri')
    ..aOS(2, 'heartbeatMessagingUri')
    ..hasRequiredFields = false
  ;

  EntityMetadata_GatewayBootNode._() : super();
  factory EntityMetadata_GatewayBootNode() => create();
  factory EntityMetadata_GatewayBootNode.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata_GatewayBootNode.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntityMetadata_GatewayBootNode clone() => EntityMetadata_GatewayBootNode()..mergeFromMessage(this);
  EntityMetadata_GatewayBootNode copyWith(void Function(EntityMetadata_GatewayBootNode) updates) => super.copyWith((message) => updates(message as EntityMetadata_GatewayBootNode));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_GatewayBootNode create() => EntityMetadata_GatewayBootNode._();
  EntityMetadata_GatewayBootNode createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata_GatewayBootNode> createRepeated() => $pb.PbList<EntityMetadata_GatewayBootNode>();
  static EntityMetadata_GatewayBootNode getDefault() => _defaultInstance ??= create()..freeze();
  static EntityMetadata_GatewayBootNode _defaultInstance;

  $core.String get fetchUri => $_getS(0, '');
  set fetchUri($core.String v) { $_setString(0, v); }
  $core.bool hasFetchUri() => $_has(0);
  void clearFetchUri() => clearField(1);

  $core.String get heartbeatMessagingUri => $_getS(1, '');
  set heartbeatMessagingUri($core.String v) { $_setString(1, v); }
  $core.bool hasHeartbeatMessagingUri() => $_has(1);
  void clearHeartbeatMessagingUri() => clearField(2);
}

class EntityMetadata_GatewayUpdate extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityMetadata.GatewayUpdate', package: const $pb.PackageName('dvote'))
    ..a<$core.int>(1, 'timeout', $pb.PbFieldType.O3)
    ..aOS(2, 'topic')
    ..a<$core.int>(3, 'difficulty', $pb.PbFieldType.O3)
    ..hasRequiredFields = false
  ;

  EntityMetadata_GatewayUpdate._() : super();
  factory EntityMetadata_GatewayUpdate() => create();
  factory EntityMetadata_GatewayUpdate.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata_GatewayUpdate.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntityMetadata_GatewayUpdate clone() => EntityMetadata_GatewayUpdate()..mergeFromMessage(this);
  EntityMetadata_GatewayUpdate copyWith(void Function(EntityMetadata_GatewayUpdate) updates) => super.copyWith((message) => updates(message as EntityMetadata_GatewayUpdate));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_GatewayUpdate create() => EntityMetadata_GatewayUpdate._();
  EntityMetadata_GatewayUpdate createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata_GatewayUpdate> createRepeated() => $pb.PbList<EntityMetadata_GatewayUpdate>();
  static EntityMetadata_GatewayUpdate getDefault() => _defaultInstance ??= create()..freeze();
  static EntityMetadata_GatewayUpdate _defaultInstance;

  $core.int get timeout => $_get(0, 0);
  set timeout($core.int v) { $_setSignedInt32(0, v); }
  $core.bool hasTimeout() => $_has(0);
  void clearTimeout() => clearField(1);

  $core.String get topic => $_getS(1, '');
  set topic($core.String v) { $_setString(1, v); }
  $core.bool hasTopic() => $_has(1);
  void clearTopic() => clearField(2);

  $core.int get difficulty => $_get(2, 0);
  set difficulty($core.int v) { $_setSignedInt32(2, v); }
  $core.bool hasDifficulty() => $_has(2);
  void clearDifficulty() => clearField(3);
}

class EntityMetadata extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityMetadata', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'version')
    ..aOS(2, 'entityId')
    ..pPS(3, 'languages')
    ..m<$core.String, $core.String>(4, 'name', 'EntityMetadata.NameEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..m<$core.String, $core.String>(5, 'description', 'EntityMetadata.DescriptionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..a<EntityMetadata_ContractsInfo>(6, 'contracts', $pb.PbFieldType.OM, EntityMetadata_ContractsInfo.getDefault, EntityMetadata_ContractsInfo.create)
    ..a<EntityMetadata_VotingProcesses>(7, 'votingProcesses', $pb.PbFieldType.OM, EntityMetadata_VotingProcesses.getDefault, EntityMetadata_VotingProcesses.create)
    ..m<$core.String, $core.String>(8, 'newsFeed', 'EntityMetadata.NewsFeedEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..a<EntityMetadata_Media>(9, 'media', $pb.PbFieldType.OM, EntityMetadata_Media.getDefault, EntityMetadata_Media.create)
    ..pc<EntityMetadata_Action>(10, 'actions', $pb.PbFieldType.PM,EntityMetadata_Action.create)
    ..pc<EntityMetadata_GatewayBootNode>(11, 'gatewayBootNodes', $pb.PbFieldType.PM,EntityMetadata_GatewayBootNode.create)
    ..a<EntityMetadata_GatewayUpdate>(12, 'gatewayUpdate', $pb.PbFieldType.OM, EntityMetadata_GatewayUpdate.getDefault, EntityMetadata_GatewayUpdate.create)
    ..pc<EntityReference>(14, 'bootEntities', $pb.PbFieldType.PM,EntityReference.create)
    ..pc<EntityReference>(15, 'fallbackBootNodeEntities', $pb.PbFieldType.PM,EntityReference.create)
    ..pc<EntityReference>(16, 'trustedEntities', $pb.PbFieldType.PM,EntityReference.create)
    ..pc<EntityReference>(17, 'censusServiceManagedEntities', $pb.PbFieldType.PM,EntityReference.create)
    ..m<$core.String, $core.String>(100, 'meta', 'EntityMetadata.MetaEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..hasRequiredFields = false
  ;

  EntityMetadata._() : super();
  factory EntityMetadata() => create();
  factory EntityMetadata.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntityMetadata clone() => EntityMetadata()..mergeFromMessage(this);
  EntityMetadata copyWith(void Function(EntityMetadata) updates) => super.copyWith((message) => updates(message as EntityMetadata));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata create() => EntityMetadata._();
  EntityMetadata createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata> createRepeated() => $pb.PbList<EntityMetadata>();
  static EntityMetadata getDefault() => _defaultInstance ??= create()..freeze();
  static EntityMetadata _defaultInstance;

  $core.String get version => $_getS(0, '');
  set version($core.String v) { $_setString(0, v); }
  $core.bool hasVersion() => $_has(0);
  void clearVersion() => clearField(1);

  $core.String get entityId => $_getS(1, '');
  set entityId($core.String v) { $_setString(1, v); }
  $core.bool hasEntityId() => $_has(1);
  void clearEntityId() => clearField(2);

  $core.List<$core.String> get languages => $_getList(2);

  $core.Map<$core.String, $core.String> get name => $_getMap(3);

  $core.Map<$core.String, $core.String> get description => $_getMap(4);

  EntityMetadata_ContractsInfo get contracts => $_getN(5);
  set contracts(EntityMetadata_ContractsInfo v) { setField(6, v); }
  $core.bool hasContracts() => $_has(5);
  void clearContracts() => clearField(6);

  EntityMetadata_VotingProcesses get votingProcesses => $_getN(6);
  set votingProcesses(EntityMetadata_VotingProcesses v) { setField(7, v); }
  $core.bool hasVotingProcesses() => $_has(6);
  void clearVotingProcesses() => clearField(7);

  $core.Map<$core.String, $core.String> get newsFeed => $_getMap(7);

  EntityMetadata_Media get media => $_getN(8);
  set media(EntityMetadata_Media v) { setField(9, v); }
  $core.bool hasMedia() => $_has(8);
  void clearMedia() => clearField(9);

  $core.List<EntityMetadata_Action> get actions => $_getList(9);

  $core.List<EntityMetadata_GatewayBootNode> get gatewayBootNodes => $_getList(10);

  EntityMetadata_GatewayUpdate get gatewayUpdate => $_getN(11);
  set gatewayUpdate(EntityMetadata_GatewayUpdate v) { setField(12, v); }
  $core.bool hasGatewayUpdate() => $_has(11);
  void clearGatewayUpdate() => clearField(12);

  $core.List<EntityReference> get bootEntities => $_getList(12);

  $core.List<EntityReference> get fallbackBootNodeEntities => $_getList(13);

  $core.List<EntityReference> get trustedEntities => $_getList(14);

  $core.List<EntityReference> get censusServiceManagedEntities => $_getList(15);

  $core.Map<$core.String, $core.String> get meta => $_getMap(16);
}

class EntityReference extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityReference', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'resolverAddress')
    ..aOS(2, 'networkId')
    ..aOS(3, 'entityId')
    ..pc<$0.Gateway>(4, 'entryPoints', $pb.PbFieldType.PM,$0.Gateway.create)
    ..hasRequiredFields = false
  ;

  EntityReference._() : super();
  factory EntityReference() => create();
  factory EntityReference.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityReference.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntityReference clone() => EntityReference()..mergeFromMessage(this);
  EntityReference copyWith(void Function(EntityReference) updates) => super.copyWith((message) => updates(message as EntityReference));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityReference create() => EntityReference._();
  EntityReference createEmptyInstance() => create();
  static $pb.PbList<EntityReference> createRepeated() => $pb.PbList<EntityReference>();
  static EntityReference getDefault() => _defaultInstance ??= create()..freeze();
  static EntityReference _defaultInstance;

  $core.String get resolverAddress => $_getS(0, '');
  set resolverAddress($core.String v) { $_setString(0, v); }
  $core.bool hasResolverAddress() => $_has(0);
  void clearResolverAddress() => clearField(1);

  $core.String get networkId => $_getS(1, '');
  set networkId($core.String v) { $_setString(1, v); }
  $core.bool hasNetworkId() => $_has(1);
  void clearNetworkId() => clearField(2);

  $core.String get entityId => $_getS(2, '');
  set entityId($core.String v) { $_setString(2, v); }
  $core.bool hasEntityId() => $_has(2);
  void clearEntityId() => clearField(3);

  $core.List<$0.Gateway> get entryPoints => $_getList(3);
}

