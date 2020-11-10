///
//  Generated code. Do not modify.
//  source: client-store/key.proto
//
// @dart = 2.3
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'key.pbenum.dart';

export 'key.pbenum.dart';

class Key extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Key', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..e<Key_Type>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'type', $pb.PbFieldType.OE, defaultOrMaker: Key_Type.SECP256K1, valueOf: Key_Type.valueOf, enumValues: Key_Type.values)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptedMnemonic', protoName: 'encryptedMnemonic')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptedRootPrivateKey', protoName: 'encryptedRootPrivateKey')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'rootPublicKey', protoName: 'rootPublicKey')
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'rootAddress', protoName: 'rootAddress')
    ..m<$core.String, $core.String>(100, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'meta', entryClassName: 'Key.MetaEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..hasRequiredFields = false
  ;

  Key._() : super();
  factory Key() => create();
  factory Key.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Key.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Key clone() => Key()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Key copyWith(void Function(Key) updates) => super.copyWith((message) => updates(message as Key)); // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Key create() => Key._();
  Key createEmptyInstance() => create();
  static $pb.PbList<Key> createRepeated() => $pb.PbList<Key>();
  @$core.pragma('dart2js:noInline')
  static Key getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Key>(create);
  static Key _defaultInstance;

  @$pb.TagNumber(1)
  Key_Type get type => $_getN(0);
  @$pb.TagNumber(1)
  set type(Key_Type v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasType() => $_has(0);
  @$pb.TagNumber(1)
  void clearType() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get encryptedMnemonic => $_getSZ(1);
  @$pb.TagNumber(2)
  set encryptedMnemonic($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasEncryptedMnemonic() => $_has(1);
  @$pb.TagNumber(2)
  void clearEncryptedMnemonic() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get encryptedRootPrivateKey => $_getSZ(2);
  @$pb.TagNumber(3)
  set encryptedRootPrivateKey($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasEncryptedRootPrivateKey() => $_has(2);
  @$pb.TagNumber(3)
  void clearEncryptedRootPrivateKey() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get rootPublicKey => $_getSZ(3);
  @$pb.TagNumber(4)
  set rootPublicKey($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasRootPublicKey() => $_has(3);
  @$pb.TagNumber(4)
  void clearRootPublicKey() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get rootAddress => $_getSZ(4);
  @$pb.TagNumber(5)
  set rootAddress($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasRootAddress() => $_has(4);
  @$pb.TagNumber(5)
  void clearRootAddress() => clearField(5);

  @$pb.TagNumber(100)
  $core.Map<$core.String, $core.String> get meta => $_getMap(5);
}

