/// Type: Protocol layer definitions

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.13.0
// source: protocol/election.proto

package v2

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

type Lifecycle int32

const (
	Lifecycle_PAUSED_MUTABLE      Lifecycle = 0
	Lifecycle_PAUSED_MUTABLE_ONCE Lifecycle = 1
	Lifecycle_STARTED_IMMUTABLE   Lifecycle = 2
	Lifecycle_STARTED_MUTABLE     Lifecycle = 3
	Lifecycle_AUTOSTART_IMMUTABLE Lifecycle = 4
	Lifecycle_AUTOSTART_MUTABLE   Lifecycle = 5
)

// Enum value maps for Lifecycle.
var (
	Lifecycle_name = map[int32]string{
		0: "PAUSED_MUTABLE",
		1: "PAUSED_MUTABLE_ONCE",
		2: "STARTED_IMMUTABLE",
		3: "STARTED_MUTABLE",
		4: "AUTOSTART_IMMUTABLE",
		5: "AUTOSTART_MUTABLE",
	}
	Lifecycle_value = map[string]int32{
		"PAUSED_MUTABLE":      0,
		"PAUSED_MUTABLE_ONCE": 1,
		"STARTED_IMMUTABLE":   2,
		"STARTED_MUTABLE":     3,
		"AUTOSTART_IMMUTABLE": 4,
		"AUTOSTART_MUTABLE":   5,
	}
)

func (x Lifecycle) Enum() *Lifecycle {
	p := new(Lifecycle)
	*p = x
	return p
}

func (x Lifecycle) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Lifecycle) Descriptor() protoreflect.EnumDescriptor {
	return file_protocol_election_proto_enumTypes[0].Descriptor()
}

func (Lifecycle) Type() protoreflect.EnumType {
	return &file_protocol_election_proto_enumTypes[0]
}

func (x Lifecycle) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Lifecycle.Descriptor instead.
func (Lifecycle) EnumDescriptor() ([]byte, []int) {
	return file_protocol_election_proto_rawDescGZIP(), []int{0}
}

type Privacy_VoteAnonimity int32

const (
	/// Signed vote. Standard proof(s) are expected.
	Privacy_NONE Privacy_VoteAnonimity = 0
	/// Anonymous vote, submitted right away.
	/// The standard proof is part of the ZK circuit inputs. The ZK proof is expected.
	Privacy_ZK_SNARKS Privacy_VoteAnonimity = 1
	/// Anonymous vote, with voter registration prior to the election.
	/// The standard proof is part of the ZK circuit inputs. The ZK proof is expected.
	Privacy_ZK_SNARKS_PREREGISTER Privacy_VoteAnonimity = 2
)

// Enum value maps for Privacy_VoteAnonimity.
var (
	Privacy_VoteAnonimity_name = map[int32]string{
		0: "NONE",
		1: "ZK_SNARKS",
		2: "ZK_SNARKS_PREREGISTER",
	}
	Privacy_VoteAnonimity_value = map[string]int32{
		"NONE":                  0,
		"ZK_SNARKS":             1,
		"ZK_SNARKS_PREREGISTER": 2,
	}
)

func (x Privacy_VoteAnonimity) Enum() *Privacy_VoteAnonimity {
	p := new(Privacy_VoteAnonimity)
	*p = x
	return p
}

func (x Privacy_VoteAnonimity) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Privacy_VoteAnonimity) Descriptor() protoreflect.EnumDescriptor {
	return file_protocol_election_proto_enumTypes[1].Descriptor()
}

func (Privacy_VoteAnonimity) Type() protoreflect.EnumType {
	return &file_protocol_election_proto_enumTypes[1]
}

func (x Privacy_VoteAnonimity) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Privacy_VoteAnonimity.Descriptor instead.
func (Privacy_VoteAnonimity) EnumDescriptor() ([]byte, []int) {
	return file_protocol_election_proto_rawDescGZIP(), []int{1, 0}
}

