///
//  Generated code. Do not modify.
//  source: identity.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

const Identity$json = const {
  '1': 'Identity',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'identityId', '3': 2, '4': 1, '5': 9, '10': 'identityId'},
    const {'1': 'keys', '3': 3, '4': 3, '5': 11, '6': '.dvote.Key', '10': 'keys'},
    const {'1': 'subscriptions', '3': 4, '4': 3, '5': 11, '6': '.dvote.Identity.Entity', '10': 'subscriptions'},
    const {'1': 'claims', '3': 5, '4': 3, '5': 11, '6': '.dvote.Identity.Claim', '10': 'claims'},
  ],
  '3': const [Identity_Entity$json, Identity_Claim$json],
};

const Identity_Entity$json = const {
  '1': 'Entity',
  '2': const [
    const {'1': 'entityId', '3': 1, '4': 1, '5': 9, '10': 'entityId'},
    const {'1': 'resolverAddress', '3': 2, '4': 1, '5': 9, '10': 'resolverAddress'},
    const {'1': 'networkId', '3': 3, '4': 1, '5': 9, '10': 'networkId'},
    const {'1': 'entryPoints', '3': 4, '4': 3, '5': 9, '10': 'entryPoints'},
  ],
};

const Identity_Claim$json = const {
  '1': 'Claim',
  '2': const [
    const {'1': 'index', '3': 1, '4': 1, '5': 9, '10': 'index'},
    const {'1': 'proof', '3': 2, '4': 1, '5': 9, '10': 'proof'},
    const {'1': 'data', '3': 3, '4': 1, '5': 9, '10': 'data'},
  ],
};

const IdentitiesStore$json = const {
  '1': 'IdentitiesStore',
  '2': const [
    const {'1': 'identities', '3': 1, '4': 3, '5': 11, '6': '.dvote.Identity', '10': 'identities'},
  ],
};

