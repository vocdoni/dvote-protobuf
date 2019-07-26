///
//  Generated code. Do not modify.
//  source: key.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

// ignore_for_file: UNDEFINED_SHOWN_NAME,UNUSED_SHOWN_NAME
import 'dart:core' as $core show int, dynamic, String, List, Map;
import 'package:protobuf/protobuf.dart' as $pb;

class Key_KeyType extends $pb.ProtobufEnum {
  static const Key_KeyType SECP256K1 = Key_KeyType._(0, 'SECP256K1');
  static const Key_KeyType BABYJUB = Key_KeyType._(1, 'BABYJUB');

  static const $core.List<Key_KeyType> values = <Key_KeyType> [
    SECP256K1,
    BABYJUB,
  ];

  static final $core.Map<$core.int, Key_KeyType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Key_KeyType valueOf($core.int value) => _byValue[value];

  const Key_KeyType._($core.int v, $core.String n) : super(v, n);
}

