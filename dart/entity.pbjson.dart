///
//  Generated code. Do not modify.
//  source: entity.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

const EntitiesStore$json = const {
  '1': 'EntitiesStore',
  '2': const [
    const {'1': 'items', '3': 1, '4': 3, '5': 11, '6': '.dvote.Entity', '10': 'items'},
  ],
};

const Entity$json = const {
  '1': 'Entity',
  '2': const [
    const {'1': 'version', '3': 1, '4': 1, '5': 9, '10': 'version'},
    const {'1': 'entityId', '3': 2, '4': 1, '5': 9, '10': 'entityId'},
    const {'1': 'languages', '3': 3, '4': 3, '5': 9, '10': 'languages'},
    const {'1': 'name', '3': 4, '4': 3, '5': 11, '6': '.dvote.Entity.NameEntry', '10': 'name'},
    const {'1': 'description', '3': 5, '4': 3, '5': 11, '6': '.dvote.Entity.DescriptionEntry', '10': 'description'},
    const {'1': 'contracts', '3': 6, '4': 1, '5': 11, '6': '.dvote.Entity.ContractsInfo', '10': 'contracts'},
    const {'1': 'votingProcesses', '3': 7, '4': 1, '5': 11, '6': '.dvote.Entity.VotingProcesses', '10': 'votingProcesses'},
    const {'1': 'newsFeed', '3': 8, '4': 3, '5': 11, '6': '.dvote.Entity.NewsFeedEntry', '10': 'newsFeed'},
    const {'1': 'media', '3': 9, '4': 1, '5': 11, '6': '.dvote.Entity.Media', '10': 'media'},
    const {'1': 'actions', '3': 10, '4': 3, '5': 11, '6': '.dvote.Entity.Action', '10': 'actions'},
    const {'1': 'gatewayBootNodes', '3': 11, '4': 3, '5': 11, '6': '.dvote.Entity.GatewayBootNode', '10': 'gatewayBootNodes'},
    const {'1': 'gatewayUpdate', '3': 12, '4': 1, '5': 11, '6': '.dvote.Entity.GatewayUpdate', '10': 'gatewayUpdate'},
    const {'1': 'relays', '3': 13, '4': 3, '5': 11, '6': '.dvote.Entity.Relay', '10': 'relays'},
    const {'1': 'bootEntities', '3': 14, '4': 3, '5': 11, '6': '.dvote.Entity.EntityReference', '10': 'bootEntities'},
    const {'1': 'fallbackBootNodeEntities', '3': 15, '4': 3, '5': 11, '6': '.dvote.Entity.EntityReference', '10': 'fallbackBootNodeEntities'},
    const {'1': 'trustedEntities', '3': 16, '4': 3, '5': 11, '6': '.dvote.Entity.EntityReference', '10': 'trustedEntities'},
    const {'1': 'censusServiceManagedEntities', '3': 17, '4': 3, '5': 11, '6': '.dvote.Entity.EntityReference', '10': 'censusServiceManagedEntities'},
    const {'1': 'meta', '3': 100, '4': 3, '5': 11, '6': '.dvote.Entity.MetaEntry', '10': 'meta'},
  ],
  '3': const [Entity_NameEntry$json, Entity_DescriptionEntry$json, Entity_ContractsInfo$json, Entity_VotingProcesses$json, Entity_NewsFeedEntry$json, Entity_Media$json, Entity_Action$json, Entity_GatewayBootNode$json, Entity_GatewayUpdate$json, Entity_Relay$json, Entity_EntityReference$json, Entity_MetaEntry$json],
};

const Entity_NameEntry$json = const {
  '1': 'NameEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const Entity_DescriptionEntry$json = const {
  '1': 'DescriptionEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const Entity_ContractsInfo$json = const {
  '1': 'ContractsInfo',
  '2': const [
    const {'1': 'resolverAddress', '3': 1, '4': 1, '5': 9, '10': 'resolverAddress'},
    const {'1': 'votingAddress', '3': 2, '4': 1, '5': 9, '10': 'votingAddress'},
    const {'1': 'networkId', '3': 3, '4': 1, '5': 9, '10': 'networkId'},
  ],
};

const Entity_VotingProcesses$json = const {
  '1': 'VotingProcesses',
  '2': const [
    const {'1': 'active', '3': 1, '4': 3, '5': 9, '10': 'active'},
    const {'1': 'ended', '3': 2, '4': 3, '5': 9, '10': 'ended'},
  ],
};

