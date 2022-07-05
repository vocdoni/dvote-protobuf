///
//  Generated code. Do not modify.
//  source: metadata/entity.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class EntityMetadataStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EntityMetadataStore', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..pc<EntityMetadata>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'items', $pb.PbFieldType.PM, subBuilder: EntityMetadata.create)
    ..hasRequiredFields = false
  ;

  EntityMetadataStore._() : super();
  factory EntityMetadataStore({
    $core.Iterable<EntityMetadata>? items,
  }) {
    final _result = create();
    if (items != null) {
      _result.items.addAll(items);
    }
    return _result;
  }
  factory EntityMetadataStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadataStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EntityMetadataStore clone() => EntityMetadataStore()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EntityMetadataStore copyWith(void Function(EntityMetadataStore) updates) => super.copyWith((message) => updates(message as EntityMetadataStore)) as EntityMetadataStore; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadataStore create() => EntityMetadataStore._();
  EntityMetadataStore createEmptyInstance() => create();
  static $pb.PbList<EntityMetadataStore> createRepeated() => $pb.PbList<EntityMetadataStore>();
  @$core.pragma('dart2js:noInline')
  static EntityMetadataStore getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EntityMetadataStore>(create);
  static EntityMetadataStore? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<EntityMetadata> get items => $_getList(0);
}

class EntityMetadata_VotingProcesses extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EntityMetadata.VotingProcesses', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..pPS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'active')
    ..pPS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ended')
    ..hasRequiredFields = false
  ;

  EntityMetadata_VotingProcesses._() : super();
  factory EntityMetadata_VotingProcesses({
    $core.Iterable<$core.String>? active,
    $core.Iterable<$core.String>? ended,
  }) {
    final _result = create();
    if (active != null) {
      _result.active.addAll(active);
    }
    if (ended != null) {
      _result.ended.addAll(ended);
    }
    return _result;
  }
  factory EntityMetadata_VotingProcesses.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata_VotingProcesses.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EntityMetadata_VotingProcesses clone() => EntityMetadata_VotingProcesses()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EntityMetadata_VotingProcesses copyWith(void Function(EntityMetadata_VotingProcesses) updates) => super.copyWith((message) => updates(message as EntityMetadata_VotingProcesses)) as EntityMetadata_VotingProcesses; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_VotingProcesses create() => EntityMetadata_VotingProcesses._();
  EntityMetadata_VotingProcesses createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata_VotingProcesses> createRepeated() => $pb.PbList<EntityMetadata_VotingProcesses>();
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_VotingProcesses getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EntityMetadata_VotingProcesses>(create);
  static EntityMetadata_VotingProcesses? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.String> get active => $_getList(0);

  @$pb.TagNumber(2)
  $core.List<$core.String> get ended => $_getList(1);
}

