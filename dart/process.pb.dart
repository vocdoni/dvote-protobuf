///
//  Generated code. Do not modify.
//  source: process.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

class Process_Census extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Process.Census', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'id')
    ..aOS(2, 'merkleRoot')
    ..pPS(3, 'messagingUris')
    ..hasRequiredFields = false
  ;

  Process_Census._() : super();
  factory Process_Census() => create();
  factory Process_Census.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Process_Census.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Process_Census clone() => Process_Census()..mergeFromMessage(this);
  Process_Census copyWith(void Function(Process_Census) updates) => super.copyWith((message) => updates(message as Process_Census));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Process_Census create() => Process_Census._();
  Process_Census createEmptyInstance() => create();
  static $pb.PbList<Process_Census> createRepeated() => $pb.PbList<Process_Census>();
  static Process_Census getDefault() => _defaultInstance ??= create()..freeze();
  static Process_Census _defaultInstance;

  $core.String get id => $_getS(0, '');
  set id($core.String v) { $_setString(0, v); }
  $core.bool hasId() => $_has(0);
  void clearId() => clearField(1);

  $core.String get merkleRoot => $_getS(1, '');
  set merkleRoot($core.String v) { $_setString(1, v); }
  $core.bool hasMerkleRoot() => $_has(1);
  void clearMerkleRoot() => clearField(2);

  $core.List<$core.String> get messagingUris => $_getList(2);
}

class Process_Details_Question_VoteOption extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Process.Details.Question.VoteOption', package: const $pb.PackageName('dvote'))
    ..m<$core.String, $core.String>(1, 'title', 'Process.Details.Question.VoteOption.TitleEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..aOS(2, 'value')
    ..hasRequiredFields = false
  ;

  Process_Details_Question_VoteOption._() : super();
  factory Process_Details_Question_VoteOption() => create();
  factory Process_Details_Question_VoteOption.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Process_Details_Question_VoteOption.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Process_Details_Question_VoteOption clone() => Process_Details_Question_VoteOption()..mergeFromMessage(this);
  Process_Details_Question_VoteOption copyWith(void Function(Process_Details_Question_VoteOption) updates) => super.copyWith((message) => updates(message as Process_Details_Question_VoteOption));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Process_Details_Question_VoteOption create() => Process_Details_Question_VoteOption._();
  Process_Details_Question_VoteOption createEmptyInstance() => create();
  static $pb.PbList<Process_Details_Question_VoteOption> createRepeated() => $pb.PbList<Process_Details_Question_VoteOption>();
  static Process_Details_Question_VoteOption getDefault() => _defaultInstance ??= create()..freeze();
  static Process_Details_Question_VoteOption _defaultInstance;

  $core.Map<$core.String, $core.String> get title => $_getMap(0);

  $core.String get value => $_getS(1, '');
  set value($core.String v) { $_setString(1, v); }
  $core.bool hasValue() => $_has(1);
  void clearValue() => clearField(2);
}

class Process_Details_Question extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Process.Details.Question', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'type')
    ..m<$core.String, $core.String>(2, 'question', 'Process.Details.Question.QuestionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..m<$core.String, $core.String>(3, 'description', 'Process.Details.Question.DescriptionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..pc<Process_Details_Question_VoteOption>(4, 'voteOptions', $pb.PbFieldType.PM,Process_Details_Question_VoteOption.create)
    ..hasRequiredFields = false
  ;

  Process_Details_Question._() : super();
  factory Process_Details_Question() => create();
  factory Process_Details_Question.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Process_Details_Question.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Process_Details_Question clone() => Process_Details_Question()..mergeFromMessage(this);
  Process_Details_Question copyWith(void Function(Process_Details_Question) updates) => super.copyWith((message) => updates(message as Process_Details_Question));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Process_Details_Question create() => Process_Details_Question._();
  Process_Details_Question createEmptyInstance() => create();
  static $pb.PbList<Process_Details_Question> createRepeated() => $pb.PbList<Process_Details_Question>();
  static Process_Details_Question getDefault() => _defaultInstance ??= create()..freeze();
  static Process_Details_Question _defaultInstance;

  $core.String get type => $_getS(0, '');
  set type($core.String v) { $_setString(0, v); }
  $core.bool hasType() => $_has(0);
  void clearType() => clearField(1);

  $core.Map<$core.String, $core.String> get question => $_getMap(1);

  $core.Map<$core.String, $core.String> get description => $_getMap(2);

  $core.List<Process_Details_Question_VoteOption> get voteOptions => $_getList(3);
}

