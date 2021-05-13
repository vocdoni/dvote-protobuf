///
//  Generated code. Do not modify.
//  source: client-store/backup.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:fixnum/fixnum.dart' as $fixnum;
import 'package:protobuf/protobuf.dart' as $pb;

import 'wallet.pb.dart' as $0;

import 'backup.pbenum.dart';

export 'backup.pbenum.dart';

class WalletBackup_Recovery extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'WalletBackup.Recovery', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..pc<WalletBackup_Recovery_QuestionEnum>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'questionIds', $pb.PbFieldType.PE, protoName: 'questionIds', valueOf: WalletBackup_Recovery_QuestionEnum.valueOf, enumValues: WalletBackup_Recovery_QuestionEnum.values)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptedPassphrase', $pb.PbFieldType.OY, protoName: 'encryptedPassphrase')
    ..hasRequiredFields = false
  ;

  WalletBackup_Recovery._() : super();
  factory WalletBackup_Recovery({
    $core.Iterable<WalletBackup_Recovery_QuestionEnum> questionIds,
    $core.List<$core.int> encryptedPassphrase,
  }) {
    final _result = create();
    if (questionIds != null) {
      _result.questionIds.addAll(questionIds);
    }
    if (encryptedPassphrase != null) {
      _result.encryptedPassphrase = encryptedPassphrase;
    }
    return _result;
  }
  factory WalletBackup_Recovery.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory WalletBackup_Recovery.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  WalletBackup_Recovery clone() => WalletBackup_Recovery()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  WalletBackup_Recovery copyWith(void Function(WalletBackup_Recovery) updates) => super.copyWith((message) => updates(message as WalletBackup_Recovery)) as WalletBackup_Recovery; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static WalletBackup_Recovery create() => WalletBackup_Recovery._();
  WalletBackup_Recovery createEmptyInstance() => create();
  static $pb.PbList<WalletBackup_Recovery> createRepeated() => $pb.PbList<WalletBackup_Recovery>();
  @$core.pragma('dart2js:noInline')
  static WalletBackup_Recovery getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<WalletBackup_Recovery>(create);
  static WalletBackup_Recovery _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<WalletBackup_Recovery_QuestionEnum> get questionIds => $_getList(0);

  @$pb.TagNumber(2)
  $core.List<$core.int> get encryptedPassphrase => $_getN(1);
  @$pb.TagNumber(2)
  set encryptedPassphrase($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasEncryptedPassphrase() => $_has(1);
  @$pb.TagNumber(2)
  void clearEncryptedPassphrase() => clearField(2);
}

class WalletBackup extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'WalletBackup', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..a<$fixnum.Int64>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'timestamp', $pb.PbFieldType.OU6, defaultOrMaker: $fixnum.Int64.ZERO)
    ..aOM<$0.Wallet>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'wallet', subBuilder: $0.Wallet.create)
    ..aOM<WalletBackup_Recovery>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'passphraseRecovery', protoName: 'passphraseRecovery', subBuilder: WalletBackup_Recovery.create)
    ..hasRequiredFields = false
  ;

  WalletBackup._() : super();
  factory WalletBackup({
    $core.String name,
    $fixnum.Int64 timestamp,
    $0.Wallet wallet,
    WalletBackup_Recovery passphraseRecovery,
  }) {
    final _result = create();
    if (name != null) {
      _result.name = name;
    }
    if (timestamp != null) {
      _result.timestamp = timestamp;
    }
    if (wallet != null) {
      _result.wallet = wallet;
    }
    if (passphraseRecovery != null) {
      _result.passphraseRecovery = passphraseRecovery;
    }
    return _result;
  }
  factory WalletBackup.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory WalletBackup.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  WalletBackup clone() => WalletBackup()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  WalletBackup copyWith(void Function(WalletBackup) updates) => super.copyWith((message) => updates(message as WalletBackup)) as WalletBackup; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static WalletBackup create() => WalletBackup._();
  WalletBackup createEmptyInstance() => create();
  static $pb.PbList<WalletBackup> createRepeated() => $pb.PbList<WalletBackup>();
  @$core.pragma('dart2js:noInline')
  static WalletBackup getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<WalletBackup>(create);
  static WalletBackup _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);

  @$pb.TagNumber(2)
  $fixnum.Int64 get timestamp => $_getI64(1);
  @$pb.TagNumber(2)
  set timestamp($fixnum.Int64 v) { $_setInt64(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasTimestamp() => $_has(1);
  @$pb.TagNumber(2)
  void clearTimestamp() => clearField(2);

  @$pb.TagNumber(3)
  $0.Wallet get wallet => $_getN(2);
  @$pb.TagNumber(3)
  set wallet($0.Wallet v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasWallet() => $_has(2);
  @$pb.TagNumber(3)
  void clearWallet() => clearField(3);
  @$pb.TagNumber(3)
  $0.Wallet ensureWallet() => $_ensure(2);

  @$pb.TagNumber(4)
  WalletBackup_Recovery get passphraseRecovery => $_getN(3);
  @$pb.TagNumber(4)
  set passphraseRecovery(WalletBackup_Recovery v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasPassphraseRecovery() => $_has(3);
  @$pb.TagNumber(4)
  void clearPassphraseRecovery() => clearField(4);
  @$pb.TagNumber(4)
  WalletBackup_Recovery ensurePassphraseRecovery() => $_ensure(3);
}

