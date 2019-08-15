///
//  Generated code. Do not modify.
//  source: process.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

const Process$json = const {
  '1': 'Process',
  '2': const [
    const {'1': 'version', '3': 1, '4': 1, '5': 9, '10': 'version'},
    const {'1': 'processId', '3': 2, '4': 1, '5': 9, '10': 'processId'},
    const {'1': 'type', '3': 3, '4': 1, '5': 9, '10': 'type'},
    const {'1': 'startBlock', '3': 4, '4': 1, '5': 5, '10': 'startBlock'},
    const {'1': 'numberOfBlocks', '3': 5, '4': 1, '5': 5, '10': 'numberOfBlocks'},
    const {'1': 'census', '3': 6, '4': 1, '5': 11, '6': '.dvote.Process.Census', '10': 'census'},
    const {'1': 'details', '3': 7, '4': 1, '5': 11, '6': '.dvote.Process.Details', '10': 'details'},
  ],
  '3': const [Process_Census$json, Process_Details$json],
};

const Process_Census$json = const {
  '1': 'Census',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 9, '10': 'id'},
    const {'1': 'merkleRoot', '3': 2, '4': 1, '5': 9, '10': 'merkleRoot'},
    const {'1': 'messagingUris', '3': 3, '4': 3, '5': 9, '10': 'messagingUris'},
  ],
};

const Process_Details$json = const {
  '1': 'Details',
  '2': const [
    const {'1': 'entityId', '3': 1, '4': 1, '5': 9, '10': 'entityId'},
    const {'1': 'encryptionPublicKey', '3': 2, '4': 1, '5': 9, '10': 'encryptionPublicKey'},
    const {'1': 'title', '3': 3, '4': 3, '5': 11, '6': '.dvote.Process.Details.TitleEntry', '10': 'title'},
    const {'1': 'description', '3': 4, '4': 3, '5': 11, '6': '.dvote.Process.Details.DescriptionEntry', '10': 'description'},
    const {'1': 'headerImage', '3': 5, '4': 1, '5': 9, '10': 'headerImage'},
    const {'1': 'questions', '3': 6, '4': 3, '5': 11, '6': '.dvote.Process.Details.Question', '10': 'questions'},
  ],
  '3': const [Process_Details_TitleEntry$json, Process_Details_DescriptionEntry$json, Process_Details_Question$json],
};

const Process_Details_TitleEntry$json = const {
  '1': 'TitleEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const Process_Details_DescriptionEntry$json = const {
  '1': 'DescriptionEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const Process_Details_Question$json = const {
  '1': 'Question',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 9, '10': 'type'},
    const {'1': 'question', '3': 2, '4': 3, '5': 11, '6': '.dvote.Process.Details.Question.QuestionEntry', '10': 'question'},
    const {'1': 'description', '3': 3, '4': 3, '5': 11, '6': '.dvote.Process.Details.Question.DescriptionEntry', '10': 'description'},
    const {'1': 'voteOptions', '3': 4, '4': 3, '5': 11, '6': '.dvote.Process.Details.Question.VoteOption', '10': 'voteOptions'},
  ],
  '3': const [Process_Details_Question_QuestionEntry$json, Process_Details_Question_DescriptionEntry$json, Process_Details_Question_VoteOption$json],
};

const Process_Details_Question_QuestionEntry$json = const {
  '1': 'QuestionEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const Process_Details_Question_DescriptionEntry$json = const {
  '1': 'DescriptionEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const Process_Details_Question_VoteOption$json = const {
  '1': 'VoteOption',
  '2': const [
    const {'1': 'title', '3': 1, '4': 3, '5': 11, '6': '.dvote.Process.Details.Question.VoteOption.TitleEntry', '10': 'title'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '3': const [Process_Details_Question_VoteOption_TitleEntry$json],
};

const Process_Details_Question_VoteOption_TitleEntry$json = const {
  '1': 'TitleEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

