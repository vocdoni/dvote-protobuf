///
//  Generated code. Do not modify.
//  source: metadata/process.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class ProcessMetadataStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProcessMetadataStore', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..pc<ProcessMetadata>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'items', $pb.PbFieldType.PM, subBuilder: ProcessMetadata.create)
    ..hasRequiredFields = false
  ;

  ProcessMetadataStore._() : super();
  factory ProcessMetadataStore({
    $core.Iterable<ProcessMetadata> items,
  }) {
    final _result = create();
    if (items != null) {
      _result.items.addAll(items);
    }
    return _result;
  }
  factory ProcessMetadataStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMetadataStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProcessMetadataStore clone() => ProcessMetadataStore()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProcessMetadataStore copyWith(void Function(ProcessMetadataStore) updates) => super.copyWith((message) => updates(message as ProcessMetadataStore)) as ProcessMetadataStore; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMetadataStore create() => ProcessMetadataStore._();
  ProcessMetadataStore createEmptyInstance() => create();
  static $pb.PbList<ProcessMetadataStore> createRepeated() => $pb.PbList<ProcessMetadataStore>();
  @$core.pragma('dart2js:noInline')
  static ProcessMetadataStore getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProcessMetadataStore>(create);
  static ProcessMetadataStore _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<ProcessMetadata> get items => $_getList(0);
}

class ProcessMetadata_Question_VoteOption extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProcessMetadata.Question.VoteOption', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..m<$core.String, $core.String>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'title', entryClassName: 'ProcessMetadata.Question.VoteOption.TitleEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'value', $pb.PbFieldType.O3)
    ..hasRequiredFields = false
  ;

  ProcessMetadata_Question_VoteOption._() : super();
  factory ProcessMetadata_Question_VoteOption({
    $core.Map<$core.String, $core.String> title,
    $core.int value,
  }) {
    final _result = create();
    if (title != null) {
      _result.title.addAll(title);
    }
    if (value != null) {
      _result.value = value;
    }
    return _result;
  }
  factory ProcessMetadata_Question_VoteOption.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMetadata_Question_VoteOption.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProcessMetadata_Question_VoteOption clone() => ProcessMetadata_Question_VoteOption()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProcessMetadata_Question_VoteOption copyWith(void Function(ProcessMetadata_Question_VoteOption) updates) => super.copyWith((message) => updates(message as ProcessMetadata_Question_VoteOption)) as ProcessMetadata_Question_VoteOption; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata_Question_VoteOption create() => ProcessMetadata_Question_VoteOption._();
  ProcessMetadata_Question_VoteOption createEmptyInstance() => create();
  static $pb.PbList<ProcessMetadata_Question_VoteOption> createRepeated() => $pb.PbList<ProcessMetadata_Question_VoteOption>();
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata_Question_VoteOption getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProcessMetadata_Question_VoteOption>(create);
  static ProcessMetadata_Question_VoteOption _defaultInstance;

  @$pb.TagNumber(1)
  $core.Map<$core.String, $core.String> get title => $_getMap(0);

  @$pb.TagNumber(2)
  $core.int get value => $_getIZ(1);
  @$pb.TagNumber(2)
  set value($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasValue() => $_has(1);
  @$pb.TagNumber(2)
  void clearValue() => clearField(2);
}

class ProcessMetadata_Question extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProcessMetadata.Question', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..m<$core.String, $core.String>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'title', entryClassName: 'ProcessMetadata.Question.TitleEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..m<$core.String, $core.String>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'description', entryClassName: 'ProcessMetadata.Question.DescriptionEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..pc<ProcessMetadata_Question_VoteOption>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'choices', $pb.PbFieldType.PM, subBuilder: ProcessMetadata_Question_VoteOption.create)
    ..hasRequiredFields = false
  ;

  ProcessMetadata_Question._() : super();
  factory ProcessMetadata_Question({
    $core.Map<$core.String, $core.String> title,
    $core.Map<$core.String, $core.String> description,
    $core.Iterable<ProcessMetadata_Question_VoteOption> choices,
  }) {
    final _result = create();
    if (title != null) {
      _result.title.addAll(title);
    }
    if (description != null) {
      _result.description.addAll(description);
    }
    if (choices != null) {
      _result.choices.addAll(choices);
    }
    return _result;
  }
  factory ProcessMetadata_Question.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMetadata_Question.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProcessMetadata_Question clone() => ProcessMetadata_Question()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProcessMetadata_Question copyWith(void Function(ProcessMetadata_Question) updates) => super.copyWith((message) => updates(message as ProcessMetadata_Question)) as ProcessMetadata_Question; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata_Question create() => ProcessMetadata_Question._();
  ProcessMetadata_Question createEmptyInstance() => create();
  static $pb.PbList<ProcessMetadata_Question> createRepeated() => $pb.PbList<ProcessMetadata_Question>();
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata_Question getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProcessMetadata_Question>(create);
  static ProcessMetadata_Question _defaultInstance;

  @$pb.TagNumber(1)
  $core.Map<$core.String, $core.String> get title => $_getMap(0);

  @$pb.TagNumber(2)
  $core.Map<$core.String, $core.String> get description => $_getMap(1);

  @$pb.TagNumber(3)
  $core.List<ProcessMetadata_Question_VoteOption> get choices => $_getList(2);
}

