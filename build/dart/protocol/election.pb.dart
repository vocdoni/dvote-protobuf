///
//  Generated code. Do not modify.
//  source: protocol/election.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'census.pb.dart' as $0;

import 'election.pbenum.dart';

export 'election.pbenum.dart';

class Election extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Election', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOM<$0.Census>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'primaryCensus', protoName: 'primaryCensus', subBuilder: $0.Census.create)
    ..aOM<$0.Census>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'secondaryCensus', protoName: 'secondaryCensus', subBuilder: $0.Census.create)
    ..aOM<$0.Census>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'tertiaryCensus', protoName: 'tertiaryCensus', subBuilder: $0.Census.create)
    ..a<$core.int>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusSize', $pb.PbFieldType.O3, protoName: 'censusSize')
    ..pc<Proposal>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proposals', $pb.PbFieldType.PM, subBuilder: Proposal.create)
    ..aOM<Privacy>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'privacy', subBuilder: Privacy.create)
    ..e<Lifecycle>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'lifecycle', $pb.PbFieldType.OE, defaultOrMaker: Lifecycle.PAUSED_MUTABLE, valueOf: Lifecycle.valueOf, enumValues: Lifecycle.values)
    ..aOS(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'metadataUri', protoName: 'metadataUri')
    ..a<$core.int>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'startBlock', $pb.PbFieldType.O3, protoName: 'startBlock')
    ..a<$core.int>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'endBlock', $pb.PbFieldType.O3, protoName: 'endBlock')
    ..hasRequiredFields = false
  ;

  Election._() : super();
  factory Election({
    $0.Census? primaryCensus,
    $0.Census? secondaryCensus,
    $0.Census? tertiaryCensus,
    $core.int? censusSize,
    $core.Iterable<Proposal>? proposals,
    Privacy? privacy,
    Lifecycle? lifecycle,
    $core.String? metadataUri,
    $core.int? startBlock,
    $core.int? endBlock,
  }) {
    final _result = create();
    if (primaryCensus != null) {
      _result.primaryCensus = primaryCensus;
    }
    if (secondaryCensus != null) {
      _result.secondaryCensus = secondaryCensus;
    }
    if (tertiaryCensus != null) {
      _result.tertiaryCensus = tertiaryCensus;
    }
    if (censusSize != null) {
      _result.censusSize = censusSize;
    }
    if (proposals != null) {
      _result.proposals.addAll(proposals);
    }
    if (privacy != null) {
      _result.privacy = privacy;
    }
    if (lifecycle != null) {
      _result.lifecycle = lifecycle;
    }
    if (metadataUri != null) {
      _result.metadataUri = metadataUri;
    }
    if (startBlock != null) {
      _result.startBlock = startBlock;
    }
    if (endBlock != null) {
      _result.endBlock = endBlock;
    }
    return _result;
  }
  factory Election.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Election.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Election clone() => Election()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Election copyWith(void Function(Election) updates) => super.copyWith((message) => updates(message as Election)) as Election; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Election create() => Election._();
  Election createEmptyInstance() => create();
  static $pb.PbList<Election> createRepeated() => $pb.PbList<Election>();
  @$core.pragma('dart2js:noInline')
  static Election getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Election>(create);
  static Election? _defaultInstance;

  @$pb.TagNumber(1)
  $0.Census get primaryCensus => $_getN(0);
  @$pb.TagNumber(1)
  set primaryCensus($0.Census v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasPrimaryCensus() => $_has(0);
  @$pb.TagNumber(1)
  void clearPrimaryCensus() => clearField(1);
  @$pb.TagNumber(1)
  $0.Census ensurePrimaryCensus() => $_ensure(0);

  @$pb.TagNumber(2)
  $0.Census get secondaryCensus => $_getN(1);
  @$pb.TagNumber(2)
  set secondaryCensus($0.Census v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasSecondaryCensus() => $_has(1);
  @$pb.TagNumber(2)
  void clearSecondaryCensus() => clearField(2);
  @$pb.TagNumber(2)
  $0.Census ensureSecondaryCensus() => $_ensure(1);

  @$pb.TagNumber(3)
  $0.Census get tertiaryCensus => $_getN(2);
  @$pb.TagNumber(3)
  set tertiaryCensus($0.Census v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasTertiaryCensus() => $_has(2);
  @$pb.TagNumber(3)
  void clearTertiaryCensus() => clearField(3);
  @$pb.TagNumber(3)
  $0.Census ensureTertiaryCensus() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.int get censusSize => $_getIZ(3);
  @$pb.TagNumber(4)
  set censusSize($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasCensusSize() => $_has(3);
  @$pb.TagNumber(4)
  void clearCensusSize() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<Proposal> get proposals => $_getList(4);

  @$pb.TagNumber(6)
  Privacy get privacy => $_getN(5);
  @$pb.TagNumber(6)
  set privacy(Privacy v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasPrivacy() => $_has(5);
  @$pb.TagNumber(6)
  void clearPrivacy() => clearField(6);
  @$pb.TagNumber(6)
  Privacy ensurePrivacy() => $_ensure(5);

  @$pb.TagNumber(7)
  Lifecycle get lifecycle => $_getN(6);
  @$pb.TagNumber(7)
  set lifecycle(Lifecycle v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasLifecycle() => $_has(6);
  @$pb.TagNumber(7)
  void clearLifecycle() => clearField(7);

  @$pb.TagNumber(8)
  $core.String get metadataUri => $_getSZ(7);
  @$pb.TagNumber(8)
  set metadataUri($core.String v) { $_setString(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasMetadataUri() => $_has(7);
  @$pb.TagNumber(8)
  void clearMetadataUri() => clearField(8);

  @$pb.TagNumber(9)
  $core.int get startBlock => $_getIZ(8);
  @$pb.TagNumber(9)
  set startBlock($core.int v) { $_setSignedInt32(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasStartBlock() => $_has(8);
  @$pb.TagNumber(9)
  void clearStartBlock() => clearField(9);

  @$pb.TagNumber(10)
  $core.int get endBlock => $_getIZ(9);
  @$pb.TagNumber(10)
  set endBlock($core.int v) { $_setSignedInt32(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasEndBlock() => $_has(9);
  @$pb.TagNumber(10)
  void clearEndBlock() => clearField(10);
}

class Privacy extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Privacy', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOB(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'realTimeResults', protoName: 'realTimeResults')
    ..e<Privacy_VoteAnonimity>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'voteAnonymity', $pb.PbFieldType.OE, protoName: 'voteAnonymity', defaultOrMaker: Privacy_VoteAnonimity.NONE, valueOf: Privacy_VoteAnonimity.valueOf, enumValues: Privacy_VoteAnonimity.values)
    ..hasRequiredFields = false
  ;

  Privacy._() : super();
  factory Privacy({
    $core.bool? realTimeResults,
    Privacy_VoteAnonimity? voteAnonymity,
  }) {
    final _result = create();
    if (realTimeResults != null) {
      _result.realTimeResults = realTimeResults;
    }
    if (voteAnonymity != null) {
      _result.voteAnonymity = voteAnonymity;
    }
    return _result;
  }
  factory Privacy.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Privacy.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Privacy clone() => Privacy()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Privacy copyWith(void Function(Privacy) updates) => super.copyWith((message) => updates(message as Privacy)) as Privacy; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Privacy create() => Privacy._();
  Privacy createEmptyInstance() => create();
  static $pb.PbList<Privacy> createRepeated() => $pb.PbList<Privacy>();
  @$core.pragma('dart2js:noInline')
  static Privacy getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Privacy>(create);
  static Privacy? _defaultInstance;

  @$pb.TagNumber(1)
  $core.bool get realTimeResults => $_getBF(0);
  @$pb.TagNumber(1)
  set realTimeResults($core.bool v) { $_setBool(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasRealTimeResults() => $_has(0);
  @$pb.TagNumber(1)
  void clearRealTimeResults() => clearField(1);

  @$pb.TagNumber(2)
  Privacy_VoteAnonimity get voteAnonymity => $_getN(1);
  @$pb.TagNumber(2)
  set voteAnonymity(Privacy_VoteAnonimity v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasVoteAnonymity() => $_has(1);
  @$pb.TagNumber(2)
  void clearVoteAnonymity() => clearField(2);
}

enum Proposal_Proposal {
  approvalProposal, 
  singleChoiceProposal, 
  quadraticProposal, 
  rankedProposal, 
  spreadProposal, 
  notSet
}

class Proposal extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Proposal_Proposal> _Proposal_ProposalByTag = {
    1 : Proposal_Proposal.approvalProposal,
    2 : Proposal_Proposal.singleChoiceProposal,
    3 : Proposal_Proposal.quadraticProposal,
    4 : Proposal_Proposal.rankedProposal,
    5 : Proposal_Proposal.spreadProposal,
    0 : Proposal_Proposal.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Proposal', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2, 3, 4, 5])
    ..aOM<ApprovalProposal>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'approvalProposal', protoName: 'approvalProposal', subBuilder: ApprovalProposal.create)
    ..aOM<SingleChoiceProposal>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'singleChoiceProposal', protoName: 'singleChoiceProposal', subBuilder: SingleChoiceProposal.create)
    ..aOM<QuadraticProposal>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'quadraticProposal', protoName: 'quadraticProposal', subBuilder: QuadraticProposal.create)
    ..aOM<RankedProposal>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'rankedProposal', protoName: 'rankedProposal', subBuilder: RankedProposal.create)
    ..aOM<SpreadProposal>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'spreadProposal', protoName: 'spreadProposal', subBuilder: SpreadProposal.create)
    ..hasRequiredFields = false
  ;

  Proposal._() : super();
  factory Proposal({
    ApprovalProposal? approvalProposal,
    SingleChoiceProposal? singleChoiceProposal,
    QuadraticProposal? quadraticProposal,
    RankedProposal? rankedProposal,
    SpreadProposal? spreadProposal,
  }) {
    final _result = create();
    if (approvalProposal != null) {
      _result.approvalProposal = approvalProposal;
    }
    if (singleChoiceProposal != null) {
      _result.singleChoiceProposal = singleChoiceProposal;
    }
    if (quadraticProposal != null) {
      _result.quadraticProposal = quadraticProposal;
    }
    if (rankedProposal != null) {
      _result.rankedProposal = rankedProposal;
    }
    if (spreadProposal != null) {
      _result.spreadProposal = spreadProposal;
    }
    return _result;
  }
  factory Proposal.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Proposal.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Proposal clone() => Proposal()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Proposal copyWith(void Function(Proposal) updates) => super.copyWith((message) => updates(message as Proposal)) as Proposal; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Proposal create() => Proposal._();
  Proposal createEmptyInstance() => create();
  static $pb.PbList<Proposal> createRepeated() => $pb.PbList<Proposal>();
  @$core.pragma('dart2js:noInline')
  static Proposal getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Proposal>(create);
  static Proposal? _defaultInstance;

  Proposal_Proposal whichProposal() => _Proposal_ProposalByTag[$_whichOneof(0)]!;
  void clearProposal() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  ApprovalProposal get approvalProposal => $_getN(0);
  @$pb.TagNumber(1)
  set approvalProposal(ApprovalProposal v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasApprovalProposal() => $_has(0);
  @$pb.TagNumber(1)
  void clearApprovalProposal() => clearField(1);
  @$pb.TagNumber(1)
  ApprovalProposal ensureApprovalProposal() => $_ensure(0);

  @$pb.TagNumber(2)
  SingleChoiceProposal get singleChoiceProposal => $_getN(1);
  @$pb.TagNumber(2)
  set singleChoiceProposal(SingleChoiceProposal v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasSingleChoiceProposal() => $_has(1);
  @$pb.TagNumber(2)
  void clearSingleChoiceProposal() => clearField(2);
  @$pb.TagNumber(2)
  SingleChoiceProposal ensureSingleChoiceProposal() => $_ensure(1);

  @$pb.TagNumber(3)
  QuadraticProposal get quadraticProposal => $_getN(2);
  @$pb.TagNumber(3)
  set quadraticProposal(QuadraticProposal v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasQuadraticProposal() => $_has(2);
  @$pb.TagNumber(3)
  void clearQuadraticProposal() => clearField(3);
  @$pb.TagNumber(3)
  QuadraticProposal ensureQuadraticProposal() => $_ensure(2);

  @$pb.TagNumber(4)
  RankedProposal get rankedProposal => $_getN(3);
  @$pb.TagNumber(4)
  set rankedProposal(RankedProposal v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasRankedProposal() => $_has(3);
  @$pb.TagNumber(4)
  void clearRankedProposal() => clearField(4);
  @$pb.TagNumber(4)
  RankedProposal ensureRankedProposal() => $_ensure(3);

  @$pb.TagNumber(5)
  SpreadProposal get spreadProposal => $_getN(4);
  @$pb.TagNumber(5)
  set spreadProposal(SpreadProposal v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasSpreadProposal() => $_has(4);
  @$pb.TagNumber(5)
  void clearSpreadProposal() => clearField(5);
  @$pb.TagNumber(5)
  SpreadProposal ensureSpreadProposal() => $_ensure(4);
}

class ApprovalProposal extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ApprovalProposal', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  ApprovalProposal._() : super();
  factory ApprovalProposal() => create();
  factory ApprovalProposal.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ApprovalProposal.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ApprovalProposal clone() => ApprovalProposal()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ApprovalProposal copyWith(void Function(ApprovalProposal) updates) => super.copyWith((message) => updates(message as ApprovalProposal)) as ApprovalProposal; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ApprovalProposal create() => ApprovalProposal._();
  ApprovalProposal createEmptyInstance() => create();
  static $pb.PbList<ApprovalProposal> createRepeated() => $pb.PbList<ApprovalProposal>();
  @$core.pragma('dart2js:noInline')
  static ApprovalProposal getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ApprovalProposal>(create);
  static ApprovalProposal? _defaultInstance;
}

class SingleChoiceProposal extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SingleChoiceProposal', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'optionCount', $pb.PbFieldType.O3, protoName: 'optionCount')
    ..hasRequiredFields = false
  ;

  SingleChoiceProposal._() : super();
  factory SingleChoiceProposal({
    $core.int? optionCount,
  }) {
    final _result = create();
    if (optionCount != null) {
      _result.optionCount = optionCount;
    }
    return _result;
  }
  factory SingleChoiceProposal.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SingleChoiceProposal.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SingleChoiceProposal clone() => SingleChoiceProposal()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SingleChoiceProposal copyWith(void Function(SingleChoiceProposal) updates) => super.copyWith((message) => updates(message as SingleChoiceProposal)) as SingleChoiceProposal; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SingleChoiceProposal create() => SingleChoiceProposal._();
  SingleChoiceProposal createEmptyInstance() => create();
  static $pb.PbList<SingleChoiceProposal> createRepeated() => $pb.PbList<SingleChoiceProposal>();
  @$core.pragma('dart2js:noInline')
  static SingleChoiceProposal getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SingleChoiceProposal>(create);
  static SingleChoiceProposal? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get optionCount => $_getIZ(0);
  @$pb.TagNumber(1)
  set optionCount($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasOptionCount() => $_has(0);
  @$pb.TagNumber(1)
  void clearOptionCount() => clearField(1);
}

class QuadraticProposal extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'QuadraticProposal', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'optionCount', $pb.PbFieldType.O3, protoName: 'optionCount')
    ..a<$core.double>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'costExponent', $pb.PbFieldType.OF, protoName: 'costExponent')
    ..a<$core.int>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'maxValue', $pb.PbFieldType.O3, protoName: 'maxValue')
    ..a<$core.int>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'maxSum', $pb.PbFieldType.O3, protoName: 'maxSum')
    ..hasRequiredFields = false
  ;

  QuadraticProposal._() : super();
  factory QuadraticProposal({
    $core.int? optionCount,
    $core.double? costExponent,
    $core.int? maxValue,
    $core.int? maxSum,
  }) {
    final _result = create();
    if (optionCount != null) {
      _result.optionCount = optionCount;
    }
    if (costExponent != null) {
      _result.costExponent = costExponent;
    }
    if (maxValue != null) {
      _result.maxValue = maxValue;
    }
    if (maxSum != null) {
      _result.maxSum = maxSum;
    }
    return _result;
  }
  factory QuadraticProposal.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory QuadraticProposal.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  QuadraticProposal clone() => QuadraticProposal()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  QuadraticProposal copyWith(void Function(QuadraticProposal) updates) => super.copyWith((message) => updates(message as QuadraticProposal)) as QuadraticProposal; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static QuadraticProposal create() => QuadraticProposal._();
  QuadraticProposal createEmptyInstance() => create();
  static $pb.PbList<QuadraticProposal> createRepeated() => $pb.PbList<QuadraticProposal>();
  @$core.pragma('dart2js:noInline')
  static QuadraticProposal getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<QuadraticProposal>(create);
  static QuadraticProposal? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get optionCount => $_getIZ(0);
  @$pb.TagNumber(1)
  set optionCount($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasOptionCount() => $_has(0);
  @$pb.TagNumber(1)
  void clearOptionCount() => clearField(1);

  @$pb.TagNumber(2)
  $core.double get costExponent => $_getN(1);
  @$pb.TagNumber(2)
  set costExponent($core.double v) { $_setFloat(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasCostExponent() => $_has(1);
  @$pb.TagNumber(2)
  void clearCostExponent() => clearField(2);

  @$pb.TagNumber(3)
  $core.int get maxValue => $_getIZ(2);
  @$pb.TagNumber(3)
  set maxValue($core.int v) { $_setSignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasMaxValue() => $_has(2);
  @$pb.TagNumber(3)
  void clearMaxValue() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get maxSum => $_getIZ(3);
  @$pb.TagNumber(4)
  set maxSum($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasMaxSum() => $_has(3);
  @$pb.TagNumber(4)
  void clearMaxSum() => clearField(4);
}

class RankedProposal extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'RankedProposal', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'optionCount', $pb.PbFieldType.O3, protoName: 'optionCount')
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'maxItems', $pb.PbFieldType.O3, protoName: 'maxItems')
    ..hasRequiredFields = false
  ;

  RankedProposal._() : super();
  factory RankedProposal({
    $core.int? optionCount,
    $core.int? maxItems,
  }) {
    final _result = create();
    if (optionCount != null) {
      _result.optionCount = optionCount;
    }
    if (maxItems != null) {
      _result.maxItems = maxItems;
    }
    return _result;
  }
  factory RankedProposal.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory RankedProposal.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  RankedProposal clone() => RankedProposal()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  RankedProposal copyWith(void Function(RankedProposal) updates) => super.copyWith((message) => updates(message as RankedProposal)) as RankedProposal; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static RankedProposal create() => RankedProposal._();
  RankedProposal createEmptyInstance() => create();
  static $pb.PbList<RankedProposal> createRepeated() => $pb.PbList<RankedProposal>();
  @$core.pragma('dart2js:noInline')
  static RankedProposal getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<RankedProposal>(create);
  static RankedProposal? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get optionCount => $_getIZ(0);
  @$pb.TagNumber(1)
  set optionCount($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasOptionCount() => $_has(0);
  @$pb.TagNumber(1)
  void clearOptionCount() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get maxItems => $_getIZ(1);
  @$pb.TagNumber(2)
  set maxItems($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasMaxItems() => $_has(1);
  @$pb.TagNumber(2)
  void clearMaxItems() => clearField(2);
}

class SpreadProposal extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SpreadProposal', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'optionCount', $pb.PbFieldType.O3, protoName: 'optionCount')
    ..hasRequiredFields = false
  ;

  SpreadProposal._() : super();
  factory SpreadProposal({
    $core.int? optionCount,
  }) {
    final _result = create();
    if (optionCount != null) {
      _result.optionCount = optionCount;
    }
    return _result;
  }
  factory SpreadProposal.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SpreadProposal.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SpreadProposal clone() => SpreadProposal()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SpreadProposal copyWith(void Function(SpreadProposal) updates) => super.copyWith((message) => updates(message as SpreadProposal)) as SpreadProposal; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SpreadProposal create() => SpreadProposal._();
  SpreadProposal createEmptyInstance() => create();
  static $pb.PbList<SpreadProposal> createRepeated() => $pb.PbList<SpreadProposal>();
  @$core.pragma('dart2js:noInline')
  static SpreadProposal getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SpreadProposal>(create);
  static SpreadProposal? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get optionCount => $_getIZ(0);
  @$pb.TagNumber(1)
  set optionCount($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasOptionCount() => $_has(0);
  @$pb.TagNumber(1)
  void clearOptionCount() => clearField(1);
}

