///
//  Generated code. Do not modify.
//  source: common/vote.proto
//
// @dart = 2.3
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

const SignatureType$json = const {
  '1': 'SignatureType',
  '2': const [
    const {'1': 'UNKNOWN', '2': 0},
    const {'1': 'ECDSA', '2': 1},
    const {'1': 'ECDSA_PIDSALTED', '2': 2},
    const {'1': 'ECDSA_BLIND', '2': 3},
    const {'1': 'ECDSA_BLIND_PIDSALTED', '2': 4},
  ],
};

const VoteEnvelope$json = const {
  '1': 'VoteEnvelope',
  '2': const [
    const {'1': 'nonce', '3': 1, '4': 1, '5': 12, '10': 'nonce'},
    const {'1': 'processId', '3': 2, '4': 1, '5': 12, '10': 'processId'},
    const {'1': 'proof', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v1.Proof', '10': 'proof'},
    const {'1': 'votePackage', '3': 4, '4': 1, '5': 12, '10': 'votePackage'},
    const {'1': 'nullifier', '3': 5, '4': 1, '5': 12, '10': 'nullifier'},
    const {'1': 'encryptionKeyIndexes', '3': 6, '4': 3, '5': 13, '10': 'encryptionKeyIndexes'},
  ],
};

const Proof$json = const {
  '1': 'Proof',
  '2': const [
    const {'1': 'graviton', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofGraviton', '9': 0, '10': 'graviton'},
    const {'1': 'iden3', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofIden3', '9': 0, '10': 'iden3'},
    const {'1': 'ethereumStorage', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofEthereumStorage', '9': 0, '10': 'ethereumStorage'},
    const {'1': 'ethereumAccount', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofEthereumAccount', '9': 0, '10': 'ethereumAccount'},
    const {'1': 'ca', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v1.ProofCA', '9': 0, '10': 'ca'},
  ],
  '8': const [
    const {'1': 'payload'},
  ],
};

const ProofGraviton$json = const {
  '1': 'ProofGraviton',
  '2': const [
    const {'1': 'siblings', '3': 1, '4': 1, '5': 12, '10': 'siblings'},
  ],
};

const ProofIden3$json = const {
  '1': 'ProofIden3',
  '2': const [
    const {'1': 'siblings', '3': 1, '4': 1, '5': 12, '10': 'siblings'},
  ],
};

const ProofCA$json = const {
  '1': 'ProofCA',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 14, '6': '.dvote.types.v1.SignatureType', '10': 'type'},
    const {'1': 'bundle', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.CAbundle', '10': 'bundle'},
    const {'1': 'signature', '3': 3, '4': 1, '5': 12, '10': 'signature'},
  ],
};

const CAbundle$json = const {
  '1': 'CAbundle',
  '2': const [
    const {'1': 'processId', '3': 1, '4': 1, '5': 12, '10': 'processId'},
    const {'1': 'address', '3': 2, '4': 1, '5': 12, '10': 'address'},
  ],
};

const ProofEthereumStorage$json = const {
  '1': 'ProofEthereumStorage',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 12, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 12, '10': 'value'},
    const {'1': 'siblings', '3': 3, '4': 3, '5': 12, '10': 'siblings'},
  ],
};

const ProofEthereumAccount$json = const {
  '1': 'ProofEthereumAccount',
  '2': const [
    const {'1': 'nonce', '3': 1, '4': 1, '5': 12, '10': 'nonce'},
    const {'1': 'balance', '3': 2, '4': 1, '5': 12, '10': 'balance'},
    const {'1': 'storageHash', '3': 3, '4': 1, '5': 12, '10': 'storageHash'},
    const {'1': 'codeHash', '3': 4, '4': 1, '5': 12, '10': 'codeHash'},
    const {'1': 'siblings', '3': 5, '4': 3, '5': 12, '10': 'siblings'},
  ],
};