/// The following model defines the declaration of an election. These are just the settings, not the human readable information.
type Election struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// See census.proto
	PrimaryCensus   *Census     `protobuf:"bytes,1,opt,name=primaryCensus,proto3" json:"primaryCensus,omitempty"`
	SecondaryCensus *Census     `protobuf:"bytes,2,opt,name=secondaryCensus,proto3" json:"secondaryCensus,omitempty"`
	TertiaryCensus  *Census     `protobuf:"bytes,3,opt,name=tertiaryCensus,proto3" json:"tertiaryCensus,omitempty"`
	CensusSize      int32       `protobuf:"varint,4,opt,name=censusSize,proto3" json:"censusSize,omitempty"` // Used to select the zk circuit, determine the cost, etc
	Proposals       []*Proposal `protobuf:"bytes,5,rep,name=proposals,proto3" json:"proposals,omitempty"`    // The questions that people can vote
	Privacy         *Privacy    `protobuf:"bytes,6,opt,name=privacy,proto3" json:"privacy,omitempty"`        // How data should be protected
	Lifecycle       Lifecycle   `protobuf:"varint,7,opt,name=lifecycle,proto3,enum=dvote.types.v2.Lifecycle" json:"lifecycle,omitempty"`
	MetadataUri     string      `protobuf:"bytes,8,opt,name=metadataUri,proto3" json:"metadataUri,omitempty"`
	StartBlock      int32       `protobuf:"varint,9,opt,name=startBlock,proto3" json:"startBlock,omitempty"`
	EndBlock        int32       `protobuf:"varint,10,opt,name=endBlock,proto3" json:"endBlock,omitempty"`
}

func (x *Election) Reset() {
	*x = Election{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_election_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Election) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Election) ProtoMessage() {}

func (x *Election) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_election_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Election.ProtoReflect.Descriptor instead.
func (*Election) Descriptor() ([]byte, []int) {
	return file_protocol_election_proto_rawDescGZIP(), []int{0}
}

func (x *Election) GetPrimaryCensus() *Census {
	if x != nil {
		return x.PrimaryCensus
	}
	return nil
}

func (x *Election) GetSecondaryCensus() *Census {
	if x != nil {
		return x.SecondaryCensus
	}
	return nil
}

func (x *Election) GetTertiaryCensus() *Census {
	if x != nil {
		return x.TertiaryCensus
	}
	return nil
}

func (x *Election) GetCensusSize() int32 {
	if x != nil {
		return x.CensusSize
	}
	return 0
}

func (x *Election) GetProposals() []*Proposal {
	if x != nil {
		return x.Proposals
	}
	return nil
}

func (x *Election) GetPrivacy() *Privacy {
	if x != nil {
		return x.Privacy
	}
	return nil
}

func (x *Election) GetLifecycle() Lifecycle {
	if x != nil {
		return x.Lifecycle
	}
	return Lifecycle_PAUSED_MUTABLE
}

func (x *Election) GetMetadataUri() string {
	if x != nil {
		return x.MetadataUri
	}
	return ""
}

func (x *Election) GetStartBlock() int32 {
	if x != nil {
		return x.StartBlock
	}
	return 0
}

func (x *Election) GetEndBlock() int32 {
	if x != nil {
		return x.EndBlock
	}
	return 0
}

/// The models below affect the whole election definition.
type Privacy struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	RealTimeResults bool                  `protobuf:"varint,1,opt,name=realTimeResults,proto3" json:"realTimeResults,omitempty"`
	VoteAnonymity   Privacy_VoteAnonimity `protobuf:"varint,2,opt,name=voteAnonymity,proto3,enum=dvote.types.v2.Privacy_VoteAnonimity" json:"voteAnonymity,omitempty"`
}

func (x *Privacy) Reset() {
	*x = Privacy{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_election_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Privacy) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Privacy) ProtoMessage() {}

func (x *Privacy) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_election_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Privacy.ProtoReflect.Descriptor instead.
func (*Privacy) Descriptor() ([]byte, []int) {
	return file_protocol_election_proto_rawDescGZIP(), []int{1}
}

func (x *Privacy) GetRealTimeResults() bool {
	if x != nil {
		return x.RealTimeResults
	}
	return false
}

func (x *Privacy) GetVoteAnonymity() Privacy_VoteAnonimity {
	if x != nil {
		return x.VoteAnonymity
	}
	return Privacy_NONE
}

type Proposal struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Proposal:
	//	*Proposal_ApprovalProposal
	//	*Proposal_SingleChoiceProposal
	//	*Proposal_QuadraticProposal
	//	*Proposal_RankedProposal
	//	*Proposal_SpreadProposal
	Proposal isProposal_Proposal `protobuf_oneof:"proposal"`
}

