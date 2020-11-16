///
//  Generated code. Do not modify.
//  source: client-store/key.proto
//
// @dart = 2.3
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class Key_Type extends $pb.ProtobufEnum {
  static const Key_Type SECP256K1 = Key_Type._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'SECP256K1');
  static const Key_Type BABYJUBJUB = Key_Type._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'BABYJUBJUB');

  static const $core.List<Key_Type> values = <Key_Type> [
    SECP256K1,
    BABYJUBJUB,
  ];

  static final $core.Map<$core.int, Key_Type> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Key_Type valueOf($core.int value) => _byValue[value];

  const Key_Type._($core.int v, $core.String n) : super(v, n);
}

