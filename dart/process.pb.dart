///
//  Generated code. Do not modify.
//  source: process.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

class ProcessMetadataStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ProcessMetadataStore', package: const $pb.PackageName('dvote'))
    ..pc<ProcessMetadata>(1, 'items', $pb.PbFieldType.PM,ProcessMetadata.create)
    ..hasRequiredFields = false
  ;

  ProcessMetadataStore._() : super();
  factory ProcessMetadataStore() => create();
  factory ProcessMetadataStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMetadataStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ProcessMetadataStore clone() => ProcessMetadataStore()..mergeFromMessage(this);
  ProcessMetadataStore copyWith(void Function(ProcessMetadataStore) updates) => super.copyWith((message) => updates(message as ProcessMetadataStore));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMetadataStore create() => ProcessMetadataStore._();
  ProcessMetadataStore createEmptyInstance() => create();
  static $pb.PbList<ProcessMetadataStore> createRepeated() => $pb.PbList<ProcessMetadataStore>();
  static ProcessMetadataStore getDefault() => _defaultInstance ??= create()..freeze();
  static ProcessMetadataStore _defaultInstance;

  $core.List<ProcessMetadata> get items => $_getList(0);
}

class ProcessMetadata_Census extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ProcessMetadata.Census', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'merkleRoot')
    ..aOS(2, 'merkleTree')
    ..hasRequiredFields = false
  ;

  ProcessMetadata_Census._() : super();
  factory ProcessMetadata_Census() => create();
  factory ProcessMetadata_Census.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMetadata_Census.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ProcessMetadata_Census clone() => ProcessMetadata_Census()..mergeFromMessage(this);
  ProcessMetadata_Census copyWith(void Function(ProcessMetadata_Census) updates) => super.copyWith((message) => updates(message as ProcessMetadata_Census));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata_Census create() => ProcessMetadata_Census._();
  ProcessMetadata_Census createEmptyInstance() => create();
  static $pb.PbList<ProcessMetadata_Census> createRepeated() => $pb.PbList<ProcessMetadata_Census>();
  static ProcessMetadata_Census getDefault() => _defaultInstance ??= create()..freeze();
  static ProcessMetadata_Census _defaultInstance;

  $core.String get merkleRoot => $_getS(0, '');
  set merkleRoot($core.String v) { $_setString(0, v); }
  $core.bool hasMerkleRoot() => $_has(0);
  void clearMerkleRoot() => clearField(1);

  $core.String get merkleTree => $_getS(1, '');
  set merkleTree($core.String v) { $_setString(1, v); }
  $core.bool hasMerkleTree() => $_has(1);
  void clearMerkleTree() => clearField(2);
}

class ProcessMetadata_Details_Question_VoteOption extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ProcessMetadata.Details.Question.VoteOption', package: const $pb.PackageName('dvote'))
    ..m<$core.String, $core.String>(1, 'title', 'ProcessMetadata.Details.Question.VoteOption.TitleEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..aOS(2, 'value')
    ..hasRequiredFields = false
  ;

  ProcessMetadata_Details_Question_VoteOption._() : super();
  factory ProcessMetadata_Details_Question_VoteOption() => create();
  factory ProcessMetadata_Details_Question_VoteOption.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMetadata_Details_Question_VoteOption.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ProcessMetadata_Details_Question_VoteOption clone() => ProcessMetadata_Details_Question_VoteOption()..mergeFromMessage(this);
  ProcessMetadata_Details_Question_VoteOption copyWith(void Function(ProcessMetadata_Details_Question_VoteOption) updates) => super.copyWith((message) => updates(message as ProcessMetadata_Details_Question_VoteOption));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata_Details_Question_VoteOption create() => ProcessMetadata_Details_Question_VoteOption._();
  ProcessMetadata_Details_Question_VoteOption createEmptyInstance() => create();
  static $pb.PbList<ProcessMetadata_Details_Question_VoteOption> createRepeated() => $pb.PbList<ProcessMetadata_Details_Question_VoteOption>();
  static ProcessMetadata_Details_Question_VoteOption getDefault() => _defaultInstance ??= create()..freeze();
  static ProcessMetadata_Details_Question_VoteOption _defaultInstance;

  $core.Map<$core.String, $core.String> get title => $_getMap(0);

  $core.String get value => $_getS(1, '');
  set value($core.String v) { $_setString(1, v); }
  $core.bool hasValue() => $_has(1);
  void clearValue() => clearField(2);
}

class ProcessMetadata_Details_Question extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ProcessMetadata.Details.Question', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'type')
    ..m<$core.String, $core.String>(2, 'question', 'ProcessMetadata.Details.Question.QuestionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..m<$core.String, $core.String>(3, 'description', 'ProcessMetadata.Details.Question.DescriptionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..pc<ProcessMetadata_Details_Question_VoteOption>(4, 'voteOptions', $pb.PbFieldType.PM,ProcessMetadata_Details_Question_VoteOption.create)
    ..hasRequiredFields = false
  ;

  ProcessMetadata_Details_Question._() : super();
  factory ProcessMetadata_Details_Question() => create();
  factory ProcessMetadata_Details_Question.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMetadata_Details_Question.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ProcessMetadata_Details_Question clone() => ProcessMetadata_Details_Question()..mergeFromMessage(this);
  ProcessMetadata_Details_Question copyWith(void Function(ProcessMetadata_Details_Question) updates) => super.copyWith((message) => updates(message as ProcessMetadata_Details_Question));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata_Details_Question create() => ProcessMetadata_Details_Question._();
  ProcessMetadata_Details_Question createEmptyInstance() => create();
  static $pb.PbList<ProcessMetadata_Details_Question> createRepeated() => $pb.PbList<ProcessMetadata_Details_Question>();
  static ProcessMetadata_Details_Question getDefault() => _defaultInstance ??= create()..freeze();
  static ProcessMetadata_Details_Question _defaultInstance;

  $core.String get type => $_getS(0, '');
  set type($core.String v) { $_setString(0, v); }
  $core.bool hasType() => $_has(0);
  void clearType() => clearField(1);

  $core.Map<$core.String, $core.String> get question => $_getMap(1);

  $core.Map<$core.String, $core.String> get description => $_getMap(2);

  $core.List<ProcessMetadata_Details_Question_VoteOption> get voteOptions => $_getList(3);
}