func (x *Proposal) Reset() {
	*x = Proposal{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_election_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Proposal) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Proposal) ProtoMessage() {}

func (x *Proposal) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_election_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Proposal.ProtoReflect.Descriptor instead.
func (*Proposal) Descriptor() ([]byte, []int) {
	return file_protocol_election_proto_rawDescGZIP(), []int{2}
}

func (m *Proposal) GetProposal() isProposal_Proposal {
	if m != nil {
		return m.Proposal
	}
	return nil
}

func (x *Proposal) GetApprovalProposal() *ApprovalProposal {
	if x, ok := x.GetProposal().(*Proposal_ApprovalProposal); ok {
		return x.ApprovalProposal
	}
	return nil
}

func (x *Proposal) GetSingleChoiceProposal() *SingleChoiceProposal {
	if x, ok := x.GetProposal().(*Proposal_SingleChoiceProposal); ok {
		return x.SingleChoiceProposal
	}
	return nil
}

func (x *Proposal) GetQuadraticProposal() *QuadraticProposal {
	if x, ok := x.GetProposal().(*Proposal_QuadraticProposal); ok {
		return x.QuadraticProposal
	}
	return nil
}

func (x *Proposal) GetRankedProposal() *RankedProposal {
	if x, ok := x.GetProposal().(*Proposal_RankedProposal); ok {
		return x.RankedProposal
	}
	return nil
}

func (x *Proposal) GetSpreadProposal() *SpreadProposal {
	if x, ok := x.GetProposal().(*Proposal_SpreadProposal); ok {
		return x.SpreadProposal
	}
	return nil
}

type isProposal_Proposal interface {
	isProposal_Proposal()
}

type Proposal_ApprovalProposal struct {
	/// Binary
	ApprovalProposal *ApprovalProposal `protobuf:"bytes,1,opt,name=approvalProposal,proto3,oneof"`
}

type Proposal_SingleChoiceProposal struct {
	/// choose one of [0, ... N-1]
	SingleChoiceProposal *SingleChoiceProposal `protobuf:"bytes,2,opt,name=singleChoiceProposal,proto3,oneof"`
}

type Proposal_QuadraticProposal struct {
	/// allocate quadratic points below a max sum
	QuadraticProposal *QuadraticProposal `protobuf:"bytes,3,opt,name=quadraticProposal,proto3,oneof"`
}

type Proposal_RankedProposal struct {
	/// 1w1v: Voting the ordered indexes
	RankedProposal *RankedProposal `protobuf:"bytes,4,opt,name=rankedProposal,proto3,oneof"`
}

type Proposal_SpreadProposal struct {
	/// assign % to each option
	SpreadProposal *SpreadProposal `protobuf:"bytes,5,opt,name=spreadProposal,proto3,oneof"`
}

func (*Proposal_ApprovalProposal) isProposal_Proposal() {}

func (*Proposal_SingleChoiceProposal) isProposal_Proposal() {}

func (*Proposal_QuadraticProposal) isProposal_Proposal() {}

func (*Proposal_RankedProposal) isProposal_Proposal() {}

func (*Proposal_SpreadProposal) isProposal_Proposal() {}

// Submodels
type ApprovalProposal struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ApprovalProposal) Reset() {
	*x = ApprovalProposal{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_election_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApprovalProposal) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApprovalProposal) ProtoMessage() {}

func (x *ApprovalProposal) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_election_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApprovalProposal.ProtoReflect.Descriptor instead.
func (*ApprovalProposal) Descriptor() ([]byte, []int) {
	return file_protocol_election_proto_rawDescGZIP(), []int{3}
}

type SingleChoiceProposal struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OptionCount int32 `protobuf:"varint,1,opt,name=optionCount,proto3" json:"optionCount,omitempty"`
}

func (x *SingleChoiceProposal) Reset() {
	*x = SingleChoiceProposal{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_election_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SingleChoiceProposal) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SingleChoiceProposal) ProtoMessage() {}

func (x *SingleChoiceProposal) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_election_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SingleChoiceProposal.ProtoReflect.Descriptor instead.
func (*SingleChoiceProposal) Descriptor() ([]byte, []int) {
	return file_protocol_election_proto_rawDescGZIP(), []int{4}
}

