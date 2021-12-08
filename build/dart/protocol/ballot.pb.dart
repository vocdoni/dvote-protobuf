///
//  Generated code. Do not modify.
//  source: protocol/ballot.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'census.pb.dart' as $0;

import 'enums.pbenum.dart' as $1;

enum Ballot_Body {
  signedBallot, 
  anonymousBallot, 
  notSet
}

class Ballot extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Ballot_Body> _Ballot_BodyByTag = {
    1 : Ballot_Body.signedBallot,
    2 : Ballot_Body.anonymousBallot,
    0 : Ballot_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Ballot', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2])
    ..aOM<SignedBallot>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signedBallot', protoName: 'signedBallot', subBuilder: SignedBallot.create)
    ..aOM<BallotBody>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'anonymousBallot', protoName: 'anonymousBallot', subBuilder: BallotBody.create)
    ..hasRequiredFields = false
  ;

  Ballot._() : super();
  factory Ballot({
    SignedBallot? signedBallot,
    BallotBody? anonymousBallot,
  }) {
    final _result = create();
    if (signedBallot != null) {
      _result.signedBallot = signedBallot;
    }
    if (anonymousBallot != null) {
      _result.anonymousBallot = anonymousBallot;
    }
    return _result;
  }
  factory Ballot.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Ballot.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Ballot clone() => Ballot()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Ballot copyWith(void Function(Ballot) updates) => super.copyWith((message) => updates(message as Ballot)) as Ballot; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Ballot create() => Ballot._();
  Ballot createEmptyInstance() => create();
  static $pb.PbList<Ballot> createRepeated() => $pb.PbList<Ballot>();
  @$core.pragma('dart2js:noInline')
  static Ballot getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Ballot>(create);
  static Ballot? _defaultInstance;

  Ballot_Body whichBody() => _Ballot_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  SignedBallot get signedBallot => $_getN(0);
  @$pb.TagNumber(1)
  set signedBallot(SignedBallot v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasSignedBallot() => $_has(0);
  @$pb.TagNumber(1)
  void clearSignedBallot() => clearField(1);
  @$pb.TagNumber(1)
  SignedBallot ensureSignedBallot() => $_ensure(0);

  @$pb.TagNumber(2)
  BallotBody get anonymousBallot => $_getN(1);
  @$pb.TagNumber(2)
  set anonymousBallot(BallotBody v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasAnonymousBallot() => $_has(1);
  @$pb.TagNumber(2)
  void clearAnonymousBallot() => clearField(2);
  @$pb.TagNumber(2)
  BallotBody ensureAnonymousBallot() => $_ensure(1);
}

class BallotBody_VoteList extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'BallotBody.VoteList', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOB(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'partial')
    ..pc<Vote>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'votes', $pb.PbFieldType.PM, subBuilder: Vote.create)
    ..a<$core.int>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'submittedIndex', $pb.PbFieldType.O3, protoName: 'submittedIndex')
    ..hasRequiredFields = false
  ;

  BallotBody_VoteList._() : super();
  factory BallotBody_VoteList({
    $core.bool? partial,
    $core.Iterable<Vote>? votes,
    $core.int? submittedIndex,
  }) {
    final _result = create();
    if (partial != null) {
      _result.partial = partial;
    }
    if (votes != null) {
      _result.votes.addAll(votes);
    }
    if (submittedIndex != null) {
      _result.submittedIndex = submittedIndex;
    }
    return _result;
  }
  factory BallotBody_VoteList.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BallotBody_VoteList.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BallotBody_VoteList clone() => BallotBody_VoteList()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BallotBody_VoteList copyWith(void Function(BallotBody_VoteList) updates) => super.copyWith((message) => updates(message as BallotBody_VoteList)) as BallotBody_VoteList; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BallotBody_VoteList create() => BallotBody_VoteList._();
  BallotBody_VoteList createEmptyInstance() => create();
  static $pb.PbList<BallotBody_VoteList> createRepeated() => $pb.PbList<BallotBody_VoteList>();
  @$core.pragma('dart2js:noInline')
  static BallotBody_VoteList getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BallotBody_VoteList>(create);
  static BallotBody_VoteList? _defaultInstance;

  @$pb.TagNumber(1)
  $core.bool get partial => $_getBF(0);
  @$pb.TagNumber(1)
  set partial($core.bool v) { $_setBool(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPartial() => $_has(0);
  @$pb.TagNumber(1)
  void clearPartial() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<Vote> get votes => $_getList(1);

  @$pb.TagNumber(3)
  $core.int get submittedIndex => $_getIZ(2);
  @$pb.TagNumber(3)
  set submittedIndex($core.int v) { $_setSignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasSubmittedIndex() => $_has(2);
  @$pb.TagNumber(3)
  void clearSubmittedIndex() => clearField(3);
}

class BallotBody extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'BallotBody', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nullifier', $pb.PbFieldType.OY)
    ..pc<$0.Proof>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proofs', $pb.PbFieldType.PM, subBuilder: $0.Proof.create)
    ..aOM<BallotBody_VoteList>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'votes', subBuilder: BallotBody_VoteList.create)
    ..hasRequiredFields = false
  ;

  BallotBody._() : super();
  factory BallotBody({
    $core.List<$core.int>? electionId,
    $core.List<$core.int>? nullifier,
    $core.Iterable<$0.Proof>? proofs,
    BallotBody_VoteList? votes,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    if (nullifier != null) {
      _result.nullifier = nullifier;
    }
    if (proofs != null) {
      _result.proofs.addAll(proofs);
    }
    if (votes != null) {
      _result.votes = votes;
    }
    return _result;
  }
  factory BallotBody.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory BallotBody.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  BallotBody clone() => BallotBody()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  BallotBody copyWith(void Function(BallotBody) updates) => super.copyWith((message) => updates(message as BallotBody)) as BallotBody; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static BallotBody create() => BallotBody._();
  BallotBody createEmptyInstance() => create();
  static $pb.PbList<BallotBody> createRepeated() => $pb.PbList<BallotBody>();
  @$core.pragma('dart2js:noInline')
  static BallotBody getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<BallotBody>(create);
  static BallotBody? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get nullifier => $_getN(1);
  @$pb.TagNumber(2)
  set nullifier($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNullifier() => $_has(1);
  @$pb.TagNumber(2)
  void clearNullifier() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$0.Proof> get proofs => $_getList(2);

  @$pb.TagNumber(4)
  BallotBody_VoteList get votes => $_getN(3);
  @$pb.TagNumber(4)
  set votes(BallotBody_VoteList v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasVotes() => $_has(3);
  @$pb.TagNumber(4)
  void clearVotes() => clearField(4);
  @$pb.TagNumber(4)
  BallotBody_VoteList ensureVotes() => $_ensure(3);
}

class SignedBallot extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SignedBallot', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ballot', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signature', $pb.PbFieldType.OY)
    ..e<$1.SignatureType>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signatureType', $pb.PbFieldType.OE, protoName: 'signatureType', defaultOrMaker: $1.SignatureType.NONE, valueOf: $1.SignatureType.valueOf, enumValues: $1.SignatureType.values)
    ..hasRequiredFields = false
  ;

  SignedBallot._() : super();
  factory SignedBallot({
    $core.List<$core.int>? ballot,
    $core.List<$core.int>? signature,
    $1.SignatureType? signatureType,
  }) {
    final _result = create();
    if (ballot != null) {
      _result.ballot = ballot;
    }
    if (signature != null) {
      _result.signature = signature;
    }
    if (signatureType != null) {
      _result.signatureType = signatureType;
    }
    return _result;
  }
  factory SignedBallot.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SignedBallot.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SignedBallot clone() => SignedBallot()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SignedBallot copyWith(void Function(SignedBallot) updates) => super.copyWith((message) => updates(message as SignedBallot)) as SignedBallot; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SignedBallot create() => SignedBallot._();
  SignedBallot createEmptyInstance() => create();
  static $pb.PbList<SignedBallot> createRepeated() => $pb.PbList<SignedBallot>();
  @$core.pragma('dart2js:noInline')
  static SignedBallot getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SignedBallot>(create);
  static SignedBallot? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get ballot => $_getN(0);
  @$pb.TagNumber(1)
  set ballot($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasBallot() => $_has(0);
  @$pb.TagNumber(1)
  void clearBallot() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get signature => $_getN(1);
  @$pb.TagNumber(2)
  set signature($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSignature() => $_has(1);
  @$pb.TagNumber(2)
  void clearSignature() => clearField(2);

  @$pb.TagNumber(3)
  $1.SignatureType get signatureType => $_getN(2);
  @$pb.TagNumber(3)
  set signatureType($1.SignatureType v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasSignatureType() => $_has(2);
  @$pb.TagNumber(3)
  void clearSignatureType() => clearField(3);
}

enum Vote_Body {
  encrypted, 
  approval, 
  singleChoice, 
  quadratic, 
  ranked, 
  spread, 
  notSet
}

class Vote extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Vote_Body> _Vote_BodyByTag = {
    1 : Vote_Body.encrypted,
    11 : Vote_Body.approval,
    12 : Vote_Body.singleChoice,
    13 : Vote_Body.quadratic,
    14 : Vote_Body.ranked,
    15 : Vote_Body.spread,
    0 : Vote_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Vote', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 11, 12, 13, 14, 15])
    ..aOM<EncryptedVote>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encrypted', subBuilder: EncryptedVote.create)
    ..aOM<ApprovalVote>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'approval', subBuilder: ApprovalVote.create)
    ..aOM<SingleChoiceVote>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'singleChoice', protoName: 'singleChoice', subBuilder: SingleChoiceVote.create)
    ..aOM<QuadraticVote>(13, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'quadratic', subBuilder: QuadraticVote.create)
    ..aOM<RankedVote>(14, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ranked', subBuilder: RankedVote.create)
    ..aOM<SpreadVote>(15, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'spread', subBuilder: SpreadVote.create)
    ..hasRequiredFields = false
  ;

  Vote._() : super();
  factory Vote({
    EncryptedVote? encrypted,
    ApprovalVote? approval,
    SingleChoiceVote? singleChoice,
    QuadraticVote? quadratic,
    RankedVote? ranked,
    SpreadVote? spread,
  }) {
    final _result = create();
    if (encrypted != null) {
      _result.encrypted = encrypted;
    }
    if (approval != null) {
      _result.approval = approval;
    }
    if (singleChoice != null) {
      _result.singleChoice = singleChoice;
    }
    if (quadratic != null) {
      _result.quadratic = quadratic;
    }
    if (ranked != null) {
      _result.ranked = ranked;
    }
    if (spread != null) {
      _result.spread = spread;
    }
    return _result;
  }
  factory Vote.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Vote.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Vote clone() => Vote()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Vote copyWith(void Function(Vote) updates) => super.copyWith((message) => updates(message as Vote)) as Vote; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Vote create() => Vote._();
  Vote createEmptyInstance() => create();
  static $pb.PbList<Vote> createRepeated() => $pb.PbList<Vote>();
  @$core.pragma('dart2js:noInline')
  static Vote getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Vote>(create);
  static Vote? _defaultInstance;

  Vote_Body whichBody() => _Vote_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  EncryptedVote get encrypted => $_getN(0);
  @$pb.TagNumber(1)
  set encrypted(EncryptedVote v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasEncrypted() => $_has(0);
  @$pb.TagNumber(1)
  void clearEncrypted() => clearField(1);
  @$pb.TagNumber(1)
  EncryptedVote ensureEncrypted() => $_ensure(0);

  @$pb.TagNumber(11)
  ApprovalVote get approval => $_getN(1);
  @$pb.TagNumber(11)
  set approval(ApprovalVote v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasApproval() => $_has(1);
  @$pb.TagNumber(11)
  void clearApproval() => clearField(11);
  @$pb.TagNumber(11)
  ApprovalVote ensureApproval() => $_ensure(1);

  @$pb.TagNumber(12)
  SingleChoiceVote get singleChoice => $_getN(2);
  @$pb.TagNumber(12)
  set singleChoice(SingleChoiceVote v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasSingleChoice() => $_has(2);
  @$pb.TagNumber(12)
  void clearSingleChoice() => clearField(12);
  @$pb.TagNumber(12)
  SingleChoiceVote ensureSingleChoice() => $_ensure(2);

  @$pb.TagNumber(13)
  QuadraticVote get quadratic => $_getN(3);
  @$pb.TagNumber(13)
  set quadratic(QuadraticVote v) { setField(13, v); }
  @$pb.TagNumber(13)
  $core.bool hasQuadratic() => $_has(3);
  @$pb.TagNumber(13)
  void clearQuadratic() => clearField(13);
  @$pb.TagNumber(13)
  QuadraticVote ensureQuadratic() => $_ensure(3);

  @$pb.TagNumber(14)
  RankedVote get ranked => $_getN(4);
  @$pb.TagNumber(14)
  set ranked(RankedVote v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasRanked() => $_has(4);
  @$pb.TagNumber(14)
  void clearRanked() => clearField(14);
  @$pb.TagNumber(14)
  RankedVote ensureRanked() => $_ensure(4);

  @$pb.TagNumber(15)
  SpreadVote get spread => $_getN(5);
  @$pb.TagNumber(15)
  set spread(SpreadVote v) { setField(15, v); }
  @$pb.TagNumber(15)
  $core.bool hasSpread() => $_has(5);
  @$pb.TagNumber(15)
  void clearSpread() => clearField(15);
  @$pb.TagNumber(15)
  SpreadVote ensureSpread() => $_ensure(5);
}

class EncryptedVote extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EncryptedVote', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'payload', $pb.PbFieldType.OY)
    ..p<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptionKeyIndexes', $pb.PbFieldType.P3, protoName: 'encryptionKeyIndexes')
    ..hasRequiredFields = false
  ;

  EncryptedVote._() : super();
  factory EncryptedVote({
    $core.List<$core.int>? payload,
    $core.Iterable<$core.int>? encryptionKeyIndexes,
  }) {
    final _result = create();
    if (payload != null) {
      _result.payload = payload;
    }
    if (encryptionKeyIndexes != null) {
      _result.encryptionKeyIndexes.addAll(encryptionKeyIndexes);
    }
    return _result;
  }
  factory EncryptedVote.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EncryptedVote.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EncryptedVote clone() => EncryptedVote()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EncryptedVote copyWith(void Function(EncryptedVote) updates) => super.copyWith((message) => updates(message as EncryptedVote)) as EncryptedVote; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EncryptedVote create() => EncryptedVote._();
  EncryptedVote createEmptyInstance() => create();
  static $pb.PbList<EncryptedVote> createRepeated() => $pb.PbList<EncryptedVote>();
  @$core.pragma('dart2js:noInline')
  static EncryptedVote getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EncryptedVote>(create);
  static EncryptedVote? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get payload => $_getN(0);
  @$pb.TagNumber(1)
  set payload($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPayload() => $_has(0);
  @$pb.TagNumber(1)
  void clearPayload() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get encryptionKeyIndexes => $_getList(1);
}

class ApprovalVote extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ApprovalVote', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOB(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'approved')
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  ApprovalVote._() : super();
  factory ApprovalVote({
    $core.bool? approved,
    $core.List<$core.int>? nonce,
  }) {
    final _result = create();
    if (approved != null) {
      _result.approved = approved;
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    return _result;
  }
  factory ApprovalVote.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ApprovalVote.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ApprovalVote clone() => ApprovalVote()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ApprovalVote copyWith(void Function(ApprovalVote) updates) => super.copyWith((message) => updates(message as ApprovalVote)) as ApprovalVote; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ApprovalVote create() => ApprovalVote._();
  ApprovalVote createEmptyInstance() => create();
  static $pb.PbList<ApprovalVote> createRepeated() => $pb.PbList<ApprovalVote>();
  @$core.pragma('dart2js:noInline')
  static ApprovalVote getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ApprovalVote>(create);
  static ApprovalVote? _defaultInstance;

  @$pb.TagNumber(1)
  $core.bool get approved => $_getBF(0);
  @$pb.TagNumber(1)
  set approved($core.bool v) { $_setBool(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasApproved() => $_has(0);
  @$pb.TagNumber(1)
  void clearApproved() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get nonce => $_getN(1);
  @$pb.TagNumber(2)
  set nonce($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNonce() => $_has(1);
  @$pb.TagNumber(2)
  void clearNonce() => clearField(2);
}

class SingleChoiceVote extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SingleChoiceVote', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'choice', $pb.PbFieldType.O3)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  SingleChoiceVote._() : super();
  factory SingleChoiceVote({
    $core.int? choice,
    $core.List<$core.int>? nonce,
  }) {
    final _result = create();
    if (choice != null) {
      _result.choice = choice;
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    return _result;
  }
  factory SingleChoiceVote.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SingleChoiceVote.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SingleChoiceVote clone() => SingleChoiceVote()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SingleChoiceVote copyWith(void Function(SingleChoiceVote) updates) => super.copyWith((message) => updates(message as SingleChoiceVote)) as SingleChoiceVote; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SingleChoiceVote create() => SingleChoiceVote._();
  SingleChoiceVote createEmptyInstance() => create();
  static $pb.PbList<SingleChoiceVote> createRepeated() => $pb.PbList<SingleChoiceVote>();
  @$core.pragma('dart2js:noInline')
  static SingleChoiceVote getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SingleChoiceVote>(create);
  static SingleChoiceVote? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get choice => $_getIZ(0);
  @$pb.TagNumber(1)
  set choice($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasChoice() => $_has(0);
  @$pb.TagNumber(1)
  void clearChoice() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get nonce => $_getN(1);
  @$pb.TagNumber(2)
  set nonce($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNonce() => $_has(1);
  @$pb.TagNumber(2)
  void clearNonce() => clearField(2);
}

class QuadraticVote extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'QuadraticVote', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..p<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'choicePoints', $pb.PbFieldType.P3, protoName: 'choicePoints')
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  QuadraticVote._() : super();
  factory QuadraticVote({
    $core.Iterable<$core.int>? choicePoints,
    $core.List<$core.int>? nonce,
  }) {
    final _result = create();
    if (choicePoints != null) {
      _result.choicePoints.addAll(choicePoints);
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    return _result;
  }
  factory QuadraticVote.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory QuadraticVote.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  QuadraticVote clone() => QuadraticVote()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  QuadraticVote copyWith(void Function(QuadraticVote) updates) => super.copyWith((message) => updates(message as QuadraticVote)) as QuadraticVote; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static QuadraticVote create() => QuadraticVote._();
  QuadraticVote createEmptyInstance() => create();
  static $pb.PbList<QuadraticVote> createRepeated() => $pb.PbList<QuadraticVote>();
  @$core.pragma('dart2js:noInline')
  static QuadraticVote getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<QuadraticVote>(create);
  static QuadraticVote? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get choicePoints => $_getList(0);

  @$pb.TagNumber(2)
  $core.List<$core.int> get nonce => $_getN(1);
  @$pb.TagNumber(2)
  set nonce($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNonce() => $_has(1);
  @$pb.TagNumber(2)
  void clearNonce() => clearField(2);
}

class RankedVote extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'RankedVote', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..p<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ranking', $pb.PbFieldType.P3)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  RankedVote._() : super();
  factory RankedVote({
    $core.Iterable<$core.int>? ranking,
    $core.List<$core.int>? nonce,
  }) {
    final _result = create();
    if (ranking != null) {
      _result.ranking.addAll(ranking);
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    return _result;
  }
  factory RankedVote.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory RankedVote.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  RankedVote clone() => RankedVote()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  RankedVote copyWith(void Function(RankedVote) updates) => super.copyWith((message) => updates(message as RankedVote)) as RankedVote; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static RankedVote create() => RankedVote._();
  RankedVote createEmptyInstance() => create();
  static $pb.PbList<RankedVote> createRepeated() => $pb.PbList<RankedVote>();
  @$core.pragma('dart2js:noInline')
  static RankedVote getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<RankedVote>(create);
  static RankedVote? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get ranking => $_getList(0);

  @$pb.TagNumber(2)
  $core.List<$core.int> get nonce => $_getN(1);
  @$pb.TagNumber(2)
  set nonce($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNonce() => $_has(1);
  @$pb.TagNumber(2)
  void clearNonce() => clearField(2);
}

class SpreadVote extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SpreadVote', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..p<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'percentages', $pb.PbFieldType.P3)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  SpreadVote._() : super();
  factory SpreadVote({
    $core.Iterable<$core.int>? percentages,
    $core.List<$core.int>? nonce,
  }) {
    final _result = create();
    if (percentages != null) {
      _result.percentages.addAll(percentages);
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    return _result;
  }
  factory SpreadVote.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SpreadVote.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SpreadVote clone() => SpreadVote()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SpreadVote copyWith(void Function(SpreadVote) updates) => super.copyWith((message) => updates(message as SpreadVote)) as SpreadVote; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SpreadVote create() => SpreadVote._();
  SpreadVote createEmptyInstance() => create();
  static $pb.PbList<SpreadVote> createRepeated() => $pb.PbList<SpreadVote>();
  @$core.pragma('dart2js:noInline')
  static SpreadVote getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SpreadVote>(create);
  static SpreadVote? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get percentages => $_getList(0);

  @$pb.TagNumber(2)
  $core.List<$core.int> get nonce => $_getN(1);
  @$pb.TagNumber(2)
  set nonce($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNonce() => $_has(1);
  @$pb.TagNumber(2)
  void clearNonce() => clearField(2);
}