class ProcessMetadata_Details extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ProcessMetadata.Details', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'entityId')
    ..aOS(2, 'encryptionPublicKey')
    ..m<$core.String, $core.String>(3, 'title', 'ProcessMetadata.Details.TitleEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..m<$core.String, $core.String>(4, 'description', 'ProcessMetadata.Details.DescriptionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..aOS(5, 'headerImage')
    ..pc<ProcessMetadata_Details_Question>(6, 'questions', $pb.PbFieldType.PM,ProcessMetadata_Details_Question.create)
    ..hasRequiredFields = false
  ;

  ProcessMetadata_Details._() : super();
  factory ProcessMetadata_Details() => create();
  factory ProcessMetadata_Details.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMetadata_Details.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ProcessMetadata_Details clone() => ProcessMetadata_Details()..mergeFromMessage(this);
  ProcessMetadata_Details copyWith(void Function(ProcessMetadata_Details) updates) => super.copyWith((message) => updates(message as ProcessMetadata_Details));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata_Details create() => ProcessMetadata_Details._();
  ProcessMetadata_Details createEmptyInstance() => create();
  static $pb.PbList<ProcessMetadata_Details> createRepeated() => $pb.PbList<ProcessMetadata_Details>();
  static ProcessMetadata_Details getDefault() => _defaultInstance ??= create()..freeze();
  static ProcessMetadata_Details _defaultInstance;

  $core.String get entityId => $_getS(0, '');
  set entityId($core.String v) { $_setString(0, v); }
  $core.bool hasEntityId() => $_has(0);
  void clearEntityId() => clearField(1);

  $core.String get encryptionPublicKey => $_getS(1, '');
  set encryptionPublicKey($core.String v) { $_setString(1, v); }
  $core.bool hasEncryptionPublicKey() => $_has(1);
  void clearEncryptionPublicKey() => clearField(2);

  $core.Map<$core.String, $core.String> get title => $_getMap(2);

  $core.Map<$core.String, $core.String> get description => $_getMap(3);

  $core.String get headerImage => $_getS(4, '');
  set headerImage($core.String v) { $_setString(4, v); }
  $core.bool hasHeaderImage() => $_has(4);
  void clearHeaderImage() => clearField(5);

  $core.List<ProcessMetadata_Details_Question> get questions => $_getList(5);
}

class ProcessMetadata extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('ProcessMetadata', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'version')
    ..aOS(2, 'type')
    ..a<$core.int>(3, 'startBlock', $pb.PbFieldType.O3)
    ..a<$core.int>(4, 'numberOfBlocks', $pb.PbFieldType.O3)
    ..a<ProcessMetadata_Census>(5, 'census', $pb.PbFieldType.OM, ProcessMetadata_Census.getDefault, ProcessMetadata_Census.create)
    ..a<ProcessMetadata_Details>(6, 'details', $pb.PbFieldType.OM, ProcessMetadata_Details.getDefault, ProcessMetadata_Details.create)
    ..m<$core.String, $core.String>(100, 'meta', 'ProcessMetadata.MetaEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..hasRequiredFields = false
  ;

  ProcessMetadata._() : super();
  factory ProcessMetadata() => create();
  factory ProcessMetadata.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMetadata.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  ProcessMetadata clone() => ProcessMetadata()..mergeFromMessage(this);
  ProcessMetadata copyWith(void Function(ProcessMetadata) updates) => super.copyWith((message) => updates(message as ProcessMetadata));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMetadata create() => ProcessMetadata._();
  ProcessMetadata createEmptyInstance() => create();
  static $pb.PbList<ProcessMetadata> createRepeated() => $pb.PbList<ProcessMetadata>();
  static ProcessMetadata getDefault() => _defaultInstance ??= create()..freeze();
  static ProcessMetadata _defaultInstance;

  $core.String get version => $_getS(0, '');
  set version($core.String v) { $_setString(0, v); }
  $core.bool hasVersion() => $_has(0);
  void clearVersion() => clearField(1);

  $core.String get type => $_getS(1, '');
  set type($core.String v) { $_setString(1, v); }
  $core.bool hasType() => $_has(1);
  void clearType() => clearField(2);

  $core.int get startBlock => $_get(2, 0);
  set startBlock($core.int v) { $_setSignedInt32(2, v); }
  $core.bool hasStartBlock() => $_has(2);
  void clearStartBlock() => clearField(3);

  $core.int get numberOfBlocks => $_get(3, 0);
  set numberOfBlocks($core.int v) { $_setSignedInt32(3, v); }
  $core.bool hasNumberOfBlocks() => $_has(3);
  void clearNumberOfBlocks() => clearField(4);

  ProcessMetadata_Census get census => $_getN(4);
  set census(ProcessMetadata_Census v) { setField(5, v); }
  $core.bool hasCensus() => $_has(4);
  void clearCensus() => clearField(5);

  ProcessMetadata_Details get details => $_getN(5);
  set details(ProcessMetadata_Details v) { setField(6, v); }
  $core.bool hasDetails() => $_has(5);
  void clearDetails() => clearField(6);

  $core.Map<$core.String, $core.String> get meta => $_getMap(6);
}