func (x *SingleChoiceProposal) GetOptionCount() int32 {
	if x != nil {
		return x.OptionCount
	}
	return 0
}

type QuadraticProposal struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OptionCount  int32   `protobuf:"varint,1,opt,name=optionCount,proto3" json:"optionCount,omitempty"`
	CostExponent float32 `protobuf:"fixed32,2,opt,name=costExponent,proto3" json:"costExponent,omitempty"`
	/// Assigning points from 0 to maxValue
	MaxValue int32 `protobuf:"varint,3,opt,name=maxValue,proto3" json:"maxValue,omitempty"`
	/// The exponentiated sum of values must not exceed maxSum
	MaxSum int32 `protobuf:"varint,4,opt,name=maxSum,proto3" json:"maxSum,omitempty"`
}

func (x *QuadraticProposal) Reset() {
	*x = QuadraticProposal{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_election_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuadraticProposal) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuadraticProposal) ProtoMessage() {}

func (x *QuadraticProposal) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_election_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuadraticProposal.ProtoReflect.Descriptor instead.
func (*QuadraticProposal) Descriptor() ([]byte, []int) {
	return file_protocol_election_proto_rawDescGZIP(), []int{5}
}

func (x *QuadraticProposal) GetOptionCount() int32 {
	if x != nil {
		return x.OptionCount
	}
	return 0
}

func (x *QuadraticProposal) GetCostExponent() float32 {
	if x != nil {
		return x.CostExponent
	}
	return 0
}

func (x *QuadraticProposal) GetMaxValue() int32 {
	if x != nil {
		return x.MaxValue
	}
	return 0
}

func (x *QuadraticProposal) GetMaxSum() int32 {
	if x != nil {
		return x.MaxSum
	}
	return 0
}

type RankedProposal struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OptionCount int32 `protobuf:"varint,1,opt,name=optionCount,proto3" json:"optionCount,omitempty"`
	/// Up to how many indexes can be ranked
	MaxItems int32 `protobuf:"varint,2,opt,name=maxItems,proto3" json:"maxItems,omitempty"`
}

func (x *RankedProposal) Reset() {
	*x = RankedProposal{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_election_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RankedProposal) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RankedProposal) ProtoMessage() {}

func (x *RankedProposal) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_election_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RankedProposal.ProtoReflect.Descriptor instead.
func (*RankedProposal) Descriptor() ([]byte, []int) {
	return file_protocol_election_proto_rawDescGZIP(), []int{6}
}

func (x *RankedProposal) GetOptionCount() int32 {
	if x != nil {
		return x.OptionCount
	}
	return 0
}

func (x *RankedProposal) GetMaxItems() int32 {
	if x != nil {
		return x.MaxItems
	}
	return 0
}

type SpreadProposal struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OptionCount int32 `protobuf:"varint,1,opt,name=optionCount,proto3" json:"optionCount,omitempty"`
}

func (x *SpreadProposal) Reset() {
	*x = SpreadProposal{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_election_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SpreadProposal) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SpreadProposal) ProtoMessage() {}

func (x *SpreadProposal) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_election_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SpreadProposal.ProtoReflect.Descriptor instead.
func (*SpreadProposal) Descriptor() ([]byte, []int) {
	return file_protocol_election_proto_rawDescGZIP(), []int{7}
}

func (x *SpreadProposal) GetOptionCount() int32 {
	if x != nil {
		return x.OptionCount
	}
	return 0
}

var File_protocol_election_proto protoreflect.FileDescriptor