const Entity_NewsFeedEntry$json = const {
  '1': 'NewsFeedEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const Entity_Media$json = const {
  '1': 'Media',
  '2': const [
    const {'1': 'avatar', '3': 1, '4': 1, '5': 9, '10': 'avatar'},
    const {'1': 'header', '3': 2, '4': 1, '5': 9, '10': 'header'},
  ],
};

const Entity_Action$json = const {
  '1': 'Action',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 9, '10': 'type'},
    const {'1': 'name', '3': 2, '4': 3, '5': 11, '6': '.dvote.Entity.Action.NameEntry', '10': 'name'},
    const {'1': 'visible', '3': 3, '4': 1, '5': 9, '10': 'visible'},
    const {'1': 'url', '3': 4, '4': 1, '5': 9, '10': 'url'},
    const {'1': 'register', '3': 6, '4': 1, '5': 8, '10': 'register'},
    const {'1': 'imageSources', '3': 5, '4': 3, '5': 11, '6': '.dvote.Entity.Action.ImageSource', '10': 'imageSources'},
  ],
  '3': const [Entity_Action_NameEntry$json, Entity_Action_ImageSource$json],
};

const Entity_Action_NameEntry$json = const {
  '1': 'NameEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const Entity_Action_ImageSource$json = const {
  '1': 'ImageSource',
  '2': const [
    const {'1': 'type', '3': 1, '4': 1, '5': 9, '10': 'type'},
    const {'1': 'name', '3': 2, '4': 1, '5': 9, '10': 'name'},
    const {'1': 'orientation', '3': 3, '4': 1, '5': 9, '10': 'orientation'},
    const {'1': 'overlay', '3': 4, '4': 1, '5': 9, '10': 'overlay'},
    const {'1': 'caption', '3': 5, '4': 3, '5': 11, '6': '.dvote.Entity.Action.ImageSource.CaptionEntry', '10': 'caption'},
  ],
  '3': const [Entity_Action_ImageSource_CaptionEntry$json],
};

const Entity_Action_ImageSource_CaptionEntry$json = const {
  '1': 'CaptionEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const Entity_GatewayBootNode$json = const {
  '1': 'GatewayBootNode',
  '2': const [
    const {'1': 'fetchUri', '3': 1, '4': 1, '5': 9, '10': 'fetchUri'},
    const {'1': 'heartbeatMessagingUri', '3': 2, '4': 1, '5': 9, '10': 'heartbeatMessagingUri'},
  ],
};

const Entity_GatewayUpdate$json = const {
  '1': 'GatewayUpdate',
  '2': const [
    const {'1': 'timeout', '3': 1, '4': 1, '5': 5, '10': 'timeout'},
    const {'1': 'topic', '3': 2, '4': 1, '5': 9, '10': 'topic'},
    const {'1': 'difficulty', '3': 3, '4': 1, '5': 5, '10': 'difficulty'},
  ],
};

const Entity_Relay$json = const {
  '1': 'Relay',
  '2': const [
    const {'1': 'publicKey', '3': 1, '4': 1, '5': 9, '10': 'publicKey'},
    const {'1': 'messagingUri', '3': 2, '4': 1, '5': 9, '10': 'messagingUri'},
  ],
};

const Entity_EntityReference$json = const {
  '1': 'EntityReference',
  '2': const [
    const {'1': 'resolverAddress', '3': 1, '4': 1, '5': 9, '10': 'resolverAddress'},
    const {'1': 'networkId', '3': 2, '4': 1, '5': 9, '10': 'networkId'},
    const {'1': 'entityId', '3': 3, '4': 1, '5': 9, '10': 'entityId'},
  ],
};

const Entity_MetaEntry$json = const {
  '1': 'MetaEntry',
  '2': const [
    const {'1': 'key', '3': 1, '4': 1, '5': 9, '10': 'key'},
    const {'1': 'value', '3': 2, '4': 1, '5': 9, '10': 'value'},
  ],
  '7': const {'7': true},
};

const EntitySummary$json = const {
  '1': 'EntitySummary',
  '2': const [
    const {'1': 'resolverAddress', '3': 1, '4': 1, '5': 9, '10': 'resolverAddress'},
    const {'1': 'networkId', '3': 2, '4': 1, '5': 9, '10': 'networkId'},
    const {'1': 'entityId', '3': 3, '4': 1, '5': 9, '10': 'entityId'},
    const {'1': 'entryPoints', '3': 4, '4': 3, '5': 11, '6': '.dvote.Gateway', '10': 'entryPoints'},
  ],
};

