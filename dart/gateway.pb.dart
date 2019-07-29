///
//  Generated code. Do not modify.
//  source: gateway.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core show bool, Deprecated, double, int, List, Map, override, pragma, String;

import 'package:protobuf/protobuf.dart' as $pb;

class GatewaysStore extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GatewaysStore', package: const $pb.PackageName('dvote'))
    ..pc<Gateway>(1, 'items', $pb.PbFieldType.PM,Gateway.create)
    ..hasRequiredFields = false
  ;

  GatewaysStore._() : super();
  factory GatewaysStore() => create();
  factory GatewaysStore.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GatewaysStore.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GatewaysStore clone() => GatewaysStore()..mergeFromMessage(this);
  GatewaysStore copyWith(void Function(GatewaysStore) updates) => super.copyWith((message) => updates(message as GatewaysStore));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GatewaysStore create() => GatewaysStore._();
  GatewaysStore createEmptyInstance() => create();
  static $pb.PbList<GatewaysStore> createRepeated() => $pb.PbList<GatewaysStore>();
  static GatewaysStore getDefault() => _defaultInstance ??= create()..freeze();
  static GatewaysStore _defaultInstance;

  $core.List<Gateway> get items => $_getList(0);
}

class Gateway extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Gateway', package: const $pb.PackageName('dvote'))
    ..aOS(1, 'dvote')
    ..aOS(2, 'web3')
    ..aOS(3, 'publicKey')
    ..m<$core.String, $core.String>(100, 'meta', 'Gateway.MetaEntry',$pb.PbFieldType.OS, $pb.PbFieldType.OS, null, null, null , const $pb.PackageName('dvote'))
    ..hasRequiredFields = false
  ;

  Gateway._() : super();
  factory Gateway() => create();
  factory Gateway.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Gateway.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Gateway clone() => Gateway()..mergeFromMessage(this);
  Gateway copyWith(void Function(Gateway) updates) => super.copyWith((message) => updates(message as Gateway));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Gateway create() => Gateway._();
  Gateway createEmptyInstance() => create();
  static $pb.PbList<Gateway> createRepeated() => $pb.PbList<Gateway>();
  static Gateway getDefault() => _defaultInstance ??= create()..freeze();
  static Gateway _defaultInstance;

  $core.String get dvote => $_getS(0, '');
  set dvote($core.String v) { $_setString(0, v); }
  $core.bool hasDvote() => $_has(0);
  void clearDvote() => clearField(1);

  $core.String get web3 => $_getS(1, '');
  set web3($core.String v) { $_setString(1, v); }
  $core.bool hasWeb3() => $_has(1);
  void clearWeb3() => clearField(2);

  $core.String get publicKey => $_getS(2, '');
  set publicKey($core.String v) { $_setString(2, v); }
  $core.bool hasPublicKey() => $_has(2);
  void clearPublicKey() => clearField(3);

  $core.Map<$core.String, $core.String> get meta => $_getMap(3);
}

