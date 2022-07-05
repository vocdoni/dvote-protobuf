///
//  Generated code. Do not modify.
//  source: client-store/account.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'wallet.pb.dart' as $0;
import '../metadata/entity.pb.dart' as $1;

class AccountsStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AccountsStore', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..pc<Account>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'items', $pb.PbFieldType.PM, subBuilder: Account.create)
    ..hasRequiredFields = false
  ;

  AccountsStore._() : super();
  factory AccountsStore({
    $core.Iterable<Account>? items,
  }) {
    final _result = create();
    if (items != null) {
      _result.items.addAll(items);
    }
    return _result;
  }
  factory AccountsStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AccountsStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AccountsStore clone() => AccountsStore()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AccountsStore copyWith(void Function(AccountsStore) updates) => super.copyWith((message) => updates(message as AccountsStore)) as AccountsStore; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AccountsStore create() => AccountsStore._();
  AccountsStore createEmptyInstance() => create();
  static $pb.PbList<AccountsStore> createRepeated() => $pb.PbList<AccountsStore>();
  @$core.pragma('dart2js:noInline')
  static AccountsStore getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AccountsStore>(create);
  static AccountsStore? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Account> get items => $_getList(0);
}

class Account_AppVoter extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Account.AppVoter', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'appAnalyticsID', protoName: 'appAnalyticsID')
    ..pc<$1.EntityReference>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'entities', $pb.PbFieldType.PM, subBuilder: $1.EntityReference.create)
    ..hasRequiredFields = false
  ;

  Account_AppVoter._() : super();
  factory Account_AppVoter({
    $core.String? appAnalyticsID,
    $core.Iterable<$1.EntityReference>? entities,
  }) {
    final _result = create();
    if (appAnalyticsID != null) {
      _result.appAnalyticsID = appAnalyticsID;
    }
    if (entities != null) {
      _result.entities.addAll(entities);
    }
    return _result;
  }
  factory Account_AppVoter.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Account_AppVoter.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Account_AppVoter clone() => Account_AppVoter()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Account_AppVoter copyWith(void Function(Account_AppVoter) updates) => super.copyWith((message) => updates(message as Account_AppVoter)) as Account_AppVoter; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Account_AppVoter create() => Account_AppVoter._();
  Account_AppVoter createEmptyInstance() => create();
  static $pb.PbList<Account_AppVoter> createRepeated() => $pb.PbList<Account_AppVoter>();
  @$core.pragma('dart2js:noInline')
  static Account_AppVoter getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Account_AppVoter>(create);
  static Account_AppVoter? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get appAnalyticsID => $_getSZ(0);
  @$pb.TagNumber(1)
  set appAnalyticsID($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAppAnalyticsID() => $_has(0);
  @$pb.TagNumber(1)
  void clearAppAnalyticsID() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$1.EntityReference> get entities => $_getList(1);
}

class Account_WebEntity extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Account.WebEntity', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'webAnalyticsID', protoName: 'webAnalyticsID')
    ..hasRequiredFields = false
  ;

  Account_WebEntity._() : super();
  factory Account_WebEntity({
    $core.String? webAnalyticsID,
  }) {
    final _result = create();
    if (webAnalyticsID != null) {
      _result.webAnalyticsID = webAnalyticsID;
    }
    return _result;
  }
  factory Account_WebEntity.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Account_WebEntity.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Account_WebEntity clone() => Account_WebEntity()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Account_WebEntity copyWith(void Function(Account_WebEntity) updates) => super.copyWith((message) => updates(message as Account_WebEntity)) as Account_WebEntity; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Account_WebEntity create() => Account_WebEntity._();
  Account_WebEntity createEmptyInstance() => create();
  static $pb.PbList<Account_WebEntity> createRepeated() => $pb.PbList<Account_WebEntity>();
  @$core.pragma('dart2js:noInline')
  static Account_WebEntity getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Account_WebEntity>(create);
  static Account_WebEntity? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get webAnalyticsID => $_getSZ(0);
  @$pb.TagNumber(1)
  set webAnalyticsID($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasWebAnalyticsID() => $_has(0);
  @$pb.TagNumber(1)
  void clearWebAnalyticsID() => clearField(1);
}

enum Account_Extra_Content {
  appVoter, 
  webEntity, 
  notSet
}

