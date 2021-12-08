///
//  Generated code. Do not modify.
//  source: protocol/service.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'election.pb.dart' as $0;
import 'organization.pb.dart' as $1;
import 'ballot.pb.dart' as $2;
import 'results.pb.dart' as $3;
import 'census.pb.dart' as $4;

import 'enums.pbenum.dart' as $5;

enum ElectionRequest_Body {
  getElection, 
  getElectionList, 
  getOrganization, 
  getBallot, 
  getElectionBallots, 
  getElectionKeys, 
  getElectionCircuitInfo, 
  getElectionResults, 
  getElectionWeight, 
  notSet
}

class ElectionRequest extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, ElectionRequest_Body> _ElectionRequest_BodyByTag = {
    2 : ElectionRequest_Body.getElection,
    3 : ElectionRequest_Body.getElectionList,
    4 : ElectionRequest_Body.getOrganization,
    5 : ElectionRequest_Body.getBallot,
    6 : ElectionRequest_Body.getElectionBallots,
    7 : ElectionRequest_Body.getElectionKeys,
    8 : ElectionRequest_Body.getElectionCircuitInfo,
    9 : ElectionRequest_Body.getElectionResults,
    10 : ElectionRequest_Body.getElectionWeight,
    0 : ElectionRequest_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ElectionRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [2, 3, 4, 5, 6, 7, 8, 9, 10])
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..aOM<GetElection>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getElection', protoName: 'getElection', subBuilder: GetElection.create)
    ..aOM<GetElectionList>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getElectionList', protoName: 'getElectionList', subBuilder: GetElectionList.create)
    ..aOM<GetOrganization>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getOrganization', protoName: 'getOrganization', subBuilder: GetOrganization.create)
    ..aOM<GetBallot>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getBallot', protoName: 'getBallot', subBuilder: GetBallot.create)
    ..aOM<GetElectionBallots>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getElectionBallots', protoName: 'getElectionBallots', subBuilder: GetElectionBallots.create)
    ..aOM<GetElectionKeys>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getElectionKeys', protoName: 'getElectionKeys', subBuilder: GetElectionKeys.create)
    ..aOM<GetElectionCircuitInfo>(8, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getElectionCircuitInfo', protoName: 'getElectionCircuitInfo', subBuilder: GetElectionCircuitInfo.create)
    ..aOM<GetElectionResults>(9, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getElectionResults', protoName: 'getElectionResults', subBuilder: GetElectionResults.create)
    ..aOM<GetElectionWeight>(10, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getElectionWeight', protoName: 'getElectionWeight', subBuilder: GetElectionWeight.create)
    ..hasRequiredFields = false
  ;

  ElectionRequest._() : super();
  factory ElectionRequest({
    $core.List<$core.int>? electionId,
    GetElection? getElection,
    GetElectionList? getElectionList,
    GetOrganization? getOrganization,
    GetBallot? getBallot,
    GetElectionBallots? getElectionBallots,
    GetElectionKeys? getElectionKeys,
    GetElectionCircuitInfo? getElectionCircuitInfo,
    GetElectionResults? getElectionResults,
    GetElectionWeight? getElectionWeight,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    if (getElection != null) {
      _result.getElection = getElection;
    }
    if (getElectionList != null) {
      _result.getElectionList = getElectionList;
    }
    if (getOrganization != null) {
      _result.getOrganization = getOrganization;
    }
    if (getBallot != null) {
      _result.getBallot = getBallot;
    }
    if (getElectionBallots != null) {
      _result.getElectionBallots = getElectionBallots;
    }
    if (getElectionKeys != null) {
      _result.getElectionKeys = getElectionKeys;
    }
    if (getElectionCircuitInfo != null) {
      _result.getElectionCircuitInfo = getElectionCircuitInfo;
    }
    if (getElectionResults != null) {
      _result.getElectionResults = getElectionResults;
    }
    if (getElectionWeight != null) {
      _result.getElectionWeight = getElectionWeight;
    }
    return _result;
  }
  factory ElectionRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ElectionRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ElectionRequest clone() => ElectionRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ElectionRequest copyWith(void Function(ElectionRequest) updates) => super.copyWith((message) => updates(message as ElectionRequest)) as ElectionRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ElectionRequest create() => ElectionRequest._();
  ElectionRequest createEmptyInstance() => create();
  static $pb.PbList<ElectionRequest> createRepeated() => $pb.PbList<ElectionRequest>();
  @$core.pragma('dart2js:noInline')
  static ElectionRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ElectionRequest>(create);
  static ElectionRequest? _defaultInstance;

  ElectionRequest_Body whichBody() => _ElectionRequest_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);

  @$pb.TagNumber(2)
  GetElection get getElection => $_getN(1);
  @$pb.TagNumber(2)
  set getElection(GetElection v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasGetElection() => $_has(1);
  @$pb.TagNumber(2)
  void clearGetElection() => clearField(2);
  @$pb.TagNumber(2)
  GetElection ensureGetElection() => $_ensure(1);

  @$pb.TagNumber(3)
  GetElectionList get getElectionList => $_getN(2);
  @$pb.TagNumber(3)
  set getElectionList(GetElectionList v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasGetElectionList() => $_has(2);
  @$pb.TagNumber(3)
  void clearGetElectionList() => clearField(3);
  @$pb.TagNumber(3)
  GetElectionList ensureGetElectionList() => $_ensure(2);

  @$pb.TagNumber(4)
  GetOrganization get getOrganization => $_getN(3);
  @$pb.TagNumber(4)
  set getOrganization(GetOrganization v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasGetOrganization() => $_has(3);
  @$pb.TagNumber(4)
  void clearGetOrganization() => clearField(4);
  @$pb.TagNumber(4)
  GetOrganization ensureGetOrganization() => $_ensure(3);

  @$pb.TagNumber(5)
  GetBallot get getBallot => $_getN(4);
  @$pb.TagNumber(5)
  set getBallot(GetBallot v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasGetBallot() => $_has(4);
  @$pb.TagNumber(5)
  void clearGetBallot() => clearField(5);
  @$pb.TagNumber(5)
  GetBallot ensureGetBallot() => $_ensure(4);

  @$pb.TagNumber(6)
  GetElectionBallots get getElectionBallots => $_getN(5);
  @$pb.TagNumber(6)
  set getElectionBallots(GetElectionBallots v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasGetElectionBallots() => $_has(5);
  @$pb.TagNumber(6)
  void clearGetElectionBallots() => clearField(6);
  @$pb.TagNumber(6)
  GetElectionBallots ensureGetElectionBallots() => $_ensure(5);

  @$pb.TagNumber(7)
  GetElectionKeys get getElectionKeys => $_getN(6);
  @$pb.TagNumber(7)
  set getElectionKeys(GetElectionKeys v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasGetElectionKeys() => $_has(6);
  @$pb.TagNumber(7)
  void clearGetElectionKeys() => clearField(7);
  @$pb.TagNumber(7)
  GetElectionKeys ensureGetElectionKeys() => $_ensure(6);

  @$pb.TagNumber(8)
  GetElectionCircuitInfo get getElectionCircuitInfo => $_getN(7);
  @$pb.TagNumber(8)
  set getElectionCircuitInfo(GetElectionCircuitInfo v) { setField(8, v); }
  @$pb.TagNumber(8)
  $core.bool hasGetElectionCircuitInfo() => $_has(7);
  @$pb.TagNumber(8)
  void clearGetElectionCircuitInfo() => clearField(8);
  @$pb.TagNumber(8)
  GetElectionCircuitInfo ensureGetElectionCircuitInfo() => $_ensure(7);

  @$pb.TagNumber(9)
  GetElectionResults get getElectionResults => $_getN(8);
  @$pb.TagNumber(9)
  set getElectionResults(GetElectionResults v) { setField(9, v); }
  @$pb.TagNumber(9)
  $core.bool hasGetElectionResults() => $_has(8);
  @$pb.TagNumber(9)
  void clearGetElectionResults() => clearField(9);
  @$pb.TagNumber(9)
  GetElectionResults ensureGetElectionResults() => $_ensure(8);

  @$pb.TagNumber(10)
  GetElectionWeight get getElectionWeight => $_getN(9);
  @$pb.TagNumber(10)
  set getElectionWeight(GetElectionWeight v) { setField(10, v); }
  @$pb.TagNumber(10)
  $core.bool hasGetElectionWeight() => $_has(9);
  @$pb.TagNumber(10)
  void clearGetElectionWeight() => clearField(10);
  @$pb.TagNumber(10)
  GetElectionWeight ensureGetElectionWeight() => $_ensure(9);
}

enum CensusRequest_Body {
  newCensus, 
  addCensusKeys, 
  getCensusRoot, 
  getCensusSize, 
  publishCensus, 
  getCensusProof, 
  dumpCensus, 
  notSet
}

class CensusRequest extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, CensusRequest_Body> _CensusRequest_BodyByTag = {
    1 : CensusRequest_Body.newCensus,
    2 : CensusRequest_Body.addCensusKeys,
    3 : CensusRequest_Body.getCensusRoot,
    4 : CensusRequest_Body.getCensusSize,
    5 : CensusRequest_Body.publishCensus,
    6 : CensusRequest_Body.getCensusProof,
    7 : CensusRequest_Body.dumpCensus,
    0 : CensusRequest_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CensusRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2, 3, 4, 5, 6, 7])
    ..aOM<NewCensus>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'newCensus', protoName: 'newCensus', subBuilder: NewCensus.create)
    ..aOM<AddCensusKeys>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'addCensusKeys', protoName: 'addCensusKeys', subBuilder: AddCensusKeys.create)
    ..aOM<GetCensusRoot>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getCensusRoot', protoName: 'getCensusRoot', subBuilder: GetCensusRoot.create)
    ..aOM<GetCensusSize>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getCensusSize', protoName: 'getCensusSize', subBuilder: GetCensusSize.create)
    ..aOM<PublishCensus>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'publishCensus', protoName: 'publishCensus', subBuilder: PublishCensus.create)
    ..aOM<GetCensusProof>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getCensusProof', protoName: 'getCensusProof', subBuilder: GetCensusProof.create)
    ..aOM<DumpCensus>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'dumpCensus', protoName: 'dumpCensus', subBuilder: DumpCensus.create)
    ..hasRequiredFields = false
  ;

  CensusRequest._() : super();
  factory CensusRequest({
    NewCensus? newCensus,
    AddCensusKeys? addCensusKeys,
    GetCensusRoot? getCensusRoot,
    GetCensusSize? getCensusSize,
    PublishCensus? publishCensus,
    GetCensusProof? getCensusProof,
    DumpCensus? dumpCensus,
  }) {
    final _result = create();
    if (newCensus != null) {
      _result.newCensus = newCensus;
    }
    if (addCensusKeys != null) {
      _result.addCensusKeys = addCensusKeys;
    }
    if (getCensusRoot != null) {
      _result.getCensusRoot = getCensusRoot;
    }
    if (getCensusSize != null) {
      _result.getCensusSize = getCensusSize;
    }
    if (publishCensus != null) {
      _result.publishCensus = publishCensus;
    }
    if (getCensusProof != null) {
      _result.getCensusProof = getCensusProof;
    }
    if (dumpCensus != null) {
      _result.dumpCensus = dumpCensus;
    }
    return _result;
  }
  factory CensusRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CensusRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CensusRequest clone() => CensusRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CensusRequest copyWith(void Function(CensusRequest) updates) => super.copyWith((message) => updates(message as CensusRequest)) as CensusRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CensusRequest create() => CensusRequest._();
  CensusRequest createEmptyInstance() => create();
  static $pb.PbList<CensusRequest> createRepeated() => $pb.PbList<CensusRequest>();
  @$core.pragma('dart2js:noInline')
  static CensusRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CensusRequest>(create);
  static CensusRequest? _defaultInstance;

  CensusRequest_Body whichBody() => _CensusRequest_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  NewCensus get newCensus => $_getN(0);
  @$pb.TagNumber(1)
  set newCensus(NewCensus v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasNewCensus() => $_has(0);
  @$pb.TagNumber(1)
  void clearNewCensus() => clearField(1);
  @$pb.TagNumber(1)
  NewCensus ensureNewCensus() => $_ensure(0);

  @$pb.TagNumber(2)
  AddCensusKeys get addCensusKeys => $_getN(1);
  @$pb.TagNumber(2)
  set addCensusKeys(AddCensusKeys v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasAddCensusKeys() => $_has(1);
  @$pb.TagNumber(2)
  void clearAddCensusKeys() => clearField(2);
  @$pb.TagNumber(2)
  AddCensusKeys ensureAddCensusKeys() => $_ensure(1);

  @$pb.TagNumber(3)
  GetCensusRoot get getCensusRoot => $_getN(2);
  @$pb.TagNumber(3)
  set getCensusRoot(GetCensusRoot v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasGetCensusRoot() => $_has(2);
  @$pb.TagNumber(3)
  void clearGetCensusRoot() => clearField(3);
  @$pb.TagNumber(3)
  GetCensusRoot ensureGetCensusRoot() => $_ensure(2);

  @$pb.TagNumber(4)
  GetCensusSize get getCensusSize => $_getN(3);
  @$pb.TagNumber(4)
  set getCensusSize(GetCensusSize v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasGetCensusSize() => $_has(3);
  @$pb.TagNumber(4)
  void clearGetCensusSize() => clearField(4);
  @$pb.TagNumber(4)
  GetCensusSize ensureGetCensusSize() => $_ensure(3);

  @$pb.TagNumber(5)
  PublishCensus get publishCensus => $_getN(4);
  @$pb.TagNumber(5)
  set publishCensus(PublishCensus v) { setField(5, v); }
  @$pb.TagNumber(5)
  $core.bool hasPublishCensus() => $_has(4);
  @$pb.TagNumber(5)
  void clearPublishCensus() => clearField(5);
  @$pb.TagNumber(5)
  PublishCensus ensurePublishCensus() => $_ensure(4);

  @$pb.TagNumber(6)
  GetCensusProof get getCensusProof => $_getN(5);
  @$pb.TagNumber(6)
  set getCensusProof(GetCensusProof v) { setField(6, v); }
  @$pb.TagNumber(6)
  $core.bool hasGetCensusProof() => $_has(5);
  @$pb.TagNumber(6)
  void clearGetCensusProof() => clearField(6);
  @$pb.TagNumber(6)
  GetCensusProof ensureGetCensusProof() => $_ensure(5);

  @$pb.TagNumber(7)
  DumpCensus get dumpCensus => $_getN(6);
  @$pb.TagNumber(7)
  set dumpCensus(DumpCensus v) { setField(7, v); }
  @$pb.TagNumber(7)
  $core.bool hasDumpCensus() => $_has(6);
  @$pb.TagNumber(7)
  void clearDumpCensus() => clearField(7);
  @$pb.TagNumber(7)
  DumpCensus ensureDumpCensus() => $_ensure(6);
}

enum FileRequest_Body {
  pinFile, 
  fetchFile, 
  notSet
}

class FileRequest extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, FileRequest_Body> _FileRequest_BodyByTag = {
    1 : FileRequest_Body.pinFile,
    2 : FileRequest_Body.fetchFile,
    0 : FileRequest_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'FileRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2])
    ..aOM<PinFile>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'pinFile', protoName: 'pinFile', subBuilder: PinFile.create)
    ..aOM<FetchFile>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'fetchFile', protoName: 'fetchFile', subBuilder: FetchFile.create)
    ..hasRequiredFields = false
  ;

  FileRequest._() : super();
  factory FileRequest({
    PinFile? pinFile,
    FetchFile? fetchFile,
  }) {
    final _result = create();
    if (pinFile != null) {
      _result.pinFile = pinFile;
    }
    if (fetchFile != null) {
      _result.fetchFile = fetchFile;
    }
    return _result;
  }
  factory FileRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FileRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  FileRequest clone() => FileRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  FileRequest copyWith(void Function(FileRequest) updates) => super.copyWith((message) => updates(message as FileRequest)) as FileRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FileRequest create() => FileRequest._();
  FileRequest createEmptyInstance() => create();
  static $pb.PbList<FileRequest> createRepeated() => $pb.PbList<FileRequest>();
  @$core.pragma('dart2js:noInline')
  static FileRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FileRequest>(create);
  static FileRequest? _defaultInstance;

  FileRequest_Body whichBody() => _FileRequest_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  PinFile get pinFile => $_getN(0);
  @$pb.TagNumber(1)
  set pinFile(PinFile v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasPinFile() => $_has(0);
  @$pb.TagNumber(1)
  void clearPinFile() => clearField(1);
  @$pb.TagNumber(1)
  PinFile ensurePinFile() => $_ensure(0);

  @$pb.TagNumber(2)
  FetchFile get fetchFile => $_getN(1);
  @$pb.TagNumber(2)
  set fetchFile(FetchFile v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasFetchFile() => $_has(1);
  @$pb.TagNumber(2)
  void clearFetchFile() => clearField(2);
  @$pb.TagNumber(2)
  FetchFile ensureFetchFile() => $_ensure(1);
}

enum NetworkRequest_Body {
  getBlockStatus, 
  getBlockCount, 
  estimateElectionPrice, 
  notSet
}

class NetworkRequest extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, NetworkRequest_Body> _NetworkRequest_BodyByTag = {
    1 : NetworkRequest_Body.getBlockStatus,
    2 : NetworkRequest_Body.getBlockCount,
    3 : NetworkRequest_Body.estimateElectionPrice,
    0 : NetworkRequest_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'NetworkRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2, 3])
    ..aOM<GetBlockStatus>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getBlockStatus', protoName: 'getBlockStatus', subBuilder: GetBlockStatus.create)
    ..aOM<GetBlockCount>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getBlockCount', protoName: 'getBlockCount', subBuilder: GetBlockCount.create)
    ..aOM<EstimateElectionPrice>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'estimateElectionPrice', protoName: 'estimateElectionPrice', subBuilder: EstimateElectionPrice.create)
    ..hasRequiredFields = false
  ;

  NetworkRequest._() : super();
  factory NetworkRequest({
    GetBlockStatus? getBlockStatus,
    GetBlockCount? getBlockCount,
    EstimateElectionPrice? estimateElectionPrice,
  }) {
    final _result = create();
    if (getBlockStatus != null) {
      _result.getBlockStatus = getBlockStatus;
    }
    if (getBlockCount != null) {
      _result.getBlockCount = getBlockCount;
    }
    if (estimateElectionPrice != null) {
      _result.estimateElectionPrice = estimateElectionPrice;
    }
    return _result;
  }
  factory NetworkRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory NetworkRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  NetworkRequest clone() => NetworkRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  NetworkRequest copyWith(void Function(NetworkRequest) updates) => super.copyWith((message) => updates(message as NetworkRequest)) as NetworkRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static NetworkRequest create() => NetworkRequest._();
  NetworkRequest createEmptyInstance() => create();
  static $pb.PbList<NetworkRequest> createRepeated() => $pb.PbList<NetworkRequest>();
  @$core.pragma('dart2js:noInline')
  static NetworkRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<NetworkRequest>(create);
  static NetworkRequest? _defaultInstance;

  NetworkRequest_Body whichBody() => _NetworkRequest_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  GetBlockStatus get getBlockStatus => $_getN(0);
  @$pb.TagNumber(1)
  set getBlockStatus(GetBlockStatus v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasGetBlockStatus() => $_has(0);
  @$pb.TagNumber(1)
  void clearGetBlockStatus() => clearField(1);
  @$pb.TagNumber(1)
  GetBlockStatus ensureGetBlockStatus() => $_ensure(0);

  @$pb.TagNumber(2)
  GetBlockCount get getBlockCount => $_getN(1);
  @$pb.TagNumber(2)
  set getBlockCount(GetBlockCount v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasGetBlockCount() => $_has(1);
  @$pb.TagNumber(2)
  void clearGetBlockCount() => clearField(2);
  @$pb.TagNumber(2)
  GetBlockCount ensureGetBlockCount() => $_ensure(1);

  @$pb.TagNumber(3)
  EstimateElectionPrice get estimateElectionPrice => $_getN(2);
  @$pb.TagNumber(3)
  set estimateElectionPrice(EstimateElectionPrice v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasEstimateElectionPrice() => $_has(2);
  @$pb.TagNumber(3)
  void clearEstimateElectionPrice() => clearField(3);
  @$pb.TagNumber(3)
  EstimateElectionPrice ensureEstimateElectionPrice() => $_ensure(2);
}

enum TransactionRequest_Body {
  getTx, 
  waitTx, 
  notSet
}

class TransactionRequest extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, TransactionRequest_Body> _TransactionRequest_BodyByTag = {
    1 : TransactionRequest_Body.getTx,
    2 : TransactionRequest_Body.waitTx,
    0 : TransactionRequest_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'TransactionRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2])
    ..aOM<GetTransaction>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'getTx', protoName: 'getTx', subBuilder: GetTransaction.create)
    ..aOM<WaitTransaction>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'waitTx', protoName: 'waitTx', subBuilder: WaitTransaction.create)
    ..hasRequiredFields = false
  ;

  TransactionRequest._() : super();
  factory TransactionRequest({
    GetTransaction? getTx,
    WaitTransaction? waitTx,
  }) {
    final _result = create();
    if (getTx != null) {
      _result.getTx = getTx;
    }
    if (waitTx != null) {
      _result.waitTx = waitTx;
    }
    return _result;
  }
  factory TransactionRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory TransactionRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  TransactionRequest clone() => TransactionRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  TransactionRequest copyWith(void Function(TransactionRequest) updates) => super.copyWith((message) => updates(message as TransactionRequest)) as TransactionRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static TransactionRequest create() => TransactionRequest._();
  TransactionRequest createEmptyInstance() => create();
  static $pb.PbList<TransactionRequest> createRepeated() => $pb.PbList<TransactionRequest>();
  @$core.pragma('dart2js:noInline')
  static TransactionRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<TransactionRequest>(create);
  static TransactionRequest? _defaultInstance;

  TransactionRequest_Body whichBody() => _TransactionRequest_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  GetTransaction get getTx => $_getN(0);
  @$pb.TagNumber(1)
  set getTx(GetTransaction v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasGetTx() => $_has(0);
  @$pb.TagNumber(1)
  void clearGetTx() => clearField(1);
  @$pb.TagNumber(1)
  GetTransaction ensureGetTx() => $_ensure(0);

  @$pb.TagNumber(2)
  WaitTransaction get waitTx => $_getN(1);
  @$pb.TagNumber(2)
  set waitTx(WaitTransaction v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasWaitTx() => $_has(1);
  @$pb.TagNumber(2)
  void clearWaitTx() => clearField(2);
  @$pb.TagNumber(2)
  WaitTransaction ensureWaitTx() => $_ensure(1);
}

class GetElection extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElection', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..hasRequiredFields = false
  ;

  GetElection._() : super();
  factory GetElection({
    $core.List<$core.int>? electionId,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    return _result;
  }
  factory GetElection.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElection.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElection clone() => GetElection()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElection copyWith(void Function(GetElection) updates) => super.copyWith((message) => updates(message as GetElection)) as GetElection; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElection create() => GetElection._();
  GetElection createEmptyInstance() => create();
  static $pb.PbList<GetElection> createRepeated() => $pb.PbList<GetElection>();
  @$core.pragma('dart2js:noInline')
  static GetElection getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElection>(create);
  static GetElection? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);
}

class GetElectionResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizationId', $pb.PbFieldType.OY, protoName: 'organizationId')
    ..aOM<$0.Election>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'parameters', subBuilder: $0.Election.create)
    ..pc<$5.ProposalStatus>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'statuses', $pb.PbFieldType.PE, valueOf: $5.ProposalStatus.valueOf, enumValues: $5.ProposalStatus.values)
    ..p<$core.int>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ballotCounts', $pb.PbFieldType.P3, protoName: 'ballotCounts')
    ..hasRequiredFields = false
  ;

  GetElectionResponse._() : super();
  factory GetElectionResponse({
    $core.List<$core.int>? organizationId,
    $0.Election? parameters,
    $core.Iterable<$5.ProposalStatus>? statuses,
    $core.Iterable<$core.int>? ballotCounts,
  }) {
    final _result = create();
    if (organizationId != null) {
      _result.organizationId = organizationId;
    }
    if (parameters != null) {
      _result.parameters = parameters;
    }
    if (statuses != null) {
      _result.statuses.addAll(statuses);
    }
    if (ballotCounts != null) {
      _result.ballotCounts.addAll(ballotCounts);
    }
    return _result;
  }
  factory GetElectionResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionResponse clone() => GetElectionResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionResponse copyWith(void Function(GetElectionResponse) updates) => super.copyWith((message) => updates(message as GetElectionResponse)) as GetElectionResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionResponse create() => GetElectionResponse._();
  GetElectionResponse createEmptyInstance() => create();
  static $pb.PbList<GetElectionResponse> createRepeated() => $pb.PbList<GetElectionResponse>();
  @$core.pragma('dart2js:noInline')
  static GetElectionResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionResponse>(create);
  static GetElectionResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get organizationId => $_getN(0);
  @$pb.TagNumber(1)
  set organizationId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasOrganizationId() => $_has(0);
  @$pb.TagNumber(1)
  void clearOrganizationId() => clearField(1);

  @$pb.TagNumber(2)
  $0.Election get parameters => $_getN(1);
  @$pb.TagNumber(2)
  set parameters($0.Election v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasParameters() => $_has(1);
  @$pb.TagNumber(2)
  void clearParameters() => clearField(2);
  @$pb.TagNumber(2)
  $0.Election ensureParameters() => $_ensure(1);

  @$pb.TagNumber(3)
  $core.List<$5.ProposalStatus> get statuses => $_getList(2);

  @$pb.TagNumber(4)
  $core.List<$core.int> get ballotCounts => $_getList(3);
}

class GetElectionList extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionList', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'fromIndex', $pb.PbFieldType.O3, protoName: 'fromIndex')
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizationId', $pb.PbFieldType.OY, protoName: 'organizationId')
    ..a<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'tokenAddress', $pb.PbFieldType.OY, protoName: 'tokenAddress')
    ..e<$5.ProposalStatus>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'status', $pb.PbFieldType.OE, defaultOrMaker: $5.ProposalStatus.UNKNOWN_PROPOSAL_STATUS, valueOf: $5.ProposalStatus.valueOf, enumValues: $5.ProposalStatus.values)
    ..hasRequiredFields = false
  ;

  GetElectionList._() : super();
  factory GetElectionList({
    $core.int? fromIndex,
    $core.List<$core.int>? organizationId,
    $core.List<$core.int>? tokenAddress,
    $5.ProposalStatus? status,
  }) {
    final _result = create();
    if (fromIndex != null) {
      _result.fromIndex = fromIndex;
    }
    if (organizationId != null) {
      _result.organizationId = organizationId;
    }
    if (tokenAddress != null) {
      _result.tokenAddress = tokenAddress;
    }
    if (status != null) {
      _result.status = status;
    }
    return _result;
  }
  factory GetElectionList.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionList.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionList clone() => GetElectionList()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionList copyWith(void Function(GetElectionList) updates) => super.copyWith((message) => updates(message as GetElectionList)) as GetElectionList; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionList create() => GetElectionList._();
  GetElectionList createEmptyInstance() => create();
  static $pb.PbList<GetElectionList> createRepeated() => $pb.PbList<GetElectionList>();
  @$core.pragma('dart2js:noInline')
  static GetElectionList getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionList>(create);
  static GetElectionList? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get fromIndex => $_getIZ(0);
  @$pb.TagNumber(1)
  set fromIndex($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasFromIndex() => $_has(0);
  @$pb.TagNumber(1)
  void clearFromIndex() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get organizationId => $_getN(1);
  @$pb.TagNumber(2)
  set organizationId($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasOrganizationId() => $_has(1);
  @$pb.TagNumber(2)
  void clearOrganizationId() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get tokenAddress => $_getN(2);
  @$pb.TagNumber(3)
  set tokenAddress($core.List<$core.int> v) { $_setBytes(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasTokenAddress() => $_has(2);
  @$pb.TagNumber(3)
  void clearTokenAddress() => clearField(3);

  @$pb.TagNumber(4)
  $5.ProposalStatus get status => $_getN(3);
  @$pb.TagNumber(4)
  set status($5.ProposalStatus v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasStatus() => $_has(3);
  @$pb.TagNumber(4)
  void clearStatus() => clearField(4);
}

class GetElectionListResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionListResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..p<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionIds', $pb.PbFieldType.PY, protoName: 'electionIds')
    ..hasRequiredFields = false
  ;

  GetElectionListResponse._() : super();
  factory GetElectionListResponse({
    $core.Iterable<$core.List<$core.int>>? electionIds,
  }) {
    final _result = create();
    if (electionIds != null) {
      _result.electionIds.addAll(electionIds);
    }
    return _result;
  }
  factory GetElectionListResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionListResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionListResponse clone() => GetElectionListResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionListResponse copyWith(void Function(GetElectionListResponse) updates) => super.copyWith((message) => updates(message as GetElectionListResponse)) as GetElectionListResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionListResponse create() => GetElectionListResponse._();
  GetElectionListResponse createEmptyInstance() => create();
  static $pb.PbList<GetElectionListResponse> createRepeated() => $pb.PbList<GetElectionListResponse>();
  @$core.pragma('dart2js:noInline')
  static GetElectionListResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionListResponse>(create);
  static GetElectionListResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.List<$core.int>> get electionIds => $_getList(0);
}

class GetOrganization extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetOrganization', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organizationId', $pb.PbFieldType.OY, protoName: 'organizationId')
    ..hasRequiredFields = false
  ;

  GetOrganization._() : super();
  factory GetOrganization({
    $core.List<$core.int>? organizationId,
  }) {
    final _result = create();
    if (organizationId != null) {
      _result.organizationId = organizationId;
    }
    return _result;
  }
  factory GetOrganization.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetOrganization.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetOrganization clone() => GetOrganization()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetOrganization copyWith(void Function(GetOrganization) updates) => super.copyWith((message) => updates(message as GetOrganization)) as GetOrganization; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetOrganization create() => GetOrganization._();
  GetOrganization createEmptyInstance() => create();
  static $pb.PbList<GetOrganization> createRepeated() => $pb.PbList<GetOrganization>();
  @$core.pragma('dart2js:noInline')
  static GetOrganization getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetOrganization>(create);
  static GetOrganization? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get organizationId => $_getN(0);
  @$pb.TagNumber(1)
  set organizationId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasOrganizationId() => $_has(0);
  @$pb.TagNumber(1)
  void clearOrganizationId() => clearField(1);
}

class GetOrganizationResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetOrganizationResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOM<$1.Organization>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'organization', subBuilder: $1.Organization.create)
    ..hasRequiredFields = false
  ;

  GetOrganizationResponse._() : super();
  factory GetOrganizationResponse({
    $1.Organization? organization,
  }) {
    final _result = create();
    if (organization != null) {
      _result.organization = organization;
    }
    return _result;
  }
  factory GetOrganizationResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetOrganizationResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetOrganizationResponse clone() => GetOrganizationResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetOrganizationResponse copyWith(void Function(GetOrganizationResponse) updates) => super.copyWith((message) => updates(message as GetOrganizationResponse)) as GetOrganizationResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetOrganizationResponse create() => GetOrganizationResponse._();
  GetOrganizationResponse createEmptyInstance() => create();
  static $pb.PbList<GetOrganizationResponse> createRepeated() => $pb.PbList<GetOrganizationResponse>();
  @$core.pragma('dart2js:noInline')
  static GetOrganizationResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetOrganizationResponse>(create);
  static GetOrganizationResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $1.Organization get organization => $_getN(0);
  @$pb.TagNumber(1)
  set organization($1.Organization v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasOrganization() => $_has(0);
  @$pb.TagNumber(1)
  void clearOrganization() => clearField(1);
  @$pb.TagNumber(1)
  $1.Organization ensureOrganization() => $_ensure(0);
}

class GetBallot extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetBallot', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'nullifier', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  GetBallot._() : super();
  factory GetBallot({
    $core.List<$core.int>? nullifier,
  }) {
    final _result = create();
    if (nullifier != null) {
      _result.nullifier = nullifier;
    }
    return _result;
  }
  factory GetBallot.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetBallot.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetBallot clone() => GetBallot()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetBallot copyWith(void Function(GetBallot) updates) => super.copyWith((message) => updates(message as GetBallot)) as GetBallot; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetBallot create() => GetBallot._();
  GetBallot createEmptyInstance() => create();
  static $pb.PbList<GetBallot> createRepeated() => $pb.PbList<GetBallot>();
  @$core.pragma('dart2js:noInline')
  static GetBallot getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetBallot>(create);
  static GetBallot? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get nullifier => $_getN(0);
  @$pb.TagNumber(1)
  set nullifier($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasNullifier() => $_has(0);
  @$pb.TagNumber(1)
  void clearNullifier() => clearField(1);
}

class GetBallotResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetBallotResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOM<$2.Ballot>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ballot', subBuilder: $2.Ballot.create)
    ..hasRequiredFields = false
  ;

  GetBallotResponse._() : super();
  factory GetBallotResponse({
    $2.Ballot? ballot,
  }) {
    final _result = create();
    if (ballot != null) {
      _result.ballot = ballot;
    }
    return _result;
  }
  factory GetBallotResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetBallotResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetBallotResponse clone() => GetBallotResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetBallotResponse copyWith(void Function(GetBallotResponse) updates) => super.copyWith((message) => updates(message as GetBallotResponse)) as GetBallotResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetBallotResponse create() => GetBallotResponse._();
  GetBallotResponse createEmptyInstance() => create();
  static $pb.PbList<GetBallotResponse> createRepeated() => $pb.PbList<GetBallotResponse>();
  @$core.pragma('dart2js:noInline')
  static GetBallotResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetBallotResponse>(create);
  static GetBallotResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $2.Ballot get ballot => $_getN(0);
  @$pb.TagNumber(1)
  set ballot($2.Ballot v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasBallot() => $_has(0);
  @$pb.TagNumber(1)
  void clearBallot() => clearField(1);
  @$pb.TagNumber(1)
  $2.Ballot ensureBallot() => $_ensure(0);
}

class GetElectionBallots extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionBallots', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'fromIndex', $pb.PbFieldType.O3, protoName: 'fromIndex')
    ..hasRequiredFields = false
  ;

  GetElectionBallots._() : super();
  factory GetElectionBallots({
    $core.List<$core.int>? electionId,
    $core.int? fromIndex,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    if (fromIndex != null) {
      _result.fromIndex = fromIndex;
    }
    return _result;
  }
  factory GetElectionBallots.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionBallots.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionBallots clone() => GetElectionBallots()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionBallots copyWith(void Function(GetElectionBallots) updates) => super.copyWith((message) => updates(message as GetElectionBallots)) as GetElectionBallots; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionBallots create() => GetElectionBallots._();
  GetElectionBallots createEmptyInstance() => create();
  static $pb.PbList<GetElectionBallots> createRepeated() => $pb.PbList<GetElectionBallots>();
  @$core.pragma('dart2js:noInline')
  static GetElectionBallots getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionBallots>(create);
  static GetElectionBallots? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get fromIndex => $_getIZ(1);
  @$pb.TagNumber(2)
  set fromIndex($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasFromIndex() => $_has(1);
  @$pb.TagNumber(2)
  void clearFromIndex() => clearField(2);
}

class GetElectionBallotsResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionBallotsResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..pc<$2.Ballot>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ballot', $pb.PbFieldType.PM, subBuilder: $2.Ballot.create)
    ..hasRequiredFields = false
  ;

  GetElectionBallotsResponse._() : super();
  factory GetElectionBallotsResponse({
    $core.Iterable<$2.Ballot>? ballot,
  }) {
    final _result = create();
    if (ballot != null) {
      _result.ballot.addAll(ballot);
    }
    return _result;
  }
  factory GetElectionBallotsResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionBallotsResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionBallotsResponse clone() => GetElectionBallotsResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionBallotsResponse copyWith(void Function(GetElectionBallotsResponse) updates) => super.copyWith((message) => updates(message as GetElectionBallotsResponse)) as GetElectionBallotsResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionBallotsResponse create() => GetElectionBallotsResponse._();
  GetElectionBallotsResponse createEmptyInstance() => create();
  static $pb.PbList<GetElectionBallotsResponse> createRepeated() => $pb.PbList<GetElectionBallotsResponse>();
  @$core.pragma('dart2js:noInline')
  static GetElectionBallotsResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionBallotsResponse>(create);
  static GetElectionBallotsResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$2.Ballot> get ballot => $_getList(0);
}

class GetElectionKeys extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionKeys', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..hasRequiredFields = false
  ;

  GetElectionKeys._() : super();
  factory GetElectionKeys({
    $core.List<$core.int>? electionId,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    return _result;
  }
  factory GetElectionKeys.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionKeys.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionKeys clone() => GetElectionKeys()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionKeys copyWith(void Function(GetElectionKeys) updates) => super.copyWith((message) => updates(message as GetElectionKeys)) as GetElectionKeys; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionKeys create() => GetElectionKeys._();
  GetElectionKeys createEmptyInstance() => create();
  static $pb.PbList<GetElectionKeys> createRepeated() => $pb.PbList<GetElectionKeys>();
  @$core.pragma('dart2js:noInline')
  static GetElectionKeys getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionKeys>(create);
  static GetElectionKeys? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);
}

class GetElectionKeysResponse_KeyEntry extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionKeysResponse.KeyEntry', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'index', $pb.PbFieldType.O3)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  GetElectionKeysResponse_KeyEntry._() : super();
  factory GetElectionKeysResponse_KeyEntry({
    $core.int? index,
    $core.List<$core.int>? key,
  }) {
    final _result = create();
    if (index != null) {
      _result.index = index;
    }
    if (key != null) {
      _result.key = key;
    }
    return _result;
  }
  factory GetElectionKeysResponse_KeyEntry.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionKeysResponse_KeyEntry.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionKeysResponse_KeyEntry clone() => GetElectionKeysResponse_KeyEntry()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionKeysResponse_KeyEntry copyWith(void Function(GetElectionKeysResponse_KeyEntry) updates) => super.copyWith((message) => updates(message as GetElectionKeysResponse_KeyEntry)) as GetElectionKeysResponse_KeyEntry; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionKeysResponse_KeyEntry create() => GetElectionKeysResponse_KeyEntry._();
  GetElectionKeysResponse_KeyEntry createEmptyInstance() => create();
  static $pb.PbList<GetElectionKeysResponse_KeyEntry> createRepeated() => $pb.PbList<GetElectionKeysResponse_KeyEntry>();
  @$core.pragma('dart2js:noInline')
  static GetElectionKeysResponse_KeyEntry getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionKeysResponse_KeyEntry>(create);
  static GetElectionKeysResponse_KeyEntry? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get index => $_getIZ(0);
  @$pb.TagNumber(1)
  set index($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasIndex() => $_has(0);
  @$pb.TagNumber(1)
  void clearIndex() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get key => $_getN(1);
  @$pb.TagNumber(2)
  set key($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearKey() => clearField(2);
}

class GetElectionKeysResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionKeysResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..pc<GetElectionKeysResponse_KeyEntry>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptionPublicKeys', $pb.PbFieldType.PM, protoName: 'encryptionPublicKeys', subBuilder: GetElectionKeysResponse_KeyEntry.create)
    ..pc<GetElectionKeysResponse_KeyEntry>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'encryptionPrivateKeys', $pb.PbFieldType.PM, protoName: 'encryptionPrivateKeys', subBuilder: GetElectionKeysResponse_KeyEntry.create)
    ..hasRequiredFields = false
  ;

  GetElectionKeysResponse._() : super();
  factory GetElectionKeysResponse({
    $core.Iterable<GetElectionKeysResponse_KeyEntry>? encryptionPublicKeys,
    $core.Iterable<GetElectionKeysResponse_KeyEntry>? encryptionPrivateKeys,
  }) {
    final _result = create();
    if (encryptionPublicKeys != null) {
      _result.encryptionPublicKeys.addAll(encryptionPublicKeys);
    }
    if (encryptionPrivateKeys != null) {
      _result.encryptionPrivateKeys.addAll(encryptionPrivateKeys);
    }
    return _result;
  }
  factory GetElectionKeysResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionKeysResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionKeysResponse clone() => GetElectionKeysResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionKeysResponse copyWith(void Function(GetElectionKeysResponse) updates) => super.copyWith((message) => updates(message as GetElectionKeysResponse)) as GetElectionKeysResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionKeysResponse create() => GetElectionKeysResponse._();
  GetElectionKeysResponse createEmptyInstance() => create();
  static $pb.PbList<GetElectionKeysResponse> createRepeated() => $pb.PbList<GetElectionKeysResponse>();
  @$core.pragma('dart2js:noInline')
  static GetElectionKeysResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionKeysResponse>(create);
  static GetElectionKeysResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<GetElectionKeysResponse_KeyEntry> get encryptionPublicKeys => $_getList(0);

  @$pb.TagNumber(2)
  $core.List<GetElectionKeysResponse_KeyEntry> get encryptionPrivateKeys => $_getList(1);
}

class GetElectionCircuitInfo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionCircuitInfo', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..hasRequiredFields = false
  ;

  GetElectionCircuitInfo._() : super();
  factory GetElectionCircuitInfo({
    $core.List<$core.int>? electionId,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    return _result;
  }
  factory GetElectionCircuitInfo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionCircuitInfo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionCircuitInfo clone() => GetElectionCircuitInfo()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionCircuitInfo copyWith(void Function(GetElectionCircuitInfo) updates) => super.copyWith((message) => updates(message as GetElectionCircuitInfo)) as GetElectionCircuitInfo; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionCircuitInfo create() => GetElectionCircuitInfo._();
  GetElectionCircuitInfo createEmptyInstance() => create();
  static $pb.PbList<GetElectionCircuitInfo> createRepeated() => $pb.PbList<GetElectionCircuitInfo>();
  @$core.pragma('dart2js:noInline')
  static GetElectionCircuitInfo getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionCircuitInfo>(create);
  static GetElectionCircuitInfo? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);
}

class GetElectionCircuitInfoResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionCircuitInfoResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'index', $pb.PbFieldType.O3)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'baseUri', protoName: 'baseUri')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'circuitPath', protoName: 'circuitPath')
    ..a<$core.int>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'maxSize', $pb.PbFieldType.O3, protoName: 'maxSize')
    ..a<$core.List<$core.int>>(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'witnessHash', $pb.PbFieldType.OY, protoName: 'witnessHash')
    ..a<$core.List<$core.int>>(6, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'zKeyHash', $pb.PbFieldType.OY, protoName: 'zKeyHash')
    ..a<$core.List<$core.int>>(7, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'vKeyHash', $pb.PbFieldType.OY, protoName: 'vKeyHash')
    ..hasRequiredFields = false
  ;

  GetElectionCircuitInfoResponse._() : super();
  factory GetElectionCircuitInfoResponse({
    $core.int? index,
    $core.String? baseUri,
    $core.String? circuitPath,
    $core.int? maxSize,
    $core.List<$core.int>? witnessHash,
    $core.List<$core.int>? zKeyHash,
    $core.List<$core.int>? vKeyHash,
  }) {
    final _result = create();
    if (index != null) {
      _result.index = index;
    }
    if (baseUri != null) {
      _result.baseUri = baseUri;
    }
    if (circuitPath != null) {
      _result.circuitPath = circuitPath;
    }
    if (maxSize != null) {
      _result.maxSize = maxSize;
    }
    if (witnessHash != null) {
      _result.witnessHash = witnessHash;
    }
    if (zKeyHash != null) {
      _result.zKeyHash = zKeyHash;
    }
    if (vKeyHash != null) {
      _result.vKeyHash = vKeyHash;
    }
    return _result;
  }
  factory GetElectionCircuitInfoResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionCircuitInfoResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionCircuitInfoResponse clone() => GetElectionCircuitInfoResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionCircuitInfoResponse copyWith(void Function(GetElectionCircuitInfoResponse) updates) => super.copyWith((message) => updates(message as GetElectionCircuitInfoResponse)) as GetElectionCircuitInfoResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionCircuitInfoResponse create() => GetElectionCircuitInfoResponse._();
  GetElectionCircuitInfoResponse createEmptyInstance() => create();
  static $pb.PbList<GetElectionCircuitInfoResponse> createRepeated() => $pb.PbList<GetElectionCircuitInfoResponse>();
  @$core.pragma('dart2js:noInline')
  static GetElectionCircuitInfoResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionCircuitInfoResponse>(create);
  static GetElectionCircuitInfoResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get index => $_getIZ(0);
  @$pb.TagNumber(1)
  set index($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasIndex() => $_has(0);
  @$pb.TagNumber(1)
  void clearIndex() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get baseUri => $_getSZ(1);
  @$pb.TagNumber(2)
  set baseUri($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBaseUri() => $_has(1);
  @$pb.TagNumber(2)
  void clearBaseUri() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get circuitPath => $_getSZ(2);
  @$pb.TagNumber(3)
  set circuitPath($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasCircuitPath() => $_has(2);
  @$pb.TagNumber(3)
  void clearCircuitPath() => clearField(3);

  @$pb.TagNumber(4)
  $core.int get maxSize => $_getIZ(3);
  @$pb.TagNumber(4)
  set maxSize($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasMaxSize() => $_has(3);
  @$pb.TagNumber(4)
  void clearMaxSize() => clearField(4);

  @$pb.TagNumber(5)
  $core.List<$core.int> get witnessHash => $_getN(4);
  @$pb.TagNumber(5)
  set witnessHash($core.List<$core.int> v) { $_setBytes(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasWitnessHash() => $_has(4);
  @$pb.TagNumber(5)
  void clearWitnessHash() => clearField(5);

  @$pb.TagNumber(6)
  $core.List<$core.int> get zKeyHash => $_getN(5);
  @$pb.TagNumber(6)
  set zKeyHash($core.List<$core.int> v) { $_setBytes(5, v); }
  @$pb.TagNumber(6)
  $core.bool hasZKeyHash() => $_has(5);
  @$pb.TagNumber(6)
  void clearZKeyHash() => clearField(6);

  @$pb.TagNumber(7)
  $core.List<$core.int> get vKeyHash => $_getN(6);
  @$pb.TagNumber(7)
  set vKeyHash($core.List<$core.int> v) { $_setBytes(6, v); }
  @$pb.TagNumber(7)
  $core.bool hasVKeyHash() => $_has(6);
  @$pb.TagNumber(7)
  void clearVKeyHash() => clearField(7);
}

class GetElectionResults extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionResults', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..hasRequiredFields = false
  ;

  GetElectionResults._() : super();
  factory GetElectionResults({
    $core.List<$core.int>? electionId,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    return _result;
  }
  factory GetElectionResults.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionResults.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionResults clone() => GetElectionResults()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionResults copyWith(void Function(GetElectionResults) updates) => super.copyWith((message) => updates(message as GetElectionResults)) as GetElectionResults; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionResults create() => GetElectionResults._();
  GetElectionResults createEmptyInstance() => create();
  static $pb.PbList<GetElectionResults> createRepeated() => $pb.PbList<GetElectionResults>();
  @$core.pragma('dart2js:noInline')
  static GetElectionResults getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionResults>(create);
  static GetElectionResults? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);
}

class GetElectionResultsResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionResultsResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOM<$3.Results>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'results', subBuilder: $3.Results.create)
    ..aOB(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'available')
    ..hasRequiredFields = false
  ;

  GetElectionResultsResponse._() : super();
  factory GetElectionResultsResponse({
    $3.Results? results,
    $core.bool? available,
  }) {
    final _result = create();
    if (results != null) {
      _result.results = results;
    }
    if (available != null) {
      _result.available = available;
    }
    return _result;
  }
  factory GetElectionResultsResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionResultsResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionResultsResponse clone() => GetElectionResultsResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionResultsResponse copyWith(void Function(GetElectionResultsResponse) updates) => super.copyWith((message) => updates(message as GetElectionResultsResponse)) as GetElectionResultsResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionResultsResponse create() => GetElectionResultsResponse._();
  GetElectionResultsResponse createEmptyInstance() => create();
  static $pb.PbList<GetElectionResultsResponse> createRepeated() => $pb.PbList<GetElectionResultsResponse>();
  @$core.pragma('dart2js:noInline')
  static GetElectionResultsResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionResultsResponse>(create);
  static GetElectionResultsResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $3.Results get results => $_getN(0);
  @$pb.TagNumber(1)
  set results($3.Results v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasResults() => $_has(0);
  @$pb.TagNumber(1)
  void clearResults() => clearField(1);
  @$pb.TagNumber(1)
  $3.Results ensureResults() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.bool get available => $_getBF(1);
  @$pb.TagNumber(2)
  set available($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasAvailable() => $_has(1);
  @$pb.TagNumber(2)
  void clearAvailable() => clearField(2);
}

class GetElectionWeight extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionWeight', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'electionId', $pb.PbFieldType.OY, protoName: 'electionId')
    ..hasRequiredFields = false
  ;

  GetElectionWeight._() : super();
  factory GetElectionWeight({
    $core.List<$core.int>? electionId,
  }) {
    final _result = create();
    if (electionId != null) {
      _result.electionId = electionId;
    }
    return _result;
  }
  factory GetElectionWeight.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionWeight.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionWeight clone() => GetElectionWeight()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionWeight copyWith(void Function(GetElectionWeight) updates) => super.copyWith((message) => updates(message as GetElectionWeight)) as GetElectionWeight; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionWeight create() => GetElectionWeight._();
  GetElectionWeight createEmptyInstance() => create();
  static $pb.PbList<GetElectionWeight> createRepeated() => $pb.PbList<GetElectionWeight>();
  @$core.pragma('dart2js:noInline')
  static GetElectionWeight getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionWeight>(create);
  static GetElectionWeight? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get electionId => $_getN(0);
  @$pb.TagNumber(1)
  set electionId($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasElectionId() => $_has(0);
  @$pb.TagNumber(1)
  void clearElectionId() => clearField(1);
}

class GetElectionWeightResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetElectionWeightResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'weight')
    ..hasRequiredFields = false
  ;

  GetElectionWeightResponse._() : super();
  factory GetElectionWeightResponse({
    $core.String? weight,
  }) {
    final _result = create();
    if (weight != null) {
      _result.weight = weight;
    }
    return _result;
  }
  factory GetElectionWeightResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetElectionWeightResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetElectionWeightResponse clone() => GetElectionWeightResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetElectionWeightResponse copyWith(void Function(GetElectionWeightResponse) updates) => super.copyWith((message) => updates(message as GetElectionWeightResponse)) as GetElectionWeightResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetElectionWeightResponse create() => GetElectionWeightResponse._();
  GetElectionWeightResponse createEmptyInstance() => create();
  static $pb.PbList<GetElectionWeightResponse> createRepeated() => $pb.PbList<GetElectionWeightResponse>();
  @$core.pragma('dart2js:noInline')
  static GetElectionWeightResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetElectionWeightResponse>(create);
  static GetElectionWeightResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get weight => $_getSZ(0);
  @$pb.TagNumber(1)
  set weight($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasWeight() => $_has(0);
  @$pb.TagNumber(1)
  void clearWeight() => clearField(1);
}

class NewCensus extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'NewCensus', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusSalt', $pb.PbFieldType.OY, protoName: 'censusSalt')
    ..p<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'managerPublicKeys', $pb.PbFieldType.PY, protoName: 'managerPublicKeys')
    ..e<$5.CensusType>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusType', $pb.PbFieldType.OE, protoName: 'censusType', defaultOrMaker: $5.CensusType.UNKNOWN_CENSUS_TYPE, valueOf: $5.CensusType.valueOf, enumValues: $5.CensusType.values)
    ..hasRequiredFields = false
  ;

  NewCensus._() : super();
  factory NewCensus({
    $core.List<$core.int>? censusSalt,
    $core.Iterable<$core.List<$core.int>>? managerPublicKeys,
    $5.CensusType? censusType,
  }) {
    final _result = create();
    if (censusSalt != null) {
      _result.censusSalt = censusSalt;
    }
    if (managerPublicKeys != null) {
      _result.managerPublicKeys.addAll(managerPublicKeys);
    }
    if (censusType != null) {
      _result.censusType = censusType;
    }
    return _result;
  }
  factory NewCensus.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory NewCensus.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  NewCensus clone() => NewCensus()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  NewCensus copyWith(void Function(NewCensus) updates) => super.copyWith((message) => updates(message as NewCensus)) as NewCensus; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static NewCensus create() => NewCensus._();
  NewCensus createEmptyInstance() => create();
  static $pb.PbList<NewCensus> createRepeated() => $pb.PbList<NewCensus>();
  @$core.pragma('dart2js:noInline')
  static NewCensus getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<NewCensus>(create);
  static NewCensus? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get censusSalt => $_getN(0);
  @$pb.TagNumber(1)
  set censusSalt($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCensusSalt() => $_has(0);
  @$pb.TagNumber(1)
  void clearCensusSalt() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.List<$core.int>> get managerPublicKeys => $_getList(1);

  @$pb.TagNumber(3)
  $5.CensusType get censusType => $_getN(2);
  @$pb.TagNumber(3)
  set censusType($5.CensusType v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasCensusType() => $_has(2);
  @$pb.TagNumber(3)
  void clearCensusType() => clearField(3);
}

class NewCensusResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'NewCensusResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusId', protoName: 'censusId')
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusRoot', $pb.PbFieldType.OY, protoName: 'censusRoot')
    ..hasRequiredFields = false
  ;

  NewCensusResponse._() : super();
  factory NewCensusResponse({
    $core.String? censusId,
    $core.List<$core.int>? censusRoot,
  }) {
    final _result = create();
    if (censusId != null) {
      _result.censusId = censusId;
    }
    if (censusRoot != null) {
      _result.censusRoot = censusRoot;
    }
    return _result;
  }
  factory NewCensusResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory NewCensusResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  NewCensusResponse clone() => NewCensusResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  NewCensusResponse copyWith(void Function(NewCensusResponse) updates) => super.copyWith((message) => updates(message as NewCensusResponse)) as NewCensusResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static NewCensusResponse create() => NewCensusResponse._();
  NewCensusResponse createEmptyInstance() => create();
  static $pb.PbList<NewCensusResponse> createRepeated() => $pb.PbList<NewCensusResponse>();
  @$core.pragma('dart2js:noInline')
  static NewCensusResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<NewCensusResponse>(create);
  static NewCensusResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get censusId => $_getSZ(0);
  @$pb.TagNumber(1)
  set censusId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCensusId() => $_has(0);
  @$pb.TagNumber(1)
  void clearCensusId() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get censusRoot => $_getN(1);
  @$pb.TagNumber(2)
  set censusRoot($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasCensusRoot() => $_has(1);
  @$pb.TagNumber(2)
  void clearCensusRoot() => clearField(2);
}

class AddCensusKeys_CensusEntry extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AddCensusKeys.CensusEntry', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'value', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  AddCensusKeys_CensusEntry._() : super();
  factory AddCensusKeys_CensusEntry({
    $core.List<$core.int>? key,
    $core.List<$core.int>? value,
  }) {
    final _result = create();
    if (key != null) {
      _result.key = key;
    }
    if (value != null) {
      _result.value = value;
    }
    return _result;
  }
  factory AddCensusKeys_CensusEntry.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AddCensusKeys_CensusEntry.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AddCensusKeys_CensusEntry clone() => AddCensusKeys_CensusEntry()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AddCensusKeys_CensusEntry copyWith(void Function(AddCensusKeys_CensusEntry) updates) => super.copyWith((message) => updates(message as AddCensusKeys_CensusEntry)) as AddCensusKeys_CensusEntry; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AddCensusKeys_CensusEntry create() => AddCensusKeys_CensusEntry._();
  AddCensusKeys_CensusEntry createEmptyInstance() => create();
  static $pb.PbList<AddCensusKeys_CensusEntry> createRepeated() => $pb.PbList<AddCensusKeys_CensusEntry>();
  @$core.pragma('dart2js:noInline')
  static AddCensusKeys_CensusEntry getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AddCensusKeys_CensusEntry>(create);
  static AddCensusKeys_CensusEntry? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get key => $_getN(0);
  @$pb.TagNumber(1)
  set key($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasKey() => $_has(0);
  @$pb.TagNumber(1)
  void clearKey() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get value => $_getN(1);
  @$pb.TagNumber(2)
  set value($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasValue() => $_has(1);
  @$pb.TagNumber(2)
  void clearValue() => clearField(2);
}

class AddCensusKeys extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AddCensusKeys', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusId', protoName: 'censusId')
    ..aOB(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'digested')
    ..pc<AddCensusKeys_CensusEntry>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'entries', $pb.PbFieldType.PM, subBuilder: AddCensusKeys_CensusEntry.create)
    ..hasRequiredFields = false
  ;

  AddCensusKeys._() : super();
  factory AddCensusKeys({
    $core.String? censusId,
    $core.bool? digested,
    $core.Iterable<AddCensusKeys_CensusEntry>? entries,
  }) {
    final _result = create();
    if (censusId != null) {
      _result.censusId = censusId;
    }
    if (digested != null) {
      _result.digested = digested;
    }
    if (entries != null) {
      _result.entries.addAll(entries);
    }
    return _result;
  }
  factory AddCensusKeys.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AddCensusKeys.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AddCensusKeys clone() => AddCensusKeys()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AddCensusKeys copyWith(void Function(AddCensusKeys) updates) => super.copyWith((message) => updates(message as AddCensusKeys)) as AddCensusKeys; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AddCensusKeys create() => AddCensusKeys._();
  AddCensusKeys createEmptyInstance() => create();
  static $pb.PbList<AddCensusKeys> createRepeated() => $pb.PbList<AddCensusKeys>();
  @$core.pragma('dart2js:noInline')
  static AddCensusKeys getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AddCensusKeys>(create);
  static AddCensusKeys? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get censusId => $_getSZ(0);
  @$pb.TagNumber(1)
  set censusId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCensusId() => $_has(0);
  @$pb.TagNumber(1)
  void clearCensusId() => clearField(1);

  @$pb.TagNumber(2)
  $core.bool get digested => $_getBF(1);
  @$pb.TagNumber(2)
  set digested($core.bool v) { $_setBool(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasDigested() => $_has(1);
  @$pb.TagNumber(2)
  void clearDigested() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<AddCensusKeys_CensusEntry> get entries => $_getList(2);
}

class AddCensusKeysResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'AddCensusKeysResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusRoot', $pb.PbFieldType.OY, protoName: 'censusRoot')
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'keysAdded', $pb.PbFieldType.O3, protoName: 'keysAdded')
    ..a<$core.int>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'keysSkipped', $pb.PbFieldType.O3, protoName: 'keysSkipped')
    ..hasRequiredFields = false
  ;

  AddCensusKeysResponse._() : super();
  factory AddCensusKeysResponse({
    $core.List<$core.int>? censusRoot,
    $core.int? keysAdded,
    $core.int? keysSkipped,
  }) {
    final _result = create();
    if (censusRoot != null) {
      _result.censusRoot = censusRoot;
    }
    if (keysAdded != null) {
      _result.keysAdded = keysAdded;
    }
    if (keysSkipped != null) {
      _result.keysSkipped = keysSkipped;
    }
    return _result;
  }
  factory AddCensusKeysResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AddCensusKeysResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  AddCensusKeysResponse clone() => AddCensusKeysResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  AddCensusKeysResponse copyWith(void Function(AddCensusKeysResponse) updates) => super.copyWith((message) => updates(message as AddCensusKeysResponse)) as AddCensusKeysResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AddCensusKeysResponse create() => AddCensusKeysResponse._();
  AddCensusKeysResponse createEmptyInstance() => create();
  static $pb.PbList<AddCensusKeysResponse> createRepeated() => $pb.PbList<AddCensusKeysResponse>();
  @$core.pragma('dart2js:noInline')
  static AddCensusKeysResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AddCensusKeysResponse>(create);
  static AddCensusKeysResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get censusRoot => $_getN(0);
  @$pb.TagNumber(1)
  set censusRoot($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCensusRoot() => $_has(0);
  @$pb.TagNumber(1)
  void clearCensusRoot() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get keysAdded => $_getIZ(1);
  @$pb.TagNumber(2)
  set keysAdded($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasKeysAdded() => $_has(1);
  @$pb.TagNumber(2)
  void clearKeysAdded() => clearField(2);

  @$pb.TagNumber(3)
  $core.int get keysSkipped => $_getIZ(2);
  @$pb.TagNumber(3)
  set keysSkipped($core.int v) { $_setSignedInt32(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasKeysSkipped() => $_has(2);
  @$pb.TagNumber(3)
  void clearKeysSkipped() => clearField(3);
}

class GetCensusRoot extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetCensusRoot', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusId', protoName: 'censusId')
    ..hasRequiredFields = false
  ;

  GetCensusRoot._() : super();
  factory GetCensusRoot({
    $core.String? censusId,
  }) {
    final _result = create();
    if (censusId != null) {
      _result.censusId = censusId;
    }
    return _result;
  }
  factory GetCensusRoot.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetCensusRoot.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetCensusRoot clone() => GetCensusRoot()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetCensusRoot copyWith(void Function(GetCensusRoot) updates) => super.copyWith((message) => updates(message as GetCensusRoot)) as GetCensusRoot; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetCensusRoot create() => GetCensusRoot._();
  GetCensusRoot createEmptyInstance() => create();
  static $pb.PbList<GetCensusRoot> createRepeated() => $pb.PbList<GetCensusRoot>();
  @$core.pragma('dart2js:noInline')
  static GetCensusRoot getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetCensusRoot>(create);
  static GetCensusRoot? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get censusId => $_getSZ(0);
  @$pb.TagNumber(1)
  set censusId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCensusId() => $_has(0);
  @$pb.TagNumber(1)
  void clearCensusId() => clearField(1);
}

class GetCensusRootResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetCensusRootResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusRoot', $pb.PbFieldType.OY, protoName: 'censusRoot')
    ..hasRequiredFields = false
  ;

  GetCensusRootResponse._() : super();
  factory GetCensusRootResponse({
    $core.List<$core.int>? censusRoot,
  }) {
    final _result = create();
    if (censusRoot != null) {
      _result.censusRoot = censusRoot;
    }
    return _result;
  }
  factory GetCensusRootResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetCensusRootResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetCensusRootResponse clone() => GetCensusRootResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetCensusRootResponse copyWith(void Function(GetCensusRootResponse) updates) => super.copyWith((message) => updates(message as GetCensusRootResponse)) as GetCensusRootResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetCensusRootResponse create() => GetCensusRootResponse._();
  GetCensusRootResponse createEmptyInstance() => create();
  static $pb.PbList<GetCensusRootResponse> createRepeated() => $pb.PbList<GetCensusRootResponse>();
  @$core.pragma('dart2js:noInline')
  static GetCensusRootResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetCensusRootResponse>(create);
  static GetCensusRootResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get censusRoot => $_getN(0);
  @$pb.TagNumber(1)
  set censusRoot($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCensusRoot() => $_has(0);
  @$pb.TagNumber(1)
  void clearCensusRoot() => clearField(1);
}

class GetCensusSize extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetCensusSize', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusId', protoName: 'censusId')
    ..hasRequiredFields = false
  ;

  GetCensusSize._() : super();
  factory GetCensusSize({
    $core.String? censusId,
  }) {
    final _result = create();
    if (censusId != null) {
      _result.censusId = censusId;
    }
    return _result;
  }
  factory GetCensusSize.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetCensusSize.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetCensusSize clone() => GetCensusSize()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetCensusSize copyWith(void Function(GetCensusSize) updates) => super.copyWith((message) => updates(message as GetCensusSize)) as GetCensusSize; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetCensusSize create() => GetCensusSize._();
  GetCensusSize createEmptyInstance() => create();
  static $pb.PbList<GetCensusSize> createRepeated() => $pb.PbList<GetCensusSize>();
  @$core.pragma('dart2js:noInline')
  static GetCensusSize getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetCensusSize>(create);
  static GetCensusSize? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get censusId => $_getSZ(0);
  @$pb.TagNumber(1)
  set censusId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCensusId() => $_has(0);
  @$pb.TagNumber(1)
  void clearCensusId() => clearField(1);
}

class GetCensusSizeResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetCensusSizeResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'size', $pb.PbFieldType.O3)
    ..hasRequiredFields = false
  ;

  GetCensusSizeResponse._() : super();
  factory GetCensusSizeResponse({
    $core.int? size,
  }) {
    final _result = create();
    if (size != null) {
      _result.size = size;
    }
    return _result;
  }
  factory GetCensusSizeResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetCensusSizeResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetCensusSizeResponse clone() => GetCensusSizeResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetCensusSizeResponse copyWith(void Function(GetCensusSizeResponse) updates) => super.copyWith((message) => updates(message as GetCensusSizeResponse)) as GetCensusSizeResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetCensusSizeResponse create() => GetCensusSizeResponse._();
  GetCensusSizeResponse createEmptyInstance() => create();
  static $pb.PbList<GetCensusSizeResponse> createRepeated() => $pb.PbList<GetCensusSizeResponse>();
  @$core.pragma('dart2js:noInline')
  static GetCensusSizeResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetCensusSizeResponse>(create);
  static GetCensusSizeResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get size => $_getIZ(0);
  @$pb.TagNumber(1)
  set size($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasSize() => $_has(0);
  @$pb.TagNumber(1)
  void clearSize() => clearField(1);
}

class PublishCensus extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PublishCensus', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusId', protoName: 'censusId')
    ..hasRequiredFields = false
  ;

  PublishCensus._() : super();
  factory PublishCensus({
    $core.String? censusId,
  }) {
    final _result = create();
    if (censusId != null) {
      _result.censusId = censusId;
    }
    return _result;
  }
  factory PublishCensus.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PublishCensus.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PublishCensus clone() => PublishCensus()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PublishCensus copyWith(void Function(PublishCensus) updates) => super.copyWith((message) => updates(message as PublishCensus)) as PublishCensus; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PublishCensus create() => PublishCensus._();
  PublishCensus createEmptyInstance() => create();
  static $pb.PbList<PublishCensus> createRepeated() => $pb.PbList<PublishCensus>();
  @$core.pragma('dart2js:noInline')
  static PublishCensus getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PublishCensus>(create);
  static PublishCensus? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get censusId => $_getSZ(0);
  @$pb.TagNumber(1)
  set censusId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCensusId() => $_has(0);
  @$pb.TagNumber(1)
  void clearCensusId() => clearField(1);
}

class PublishCensusResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PublishCensusResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ipfsUri', protoName: 'ipfsUri')
    ..hasRequiredFields = false
  ;

  PublishCensusResponse._() : super();
  factory PublishCensusResponse({
    $core.String? ipfsUri,
  }) {
    final _result = create();
    if (ipfsUri != null) {
      _result.ipfsUri = ipfsUri;
    }
    return _result;
  }
  factory PublishCensusResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PublishCensusResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PublishCensusResponse clone() => PublishCensusResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PublishCensusResponse copyWith(void Function(PublishCensusResponse) updates) => super.copyWith((message) => updates(message as PublishCensusResponse)) as PublishCensusResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PublishCensusResponse create() => PublishCensusResponse._();
  PublishCensusResponse createEmptyInstance() => create();
  static $pb.PbList<PublishCensusResponse> createRepeated() => $pb.PbList<PublishCensusResponse>();
  @$core.pragma('dart2js:noInline')
  static PublishCensusResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PublishCensusResponse>(create);
  static PublishCensusResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get ipfsUri => $_getSZ(0);
  @$pb.TagNumber(1)
  set ipfsUri($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasIpfsUri() => $_has(0);
  @$pb.TagNumber(1)
  void clearIpfsUri() => clearField(1);
}

