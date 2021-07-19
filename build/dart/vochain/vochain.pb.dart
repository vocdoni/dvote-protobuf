///
//  Generated code. Do not modify.
//  source: vochain/vochain.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:fixnum/fixnum.dart' as $fixnum;
import 'package:protobuf/protobuf.dart' as $pb;

import 'vochain.pbenum.dart';

export 'vochain.pbenum.dart';

class VoteEnvelope extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'VoteEnvelope', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'processId', $pb.PbFieldType.OY, protoName: 'processId')
    ..aOM<Proof>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof', subBuilder: Proof.create)
    ..a<$core.List<$core.int>>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'votePackage', $pb.PbFieldType.OY, protoName: 'votePackage')
    ..a<$core.List<$core.int>>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nullifier', $pb.PbFieldType.OY)
    ..p<$core.int>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptionKeyIndexes', $pb.PbFieldType.PU3, protoName: 'encryptionKeyIndexes')
    ..hasRequiredFields = false
  ;

  VoteEnvelope._() : super();
  factory VoteEnvelope({
    $core.List<$core.int>? nonce,
    $core.List<$core.int>? processId,
    Proof? proof,
    $core.List<$core.int>? votePackage,
    $core.List<$core.int>? nullifier,
    $core.Iterable<$core.int>? encryptionKeyIndexes,
  }) {
    final _result = create();
    if (nonce != null) {
      _result.nonce = nonce;
    }
    if (processId != null) {
      _result.processId = processId;
    }
    if (proof != null) {
      _result.proof = proof;
    }
    if (votePackage != null) {
      _result.votePackage = votePackage;
    }
    if (nullifier != null) {
      _result.nullifier = nullifier;
    }
    if (encryptionKeyIndexes != null) {
      _result.encryptionKeyIndexes.addAll(encryptionKeyIndexes);
    }
    return _result;
  }
  factory VoteEnvelope.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory VoteEnvelope.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  VoteEnvelope clone() => VoteEnvelope()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  VoteEnvelope copyWith(void Function(VoteEnvelope) updates) => super.copyWith((message) => updates(message as VoteEnvelope)) as VoteEnvelope; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static VoteEnvelope create() => VoteEnvelope._();
  VoteEnvelope createEmptyInstance() => create();
  static $pb.PbList<VoteEnvelope> createRepeated() => $pb.PbList<VoteEnvelope>();
  @$core.pragma('dart2js:noInline')
  static VoteEnvelope getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<VoteEnvelope>(create);
  static VoteEnvelope? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get nonce => $_getN(0);
  @$pb.TagNumber(1)
  set nonce($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasNonce() => $_has(0);
  @$pb.TagNumber(1)
  void clearNonce() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get processId => $_getN(1);
  @$pb.TagNumber(2)
  set processId($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasProcessId() => $_has(1);
  @$pb.TagNumber(2)
  void clearProcessId() => clearField(2);

  @$pb.TagNumber(3)
  Proof get proof => $_getN(2);
  @$pb.TagNumber(3)
  set proof(Proof v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasProof() => $_has(2);
  @$pb.TagNumber(3)
  void clearProof() => clearField(3);
  @$pb.TagNumber(3)
  Proof ensureProof() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.List<$core.int> get votePackage => $_getN(3);
  @$pb.TagNumber(4)
  set votePackage($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasVotePackage() => $_has(3);
  @$pb.TagNumber(4)
  void clearVotePackage() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$core.int> get nullifier => $_getN(4);
  @$pb.TagNumber(5)
  set nullifier($core.List<$core.int> v) { $_setBytes(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasNullifier() => $_has(4);
  @$pb.TagNumber(5)
  void clearNullifier() => clearField(5);

  @$pb.TagNumber(6)
  $core.List<$core.int> get encryptionKeyIndexes => $_getList(5);
}

class Census extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Census', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  Census._() : super();
  factory Census() => create();
  factory Census.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Census.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Census clone() => Census()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Census copyWith(void Function(Census) updates) => super.copyWith((message) => updates(message as Census)) as Census; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Census create() => Census._();
  Census createEmptyInstance() => create();
  static $pb.PbList<Census> createRepeated() => $pb.PbList<Census>();
  @$core.pragma('dart2js:noInline')
  static Census getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Census>(create);
  static Census? _defaultInstance;
}

enum Proof_Payload {
  graviton, 
  iden3, 
  ethereumStorage, 
  ethereumAccount, 
  ca, 
  arbo, 
  zkSnark, 
  notSet
}

class Proof extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Proof_Payload> _Proof_PayloadByTag = {
    1 : Proof_Payload.graviton,
    2 : Proof_Payload.iden3,
    3 : Proof_Payload.ethereumStorage,
    4 : Proof_Payload.ethereumAccount,
    5 : Proof_Payload.ca,
    6 : Proof_Payload.arbo,
    7 : Proof_Payload.zkSnark,
    0 : Proof_Payload.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Proof', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..oo(0, [1, 2, 3, 4, 5, 6, 7])
    ..aOM<ProofGraviton>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'graviton', subBuilder: ProofGraviton.create)
    ..aOM<ProofIden3>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'iden3', subBuilder: ProofIden3.create)
    ..aOM<ProofEthereumStorage>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ethereumStorage', protoName: 'ethereumStorage', subBuilder: ProofEthereumStorage.create)
    ..aOM<ProofEthereumAccount>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ethereumAccount', protoName: 'ethereumAccount', subBuilder: ProofEthereumAccount.create)
    ..aOM<ProofCA>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ca', subBuilder: ProofCA.create)
    ..aOM<ProofArbo>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'arbo', subBuilder: ProofArbo.create)
    ..aOM<ProofZkSNARK>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'zkSnark', protoName: 'zkSnark', subBuilder: ProofZkSNARK.create)
    ..hasRequiredFields = false
  ;

  Proof._() : super();
  factory Proof({
    ProofGraviton? graviton,
    ProofIden3? iden3,
    ProofEthereumStorage? ethereumStorage,
    ProofEthereumAccount? ethereumAccount,
    ProofCA? ca,
    ProofArbo? arbo,
    ProofZkSNARK? zkSnark,
  }) {
    final _result = create();
    if (graviton != null) {
      _result.graviton = graviton;
    }
    if (iden3 != null) {
      _result.iden3 = iden3;
    }
    if (ethereumStorage != null) {
      _result.ethereumStorage = ethereumStorage;
    }
    if (ethereumAccount != null) {
      _result.ethereumAccount = ethereumAccount;
    }
    if (ca != null) {
      _result.ca = ca;
    }
    if (arbo != null) {
      _result.arbo = arbo;
    }
    if (zkSnark != null) {
      _result.zkSnark = zkSnark;
    }
    return _result;
  }
  factory Proof.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Proof.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Proof clone() => Proof()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Proof copyWith(void Function(Proof) updates) => super.copyWith((message) => updates(message as Proof)) as Proof; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Proof create() => Proof._();
  Proof createEmptyInstance() => create();
  static $pb.PbList<Proof> createRepeated() => $pb.PbList<Proof>();
  @$core.pragma('dart2js:noInline')
  static Proof getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Proof>(create);
  static Proof? _defaultInstance;

  Proof_Payload whichPayload() => _Proof_PayloadByTag[$_whichOneof(0)]!;
  void clearPayload() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  ProofGraviton get graviton => $_getN(0);
  @$pb.TagNumber(1)
  set graviton(ProofGraviton v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasGraviton() => $_has(0);
  @$pb.TagNumber(1)
  void clearGraviton() => clearField(1);
  @$pb.TagNumber(1)
  ProofGraviton ensureGraviton() => $_ensure(0);

  @$pb.TagNumber(2)
  ProofIden3 get iden3 => $_getN(1);
  @$pb.TagNumber(2)
  set iden3(ProofIden3 v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasIden3() => $_has(1);
  @$pb.TagNumber(2)
  void clearIden3() => clearField(2);
  @$pb.TagNumber(2)
  ProofIden3 ensureIden3() => $_ensure(1);

  @$pb.TagNumber(3)
  ProofEthereumStorage get ethereumStorage => $_getN(2);
  @$pb.TagNumber(3)
  set ethereumStorage(ProofEthereumStorage v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasEthereumStorage() => $_has(2);
  @$pb.TagNumber(3)
  void clearEthereumStorage() => clearField(3);
  @$pb.TagNumber(3)
  ProofEthereumStorage ensureEthereumStorage() => $_ensure(2);

  @$pb.TagNumber(4)
  ProofEthereumAccount get ethereumAccount => $_getN(3);
  @$pb.TagNumber(4)
  set ethereumAccount(ProofEthereumAccount v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasEthereumAccount() => $_has(3);
  @$pb.TagNumber(4)
  void clearEthereumAccount() => clearField(4);
  @$pb.TagNumber(4)
  ProofEthereumAccount ensureEthereumAccount() => $_ensure(3);

  @$pb.TagNumber(5)
  ProofCA get ca => $_getN(4);
  @$pb.TagNumber(5)
  set ca(ProofCA v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasCa() => $_has(4);
  @$pb.TagNumber(5)
  void clearCa() => clearField(5);
  @$pb.TagNumber(5)
  ProofCA ensureCa() => $_ensure(4);

  @$pb.TagNumber(6)
  ProofArbo get arbo => $_getN(5);
  @$pb.TagNumber(6)
  set arbo(ProofArbo v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasArbo() => $_has(5);
  @$pb.TagNumber(6)
  void clearArbo() => clearField(6);
  @$pb.TagNumber(6)
  ProofArbo ensureArbo() => $_ensure(5);

  @$pb.TagNumber(7)
  ProofZkSNARK get zkSnark => $_getN(6);
  @$pb.TagNumber(7)
  set zkSnark(ProofZkSNARK v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasZkSnark() => $_has(6);
  @$pb.TagNumber(7)
  void clearZkSnark() => clearField(7);
  @$pb.TagNumber(7)
  ProofZkSNARK ensureZkSnark() => $_ensure(6);
}

class ProofGraviton extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofGraviton', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'siblings', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  ProofGraviton._() : super();
  factory ProofGraviton({
    $core.List<$core.int>? siblings,
  }) {
    final _result = create();
    if (siblings != null) {
      _result.siblings = siblings;
    }
    return _result;
  }
  factory ProofGraviton.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofGraviton.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofGraviton clone() => ProofGraviton()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofGraviton copyWith(void Function(ProofGraviton) updates) => super.copyWith((message) => updates(message as ProofGraviton)) as ProofGraviton; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofGraviton create() => ProofGraviton._();
  ProofGraviton createEmptyInstance() => create();
  static $pb.PbList<ProofGraviton> createRepeated() => $pb.PbList<ProofGraviton>();
  @$core.pragma('dart2js:noInline')
  static ProofGraviton getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofGraviton>(create);
  static ProofGraviton? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get siblings => $_getN(0);
  @$pb.TagNumber(1)
  set siblings($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasSiblings() => $_has(0);
  @$pb.TagNumber(1)
  void clearSiblings() => clearField(1);
}

class ProofIden3 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofIden3', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'siblings', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  ProofIden3._() : super();
  factory ProofIden3({
    $core.List<$core.int>? siblings,
  }) {
    final _result = create();
    if (siblings != null) {
      _result.siblings = siblings;
    }
    return _result;
  }
  factory ProofIden3.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofIden3.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofIden3 clone() => ProofIden3()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofIden3 copyWith(void Function(ProofIden3) updates) => super.copyWith((message) => updates(message as ProofIden3)) as ProofIden3; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofIden3 create() => ProofIden3._();
  ProofIden3 createEmptyInstance() => create();
  static $pb.PbList<ProofIden3> createRepeated() => $pb.PbList<ProofIden3>();
  @$core.pragma('dart2js:noInline')
  static ProofIden3 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofIden3>(create);
  static ProofIden3? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get siblings => $_getN(0);
  @$pb.TagNumber(1)
  set siblings($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasSiblings() => $_has(0);
  @$pb.TagNumber(1)
  void clearSiblings() => clearField(1);
}

class ProofEthereumStorage extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofEthereumStorage', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'value', $pb.PbFieldType.OY)
    ..p<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'siblings', $pb.PbFieldType.PY)
    ..hasRequiredFields = false
  ;

  ProofEthereumStorage._() : super();
  factory ProofEthereumStorage({
    $core.List<$core.int>? key,
    $core.List<$core.int>? value,
    $core.Iterable<$core.List<$core.int>>? siblings,
  }) {
    final _result = create();
    if (key != null) {
      _result.key = key;
    }
    if (value != null) {
      _result.value = value;
    }
    if (siblings != null) {
      _result.siblings.addAll(siblings);
    }
    return _result;
  }
  factory ProofEthereumStorage.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofEthereumStorage.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofEthereumStorage clone() => ProofEthereumStorage()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofEthereumStorage copyWith(void Function(ProofEthereumStorage) updates) => super.copyWith((message) => updates(message as ProofEthereumStorage)) as ProofEthereumStorage; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofEthereumStorage create() => ProofEthereumStorage._();
  ProofEthereumStorage createEmptyInstance() => create();
  static $pb.PbList<ProofEthereumStorage> createRepeated() => $pb.PbList<ProofEthereumStorage>();
  @$core.pragma('dart2js:noInline')
  static ProofEthereumStorage getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofEthereumStorage>(create);
  static ProofEthereumStorage? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get key => $_getN(0);
  @$pb.TagNumber(1)
  set key($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasKey() => $_has(0);
  @$pb.TagNumber(1)
  void clearKey() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get value => $_getN(1);
  @$pb.TagNumber(2)
  set value($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasValue() => $_has(1);
  @$pb.TagNumber(2)
  void clearValue() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.List<$core.int>> get siblings => $_getList(2);
}

class ProofEthereumAccount extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofEthereumAccount', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'balance', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'storageHash', $pb.PbFieldType.OY, protoName: 'storageHash')
    ..a<$core.List<$core.int>>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'codeHash', $pb.PbFieldType.OY, protoName: 'codeHash')
    ..p<$core.List<$core.int>>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'siblings', $pb.PbFieldType.PY)
    ..hasRequiredFields = false
  ;

  ProofEthereumAccount._() : super();
  factory ProofEthereumAccount({
    $core.List<$core.int>? nonce,
    $core.List<$core.int>? balance,
    $core.List<$core.int>? storageHash,
    $core.List<$core.int>? codeHash,
    $core.Iterable<$core.List<$core.int>>? siblings,
  }) {
    final _result = create();
    if (nonce != null) {
      _result.nonce = nonce;
    }
    if (balance != null) {
      _result.balance = balance;
    }
    if (storageHash != null) {
      _result.storageHash = storageHash;
    }
    if (codeHash != null) {
      _result.codeHash = codeHash;
    }
    if (siblings != null) {
      _result.siblings.addAll(siblings);
    }
    return _result;
  }
  factory ProofEthereumAccount.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofEthereumAccount.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofEthereumAccount clone() => ProofEthereumAccount()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofEthereumAccount copyWith(void Function(ProofEthereumAccount) updates) => super.copyWith((message) => updates(message as ProofEthereumAccount)) as ProofEthereumAccount; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofEthereumAccount create() => ProofEthereumAccount._();
  ProofEthereumAccount createEmptyInstance() => create();
  static $pb.PbList<ProofEthereumAccount> createRepeated() => $pb.PbList<ProofEthereumAccount>();
  @$core.pragma('dart2js:noInline')
  static ProofEthereumAccount getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofEthereumAccount>(create);
  static ProofEthereumAccount? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get nonce => $_getN(0);
  @$pb.TagNumber(1)
  set nonce($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasNonce() => $_has(0);
  @$pb.TagNumber(1)
  void clearNonce() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get balance => $_getN(1);
  @$pb.TagNumber(2)
  set balance($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBalance() => $_has(1);
  @$pb.TagNumber(2)
  void clearBalance() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get storageHash => $_getN(2);
  @$pb.TagNumber(3)
  set storageHash($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasStorageHash() => $_has(2);
  @$pb.TagNumber(3)
  void clearStorageHash() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.int> get codeHash => $_getN(3);
  @$pb.TagNumber(4)
  set codeHash($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasCodeHash() => $_has(3);
  @$pb.TagNumber(4)
  void clearCodeHash() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$core.List<$core.int>> get siblings => $_getList(4);
}

class ProofCA extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofCA', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..e<ProofCA_Type>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'type', $pb.PbFieldType.OE, defaultOrMaker: ProofCA_Type.UNKNOWN, valueOf: ProofCA_Type.valueOf, enumValues: ProofCA_Type.values)
    ..aOM<CAbundle>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'bundle', subBuilder: CAbundle.create)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signature', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  ProofCA._() : super();
  factory ProofCA({
    ProofCA_Type? type,
    CAbundle? bundle,
    $core.List<$core.int>? signature,
  }) {
    final _result = create();
    if (type != null) {
      _result.type = type;
    }
    if (bundle != null) {
      _result.bundle = bundle;
    }
    if (signature != null) {
      _result.signature = signature;
    }
    return _result;
  }
  factory ProofCA.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofCA.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofCA clone() => ProofCA()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofCA copyWith(void Function(ProofCA) updates) => super.copyWith((message) => updates(message as ProofCA)) as ProofCA; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofCA create() => ProofCA._();
  ProofCA createEmptyInstance() => create();
  static $pb.PbList<ProofCA> createRepeated() => $pb.PbList<ProofCA>();
  @$core.pragma('dart2js:noInline')
  static ProofCA getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofCA>(create);
  static ProofCA? _defaultInstance;

  @$pb.TagNumber(1)
  ProofCA_Type get type => $_getN(0);
  @$pb.TagNumber(1)
  set type(ProofCA_Type v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasType() => $_has(0);
  @$pb.TagNumber(1)
  void clearType() => clearField(1);

  @$pb.TagNumber(2)
  CAbundle get bundle => $_getN(1);
  @$pb.TagNumber(2)
  set bundle(CAbundle v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasBundle() => $_has(1);
  @$pb.TagNumber(2)
  void clearBundle() => clearField(2);
  @$pb.TagNumber(2)
  CAbundle ensureBundle() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.List<$core.int> get signature => $_getN(2);
  @$pb.TagNumber(3)
  set signature($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasSignature() => $_has(2);
  @$pb.TagNumber(3)
  void clearSignature() => clearField(3);
}

class CAbundle extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CAbundle', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'processId', $pb.PbFieldType.OY, protoName: 'processId')
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'address', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  CAbundle._() : super();
  factory CAbundle({
    $core.List<$core.int>? processId,
    $core.List<$core.int>? address,
  }) {
    final _result = create();
    if (processId != null) {
      _result.processId = processId;
    }
    if (address != null) {
      _result.address = address;
    }
    return _result;
  }
  factory CAbundle.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CAbundle.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CAbundle clone() => CAbundle()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CAbundle copyWith(void Function(CAbundle) updates) => super.copyWith((message) => updates(message as CAbundle)) as CAbundle; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CAbundle create() => CAbundle._();
  CAbundle createEmptyInstance() => create();
  static $pb.PbList<CAbundle> createRepeated() => $pb.PbList<CAbundle>();
  @$core.pragma('dart2js:noInline')
  static CAbundle getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CAbundle>(create);
  static CAbundle? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get processId => $_getN(0);
  @$pb.TagNumber(1)
  set processId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasProcessId() => $_has(0);
  @$pb.TagNumber(1)
  void clearProcessId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get address => $_getN(1);
  @$pb.TagNumber(2)
  set address($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAddress() => $_has(1);
  @$pb.TagNumber(2)
  void clearAddress() => clearField(2);
}

class ProofArbo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofArbo', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..e<ProofArbo_Type>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'type', $pb.PbFieldType.OE, defaultOrMaker: ProofArbo_Type.BLAKE2B, valueOf: ProofArbo_Type.valueOf, enumValues: ProofArbo_Type.values)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'siblings', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  ProofArbo._() : super();
  factory ProofArbo({
    ProofArbo_Type? type,
    $core.List<$core.int>? siblings,
  }) {
    final _result = create();
    if (type != null) {
      _result.type = type;
    }
    if (siblings != null) {
      _result.siblings = siblings;
    }
    return _result;
  }
  factory ProofArbo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofArbo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofArbo clone() => ProofArbo()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofArbo copyWith(void Function(ProofArbo) updates) => super.copyWith((message) => updates(message as ProofArbo)) as ProofArbo; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofArbo create() => ProofArbo._();
  ProofArbo createEmptyInstance() => create();
  static $pb.PbList<ProofArbo> createRepeated() => $pb.PbList<ProofArbo>();
  @$core.pragma('dart2js:noInline')
  static ProofArbo getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofArbo>(create);
  static ProofArbo? _defaultInstance;

  @$pb.TagNumber(1)
  ProofArbo_Type get type => $_getN(0);
  @$pb.TagNumber(1)
  set type(ProofArbo_Type v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasType() => $_has(0);
  @$pb.TagNumber(1)
  void clearType() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get siblings => $_getN(1);
  @$pb.TagNumber(2)
  set siblings($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSiblings() => $_has(1);
  @$pb.TagNumber(2)
  void clearSiblings() => clearField(2);
}

class ProofZkSNARK extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofZkSNARK', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..e<ProofZkSNARK_Type>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'type', $pb.PbFieldType.OE, defaultOrMaker: ProofZkSNARK_Type.UNKNOWN, valueOf: ProofZkSNARK_Type.valueOf, enumValues: ProofZkSNARK_Type.values)
    ..pPS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'a')
    ..pPS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'b')
    ..pPS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'c')
    ..pPS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'publicInputs', protoName: 'publicInputs')
    ..hasRequiredFields = false
  ;

  ProofZkSNARK._() : super();
  factory ProofZkSNARK({
    ProofZkSNARK_Type? type,
    $core.Iterable<$core.String>? a,
    $core.Iterable<$core.String>? b,
    $core.Iterable<$core.String>? c,
    $core.Iterable<$core.String>? publicInputs,
  }) {
    final _result = create();
    if (type != null) {
      _result.type = type;
    }
    if (a != null) {
      _result.a.addAll(a);
    }
    if (b != null) {
      _result.b.addAll(b);
    }
    if (c != null) {
      _result.c.addAll(c);
    }
    if (publicInputs != null) {
      _result.publicInputs.addAll(publicInputs);
    }
    return _result;
  }
  factory ProofZkSNARK.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofZkSNARK.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofZkSNARK clone() => ProofZkSNARK()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofZkSNARK copyWith(void Function(ProofZkSNARK) updates) => super.copyWith((message) => updates(message as ProofZkSNARK)) as ProofZkSNARK; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofZkSNARK create() => ProofZkSNARK._();
  ProofZkSNARK createEmptyInstance() => create();
  static $pb.PbList<ProofZkSNARK> createRepeated() => $pb.PbList<ProofZkSNARK>();
  @$core.pragma('dart2js:noInline')
  static ProofZkSNARK getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofZkSNARK>(create);
  static ProofZkSNARK? _defaultInstance;

  @$pb.TagNumber(1)
  ProofZkSNARK_Type get type => $_getN(0);
  @$pb.TagNumber(1)
  set type(ProofZkSNARK_Type v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasType() => $_has(0);
  @$pb.TagNumber(1)
  void clearType() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.String> get a => $_getList(1);

  @$pb.TagNumber(3)
  $core.List<$core.String> get b => $_getList(2);

  @$pb.TagNumber(4)
  $core.List<$core.String> get c => $_getList(3);

  @$pb.TagNumber(5)
  $core.List<$core.String> get publicInputs => $_getList(4);
}

enum Tx_Payload {
  vote, 
  newProcess, 
  admin, 
  setProcess, 
  notSet
}

class Tx extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Tx_Payload> _Tx_PayloadByTag = {
    1 : Tx_Payload.vote,
    2 : Tx_Payload.newProcess,
    3 : Tx_Payload.admin,
    4 : Tx_Payload.setProcess,
    0 : Tx_Payload.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Tx', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..oo(0, [1, 2, 3, 4])
    ..aOM<VoteEnvelope>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'vote', subBuilder: VoteEnvelope.create)
    ..aOM<NewProcessTx>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'newProcess', protoName: 'newProcess', subBuilder: NewProcessTx.create)
    ..aOM<AdminTx>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'admin', subBuilder: AdminTx.create)
    ..aOM<SetProcessTx>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'setProcess', protoName: 'setProcess', subBuilder: SetProcessTx.create)
    ..hasRequiredFields = false
  ;

  Tx._() : super();
  factory Tx({
    VoteEnvelope? vote,
    NewProcessTx? newProcess,
    AdminTx? admin,
    SetProcessTx? setProcess,
  }) {
    final _result = create();
    if (vote != null) {
      _result.vote = vote;
    }
    if (newProcess != null) {
      _result.newProcess = newProcess;
    }
    if (admin != null) {
      _result.admin = admin;
    }
    if (setProcess != null) {
      _result.setProcess = setProcess;
    }
    return _result;
  }
  factory Tx.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Tx.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Tx clone() => Tx()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Tx copyWith(void Function(Tx) updates) => super.copyWith((message) => updates(message as Tx)) as Tx; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Tx create() => Tx._();
  Tx createEmptyInstance() => create();
  static $pb.PbList<Tx> createRepeated() => $pb.PbList<Tx>();
  @$core.pragma('dart2js:noInline')
  static Tx getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Tx>(create);
  static Tx? _defaultInstance;

  Tx_Payload whichPayload() => _Tx_PayloadByTag[$_whichOneof(0)]!;
  void clearPayload() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  VoteEnvelope get vote => $_getN(0);
  @$pb.TagNumber(1)
  set vote(VoteEnvelope v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasVote() => $_has(0);
  @$pb.TagNumber(1)
  void clearVote() => clearField(1);
  @$pb.TagNumber(1)
  VoteEnvelope ensureVote() => $_ensure(0);

  @$pb.TagNumber(2)
  NewProcessTx get newProcess => $_getN(1);
  @$pb.TagNumber(2)
  set newProcess(NewProcessTx v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasNewProcess() => $_has(1);
  @$pb.TagNumber(2)
  void clearNewProcess() => clearField(2);
  @$pb.TagNumber(2)
  NewProcessTx ensureNewProcess() => $_ensure(1);

  @$pb.TagNumber(3)
  AdminTx get admin => $_getN(2);
  @$pb.TagNumber(3)
  set admin(AdminTx v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasAdmin() => $_has(2);
  @$pb.TagNumber(3)
  void clearAdmin() => clearField(3);
  @$pb.TagNumber(3)
  AdminTx ensureAdmin() => $_ensure(2);

  @$pb.TagNumber(4)
  SetProcessTx get setProcess => $_getN(3);
  @$pb.TagNumber(4)
  set setProcess(SetProcessTx v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasSetProcess() => $_has(3);
  @$pb.TagNumber(4)
  void clearSetProcess() => clearField(4);
  @$pb.TagNumber(4)
  SetProcessTx ensureSetProcess() => $_ensure(3);
}

class SignedTx extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SignedTx', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'tx', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signature', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  SignedTx._() : super();
  factory SignedTx({
    $core.List<$core.int>? tx,
    $core.List<$core.int>? signature,
  }) {
    final _result = create();
    if (tx != null) {
      _result.tx = tx;
    }
    if (signature != null) {
      _result.signature = signature;
    }
    return _result;
  }
  factory SignedTx.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SignedTx.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SignedTx clone() => SignedTx()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SignedTx copyWith(void Function(SignedTx) updates) => super.copyWith((message) => updates(message as SignedTx)) as SignedTx; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SignedTx create() => SignedTx._();
  SignedTx createEmptyInstance() => create();
  static $pb.PbList<SignedTx> createRepeated() => $pb.PbList<SignedTx>();
  @$core.pragma('dart2js:noInline')
  static SignedTx getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SignedTx>(create);
  static SignedTx? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get tx => $_getN(0);
  @$pb.TagNumber(1)
  set tx($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasTx() => $_has(0);
  @$pb.TagNumber(1)
  void clearTx() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get signature => $_getN(1);
  @$pb.TagNumber(2)
  set signature($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSignature() => $_has(1);
  @$pb.TagNumber(2)
  void clearSignature() => clearField(2);
}

class NewProcessTx extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'NewProcessTx', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..e<TxType>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'txtype', $pb.PbFieldType.OE, defaultOrMaker: TxType.TX_UNKNOWN, valueOf: TxType.valueOf, enumValues: TxType.values)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..aOM<Process>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'process', subBuilder: Process.create)
    ..hasRequiredFields = false
  ;

  NewProcessTx._() : super();
  factory NewProcessTx({
    TxType? txtype,
    $core.List<$core.int>? nonce,
    Process? process,
  }) {
    final _result = create();
    if (txtype != null) {
      _result.txtype = txtype;
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    if (process != null) {
      _result.process = process;
    }
    return _result;
  }
  factory NewProcessTx.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory NewProcessTx.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  NewProcessTx clone() => NewProcessTx()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  NewProcessTx copyWith(void Function(NewProcessTx) updates) => super.copyWith((message) => updates(message as NewProcessTx)) as NewProcessTx; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static NewProcessTx create() => NewProcessTx._();
  NewProcessTx createEmptyInstance() => create();
  static $pb.PbList<NewProcessTx> createRepeated() => $pb.PbList<NewProcessTx>();
  @$core.pragma('dart2js:noInline')
  static NewProcessTx getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<NewProcessTx>(create);
  static NewProcessTx? _defaultInstance;

  @$pb.TagNumber(1)
  TxType get txtype => $_getN(0);
  @$pb.TagNumber(1)
  set txtype(TxType v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasTxtype() => $_has(0);
  @$pb.TagNumber(1)
  void clearTxtype() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get nonce => $_getN(1);
  @$pb.TagNumber(2)
  set nonce($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNonce() => $_has(1);
  @$pb.TagNumber(2)
  void clearNonce() => clearField(2);

  @$pb.TagNumber(3)
  Process get process => $_getN(2);
  @$pb.TagNumber(3)
  set process(Process v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasProcess() => $_has(2);
  @$pb.TagNumber(3)
  void clearProcess() => clearField(3);
  @$pb.TagNumber(3)
  Process ensureProcess() => $_ensure(2);
}

class SetProcessTx extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SetProcessTx', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..e<TxType>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'txtype', $pb.PbFieldType.OE, defaultOrMaker: TxType.TX_UNKNOWN, valueOf: TxType.valueOf, enumValues: TxType.values)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'processId', $pb.PbFieldType.OY, protoName: 'processId')
    ..e<ProcessStatus>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'status', $pb.PbFieldType.OE, defaultOrMaker: ProcessStatus.PROCESS_UNKNOWN, valueOf: ProcessStatus.valueOf, enumValues: ProcessStatus.values)
    ..a<$core.int>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'questionIndex', $pb.PbFieldType.OU3, protoName: 'questionIndex')
    ..a<$core.List<$core.int>>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusRoot', $pb.PbFieldType.OY, protoName: 'censusRoot')
    ..aOS(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusURI', protoName: 'censusURI')
    ..aOM<Proof>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof', subBuilder: Proof.create)
    ..aOM<ProcessResult>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'results', subBuilder: ProcessResult.create)
    ..hasRequiredFields = false
  ;

  SetProcessTx._() : super();
  factory SetProcessTx({
    TxType? txtype,
    $core.List<$core.int>? nonce,
    $core.List<$core.int>? processId,
    ProcessStatus? status,
    $core.int? questionIndex,
    $core.List<$core.int>? censusRoot,
    $core.String? censusURI,
    Proof? proof,
    ProcessResult? results,
  }) {
    final _result = create();
    if (txtype != null) {
      _result.txtype = txtype;
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    if (processId != null) {
      _result.processId = processId;
    }
    if (status != null) {
      _result.status = status;
    }
    if (questionIndex != null) {
      _result.questionIndex = questionIndex;
    }
    if (censusRoot != null) {
      _result.censusRoot = censusRoot;
    }
    if (censusURI != null) {
      _result.censusURI = censusURI;
    }
    if (proof != null) {
      _result.proof = proof;
    }
    if (results != null) {
      _result.results = results;
    }
    return _result;
  }
  factory SetProcessTx.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SetProcessTx.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SetProcessTx clone() => SetProcessTx()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SetProcessTx copyWith(void Function(SetProcessTx) updates) => super.copyWith((message) => updates(message as SetProcessTx)) as SetProcessTx; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SetProcessTx create() => SetProcessTx._();
  SetProcessTx createEmptyInstance() => create();
  static $pb.PbList<SetProcessTx> createRepeated() => $pb.PbList<SetProcessTx>();
  @$core.pragma('dart2js:noInline')
  static SetProcessTx getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SetProcessTx>(create);
  static SetProcessTx? _defaultInstance;

  @$pb.TagNumber(1)
  TxType get txtype => $_getN(0);
  @$pb.TagNumber(1)
  set txtype(TxType v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasTxtype() => $_has(0);
  @$pb.TagNumber(1)
  void clearTxtype() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get nonce => $_getN(1);
  @$pb.TagNumber(2)
  set nonce($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNonce() => $_has(1);
  @$pb.TagNumber(2)
  void clearNonce() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get processId => $_getN(2);
  @$pb.TagNumber(3)
  set processId($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasProcessId() => $_has(2);
  @$pb.TagNumber(3)
  void clearProcessId() => clearField(3);

  @$pb.TagNumber(4)
  ProcessStatus get status => $_getN(3);
  @$pb.TagNumber(4)
  set status(ProcessStatus v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasStatus() => $_has(3);
  @$pb.TagNumber(4)
  void clearStatus() => clearField(4);

  @$pb.TagNumber(5)
  $core.int get questionIndex => $_getIZ(4);
  @$pb.TagNumber(5)
  set questionIndex($core.int v) { $_setUnsignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasQuestionIndex() => $_has(4);
  @$pb.TagNumber(5)
  void clearQuestionIndex() => clearField(5);

  @$pb.TagNumber(6)
  $core.List<$core.int> get censusRoot => $_getN(5);
  @$pb.TagNumber(6)
  set censusRoot($core.List<$core.int> v) { $_setBytes(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasCensusRoot() => $_has(5);
  @$pb.TagNumber(6)
  void clearCensusRoot() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get censusURI => $_getSZ(6);
  @$pb.TagNumber(7)
  set censusURI($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasCensusURI() => $_has(6);
  @$pb.TagNumber(7)
  void clearCensusURI() => clearField(7);

  @$pb.TagNumber(8)
  Proof get proof => $_getN(7);
  @$pb.TagNumber(8)
  set proof(Proof v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasProof() => $_has(7);
  @$pb.TagNumber(8)
  void clearProof() => clearField(8);
  @$pb.TagNumber(8)
  Proof ensureProof() => $_ensure(7);

  @$pb.TagNumber(9)
  ProcessResult get results => $_getN(8);
  @$pb.TagNumber(9)
  set results(ProcessResult v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasResults() => $_has(8);
  @$pb.TagNumber(9)
  void clearResults() => clearField(9);
  @$pb.TagNumber(9)
  ProcessResult ensureResults() => $_ensure(8);
}

class AdminTx extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AdminTx', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..e<TxType>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'txtype', $pb.PbFieldType.OE, defaultOrMaker: TxType.TX_UNKNOWN, valueOf: TxType.valueOf, enumValues: TxType.values)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'processId', $pb.PbFieldType.OY, protoName: 'processId')
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'address', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'commitmentKey', $pb.PbFieldType.OY, protoName: 'commitmentKey')
    ..a<$core.List<$core.int>>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptionPrivateKey', $pb.PbFieldType.OY, protoName: 'encryptionPrivateKey')
    ..a<$core.List<$core.int>>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptionPublicKey', $pb.PbFieldType.OY, protoName: 'encryptionPublicKey')
    ..a<$core.int>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'keyIndex', $pb.PbFieldType.OU3, protoName: 'keyIndex')
    ..a<$fixnum.Int64>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'power', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..a<$core.List<$core.int>>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'publicKey', $pb.PbFieldType.OY, protoName: 'publicKey')
    ..a<$core.List<$core.int>>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'revealKey', $pb.PbFieldType.OY, protoName: 'revealKey')
    ..a<$core.List<$core.int>>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nonce', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  AdminTx._() : super();
  factory AdminTx({
    TxType? txtype,
    $core.List<$core.int>? processId,
    $core.List<$core.int>? address,
    $core.List<$core.int>? commitmentKey,
    $core.List<$core.int>? encryptionPrivateKey,
    $core.List<$core.int>? encryptionPublicKey,
    $core.int? keyIndex,
    $fixnum.Int64? power,
    $core.List<$core.int>? publicKey,
    $core.List<$core.int>? revealKey,
    $core.List<$core.int>? nonce,
  }) {
    final _result = create();
    if (txtype != null) {
      _result.txtype = txtype;
    }
    if (processId != null) {
      _result.processId = processId;
    }
    if (address != null) {
      _result.address = address;
    }
    if (commitmentKey != null) {
      _result.commitmentKey = commitmentKey;
    }
    if (encryptionPrivateKey != null) {
      _result.encryptionPrivateKey = encryptionPrivateKey;
    }
    if (encryptionPublicKey != null) {
      _result.encryptionPublicKey = encryptionPublicKey;
    }
    if (keyIndex != null) {
      _result.keyIndex = keyIndex;
    }
    if (power != null) {
      _result.power = power;
    }
    if (publicKey != null) {
      _result.publicKey = publicKey;
    }
    if (revealKey != null) {
      _result.revealKey = revealKey;
    }
    if (nonce != null) {
      _result.nonce = nonce;
    }
    return _result;
  }
  factory AdminTx.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AdminTx.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AdminTx clone() => AdminTx()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AdminTx copyWith(void Function(AdminTx) updates) => super.copyWith((message) => updates(message as AdminTx)) as AdminTx; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AdminTx create() => AdminTx._();
  AdminTx createEmptyInstance() => create();
  static $pb.PbList<AdminTx> createRepeated() => $pb.PbList<AdminTx>();
  @$core.pragma('dart2js:noInline')
  static AdminTx getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AdminTx>(create);
  static AdminTx? _defaultInstance;

  @$pb.TagNumber(1)
  TxType get txtype => $_getN(0);
  @$pb.TagNumber(1)
  set txtype(TxType v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasTxtype() => $_has(0);
  @$pb.TagNumber(1)
  void clearTxtype() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get processId => $_getN(1);
  @$pb.TagNumber(2)
  set processId($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasProcessId() => $_has(1);
  @$pb.TagNumber(2)
  void clearProcessId() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get address => $_getN(2);
  @$pb.TagNumber(3)
  set address($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAddress() => $_has(2);
  @$pb.TagNumber(3)
  void clearAddress() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.int> get commitmentKey => $_getN(3);
  @$pb.TagNumber(4)
  set commitmentKey($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasCommitmentKey() => $_has(3);
  @$pb.TagNumber(4)
  void clearCommitmentKey() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$core.int> get encryptionPrivateKey => $_getN(4);
  @$pb.TagNumber(5)
  set encryptionPrivateKey($core.List<$core.int> v) { $_setBytes(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasEncryptionPrivateKey() => $_has(4);
  @$pb.TagNumber(5)
  void clearEncryptionPrivateKey() => clearField(5);

  @$pb.TagNumber(6)
  $core.List<$core.int> get encryptionPublicKey => $_getN(5);
  @$pb.TagNumber(6)
  set encryptionPublicKey($core.List<$core.int> v) { $_setBytes(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasEncryptionPublicKey() => $_has(5);
  @$pb.TagNumber(6)
  void clearEncryptionPublicKey() => clearField(6);

  @$pb.TagNumber(7)
  $core.int get keyIndex => $_getIZ(6);
  @$pb.TagNumber(7)
  set keyIndex($core.int v) { $_setUnsignedInt32(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasKeyIndex() => $_has(6);
  @$pb.TagNumber(7)
  void clearKeyIndex() => clearField(7);

  @$pb.TagNumber(8)
  $fixnum.Int64 get power => $_getI64(7);
  @$pb.TagNumber(8)
  set power($fixnum.Int64 v) { $_setInt64(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasPower() => $_has(7);
  @$pb.TagNumber(8)
  void clearPower() => clearField(8);

  @$pb.TagNumber(9)
  $core.List<$core.int> get publicKey => $_getN(8);
  @$pb.TagNumber(9)
  set publicKey($core.List<$core.int> v) { $_setBytes(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasPublicKey() => $_has(8);
  @$pb.TagNumber(9)
  void clearPublicKey() => clearField(9);

  @$pb.TagNumber(10)
  $core.List<$core.int> get revealKey => $_getN(9);
  @$pb.TagNumber(10)
  set revealKey($core.List<$core.int> v) { $_setBytes(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasRevealKey() => $_has(9);
  @$pb.TagNumber(10)
  void clearRevealKey() => clearField(10);

  @$pb.TagNumber(11)
  $core.List<$core.int> get nonce => $_getN(10);
  @$pb.TagNumber(11)
  set nonce($core.List<$core.int> v) { $_setBytes(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasNonce() => $_has(10);
  @$pb.TagNumber(11)
  void clearNonce() => clearField(11);
}

class Process extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Process', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'processId', $pb.PbFieldType.OY, protoName: 'processId')
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'entityId', $pb.PbFieldType.OY, protoName: 'entityId')
    ..a<$core.int>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'startBlock', $pb.PbFieldType.OU3, protoName: 'startBlock')
    ..a<$core.int>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'blockCount', $pb.PbFieldType.OU3, protoName: 'blockCount')
    ..a<$core.List<$core.int>>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusRoot', $pb.PbFieldType.OY, protoName: 'censusRoot')
    ..aOS(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusURI', protoName: 'censusURI')
    ..pPS(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'commitmentKeys', protoName: 'commitmentKeys')
    ..pPS(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptionPrivateKeys', protoName: 'encryptionPrivateKeys')
    ..pPS(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptionPublicKeys', protoName: 'encryptionPublicKeys')
    ..pPS(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'revealKeys', protoName: 'revealKeys')
    ..a<$core.int>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'keyIndex', $pb.PbFieldType.OU3, protoName: 'keyIndex')
    ..e<ProcessStatus>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'status', $pb.PbFieldType.OE, defaultOrMaker: ProcessStatus.PROCESS_UNKNOWN, valueOf: ProcessStatus.valueOf, enumValues: ProcessStatus.values)
    ..a<$core.List<$core.int>>(13, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'paramsSignature', $pb.PbFieldType.OY, protoName: 'paramsSignature')
    ..a<$core.int>(14, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'namespace', $pb.PbFieldType.OU3)
    ..aOM<EnvelopeType>(15, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'envelopeType', protoName: 'envelopeType', subBuilder: EnvelopeType.create)
    ..aOM<ProcessMode>(16, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'mode', subBuilder: ProcessMode.create)
    ..a<$core.int>(17, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'questionIndex', $pb.PbFieldType.OU3, protoName: 'questionIndex')
    ..a<$core.int>(18, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'questionCount', $pb.PbFieldType.OU3, protoName: 'questionCount')
    ..aOM<ProcessVoteOptions>(19, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'voteOptions', protoName: 'voteOptions', subBuilder: ProcessVoteOptions.create)
    ..e<CensusOrigin>(20, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusOrigin', $pb.PbFieldType.OE, protoName: 'censusOrigin', defaultOrMaker: CensusOrigin.CENSUS_UNKNOWN, valueOf: CensusOrigin.valueOf, enumValues: CensusOrigin.values)
    ..aOM<ProcessResult>(21, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'results', subBuilder: ProcessResult.create)
    ..p<$core.List<$core.int>>(22, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'resultsSignatures', $pb.PbFieldType.PY, protoName: 'resultsSignatures')
    ..a<$core.int>(23, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ethIndexSlot', $pb.PbFieldType.OU3, protoName: 'ethIndexSlot')
    ..a<$fixnum.Int64>(24, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'sourceBlockHeight', $pb.PbFieldType.OU6, protoName: 'sourceBlockHeight', defaultOrMaker: $fixnum.Int64.ZERO)
    ..a<$core.List<$core.int>>(25, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'owner', $pb.PbFieldType.OY)
    ..aOS(26, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'metadata')
    ..e<SourceNetworkId>(27, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'sourceNetworkId', $pb.PbFieldType.OE, protoName: 'sourceNetworkId', defaultOrMaker: SourceNetworkId.UNKNOWN, valueOf: SourceNetworkId.valueOf, enumValues: SourceNetworkId.values)
    ..hasRequiredFields = false
  ;

  Process._() : super();
  factory Process({
    $core.List<$core.int>? processId,
    $core.List<$core.int>? entityId,
    $core.int? startBlock,
    $core.int? blockCount,
    $core.List<$core.int>? censusRoot,
    $core.String? censusURI,
    $core.Iterable<$core.String>? commitmentKeys,
    $core.Iterable<$core.String>? encryptionPrivateKeys,
    $core.Iterable<$core.String>? encryptionPublicKeys,
    $core.Iterable<$core.String>? revealKeys,
    $core.int? keyIndex,
    ProcessStatus? status,
    $core.List<$core.int>? paramsSignature,
    $core.int? namespace,
    EnvelopeType? envelopeType,
    ProcessMode? mode,
    $core.int? questionIndex,
    $core.int? questionCount,
    ProcessVoteOptions? voteOptions,
    CensusOrigin? censusOrigin,
    ProcessResult? results,
    $core.Iterable<$core.List<$core.int>>? resultsSignatures,
    $core.int? ethIndexSlot,
    $fixnum.Int64? sourceBlockHeight,
    $core.List<$core.int>? owner,
    $core.String? metadata,
    SourceNetworkId? sourceNetworkId,
  }) {
    final _result = create();
    if (processId != null) {
      _result.processId = processId;
    }
    if (entityId != null) {
      _result.entityId = entityId;
    }
    if (startBlock != null) {
      _result.startBlock = startBlock;
    }
    if (blockCount != null) {
      _result.blockCount = blockCount;
    }
    if (censusRoot != null) {
      _result.censusRoot = censusRoot;
    }
    if (censusURI != null) {
      _result.censusURI = censusURI;
    }
    if (commitmentKeys != null) {
      _result.commitmentKeys.addAll(commitmentKeys);
    }
    if (encryptionPrivateKeys != null) {
      _result.encryptionPrivateKeys.addAll(encryptionPrivateKeys);
    }
    if (encryptionPublicKeys != null) {
      _result.encryptionPublicKeys.addAll(encryptionPublicKeys);
    }
    if (revealKeys != null) {
      _result.revealKeys.addAll(revealKeys);
    }
    if (keyIndex != null) {
      _result.keyIndex = keyIndex;
    }
    if (status != null) {
      _result.status = status;
    }
    if (paramsSignature != null) {
      _result.paramsSignature = paramsSignature;
    }
    if (namespace != null) {
      _result.namespace = namespace;
    }
    if (envelopeType != null) {
      _result.envelopeType = envelopeType;
    }
    if (mode != null) {
      _result.mode = mode;
    }
    if (questionIndex != null) {
      _result.questionIndex = questionIndex;
    }
    if (questionCount != null) {
      _result.questionCount = questionCount;
    }
    if (voteOptions != null) {
      _result.voteOptions = voteOptions;
    }
    if (censusOrigin != null) {
      _result.censusOrigin = censusOrigin;
    }
    if (results != null) {
      _result.results = results;
    }
    if (resultsSignatures != null) {
      _result.resultsSignatures.addAll(resultsSignatures);
    }
    if (ethIndexSlot != null) {
      _result.ethIndexSlot = ethIndexSlot;
    }
    if (sourceBlockHeight != null) {
      _result.sourceBlockHeight = sourceBlockHeight;
    }
    if (owner != null) {
      _result.owner = owner;
    }
    if (metadata != null) {
      _result.metadata = metadata;
    }
    if (sourceNetworkId != null) {
      _result.sourceNetworkId = sourceNetworkId;
    }
    return _result;
  }
  factory Process.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Process.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Process clone() => Process()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Process copyWith(void Function(Process) updates) => super.copyWith((message) => updates(message as Process)) as Process; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Process create() => Process._();
  Process createEmptyInstance() => create();
  static $pb.PbList<Process> createRepeated() => $pb.PbList<Process>();
  @$core.pragma('dart2js:noInline')
  static Process getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Process>(create);
  static Process? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get processId => $_getN(0);
  @$pb.TagNumber(1)
  set processId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasProcessId() => $_has(0);
  @$pb.TagNumber(1)
  void clearProcessId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get entityId => $_getN(1);
  @$pb.TagNumber(2)
  set entityId($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasEntityId() => $_has(1);
  @$pb.TagNumber(2)
  void clearEntityId() => clearField(2);

  @$pb.TagNumber(3)
  $core.int get startBlock => $_getIZ(2);
  @$pb.TagNumber(3)
  set startBlock($core.int v) { $_setUnsignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasStartBlock() => $_has(2);
  @$pb.TagNumber(3)
  void clearStartBlock() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get blockCount => $_getIZ(3);
  @$pb.TagNumber(4)
  set blockCount($core.int v) { $_setUnsignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasBlockCount() => $_has(3);
  @$pb.TagNumber(4)
  void clearBlockCount() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$core.int> get censusRoot => $_getN(4);
  @$pb.TagNumber(5)
  set censusRoot($core.List<$core.int> v) { $_setBytes(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasCensusRoot() => $_has(4);
  @$pb.TagNumber(5)
  void clearCensusRoot() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get censusURI => $_getSZ(5);
  @$pb.TagNumber(6)
  set censusURI($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasCensusURI() => $_has(5);
  @$pb.TagNumber(6)
  void clearCensusURI() => clearField(6);

  @$pb.TagNumber(7)
  $core.List<$core.String> get commitmentKeys => $_getList(6);

  @$pb.TagNumber(8)
  $core.List<$core.String> get encryptionPrivateKeys => $_getList(7);

  @$pb.TagNumber(9)
  $core.List<$core.String> get encryptionPublicKeys => $_getList(8);

  @$pb.TagNumber(10)
  $core.List<$core.String> get revealKeys => $_getList(9);

  @$pb.TagNumber(11)
  $core.int get keyIndex => $_getIZ(10);
  @$pb.TagNumber(11)
  set keyIndex($core.int v) { $_setUnsignedInt32(10, v); }
  @$pb.TagNumber(11)
  $core.bool hasKeyIndex() => $_has(10);
  @$pb.TagNumber(11)
  void clearKeyIndex() => clearField(11);

  @$pb.TagNumber(12)
  ProcessStatus get status => $_getN(11);
  @$pb.TagNumber(12)
  set status(ProcessStatus v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasStatus() => $_has(11);
  @$pb.TagNumber(12)
  void clearStatus() => clearField(12);

  @$pb.TagNumber(13)
  $core.List<$core.int> get paramsSignature => $_getN(12);
  @$pb.TagNumber(13)
  set paramsSignature($core.List<$core.int> v) { $_setBytes(12, v); }
  @$pb.TagNumber(13)
  $core.bool hasParamsSignature() => $_has(12);
  @$pb.TagNumber(13)
  void clearParamsSignature() => clearField(13);

  @$pb.TagNumber(14)
  $core.int get namespace => $_getIZ(13);
  @$pb.TagNumber(14)
  set namespace($core.int v) { $_setUnsignedInt32(13, v); }
  @$pb.TagNumber(14)
  $core.bool hasNamespace() => $_has(13);
  @$pb.TagNumber(14)
  void clearNamespace() => clearField(14);

  @$pb.TagNumber(15)
  EnvelopeType get envelopeType => $_getN(14);
  @$pb.TagNumber(15)
  set envelopeType(EnvelopeType v) { setField(15, v); }
  @$pb.TagNumber(15)
  $core.bool hasEnvelopeType() => $_has(14);
  @$pb.TagNumber(15)
  void clearEnvelopeType() => clearField(15);
  @$pb.TagNumber(15)
  EnvelopeType ensureEnvelopeType() => $_ensure(14);

  @$pb.TagNumber(16)
  ProcessMode get mode => $_getN(15);
  @$pb.TagNumber(16)
  set mode(ProcessMode v) { setField(16, v); }
  @$pb.TagNumber(16)
  $core.bool hasMode() => $_has(15);
  @$pb.TagNumber(16)
  void clearMode() => clearField(16);
  @$pb.TagNumber(16)
  ProcessMode ensureMode() => $_ensure(15);

  @$pb.TagNumber(17)
  $core.int get questionIndex => $_getIZ(16);
  @$pb.TagNumber(17)
  set questionIndex($core.int v) { $_setUnsignedInt32(16, v); }
  @$pb.TagNumber(17)
  $core.bool hasQuestionIndex() => $_has(16);
  @$pb.TagNumber(17)
  void clearQuestionIndex() => clearField(17);

  @$pb.TagNumber(18)
  $core.int get questionCount => $_getIZ(17);
  @$pb.TagNumber(18)
  set questionCount($core.int v) { $_setUnsignedInt32(17, v); }
  @$pb.TagNumber(18)
  $core.bool hasQuestionCount() => $_has(17);
  @$pb.TagNumber(18)
  void clearQuestionCount() => clearField(18);

  @$pb.TagNumber(19)
  ProcessVoteOptions get voteOptions => $_getN(18);
  @$pb.TagNumber(19)
  set voteOptions(ProcessVoteOptions v) { setField(19, v); }
  @$pb.TagNumber(19)
  $core.bool hasVoteOptions() => $_has(18);
  @$pb.TagNumber(19)
  void clearVoteOptions() => clearField(19);
  @$pb.TagNumber(19)
  ProcessVoteOptions ensureVoteOptions() => $_ensure(18);

  @$pb.TagNumber(20)
  CensusOrigin get censusOrigin => $_getN(19);
  @$pb.TagNumber(20)
  set censusOrigin(CensusOrigin v) { setField(20, v); }
  @$pb.TagNumber(20)
  $core.bool hasCensusOrigin() => $_has(19);
  @$pb.TagNumber(20)
  void clearCensusOrigin() => clearField(20);

  @$pb.TagNumber(21)
  ProcessResult get results => $_getN(20);
  @$pb.TagNumber(21)
  set results(ProcessResult v) { setField(21, v); }
  @$pb.TagNumber(21)
  $core.bool hasResults() => $_has(20);
  @$pb.TagNumber(21)
  void clearResults() => clearField(21);
  @$pb.TagNumber(21)
  ProcessResult ensureResults() => $_ensure(20);

  @$pb.TagNumber(22)
  $core.List<$core.List<$core.int>> get resultsSignatures => $_getList(21);

  @$pb.TagNumber(23)
  $core.int get ethIndexSlot => $_getIZ(22);
  @$pb.TagNumber(23)
  set ethIndexSlot($core.int v) { $_setUnsignedInt32(22, v); }
  @$pb.TagNumber(23)
  $core.bool hasEthIndexSlot() => $_has(22);
  @$pb.TagNumber(23)
  void clearEthIndexSlot() => clearField(23);

  @$pb.TagNumber(24)
  $fixnum.Int64 get sourceBlockHeight => $_getI64(23);
  @$pb.TagNumber(24)
  set sourceBlockHeight($fixnum.Int64 v) { $_setInt64(23, v); }
  @$pb.TagNumber(24)
  $core.bool hasSourceBlockHeight() => $_has(23);
  @$pb.TagNumber(24)
  void clearSourceBlockHeight() => clearField(24);

  @$pb.TagNumber(25)
  $core.List<$core.int> get owner => $_getN(24);
  @$pb.TagNumber(25)
  set owner($core.List<$core.int> v) { $_setBytes(24, v); }
  @$pb.TagNumber(25)
  $core.bool hasOwner() => $_has(24);
  @$pb.TagNumber(25)
  void clearOwner() => clearField(25);

  @$pb.TagNumber(26)
  $core.String get metadata => $_getSZ(25);
  @$pb.TagNumber(26)
  set metadata($core.String v) { $_setString(25, v); }
  @$pb.TagNumber(26)
  $core.bool hasMetadata() => $_has(25);
  @$pb.TagNumber(26)
  void clearMetadata() => clearField(26);

  @$pb.TagNumber(27)
  SourceNetworkId get sourceNetworkId => $_getN(26);
  @$pb.TagNumber(27)
  set sourceNetworkId(SourceNetworkId v) { setField(27, v); }
  @$pb.TagNumber(27)
  $core.bool hasSourceNetworkId() => $_has(26);
  @$pb.TagNumber(27)
  void clearSourceNetworkId() => clearField(27);
}

class EnvelopeType extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EnvelopeType', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOB(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'serial')
    ..aOB(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'anonymous')
    ..aOB(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptedVotes', protoName: 'encryptedVotes')
    ..aOB(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'uniqueValues', protoName: 'uniqueValues')
    ..aOB(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'costFromWeight', protoName: 'costFromWeight')
    ..hasRequiredFields = false
  ;

  EnvelopeType._() : super();
  factory EnvelopeType({
    $core.bool? serial,
    $core.bool? anonymous,
    $core.bool? encryptedVotes,
    $core.bool? uniqueValues,
    $core.bool? costFromWeight,
  }) {
    final _result = create();
    if (serial != null) {
      _result.serial = serial;
    }
    if (anonymous != null) {
      _result.anonymous = anonymous;
    }
    if (encryptedVotes != null) {
      _result.encryptedVotes = encryptedVotes;
    }
    if (uniqueValues != null) {
      _result.uniqueValues = uniqueValues;
    }
    if (costFromWeight != null) {
      _result.costFromWeight = costFromWeight;
    }
    return _result;
  }
  factory EnvelopeType.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EnvelopeType.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EnvelopeType clone() => EnvelopeType()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EnvelopeType copyWith(void Function(EnvelopeType) updates) => super.copyWith((message) => updates(message as EnvelopeType)) as EnvelopeType; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EnvelopeType create() => EnvelopeType._();
  EnvelopeType createEmptyInstance() => create();
  static $pb.PbList<EnvelopeType> createRepeated() => $pb.PbList<EnvelopeType>();
  @$core.pragma('dart2js:noInline')
  static EnvelopeType getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EnvelopeType>(create);
  static EnvelopeType? _defaultInstance;

  @$pb.TagNumber(1)
  $core.bool get serial => $_getBF(0);
  @$pb.TagNumber(1)
  set serial($core.bool v) { $_setBool(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasSerial() => $_has(0);
  @$pb.TagNumber(1)
  void clearSerial() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get anonymous => $_getBF(1);
  @$pb.TagNumber(2)
  set anonymous($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAnonymous() => $_has(1);
  @$pb.TagNumber(2)
  void clearAnonymous() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get encryptedVotes => $_getBF(2);
  @$pb.TagNumber(3)
  set encryptedVotes($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasEncryptedVotes() => $_has(2);
  @$pb.TagNumber(3)
  void clearEncryptedVotes() => clearField(3);

  @$pb.TagNumber(4)
  $core.bool get uniqueValues => $_getBF(3);
  @$pb.TagNumber(4)
  set uniqueValues($core.bool v) { $_setBool(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasUniqueValues() => $_has(3);
  @$pb.TagNumber(4)
  void clearUniqueValues() => clearField(4);

  @$pb.TagNumber(5)
  $core.bool get costFromWeight => $_getBF(4);
  @$pb.TagNumber(5)
  set costFromWeight($core.bool v) { $_setBool(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasCostFromWeight() => $_has(4);
  @$pb.TagNumber(5)
  void clearCostFromWeight() => clearField(5);
}

class ProcessMode extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProcessMode', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOB(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'autoStart', protoName: 'autoStart')
    ..aOB(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'interruptible')
    ..aOB(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'dynamicCensus', protoName: 'dynamicCensus')
    ..aOB(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptedMetaData', protoName: 'encryptedMetaData')
    ..hasRequiredFields = false
  ;

  ProcessMode._() : super();
  factory ProcessMode({
    $core.bool? autoStart,
    $core.bool? interruptible,
    $core.bool? dynamicCensus,
    $core.bool? encryptedMetaData,
  }) {
    final _result = create();
    if (autoStart != null) {
      _result.autoStart = autoStart;
    }
    if (interruptible != null) {
      _result.interruptible = interruptible;
    }
    if (dynamicCensus != null) {
      _result.dynamicCensus = dynamicCensus;
    }
    if (encryptedMetaData != null) {
      _result.encryptedMetaData = encryptedMetaData;
    }
    return _result;
  }
  factory ProcessMode.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessMode.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProcessMode clone() => ProcessMode()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProcessMode copyWith(void Function(ProcessMode) updates) => super.copyWith((message) => updates(message as ProcessMode)) as ProcessMode; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessMode create() => ProcessMode._();
  ProcessMode createEmptyInstance() => create();
  static $pb.PbList<ProcessMode> createRepeated() => $pb.PbList<ProcessMode>();
  @$core.pragma('dart2js:noInline')
  static ProcessMode getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProcessMode>(create);
  static ProcessMode? _defaultInstance;

  @$pb.TagNumber(1)
  $core.bool get autoStart => $_getBF(0);
  @$pb.TagNumber(1)
  set autoStart($core.bool v) { $_setBool(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAutoStart() => $_has(0);
  @$pb.TagNumber(1)
  void clearAutoStart() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get interruptible => $_getBF(1);
  @$pb.TagNumber(2)
  set interruptible($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasInterruptible() => $_has(1);
  @$pb.TagNumber(2)
  void clearInterruptible() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get dynamicCensus => $_getBF(2);
  @$pb.TagNumber(3)
  set dynamicCensus($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasDynamicCensus() => $_has(2);
  @$pb.TagNumber(3)
  void clearDynamicCensus() => clearField(3);

  @$pb.TagNumber(4)
  $core.bool get encryptedMetaData => $_getBF(3);
  @$pb.TagNumber(4)
  set encryptedMetaData($core.bool v) { $_setBool(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasEncryptedMetaData() => $_has(3);
  @$pb.TagNumber(4)
  void clearEncryptedMetaData() => clearField(4);
}

class ProcessVoteOptions extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProcessVoteOptions', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'maxCount', $pb.PbFieldType.OU3, protoName: 'maxCount')
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'maxValue', $pb.PbFieldType.OU3, protoName: 'maxValue')
    ..a<$core.int>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'maxVoteOverwrites', $pb.PbFieldType.OU3, protoName: 'maxVoteOverwrites')
    ..a<$core.int>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'maxTotalCost', $pb.PbFieldType.OU3, protoName: 'maxTotalCost')
    ..a<$core.int>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'costExponent', $pb.PbFieldType.OU3, protoName: 'costExponent')
    ..hasRequiredFields = false
  ;

  ProcessVoteOptions._() : super();
  factory ProcessVoteOptions({
    $core.int? maxCount,
    $core.int? maxValue,
    $core.int? maxVoteOverwrites,
    $core.int? maxTotalCost,
    $core.int? costExponent,
  }) {
    final _result = create();
    if (maxCount != null) {
      _result.maxCount = maxCount;
    }
    if (maxValue != null) {
      _result.maxValue = maxValue;
    }
    if (maxVoteOverwrites != null) {
      _result.maxVoteOverwrites = maxVoteOverwrites;
    }
    if (maxTotalCost != null) {
      _result.maxTotalCost = maxTotalCost;
    }
    if (costExponent != null) {
      _result.costExponent = costExponent;
    }
    return _result;
  }
  factory ProcessVoteOptions.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessVoteOptions.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProcessVoteOptions clone() => ProcessVoteOptions()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProcessVoteOptions copyWith(void Function(ProcessVoteOptions) updates) => super.copyWith((message) => updates(message as ProcessVoteOptions)) as ProcessVoteOptions; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessVoteOptions create() => ProcessVoteOptions._();
  ProcessVoteOptions createEmptyInstance() => create();
  static $pb.PbList<ProcessVoteOptions> createRepeated() => $pb.PbList<ProcessVoteOptions>();
  @$core.pragma('dart2js:noInline')
  static ProcessVoteOptions getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProcessVoteOptions>(create);
  static ProcessVoteOptions? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get maxCount => $_getIZ(0);
  @$pb.TagNumber(1)
  set maxCount($core.int v) { $_setUnsignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasMaxCount() => $_has(0);
  @$pb.TagNumber(1)
  void clearMaxCount() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get maxValue => $_getIZ(1);
  @$pb.TagNumber(2)
  set maxValue($core.int v) { $_setUnsignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasMaxValue() => $_has(1);
  @$pb.TagNumber(2)
  void clearMaxValue() => clearField(2);

  @$pb.TagNumber(3)
  $core.int get maxVoteOverwrites => $_getIZ(2);
  @$pb.TagNumber(3)
  set maxVoteOverwrites($core.int v) { $_setUnsignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasMaxVoteOverwrites() => $_has(2);
  @$pb.TagNumber(3)
  void clearMaxVoteOverwrites() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get maxTotalCost => $_getIZ(3);
  @$pb.TagNumber(4)
  set maxTotalCost($core.int v) { $_setUnsignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasMaxTotalCost() => $_has(3);
  @$pb.TagNumber(4)
  void clearMaxTotalCost() => clearField(4);

  @$pb.TagNumber(5)
  $core.int get costExponent => $_getIZ(4);
  @$pb.TagNumber(5)
  set costExponent($core.int v) { $_setUnsignedInt32(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasCostExponent() => $_has(4);
  @$pb.TagNumber(5)
  void clearCostExponent() => clearField(5);
}

class OracleList extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'OracleList', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..p<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'oracles', $pb.PbFieldType.PY)
    ..hasRequiredFields = false
  ;

  OracleList._() : super();
  factory OracleList({
    $core.Iterable<$core.List<$core.int>>? oracles,
  }) {
    final _result = create();
    if (oracles != null) {
      _result.oracles.addAll(oracles);
    }
    return _result;
  }
  factory OracleList.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory OracleList.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  OracleList clone() => OracleList()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  OracleList copyWith(void Function(OracleList) updates) => super.copyWith((message) => updates(message as OracleList)) as OracleList; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static OracleList create() => OracleList._();
  OracleList createEmptyInstance() => create();
  static $pb.PbList<OracleList> createRepeated() => $pb.PbList<OracleList>();
  @$core.pragma('dart2js:noInline')
  static OracleList getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<OracleList>(create);
  static OracleList? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.List<$core.int>> get oracles => $_getList(0);
}

class ValidatorList extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ValidatorList', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..pc<Validator>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'validators', $pb.PbFieldType.PM, subBuilder: Validator.create)
    ..hasRequiredFields = false
  ;

  ValidatorList._() : super();
  factory ValidatorList({
    $core.Iterable<Validator>? validators,
  }) {
    final _result = create();
    if (validators != null) {
      _result.validators.addAll(validators);
    }
    return _result;
  }
  factory ValidatorList.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ValidatorList.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ValidatorList clone() => ValidatorList()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ValidatorList copyWith(void Function(ValidatorList) updates) => super.copyWith((message) => updates(message as ValidatorList)) as ValidatorList; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ValidatorList create() => ValidatorList._();
  ValidatorList createEmptyInstance() => create();
  static $pb.PbList<ValidatorList> createRepeated() => $pb.PbList<ValidatorList>();
  @$core.pragma('dart2js:noInline')
  static ValidatorList getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ValidatorList>(create);
  static ValidatorList? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Validator> get validators => $_getList(0);
}

class Validator extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Validator', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'address', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'pubKey', $pb.PbFieldType.OY, protoName: 'pubKey')
    ..a<$fixnum.Int64>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'power', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..hasRequiredFields = false
  ;

  Validator._() : super();
  factory Validator({
    $core.List<$core.int>? address,
    $core.List<$core.int>? pubKey,
    $fixnum.Int64? power,
    $core.String? name,
  }) {
    final _result = create();
    if (address != null) {
      _result.address = address;
    }
    if (pubKey != null) {
      _result.pubKey = pubKey;
    }
    if (power != null) {
      _result.power = power;
    }
    if (name != null) {
      _result.name = name;
    }
    return _result;
  }
  factory Validator.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Validator.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Validator clone() => Validator()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Validator copyWith(void Function(Validator) updates) => super.copyWith((message) => updates(message as Validator)) as Validator; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Validator create() => Validator._();
  Validator createEmptyInstance() => create();
  static $pb.PbList<Validator> createRepeated() => $pb.PbList<Validator>();
  @$core.pragma('dart2js:noInline')
  static Validator getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Validator>(create);
  static Validator? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get address => $_getN(0);
  @$pb.TagNumber(1)
  set address($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAddress() => $_has(0);
  @$pb.TagNumber(1)
  void clearAddress() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get pubKey => $_getN(1);
  @$pb.TagNumber(2)
  set pubKey($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasPubKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearPubKey() => clearField(2);

  @$pb.TagNumber(3)
  $fixnum.Int64 get power => $_getI64(2);
  @$pb.TagNumber(3)
  set power($fixnum.Int64 v) { $_setInt64(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasPower() => $_has(2);
  @$pb.TagNumber(3)
  void clearPower() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get name => $_getSZ(3);
  @$pb.TagNumber(4)
  set name($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasName() => $_has(3);
  @$pb.TagNumber(4)
  void clearName() => clearField(4);
}

class Vote extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Vote', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'height', $pb.PbFieldType.OU3)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nullifier', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'processId', $pb.PbFieldType.OY, protoName: 'processId')
    ..a<$core.List<$core.int>>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'votePackage', $pb.PbFieldType.OY, protoName: 'votePackage')
    ..p<$core.int>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptionKeyIndexes', $pb.PbFieldType.PU3, protoName: 'encryptionKeyIndexes')
    ..a<$core.List<$core.int>>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'weight', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  Vote._() : super();
  factory Vote({
    $core.int? height,
    $core.List<$core.int>? nullifier,
    $core.List<$core.int>? processId,
    $core.List<$core.int>? votePackage,
    $core.Iterable<$core.int>? encryptionKeyIndexes,
    $core.List<$core.int>? weight,
  }) {
    final _result = create();
    if (height != null) {
      _result.height = height;
    }
    if (nullifier != null) {
      _result.nullifier = nullifier;
    }
    if (processId != null) {
      _result.processId = processId;
    }
    if (votePackage != null) {
      _result.votePackage = votePackage;
    }
    if (encryptionKeyIndexes != null) {
      _result.encryptionKeyIndexes.addAll(encryptionKeyIndexes);
    }
    if (weight != null) {
      _result.weight = weight;
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

  @$pb.TagNumber(1)
  $core.int get height => $_getIZ(0);
  @$pb.TagNumber(1)
  set height($core.int v) { $_setUnsignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasHeight() => $_has(0);
  @$pb.TagNumber(1)
  void clearHeight() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get nullifier => $_getN(1);
  @$pb.TagNumber(2)
  set nullifier($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasNullifier() => $_has(1);
  @$pb.TagNumber(2)
  void clearNullifier() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get processId => $_getN(2);
  @$pb.TagNumber(3)
  set processId($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasProcessId() => $_has(2);
  @$pb.TagNumber(3)
  void clearProcessId() => clearField(3);

  @$pb.TagNumber(4)
  $core.List<$core.int> get votePackage => $_getN(3);
  @$pb.TagNumber(4)
  set votePackage($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasVotePackage() => $_has(3);
  @$pb.TagNumber(4)
  void clearVotePackage() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$core.int> get encryptionKeyIndexes => $_getList(4);

  @$pb.TagNumber(6)
  $core.List<$core.int> get weight => $_getN(5);
  @$pb.TagNumber(6)
  set weight($core.List<$core.int> v) { $_setBytes(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasWeight() => $_has(5);
  @$pb.TagNumber(6)
  void clearWeight() => clearField(6);
}

class TendermintHeader extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'TendermintHeader', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'chainId')
    ..aInt64(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'height')
    ..aInt64(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'timestamp')
    ..a<$core.List<$core.int>>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'blockID', $pb.PbFieldType.OY, protoName: 'blockID')
    ..a<$core.List<$core.int>>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'lastCommitHash', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'dataHash', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'validatorsHash', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nextValidatorsHash', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'consensusHash', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'appHash', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'lastResultsHash', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(13, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'evidenceHash', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(14, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proposerAddress', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  TendermintHeader._() : super();
  factory TendermintHeader({
    $core.String? chainId,
    $fixnum.Int64? height,
    $fixnum.Int64? timestamp,
    $core.List<$core.int>? blockID,
    $core.List<$core.int>? lastCommitHash,
    $core.List<$core.int>? dataHash,
    $core.List<$core.int>? validatorsHash,
    $core.List<$core.int>? nextValidatorsHash,
    $core.List<$core.int>? consensusHash,
    $core.List<$core.int>? appHash,
    $core.List<$core.int>? lastResultsHash,
    $core.List<$core.int>? evidenceHash,
    $core.List<$core.int>? proposerAddress,
  }) {
    final _result = create();
    if (chainId != null) {
      _result.chainId = chainId;
    }
    if (height != null) {
      _result.height = height;
    }
    if (timestamp != null) {
      _result.timestamp = timestamp;
    }
    if (blockID != null) {
      _result.blockID = blockID;
    }
    if (lastCommitHash != null) {
      _result.lastCommitHash = lastCommitHash;
    }
    if (dataHash != null) {
      _result.dataHash = dataHash;
    }
    if (validatorsHash != null) {
      _result.validatorsHash = validatorsHash;
    }
    if (nextValidatorsHash != null) {
      _result.nextValidatorsHash = nextValidatorsHash;
    }
    if (consensusHash != null) {
      _result.consensusHash = consensusHash;
    }
    if (appHash != null) {
      _result.appHash = appHash;
    }
    if (lastResultsHash != null) {
      _result.lastResultsHash = lastResultsHash;
    }
    if (evidenceHash != null) {
      _result.evidenceHash = evidenceHash;
    }
    if (proposerAddress != null) {
      _result.proposerAddress = proposerAddress;
    }
    return _result;
  }
  factory TendermintHeader.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory TendermintHeader.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  TendermintHeader clone() => TendermintHeader()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  TendermintHeader copyWith(void Function(TendermintHeader) updates) => super.copyWith((message) => updates(message as TendermintHeader)) as TendermintHeader; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static TendermintHeader create() => TendermintHeader._();
  TendermintHeader createEmptyInstance() => create();
  static $pb.PbList<TendermintHeader> createRepeated() => $pb.PbList<TendermintHeader>();
  @$core.pragma('dart2js:noInline')
  static TendermintHeader getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<TendermintHeader>(create);
  static TendermintHeader? _defaultInstance;

  @$pb.TagNumber(2)
  $core.String get chainId => $_getSZ(0);
  @$pb.TagNumber(2)
  set chainId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(2)
  $core.bool hasChainId() => $_has(0);
  @$pb.TagNumber(2)
  void clearChainId() => clearField(2);

  @$pb.TagNumber(3)
  $fixnum.Int64 get height => $_getI64(1);
  @$pb.TagNumber(3)
  set height($fixnum.Int64 v) { $_setInt64(1, v); }
  @$pb.TagNumber(3)
  $core.bool hasHeight() => $_has(1);
  @$pb.TagNumber(3)
  void clearHeight() => clearField(3);

  @$pb.TagNumber(4)
  $fixnum.Int64 get timestamp => $_getI64(2);
  @$pb.TagNumber(4)
  set timestamp($fixnum.Int64 v) { $_setInt64(2, v); }
  @$pb.TagNumber(4)
  $core.bool hasTimestamp() => $_has(2);
  @$pb.TagNumber(4)
  void clearTimestamp() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$core.int> get blockID => $_getN(3);
  @$pb.TagNumber(5)
  set blockID($core.List<$core.int> v) { $_setBytes(3, v); }
  @$pb.TagNumber(5)
  $core.bool hasBlockID() => $_has(3);
  @$pb.TagNumber(5)
  void clearBlockID() => clearField(5);

  @$pb.TagNumber(6)
  $core.List<$core.int> get lastCommitHash => $_getN(4);
  @$pb.TagNumber(6)
  set lastCommitHash($core.List<$core.int> v) { $_setBytes(4, v); }
  @$pb.TagNumber(6)
  $core.bool hasLastCommitHash() => $_has(4);
  @$pb.TagNumber(6)
  void clearLastCommitHash() => clearField(6);

  @$pb.TagNumber(7)
  $core.List<$core.int> get dataHash => $_getN(5);
  @$pb.TagNumber(7)
  set dataHash($core.List<$core.int> v) { $_setBytes(5, v); }
  @$pb.TagNumber(7)
  $core.bool hasDataHash() => $_has(5);
  @$pb.TagNumber(7)
  void clearDataHash() => clearField(7);

  @$pb.TagNumber(8)
  $core.List<$core.int> get validatorsHash => $_getN(6);
  @$pb.TagNumber(8)
  set validatorsHash($core.List<$core.int> v) { $_setBytes(6, v); }
  @$pb.TagNumber(8)
  $core.bool hasValidatorsHash() => $_has(6);
  @$pb.TagNumber(8)
  void clearValidatorsHash() => clearField(8);

  @$pb.TagNumber(9)
  $core.List<$core.int> get nextValidatorsHash => $_getN(7);
  @$pb.TagNumber(9)
  set nextValidatorsHash($core.List<$core.int> v) { $_setBytes(7, v); }
  @$pb.TagNumber(9)
  $core.bool hasNextValidatorsHash() => $_has(7);
  @$pb.TagNumber(9)
  void clearNextValidatorsHash() => clearField(9);

  @$pb.TagNumber(10)
  $core.List<$core.int> get consensusHash => $_getN(8);
  @$pb.TagNumber(10)
  set consensusHash($core.List<$core.int> v) { $_setBytes(8, v); }
  @$pb.TagNumber(10)
  $core.bool hasConsensusHash() => $_has(8);
  @$pb.TagNumber(10)
  void clearConsensusHash() => clearField(10);

  @$pb.TagNumber(11)
  $core.List<$core.int> get appHash => $_getN(9);
  @$pb.TagNumber(11)
  set appHash($core.List<$core.int> v) { $_setBytes(9, v); }
  @$pb.TagNumber(11)
  $core.bool hasAppHash() => $_has(9);
  @$pb.TagNumber(11)
  void clearAppHash() => clearField(11);

  @$pb.TagNumber(12)
  $core.List<$core.int> get lastResultsHash => $_getN(10);
  @$pb.TagNumber(12)
  set lastResultsHash($core.List<$core.int> v) { $_setBytes(10, v); }
  @$pb.TagNumber(12)
  $core.bool hasLastResultsHash() => $_has(10);
  @$pb.TagNumber(12)
  void clearLastResultsHash() => clearField(12);

  @$pb.TagNumber(13)
  $core.List<$core.int> get evidenceHash => $_getN(11);
  @$pb.TagNumber(13)
  set evidenceHash($core.List<$core.int> v) { $_setBytes(11, v); }
  @$pb.TagNumber(13)
  $core.bool hasEvidenceHash() => $_has(11);
  @$pb.TagNumber(13)
  void clearEvidenceHash() => clearField(13);

  @$pb.TagNumber(14)
  $core.List<$core.int> get proposerAddress => $_getN(12);
  @$pb.TagNumber(14)
  set proposerAddress($core.List<$core.int> v) { $_setBytes(12, v); }
  @$pb.TagNumber(14)
  $core.bool hasProposerAddress() => $_has(12);
  @$pb.TagNumber(14)
  void clearProposerAddress() => clearField(14);
}

class ProcessResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProcessResult', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..pc<QuestionResult>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'votes', $pb.PbFieldType.PM, subBuilder: QuestionResult.create)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'processId', $pb.PbFieldType.OY, protoName: 'processId')
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'entityId', $pb.PbFieldType.OY, protoName: 'entityId')
    ..hasRequiredFields = false
  ;

  ProcessResult._() : super();
  factory ProcessResult({
    $core.Iterable<QuestionResult>? votes,
    $core.List<$core.int>? processId,
    $core.List<$core.int>? entityId,
  }) {
    final _result = create();
    if (votes != null) {
      _result.votes.addAll(votes);
    }
    if (processId != null) {
      _result.processId = processId;
    }
    if (entityId != null) {
      _result.entityId = entityId;
    }
    return _result;
  }
  factory ProcessResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProcessResult clone() => ProcessResult()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProcessResult copyWith(void Function(ProcessResult) updates) => super.copyWith((message) => updates(message as ProcessResult)) as ProcessResult; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessResult create() => ProcessResult._();
  ProcessResult createEmptyInstance() => create();
  static $pb.PbList<ProcessResult> createRepeated() => $pb.PbList<ProcessResult>();
  @$core.pragma('dart2js:noInline')
  static ProcessResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProcessResult>(create);
  static ProcessResult? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<QuestionResult> get votes => $_getList(0);

  @$pb.TagNumber(2)
  $core.List<$core.int> get processId => $_getN(1);
  @$pb.TagNumber(2)
  set processId($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasProcessId() => $_has(1);
  @$pb.TagNumber(2)
  void clearProcessId() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get entityId => $_getN(2);
  @$pb.TagNumber(3)
  set entityId($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasEntityId() => $_has(2);
  @$pb.TagNumber(3)
  void clearEntityId() => clearField(3);
}

class QuestionResult extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'QuestionResult', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..p<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'question', $pb.PbFieldType.PY)
    ..hasRequiredFields = false
  ;

  QuestionResult._() : super();
  factory QuestionResult({
    $core.Iterable<$core.List<$core.int>>? question,
  }) {
    final _result = create();
    if (question != null) {
      _result.question.addAll(question);
    }
    return _result;
  }
  factory QuestionResult.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory QuestionResult.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  QuestionResult clone() => QuestionResult()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  QuestionResult copyWith(void Function(QuestionResult) updates) => super.copyWith((message) => updates(message as QuestionResult)) as QuestionResult; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static QuestionResult create() => QuestionResult._();
  QuestionResult createEmptyInstance() => create();
  static $pb.PbList<QuestionResult> createRepeated() => $pb.PbList<QuestionResult>();
  @$core.pragma('dart2js:noInline')
  static QuestionResult getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<QuestionResult>(create);
  static QuestionResult? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.List<$core.int>> get question => $_getList(0);
}

class ProcessEndingList extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProcessEndingList', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..p<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'processList', $pb.PbFieldType.PY, protoName: 'processList')
    ..hasRequiredFields = false
  ;

  ProcessEndingList._() : super();
  factory ProcessEndingList({
    $core.Iterable<$core.List<$core.int>>? processList,
  }) {
    final _result = create();
    if (processList != null) {
      _result.processList.addAll(processList);
    }
    return _result;
  }
  factory ProcessEndingList.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProcessEndingList.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProcessEndingList clone() => ProcessEndingList()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProcessEndingList copyWith(void Function(ProcessEndingList) updates) => super.copyWith((message) => updates(message as ProcessEndingList)) as ProcessEndingList; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProcessEndingList create() => ProcessEndingList._();
  ProcessEndingList createEmptyInstance() => create();
  static $pb.PbList<ProcessEndingList> createRepeated() => $pb.PbList<ProcessEndingList>();
  @$core.pragma('dart2js:noInline')
  static ProcessEndingList getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProcessEndingList>(create);
  static ProcessEndingList? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.List<$core.int>> get processList => $_getList(0);
}

class StoredKeys extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'StoredKeys', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..p<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'pids', $pb.PbFieldType.PY)
    ..hasRequiredFields = false
  ;

  StoredKeys._() : super();
  factory StoredKeys({
    $core.Iterable<$core.List<$core.int>>? pids,
  }) {
    final _result = create();
    if (pids != null) {
      _result.pids.addAll(pids);
    }
    return _result;
  }
  factory StoredKeys.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory StoredKeys.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  StoredKeys clone() => StoredKeys()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  StoredKeys copyWith(void Function(StoredKeys) updates) => super.copyWith((message) => updates(message as StoredKeys)) as StoredKeys; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static StoredKeys create() => StoredKeys._();
  StoredKeys createEmptyInstance() => create();
  static $pb.PbList<StoredKeys> createRepeated() => $pb.PbList<StoredKeys>();
  @$core.pragma('dart2js:noInline')
  static StoredKeys getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<StoredKeys>(create);
  static StoredKeys? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.List<$core.int>> get pids => $_getList(0);
}

