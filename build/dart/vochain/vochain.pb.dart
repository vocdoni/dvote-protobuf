///
//  Generated code. Do not modify.
//  source: vochain/vochain.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:fixnum/fixnum.dart' as $fixnum;
import 'package:protobuf/protobuf.dart' as $pb;

import '../common/vote.pb.dart' as $0;

import 'vochain.pbenum.dart';

export 'vochain.pbenum.dart';

enum Tx_Payload {
  vote, 
  newProcess, 
  admin, 
  setProcess, 
  notSet
}

class Tx extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Tx_Payload> _Tx_PayloadByTag = {
    2 : Tx_Payload.vote,
    3 : Tx_Payload.newProcess,
    4 : Tx_Payload.admin,
    5 : Tx_Payload.setProcess,
    0 : Tx_Payload.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Tx', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..oo(0, [2, 3, 4, 5])
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signature', $pb.PbFieldType.OY)
    ..aOM<$0.VoteEnvelope>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'vote', subBuilder: $0.VoteEnvelope.create)
    ..aOM<NewProcessTx>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'newProcess', protoName: 'newProcess', subBuilder: NewProcessTx.create)
    ..aOM<AdminTx>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'admin', subBuilder: AdminTx.create)
    ..aOM<SetProcessTx>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'setProcess', protoName: 'setProcess', subBuilder: SetProcessTx.create)
    ..hasRequiredFields = false
  ;

  Tx._() : super();
  factory Tx({
    $core.List<$core.int> signature,
    $0.VoteEnvelope vote,
    NewProcessTx newProcess,
    AdminTx admin,
    SetProcessTx setProcess,
  }) {
    final _result = create();
    if (signature != null) {
      _result.signature = signature;
    }
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
  static Tx _defaultInstance;

  Tx_Payload whichPayload() => _Tx_PayloadByTag[$_whichOneof(0)];
  void clearPayload() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  $core.List<$core.int> get signature => $_getN(0);
  @$pb.TagNumber(1)
  set signature($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasSignature() => $_has(0);
  @$pb.TagNumber(1)
  void clearSignature() => clearField(1);

  @$pb.TagNumber(2)
  $0.VoteEnvelope get vote => $_getN(1);
  @$pb.TagNumber(2)
  set vote($0.VoteEnvelope v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasVote() => $_has(1);
  @$pb.TagNumber(2)
  void clearVote() => clearField(2);
  @$pb.TagNumber(2)
  $0.VoteEnvelope ensureVote() => $_ensure(1);

  @$pb.TagNumber(3)
  NewProcessTx get newProcess => $_getN(2);
  @$pb.TagNumber(3)
  set newProcess(NewProcessTx v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasNewProcess() => $_has(2);
  @$pb.TagNumber(3)
  void clearNewProcess() => clearField(3);
  @$pb.TagNumber(3)
  NewProcessTx ensureNewProcess() => $_ensure(2);

  @$pb.TagNumber(4)
  AdminTx get admin => $_getN(3);
  @$pb.TagNumber(4)
  set admin(AdminTx v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasAdmin() => $_has(3);
  @$pb.TagNumber(4)
  void clearAdmin() => clearField(4);
  @$pb.TagNumber(4)
  AdminTx ensureAdmin() => $_ensure(3);

  @$pb.TagNumber(5)
  SetProcessTx get setProcess => $_getN(4);
  @$pb.TagNumber(5)
  set setProcess(SetProcessTx v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasSetProcess() => $_has(4);
  @$pb.TagNumber(5)
  void clearSetProcess() => clearField(5);
  @$pb.TagNumber(5)
  SetProcessTx ensureSetProcess() => $_ensure(4);
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
    TxType txtype,
    $core.List<$core.int> nonce,
    Process process,
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
  static NewProcessTx _defaultInstance;

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
    ..aOM<$0.Proof>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof', subBuilder: $0.Proof.create)
    ..aOM<ProcessResult>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'results', subBuilder: ProcessResult.create)
    ..hasRequiredFields = false
  ;

  SetProcessTx._() : super();
  factory SetProcessTx({
    TxType txtype,
    $core.List<$core.int> nonce,
    $core.List<$core.int> processId,
    ProcessStatus status,
    $core.int questionIndex,
    $core.List<$core.int> censusRoot,
    $core.String censusURI,
    $0.Proof proof,
    ProcessResult results,
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
  static SetProcessTx _defaultInstance;

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
  $0.Proof get proof => $_getN(7);
  @$pb.TagNumber(8)
  set proof($0.Proof v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasProof() => $_has(7);
  @$pb.TagNumber(8)
  void clearProof() => clearField(8);
  @$pb.TagNumber(8)
  $0.Proof ensureProof() => $_ensure(7);

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
    TxType txtype,
    $core.List<$core.int> processId,
    $core.List<$core.int> address,
    $core.List<$core.int> commitmentKey,
    $core.List<$core.int> encryptionPrivateKey,
    $core.List<$core.int> encryptionPublicKey,
    $core.int keyIndex,
    $fixnum.Int64 power,
    $core.List<$core.int> publicKey,
    $core.List<$core.int> revealKey,
    $core.List<$core.int> nonce,
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
  static AdminTx _defaultInstance;

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
    ..hasRequiredFields = false
  ;

  Process._() : super();
  factory Process({
    $core.List<$core.int> processId,
    $core.List<$core.int> entityId,
    $core.int startBlock,
    $core.int blockCount,
    $core.List<$core.int> censusRoot,
    $core.String censusURI,
    $core.Iterable<$core.String> commitmentKeys,
    $core.Iterable<$core.String> encryptionPrivateKeys,
    $core.Iterable<$core.String> encryptionPublicKeys,
    $core.Iterable<$core.String> revealKeys,
    $core.int keyIndex,
    ProcessStatus status,
    $core.List<$core.int> paramsSignature,
    $core.int namespace,
    EnvelopeType envelopeType,
    ProcessMode mode,
    $core.int questionIndex,
    $core.int questionCount,
    ProcessVoteOptions voteOptions,
    CensusOrigin censusOrigin,
    ProcessResult results,
    $core.Iterable<$core.List<$core.int>> resultsSignatures,
    $core.int ethIndexSlot,
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
  static Process _defaultInstance;

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
}

class EnvelopeType extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EnvelopeType', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOB(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'serial')
    ..aOB(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'anonymous')
    ..aOB(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptedVotes', protoName: 'encryptedVotes')
    ..aOB(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'uniqueValues', protoName: 'uniqueValues')
    ..hasRequiredFields = false
  ;

  EnvelopeType._() : super();
  factory EnvelopeType({
    $core.bool serial,
    $core.bool anonymous,
    $core.bool encryptedVotes,
    $core.bool uniqueValues,
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
  static EnvelopeType _defaultInstance;

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
    $core.bool autoStart,
    $core.bool interruptible,
    $core.bool dynamicCensus,
    $core.bool encryptedMetaData,
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
  static ProcessMode _defaultInstance;

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
    $core.int maxCount,
    $core.int maxValue,
    $core.int maxVoteOverwrites,
    $core.int maxTotalCost,
    $core.int costExponent,
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
  static ProcessVoteOptions _defaultInstance;

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
    $core.Iterable<$core.List<$core.int>> oracles,
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
  static OracleList _defaultInstance;

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
    $core.Iterable<Validator> validators,
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
  static ValidatorList _defaultInstance;

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
    $core.List<$core.int> address,
    $core.List<$core.int> pubKey,
    $fixnum.Int64 power,
    $core.String name,
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
  static Validator _defaultInstance;

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
    $core.int height,
    $core.List<$core.int> nullifier,
    $core.List<$core.int> processId,
    $core.List<$core.int> votePackage,
    $core.Iterable<$core.int> encryptionKeyIndexes,
    $core.List<$core.int> weight,
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
  static Vote _defaultInstance;

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
    $core.String chainId,
    $fixnum.Int64 height,
    $fixnum.Int64 timestamp,
    $core.List<$core.int> blockID,
    $core.List<$core.int> lastCommitHash,
    $core.List<$core.int> dataHash,
    $core.List<$core.int> validatorsHash,
    $core.List<$core.int> nextValidatorsHash,
    $core.List<$core.int> consensusHash,
    $core.List<$core.int> appHash,
    $core.List<$core.int> lastResultsHash,
    $core.List<$core.int> evidenceHash,
    $core.List<$core.int> proposerAddress,
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
  static TendermintHeader _defaultInstance;

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
    $core.Iterable<QuestionResult> votes,
    $core.List<$core.int> processId,
    $core.List<$core.int> entityId,
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
  static ProcessResult _defaultInstance;

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
    $core.Iterable<$core.List<$core.int>> question,
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
  static QuestionResult _defaultInstance;

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
    $core.Iterable<$core.List<$core.int>> processList,
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
  static ProcessEndingList _defaultInstance;

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
    $core.Iterable<$core.List<$core.int>> pids,
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
  static StoredKeys _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.List<$core.int>> get pids => $_getList(0);
}

