///
//  Generated code. Do not modify.
//  source: client-store/wallet.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'wallet.pbenum.dart';

export 'wallet.pbenum.dart';

class Wallet extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Wallet', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptedMnemonic', $pb.PbFieldType.OY, protoName: 'encryptedMnemonic')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'hdPath', protoName: 'hdPath')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'locale')
    ..e<Wallet_AuthMethod>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'authMethod', $pb.PbFieldType.OE, protoName: 'authMethod', defaultOrMaker: Wallet_AuthMethod.PASS, valueOf: Wallet_AuthMethod.valueOf, enumValues: Wallet_AuthMethod.values)
    ..hasRequiredFields = false
  ;

  Wallet._() : super();
  factory Wallet({
    $core.List<$core.int>? encryptedMnemonic,
    $core.String? hdPath,
    $core.String? locale,
    Wallet_AuthMethod? authMethod,
  }) {
    final _result = create();
    if (encryptedMnemonic != null) {
      _result.encryptedMnemonic = encryptedMnemonic;
    }
    if (hdPath != null) {
      _result.hdPath = hdPath;
    }
    if (locale != null) {
      _result.locale = locale;
    }
    if (authMethod != null) {
      _result.authMethod = authMethod;
    }
    return _result;
  }
  factory Wallet.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Wallet.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Wallet clone() => Wallet()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Wallet copyWith(void Function(Wallet) updates) => super.copyWith((message) => updates(message as Wallet)) as Wallet; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Wallet create() => Wallet._();
  Wallet createEmptyInstance() => create();
  static $pb.PbList<Wallet> createRepeated() => $pb.PbList<Wallet>();
  @$core.pragma('dart2js:noInline')
  static Wallet getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Wallet>(create);
  static Wallet? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get encryptedMnemonic => $_getN(0);
  @$pb.TagNumber(1)
  set encryptedMnemonic($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasEncryptedMnemonic() => $_has(0);
  @$pb.TagNumber(1)
  void clearEncryptedMnemonic() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get hdPath => $_getSZ(1);
  @$pb.TagNumber(2)
  set hdPath($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasHdPath() => $_has(1);
  @$pb.TagNumber(2)
  void clearHdPath() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get locale => $_getSZ(2);
  @$pb.TagNumber(3)
  set locale($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasLocale() => $_has(2);
  @$pb.TagNumber(3)
  void clearLocale() => clearField(3);

  @$pb.TagNumber(4)
  Wallet_AuthMethod get authMethod => $_getN(3);
  @$pb.TagNumber(4)
  set authMethod(Wallet_AuthMethod v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasAuthMethod() => $_has(3);
  @$pb.TagNumber(4)
  void clearAuthMethod() => clearField(4);
}

