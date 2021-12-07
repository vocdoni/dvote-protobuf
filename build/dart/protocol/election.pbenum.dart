///
//  Generated code. Do not modify.
//  source: protocol/election.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class Privacy_CensusProofs extends $pb.ProtobufEnum {
  static const Privacy_CensusProofs PLAIN = Privacy_CensusProofs._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PLAIN');
  static const Privacy_CensusProofs ZK_SNARKS = Privacy_CensusProofs._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ZK_SNARKS');
  static const Privacy_CensusProofs ZK_SNARKS_PREREGISTER = Privacy_CensusProofs._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ZK_SNARKS_PREREGISTER');

  static const $core.List<Privacy_CensusProofs> values = <Privacy_CensusProofs> [
    PLAIN,
    ZK_SNARKS,
    ZK_SNARKS_PREREGISTER,
  ];

  static final $core.Map<$core.int, Privacy_CensusProofs> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Privacy_CensusProofs? valueOf($core.int value) => _byValue[value];

  const Privacy_CensusProofs._($core.int v, $core.String n) : super(v, n);
}

class Lifecycle_Types extends $pb.ProtobufEnum {
  static const Lifecycle_Types PAUSED_MUTABLE = Lifecycle_Types._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PAUSED_MUTABLE');
  static const Lifecycle_Types PAUSED_MUTABLE_ONCE = Lifecycle_Types._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PAUSED_MUTABLE_ONCE');
  static const Lifecycle_Types STARTED_IMMUTABLE = Lifecycle_Types._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'STARTED_IMMUTABLE');
  static const Lifecycle_Types STARTED_MUTABLE = Lifecycle_Types._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'STARTED_MUTABLE');
  static const Lifecycle_Types AUTOSTART_IMMUTABLE = Lifecycle_Types._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AUTOSTART_IMMUTABLE');
  static const Lifecycle_Types AUTOSTART_MUTABLE = Lifecycle_Types._(5, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AUTOSTART_MUTABLE');

  static const $core.List<Lifecycle_Types> values = <Lifecycle_Types> [
    PAUSED_MUTABLE,
    PAUSED_MUTABLE_ONCE,
    STARTED_IMMUTABLE,
    STARTED_MUTABLE,
    AUTOSTART_IMMUTABLE,
    AUTOSTART_MUTABLE,
  ];

  static final $core.Map<$core.int, Lifecycle_Types> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Lifecycle_Types? valueOf($core.int value) => _byValue[value];

  const Lifecycle_Types._($core.int v, $core.String n) : super(v, n);
}

