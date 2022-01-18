// Type: Protocol layer definitions

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.15.8
// source: protocol/ballot.proto

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

type Ballot struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Body:
	//	*Ballot_SignedBallot
	//	*Ballot_AnonymousBallot
	Body isBallot_Body `protobuf_oneof:"body"`
}

func (x *Ballot) Reset() {
	*x = Ballot{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_ballot_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Ballot) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Ballot) ProtoMessage() {}

func (x *Ballot) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_ballot_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Ballot.ProtoReflect.Descriptor instead.
func (*Ballot) Descriptor() ([]byte, []int) {
	return file_protocol_ballot_proto_rawDescGZIP(), []int{0}
}

func (m *Ballot) GetBody() isBallot_Body {
	if m != nil {
		return m.Body
	}
	return nil
}

func (x *Ballot) GetSignedBallot() *SignedBallot {
	if x, ok := x.GetBody().(*Ballot_SignedBallot); ok {
		return x.SignedBallot
	}
	return nil
}

func (x *Ballot) GetAnonymousBallot() *BallotBody {
	if x, ok := x.GetBody().(*Ballot_AnonymousBallot); ok {
		return x.AnonymousBallot
	}
	return nil
}

type isBallot_Body interface {
	isBallot_Body()
}

type Ballot_SignedBallot struct {
	// When Election.privacy.censusProof == PLAIN
	SignedBallot *SignedBallot `protobuf:"bytes,1,opt,name=signedBallot,proto3,oneof"`
}

type Ballot_AnonymousBallot struct {
	// When Election.privacy.censusProof != PLAIN
	AnonymousBallot *BallotBody `protobuf:"bytes,2,opt,name=anonymousBallot,proto3,oneof"`
}

func (*Ballot_SignedBallot) isBallot_Body() {}

func (*Ballot_AnonymousBallot) isBallot_Body() {}

type BallotBody struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ElectionId []byte `protobuf:"bytes,1,opt,name=electionId,proto3" json:"electionId,omitempty"`
	Nullifier  []byte `protobuf:"bytes,2,opt,name=nullifier,proto3" json:"nullifier,omitempty"`
	// Contains the census proof(s), according to the census types defined in the Election
	// Non-anonymous: [ mainProof1, mainProof2, ..., secondaryProof1, secondaryProof2, ... ]
	// Anonymous:     [ ProofZkSnark ] if anonymous
	Proofs []*Proof             `protobuf:"bytes,3,rep,name=proofs,proto3" json:"proofs,omitempty"`
	Votes  *BallotBody_VoteList `protobuf:"bytes,4,opt,name=votes,proto3" json:"votes,omitempty"`
}

func (x *BallotBody) Reset() {
	*x = BallotBody{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_ballot_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BallotBody) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BallotBody) ProtoMessage() {}

func (x *BallotBody) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_ballot_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BallotBody.ProtoReflect.Descriptor instead.
func (*BallotBody) Descriptor() ([]byte, []int) {
	return file_protocol_ballot_proto_rawDescGZIP(), []int{1}
}

func (x *BallotBody) GetElectionId() []byte {
	if x != nil {
		return x.ElectionId
	}
	return nil
}

func (x *BallotBody) GetNullifier() []byte {
	if x != nil {
		return x.Nullifier
	}
	return nil
}

func (x *BallotBody) GetProofs() []*Proof {
	if x != nil {
		return x.Proofs
	}
	return nil
}

func (x *BallotBody) GetVotes() *BallotBody_VoteList {
	if x != nil {
		return x.Votes
	}
	return nil
}

type SignedBallot struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ballot        []byte        `protobuf:"bytes,1,opt,name=ballot,proto3" json:"ballot,omitempty"`       // Serialized {BallotBody} bytes
	Signature     []byte        `protobuf:"bytes,2,opt,name=signature,proto3" json:"signature,omitempty"` // sign(bytes(BallotBody))
	SignatureType SignatureType `protobuf:"varint,3,opt,name=signatureType,proto3,enum=dvote.types.v2.SignatureType" json:"signatureType,omitempty"`
}

func (x *SignedBallot) Reset() {
	*x = SignedBallot{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_ballot_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SignedBallot) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SignedBallot) ProtoMessage() {}

