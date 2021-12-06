///
//  Generated code. Do not modify.
//  source: protocol/transactions.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'organization.pb.dart' as $0;
import 'election.pb.dart' as $1;
import 'census.pb.dart' as $2;
import 'ballot.pb.dart' as $3;

import 'enums.pbenum.dart' as $4;

class SetOrganization extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SetOrganization', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOM<$0.Organization>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organization', subBuilder: $0.Organization.create)
    ..hasRequiredFields = false
  ;

  SetOrganization._() : super();
  factory SetOrganization({
    $0.Organization? organization,
  }) {
    final _result = create();
    if (organization != null) {
      _result.organization = organization;
    }
    return _result;
  }
  factory SetOrganization.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SetOrganization.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SetOrganization clone() => SetOrganization()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SetOrganization copyWith(void Function(SetOrganization) updates) => super.copyWith((message) => updates(message as SetOrganization)) as SetOrganization; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SetOrganization create() => SetOrganization._();
  SetOrganization createEmptyInstance() => create();
  static $pb.PbList<SetOrganization> createRepeated() => $pb.PbList<SetOrganization>();
  @$core.pragma('dart2js:noInline')
  static SetOrganization getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SetOrganization>(create);
  static SetOrganization? _defaultInstance;

  @$pb.TagNumber(1)
  $0.Organization get organization => $_getN(0);
  @$pb.TagNumber(1)
  set organization($0.Organization v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasOrganization() => $_has(0);
  @$pb.TagNumber(1)
  void clearOrganization() => clearField(1);
  @$pb.TagNumber(1)
  $0.Organization ensureOrganization() => $_ensure(0);
}