var file_protocol_election_proto_rawDesc = []byte{
	0x0a, 0x17, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2f, 0x65, 0x6c, 0x65, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x64, 0x76, 0x6f, 0x74, 0x65,
	0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x1a, 0x15, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x63, 0x6f, 0x6c, 0x2f, 0x63, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0xec, 0x03, 0x0a, 0x08, 0x45, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x3c, 0x0a,
	0x0d, 0x70, 0x72, 0x69, 0x6d, 0x61, 0x72, 0x79, 0x43, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x43, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x52, 0x0d, 0x70, 0x72,
	0x69, 0x6d, 0x61, 0x72, 0x79, 0x43, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x12, 0x40, 0x0a, 0x0f, 0x73,
	0x65, 0x63, 0x6f, 0x6e, 0x64, 0x61, 0x72, 0x79, 0x43, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70,
	0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x43, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x52, 0x0f, 0x73, 0x65,
	0x63, 0x6f, 0x6e, 0x64, 0x61, 0x72, 0x79, 0x43, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x12, 0x3e, 0x0a,
	0x0e, 0x74, 0x65, 0x72, 0x74, 0x69, 0x61, 0x72, 0x79, 0x43, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x43, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x52, 0x0e, 0x74,
	0x65, 0x72, 0x74, 0x69, 0x61, 0x72, 0x79, 0x43, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x12, 0x1e, 0x0a,
	0x0a, 0x63, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x53, 0x69, 0x7a, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x0a, 0x63, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x36, 0x0a,
	0x09, 0x70, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x18, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76,
	0x32, 0x2e, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x70,
	0x6f, 0x73, 0x61, 0x6c, 0x73, 0x12, 0x31, 0x0a, 0x07, 0x70, 0x72, 0x69, 0x76, 0x61, 0x63, 0x79,
	0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x50, 0x72, 0x69, 0x76, 0x61, 0x63, 0x79, 0x52,
	0x07, 0x70, 0x72, 0x69, 0x76, 0x61, 0x63, 0x79, 0x12, 0x37, 0x0a, 0x09, 0x6c, 0x69, 0x66, 0x65,
	0x63, 0x79, 0x63, 0x6c, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x19, 0x2e, 0x64, 0x76,
	0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x4c, 0x69, 0x66,
	0x65, 0x63, 0x79, 0x63, 0x6c, 0x65, 0x52, 0x09, 0x6c, 0x69, 0x66, 0x65, 0x63, 0x79, 0x63, 0x6c,
	0x65, 0x12, 0x20, 0x0a, 0x0b, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x55, 0x72, 0x69,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x55, 0x72, 0x69, 0x12, 0x1e, 0x0a, 0x0a, 0x73, 0x74, 0x61, 0x72, 0x74, 0x42, 0x6c, 0x6f, 0x63,
	0x6b, 0x18, 0x09, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x73, 0x74, 0x61, 0x72, 0x74, 0x42, 0x6c,
	0x6f, 0x63, 0x6b, 0x12, 0x1a, 0x0a, 0x08, 0x65, 0x6e, 0x64, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x18,
	0x0a, 0x20, 0x01, 0x28, 0x05, 0x52, 0x08, 0x65, 0x6e, 0x64, 0x42, 0x6c, 0x6f, 0x63, 0x6b, 0x22,
	0xc5, 0x01, 0x0a, 0x07, 0x50, 0x72, 0x69, 0x76, 0x61, 0x63, 0x79, 0x12, 0x28, 0x0a, 0x0f, 0x72,
	0x65, 0x61, 0x6c, 0x54, 0x69, 0x6d, 0x65, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x73, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x0f, 0x72, 0x65, 0x61, 0x6c, 0x54, 0x69, 0x6d, 0x65, 0x52, 0x65,
	0x73, 0x75, 0x6c, 0x74, 0x73, 0x12, 0x4b, 0x0a, 0x0d, 0x76, 0x6f, 0x74, 0x65, 0x41, 0x6e, 0x6f,
	0x6e, 0x79, 0x6d, 0x69, 0x74, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x25, 0x2e, 0x64,
	0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x50, 0x72,
	0x69, 0x76, 0x61, 0x63, 0x79, 0x2e, 0x56, 0x6f, 0x74, 0x65, 0x41, 0x6e, 0x6f, 0x6e, 0x69, 0x6d,
	0x69, 0x74, 0x79, 0x52, 0x0d, 0x76, 0x6f, 0x74, 0x65, 0x41, 0x6e, 0x6f, 0x6e, 0x79, 0x6d, 0x69,
	0x74, 0x79, 0x22, 0x43, 0x0a, 0x0d, 0x56, 0x6f, 0x74, 0x65, 0x41, 0x6e, 0x6f, 0x6e, 0x69, 0x6d,
	0x69, 0x74, 0x79, 0x12, 0x08, 0x0a, 0x04, 0x4e, 0x4f, 0x4e, 0x45, 0x10, 0x00, 0x12, 0x0d, 0x0a,
	0x09, 0x5a, 0x4b, 0x5f, 0x53, 0x4e, 0x41, 0x52, 0x4b, 0x53, 0x10, 0x01, 0x12, 0x19, 0x0a, 0x15,
	0x5a, 0x4b, 0x5f, 0x53, 0x4e, 0x41, 0x52, 0x4b, 0x53, 0x5f, 0x50, 0x52, 0x45, 0x52, 0x45, 0x47,
	0x49, 0x53, 0x54, 0x45, 0x52, 0x10, 0x02, 0x22, 0xa9, 0x03, 0x0a, 0x08, 0x50, 0x72, 0x6f, 0x70,
	0x6f, 0x73, 0x61, 0x6c, 0x12, 0x4e, 0x0a, 0x10, 0x61, 0x70, 0x70, 0x72, 0x6f, 0x76, 0x61, 0x6c,
	0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20,
	0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e,
	0x41, 0x70, 0x70, 0x72, 0x6f, 0x76, 0x61, 0x6c, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c,
	0x48, 0x00, 0x52, 0x10, 0x61, 0x70, 0x70, 0x72, 0x6f, 0x76, 0x61, 0x6c, 0x50, 0x72, 0x6f, 0x70,
	0x6f, 0x73, 0x61, 0x6c, 0x12, 0x5a, 0x0a, 0x14, 0x73, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x43, 0x68,
	0x6f, 0x69, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x24, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x76, 0x32, 0x2e, 0x53, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x43, 0x68, 0x6f, 0x69, 0x63, 0x65,
	0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x48, 0x00, 0x52, 0x14, 0x73, 0x69, 0x6e, 0x67,
	0x6c, 0x65, 0x43, 0x68, 0x6f, 0x69, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c,
	0x12, 0x51, 0x0a, 0x11, 0x71, 0x75, 0x61, 0x64, 0x72, 0x61, 0x74, 0x69, 0x63, 0x50, 0x72, 0x6f,
	0x70, 0x6f, 0x73, 0x61, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x64, 0x76,
	0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x51, 0x75, 0x61,
	0x64, 0x72, 0x61, 0x74, 0x69, 0x63, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x48, 0x00,
	0x52, 0x11, 0x71, 0x75, 0x61, 0x64, 0x72, 0x61, 0x74, 0x69, 0x63, 0x50, 0x72, 0x6f, 0x70, 0x6f,
	0x73, 0x61, 0x6c, 0x12, 0x48, 0x0a, 0x0e, 0x72, 0x61, 0x6e, 0x6b, 0x65, 0x64, 0x50, 0x72, 0x6f,
	0x70, 0x6f, 0x73, 0x61, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x64, 0x76,
	0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x52, 0x61, 0x6e,
	0x6b, 0x65, 0x64, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x48, 0x00, 0x52, 0x0e, 0x72,
	0x61, 0x6e, 0x6b, 0x65, 0x64, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x12, 0x48, 0x0a,
	0x0e, 0x73, 0x70, 0x72, 0x65, 0x61, 0x64, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1e, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x53, 0x70, 0x72, 0x65, 0x61, 0x64, 0x50, 0x72, 0x6f,
	0x70, 0x6f, 0x73, 0x61, 0x6c, 0x48, 0x00, 0x52, 0x0e, 0x73, 0x70, 0x72, 0x65, 0x61, 0x64, 0x50,
	0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x42, 0x0a, 0x0a, 0x08, 0x70, 0x72, 0x6f, 0x70, 0x6f,
	0x73, 0x61, 0x6c, 0x22, 0x12, 0x0a, 0x10, 0x41, 0x70, 0x70, 0x72, 0x6f, 0x76, 0x61, 0x6c, 0x50,
	0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x22, 0x38, 0x0a, 0x14, 0x53, 0x69, 0x6e, 0x67, 0x6c,
	0x65, 0x43, 0x68, 0x6f, 0x69, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x12,
	0x20, 0x0a, 0x0b, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x75, 0x6e,
	0x74, 0x22, 0x8d, 0x01, 0x0a, 0x11, 0x51, 0x75, 0x61, 0x64, 0x72, 0x61, 0x74, 0x69, 0x63, 0x50,
	0x72, 0x6f, 0x70, 0x6f, 0x73, 0x61, 0x6c, 0x12, 0x20, 0x0a, 0x0b, 0x6f, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x6f, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x22, 0x0a, 0x0c, 0x63, 0x6f, 0x73,
	0x74, 0x45, 0x78, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x02, 0x52,
	0x0c, 0x63, 0x6f, 0x73, 0x74, 0x45, 0x78, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x12, 0x1a, 0x0a,
	0x08, 0x6d, 0x61, 0x78, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x08, 0x6d, 0x61, 0x78, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x6d, 0x61, 0x78,
	0x53, 0x75, 0x6d, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x6d, 0x61, 0x78, 0x53, 0x75,
	0x6d, 0x22, 0x4e, 0x0a, 0x0e, 0x52, 0x61, 0x6e, 0x6b, 0x65, 0x64, 0x50, 0x72, 0x6f, 0x70, 0x6f,
	0x73, 0x61, 0x6c, 0x12, 0x20, 0x0a, 0x0b, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x75,
	0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x6d, 0x61, 0x78, 0x49, 0x74, 0x65, 0x6d,
	0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x08, 0x6d, 0x61, 0x78, 0x49, 0x74, 0x65, 0x6d,
	0x73, 0x22, 0x32, 0x0a, 0x0e, 0x53, 0x70, 0x72, 0x65, 0x61, 0x64, 0x50, 0x72, 0x6f, 0x70, 0x6f,
	0x73, 0x61, 0x6c, 0x12, 0x20, 0x0a, 0x0b, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x75,
	0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x43, 0x6f, 0x75, 0x6e, 0x74, 0x2a, 0x94, 0x01, 0x0a, 0x09, 0x4c, 0x69, 0x66, 0x65, 0x63, 0x79,
	0x63, 0x6c, 0x65, 0x12, 0x12, 0x0a, 0x0e, 0x50, 0x41, 0x55, 0x53, 0x45, 0x44, 0x5f, 0x4d, 0x55,
	0x54, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x00, 0x12, 0x17, 0x0a, 0x13, 0x50, 0x41, 0x55, 0x53, 0x45,
	0x44, 0x5f, 0x4d, 0x55, 0x54, 0x41, 0x42, 0x4c, 0x45, 0x5f, 0x4f, 0x4e, 0x43, 0x45, 0x10, 0x01,
	0x12, 0x15, 0x0a, 0x11, 0x53, 0x54, 0x41, 0x52, 0x54, 0x45, 0x44, 0x5f, 0x49, 0x4d, 0x4d, 0x55,
	0x54, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x02, 0x12, 0x13, 0x0a, 0x0f, 0x53, 0x54, 0x41, 0x52, 0x54,
	0x45, 0x44, 0x5f, 0x4d, 0x55, 0x54, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x03, 0x12, 0x17, 0x0a, 0x13,
	0x41, 0x55, 0x54, 0x4f, 0x53, 0x54, 0x41, 0x52, 0x54, 0x5f, 0x49, 0x4d, 0x4d, 0x55, 0x54, 0x41,
	0x42, 0x4c, 0x45, 0x10, 0x04, 0x12, 0x15, 0x0a, 0x11, 0x41, 0x55, 0x54, 0x4f, 0x53, 0x54, 0x41,
	0x52, 0x54, 0x5f, 0x4d, 0x55, 0x54, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x05, 0x42, 0x28, 0x5a, 0x26,
	0x67, 0x6f, 0x2e, 0x76, 0x6f, 0x63, 0x64, 0x6f, 0x6e, 0x69, 0x2e, 0x69, 0x6f, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2f, 0x67, 0x6f, 0x2f, 0x6d, 0x6f, 0x64,
	0x65, 0x6c, 0x73, 0x2f, 0x76, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_protocol_election_proto_rawDescOnce sync.Once
	file_protocol_election_proto_rawDescData = file_protocol_election_proto_rawDesc
)

