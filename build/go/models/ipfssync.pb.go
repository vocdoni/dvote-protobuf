// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.15.8
// source: ipfsSync/ipfssync.proto

package models

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type IpfsSyncType int32

const (
	IpfsSyncType_UNKNOWN    IpfsSyncType = 0
	IpfsSyncType_HELLO      IpfsSyncType = 1
	IpfsSyncType_UPDATE     IpfsSyncType = 2
	IpfsSyncType_FETCH      IpfsSyncType = 3
	IpfsSyncType_FETCHREPLY IpfsSyncType = 4
)

// Enum value maps for IpfsSyncType.
var (
	IpfsSyncType_name = map[int32]string{
		0: "UNKNOWN",
		1: "HELLO",
		2: "UPDATE",
		3: "FETCH",
		4: "FETCHREPLY",
	}
	IpfsSyncType_value = map[string]int32{
		"UNKNOWN":    0,
		"HELLO":      1,
		"UPDATE":     2,
		"FETCH":      3,
		"FETCHREPLY": 4,
	}
)

func (x IpfsSyncType) Enum() *IpfsSyncType {
	p := new(IpfsSyncType)
	*p = x
	return p
}

func (x IpfsSyncType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (IpfsSyncType) Descriptor() protoreflect.EnumDescriptor {
	return file_ipfsSync_ipfssync_proto_enumTypes[0].Descriptor()
}

func (IpfsSyncType) Type() protoreflect.EnumType {
	return &file_ipfsSync_ipfssync_proto_enumTypes[0]
}

func (x IpfsSyncType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use IpfsSyncType.Descriptor instead.
func (IpfsSyncType) EnumDescriptor() ([]byte, []int) {
	return file_ipfsSync_ipfssync_proto_rawDescGZIP(), []int{0}
}

type IpfsSync struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Msgtype      IpfsSyncType `protobuf:"varint,1,opt,name=msgtype,proto3,enum=dvote.types.v1.IpfsSyncType" json:"msgtype,omitempty"`
	Address      string       `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	Multiaddress string       `protobuf:"bytes,3,opt,name=multiaddress,proto3" json:"multiaddress,omitempty"`
	Hash         []byte       `protobuf:"bytes,4,opt,name=hash,proto3" json:"hash,omitempty"`
	PinList      []*IpfsPin   `protobuf:"bytes,5,rep,name=pinList,proto3" json:"pinList,omitempty"`
	Timestamp    uint32       `protobuf:"varint,6,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
}

func (x *IpfsSync) Reset() {
	*x = IpfsSync{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ipfsSync_ipfssync_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IpfsSync) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IpfsSync) ProtoMessage() {}

func (x *IpfsSync) ProtoReflect() protoreflect.Message {
	mi := &file_ipfsSync_ipfssync_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IpfsSync.ProtoReflect.Descriptor instead.
func (*IpfsSync) Descriptor() ([]byte, []int) {
	return file_ipfsSync_ipfssync_proto_rawDescGZIP(), []int{0}
}

func (x *IpfsSync) GetMsgtype() IpfsSyncType {
	if x != nil {
		return x.Msgtype
	}
	return IpfsSyncType_UNKNOWN
}

func (x *IpfsSync) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *IpfsSync) GetMultiaddress() string {
	if x != nil {
		return x.Multiaddress
	}
	return ""
}

func (x *IpfsSync) GetHash() []byte {
	if x != nil {
		return x.Hash
	}
	return nil
}

func (x *IpfsSync) GetPinList() []*IpfsPin {
	if x != nil {
		return x.PinList
	}
	return nil
}

func (x *IpfsSync) GetTimestamp() uint32 {
	if x != nil {
		return x.Timestamp
	}
	return 0
}

type IpfsPin struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uri string `protobuf:"bytes,1,opt,name=uri,proto3" json:"uri,omitempty"`
}

func (x *IpfsPin) Reset() {
	*x = IpfsPin{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ipfsSync_ipfssync_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IpfsPin) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IpfsPin) ProtoMessage() {}

