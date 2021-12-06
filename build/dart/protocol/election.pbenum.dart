///
//  Generated code. Do not modify.
//  source: protocol/election.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class Lifecycle extends $pb.ProtobufEnum {
  static const Lifecycle PAUSED_MUTABLE = Lifecycle._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PAUSED_MUTABLE');
  static const Lifecycle PAUSED_MUTABLE_ONCE = Lifecycle._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PAUSED_MUTABLE_ONCE');
  static const Lifecycle STARTED_IMMUTABLE = Lifecycle._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'STARTED_IMMUTABLE');
  static const Lifecycle STARTED_MUTABLE = Lifecycle._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'STARTED_MUTABLE');
  static const Lifecycle AUTOSTART_IMMUTABLE = Lifecycle._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AUTOSTART_IMMUTABLE');
  static const Lifecycle AUTOSTART_MUTABLE = Lifecycle._(5, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'AUTOSTART_MUTABLE');

  static const $core.List<Lifecycle> values = <Lifecycle> [
    PAUSED_MUTABLE,
    PAUSED_MUTABLE_ONCE,
    STARTED_IMMUTABLE,
    STARTED_MUTABLE,
    AUTOSTART_IMMUTABLE,
    AUTOSTART_MUTABLE,
  ];

  static final $core.Map<$core.int, Lifecycle> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Lifecycle? valueOf($core.int value) => _byValue[value];

  const Lifecycle._($core.int v, $core.String n) : super(v, n);
}

class Privacy_VoteAnonimity extends $pb.ProtobufEnum {
  static const Privacy_VoteAnonimity NONE = Privacy_VoteAnonimity._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'NONE');
  static const Privacy_VoteAnonimity ZK_SNARKS = Privacy_VoteAnonimity._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ZK_SNARKS');
  static const Privacy_VoteAnonimity ZK_SNARKS_PREREGISTER = Privacy_VoteAnonimity._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ZK_SNARKS_PREREGISTER');

  static const $core.List<Privacy_VoteAnonimity> values = <Privacy_VoteAnonimity> [
    NONE,
    ZK_SNARKS,
    ZK_SNARKS_PREREGISTER,
  ];

  static final $core.Map<$core.int, Privacy_VoteAnonimity> _byValue = $pb.ProtobufEnum.initByValue(values);
  static Privacy_VoteAnonimity? valueOf($core.int value) => _byValue[value];

  const Privacy_VoteAnonimity._($core.int v, $core.String n) : super(v, n);
}