func file_protocol_election_proto_rawDescGZIP() []byte {
	file_protocol_election_proto_rawDescOnce.Do(func() {
		file_protocol_election_proto_rawDescData = protoimpl.X.CompressGZIP(file_protocol_election_proto_rawDescData)
	})
	return file_protocol_election_proto_rawDescData
}

var file_protocol_election_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_protocol_election_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_protocol_election_proto_goTypes = []interface{}{
	(Lifecycle)(0),               // 0: dvote.types.v2.Lifecycle
	(Privacy_VoteAnonimity)(0),   // 1: dvote.types.v2.Privacy.VoteAnonimity
	(*Election)(nil),             // 2: dvote.types.v2.Election
	(*Privacy)(nil),              // 3: dvote.types.v2.Privacy
	(*Proposal)(nil),             // 4: dvote.types.v2.Proposal
	(*ApprovalProposal)(nil),     // 5: dvote.types.v2.ApprovalProposal
	(*SingleChoiceProposal)(nil), // 6: dvote.types.v2.SingleChoiceProposal
	(*QuadraticProposal)(nil),    // 7: dvote.types.v2.QuadraticProposal
	(*RankedProposal)(nil),       // 8: dvote.types.v2.RankedProposal
	(*SpreadProposal)(nil),       // 9: dvote.types.v2.SpreadProposal
	(*Census)(nil),               // 10: dvote.types.v2.Census
}
var file_protocol_election_proto_depIdxs = []int32{
	10, // 0: dvote.types.v2.Election.primaryCensus:type_name -> dvote.types.v2.Census
	10, // 1: dvote.types.v2.Election.secondaryCensus:type_name -> dvote.types.v2.Census
	10, // 2: dvote.types.v2.Election.tertiaryCensus:type_name -> dvote.types.v2.Census
	4,  // 3: dvote.types.v2.Election.proposals:type_name -> dvote.types.v2.Proposal
	3,  // 4: dvote.types.v2.Election.privacy:type_name -> dvote.types.v2.Privacy
	0,  // 5: dvote.types.v2.Election.lifecycle:type_name -> dvote.types.v2.Lifecycle
	1,  // 6: dvote.types.v2.Privacy.voteAnonymity:type_name -> dvote.types.v2.Privacy.VoteAnonimity
	5,  // 7: dvote.types.v2.Proposal.approvalProposal:type_name -> dvote.types.v2.ApprovalProposal
	6,  // 8: dvote.types.v2.Proposal.singleChoiceProposal:type_name -> dvote.types.v2.SingleChoiceProposal
	7,  // 9: dvote.types.v2.Proposal.quadraticProposal:type_name -> dvote.types.v2.QuadraticProposal
	8,  // 10: dvote.types.v2.Proposal.rankedProposal:type_name -> dvote.types.v2.RankedProposal
	9,  // 11: dvote.types.v2.Proposal.spreadProposal:type_name -> dvote.types.v2.SpreadProposal
	12, // [12:12] is the sub-list for method output_type
	12, // [12:12] is the sub-list for method input_type
	12, // [12:12] is the sub-list for extension type_name
	12, // [12:12] is the sub-list for extension extendee
	0,  // [0:12] is the sub-list for field type_name
}

