///
//  Generated code. Do not modify.
//  source: common/vote.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class SignatureType extends $pb.ProtobufEnum {
  static const SignatureType UNKNOWN = SignatureType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'UNKNOWN');
  static const SignatureType ECDSA = SignatureType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ECDSA');
  static const SignatureType ECDSA_PIDSALTED = SignatureType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ECDSA_PIDSALTED');
  static const SignatureType ECDSA_BLIND = SignatureType._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ECDSA_BLIND');
  static const SignatureType ECDSA_BLIND_PIDSALTED = SignatureType._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ECDSA_BLIND_PIDSALTED');

  static const $core.List<SignatureType> values = <SignatureType> [
    UNKNOWN,
    ECDSA,
    ECDSA_PIDSALTED,
    ECDSA_BLIND,
    ECDSA_BLIND_PIDSALTED,
  ];

  static final $core.Map<$core.int, SignatureType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static SignatureType valueOf($core.int value) => _byValue[value];

  const SignatureType._($core.int v, $core.String n) : super(v, n);
}

