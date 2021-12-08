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
    const {'1': 'proposalResults', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v2.Result', '10': 'proposalResults'},
  ],
};

/// Descriptor for `Results`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List resultsDescriptor = $convert.base64Decode('CgdSZXN1bHRzEh4KCmVsZWN0aW9uSWQYASABKAxSCmVsZWN0aW9uSWQSQAoPcHJvcG9zYWxSZXN1bHRzGAIgAygLMhYuZHZvdGUudHlwZXMudjIuUmVzdWx0Ug9wcm9wb3NhbFJlc3VsdHM=');
@$core.Deprecated('Use resultDescriptor instead')
const Result$json = const {
  '1': 'Result',
  '2': const [
    const {'1': 'pendingResult', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.PendingResults', '9': 0, '10': 'pendingResult'},
    const {'1': 'approvalResult', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.ApprovalResult', '9': 0, '10': 'approvalResult'},
    const {'1': 'singleChoiceResult', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v2.SingleChoiceResult', '9': 0, '10': 'singleChoiceResult'},
    const {'1': 'quadraticResult', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v2.QuadraticResult', '9': 0, '10': 'quadraticResult'},
    const {'1': 'rankedResult', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v2.RankedResult', '9': 0, '10': 'rankedResult'},
    const {'1': 'spreadResult', '3': 6, '4': 1, '5': 11, '6': '.dvote.types.v2.SpreadResult', '9': 0, '10': 'spreadResult'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `Result`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List resultDescriptor = $convert.base64Decode('CgZSZXN1bHQSRgoNcGVuZGluZ1Jlc3VsdBgBIAEoCzIeLmR2b3RlLnR5cGVzLnYyLlBlbmRpbmdSZXN1bHRzSABSDXBlbmRpbmdSZXN1bHQSSAoOYXBwcm92YWxSZXN1bHQYAiABKAsyHi5kdm90ZS50eXBlcy52Mi5BcHByb3ZhbFJlc3VsdEgAUg5hcHByb3ZhbFJlc3VsdBJUChJzaW5nbGVDaG9pY2VSZXN1bHQYAyABKAsyIi5kdm90ZS50eXBlcy52Mi5TaW5nbGVDaG9pY2VSZXN1bHRIAFISc2luZ2xlQ2hvaWNlUmVzdWx0EksKD3F1YWRyYXRpY1Jlc3VsdBgEIAEoCzIfLmR2b3RlLnR5cGVzLnYyLlF1YWRyYXRpY1Jlc3VsdEgAUg9xdWFkcmF0aWNSZXN1bHQSQgoMcmFua2VkUmVzdWx0GAUgASgLMhwuZHZvdGUudHlwZXMudjIuUmFua2VkUmVzdWx0SABSDHJhbmtlZFJlc3VsdBJCCgxzcHJlYWRSZXN1bHQYBiABKAsyHC5kdm90ZS50eXBlcy52Mi5TcHJlYWRSZXN1bHRIAFIMc3ByZWFkUmVzdWx0QgYKBGJvZHk=');
@$core.Deprecated('Use pendingResultsDescriptor instead')
const PendingResults$json = const {
  '1': 'PendingResults',
};

/// Descriptor for `PendingResults`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List pendingResultsDescriptor = $convert.base64Decode('Cg5QZW5kaW5nUmVzdWx0cw==');
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
    const {'1': 'choices', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v2.RankedResult.RankedChoiceResult', '10': 'choices'},
  ],
  '3': const [RankedResult_RankedChoiceResult$json],
};

@$core.Deprecated('Use rankedResultDescriptor instead')
const RankedResult_RankedChoiceResult$json = const {
  '1': 'RankedChoiceResult',
  '2': const [
    const {'1': 'entries', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v2.RankedResult.RankedChoiceResult.RankedChoicePositionResult', '10': 'entries'},
  ],
  '3': const [RankedResult_RankedChoiceResult_RankedChoicePositionResult$json],
};

@$core.Deprecated('Use rankedResultDescriptor instead')
const RankedResult_RankedChoiceResult_RankedChoicePositionResult$json = const {
  '1': 'RankedChoicePositionResult',
  '2': const [
    const {'1': 'position', '3': 1, '4': 1, '5': 5, '10': 'position'},
    const {'1': 'points', '3': 2, '4': 1, '5': 9, '10': 'points'},
  ],
};

/// Descriptor for `RankedResult`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List rankedResultDescriptor = $convert.base64Decode('CgxSYW5rZWRSZXN1bHQSSQoHY2hvaWNlcxgBIAMoCzIvLmR2b3RlLnR5cGVzLnYyLlJhbmtlZFJlc3VsdC5SYW5rZWRDaG9pY2VSZXN1bHRSB2Nob2ljZXMazAEKElJhbmtlZENob2ljZVJlc3VsdBJkCgdlbnRyaWVzGAEgAygLMkouZHZvdGUudHlwZXMudjIuUmFua2VkUmVzdWx0LlJhbmtlZENob2ljZVJlc3VsdC5SYW5rZWRDaG9pY2VQb3NpdGlvblJlc3VsdFIHZW50cmllcxpQChpSYW5rZWRDaG9pY2VQb3NpdGlvblJlc3VsdBIaCghwb3NpdGlvbhgBIAEoBVIIcG9zaXRpb24SFgoGcG9pbnRzGAIgASgJUgZwb2ludHM=');
@$core.Deprecated('Use spreadResultDescriptor instead')
const SpreadResult$json = const {
  '1': 'SpreadResult',
  '2': const [
    const {'1': 'points', '3': 1, '4': 3, '5': 9, '10': 'points'},
  ],
};

/// Descriptor for `SpreadResult`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List spreadResultDescriptor = $convert.base64Decode('CgxTcHJlYWRSZXN1bHQSFgoGcG9pbnRzGAEgAygJUgZwb2ludHM=');
