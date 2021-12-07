///
//  Generated code. Do not modify.
//  source: protocol/census.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

enum Census_Body {
  none, 
  arbo, 
  csp, 
  erc20, 
  erc721, 
  erc1155, 
  erc777, 
  ercMiniMe, 
  notSet
}

class Census extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Census_Body> _Census_BodyByTag = {
    1 : Census_Body.none,
    11 : Census_Body.arbo,
    12 : Census_Body.csp,
    21 : Census_Body.erc20,
    22 : Census_Body.erc721,
    23 : Census_Body.erc1155,
    24 : Census_Body.erc777,
    30 : Census_Body.ercMiniMe,
    0 : Census_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Census', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 11, 12, 21, 22, 23, 24, 30])
    ..aOM<CensusNone>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'none', subBuilder: CensusNone.create)
    ..aOM<CensusArbo>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'arbo', subBuilder: CensusArbo.create)
    ..aOM<CensusCsp>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'csp', subBuilder: CensusCsp.create)
    ..aOM<CensusErc20>(21, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'erc20', subBuilder: CensusErc20.create)
    ..aOM<CensusErc721>(22, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'erc721', subBuilder: CensusErc721.create)
    ..aOM<CensusErc1155>(23, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'erc1155', subBuilder: CensusErc1155.create)
    ..aOM<CensusErc721>(24, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'erc777', subBuilder: CensusErc721.create)
    ..aOM<CensusErcMiniMe>(30, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'ercMiniMe', protoName: 'ercMiniMe', subBuilder: CensusErcMiniMe.create)
    ..hasRequiredFields = false
  ;

  Census._() : super();
  factory Census({
    CensusNone? none,
    CensusArbo? arbo,
    CensusCsp? csp,
    CensusErc20? erc20,
    CensusErc721? erc721,
    CensusErc1155? erc1155,
    CensusErc721? erc777,
    CensusErcMiniMe? ercMiniMe,
  }) {
    final _result = create();
    if (none != null) {
      _result.none = none;
    }
    if (arbo != null) {
      _result.arbo = arbo;
    }
    if (csp != null) {
      _result.csp = csp;
    }
    if (erc20 != null) {
      _result.erc20 = erc20;
    }
    if (erc721 != null) {
      _result.erc721 = erc721;
    }
    if (erc1155 != null) {
      _result.erc1155 = erc1155;
    }
    if (erc777 != null) {
      _result.erc777 = erc777;
    }
    if (ercMiniMe != null) {
      _result.ercMiniMe = ercMiniMe;
    }
    return _result;
  }
  factory Census.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Census.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Census clone() => Census()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Census copyWith(void Function(Census) updates) => super.copyWith((message) => updates(message as Census)) as Census; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Census create() => Census._();
  Census createEmptyInstance() => create();
  static $pb.PbList<Census> createRepeated() => $pb.PbList<Census>();
  @$core.pragma('dart2js:noInline')
  static Census getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Census>(create);
  static Census? _defaultInstance;

  Census_Body whichBody() => _Census_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  CensusNone get none => $_getN(0);
  @$pb.TagNumber(1)
  set none(CensusNone v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasNone() => $_has(0);
  @$pb.TagNumber(1)
  void clearNone() => clearField(1);
  @$pb.TagNumber(1)
  CensusNone ensureNone() => $_ensure(0);

  @$pb.TagNumber(11)
  CensusArbo get arbo => $_getN(1);
  @$pb.TagNumber(11)
  set arbo(CensusArbo v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasArbo() => $_has(1);
  @$pb.TagNumber(11)
  void clearArbo() => clearField(11);
  @$pb.TagNumber(11)
  CensusArbo ensureArbo() => $_ensure(1);

  @$pb.TagNumber(12)
  CensusCsp get csp => $_getN(2);
  @$pb.TagNumber(12)
  set csp(CensusCsp v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasCsp() => $_has(2);
  @$pb.TagNumber(12)
  void clearCsp() => clearField(12);
  @$pb.TagNumber(12)
  CensusCsp ensureCsp() => $_ensure(2);

  @$pb.TagNumber(21)
  CensusErc20 get erc20 => $_getN(3);
  @$pb.TagNumber(21)
  set erc20(CensusErc20 v) { setField(21, v); }
  @$pb.TagNumber(21)
  $core.bool hasErc20() => $_has(3);
  @$pb.TagNumber(21)
  void clearErc20() => clearField(21);
  @$pb.TagNumber(21)
  CensusErc20 ensureErc20() => $_ensure(3);

  @$pb.TagNumber(22)
  CensusErc721 get erc721 => $_getN(4);
  @$pb.TagNumber(22)
  set erc721(CensusErc721 v) { setField(22, v); }
  @$pb.TagNumber(22)
  $core.bool hasErc721() => $_has(4);
  @$pb.TagNumber(22)
  void clearErc721() => clearField(22);
  @$pb.TagNumber(22)
  CensusErc721 ensureErc721() => $_ensure(4);

  @$pb.TagNumber(23)
  CensusErc1155 get erc1155 => $_getN(5);
  @$pb.TagNumber(23)
  set erc1155(CensusErc1155 v) { setField(23, v); }
  @$pb.TagNumber(23)
  $core.bool hasErc1155() => $_has(5);
  @$pb.TagNumber(23)
  void clearErc1155() => clearField(23);
  @$pb.TagNumber(23)
  CensusErc1155 ensureErc1155() => $_ensure(5);

  @$pb.TagNumber(24)
  CensusErc721 get erc777 => $_getN(6);
  @$pb.TagNumber(24)
  set erc777(CensusErc721 v) { setField(24, v); }
  @$pb.TagNumber(24)
  $core.bool hasErc777() => $_has(6);
  @$pb.TagNumber(24)
  void clearErc777() => clearField(24);
  @$pb.TagNumber(24)
  CensusErc721 ensureErc777() => $_ensure(6);

  @$pb.TagNumber(30)
  CensusErcMiniMe get ercMiniMe => $_getN(7);
  @$pb.TagNumber(30)
  set ercMiniMe(CensusErcMiniMe v) { setField(30, v); }
  @$pb.TagNumber(30)
  $core.bool hasErcMiniMe() => $_has(7);
  @$pb.TagNumber(30)
  void clearErcMiniMe() => clearField(30);
  @$pb.TagNumber(30)
  CensusErcMiniMe ensureErcMiniMe() => $_ensure(7);
}

class CensusNone extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CensusNone', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  CensusNone._() : super();
  factory CensusNone() => create();
  factory CensusNone.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CensusNone.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CensusNone clone() => CensusNone()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CensusNone copyWith(void Function(CensusNone) updates) => super.copyWith((message) => updates(message as CensusNone)) as CensusNone; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CensusNone create() => CensusNone._();
  CensusNone createEmptyInstance() => create();
  static $pb.PbList<CensusNone> createRepeated() => $pb.PbList<CensusNone>();
  @$core.pragma('dart2js:noInline')
  static CensusNone getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CensusNone>(create);
  static CensusNone? _defaultInstance;
}

class CensusArbo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CensusArbo', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusRoot', $pb.PbFieldType.OY, protoName: 'censusRoot')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'censusUri', protoName: 'censusUri')
    ..hasRequiredFields = false
  ;

  CensusArbo._() : super();
  factory CensusArbo({
    $core.List<$core.int>? censusRoot,
    $core.String? censusUri,
  }) {
    final _result = create();
    if (censusRoot != null) {
      _result.censusRoot = censusRoot;
    }
    if (censusUri != null) {
      _result.censusUri = censusUri;
    }
    return _result;
  }
  factory CensusArbo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CensusArbo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CensusArbo clone() => CensusArbo()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CensusArbo copyWith(void Function(CensusArbo) updates) => super.copyWith((message) => updates(message as CensusArbo)) as CensusArbo; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CensusArbo create() => CensusArbo._();
  CensusArbo createEmptyInstance() => create();
  static $pb.PbList<CensusArbo> createRepeated() => $pb.PbList<CensusArbo>();
  @$core.pragma('dart2js:noInline')
  static CensusArbo getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CensusArbo>(create);
  static CensusArbo? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get censusRoot => $_getN(0);
  @$pb.TagNumber(1)
  set censusRoot($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCensusRoot() => $_has(0);
  @$pb.TagNumber(1)
  void clearCensusRoot() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get censusUri => $_getSZ(1);
  @$pb.TagNumber(2)
  set censusUri($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasCensusUri() => $_has(1);
  @$pb.TagNumber(2)
  void clearCensusUri() => clearField(2);
}

class CensusCsp extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CensusCsp', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cspUri', protoName: 'cspUri')
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cspPublicKey', $pb.PbFieldType.OY, protoName: 'cspPublicKey')
    ..aOB(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'blind')
    ..hasRequiredFields = false
  ;

  CensusCsp._() : super();
  factory CensusCsp({
    $core.String? cspUri,
    $core.List<$core.int>? cspPublicKey,
    $core.bool? blind,
  }) {
    final _result = create();
    if (cspUri != null) {
      _result.cspUri = cspUri;
    }
    if (cspPublicKey != null) {
      _result.cspPublicKey = cspPublicKey;
    }
    if (blind != null) {
      _result.blind = blind;
    }
    return _result;
  }
  factory CensusCsp.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CensusCsp.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CensusCsp clone() => CensusCsp()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CensusCsp copyWith(void Function(CensusCsp) updates) => super.copyWith((message) => updates(message as CensusCsp)) as CensusCsp; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CensusCsp create() => CensusCsp._();
  CensusCsp createEmptyInstance() => create();
  static $pb.PbList<CensusCsp> createRepeated() => $pb.PbList<CensusCsp>();
  @$core.pragma('dart2js:noInline')
  static CensusCsp getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CensusCsp>(create);
  static CensusCsp? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get cspUri => $_getSZ(0);
  @$pb.TagNumber(1)
  set cspUri($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasCspUri() => $_has(0);
  @$pb.TagNumber(1)
  void clearCspUri() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get cspPublicKey => $_getN(1);
  @$pb.TagNumber(2)
  set cspPublicKey($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasCspPublicKey() => $_has(1);
  @$pb.TagNumber(2)
  void clearCspPublicKey() => clearField(2);

  @$pb.TagNumber(3)
  $core.bool get blind => $_getBF(2);
  @$pb.TagNumber(3)
  set blind($core.bool v) { $_setBool(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasBlind() => $_has(2);
  @$pb.TagNumber(3)
  void clearBlind() => clearField(3);
}

class CensusErc20 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CensusErc20', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'tokenAddress', $pb.PbFieldType.OY, protoName: 'tokenAddress')
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'balanceMapSlot', $pb.PbFieldType.O3, protoName: 'balanceMapSlot')
    ..aOM<StorageProofErc20>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof', subBuilder: StorageProofErc20.create)
    ..a<$core.int>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'sourceEthereumBlock', $pb.PbFieldType.O3, protoName: 'sourceEthereumBlock')
    ..hasRequiredFields = false
  ;

  CensusErc20._() : super();
  factory CensusErc20({
    $core.List<$core.int>? tokenAddress,
    $core.int? balanceMapSlot,
    StorageProofErc20? proof,
    $core.int? sourceEthereumBlock,
  }) {
    final _result = create();
    if (tokenAddress != null) {
      _result.tokenAddress = tokenAddress;
    }
    if (balanceMapSlot != null) {
      _result.balanceMapSlot = balanceMapSlot;
    }
    if (proof != null) {
      _result.proof = proof;
    }
    if (sourceEthereumBlock != null) {
      _result.sourceEthereumBlock = sourceEthereumBlock;
    }
    return _result;
  }
  factory CensusErc20.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CensusErc20.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CensusErc20 clone() => CensusErc20()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CensusErc20 copyWith(void Function(CensusErc20) updates) => super.copyWith((message) => updates(message as CensusErc20)) as CensusErc20; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CensusErc20 create() => CensusErc20._();
  CensusErc20 createEmptyInstance() => create();
  static $pb.PbList<CensusErc20> createRepeated() => $pb.PbList<CensusErc20>();
  @$core.pragma('dart2js:noInline')
  static CensusErc20 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CensusErc20>(create);
  static CensusErc20? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get tokenAddress => $_getN(0);
  @$pb.TagNumber(1)
  set tokenAddress($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasTokenAddress() => $_has(0);
  @$pb.TagNumber(1)
  void clearTokenAddress() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get balanceMapSlot => $_getIZ(1);
  @$pb.TagNumber(2)
  set balanceMapSlot($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBalanceMapSlot() => $_has(1);
  @$pb.TagNumber(2)
  void clearBalanceMapSlot() => clearField(2);

  @$pb.TagNumber(3)
  StorageProofErc20 get proof => $_getN(2);
  @$pb.TagNumber(3)
  set proof(StorageProofErc20 v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasProof() => $_has(2);
  @$pb.TagNumber(3)
  void clearProof() => clearField(3);
  @$pb.TagNumber(3)
  StorageProofErc20 ensureProof() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.int get sourceEthereumBlock => $_getIZ(3);
  @$pb.TagNumber(4)
  set sourceEthereumBlock($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasSourceEthereumBlock() => $_has(3);
  @$pb.TagNumber(4)
  void clearSourceEthereumBlock() => clearField(4);
}

class CensusErc721 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CensusErc721', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  CensusErc721._() : super();
  factory CensusErc721() => create();
  factory CensusErc721.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CensusErc721.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CensusErc721 clone() => CensusErc721()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CensusErc721 copyWith(void Function(CensusErc721) updates) => super.copyWith((message) => updates(message as CensusErc721)) as CensusErc721; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CensusErc721 create() => CensusErc721._();
  CensusErc721 createEmptyInstance() => create();
  static $pb.PbList<CensusErc721> createRepeated() => $pb.PbList<CensusErc721>();
  @$core.pragma('dart2js:noInline')
  static CensusErc721 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CensusErc721>(create);
  static CensusErc721? _defaultInstance;
}

class CensusErc1155 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CensusErc1155', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  CensusErc1155._() : super();
  factory CensusErc1155() => create();
  factory CensusErc1155.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CensusErc1155.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CensusErc1155 clone() => CensusErc1155()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CensusErc1155 copyWith(void Function(CensusErc1155) updates) => super.copyWith((message) => updates(message as CensusErc1155)) as CensusErc1155; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CensusErc1155 create() => CensusErc1155._();
  CensusErc1155 createEmptyInstance() => create();
  static $pb.PbList<CensusErc1155> createRepeated() => $pb.PbList<CensusErc1155>();
  @$core.pragma('dart2js:noInline')
  static CensusErc1155 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CensusErc1155>(create);
  static CensusErc1155? _defaultInstance;
}

class CensusErc777 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CensusErc777', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  CensusErc777._() : super();
  factory CensusErc777() => create();
  factory CensusErc777.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CensusErc777.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CensusErc777 clone() => CensusErc777()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CensusErc777 copyWith(void Function(CensusErc777) updates) => super.copyWith((message) => updates(message as CensusErc777)) as CensusErc777; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CensusErc777 create() => CensusErc777._();
  CensusErc777 createEmptyInstance() => create();
  static $pb.PbList<CensusErc777> createRepeated() => $pb.PbList<CensusErc777>();
  @$core.pragma('dart2js:noInline')
  static CensusErc777 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CensusErc777>(create);
  static CensusErc777? _defaultInstance;
}

class CensusErcMiniMe extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'CensusErcMiniMe', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'tokenAddress', $pb.PbFieldType.OY, protoName: 'tokenAddress')
    ..a<$core.int>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'balanceMapSlot', $pb.PbFieldType.O3, protoName: 'balanceMapSlot')
    ..aOM<StorageProofMiniMe>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof', subBuilder: StorageProofMiniMe.create)
    ..a<$core.int>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'sourceEthereumBlock', $pb.PbFieldType.O3, protoName: 'sourceEthereumBlock')
    ..hasRequiredFields = false
  ;

  CensusErcMiniMe._() : super();
  factory CensusErcMiniMe({
    $core.List<$core.int>? tokenAddress,
    $core.int? balanceMapSlot,
    StorageProofMiniMe? proof,
    $core.int? sourceEthereumBlock,
  }) {
    final _result = create();
    if (tokenAddress != null) {
      _result.tokenAddress = tokenAddress;
    }
    if (balanceMapSlot != null) {
      _result.balanceMapSlot = balanceMapSlot;
    }
    if (proof != null) {
      _result.proof = proof;
    }
    if (sourceEthereumBlock != null) {
      _result.sourceEthereumBlock = sourceEthereumBlock;
    }
    return _result;
  }
  factory CensusErcMiniMe.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory CensusErcMiniMe.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  CensusErcMiniMe clone() => CensusErcMiniMe()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  CensusErcMiniMe copyWith(void Function(CensusErcMiniMe) updates) => super.copyWith((message) => updates(message as CensusErcMiniMe)) as CensusErcMiniMe; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static CensusErcMiniMe create() => CensusErcMiniMe._();
  CensusErcMiniMe createEmptyInstance() => create();
  static $pb.PbList<CensusErcMiniMe> createRepeated() => $pb.PbList<CensusErcMiniMe>();
  @$core.pragma('dart2js:noInline')
  static CensusErcMiniMe getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<CensusErcMiniMe>(create);
  static CensusErcMiniMe? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get tokenAddress => $_getN(0);
  @$pb.TagNumber(1)
  set tokenAddress($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasTokenAddress() => $_has(0);
  @$pb.TagNumber(1)
  void clearTokenAddress() => clearField(1);

  @$pb.TagNumber(2)
  $core.int get balanceMapSlot => $_getIZ(1);
  @$pb.TagNumber(2)
  set balanceMapSlot($core.int v) { $_setSignedInt32(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasBalanceMapSlot() => $_has(1);
  @$pb.TagNumber(2)
  void clearBalanceMapSlot() => clearField(2);

  @$pb.TagNumber(3)
  StorageProofMiniMe get proof => $_getN(2);
  @$pb.TagNumber(3)
  set proof(StorageProofMiniMe v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasProof() => $_has(2);
  @$pb.TagNumber(3)
  void clearProof() => clearField(3);
  @$pb.TagNumber(3)
  StorageProofMiniMe ensureProof() => $_ensure(2);

  @$pb.TagNumber(4)
  $core.int get sourceEthereumBlock => $_getIZ(3);
  @$pb.TagNumber(4)
  set sourceEthereumBlock($core.int v) { $_setSignedInt32(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasSourceEthereumBlock() => $_has(3);
  @$pb.TagNumber(4)
  void clearSourceEthereumBlock() => clearField(4);
}

enum Proof_Body {
  none, 
  arbo, 
  csp, 
  erc20, 
  erc721, 
  erc1155, 
  erc777, 
  miniMe, 
  zkSnark, 
  notSet
}

class Proof extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, Proof_Body> _Proof_BodyByTag = {
    1 : Proof_Body.none,
    11 : Proof_Body.arbo,
    12 : Proof_Body.csp,
    21 : Proof_Body.erc20,
    22 : Proof_Body.erc721,
    23 : Proof_Body.erc1155,
    24 : Proof_Body.erc777,
    30 : Proof_Body.miniMe,
    100 : Proof_Body.zkSnark,
    0 : Proof_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Proof', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 11, 12, 21, 22, 23, 24, 30, 100])
    ..aOM<ProofNone>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'none', subBuilder: ProofNone.create)
    ..aOM<ProofArbo>(11, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'arbo', subBuilder: ProofArbo.create)
    ..aOM<ProofCSP>(12, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'csp', subBuilder: ProofCSP.create)
    ..aOM<StorageProofErc20>(21, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'erc20', subBuilder: StorageProofErc20.create)
    ..aOM<StorageProofErc721>(22, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'erc721', subBuilder: StorageProofErc721.create)
    ..aOM<StorageProofErc1155>(23, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'erc1155', subBuilder: StorageProofErc1155.create)
    ..aOM<StorageProofErc777>(24, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'erc777', subBuilder: StorageProofErc777.create)
    ..aOM<StorageProofMiniMe>(30, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'miniMe', protoName: 'miniMe', subBuilder: StorageProofMiniMe.create)
    ..aOM<ProofZkSnark>(100, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'zkSnark', protoName: 'zkSnark', subBuilder: ProofZkSnark.create)
    ..hasRequiredFields = false
  ;

  Proof._() : super();
  factory Proof({
    ProofNone? none,
    ProofArbo? arbo,
    ProofCSP? csp,
    StorageProofErc20? erc20,
    StorageProofErc721? erc721,
    StorageProofErc1155? erc1155,
    StorageProofErc777? erc777,
    StorageProofMiniMe? miniMe,
    ProofZkSnark? zkSnark,
  }) {
    final _result = create();
    if (none != null) {
      _result.none = none;
    }
    if (arbo != null) {
      _result.arbo = arbo;
    }
    if (csp != null) {
      _result.csp = csp;
    }
    if (erc20 != null) {
      _result.erc20 = erc20;
    }
    if (erc721 != null) {
      _result.erc721 = erc721;
    }
    if (erc1155 != null) {
      _result.erc1155 = erc1155;
    }
    if (erc777 != null) {
      _result.erc777 = erc777;
    }
    if (miniMe != null) {
      _result.miniMe = miniMe;
    }
    if (zkSnark != null) {
      _result.zkSnark = zkSnark;
    }
    return _result;
  }
  factory Proof.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Proof.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Proof clone() => Proof()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Proof copyWith(void Function(Proof) updates) => super.copyWith((message) => updates(message as Proof)) as Proof; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Proof create() => Proof._();
  Proof createEmptyInstance() => create();
  static $pb.PbList<Proof> createRepeated() => $pb.PbList<Proof>();
  @$core.pragma('dart2js:noInline')
  static Proof getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Proof>(create);
  static Proof? _defaultInstance;

  Proof_Body whichBody() => _Proof_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  ProofNone get none => $_getN(0);
  @$pb.TagNumber(1)
  set none(ProofNone v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasNone() => $_has(0);
  @$pb.TagNumber(1)
  void clearNone() => clearField(1);
  @$pb.TagNumber(1)
  ProofNone ensureNone() => $_ensure(0);

  @$pb.TagNumber(11)
  ProofArbo get arbo => $_getN(1);
  @$pb.TagNumber(11)
  set arbo(ProofArbo v) { setField(11, v); }
  @$pb.TagNumber(11)
  $core.bool hasArbo() => $_has(1);
  @$pb.TagNumber(11)
  void clearArbo() => clearField(11);
  @$pb.TagNumber(11)
  ProofArbo ensureArbo() => $_ensure(1);

  @$pb.TagNumber(12)
  ProofCSP get csp => $_getN(2);
  @$pb.TagNumber(12)
  set csp(ProofCSP v) { setField(12, v); }
  @$pb.TagNumber(12)
  $core.bool hasCsp() => $_has(2);
  @$pb.TagNumber(12)
  void clearCsp() => clearField(12);
  @$pb.TagNumber(12)
  ProofCSP ensureCsp() => $_ensure(2);

  @$pb.TagNumber(21)
  StorageProofErc20 get erc20 => $_getN(3);
  @$pb.TagNumber(21)
  set erc20(StorageProofErc20 v) { setField(21, v); }
  @$pb.TagNumber(21)
  $core.bool hasErc20() => $_has(3);
  @$pb.TagNumber(21)
  void clearErc20() => clearField(21);
  @$pb.TagNumber(21)
  StorageProofErc20 ensureErc20() => $_ensure(3);

  @$pb.TagNumber(22)
  StorageProofErc721 get erc721 => $_getN(4);
  @$pb.TagNumber(22)
  set erc721(StorageProofErc721 v) { setField(22, v); }
  @$pb.TagNumber(22)
  $core.bool hasErc721() => $_has(4);
  @$pb.TagNumber(22)
  void clearErc721() => clearField(22);
  @$pb.TagNumber(22)
  StorageProofErc721 ensureErc721() => $_ensure(4);

  @$pb.TagNumber(23)
  StorageProofErc1155 get erc1155 => $_getN(5);
  @$pb.TagNumber(23)
  set erc1155(StorageProofErc1155 v) { setField(23, v); }
  @$pb.TagNumber(23)
  $core.bool hasErc1155() => $_has(5);
  @$pb.TagNumber(23)
  void clearErc1155() => clearField(23);
  @$pb.TagNumber(23)
  StorageProofErc1155 ensureErc1155() => $_ensure(5);

  @$pb.TagNumber(24)
  StorageProofErc777 get erc777 => $_getN(6);
  @$pb.TagNumber(24)
  set erc777(StorageProofErc777 v) { setField(24, v); }
  @$pb.TagNumber(24)
  $core.bool hasErc777() => $_has(6);
  @$pb.TagNumber(24)
  void clearErc777() => clearField(24);
  @$pb.TagNumber(24)
  StorageProofErc777 ensureErc777() => $_ensure(6);

  @$pb.TagNumber(30)
  StorageProofMiniMe get miniMe => $_getN(7);
  @$pb.TagNumber(30)
  set miniMe(StorageProofMiniMe v) { setField(30, v); }
  @$pb.TagNumber(30)
  $core.bool hasMiniMe() => $_has(7);
  @$pb.TagNumber(30)
  void clearMiniMe() => clearField(30);
  @$pb.TagNumber(30)
  StorageProofMiniMe ensureMiniMe() => $_ensure(7);

  @$pb.TagNumber(100)
  ProofZkSnark get zkSnark => $_getN(8);
  @$pb.TagNumber(100)
  set zkSnark(ProofZkSnark v) { setField(100, v); }
  @$pb.TagNumber(100)
  $core.bool hasZkSnark() => $_has(8);
  @$pb.TagNumber(100)
  void clearZkSnark() => clearField(100);
  @$pb.TagNumber(100)
  ProofZkSnark ensureZkSnark() => $_ensure(8);
}

class ProofNone extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofNone', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  ProofNone._() : super();
  factory ProofNone() => create();
  factory ProofNone.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofNone.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofNone clone() => ProofNone()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofNone copyWith(void Function(ProofNone) updates) => super.copyWith((message) => updates(message as ProofNone)) as ProofNone; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofNone create() => ProofNone._();
  ProofNone createEmptyInstance() => create();
  static $pb.PbList<ProofNone> createRepeated() => $pb.PbList<ProofNone>();
  @$core.pragma('dart2js:noInline')
  static ProofNone getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofNone>(create);
  static ProofNone? _defaultInstance;
}

class ProofArbo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofArbo', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..p<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'siblings', $pb.PbFieldType.PY)
    ..hasRequiredFields = false
  ;

  ProofArbo._() : super();
  factory ProofArbo({
    $core.Iterable<$core.List<$core.int>>? siblings,
  }) {
    final _result = create();
    if (siblings != null) {
      _result.siblings.addAll(siblings);
    }
    return _result;
  }
  factory ProofArbo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofArbo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofArbo clone() => ProofArbo()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofArbo copyWith(void Function(ProofArbo) updates) => super.copyWith((message) => updates(message as ProofArbo)) as ProofArbo; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofArbo create() => ProofArbo._();
  ProofArbo createEmptyInstance() => create();
  static $pb.PbList<ProofArbo> createRepeated() => $pb.PbList<ProofArbo>();
  @$core.pragma('dart2js:noInline')
  static ProofArbo getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofArbo>(create);
  static ProofArbo? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.List<$core.int>> get siblings => $_getList(0);
}

class ProofCSP extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofCSP', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'payload', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'signature', $pb.PbFieldType.OY)
    ..hasRequiredFields = false
  ;

  ProofCSP._() : super();
  factory ProofCSP({
    $core.List<$core.int>? payload,
    $core.List<$core.int>? signature,
  }) {
    final _result = create();
    if (payload != null) {
      _result.payload = payload;
    }
    if (signature != null) {
      _result.signature = signature;
    }
    return _result;
  }
  factory ProofCSP.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofCSP.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofCSP clone() => ProofCSP()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofCSP copyWith(void Function(ProofCSP) updates) => super.copyWith((message) => updates(message as ProofCSP)) as ProofCSP; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofCSP create() => ProofCSP._();
  ProofCSP createEmptyInstance() => create();
  static $pb.PbList<ProofCSP> createRepeated() => $pb.PbList<ProofCSP>();
  @$core.pragma('dart2js:noInline')
  static ProofCSP getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofCSP>(create);
  static ProofCSP? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$core.int> get payload => $_getN(0);
  @$pb.TagNumber(1)
  set payload($core.List<$core.int> v) { $_setBytes(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasPayload() => $_has(0);
  @$pb.TagNumber(1)
  void clearPayload() => clearField(1);

  @$pb.TagNumber(2)
  $core.List<$core.int> get signature => $_getN(1);
  @$pb.TagNumber(2)
  set signature($core.List<$core.int> v) { $_setBytes(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasSignature() => $_has(1);
  @$pb.TagNumber(2)
  void clearSignature() => clearField(2);
}

class StorageProofErc20 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'StorageProofErc20', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..a<$core.List<$core.int>>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'key', $pb.PbFieldType.OY)
    ..a<$core.List<$core.int>>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'value', $pb.PbFieldType.OY)
    ..p<$core.List<$core.int>>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof', $pb.PbFieldType.PY)
    ..hasRequiredFields = false
  ;

  StorageProofErc20._() : super();
  factory StorageProofErc20({
    $core.List<$core.int>? key,
    $core.List<$core.int>? value,
    $core.Iterable<$core.List<$core.int>>? proof,
  }) {
    final _result = create();
    if (key != null) {
      _result.key = key;
    }
    if (value != null) {
      _result.value = value;
    }
    if (proof != null) {
      _result.proof.addAll(proof);
    }
    return _result;
  }
  factory StorageProofErc20.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory StorageProofErc20.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  StorageProofErc20 clone() => StorageProofErc20()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  StorageProofErc20 copyWith(void Function(StorageProofErc20) updates) => super.copyWith((message) => updates(message as StorageProofErc20)) as StorageProofErc20; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static StorageProofErc20 create() => StorageProofErc20._();
  StorageProofErc20 createEmptyInstance() => create();
  static $pb.PbList<StorageProofErc20> createRepeated() => $pb.PbList<StorageProofErc20>();
  @$core.pragma('dart2js:noInline')
  static StorageProofErc20 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<StorageProofErc20>(create);
  static StorageProofErc20? _defaultInstance;

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

  @$pb.TagNumber(3)
  $core.List<$core.List<$core.int>> get proof => $_getList(2);
}

class StorageProofErc721 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'StorageProofErc721', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  StorageProofErc721._() : super();
  factory StorageProofErc721() => create();
  factory StorageProofErc721.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory StorageProofErc721.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  StorageProofErc721 clone() => StorageProofErc721()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  StorageProofErc721 copyWith(void Function(StorageProofErc721) updates) => super.copyWith((message) => updates(message as StorageProofErc721)) as StorageProofErc721; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static StorageProofErc721 create() => StorageProofErc721._();
  StorageProofErc721 createEmptyInstance() => create();
  static $pb.PbList<StorageProofErc721> createRepeated() => $pb.PbList<StorageProofErc721>();
  @$core.pragma('dart2js:noInline')
  static StorageProofErc721 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<StorageProofErc721>(create);
  static StorageProofErc721? _defaultInstance;
}

class StorageProofErc1155 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'StorageProofErc1155', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  StorageProofErc1155._() : super();
  factory StorageProofErc1155() => create();
  factory StorageProofErc1155.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory StorageProofErc1155.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  StorageProofErc1155 clone() => StorageProofErc1155()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  StorageProofErc1155 copyWith(void Function(StorageProofErc1155) updates) => super.copyWith((message) => updates(message as StorageProofErc1155)) as StorageProofErc1155; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static StorageProofErc1155 create() => StorageProofErc1155._();
  StorageProofErc1155 createEmptyInstance() => create();
  static $pb.PbList<StorageProofErc1155> createRepeated() => $pb.PbList<StorageProofErc1155>();
  @$core.pragma('dart2js:noInline')
  static StorageProofErc1155 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<StorageProofErc1155>(create);
  static StorageProofErc1155? _defaultInstance;
}

class StorageProofErc777 extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'StorageProofErc777', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  StorageProofErc777._() : super();
  factory StorageProofErc777() => create();
  factory StorageProofErc777.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory StorageProofErc777.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  StorageProofErc777 clone() => StorageProofErc777()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  StorageProofErc777 copyWith(void Function(StorageProofErc777) updates) => super.copyWith((message) => updates(message as StorageProofErc777)) as StorageProofErc777; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static StorageProofErc777 create() => StorageProofErc777._();
  StorageProofErc777 createEmptyInstance() => create();
  static $pb.PbList<StorageProofErc777> createRepeated() => $pb.PbList<StorageProofErc777>();
  @$core.pragma('dart2js:noInline')
  static StorageProofErc777 getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<StorageProofErc777>(create);
  static StorageProofErc777? _defaultInstance;
}

