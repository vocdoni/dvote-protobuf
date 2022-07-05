///
//  Generated code. Do not modify.
//  source: metadata/feed.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,constant_identifier_names,deprecated_member_use_from_same_package,directives_ordering,library_prefixes,non_constant_identifier_names,prefer_final_fields,return_of_invalid_type,unnecessary_const,unnecessary_import,unnecessary_this,unused_import,unused_shown_name

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use feedStoreDescriptor instead')
const FeedStore$json = const {
  '1': 'FeedStore',
  '2': const [
    const {'1': 'items', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.Feed', '10': 'items'},
  ],
};

/// Descriptor for `FeedStore`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List feedStoreDescriptor = $convert.base64Decode('CglGZWVkU3RvcmUSKgoFaXRlbXMYASADKAsyFC5kdm90ZS50eXBlcy52MS5GZWVkUgVpdGVtcw==');
@$core.Deprecated('Use feedDescriptor instead')
const Feed$json = const {
  '1': 'Feed',
  '2': const [
    const {'1': 'version', '3': 1, '4': 1, '5': 9, '10': 'version'},
    const {'1': 'title', '3': 2, '4': 1, '5': 9, '10': 'title'},
    const {'1': 'home_page_url', '3': 3, '4': 1, '5': 9, '10': 'homePageUrl'},
    const {'1': 'description', '3': 4, '4': 1, '5': 9, '10': 'description'},
    const {'1': 'feed_url', '3': 5, '4': 1, '5': 9, '10': 'feedUrl'},
    const {'1': 'icon', '3': 6, '4': 1, '5': 9, '10': 'icon'},
    const {'1': 'favicon', '3': 7, '4': 1, '5': 9, '10': 'favicon'},
    const {'1': 'expired', '3': 8, '4': 1, '5': 8, '10': 'expired'},
    const {'1': 'items', '3': 9, '4': 3, '5': 11, '6': '.dvote.types.v1.FeedPost', '10': 'items'},
    const {'1': 'meta', '3': 100, '4': 3, '5': 11, '6': '.dvote.types.v1.Feed.MetaEntry', '10': 'meta'},
  ],
  '3': const [Feed_MetaEntry$json],
};

@$core.Deprecated('Use feedDescriptor instead')
const Feed_MetaEntry$json = const {
  '1': 'MetaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

/// Descriptor for `Feed`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List feedDescriptor = $convert.base64Decode('CgRGZWVkEhgKB3ZlcnNpb24YASABKAlSB3ZlcnNpb24SFAoFdGl0bGUYAiABKAlSBXRpdGxlEiIKDWhvbWVfcGFnZV91cmwYAyABKAlSC2hvbWVQYWdlVXJsEiAKC2Rlc2NyaXB0aW9uGAQgASgJUgtkZXNjcmlwdGlvbhIZCghmZWVkX3VybBgFIAEoCVIHZmVlZFVybBISCgRpY29uGAYgASgJUgRpY29uEhgKB2Zhdmljb24YByABKAlSB2Zhdmljb24SGAoHZXhwaXJlZBgIIAEoCFIHZXhwaXJlZBIuCgVpdGVtcxgJIAMoCzIYLmR2b3RlLnR5cGVzLnYxLkZlZWRQb3N0UgVpdGVtcxIyCgRtZXRhGGQgAygLMh4uZHZvdGUudHlwZXMudjEuRmVlZC5NZXRhRW50cnlSBG1ldGEaNwoJTWV0YUVudHJ5EhAKA2tleRgBIAEoCVIDa2V5EhQKBXZhbHVlGAIgASgJUgV2YWx1ZToCOAE=');
@$core.Deprecated('Use feedPostDescriptor instead')
const FeedPost$json = const {
  '1': 'FeedPost',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'title', '3': 2, '4': 1, '5': 9, '10': 'title'},
    const {'1': 'summary', '3': 3, '4': 1, '5': 9, '10': 'summary'},
    const {'1': 'content_text', '3': 4, '4': 1, '5': 9, '10': 'contentText'},
    const {'1': 'content_html', '3': 5, '4': 1, '5': 9, '10': 'contentHtml'},
    const {'1': 'url', '3': 6, '4': 1, '5': 9, '10': 'url'},
    const {'1': 'image', '3': 7, '4': 1, '5': 9, '10': 'image'},
    const {'1': 'tags', '3': 8, '4': 3, '5': 9, '10': 'tags'},
    const {'1': 'date_published', '3': 9, '4': 1, '5': 9, '10': 'datePublished'},
    const {'1': 'date_modified', '3': 10, '4': 1, '5': 9, '10': 'dateModified'},
    const {'1': 'author', '3': 11, '4': 1, '5': 11, '6': '.dvote.types.v1.FeedPost.Author', '10': 'author'},
  ],
  '3': const [FeedPost_Author$json],
};

@$core.Deprecated('Use feedPostDescriptor instead')
const FeedPost_Author$json = const {
  '1': 'Author',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'url', '3': 2, '4': 1, '5': 9, '10': 'url'},
  ],
};

/// Descriptor for `FeedPost`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List feedPostDescriptor = $convert.base64Decode('CghGZWVkUG9zdBIOCgJpZBgBIAEoCVICaWQSFAoFdGl0bGUYAiABKAlSBXRpdGxlEhgKB3N1bW1hcnkYAyABKAlSB3N1bW1hcnkSIQoMY29udGVudF90ZXh0GAQgASgJUgtjb250ZW50VGV4dBIhCgxjb250ZW50X2h0bWwYBSABKAlSC2NvbnRlbnRIdG1sEhAKA3VybBgGIAEoCVIDdXJsEhQKBWltYWdlGAcgASgJUgVpbWFnZRISCgR0YWdzGAggAygJUgR0YWdzEiUKDmRhdGVfcHVibGlzaGVkGAkgASgJUg1kYXRlUHVibGlzaGVkEiMKDWRhdGVfbW9kaWZpZWQYCiABKAlSDGRhdGVNb2RpZmllZBI3CgZhdXRob3IYCyABKAsyHy5kdm90ZS50eXBlcy52MS5GZWVkUG9zdC5BdXRob3JSBmF1dGhvchouCgZBdXRob3ISEgoEbmFtZRgBIAEoCVIEbmFtZRIQCgN1cmwYAiABKAlSA3VybA==');
