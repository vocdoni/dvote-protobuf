///
//  Generated code. Do not modify.
//  source: metadata/process.proto
//
// @dart = 2.3
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

const ProcessMetadataStore$json = const {
  '1': 'ProcessMetadataStore',
  '2': const [
    const {'1': 'items', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata', '10': 'items'},
  ],
};

const ProcessMetadata$json = const {
  '1': 'ProcessMetadata',
  '2': const [
    const {'1': 'version', '3': 1, '4': 1, '5': 9, '10': 'version'},
    const {'1': 'title', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.TitleEntry', '10': 'title'},
    const {'1': 'description', '3': 3, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.DescriptionEntry', '10': 'description'},
    const {'1': 'media', '3': 4, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.MediaEntry', '10': 'media'},
    const {'1': 'questions', '3': 5, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.Question', '10': 'questions'},
    const {'1': 'meta', '3': 100, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.MetaEntry', '10': 'meta'},
  ],
  '3': const [ProcessMetadata_TitleEntry$json, ProcessMetadata_DescriptionEntry$json, ProcessMetadata_MediaEntry$json, ProcessMetadata_Question$json, ProcessMetadata_MetaEntry$json],
};

const ProcessMetadata_TitleEntry$json = const {
  '1': 'TitleEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const ProcessMetadata_DescriptionEntry$json = const {
  '1': 'DescriptionEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const ProcessMetadata_MediaEntry$json = const {
  '1': 'MediaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const ProcessMetadata_Question$json = const {
  '1': 'Question',
  '2': const [
    const {'1': 'title', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.Question.TitleEntry', '10': 'title'},
    const {'1': 'description', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.Question.DescriptionEntry', '10': 'description'},
    const {'1': 'choices', '3': 3, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.Question.VoteOption', '10': 'choices'},
  ],
  '3': const [ProcessMetadata_Question_TitleEntry$json, ProcessMetadata_Question_DescriptionEntry$json, ProcessMetadata_Question_VoteOption$json],
};

const ProcessMetadata_Question_TitleEntry$json = const {
  '1': 'TitleEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const ProcessMetadata_Question_DescriptionEntry$json = const {
  '1': 'DescriptionEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const ProcessMetadata_Question_VoteOption$json = const {
  '1': 'VoteOption',
  '2': const [
    const {'1': 'title', '3': 1, '4': 3, '5': 11, '6': '.dvote.types.v1.ProcessMetadata.Question.VoteOption.TitleEntry', '10': 'title'},
    const {'1': 'value', '3': 2, '4': 1, '5': 5, '10': 'value'},
  ],
  '3': const [ProcessMetadata_Question_VoteOption_TitleEntry$json],
};

const ProcessMetadata_Question_VoteOption_TitleEntry$json = const {
  '1': 'TitleEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const ProcessMetadata_MetaEntry$json = const {
  '1': 'MetaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

