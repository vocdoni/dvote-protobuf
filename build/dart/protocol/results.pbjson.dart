///
//  Generated code. Do not modify.
//  source: protocol/results.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use resultsDescriptor instead')
const Results$json = const {
  '1': 'Results',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
    const {'1': 'results', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v2.Result', '10': 'results'},
  ],
};

/// Descriptor for `Results`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List resultsDescriptor = $convert.base64Decode('CgdSZXN1bHRzEh4KCmVsZWN0aW9uSWQYASABKAxSCmVsZWN0aW9uSWQSMAoHcmVzdWx0cxgCIAMoCzIWLmR2b3RlLnR5cGVzLnYyLlJlc3VsdFIHcmVzdWx0cw==');
@$core.Deprecated('Use resultDescriptor instead')
const Result$json = const {
  '1': 'Result',
  '2': const [
    const {'1': 'approvalRresult', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.ApprovalResult', '9': 0, '10': 'approvalRresult'},
    const {'1': 'singleChoiceResult', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.SingleChoiceResult', '9': 0, '10': 'singleChoiceResult'},
    const {'1': 'quadraticResult', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v2.QuadraticResult', '9': 0, '10': 'quadraticResult'},
    const {'1': 'rankedResult', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v2.RankedResult', '9': 0, '10': 'rankedResult'},
    const {'1': 'spreadResult', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v2.SpreadResult', '9': 0, '10': 'spreadResult'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `Result`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List resultDescriptor = $convert.base64Decode('CgZSZXN1bHQSSgoPYXBwcm92YWxScmVzdWx0GAEgASgLMh4uZHZvdGUudHlwZXMudjIuQXBwcm92YWxSZXN1bHRIAFIPYXBwcm92YWxScmVzdWx0ElQKEnNpbmdsZUNob2ljZVJlc3VsdBgCIAEoCzIiLmR2b3RlLnR5cGVzLnYyLlNpbmdsZUNob2ljZVJlc3VsdEgAUhJzaW5nbGVDaG9pY2VSZXN1bHQSSwoPcXVhZHJhdGljUmVzdWx0GAMgASgLMh8uZHZvdGUudHlwZXMudjIuUXVhZHJhdGljUmVzdWx0SABSD3F1YWRyYXRpY1Jlc3VsdBJCCgxyYW5rZWRSZXN1bHQYBCABKAsyHC5kdm90ZS50eXBlcy52Mi5SYW5rZWRSZXN1bHRIAFIMcmFua2VkUmVzdWx0EkIKDHNwcmVhZFJlc3VsdBgFIAEoCzIcLmR2b3RlLnR5cGVzLnYyLlNwcmVhZFJlc3VsdEgAUgxzcHJlYWRSZXN1bHRCBgoEYm9keQ==');
@$core.Deprecated('Use approvalResultDescriptor instead')
const ApprovalResult$json = const {
  '1': 'ApprovalResult',
  '2': const [
    const {'1': 'rejected', '3': 1, '4': 1, '5': 9, '10': 'rejected'},
    const {'1': 'approved', '3': 2, '4': 1, '5': 9, '10': 'approved'},
  ],
};

/// Descriptor for `ApprovalResult`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List approvalResultDescriptor = $convert.base64Decode('Cg5BcHByb3ZhbFJlc3VsdBIaCghyZWplY3RlZBgBIAEoCVIIcmVqZWN0ZWQSGgoIYXBwcm92ZWQYAiABKAlSCGFwcHJvdmVk');
@$core.Deprecated('Use singleChoiceResultDescriptor instead')
const SingleChoiceResult$json = const {
  '1': 'SingleChoiceResult',
  '2': const [
    const {'1': 'votes', '3': 1, '4': 3, '5': 9, '10': 'votes'},
  ],
};

/// Descriptor for `SingleChoiceResult`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List singleChoiceResultDescriptor = $convert.base64Decode('ChJTaW5nbGVDaG9pY2VSZXN1bHQSFAoFdm90ZXMYASADKAlSBXZvdGVz');
@$core.Deprecated('Use quadraticResultDescriptor instead')
const QuadraticResult$json = const {
  '1': 'QuadraticResult',
  '2': const [
    const {'1': 'points', '3': 1, '4': 3, '5': 9, '10': 'points'},
  ],
};

/// Descriptor for `QuadraticResult`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List quadraticResultDescriptor = $convert.base64Decode('Cg9RdWFkcmF0aWNSZXN1bHQSFgoGcG9pbnRzGAEgAygJUgZwb2ludHM=');
@$core.Deprecated('Use rankedResultDescriptor instead')
const RankedResult$json = const {
  '1': 'RankedResult',
  '2': const [
    const {'1': 'entries', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v2.RankedResult.RankedEntryResult', '10': 'entries'},
  ],
  '3': const [RankedResult_RankedEntryResult$json],
};

@$core.Deprecated('Use rankedResultDescriptor instead')
const RankedResult_RankedEntryResult$json = const {
  '1': 'RankedEntryResult',
  '2': const [
    const {'1': 'results', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v2.RankedResult.RankedEntryResult', '10': 'results'},
  ],
  '3': const [RankedResult_RankedEntryResult_RankedEntryPositionResult$json],
};

@$core.Deprecated('Use rankedResultDescriptor instead')
const RankedResult_RankedEntryResult_RankedEntryPositionResult$json = const {
  '1': 'RankedEntryPositionResult',
  '2': const [
    const {'1': 'position', '3': 1, '4': 1, '5': 5, '10': 'position'},
    const {'1': 'points', '3': 2, '4': 1, '5': 9, '10': 'points'},
  ],
};

/// Descriptor for `RankedResult`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List rankedResultDescriptor = $convert.base64Decode('CgxSYW5rZWRSZXN1bHQSSAoHZW50cmllcxgBIAMoCzIuLmR2b3RlLnR5cGVzLnYyLlJhbmtlZFJlc3VsdC5SYW5rZWRFbnRyeVJlc3VsdFIHZW50cmllcxquAQoRUmFua2VkRW50cnlSZXN1bHQSSAoHcmVzdWx0cxgBIAMoCzIuLmR2b3RlLnR5cGVzLnYyLlJhbmtlZFJlc3VsdC5SYW5rZWRFbnRyeVJlc3VsdFIHcmVzdWx0cxpPChlSYW5rZWRFbnRyeVBvc2l0aW9uUmVzdWx0EhoKCHBvc2l0aW9uGAEgASgFUghwb3NpdGlvbhIWCgZwb2ludHMYAiABKAlSBnBvaW50cw==');
@$core.Deprecated('Use spreadResultDescriptor instead')
const SpreadResult$json = const {
  '1': 'SpreadResult',
  '2': const [
    const {'1': 'points', '3': 1, '4': 3, '5': 9, '10': 'points'},
  ],
};

/// Descriptor for `SpreadResult`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List spreadResultDescriptor = $convert.base64Decode('CgxTcHJlYWRSZXN1bHQSFgoGcG9pbnRzGAEgAygJUgZwb2ludHM=');
