///
//  Generated code. Do not modify.
//  source: key.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

import 'key.pbenum.dart';

export 'key.pbenum.dart';

class Key extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Key', package: const $pb.PackageName('dvote'))
    ..e<Key_Type>(1, 'type', $pb.PbFieldType.OE, Key_Type.SECP256K1, Key_Type.valueOf, Key_Type.values)
    ..aOS(2, 'encryptedMnemonic')
    ..aOS(3, 'encryptedPrivateKey')
    ..aOS(4, 'publicKey')
    ..aOS(5, 'address')
    ..m<$core.String, $core.String>(100, 'meta', 'Key.MetaEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..hasRequiredFields = false
  ;

  Key._() : super();
  factory Key() => create();
  factory Key.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Key.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Key clone() => Key()..mergeFromMessage(this);
  Key copyWith(void Function(Key) updates) => super.copyWith((message) => updates(message as Key));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Key create() => Key._();
  Key createEmptyInstance() => create();
  static $pb.PbList<Key> createRepeated() => $pb.PbList<Key>();
  static Key getDefault() => _defaultInstance ??= create()..freeze();
  static Key _defaultInstance;

  Key_Type get type => $_getN(0);
  set type(Key_Type v) { setField(1, v); }
  $core.bool hasType() => $_has(0);
  void clearType() => clearField(1);

  $core.String get encryptedMnemonic => $_getS(1, '');
  set encryptedMnemonic($core.String v) { $_setString(1, v); }
  $core.bool hasEncryptedMnemonic() => $_has(1);
  void clearEncryptedMnemonic() => clearField(2);

  $core.String get encryptedPrivateKey => $_getS(2, '');
  set encryptedPrivateKey($core.String v) { $_setString(2, v); }
  $core.bool hasEncryptedPrivateKey() => $_has(2);
  void clearEncryptedPrivateKey() => clearField(3);

  $core.String get publicKey => $_getS(3, '');
  set publicKey($core.String v) { $_setString(3, v); }
  $core.bool hasPublicKey() => $_has(3);
  void clearPublicKey() => clearField(4);

  $core.String get address => $_getS(4, '');
  set address($core.String v) { $_setString(4, v); }
  $core.bool hasAddress() => $_has(4);
  void clearAddress() => clearField(5);

  $core.Map<$core.String, $core.String> get meta => $_getMap(5);
}

