///
//  Generated code. Do not modify.
//  source: client-store/account.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use accountsStoreDescriptor instead')
const AccountsStore$json = const {
  '1': 'AccountsStore',
  '2': const [
    const {'1': 'items', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.Account', '10': 'items'},
  ],
};

/// Descriptor for `AccountsStore`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List accountsStoreDescriptor = $convert.base64Decode('Cg1BY2NvdW50c1N0b3JlEi0KBWl0ZW1zGAEgAygLMhcuZHZvdGUudHlwZXMudjEuQWNjb3VudFIFaXRlbXM=');
@$core.Deprecated('Use accountDescriptor instead')
const Account$json = const {
  '1': 'Account',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'wallet', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.Wallet', '10': 'wallet'},
    const {'1': 'address', '3': 3, '4': 1, '5': 9, '10': 'address'},
    const {'1': 'hasBackup', '3': 4, '4': 1, '5': 8, '10': 'hasBackup'},
    const {'1': 'extra', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v1.Account.Extra', '10': 'extra'},
    const {'1': 'meta', '3': 100, '4': 3, '5': 11, '6': '.dvote.types.v1.Account.MetaEntry', '10': 'meta'},
  ],
  '3': const [Account_AppVoter$json, Account_WebEntity$json, Account_Extra$json, Account_MetaEntry$json],
};

@$core.Deprecated('Use accountDescriptor instead')
const Account_AppVoter$json = const {
  '1': 'AppVoter',
  '2': const [
    const {'1': 'appAnalyticsID', '3': 1, '4': 1, '5': 9, '10': 'appAnalyticsID'},
    const {'1': 'entities', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityReference', '10': 'entities'},
  ],
};

@$core.Deprecated('Use accountDescriptor instead')
const Account_WebEntity$json = const {
  '1': 'WebEntity',
  '2': const [
    const {'1': 'webAnalyticsID', '3': 1, '4': 1, '5': 9, '10': 'webAnalyticsID'},
  ],
};

@$core.Deprecated('Use accountDescriptor instead')
const Account_Extra$json = const {
  '1': 'Extra',
  '2': const [
    const {'1': 'appVoter', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v1.Account.AppVoter', '9': 0, '10': 'appVoter'},
    const {'1': 'webEntity', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v1.Account.WebEntity', '9': 0, '10': 'webEntity'},
  ],
  '8': const [
    const {'1': 'content'},
  ],
};

@$core.Deprecated('Use accountDescriptor instead')
const Account_MetaEntry$json = const {
  '1': 'MetaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

/// Descriptor for `Account`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List accountDescriptor = $convert.base64Decode('CgdBY2NvdW50EhIKBG5hbWUYASABKAlSBG5hbWUSLgoGd2FsbGV0GAIgASgLMhYuZHZvdGUudHlwZXMudjEuV2FsbGV0UgZ3YWxsZXQSGAoHYWRkcmVzcxgDIAEoCVIHYWRkcmVzcxIcCgloYXNCYWNrdXAYBCABKAhSCWhhc0JhY2t1cBIzCgVleHRyYRgFIAEoCzIdLmR2b3RlLnR5cGVzLnYxLkFjY291bnQuRXh0cmFSBWV4dHJhEjUKBG1ldGEYZCADKAsyIS5kdm90ZS50eXBlcy52MS5BY2NvdW50Lk1ldGFFbnRyeVIEbWV0YRpvCghBcHBWb3RlchImCg5hcHBBbmFseXRpY3NJRBgBIAEoCVIOYXBwQW5hbHl0aWNzSUQSOwoIZW50aXRpZXMYAiADKAsyHy5kdm90ZS50eXBlcy52MS5FbnRpdHlSZWZlcmVuY2VSCGVudGl0aWVzGjMKCVdlYkVudGl0eRImCg53ZWJBbmFseXRpY3NJRBgBIAEoCVIOd2ViQW5hbHl0aWNzSUQalQEKBUV4dHJhEj4KCGFwcFZvdGVyGAEgASgLMiAuZHZvdGUudHlwZXMudjEuQWNjb3VudC5BcHBWb3RlckgAUghhcHBWb3RlchJBCgl3ZWJFbnRpdHkYAiABKAsyIS5kdm90ZS50eXBlcy52MS5BY2NvdW50LldlYkVudGl0eUgAUgl3ZWJFbnRpdHlCCQoHY29udGVudBo3CglNZXRhRW50cnkSEAoDa2V5GAEgASgJUgNrZXkSFAoFdmFsdWUYAiABKAlSBXZhbHVlOgI4AQ==');
