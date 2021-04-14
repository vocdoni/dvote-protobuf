///
//  Generated code. Do not modify.
//  source: client-store/wallet.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class Wallet_AuthMethod extends $pb.ProtobufEnum {
  static const Wallet_AuthMethod PASS = Wallet_AuthMethod._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PASS');
  static const Wallet_AuthMethod PIN = Wallet_AuthMethod._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PIN');

  static const $core.List<Wallet_AuthMethod> values = <Wallet_AuthMethod> [
    PASS,
    PIN,
  ];

  static final $core.Map<$core.int, Wallet_AuthMethod> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Wallet_AuthMethod? valueOf($core.int value) => _byValue[value];

  const Wallet_AuthMethod._($core.int v, $core.String n) : super(v, n);
}