func init() { file_protocol_election_proto_init() }
func file_protocol_election_proto_init() {
	if File_protocol_election_proto != nil {
		return
	}
	file_protocol_census_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_protocol_election_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Election); i {
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
		file_protocol_election_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Privacy); i {
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
		file_protocol_election_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Proposal); i {
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
		file_protocol_election_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApprovalProposal); i {
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
		file_protocol_election_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SingleChoiceProposal); i {
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
		file_protocol_election_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuadraticProposal); i {
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
		file_protocol_election_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RankedProposal); i {
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
		file_protocol_election_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SpreadProposal); i {
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
	file_protocol_election_proto_msgTypes[2].OneofWrappers = []interface{}{
		(*Proposal_ApprovalProposal)(nil),
		(*Proposal_SingleChoiceProposal)(nil),
		(*Proposal_QuadraticProposal)(nil),
		(*Proposal_RankedProposal)(nil),
		(*Proposal_SpreadProposal)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protocol_election_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_protocol_election_proto_goTypes,
		DependencyIndexes: file_protocol_election_proto_depIdxs,
		EnumInfos:         file_protocol_election_proto_enumTypes,
		MessageInfos:      file_protocol_election_proto_msgTypes,
	}.Build()
	File_protocol_election_proto = out.File
	file_protocol_election_proto_rawDesc = nil
	file_protocol_election_proto_goTypes = nil
	file_protocol_election_proto_depIdxs = nil
}