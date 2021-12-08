///
//  Generated code. Do not modify.
//  source: protocol/results.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class Results extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Results', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..pc<Result>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proposalResults', $pb.PbFieldType.PM, protoName: 'proposalResults', subBuilder: Result.create)
    ..hasRequiredFields = false
  ;

  Results._() : super();
  factory Results({
    $core.List<$core.int>? electionId,
    $core.Iterable<Result>? proposalResults,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    if (proposalResults != null) {
      _result.proposalResults.addAll(proposalResults);
    }
    return _result;
  }
  factory Results.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Results.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Results clone() => Results()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Results copyWith(void Function(Results) updates) => super.copyWith((message) => updates(message as Results)) as Results; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Results create() => Results._();
  Results createEmptyInstance() => create();
  static $pb.PbList<Results> createRepeated() => $pb.PbList<Results>();
  @$core.pragma('dart2js:noInline')
  static Results getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Results>(create);
  static Results? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<Result> get proposalResults => $_getList(1);
}

enum Result_Body {
  pendingResult, 
  approvalResult, 
  singleChoiceResult, 
  quadraticResult, 
  rankedResult, 
  spreadResult, 
  notSet
}

class Result extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Result_Body> _Result_BodyByTag = {
    1 : Result_Body.pendingResult,
    2 : Result_Body.approvalResult,
    3 : Result_Body.singleChoiceResult,
    4 : Result_Body.quadraticResult,
    5 : Result_Body.rankedResult,
    6 : Result_Body.spreadResult,
    0 : Result_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Result', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2, 3, 4, 5, 6])
    ..aOM<PendingResults>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'pendingResult', protoName: 'pendingResult', subBuilder: PendingResults.create)
    ..aOM<ApprovalResult>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'approvalResult', protoName: 'approvalResult', subBuilder: ApprovalResult.create)
    ..aOM<SingleChoiceResult>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'singleChoiceResult', protoName: 'singleChoiceResult', subBuilder: SingleChoiceResult.create)
    ..aOM<QuadraticResult>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'quadraticResult', protoName: 'quadraticResult', subBuilder: QuadraticResult.create)
    ..aOM<RankedResult>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'rankedResult', protoName: 'rankedResult', subBuilder: RankedResult.create)
    ..aOM<SpreadResult>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'spreadResult', protoName: 'spreadResult', subBuilder: SpreadResult.create)
    ..hasRequiredFields = false
  ;

  Result._() : super();
  factory Result({
    PendingResults? pendingResult,
    ApprovalResult? approvalResult,
    SingleChoiceResult? singleChoiceResult,
    QuadraticResult? quadraticResult,
    RankedResult? rankedResult,
    SpreadResult? spreadResult,
  }) {
    final _result = create();
    if (pendingResult != null) {
      _result.pendingResult = pendingResult;
    }
    if (approvalResult != null) {
      _result.approvalResult = approvalResult;
    }
    if (singleChoiceResult != null) {
      _result.singleChoiceResult = singleChoiceResult;
    }
    if (quadraticResult != null) {
      _result.quadraticResult = quadraticResult;
    }
    if (rankedResult != null) {
      _result.rankedResult = rankedResult;
    }
    if (spreadResult != null) {
      _result.spreadResult = spreadResult;
    }
    return _result;
  }
  factory Result.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Result.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Result clone() => Result()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Result copyWith(void Function(Result) updates) => super.copyWith((message) => updates(message as Result)) as Result; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Result create() => Result._();
  Result createEmptyInstance() => create();
  static $pb.PbList<Result> createRepeated() => $pb.PbList<Result>();
  @$core.pragma('dart2js:noInline')
  static Result getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Result>(create);
  static Result? _defaultInstance;

  Result_Body whichBody() => _Result_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  PendingResults get pendingResult => $_getN(0);
  @$pb.TagNumber(1)
  set pendingResult(PendingResults v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasPendingResult() => $_has(0);
  @$pb.TagNumber(1)
  void clearPendingResult() => clearField(1);
  @$pb.TagNumber(1)
  PendingResults ensurePendingResult() => $_ensure(0);

  @$pb.TagNumber(2)
  ApprovalResult get approvalResult => $_getN(1);
  @$pb.TagNumber(2)
  set approvalResult(ApprovalResult v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasApprovalResult() => $_has(1);
  @$pb.TagNumber(2)
  void clearApprovalResult() => clearField(2);
  @$pb.TagNumber(2)
  ApprovalResult ensureApprovalResult() => $_ensure(1);

  @$pb.TagNumber(3)
  SingleChoiceResult get singleChoiceResult => $_getN(2);
  @$pb.TagNumber(3)
  set singleChoiceResult(SingleChoiceResult v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasSingleChoiceResult() => $_has(2);
  @$pb.TagNumber(3)
  void clearSingleChoiceResult() => clearField(3);
  @$pb.TagNumber(3)
  SingleChoiceResult ensureSingleChoiceResult() => $_ensure(2);

  @$pb.TagNumber(4)
  QuadraticResult get quadraticResult => $_getN(3);
  @$pb.TagNumber(4)
  set quadraticResult(QuadraticResult v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasQuadraticResult() => $_has(3);
  @$pb.TagNumber(4)
  void clearQuadraticResult() => clearField(4);
  @$pb.TagNumber(4)
  QuadraticResult ensureQuadraticResult() => $_ensure(3);

  @$pb.TagNumber(5)
  RankedResult get rankedResult => $_getN(4);
  @$pb.TagNumber(5)
  set rankedResult(RankedResult v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasRankedResult() => $_has(4);
  @$pb.TagNumber(5)
  void clearRankedResult() => clearField(5);
  @$pb.TagNumber(5)
  RankedResult ensureRankedResult() => $_ensure(4);

  @$pb.TagNumber(6)
  SpreadResult get spreadResult => $_getN(5);
  @$pb.TagNumber(6)
  set spreadResult(SpreadResult v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasSpreadResult() => $_has(5);
  @$pb.TagNumber(6)
  void clearSpreadResult() => clearField(6);
  @$pb.TagNumber(6)
  SpreadResult ensureSpreadResult() => $_ensure(5);
}

class PendingResults extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PendingResults', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  PendingResults._() : super();
  factory PendingResults() => create();
  factory PendingResults.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PendingResults.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PendingResults clone() => PendingResults()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PendingResults copyWith(void Function(PendingResults) updates) => super.copyWith((message) => updates(message as PendingResults)) as PendingResults; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PendingResults create() => PendingResults._();
  PendingResults createEmptyInstance() => create();
  static $pb.PbList<PendingResults> createRepeated() => $pb.PbList<PendingResults>();
  @$core.pragma('dart2js:noInline')
  static PendingResults getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PendingResults>(create);
  static PendingResults? _defaultInstance;
}

class ApprovalResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ApprovalResult', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'rejected')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'approved')
    ..hasRequiredFields = false
  ;

  ApprovalResult._() : super();
  factory ApprovalResult({
    $core.String? rejected,
    $core.String? approved,
  }) {
    final _result = create();
    if (rejected != null) {
      _result.rejected = rejected;
    }
    if (approved != null) {
      _result.approved = approved;
    }
    return _result;
  }
  factory ApprovalResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ApprovalResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ApprovalResult clone() => ApprovalResult()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ApprovalResult copyWith(void Function(ApprovalResult) updates) => super.copyWith((message) => updates(message as ApprovalResult)) as ApprovalResult; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ApprovalResult create() => ApprovalResult._();
  ApprovalResult createEmptyInstance() => create();
  static $pb.PbList<ApprovalResult> createRepeated() => $pb.PbList<ApprovalResult>();
  @$core.pragma('dart2js:noInline')
  static ApprovalResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ApprovalResult>(create);
  static ApprovalResult? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get rejected => $_getSZ(0);
  @$pb.TagNumber(1)
  set rejected($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasRejected() => $_has(0);
  @$pb.TagNumber(1)
  void clearRejected() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get approved => $_getSZ(1);
  @$pb.TagNumber(2)
  set approved($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasApproved() => $_has(1);
  @$pb.TagNumber(2)
  void clearApproved() => clearField(2);
}

class SingleChoiceResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SingleChoiceResult', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..pPS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'votes')
    ..hasRequiredFields = false
  ;

  SingleChoiceResult._() : super();
  factory SingleChoiceResult({
    $core.Iterable<$core.String>? votes,
  }) {
    final _result = create();
    if (votes != null) {
      _result.votes.addAll(votes);
    }
    return _result;
  }
  factory SingleChoiceResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SingleChoiceResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SingleChoiceResult clone() => SingleChoiceResult()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SingleChoiceResult copyWith(void Function(SingleChoiceResult) updates) => super.copyWith((message) => updates(message as SingleChoiceResult)) as SingleChoiceResult; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SingleChoiceResult create() => SingleChoiceResult._();
  SingleChoiceResult createEmptyInstance() => create();
  static $pb.PbList<SingleChoiceResult> createRepeated() => $pb.PbList<SingleChoiceResult>();
  @$core.pragma('dart2js:noInline')
  static SingleChoiceResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SingleChoiceResult>(create);
  static SingleChoiceResult? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.String> get votes => $_getList(0);
}

class QuadraticResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'QuadraticResult', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..pPS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'points')
    ..hasRequiredFields = false
  ;

  QuadraticResult._() : super();
  factory QuadraticResult({
    $core.Iterable<$core.String>? points,
  }) {
    final _result = create();
    if (points != null) {
      _result.points.addAll(points);
    }
    return _result;
  }
  factory QuadraticResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory QuadraticResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  QuadraticResult clone() => QuadraticResult()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  QuadraticResult copyWith(void Function(QuadraticResult) updates) => super.copyWith((message) => updates(message as QuadraticResult)) as QuadraticResult; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static QuadraticResult create() => QuadraticResult._();
  QuadraticResult createEmptyInstance() => create();
  static $pb.PbList<QuadraticResult> createRepeated() => $pb.PbList<QuadraticResult>();
  @$core.pragma('dart2js:noInline')
  static QuadraticResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<QuadraticResult>(create);
  static QuadraticResult? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.String> get points => $_getList(0);
}

class RankedResult_RankedChoiceResult_RankedChoicePositionResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'RankedResult.RankedChoiceResult.RankedChoicePositionResult', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'position', $pb.PbFieldType.O3)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'points')
    ..hasRequiredFields = false
  ;

  RankedResult_RankedChoiceResult_RankedChoicePositionResult._() : super();
  factory RankedResult_RankedChoiceResult_RankedChoicePositionResult({
    $core.int? position,
    $core.String? points,
  }) {
    final _result = create();
    if (position != null) {
      _result.position = position;
    }
    if (points != null) {
      _result.points = points;
    }
    return _result;
  }
  factory RankedResult_RankedChoiceResult_RankedChoicePositionResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory RankedResult_RankedChoiceResult_RankedChoicePositionResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  RankedResult_RankedChoiceResult_RankedChoicePositionResult clone() => RankedResult_RankedChoiceResult_RankedChoicePositionResult()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  RankedResult_RankedChoiceResult_RankedChoicePositionResult copyWith(void Function(RankedResult_RankedChoiceResult_RankedChoicePositionResult) updates) => super.copyWith((message) => updates(message as RankedResult_RankedChoiceResult_RankedChoicePositionResult)) as RankedResult_RankedChoiceResult_RankedChoicePositionResult; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static RankedResult_RankedChoiceResult_RankedChoicePositionResult create() => RankedResult_RankedChoiceResult_RankedChoicePositionResult._();
  RankedResult_RankedChoiceResult_RankedChoicePositionResult createEmptyInstance() => create();
  static $pb.PbList<RankedResult_RankedChoiceResult_RankedChoicePositionResult> createRepeated() => $pb.PbList<RankedResult_RankedChoiceResult_RankedChoicePositionResult>();
  @$core.pragma('dart2js:noInline')
  static RankedResult_RankedChoiceResult_RankedChoicePositionResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<RankedResult_RankedChoiceResult_RankedChoicePositionResult>(create);
  static RankedResult_RankedChoiceResult_RankedChoicePositionResult? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get position => $_getIZ(0);
  @$pb.TagNumber(1)
  set position($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPosition() => $_has(0);
  @$pb.TagNumber(1)
  void clearPosition() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get points => $_getSZ(1);
  @$pb.TagNumber(2)
  set points($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasPoints() => $_has(1);
  @$pb.TagNumber(2)
  void clearPoints() => clearField(2);
}

class RankedResult_RankedChoiceResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'RankedResult.RankedChoiceResult', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..pc<RankedResult_RankedChoiceResult_RankedChoicePositionResult>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'entries', $pb.PbFieldType.PM, subBuilder: RankedResult_RankedChoiceResult_RankedChoicePositionResult.create)
    ..hasRequiredFields = false
  ;

  RankedResult_RankedChoiceResult._() : super();
  factory RankedResult_RankedChoiceResult({
    $core.Iterable<RankedResult_RankedChoiceResult_RankedChoicePositionResult>? entries,
  }) {
    final _result = create();
    if (entries != null) {
      _result.entries.addAll(entries);
    }
    return _result;
  }
  factory RankedResult_RankedChoiceResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory RankedResult_RankedChoiceResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  RankedResult_RankedChoiceResult clone() => RankedResult_RankedChoiceResult()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  RankedResult_RankedChoiceResult copyWith(void Function(RankedResult_RankedChoiceResult) updates) => super.copyWith((message) => updates(message as RankedResult_RankedChoiceResult)) as RankedResult_RankedChoiceResult; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static RankedResult_RankedChoiceResult create() => RankedResult_RankedChoiceResult._();
  RankedResult_RankedChoiceResult createEmptyInstance() => create();
  static $pb.PbList<RankedResult_RankedChoiceResult> createRepeated() => $pb.PbList<RankedResult_RankedChoiceResult>();
  @$core.pragma('dart2js:noInline')
  static RankedResult_RankedChoiceResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<RankedResult_RankedChoiceResult>(create);
  static RankedResult_RankedChoiceResult? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<RankedResult_RankedChoiceResult_RankedChoicePositionResult> get entries => $_getList(0);
}

class RankedResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'RankedResult', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..pc<RankedResult_RankedChoiceResult>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'choices', $pb.PbFieldType.PM, subBuilder: RankedResult_RankedChoiceResult.create)
    ..hasRequiredFields = false
  ;

  RankedResult._() : super();
  factory RankedResult({
    $core.Iterable<RankedResult_RankedChoiceResult>? choices,
  }) {
    final _result = create();
    if (choices != null) {
      _result.choices.addAll(choices);
    }
    return _result;
  }
  factory RankedResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory RankedResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  RankedResult clone() => RankedResult()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  RankedResult copyWith(void Function(RankedResult) updates) => super.copyWith((message) => updates(message as RankedResult)) as RankedResult; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static RankedResult create() => RankedResult._();
  RankedResult createEmptyInstance() => create();
  static $pb.PbList<RankedResult> createRepeated() => $pb.PbList<RankedResult>();
  @$core.pragma('dart2js:noInline')
  static RankedResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<RankedResult>(create);
  static RankedResult? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<RankedResult_RankedChoiceResult> get choices => $_getList(0);
}

class SpreadResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SpreadResult', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..pPS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'points')
    ..hasRequiredFields = false
  ;

  SpreadResult._() : super();
  factory SpreadResult({
    $core.Iterable<$core.String>? points,
  }) {
    final _result = create();
    if (points != null) {
      _result.points.addAll(points);
    }
    return _result;
  }
  factory SpreadResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SpreadResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SpreadResult clone() => SpreadResult()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SpreadResult copyWith(void Function(SpreadResult) updates) => super.copyWith((message) => updates(message as SpreadResult)) as SpreadResult; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SpreadResult create() => SpreadResult._();
  SpreadResult createEmptyInstance() => create();
  static $pb.PbList<SpreadResult> createRepeated() => $pb.PbList<SpreadResult>();
  @$core.pragma('dart2js:noInline')
  static SpreadResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SpreadResult>(create);
  static SpreadResult? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.String> get points => $_getList(0);
}

