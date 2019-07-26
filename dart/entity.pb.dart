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

class Entity_Reference extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Entity.Reference', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'entityId')
    ..aOS(2, 'resolverAddress')
    ..aOS(3, 'networkId')
    ..pc<$0.Gateway>(4, 'entryPoints', $pb.PbFieldType.PM,$0.Gateway.create)
    ..hasRequiredFields = false
  ;

  Entity_Reference._() : super();
  factory Entity_Reference() => create();
  factory Entity_Reference.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Entity_Reference.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Entity_Reference clone() => Entity_Reference()..mergeFromMessage(this);
  Entity_Reference copyWith(void Function(Entity_Reference) updates) => super.copyWith((message) => updates(message as Entity_Reference));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Entity_Reference create() => Entity_Reference._();
  Entity_Reference createEmptyInstance() => create();
  static $pb.PbList<Entity_Reference> createRepeated() => $pb.PbList<Entity_Reference>();
  static Entity_Reference getDefault() => _defaultInstance ??= create()..freeze();
  static Entity_Reference _defaultInstance;

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

  $core.List<$0.Gateway> get entryPoints => $_getList(3);
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
    ..aOS(1, 'version')
    ..a<Entity_Reference>(2, 'reference', $pb.PbFieldType.OM, Entity_Reference.getDefault, Entity_Reference.create)
    ..pPS(3, 'languages')
    ..m<$core.String, $core.String>(4, 'name', 'Entity.NameEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..m<$core.String, $core.String>(5, 'description', 'Entity.DescriptionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..aOS(6, 'votingContract')
    ..a<Entity_VotingProcesses>(7, 'votingProcesses', $pb.PbFieldType.OM, Entity_VotingProcesses.getDefault, Entity_VotingProcesses.create)
    ..m<$core.String, $core.String>(8, 'newsFeed', 'Entity.NewsFeedEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..aOS(9, 'avatar')
    ..pc<Entity_Action>(10, 'actions', $pb.PbFieldType.PM,Entity_Action.create)
    ..pc<Entity_GatewayBootNode>(11, 'gatewayBootNodes', $pb.PbFieldType.PM,Entity_GatewayBootNode.create)
    ..a<Entity_GatewyUpdate>(12, 'gatewayUpdate', $pb.PbFieldType.OM, Entity_GatewyUpdate.getDefault, Entity_GatewyUpdate.create)
    ..pc<Entity_Relay>(13, 'relays', $pb.PbFieldType.PM,Entity_Relay.create)
    ..pc<Entity_EntityReference>(14, 'bootEntities', $pb.PbFieldType.PM,Entity_EntityReference.create)
    ..pc<Entity_EntityReference>(15, 'fallbackBootNodeEntities', $pb.PbFieldType.PM,Entity_EntityReference.create)
    ..pc<Entity_EntityReference>(16, 'trustedEntities', $pb.PbFieldType.PM,Entity_EntityReference.create)
    ..pc<Entity_EntityReference>(17, 'censusServiceManagedEntitie', $pb.PbFieldType.PM,Entity_EntityReference.create)
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

  Entity_Reference get reference => $_getN(1);
  set reference(Entity_Reference v) { setField(2, v); }
  $core.bool hasReference() => $_has(1);
  void clearReference() => clearField(2);

  $core.List<$core.String> get languages => $_getList(2);

  $core.Map<$core.String, $core.String> get name => $_getMap(3);

  $core.Map<$core.String, $core.String> get description => $_getMap(4);

  $core.String get votingContract => $_getS(5, '');
  set votingContract($core.String v) { $_setString(5, v); }
  $core.bool hasVotingContract() => $_has(5);
  void clearVotingContract() => clearField(6);

  Entity_VotingProcesses get votingProcesses => $_getN(6);
  set votingProcesses(Entity_VotingProcesses v) { setField(7, v); }
  $core.bool hasVotingProcesses() => $_has(6);
  void clearVotingProcesses() => clearField(7);

  $core.Map<$core.String, $core.String> get newsFeed => $_getMap(7);

  $core.String get avatar => $_getS(8, '');
  set avatar($core.String v) { $_setString(8, v); }
  $core.bool hasAvatar() => $_has(8);
  void clearAvatar() => clearField(9);

  $core.List<Entity_Action> get actions => $_getList(9);

  $core.List<Entity_GatewayBootNode> get gatewayBootNodes => $_getList(10);

  Entity_GatewyUpdate get gatewayUpdate => $_getN(11);
  set gatewayUpdate(Entity_GatewyUpdate v) { setField(12, v); }
  $core.bool hasGatewayUpdate() => $_has(11);
  void clearGatewayUpdate() => clearField(12);

  $core.List<Entity_Relay> get relays => $_getList(12);

  $core.List<Entity_EntityReference> get bootEntities => $_getList(13);

  $core.List<Entity_EntityReference> get fallbackBootNodeEntities => $_getList(14);

  $core.List<Entity_EntityReference> get trustedEntities => $_getList(15);

  $core.List<Entity_EntityReference> get censusServiceManagedEntitie => $_getList(16);

  $core.Map<$core.String, $core.String> get meta => $_getMap(17);
}