func (x *IpfsPin) ProtoReflect() protoreflect.Message {
	mi := &file_ipfsSync_ipfssync_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IpfsPin.ProtoReflect.Descriptor instead.
func (*IpfsPin) Descriptor() ([]byte, []int) {
	return file_ipfsSync_ipfssync_proto_rawDescGZIP(), []int{1}
}

func (x *IpfsPin) GetUri() string {
	if x != nil {
		return x.Uri
	}
	return ""
}

var File_ipfsSync_ipfssync_proto protoreflect.FileDescriptor

var file_ipfsSync_ipfssync_proto_rawDesc = []byte{
	0x0a, 0x17, 0x69, 0x70, 0x66, 0x73, 0x53, 0x79, 0x6e, 0x63, 0x2f, 0x69, 0x70, 0x66, 0x73, 0x73,
	0x79, 0x6e, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x64, 0x76, 0x6f, 0x74, 0x65,
	0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x22, 0xe5, 0x01, 0x0a, 0x08, 0x49, 0x70,
	0x66, 0x73, 0x53, 0x79, 0x6e, 0x63, 0x12, 0x36, 0x0a, 0x07, 0x6d, 0x73, 0x67, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1c, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e,
	0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x70, 0x66, 0x73, 0x53, 0x79, 0x6e,
	0x63, 0x54, 0x79, 0x70, 0x65, 0x52, 0x07, 0x6d, 0x73, 0x67, 0x74, 0x79, 0x70, 0x65, 0x12, 0x18,
	0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x22, 0x0a, 0x0c, 0x6d, 0x75, 0x6c, 0x74,
	0x69, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c,
	0x6d, 0x75, 0x6c, 0x74, 0x69, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x12, 0x0a, 0x04,
	0x68, 0x61, 0x73, 0x68, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x68, 0x61, 0x73, 0x68,
	0x12, 0x31, 0x0a, 0x07, 0x70, 0x69, 0x6e, 0x4c, 0x69, 0x73, 0x74, 0x18, 0x05, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x17, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e,
	0x76, 0x31, 0x2e, 0x49, 0x70, 0x66, 0x73, 0x50, 0x69, 0x6e, 0x52, 0x07, 0x70, 0x69, 0x6e, 0x4c,
	0x69, 0x73, 0x74, 0x12, 0x1c, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x22, 0x1b, 0x0a, 0x07, 0x49, 0x70, 0x66, 0x73, 0x50, 0x69, 0x6e, 0x12, 0x10, 0x0a, 0x03,
	0x75, 0x72, 0x69, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x72, 0x69, 0x2a, 0x4d,
	0x0a, 0x0c, 0x49, 0x70, 0x66, 0x73, 0x53, 0x79, 0x6e, 0x63, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0b,
	0x0a, 0x07, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x10, 0x00, 0x12, 0x09, 0x0a, 0x05, 0x48,
	0x45, 0x4c, 0x4c, 0x4f, 0x10, 0x01, 0x12, 0x0a, 0x0a, 0x06, 0x55, 0x50, 0x44, 0x41, 0x54, 0x45,
	0x10, 0x02, 0x12, 0x09, 0x0a, 0x05, 0x46, 0x45, 0x54, 0x43, 0x48, 0x10, 0x03, 0x12, 0x0e, 0x0a,
	0x0a, 0x46, 0x45, 0x54, 0x43, 0x48, 0x52, 0x45, 0x50, 0x4c, 0x59, 0x10, 0x04, 0x42, 0x25, 0x5a,
	0x23, 0x67, 0x6f, 0x2e, 0x76, 0x6f, 0x63, 0x64, 0x6f, 0x6e, 0x69, 0x2e, 0x69, 0x6f, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x6d, 0x6f,
	0x64, 0x65, 0x6c, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ipfsSync_ipfssync_proto_rawDescOnce sync.Once
	file_ipfsSync_ipfssync_proto_rawDescData = file_ipfsSync_ipfssync_proto_rawDesc
)

func file_ipfsSync_ipfssync_proto_rawDescGZIP() []byte {
	file_ipfsSync_ipfssync_proto_rawDescOnce.Do(func() {
		file_ipfsSync_ipfssync_proto_rawDescData = protoimpl.X.CompressGZIP(file_ipfsSync_ipfssync_proto_rawDescData)
	})
	return file_ipfsSync_ipfssync_proto_rawDescData
}

var file_ipfsSync_ipfssync_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_ipfsSync_ipfssync_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_ipfsSync_ipfssync_proto_goTypes = []interface{}{
	(IpfsSyncType)(0), // 0: dvote.types.v1.IpfsSyncType
	(*IpfsSync)(nil),  // 1: dvote.types.v1.IpfsSync
	(*IpfsPin)(nil),   // 2: dvote.types.v1.IpfsPin
}
var file_ipfsSync_ipfssync_proto_depIdxs = []int32{
	0, // 0: dvote.types.v1.IpfsSync.msgtype:type_name -> dvote.types.v1.IpfsSyncType
	2, // 1: dvote.types.v1.IpfsSync.pinList:type_name -> dvote.types.v1.IpfsPin
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_ipfsSync_ipfssync_proto_init() }
func file_ipfsSync_ipfssync_proto_init() {
	if File_ipfsSync_ipfssync_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ipfsSync_ipfssync_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IpfsSync); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ipfsSync_ipfssync_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IpfsPin); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ipfsSync_ipfssync_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ipfsSync_ipfssync_proto_goTypes,
		DependencyIndexes: file_ipfsSync_ipfssync_proto_depIdxs,
		EnumInfos:         file_ipfsSync_ipfssync_proto_enumTypes,
		MessageInfos:      file_ipfsSync_ipfssync_proto_msgTypes,
	}.Build()
	File_ipfsSync_ipfssync_proto = out.File
	file_ipfsSync_ipfssync_proto_rawDesc = nil
	file_ipfsSync_ipfssync_proto_goTypes = nil
	file_ipfsSync_ipfssync_proto_depIdxs = nil
}
