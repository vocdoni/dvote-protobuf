///
//  Generated code. Do not modify.
//  source: protocol/main-wrappers.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'transactions.pb.dart' as $0;
import 'service.pb.dart' as $1;

import 'main-wrappers.pbenum.dart';

export 'main-wrappers.pbenum.dart';

class Message extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Message', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'body', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signature', $pb.PbFieldType.OY)
    ..e<Message_Signatures>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signatureType', $pb.PbFieldType.OE, protoName: 'signatureType', defaultOrMaker: Message_Signatures.None, valueOf: Message_Signatures.valueOf, enumValues: Message_Signatures.values)
    ..hasRequiredFields = false
  ;

  Message._() : super();
  factory Message({
    $core.List<$core.int>? body,
    $core.List<$core.int>? signature,
    Message_Signatures? signatureType,
  }) {
    final _result = create();
    if (body != null) {
      _result.body = body;
    }
    if (signature != null) {
      _result.signature = signature;
    }
    if (signatureType != null) {
      _result.signatureType = signatureType;
    }
    return _result;
  }
  factory Message.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Message.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Message clone() => Message()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Message copyWith(void Function(Message) updates) => super.copyWith((message) => updates(message as Message)) as Message; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Message create() => Message._();
  Message createEmptyInstance() => create();
  static $pb.PbList<Message> createRepeated() => $pb.PbList<Message>();
  @$core.pragma('dart2js:noInline')
  static Message getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Message>(create);
  static Message? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get body => $_getN(0);
  @$pb.TagNumber(1)
  set body($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasBody() => $_has(0);
  @$pb.TagNumber(1)
  void clearBody() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get signature => $_getN(1);
  @$pb.TagNumber(2)
  set signature($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSignature() => $_has(1);
  @$pb.TagNumber(2)
  void clearSignature() => clearField(2);

  @$pb.TagNumber(3)
  Message_Signatures get signatureType => $_getN(2);
  @$pb.TagNumber(3)
  set signatureType(Message_Signatures v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasSignatureType() => $_has(2);
  @$pb.TagNumber(3)
  void clearSignatureType() => clearField(3);
}

enum Body_Body {
  transaction, 
  receipt, 
  request, 
  response, 
  notSet
}

class Body extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Body_Body> _Body_BodyByTag = {
    11 : Body_Body.transaction,
    12 : Body_Body.receipt,
    13 : Body_Body.request,
    14 : Body_Body.response,
    0 : Body_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Body', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [11, 12, 13, 14])
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id', $pb.PbFieldType.OY)
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'timestamp', $pb.PbFieldType.O3)
    ..aOM<Transaction>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'transaction', subBuilder: Transaction.create)
    ..aOM<TransactionReceipt>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'receipt', subBuilder: TransactionReceipt.create)
    ..aOM<Request>(13, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'request', subBuilder: Request.create)
    ..aOM<Response>(14, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'response', subBuilder: Response.create)
    ..hasRequiredFields = false
  ;

  Body._() : super();
  factory Body({
    $core.List<$core.int>? id,
    $core.int? timestamp,
    Transaction? transaction,
    TransactionReceipt? receipt,
    Request? request,
    Response? response,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (timestamp != null) {
      _result.timestamp = timestamp;
    }
    if (transaction != null) {
      _result.transaction = transaction;
    }
    if (receipt != null) {
      _result.receipt = receipt;
    }
    if (request != null) {
      _result.request = request;
    }
    if (response != null) {
      _result.response = response;
    }
    return _result;
  }
  factory Body.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Body.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Body clone() => Body()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Body copyWith(void Function(Body) updates) => super.copyWith((message) => updates(message as Body)) as Body; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Body create() => Body._();
  Body createEmptyInstance() => create();
  static $pb.PbList<Body> createRepeated() => $pb.PbList<Body>();
  @$core.pragma('dart2js:noInline')
  static Body getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Body>(create);
  static Body? _defaultInstance;

  Body_Body whichBody() => _Body_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  $core.List<$core.int> get id => $_getN(0);
  @$pb.TagNumber(1)
  set id($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get timestamp => $_getIZ(1);
  @$pb.TagNumber(2)
  set timestamp($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasTimestamp() => $_has(1);
  @$pb.TagNumber(2)
  void clearTimestamp() => clearField(2);

  @$pb.TagNumber(11)
  Transaction get transaction => $_getN(2);
  @$pb.TagNumber(11)
  set transaction(Transaction v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasTransaction() => $_has(2);
  @$pb.TagNumber(11)
  void clearTransaction() => clearField(11);
  @$pb.TagNumber(11)
  Transaction ensureTransaction() => $_ensure(2);

  @$pb.TagNumber(12)
  TransactionReceipt get receipt => $_getN(3);
  @$pb.TagNumber(12)
  set receipt(TransactionReceipt v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasReceipt() => $_has(3);
  @$pb.TagNumber(12)
  void clearReceipt() => clearField(12);
  @$pb.TagNumber(12)
  TransactionReceipt ensureReceipt() => $_ensure(3);

  @$pb.TagNumber(13)
  Request get request => $_getN(4);
  @$pb.TagNumber(13)
  set request(Request v) { setField(13, v); }
  @$pb.TagNumber(13)
  $core.bool hasRequest() => $_has(4);
  @$pb.TagNumber(13)
  void clearRequest() => clearField(13);
  @$pb.TagNumber(13)
  Request ensureRequest() => $_ensure(4);

  @$pb.TagNumber(14)
  Response get response => $_getN(5);
  @$pb.TagNumber(14)
  set response(Response v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasResponse() => $_has(5);
  @$pb.TagNumber(14)
  void clearResponse() => clearField(14);
  @$pb.TagNumber(14)
  Response ensureResponse() => $_ensure(5);
}

enum Transaction_Body {
  setOrganization, 
  transfer, 
  mint, 
  claimTokens, 
  newElection, 
  registerKey, 
  submitBallot, 
  setElectionStatus, 
  setProposalStatus, 
  notSet
}

class Transaction extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Transaction_Body> _Transaction_BodyByTag = {
    1 : Transaction_Body.setOrganization,
    2 : Transaction_Body.transfer,
    3 : Transaction_Body.mint,
    4 : Transaction_Body.claimTokens,
    11 : Transaction_Body.newElection,
    12 : Transaction_Body.registerKey,
    13 : Transaction_Body.submitBallot,
    14 : Transaction_Body.setElectionStatus,
    15 : Transaction_Body.setProposalStatus,
    0 : Transaction_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Transaction', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2, 3, 4, 11, 12, 13, 14, 15])
    ..aOM<$0.SetOrganization>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'setOrganization', protoName: 'setOrganization', subBuilder: $0.SetOrganization.create)
    ..aOM<$0.Transfer>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'transfer', subBuilder: $0.Transfer.create)
    ..aOM<$0.Mint>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'mint', subBuilder: $0.Mint.create)
    ..aOM<$0.ClaimTokens>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'claimTokens', protoName: 'claimTokens', subBuilder: $0.ClaimTokens.create)
    ..aOM<$0.NewElection>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'newElection', protoName: 'newElection', subBuilder: $0.NewElection.create)
    ..aOM<$0.RegisterKey>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'registerKey', protoName: 'registerKey', subBuilder: $0.RegisterKey.create)
    ..aOM<$0.SubmitBallot>(13, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'submitBallot', protoName: 'submitBallot', subBuilder: $0.SubmitBallot.create)
    ..aOM<$0.SetElectionStatus>(14, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'setElectionStatus', protoName: 'setElectionStatus', subBuilder: $0.SetElectionStatus.create)
    ..aOM<$0.SetProposalStatus>(15, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'setProposalStatus', protoName: 'setProposalStatus', subBuilder: $0.SetProposalStatus.create)
    ..hasRequiredFields = false
  ;

  Transaction._() : super();
  factory Transaction({
    $0.SetOrganization? setOrganization,
    $0.Transfer? transfer,
    $0.Mint? mint,
    $0.ClaimTokens? claimTokens,
    $0.NewElection? newElection,
    $0.RegisterKey? registerKey,
    $0.SubmitBallot? submitBallot,
    $0.SetElectionStatus? setElectionStatus,
    $0.SetProposalStatus? setProposalStatus,
  }) {
    final _result = create();
    if (setOrganization != null) {
      _result.setOrganization = setOrganization;
    }
    if (transfer != null) {
      _result.transfer = transfer;
    }
    if (mint != null) {
      _result.mint = mint;
    }
    if (claimTokens != null) {
      _result.claimTokens = claimTokens;
    }
    if (newElection != null) {
      _result.newElection = newElection;
    }
    if (registerKey != null) {
      _result.registerKey = registerKey;
    }
    if (submitBallot != null) {
      _result.submitBallot = submitBallot;
    }
    if (setElectionStatus != null) {
      _result.setElectionStatus = setElectionStatus;
    }
    if (setProposalStatus != null) {
      _result.setProposalStatus = setProposalStatus;
    }
    return _result;
  }
  factory Transaction.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Transaction.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Transaction clone() => Transaction()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Transaction copyWith(void Function(Transaction) updates) => super.copyWith((message) => updates(message as Transaction)) as Transaction; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Transaction create() => Transaction._();
  Transaction createEmptyInstance() => create();
  static $pb.PbList<Transaction> createRepeated() => $pb.PbList<Transaction>();
  @$core.pragma('dart2js:noInline')
  static Transaction getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Transaction>(create);
  static Transaction? _defaultInstance;

  Transaction_Body whichBody() => _Transaction_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  $0.SetOrganization get setOrganization => $_getN(0);
  @$pb.TagNumber(1)
  set setOrganization($0.SetOrganization v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasSetOrganization() => $_has(0);
  @$pb.TagNumber(1)
  void clearSetOrganization() => clearField(1);
  @$pb.TagNumber(1)
  $0.SetOrganization ensureSetOrganization() => $_ensure(0);

  @$pb.TagNumber(2)
  $0.Transfer get transfer => $_getN(1);
  @$pb.TagNumber(2)
  set transfer($0.Transfer v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasTransfer() => $_has(1);
  @$pb.TagNumber(2)
  void clearTransfer() => clearField(2);
  @$pb.TagNumber(2)
  $0.Transfer ensureTransfer() => $_ensure(1);

  @$pb.TagNumber(3)
  $0.Mint get mint => $_getN(2);
  @$pb.TagNumber(3)
  set mint($0.Mint v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasMint() => $_has(2);
  @$pb.TagNumber(3)
  void clearMint() => clearField(3);
  @$pb.TagNumber(3)
  $0.Mint ensureMint() => $_ensure(2);

  @$pb.TagNumber(4)
  $0.ClaimTokens get claimTokens => $_getN(3);
  @$pb.TagNumber(4)
  set claimTokens($0.ClaimTokens v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasClaimTokens() => $_has(3);
  @$pb.TagNumber(4)
  void clearClaimTokens() => clearField(4);
  @$pb.TagNumber(4)
  $0.ClaimTokens ensureClaimTokens() => $_ensure(3);

  @$pb.TagNumber(11)
  $0.NewElection get newElection => $_getN(4);
  @$pb.TagNumber(11)
  set newElection($0.NewElection v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasNewElection() => $_has(4);
  @$pb.TagNumber(11)
  void clearNewElection() => clearField(11);
  @$pb.TagNumber(11)
  $0.NewElection ensureNewElection() => $_ensure(4);

  @$pb.TagNumber(12)
  $0.RegisterKey get registerKey => $_getN(5);
  @$pb.TagNumber(12)
  set registerKey($0.RegisterKey v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasRegisterKey() => $_has(5);
  @$pb.TagNumber(12)
  void clearRegisterKey() => clearField(12);
  @$pb.TagNumber(12)
  $0.RegisterKey ensureRegisterKey() => $_ensure(5);

  @$pb.TagNumber(13)
  $0.SubmitBallot get submitBallot => $_getN(6);
  @$pb.TagNumber(13)
  set submitBallot($0.SubmitBallot v) { setField(13, v); }
  @$pb.TagNumber(13)
  $core.bool hasSubmitBallot() => $_has(6);
  @$pb.TagNumber(13)
  void clearSubmitBallot() => clearField(13);
  @$pb.TagNumber(13)
  $0.SubmitBallot ensureSubmitBallot() => $_ensure(6);

  @$pb.TagNumber(14)
  $0.SetElectionStatus get setElectionStatus => $_getN(7);
  @$pb.TagNumber(14)
  set setElectionStatus($0.SetElectionStatus v) { setField(14, v); }
  @$pb.TagNumber(14)
  $core.bool hasSetElectionStatus() => $_has(7);
  @$pb.TagNumber(14)
  void clearSetElectionStatus() => clearField(14);
  @$pb.TagNumber(14)
  $0.SetElectionStatus ensureSetElectionStatus() => $_ensure(7);

  @$pb.TagNumber(15)
  $0.SetProposalStatus get setProposalStatus => $_getN(8);
  @$pb.TagNumber(15)
  set setProposalStatus($0.SetProposalStatus v) { setField(15, v); }
  @$pb.TagNumber(15)
  $core.bool hasSetProposalStatus() => $_has(8);
  @$pb.TagNumber(15)
  void clearSetProposalStatus() => clearField(15);
  @$pb.TagNumber(15)
  $0.SetProposalStatus ensureSetProposalStatus() => $_ensure(8);
}

enum TransactionReceipt_Body {
  success, 
  error, 
  notSet
}

class TransactionReceipt extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, TransactionReceipt_Body> _TransactionReceipt_BodyByTag = {
    1 : TransactionReceipt_Body.success,
    2 : TransactionReceipt_Body.error,
    0 : TransactionReceipt_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'TransactionReceipt', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2])
    ..aOM<TransactionSuccess>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'success', subBuilder: TransactionSuccess.create)
    ..aOM<TransactionError>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'error', subBuilder: TransactionError.create)
    ..hasRequiredFields = false
  ;

  TransactionReceipt._() : super();
  factory TransactionReceipt({
    TransactionSuccess? success,
    TransactionError? error,
  }) {
    final _result = create();
    if (success != null) {
      _result.success = success;
    }
    if (error != null) {
      _result.error = error;
    }
    return _result;
  }
  factory TransactionReceipt.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory TransactionReceipt.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  TransactionReceipt clone() => TransactionReceipt()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  TransactionReceipt copyWith(void Function(TransactionReceipt) updates) => super.copyWith((message) => updates(message as TransactionReceipt)) as TransactionReceipt; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static TransactionReceipt create() => TransactionReceipt._();
  TransactionReceipt createEmptyInstance() => create();
  static $pb.PbList<TransactionReceipt> createRepeated() => $pb.PbList<TransactionReceipt>();
  @$core.pragma('dart2js:noInline')
  static TransactionReceipt getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<TransactionReceipt>(create);
  static TransactionReceipt? _defaultInstance;

  TransactionReceipt_Body whichBody() => _TransactionReceipt_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  TransactionSuccess get success => $_getN(0);
  @$pb.TagNumber(1)
  set success(TransactionSuccess v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasSuccess() => $_has(0);
  @$pb.TagNumber(1)
  void clearSuccess() => clearField(1);
  @$pb.TagNumber(1)
  TransactionSuccess ensureSuccess() => $_ensure(0);

  @$pb.TagNumber(2)
  TransactionError get error => $_getN(1);
  @$pb.TagNumber(2)
  set error(TransactionError v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasError() => $_has(1);
  @$pb.TagNumber(2)
  void clearError() => clearField(2);
  @$pb.TagNumber(2)
  TransactionError ensureError() => $_ensure(1);
}

class TransactionSuccess extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'TransactionSuccess', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'hash', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  TransactionSuccess._() : super();
  factory TransactionSuccess({
    $core.List<$core.int>? hash,
  }) {
    final _result = create();
    if (hash != null) {
      _result.hash = hash;
    }
    return _result;
  }
  factory TransactionSuccess.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory TransactionSuccess.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  TransactionSuccess clone() => TransactionSuccess()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  TransactionSuccess copyWith(void Function(TransactionSuccess) updates) => super.copyWith((message) => updates(message as TransactionSuccess)) as TransactionSuccess; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static TransactionSuccess create() => TransactionSuccess._();
  TransactionSuccess createEmptyInstance() => create();
  static $pb.PbList<TransactionSuccess> createRepeated() => $pb.PbList<TransactionSuccess>();
  @$core.pragma('dart2js:noInline')
  static TransactionSuccess getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<TransactionSuccess>(create);
  static TransactionSuccess? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get hash => $_getN(0);
  @$pb.TagNumber(1)
  set hash($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasHash() => $_has(0);
  @$pb.TagNumber(1)
  void clearHash() => clearField(1);
}

class TransactionError extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'TransactionError', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'message')
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'code', $pb.PbFieldType.O3)
    ..hasRequiredFields = false
  ;

  TransactionError._() : super();
  factory TransactionError({
    $core.String? message,
    $core.int? code,
  }) {
    final _result = create();
    if (message != null) {
      _result.message = message;
    }
    if (code != null) {
      _result.code = code;
    }
    return _result;
  }
  factory TransactionError.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory TransactionError.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  TransactionError clone() => TransactionError()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  TransactionError copyWith(void Function(TransactionError) updates) => super.copyWith((message) => updates(message as TransactionError)) as TransactionError; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static TransactionError create() => TransactionError._();
  TransactionError createEmptyInstance() => create();
  static $pb.PbList<TransactionError> createRepeated() => $pb.PbList<TransactionError>();
  @$core.pragma('dart2js:noInline')
  static TransactionError getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<TransactionError>(create);
  static TransactionError? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get message => $_getSZ(0);
  @$pb.TagNumber(1)
  set message($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasMessage() => $_has(0);
  @$pb.TagNumber(1)
  void clearMessage() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get code => $_getIZ(1);
  @$pb.TagNumber(2)
  set code($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasCode() => $_has(1);
  @$pb.TagNumber(2)
  void clearCode() => clearField(2);
}

enum Request_Body {
  getElection, 
  getElectionList, 
  getOrganization, 
  getBallot, 
  getElectionBallots, 
  getElectionKeys, 
  getElectionCircuitInfo, 
  getElectionResults, 
  getElectionWeight, 
  newCensus, 
  addCensusKeys, 
  getCensusRoot, 
  getCensusSize, 
  publishCensus, 
  getCensusProof, 
  dumpCensus, 
  pinFile, 
  fetchFile, 
  getBlockStatus, 
  getBlockCount, 
  estimateElectionPrice, 
  getTransaction, 
  waitTransaction, 
  notSet
}

class Request extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Request_Body> _Request_BodyByTag = {
    1 : Request_Body.getElection,
    2 : Request_Body.getElectionList,
    3 : Request_Body.getOrganization,
    4 : Request_Body.getBallot,
    5 : Request_Body.getElectionBallots,
    6 : Request_Body.getElectionKeys,
    7 : Request_Body.getElectionCircuitInfo,
    8 : Request_Body.getElectionResults,
    9 : Request_Body.getElectionWeight,
    31 : Request_Body.newCensus,
    32 : Request_Body.addCensusKeys,
    33 : Request_Body.getCensusRoot,
    34 : Request_Body.getCensusSize,
    35 : Request_Body.publishCensus,
    36 : Request_Body.getCensusProof,
    37 : Request_Body.dumpCensus,
    51 : Request_Body.pinFile,
    52 : Request_Body.fetchFile,
    61 : Request_Body.getBlockStatus,
    62 : Request_Body.getBlockCount,
    63 : Request_Body.estimateElectionPrice,
    81 : Request_Body.getTransaction,
    82 : Request_Body.waitTransaction,
    0 : Request_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Request', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2, 3, 4, 5, 6, 7, 8, 9, 31, 32, 33, 34, 35, 36, 37, 51, 52, 61, 62, 63, 81, 82])
    ..aOM<$1.GetElection>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetElection', protoName: 'GetElection', subBuilder: $1.GetElection.create)
    ..aOM<$1.GetElectionList>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetElectionList', protoName: 'GetElectionList', subBuilder: $1.GetElectionList.create)
    ..aOM<$1.GetOrganization>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetOrganization', protoName: 'GetOrganization', subBuilder: $1.GetOrganization.create)
    ..aOM<$1.GetBallot>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetBallot', protoName: 'GetBallot', subBuilder: $1.GetBallot.create)
    ..aOM<$1.GetElectionBallots>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetElectionBallots', protoName: 'GetElectionBallots', subBuilder: $1.GetElectionBallots.create)
    ..aOM<$1.GetElectionKeys>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetElectionKeys', protoName: 'GetElectionKeys', subBuilder: $1.GetElectionKeys.create)
    ..aOM<$1.GetElectionCircuitInfo>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetElectionCircuitInfo', protoName: 'GetElectionCircuitInfo', subBuilder: $1.GetElectionCircuitInfo.create)
    ..aOM<$1.GetElectionResults>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetElectionResults', protoName: 'GetElectionResults', subBuilder: $1.GetElectionResults.create)
    ..aOM<$1.GetElectionWeight>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetElectionWeight', protoName: 'GetElectionWeight', subBuilder: $1.GetElectionWeight.create)
    ..aOM<$1.NewCensus>(31, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'NewCensus', protoName: 'NewCensus', subBuilder: $1.NewCensus.create)
    ..aOM<$1.AddCensusKeys>(32, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'AddCensusKeys', protoName: 'AddCensusKeys', subBuilder: $1.AddCensusKeys.create)
    ..aOM<$1.GetCensusRoot>(33, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetCensusRoot', protoName: 'GetCensusRoot', subBuilder: $1.GetCensusRoot.create)
    ..aOM<$1.GetCensusSize>(34, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetCensusSize', protoName: 'GetCensusSize', subBuilder: $1.GetCensusSize.create)
    ..aOM<$1.PublishCensus>(35, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'PublishCensus', protoName: 'PublishCensus', subBuilder: $1.PublishCensus.create)
    ..aOM<$1.GetCensusProof>(36, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetCensusProof', protoName: 'GetCensusProof', subBuilder: $1.GetCensusProof.create)
    ..aOM<$1.DumpCensus>(37, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'DumpCensus', protoName: 'DumpCensus', subBuilder: $1.DumpCensus.create)
    ..aOM<$1.PinFile>(51, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'PinFile', protoName: 'PinFile', subBuilder: $1.PinFile.create)
    ..aOM<$1.FetchFile>(52, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'FetchFile', protoName: 'FetchFile', subBuilder: $1.FetchFile.create)
    ..aOM<$1.GetBlockStatus>(61, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetBlockStatus', protoName: 'GetBlockStatus', subBuilder: $1.GetBlockStatus.create)
    ..aOM<$1.GetBlockCount>(62, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetBlockCount', protoName: 'GetBlockCount', subBuilder: $1.GetBlockCount.create)
    ..aOM<$1.EstimateElectionPrice>(63, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'EstimateElectionPrice', protoName: 'EstimateElectionPrice', subBuilder: $1.EstimateElectionPrice.create)
    ..aOM<$1.GetTransaction>(81, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'GetTransaction', protoName: 'GetTransaction', subBuilder: $1.GetTransaction.create)
    ..aOM<$1.WaitTransaction>(82, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'WaitTransaction', protoName: 'WaitTransaction', subBuilder: $1.WaitTransaction.create)
    ..hasRequiredFields = false
  ;

  Request._() : super();
  factory Request({
    $1.GetElection? getElection,
    $1.GetElectionList? getElectionList,
    $1.GetOrganization? getOrganization,
    $1.GetBallot? getBallot,
    $1.GetElectionBallots? getElectionBallots,
    $1.GetElectionKeys? getElectionKeys,
    $1.GetElectionCircuitInfo? getElectionCircuitInfo,
    $1.GetElectionResults? getElectionResults,
    $1.GetElectionWeight? getElectionWeight,
    $1.NewCensus? newCensus,
    $1.AddCensusKeys? addCensusKeys,
    $1.GetCensusRoot? getCensusRoot,
    $1.GetCensusSize? getCensusSize,
    $1.PublishCensus? publishCensus,
    $1.GetCensusProof? getCensusProof,
    $1.DumpCensus? dumpCensus,
    $1.PinFile? pinFile,
    $1.FetchFile? fetchFile,
    $1.GetBlockStatus? getBlockStatus,
    $1.GetBlockCount? getBlockCount,
    $1.EstimateElectionPrice? estimateElectionPrice,
    $1.GetTransaction? getTransaction,
    $1.WaitTransaction? waitTransaction,
  }) {
    final _result = create();
    if (getElection != null) {
      _result.getElection = getElection;
    }
    if (getElectionList != null) {
      _result.getElectionList = getElectionList;
    }
    if (getOrganization != null) {
      _result.getOrganization = getOrganization;
    }
    if (getBallot != null) {
      _result.getBallot = getBallot;
    }
    if (getElectionBallots != null) {
      _result.getElectionBallots = getElectionBallots;
    }
    if (getElectionKeys != null) {
      _result.getElectionKeys = getElectionKeys;
    }
    if (getElectionCircuitInfo != null) {
      _result.getElectionCircuitInfo = getElectionCircuitInfo;
    }
    if (getElectionResults != null) {
      _result.getElectionResults = getElectionResults;
    }
    if (getElectionWeight != null) {
      _result.getElectionWeight = getElectionWeight;
    }
    if (newCensus != null) {
      _result.newCensus = newCensus;
    }
    if (addCensusKeys != null) {
      _result.addCensusKeys = addCensusKeys;
    }
    if (getCensusRoot != null) {
      _result.getCensusRoot = getCensusRoot;
    }
    if (getCensusSize != null) {
      _result.getCensusSize = getCensusSize;
    }
    if (publishCensus != null) {
      _result.publishCensus = publishCensus;
    }
    if (getCensusProof != null) {
      _result.getCensusProof = getCensusProof;
    }
    if (dumpCensus != null) {
      _result.dumpCensus = dumpCensus;
    }
    if (pinFile != null) {
      _result.pinFile = pinFile;
    }
    if (fetchFile != null) {
      _result.fetchFile = fetchFile;
    }
    if (getBlockStatus != null) {
      _result.getBlockStatus = getBlockStatus;
    }
    if (getBlockCount != null) {
      _result.getBlockCount = getBlockCount;
    }
    if (estimateElectionPrice != null) {
      _result.estimateElectionPrice = estimateElectionPrice;
    }
    if (getTransaction != null) {
      _result.getTransaction = getTransaction;
    }
    if (waitTransaction != null) {
      _result.waitTransaction = waitTransaction;
    }
    return _result;
  }
  factory Request.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Request.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Request clone() => Request()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Request copyWith(void Function(Request) updates) => super.copyWith((message) => updates(message as Request)) as Request; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Request create() => Request._();
  Request createEmptyInstance() => create();
  static $pb.PbList<Request> createRepeated() => $pb.PbList<Request>();
  @$core.pragma('dart2js:noInline')
  static Request getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Request>(create);
  static Request? _defaultInstance;

  Request_Body whichBody() => _Request_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  $1.GetElection get getElection => $_getN(0);
  @$pb.TagNumber(1)
  set getElection($1.GetElection v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasGetElection() => $_has(0);
  @$pb.TagNumber(1)
  void clearGetElection() => clearField(1);
  @$pb.TagNumber(1)
  $1.GetElection ensureGetElection() => $_ensure(0);

  @$pb.TagNumber(2)
  $1.GetElectionList get getElectionList => $_getN(1);
  @$pb.TagNumber(2)
  set getElectionList($1.GetElectionList v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasGetElectionList() => $_has(1);
  @$pb.TagNumber(2)
  void clearGetElectionList() => clearField(2);
  @$pb.TagNumber(2)
  $1.GetElectionList ensureGetElectionList() => $_ensure(1);

  @$pb.TagNumber(3)
  $1.GetOrganization get getOrganization => $_getN(2);
  @$pb.TagNumber(3)
  set getOrganization($1.GetOrganization v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasGetOrganization() => $_has(2);
  @$pb.TagNumber(3)
  void clearGetOrganization() => clearField(3);
  @$pb.TagNumber(3)
  $1.GetOrganization ensureGetOrganization() => $_ensure(2);

  @$pb.TagNumber(4)
  $1.GetBallot get getBallot => $_getN(3);
  @$pb.TagNumber(4)
  set getBallot($1.GetBallot v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasGetBallot() => $_has(3);
  @$pb.TagNumber(4)
  void clearGetBallot() => clearField(4);
  @$pb.TagNumber(4)
  $1.GetBallot ensureGetBallot() => $_ensure(3);

  @$pb.TagNumber(5)
  $1.GetElectionBallots get getElectionBallots => $_getN(4);
  @$pb.TagNumber(5)
  set getElectionBallots($1.GetElectionBallots v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasGetElectionBallots() => $_has(4);
  @$pb.TagNumber(5)
  void clearGetElectionBallots() => clearField(5);
  @$pb.TagNumber(5)
  $1.GetElectionBallots ensureGetElectionBallots() => $_ensure(4);

  @$pb.TagNumber(6)
  $1.GetElectionKeys get getElectionKeys => $_getN(5);
  @$pb.TagNumber(6)
  set getElectionKeys($1.GetElectionKeys v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasGetElectionKeys() => $_has(5);
  @$pb.TagNumber(6)
  void clearGetElectionKeys() => clearField(6);
  @$pb.TagNumber(6)
  $1.GetElectionKeys ensureGetElectionKeys() => $_ensure(5);

  @$pb.TagNumber(7)
  $1.GetElectionCircuitInfo get getElectionCircuitInfo => $_getN(6);
  @$pb.TagNumber(7)
  set getElectionCircuitInfo($1.GetElectionCircuitInfo v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasGetElectionCircuitInfo() => $_has(6);
  @$pb.TagNumber(7)
  void clearGetElectionCircuitInfo() => clearField(7);
  @$pb.TagNumber(7)
  $1.GetElectionCircuitInfo ensureGetElectionCircuitInfo() => $_ensure(6);

  @$pb.TagNumber(8)
  $1.GetElectionResults get getElectionResults => $_getN(7);
  @$pb.TagNumber(8)
  set getElectionResults($1.GetElectionResults v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasGetElectionResults() => $_has(7);
  @$pb.TagNumber(8)
  void clearGetElectionResults() => clearField(8);
  @$pb.TagNumber(8)
  $1.GetElectionResults ensureGetElectionResults() => $_ensure(7);

  @$pb.TagNumber(9)
  $1.GetElectionWeight get getElectionWeight => $_getN(8);
  @$pb.TagNumber(9)
  set getElectionWeight($1.GetElectionWeight v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasGetElectionWeight() => $_has(8);
  @$pb.TagNumber(9)
  void clearGetElectionWeight() => clearField(9);
  @$pb.TagNumber(9)
  $1.GetElectionWeight ensureGetElectionWeight() => $_ensure(8);

  @$pb.TagNumber(31)
  $1.NewCensus get newCensus => $_getN(9);
  @$pb.TagNumber(31)
  set newCensus($1.NewCensus v) { setField(31, v); }
  @$pb.TagNumber(31)
  $core.bool hasNewCensus() => $_has(9);
  @$pb.TagNumber(31)
  void clearNewCensus() => clearField(31);
  @$pb.TagNumber(31)
  $1.NewCensus ensureNewCensus() => $_ensure(9);

  @$pb.TagNumber(32)
  $1.AddCensusKeys get addCensusKeys => $_getN(10);
  @$pb.TagNumber(32)
  set addCensusKeys($1.AddCensusKeys v) { setField(32, v); }
  @$pb.TagNumber(32)
  $core.bool hasAddCensusKeys() => $_has(10);
  @$pb.TagNumber(32)
  void clearAddCensusKeys() => clearField(32);
  @$pb.TagNumber(32)
  $1.AddCensusKeys ensureAddCensusKeys() => $_ensure(10);

  @$pb.TagNumber(33)
  $1.GetCensusRoot get getCensusRoot => $_getN(11);
  @$pb.TagNumber(33)
  set getCensusRoot($1.GetCensusRoot v) { setField(33, v); }
  @$pb.TagNumber(33)
  $core.bool hasGetCensusRoot() => $_has(11);
  @$pb.TagNumber(33)
  void clearGetCensusRoot() => clearField(33);
  @$pb.TagNumber(33)
  $1.GetCensusRoot ensureGetCensusRoot() => $_ensure(11);

  @$pb.TagNumber(34)
  $1.GetCensusSize get getCensusSize => $_getN(12);
  @$pb.TagNumber(34)
  set getCensusSize($1.GetCensusSize v) { setField(34, v); }
  @$pb.TagNumber(34)
  $core.bool hasGetCensusSize() => $_has(12);
  @$pb.TagNumber(34)
  void clearGetCensusSize() => clearField(34);
  @$pb.TagNumber(34)
  $1.GetCensusSize ensureGetCensusSize() => $_ensure(12);

  @$pb.TagNumber(35)
  $1.PublishCensus get publishCensus => $_getN(13);
  @$pb.TagNumber(35)
  set publishCensus($1.PublishCensus v) { setField(35, v); }
  @$pb.TagNumber(35)
  $core.bool hasPublishCensus() => $_has(13);
  @$pb.TagNumber(35)
  void clearPublishCensus() => clearField(35);
  @$pb.TagNumber(35)
  $1.PublishCensus ensurePublishCensus() => $_ensure(13);

  @$pb.TagNumber(36)
  $1.GetCensusProof get getCensusProof => $_getN(14);
  @$pb.TagNumber(36)
  set getCensusProof($1.GetCensusProof v) { setField(36, v); }
  @$pb.TagNumber(36)
  $core.bool hasGetCensusProof() => $_has(14);
  @$pb.TagNumber(36)
  void clearGetCensusProof() => clearField(36);
  @$pb.TagNumber(36)
  $1.GetCensusProof ensureGetCensusProof() => $_ensure(14);

  @$pb.TagNumber(37)
  $1.DumpCensus get dumpCensus => $_getN(15);
  @$pb.TagNumber(37)
  set dumpCensus($1.DumpCensus v) { setField(37, v); }
  @$pb.TagNumber(37)
  $core.bool hasDumpCensus() => $_has(15);
  @$pb.TagNumber(37)
  void clearDumpCensus() => clearField(37);
  @$pb.TagNumber(37)
  $1.DumpCensus ensureDumpCensus() => $_ensure(15);

  @$pb.TagNumber(51)
  $1.PinFile get pinFile => $_getN(16);
  @$pb.TagNumber(51)
  set pinFile($1.PinFile v) { setField(51, v); }
  @$pb.TagNumber(51)
  $core.bool hasPinFile() => $_has(16);
  @$pb.TagNumber(51)
  void clearPinFile() => clearField(51);
  @$pb.TagNumber(51)
  $1.PinFile ensurePinFile() => $_ensure(16);

  @$pb.TagNumber(52)
  $1.FetchFile get fetchFile => $_getN(17);
  @$pb.TagNumber(52)
  set fetchFile($1.FetchFile v) { setField(52, v); }
  @$pb.TagNumber(52)
  $core.bool hasFetchFile() => $_has(17);
  @$pb.TagNumber(52)
  void clearFetchFile() => clearField(52);
  @$pb.TagNumber(52)
  $1.FetchFile ensureFetchFile() => $_ensure(17);

  @$pb.TagNumber(61)
  $1.GetBlockStatus get getBlockStatus => $_getN(18);
  @$pb.TagNumber(61)
  set getBlockStatus($1.GetBlockStatus v) { setField(61, v); }
  @$pb.TagNumber(61)
  $core.bool hasGetBlockStatus() => $_has(18);
  @$pb.TagNumber(61)
  void clearGetBlockStatus() => clearField(61);
  @$pb.TagNumber(61)
  $1.GetBlockStatus ensureGetBlockStatus() => $_ensure(18);

  @$pb.TagNumber(62)
  $1.GetBlockCount get getBlockCount => $_getN(19);
  @$pb.TagNumber(62)
  set getBlockCount($1.GetBlockCount v) { setField(62, v); }
  @$pb.TagNumber(62)
  $core.bool hasGetBlockCount() => $_has(19);
  @$pb.TagNumber(62)
  void clearGetBlockCount() => clearField(62);
  @$pb.TagNumber(62)
  $1.GetBlockCount ensureGetBlockCount() => $_ensure(19);

  @$pb.TagNumber(63)
  $1.EstimateElectionPrice get estimateElectionPrice => $_getN(20);
  @$pb.TagNumber(63)
  set estimateElectionPrice($1.EstimateElectionPrice v) { setField(63, v); }
  @$pb.TagNumber(63)
  $core.bool hasEstimateElectionPrice() => $_has(20);
  @$pb.TagNumber(63)
  void clearEstimateElectionPrice() => clearField(63);
  @$pb.TagNumber(63)
  $1.EstimateElectionPrice ensureEstimateElectionPrice() => $_ensure(20);

  @$pb.TagNumber(81)
  $1.GetTransaction get getTransaction => $_getN(21);
  @$pb.TagNumber(81)
  set getTransaction($1.GetTransaction v) { setField(81, v); }
  @$pb.TagNumber(81)
  $core.bool hasGetTransaction() => $_has(21);
  @$pb.TagNumber(81)
  void clearGetTransaction() => clearField(81);
  @$pb.TagNumber(81)
  $1.GetTransaction ensureGetTransaction() => $_ensure(21);

  @$pb.TagNumber(82)
  $1.WaitTransaction get waitTransaction => $_getN(22);
  @$pb.TagNumber(82)
  set waitTransaction($1.WaitTransaction v) { setField(82, v); }
  @$pb.TagNumber(82)
  $core.bool hasWaitTransaction() => $_has(22);
  @$pb.TagNumber(82)
  void clearWaitTransaction() => clearField(82);
  @$pb.TagNumber(82)
  $1.WaitTransaction ensureWaitTransaction() => $_ensure(22);
}

enum Response_Body {
  successResponse, 
  errorResponse, 
  notSet
}

class Response extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Response_Body> _Response_BodyByTag = {
    1 : Response_Body.successResponse,
    2 : Response_Body.errorResponse,
    0 : Response_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Response', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2])
    ..aOM<SuccessResponse>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'successResponse', protoName: 'successResponse', subBuilder: SuccessResponse.create)
    ..aOM<ErrorResponse>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'errorResponse', protoName: 'errorResponse', subBuilder: ErrorResponse.create)
    ..hasRequiredFields = false
  ;

  Response._() : super();
  factory Response({
    SuccessResponse? successResponse,
    ErrorResponse? errorResponse,
  }) {
    final _result = create();
    if (successResponse != null) {
      _result.successResponse = successResponse;
    }
    if (errorResponse != null) {
      _result.errorResponse = errorResponse;
    }
    return _result;
  }
  factory Response.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Response.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Response clone() => Response()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Response copyWith(void Function(Response) updates) => super.copyWith((message) => updates(message as Response)) as Response; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Response create() => Response._();
  Response createEmptyInstance() => create();
  static $pb.PbList<Response> createRepeated() => $pb.PbList<Response>();
  @$core.pragma('dart2js:noInline')
  static Response getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Response>(create);
  static Response? _defaultInstance;

  Response_Body whichBody() => _Response_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  SuccessResponse get successResponse => $_getN(0);
  @$pb.TagNumber(1)
  set successResponse(SuccessResponse v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasSuccessResponse() => $_has(0);
  @$pb.TagNumber(1)
  void clearSuccessResponse() => clearField(1);
  @$pb.TagNumber(1)
  SuccessResponse ensureSuccessResponse() => $_ensure(0);

  @$pb.TagNumber(2)
  ErrorResponse get errorResponse => $_getN(1);
  @$pb.TagNumber(2)
  set errorResponse(ErrorResponse v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasErrorResponse() => $_has(1);
  @$pb.TagNumber(2)
  void clearErrorResponse() => clearField(2);
  @$pb.TagNumber(2)
  ErrorResponse ensureErrorResponse() => $_ensure(1);
}

class SuccessResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SuccessResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'body', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  SuccessResponse._() : super();
  factory SuccessResponse({
    $core.List<$core.int>? body,
  }) {
    final _result = create();
    if (body != null) {
      _result.body = body;
    }
    return _result;
  }
  factory SuccessResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SuccessResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SuccessResponse clone() => SuccessResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SuccessResponse copyWith(void Function(SuccessResponse) updates) => super.copyWith((message) => updates(message as SuccessResponse)) as SuccessResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SuccessResponse create() => SuccessResponse._();
  SuccessResponse createEmptyInstance() => create();
  static $pb.PbList<SuccessResponse> createRepeated() => $pb.PbList<SuccessResponse>();
  @$core.pragma('dart2js:noInline')
  static SuccessResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SuccessResponse>(create);
  static SuccessResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get body => $_getN(0);
  @$pb.TagNumber(1)
  set body($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasBody() => $_has(0);
  @$pb.TagNumber(1)
  void clearBody() => clearField(1);
}

class ErrorResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ErrorResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'message')
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'body', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  ErrorResponse._() : super();
  factory ErrorResponse({
    $core.String? message,
    $core.List<$core.int>? body,
  }) {
    final _result = create();
    if (message != null) {
      _result.message = message;
    }
    if (body != null) {
      _result.body = body;
    }
    return _result;
  }
  factory ErrorResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ErrorResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ErrorResponse clone() => ErrorResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ErrorResponse copyWith(void Function(ErrorResponse) updates) => super.copyWith((message) => updates(message as ErrorResponse)) as ErrorResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ErrorResponse create() => ErrorResponse._();
  ErrorResponse createEmptyInstance() => create();
  static $pb.PbList<ErrorResponse> createRepeated() => $pb.PbList<ErrorResponse>();
  @$core.pragma('dart2js:noInline')
  static ErrorResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ErrorResponse>(create);
  static ErrorResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get message => $_getSZ(0);
  @$pb.TagNumber(1)
  set message($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasMessage() => $_has(0);
  @$pb.TagNumber(1)
  void clearMessage() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get body => $_getN(1);
  @$pb.TagNumber(2)
  set body($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBody() => $_has(1);
  @$pb.TagNumber(2)
  void clearBody() => clearField(2);
}