class StorageProofMiniMe extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'StorageProofMiniMe', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  StorageProofMiniMe._() : super();
  factory StorageProofMiniMe() => create();
  factory StorageProofMiniMe.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory StorageProofMiniMe.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  StorageProofMiniMe clone() => StorageProofMiniMe()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  StorageProofMiniMe copyWith(void Function(StorageProofMiniMe) updates) => super.copyWith((message) => updates(message as StorageProofMiniMe)) as StorageProofMiniMe; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static StorageProofMiniMe create() => StorageProofMiniMe._();
  StorageProofMiniMe createEmptyInstance() => create();
  static $pb.PbList<StorageProofMiniMe> createRepeated() => $pb.PbList<StorageProofMiniMe>();
  @$core.pragma('dart2js:noInline')
  static StorageProofMiniMe getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<StorageProofMiniMe>(create);
  static StorageProofMiniMe? _defaultInstance;
}

class ProofZkSnark_Poseidon1kCensus extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofZkSnark.Poseidon1kCensus', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  ProofZkSnark_Poseidon1kCensus._() : super();
  factory ProofZkSnark_Poseidon1kCensus() => create();
  factory ProofZkSnark_Poseidon1kCensus.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofZkSnark_Poseidon1kCensus.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofZkSnark_Poseidon1kCensus clone() => ProofZkSnark_Poseidon1kCensus()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofZkSnark_Poseidon1kCensus copyWith(void Function(ProofZkSnark_Poseidon1kCensus) updates) => super.copyWith((message) => updates(message as ProofZkSnark_Poseidon1kCensus)) as ProofZkSnark_Poseidon1kCensus; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofZkSnark_Poseidon1kCensus create() => ProofZkSnark_Poseidon1kCensus._();
  ProofZkSnark_Poseidon1kCensus createEmptyInstance() => create();
  static $pb.PbList<ProofZkSnark_Poseidon1kCensus> createRepeated() => $pb.PbList<ProofZkSnark_Poseidon1kCensus>();
  @$core.pragma('dart2js:noInline')
  static ProofZkSnark_Poseidon1kCensus getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofZkSnark_Poseidon1kCensus>(create);
  static ProofZkSnark_Poseidon1kCensus? _defaultInstance;
}

