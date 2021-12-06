///
//  Generated code. Do not modify.
//  source: protocol/ballot.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class SignedBallot_Signatures extends $pb.ProtobufEnum {
  static const SignedBallot_Signatures None = SignedBallot_Signatures._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'None');
  static const SignedBallot_Signatures Secp256k1 = SignedBallot_Signatures._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'Secp256k1');

  static const $core.List<SignedBallot_Signatures> values = <SignedBallot_Signatures> [
    None,
    Secp256k1,
  ];

  static final $core.Map<$core.int, SignedBallot_Signatures> _byValue = $pb.ProtobufEnum.initByValue(values);
  static SignedBallot_Signatures? valueOf($core.int value) => _byValue[value];

  const SignedBallot_Signatures._($core.int v, $core.String n) : super(v, n);
}

