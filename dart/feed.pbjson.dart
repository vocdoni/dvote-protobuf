///
//  Generated code. Do not modify.
//  source: feed.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

const Post$json = const {
  '1': 'Post',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'guid', '3': 2, '4': 1, '5': 9, '10': 'guid'},
    const {'1': 'title', '3': 3, '4': 1, '5': 9, '10': 'title'},
    const {'1': 'summary', '3': 4, '4': 1, '5': 9, '10': 'summary'},
    const {'1': 'content_text', '3': 5, '4': 1, '5': 9, '10': 'contentText'},
    const {'1': 'content_html', '3': 6, '4': 1, '5': 9, '10': 'contentHtml'},
    const {'1': 'url', '3': 7, '4': 1, '5': 9, '10': 'url'},
    const {'1': 'image', '3': 8, '4': 1, '5': 9, '10': 'image'},
    const {'1': 'tags', '3': 9, '4': 3, '5': 9, '10': 'tags'},
    const {'1': 'date_published', '3': 10, '4': 1, '5': 9, '10': 'datePublished'},
    const {'1': 'date_modified', '3': 11, '4': 1, '5': 9, '10': 'dateModified'},
    const {'1': 'author', '3': 12, '4': 1, '5': 11, '6': '.dvote.Post.Author', '10': 'author'},
  ],
  '3': const [Post_Author$json],
};

const Post_Author$json = const {
  '1': 'Author',
  '2': const [
    const {'1': 'name', '3': 1, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'url', '3': 2, '4': 1, '5': 9, '10': 'url'},
  ],
};

const Feed$json = const {
  '1': 'Feed',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'version', '3': 2, '4': 1, '5': 9, '10': 'version'},
    const {'1': 'title', '3': 3, '4': 1, '5': 9, '10': 'title'},
    const {'1': 'home_page_url', '3': 4, '4': 1, '5': 9, '10': 'homePageUrl'},
    const {'1': 'description', '3': 5, '4': 1, '5': 9, '10': 'description'},
    const {'1': 'feed_url', '3': 6, '4': 1, '5': 9, '10': 'feedUrl'},
    const {'1': 'icon', '3': 7, '4': 1, '5': 9, '10': 'icon'},
    const {'1': 'favicon', '3': 8, '4': 1, '5': 9, '10': 'favicon'},
    const {'1': 'expired', '3': 9, '4': 1, '5': 8, '10': 'expired'},
    const {'1': 'items', '3': 10, '4': 3, '5': 11, '6': '.dvote.Post', '10': 'items'},
  ],
};

const FeedStore$json = const {
  '1': 'FeedStore',
  '2': const [
    const {'1': 'feeds', '3': 1, '4': 3, '5': 11, '6': '.dvote.Feed', '10': 'feeds'},
  ],
};

