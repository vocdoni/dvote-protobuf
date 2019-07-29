///
//  Generated code. Do not modify.
//  source: entity.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

import 'gateway.pb.dart' as $0;

class EntitiesStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntitiesStore', package: const $pb.PackageName('dvote'))
    ..pc<Entity>(1, 'entities', $pb.PbFieldType.PM,Entity.create)
    ..hasRequiredFields = false
  ;

  EntitiesStore._() : super();
  factory EntitiesStore() => create();
  factory EntitiesStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntitiesStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntitiesStore clone() => EntitiesStore()..mergeFromMessage(this);
  EntitiesStore copyWith(void Function(EntitiesStore) updates) => super.copyWith((message) => updates(message as EntitiesStore));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntitiesStore create() => EntitiesStore._();
  EntitiesStore createEmptyInstance() => create();
  static $pb.PbList<EntitiesStore> createRepeated() => $pb.PbList<EntitiesStore>();
  static EntitiesStore getDefault() => _defaultInstance ??= create()..freeze();
  static EntitiesStore _defaultInstance;

  $core.List<Entity> get entities => $_getList(0);
}

class Entity_ContractsInfo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.ContractsInfo', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'resolverAddress')
    ..aOS(2, 'votingAddress')
    ..aOS(3, 'networkId')
    ..hasRequiredFields = false
  ;

  Entity_ContractsInfo._() : super();
  factory Entity_ContractsInfo() => create();
  factory Entity_ContractsInfo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_ContractsInfo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_ContractsInfo clone() => Entity_ContractsInfo()..mergeFromMessage(this);
  Entity_ContractsInfo copyWith(void Function(Entity_ContractsInfo) updates) => super.copyWith((message) => updates(message as Entity_ContractsInfo));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_ContractsInfo create() => Entity_ContractsInfo._();
  Entity_ContractsInfo createEmptyInstance() => create();
  static $pb.PbList<Entity_ContractsInfo> createRepeated() => $pb.PbList<Entity_ContractsInfo>();
  static Entity_ContractsInfo getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_ContractsInfo _defaultInstance;

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

class Entity_VotingProcesses extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.VotingProcesses', package: const $pb.PackageName('dvote'))
    ..pPS(1, 'active')
    ..pPS(2, 'ended')
    ..hasRequiredFields = false
  ;

  Entity_VotingProcesses._() : super();
  factory Entity_VotingProcesses() => create();
  factory Entity_VotingProcesses.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_VotingProcesses.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_VotingProcesses clone() => Entity_VotingProcesses()..mergeFromMessage(this);
  Entity_VotingProcesses copyWith(void Function(Entity_VotingProcesses) updates) => super.copyWith((message) => updates(message as Entity_VotingProcesses));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_VotingProcesses create() => Entity_VotingProcesses._();
  Entity_VotingProcesses createEmptyInstance() => create();
  static $pb.PbList<Entity_VotingProcesses> createRepeated() => $pb.PbList<Entity_VotingProcesses>();
  static Entity_VotingProcesses getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_VotingProcesses _defaultInstance;

  $core.List<$core.String> get active => $_getList(0);

  $core.List<$core.String> get ended => $_getList(1);
}

class Entity_Media extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.Media', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'avatar')
    ..aOS(2, 'header')
    ..hasRequiredFields = false
  ;

  Entity_Media._() : super();
  factory Entity_Media() => create();
  factory Entity_Media.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_Media.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_Media clone() => Entity_Media()..mergeFromMessage(this);
  Entity_Media copyWith(void Function(Entity_Media) updates) => super.copyWith((message) => updates(message as Entity_Media));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_Media create() => Entity_Media._();
  Entity_Media createEmptyInstance() => create();
  static $pb.PbList<Entity_Media> createRepeated() => $pb.PbList<Entity_Media>();
  static Entity_Media getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_Media _defaultInstance;

  $core.String get avatar => $_getS(0, '');
  set avatar($core.String v) { $_setString(0, v); }
  $core.bool hasAvatar() => $_has(0);
  void clearAvatar() => clearField(1);

  $core.String get header => $_getS(1, '');
  set header($core.String v) { $_setString(1, v); }
  $core.bool hasHeader() => $_has(1);
  void clearHeader() => clearField(2);
}