class Process_Details extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Process.Details', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'entityId')
    ..aOS(2, 'encryptionPublicKey')
    ..m<$core.String, $core.String>(3, 'title', 'Process.Details.TitleEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..m<$core.String, $core.String>(4, 'description', 'Process.Details.DescriptionEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..aOS(5, 'headerImage')
    ..pc<Process_Details_Question>(6, 'questions', $pb.PbFieldType.PM,Process_Details_Question.create)
    ..hasRequiredFields = false
  ;

  Process_Details._() : super();
  factory Process_Details() => create();
  factory Process_Details.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Process_Details.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Process_Details clone() => Process_Details()..mergeFromMessage(this);
  Process_Details copyWith(void Function(Process_Details) updates) => super.copyWith((message) => updates(message as Process_Details));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Process_Details create() => Process_Details._();
  Process_Details createEmptyInstance() => create();
  static $pb.PbList<Process_Details> createRepeated() => $pb.PbList<Process_Details>();
  static Process_Details getDefault() => _defaultInstance ??= create()..freeze();
  static Process_Details _defaultInstance;

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

  $core.List<Process_Details_Question> get questions => $_getList(5);
}

class Process extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Process', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'version')
    ..aOS(2, 'processId')
    ..aOS(3, 'type')
    ..a<$core.int>(4, 'startBlock', $pb.PbFieldType.O3)
    ..a<$core.int>(5, 'numberOfBlocks', $pb.PbFieldType.O3)
    ..a<Process_Census>(6, 'census', $pb.PbFieldType.OM, Process_Census.getDefault, Process_Census.create)
    ..a<Process_Details>(7, 'details', $pb.PbFieldType.OM, Process_Details.getDefault, Process_Details.create)
    ..hasRequiredFields = false
  ;

  Process._() : super();
  factory Process() => create();
  factory Process.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Process.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Process clone() => Process()..mergeFromMessage(this);
  Process copyWith(void Function(Process) updates) => super.copyWith((message) => updates(message as Process));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Process create() => Process._();
  Process createEmptyInstance() => create();
  static $pb.PbList<Process> createRepeated() => $pb.PbList<Process>();
  static Process getDefault() => _defaultInstance ??= create()..freeze();
  static Process _defaultInstance;

  $core.String get version => $_getS(0, '');
  set version($core.String v) { $_setString(0, v); }
  $core.bool hasVersion() => $_has(0);
  void clearVersion() => clearField(1);

  $core.String get processId => $_getS(1, '');
  set processId($core.String v) { $_setString(1, v); }
  $core.bool hasProcessId() => $_has(1);
  void clearProcessId() => clearField(2);

  $core.String get type => $_getS(2, '');
  set type($core.String v) { $_setString(2, v); }
  $core.bool hasType() => $_has(2);
  void clearType() => clearField(3);

  $core.int get startBlock => $_get(3, 0);
  set startBlock($core.int v) { $_setSignedInt32(3, v); }
  $core.bool hasStartBlock() => $_has(3);
  void clearStartBlock() => clearField(4);

  $core.int get numberOfBlocks => $_get(4, 0);
  set numberOfBlocks($core.int v) { $_setSignedInt32(4, v); }
  $core.bool hasNumberOfBlocks() => $_has(4);
  void clearNumberOfBlocks() => clearField(5);

  Process_Census get census => $_getN(5);
  set census(Process_Census v) { setField(6, v); }
  $core.bool hasCensus() => $_has(5);
  void clearCensus() => clearField(6);

  Process_Details get details => $_getN(6);
  set details(Process_Details v) { setField(7, v); }
  $core.bool hasDetails() => $_has(6);
  void clearDetails() => clearField(7);
}

