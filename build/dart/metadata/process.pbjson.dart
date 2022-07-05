///
//  Generated code. Do not modify.
//  source: metadata/process.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use processMetadataStoreDescriptor instead')
const ProcessMetadataStore$json = const {
  '1': 'ProcessMetadataStore',
  '2': const [
    const {'1': 'items', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata', '10': 'items'},
  ],
};

/// Descriptor for `ProcessMetadataStore`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List processMetadataStoreDescriptor = $convert.base64Decode('ChRQcm9jZXNzTWV0YWRhdGFTdG9yZRI1CgVpdGVtcxgBIAMoCzIfLmR2b3RlLnR5cGVzLnYxLlByb2Nlc3NNZXRhZGF0YVIFaXRlbXM=');
@$core.Deprecated('Use processMetadataDescriptor instead')
const ProcessMetadata$json = const {
  '1': 'ProcessMetadata',
  '2': const [
    const {'1': 'version', '3': 1, '4': 1, '5': 9, '10': 'version'},
    const {'1': 'title', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.TitleEntry', '10': 'title'},
    const {'1': 'description', '3': 3, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.DescriptionEntry', '10': 'description'},
    const {'1': 'media', '3': 4, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.MediaEntry', '10': 'media'},
    const {'1': 'questions', '3': 5, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.Question', '10': 'questions'},
    const {'1': 'results', '3': 6, '4': 1, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.Results', '10': 'results'},
    const {'1': 'meta', '3': 100, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.MetaEntry', '10': 'meta'},
  ],
  '3': const [ProcessMetadata_TitleEntry$json, ProcessMetadata_DescriptionEntry$json, ProcessMetadata_MediaEntry$json, ProcessMetadata_Question$json, ProcessMetadata_Results$json, ProcessMetadata_MetaEntry$json],
};

@$core.Deprecated('Use processMetadataDescriptor instead')
const ProcessMetadata_TitleEntry$json = const {
  '1': 'TitleEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use processMetadataDescriptor instead')
const ProcessMetadata_DescriptionEntry$json = const {
  '1': 'DescriptionEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use processMetadataDescriptor instead')
const ProcessMetadata_MediaEntry$json = const {
  '1': 'MediaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use processMetadataDescriptor instead')
const ProcessMetadata_Question$json = const {
  '1': 'Question',
  '2': const [
    const {'1': 'title', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.Question.TitleEntry', '10': 'title'},
    const {'1': 'description', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.Question.DescriptionEntry', '10': 'description'},
    const {'1': 'choices', '3': 3, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.Question.VoteOption', '10': 'choices'},
  ],
  '3': const [ProcessMetadata_Question_TitleEntry$json, ProcessMetadata_Question_DescriptionEntry$json, ProcessMetadata_Question_VoteOption$json],
};

@$core.Deprecated('Use processMetadataDescriptor instead')
const ProcessMetadata_Question_TitleEntry$json = const {
  '1': 'TitleEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use processMetadataDescriptor instead')
const ProcessMetadata_Question_DescriptionEntry$json = const {
  '1': 'DescriptionEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use processMetadataDescriptor instead')
const ProcessMetadata_Question_VoteOption$json = const {
  '1': 'VoteOption',
  '2': const [
    const {'1': 'title', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.Question.VoteOption.TitleEntry', '10': 'title'},
    const {'1': 'value', '3': 2, '4': 1, '5': 5, '10': 'value'},
  ],
  '3': const [ProcessMetadata_Question_VoteOption_TitleEntry$json],
};

@$core.Deprecated('Use processMetadataDescriptor instead')
const ProcessMetadata_Question_VoteOption_TitleEntry$json = const {
  '1': 'TitleEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use processMetadataDescriptor instead')
const ProcessMetadata_Results$json = const {
  '1': 'Results',
  '2': const [
    const {'1': 'aggregation', '3': 1, '4': 1, '5': 9, '10': 'aggregation'},
    const {'1': 'display', '3': 2, '4': 1, '5': 9, '10': 'display'},
  ],
};

@$core.Deprecated('Use processMetadataDescriptor instead')
const ProcessMetadata_MetaEntry$json = const {
  '1': 'MetaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

/// Descriptor for `ProcessMetadata`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List processMetadataDescriptor = $convert.base64Decode('Cg9Qcm9jZXNzTWV0YWRhdGESGAoHdmVyc2lvbhgBIAEoCVIHdmVyc2lvbhJACgV0aXRsZRgCIAMoCzIqLmR2b3RlLnR5cGVzLnYxLlByb2Nlc3NNZXRhZGF0YS5UaXRsZUVudHJ5UgV0aXRsZRJSCgtkZXNjcmlwdGlvbhgDIAMoCzIwLmR2b3RlLnR5cGVzLnYxLlByb2Nlc3NNZXRhZGF0YS5EZXNjcmlwdGlvbkVudHJ5UgtkZXNjcmlwdGlvbhJACgVtZWRpYRgEIAMoCzIqLmR2b3RlLnR5cGVzLnYxLlByb2Nlc3NNZXRhZGF0YS5NZWRpYUVudHJ5UgVtZWRpYRJGCglxdWVzdGlvbnMYBSADKAsyKC5kdm90ZS50eXBlcy52MS5Qcm9jZXNzTWV0YWRhdGEuUXVlc3Rpb25SCXF1ZXN0aW9ucxJBCgdyZXN1bHRzGAYgASgLMicuZHZvdGUudHlwZXMudjEuUHJvY2Vzc01ldGFkYXRhLlJlc3VsdHNSB3Jlc3VsdHMSPQoEbWV0YRhkIAMoCzIpLmR2b3RlLnR5cGVzLnYxLlByb2Nlc3NNZXRhZGF0YS5NZXRhRW50cnlSBG1ldGEaOAoKVGl0bGVFbnRyeRIQCgNrZXkYASABKAlSA2tleRIUCgV2YWx1ZRgCIAEoCVIFdmFsdWU6AjgBGj4KEERlc2NyaXB0aW9uRW50cnkSEAoDa2V5GAEgASgJUgNrZXkSFAoFdmFsdWUYAiABKAlSBXZhbHVlOgI4ARo4CgpNZWRpYUVudHJ5EhAKA2tleRgBIAEoCVIDa2V5EhQKBXZhbHVlGAIgASgJUgV2YWx1ZToCOAEasAQKCFF1ZXN0aW9uEkkKBXRpdGxlGAEgAygLMjMuZHZvdGUudHlwZXMudjEuUHJvY2Vzc01ldGFkYXRhLlF1ZXN0aW9uLlRpdGxlRW50cnlSBXRpdGxlElsKC2Rlc2NyaXB0aW9uGAIgAygLMjkuZHZvdGUudHlwZXMudjEuUHJvY2Vzc01ldGFkYXRhLlF1ZXN0aW9uLkRlc2NyaXB0aW9uRW50cnlSC2Rlc2NyaXB0aW9uEk0KB2Nob2ljZXMYAyADKAsyMy5kdm90ZS50eXBlcy52MS5Qcm9jZXNzTWV0YWRhdGEuUXVlc3Rpb24uVm90ZU9wdGlvblIHY2hvaWNlcxo4CgpUaXRsZUVudHJ5EhAKA2tleRgBIAEoCVIDa2V5EhQKBXZhbHVlGAIgASgJUgV2YWx1ZToCOAEaPgoQRGVzY3JpcHRpb25FbnRyeRIQCgNrZXkYASABKAlSA2tleRIUCgV2YWx1ZRgCIAEoCVIFdmFsdWU6AjgBGrIBCgpWb3RlT3B0aW9uElQKBXRpdGxlGAEgAygLMj4uZHZvdGUudHlwZXMudjEuUHJvY2Vzc01ldGFkYXRhLlF1ZXN0aW9uLlZvdGVPcHRpb24uVGl0bGVFbnRyeVIFdGl0bGUSFAoFdmFsdWUYAiABKAVSBXZhbHVlGjgKClRpdGxlRW50cnkSEAoDa2V5GAEgASgJUgNrZXkSFAoFdmFsdWUYAiABKAlSBXZhbHVlOgI4ARpFCgdSZXN1bHRzEiAKC2FnZ3JlZ2F0aW9uGAEgASgJUgthZ2dyZWdhdGlvbhIYCgdkaXNwbGF5GAIgASgJUgdkaXNwbGF5GjcKCU1ldGFFbnRyeRIQCgNrZXkYASABKAlSA2tleRIUCgV2YWx1ZRgCIAEoCVIFdmFsdWU6AjgB');