func (x *SignedBallot) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_ballot_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SignedBallot.ProtoReflect.Descriptor instead.
func (*SignedBallot) Descriptor() ([]byte, []int) {
	return file_protocol_ballot_proto_rawDescGZIP(), []int{2}
}

func (x *SignedBallot) GetBallot() []byte {
	if x != nil {
		return x.Ballot
	}
	return nil
}

func (x *SignedBallot) GetSignature() []byte {
	if x != nil {
		return x.Signature
	}
	return nil
}

func (x *SignedBallot) GetSignatureType() SignatureType {
	if x != nil {
		return x.SignatureType
	}
	return SignatureType_NONE
}

type Vote struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Body:
	//	*Vote_Encrypted
	//	*Vote_Approval
	//	*Vote_SingleChoice
	//	*Vote_Quadratic
	//	*Vote_Ranked
	//	*Vote_Spread
	Body isVote_Body `protobuf_oneof:"body"`
}

func (x *Vote) Reset() {
	*x = Vote{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_ballot_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Vote) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Vote) ProtoMessage() {}

func (x *Vote) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_ballot_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Vote.ProtoReflect.Descriptor instead.
func (*Vote) Descriptor() ([]byte, []int) {
	return file_protocol_ballot_proto_rawDescGZIP(), []int{3}
}

func (m *Vote) GetBody() isVote_Body {
	if m != nil {
		return m.Body
	}
	return nil
}

func (x *Vote) GetEncrypted() *EncryptedVote {
	if x, ok := x.GetBody().(*Vote_Encrypted); ok {
		return x.Encrypted
	}
	return nil
}

func (x *Vote) GetApproval() *ApprovalVote {
	if x, ok := x.GetBody().(*Vote_Approval); ok {
		return x.Approval
	}
	return nil
}

func (x *Vote) GetSingleChoice() *SingleChoiceVote {
	if x, ok := x.GetBody().(*Vote_SingleChoice); ok {
		return x.SingleChoice
	}
	return nil
}

func (x *Vote) GetQuadratic() *QuadraticVote {
	if x, ok := x.GetBody().(*Vote_Quadratic); ok {
		return x.Quadratic
	}
	return nil
}

func (x *Vote) GetRanked() *RankedVote {
	if x, ok := x.GetBody().(*Vote_Ranked); ok {
		return x.Ranked
	}
	return nil
}

func (x *Vote) GetSpread() *SpreadVote {
	if x, ok := x.GetBody().(*Vote_Spread); ok {
		return x.Spread
	}
	return nil
}

type isVote_Body interface {
	isVote_Body()
}

type Vote_Encrypted struct {
	// Wrapper
	Encrypted *EncryptedVote `protobuf:"bytes,1,opt,name=encrypted,proto3,oneof"`
}

type Vote_Approval struct {
	// Values
	Approval *ApprovalVote `protobuf:"bytes,11,opt,name=approval,proto3,oneof"`
}

type Vote_SingleChoice struct {
	SingleChoice *SingleChoiceVote `protobuf:"bytes,12,opt,name=singleChoice,proto3,oneof"`
}

type Vote_Quadratic struct {
	Quadratic *QuadraticVote `protobuf:"bytes,13,opt,name=quadratic,proto3,oneof"`
}

type Vote_Ranked struct {
	Ranked *RankedVote `protobuf:"bytes,14,opt,name=ranked,proto3,oneof"`
}

type Vote_Spread struct {
	Spread *SpreadVote `protobuf:"bytes,15,opt,name=spread,proto3,oneof"`
}

func (*Vote_Encrypted) isVote_Body() {}

func (*Vote_Approval) isVote_Body() {}

func (*Vote_SingleChoice) isVote_Body() {}

func (*Vote_Quadratic) isVote_Body() {}

func (*Vote_Ranked) isVote_Body() {}

func (*Vote_Spread) isVote_Body() {}

type EncryptedVote struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Encrypted bytes of {Vote}  (recursive)
	Payload []byte `protobuf:"bytes,1,opt,name=payload,proto3" json:"payload,omitempty"`
	// Keys (in order) used to encrypt the payload
	EncryptionKeyIndexes []int32 `protobuf:"varint,2,rep,packed,name=encryptionKeyIndexes,proto3" json:"encryptionKeyIndexes,omitempty"`
}