class ProofZkSnark_Poseidon50kCensus extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofZkSnark.Poseidon50kCensus', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  ProofZkSnark_Poseidon50kCensus._() : super();
  factory ProofZkSnark_Poseidon50kCensus() => create();
  factory ProofZkSnark_Poseidon50kCensus.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofZkSnark_Poseidon50kCensus.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofZkSnark_Poseidon50kCensus clone() => ProofZkSnark_Poseidon50kCensus()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofZkSnark_Poseidon50kCensus copyWith(void Function(ProofZkSnark_Poseidon50kCensus) updates) => super.copyWith((message) => updates(message as ProofZkSnark_Poseidon50kCensus)) as ProofZkSnark_Poseidon50kCensus; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofZkSnark_Poseidon50kCensus create() => ProofZkSnark_Poseidon50kCensus._();
  ProofZkSnark_Poseidon50kCensus createEmptyInstance() => create();
  static $pb.PbList<ProofZkSnark_Poseidon50kCensus> createRepeated() => $pb.PbList<ProofZkSnark_Poseidon50kCensus>();
  @$core.pragma('dart2js:noInline')
  static ProofZkSnark_Poseidon50kCensus getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofZkSnark_Poseidon50kCensus>(create);
  static ProofZkSnark_Poseidon50kCensus? _defaultInstance;
}

