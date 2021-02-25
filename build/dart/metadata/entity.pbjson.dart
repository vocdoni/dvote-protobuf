///
//  Generated code. Do not modify.
//  source: metadata/entity.proto
//
// @dart = 2.7
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use entityMetadataStoreDescriptor instead')
const EntityMetadataStore$json = const {
  '1': 'EntityMetadataStore',
  '2': const [
    const {'1': 'items', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityMetadata', '10': 'items'},
  ],
};

/// Descriptor for `EntityMetadataStore`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List entityMetadataStoreDescriptor = $convert.base64Decode('ChNFbnRpdHlNZXRhZGF0YVN0b3JlEjQKBWl0ZW1zGAEgAygLMh4uZHZvdGUudHlwZXMudjEuRW50aXR5TWV0YWRhdGFSBWl0ZW1z');
@$core.Deprecated('Use entityMetadataDescriptor instead')
const EntityMetadata$json = const {
  '1': 'EntityMetadata',
  '2': const [
    const {'1': 'version', '3': 1, '4': 1, '5': 9, '10': 'version'},
    const {'1': 'languages', '3': 2, '4': 3, '5': 9, '10': 'languages'},
    const {'1': 'name', '3': 3, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityMetadata.NameEntry', '10': 'name'},
    const {'1': 'description', '3': 4, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityMetadata.DescriptionEntry', '10': 'description'},
    const {'1': 'votingProcesses', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v1.EntityMetadata.VotingProcesses', '10': 'votingProcesses'},
    const {'1': 'newsFeed', '3': 6, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityMetadata.NewsFeedEntry', '10': 'newsFeed'},
    const {'1': 'media', '3': 7, '4': 1, '5': 11, '6': '.dvote.types.v1.EntityMetadata.Media', '10': 'media'},
    const {'1': 'actions', '3': 8, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityMetadata.Action', '10': 'actions'},
    const {'1': 'bootEntities', '3': 9, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityReference', '10': 'bootEntities'},
    const {'1': 'fallbackBootNodeEntities', '3': 10, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityReference', '10': 'fallbackBootNodeEntities'},
    const {'1': 'trustedEntities', '3': 11, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityReference', '10': 'trustedEntities'},
    const {'1': 'censusServiceManagedEntities', '3': 12, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityReference', '10': 'censusServiceManagedEntities'},
    const {'1': 'meta', '3': 100, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityMetadata.MetaEntry', '10': 'meta'},
  ],
  '3': const [EntityMetadata_NameEntry$json, EntityMetadata_DescriptionEntry$json, EntityMetadata_VotingProcesses$json, EntityMetadata_NewsFeedEntry$json, EntityMetadata_Media$json, EntityMetadata_Action$json, EntityMetadata_MetaEntry$json],
};

@$core.Deprecated('Use entityMetadataDescriptor instead')
const EntityMetadata_NameEntry$json = const {
  '1': 'NameEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use entityMetadataDescriptor instead')
const EntityMetadata_DescriptionEntry$json = const {
  '1': 'DescriptionEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use entityMetadataDescriptor instead')
const EntityMetadata_VotingProcesses$json = const {
  '1': 'VotingProcesses',
  '2': const [
    const {'1': 'active', '3': 1, '4': 3, '5': 9, '10': 'active'},
    const {'1': 'ended', '3': 2, '4': 3, '5': 9, '10': 'ended'},
  ],
};

@$core.Deprecated('Use entityMetadataDescriptor instead')
const EntityMetadata_NewsFeedEntry$json = const {
  '1': 'NewsFeedEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use entityMetadataDescriptor instead')
const EntityMetadata_Media$json = const {
  '1': 'Media',
  '2': const [
    const {'1': 'avatar', '3': 1, '4': 1, '5': 9, '10': 'avatar'},
    const {'1': 'header', '3': 2, '4': 1, '5': 9, '10': 'header'},
  ],
};

@$core.Deprecated('Use entityMetadataDescriptor instead')
const EntityMetadata_Action$json = const {
  '1': 'Action',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 9, '10': 'type'},
    const {'1': 'actionKey', '3': 7, '4': 1, '5': 9, '10': 'actionKey'},
    const {'1': 'name', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityMetadata.Action.NameEntry', '10': 'name'},
    const {'1': 'visible', '3': 3, '4': 1, '5': 9, '10': 'visible'},
    const {'1': 'url', '3': 4, '4': 1, '5': 9, '10': 'url'},
    const {'1': 'imageSources', '3': 5, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityMetadata.Action.ImageSource', '10': 'imageSources'},
  ],
  '3': const [EntityMetadata_Action_NameEntry$json, EntityMetadata_Action_ImageSource$json],
};

@$core.Deprecated('Use entityMetadataDescriptor instead')
const EntityMetadata_Action_NameEntry$json = const {
  '1': 'NameEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use entityMetadataDescriptor instead')
const EntityMetadata_Action_ImageSource$json = const {
  '1': 'ImageSource',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 9, '10': 'type'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'orientation', '3': 3, '4': 1, '5': 9, '10': 'orientation'},
    const {'1': 'overlay', '3': 4, '4': 1, '5': 9, '10': 'overlay'},
    const {'1': 'caption', '3': 5, '4': 3, '5': 11, '6': '.dvote.types.v1.EntityMetadata.Action.ImageSource.CaptionEntry', '10': 'caption'},
  ],
  '3': const [EntityMetadata_Action_ImageSource_CaptionEntry$json],
};

@$core.Deprecated('Use entityMetadataDescriptor instead')
const EntityMetadata_Action_ImageSource_CaptionEntry$json = const {
  '1': 'CaptionEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

@$core.Deprecated('Use entityMetadataDescriptor instead')
const EntityMetadata_MetaEntry$json = const {
  '1': 'MetaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

/// Descriptor for `EntityMetadata`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List entityMetadataDescriptor = $convert.base64Decode('Cg5FbnRpdHlNZXRhZGF0YRIYCgd2ZXJzaW9uGAEgASgJUgd2ZXJzaW9uEhwKCWxhbmd1YWdlcxgCIAMoCVIJbGFuZ3VhZ2VzEjwKBG5hbWUYAyADKAsyKC5kdm90ZS50eXBlcy52MS5FbnRpdHlNZXRhZGF0YS5OYW1lRW50cnlSBG5hbWUSUQoLZGVzY3JpcHRpb24YBCADKAsyLy5kdm90ZS50eXBlcy52MS5FbnRpdHlNZXRhZGF0YS5EZXNjcmlwdGlvbkVudHJ5UgtkZXNjcmlwdGlvbhJYCg92b3RpbmdQcm9jZXNzZXMYBSABKAsyLi5kdm90ZS50eXBlcy52MS5FbnRpdHlNZXRhZGF0YS5Wb3RpbmdQcm9jZXNzZXNSD3ZvdGluZ1Byb2Nlc3NlcxJICghuZXdzRmVlZBgGIAMoCzIsLmR2b3RlLnR5cGVzLnYxLkVudGl0eU1ldGFkYXRhLk5ld3NGZWVkRW50cnlSCG5ld3NGZWVkEjoKBW1lZGlhGAcgASgLMiQuZHZvdGUudHlwZXMudjEuRW50aXR5TWV0YWRhdGEuTWVkaWFSBW1lZGlhEj8KB2FjdGlvbnMYCCADKAsyJS5kdm90ZS50eXBlcy52MS5FbnRpdHlNZXRhZGF0YS5BY3Rpb25SB2FjdGlvbnMSQwoMYm9vdEVudGl0aWVzGAkgAygLMh8uZHZvdGUudHlwZXMudjEuRW50aXR5UmVmZXJlbmNlUgxib290RW50aXRpZXMSWwoYZmFsbGJhY2tCb290Tm9kZUVudGl0aWVzGAogAygLMh8uZHZvdGUudHlwZXMudjEuRW50aXR5UmVmZXJlbmNlUhhmYWxsYmFja0Jvb3ROb2RlRW50aXRpZXMSSQoPdHJ1c3RlZEVudGl0aWVzGAsgAygLMh8uZHZvdGUudHlwZXMudjEuRW50aXR5UmVmZXJlbmNlUg90cnVzdGVkRW50aXRpZXMSYwocY2Vuc3VzU2VydmljZU1hbmFnZWRFbnRpdGllcxgMIAMoCzIfLmR2b3RlLnR5cGVzLnYxLkVudGl0eVJlZmVyZW5jZVIcY2Vuc3VzU2VydmljZU1hbmFnZWRFbnRpdGllcxI8CgRtZXRhGGQgAygLMiguZHZvdGUudHlwZXMudjEuRW50aXR5TWV0YWRhdGEuTWV0YUVudHJ5UgRtZXRhGjcKCU5hbWVFbnRyeRIQCgNrZXkYASABKAlSA2tleRIUCgV2YWx1ZRgCIAEoCVIFdmFsdWU6AjgBGj4KEERlc2NyaXB0aW9uRW50cnkSEAoDa2V5GAEgASgJUgNrZXkSFAoFdmFsdWUYAiABKAlSBXZhbHVlOgI4ARo/Cg9Wb3RpbmdQcm9jZXNzZXMSFgoGYWN0aXZlGAEgAygJUgZhY3RpdmUSFAoFZW5kZWQYAiADKAlSBWVuZGVkGjsKDU5ld3NGZWVkRW50cnkSEAoDa2V5GAEgASgJUgNrZXkSFAoFdmFsdWUYAiABKAlSBXZhbHVlOgI4ARo3CgVNZWRpYRIWCgZhdmF0YXIYASABKAlSBmF2YXRhchIWCgZoZWFkZXIYAiABKAlSBmhlYWRlchrFBAoGQWN0aW9uEhIKBHR5cGUYASABKAlSBHR5cGUSHAoJYWN0aW9uS2V5GAcgASgJUglhY3Rpb25LZXkSQwoEbmFtZRgCIAMoCzIvLmR2b3RlLnR5cGVzLnYxLkVudGl0eU1ldGFkYXRhLkFjdGlvbi5OYW1lRW50cnlSBG5hbWUSGAoHdmlzaWJsZRgDIAEoCVIHdmlzaWJsZRIQCgN1cmwYBCABKAlSA3VybBJVCgxpbWFnZVNvdXJjZXMYBSADKAsyMS5kdm90ZS50eXBlcy52MS5FbnRpdHlNZXRhZGF0YS5BY3Rpb24uSW1hZ2VTb3VyY2VSDGltYWdlU291cmNlcxo3CglOYW1lRW50cnkSEAoDa2V5GAEgASgJUgNrZXkSFAoFdmFsdWUYAiABKAlSBXZhbHVlOgI4ARqHAgoLSW1hZ2VTb3VyY2USEgoEdHlwZRgBIAEoCVIEdHlwZRISCgRuYW1lGAIgASgJUgRuYW1lEiAKC29yaWVudGF0aW9uGAMgASgJUgtvcmllbnRhdGlvbhIYCgdvdmVybGF5GAQgASgJUgdvdmVybGF5ElgKB2NhcHRpb24YBSADKAsyPi5kdm90ZS50eXBlcy52MS5FbnRpdHlNZXRhZGF0YS5BY3Rpb24uSW1hZ2VTb3VyY2UuQ2FwdGlvbkVudHJ5UgdjYXB0aW9uGjoKDENhcHRpb25FbnRyeRIQCgNrZXkYASABKAlSA2tleRIUCgV2YWx1ZRgCIAEoCVIFdmFsdWU6AjgBGjcKCU1ldGFFbnRyeRIQCgNrZXkYASABKAlSA2tleRIUCgV2YWx1ZRgCIAEoCVIFdmFsdWU6AjgB');
@$core.Deprecated('Use entityReferenceDescriptor instead')
const EntityReference$json = const {
  '1': 'EntityReference',
  '2': const [
    const {'1': 'entityId', '3': 1, '4': 1, '5': 9, '10': 'entityId'},
    const {'1': 'entryPoints', '3': 2, '4': 3, '5': 9, '10': 'entryPoints'},
  ],
};

/// Descriptor for `EntityReference`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List entityReferenceDescriptor = $convert.base64Decode('Cg9FbnRpdHlSZWZlcmVuY2USGgoIZW50aXR5SWQYASABKAlSCGVudGl0eUlkEiAKC2VudHJ5UG9pbnRzGAIgAygJUgtlbnRyeVBvaW50cw==');
