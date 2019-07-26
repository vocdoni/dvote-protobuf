///
//  Generated code. Do not modify.
//  source: identity.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

const IdentitiesStore$json = const {
  '1': 'IdentitiesStore',
  '2': const [
    const {'1': 'identities', '3': 1, '4': 3, '5': 11, '6': '.dvote.Identity', '10': 'identities'},
  ],
};

const Identity$json = const {
  '1': 'Identity',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'identityId', '3': 2, '4': 1, '5': 9, '10': 'identityId'},
    const {'1': 'keys', '3': 3, '4': 3, '5': 11, '6': '.dvote.Key', '10': 'keys'},
    const {'1': 'subscribedEntities', '3': 4, '4': 3, '5': 11, '6': '.dvote.EntitySummary', '10': 'subscribedEntities'},
    const {'1': 'receivedClaims', '3': 5, '4': 3, '5': 11, '6': '.dvote.Identity.Claim', '10': 'receivedClaims'},
    const {'1': 'emittedClaims', '3': 6, '4': 3, '5': 11, '6': '.dvote.Identity.Claim', '10': 'emittedClaims'},
    const {'1': 'meta', '3': 100, '4': 3, '5': 11, '6': '.dvote.Identity.MetaEntry', '10': 'meta'},
  ],
  '3': const [Identity_Claim$json, Identity_MetaEntry$json],
};

const Identity_Claim$json = const {
  '1': 'Claim',
  '2': const [
    const {'1': 'index', '3': 1, '4': 1, '5': 9, '10': 'index'},
    const {'1': 'proof', '3': 2, '4': 1, '5': 9, '10': 'proof'},
    const {'1': 'data', '3': 3, '4': 1, '5': 9, '10': 'data'},
    const {'1': 'tags', '3': 4, '4': 3, '5': 9, '10': 'tags'},
  ],
};

const Identity_MetaEntry$json = const {
  '1': 'MetaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

