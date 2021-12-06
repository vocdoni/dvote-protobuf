///
//  Generated code. Do not modify.
//  source: protocol/main-wrappers.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields,deprecated_member_use_from_same_package

import 'dart:core' as $core;
import 'dart:convert' as $convert;
import 'dart:typed_data' as $typed_data;
@$core.Deprecated('Use messageDescriptor instead')
const Message$json = const {
  '1': 'Message',
  '2': const [
    const {'1': 'body', '3': 1, '4': 1, '5': 12, '10': 'body'},
    const {'1': 'signature', '3': 2, '4': 1, '5': 12, '9': 0, '10': 'signature', '17': true},
    const {'1': 'signatureType', '3': 3, '4': 1, '5': 14, '6': '.dvote.types.v2.Message.Signatures', '10': 'signatureType'},
  ],
  '4': const [Message_Signatures$json],
  '8': const [
    const {'1': '_signature'},
  ],
};

@$core.Deprecated('Use messageDescriptor instead')
const Message_Signatures$json = const {
  '1': 'Signatures',
  '2': const [
    const {'1': 'None', '2': 0},
    const {'1': 'Secp256k1', '2': 1},
  ],
};

/// Descriptor for `Message`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List messageDescriptor = $convert.base64Decode('CgdNZXNzYWdlEhIKBGJvZHkYASABKAxSBGJvZHkSIQoJc2lnbmF0dXJlGAIgASgMSABSCXNpZ25hdHVyZYgBARJICg1zaWduYXR1cmVUeXBlGAMgASgOMiIuZHZvdGUudHlwZXMudjIuTWVzc2FnZS5TaWduYXR1cmVzUg1zaWduYXR1cmVUeXBlIiUKClNpZ25hdHVyZXMSCAoETm9uZRAAEg0KCVNlY3AyNTZrMRABQgwKCl9zaWduYXR1cmU=');
@$core.Deprecated('Use bodyDescriptor instead')
const Body$json = const {
  '1': 'Body',
  '2': const [
    const {'1': 'id', '3': 1, '4': 1, '5': 12, '10': 'id'},
    const {'1': 'timestamp', '3': 2, '4': 1, '5': 5, '10': 'timestamp'},
    const {'1': 'transaction', '3': 11, '4': 1, '5': 11, '6': '.dvote.types.v2.Transaction', '9': 0, '10': 'transaction'},
    const {'1': 'receipt', '3': 12, '4': 1, '5': 11, '6': '.dvote.types.v2.TransactionReceipt', '9': 0, '10': 'receipt'},
    const {'1': 'request', '3': 13, '4': 1, '5': 11, '6': '.dvote.types.v2.Request', '9': 0, '10': 'request'},
    const {'1': 'response', '3': 14, '4': 1, '5': 11, '6': '.dvote.types.v2.Response', '9': 0, '10': 'response'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `Body`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List bodyDescriptor = $convert.base64Decode('CgRCb2R5Eg4KAmlkGAEgASgMUgJpZBIcCgl0aW1lc3RhbXAYAiABKAVSCXRpbWVzdGFtcBI/Cgt0cmFuc2FjdGlvbhgLIAEoCzIbLmR2b3RlLnR5cGVzLnYyLlRyYW5zYWN0aW9uSABSC3RyYW5zYWN0aW9uEj4KB3JlY2VpcHQYDCABKAsyIi5kdm90ZS50eXBlcy52Mi5UcmFuc2FjdGlvblJlY2VpcHRIAFIHcmVjZWlwdBIzCgdyZXF1ZXN0GA0gASgLMhcuZHZvdGUudHlwZXMudjIuUmVxdWVzdEgAUgdyZXF1ZXN0EjYKCHJlc3BvbnNlGA4gASgLMhguZHZvdGUudHlwZXMudjIuUmVzcG9uc2VIAFIIcmVzcG9uc2VCBgoEYm9keQ==');
@$core.Deprecated('Use transactionDescriptor instead')
const Transaction$json = const {
  '1': 'Transaction',
  '2': const [
    const {'1': 'setOrganization', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.SetOrganization', '9': 0, '10': 'setOrganization'},
    const {'1': 'transfer', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.Transfer', '9': 0, '10': 'transfer'},
    const {'1': 'mint', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v2.Mint', '9': 0, '10': 'mint'},
    const {'1': 'claimTokens', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v2.ClaimTokens', '9': 0, '10': 'claimTokens'},
    const {'1': 'newElection', '3': 11, '4': 1, '5': 11, '6': '.dvote.types.v2.NewElection', '9': 0, '10': 'newElection'},
    const {'1': 'registerKey', '3': 12, '4': 1, '5': 11, '6': '.dvote.types.v2.RegisterKey', '9': 0, '10': 'registerKey'},
    const {'1': 'submitBallot', '3': 13, '4': 1, '5': 11, '6': '.dvote.types.v2.SubmitBallot', '9': 0, '10': 'submitBallot'},
    const {'1': 'setElectionStatus', '3': 14, '4': 1, '5': 11, '6': '.dvote.types.v2.SetElectionStatus', '9': 0, '10': 'setElectionStatus'},
    const {'1': 'setProposalStatus', '3': 15, '4': 1, '5': 11, '6': '.dvote.types.v2.SetProposalStatus', '9': 0, '10': 'setProposalStatus'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `Transaction`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List transactionDescriptor = $convert.base64Decode('CgtUcmFuc2FjdGlvbhJLCg9zZXRPcmdhbml6YXRpb24YASABKAsyHy5kdm90ZS50eXBlcy52Mi5TZXRPcmdhbml6YXRpb25IAFIPc2V0T3JnYW5pemF0aW9uEjYKCHRyYW5zZmVyGAIgASgLMhguZHZvdGUudHlwZXMudjIuVHJhbnNmZXJIAFIIdHJhbnNmZXISKgoEbWludBgDIAEoCzIULmR2b3RlLnR5cGVzLnYyLk1pbnRIAFIEbWludBI/CgtjbGFpbVRva2VucxgEIAEoCzIbLmR2b3RlLnR5cGVzLnYyLkNsYWltVG9rZW5zSABSC2NsYWltVG9rZW5zEj8KC25ld0VsZWN0aW9uGAsgASgLMhsuZHZvdGUudHlwZXMudjIuTmV3RWxlY3Rpb25IAFILbmV3RWxlY3Rpb24SPwoLcmVnaXN0ZXJLZXkYDCABKAsyGy5kdm90ZS50eXBlcy52Mi5SZWdpc3RlcktleUgAUgtyZWdpc3RlcktleRJCCgxzdWJtaXRCYWxsb3QYDSABKAsyHC5kdm90ZS50eXBlcy52Mi5TdWJtaXRCYWxsb3RIAFIMc3VibWl0QmFsbG90ElEKEXNldEVsZWN0aW9uU3RhdHVzGA4gASgLMiEuZHZvdGUudHlwZXMudjIuU2V0RWxlY3Rpb25TdGF0dXNIAFIRc2V0RWxlY3Rpb25TdGF0dXMSUQoRc2V0UHJvcG9zYWxTdGF0dXMYDyABKAsyIS5kdm90ZS50eXBlcy52Mi5TZXRQcm9wb3NhbFN0YXR1c0gAUhFzZXRQcm9wb3NhbFN0YXR1c0IGCgRib2R5');
@$core.Deprecated('Use transactionReceiptDescriptor instead')
const TransactionReceipt$json = const {
  '1': 'TransactionReceipt',
  '2': const [
    const {'1': 'success', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.TransactionSuccess', '9': 0, '10': 'success'},
    const {'1': 'error', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.TransactionError', '9': 0, '10': 'error'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `TransactionReceipt`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List transactionReceiptDescriptor = $convert.base64Decode('ChJUcmFuc2FjdGlvblJlY2VpcHQSPgoHc3VjY2VzcxgBIAEoCzIiLmR2b3RlLnR5cGVzLnYyLlRyYW5zYWN0aW9uU3VjY2Vzc0gAUgdzdWNjZXNzEjgKBWVycm9yGAIgASgLMiAuZHZvdGUudHlwZXMudjIuVHJhbnNhY3Rpb25FcnJvckgAUgVlcnJvckIGCgRib2R5');
@$core.Deprecated('Use transactionSuccessDescriptor instead')
const TransactionSuccess$json = const {
  '1': 'TransactionSuccess',
  '2': const [
    const {'1': 'hash', '3': 1, '4': 1, '5': 12, '10': 'hash'},
  ],
};

/// Descriptor for `TransactionSuccess`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List transactionSuccessDescriptor = $convert.base64Decode('ChJUcmFuc2FjdGlvblN1Y2Nlc3MSEgoEaGFzaBgBIAEoDFIEaGFzaA==');
@$core.Deprecated('Use transactionErrorDescriptor instead')
const TransactionError$json = const {
  '1': 'TransactionError',
  '2': const [
    const {'1': 'message', '3': 1, '4': 1, '5': 9, '10': 'message'},
    const {'1': 'code', '3': 2, '4': 1, '5': 5, '10': 'code'},
  ],
};

/// Descriptor for `TransactionError`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List transactionErrorDescriptor = $convert.base64Decode('ChBUcmFuc2FjdGlvbkVycm9yEhgKB21lc3NhZ2UYASABKAlSB21lc3NhZ2USEgoEY29kZRgCIAEoBVIEY29kZQ==');
@$core.Deprecated('Use requestDescriptor instead')
const Request$json = const {
  '1': 'Request',
  '2': const [
    const {'1': 'GetElection', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElection', '9': 0, '10': 'GetElection'},
    const {'1': 'GetElectionList', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionList', '9': 0, '10': 'GetElectionList'},
    const {'1': 'GetOrganization', '3': 3, '4': 1, '5': 11, '6': '.dvote.types.v2.GetOrganization', '9': 0, '10': 'GetOrganization'},
    const {'1': 'GetBallot', '3': 4, '4': 1, '5': 11, '6': '.dvote.types.v2.GetBallot', '9': 0, '10': 'GetBallot'},
    const {'1': 'GetElectionBallots', '3': 5, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionBallots', '9': 0, '10': 'GetElectionBallots'},
    const {'1': 'GetElectionKeys', '3': 6, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionKeys', '9': 0, '10': 'GetElectionKeys'},
    const {'1': 'GetElectionCircuitInfo', '3': 7, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionCircuitInfo', '9': 0, '10': 'GetElectionCircuitInfo'},
    const {'1': 'GetElectionResults', '3': 8, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionResults', '9': 0, '10': 'GetElectionResults'},
    const {'1': 'GetElectionWeight', '3': 9, '4': 1, '5': 11, '6': '.dvote.types.v2.GetElectionWeight', '9': 0, '10': 'GetElectionWeight'},
    const {'1': 'NewCensus', '3': 31, '4': 1, '5': 11, '6': '.dvote.types.v2.NewCensus', '9': 0, '10': 'NewCensus'},
    const {'1': 'AddCensusKeys', '3': 32, '4': 1, '5': 11, '6': '.dvote.types.v2.AddCensusKeys', '9': 0, '10': 'AddCensusKeys'},
    const {'1': 'GetCensusRoot', '3': 33, '4': 1, '5': 11, '6': '.dvote.types.v2.GetCensusRoot', '9': 0, '10': 'GetCensusRoot'},
    const {'1': 'GetCensusSize', '3': 34, '4': 1, '5': 11, '6': '.dvote.types.v2.GetCensusSize', '9': 0, '10': 'GetCensusSize'},
    const {'1': 'PublishCensus', '3': 35, '4': 1, '5': 11, '6': '.dvote.types.v2.PublishCensus', '9': 0, '10': 'PublishCensus'},
    const {'1': 'GetCensusProof', '3': 36, '4': 1, '5': 11, '6': '.dvote.types.v2.GetCensusProof', '9': 0, '10': 'GetCensusProof'},
    const {'1': 'DumpCensus', '3': 37, '4': 1, '5': 11, '6': '.dvote.types.v2.DumpCensus', '9': 0, '10': 'DumpCensus'},
    const {'1': 'PinFile', '3': 51, '4': 1, '5': 11, '6': '.dvote.types.v2.PinFile', '9': 0, '10': 'PinFile'},
    const {'1': 'FetchFile', '3': 52, '4': 1, '5': 11, '6': '.dvote.types.v2.FetchFile', '9': 0, '10': 'FetchFile'},
    const {'1': 'GetBlockStatus', '3': 61, '4': 1, '5': 11, '6': '.dvote.types.v2.GetBlockStatus', '9': 0, '10': 'GetBlockStatus'},
    const {'1': 'GetBlockCount', '3': 62, '4': 1, '5': 11, '6': '.dvote.types.v2.GetBlockCount', '9': 0, '10': 'GetBlockCount'},
    const {'1': 'EstimateElectionPrice', '3': 63, '4': 1, '5': 11, '6': '.dvote.types.v2.EstimateElectionPrice', '9': 0, '10': 'EstimateElectionPrice'},
    const {'1': 'GetTransaction', '3': 81, '4': 1, '5': 11, '6': '.dvote.types.v2.GetTransaction', '9': 0, '10': 'GetTransaction'},
    const {'1': 'WaitTransaction', '3': 82, '4': 1, '5': 11, '6': '.dvote.types.v2.WaitTransaction', '9': 0, '10': 'WaitTransaction'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `Request`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List requestDescriptor = $convert.base64Decode('CgdSZXF1ZXN0Ej8KC0dldEVsZWN0aW9uGAEgASgLMhsuZHZvdGUudHlwZXMudjIuR2V0RWxlY3Rpb25IAFILR2V0RWxlY3Rpb24SSwoPR2V0RWxlY3Rpb25MaXN0GAIgASgLMh8uZHZvdGUudHlwZXMudjIuR2V0RWxlY3Rpb25MaXN0SABSD0dldEVsZWN0aW9uTGlzdBJLCg9HZXRPcmdhbml6YXRpb24YAyABKAsyHy5kdm90ZS50eXBlcy52Mi5HZXRPcmdhbml6YXRpb25IAFIPR2V0T3JnYW5pemF0aW9uEjkKCUdldEJhbGxvdBgEIAEoCzIZLmR2b3RlLnR5cGVzLnYyLkdldEJhbGxvdEgAUglHZXRCYWxsb3QSVAoSR2V0RWxlY3Rpb25CYWxsb3RzGAUgASgLMiIuZHZvdGUudHlwZXMudjIuR2V0RWxlY3Rpb25CYWxsb3RzSABSEkdldEVsZWN0aW9uQmFsbG90cxJLCg9HZXRFbGVjdGlvbktleXMYBiABKAsyHy5kdm90ZS50eXBlcy52Mi5HZXRFbGVjdGlvbktleXNIAFIPR2V0RWxlY3Rpb25LZXlzEmAKFkdldEVsZWN0aW9uQ2lyY3VpdEluZm8YByABKAsyJi5kdm90ZS50eXBlcy52Mi5HZXRFbGVjdGlvbkNpcmN1aXRJbmZvSABSFkdldEVsZWN0aW9uQ2lyY3VpdEluZm8SVAoSR2V0RWxlY3Rpb25SZXN1bHRzGAggASgLMiIuZHZvdGUudHlwZXMudjIuR2V0RWxlY3Rpb25SZXN1bHRzSABSEkdldEVsZWN0aW9uUmVzdWx0cxJRChFHZXRFbGVjdGlvbldlaWdodBgJIAEoCzIhLmR2b3RlLnR5cGVzLnYyLkdldEVsZWN0aW9uV2VpZ2h0SABSEUdldEVsZWN0aW9uV2VpZ2h0EjkKCU5ld0NlbnN1cxgfIAEoCzIZLmR2b3RlLnR5cGVzLnYyLk5ld0NlbnN1c0gAUglOZXdDZW5zdXMSRQoNQWRkQ2Vuc3VzS2V5cxggIAEoCzIdLmR2b3RlLnR5cGVzLnYyLkFkZENlbnN1c0tleXNIAFINQWRkQ2Vuc3VzS2V5cxJFCg1HZXRDZW5zdXNSb290GCEgASgLMh0uZHZvdGUudHlwZXMudjIuR2V0Q2Vuc3VzUm9vdEgAUg1HZXRDZW5zdXNSb290EkUKDUdldENlbnN1c1NpemUYIiABKAsyHS5kdm90ZS50eXBlcy52Mi5HZXRDZW5zdXNTaXplSABSDUdldENlbnN1c1NpemUSRQoNUHVibGlzaENlbnN1cxgjIAEoCzIdLmR2b3RlLnR5cGVzLnYyLlB1Ymxpc2hDZW5zdXNIAFINUHVibGlzaENlbnN1cxJICg5HZXRDZW5zdXNQcm9vZhgkIAEoCzIeLmR2b3RlLnR5cGVzLnYyLkdldENlbnN1c1Byb29mSABSDkdldENlbnN1c1Byb29mEjwKCkR1bXBDZW5zdXMYJSABKAsyGi5kdm90ZS50eXBlcy52Mi5EdW1wQ2Vuc3VzSABSCkR1bXBDZW5zdXMSMwoHUGluRmlsZRgzIAEoCzIXLmR2b3RlLnR5cGVzLnYyLlBpbkZpbGVIAFIHUGluRmlsZRI5CglGZXRjaEZpbGUYNCABKAsyGS5kdm90ZS50eXBlcy52Mi5GZXRjaEZpbGVIAFIJRmV0Y2hGaWxlEkgKDkdldEJsb2NrU3RhdHVzGD0gASgLMh4uZHZvdGUudHlwZXMudjIuR2V0QmxvY2tTdGF0dXNIAFIOR2V0QmxvY2tTdGF0dXMSRQoNR2V0QmxvY2tDb3VudBg+IAEoCzIdLmR2b3RlLnR5cGVzLnYyLkdldEJsb2NrQ291bnRIAFINR2V0QmxvY2tDb3VudBJdChVFc3RpbWF0ZUVsZWN0aW9uUHJpY2UYPyABKAsyJS5kdm90ZS50eXBlcy52Mi5Fc3RpbWF0ZUVsZWN0aW9uUHJpY2VIAFIVRXN0aW1hdGVFbGVjdGlvblByaWNlEkgKDkdldFRyYW5zYWN0aW9uGFEgASgLMh4uZHZvdGUudHlwZXMudjIuR2V0VHJhbnNhY3Rpb25IAFIOR2V0VHJhbnNhY3Rpb24SSwoPV2FpdFRyYW5zYWN0aW9uGFIgASgLMh8uZHZvdGUudHlwZXMudjIuV2FpdFRyYW5zYWN0aW9uSABSD1dhaXRUcmFuc2FjdGlvbkIGCgRib2R5');
@$core.Deprecated('Use responseDescriptor instead')
const Response$json = const {
  '1': 'Response',
  '2': const [
    const {'1': 'successResponse', '3': 1, '4': 1, '5': 11, '6': '.dvote.types.v2.SuccessResponse', '9': 0, '10': 'successResponse'},
    const {'1': 'errorResponse', '3': 2, '4': 1, '5': 11, '6': '.dvote.types.v2.ErrorResponse', '9': 0, '10': 'errorResponse'},
  ],
  '8': const [
    const {'1': 'body'},
  ],
};

/// Descriptor for `Response`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List responseDescriptor = $convert.base64Decode('CghSZXNwb25zZRJLCg9zdWNjZXNzUmVzcG9uc2UYASABKAsyHy5kdm90ZS50eXBlcy52Mi5TdWNjZXNzUmVzcG9uc2VIAFIPc3VjY2Vzc1Jlc3BvbnNlEkUKDWVycm9yUmVzcG9uc2UYAiABKAsyHS5kdm90ZS50eXBlcy52Mi5FcnJvclJlc3BvbnNlSABSDWVycm9yUmVzcG9uc2VCBgoEYm9keQ==');
@$core.Deprecated('Use successResponseDescriptor instead')
const SuccessResponse$json = const {
  '1': 'SuccessResponse',
  '2': const [
    const {'1': 'body', '3': 1, '4': 1, '5': 12, '10': 'body'},
  ],
};

/// Descriptor for `SuccessResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List successResponseDescriptor = $convert.base64Decode('Cg9TdWNjZXNzUmVzcG9uc2USEgoEYm9keRgBIAEoDFIEYm9keQ==');
@$core.Deprecated('Use errorResponseDescriptor instead')
const ErrorResponse$json = const {
  '1': 'ErrorResponse',
  '2': const [
    const {'1': 'message', '3': 1, '4': 1, '5': 9, '10': 'message'},
    const {'1': 'body', '3': 2, '4': 1, '5': 12, '10': 'body'},
  ],
};

/// Descriptor for `ErrorResponse`. Decode as a `google.protobuf.DescriptorProto`.
final $typed_data.Uint8List errorResponseDescriptor = $convert.base64Decode('Cg1FcnJvclJlc3BvbnNlEhgKB21lc3NhZ2UYASABKAlSB21lc3NhZ2USEgoEYm9keRgCIAEoDFIEYm9keQ==');