class EntityMetadata_Media extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EntityMetadata.Media', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'avatar')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'header')
    ..hasRequiredFields = false
  ;

  EntityMetadata_Media._() : super();
  factory EntityMetadata_Media({
    $core.String? avatar,
    $core.String? header,
  }) {
    final _result = create();
    if (avatar != null) {
      _result.avatar = avatar;
    }
    if (header != null) {
      _result.header = header;
    }
    return _result;
  }
  factory EntityMetadata_Media.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata_Media.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EntityMetadata_Media clone() => EntityMetadata_Media()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EntityMetadata_Media copyWith(void Function(EntityMetadata_Media) updates) => super.copyWith((message) => updates(message as EntityMetadata_Media)) as EntityMetadata_Media; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_Media create() => EntityMetadata_Media._();
  EntityMetadata_Media createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata_Media> createRepeated() => $pb.PbList<EntityMetadata_Media>();
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_Media getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EntityMetadata_Media>(create);
  static EntityMetadata_Media? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get avatar => $_getSZ(0);
  @$pb.TagNumber(1)
  set avatar($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAvatar() => $_has(0);
  @$pb.TagNumber(1)
  void clearAvatar() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get header => $_getSZ(1);
  @$pb.TagNumber(2)
  set header($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasHeader() => $_has(1);
  @$pb.TagNumber(2)
  void clearHeader() => clearField(2);
}

class EntityMetadata_Action_ImageSource extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EntityMetadata.Action.ImageSource', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'type')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'orientation')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'overlay')
    ..m<$core.String, $core.String>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'caption', entryClassName: 'EntityMetadata.Action.ImageSource.CaptionEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..hasRequiredFields = false
  ;

  EntityMetadata_Action_ImageSource._() : super();
  factory EntityMetadata_Action_ImageSource({
    $core.String? type,
    $core.String? name,
    $core.String? orientation,
    $core.String? overlay,
    $core.Map<$core.String, $core.String>? caption,
  }) {
    final _result = create();
    if (type != null) {
      _result.type = type;
    }
    if (name != null) {
      _result.name = name;
    }
    if (orientation != null) {
      _result.orientation = orientation;
    }
    if (overlay != null) {
      _result.overlay = overlay;
    }
    if (caption != null) {
      _result.caption.addAll(caption);
    }
    return _result;
  }
  factory EntityMetadata_Action_ImageSource.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata_Action_ImageSource.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EntityMetadata_Action_ImageSource clone() => EntityMetadata_Action_ImageSource()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EntityMetadata_Action_ImageSource copyWith(void Function(EntityMetadata_Action_ImageSource) updates) => super.copyWith((message) => updates(message as EntityMetadata_Action_ImageSource)) as EntityMetadata_Action_ImageSource; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_Action_ImageSource create() => EntityMetadata_Action_ImageSource._();
  EntityMetadata_Action_ImageSource createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata_Action_ImageSource> createRepeated() => $pb.PbList<EntityMetadata_Action_ImageSource>();
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_Action_ImageSource getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EntityMetadata_Action_ImageSource>(create);
  static EntityMetadata_Action_ImageSource? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get type => $_getSZ(0);
  @$pb.TagNumber(1)
  set type($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasType() => $_has(0);
  @$pb.TagNumber(1)
  void clearType() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get orientation => $_getSZ(2);
  @$pb.TagNumber(3)
  set orientation($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasOrientation() => $_has(2);
  @$pb.TagNumber(3)
  void clearOrientation() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get overlay => $_getSZ(3);
  @$pb.TagNumber(4)
  set overlay($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasOverlay() => $_has(3);
  @$pb.TagNumber(4)
  void clearOverlay() => clearField(4);

  @$pb.TagNumber(5)
  $core.Map<$core.String, $core.String> get caption => $_getMap(4);
}

class EntityMetadata_Action extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EntityMetadata.Action', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'type')
    ..m<$core.String, $core.String>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name', entryClassName: 'EntityMetadata.Action.NameEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'visible')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'url')
    ..pc<EntityMetadata_Action_ImageSource>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'imageSources', $pb.PbFieldType.PM, protoName: 'imageSources', subBuilder: EntityMetadata_Action_ImageSource.create)
    ..aOS(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'actionKey', protoName: 'actionKey')
    ..hasRequiredFields = false
  ;

  EntityMetadata_Action._() : super();
  factory EntityMetadata_Action({
    $core.String? type,
    $core.Map<$core.String, $core.String>? name,
    $core.String? visible,
    $core.String? url,
    $core.Iterable<EntityMetadata_Action_ImageSource>? imageSources,
    $core.String? actionKey,
  }) {
    final _result = create();
    if (type != null) {
      _result.type = type;
    }
    if (name != null) {
      _result.name.addAll(name);
    }
    if (visible != null) {
      _result.visible = visible;
    }
    if (url != null) {
      _result.url = url;
    }
    if (imageSources != null) {
      _result.imageSources.addAll(imageSources);
    }
    if (actionKey != null) {
      _result.actionKey = actionKey;
    }
    return _result;
  }
  factory EntityMetadata_Action.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata_Action.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EntityMetadata_Action clone() => EntityMetadata_Action()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EntityMetadata_Action copyWith(void Function(EntityMetadata_Action) updates) => super.copyWith((message) => updates(message as EntityMetadata_Action)) as EntityMetadata_Action; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_Action create() => EntityMetadata_Action._();
  EntityMetadata_Action createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata_Action> createRepeated() => $pb.PbList<EntityMetadata_Action>();
  @$core.pragma('dart2js:noInline')
  static EntityMetadata_Action getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EntityMetadata_Action>(create);
  static EntityMetadata_Action? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get type => $_getSZ(0);
  @$pb.TagNumber(1)
  set type($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasType() => $_has(0);
  @$pb.TagNumber(1)
  void clearType() => clearField(1);

  @$pb.TagNumber(2)
  $core.Map<$core.String, $core.String> get name => $_getMap(1);

  @$pb.TagNumber(3)
  $core.String get visible => $_getSZ(2);
  @$pb.TagNumber(3)
  set visible($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasVisible() => $_has(2);
  @$pb.TagNumber(3)
  void clearVisible() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get url => $_getSZ(3);
  @$pb.TagNumber(4)
  set url($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasUrl() => $_has(3);
  @$pb.TagNumber(4)
  void clearUrl() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<EntityMetadata_Action_ImageSource> get imageSources => $_getList(4);

  @$pb.TagNumber(7)
  $core.String get actionKey => $_getSZ(5);
  @$pb.TagNumber(7)
  set actionKey($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(7)
  $core.bool hasActionKey() => $_has(5);
  @$pb.TagNumber(7)
  void clearActionKey() => clearField(7);
}

class EntityMetadata extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EntityMetadata', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'version')
    ..pPS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'languages')
    ..m<$core.String, $core.String>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name', entryClassName: 'EntityMetadata.NameEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..m<$core.String, $core.String>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'description', entryClassName: 'EntityMetadata.DescriptionEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..aOM<EntityMetadata_VotingProcesses>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'votingProcesses', protoName: 'votingProcesses', subBuilder: EntityMetadata_VotingProcesses.create)
    ..m<$core.String, $core.String>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'newsFeed', protoName: 'newsFeed', entryClassName: 'EntityMetadata.NewsFeedEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..aOM<EntityMetadata_Media>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'media', subBuilder: EntityMetadata_Media.create)
    ..pc<EntityMetadata_Action>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'actions', $pb.PbFieldType.PM, subBuilder: EntityMetadata_Action.create)
    ..pc<EntityReference>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'bootEntities', $pb.PbFieldType.PM, protoName: 'bootEntities', subBuilder: EntityReference.create)
    ..pc<EntityReference>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'fallbackBootNodeEntities', $pb.PbFieldType.PM, protoName: 'fallbackBootNodeEntities', subBuilder: EntityReference.create)
    ..pc<EntityReference>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'trustedEntities', $pb.PbFieldType.PM, protoName: 'trustedEntities', subBuilder: EntityReference.create)
    ..pc<EntityReference>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusServiceManagedEntities', $pb.PbFieldType.PM, protoName: 'censusServiceManagedEntities', subBuilder: EntityReference.create)
    ..m<$core.String, $core.String>(100, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'meta', entryClassName: 'EntityMetadata.MetaEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..hasRequiredFields = false
  ;

  EntityMetadata._() : super();
  factory EntityMetadata({
    $core.String? version,
    $core.Iterable<$core.String>? languages,
    $core.Map<$core.String, $core.String>? name,
    $core.Map<$core.String, $core.String>? description,
    EntityMetadata_VotingProcesses? votingProcesses,
    $core.Map<$core.String, $core.String>? newsFeed,
    EntityMetadata_Media? media,
    $core.Iterable<EntityMetadata_Action>? actions,
    $core.Iterable<EntityReference>? bootEntities,
    $core.Iterable<EntityReference>? fallbackBootNodeEntities,
    $core.Iterable<EntityReference>? trustedEntities,
    $core.Iterable<EntityReference>? censusServiceManagedEntities,
    $core.Map<$core.String, $core.String>? meta,
  }) {
    final _result = create();
    if (version != null) {
      _result.version = version;
    }
    if (languages != null) {
      _result.languages.addAll(languages);
    }
    if (name != null) {
      _result.name.addAll(name);
    }
    if (description != null) {
      _result.description.addAll(description);
    }
    if (votingProcesses != null) {
      _result.votingProcesses = votingProcesses;
    }
    if (newsFeed != null) {
      _result.newsFeed.addAll(newsFeed);
    }
    if (media != null) {
      _result.media = media;
    }
    if (actions != null) {
      _result.actions.addAll(actions);
    }
    if (bootEntities != null) {
      _result.bootEntities.addAll(bootEntities);
    }
    if (fallbackBootNodeEntities != null) {
      _result.fallbackBootNodeEntities.addAll(fallbackBootNodeEntities);
    }
    if (trustedEntities != null) {
      _result.trustedEntities.addAll(trustedEntities);
    }
    if (censusServiceManagedEntities != null) {
      _result.censusServiceManagedEntities.addAll(censusServiceManagedEntities);
    }
    if (meta != null) {
      _result.meta.addAll(meta);
    }
    return _result;
  }
  factory EntityMetadata.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityMetadata.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EntityMetadata clone() => EntityMetadata()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EntityMetadata copyWith(void Function(EntityMetadata) updates) => super.copyWith((message) => updates(message as EntityMetadata)) as EntityMetadata; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityMetadata create() => EntityMetadata._();
  EntityMetadata createEmptyInstance() => create();
  static $pb.PbList<EntityMetadata> createRepeated() => $pb.PbList<EntityMetadata>();
  @$core.pragma('dart2js:noInline')
  static EntityMetadata getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EntityMetadata>(create);
  static EntityMetadata? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get version => $_getSZ(0);
  @$pb.TagNumber(1)
  set version($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasVersion() => $_has(0);
  @$pb.TagNumber(1)
  void clearVersion() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.String> get languages => $_getList(1);

  @$pb.TagNumber(3)
  $core.Map<$core.String, $core.String> get name => $_getMap(2);

  @$pb.TagNumber(4)
  $core.Map<$core.String, $core.String> get description => $_getMap(3);

  @$pb.TagNumber(5)
  EntityMetadata_VotingProcesses get votingProcesses => $_getN(4);
  @$pb.TagNumber(5)
  set votingProcesses(EntityMetadata_VotingProcesses v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasVotingProcesses() => $_has(4);
  @$pb.TagNumber(5)
  void clearVotingProcesses() => clearField(5);
  @$pb.TagNumber(5)
  EntityMetadata_VotingProcesses ensureVotingProcesses() => $_ensure(4);

  @$pb.TagNumber(6)
  $core.Map<$core.String, $core.String> get newsFeed => $_getMap(5);

  @$pb.TagNumber(7)
  EntityMetadata_Media get media => $_getN(6);
  @$pb.TagNumber(7)
  set media(EntityMetadata_Media v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasMedia() => $_has(6);
  @$pb.TagNumber(7)
  void clearMedia() => clearField(7);
  @$pb.TagNumber(7)
  EntityMetadata_Media ensureMedia() => $_ensure(6);

  @$pb.TagNumber(8)
  $core.List<EntityMetadata_Action> get actions => $_getList(7);

  @$pb.TagNumber(9)
  $core.List<EntityReference> get bootEntities => $_getList(8);

  @$pb.TagNumber(10)
  $core.List<EntityReference> get fallbackBootNodeEntities => $_getList(9);

  @$pb.TagNumber(11)
  $core.List<EntityReference> get trustedEntities => $_getList(10);

  @$pb.TagNumber(12)
  $core.List<EntityReference> get censusServiceManagedEntities => $_getList(11);

  @$pb.TagNumber(100)
  $core.Map<$core.String, $core.String> get meta => $_getMap(12);
}

class EntityReference extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EntityReference', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'entityId', protoName: 'entityId')
    ..pPS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'entryPoints', protoName: 'entryPoints')
    ..hasRequiredFields = false
  ;

  EntityReference._() : super();
  factory EntityReference({
    $core.String? entityId,
    $core.Iterable<$core.String>? entryPoints,
  }) {
    final _result = create();
    if (entityId != null) {
      _result.entityId = entityId;
    }
    if (entryPoints != null) {
      _result.entryPoints.addAll(entryPoints);
    }
    return _result;
  }
  factory EntityReference.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EntityReference.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EntityReference clone() => EntityReference()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EntityReference copyWith(void Function(EntityReference) updates) => super.copyWith((message) => updates(message as EntityReference)) as EntityReference; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EntityReference create() => EntityReference._();
  EntityReference createEmptyInstance() => create();
  static $pb.PbList<EntityReference> createRepeated() => $pb.PbList<EntityReference>();
  @$core.pragma('dart2js:noInline')
  static EntityReference getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EntityReference>(create);
  static EntityReference? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get entityId => $_getSZ(0);
  @$pb.TagNumber(1)
  set entityId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasEntityId() => $_has(0);
  @$pb.TagNumber(1)
  void clearEntityId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.String> get entryPoints => $_getList(1);
}