class Entity_Action_ImageSource extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.Action.ImageSource', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'type')
    ..aOS(2, 'name')
    ..aOS(3, 'orientation')
    ..aOS(4, 'overlay')
    ..m<$core.String, $core.String>(5, 'caption', 'Entity.Action.ImageSource.CaptionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..hasRequiredFields = false
  ;

  Entity_Action_ImageSource._() : super();
  factory Entity_Action_ImageSource() => create();
  factory Entity_Action_ImageSource.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_Action_ImageSource.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_Action_ImageSource clone() => Entity_Action_ImageSource()..mergeFromMessage(this);
  Entity_Action_ImageSource copyWith(void Function(Entity_Action_ImageSource) updates) => super.copyWith((message) => updates(message as Entity_Action_ImageSource));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_Action_ImageSource create() => Entity_Action_ImageSource._();
  Entity_Action_ImageSource createEmptyInstance() => create();
  static $pb.PbList<Entity_Action_ImageSource> createRepeated() => $pb.PbList<Entity_Action_ImageSource>();
  static Entity_Action_ImageSource getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_Action_ImageSource _defaultInstance;

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

class Entity_Action extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.Action', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'type')
    ..m<$core.String, $core.String>(2, 'name', 'Entity.Action.NameEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..aOS(3, 'visible')
    ..aOS(4, 'url')
    ..pc<Entity_Action_ImageSource>(5, 'imageSources', $pb.PbFieldType.PM,Entity_Action_ImageSource.create)
    ..hasRequiredFields = false
  ;

  Entity_Action._() : super();
  factory Entity_Action() => create();
  factory Entity_Action.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_Action.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_Action clone() => Entity_Action()..mergeFromMessage(this);
  Entity_Action copyWith(void Function(Entity_Action) updates) => super.copyWith((message) => updates(message as Entity_Action));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_Action create() => Entity_Action._();
  Entity_Action createEmptyInstance() => create();
  static $pb.PbList<Entity_Action> createRepeated() => $pb.PbList<Entity_Action>();
  static Entity_Action getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_Action _defaultInstance;

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

  $core.List<Entity_Action_ImageSource> get imageSources => $_getList(4);
}

class Entity_GatewayBootNode extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.GatewayBootNode', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'fetchUri')
    ..aOS(2, 'heartbeatMessagingUri')
    ..hasRequiredFields = false
  ;

  Entity_GatewayBootNode._() : super();
  factory Entity_GatewayBootNode() => create();
  factory Entity_GatewayBootNode.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_GatewayBootNode.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_GatewayBootNode clone() => Entity_GatewayBootNode()..mergeFromMessage(this);
  Entity_GatewayBootNode copyWith(void Function(Entity_GatewayBootNode) updates) => super.copyWith((message) => updates(message as Entity_GatewayBootNode));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_GatewayBootNode create() => Entity_GatewayBootNode._();
  Entity_GatewayBootNode createEmptyInstance() => create();
  static $pb.PbList<Entity_GatewayBootNode> createRepeated() => $pb.PbList<Entity_GatewayBootNode>();
  static Entity_GatewayBootNode getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_GatewayBootNode _defaultInstance;

  $core.String get fetchUri => $_getS(0, '');
  set fetchUri($core.String v) { $_setString(0, v); }
  $core.bool hasFetchUri() => $_has(0);
  void clearFetchUri() => clearField(1);

  $core.String get heartbeatMessagingUri => $_getS(1, '');
  set heartbeatMessagingUri($core.String v) { $_setString(1, v); }
  $core.bool hasHeartbeatMessagingUri() => $_has(1);
  void clearHeartbeatMessagingUri() => clearField(2);
}

