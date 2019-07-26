///
//  Generated code. Do not modify.
//  source: entity.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

class Entity_VotesMap extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.VotesMap', package: const $pb.PackageName('dvote'))
    ..pPS(1, 'active')
    ..pPS(2, 'ended')
    ..hasRequiredFields = false
  ;

  Entity_VotesMap._() : super();
  factory Entity_VotesMap() => create();
  factory Entity_VotesMap.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_VotesMap.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_VotesMap clone() => Entity_VotesMap()..mergeFromMessage(this);
  Entity_VotesMap copyWith(void Function(Entity_VotesMap) updates) => super.copyWith((message) => updates(message as Entity_VotesMap));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_VotesMap create() => Entity_VotesMap._();
  Entity_VotesMap createEmptyInstance() => create();
  static $pb.PbList<Entity_VotesMap> createRepeated() => $pb.PbList<Entity_VotesMap>();
  static Entity_VotesMap getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_VotesMap _defaultInstance;

  $core.List<$core.String> get active => $_getList(0);

  $core.List<$core.String> get ended => $_getList(1);
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
    ..aOS(1, 'heartbeatMessagingUri')
    ..aOS(2, 'fetchUri')
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

  $core.String get heartbeatMessagingUri => $_getS(0, '');
  set heartbeatMessagingUri($core.String v) { $_setString(0, v); }
  $core.bool hasHeartbeatMessagingUri() => $_has(0);
  void clearHeartbeatMessagingUri() => clearField(1);

  $core.String get fetchUri => $_getS(1, '');
  set fetchUri($core.String v) { $_setString(1, v); }
  $core.bool hasFetchUri() => $_has(1);
  void clearFetchUri() => clearField(2);
}

class Entity_GatewyUpdate extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.GatewyUpdate', package: const $pb.PackageName('dvote'))
    ..a<$core.int>(1, 'timeout', $pb.PbFieldType.O3)
    ..aOS(2, 'topic')
    ..aOS(3, 'difficulty')
    ..hasRequiredFields = false
  ;

  Entity_GatewyUpdate._() : super();
  factory Entity_GatewyUpdate() => create();
  factory Entity_GatewyUpdate.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_GatewyUpdate.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_GatewyUpdate clone() => Entity_GatewyUpdate()..mergeFromMessage(this);
  Entity_GatewyUpdate copyWith(void Function(Entity_GatewyUpdate) updates) => super.copyWith((message) => updates(message as Entity_GatewyUpdate));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_GatewyUpdate create() => Entity_GatewyUpdate._();
  Entity_GatewyUpdate createEmptyInstance() => create();
  static $pb.PbList<Entity_GatewyUpdate> createRepeated() => $pb.PbList<Entity_GatewyUpdate>();
  static Entity_GatewyUpdate getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_GatewyUpdate _defaultInstance;

  $core.int get timeout => $_get(0, 0);
  set timeout($core.int v) { $_setSignedInt32(0, v); }
  $core.bool hasTimeout() => $_has(0);
  void clearTimeout() => clearField(1);

  $core.String get topic => $_getS(1, '');
  set topic($core.String v) { $_setString(1, v); }
  $core.bool hasTopic() => $_has(1);
  void clearTopic() => clearField(2);

  $core.String get difficulty => $_getS(2, '');
  set difficulty($core.String v) { $_setString(2, v); }
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
    ..aOS(2, 'entityId')
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

  $core.String get entityId => $_getS(1, '');
  set entityId($core.String v) { $_setString(1, v); }
  $core.bool hasEntityId() => $_has(1);
  void clearEntityId() => clearField(2);
}

class Entity extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity', package: const $pb.PackageName('dvote'))
    ..pPS(1, 'languages')
    ..m<$core.String, $core.String>(2, 'name', 'Entity.NameEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..m<$core.String, $core.String>(3, 'description', 'Entity.DescriptionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..aOS(4, 'votingContract')
    ..a<Entity_VotesMap>(5, 'votingProcesses', $pb.PbFieldType.OM, Entity_VotesMap.getDefault, Entity_VotesMap.create)
    ..m<$core.String, $core.String>(6, 'newsFeed', 'Entity.NewsFeedEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..aOS(7, 'avatar')
    ..pc<Entity_Action>(8, 'actions', $pb.PbFieldType.PM,Entity_Action.create)
    ..pc<Entity_GatewayBootNode>(9, 'gatewayBootNodes', $pb.PbFieldType.PM,Entity_GatewayBootNode.create)
    ..a<Entity_GatewyUpdate>(10, 'gatewayUpdate', $pb.PbFieldType.OM, Entity_GatewyUpdate.getDefault, Entity_GatewyUpdate.create)
    ..pc<Entity_Relay>(11, 'relays', $pb.PbFieldType.PM,Entity_Relay.create)
    ..pc<Entity_EntityReference>(12, 'bootEntities', $pb.PbFieldType.PM,Entity_EntityReference.create)
    ..pc<Entity_EntityReference>(13, 'fallbackBootNodeEntities', $pb.PbFieldType.PM,Entity_EntityReference.create)
    ..pc<Entity_EntityReference>(14, 'trustedEntities', $pb.PbFieldType.PM,Entity_EntityReference.create)
    ..pc<Entity_EntityReference>(15, 'censusServiceManagedEntitie', $pb.PbFieldType.PM,Entity_EntityReference.create)
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

  $core.List<$core.String> get languages => $_getList(0);

  $core.Map<$core.String, $core.String> get name => $_getMap(1);

  $core.Map<$core.String, $core.String> get description => $_getMap(2);

  $core.String get votingContract => $_getS(3, '');
  set votingContract($core.String v) { $_setString(3, v); }
  $core.bool hasVotingContract() => $_has(3);
  void clearVotingContract() => clearField(4);

  Entity_VotesMap get votingProcesses => $_getN(4);
  set votingProcesses(Entity_VotesMap v) { setField(5, v); }
  $core.bool hasVotingProcesses() => $_has(4);
  void clearVotingProcesses() => clearField(5);

  $core.Map<$core.String, $core.String> get newsFeed => $_getMap(5);

  $core.String get avatar => $_getS(6, '');
  set avatar($core.String v) { $_setString(6, v); }
  $core.bool hasAvatar() => $_has(6);
  void clearAvatar() => clearField(7);

  $core.List<Entity_Action> get actions => $_getList(7);

  $core.List<Entity_GatewayBootNode> get gatewayBootNodes => $_getList(8);

  Entity_GatewyUpdate get gatewayUpdate => $_getN(9);
  set gatewayUpdate(Entity_GatewyUpdate v) { setField(10, v); }
  $core.bool hasGatewayUpdate() => $_has(9);
  void clearGatewayUpdate() => clearField(10);

  $core.List<Entity_Relay> get relays => $_getList(10);

  $core.List<Entity_EntityReference> get bootEntities => $_getList(11);

  $core.List<Entity_EntityReference> get fallbackBootNodeEntities => $_getList(12);

  $core.List<Entity_EntityReference> get trustedEntities => $_getList(13);

  $core.List<Entity_EntityReference> get censusServiceManagedEntitie => $_getList(14);
}

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

