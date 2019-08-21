///
//  Generated code. Do not modify.
//  source: gateway.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

class GatewayInfoStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GatewayInfoStore', package: const $pb.PackageName('dvote'))
    ..pc<GatewayInfo>(1, 'items', $pb.PbFieldType.PM,GatewayInfo.create)
    ..hasRequiredFields = false
  ;

  GatewayInfoStore._() : super();
  factory GatewayInfoStore() => create();
  factory GatewayInfoStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GatewayInfoStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GatewayInfoStore clone() => GatewayInfoStore()..mergeFromMessage(this);
  GatewayInfoStore copyWith(void Function(GatewayInfoStore) updates) => super.copyWith((message) => updates(message as GatewayInfoStore));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GatewayInfoStore create() => GatewayInfoStore._();
  GatewayInfoStore createEmptyInstance() => create();
  static $pb.PbList<GatewayInfoStore> createRepeated() => $pb.PbList<GatewayInfoStore>();
  static GatewayInfoStore getDefault() => _defaultInstance ??= create()..freeze();
  static GatewayInfoStore _defaultInstance;

  $core.List<GatewayInfo> get items => $_getList(0);
}

class GatewayInfo extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GatewayInfo', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'dvote')
    ..pPS(2, 'supportedApis')
    ..aOS(3, 'web3')
    ..aOS(4, 'networkId')
    ..aOS(5, 'publicKey')
    ..m<$core.String, $core.String>(100, 'meta', 'GatewayInfo.MetaEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..hasRequiredFields = false
  ;

  GatewayInfo._() : super();
  factory GatewayInfo() => create();
  factory GatewayInfo.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GatewayInfo.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GatewayInfo clone() => GatewayInfo()..mergeFromMessage(this);
  GatewayInfo copyWith(void Function(GatewayInfo) updates) => super.copyWith((message) => updates(message as GatewayInfo));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GatewayInfo create() => GatewayInfo._();
  GatewayInfo createEmptyInstance() => create();
  static $pb.PbList<GatewayInfo> createRepeated() => $pb.PbList<GatewayInfo>();
  static GatewayInfo getDefault() => _defaultInstance ??= create()..freeze();
  static GatewayInfo _defaultInstance;

  $core.String get dvote => $_getS(0, '');
  set dvote($core.String v) { $_setString(0, v); }
  $core.bool hasDvote() => $_has(0);
  void clearDvote() => clearField(1);

  $core.List<$core.String> get supportedApis => $_getList(1);

  $core.String get web3 => $_getS(2, '');
  set web3($core.String v) { $_setString(2, v); }
  $core.bool hasWeb3() => $_has(2);
  void clearWeb3() => clearField(3);

  $core.String get networkId => $_getS(3, '');
  set networkId($core.String v) { $_setString(3, v); }
  $core.bool hasNetworkId() => $_has(3);
  void clearNetworkId() => clearField(4);

  $core.String get publicKey => $_getS(4, '');
  set publicKey($core.String v) { $_setString(4, v); }
  $core.bool hasPublicKey() => $_has(4);
  void clearPublicKey() => clearField(5);

  $core.Map<$core.String, $core.String> get meta => $_getMap(5);
}

