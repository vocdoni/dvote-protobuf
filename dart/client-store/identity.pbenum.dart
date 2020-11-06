///
//  Generated code. Do not modify.
//  source: client-store/identity.proto
//
// @dart = 2.3
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME,UNUSED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class Identity_Type extends $pb.ProtobufEnum {
  static const Identity_Type ECDSA = Identity_Type._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ECDSA');

  static const $core.List<Identity_Type> values = <Identity_Type> [
    ECDSA,
  ];

  static final $core.Map<$core.int, Identity_Type> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Identity_Type valueOf($core.int value) => _byValue[value];

  const Identity_Type._($core.int v, $core.String n) : super(v, n);
}

class PeerIdentity_Type extends $pb.ProtobufEnum {
  static const PeerIdentity_Type ECDSA = PeerIdentity_Type._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ECDSA');

  static const $core.List<PeerIdentity_Type> values = <PeerIdentity_Type> [
    ECDSA,
  ];

  static final $core.Map<$core.int, PeerIdentity_Type> _byValue = $pb.ProtobufEnum.initByValue(values);
  static PeerIdentity_Type valueOf($core.int value) => _byValue[value];

  const PeerIdentity_Type._($core.int v, $core.String n) : super(v, n);
}