class ProcessMetadata_Results extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProcessMetadata.Results', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'aggregation')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'display')
    ..hasRequiredFields = false
  ;

  ProcessMetadata_Results._() : super();
  factory ProcessMetadata_Results({
    $core.String aggregation,
    $core.String display,
  }) {
    final _result = create();
    if (aggregation != null) {
      _result.aggregation = aggregation;
    }
    if (display != null) {
      _result.display = display;
    }
    return _result;
  }
  factory ProcessMetadata_Results.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMetadata_Results.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProcessMetadata_Results clone() => ProcessMetadata_Results()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProcessMetadata_Results copyWith(void Function(ProcessMetadata_Results) updates) => super.copyWith((message) => updates(message as ProcessMetadata_Results)) as ProcessMetadata_Results; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata_Results create() => ProcessMetadata_Results._();
  ProcessMetadata_Results createEmptyInstance() => create();
  static $pb.PbList<ProcessMetadata_Results> createRepeated() => $pb.PbList<ProcessMetadata_Results>();
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata_Results getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProcessMetadata_Results>(create);
  static ProcessMetadata_Results _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get aggregation => $_getSZ(0);
  @$pb.TagNumber(1)
  set aggregation($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAggregation() => $_has(0);
  @$pb.TagNumber(1)
  void clearAggregation() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get display => $_getSZ(1);
  @$pb.TagNumber(2)
  set display($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasDisplay() => $_has(1);
  @$pb.TagNumber(2)
  void clearDisplay() => clearField(2);
}

class ProcessMetadata extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProcessMetadata', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'version')
    ..m<$core.String, $core.String>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'title', entryClassName: 'ProcessMetadata.TitleEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..m<$core.String, $core.String>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'description', entryClassName: 'ProcessMetadata.DescriptionEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..m<$core.String, $core.String>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'media', entryClassName: 'ProcessMetadata.MediaEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..pc<ProcessMetadata_Question>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'questions', $pb.PbFieldType.PM, subBuilder: ProcessMetadata_Question.create)
    ..aOM<ProcessMetadata_Results>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'results', subBuilder: ProcessMetadata_Results.create)
    ..m<$core.String, $core.String>(100, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'meta', entryClassName: 'ProcessMetadata.MetaEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..hasRequiredFields = false
  ;

  ProcessMetadata._() : super();
  factory ProcessMetadata({
    $core.String version,
    $core.Map<$core.String, $core.String> title,
    $core.Map<$core.String, $core.String> description,
    $core.Map<$core.String, $core.String> media,
    $core.Iterable<ProcessMetadata_Question> questions,
    ProcessMetadata_Results results,
    $core.Map<$core.String, $core.String> meta,
  }) {
    final _result = create();
    if (version != null) {
      _result.version = version;
    }
    if (title != null) {
      _result.title.addAll(title);
    }
    if (description != null) {
      _result.description.addAll(description);
    }
    if (media != null) {
      _result.media.addAll(media);
    }
    if (questions != null) {
      _result.questions.addAll(questions);
    }
    if (results != null) {
      _result.results = results;
    }
    if (meta != null) {
      _result.meta.addAll(meta);
    }
    return _result;
  }
  factory ProcessMetadata.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMetadata.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProcessMetadata clone() => ProcessMetadata()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProcessMetadata copyWith(void Function(ProcessMetadata) updates) => super.copyWith((message) => updates(message as ProcessMetadata)) as ProcessMetadata; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata create() => ProcessMetadata._();
  ProcessMetadata createEmptyInstance() => create();
  static $pb.PbList<ProcessMetadata> createRepeated() => $pb.PbList<ProcessMetadata>();
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProcessMetadata>(create);
  static ProcessMetadata _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get version => $_getSZ(0);
  @$pb.TagNumber(1)
  set version($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasVersion() => $_has(0);
  @$pb.TagNumber(1)
  void clearVersion() => clearField(1);

  @$pb.TagNumber(2)
  $core.Map<$core.String, $core.String> get title => $_getMap(1);

  @$pb.TagNumber(3)
  $core.Map<$core.String, $core.String> get description => $_getMap(2);

  @$pb.TagNumber(4)
  $core.Map<$core.String, $core.String> get media => $_getMap(3);

  @$pb.TagNumber(5)
  $core.List<ProcessMetadata_Question> get questions => $_getList(4);

  @$pb.TagNumber(6)
  ProcessMetadata_Results get results => $_getN(5);
  @$pb.TagNumber(6)
  set results(ProcessMetadata_Results v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasResults() => $_has(5);
  @$pb.TagNumber(6)
  void clearResults() => clearField(6);
  @$pb.TagNumber(6)
  ProcessMetadata_Results ensureResults() => $_ensure(5);

  @$pb.TagNumber(100)
  $core.Map<$core.String, $core.String> get meta => $_getMap(6);
}