func (x *EncryptedVote) Reset() {
	*x = EncryptedVote{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_ballot_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EncryptedVote) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EncryptedVote) ProtoMessage() {}

func (x *EncryptedVote) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_ballot_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EncryptedVote.ProtoReflect.Descriptor instead.
func (*EncryptedVote) Descriptor() ([]byte, []int) {
	return file_protocol_ballot_proto_rawDescGZIP(), []int{4}
}

func (x *EncryptedVote) GetPayload() []byte {
	if x != nil {
		return x.Payload
	}
	return nil
}

func (x *EncryptedVote) GetEncryptionKeyIndexes() []int32 {
	if x != nil {
		return x.EncryptionKeyIndexes
	}
	return nil
}

type ApprovalVote struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Approved bool `protobuf:"varint,1,opt,name=approved,proto3" json:"approved,omitempty"`
	// 16 random bytes
	Nonce []byte `protobuf:"bytes,2,opt,name=nonce,proto3" json:"nonce,omitempty"`
}

func (x *ApprovalVote) Reset() {
	*x = ApprovalVote{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_ballot_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApprovalVote) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApprovalVote) ProtoMessage() {}

func (x *ApprovalVote) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_ballot_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApprovalVote.ProtoReflect.Descriptor instead.
func (*ApprovalVote) Descriptor() ([]byte, []int) {
	return file_protocol_ballot_proto_rawDescGZIP(), []int{5}
}

func (x *ApprovalVote) GetApproved() bool {
	if x != nil {
		return x.Approved
	}
	return false
}

func (x *ApprovalVote) GetNonce() []byte {
	if x != nil {
		return x.Nonce
	}
	return nil
}

type SingleChoiceVote struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Index of the chosen option
	Choice int32 `protobuf:"varint,1,opt,name=choice,proto3" json:"choice,omitempty"`
	// 16 random bytes
	Nonce []byte `protobuf:"bytes,2,opt,name=nonce,proto3" json:"nonce,omitempty"`
}

func (x *SingleChoiceVote) Reset() {
	*x = SingleChoiceVote{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_ballot_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SingleChoiceVote) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SingleChoiceVote) ProtoMessage() {}

func (x *SingleChoiceVote) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_ballot_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SingleChoiceVote.ProtoReflect.Descriptor instead.
func (*SingleChoiceVote) Descriptor() ([]byte, []int) {
	return file_protocol_ballot_proto_rawDescGZIP(), []int{6}
}

func (x *SingleChoiceVote) GetChoice() int32 {
	if x != nil {
		return x.Choice
	}
	return 0
}

func (x *SingleChoiceVote) GetNonce() []byte {
	if x != nil {
		return x.Nonce
	}
	return nil
}

type QuadraticVote struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Points assigned to each choice index
	ChoicePoints []int32 `protobuf:"varint,1,rep,packed,name=choicePoints,proto3" json:"choicePoints,omitempty"`
	// 16 random bytes
	Nonce []byte `protobuf:"bytes,2,opt,name=nonce,proto3" json:"nonce,omitempty"`
}

func (x *QuadraticVote) Reset() {
	*x = QuadraticVote{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_ballot_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuadraticVote) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuadraticVote) ProtoMessage() {}

func (x *QuadraticVote) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_ballot_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuadraticVote.ProtoReflect.Descriptor instead.
func (*QuadraticVote) Descriptor() ([]byte, []int) {
	return file_protocol_ballot_proto_rawDescGZIP(), []int{7}
}

func (x *QuadraticVote) GetChoicePoints() []int32 {
	if x != nil {
		return x.ChoicePoints
	}
	return nil
}

func (x *QuadraticVote) GetNonce() []byte {
	if x != nil {
		return x.Nonce
	}
	return nil
}

type RankedVote struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Ranking of the chosen indexes, by preference
	Ranking []int32 `protobuf:"varint,1,rep,packed,name=ranking,proto3" json:"ranking,omitempty"`
	// 16 random bytes
	Nonce []byte `protobuf:"bytes,2,opt,name=nonce,proto3" json:"nonce,omitempty"`
}