class ProofZkSnark_Poseidon250kCensus extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofZkSnark.Poseidon250kCensus', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  ProofZkSnark_Poseidon250kCensus._() : super();
  factory ProofZkSnark_Poseidon250kCensus() => create();
  factory ProofZkSnark_Poseidon250kCensus.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofZkSnark_Poseidon250kCensus.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofZkSnark_Poseidon250kCensus clone() => ProofZkSnark_Poseidon250kCensus()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofZkSnark_Poseidon250kCensus copyWith(void Function(ProofZkSnark_Poseidon250kCensus) updates) => super.copyWith((message) => updates(message as ProofZkSnark_Poseidon250kCensus)) as ProofZkSnark_Poseidon250kCensus; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofZkSnark_Poseidon250kCensus create() => ProofZkSnark_Poseidon250kCensus._();
  ProofZkSnark_Poseidon250kCensus createEmptyInstance() => create();
  static $pb.PbList<ProofZkSnark_Poseidon250kCensus> createRepeated() => $pb.PbList<ProofZkSnark_Poseidon250kCensus>();
  @$core.pragma('dart2js:noInline')
  static ProofZkSnark_Poseidon250kCensus getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofZkSnark_Poseidon250kCensus>(create);
  static ProofZkSnark_Poseidon250kCensus? _defaultInstance;
}

