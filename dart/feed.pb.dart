///
//  Generated code. Do not modify.
//  source: feed.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

class Post_Author extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Post.Author', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'name')
    ..aOS(2, 'url')
    ..hasRequiredFields = false
  ;

  Post_Author._() : super();
  factory Post_Author() => create();
  factory Post_Author.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Post_Author.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Post_Author clone() => Post_Author()..mergeFromMessage(this);
  Post_Author copyWith(void Function(Post_Author) updates) => super.copyWith((message) => updates(message as Post_Author));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Post_Author create() => Post_Author._();
  Post_Author createEmptyInstance() => create();
  static $pb.PbList<Post_Author> createRepeated() => $pb.PbList<Post_Author>();
  static Post_Author getDefault() => _defaultInstance ??= create()..freeze();
  static Post_Author _defaultInstance;

  $core.String get name => $_getS(0, '');
  set name($core.String v) { $_setString(0, v); }
  $core.bool hasName() => $_has(0);
  void clearName() => clearField(1);

  $core.String get url => $_getS(1, '');
  set url($core.String v) { $_setString(1, v); }
  $core.bool hasUrl() => $_has(1);
  void clearUrl() => clearField(2);
}

class Post extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Post', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'id')
    ..aOS(2, 'guid')
    ..aOS(3, 'title')
    ..aOS(4, 'summary')
    ..aOS(5, 'contentText')
    ..aOS(6, 'contentHtml')
    ..aOS(7, 'url')
    ..aOS(8, 'image')
    ..pPS(9, 'tags')
    ..aOS(10, 'datePublished')
    ..aOS(11, 'dateModified')
    ..a<Post_Author>(12, 'author', $pb.PbFieldType.OM, Post_Author.getDefault, Post_Author.create)
    ..hasRequiredFields = false
  ;

  Post._() : super();
  factory Post() => create();
  factory Post.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Post.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Post clone() => Post()..mergeFromMessage(this);
  Post copyWith(void Function(Post) updates) => super.copyWith((message) => updates(message as Post));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Post create() => Post._();
  Post createEmptyInstance() => create();
  static $pb.PbList<Post> createRepeated() => $pb.PbList<Post>();
  static Post getDefault() => _defaultInstance ??= create()..freeze();
  static Post _defaultInstance;

  $core.String get id => $_getS(0, '');
  set id($core.String v) { $_setString(0, v); }
  $core.bool hasId() => $_has(0);
  void clearId() => clearField(1);

  $core.String get guid => $_getS(1, '');
  set guid($core.String v) { $_setString(1, v); }
  $core.bool hasGuid() => $_has(1);
  void clearGuid() => clearField(2);

  $core.String get title => $_getS(2, '');
  set title($core.String v) { $_setString(2, v); }
  $core.bool hasTitle() => $_has(2);
  void clearTitle() => clearField(3);

  $core.String get summary => $_getS(3, '');
  set summary($core.String v) { $_setString(3, v); }
  $core.bool hasSummary() => $_has(3);
  void clearSummary() => clearField(4);

  $core.String get contentText => $_getS(4, '');
  set contentText($core.String v) { $_setString(4, v); }
  $core.bool hasContentText() => $_has(4);
  void clearContentText() => clearField(5);

  $core.String get contentHtml => $_getS(5, '');
  set contentHtml($core.String v) { $_setString(5, v); }
  $core.bool hasContentHtml() => $_has(5);
  void clearContentHtml() => clearField(6);

  $core.String get url => $_getS(6, '');
  set url($core.String v) { $_setString(6, v); }
  $core.bool hasUrl() => $_has(6);
  void clearUrl() => clearField(7);

  $core.String get image => $_getS(7, '');
  set image($core.String v) { $_setString(7, v); }
  $core.bool hasImage() => $_has(7);
  void clearImage() => clearField(8);

  $core.List<$core.String> get tags => $_getList(8);

  $core.String get datePublished => $_getS(9, '');
  set datePublished($core.String v) { $_setString(9, v); }
  $core.bool hasDatePublished() => $_has(9);
  void clearDatePublished() => clearField(10);

  $core.String get dateModified => $_getS(10, '');
  set dateModified($core.String v) { $_setString(10, v); }
  $core.bool hasDateModified() => $_has(10);
  void clearDateModified() => clearField(11);

  Post_Author get author => $_getN(11);
  set author(Post_Author v) { setField(12, v); }
  $core.bool hasAuthor() => $_has(11);
  void clearAuthor() => clearField(12);
}

class Feed extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Feed', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'id')
    ..aOS(2, 'version')
    ..aOS(3, 'title')
    ..aOS(4, 'homePageUrl')
    ..aOS(5, 'description')
    ..aOS(6, 'feedUrl')
    ..aOS(7, 'icon')
    ..aOS(8, 'favicon')
    ..aOB(9, 'expired')
    ..pc<Post>(10, 'items', $pb.PbFieldType.PM,Post.create)
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

  $core.String get id => $_getS(0, '');
  set id($core.String v) { $_setString(0, v); }
  $core.bool hasId() => $_has(0);
  void clearId() => clearField(1);

  $core.String get version => $_getS(1, '');
  set version($core.String v) { $_setString(1, v); }
  $core.bool hasVersion() => $_has(1);
  void clearVersion() => clearField(2);

  $core.String get title => $_getS(2, '');
  set title($core.String v) { $_setString(2, v); }
  $core.bool hasTitle() => $_has(2);
  void clearTitle() => clearField(3);

  $core.String get homePageUrl => $_getS(3, '');
  set homePageUrl($core.String v) { $_setString(3, v); }
  $core.bool hasHomePageUrl() => $_has(3);
  void clearHomePageUrl() => clearField(4);

  $core.String get description => $_getS(4, '');
  set description($core.String v) { $_setString(4, v); }
  $core.bool hasDescription() => $_has(4);
  void clearDescription() => clearField(5);

  $core.String get feedUrl => $_getS(5, '');
  set feedUrl($core.String v) { $_setString(5, v); }
  $core.bool hasFeedUrl() => $_has(5);
  void clearFeedUrl() => clearField(6);

  $core.String get icon => $_getS(6, '');
  set icon($core.String v) { $_setString(6, v); }
  $core.bool hasIcon() => $_has(6);
  void clearIcon() => clearField(7);

  $core.String get favicon => $_getS(7, '');
  set favicon($core.String v) { $_setString(7, v); }
  $core.bool hasFavicon() => $_has(7);
  void clearFavicon() => clearField(8);

  $core.bool get expired => $_get(8, false);
  set expired($core.bool v) { $_setBool(8, v); }
  $core.bool hasExpired() => $_has(8);
  void clearExpired() => clearField(9);

  $core.List<Post> get items => $_getList(9);
}

class FeedStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('FeedStore', package: const $pb.PackageName('dvote'))
    ..pc<Feed>(1, 'feeds', $pb.PbFieldType.PM,Feed.create)
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

  $core.List<Feed> get feeds => $_getList(0);
}

