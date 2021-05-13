///
//  Generated code. Do not modify.
//  source: vochain/vochain.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

// ignore_for_file: UNDEFINED_SHOWN_NAME
import 'dart:core' as $core;
import 'package:protobuf/protobuf.dart' as $pb;

class TxType extends $pb.ProtobufEnum {
  static const TxType TX_UNKNOWN = TxType._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'TX_UNKNOWN');
  static const TxType NEW_PROCESS = TxType._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'NEW_PROCESS');
  static const TxType SET_PROCESS_STATUS = TxType._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'SET_PROCESS_STATUS');
  static const TxType SET_PROCESS_CENSUS = TxType._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'SET_PROCESS_CENSUS');
  static const TxType SET_PROCESS_QUESTION_INDEX = TxType._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'SET_PROCESS_QUESTION_INDEX');
  static const TxType ADD_PROCESS_KEYS = TxType._(5, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ADD_PROCESS_KEYS');
  static const TxType REVEAL_PROCESS_KEYS = TxType._(6, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'REVEAL_PROCESS_KEYS');
  static const TxType ADD_ORACLE = TxType._(7, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ADD_ORACLE');
  static const TxType REMOVE_ORACLE = TxType._(8, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'REMOVE_ORACLE');
  static const TxType ADD_VALIDATOR = TxType._(9, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ADD_VALIDATOR');
  static const TxType REMOVE_VALIDATOR = TxType._(10, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'REMOVE_VALIDATOR');
  static const TxType VOTE = TxType._(11, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'VOTE');
  static const TxType SET_PROCESS_RESULTS = TxType._(12, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'SET_PROCESS_RESULTS');

  static const $core.List<TxType> values = <TxType> [
    TX_UNKNOWN,
    NEW_PROCESS,
    SET_PROCESS_STATUS,
    SET_PROCESS_CENSUS,
    SET_PROCESS_QUESTION_INDEX,
    ADD_PROCESS_KEYS,
    REVEAL_PROCESS_KEYS,
    ADD_ORACLE,
    REMOVE_ORACLE,
    ADD_VALIDATOR,
    REMOVE_VALIDATOR,
    VOTE,
    SET_PROCESS_RESULTS,
  ];

  static final $core.Map<$core.int, TxType> _byValue = $pb.ProtobufEnum.initByValue(values);
  static TxType valueOf($core.int value) => _byValue[value];

  const TxType._($core.int v, $core.String n) : super(v, n);
}

class ProcessStatus extends $pb.ProtobufEnum {
  static const ProcessStatus PROCESS_UNKNOWN = ProcessStatus._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PROCESS_UNKNOWN');
  static const ProcessStatus READY = ProcessStatus._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'READY');
  static const ProcessStatus ENDED = ProcessStatus._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ENDED');
  static const ProcessStatus CANCELED = ProcessStatus._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'CANCELED');
  static const ProcessStatus PAUSED = ProcessStatus._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'PAUSED');
  static const ProcessStatus RESULTS = ProcessStatus._(5, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'RESULTS');

  static const $core.List<ProcessStatus> values = <ProcessStatus> [
    PROCESS_UNKNOWN,
    READY,
    ENDED,
    CANCELED,
    PAUSED,
    RESULTS,
  ];

  static final $core.Map<$core.int, ProcessStatus> _byValue = $pb.ProtobufEnum.initByValue(values);
  static ProcessStatus valueOf($core.int value) => _byValue[value];

  const ProcessStatus._($core.int v, $core.String n) : super(v, n);
}

class CensusOrigin extends $pb.ProtobufEnum {
  static const CensusOrigin CENSUS_UNKNOWN = CensusOrigin._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'CENSUS_UNKNOWN');
  static const CensusOrigin OFF_CHAIN_TREE = CensusOrigin._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'OFF_CHAIN_TREE');
  static const CensusOrigin OFF_CHAIN_TREE_WEIGHTED = CensusOrigin._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'OFF_CHAIN_TREE_WEIGHTED');
  static const CensusOrigin OFF_CHAIN_CA = CensusOrigin._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'OFF_CHAIN_CA');
  static const CensusOrigin ERC20 = CensusOrigin._(11, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ERC20');
  static const CensusOrigin ERC721 = CensusOrigin._(12, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ERC721');
  static const CensusOrigin ERC1155 = CensusOrigin._(13, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ERC1155');
  static const CensusOrigin ERC777 = CensusOrigin._(14, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ERC777');
  static const CensusOrigin MINI_ME = CensusOrigin._(15, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'MINI_ME');

  static const $core.List<CensusOrigin> values = <CensusOrigin> [
    CENSUS_UNKNOWN,
    OFF_CHAIN_TREE,
    OFF_CHAIN_TREE_WEIGHTED,
    OFF_CHAIN_CA,
    ERC20,
    ERC721,
    ERC1155,
    ERC777,
    MINI_ME,
  ];

  static final $core.Map<$core.int, CensusOrigin> _byValue = $pb.ProtobufEnum.initByValue(values);
  static CensusOrigin valueOf($core.int value) => _byValue[value];

  const CensusOrigin._($core.int v, $core.String n) : super(v, n);
}

class ProofCA_Type extends $pb.ProtobufEnum {
  static const ProofCA_Type UNKNOWN = ProofCA_Type._(0, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'UNKNOWN');
  static const ProofCA_Type ECDSA = ProofCA_Type._(1, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ECDSA');
  static const ProofCA_Type ECDSA_PIDSALTED = ProofCA_Type._(2, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ECDSA_PIDSALTED');
  static const ProofCA_Type ECDSA_BLIND = ProofCA_Type._(3, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ECDSA_BLIND');
  static const ProofCA_Type ECDSA_BLIND_PIDSALTED = ProofCA_Type._(4, const $core.bool.fromEnvironment('protobuf.omit_enum_names') ? '' : 'ECDSA_BLIND_PIDSALTED');

  static const $core.List<ProofCA_Type> values = <ProofCA_Type> [
    UNKNOWN,
    ECDSA,
    ECDSA_PIDSALTED,
    ECDSA_BLIND,
    ECDSA_BLIND_PIDSALTED,
  ];

  static final $core.Map<$core.int, ProofCA_Type> _byValue = $pb.ProtobufEnum.initByValue(values);
  static ProofCA_Type valueOf($core.int value) => _byValue[value];

  const ProofCA_Type._($core.int v, $core.String n) : super(v, n);
}

