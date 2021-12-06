///
//  Generated code. Do not modify.
//  source: protocol/enums.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class ProposalStatus extends $pb.ProtobufEnum {
  static const ProposalStatus UNKNOWN_PROPOSAL_STATUS = ProposalStatus._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'UNKNOWN_PROPOSAL_STATUS');
  static const ProposalStatus READY = ProposalStatus._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'READY');
  static const ProposalStatus ENDED = ProposalStatus._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ENDED');
  static const ProposalStatus CANCELED = ProposalStatus._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'CANCELED');
  static const ProposalStatus PAUSED = ProposalStatus._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PAUSED');
  static const ProposalStatus RESULTS = ProposalStatus._(5, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'RESULTS');

  static const $core.List<ProposalStatus> values = <ProposalStatus> [
    UNKNOWN_PROPOSAL_STATUS,
    READY,
    ENDED,
    CANCELED,
    PAUSED,
    RESULTS,
  ];

  static final $core.Map<$core.int, ProposalStatus> _byValue = $pb.ProtobufEnum.initByValue(values);
  static ProposalStatus? valueOf($core.int value) => _byValue[value];

  const ProposalStatus._($core.int v, $core.String n) : super(v, n);
}

class CensusOffchainType extends $pb.ProtobufEnum {
  static const CensusOffchainType UNKNOWN_OFFCHAIN_CENSUS_TYPE = CensusOffchainType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'UNKNOWN_OFFCHAIN_CENSUS_TYPE');
  static const CensusOffchainType ARBO_BLAKE2B = CensusOffchainType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ARBO_BLAKE2B');

  static const $core.List<CensusOffchainType> values = <CensusOffchainType> [
    UNKNOWN_OFFCHAIN_CENSUS_TYPE,
    ARBO_BLAKE2B,
  ];

  static final $core.Map<$core.int, CensusOffchainType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static CensusOffchainType? valueOf($core.int value) => _byValue[value];

  const CensusOffchainType._($core.int v, $core.String n) : super(v, n);
}

