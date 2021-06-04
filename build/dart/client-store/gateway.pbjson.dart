///
//  Generated code. Do not modify.
//  source: client-store/gateway.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use bootNodeGatewaysDescriptor instead')
const BootNodeGateways$json = const {
  '1': 'BootNodeGateways',
  '2': const [
    const {'1': 'homestead', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v1.BootNodeGateways.NetworkNodes', '10': 'homestead'},
    const {'1': 'goerli', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.BootNodeGateways.NetworkNodes', '10': 'goerli'},
    const {'1': 'xdai', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v1.BootNodeGateways.NetworkNodes', '10': 'xdai'},
    const {'1': 'sokol', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v1.BootNodeGateways.NetworkNodes', '10': 'sokol'},
    const {'1': 'rinkeby', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v1.BootNodeGateways.NetworkNodes', '10': 'rinkeby'},
    const {'1': 'meta', '3': 100, '4': 3, '5': 11, '6': '.dvote.types.v1.BootNodeGateways.MetaEntry', '10': 'meta'},
  ],
  '3': const [BootNodeGateways_NetworkNodes$json, BootNodeGateways_MetaEntry$json],
};

@$core.Deprecated('Use bootNodeGatewaysDescriptor instead')
const BootNodeGateways_NetworkNodes$json = const {
  '1': 'NetworkNodes',
  '2': const [
    const {'1': 'dvote', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.BootNodeGateways.NetworkNodes.DVote', '10': 'dvote'},
    const {'1': 'web3', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v1.BootNodeGateways.NetworkNodes.Web3', '10': 'web3'},
  ],
  '3': const [BootNodeGateways_NetworkNodes_DVote$json, BootNodeGateways_NetworkNodes_Web3$json],
};

@$core.Deprecated('Use bootNodeGatewaysDescriptor instead')
const BootNodeGateways_NetworkNodes_DVote$json = const {
  '1': 'DVote',
  '2': const [
    const {'1': 'uri', '3': 1, '4': 1, '5': 9, '10': 'uri'},
    const {'1': 'apis', '3': 2, '4': 3, '5': 9, '10': 'apis'},
    const {'1': 'pubKey', '3': 3, '4': 1, '5': 9, '10': 'pubKey'},
  ],
};

@$core.Deprecated('Use bootNodeGatewaysDescriptor instead')
const BootNodeGateways_NetworkNodes_Web3$json = const {
  '1': 'Web3',
  '3': const [BootNodeGateways_NetworkNodes_Web3_Endpoints$json, BootNodeGateways_NetworkNodes_Web3_Contracts$json],
};

@$core.Deprecated('Use bootNodeGatewaysDescriptor instead')
const BootNodeGateways_NetworkNodes_Web3_Endpoints$json = const {
  '1': 'Endpoints',
  '2': const [
    const {'1': 'uri', '3': 1, '4': 1, '5': 9, '10': 'uri'},
  ],
};

@$core.Deprecated('Use bootNodeGatewaysDescriptor instead')
const BootNodeGateways_NetworkNodes_Web3_Contracts$json = const {
  '1': 'Contracts',
  '2': const [
    const {'1': 'ensPublicRegistry', '3': 1, '4': 1, '5': 9, '10': 'ensPublicRegistry'},
    const {'1': 'ensPublicResolver', '3': 2, '4': 1, '5': 9, '10': 'ensPublicResolver'},
    const {'1': 'entityResolver', '3': 3, '4': 1, '5': 9, '10': 'entityResolver'},
    const {'1': 'genesis', '3': 4, '4': 1, '5': 9, '10': 'genesis'},
    const {'1': 'namespaces', '3': 5, '4': 1, '5': 9, '10': 'namespaces'},
    const {'1': 'processes', '3': 6, '4': 1, '5': 9, '10': 'processes'},
    const {'1': 'tokenStorageProofs', '3': 7, '4': 1, '5': 9, '10': 'tokenStorageProofs'},
    const {'1': 'results', '3': 8, '4': 1, '5': 9, '10': 'results'},
  ],
};

@$core.Deprecated('Use bootNodeGatewaysDescriptor instead')
const BootNodeGateways_MetaEntry$json = const {
  '1': 'MetaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

/// Descriptor for `BootNodeGateways`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List bootNodeGatewaysDescriptor = $convert.base64Decode('ChBCb290Tm9kZUdhdGV3YXlzEksKCWhvbWVzdGVhZBgBIAEoCzItLmR2b3RlLnR5cGVzLnYxLkJvb3ROb2RlR2F0ZXdheXMuTmV0d29ya05vZGVzUglob21lc3RlYWQSRQoGZ29lcmxpGAIgASgLMi0uZHZvdGUudHlwZXMudjEuQm9vdE5vZGVHYXRld2F5cy5OZXR3b3JrTm9kZXNSBmdvZXJsaRJBCgR4ZGFpGAMgASgLMi0uZHZvdGUudHlwZXMudjEuQm9vdE5vZGVHYXRld2F5cy5OZXR3b3JrTm9kZXNSBHhkYWkSQwoFc29rb2wYBCABKAsyLS5kdm90ZS50eXBlcy52MS5Cb290Tm9kZUdhdGV3YXlzLk5ldHdvcmtOb2Rlc1IFc29rb2wSRwoHcmlua2VieRgFIAEoCzItLmR2b3RlLnR5cGVzLnYxLkJvb3ROb2RlR2F0ZXdheXMuTmV0d29ya05vZGVzUgdyaW5rZWJ5Ej4KBG1ldGEYZCADKAsyKi5kdm90ZS50eXBlcy52MS5Cb290Tm9kZUdhdGV3YXlzLk1ldGFFbnRyeVIEbWV0YRrEBAoMTmV0d29ya05vZGVzEkkKBWR2b3RlGAEgAygLMjMuZHZvdGUudHlwZXMudjEuQm9vdE5vZGVHYXRld2F5cy5OZXR3b3JrTm9kZXMuRFZvdGVSBWR2b3RlEkYKBHdlYjMYAiADKAsyMi5kdm90ZS50eXBlcy52MS5Cb290Tm9kZUdhdGV3YXlzLk5ldHdvcmtOb2Rlcy5XZWIzUgR3ZWIzGkUKBURWb3RlEhAKA3VyaRgBIAEoCVIDdXJpEhIKBGFwaXMYAiADKAlSBGFwaXMSFgoGcHViS2V5GAMgASgJUgZwdWJLZXka2QIKBFdlYjMaHQoJRW5kcG9pbnRzEhAKA3VyaRgBIAEoCVIDdXJpGrECCglDb250cmFjdHMSLAoRZW5zUHVibGljUmVnaXN0cnkYASABKAlSEWVuc1B1YmxpY1JlZ2lzdHJ5EiwKEWVuc1B1YmxpY1Jlc29sdmVyGAIgASgJUhFlbnNQdWJsaWNSZXNvbHZlchImCg5lbnRpdHlSZXNvbHZlchgDIAEoCVIOZW50aXR5UmVzb2x2ZXISGAoHZ2VuZXNpcxgEIAEoCVIHZ2VuZXNpcxIeCgpuYW1lc3BhY2VzGAUgASgJUgpuYW1lc3BhY2VzEhwKCXByb2Nlc3NlcxgGIAEoCVIJcHJvY2Vzc2VzEi4KEnRva2VuU3RvcmFnZVByb29mcxgHIAEoCVISdG9rZW5TdG9yYWdlUHJvb2ZzEhgKB3Jlc3VsdHMYCCABKAlSB3Jlc3VsdHMaNwoJTWV0YUVudHJ5EhAKA2tleRgBIAEoCVIDa2V5EhQKBXZhbHVlGAIgASgJUgV2YWx1ZToCOAE=');