class GetCensusProof extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetCensusProof', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOM<$4.Census>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'census', subBuilder: $4.Census.create)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  GetCensusProof._() : super();
  factory GetCensusProof({
    $4.Census? census,
    $core.List<$core.int>? key,
  }) {
    final _result = create();
    if (census != null) {
      _result.census = census;
    }
    if (key != null) {
      _result.key = key;
    }
    return _result;
  }
  factory GetCensusProof.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetCensusProof.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetCensusProof clone() => GetCensusProof()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetCensusProof copyWith(void Function(GetCensusProof) updates) => super.copyWith((message) => updates(message as GetCensusProof)) as GetCensusProof; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetCensusProof create() => GetCensusProof._();
  GetCensusProof createEmptyInstance() => create();
  static $pb.PbList<GetCensusProof> createRepeated() => $pb.PbList<GetCensusProof>();
  @$core.pragma('dart2js:noInline')
  static GetCensusProof getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetCensusProof>(create);
  static GetCensusProof? _defaultInstance;

  @$pb.TagNumber(1)
  $4.Census get census => $_getN(0);
  @$pb.TagNumber(1)
  set census($4.Census v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasCensus() => $_has(0);
  @$pb.TagNumber(1)
  void clearCensus() => clearField(1);
  @$pb.TagNumber(1)
  $4.Census ensureCensus() => $_ensure(0);

  @$pb.TagNumber(2)
  $core.List<$core.int> get key => $_getN(1);
  @$pb.TagNumber(2)
  set key($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearKey() => clearField(2);
}

class GetCensusProofResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetCensusProofResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOM<$4.Proof>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof', subBuilder: $4.Proof.create)
    ..hasRequiredFields = false
  ;

  GetCensusProofResponse._() : super();
  factory GetCensusProofResponse({
    $4.Proof? proof,
  }) {
    final _result = create();
    if (proof != null) {
      _result.proof = proof;
    }
    return _result;
  }
  factory GetCensusProofResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetCensusProofResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetCensusProofResponse clone() => GetCensusProofResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetCensusProofResponse copyWith(void Function(GetCensusProofResponse) updates) => super.copyWith((message) => updates(message as GetCensusProofResponse)) as GetCensusProofResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetCensusProofResponse create() => GetCensusProofResponse._();
  GetCensusProofResponse createEmptyInstance() => create();
  static $pb.PbList<GetCensusProofResponse> createRepeated() => $pb.PbList<GetCensusProofResponse>();
  @$core.pragma('dart2js:noInline')
  static GetCensusProofResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetCensusProofResponse>(create);
  static GetCensusProofResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $4.Proof get proof => $_getN(0);
  @$pb.TagNumber(1)
  set proof($4.Proof v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasProof() => $_has(0);
  @$pb.TagNumber(1)
  void clearProof() => clearField(1);
  @$pb.TagNumber(1)
  $4.Proof ensureProof() => $_ensure(0);
}

class DumpCensus extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DumpCensus', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusId', protoName: 'censusId')
    ..hasRequiredFields = false
  ;

  DumpCensus._() : super();
  factory DumpCensus({
    $core.String? censusId,
  }) {
    final _result = create();
    if (censusId != null) {
      _result.censusId = censusId;
    }
    return _result;
  }
  factory DumpCensus.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DumpCensus.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DumpCensus clone() => DumpCensus()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DumpCensus copyWith(void Function(DumpCensus) updates) => super.copyWith((message) => updates(message as DumpCensus)) as DumpCensus; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DumpCensus create() => DumpCensus._();
  DumpCensus createEmptyInstance() => create();
  static $pb.PbList<DumpCensus> createRepeated() => $pb.PbList<DumpCensus>();
  @$core.pragma('dart2js:noInline')
  static DumpCensus getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DumpCensus>(create);
  static DumpCensus? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get censusId => $_getSZ(0);
  @$pb.TagNumber(1)
  set censusId($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCensusId() => $_has(0);
  @$pb.TagNumber(1)
  void clearCensusId() => clearField(1);
}

class DumpCensusResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'DumpCensusResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'body', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  DumpCensusResponse._() : super();
  factory DumpCensusResponse({
    $core.List<$core.int>? body,
  }) {
    final _result = create();
    if (body != null) {
      _result.body = body;
    }
    return _result;
  }
  factory DumpCensusResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory DumpCensusResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  DumpCensusResponse clone() => DumpCensusResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  DumpCensusResponse copyWith(void Function(DumpCensusResponse) updates) => super.copyWith((message) => updates(message as DumpCensusResponse)) as DumpCensusResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static DumpCensusResponse create() => DumpCensusResponse._();
  DumpCensusResponse createEmptyInstance() => create();
  static $pb.PbList<DumpCensusResponse> createRepeated() => $pb.PbList<DumpCensusResponse>();
  @$core.pragma('dart2js:noInline')
  static DumpCensusResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<DumpCensusResponse>(create);
  static DumpCensusResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get body => $_getN(0);
  @$pb.TagNumber(1)
  set body($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasBody() => $_has(0);
  @$pb.TagNumber(1)
  void clearBody() => clearField(1);
}

class PinFile extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PinFile', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'body', $pb.PbFieldType.OY)
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'retentionDays', $pb.PbFieldType.O3, protoName: 'retentionDays')
    ..hasRequiredFields = false
  ;

  PinFile._() : super();
  factory PinFile({
    $core.List<$core.int>? body,
    $core.int? retentionDays,
  }) {
    final _result = create();
    if (body != null) {
      _result.body = body;
    }
    if (retentionDays != null) {
      _result.retentionDays = retentionDays;
    }
    return _result;
  }
  factory PinFile.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PinFile.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PinFile clone() => PinFile()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PinFile copyWith(void Function(PinFile) updates) => super.copyWith((message) => updates(message as PinFile)) as PinFile; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PinFile create() => PinFile._();
  PinFile createEmptyInstance() => create();
  static $pb.PbList<PinFile> createRepeated() => $pb.PbList<PinFile>();
  @$core.pragma('dart2js:noInline')
  static PinFile getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PinFile>(create);
  static PinFile? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get body => $_getN(0);
  @$pb.TagNumber(1)
  set body($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasBody() => $_has(0);
  @$pb.TagNumber(1)
  void clearBody() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get retentionDays => $_getIZ(1);
  @$pb.TagNumber(2)
  set retentionDays($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasRetentionDays() => $_has(1);
  @$pb.TagNumber(2)
  void clearRetentionDays() => clearField(2);
}

class PinFileResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PinFileResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ipfsUri', protoName: 'ipfsUri')
    ..hasRequiredFields = false
  ;

  PinFileResponse._() : super();
  factory PinFileResponse({
    $core.String? ipfsUri,
  }) {
    final _result = create();
    if (ipfsUri != null) {
      _result.ipfsUri = ipfsUri;
    }
    return _result;
  }
  factory PinFileResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PinFileResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PinFileResponse clone() => PinFileResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PinFileResponse copyWith(void Function(PinFileResponse) updates) => super.copyWith((message) => updates(message as PinFileResponse)) as PinFileResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PinFileResponse create() => PinFileResponse._();
  PinFileResponse createEmptyInstance() => create();
  static $pb.PbList<PinFileResponse> createRepeated() => $pb.PbList<PinFileResponse>();
  @$core.pragma('dart2js:noInline')
  static PinFileResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PinFileResponse>(create);
  static PinFileResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get ipfsUri => $_getSZ(0);
  @$pb.TagNumber(1)
  set ipfsUri($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasIpfsUri() => $_has(0);
  @$pb.TagNumber(1)
  void clearIpfsUri() => clearField(1);
}

class FetchFile extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'FetchFile', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ipfsUri', protoName: 'ipfsUri')
    ..hasRequiredFields = false
  ;

  FetchFile._() : super();
  factory FetchFile({
    $core.String? ipfsUri,
  }) {
    final _result = create();
    if (ipfsUri != null) {
      _result.ipfsUri = ipfsUri;
    }
    return _result;
  }
  factory FetchFile.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FetchFile.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  FetchFile clone() => FetchFile()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  FetchFile copyWith(void Function(FetchFile) updates) => super.copyWith((message) => updates(message as FetchFile)) as FetchFile; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FetchFile create() => FetchFile._();
  FetchFile createEmptyInstance() => create();
  static $pb.PbList<FetchFile> createRepeated() => $pb.PbList<FetchFile>();
  @$core.pragma('dart2js:noInline')
  static FetchFile getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FetchFile>(create);
  static FetchFile? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get ipfsUri => $_getSZ(0);
  @$pb.TagNumber(1)
  set ipfsUri($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasIpfsUri() => $_has(0);
  @$pb.TagNumber(1)
  void clearIpfsUri() => clearField(1);
}

class FetchFileResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'FetchFileResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'body', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  FetchFileResponse._() : super();
  factory FetchFileResponse({
    $core.List<$core.int>? body,
  }) {
    final _result = create();
    if (body != null) {
      _result.body = body;
    }
    return _result;
  }
  factory FetchFileResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory FetchFileResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  FetchFileResponse clone() => FetchFileResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  FetchFileResponse copyWith(void Function(FetchFileResponse) updates) => super.copyWith((message) => updates(message as FetchFileResponse)) as FetchFileResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static FetchFileResponse create() => FetchFileResponse._();
  FetchFileResponse createEmptyInstance() => create();
  static $pb.PbList<FetchFileResponse> createRepeated() => $pb.PbList<FetchFileResponse>();
  @$core.pragma('dart2js:noInline')
  static FetchFileResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<FetchFileResponse>(create);
  static FetchFileResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get body => $_getN(0);
  @$pb.TagNumber(1)
  set body($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasBody() => $_has(0);
  @$pb.TagNumber(1)
  void clearBody() => clearField(1);
}

class GetBlockStatus extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetBlockStatus', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  GetBlockStatus._() : super();
  factory GetBlockStatus() => create();
  factory GetBlockStatus.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetBlockStatus.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetBlockStatus clone() => GetBlockStatus()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetBlockStatus copyWith(void Function(GetBlockStatus) updates) => super.copyWith((message) => updates(message as GetBlockStatus)) as GetBlockStatus; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetBlockStatus create() => GetBlockStatus._();
  GetBlockStatus createEmptyInstance() => create();
  static $pb.PbList<GetBlockStatus> createRepeated() => $pb.PbList<GetBlockStatus>();
  @$core.pragma('dart2js:noInline')
  static GetBlockStatus getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetBlockStatus>(create);
  static GetBlockStatus? _defaultInstance;
}

class GetBlockStatusResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetBlockStatusResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'number', $pb.PbFieldType.O3)
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'blockTimestamp', $pb.PbFieldType.O3, protoName: 'blockTimestamp')
    ..p<$core.int>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'blockTimes', $pb.PbFieldType.P3, protoName: 'blockTimes')
    ..hasRequiredFields = false
  ;

  GetBlockStatusResponse._() : super();
  factory GetBlockStatusResponse({
    $core.int? number,
    $core.int? blockTimestamp,
    $core.Iterable<$core.int>? blockTimes,
  }) {
    final _result = create();
    if (number != null) {
      _result.number = number;
    }
    if (blockTimestamp != null) {
      _result.blockTimestamp = blockTimestamp;
    }
    if (blockTimes != null) {
      _result.blockTimes.addAll(blockTimes);
    }
    return _result;
  }
  factory GetBlockStatusResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetBlockStatusResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetBlockStatusResponse clone() => GetBlockStatusResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetBlockStatusResponse copyWith(void Function(GetBlockStatusResponse) updates) => super.copyWith((message) => updates(message as GetBlockStatusResponse)) as GetBlockStatusResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetBlockStatusResponse create() => GetBlockStatusResponse._();
  GetBlockStatusResponse createEmptyInstance() => create();
  static $pb.PbList<GetBlockStatusResponse> createRepeated() => $pb.PbList<GetBlockStatusResponse>();
  @$core.pragma('dart2js:noInline')
  static GetBlockStatusResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetBlockStatusResponse>(create);
  static GetBlockStatusResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get number => $_getIZ(0);
  @$pb.TagNumber(1)
  set number($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasNumber() => $_has(0);
  @$pb.TagNumber(1)
  void clearNumber() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get blockTimestamp => $_getIZ(1);
  @$pb.TagNumber(2)
  set blockTimestamp($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBlockTimestamp() => $_has(1);
  @$pb.TagNumber(2)
  void clearBlockTimestamp() => clearField(2);

  @$pb.TagNumber(3)
  $core.List<$core.int> get blockTimes => $_getList(2);
}

class GetBlockCount extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetBlockCount', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  GetBlockCount._() : super();
  factory GetBlockCount() => create();
  factory GetBlockCount.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetBlockCount.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetBlockCount clone() => GetBlockCount()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetBlockCount copyWith(void Function(GetBlockCount) updates) => super.copyWith((message) => updates(message as GetBlockCount)) as GetBlockCount; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetBlockCount create() => GetBlockCount._();
  GetBlockCount createEmptyInstance() => create();
  static $pb.PbList<GetBlockCount> createRepeated() => $pb.PbList<GetBlockCount>();
  @$core.pragma('dart2js:noInline')
  static GetBlockCount getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetBlockCount>(create);
  static GetBlockCount? _defaultInstance;
}

class GetBlockCountResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetBlockCountResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'number', $pb.PbFieldType.O3)
    ..hasRequiredFields = false
  ;

  GetBlockCountResponse._() : super();
  factory GetBlockCountResponse({
    $core.int? number,
  }) {
    final _result = create();
    if (number != null) {
      _result.number = number;
    }
    return _result;
  }
  factory GetBlockCountResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetBlockCountResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetBlockCountResponse clone() => GetBlockCountResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetBlockCountResponse copyWith(void Function(GetBlockCountResponse) updates) => super.copyWith((message) => updates(message as GetBlockCountResponse)) as GetBlockCountResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetBlockCountResponse create() => GetBlockCountResponse._();
  GetBlockCountResponse createEmptyInstance() => create();
  static $pb.PbList<GetBlockCountResponse> createRepeated() => $pb.PbList<GetBlockCountResponse>();
  @$core.pragma('dart2js:noInline')
  static GetBlockCountResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetBlockCountResponse>(create);
  static GetBlockCountResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get number => $_getIZ(0);
  @$pb.TagNumber(1)
  set number($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasNumber() => $_has(0);
  @$pb.TagNumber(1)
  void clearNumber() => clearField(1);
}

class EstimateElectionPrice extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EstimateElectionPrice', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  EstimateElectionPrice._() : super();
  factory EstimateElectionPrice() => create();
  factory EstimateElectionPrice.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EstimateElectionPrice.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EstimateElectionPrice clone() => EstimateElectionPrice()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EstimateElectionPrice copyWith(void Function(EstimateElectionPrice) updates) => super.copyWith((message) => updates(message as EstimateElectionPrice)) as EstimateElectionPrice; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EstimateElectionPrice create() => EstimateElectionPrice._();
  EstimateElectionPrice createEmptyInstance() => create();
  static $pb.PbList<EstimateElectionPrice> createRepeated() => $pb.PbList<EstimateElectionPrice>();
  @$core.pragma('dart2js:noInline')
  static EstimateElectionPrice getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EstimateElectionPrice>(create);
  static EstimateElectionPrice? _defaultInstance;
}

class EstimateElectionPriceResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EstimateElectionPriceResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  EstimateElectionPriceResponse._() : super();
  factory EstimateElectionPriceResponse() => create();
  factory EstimateElectionPriceResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EstimateElectionPriceResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EstimateElectionPriceResponse clone() => EstimateElectionPriceResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EstimateElectionPriceResponse copyWith(void Function(EstimateElectionPriceResponse) updates) => super.copyWith((message) => updates(message as EstimateElectionPriceResponse)) as EstimateElectionPriceResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EstimateElectionPriceResponse create() => EstimateElectionPriceResponse._();
  EstimateElectionPriceResponse createEmptyInstance() => create();
  static $pb.PbList<EstimateElectionPriceResponse> createRepeated() => $pb.PbList<EstimateElectionPriceResponse>();
  @$core.pragma('dart2js:noInline')
  static EstimateElectionPriceResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EstimateElectionPriceResponse>(create);
  static EstimateElectionPriceResponse? _defaultInstance;
}

class GetTransaction extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetTransaction', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'txHash', $pb.PbFieldType.OY, protoName: 'txHash')
    ..hasRequiredFields = false
  ;

  GetTransaction._() : super();
  factory GetTransaction({
    $core.List<$core.int>? txHash,
  }) {
    final _result = create();
    if (txHash != null) {
      _result.txHash = txHash;
    }
    return _result;
  }
  factory GetTransaction.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetTransaction.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetTransaction clone() => GetTransaction()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetTransaction copyWith(void Function(GetTransaction) updates) => super.copyWith((message) => updates(message as GetTransaction)) as GetTransaction; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetTransaction create() => GetTransaction._();
  GetTransaction createEmptyInstance() => create();
  static $pb.PbList<GetTransaction> createRepeated() => $pb.PbList<GetTransaction>();
  @$core.pragma('dart2js:noInline')
  static GetTransaction getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetTransaction>(create);
  static GetTransaction? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get txHash => $_getN(0);
  @$pb.TagNumber(1)
  set txHash($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasTxHash() => $_has(0);
  @$pb.TagNumber(1)
  void clearTxHash() => clearField(1);
}

class GetTransactionResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetTransactionResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'body', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  GetTransactionResponse._() : super();
  factory GetTransactionResponse({
    $core.List<$core.int>? body,
  }) {
    final _result = create();
    if (body != null) {
      _result.body = body;
    }
    return _result;
  }
  factory GetTransactionResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetTransactionResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetTransactionResponse clone() => GetTransactionResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetTransactionResponse copyWith(void Function(GetTransactionResponse) updates) => super.copyWith((message) => updates(message as GetTransactionResponse)) as GetTransactionResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetTransactionResponse create() => GetTransactionResponse._();
  GetTransactionResponse createEmptyInstance() => create();
  static $pb.PbList<GetTransactionResponse> createRepeated() => $pb.PbList<GetTransactionResponse>();
  @$core.pragma('dart2js:noInline')
  static GetTransactionResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetTransactionResponse>(create);
  static GetTransactionResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get body => $_getN(0);
  @$pb.TagNumber(1)
  set body($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasBody() => $_has(0);
  @$pb.TagNumber(1)
  void clearBody() => clearField(1);
}

class WaitTransaction extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'WaitTransaction', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'txHash', $pb.PbFieldType.OY, protoName: 'txHash')
    ..hasRequiredFields = false
  ;

  WaitTransaction._() : super();
  factory WaitTransaction({
    $core.List<$core.int>? txHash,
  }) {
    final _result = create();
    if (txHash != null) {
      _result.txHash = txHash;
    }
    return _result;
  }
  factory WaitTransaction.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory WaitTransaction.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  WaitTransaction clone() => WaitTransaction()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  WaitTransaction copyWith(void Function(WaitTransaction) updates) => super.copyWith((message) => updates(message as WaitTransaction)) as WaitTransaction; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static WaitTransaction create() => WaitTransaction._();
  WaitTransaction createEmptyInstance() => create();
  static $pb.PbList<WaitTransaction> createRepeated() => $pb.PbList<WaitTransaction>();
  @$core.pragma('dart2js:noInline')
  static WaitTransaction getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<WaitTransaction>(create);
  static WaitTransaction? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get txHash => $_getN(0);
  @$pb.TagNumber(1)
  set txHash($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasTxHash() => $_has(0);
  @$pb.TagNumber(1)
  void clearTxHash() => clearField(1);
}

class WaitTransactionResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'WaitTransactionResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOB(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'mined')
    ..hasRequiredFields = false
  ;

  WaitTransactionResponse._() : super();
  factory WaitTransactionResponse({
    $core.bool? mined,
  }) {
    final _result = create();
    if (mined != null) {
      _result.mined = mined;
    }
    return _result;
  }
  factory WaitTransactionResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory WaitTransactionResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  WaitTransactionResponse clone() => WaitTransactionResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  WaitTransactionResponse copyWith(void Function(WaitTransactionResponse) updates) => super.copyWith((message) => updates(message as WaitTransactionResponse)) as WaitTransactionResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static WaitTransactionResponse create() => WaitTransactionResponse._();
  WaitTransactionResponse createEmptyInstance() => create();
  static $pb.PbList<WaitTransactionResponse> createRepeated() => $pb.PbList<WaitTransactionResponse>();
  @$core.pragma('dart2js:noInline')
  static WaitTransactionResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<WaitTransactionResponse>(create);
  static WaitTransactionResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.bool get mined => $_getBF(0);
  @$pb.TagNumber(1)
  set mined($core.bool v) { $_setBool(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasMined() => $_has(0);
  @$pb.TagNumber(1)
  void clearMined() => clearField(1);
}