class Transfer extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Transfer', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'to', $pb.PbFieldType.OY)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'value')
    ..hasRequiredFields = false
  ;

  Transfer._() : super();
  factory Transfer({
    $core.List<$core.int>? to,
    $core.String? value,
  }) {
    final _result = create();
    if (to != null) {
      _result.to = to;
    }
    if (value != null) {
      _result.value = value;
    }
    return _result;
  }
  factory Transfer.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Transfer.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Transfer clone() => Transfer()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Transfer copyWith(void Function(Transfer) updates) => super.copyWith((message) => updates(message as Transfer)) as Transfer; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Transfer create() => Transfer._();
  Transfer createEmptyInstance() => create();
  static $pb.PbList<Transfer> createRepeated() => $pb.PbList<Transfer>();
  @$core.pragma('dart2js:noInline')
  static Transfer getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Transfer>(create);
  static Transfer? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get to => $_getN(0);
  @$pb.TagNumber(1)
  set to($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasTo() => $_has(0);
  @$pb.TagNumber(1)
  void clearTo() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get value => $_getSZ(1);
  @$pb.TagNumber(2)
  set value($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasValue() => $_has(1);
  @$pb.TagNumber(2)
  void clearValue() => clearField(2);
}

class Mint extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Mint', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'amount')
    ..hasRequiredFields = false
  ;

  Mint._() : super();
  factory Mint({
    $core.String? amount,
  }) {
    final _result = create();
    if (amount != null) {
      _result.amount = amount;
    }
    return _result;
  }
  factory Mint.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Mint.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Mint clone() => Mint()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Mint copyWith(void Function(Mint) updates) => super.copyWith((message) => updates(message as Mint)) as Mint; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Mint create() => Mint._();
  Mint createEmptyInstance() => create();
  static $pb.PbList<Mint> createRepeated() => $pb.PbList<Mint>();
  @$core.pragma('dart2js:noInline')
  static Mint getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Mint>(create);
  static Mint? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get amount => $_getSZ(0);
  @$pb.TagNumber(1)
  set amount($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAmount() => $_has(0);
  @$pb.TagNumber(1)
  void clearAmount() => clearField(1);
}

class ClaimTokens extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ClaimTokens', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'sender', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  ClaimTokens._() : super();
  factory ClaimTokens({
    $core.List<$core.int>? nonce,
    $core.List<$core.int>? sender,
  }) {
    final _result = create();
    if (nonce != null) {
      _result.nonce = nonce;
    }
    if (sender != null) {
      _result.sender = sender;
    }
    return _result;
  }
  factory ClaimTokens.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ClaimTokens.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ClaimTokens clone() => ClaimTokens()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ClaimTokens copyWith(void Function(ClaimTokens) updates) => super.copyWith((message) => updates(message as ClaimTokens)) as ClaimTokens; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ClaimTokens create() => ClaimTokens._();
  ClaimTokens createEmptyInstance() => create();
  static $pb.PbList<ClaimTokens> createRepeated() => $pb.PbList<ClaimTokens>();
  @$core.pragma('dart2js:noInline')
  static ClaimTokens getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ClaimTokens>(create);
  static ClaimTokens? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get nonce => $_getN(0);
  @$pb.TagNumber(1)
  set nonce($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasNonce() => $_has(0);
  @$pb.TagNumber(1)
  void clearNonce() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get sender => $_getN(1);
  @$pb.TagNumber(2)
  set sender($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSender() => $_has(1);
  @$pb.TagNumber(2)
  void clearSender() => clearField(2);
}

class NewElection extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'NewElection', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOM<$1.Election>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'election', subBuilder: $1.Election.create)
    ..hasRequiredFields = false
  ;

  NewElection._() : super();
  factory NewElection({
    $1.Election? election,
  }) {
    final _result = create();
    if (election != null) {
      _result.election = election;
    }
    return _result;
  }
  factory NewElection.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory NewElection.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  NewElection clone() => NewElection()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  NewElection copyWith(void Function(NewElection) updates) => super.copyWith((message) => updates(message as NewElection)) as NewElection; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static NewElection create() => NewElection._();
  NewElection createEmptyInstance() => create();
  static $pb.PbList<NewElection> createRepeated() => $pb.PbList<NewElection>();
  @$core.pragma('dart2js:noInline')
  static NewElection getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<NewElection>(create);
  static NewElection? _defaultInstance;

  @$pb.TagNumber(1)
  $1.Election get election => $_getN(0);
  @$pb.TagNumber(1)
  set election($1.Election v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasElection() => $_has(0);
  @$pb.TagNumber(1)
  void clearElection() => clearField(1);
  @$pb.TagNumber(1)
  $1.Election ensureElection() => $_ensure(0);
}

class RegisterKey extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'RegisterKey', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..pc<$2.Proof>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proofs', $pb.PbFieldType.PM, subBuilder: $2.Proof.create)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'newKey', $pb.PbFieldType.OY, protoName: 'newKey')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'weight')
    ..hasRequiredFields = false
  ;

  RegisterKey._() : super();
  factory RegisterKey({
    $core.List<$core.int>? electionId,
    $core.Iterable<$2.Proof>? proofs,
    $core.List<$core.int>? newKey,
    $core.String? weight,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    if (proofs != null) {
      _result.proofs.addAll(proofs);
    }
    if (newKey != null) {
      _result.newKey = newKey;
    }
    if (weight != null) {
      _result.weight = weight;
    }
    return _result;
  }
  factory RegisterKey.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory RegisterKey.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  RegisterKey clone() => RegisterKey()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  RegisterKey copyWith(void Function(RegisterKey) updates) => super.copyWith((message) => updates(message as RegisterKey)) as RegisterKey; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static RegisterKey create() => RegisterKey._();
  RegisterKey createEmptyInstance() => create();
  static $pb.PbList<RegisterKey> createRepeated() => $pb.PbList<RegisterKey>();
  @$core.pragma('dart2js:noInline')
  static RegisterKey getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<RegisterKey>(create);
  static RegisterKey? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$2.Proof> get proofs => $_getList(1);

  @$pb.TagNumber(3)
  $core.List<$core.int> get newKey => $_getN(2);
  @$pb.TagNumber(3)
  set newKey($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasNewKey() => $_has(2);
  @$pb.TagNumber(3)
  void clearNewKey() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get weight => $_getSZ(3);
  @$pb.TagNumber(4)
  set weight($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasWeight() => $_has(3);
  @$pb.TagNumber(4)
  void clearWeight() => clearField(4);
}

class SubmitBallot extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SubmitBallot', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOM<$3.Ballot>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ballot', subBuilder: $3.Ballot.create)
    ..hasRequiredFields = false
  ;

  SubmitBallot._() : super();
  factory SubmitBallot({
    $3.Ballot? ballot,
  }) {
    final _result = create();
    if (ballot != null) {
      _result.ballot = ballot;
    }
    return _result;
  }
  factory SubmitBallot.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SubmitBallot.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SubmitBallot clone() => SubmitBallot()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SubmitBallot copyWith(void Function(SubmitBallot) updates) => super.copyWith((message) => updates(message as SubmitBallot)) as SubmitBallot; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SubmitBallot create() => SubmitBallot._();
  SubmitBallot createEmptyInstance() => create();
  static $pb.PbList<SubmitBallot> createRepeated() => $pb.PbList<SubmitBallot>();
  @$core.pragma('dart2js:noInline')
  static SubmitBallot getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SubmitBallot>(create);
  static SubmitBallot? _defaultInstance;

  @$pb.TagNumber(1)
  $3.Ballot get ballot => $_getN(0);
  @$pb.TagNumber(1)
  set ballot($3.Ballot v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasBallot() => $_has(0);
  @$pb.TagNumber(1)
  void clearBallot() => clearField(1);
  @$pb.TagNumber(1)
  $3.Ballot ensureBallot() => $_ensure(0);
}

class SetElectionStatus extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SetElectionStatus', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..e<$4.ProposalStatus>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'newStatus', $pb.PbFieldType.OE, protoName: 'newStatus', defaultOrMaker: $4.ProposalStatus.UNKNOWN_PROPOSAL_STATUS, valueOf: $4.ProposalStatus.valueOf, enumValues: $4.ProposalStatus.values)
    ..hasRequiredFields = false
  ;

  SetElectionStatus._() : super();
  factory SetElectionStatus({
    $core.List<$core.int>? electionId,
    $4.ProposalStatus? newStatus,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    if (newStatus != null) {
      _result.newStatus = newStatus;
    }
    return _result;
  }
  factory SetElectionStatus.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SetElectionStatus.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SetElectionStatus clone() => SetElectionStatus()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SetElectionStatus copyWith(void Function(SetElectionStatus) updates) => super.copyWith((message) => updates(message as SetElectionStatus)) as SetElectionStatus; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SetElectionStatus create() => SetElectionStatus._();
  SetElectionStatus createEmptyInstance() => create();
  static $pb.PbList<SetElectionStatus> createRepeated() => $pb.PbList<SetElectionStatus>();
  @$core.pragma('dart2js:noInline')
  static SetElectionStatus getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SetElectionStatus>(create);
  static SetElectionStatus? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);

  @$pb.TagNumber(2)
  $4.ProposalStatus get newStatus => $_getN(1);
  @$pb.TagNumber(2)
  set newStatus($4.ProposalStatus v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasNewStatus() => $_has(1);
  @$pb.TagNumber(2)
  void clearNewStatus() => clearField(2);
}

class SetProposalStatus extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SetProposalStatus', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proposalIndex', $pb.PbFieldType.O3, protoName: 'proposalIndex')
    ..e<$4.ProposalStatus>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'newStatus', $pb.PbFieldType.OE, protoName: 'newStatus', defaultOrMaker: $4.ProposalStatus.UNKNOWN_PROPOSAL_STATUS, valueOf: $4.ProposalStatus.valueOf, enumValues: $4.ProposalStatus.values)
    ..hasRequiredFields = false
  ;

  SetProposalStatus._() : super();
  factory SetProposalStatus({
    $core.List<$core.int>? electionId,
    $core.int? proposalIndex,
    $4.ProposalStatus? newStatus,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    if (proposalIndex != null) {
      _result.proposalIndex = proposalIndex;
    }
    if (newStatus != null) {
      _result.newStatus = newStatus;
    }
    return _result;
  }
  factory SetProposalStatus.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SetProposalStatus.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SetProposalStatus clone() => SetProposalStatus()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SetProposalStatus copyWith(void Function(SetProposalStatus) updates) => super.copyWith((message) => updates(message as SetProposalStatus)) as SetProposalStatus; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SetProposalStatus create() => SetProposalStatus._();
  SetProposalStatus createEmptyInstance() => create();
  static $pb.PbList<SetProposalStatus> createRepeated() => $pb.PbList<SetProposalStatus>();
  @$core.pragma('dart2js:noInline')
  static SetProposalStatus getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SetProposalStatus>(create);
  static SetProposalStatus? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get proposalIndex => $_getIZ(1);
  @$pb.TagNumber(2)
  set proposalIndex($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasProposalIndex() => $_has(1);
  @$pb.TagNumber(2)
  void clearProposalIndex() => clearField(2);

  @$pb.TagNumber(3)
  $4.ProposalStatus get newStatus => $_getN(2);
  @$pb.TagNumber(3)
  set newStatus($4.ProposalStatus v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasNewStatus() => $_has(2);
  @$pb.TagNumber(3)
  void clearNewStatus() => clearField(3);
}