class Entity_GatewayUpdate extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.GatewayUpdate', package: const $pb.PackageName('dvote'))
    ..a<$core.int>(1, 'timeout', $pb.PbFieldType.O3)
    ..aOS(2, 'topic')
    ..a<$core.int>(3, 'difficulty', $pb.PbFieldType.O3)
    ..hasRequiredFields = false
  ;

  Entity_GatewayUpdate._() : super();
  factory Entity_GatewayUpdate() => create();
  factory Entity_GatewayUpdate.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_GatewayUpdate.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_GatewayUpdate clone() => Entity_GatewayUpdate()..mergeFromMessage(this);
  Entity_GatewayUpdate copyWith(void Function(Entity_GatewayUpdate) updates) => super.copyWith((message) => updates(message as Entity_GatewayUpdate));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_GatewayUpdate create() => Entity_GatewayUpdate._();
  Entity_GatewayUpdate createEmptyInstance() => create();
  static $pb.PbList<Entity_GatewayUpdate> createRepeated() => $pb.PbList<Entity_GatewayUpdate>();
  static Entity_GatewayUpdate getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_GatewayUpdate _defaultInstance;

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

class Entity_Relay extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.Relay', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'publicKey')
    ..aOS(2, 'messagingUri')
    ..hasRequiredFields = false
  ;

  Entity_Relay._() : super();
  factory Entity_Relay() => create();
  factory Entity_Relay.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_Relay.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_Relay clone() => Entity_Relay()..mergeFromMessage(this);
  Entity_Relay copyWith(void Function(Entity_Relay) updates) => super.copyWith((message) => updates(message as Entity_Relay));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_Relay create() => Entity_Relay._();
  Entity_Relay createEmptyInstance() => create();
  static $pb.PbList<Entity_Relay> createRepeated() => $pb.PbList<Entity_Relay>();
  static Entity_Relay getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_Relay _defaultInstance;

  $core.String get publicKey => $_getS(0, '');
  set publicKey($core.String v) { $_setString(0, v); }
  $core.bool hasPublicKey() => $_has(0);
  void clearPublicKey() => clearField(1);

  $core.String get messagingUri => $_getS(1, '');
  set messagingUri($core.String v) { $_setString(1, v); }
  $core.bool hasMessagingUri() => $_has(1);
  void clearMessagingUri() => clearField(2);
}

class Entity_EntityReference extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.EntityReference', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'resolverAddress')
    ..aOS(2, 'networkId')
    ..aOS(3, 'entityId')
    ..hasRequiredFields = false
  ;

  Entity_EntityReference._() : super();
  factory Entity_EntityReference() => create();
  factory Entity_EntityReference.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_EntityReference.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_EntityReference clone() => Entity_EntityReference()..mergeFromMessage(this);
  Entity_EntityReference copyWith(void Function(Entity_EntityReference) updates) => super.copyWith((message) => updates(message as Entity_EntityReference));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_EntityReference create() => Entity_EntityReference._();
  Entity_EntityReference createEmptyInstance() => create();
  static $pb.PbList<Entity_EntityReference> createRepeated() => $pb.PbList<Entity_EntityReference>();
  static Entity_EntityReference getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_EntityReference _defaultInstance;

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
}