func (x *RankedVote) Reset() {
	*x = RankedVote{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_ballot_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RankedVote) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RankedVote) ProtoMessage() {}

func (x *RankedVote) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_ballot_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RankedVote.ProtoReflect.Descriptor instead.
func (*RankedVote) Descriptor() ([]byte, []int) {
	return file_protocol_ballot_proto_rawDescGZIP(), []int{8}
}

func (x *RankedVote) GetRanking() []int32 {
	if x != nil {
		return x.Ranking
	}
	return nil
}

func (x *RankedVote) GetNonce() []byte {
	if x != nil {
		return x.Nonce
	}
	return nil
}

type SpreadVote struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Percent of weight assigned to each choice (from 0 to 100_00)
	Percentages []int32 `protobuf:"varint,1,rep,packed,name=percentages,proto3" json:"percentages,omitempty"`
	// 16 random bytes
	Nonce []byte `protobuf:"bytes,2,opt,name=nonce,proto3" json:"nonce,omitempty"`
}

func (x *SpreadVote) Reset() {
	*x = SpreadVote{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_ballot_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SpreadVote) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SpreadVote) ProtoMessage() {}

func (x *SpreadVote) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_ballot_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SpreadVote.ProtoReflect.Descriptor instead.
func (*SpreadVote) Descriptor() ([]byte, []int) {
	return file_protocol_ballot_proto_rawDescGZIP(), []int{9}
}

func (x *SpreadVote) GetPercentages() []int32 {
	if x != nil {
		return x.Percentages
	}
	return nil
}

func (x *SpreadVote) GetNonce() []byte {
	if x != nil {
		return x.Nonce
	}
	return nil
}

type BallotBody_VoteList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Submitting only only one vote?
	Partial bool `protobuf:"varint,1,opt,name=partial,proto3" json:"partial,omitempty"`
	// [v1, v2, v3...] when partial == false
	// [v3] when partial == true
	Votes []*Vote `protobuf:"bytes,2,rep,name=votes,proto3" json:"votes,omitempty"`
	// Index of the proposal being submitted.
	// Set to 0 when `partial = false` (ignored)
	SubmittedIndex int32 `protobuf:"varint,3,opt,name=submittedIndex,proto3" json:"submittedIndex,omitempty"`
}

func (x *BallotBody_VoteList) Reset() {
	*x = BallotBody_VoteList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protocol_ballot_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BallotBody_VoteList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BallotBody_VoteList) ProtoMessage() {}

