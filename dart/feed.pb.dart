///
//  Generated code. Do not modify.
//  source: feed.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

class FeedStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('FeedStore', package: const $pb.PackageName('dvote'))
    ..pc<Feed>(1, 'items', $pb.PbFieldType.PM,Feed.create)
    ..hasRequiredFields = false
  ;

  FeedStore._() : super();
  factory FeedStore() => create();
  factory FeedStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FeedStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  FeedStore clone() => FeedStore()..mergeFromMessage(this);
  FeedStore copyWith(void Function(FeedStore) updates) => super.copyWith((message) => updates(message as FeedStore));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FeedStore create() => FeedStore._();
  FeedStore createEmptyInstance() => create();
  static $pb.PbList<FeedStore> createRepeated() => $pb.PbList<FeedStore>();
  static FeedStore getDefault() => _defaultInstance ??= create()..freeze();
  static FeedStore _defaultInstance;

  $core.List<Feed> get items => $_getList(0);
}

class Feed extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Feed', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'version')
    ..aOS(2, 'title')
    ..aOS(3, 'homePageUrl')
    ..aOS(4, 'description')
    ..aOS(5, 'feedUrl')
    ..aOS(6, 'icon')
    ..aOS(7, 'favicon')
    ..aOB(8, 'expired')
    ..pc<FeedPost>(9, 'items', $pb.PbFieldType.PM,FeedPost.create)
    ..m<$core.String, $core.String>(100, 'meta', 'Feed.MetaEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..hasRequiredFields = false
  ;

  Feed._() : super();
  factory Feed() => create();
  factory Feed.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Feed.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Feed clone() => Feed()..mergeFromMessage(this);
  Feed copyWith(void Function(Feed) updates) => super.copyWith((message) => updates(message as Feed));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Feed create() => Feed._();
  Feed createEmptyInstance() => create();
  static $pb.PbList<Feed> createRepeated() => $pb.PbList<Feed>();
  static Feed getDefault() => _defaultInstance ??= create()..freeze();
  static Feed _defaultInstance;

  $core.String get version => $_getS(0, '');
  set version($core.String v) { $_setString(0, v); }
  $core.bool hasVersion() => $_has(0);
  void clearVersion() => clearField(1);

  $core.String get title => $_getS(1, '');
  set title($core.String v) { $_setString(1, v); }
  $core.bool hasTitle() => $_has(1);
  void clearTitle() => clearField(2);

  $core.String get homePageUrl => $_getS(2, '');
  set homePageUrl($core.String v) { $_setString(2, v); }
  $core.bool hasHomePageUrl() => $_has(2);
  void clearHomePageUrl() => clearField(3);

  $core.String get description => $_getS(3, '');
  set description($core.String v) { $_setString(3, v); }
  $core.bool hasDescription() => $_has(3);
  void clearDescription() => clearField(4);

  $core.String get feedUrl => $_getS(4, '');
  set feedUrl($core.String v) { $_setString(4, v); }
  $core.bool hasFeedUrl() => $_has(4);
  void clearFeedUrl() => clearField(5);

  $core.String get icon => $_getS(5, '');
  set icon($core.String v) { $_setString(5, v); }
  $core.bool hasIcon() => $_has(5);
  void clearIcon() => clearField(6);

  $core.String get favicon => $_getS(6, '');
  set favicon($core.String v) { $_setString(6, v); }
  $core.bool hasFavicon() => $_has(6);
  void clearFavicon() => clearField(7);

  $core.bool get expired => $_get(7, false);
  set expired($core.bool v) { $_setBool(7, v); }
  $core.bool hasExpired() => $_has(7);
  void clearExpired() => clearField(8);

  $core.List<FeedPost> get items => $_getList(8);

  $core.Map<$core.String, $core.String> get meta => $_getMap(9);
}