enum ProofZkSnark_Body {
  proof1k, 
  proof50k, 
  proof250k, 
  notSet
}

class ProofZkSnark extends $pb.GeneratedMessage {
  static const $core.Map<$core.int, ProofZkSnark_Body> _ProofZkSnark_BodyByTag = {
    1 : ProofZkSnark_Body.proof1k,
    2 : ProofZkSnark_Body.proof50k,
    3 : ProofZkSnark_Body.proof250k,
    0 : ProofZkSnark_Body.notSet
  };
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'ProofZkSnark', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'dvote.types.v2'), createEmptyInstance: create)
    ..oo(0, [1, 2, 3])
    ..aOM<ProofZkSnark_Poseidon1kCensus>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof1k', subBuilder: ProofZkSnark_Poseidon1kCensus.create)
    ..aOM<ProofZkSnark_Poseidon50kCensus>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof50k', subBuilder: ProofZkSnark_Poseidon50kCensus.create)
    ..aOM<ProofZkSnark_Poseidon250kCensus>(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'proof250k', subBuilder: ProofZkSnark_Poseidon250kCensus.create)
    ..hasRequiredFields = false
  ;

  ProofZkSnark._() : super();
  factory ProofZkSnark({
    ProofZkSnark_Poseidon1kCensus? proof1k,
    ProofZkSnark_Poseidon50kCensus? proof50k,
    ProofZkSnark_Poseidon250kCensus? proof250k,
  }) {
    final _result = create();
    if (proof1k != null) {
      _result.proof1k = proof1k;
    }
    if (proof50k != null) {
      _result.proof50k = proof50k;
    }
    if (proof250k != null) {
      _result.proof250k = proof250k;
    }
    return _result;
  }
  factory ProofZkSnark.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory ProofZkSnark.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  ProofZkSnark clone() => ProofZkSnark()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  ProofZkSnark copyWith(void Function(ProofZkSnark) updates) => super.copyWith((message) => updates(message as ProofZkSnark)) as ProofZkSnark; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static ProofZkSnark create() => ProofZkSnark._();
  ProofZkSnark createEmptyInstance() => create();
  static $pb.PbList<ProofZkSnark> createRepeated() => $pb.PbList<ProofZkSnark>();
  @$core.pragma('dart2js:noInline')
  static ProofZkSnark getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<ProofZkSnark>(create);
  static ProofZkSnark? _defaultInstance;

  ProofZkSnark_Body whichBody() => _ProofZkSnark_BodyByTag[$_whichOneof(0)]!;
  void clearBody() => clearField($_whichOneof(0));

  @$pb.TagNumber(1)
  ProofZkSnark_Poseidon1kCensus get proof1k => $_getN(0);
  @$pb.TagNumber(1)
  set proof1k(ProofZkSnark_Poseidon1kCensus v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasProof1k() => $_has(0);
  @$pb.TagNumber(1)
  void clearProof1k() => clearField(1);
  @$pb.TagNumber(1)
  ProofZkSnark_Poseidon1kCensus ensureProof1k() => $_ensure(0);

  @$pb.TagNumber(2)
  ProofZkSnark_Poseidon50kCensus get proof50k => $_getN(1);
  @$pb.TagNumber(2)
  set proof50k(ProofZkSnark_Poseidon50kCensus v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasProof50k() => $_has(1);
  @$pb.TagNumber(2)
  void clearProof50k() => clearField(2);
  @$pb.TagNumber(2)
  ProofZkSnark_Poseidon50kCensus ensureProof50k() => $_ensure(1);

  @$pb.TagNumber(3)
  ProofZkSnark_Poseidon250kCensus get proof250k => $_getN(2);
  @$pb.TagNumber(3)
  set proof250k(ProofZkSnark_Poseidon250kCensus v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasProof250k() => $_has(2);
  @$pb.TagNumber(3)
  void clearProof250k() => clearField(3);
  @$pb.TagNumber(3)
  ProofZkSnark_Poseidon250kCensus ensureProof250k() => $_ensure(2);
}

