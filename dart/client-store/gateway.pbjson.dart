///
//  Generated code. Do not modify.
//  source: client-store/gateway.proto
//
// @dart = 2.3
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

const BootNodeGateways$json = const {
  '1': 'BootNodeGateways',
  '2': const [
    const {'1': 'homestead', '3': 1, '4': 1, '5': 11, '6': '.dvote.BootNodeGateways.NetworkNodes', '10': 'homestead'},
    const {'1': 'goerli', '3': 2, '4': 1, '5': 11, '6': '.dvote.BootNodeGateways.NetworkNodes', '10': 'goerli'},
    const {'1': 'xdai', '3': 3, '4': 1, '5': 11, '6': '.dvote.BootNodeGateways.NetworkNodes', '10': 'xdai'},
    const {'1': 'sokol', '3': 4, '4': 1, '5': 11, '6': '.dvote.BootNodeGateways.NetworkNodes', '10': 'sokol'},
    const {'1': 'meta', '3': 100, '4': 3, '5': 11, '6': '.dvote.BootNodeGateways.MetaEntry', '10': 'meta'},
  ],
  '3': const [BootNodeGateways_NetworkNodes$json, BootNodeGateways_MetaEntry$json],
};

const BootNodeGateways_NetworkNodes$json = const {
  '1': 'NetworkNodes',
  '2': const [
    const {'1': 'dvote', '3': 1, '4': 3, '5': 11, '6': '.dvote.BootNodeGateways.NetworkNodes.DVote', '10': 'dvote'},
    const {'1': 'web3', '3': 2, '4': 3, '5': 11, '6': '.dvote.BootNodeGateways.NetworkNodes.Web3', '10': 'web3'},
  ],
  '3': const [BootNodeGateways_NetworkNodes_DVote$json, BootNodeGateways_NetworkNodes_Web3$json],
};

const BootNodeGateways_NetworkNodes_DVote$json = const {
  '1': 'DVote',
  '2': const [
    const {'1': 'uri', '3': 1, '4': 1, '5': 9, '10': 'uri'},
    const {'1': 'apis', '3': 2, '4': 3, '5': 9, '10': 'apis'},
    const {'1': 'pubKey', '3': 3, '4': 1, '5': 9, '10': 'pubKey'},
  ],
};

const BootNodeGateways_NetworkNodes_Web3$json = const {
  '1': 'Web3',
  '2': const [
    const {'1': 'uri', '3': 1, '4': 1, '5': 9, '10': 'uri'},
  ],
};

const BootNodeGateways_MetaEntry$json = const {
  '1': 'MetaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};