class Entity extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'version')
    ..aOS(2, 'entityId')
    ..pPS(3, 'languages')
    ..m<$core.String, $core.String>(4, 'name', 'Entity.NameEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..m<$core.String, $core.String>(5, 'description', 'Entity.DescriptionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..a<Entity_ContractsInfo>(6, 'contracts', $pb.PbFieldType.OM, Entity_ContractsInfo.getDefault, Entity_ContractsInfo.create)
    ..a<Entity_VotingProcesses>(7, 'votingProcesses', $pb.PbFieldType.OM, Entity_VotingProcesses.getDefault, Entity_VotingProcesses.create)
    ..m<$core.String, $core.String>(8, 'newsFeed', 'Entity.NewsFeedEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..a<Entity_Media>(9, 'media', $pb.PbFieldType.OM, Entity_Media.getDefault, Entity_Media.create)
    ..pc<Entity_Action>(10, 'actions', $pb.PbFieldType.PM,Entity_Action.create)
    ..pc<Entity_GatewayBootNode>(11, 'gatewayBootNodes', $pb.PbFieldType.PM,Entity_GatewayBootNode.create)
    ..a<Entity_GatewayUpdate>(12, 'gatewayUpdate', $pb.PbFieldType.OM, Entity_GatewayUpdate.getDefault, Entity_GatewayUpdate.create)
    ..pc<Entity_Relay>(13, 'relays', $pb.PbFieldType.PM,Entity_Relay.create)
    ..pc<Entity_EntityReference>(14, 'bootEntities', $pb.PbFieldType.PM,Entity_EntityReference.create)
    ..pc<Entity_EntityReference>(15, 'fallbackBootNodeEntities', $pb.PbFieldType.PM,Entity_EntityReference.create)
    ..pc<Entity_EntityReference>(16, 'trustedEntities', $pb.PbFieldType.PM,Entity_EntityReference.create)
    ..pc<Entity_EntityReference>(17, 'censusServiceManagedEntities', $pb.PbFieldType.PM,Entity_EntityReference.create)
    ..m<$core.String, $core.String>(100, 'meta', 'Entity.MetaEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..hasRequiredFields = false
  ;

  Entity._() : super();
  factory Entity() => create();
  factory Entity.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity clone() => Entity()..mergeFromMessage(this);
  Entity copyWith(void Function(Entity) updates) => super.copyWith((message) => updates(message as Entity));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity create() => Entity._();
  Entity createEmptyInstance() => create();
  static $pb.PbList<Entity> createRepeated() => $pb.PbList<Entity>();
  static Entity getDefault() => _defaultInstance ??= create()..freeze();
  static Entity _defaultInstance;

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

  Entity_ContractsInfo get contracts => $_getN(5);
  set contracts(Entity_ContractsInfo v) { setField(6, v); }
  $core.bool hasContracts() => $_has(5);
  void clearContracts() => clearField(6);

  Entity_VotingProcesses get votingProcesses => $_getN(6);
  set votingProcesses(Entity_VotingProcesses v) { setField(7, v); }
  $core.bool hasVotingProcesses() => $_has(6);
  void clearVotingProcesses() => clearField(7);

  $core.Map<$core.String, $core.String> get newsFeed => $_getMap(7);

  Entity_Media get media => $_getN(8);
  set media(Entity_Media v) { setField(9, v); }
  $core.bool hasMedia() => $_has(8);
  void clearMedia() => clearField(9);

  $core.List<Entity_Action> get actions => $_getList(9);

  $core.List<Entity_GatewayBootNode> get gatewayBootNodes => $_getList(10);

  Entity_GatewayUpdate get gatewayUpdate => $_getN(11);
  set gatewayUpdate(Entity_GatewayUpdate v) { setField(12, v); }
  $core.bool hasGatewayUpdate() => $_has(11);
  void clearGatewayUpdate() => clearField(12);

  $core.List<Entity_Relay> get relays => $_getList(12);

  $core.List<Entity_EntityReference> get bootEntities => $_getList(13);

  $core.List<Entity_EntityReference> get fallbackBootNodeEntities => $_getList(14);

  $core.List<Entity_EntityReference> get trustedEntities => $_getList(15);

  $core.List<Entity_EntityReference> get censusServiceManagedEntities => $_getList(16);

  $core.Map<$core.String, $core.String> get meta => $_getMap(17);
}

class EntitySummary extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntitySummary', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'resolverAddress')
    ..aOS(2, 'networkId')
    ..aOS(3, 'entityId')
    ..pc<$0.Gateway>(4, 'entryPoints', $pb.PbFieldType.PM,$0.Gateway.create)
    ..hasRequiredFields = false
  ;

  EntitySummary._() : super();
  factory EntitySummary() => create();
  factory EntitySummary.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntitySummary.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EntitySummary clone() => EntitySummary()..mergeFromMessage(this);
  EntitySummary copyWith(void Function(EntitySummary) updates) => super.copyWith((message) => updates(message as EntitySummary));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntitySummary create() => EntitySummary._();
  EntitySummary createEmptyInstance() => create();
  static $pb.PbList<EntitySummary> createRepeated() => $pb.PbList<EntitySummary>();
  static EntitySummary getDefault() => _defaultInstance ??= create()..freeze();
  static EntitySummary _defaultInstance;

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