class FeedPost_Author extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('FeedPost.Author', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'name')
    ..aOS(2, 'url')
    ..hasRequiredFields = false
  ;

  FeedPost_Author._() : super();
  factory FeedPost_Author() => create();
  factory FeedPost_Author.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FeedPost_Author.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  FeedPost_Author clone() => FeedPost_Author()..mergeFromMessage(this);
  FeedPost_Author copyWith(void Function(FeedPost_Author) updates) => super.copyWith((message) => updates(message as FeedPost_Author));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FeedPost_Author create() => FeedPost_Author._();
  FeedPost_Author createEmptyInstance() => create();
  static $pb.PbList<FeedPost_Author> createRepeated() => $pb.PbList<FeedPost_Author>();
  static FeedPost_Author getDefault() => _defaultInstance ??= create()..freeze();
  static FeedPost_Author _defaultInstance;

  $core.String get name => $_getS(0, '');
  set name($core.String v) { $_setString(0, v); }
  $core.bool hasName() => $_has(0);
  void clearName() => clearField(1);

  $core.String get url => $_getS(1, '');
  set url($core.String v) { $_setString(1, v); }
  $core.bool hasUrl() => $_has(1);
  void clearUrl() => clearField(2);
}

class FeedPost extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('FeedPost', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'id')
    ..aOS(2, 'title')
    ..aOS(3, 'summary')
    ..aOS(4, 'contentText')
    ..aOS(5, 'contentHtml')
    ..aOS(6, 'url')
    ..aOS(7, 'image')
    ..pPS(8, 'tags')
    ..aOS(9, 'datePublished')
    ..aOS(10, 'dateModified')
    ..a<FeedPost_Author>(11, 'author', $pb.PbFieldType.OM, FeedPost_Author.getDefault, FeedPost_Author.create)
    ..hasRequiredFields = false
  ;

  FeedPost._() : super();
  factory FeedPost() => create();
  factory FeedPost.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FeedPost.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  FeedPost clone() => FeedPost()..mergeFromMessage(this);
  FeedPost copyWith(void Function(FeedPost) updates) => super.copyWith((message) => updates(message as FeedPost));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FeedPost create() => FeedPost._();
  FeedPost createEmptyInstance() => create();
  static $pb.PbList<FeedPost> createRepeated() => $pb.PbList<FeedPost>();
  static FeedPost getDefault() => _defaultInstance ??= create()..freeze();
  static FeedPost _defaultInstance;

  $core.String get id => $_getS(0, '');
  set id($core.String v) { $_setString(0, v); }
  $core.bool hasId() => $_has(0);
  void clearId() => clearField(1);

  $core.String get title => $_getS(1, '');
  set title($core.String v) { $_setString(1, v); }
  $core.bool hasTitle() => $_has(1);
  void clearTitle() => clearField(2);

  $core.String get summary => $_getS(2, '');
  set summary($core.String v) { $_setString(2, v); }
  $core.bool hasSummary() => $_has(2);
  void clearSummary() => clearField(3);

  $core.String get contentText => $_getS(3, '');
  set contentText($core.String v) { $_setString(3, v); }
  $core.bool hasContentText() => $_has(3);
  void clearContentText() => clearField(4);

  $core.String get contentHtml => $_getS(4, '');
  set contentHtml($core.String v) { $_setString(4, v); }
  $core.bool hasContentHtml() => $_has(4);
  void clearContentHtml() => clearField(5);

  $core.String get url => $_getS(5, '');
  set url($core.String v) { $_setString(5, v); }
  $core.bool hasUrl() => $_has(5);
  void clearUrl() => clearField(6);

  $core.String get image => $_getS(6, '');
  set image($core.String v) { $_setString(6, v); }
  $core.bool hasImage() => $_has(6);
  void clearImage() => clearField(7);

  $core.List<$core.String> get tags => $_getList(7);

  $core.String get datePublished => $_getS(8, '');
  set datePublished($core.String v) { $_setString(8, v); }
  $core.bool hasDatePublished() => $_has(8);
  void clearDatePublished() => clearField(9);

  $core.String get dateModified => $_getS(9, '');
  set dateModified($core.String v) { $_setString(9, v); }
  $core.bool hasDateModified() => $_has(9);
  void clearDateModified() => clearField(10);

  FeedPost_Author get author => $_getN(10);
  set author(FeedPost_Author v) { setField(11, v); }
  $core.bool hasAuthor() => $_has(10);
  void clearAuthor() => clearField(11);
}

