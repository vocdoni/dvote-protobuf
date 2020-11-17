///
//  Generated code. Do not modify.
//  source: common/vote.proto
//
// @dart = 2.3
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

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
  factory VoteEnvelope() => create();
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
  VoteEnvelope copyWith(void Function(VoteEnvelope) updates) => super.copyWith((message) => updates(message as VoteEnvelope)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static VoteEnvelope create() => VoteEnvelope._();
  VoteEnvelope createEmptyInstance() => create();
  static $pb.PbList<VoteEnvelope> createRepeated() => $pb.PbList<VoteEnvelope>();
  @$core.pragma('dart2js:noInline')
  static VoteEnvelope getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<VoteEnvelope>(create);
  static VoteEnvelope _defaultInstance;

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

enum Proof_Payload {
  graviton, 
  iden3, 
  ethereumStorage, 
  ethereumAccount, 
  notSet
}

class Proof extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Proof_Payload> _Proof_PayloadByTag = {
    1 : Proof_Payload.graviton,
    2 : Proof_Payload.iden3,
    3 : Proof_Payload.ethereumStorage,
    4 : Proof_Payload.ethereumAccount,
    0 : Proof_Payload.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Proof', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..oo(0, [1, 2, 3, 4])
    ..aOM<ProofGraviton>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'graviton', subBuilder: ProofGraviton.create)
    ..aOM<ProofIden3>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'iden3', subBuilder: ProofIden3.create)
    ..aOM<ProofEthereumStorage>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ethereumStorage', protoName: 'ethereumStorage', subBuilder: ProofEthereumStorage.create)
    ..aOM<ProofEthereumAccount>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ethereumAccount', protoName: 'ethereumAccount', subBuilder: ProofEthereumAccount.create)
    ..hasRequiredFields = false
  ;

  Proof._() : super();
  factory Proof() => create();
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
  Proof copyWith(void Function(Proof) updates) => super.copyWith((message) => updates(message as Proof)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Proof create() => Proof._();
  Proof createEmptyInstance() => create();
  static $pb.PbList<Proof> createRepeated() => $pb.PbList<Proof>();
  @$core.pragma('dart2js:noInline')
  static Proof getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Proof>(create);
  static Proof _defaultInstance;

  Proof_Payload whichPayload() => _Proof_PayloadByTag[$_whichOneof(0)];
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
}

class ProofGraviton extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofGraviton', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'siblings', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  ProofGraviton._() : super();
  factory ProofGraviton() => create();
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
  ProofGraviton copyWith(void Function(ProofGraviton) updates) => super.copyWith((message) => updates(message as ProofGraviton)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofGraviton create() => ProofGraviton._();
  ProofGraviton createEmptyInstance() => create();
  static $pb.PbList<ProofGraviton> createRepeated() => $pb.PbList<ProofGraviton>();
  @$core.pragma('dart2js:noInline')
  static ProofGraviton getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofGraviton>(create);
  static ProofGraviton _defaultInstance;

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
  factory ProofIden3() => create();
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
  ProofIden3 copyWith(void Function(ProofIden3) updates) => super.copyWith((message) => updates(message as ProofIden3)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofIden3 create() => ProofIden3._();
  ProofIden3 createEmptyInstance() => create();
  static $pb.PbList<ProofIden3> createRepeated() => $pb.PbList<ProofIden3>();
  @$core.pragma('dart2js:noInline')
  static ProofIden3 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofIden3>(create);
  static ProofIden3 _defaultInstance;

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
  factory ProofEthereumStorage() => create();
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
  ProofEthereumStorage copyWith(void Function(ProofEthereumStorage) updates) => super.copyWith((message) => updates(message as ProofEthereumStorage)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofEthereumStorage create() => ProofEthereumStorage._();
  ProofEthereumStorage createEmptyInstance() => create();
  static $pb.PbList<ProofEthereumStorage> createRepeated() => $pb.PbList<ProofEthereumStorage>();
  @$core.pragma('dart2js:noInline')
  static ProofEthereumStorage getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofEthereumStorage>(create);
  static ProofEthereumStorage _defaultInstance;

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
  factory ProofEthereumAccount() => create();
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
  ProofEthereumAccount copyWith(void Function(ProofEthereumAccount) updates) => super.copyWith((message) => updates(message as ProofEthereumAccount)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofEthereumAccount create() => ProofEthereumAccount._();
  ProofEthereumAccount createEmptyInstance() => create();
  static $pb.PbList<ProofEthereumAccount> createRepeated() => $pb.PbList<ProofEthereumAccount>();
  @$core.pragma('dart2js:noInline')
  static ProofEthereumAccount getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofEthereumAccount>(create);
  static ProofEthereumAccount _defaultInstance;

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

