///
//  Generated code. Do not modify.
//  source: metadata/feed.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class FeedStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'FeedStore', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..pc<Feed>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'items', $pb.PbFieldType.PM, subBuilder: Feed.create)
    ..hasRequiredFields = false
  ;

  FeedStore._() : super();
  factory FeedStore({
    $core.Iterable<Feed>? items,
  }) {
    final _result = create();
    if (items != null) {
      _result.items.addAll(items);
    }
    return _result;
  }
  factory FeedStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FeedStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  FeedStore clone() => FeedStore()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  FeedStore copyWith(void Function(FeedStore) updates) => super.copyWith((message) => updates(message as FeedStore)) as FeedStore; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FeedStore create() => FeedStore._();
  FeedStore createEmptyInstance() => create();
  static $pb.PbList<FeedStore> createRepeated() => $pb.PbList<FeedStore>();
  @$core.pragma('dart2js:noInline')
  static FeedStore getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FeedStore>(create);
  static FeedStore? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Feed> get items => $_getList(0);
}

class Feed extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Feed', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'version')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'title')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'homePageUrl')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'description')
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'feedUrl')
    ..aOS(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'icon')
    ..aOS(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'favicon')
    ..aOB(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'expired')
    ..pc<FeedPost>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'items', $pb.PbFieldType.PM, subBuilder: FeedPost.create)
    ..m<$core.String, $core.String>(100, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'meta', entryClassName: 'Feed.MetaEntry', keyFieldType: $pb.PbFieldType.OS, valueFieldType: $pb.PbFieldType.OS, packageName: const $pb.PackageName('dvote.types.v1'))
    ..hasRequiredFields = false
  ;

  Feed._() : super();
  factory Feed({
    $core.String? version,
    $core.String? title,
    $core.String? homePageUrl,
    $core.String? description,
    $core.String? feedUrl,
    $core.String? icon,
    $core.String? favicon,
    $core.bool? expired,
    $core.Iterable<FeedPost>? items,
    $core.Map<$core.String, $core.String>? meta,
  }) {
    final _result = create();
    if (version != null) {
      _result.version = version;
    }
    if (title != null) {
      _result.title = title;
    }
    if (homePageUrl != null) {
      _result.homePageUrl = homePageUrl;
    }
    if (description != null) {
      _result.description = description;
    }
    if (feedUrl != null) {
      _result.feedUrl = feedUrl;
    }
    if (icon != null) {
      _result.icon = icon;
    }
    if (favicon != null) {
      _result.favicon = favicon;
    }
    if (expired != null) {
      _result.expired = expired;
    }
    if (items != null) {
      _result.items.addAll(items);
    }
    if (meta != null) {
      _result.meta.addAll(meta);
    }
    return _result;
  }
  factory Feed.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Feed.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Feed clone() => Feed()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Feed copyWith(void Function(Feed) updates) => super.copyWith((message) => updates(message as Feed)) as Feed; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Feed create() => Feed._();
  Feed createEmptyInstance() => create();
  static $pb.PbList<Feed> createRepeated() => $pb.PbList<Feed>();
  @$core.pragma('dart2js:noInline')
  static Feed getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Feed>(create);
  static Feed? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get version => $_getSZ(0);
  @$pb.TagNumber(1)
  set version($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasVersion() => $_has(0);
  @$pb.TagNumber(1)
  void clearVersion() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get title => $_getSZ(1);
  @$pb.TagNumber(2)
  set title($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasTitle() => $_has(1);
  @$pb.TagNumber(2)
  void clearTitle() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get homePageUrl => $_getSZ(2);
  @$pb.TagNumber(3)
  set homePageUrl($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasHomePageUrl() => $_has(2);
  @$pb.TagNumber(3)
  void clearHomePageUrl() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get description => $_getSZ(3);
  @$pb.TagNumber(4)
  set description($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasDescription() => $_has(3);
  @$pb.TagNumber(4)
  void clearDescription() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get feedUrl => $_getSZ(4);
  @$pb.TagNumber(5)
  set feedUrl($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasFeedUrl() => $_has(4);
  @$pb.TagNumber(5)
  void clearFeedUrl() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get icon => $_getSZ(5);
  @$pb.TagNumber(6)
  set icon($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasIcon() => $_has(5);
  @$pb.TagNumber(6)
  void clearIcon() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get favicon => $_getSZ(6);
  @$pb.TagNumber(7)
  set favicon($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasFavicon() => $_has(6);
  @$pb.TagNumber(7)
  void clearFavicon() => clearField(7);

  @$pb.TagNumber(8)
  $core.bool get expired => $_getBF(7);
  @$pb.TagNumber(8)
  set expired($core.bool v) { $_setBool(7, v); }
  @$pb.TagNumber(8)
  $core.bool hasExpired() => $_has(7);
  @$pb.TagNumber(8)
  void clearExpired() => clearField(8);

  @$pb.TagNumber(9)
  $core.List<FeedPost> get items => $_getList(8);

  @$pb.TagNumber(100)
  $core.Map<$core.String, $core.String> get meta => $_getMap(9);
}

class FeedPost_Author extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'FeedPost.Author', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'url')
    ..hasRequiredFields = false
  ;

  FeedPost_Author._() : super();
  factory FeedPost_Author({
    $core.String? name,
    $core.String? url,
  }) {
    final _result = create();
    if (name != null) {
      _result.name = name;
    }
    if (url != null) {
      _result.url = url;
    }
    return _result;
  }
  factory FeedPost_Author.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FeedPost_Author.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  FeedPost_Author clone() => FeedPost_Author()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  FeedPost_Author copyWith(void Function(FeedPost_Author) updates) => super.copyWith((message) => updates(message as FeedPost_Author)) as FeedPost_Author; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FeedPost_Author create() => FeedPost_Author._();
  FeedPost_Author createEmptyInstance() => create();
  static $pb.PbList<FeedPost_Author> createRepeated() => $pb.PbList<FeedPost_Author>();
  @$core.pragma('dart2js:noInline')
  static FeedPost_Author getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FeedPost_Author>(create);
  static FeedPost_Author? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get url => $_getSZ(1);
  @$pb.TagNumber(2)
  set url($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasUrl() => $_has(1);
  @$pb.TagNumber(2)
  void clearUrl() => clearField(2);
}

class FeedPost extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'FeedPost', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v1'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'title')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'summary')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'contentText')
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'contentHtml')
    ..aOS(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'url')
    ..aOS(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'image')
    ..pPS(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'tags')
    ..aOS(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'datePublished')
    ..aOS(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'dateModified')
    ..aOM<FeedPost_Author>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'author', subBuilder: FeedPost_Author.create)
    ..hasRequiredFields = false
  ;

  FeedPost._() : super();
  factory FeedPost({
    $core.String? id,
    $core.String? title,
    $core.String? summary,
    $core.String? contentText,
    $core.String? contentHtml,
    $core.String? url,
    $core.String? image,
    $core.Iterable<$core.String>? tags,
    $core.String? datePublished,
    $core.String? dateModified,
    FeedPost_Author? author,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (title != null) {
      _result.title = title;
    }
    if (summary != null) {
      _result.summary = summary;
    }
    if (contentText != null) {
      _result.contentText = contentText;
    }
    if (contentHtml != null) {
      _result.contentHtml = contentHtml;
    }
    if (url != null) {
      _result.url = url;
    }
    if (image != null) {
      _result.image = image;
    }
    if (tags != null) {
      _result.tags.addAll(tags);
    }
    if (datePublished != null) {
      _result.datePublished = datePublished;
    }
    if (dateModified != null) {
      _result.dateModified = dateModified;
    }
    if (author != null) {
      _result.author = author;
    }
    return _result;
  }
  factory FeedPost.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FeedPost.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  FeedPost clone() => FeedPost()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  FeedPost copyWith(void Function(FeedPost) updates) => super.copyWith((message) => updates(message as FeedPost)) as FeedPost; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FeedPost create() => FeedPost._();
  FeedPost createEmptyInstance() => create();
  static $pb.PbList<FeedPost> createRepeated() => $pb.PbList<FeedPost>();
  @$core.pragma('dart2js:noInline')
  static FeedPost getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FeedPost>(create);
  static FeedPost? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get title => $_getSZ(1);
  @$pb.TagNumber(2)
  set title($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasTitle() => $_has(1);
  @$pb.TagNumber(2)
  void clearTitle() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get summary => $_getSZ(2);
  @$pb.TagNumber(3)
  set summary($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasSummary() => $_has(2);
  @$pb.TagNumber(3)
  void clearSummary() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get contentText => $_getSZ(3);
  @$pb.TagNumber(4)
  set contentText($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasContentText() => $_has(3);
  @$pb.TagNumber(4)
  void clearContentText() => clearField(4);

  @$pb.TagNumber(5)
  $core.String get contentHtml => $_getSZ(4);
  @$pb.TagNumber(5)
  set contentHtml($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasContentHtml() => $_has(4);
  @$pb.TagNumber(5)
  void clearContentHtml() => clearField(5);

  @$pb.TagNumber(6)
  $core.String get url => $_getSZ(5);
  @$pb.TagNumber(6)
  set url($core.String v) { $_setString(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasUrl() => $_has(5);
  @$pb.TagNumber(6)
  void clearUrl() => clearField(6);

  @$pb.TagNumber(7)
  $core.String get image => $_getSZ(6);
  @$pb.TagNumber(7)
  set image($core.String v) { $_setString(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasImage() => $_has(6);
  @$pb.TagNumber(7)
  void clearImage() => clearField(7);

  @$pb.TagNumber(8)
  $core.List<$core.String> get tags => $_getList(7);

  @$pb.TagNumber(9)
  $core.String get datePublished => $_getSZ(8);
  @$pb.TagNumber(9)
  set datePublished($core.String v) { $_setString(8, v); }
  @$pb.TagNumber(9)
  $core.bool hasDatePublished() => $_has(8);
  @$pb.TagNumber(9)
  void clearDatePublished() => clearField(9);

  @$pb.TagNumber(10)
  $core.String get dateModified => $_getSZ(9);
  @$pb.TagNumber(10)
  set dateModified($core.String v) { $_setString(9, v); }
  @$pb.TagNumber(10)
  $core.bool hasDateModified() => $_has(9);
  @$pb.TagNumber(10)
  void clearDateModified() => clearField(10);

  @$pb.TagNumber(11)
  FeedPost_Author get author => $_getN(10);
  @$pb.TagNumber(11)
  set author(FeedPost_Author v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasAuthor() => $_has(10);
  @$pb.TagNumber(11)
  void clearAuthor() => clearField(11);
  @$pb.TagNumber(11)
  FeedPost_Author ensureAuthor() => $_ensure(10);
}

