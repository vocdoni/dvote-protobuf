///
//  Generated code. Do not modify.
//  source: entity.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

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

class EntityMetadata extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityMetadata', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'version')
    ..pPS(2, 'languages')
    ..m<$core.String, $core.String>(3, 'name', 'EntityMetadata.NameEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..m<$core.String, $core.String>(4, 'description', 'EntityMetadata.DescriptionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..a<EntityMetadata_VotingProcesses>(5, 'votingProcesses', $pb.PbFieldType.OM, EntityMetadata_VotingProcesses.getDefault, EntityMetadata_VotingProcesses.create)
    ..m<$core.String, $core.String>(6, 'newsFeed', 'EntityMetadata.NewsFeedEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..a<EntityMetadata_Media>(7, 'media', $pb.PbFieldType.OM, EntityMetadata_Media.getDefault, EntityMetadata_Media.create)
    ..pc<EntityMetadata_Action>(8, 'actions', $pb.PbFieldType.PM,EntityMetadata_Action.create)
    ..pc<EntityReference>(9, 'bootEntities', $pb.PbFieldType.PM,EntityReference.create)
    ..pc<EntityReference>(10, 'fallbackBootNodeEntities', $pb.PbFieldType.PM,EntityReference.create)
    ..pc<EntityReference>(11, 'trustedEntities', $pb.PbFieldType.PM,EntityReference.create)
    ..pc<EntityReference>(12, 'censusServiceManagedEntities', $pb.PbFieldType.PM,EntityReference.create)
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

  $core.List<$core.String> get languages => $_getList(1);

  $core.Map<$core.String, $core.String> get name => $_getMap(2);

  $core.Map<$core.String, $core.String> get description => $_getMap(3);

  EntityMetadata_VotingProcesses get votingProcesses => $_getN(4);
  set votingProcesses(EntityMetadata_VotingProcesses v) { setField(5, v); }
  $core.bool hasVotingProcesses() => $_has(4);
  void clearVotingProcesses() => clearField(5);

  $core.Map<$core.String, $core.String> get newsFeed => $_getMap(5);

  EntityMetadata_Media get media => $_getN(6);
  set media(EntityMetadata_Media v) { setField(7, v); }
  $core.bool hasMedia() => $_has(6);
  void clearMedia() => clearField(7);

  $core.List<EntityMetadata_Action> get actions => $_getList(7);

  $core.List<EntityReference> get bootEntities => $_getList(8);

  $core.List<EntityReference> get fallbackBootNodeEntities => $_getList(9);

  $core.List<EntityReference> get trustedEntities => $_getList(10);

  $core.List<EntityReference> get censusServiceManagedEntities => $_getList(11);

  $core.Map<$core.String, $core.String> get meta => $_getMap(12);
}

class EntityReference extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EntityReference', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'entityId')
    ..pPS(2, 'entryPoints')
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

  $core.String get entityId => $_getS(0, '');
  set entityId($core.String v) { $_setString(0, v); }
  $core.bool hasEntityId() => $_has(0);
  void clearEntityId() => clearField(1);

  $core.List<$core.String> get entryPoints => $_getList(1);
}