class Account_Extra extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Account_Extra_Content> _Account_Extra_ContentByTag = {
    1 : Account_Extra_Content.appVoter,
    2 : Account_Extra_Content.webEntity,
    0 : Account_Extra_Content.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Account.Extra', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..oo(0, [1, 2])
    ..aOM<Account_AppVoter>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'appVoter', protoName: 'appVoter', subBuilder: Account_AppVoter.create)
    ..aOM<Account_WebEntity>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'webEntity', protoName: 'webEntity', subBuilder: Account_WebEntity.create)
    ..hasRequiredFields = false
  ;

  Account_Extra._() : super();
  factory Account_Extra({
    Account_AppVoter? appVoter,
    Account_WebEntity? webEntity,
  }) {
    final _result = create();
    if (appVoter != null) {
      _result.appVoter = appVoter;
    }
    if (webEntity != null) {
      _result.webEntity = webEntity;
    }
    return _result;
  }
  factory Account_Extra.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Account_Extra.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Account_Extra clone() => Account_Extra()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Account_Extra copyWith(void Function(Account_Extra) updates) => super.copyWith((message) => updates(message as Account_Extra)) as Account_Extra; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Account_Extra create() => Account_Extra._();
  Account_Extra createEmptyInstance() => create();
  static $pb.PbList<Account_Extra> createRepeated() => $pb.PbList<Account_Extra>();
  @$core.pragma('dart2js:noInline')
  static Account_Extra getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Account_Extra>(create);
  static Account_Extra? _defaultInstance;

  Account_Extra_Content whichContent() => _Account_Extra_ContentByTag[$_whichOneof(0)]!;
  void clearContent() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  Account_AppVoter get appVoter => $_getN(0);
  @$pb.TagNumber(1)
  set appVoter(Account_AppVoter v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasAppVoter() => $_has(0);
  @$pb.TagNumber(1)
  void clearAppVoter() => clearField(1);
  @$pb.TagNumber(1)
  Account_AppVoter ensureAppVoter() => $_ensure(0);

  @$pb.TagNumber(2)
  Account_WebEntity get webEntity => $_getN(1);
  @$pb.TagNumber(2)
  set webEntity(Account_WebEntity v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasWebEntity() => $_has(1);
  @$pb.TagNumber(2)
  void clearWebEntity() => clearField(2);
  @$pb.TagNumber(2)
  Account_WebEntity ensureWebEntity() => $_ensure(1);
}

class Account extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Account', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOM<$0.Wallet>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'wallet', subBuilder: $0.Wallet.create)
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'address')
    ..aOB(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'hasBackup', protoName: 'hasBackup')
    ..aOM<Account_Extra>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'extra', subBuilder: Account_Extra.create)
    ..m<$core.String, $core.String>(100, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'meta', entryClassName: 'Account.MetaEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..hasRequiredFields = false
  ;

  Account._() : super();
  factory Account({
    $core.String? name,
    $0.Wallet? wallet,
    $core.String? address,
    $core.bool? hasBackup,
    Account_Extra? extra,
    $core.Map<$core.String, $core.String>? meta,
  }) {
    final _result = create();
    if (name != null) {
      _result.name = name;
    }
    if (wallet != null) {
      _result.wallet = wallet;
    }
    if (address != null) {
      _result.address = address;
    }
    if (hasBackup != null) {
      _result.hasBackup = hasBackup;
    }
    if (extra != null) {
      _result.extra = extra;
    }
    if (meta != null) {
      _result.meta.addAll(meta);
    }
    return _result;
  }
  factory Account.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Account.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Account clone() => Account()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Account copyWith(void Function(Account) updates) => super.copyWith((message) => updates(message as Account)) as Account; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Account create() => Account._();
  Account createEmptyInstance() => create();
  static $pb.PbList<Account> createRepeated() => $pb.PbList<Account>();
  @$core.pragma('dart2js:noInline')
  static Account getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Account>(create);
  static Account? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);

  @$pb.TagNumber(2)
  $0.Wallet get wallet => $_getN(1);
  @$pb.TagNumber(2)
  set wallet($0.Wallet v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasWallet() => $_has(1);
  @$pb.TagNumber(2)
  void clearWallet() => clearField(2);
  @$pb.TagNumber(2)
  $0.Wallet ensureWallet() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.String get address => $_getSZ(2);
  @$pb.TagNumber(3)
  set address($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAddress() => $_has(2);
  @$pb.TagNumber(3)
  void clearAddress() => clearField(3);

  @$pb.TagNumber(4)
  $core.bool get hasBackup => $_getBF(3);
  @$pb.TagNumber(4)
  set hasBackup($core.bool v) { $_setBool(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasHasBackup() => $_has(3);
  @$pb.TagNumber(4)
  void clearHasBackup() => clearField(4);

  @$pb.TagNumber(5)
  Account_Extra get extra => $_getN(4);
  @$pb.TagNumber(5)
  set extra(Account_Extra v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasExtra() => $_has(4);
  @$pb.TagNumber(5)
  void clearExtra() => clearField(5);
  @$pb.TagNumber(5)
  Account_Extra ensureExtra() => $_ensure(4);

  @$pb.TagNumber(100)
  $core.Map<$core.String, $core.String> get meta => $_getMap(5);
}