func (x *BallotBody_VoteList) ProtoReflect() protoreflect.Message {
	mi := &file_protocol_ballot_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BallotBody_VoteList.ProtoReflect.Descriptor instead.
func (*BallotBody_VoteList) Descriptor() ([]byte, []int) {
	return file_protocol_ballot_proto_rawDescGZIP(), []int{1, 0}
}

func (x *BallotBody_VoteList) GetPartial() bool {
	if x != nil {
		return x.Partial
	}
	return false
}

func (x *BallotBody_VoteList) GetVotes() []*Vote {
	if x != nil {
		return x.Votes
	}
	return nil
}

func (x *BallotBody_VoteList) GetSubmittedIndex() int32 {
	if x != nil {
		return x.SubmittedIndex
	}
	return 0
}

var File_protocol_ballot_proto protoreflect.FileDescriptor

var file_protocol_ballot_proto_rawDesc = []byte{
	0x0a, 0x15, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2f, 0x62, 0x61, 0x6c, 0x6c, 0x6f,
	0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74,
	0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x1a, 0x14, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f,
	0x6c, 0x2f, 0x65, 0x6e, 0x75, 0x6d, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x15, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x2f, 0x63, 0x65, 0x6e, 0x73, 0x75, 0x73, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x9c, 0x01, 0x0a, 0x06, 0x42, 0x61, 0x6c, 0x6c, 0x6f, 0x74, 0x12,
	0x42, 0x0a, 0x0c, 0x73, 0x69, 0x67, 0x6e, 0x65, 0x64, 0x42, 0x61, 0x6c, 0x6c, 0x6f, 0x74, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79,
	0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x53, 0x69, 0x67, 0x6e, 0x65, 0x64, 0x42, 0x61, 0x6c,
	0x6c, 0x6f, 0x74, 0x48, 0x00, 0x52, 0x0c, 0x73, 0x69, 0x67, 0x6e, 0x65, 0x64, 0x42, 0x61, 0x6c,
	0x6c, 0x6f, 0x74, 0x12, 0x46, 0x0a, 0x0f, 0x61, 0x6e, 0x6f, 0x6e, 0x79, 0x6d, 0x6f, 0x75, 0x73,
	0x42, 0x61, 0x6c, 0x6c, 0x6f, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x64,
	0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x42, 0x61,
	0x6c, 0x6c, 0x6f, 0x74, 0x42, 0x6f, 0x64, 0x79, 0x48, 0x00, 0x52, 0x0f, 0x61, 0x6e, 0x6f, 0x6e,
	0x79, 0x6d, 0x6f, 0x75, 0x73, 0x42, 0x61, 0x6c, 0x6c, 0x6f, 0x74, 0x42, 0x06, 0x0a, 0x04, 0x62,
	0x6f, 0x64, 0x79, 0x22, 0xae, 0x02, 0x0a, 0x0a, 0x42, 0x61, 0x6c, 0x6c, 0x6f, 0x74, 0x42, 0x6f,
	0x64, 0x79, 0x12, 0x1e, 0x0a, 0x0a, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x0a, 0x65, 0x6c, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x49, 0x64, 0x12, 0x1c, 0x0a, 0x09, 0x6e, 0x75, 0x6c, 0x6c, 0x69, 0x66, 0x69, 0x65, 0x72, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x09, 0x6e, 0x75, 0x6c, 0x6c, 0x69, 0x66, 0x69, 0x65, 0x72,
	0x12, 0x2d, 0x0a, 0x06, 0x70, 0x72, 0x6f, 0x6f, 0x66, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x15, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76,
	0x32, 0x2e, 0x50, 0x72, 0x6f, 0x6f, 0x66, 0x52, 0x06, 0x70, 0x72, 0x6f, 0x6f, 0x66, 0x73, 0x12,
	0x39, 0x0a, 0x05, 0x76, 0x6f, 0x74, 0x65, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x23,
	0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e,
	0x42, 0x61, 0x6c, 0x6c, 0x6f, 0x74, 0x42, 0x6f, 0x64, 0x79, 0x2e, 0x56, 0x6f, 0x74, 0x65, 0x4c,
	0x69, 0x73, 0x74, 0x52, 0x05, 0x76, 0x6f, 0x74, 0x65, 0x73, 0x1a, 0x78, 0x0a, 0x08, 0x56, 0x6f,
	0x74, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x18, 0x0a, 0x07, 0x70, 0x61, 0x72, 0x74, 0x69, 0x61,
	0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x70, 0x61, 0x72, 0x74, 0x69, 0x61, 0x6c,
	0x12, 0x2a, 0x0a, 0x05, 0x76, 0x6f, 0x74, 0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x14, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32,
	0x2e, 0x56, 0x6f, 0x74, 0x65, 0x52, 0x05, 0x76, 0x6f, 0x74, 0x65, 0x73, 0x12, 0x26, 0x0a, 0x0e,
	0x73, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x74, 0x65, 0x64, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x0e, 0x73, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x74, 0x65, 0x64, 0x49,
	0x6e, 0x64, 0x65, 0x78, 0x22, 0x89, 0x01, 0x0a, 0x0c, 0x53, 0x69, 0x67, 0x6e, 0x65, 0x64, 0x42,
	0x61, 0x6c, 0x6c, 0x6f, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x62, 0x61, 0x6c, 0x6c, 0x6f, 0x74, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x06, 0x62, 0x61, 0x6c, 0x6c, 0x6f, 0x74, 0x12, 0x1c, 0x0a,
	0x09, 0x73, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c,
	0x52, 0x09, 0x73, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x12, 0x43, 0x0a, 0x0d, 0x73,
	0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x54, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0e, 0x32, 0x1d, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x76, 0x32, 0x2e, 0x53, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x54, 0x79, 0x70,
	0x65, 0x52, 0x0d, 0x73, 0x69, 0x67, 0x6e, 0x61, 0x74, 0x75, 0x72, 0x65, 0x54, 0x79, 0x70, 0x65,
	0x22, 0xfc, 0x02, 0x0a, 0x04, 0x56, 0x6f, 0x74, 0x65, 0x12, 0x3d, 0x0a, 0x09, 0x65, 0x6e, 0x63,
	0x72, 0x79, 0x70, 0x74, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x64,
	0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x45, 0x6e,
	0x63, 0x72, 0x79, 0x70, 0x74, 0x65, 0x64, 0x56, 0x6f, 0x74, 0x65, 0x48, 0x00, 0x52, 0x09, 0x65,
	0x6e, 0x63, 0x72, 0x79, 0x70, 0x74, 0x65, 0x64, 0x12, 0x3a, 0x0a, 0x08, 0x61, 0x70, 0x70, 0x72,
	0x6f, 0x76, 0x61, 0x6c, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x64, 0x76, 0x6f,
	0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x41, 0x70, 0x70, 0x72,
	0x6f, 0x76, 0x61, 0x6c, 0x56, 0x6f, 0x74, 0x65, 0x48, 0x00, 0x52, 0x08, 0x61, 0x70, 0x70, 0x72,
	0x6f, 0x76, 0x61, 0x6c, 0x12, 0x46, 0x0a, 0x0c, 0x73, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x43, 0x68,
	0x6f, 0x69, 0x63, 0x65, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x64, 0x76, 0x6f,
	0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x53, 0x69, 0x6e, 0x67,
	0x6c, 0x65, 0x43, 0x68, 0x6f, 0x69, 0x63, 0x65, 0x56, 0x6f, 0x74, 0x65, 0x48, 0x00, 0x52, 0x0c,
	0x73, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x43, 0x68, 0x6f, 0x69, 0x63, 0x65, 0x12, 0x3d, 0x0a, 0x09,
	0x71, 0x75, 0x61, 0x64, 0x72, 0x61, 0x74, 0x69, 0x63, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1d, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32,
	0x2e, 0x51, 0x75, 0x61, 0x64, 0x72, 0x61, 0x74, 0x69, 0x63, 0x56, 0x6f, 0x74, 0x65, 0x48, 0x00,
	0x52, 0x09, 0x71, 0x75, 0x61, 0x64, 0x72, 0x61, 0x74, 0x69, 0x63, 0x12, 0x34, 0x0a, 0x06, 0x72,
	0x61, 0x6e, 0x6b, 0x65, 0x64, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x64, 0x76,
	0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x52, 0x61, 0x6e,
	0x6b, 0x65, 0x64, 0x56, 0x6f, 0x74, 0x65, 0x48, 0x00, 0x52, 0x06, 0x72, 0x61, 0x6e, 0x6b, 0x65,
	0x64, 0x12, 0x34, 0x0a, 0x06, 0x73, 0x70, 0x72, 0x65, 0x61, 0x64, 0x18, 0x0f, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x1a, 0x2e, 0x64, 0x76, 0x6f, 0x74, 0x65, 0x2e, 0x74, 0x79, 0x70, 0x65, 0x73, 0x2e,
	0x76, 0x32, 0x2e, 0x53, 0x70, 0x72, 0x65, 0x61, 0x64, 0x56, 0x6f, 0x74, 0x65, 0x48, 0x00, 0x52,
	0x06, 0x73, 0x70, 0x72, 0x65, 0x61, 0x64, 0x42, 0x06, 0x0a, 0x04, 0x62, 0x6f, 0x64, 0x79, 0x22,
	0x5d, 0x0a, 0x0d, 0x45, 0x6e, 0x63, 0x72, 0x79, 0x70, 0x74, 0x65, 0x64, 0x56, 0x6f, 0x74, 0x65,
	0x12, 0x18, 0x0a, 0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0c, 0x52, 0x07, 0x70, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x32, 0x0a, 0x14, 0x65, 0x6e,
	0x63, 0x72, 0x79, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x4b, 0x65, 0x79, 0x49, 0x6e, 0x64, 0x65, 0x78,
	0x65, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x05, 0x52, 0x14, 0x65, 0x6e, 0x63, 0x72, 0x79, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x4b, 0x65, 0x79, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x65, 0x73, 0x22, 0x40,
	0x0a, 0x0c, 0x41, 0x70, 0x70, 0x72, 0x6f, 0x76, 0x61, 0x6c, 0x56, 0x6f, 0x74, 0x65, 0x12, 0x1a,
	0x0a, 0x08, 0x61, 0x70, 0x70, 0x72, 0x6f, 0x76, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x08, 0x61, 0x70, 0x70, 0x72, 0x6f, 0x76, 0x65, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x6e, 0x6f,
	0x6e, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65,
	0x22, 0x40, 0x0a, 0x10, 0x53, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x43, 0x68, 0x6f, 0x69, 0x63, 0x65,
	0x56, 0x6f, 0x74, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x63, 0x68, 0x6f, 0x69, 0x63, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x63, 0x68, 0x6f, 0x69, 0x63, 0x65, 0x12, 0x14, 0x0a, 0x05,
	0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x6e, 0x6f, 0x6e,
	0x63, 0x65, 0x22, 0x49, 0x0a, 0x0d, 0x51, 0x75, 0x61, 0x64, 0x72, 0x61, 0x74, 0x69, 0x63, 0x56,
	0x6f, 0x74, 0x65, 0x12, 0x22, 0x0a, 0x0c, 0x63, 0x68, 0x6f, 0x69, 0x63, 0x65, 0x50, 0x6f, 0x69,
	0x6e, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x05, 0x52, 0x0c, 0x63, 0x68, 0x6f, 0x69, 0x63,
	0x65, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x22, 0x3c, 0x0a,
	0x0a, 0x52, 0x61, 0x6e, 0x6b, 0x65, 0x64, 0x56, 0x6f, 0x74, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x72,
	0x61, 0x6e, 0x6b, 0x69, 0x6e, 0x67, 0x18, 0x01, 0x20, 0x03, 0x28, 0x05, 0x52, 0x07, 0x72, 0x61,
	0x6e, 0x6b, 0x69, 0x6e, 0x67, 0x12, 0x14, 0x0a, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x22, 0x44, 0x0a, 0x0a, 0x53,
	0x70, 0x72, 0x65, 0x61, 0x64, 0x56, 0x6f, 0x74, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x70, 0x65, 0x72,
	0x63, 0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x05, 0x52, 0x0b,
	0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x6e,
	0x6f, 0x6e, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x05, 0x6e, 0x6f, 0x6e, 0x63,
	0x65, 0x42, 0x28, 0x5a, 0x26, 0x67, 0x6f, 0x2e, 0x76, 0x6f, 0x63, 0x64, 0x6f, 0x6e, 0x69, 0x2e,
	0x69, 0x6f, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x75, 0x69, 0x6c, 0x64, 0x2f, 0x67,
	0x6f, 0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x73, 0x2f, 0x76, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_protocol_ballot_proto_rawDescOnce sync.Once
	file_protocol_ballot_proto_rawDescData = file_protocol_ballot_proto_rawDesc
)

func file_protocol_ballot_proto_rawDescGZIP() []byte {
	file_protocol_ballot_proto_rawDescOnce.Do(func() {
		file_protocol_ballot_proto_rawDescData = protoimpl.X.CompressGZIP(file_protocol_ballot_proto_rawDescData)
	})
	return file_protocol_ballot_proto_rawDescData
}

var file_protocol_ballot_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_protocol_ballot_proto_goTypes = []interface{}{
	(*Ballot)(nil),              // 0: dvote.types.v2.Ballot
	(*BallotBody)(nil),          // 1: dvote.types.v2.BallotBody
	(*SignedBallot)(nil),        // 2: dvote.types.v2.SignedBallot
	(*Vote)(nil),                // 3: dvote.types.v2.Vote
	(*EncryptedVote)(nil),       // 4: dvote.types.v2.EncryptedVote
	(*ApprovalVote)(nil),        // 5: dvote.types.v2.ApprovalVote
	(*SingleChoiceVote)(nil),    // 6: dvote.types.v2.SingleChoiceVote
	(*QuadraticVote)(nil),       // 7: dvote.types.v2.QuadraticVote
	(*RankedVote)(nil),          // 8: dvote.types.v2.RankedVote
	(*SpreadVote)(nil),          // 9: dvote.types.v2.SpreadVote
	(*BallotBody_VoteList)(nil), // 10: dvote.types.v2.BallotBody.VoteList
	(*Proof)(nil),               // 11: dvote.types.v2.Proof
	(SignatureType)(0),          // 12: dvote.types.v2.SignatureType
}
var file_protocol_ballot_proto_depIdxs = []int32{
	2,  // 0: dvote.types.v2.Ballot.signedBallot:type_name -> dvote.types.v2.SignedBallot
	1,  // 1: dvote.types.v2.Ballot.anonymousBallot:type_name -> dvote.types.v2.BallotBody
	11, // 2: dvote.types.v2.BallotBody.proofs:type_name -> dvote.types.v2.Proof
	10, // 3: dvote.types.v2.BallotBody.votes:type_name -> dvote.types.v2.BallotBody.VoteList
	12, // 4: dvote.types.v2.SignedBallot.signatureType:type_name -> dvote.types.v2.SignatureType
	4,  // 5: dvote.types.v2.Vote.encrypted:type_name -> dvote.types.v2.EncryptedVote
	5,  // 6: dvote.types.v2.Vote.approval:type_name -> dvote.types.v2.ApprovalVote
	6,  // 7: dvote.types.v2.Vote.singleChoice:type_name -> dvote.types.v2.SingleChoiceVote
	7,  // 8: dvote.types.v2.Vote.quadratic:type_name -> dvote.types.v2.QuadraticVote
	8,  // 9: dvote.types.v2.Vote.ranked:type_name -> dvote.types.v2.RankedVote
	9,  // 10: dvote.types.v2.Vote.spread:type_name -> dvote.types.v2.SpreadVote
	3,  // 11: dvote.types.v2.BallotBody.VoteList.votes:type_name -> dvote.types.v2.Vote
	12, // [12:12] is the sub-list for method output_type
	12, // [12:12] is the sub-list for method input_type
	12, // [12:12] is the sub-list for extension type_name
	12, // [12:12] is the sub-list for extension extendee
	0,  // [0:12] is the sub-list for field type_name
}

func init() { file_protocol_ballot_proto_init() }
func file_protocol_ballot_proto_init() {
	if File_protocol_ballot_proto != nil {
		return
	}
	file_protocol_enums_proto_init()
	file_protocol_census_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_protocol_ballot_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Ballot); i {
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
		file_protocol_ballot_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BallotBody); i {
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
		file_protocol_ballot_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SignedBallot); i {
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
		file_protocol_ballot_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Vote); i {
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
		file_protocol_ballot_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EncryptedVote); i {
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
		file_protocol_ballot_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApprovalVote); i {
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
		file_protocol_ballot_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SingleChoiceVote); i {
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
		file_protocol_ballot_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuadraticVote); i {
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
		file_protocol_ballot_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RankedVote); i {
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
		file_protocol_ballot_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SpreadVote); i {
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
		file_protocol_ballot_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BallotBody_VoteList); i {
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
	file_protocol_ballot_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*Ballot_SignedBallot)(nil),
		(*Ballot_AnonymousBallot)(nil),
	}
	file_protocol_ballot_proto_msgTypes[3].OneofWrappers = []interface{}{
		(*Vote_Encrypted)(nil),
		(*Vote_Approval)(nil),
		(*Vote_SingleChoice)(nil),
		(*Vote_Quadratic)(nil),
		(*Vote_Ranked)(nil),
		(*Vote_Spread)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protocol_ballot_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_protocol_ballot_proto_goTypes,
		DependencyIndexes: file_protocol_ballot_proto_depIdxs,
		MessageInfos:      file_protocol_ballot_proto_msgTypes,
	}.Build()
	File_protocol_ballot_proto = out.File
	file_protocol_ballot_proto_rawDesc = nil
	file_protocol_ballot_proto_goTypes = nil
	file_protocol_ballot_proto_depIdxs = nil
}
