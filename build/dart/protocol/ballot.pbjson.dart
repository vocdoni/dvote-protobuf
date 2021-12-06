///
//  Generated code. Do not modify.
//  source: protocol/ballot.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use ballotDescriptor instead')
const Ballot$json = const {
  '1': 'Ballot',
  '2': const [
    const {'1': 'signedBallot', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.SignedBallot', '9': 0, '10': 'signedBallot'},
    const {'1': 'ballot', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.BallotBody', '9': 0, '10': 'ballot'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `Ballot`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List ballotDescriptor = $convert.base64Decode('CgZCYWxsb3QSQgoMc2lnbmVkQmFsbG90GAEgASgLMhwuZHZvdGUudHlwZXMudjIuU2lnbmVkQmFsbG90SABSDHNpZ25lZEJhbGxvdBI0CgZiYWxsb3QYAiABKAsyGi5kdm90ZS50eXBlcy52Mi5CYWxsb3RCb2R5SABSBmJhbGxvdEIGCgRib2R5');
@$core.Deprecated('Use ballotBodyDescriptor instead')
const BallotBody$json = const {
  '1': 'BallotBody',
  '2': const [
    const {'1': 'electionId', '3': 1, '4': 1, '5': 12, '10': 'electionId'},
    const {'1': 'nullifier', '3': 2, '4': 1, '5': 12, '10': 'nullifier'},
    const {'1': 'proofs', '3': 3, '4': 3, '5': 11, '6': '.dvote.types.v2.Proof', '10': 'proofs'},
    const {'1': 'votes', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v2.BallotBody.VoteList', '10': 'votes'},
  ],
  '3': const [BallotBody_VoteList$json],
};

@$core.Deprecated('Use ballotBodyDescriptor instead')
const BallotBody_VoteList$json = const {
  '1': 'VoteList',
  '2': const [
    const {'1': 'partial', '3': 1, '4': 1, '5': 8, '10': 'partial'},
    const {'1': 'votes', '3': 2, '4': 3, '5': 11, '6': '.dvote.types.v2.Vote', '10': 'votes'},
    const {'1': 'submittedIndex', '3': 3, '4': 1, '5': 5, '10': 'submittedIndex'},
  ],
};

/// Descriptor for `BallotBody`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List ballotBodyDescriptor = $convert.base64Decode('CgpCYWxsb3RCb2R5Eh4KCmVsZWN0aW9uSWQYASABKAxSCmVsZWN0aW9uSWQSHAoJbnVsbGlmaWVyGAIgASgMUgludWxsaWZpZXISLQoGcHJvb2ZzGAMgAygLMhUuZHZvdGUudHlwZXMudjIuUHJvb2ZSBnByb29mcxI5CgV2b3RlcxgEIAEoCzIjLmR2b3RlLnR5cGVzLnYyLkJhbGxvdEJvZHkuVm90ZUxpc3RSBXZvdGVzGngKCFZvdGVMaXN0EhgKB3BhcnRpYWwYASABKAhSB3BhcnRpYWwSKgoFdm90ZXMYAiADKAsyFC5kdm90ZS50eXBlcy52Mi5Wb3RlUgV2b3RlcxImCg5zdWJtaXR0ZWRJbmRleBgDIAEoBVIOc3VibWl0dGVkSW5kZXg=');
@$core.Deprecated('Use signedBallotDescriptor instead')
const SignedBallot$json = const {
  '1': 'SignedBallot',
  '2': const [
    const {'1': 'ballot', '3': 1, '4': 1, '5': 12, '10': 'ballot'},
    const {'1': 'signature', '3': 2, '4': 1, '5': 12, '10': 'signature'},
    const {'1': 'signatureType', '3': 3, '4': 1, '5': 14, '6': '.dvote.types.v2.SignedBallot.Signatures', '10': 'signatureType'},
  ],
  '4': const [SignedBallot_Signatures$json],
};

@$core.Deprecated('Use signedBallotDescriptor instead')
const SignedBallot_Signatures$json = const {
  '1': 'Signatures',
  '2': const [
    const {'1': 'None', '2': 0},
    const {'1': 'Secp256k1', '2': 1},
  ],
};

/// Descriptor for `SignedBallot`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List signedBallotDescriptor = $convert.base64Decode('CgxTaWduZWRCYWxsb3QSFgoGYmFsbG90GAEgASgMUgZiYWxsb3QSHAoJc2lnbmF0dXJlGAIgASgMUglzaWduYXR1cmUSTQoNc2lnbmF0dXJlVHlwZRgDIAEoDjInLmR2b3RlLnR5cGVzLnYyLlNpZ25lZEJhbGxvdC5TaWduYXR1cmVzUg1zaWduYXR1cmVUeXBlIiUKClNpZ25hdHVyZXMSCAoETm9uZRAAEg0KCVNlY3AyNTZrMRAB');
@$core.Deprecated('Use voteDescriptor instead')
const Vote$json = const {
  '1': 'Vote',
  '2': const [
    const {'1': 'encrypted', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.EncryptedVote', '9': 0, '10': 'encrypted'},
    const {'1': 'approval', '3': 11, '4': 1, '5': 11, '6': '.dvote.types.v2.ApprovalVote', '9': 0, '10': 'approval'},
    const {'1': 'sihgleChoice', '3': 12, '4': 1, '5': 11, '6': '.dvote.types.v2.SingleChoiceVote', '9': 0, '10': 'sihgleChoice'},
    const {'1': 'quadratic', '3': 13, '4': 1, '5': 11, '6': '.dvote.types.v2.QuadraticVote', '9': 0, '10': 'quadratic'},
    const {'1': 'ranked', '3': 14, '4': 1, '5': 11, '6': '.dvote.types.v2.RankedVote', '9': 0, '10': 'ranked'},
    const {'1': 'spread', '3': 15, '4': 1, '5': 11, '6': '.dvote.types.v2.SpreadVote', '9': 0, '10': 'spread'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `Vote`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List voteDescriptor = $convert.base64Decode('CgRWb3RlEj0KCWVuY3J5cHRlZBgBIAEoCzIdLmR2b3RlLnR5cGVzLnYyLkVuY3J5cHRlZFZvdGVIAFIJZW5jcnlwdGVkEjoKCGFwcHJvdmFsGAsgASgLMhwuZHZvdGUudHlwZXMudjIuQXBwcm92YWxWb3RlSABSCGFwcHJvdmFsEkYKDHNpaGdsZUNob2ljZRgMIAEoCzIgLmR2b3RlLnR5cGVzLnYyLlNpbmdsZUNob2ljZVZvdGVIAFIMc2loZ2xlQ2hvaWNlEj0KCXF1YWRyYXRpYxgNIAEoCzIdLmR2b3RlLnR5cGVzLnYyLlF1YWRyYXRpY1ZvdGVIAFIJcXVhZHJhdGljEjQKBnJhbmtlZBgOIAEoCzIaLmR2b3RlLnR5cGVzLnYyLlJhbmtlZFZvdGVIAFIGcmFua2VkEjQKBnNwcmVhZBgPIAEoCzIaLmR2b3RlLnR5cGVzLnYyLlNwcmVhZFZvdGVIAFIGc3ByZWFkQgYKBGJvZHk=');
@$core.Deprecated('Use encryptedVoteDescriptor instead')
const EncryptedVote$json = const {
  '1': 'EncryptedVote',
  '2': const [
    const {'1': 'payload', '3': 1, '4': 1, '5': 12, '10': 'payload'},
    const {'1': 'encryptionKeyIndexes', '3': 2, '4': 3, '5': 5, '10': 'encryptionKeyIndexes'},
  ],
};

/// Descriptor for `EncryptedVote`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List encryptedVoteDescriptor = $convert.base64Decode('Cg1FbmNyeXB0ZWRWb3RlEhgKB3BheWxvYWQYASABKAxSB3BheWxvYWQSMgoUZW5jcnlwdGlvbktleUluZGV4ZXMYAiADKAVSFGVuY3J5cHRpb25LZXlJbmRleGVz');
@$core.Deprecated('Use approvalVoteDescriptor instead')
const ApprovalVote$json = const {
  '1': 'ApprovalVote',
  '2': const [
    const {'1': 'approved', '3': 1, '4': 1, '5': 8, '10': 'approved'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 12, '10': 'nonce'},
  ],
};

/// Descriptor for `ApprovalVote`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List approvalVoteDescriptor = $convert.base64Decode('CgxBcHByb3ZhbFZvdGUSGgoIYXBwcm92ZWQYASABKAhSCGFwcHJvdmVkEhQKBW5vbmNlGAIgASgMUgVub25jZQ==');
@$core.Deprecated('Use singleChoiceVoteDescriptor instead')
const SingleChoiceVote$json = const {
  '1': 'SingleChoiceVote',
  '2': const [
    const {'1': 'choice', '3': 1, '4': 1, '5': 5, '10': 'choice'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 12, '10': 'nonce'},
  ],
};

/// Descriptor for `SingleChoiceVote`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List singleChoiceVoteDescriptor = $convert.base64Decode('ChBTaW5nbGVDaG9pY2VWb3RlEhYKBmNob2ljZRgBIAEoBVIGY2hvaWNlEhQKBW5vbmNlGAIgASgMUgVub25jZQ==');
@$core.Deprecated('Use quadraticVoteDescriptor instead')
const QuadraticVote$json = const {
  '1': 'QuadraticVote',
  '2': const [
    const {'1': 'choicePoints', '3': 1, '4': 3, '5': 5, '10': 'choicePoints'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 12, '10': 'nonce'},
  ],
};

/// Descriptor for `QuadraticVote`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List quadraticVoteDescriptor = $convert.base64Decode('Cg1RdWFkcmF0aWNWb3RlEiIKDGNob2ljZVBvaW50cxgBIAMoBVIMY2hvaWNlUG9pbnRzEhQKBW5vbmNlGAIgASgMUgVub25jZQ==');
@$core.Deprecated('Use rankedVoteDescriptor instead')
const RankedVote$json = const {
  '1': 'RankedVote',
  '2': const [
    const {'1': 'ranking', '3': 1, '4': 3, '5': 5, '10': 'ranking'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 12, '10': 'nonce'},
  ],
};

/// Descriptor for `RankedVote`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List rankedVoteDescriptor = $convert.base64Decode('CgpSYW5rZWRWb3RlEhgKB3JhbmtpbmcYASADKAVSB3JhbmtpbmcSFAoFbm9uY2UYAiABKAxSBW5vbmNl');
@$core.Deprecated('Use spreadVoteDescriptor instead')
const SpreadVote$json = const {
  '1': 'SpreadVote',
  '2': const [
    const {'1': 'percentages', '3': 1, '4': 3, '5': 5, '10': 'percentages'},
    const {'1': 'nonce', '3': 2, '4': 1, '5': 12, '10': 'nonce'},
  ],
};

/// Descriptor for `SpreadVote`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List spreadVoteDescriptor = $convert.base64Decode('CgpTcHJlYWRWb3RlEiAKC3BlcmNlbnRhZ2VzGAEgAygFUgtwZXJjZW50YWdlcxIUCgVub25jZRgCIAEoDFIFbm9uY2U=');
