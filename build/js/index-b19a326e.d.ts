import _m0 from 'protobufjs/minimal';

declare enum TxType {
    TX_UNKNOWN = 0,
    NEW_PROCESS = 1,
    SET_PROCESS_STATUS = 2,
    SET_PROCESS_CENSUS = 3,
    SET_PROCESS_QUESTION_INDEX = 4,
    ADD_PROCESS_KEYS = 5,
    REVEAL_PROCESS_KEYS = 6,
    ADD_ORACLE = 7,
    REMOVE_ORACLE = 8,
    ADD_VALIDATOR = 9,
    REMOVE_VALIDATOR = 10,
    VOTE = 11,
    SET_PROCESS_RESULTS = 12,
    REGISTER_VOTER_KEY = 13,
    SEND_TOKENS = 15,
    SET_ACCOUNT_INFO_URI = 17,
    ADD_DELEGATE_FOR_ACCOUNT = 18,
    DEL_DELEGATE_FOR_ACCOUNT = 19,
    COLLECT_FAUCET = 20,
    ADD_KEYKEEPER = 21,
    DELETE_KEYKEEPER = 22,
    CREATE_ACCOUNT = 23,
    SET_ACCOUNT_SIK = 24,
    DEL_ACCOUNT_SIK = 25,
    REGISTER_SIK = 26,
    SET_ACCOUNT_VALIDATOR = 27,
    SET_PROCESS_DURATION = 28,
    UNRECOGNIZED = -1
}
declare function txTypeFromJSON(object: any): TxType;
declare function txTypeToJSON(object: TxType): string;
declare enum ProcessStatus {
    PROCESS_UNKNOWN = 0,
    READY = 1,
    ENDED = 2,
    CANCELED = 3,
    PAUSED = 4,
    RESULTS = 5,
    UNRECOGNIZED = -1
}
declare function processStatusFromJSON(object: any): ProcessStatus;
declare function processStatusToJSON(object: ProcessStatus): string;
declare enum SourceNetworkId {
    UNKNOWN = 0,
    ETH_MAINNET = 1,
    ETH_RINKEBY = 2,
    ETH_GOERLI = 3,
    POA_XDAI = 4,
    POA_SOKOL = 5,
    POLYGON = 6,
    BSC = 7,
    ETH_MAINNET_SIGNALING = 8,
    ETH_RINKEBY_SIGNALING = 9,
    AVAX_FUJI = 10,
    AVAX = 11,
    POLYGON_MUMBAI = 12,
    OPTIMISM = 13,
    ARBITRUM = 14,
    UNRECOGNIZED = -1
}
declare function sourceNetworkIdFromJSON(object: any): SourceNetworkId;
declare function sourceNetworkIdToJSON(object: SourceNetworkId): string;
declare enum CensusOrigin {
    CENSUS_UNKNOWN = 0,
    OFF_CHAIN_TREE = 1,
    OFF_CHAIN_TREE_WEIGHTED = 2,
    OFF_CHAIN_CA = 3,
    /**
     * OFF_CHAIN_CA_V2 - OFF_CHAIN_CA_V2 is OFF_CHAIN_CA with a fixed salt derivation for the
     * salted proof types (ECDSA_PIDSALTED, ECDSA_BLIND_PIDSALTED): the salt
     * covers the whole processId and the CSP-authorized vote weight, so a CSP
     * authorization is bound to one election and one weight. OFF_CHAIN_CA keeps
     * the legacy derivation, which cropped the processId to 20 bytes and shared
     * one salted key across every election of an organization.
     */
    OFF_CHAIN_CA_V2 = 4,
    UNRECOGNIZED = -1
}
declare function censusOriginFromJSON(object: any): CensusOrigin;
declare function censusOriginToJSON(object: CensusOrigin): string;
declare enum Census_Type {
    UNKNOWN = 0,
    ARBO_BLAKE2B = 1,
    ARBO_POSEIDON = 2,
    CA = 5,
    UNRECOGNIZED = -1
}
declare function census_TypeFromJSON(object: any): Census_Type;
declare function census_TypeToJSON(object: Census_Type): string;
declare enum ProofCA_Type {
    UNKNOWN = 0,
    ECDSA = 1,
    ECDSA_PIDSALTED = 2,
    ECDSA_BLIND = 3,
    ECDSA_BLIND_PIDSALTED = 4,
    UNRECOGNIZED = -1
}
declare function proofCA_TypeFromJSON(object: any): ProofCA_Type;
declare function proofCA_TypeToJSON(object: ProofCA_Type): string;
declare enum ProofArbo_Type {
    BLAKE2B = 0,
    POSEIDON = 1,
    UNRECOGNIZED = -1
}
declare function proofArbo_TypeFromJSON(object: any): ProofArbo_Type;
declare function proofArbo_TypeToJSON(object: ProofArbo_Type): string;
declare enum ProofArbo_KeyType {
    PUBKEY = 0,
    ADDRESS = 1,
    UNRECOGNIZED = -1
}
declare function proofArbo_KeyTypeFromJSON(object: any): ProofArbo_KeyType;
declare function proofArbo_KeyTypeToJSON(object: ProofArbo_KeyType): string;
interface VoteEnvelope {
    /** Unique number per vote attempt, so that replay attacks can't reuse this payload */
    nonce: Uint8Array;
    /** The process for which the vote is casted */
    processId: Uint8Array;
    /** Franchise proof */
    proof: Proof | undefined;
    /** JSON string of the Vote Package (potentially encrypted), encoded as bytes. */
    votePackage: Uint8Array;
    /** Hash of the private key + processId */
    nullifier: Uint8Array;
    /** On encrypted votes, contains the (sorted) indexes of the keys used to encrypt */
    encryptionKeyIndexes: number[];
    /**
     * Optional free-text note attached by the voter (max 256 bytes), e.g. an open "Other" answer.
     * Declared as bytes (not string) so that nodes without this field treat it as an opaque
     * unknown field identically to nodes that have it — avoiding a proto3-string UTF-8 decode
     * divergence during a rolling upgrade. UTF-8/size validation is enforced at the app layer.
     */
    memo?: Uint8Array | undefined;
}
declare const VoteEnvelope: {
    encode(message: VoteEnvelope, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VoteEnvelope;
    fromJSON(object: any): VoteEnvelope;
    toJSON(message: VoteEnvelope): unknown;
    create<I extends {
        nonce?: Uint8Array | undefined;
        processId?: Uint8Array | undefined;
        proof?: {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } | undefined;
        votePackage?: Uint8Array | undefined;
        nullifier?: Uint8Array | undefined;
        encryptionKeyIndexes?: number[] | undefined;
        memo?: Uint8Array | undefined;
    } & {
        nonce?: Uint8Array | undefined;
        processId?: Uint8Array | undefined;
        proof?: ({
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } & {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            } & {
                ca?: ({
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: ProofCA_Type | undefined;
                    bundle?: ({
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & { [K in Exclude<keyof I["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_1 in Exclude<keyof I["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                $case: "ca";
            } & { [K_2 in Exclude<keyof I["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            } & {
                arbo?: ({
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & { [K_3 in Exclude<keyof I["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                $case: "arbo";
            } & { [K_4 in Exclude<keyof I["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            } & {
                zkSnark?: ({
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } & {
                    circuitParametersIndex?: number | undefined;
                    a?: (string[] & string[] & { [K_5 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                    b?: (string[] & string[] & { [K_6 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                    c?: (string[] & string[] & { [K_7 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                    publicInputs?: (string[] & string[] & { [K_8 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                } & { [K_9 in Exclude<keyof I["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                $case: "zkSnark";
            } & { [K_10 in Exclude<keyof I["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["proof"], "payload">]: never; }) | undefined;
        votePackage?: Uint8Array | undefined;
        nullifier?: Uint8Array | undefined;
        encryptionKeyIndexes?: (number[] & number[] & { [K_12 in Exclude<keyof I["encryptionKeyIndexes"], keyof number[]>]: never; }) | undefined;
        memo?: Uint8Array | undefined;
    } & { [K_13 in Exclude<keyof I, keyof VoteEnvelope>]: never; }>(base?: I | undefined): VoteEnvelope;
    fromPartial<I_1 extends {
        nonce?: Uint8Array | undefined;
        processId?: Uint8Array | undefined;
        proof?: {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } | undefined;
        votePackage?: Uint8Array | undefined;
        nullifier?: Uint8Array | undefined;
        encryptionKeyIndexes?: number[] | undefined;
        memo?: Uint8Array | undefined;
    } & {
        nonce?: Uint8Array | undefined;
        processId?: Uint8Array | undefined;
        proof?: ({
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } & {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            } & {
                ca?: ({
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: ProofCA_Type | undefined;
                    bundle?: ({
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & { [K_14 in Exclude<keyof I_1["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_15 in Exclude<keyof I_1["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                $case: "ca";
            } & { [K_16 in Exclude<keyof I_1["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            } & {
                arbo?: ({
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & { [K_17 in Exclude<keyof I_1["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                $case: "arbo";
            } & { [K_18 in Exclude<keyof I_1["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            } & {
                zkSnark?: ({
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } & {
                    circuitParametersIndex?: number | undefined;
                    a?: (string[] & string[] & { [K_19 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                    b?: (string[] & string[] & { [K_20 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                    c?: (string[] & string[] & { [K_21 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                    publicInputs?: (string[] & string[] & { [K_22 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                } & { [K_23 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                $case: "zkSnark";
            } & { [K_24 in Exclude<keyof I_1["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
        } & { [K_25 in Exclude<keyof I_1["proof"], "payload">]: never; }) | undefined;
        votePackage?: Uint8Array | undefined;
        nullifier?: Uint8Array | undefined;
        encryptionKeyIndexes?: (number[] & number[] & { [K_26 in Exclude<keyof I_1["encryptionKeyIndexes"], keyof number[]>]: never; }) | undefined;
        memo?: Uint8Array | undefined;
    } & { [K_27 in Exclude<keyof I_1, keyof VoteEnvelope>]: never; }>(object: I_1): VoteEnvelope;
};
interface Census {
}
declare const Census: {
    encode(_: Census, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Census;
    fromJSON(_: any): Census;
    toJSON(_: Census): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): Census;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): Census;
};
interface Proof {
    payload?: {
        $case: "ca";
        ca: ProofCA;
    } | {
        $case: "arbo";
        arbo: ProofArbo;
    } | {
        $case: "zkSnark";
        zkSnark: ProofZkSNARK;
    } | undefined;
}
declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    create<I extends {
        payload?: ({
            ca?: {
                type?: ProofCA_Type | undefined;
                bundle?: {
                    processId?: Uint8Array | undefined;
                    address?: Uint8Array | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "ca";
        }) | ({
            arbo?: {
                type?: ProofArbo_Type | undefined;
                siblings?: Uint8Array | undefined;
                availableWeight?: Uint8Array | undefined;
                keyType?: ProofArbo_KeyType | undefined;
                voteWeight?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "arbo";
        }) | ({
            zkSnark?: {
                circuitParametersIndex?: number | undefined;
                a?: string[] | undefined;
                b?: string[] | undefined;
                c?: string[] | undefined;
                publicInputs?: string[] | undefined;
            } | undefined;
        } & {
            $case: "zkSnark";
        }) | undefined;
    } & {
        payload?: ({
            ca?: {
                type?: ProofCA_Type | undefined;
                bundle?: {
                    processId?: Uint8Array | undefined;
                    address?: Uint8Array | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "ca";
        } & {
            ca?: ({
                type?: ProofCA_Type | undefined;
                bundle?: {
                    processId?: Uint8Array | undefined;
                    address?: Uint8Array | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: ProofCA_Type | undefined;
                bundle?: ({
                    processId?: Uint8Array | undefined;
                    address?: Uint8Array | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & {
                    processId?: Uint8Array | undefined;
                    address?: Uint8Array | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & { [K in Exclude<keyof I["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                signature?: Uint8Array | undefined;
            } & { [K_1 in Exclude<keyof I["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
            $case: "ca";
        } & { [K_2 in Exclude<keyof I["payload"], "$case" | "ca">]: never; }) | ({
            arbo?: {
                type?: ProofArbo_Type | undefined;
                siblings?: Uint8Array | undefined;
                availableWeight?: Uint8Array | undefined;
                keyType?: ProofArbo_KeyType | undefined;
                voteWeight?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "arbo";
        } & {
            arbo?: ({
                type?: ProofArbo_Type | undefined;
                siblings?: Uint8Array | undefined;
                availableWeight?: Uint8Array | undefined;
                keyType?: ProofArbo_KeyType | undefined;
                voteWeight?: Uint8Array | undefined;
            } & {
                type?: ProofArbo_Type | undefined;
                siblings?: Uint8Array | undefined;
                availableWeight?: Uint8Array | undefined;
                keyType?: ProofArbo_KeyType | undefined;
                voteWeight?: Uint8Array | undefined;
            } & { [K_3 in Exclude<keyof I["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
            $case: "arbo";
        } & { [K_4 in Exclude<keyof I["payload"], "$case" | "arbo">]: never; }) | ({
            zkSnark?: {
                circuitParametersIndex?: number | undefined;
                a?: string[] | undefined;
                b?: string[] | undefined;
                c?: string[] | undefined;
                publicInputs?: string[] | undefined;
            } | undefined;
        } & {
            $case: "zkSnark";
        } & {
            zkSnark?: ({
                circuitParametersIndex?: number | undefined;
                a?: string[] | undefined;
                b?: string[] | undefined;
                c?: string[] | undefined;
                publicInputs?: string[] | undefined;
            } & {
                circuitParametersIndex?: number | undefined;
                a?: (string[] & string[] & { [K_5 in Exclude<keyof I["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                b?: (string[] & string[] & { [K_6 in Exclude<keyof I["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                c?: (string[] & string[] & { [K_7 in Exclude<keyof I["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                publicInputs?: (string[] & string[] & { [K_8 in Exclude<keyof I["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
            $case: "zkSnark";
        } & { [K_10 in Exclude<keyof I["payload"], "$case" | "zkSnark">]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I, "payload">]: never; }>(base?: I | undefined): Proof;
    fromPartial<I_1 extends {
        payload?: ({
            ca?: {
                type?: ProofCA_Type | undefined;
                bundle?: {
                    processId?: Uint8Array | undefined;
                    address?: Uint8Array | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "ca";
        }) | ({
            arbo?: {
                type?: ProofArbo_Type | undefined;
                siblings?: Uint8Array | undefined;
                availableWeight?: Uint8Array | undefined;
                keyType?: ProofArbo_KeyType | undefined;
                voteWeight?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "arbo";
        }) | ({
            zkSnark?: {
                circuitParametersIndex?: number | undefined;
                a?: string[] | undefined;
                b?: string[] | undefined;
                c?: string[] | undefined;
                publicInputs?: string[] | undefined;
            } | undefined;
        } & {
            $case: "zkSnark";
        }) | undefined;
    } & {
        payload?: ({
            ca?: {
                type?: ProofCA_Type | undefined;
                bundle?: {
                    processId?: Uint8Array | undefined;
                    address?: Uint8Array | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "ca";
        } & {
            ca?: ({
                type?: ProofCA_Type | undefined;
                bundle?: {
                    processId?: Uint8Array | undefined;
                    address?: Uint8Array | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: ProofCA_Type | undefined;
                bundle?: ({
                    processId?: Uint8Array | undefined;
                    address?: Uint8Array | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & {
                    processId?: Uint8Array | undefined;
                    address?: Uint8Array | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & { [K_12 in Exclude<keyof I_1["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                signature?: Uint8Array | undefined;
            } & { [K_13 in Exclude<keyof I_1["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
            $case: "ca";
        } & { [K_14 in Exclude<keyof I_1["payload"], "$case" | "ca">]: never; }) | ({
            arbo?: {
                type?: ProofArbo_Type | undefined;
                siblings?: Uint8Array | undefined;
                availableWeight?: Uint8Array | undefined;
                keyType?: ProofArbo_KeyType | undefined;
                voteWeight?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "arbo";
        } & {
            arbo?: ({
                type?: ProofArbo_Type | undefined;
                siblings?: Uint8Array | undefined;
                availableWeight?: Uint8Array | undefined;
                keyType?: ProofArbo_KeyType | undefined;
                voteWeight?: Uint8Array | undefined;
            } & {
                type?: ProofArbo_Type | undefined;
                siblings?: Uint8Array | undefined;
                availableWeight?: Uint8Array | undefined;
                keyType?: ProofArbo_KeyType | undefined;
                voteWeight?: Uint8Array | undefined;
            } & { [K_15 in Exclude<keyof I_1["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
            $case: "arbo";
        } & { [K_16 in Exclude<keyof I_1["payload"], "$case" | "arbo">]: never; }) | ({
            zkSnark?: {
                circuitParametersIndex?: number | undefined;
                a?: string[] | undefined;
                b?: string[] | undefined;
                c?: string[] | undefined;
                publicInputs?: string[] | undefined;
            } | undefined;
        } & {
            $case: "zkSnark";
        } & {
            zkSnark?: ({
                circuitParametersIndex?: number | undefined;
                a?: string[] | undefined;
                b?: string[] | undefined;
                c?: string[] | undefined;
                publicInputs?: string[] | undefined;
            } & {
                circuitParametersIndex?: number | undefined;
                a?: (string[] & string[] & { [K_17 in Exclude<keyof I_1["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                b?: (string[] & string[] & { [K_18 in Exclude<keyof I_1["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                c?: (string[] & string[] & { [K_19 in Exclude<keyof I_1["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                publicInputs?: (string[] & string[] & { [K_20 in Exclude<keyof I_1["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I_1["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
            $case: "zkSnark";
        } & { [K_22 in Exclude<keyof I_1["payload"], "$case" | "zkSnark">]: never; }) | undefined;
    } & { [K_23 in Exclude<keyof I_1, "payload">]: never; }>(object: I_1): Proof;
};
interface ProofCA {
    type: ProofCA_Type;
    bundle: CAbundle | undefined;
    signature: Uint8Array;
}
declare const ProofCA: {
    encode(message: ProofCA, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofCA;
    fromJSON(object: any): ProofCA;
    toJSON(message: ProofCA): unknown;
    create<I extends {
        type?: ProofCA_Type | undefined;
        bundle?: {
            processId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
            voteWeight?: Uint8Array | undefined;
        } | undefined;
        signature?: Uint8Array | undefined;
    } & {
        type?: ProofCA_Type | undefined;
        bundle?: ({
            processId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
            voteWeight?: Uint8Array | undefined;
        } & {
            processId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
            voteWeight?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["bundle"], keyof CAbundle>]: never; }) | undefined;
        signature?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ProofCA>]: never; }>(base?: I | undefined): ProofCA;
    fromPartial<I_1 extends {
        type?: ProofCA_Type | undefined;
        bundle?: {
            processId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
            voteWeight?: Uint8Array | undefined;
        } | undefined;
        signature?: Uint8Array | undefined;
    } & {
        type?: ProofCA_Type | undefined;
        bundle?: ({
            processId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
            voteWeight?: Uint8Array | undefined;
        } & {
            processId?: Uint8Array | undefined;
            address?: Uint8Array | undefined;
            voteWeight?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I_1["bundle"], keyof CAbundle>]: never; }) | undefined;
        signature?: Uint8Array | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ProofCA>]: never; }>(object: I_1): ProofCA;
};
interface CAbundle {
    processId: Uint8Array;
    address: Uint8Array;
    voteWeight?: Uint8Array | undefined;
}
declare const CAbundle: {
    encode(message: CAbundle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CAbundle;
    fromJSON(object: any): CAbundle;
    toJSON(message: CAbundle): unknown;
    create<I extends {
        processId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
        voteWeight?: Uint8Array | undefined;
    } & {
        processId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
        voteWeight?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof CAbundle>]: never; }>(base?: I | undefined): CAbundle;
    fromPartial<I_1 extends {
        processId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
        voteWeight?: Uint8Array | undefined;
    } & {
        processId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
        voteWeight?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof CAbundle>]: never; }>(object: I_1): CAbundle;
};
interface ProofArbo {
    type: ProofArbo_Type;
    siblings: Uint8Array;
    availableWeight: Uint8Array;
    keyType: ProofArbo_KeyType;
    voteWeight: Uint8Array;
}
declare const ProofArbo: {
    encode(message: ProofArbo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofArbo;
    fromJSON(object: any): ProofArbo;
    toJSON(message: ProofArbo): unknown;
    create<I extends {
        type?: ProofArbo_Type | undefined;
        siblings?: Uint8Array | undefined;
        availableWeight?: Uint8Array | undefined;
        keyType?: ProofArbo_KeyType | undefined;
        voteWeight?: Uint8Array | undefined;
    } & {
        type?: ProofArbo_Type | undefined;
        siblings?: Uint8Array | undefined;
        availableWeight?: Uint8Array | undefined;
        keyType?: ProofArbo_KeyType | undefined;
        voteWeight?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof ProofArbo>]: never; }>(base?: I | undefined): ProofArbo;
    fromPartial<I_1 extends {
        type?: ProofArbo_Type | undefined;
        siblings?: Uint8Array | undefined;
        availableWeight?: Uint8Array | undefined;
        keyType?: ProofArbo_KeyType | undefined;
        voteWeight?: Uint8Array | undefined;
    } & {
        type?: ProofArbo_Type | undefined;
        siblings?: Uint8Array | undefined;
        availableWeight?: Uint8Array | undefined;
        keyType?: ProofArbo_KeyType | undefined;
        voteWeight?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ProofArbo>]: never; }>(object: I_1): ProofArbo;
};
/** Groth16 zkSNARK proof + public inputs */
interface ProofZkSNARK {
    /**
     * circuitParametersIndex defines the index of the parameter set of the
     * circuit. Each process has defined a set of available parameters for
     * the same circuit, the 'parametersIndex' defines the index of the set
     * for which the ProofZkSNARK belongs for the circuit used in that
     * process.
     */
    circuitParametersIndex: number;
    /** a represents a G1 point in Affine coordinates */
    a: string[];
    /**
     * b represents a G2 point in Affine coordinates, represented by an
     * array of arrays: []string => [2][2]bigint).
     * [w, x, y, z] => [[w, x], [y, z]]
     */
    b: string[];
    /** c represents a G1 point in Affine coordinates */
    c: string[];
    publicInputs: string[];
}
declare const ProofZkSNARK: {
    encode(message: ProofZkSNARK, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProofZkSNARK;
    fromJSON(object: any): ProofZkSNARK;
    toJSON(message: ProofZkSNARK): unknown;
    create<I extends {
        circuitParametersIndex?: number | undefined;
        a?: string[] | undefined;
        b?: string[] | undefined;
        c?: string[] | undefined;
        publicInputs?: string[] | undefined;
    } & {
        circuitParametersIndex?: number | undefined;
        a?: (string[] & string[] & { [K in Exclude<keyof I["a"], keyof string[]>]: never; }) | undefined;
        b?: (string[] & string[] & { [K_1 in Exclude<keyof I["b"], keyof string[]>]: never; }) | undefined;
        c?: (string[] & string[] & { [K_2 in Exclude<keyof I["c"], keyof string[]>]: never; }) | undefined;
        publicInputs?: (string[] & string[] & { [K_3 in Exclude<keyof I["publicInputs"], keyof string[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof ProofZkSNARK>]: never; }>(base?: I | undefined): ProofZkSNARK;
    fromPartial<I_1 extends {
        circuitParametersIndex?: number | undefined;
        a?: string[] | undefined;
        b?: string[] | undefined;
        c?: string[] | undefined;
        publicInputs?: string[] | undefined;
    } & {
        circuitParametersIndex?: number | undefined;
        a?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["a"], keyof string[]>]: never; }) | undefined;
        b?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["b"], keyof string[]>]: never; }) | undefined;
        c?: (string[] & string[] & { [K_7 in Exclude<keyof I_1["c"], keyof string[]>]: never; }) | undefined;
        publicInputs?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["publicInputs"], keyof string[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof ProofZkSNARK>]: never; }>(object: I_1): ProofZkSNARK;
};
/** Account represents an entity with an amount of tokens, usually attached to an address. */
interface Account {
    balance: number;
    nonce: number;
    infoURI: string;
    delegateAddrs: Uint8Array[];
    processIndex: number;
}
declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Account;
    fromJSON(object: any): Account;
    toJSON(message: Account): unknown;
    create<I extends {
        balance?: number | undefined;
        nonce?: number | undefined;
        infoURI?: string | undefined;
        delegateAddrs?: Uint8Array[] | undefined;
        processIndex?: number | undefined;
    } & {
        balance?: number | undefined;
        nonce?: number | undefined;
        infoURI?: string | undefined;
        delegateAddrs?: (Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["delegateAddrs"], keyof Uint8Array[]>]: never; }) | undefined;
        processIndex?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Account>]: never; }>(base?: I | undefined): Account;
    fromPartial<I_1 extends {
        balance?: number | undefined;
        nonce?: number | undefined;
        infoURI?: string | undefined;
        delegateAddrs?: Uint8Array[] | undefined;
        processIndex?: number | undefined;
    } & {
        balance?: number | undefined;
        nonce?: number | undefined;
        infoURI?: string | undefined;
        delegateAddrs?: (Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I_1["delegateAddrs"], keyof Uint8Array[]>]: never; }) | undefined;
        processIndex?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Account>]: never; }>(object: I_1): Account;
};
interface Tx {
    payload?: {
        $case: "vote";
        vote: VoteEnvelope;
    } | {
        $case: "newProcess";
        newProcess: NewProcessTx;
    } | {
        $case: "admin";
        admin: AdminTx;
    } | {
        $case: "setProcess";
        setProcess: SetProcessTx;
    } | {
        $case: "registerKey";
        registerKey: RegisterKeyTx;
    } | {
        $case: "sendTokens";
        sendTokens: SendTokensTx;
    } | {
        $case: "setTransactionCosts";
        setTransactionCosts: SetTransactionCostsTx;
    } | {
        $case: "setAccount";
        setAccount: SetAccountTx;
    } | {
        $case: "collectFaucet";
        collectFaucet: CollectFaucetTx;
    } | {
        $case: "setKeykeeper";
        setKeykeeper: SetKeykeeperTx;
    } | {
        $case: "setSIK";
        setSIK: SIKTx;
    } | {
        $case: "delSIK";
        delSIK: SIKTx;
    } | {
        $case: "registerSIK";
        registerSIK: RegisterSIKTx;
    } | undefined;
}
declare const Tx: {
    encode(message: Tx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tx;
    fromJSON(object: any): Tx;
    toJSON(message: Tx): unknown;
    create<I extends {
        payload?: ({
            vote?: {
                nonce?: Uint8Array | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                votePackage?: Uint8Array | undefined;
                nullifier?: Uint8Array | undefined;
                encryptionKeyIndexes?: number[] | undefined;
                memo?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "vote";
        }) | ({
            newProcess?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                process?: {
                    processId?: Uint8Array | undefined;
                    entityId?: Uint8Array | undefined;
                    startBlock?: number | undefined;
                    blockCount?: number | undefined;
                    censusRoot?: Uint8Array | undefined;
                    censusURI?: string | undefined;
                    encryptionPrivateKeys?: string[] | undefined;
                    encryptionPublicKeys?: string[] | undefined;
                    keyIndex?: number | undefined;
                    status?: ProcessStatus | undefined;
                    paramsSignature?: Uint8Array | undefined;
                    namespace?: number | undefined;
                    envelopeType?: {
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } | undefined;
                    mode?: {
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } | undefined;
                    questionIndex?: number | undefined;
                    questionCount?: number | undefined;
                    voteOptions?: {
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } | undefined;
                    censusOrigin?: CensusOrigin | undefined;
                    results?: {
                        votes?: {
                            question?: Uint8Array[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    ethIndexSlot?: number | undefined;
                    sourceBlockHeight?: number | undefined;
                    owner?: Uint8Array | undefined;
                    metadata?: string | undefined;
                    sourceNetworkId?: SourceNetworkId | undefined;
                    maxCensusSize?: number | undefined;
                    rollingCensusRoot?: Uint8Array | undefined;
                    rollingCensusSize?: number | undefined;
                    nullifiersRoot?: Uint8Array | undefined;
                    sourceNetworkContractAddr?: Uint8Array | undefined;
                    tokenDecimals?: number | undefined;
                    tempSIKs?: boolean | undefined;
                    startTime?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "newProcess";
        }) | ({
            admin?: {
                txtype?: TxType | undefined;
                processId?: Uint8Array | undefined;
                address?: Uint8Array | undefined;
                encryptionPrivateKey?: Uint8Array | undefined;
                encryptionPublicKey?: Uint8Array | undefined;
                keyIndex?: number | undefined;
                power?: number | undefined;
                publicKey?: Uint8Array | undefined;
                nonce?: number | undefined;
            } | undefined;
        } & {
            $case: "admin";
        }) | ({
            setProcess?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                status?: ProcessStatus | undefined;
                questionIndex?: number | undefined;
                censusRoot?: Uint8Array | undefined;
                censusURI?: string | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                results?: {
                    votes?: {
                        question?: Uint8Array[] | undefined;
                    }[] | undefined;
                } | undefined;
                tempSIKs?: boolean | undefined;
                duration?: number | undefined;
                censusSize?: number | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "setProcess";
        }) | ({
            registerKey?: {
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                newKey?: Uint8Array | undefined;
                weight?: string | undefined;
            } | undefined;
        } & {
            $case: "registerKey";
        }) | ({
            sendTokens?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                from?: Uint8Array | undefined;
                to?: Uint8Array | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            $case: "sendTokens";
        }) | ({
            setTransactionCosts?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            $case: "setTransactionCosts";
        }) | ({
            setAccount?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                infoURI?: string | undefined;
                account?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                delegates?: Uint8Array[] | undefined;
                SIK?: Uint8Array | undefined;
                publicKey?: Uint8Array | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            $case: "setAccount";
        }) | ({
            collectFaucet?: {
                txType?: TxType | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                nonce?: number | undefined;
            } | undefined;
        } & {
            $case: "collectFaucet";
        }) | ({
            setKeykeeper?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                keykeeper?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "setKeykeeper";
        }) | ({
            setSIK?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "setSIK";
        }) | ({
            delSIK?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "delSIK";
        }) | ({
            registerSIK?: {
                electionId?: Uint8Array | undefined;
                censusProof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                SIK?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "registerSIK";
        }) | undefined;
    } & {
        payload?: ({
            vote?: {
                nonce?: Uint8Array | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                votePackage?: Uint8Array | undefined;
                nullifier?: Uint8Array | undefined;
                encryptionKeyIndexes?: number[] | undefined;
                memo?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "vote";
        } & {
            vote?: ({
                nonce?: Uint8Array | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                votePackage?: Uint8Array | undefined;
                nullifier?: Uint8Array | undefined;
                encryptionKeyIndexes?: number[] | undefined;
                memo?: Uint8Array | undefined;
            } & {
                nonce?: Uint8Array | undefined;
                processId?: Uint8Array | undefined;
                proof?: ({
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } & {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    } & {
                        ca?: ({
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: ProofCA_Type | undefined;
                            bundle?: ({
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & { [K in Exclude<keyof I["payload"]["vote"]["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_1 in Exclude<keyof I["payload"]["vote"]["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                        $case: "ca";
                    } & { [K_2 in Exclude<keyof I["payload"]["vote"]["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    } & {
                        arbo?: ({
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & { [K_3 in Exclude<keyof I["payload"]["vote"]["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                        $case: "arbo";
                    } & { [K_4 in Exclude<keyof I["payload"]["vote"]["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    } & {
                        zkSnark?: ({
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } & {
                            circuitParametersIndex?: number | undefined;
                            a?: (string[] & string[] & { [K_5 in Exclude<keyof I["payload"]["vote"]["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                            b?: (string[] & string[] & { [K_6 in Exclude<keyof I["payload"]["vote"]["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                            c?: (string[] & string[] & { [K_7 in Exclude<keyof I["payload"]["vote"]["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                            publicInputs?: (string[] & string[] & { [K_8 in Exclude<keyof I["payload"]["vote"]["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                        } & { [K_9 in Exclude<keyof I["payload"]["vote"]["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                        $case: "zkSnark";
                    } & { [K_10 in Exclude<keyof I["payload"]["vote"]["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I["payload"]["vote"]["proof"], "payload">]: never; }) | undefined;
                votePackage?: Uint8Array | undefined;
                nullifier?: Uint8Array | undefined;
                encryptionKeyIndexes?: (number[] & number[] & { [K_12 in Exclude<keyof I["payload"]["vote"]["encryptionKeyIndexes"], keyof number[]>]: never; }) | undefined;
                memo?: Uint8Array | undefined;
            } & { [K_13 in Exclude<keyof I["payload"]["vote"], keyof VoteEnvelope>]: never; }) | undefined;
            $case: "vote";
        } & { [K_14 in Exclude<keyof I["payload"], "$case" | "vote">]: never; }) | ({
            newProcess?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                process?: {
                    processId?: Uint8Array | undefined;
                    entityId?: Uint8Array | undefined;
                    startBlock?: number | undefined;
                    blockCount?: number | undefined;
                    censusRoot?: Uint8Array | undefined;
                    censusURI?: string | undefined;
                    encryptionPrivateKeys?: string[] | undefined;
                    encryptionPublicKeys?: string[] | undefined;
                    keyIndex?: number | undefined;
                    status?: ProcessStatus | undefined;
                    paramsSignature?: Uint8Array | undefined;
                    namespace?: number | undefined;
                    envelopeType?: {
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } | undefined;
                    mode?: {
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } | undefined;
                    questionIndex?: number | undefined;
                    questionCount?: number | undefined;
                    voteOptions?: {
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } | undefined;
                    censusOrigin?: CensusOrigin | undefined;
                    results?: {
                        votes?: {
                            question?: Uint8Array[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    ethIndexSlot?: number | undefined;
                    sourceBlockHeight?: number | undefined;
                    owner?: Uint8Array | undefined;
                    metadata?: string | undefined;
                    sourceNetworkId?: SourceNetworkId | undefined;
                    maxCensusSize?: number | undefined;
                    rollingCensusRoot?: Uint8Array | undefined;
                    rollingCensusSize?: number | undefined;
                    nullifiersRoot?: Uint8Array | undefined;
                    sourceNetworkContractAddr?: Uint8Array | undefined;
                    tokenDecimals?: number | undefined;
                    tempSIKs?: boolean | undefined;
                    startTime?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "newProcess";
        } & {
            newProcess?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                process?: {
                    processId?: Uint8Array | undefined;
                    entityId?: Uint8Array | undefined;
                    startBlock?: number | undefined;
                    blockCount?: number | undefined;
                    censusRoot?: Uint8Array | undefined;
                    censusURI?: string | undefined;
                    encryptionPrivateKeys?: string[] | undefined;
                    encryptionPublicKeys?: string[] | undefined;
                    keyIndex?: number | undefined;
                    status?: ProcessStatus | undefined;
                    paramsSignature?: Uint8Array | undefined;
                    namespace?: number | undefined;
                    envelopeType?: {
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } | undefined;
                    mode?: {
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } | undefined;
                    questionIndex?: number | undefined;
                    questionCount?: number | undefined;
                    voteOptions?: {
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } | undefined;
                    censusOrigin?: CensusOrigin | undefined;
                    results?: {
                        votes?: {
                            question?: Uint8Array[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    ethIndexSlot?: number | undefined;
                    sourceBlockHeight?: number | undefined;
                    owner?: Uint8Array | undefined;
                    metadata?: string | undefined;
                    sourceNetworkId?: SourceNetworkId | undefined;
                    maxCensusSize?: number | undefined;
                    rollingCensusRoot?: Uint8Array | undefined;
                    rollingCensusSize?: number | undefined;
                    nullifiersRoot?: Uint8Array | undefined;
                    sourceNetworkContractAddr?: Uint8Array | undefined;
                    tokenDecimals?: number | undefined;
                    tempSIKs?: boolean | undefined;
                    startTime?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                process?: ({
                    processId?: Uint8Array | undefined;
                    entityId?: Uint8Array | undefined;
                    startBlock?: number | undefined;
                    blockCount?: number | undefined;
                    censusRoot?: Uint8Array | undefined;
                    censusURI?: string | undefined;
                    encryptionPrivateKeys?: string[] | undefined;
                    encryptionPublicKeys?: string[] | undefined;
                    keyIndex?: number | undefined;
                    status?: ProcessStatus | undefined;
                    paramsSignature?: Uint8Array | undefined;
                    namespace?: number | undefined;
                    envelopeType?: {
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } | undefined;
                    mode?: {
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } | undefined;
                    questionIndex?: number | undefined;
                    questionCount?: number | undefined;
                    voteOptions?: {
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } | undefined;
                    censusOrigin?: CensusOrigin | undefined;
                    results?: {
                        votes?: {
                            question?: Uint8Array[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    ethIndexSlot?: number | undefined;
                    sourceBlockHeight?: number | undefined;
                    owner?: Uint8Array | undefined;
                    metadata?: string | undefined;
                    sourceNetworkId?: SourceNetworkId | undefined;
                    maxCensusSize?: number | undefined;
                    rollingCensusRoot?: Uint8Array | undefined;
                    rollingCensusSize?: number | undefined;
                    nullifiersRoot?: Uint8Array | undefined;
                    sourceNetworkContractAddr?: Uint8Array | undefined;
                    tokenDecimals?: number | undefined;
                    tempSIKs?: boolean | undefined;
                    startTime?: number | undefined;
                    duration?: number | undefined;
                } & {
                    processId?: Uint8Array | undefined;
                    entityId?: Uint8Array | undefined;
                    startBlock?: number | undefined;
                    blockCount?: number | undefined;
                    censusRoot?: Uint8Array | undefined;
                    censusURI?: string | undefined;
                    encryptionPrivateKeys?: (string[] & string[] & { [K_15 in Exclude<keyof I["payload"]["newProcess"]["process"]["encryptionPrivateKeys"], keyof string[]>]: never; }) | undefined;
                    encryptionPublicKeys?: (string[] & string[] & { [K_16 in Exclude<keyof I["payload"]["newProcess"]["process"]["encryptionPublicKeys"], keyof string[]>]: never; }) | undefined;
                    keyIndex?: number | undefined;
                    status?: ProcessStatus | undefined;
                    paramsSignature?: Uint8Array | undefined;
                    namespace?: number | undefined;
                    envelopeType?: ({
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } & {
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } & { [K_17 in Exclude<keyof I["payload"]["newProcess"]["process"]["envelopeType"], keyof EnvelopeType>]: never; }) | undefined;
                    mode?: ({
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } & {
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } & { [K_18 in Exclude<keyof I["payload"]["newProcess"]["process"]["mode"], keyof ProcessMode>]: never; }) | undefined;
                    questionIndex?: number | undefined;
                    questionCount?: number | undefined;
                    voteOptions?: ({
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } & {
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } & { [K_19 in Exclude<keyof I["payload"]["newProcess"]["process"]["voteOptions"], keyof ProcessVoteOptions>]: never; }) | undefined;
                    censusOrigin?: CensusOrigin | undefined;
                    results?: ({
                        votes?: {
                            question?: Uint8Array[] | undefined;
                        }[] | undefined;
                    } & {
                        votes?: ({
                            question?: Uint8Array[] | undefined;
                        }[] & ({
                            question?: Uint8Array[] | undefined;
                        } & {
                            question?: (Uint8Array[] & Uint8Array[] & { [K_20 in Exclude<keyof I["payload"]["newProcess"]["process"]["results"]["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
                        } & { [K_21 in Exclude<keyof I["payload"]["newProcess"]["process"]["results"]["votes"][number], "question">]: never; })[] & { [K_22 in Exclude<keyof I["payload"]["newProcess"]["process"]["results"]["votes"], keyof {
                            question?: Uint8Array[] | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_23 in Exclude<keyof I["payload"]["newProcess"]["process"]["results"], "votes">]: never; }) | undefined;
                    ethIndexSlot?: number | undefined;
                    sourceBlockHeight?: number | undefined;
                    owner?: Uint8Array | undefined;
                    metadata?: string | undefined;
                    sourceNetworkId?: SourceNetworkId | undefined;
                    maxCensusSize?: number | undefined;
                    rollingCensusRoot?: Uint8Array | undefined;
                    rollingCensusSize?: number | undefined;
                    nullifiersRoot?: Uint8Array | undefined;
                    sourceNetworkContractAddr?: Uint8Array | undefined;
                    tokenDecimals?: number | undefined;
                    tempSIKs?: boolean | undefined;
                    startTime?: number | undefined;
                    duration?: number | undefined;
                } & { [K_24 in Exclude<keyof I["payload"]["newProcess"]["process"], keyof Process>]: never; }) | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_25 in Exclude<keyof I["payload"]["newProcess"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
            } & { [K_26 in Exclude<keyof I["payload"]["newProcess"], keyof NewProcessTx>]: never; }) | undefined;
            $case: "newProcess";
        } & { [K_27 in Exclude<keyof I["payload"], "$case" | "newProcess">]: never; }) | ({
            admin?: {
                txtype?: TxType | undefined;
                processId?: Uint8Array | undefined;
                address?: Uint8Array | undefined;
                encryptionPrivateKey?: Uint8Array | undefined;
                encryptionPublicKey?: Uint8Array | undefined;
                keyIndex?: number | undefined;
                power?: number | undefined;
                publicKey?: Uint8Array | undefined;
                nonce?: number | undefined;
            } | undefined;
        } & {
            $case: "admin";
        } & {
            admin?: ({
                txtype?: TxType | undefined;
                processId?: Uint8Array | undefined;
                address?: Uint8Array | undefined;
                encryptionPrivateKey?: Uint8Array | undefined;
                encryptionPublicKey?: Uint8Array | undefined;
                keyIndex?: number | undefined;
                power?: number | undefined;
                publicKey?: Uint8Array | undefined;
                nonce?: number | undefined;
            } & {
                txtype?: TxType | undefined;
                processId?: Uint8Array | undefined;
                address?: Uint8Array | undefined;
                encryptionPrivateKey?: Uint8Array | undefined;
                encryptionPublicKey?: Uint8Array | undefined;
                keyIndex?: number | undefined;
                power?: number | undefined;
                publicKey?: Uint8Array | undefined;
                nonce?: number | undefined;
            } & { [K_28 in Exclude<keyof I["payload"]["admin"], keyof AdminTx>]: never; }) | undefined;
            $case: "admin";
        } & { [K_29 in Exclude<keyof I["payload"], "$case" | "admin">]: never; }) | ({
            setProcess?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                status?: ProcessStatus | undefined;
                questionIndex?: number | undefined;
                censusRoot?: Uint8Array | undefined;
                censusURI?: string | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                results?: {
                    votes?: {
                        question?: Uint8Array[] | undefined;
                    }[] | undefined;
                } | undefined;
                tempSIKs?: boolean | undefined;
                duration?: number | undefined;
                censusSize?: number | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "setProcess";
        } & {
            setProcess?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                status?: ProcessStatus | undefined;
                questionIndex?: number | undefined;
                censusRoot?: Uint8Array | undefined;
                censusURI?: string | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                results?: {
                    votes?: {
                        question?: Uint8Array[] | undefined;
                    }[] | undefined;
                } | undefined;
                tempSIKs?: boolean | undefined;
                duration?: number | undefined;
                censusSize?: number | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                status?: ProcessStatus | undefined;
                questionIndex?: number | undefined;
                censusRoot?: Uint8Array | undefined;
                censusURI?: string | undefined;
                proof?: ({
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } & {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    } & {
                        ca?: ({
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: ProofCA_Type | undefined;
                            bundle?: ({
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & { [K_30 in Exclude<keyof I["payload"]["setProcess"]["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_31 in Exclude<keyof I["payload"]["setProcess"]["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                        $case: "ca";
                    } & { [K_32 in Exclude<keyof I["payload"]["setProcess"]["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    } & {
                        arbo?: ({
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & { [K_33 in Exclude<keyof I["payload"]["setProcess"]["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                        $case: "arbo";
                    } & { [K_34 in Exclude<keyof I["payload"]["setProcess"]["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    } & {
                        zkSnark?: ({
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } & {
                            circuitParametersIndex?: number | undefined;
                            a?: (string[] & string[] & { [K_35 in Exclude<keyof I["payload"]["setProcess"]["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                            b?: (string[] & string[] & { [K_36 in Exclude<keyof I["payload"]["setProcess"]["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                            c?: (string[] & string[] & { [K_37 in Exclude<keyof I["payload"]["setProcess"]["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                            publicInputs?: (string[] & string[] & { [K_38 in Exclude<keyof I["payload"]["setProcess"]["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                        } & { [K_39 in Exclude<keyof I["payload"]["setProcess"]["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                        $case: "zkSnark";
                    } & { [K_40 in Exclude<keyof I["payload"]["setProcess"]["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
                } & { [K_41 in Exclude<keyof I["payload"]["setProcess"]["proof"], "payload">]: never; }) | undefined;
                results?: ({
                    votes?: {
                        question?: Uint8Array[] | undefined;
                    }[] | undefined;
                } & {
                    votes?: ({
                        question?: Uint8Array[] | undefined;
                    }[] & ({
                        question?: Uint8Array[] | undefined;
                    } & {
                        question?: (Uint8Array[] & Uint8Array[] & { [K_42 in Exclude<keyof I["payload"]["setProcess"]["results"]["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
                    } & { [K_43 in Exclude<keyof I["payload"]["setProcess"]["results"]["votes"][number], "question">]: never; })[] & { [K_44 in Exclude<keyof I["payload"]["setProcess"]["results"]["votes"], keyof {
                        question?: Uint8Array[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_45 in Exclude<keyof I["payload"]["setProcess"]["results"], "votes">]: never; }) | undefined;
                tempSIKs?: boolean | undefined;
                duration?: number | undefined;
                censusSize?: number | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_46 in Exclude<keyof I["payload"]["setProcess"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
            } & { [K_47 in Exclude<keyof I["payload"]["setProcess"], keyof SetProcessTx>]: never; }) | undefined;
            $case: "setProcess";
        } & { [K_48 in Exclude<keyof I["payload"], "$case" | "setProcess">]: never; }) | ({
            registerKey?: {
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                newKey?: Uint8Array | undefined;
                weight?: string | undefined;
            } | undefined;
        } & {
            $case: "registerKey";
        } & {
            registerKey?: ({
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                newKey?: Uint8Array | undefined;
                weight?: string | undefined;
            } & {
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                proof?: ({
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } & {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    } & {
                        ca?: ({
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: ProofCA_Type | undefined;
                            bundle?: ({
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & { [K_49 in Exclude<keyof I["payload"]["registerKey"]["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_50 in Exclude<keyof I["payload"]["registerKey"]["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                        $case: "ca";
                    } & { [K_51 in Exclude<keyof I["payload"]["registerKey"]["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    } & {
                        arbo?: ({
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & { [K_52 in Exclude<keyof I["payload"]["registerKey"]["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                        $case: "arbo";
                    } & { [K_53 in Exclude<keyof I["payload"]["registerKey"]["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    } & {
                        zkSnark?: ({
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } & {
                            circuitParametersIndex?: number | undefined;
                            a?: (string[] & string[] & { [K_54 in Exclude<keyof I["payload"]["registerKey"]["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                            b?: (string[] & string[] & { [K_55 in Exclude<keyof I["payload"]["registerKey"]["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                            c?: (string[] & string[] & { [K_56 in Exclude<keyof I["payload"]["registerKey"]["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                            publicInputs?: (string[] & string[] & { [K_57 in Exclude<keyof I["payload"]["registerKey"]["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                        } & { [K_58 in Exclude<keyof I["payload"]["registerKey"]["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                        $case: "zkSnark";
                    } & { [K_59 in Exclude<keyof I["payload"]["registerKey"]["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
                } & { [K_60 in Exclude<keyof I["payload"]["registerKey"]["proof"], "payload">]: never; }) | undefined;
                newKey?: Uint8Array | undefined;
                weight?: string | undefined;
            } & { [K_61 in Exclude<keyof I["payload"]["registerKey"], keyof RegisterKeyTx>]: never; }) | undefined;
            $case: "registerKey";
        } & { [K_62 in Exclude<keyof I["payload"], "$case" | "registerKey">]: never; }) | ({
            sendTokens?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                from?: Uint8Array | undefined;
                to?: Uint8Array | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            $case: "sendTokens";
        } & {
            sendTokens?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                from?: Uint8Array | undefined;
                to?: Uint8Array | undefined;
                value?: number | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                from?: Uint8Array | undefined;
                to?: Uint8Array | undefined;
                value?: number | undefined;
            } & { [K_63 in Exclude<keyof I["payload"]["sendTokens"], keyof SendTokensTx>]: never; }) | undefined;
            $case: "sendTokens";
        } & { [K_64 in Exclude<keyof I["payload"], "$case" | "sendTokens">]: never; }) | ({
            setTransactionCosts?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            $case: "setTransactionCosts";
        } & {
            setTransactionCosts?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                value?: number | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                value?: number | undefined;
            } & { [K_65 in Exclude<keyof I["payload"]["setTransactionCosts"], keyof SetTransactionCostsTx>]: never; }) | undefined;
            $case: "setTransactionCosts";
        } & { [K_66 in Exclude<keyof I["payload"], "$case" | "setTransactionCosts">]: never; }) | ({
            setAccount?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                infoURI?: string | undefined;
                account?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                delegates?: Uint8Array[] | undefined;
                SIK?: Uint8Array | undefined;
                publicKey?: Uint8Array | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            $case: "setAccount";
        } & {
            setAccount?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                infoURI?: string | undefined;
                account?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                delegates?: Uint8Array[] | undefined;
                SIK?: Uint8Array | undefined;
                publicKey?: Uint8Array | undefined;
                name?: string | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                infoURI?: string | undefined;
                account?: Uint8Array | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_67 in Exclude<keyof I["payload"]["setAccount"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
                delegates?: (Uint8Array[] & Uint8Array[] & { [K_68 in Exclude<keyof I["payload"]["setAccount"]["delegates"], keyof Uint8Array[]>]: never; }) | undefined;
                SIK?: Uint8Array | undefined;
                publicKey?: Uint8Array | undefined;
                name?: string | undefined;
            } & { [K_69 in Exclude<keyof I["payload"]["setAccount"], keyof SetAccountTx>]: never; }) | undefined;
            $case: "setAccount";
        } & { [K_70 in Exclude<keyof I["payload"], "$case" | "setAccount">]: never; }) | ({
            collectFaucet?: {
                txType?: TxType | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                nonce?: number | undefined;
            } | undefined;
        } & {
            $case: "collectFaucet";
        } & {
            collectFaucet?: ({
                txType?: TxType | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                nonce?: number | undefined;
            } & {
                txType?: TxType | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_71 in Exclude<keyof I["payload"]["collectFaucet"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
                nonce?: number | undefined;
            } & { [K_72 in Exclude<keyof I["payload"]["collectFaucet"], keyof CollectFaucetTx>]: never; }) | undefined;
            $case: "collectFaucet";
        } & { [K_73 in Exclude<keyof I["payload"], "$case" | "collectFaucet">]: never; }) | ({
            setKeykeeper?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                keykeeper?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "setKeykeeper";
        } & {
            setKeykeeper?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                keykeeper?: Uint8Array | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                keykeeper?: Uint8Array | undefined;
            } & { [K_74 in Exclude<keyof I["payload"]["setKeykeeper"], keyof SetKeykeeperTx>]: never; }) | undefined;
            $case: "setKeykeeper";
        } & { [K_75 in Exclude<keyof I["payload"], "$case" | "setKeykeeper">]: never; }) | ({
            setSIK?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "setSIK";
        } & {
            setSIK?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_76 in Exclude<keyof I["payload"]["setSIK"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
            } & { [K_77 in Exclude<keyof I["payload"]["setSIK"], keyof SIKTx>]: never; }) | undefined;
            $case: "setSIK";
        } & { [K_78 in Exclude<keyof I["payload"], "$case" | "setSIK">]: never; }) | ({
            delSIK?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "delSIK";
        } & {
            delSIK?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_79 in Exclude<keyof I["payload"]["delSIK"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
            } & { [K_80 in Exclude<keyof I["payload"]["delSIK"], keyof SIKTx>]: never; }) | undefined;
            $case: "delSIK";
        } & { [K_81 in Exclude<keyof I["payload"], "$case" | "delSIK">]: never; }) | ({
            registerSIK?: {
                electionId?: Uint8Array | undefined;
                censusProof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                SIK?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "registerSIK";
        } & {
            registerSIK?: ({
                electionId?: Uint8Array | undefined;
                censusProof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                SIK?: Uint8Array | undefined;
            } & {
                electionId?: Uint8Array | undefined;
                censusProof?: ({
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } & {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    } & {
                        ca?: ({
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: ProofCA_Type | undefined;
                            bundle?: ({
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & { [K_82 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_83 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                        $case: "ca";
                    } & { [K_84 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"]["payload"], "$case" | "ca">]: never; }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    } & {
                        arbo?: ({
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & { [K_85 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                        $case: "arbo";
                    } & { [K_86 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"]["payload"], "$case" | "arbo">]: never; }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    } & {
                        zkSnark?: ({
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } & {
                            circuitParametersIndex?: number | undefined;
                            a?: (string[] & string[] & { [K_87 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                            b?: (string[] & string[] & { [K_88 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                            c?: (string[] & string[] & { [K_89 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                            publicInputs?: (string[] & string[] & { [K_90 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                        } & { [K_91 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                        $case: "zkSnark";
                    } & { [K_92 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
                } & { [K_93 in Exclude<keyof I["payload"]["registerSIK"]["censusProof"], "payload">]: never; }) | undefined;
                SIK?: Uint8Array | undefined;
            } & { [K_94 in Exclude<keyof I["payload"]["registerSIK"], keyof RegisterSIKTx>]: never; }) | undefined;
            $case: "registerSIK";
        } & { [K_95 in Exclude<keyof I["payload"], "$case" | "registerSIK">]: never; }) | undefined;
    } & { [K_96 in Exclude<keyof I, "payload">]: never; }>(base?: I | undefined): Tx;
    fromPartial<I_1 extends {
        payload?: ({
            vote?: {
                nonce?: Uint8Array | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                votePackage?: Uint8Array | undefined;
                nullifier?: Uint8Array | undefined;
                encryptionKeyIndexes?: number[] | undefined;
                memo?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "vote";
        }) | ({
            newProcess?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                process?: {
                    processId?: Uint8Array | undefined;
                    entityId?: Uint8Array | undefined;
                    startBlock?: number | undefined;
                    blockCount?: number | undefined;
                    censusRoot?: Uint8Array | undefined;
                    censusURI?: string | undefined;
                    encryptionPrivateKeys?: string[] | undefined;
                    encryptionPublicKeys?: string[] | undefined;
                    keyIndex?: number | undefined;
                    status?: ProcessStatus | undefined;
                    paramsSignature?: Uint8Array | undefined;
                    namespace?: number | undefined;
                    envelopeType?: {
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } | undefined;
                    mode?: {
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } | undefined;
                    questionIndex?: number | undefined;
                    questionCount?: number | undefined;
                    voteOptions?: {
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } | undefined;
                    censusOrigin?: CensusOrigin | undefined;
                    results?: {
                        votes?: {
                            question?: Uint8Array[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    ethIndexSlot?: number | undefined;
                    sourceBlockHeight?: number | undefined;
                    owner?: Uint8Array | undefined;
                    metadata?: string | undefined;
                    sourceNetworkId?: SourceNetworkId | undefined;
                    maxCensusSize?: number | undefined;
                    rollingCensusRoot?: Uint8Array | undefined;
                    rollingCensusSize?: number | undefined;
                    nullifiersRoot?: Uint8Array | undefined;
                    sourceNetworkContractAddr?: Uint8Array | undefined;
                    tokenDecimals?: number | undefined;
                    tempSIKs?: boolean | undefined;
                    startTime?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "newProcess";
        }) | ({
            admin?: {
                txtype?: TxType | undefined;
                processId?: Uint8Array | undefined;
                address?: Uint8Array | undefined;
                encryptionPrivateKey?: Uint8Array | undefined;
                encryptionPublicKey?: Uint8Array | undefined;
                keyIndex?: number | undefined;
                power?: number | undefined;
                publicKey?: Uint8Array | undefined;
                nonce?: number | undefined;
            } | undefined;
        } & {
            $case: "admin";
        }) | ({
            setProcess?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                status?: ProcessStatus | undefined;
                questionIndex?: number | undefined;
                censusRoot?: Uint8Array | undefined;
                censusURI?: string | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                results?: {
                    votes?: {
                        question?: Uint8Array[] | undefined;
                    }[] | undefined;
                } | undefined;
                tempSIKs?: boolean | undefined;
                duration?: number | undefined;
                censusSize?: number | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "setProcess";
        }) | ({
            registerKey?: {
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                newKey?: Uint8Array | undefined;
                weight?: string | undefined;
            } | undefined;
        } & {
            $case: "registerKey";
        }) | ({
            sendTokens?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                from?: Uint8Array | undefined;
                to?: Uint8Array | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            $case: "sendTokens";
        }) | ({
            setTransactionCosts?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            $case: "setTransactionCosts";
        }) | ({
            setAccount?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                infoURI?: string | undefined;
                account?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                delegates?: Uint8Array[] | undefined;
                SIK?: Uint8Array | undefined;
                publicKey?: Uint8Array | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            $case: "setAccount";
        }) | ({
            collectFaucet?: {
                txType?: TxType | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                nonce?: number | undefined;
            } | undefined;
        } & {
            $case: "collectFaucet";
        }) | ({
            setKeykeeper?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                keykeeper?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "setKeykeeper";
        }) | ({
            setSIK?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "setSIK";
        }) | ({
            delSIK?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "delSIK";
        }) | ({
            registerSIK?: {
                electionId?: Uint8Array | undefined;
                censusProof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                SIK?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "registerSIK";
        }) | undefined;
    } & {
        payload?: ({
            vote?: {
                nonce?: Uint8Array | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                votePackage?: Uint8Array | undefined;
                nullifier?: Uint8Array | undefined;
                encryptionKeyIndexes?: number[] | undefined;
                memo?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "vote";
        } & {
            vote?: ({
                nonce?: Uint8Array | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                votePackage?: Uint8Array | undefined;
                nullifier?: Uint8Array | undefined;
                encryptionKeyIndexes?: number[] | undefined;
                memo?: Uint8Array | undefined;
            } & {
                nonce?: Uint8Array | undefined;
                processId?: Uint8Array | undefined;
                proof?: ({
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } & {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    } & {
                        ca?: ({
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: ProofCA_Type | undefined;
                            bundle?: ({
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & { [K_97 in Exclude<keyof I_1["payload"]["vote"]["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_98 in Exclude<keyof I_1["payload"]["vote"]["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                        $case: "ca";
                    } & { [K_99 in Exclude<keyof I_1["payload"]["vote"]["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    } & {
                        arbo?: ({
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & { [K_100 in Exclude<keyof I_1["payload"]["vote"]["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                        $case: "arbo";
                    } & { [K_101 in Exclude<keyof I_1["payload"]["vote"]["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    } & {
                        zkSnark?: ({
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } & {
                            circuitParametersIndex?: number | undefined;
                            a?: (string[] & string[] & { [K_102 in Exclude<keyof I_1["payload"]["vote"]["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                            b?: (string[] & string[] & { [K_103 in Exclude<keyof I_1["payload"]["vote"]["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                            c?: (string[] & string[] & { [K_104 in Exclude<keyof I_1["payload"]["vote"]["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                            publicInputs?: (string[] & string[] & { [K_105 in Exclude<keyof I_1["payload"]["vote"]["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                        } & { [K_106 in Exclude<keyof I_1["payload"]["vote"]["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                        $case: "zkSnark";
                    } & { [K_107 in Exclude<keyof I_1["payload"]["vote"]["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
                } & { [K_108 in Exclude<keyof I_1["payload"]["vote"]["proof"], "payload">]: never; }) | undefined;
                votePackage?: Uint8Array | undefined;
                nullifier?: Uint8Array | undefined;
                encryptionKeyIndexes?: (number[] & number[] & { [K_109 in Exclude<keyof I_1["payload"]["vote"]["encryptionKeyIndexes"], keyof number[]>]: never; }) | undefined;
                memo?: Uint8Array | undefined;
            } & { [K_110 in Exclude<keyof I_1["payload"]["vote"], keyof VoteEnvelope>]: never; }) | undefined;
            $case: "vote";
        } & { [K_111 in Exclude<keyof I_1["payload"], "$case" | "vote">]: never; }) | ({
            newProcess?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                process?: {
                    processId?: Uint8Array | undefined;
                    entityId?: Uint8Array | undefined;
                    startBlock?: number | undefined;
                    blockCount?: number | undefined;
                    censusRoot?: Uint8Array | undefined;
                    censusURI?: string | undefined;
                    encryptionPrivateKeys?: string[] | undefined;
                    encryptionPublicKeys?: string[] | undefined;
                    keyIndex?: number | undefined;
                    status?: ProcessStatus | undefined;
                    paramsSignature?: Uint8Array | undefined;
                    namespace?: number | undefined;
                    envelopeType?: {
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } | undefined;
                    mode?: {
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } | undefined;
                    questionIndex?: number | undefined;
                    questionCount?: number | undefined;
                    voteOptions?: {
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } | undefined;
                    censusOrigin?: CensusOrigin | undefined;
                    results?: {
                        votes?: {
                            question?: Uint8Array[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    ethIndexSlot?: number | undefined;
                    sourceBlockHeight?: number | undefined;
                    owner?: Uint8Array | undefined;
                    metadata?: string | undefined;
                    sourceNetworkId?: SourceNetworkId | undefined;
                    maxCensusSize?: number | undefined;
                    rollingCensusRoot?: Uint8Array | undefined;
                    rollingCensusSize?: number | undefined;
                    nullifiersRoot?: Uint8Array | undefined;
                    sourceNetworkContractAddr?: Uint8Array | undefined;
                    tokenDecimals?: number | undefined;
                    tempSIKs?: boolean | undefined;
                    startTime?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "newProcess";
        } & {
            newProcess?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                process?: {
                    processId?: Uint8Array | undefined;
                    entityId?: Uint8Array | undefined;
                    startBlock?: number | undefined;
                    blockCount?: number | undefined;
                    censusRoot?: Uint8Array | undefined;
                    censusURI?: string | undefined;
                    encryptionPrivateKeys?: string[] | undefined;
                    encryptionPublicKeys?: string[] | undefined;
                    keyIndex?: number | undefined;
                    status?: ProcessStatus | undefined;
                    paramsSignature?: Uint8Array | undefined;
                    namespace?: number | undefined;
                    envelopeType?: {
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } | undefined;
                    mode?: {
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } | undefined;
                    questionIndex?: number | undefined;
                    questionCount?: number | undefined;
                    voteOptions?: {
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } | undefined;
                    censusOrigin?: CensusOrigin | undefined;
                    results?: {
                        votes?: {
                            question?: Uint8Array[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    ethIndexSlot?: number | undefined;
                    sourceBlockHeight?: number | undefined;
                    owner?: Uint8Array | undefined;
                    metadata?: string | undefined;
                    sourceNetworkId?: SourceNetworkId | undefined;
                    maxCensusSize?: number | undefined;
                    rollingCensusRoot?: Uint8Array | undefined;
                    rollingCensusSize?: number | undefined;
                    nullifiersRoot?: Uint8Array | undefined;
                    sourceNetworkContractAddr?: Uint8Array | undefined;
                    tokenDecimals?: number | undefined;
                    tempSIKs?: boolean | undefined;
                    startTime?: number | undefined;
                    duration?: number | undefined;
                } | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                process?: ({
                    processId?: Uint8Array | undefined;
                    entityId?: Uint8Array | undefined;
                    startBlock?: number | undefined;
                    blockCount?: number | undefined;
                    censusRoot?: Uint8Array | undefined;
                    censusURI?: string | undefined;
                    encryptionPrivateKeys?: string[] | undefined;
                    encryptionPublicKeys?: string[] | undefined;
                    keyIndex?: number | undefined;
                    status?: ProcessStatus | undefined;
                    paramsSignature?: Uint8Array | undefined;
                    namespace?: number | undefined;
                    envelopeType?: {
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } | undefined;
                    mode?: {
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } | undefined;
                    questionIndex?: number | undefined;
                    questionCount?: number | undefined;
                    voteOptions?: {
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } | undefined;
                    censusOrigin?: CensusOrigin | undefined;
                    results?: {
                        votes?: {
                            question?: Uint8Array[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    ethIndexSlot?: number | undefined;
                    sourceBlockHeight?: number | undefined;
                    owner?: Uint8Array | undefined;
                    metadata?: string | undefined;
                    sourceNetworkId?: SourceNetworkId | undefined;
                    maxCensusSize?: number | undefined;
                    rollingCensusRoot?: Uint8Array | undefined;
                    rollingCensusSize?: number | undefined;
                    nullifiersRoot?: Uint8Array | undefined;
                    sourceNetworkContractAddr?: Uint8Array | undefined;
                    tokenDecimals?: number | undefined;
                    tempSIKs?: boolean | undefined;
                    startTime?: number | undefined;
                    duration?: number | undefined;
                } & {
                    processId?: Uint8Array | undefined;
                    entityId?: Uint8Array | undefined;
                    startBlock?: number | undefined;
                    blockCount?: number | undefined;
                    censusRoot?: Uint8Array | undefined;
                    censusURI?: string | undefined;
                    encryptionPrivateKeys?: (string[] & string[] & { [K_112 in Exclude<keyof I_1["payload"]["newProcess"]["process"]["encryptionPrivateKeys"], keyof string[]>]: never; }) | undefined;
                    encryptionPublicKeys?: (string[] & string[] & { [K_113 in Exclude<keyof I_1["payload"]["newProcess"]["process"]["encryptionPublicKeys"], keyof string[]>]: never; }) | undefined;
                    keyIndex?: number | undefined;
                    status?: ProcessStatus | undefined;
                    paramsSignature?: Uint8Array | undefined;
                    namespace?: number | undefined;
                    envelopeType?: ({
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } & {
                        serial?: boolean | undefined;
                        anonymous?: boolean | undefined;
                        encryptedVotes?: boolean | undefined;
                        uniqueValues?: boolean | undefined;
                        costFromWeight?: boolean | undefined;
                    } & { [K_114 in Exclude<keyof I_1["payload"]["newProcess"]["process"]["envelopeType"], keyof EnvelopeType>]: never; }) | undefined;
                    mode?: ({
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } & {
                        autoStart?: boolean | undefined;
                        interruptible?: boolean | undefined;
                        dynamicCensus?: boolean | undefined;
                        encryptedMetaData?: boolean | undefined;
                        preRegister?: boolean | undefined;
                    } & { [K_115 in Exclude<keyof I_1["payload"]["newProcess"]["process"]["mode"], keyof ProcessMode>]: never; }) | undefined;
                    questionIndex?: number | undefined;
                    questionCount?: number | undefined;
                    voteOptions?: ({
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } & {
                        maxCount?: number | undefined;
                        maxValue?: number | undefined;
                        maxVoteOverwrites?: number | undefined;
                        maxTotalCost?: number | undefined;
                        costExponent?: number | undefined;
                    } & { [K_116 in Exclude<keyof I_1["payload"]["newProcess"]["process"]["voteOptions"], keyof ProcessVoteOptions>]: never; }) | undefined;
                    censusOrigin?: CensusOrigin | undefined;
                    results?: ({
                        votes?: {
                            question?: Uint8Array[] | undefined;
                        }[] | undefined;
                    } & {
                        votes?: ({
                            question?: Uint8Array[] | undefined;
                        }[] & ({
                            question?: Uint8Array[] | undefined;
                        } & {
                            question?: (Uint8Array[] & Uint8Array[] & { [K_117 in Exclude<keyof I_1["payload"]["newProcess"]["process"]["results"]["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
                        } & { [K_118 in Exclude<keyof I_1["payload"]["newProcess"]["process"]["results"]["votes"][number], "question">]: never; })[] & { [K_119 in Exclude<keyof I_1["payload"]["newProcess"]["process"]["results"]["votes"], keyof {
                            question?: Uint8Array[] | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_120 in Exclude<keyof I_1["payload"]["newProcess"]["process"]["results"], "votes">]: never; }) | undefined;
                    ethIndexSlot?: number | undefined;
                    sourceBlockHeight?: number | undefined;
                    owner?: Uint8Array | undefined;
                    metadata?: string | undefined;
                    sourceNetworkId?: SourceNetworkId | undefined;
                    maxCensusSize?: number | undefined;
                    rollingCensusRoot?: Uint8Array | undefined;
                    rollingCensusSize?: number | undefined;
                    nullifiersRoot?: Uint8Array | undefined;
                    sourceNetworkContractAddr?: Uint8Array | undefined;
                    tokenDecimals?: number | undefined;
                    tempSIKs?: boolean | undefined;
                    startTime?: number | undefined;
                    duration?: number | undefined;
                } & { [K_121 in Exclude<keyof I_1["payload"]["newProcess"]["process"], keyof Process>]: never; }) | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_122 in Exclude<keyof I_1["payload"]["newProcess"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
            } & { [K_123 in Exclude<keyof I_1["payload"]["newProcess"], keyof NewProcessTx>]: never; }) | undefined;
            $case: "newProcess";
        } & { [K_124 in Exclude<keyof I_1["payload"], "$case" | "newProcess">]: never; }) | ({
            admin?: {
                txtype?: TxType | undefined;
                processId?: Uint8Array | undefined;
                address?: Uint8Array | undefined;
                encryptionPrivateKey?: Uint8Array | undefined;
                encryptionPublicKey?: Uint8Array | undefined;
                keyIndex?: number | undefined;
                power?: number | undefined;
                publicKey?: Uint8Array | undefined;
                nonce?: number | undefined;
            } | undefined;
        } & {
            $case: "admin";
        } & {
            admin?: ({
                txtype?: TxType | undefined;
                processId?: Uint8Array | undefined;
                address?: Uint8Array | undefined;
                encryptionPrivateKey?: Uint8Array | undefined;
                encryptionPublicKey?: Uint8Array | undefined;
                keyIndex?: number | undefined;
                power?: number | undefined;
                publicKey?: Uint8Array | undefined;
                nonce?: number | undefined;
            } & {
                txtype?: TxType | undefined;
                processId?: Uint8Array | undefined;
                address?: Uint8Array | undefined;
                encryptionPrivateKey?: Uint8Array | undefined;
                encryptionPublicKey?: Uint8Array | undefined;
                keyIndex?: number | undefined;
                power?: number | undefined;
                publicKey?: Uint8Array | undefined;
                nonce?: number | undefined;
            } & { [K_125 in Exclude<keyof I_1["payload"]["admin"], keyof AdminTx>]: never; }) | undefined;
            $case: "admin";
        } & { [K_126 in Exclude<keyof I_1["payload"], "$case" | "admin">]: never; }) | ({
            setProcess?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                status?: ProcessStatus | undefined;
                questionIndex?: number | undefined;
                censusRoot?: Uint8Array | undefined;
                censusURI?: string | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                results?: {
                    votes?: {
                        question?: Uint8Array[] | undefined;
                    }[] | undefined;
                } | undefined;
                tempSIKs?: boolean | undefined;
                duration?: number | undefined;
                censusSize?: number | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "setProcess";
        } & {
            setProcess?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                status?: ProcessStatus | undefined;
                questionIndex?: number | undefined;
                censusRoot?: Uint8Array | undefined;
                censusURI?: string | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                results?: {
                    votes?: {
                        question?: Uint8Array[] | undefined;
                    }[] | undefined;
                } | undefined;
                tempSIKs?: boolean | undefined;
                duration?: number | undefined;
                censusSize?: number | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                status?: ProcessStatus | undefined;
                questionIndex?: number | undefined;
                censusRoot?: Uint8Array | undefined;
                censusURI?: string | undefined;
                proof?: ({
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } & {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    } & {
                        ca?: ({
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: ProofCA_Type | undefined;
                            bundle?: ({
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & { [K_127 in Exclude<keyof I_1["payload"]["setProcess"]["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_128 in Exclude<keyof I_1["payload"]["setProcess"]["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                        $case: "ca";
                    } & { [K_129 in Exclude<keyof I_1["payload"]["setProcess"]["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    } & {
                        arbo?: ({
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & { [K_130 in Exclude<keyof I_1["payload"]["setProcess"]["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                        $case: "arbo";
                    } & { [K_131 in Exclude<keyof I_1["payload"]["setProcess"]["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    } & {
                        zkSnark?: ({
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } & {
                            circuitParametersIndex?: number | undefined;
                            a?: (string[] & string[] & { [K_132 in Exclude<keyof I_1["payload"]["setProcess"]["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                            b?: (string[] & string[] & { [K_133 in Exclude<keyof I_1["payload"]["setProcess"]["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                            c?: (string[] & string[] & { [K_134 in Exclude<keyof I_1["payload"]["setProcess"]["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                            publicInputs?: (string[] & string[] & { [K_135 in Exclude<keyof I_1["payload"]["setProcess"]["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                        } & { [K_136 in Exclude<keyof I_1["payload"]["setProcess"]["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                        $case: "zkSnark";
                    } & { [K_137 in Exclude<keyof I_1["payload"]["setProcess"]["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
                } & { [K_138 in Exclude<keyof I_1["payload"]["setProcess"]["proof"], "payload">]: never; }) | undefined;
                results?: ({
                    votes?: {
                        question?: Uint8Array[] | undefined;
                    }[] | undefined;
                } & {
                    votes?: ({
                        question?: Uint8Array[] | undefined;
                    }[] & ({
                        question?: Uint8Array[] | undefined;
                    } & {
                        question?: (Uint8Array[] & Uint8Array[] & { [K_139 in Exclude<keyof I_1["payload"]["setProcess"]["results"]["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
                    } & { [K_140 in Exclude<keyof I_1["payload"]["setProcess"]["results"]["votes"][number], "question">]: never; })[] & { [K_141 in Exclude<keyof I_1["payload"]["setProcess"]["results"]["votes"], keyof {
                        question?: Uint8Array[] | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_142 in Exclude<keyof I_1["payload"]["setProcess"]["results"], "votes">]: never; }) | undefined;
                tempSIKs?: boolean | undefined;
                duration?: number | undefined;
                censusSize?: number | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_143 in Exclude<keyof I_1["payload"]["setProcess"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
            } & { [K_144 in Exclude<keyof I_1["payload"]["setProcess"], keyof SetProcessTx>]: never; }) | undefined;
            $case: "setProcess";
        } & { [K_145 in Exclude<keyof I_1["payload"], "$case" | "setProcess">]: never; }) | ({
            registerKey?: {
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                newKey?: Uint8Array | undefined;
                weight?: string | undefined;
            } | undefined;
        } & {
            $case: "registerKey";
        } & {
            registerKey?: ({
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                proof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                newKey?: Uint8Array | undefined;
                weight?: string | undefined;
            } & {
                nonce?: number | undefined;
                processId?: Uint8Array | undefined;
                proof?: ({
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } & {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    } & {
                        ca?: ({
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: ProofCA_Type | undefined;
                            bundle?: ({
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & { [K_146 in Exclude<keyof I_1["payload"]["registerKey"]["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_147 in Exclude<keyof I_1["payload"]["registerKey"]["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                        $case: "ca";
                    } & { [K_148 in Exclude<keyof I_1["payload"]["registerKey"]["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    } & {
                        arbo?: ({
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & { [K_149 in Exclude<keyof I_1["payload"]["registerKey"]["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                        $case: "arbo";
                    } & { [K_150 in Exclude<keyof I_1["payload"]["registerKey"]["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    } & {
                        zkSnark?: ({
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } & {
                            circuitParametersIndex?: number | undefined;
                            a?: (string[] & string[] & { [K_151 in Exclude<keyof I_1["payload"]["registerKey"]["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                            b?: (string[] & string[] & { [K_152 in Exclude<keyof I_1["payload"]["registerKey"]["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                            c?: (string[] & string[] & { [K_153 in Exclude<keyof I_1["payload"]["registerKey"]["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                            publicInputs?: (string[] & string[] & { [K_154 in Exclude<keyof I_1["payload"]["registerKey"]["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                        } & { [K_155 in Exclude<keyof I_1["payload"]["registerKey"]["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                        $case: "zkSnark";
                    } & { [K_156 in Exclude<keyof I_1["payload"]["registerKey"]["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
                } & { [K_157 in Exclude<keyof I_1["payload"]["registerKey"]["proof"], "payload">]: never; }) | undefined;
                newKey?: Uint8Array | undefined;
                weight?: string | undefined;
            } & { [K_158 in Exclude<keyof I_1["payload"]["registerKey"], keyof RegisterKeyTx>]: never; }) | undefined;
            $case: "registerKey";
        } & { [K_159 in Exclude<keyof I_1["payload"], "$case" | "registerKey">]: never; }) | ({
            sendTokens?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                from?: Uint8Array | undefined;
                to?: Uint8Array | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            $case: "sendTokens";
        } & {
            sendTokens?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                from?: Uint8Array | undefined;
                to?: Uint8Array | undefined;
                value?: number | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                from?: Uint8Array | undefined;
                to?: Uint8Array | undefined;
                value?: number | undefined;
            } & { [K_160 in Exclude<keyof I_1["payload"]["sendTokens"], keyof SendTokensTx>]: never; }) | undefined;
            $case: "sendTokens";
        } & { [K_161 in Exclude<keyof I_1["payload"], "$case" | "sendTokens">]: never; }) | ({
            setTransactionCosts?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                value?: number | undefined;
            } | undefined;
        } & {
            $case: "setTransactionCosts";
        } & {
            setTransactionCosts?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                value?: number | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                value?: number | undefined;
            } & { [K_162 in Exclude<keyof I_1["payload"]["setTransactionCosts"], keyof SetTransactionCostsTx>]: never; }) | undefined;
            $case: "setTransactionCosts";
        } & { [K_163 in Exclude<keyof I_1["payload"], "$case" | "setTransactionCosts">]: never; }) | ({
            setAccount?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                infoURI?: string | undefined;
                account?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                delegates?: Uint8Array[] | undefined;
                SIK?: Uint8Array | undefined;
                publicKey?: Uint8Array | undefined;
                name?: string | undefined;
            } | undefined;
        } & {
            $case: "setAccount";
        } & {
            setAccount?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                infoURI?: string | undefined;
                account?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                delegates?: Uint8Array[] | undefined;
                SIK?: Uint8Array | undefined;
                publicKey?: Uint8Array | undefined;
                name?: string | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                infoURI?: string | undefined;
                account?: Uint8Array | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_164 in Exclude<keyof I_1["payload"]["setAccount"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
                delegates?: (Uint8Array[] & Uint8Array[] & { [K_165 in Exclude<keyof I_1["payload"]["setAccount"]["delegates"], keyof Uint8Array[]>]: never; }) | undefined;
                SIK?: Uint8Array | undefined;
                publicKey?: Uint8Array | undefined;
                name?: string | undefined;
            } & { [K_166 in Exclude<keyof I_1["payload"]["setAccount"], keyof SetAccountTx>]: never; }) | undefined;
            $case: "setAccount";
        } & { [K_167 in Exclude<keyof I_1["payload"], "$case" | "setAccount">]: never; }) | ({
            collectFaucet?: {
                txType?: TxType | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                nonce?: number | undefined;
            } | undefined;
        } & {
            $case: "collectFaucet";
        } & {
            collectFaucet?: ({
                txType?: TxType | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
                nonce?: number | undefined;
            } & {
                txType?: TxType | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_168 in Exclude<keyof I_1["payload"]["collectFaucet"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
                nonce?: number | undefined;
            } & { [K_169 in Exclude<keyof I_1["payload"]["collectFaucet"], keyof CollectFaucetTx>]: never; }) | undefined;
            $case: "collectFaucet";
        } & { [K_170 in Exclude<keyof I_1["payload"], "$case" | "collectFaucet">]: never; }) | ({
            setKeykeeper?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                keykeeper?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "setKeykeeper";
        } & {
            setKeykeeper?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                keykeeper?: Uint8Array | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                keykeeper?: Uint8Array | undefined;
            } & { [K_171 in Exclude<keyof I_1["payload"]["setKeykeeper"], keyof SetKeykeeperTx>]: never; }) | undefined;
            $case: "setKeykeeper";
        } & { [K_172 in Exclude<keyof I_1["payload"], "$case" | "setKeykeeper">]: never; }) | ({
            setSIK?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "setSIK";
        } & {
            setSIK?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_173 in Exclude<keyof I_1["payload"]["setSIK"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
            } & { [K_174 in Exclude<keyof I_1["payload"]["setSIK"], keyof SIKTx>]: never; }) | undefined;
            $case: "setSIK";
        } & { [K_175 in Exclude<keyof I_1["payload"], "$case" | "setSIK">]: never; }) | ({
            delSIK?: {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            $case: "delSIK";
        } & {
            delSIK?: ({
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                txtype?: TxType | undefined;
                nonce?: number | undefined;
                SIK?: Uint8Array | undefined;
                faucetPackage?: ({
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    payload?: Uint8Array | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_176 in Exclude<keyof I_1["payload"]["delSIK"]["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
            } & { [K_177 in Exclude<keyof I_1["payload"]["delSIK"], keyof SIKTx>]: never; }) | undefined;
            $case: "delSIK";
        } & { [K_178 in Exclude<keyof I_1["payload"], "$case" | "delSIK">]: never; }) | ({
            registerSIK?: {
                electionId?: Uint8Array | undefined;
                censusProof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                SIK?: Uint8Array | undefined;
            } | undefined;
        } & {
            $case: "registerSIK";
        } & {
            registerSIK?: ({
                electionId?: Uint8Array | undefined;
                censusProof?: {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } | undefined;
                SIK?: Uint8Array | undefined;
            } & {
                electionId?: Uint8Array | undefined;
                censusProof?: ({
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    }) | undefined;
                } & {
                    payload?: ({
                        ca?: {
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "ca";
                    } & {
                        ca?: ({
                            type?: ProofCA_Type | undefined;
                            bundle?: {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: ProofCA_Type | undefined;
                            bundle?: ({
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & {
                                processId?: Uint8Array | undefined;
                                address?: Uint8Array | undefined;
                                voteWeight?: Uint8Array | undefined;
                            } & { [K_179 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_180 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                        $case: "ca";
                    } & { [K_181 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"]["payload"], "$case" | "ca">]: never; }) | ({
                        arbo?: {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        $case: "arbo";
                    } & {
                        arbo?: ({
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & {
                            type?: ProofArbo_Type | undefined;
                            siblings?: Uint8Array | undefined;
                            availableWeight?: Uint8Array | undefined;
                            keyType?: ProofArbo_KeyType | undefined;
                            voteWeight?: Uint8Array | undefined;
                        } & { [K_182 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                        $case: "arbo";
                    } & { [K_183 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"]["payload"], "$case" | "arbo">]: never; }) | ({
                        zkSnark?: {
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } | undefined;
                    } & {
                        $case: "zkSnark";
                    } & {
                        zkSnark?: ({
                            circuitParametersIndex?: number | undefined;
                            a?: string[] | undefined;
                            b?: string[] | undefined;
                            c?: string[] | undefined;
                            publicInputs?: string[] | undefined;
                        } & {
                            circuitParametersIndex?: number | undefined;
                            a?: (string[] & string[] & { [K_184 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                            b?: (string[] & string[] & { [K_185 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                            c?: (string[] & string[] & { [K_186 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                            publicInputs?: (string[] & string[] & { [K_187 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                        } & { [K_188 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                        $case: "zkSnark";
                    } & { [K_189 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
                } & { [K_190 in Exclude<keyof I_1["payload"]["registerSIK"]["censusProof"], "payload">]: never; }) | undefined;
                SIK?: Uint8Array | undefined;
            } & { [K_191 in Exclude<keyof I_1["payload"]["registerSIK"], keyof RegisterSIKTx>]: never; }) | undefined;
            $case: "registerSIK";
        } & { [K_192 in Exclude<keyof I_1["payload"], "$case" | "registerSIK">]: never; }) | undefined;
    } & { [K_193 in Exclude<keyof I_1, "payload">]: never; }>(object: I_1): Tx;
};
interface SignedTx {
    /** The bytes produced by Marshaling a Tx{} message */
    tx: Uint8Array;
    /**
     * The signature for the tx bytes.
     * signature is only required in those transactions that actually need signature.
     * I.e zk-Snarks based transactions won't needed, however the transaction should use
     * this message type in order to preserve consistency on the Vochain
     */
    signature?: Uint8Array | undefined;
}
declare const SignedTx: {
    encode(message: SignedTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignedTx;
    fromJSON(object: any): SignedTx;
    toJSON(message: SignedTx): unknown;
    create<I extends {
        tx?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
    } & {
        tx?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof SignedTx>]: never; }>(base?: I | undefined): SignedTx;
    fromPartial<I_1 extends {
        tx?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
    } & {
        tx?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SignedTx>]: never; }>(object: I_1): SignedTx;
};
interface NewProcessTx {
    txtype: TxType;
    nonce: number;
    process: Process | undefined;
    faucetPackage?: FaucetPackage | undefined;
}
declare const NewProcessTx: {
    encode(message: NewProcessTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NewProcessTx;
    fromJSON(object: any): NewProcessTx;
    toJSON(message: NewProcessTx): unknown;
    create<I extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        process?: {
            processId?: Uint8Array | undefined;
            entityId?: Uint8Array | undefined;
            startBlock?: number | undefined;
            blockCount?: number | undefined;
            censusRoot?: Uint8Array | undefined;
            censusURI?: string | undefined;
            encryptionPrivateKeys?: string[] | undefined;
            encryptionPublicKeys?: string[] | undefined;
            keyIndex?: number | undefined;
            status?: ProcessStatus | undefined;
            paramsSignature?: Uint8Array | undefined;
            namespace?: number | undefined;
            envelopeType?: {
                serial?: boolean | undefined;
                anonymous?: boolean | undefined;
                encryptedVotes?: boolean | undefined;
                uniqueValues?: boolean | undefined;
                costFromWeight?: boolean | undefined;
            } | undefined;
            mode?: {
                autoStart?: boolean | undefined;
                interruptible?: boolean | undefined;
                dynamicCensus?: boolean | undefined;
                encryptedMetaData?: boolean | undefined;
                preRegister?: boolean | undefined;
            } | undefined;
            questionIndex?: number | undefined;
            questionCount?: number | undefined;
            voteOptions?: {
                maxCount?: number | undefined;
                maxValue?: number | undefined;
                maxVoteOverwrites?: number | undefined;
                maxTotalCost?: number | undefined;
                costExponent?: number | undefined;
            } | undefined;
            censusOrigin?: CensusOrigin | undefined;
            results?: {
                votes?: {
                    question?: Uint8Array[] | undefined;
                }[] | undefined;
            } | undefined;
            ethIndexSlot?: number | undefined;
            sourceBlockHeight?: number | undefined;
            owner?: Uint8Array | undefined;
            metadata?: string | undefined;
            sourceNetworkId?: SourceNetworkId | undefined;
            maxCensusSize?: number | undefined;
            rollingCensusRoot?: Uint8Array | undefined;
            rollingCensusSize?: number | undefined;
            nullifiersRoot?: Uint8Array | undefined;
            sourceNetworkContractAddr?: Uint8Array | undefined;
            tokenDecimals?: number | undefined;
            tempSIKs?: boolean | undefined;
            startTime?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        faucetPackage?: {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        process?: ({
            processId?: Uint8Array | undefined;
            entityId?: Uint8Array | undefined;
            startBlock?: number | undefined;
            blockCount?: number | undefined;
            censusRoot?: Uint8Array | undefined;
            censusURI?: string | undefined;
            encryptionPrivateKeys?: string[] | undefined;
            encryptionPublicKeys?: string[] | undefined;
            keyIndex?: number | undefined;
            status?: ProcessStatus | undefined;
            paramsSignature?: Uint8Array | undefined;
            namespace?: number | undefined;
            envelopeType?: {
                serial?: boolean | undefined;
                anonymous?: boolean | undefined;
                encryptedVotes?: boolean | undefined;
                uniqueValues?: boolean | undefined;
                costFromWeight?: boolean | undefined;
            } | undefined;
            mode?: {
                autoStart?: boolean | undefined;
                interruptible?: boolean | undefined;
                dynamicCensus?: boolean | undefined;
                encryptedMetaData?: boolean | undefined;
                preRegister?: boolean | undefined;
            } | undefined;
            questionIndex?: number | undefined;
            questionCount?: number | undefined;
            voteOptions?: {
                maxCount?: number | undefined;
                maxValue?: number | undefined;
                maxVoteOverwrites?: number | undefined;
                maxTotalCost?: number | undefined;
                costExponent?: number | undefined;
            } | undefined;
            censusOrigin?: CensusOrigin | undefined;
            results?: {
                votes?: {
                    question?: Uint8Array[] | undefined;
                }[] | undefined;
            } | undefined;
            ethIndexSlot?: number | undefined;
            sourceBlockHeight?: number | undefined;
            owner?: Uint8Array | undefined;
            metadata?: string | undefined;
            sourceNetworkId?: SourceNetworkId | undefined;
            maxCensusSize?: number | undefined;
            rollingCensusRoot?: Uint8Array | undefined;
            rollingCensusSize?: number | undefined;
            nullifiersRoot?: Uint8Array | undefined;
            sourceNetworkContractAddr?: Uint8Array | undefined;
            tokenDecimals?: number | undefined;
            tempSIKs?: boolean | undefined;
            startTime?: number | undefined;
            duration?: number | undefined;
        } & {
            processId?: Uint8Array | undefined;
            entityId?: Uint8Array | undefined;
            startBlock?: number | undefined;
            blockCount?: number | undefined;
            censusRoot?: Uint8Array | undefined;
            censusURI?: string | undefined;
            encryptionPrivateKeys?: (string[] & string[] & { [K in Exclude<keyof I["process"]["encryptionPrivateKeys"], keyof string[]>]: never; }) | undefined;
            encryptionPublicKeys?: (string[] & string[] & { [K_1 in Exclude<keyof I["process"]["encryptionPublicKeys"], keyof string[]>]: never; }) | undefined;
            keyIndex?: number | undefined;
            status?: ProcessStatus | undefined;
            paramsSignature?: Uint8Array | undefined;
            namespace?: number | undefined;
            envelopeType?: ({
                serial?: boolean | undefined;
                anonymous?: boolean | undefined;
                encryptedVotes?: boolean | undefined;
                uniqueValues?: boolean | undefined;
                costFromWeight?: boolean | undefined;
            } & {
                serial?: boolean | undefined;
                anonymous?: boolean | undefined;
                encryptedVotes?: boolean | undefined;
                uniqueValues?: boolean | undefined;
                costFromWeight?: boolean | undefined;
            } & { [K_2 in Exclude<keyof I["process"]["envelopeType"], keyof EnvelopeType>]: never; }) | undefined;
            mode?: ({
                autoStart?: boolean | undefined;
                interruptible?: boolean | undefined;
                dynamicCensus?: boolean | undefined;
                encryptedMetaData?: boolean | undefined;
                preRegister?: boolean | undefined;
            } & {
                autoStart?: boolean | undefined;
                interruptible?: boolean | undefined;
                dynamicCensus?: boolean | undefined;
                encryptedMetaData?: boolean | undefined;
                preRegister?: boolean | undefined;
            } & { [K_3 in Exclude<keyof I["process"]["mode"], keyof ProcessMode>]: never; }) | undefined;
            questionIndex?: number | undefined;
            questionCount?: number | undefined;
            voteOptions?: ({
                maxCount?: number | undefined;
                maxValue?: number | undefined;
                maxVoteOverwrites?: number | undefined;
                maxTotalCost?: number | undefined;
                costExponent?: number | undefined;
            } & {
                maxCount?: number | undefined;
                maxValue?: number | undefined;
                maxVoteOverwrites?: number | undefined;
                maxTotalCost?: number | undefined;
                costExponent?: number | undefined;
            } & { [K_4 in Exclude<keyof I["process"]["voteOptions"], keyof ProcessVoteOptions>]: never; }) | undefined;
            censusOrigin?: CensusOrigin | undefined;
            results?: ({
                votes?: {
                    question?: Uint8Array[] | undefined;
                }[] | undefined;
            } & {
                votes?: ({
                    question?: Uint8Array[] | undefined;
                }[] & ({
                    question?: Uint8Array[] | undefined;
                } & {
                    question?: (Uint8Array[] & Uint8Array[] & { [K_5 in Exclude<keyof I["process"]["results"]["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["process"]["results"]["votes"][number], "question">]: never; })[] & { [K_7 in Exclude<keyof I["process"]["results"]["votes"], keyof {
                    question?: Uint8Array[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["process"]["results"], "votes">]: never; }) | undefined;
            ethIndexSlot?: number | undefined;
            sourceBlockHeight?: number | undefined;
            owner?: Uint8Array | undefined;
            metadata?: string | undefined;
            sourceNetworkId?: SourceNetworkId | undefined;
            maxCensusSize?: number | undefined;
            rollingCensusRoot?: Uint8Array | undefined;
            rollingCensusSize?: number | undefined;
            nullifiersRoot?: Uint8Array | undefined;
            sourceNetworkContractAddr?: Uint8Array | undefined;
            tokenDecimals?: number | undefined;
            tempSIKs?: boolean | undefined;
            startTime?: number | undefined;
            duration?: number | undefined;
        } & { [K_9 in Exclude<keyof I["process"], keyof Process>]: never; }) | undefined;
        faucetPackage?: ({
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_10 in Exclude<keyof I["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I, keyof NewProcessTx>]: never; }>(base?: I | undefined): NewProcessTx;
    fromPartial<I_1 extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        process?: {
            processId?: Uint8Array | undefined;
            entityId?: Uint8Array | undefined;
            startBlock?: number | undefined;
            blockCount?: number | undefined;
            censusRoot?: Uint8Array | undefined;
            censusURI?: string | undefined;
            encryptionPrivateKeys?: string[] | undefined;
            encryptionPublicKeys?: string[] | undefined;
            keyIndex?: number | undefined;
            status?: ProcessStatus | undefined;
            paramsSignature?: Uint8Array | undefined;
            namespace?: number | undefined;
            envelopeType?: {
                serial?: boolean | undefined;
                anonymous?: boolean | undefined;
                encryptedVotes?: boolean | undefined;
                uniqueValues?: boolean | undefined;
                costFromWeight?: boolean | undefined;
            } | undefined;
            mode?: {
                autoStart?: boolean | undefined;
                interruptible?: boolean | undefined;
                dynamicCensus?: boolean | undefined;
                encryptedMetaData?: boolean | undefined;
                preRegister?: boolean | undefined;
            } | undefined;
            questionIndex?: number | undefined;
            questionCount?: number | undefined;
            voteOptions?: {
                maxCount?: number | undefined;
                maxValue?: number | undefined;
                maxVoteOverwrites?: number | undefined;
                maxTotalCost?: number | undefined;
                costExponent?: number | undefined;
            } | undefined;
            censusOrigin?: CensusOrigin | undefined;
            results?: {
                votes?: {
                    question?: Uint8Array[] | undefined;
                }[] | undefined;
            } | undefined;
            ethIndexSlot?: number | undefined;
            sourceBlockHeight?: number | undefined;
            owner?: Uint8Array | undefined;
            metadata?: string | undefined;
            sourceNetworkId?: SourceNetworkId | undefined;
            maxCensusSize?: number | undefined;
            rollingCensusRoot?: Uint8Array | undefined;
            rollingCensusSize?: number | undefined;
            nullifiersRoot?: Uint8Array | undefined;
            sourceNetworkContractAddr?: Uint8Array | undefined;
            tokenDecimals?: number | undefined;
            tempSIKs?: boolean | undefined;
            startTime?: number | undefined;
            duration?: number | undefined;
        } | undefined;
        faucetPackage?: {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        process?: ({
            processId?: Uint8Array | undefined;
            entityId?: Uint8Array | undefined;
            startBlock?: number | undefined;
            blockCount?: number | undefined;
            censusRoot?: Uint8Array | undefined;
            censusURI?: string | undefined;
            encryptionPrivateKeys?: string[] | undefined;
            encryptionPublicKeys?: string[] | undefined;
            keyIndex?: number | undefined;
            status?: ProcessStatus | undefined;
            paramsSignature?: Uint8Array | undefined;
            namespace?: number | undefined;
            envelopeType?: {
                serial?: boolean | undefined;
                anonymous?: boolean | undefined;
                encryptedVotes?: boolean | undefined;
                uniqueValues?: boolean | undefined;
                costFromWeight?: boolean | undefined;
            } | undefined;
            mode?: {
                autoStart?: boolean | undefined;
                interruptible?: boolean | undefined;
                dynamicCensus?: boolean | undefined;
                encryptedMetaData?: boolean | undefined;
                preRegister?: boolean | undefined;
            } | undefined;
            questionIndex?: number | undefined;
            questionCount?: number | undefined;
            voteOptions?: {
                maxCount?: number | undefined;
                maxValue?: number | undefined;
                maxVoteOverwrites?: number | undefined;
                maxTotalCost?: number | undefined;
                costExponent?: number | undefined;
            } | undefined;
            censusOrigin?: CensusOrigin | undefined;
            results?: {
                votes?: {
                    question?: Uint8Array[] | undefined;
                }[] | undefined;
            } | undefined;
            ethIndexSlot?: number | undefined;
            sourceBlockHeight?: number | undefined;
            owner?: Uint8Array | undefined;
            metadata?: string | undefined;
            sourceNetworkId?: SourceNetworkId | undefined;
            maxCensusSize?: number | undefined;
            rollingCensusRoot?: Uint8Array | undefined;
            rollingCensusSize?: number | undefined;
            nullifiersRoot?: Uint8Array | undefined;
            sourceNetworkContractAddr?: Uint8Array | undefined;
            tokenDecimals?: number | undefined;
            tempSIKs?: boolean | undefined;
            startTime?: number | undefined;
            duration?: number | undefined;
        } & {
            processId?: Uint8Array | undefined;
            entityId?: Uint8Array | undefined;
            startBlock?: number | undefined;
            blockCount?: number | undefined;
            censusRoot?: Uint8Array | undefined;
            censusURI?: string | undefined;
            encryptionPrivateKeys?: (string[] & string[] & { [K_12 in Exclude<keyof I_1["process"]["encryptionPrivateKeys"], keyof string[]>]: never; }) | undefined;
            encryptionPublicKeys?: (string[] & string[] & { [K_13 in Exclude<keyof I_1["process"]["encryptionPublicKeys"], keyof string[]>]: never; }) | undefined;
            keyIndex?: number | undefined;
            status?: ProcessStatus | undefined;
            paramsSignature?: Uint8Array | undefined;
            namespace?: number | undefined;
            envelopeType?: ({
                serial?: boolean | undefined;
                anonymous?: boolean | undefined;
                encryptedVotes?: boolean | undefined;
                uniqueValues?: boolean | undefined;
                costFromWeight?: boolean | undefined;
            } & {
                serial?: boolean | undefined;
                anonymous?: boolean | undefined;
                encryptedVotes?: boolean | undefined;
                uniqueValues?: boolean | undefined;
                costFromWeight?: boolean | undefined;
            } & { [K_14 in Exclude<keyof I_1["process"]["envelopeType"], keyof EnvelopeType>]: never; }) | undefined;
            mode?: ({
                autoStart?: boolean | undefined;
                interruptible?: boolean | undefined;
                dynamicCensus?: boolean | undefined;
                encryptedMetaData?: boolean | undefined;
                preRegister?: boolean | undefined;
            } & {
                autoStart?: boolean | undefined;
                interruptible?: boolean | undefined;
                dynamicCensus?: boolean | undefined;
                encryptedMetaData?: boolean | undefined;
                preRegister?: boolean | undefined;
            } & { [K_15 in Exclude<keyof I_1["process"]["mode"], keyof ProcessMode>]: never; }) | undefined;
            questionIndex?: number | undefined;
            questionCount?: number | undefined;
            voteOptions?: ({
                maxCount?: number | undefined;
                maxValue?: number | undefined;
                maxVoteOverwrites?: number | undefined;
                maxTotalCost?: number | undefined;
                costExponent?: number | undefined;
            } & {
                maxCount?: number | undefined;
                maxValue?: number | undefined;
                maxVoteOverwrites?: number | undefined;
                maxTotalCost?: number | undefined;
                costExponent?: number | undefined;
            } & { [K_16 in Exclude<keyof I_1["process"]["voteOptions"], keyof ProcessVoteOptions>]: never; }) | undefined;
            censusOrigin?: CensusOrigin | undefined;
            results?: ({
                votes?: {
                    question?: Uint8Array[] | undefined;
                }[] | undefined;
            } & {
                votes?: ({
                    question?: Uint8Array[] | undefined;
                }[] & ({
                    question?: Uint8Array[] | undefined;
                } & {
                    question?: (Uint8Array[] & Uint8Array[] & { [K_17 in Exclude<keyof I_1["process"]["results"]["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
                } & { [K_18 in Exclude<keyof I_1["process"]["results"]["votes"][number], "question">]: never; })[] & { [K_19 in Exclude<keyof I_1["process"]["results"]["votes"], keyof {
                    question?: Uint8Array[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_20 in Exclude<keyof I_1["process"]["results"], "votes">]: never; }) | undefined;
            ethIndexSlot?: number | undefined;
            sourceBlockHeight?: number | undefined;
            owner?: Uint8Array | undefined;
            metadata?: string | undefined;
            sourceNetworkId?: SourceNetworkId | undefined;
            maxCensusSize?: number | undefined;
            rollingCensusRoot?: Uint8Array | undefined;
            rollingCensusSize?: number | undefined;
            nullifiersRoot?: Uint8Array | undefined;
            sourceNetworkContractAddr?: Uint8Array | undefined;
            tokenDecimals?: number | undefined;
            tempSIKs?: boolean | undefined;
            startTime?: number | undefined;
            duration?: number | undefined;
        } & { [K_21 in Exclude<keyof I_1["process"], keyof Process>]: never; }) | undefined;
        faucetPackage?: ({
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_22 in Exclude<keyof I_1["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
    } & { [K_23 in Exclude<keyof I_1, keyof NewProcessTx>]: never; }>(object: I_1): NewProcessTx;
};
interface SetProcessTx {
    txtype: TxType;
    nonce: number;
    processId: Uint8Array;
    status?: ProcessStatus | undefined;
    questionIndex?: number | undefined;
    censusRoot?: Uint8Array | undefined;
    censusURI?: string | undefined;
    proof?: Proof | undefined;
    results?: ProcessResult | undefined;
    /**
     * tempSIKs flag decides if when the process has finished, the SIKs related
     * to it will be removed or not
     */
    tempSIKs?: boolean | undefined;
    duration?: number | undefined;
    censusSize?: number | undefined;
    faucetPackage?: FaucetPackage | undefined;
}
declare const SetProcessTx: {
    encode(message: SetProcessTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetProcessTx;
    fromJSON(object: any): SetProcessTx;
    toJSON(message: SetProcessTx): unknown;
    create<I extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        processId?: Uint8Array | undefined;
        status?: ProcessStatus | undefined;
        questionIndex?: number | undefined;
        censusRoot?: Uint8Array | undefined;
        censusURI?: string | undefined;
        proof?: {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } | undefined;
        results?: {
            votes?: {
                question?: Uint8Array[] | undefined;
            }[] | undefined;
        } | undefined;
        tempSIKs?: boolean | undefined;
        duration?: number | undefined;
        censusSize?: number | undefined;
        faucetPackage?: {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        processId?: Uint8Array | undefined;
        status?: ProcessStatus | undefined;
        questionIndex?: number | undefined;
        censusRoot?: Uint8Array | undefined;
        censusURI?: string | undefined;
        proof?: ({
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } & {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            } & {
                ca?: ({
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: ProofCA_Type | undefined;
                    bundle?: ({
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & { [K in Exclude<keyof I["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_1 in Exclude<keyof I["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                $case: "ca";
            } & { [K_2 in Exclude<keyof I["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            } & {
                arbo?: ({
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & { [K_3 in Exclude<keyof I["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                $case: "arbo";
            } & { [K_4 in Exclude<keyof I["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            } & {
                zkSnark?: ({
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } & {
                    circuitParametersIndex?: number | undefined;
                    a?: (string[] & string[] & { [K_5 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                    b?: (string[] & string[] & { [K_6 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                    c?: (string[] & string[] & { [K_7 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                    publicInputs?: (string[] & string[] & { [K_8 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                } & { [K_9 in Exclude<keyof I["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                $case: "zkSnark";
            } & { [K_10 in Exclude<keyof I["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["proof"], "payload">]: never; }) | undefined;
        results?: ({
            votes?: {
                question?: Uint8Array[] | undefined;
            }[] | undefined;
        } & {
            votes?: ({
                question?: Uint8Array[] | undefined;
            }[] & ({
                question?: Uint8Array[] | undefined;
            } & {
                question?: (Uint8Array[] & Uint8Array[] & { [K_12 in Exclude<keyof I["results"]["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I["results"]["votes"][number], "question">]: never; })[] & { [K_14 in Exclude<keyof I["results"]["votes"], keyof {
                question?: Uint8Array[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["results"], "votes">]: never; }) | undefined;
        tempSIKs?: boolean | undefined;
        duration?: number | undefined;
        censusSize?: number | undefined;
        faucetPackage?: ({
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_16 in Exclude<keyof I["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, keyof SetProcessTx>]: never; }>(base?: I | undefined): SetProcessTx;
    fromPartial<I_1 extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        processId?: Uint8Array | undefined;
        status?: ProcessStatus | undefined;
        questionIndex?: number | undefined;
        censusRoot?: Uint8Array | undefined;
        censusURI?: string | undefined;
        proof?: {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } | undefined;
        results?: {
            votes?: {
                question?: Uint8Array[] | undefined;
            }[] | undefined;
        } | undefined;
        tempSIKs?: boolean | undefined;
        duration?: number | undefined;
        censusSize?: number | undefined;
        faucetPackage?: {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        processId?: Uint8Array | undefined;
        status?: ProcessStatus | undefined;
        questionIndex?: number | undefined;
        censusRoot?: Uint8Array | undefined;
        censusURI?: string | undefined;
        proof?: ({
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } & {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            } & {
                ca?: ({
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: ProofCA_Type | undefined;
                    bundle?: ({
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & { [K_18 in Exclude<keyof I_1["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_19 in Exclude<keyof I_1["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                $case: "ca";
            } & { [K_20 in Exclude<keyof I_1["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            } & {
                arbo?: ({
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & { [K_21 in Exclude<keyof I_1["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                $case: "arbo";
            } & { [K_22 in Exclude<keyof I_1["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            } & {
                zkSnark?: ({
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } & {
                    circuitParametersIndex?: number | undefined;
                    a?: (string[] & string[] & { [K_23 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                    b?: (string[] & string[] & { [K_24 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                    c?: (string[] & string[] & { [K_25 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                    publicInputs?: (string[] & string[] & { [K_26 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                } & { [K_27 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                $case: "zkSnark";
            } & { [K_28 in Exclude<keyof I_1["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
        } & { [K_29 in Exclude<keyof I_1["proof"], "payload">]: never; }) | undefined;
        results?: ({
            votes?: {
                question?: Uint8Array[] | undefined;
            }[] | undefined;
        } & {
            votes?: ({
                question?: Uint8Array[] | undefined;
            }[] & ({
                question?: Uint8Array[] | undefined;
            } & {
                question?: (Uint8Array[] & Uint8Array[] & { [K_30 in Exclude<keyof I_1["results"]["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
            } & { [K_31 in Exclude<keyof I_1["results"]["votes"][number], "question">]: never; })[] & { [K_32 in Exclude<keyof I_1["results"]["votes"], keyof {
                question?: Uint8Array[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_33 in Exclude<keyof I_1["results"], "votes">]: never; }) | undefined;
        tempSIKs?: boolean | undefined;
        duration?: number | undefined;
        censusSize?: number | undefined;
        faucetPackage?: ({
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_34 in Exclude<keyof I_1["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
    } & { [K_35 in Exclude<keyof I_1, keyof SetProcessTx>]: never; }>(object: I_1): SetProcessTx;
};
interface AdminTx {
    txtype: TxType;
    processId: Uint8Array;
    address?: Uint8Array | undefined;
    encryptionPrivateKey?: Uint8Array | undefined;
    encryptionPublicKey?: Uint8Array | undefined;
    keyIndex?: number | undefined;
    power?: number | undefined;
    publicKey?: Uint8Array | undefined;
    nonce: number;
}
declare const AdminTx: {
    encode(message: AdminTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AdminTx;
    fromJSON(object: any): AdminTx;
    toJSON(message: AdminTx): unknown;
    create<I extends {
        txtype?: TxType | undefined;
        processId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
        encryptionPrivateKey?: Uint8Array | undefined;
        encryptionPublicKey?: Uint8Array | undefined;
        keyIndex?: number | undefined;
        power?: number | undefined;
        publicKey?: Uint8Array | undefined;
        nonce?: number | undefined;
    } & {
        txtype?: TxType | undefined;
        processId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
        encryptionPrivateKey?: Uint8Array | undefined;
        encryptionPublicKey?: Uint8Array | undefined;
        keyIndex?: number | undefined;
        power?: number | undefined;
        publicKey?: Uint8Array | undefined;
        nonce?: number | undefined;
    } & { [K in Exclude<keyof I, keyof AdminTx>]: never; }>(base?: I | undefined): AdminTx;
    fromPartial<I_1 extends {
        txtype?: TxType | undefined;
        processId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
        encryptionPrivateKey?: Uint8Array | undefined;
        encryptionPublicKey?: Uint8Array | undefined;
        keyIndex?: number | undefined;
        power?: number | undefined;
        publicKey?: Uint8Array | undefined;
        nonce?: number | undefined;
    } & {
        txtype?: TxType | undefined;
        processId?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
        encryptionPrivateKey?: Uint8Array | undefined;
        encryptionPublicKey?: Uint8Array | undefined;
        keyIndex?: number | undefined;
        power?: number | undefined;
        publicKey?: Uint8Array | undefined;
        nonce?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AdminTx>]: never; }>(object: I_1): AdminTx;
};
interface RegisterKeyTx {
    /** Unique number per vote attempt, so that replay attacks can't reuse this payload */
    nonce: number;
    /** The process for which the vote is casted */
    processId: Uint8Array;
    /** Franchise proof */
    proof: Proof | undefined;
    /** New key to register */
    newKey: Uint8Array;
    /** Weight to delegate to newKey */
    weight: string;
}
declare const RegisterKeyTx: {
    encode(message: RegisterKeyTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterKeyTx;
    fromJSON(object: any): RegisterKeyTx;
    toJSON(message: RegisterKeyTx): unknown;
    create<I extends {
        nonce?: number | undefined;
        processId?: Uint8Array | undefined;
        proof?: {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } | undefined;
        newKey?: Uint8Array | undefined;
        weight?: string | undefined;
    } & {
        nonce?: number | undefined;
        processId?: Uint8Array | undefined;
        proof?: ({
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } & {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            } & {
                ca?: ({
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: ProofCA_Type | undefined;
                    bundle?: ({
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & { [K in Exclude<keyof I["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_1 in Exclude<keyof I["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                $case: "ca";
            } & { [K_2 in Exclude<keyof I["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            } & {
                arbo?: ({
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & { [K_3 in Exclude<keyof I["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                $case: "arbo";
            } & { [K_4 in Exclude<keyof I["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            } & {
                zkSnark?: ({
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } & {
                    circuitParametersIndex?: number | undefined;
                    a?: (string[] & string[] & { [K_5 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                    b?: (string[] & string[] & { [K_6 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                    c?: (string[] & string[] & { [K_7 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                    publicInputs?: (string[] & string[] & { [K_8 in Exclude<keyof I["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                } & { [K_9 in Exclude<keyof I["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                $case: "zkSnark";
            } & { [K_10 in Exclude<keyof I["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["proof"], "payload">]: never; }) | undefined;
        newKey?: Uint8Array | undefined;
        weight?: string | undefined;
    } & { [K_12 in Exclude<keyof I, keyof RegisterKeyTx>]: never; }>(base?: I | undefined): RegisterKeyTx;
    fromPartial<I_1 extends {
        nonce?: number | undefined;
        processId?: Uint8Array | undefined;
        proof?: {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } | undefined;
        newKey?: Uint8Array | undefined;
        weight?: string | undefined;
    } & {
        nonce?: number | undefined;
        processId?: Uint8Array | undefined;
        proof?: ({
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } & {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            } & {
                ca?: ({
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: ProofCA_Type | undefined;
                    bundle?: ({
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & { [K_13 in Exclude<keyof I_1["proof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_14 in Exclude<keyof I_1["proof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                $case: "ca";
            } & { [K_15 in Exclude<keyof I_1["proof"]["payload"], "$case" | "ca">]: never; }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            } & {
                arbo?: ({
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & { [K_16 in Exclude<keyof I_1["proof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                $case: "arbo";
            } & { [K_17 in Exclude<keyof I_1["proof"]["payload"], "$case" | "arbo">]: never; }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            } & {
                zkSnark?: ({
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } & {
                    circuitParametersIndex?: number | undefined;
                    a?: (string[] & string[] & { [K_18 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                    b?: (string[] & string[] & { [K_19 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                    c?: (string[] & string[] & { [K_20 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                    publicInputs?: (string[] & string[] & { [K_21 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                } & { [K_22 in Exclude<keyof I_1["proof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                $case: "zkSnark";
            } & { [K_23 in Exclude<keyof I_1["proof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
        } & { [K_24 in Exclude<keyof I_1["proof"], "payload">]: never; }) | undefined;
        newKey?: Uint8Array | undefined;
        weight?: string | undefined;
    } & { [K_25 in Exclude<keyof I_1, keyof RegisterKeyTx>]: never; }>(object: I_1): RegisterKeyTx;
};
interface SendTokensTx {
    txtype: TxType;
    nonce: number;
    from: Uint8Array;
    to: Uint8Array;
    value: number;
}
declare const SendTokensTx: {
    encode(message: SendTokensTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendTokensTx;
    fromJSON(object: any): SendTokensTx;
    toJSON(message: SendTokensTx): unknown;
    create<I extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        from?: Uint8Array | undefined;
        to?: Uint8Array | undefined;
        value?: number | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        from?: Uint8Array | undefined;
        to?: Uint8Array | undefined;
        value?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SendTokensTx>]: never; }>(base?: I | undefined): SendTokensTx;
    fromPartial<I_1 extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        from?: Uint8Array | undefined;
        to?: Uint8Array | undefined;
        value?: number | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        from?: Uint8Array | undefined;
        to?: Uint8Array | undefined;
        value?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SendTokensTx>]: never; }>(object: I_1): SendTokensTx;
};
interface SetTransactionCostsTx {
    txtype: TxType;
    nonce: number;
    value: number;
}
declare const SetTransactionCostsTx: {
    encode(message: SetTransactionCostsTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetTransactionCostsTx;
    fromJSON(object: any): SetTransactionCostsTx;
    toJSON(message: SetTransactionCostsTx): unknown;
    create<I extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        value?: number | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        value?: number | undefined;
    } & { [K in Exclude<keyof I, keyof SetTransactionCostsTx>]: never; }>(base?: I | undefined): SetTransactionCostsTx;
    fromPartial<I_1 extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        value?: number | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        value?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetTransactionCostsTx>]: never; }>(object: I_1): SetTransactionCostsTx;
};
interface SetAccountTx {
    txtype: TxType;
    nonce?: number | undefined;
    infoURI?: string | undefined;
    account?: Uint8Array | undefined;
    faucetPackage?: FaucetPackage | undefined;
    delegates: Uint8Array[];
    SIK?: Uint8Array | undefined;
    publicKey?: Uint8Array | undefined;
    name?: string | undefined;
}
declare const SetAccountTx: {
    encode(message: SetAccountTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetAccountTx;
    fromJSON(object: any): SetAccountTx;
    toJSON(message: SetAccountTx): unknown;
    create<I extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        infoURI?: string | undefined;
        account?: Uint8Array | undefined;
        faucetPackage?: {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        delegates?: Uint8Array[] | undefined;
        SIK?: Uint8Array | undefined;
        publicKey?: Uint8Array | undefined;
        name?: string | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        infoURI?: string | undefined;
        account?: Uint8Array | undefined;
        faucetPackage?: ({
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
        delegates?: (Uint8Array[] & Uint8Array[] & { [K_1 in Exclude<keyof I["delegates"], keyof Uint8Array[]>]: never; }) | undefined;
        SIK?: Uint8Array | undefined;
        publicKey?: Uint8Array | undefined;
        name?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SetAccountTx>]: never; }>(base?: I | undefined): SetAccountTx;
    fromPartial<I_1 extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        infoURI?: string | undefined;
        account?: Uint8Array | undefined;
        faucetPackage?: {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        delegates?: Uint8Array[] | undefined;
        SIK?: Uint8Array | undefined;
        publicKey?: Uint8Array | undefined;
        name?: string | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        infoURI?: string | undefined;
        account?: Uint8Array | undefined;
        faucetPackage?: ({
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_3 in Exclude<keyof I_1["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
        delegates?: (Uint8Array[] & Uint8Array[] & { [K_4 in Exclude<keyof I_1["delegates"], keyof Uint8Array[]>]: never; }) | undefined;
        SIK?: Uint8Array | undefined;
        publicKey?: Uint8Array | undefined;
        name?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof SetAccountTx>]: never; }>(object: I_1): SetAccountTx;
};
interface SIKTx {
    txtype: TxType;
    nonce?: number | undefined;
    SIK?: Uint8Array | undefined;
    faucetPackage?: FaucetPackage | undefined;
}
declare const SIKTx: {
    encode(message: SIKTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SIKTx;
    fromJSON(object: any): SIKTx;
    toJSON(message: SIKTx): unknown;
    create<I extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        SIK?: Uint8Array | undefined;
        faucetPackage?: {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        SIK?: Uint8Array | undefined;
        faucetPackage?: ({
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SIKTx>]: never; }>(base?: I | undefined): SIKTx;
    fromPartial<I_1 extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        SIK?: Uint8Array | undefined;
        faucetPackage?: {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        SIK?: Uint8Array | undefined;
        faucetPackage?: ({
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I_1["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SIKTx>]: never; }>(object: I_1): SIKTx;
};
interface RegisterSIKTx {
    electionId: Uint8Array;
    censusProof: Proof | undefined;
    SIK: Uint8Array;
}
declare const RegisterSIKTx: {
    encode(message: RegisterSIKTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterSIKTx;
    fromJSON(object: any): RegisterSIKTx;
    toJSON(message: RegisterSIKTx): unknown;
    create<I extends {
        electionId?: Uint8Array | undefined;
        censusProof?: {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } | undefined;
        SIK?: Uint8Array | undefined;
    } & {
        electionId?: Uint8Array | undefined;
        censusProof?: ({
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } & {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            } & {
                ca?: ({
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: ProofCA_Type | undefined;
                    bundle?: ({
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & { [K in Exclude<keyof I["censusProof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_1 in Exclude<keyof I["censusProof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                $case: "ca";
            } & { [K_2 in Exclude<keyof I["censusProof"]["payload"], "$case" | "ca">]: never; }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            } & {
                arbo?: ({
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & { [K_3 in Exclude<keyof I["censusProof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                $case: "arbo";
            } & { [K_4 in Exclude<keyof I["censusProof"]["payload"], "$case" | "arbo">]: never; }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            } & {
                zkSnark?: ({
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } & {
                    circuitParametersIndex?: number | undefined;
                    a?: (string[] & string[] & { [K_5 in Exclude<keyof I["censusProof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                    b?: (string[] & string[] & { [K_6 in Exclude<keyof I["censusProof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                    c?: (string[] & string[] & { [K_7 in Exclude<keyof I["censusProof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                    publicInputs?: (string[] & string[] & { [K_8 in Exclude<keyof I["censusProof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                } & { [K_9 in Exclude<keyof I["censusProof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                $case: "zkSnark";
            } & { [K_10 in Exclude<keyof I["censusProof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["censusProof"], "payload">]: never; }) | undefined;
        SIK?: Uint8Array | undefined;
    } & { [K_12 in Exclude<keyof I, keyof RegisterSIKTx>]: never; }>(base?: I | undefined): RegisterSIKTx;
    fromPartial<I_1 extends {
        electionId?: Uint8Array | undefined;
        censusProof?: {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } | undefined;
        SIK?: Uint8Array | undefined;
    } & {
        electionId?: Uint8Array | undefined;
        censusProof?: ({
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            }) | undefined;
        } & {
            payload?: ({
                ca?: {
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "ca";
            } & {
                ca?: ({
                    type?: ProofCA_Type | undefined;
                    bundle?: {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    type?: ProofCA_Type | undefined;
                    bundle?: ({
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & {
                        processId?: Uint8Array | undefined;
                        address?: Uint8Array | undefined;
                        voteWeight?: Uint8Array | undefined;
                    } & { [K_13 in Exclude<keyof I_1["censusProof"]["payload"]["ca"]["bundle"], keyof CAbundle>]: never; }) | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_14 in Exclude<keyof I_1["censusProof"]["payload"]["ca"], keyof ProofCA>]: never; }) | undefined;
                $case: "ca";
            } & { [K_15 in Exclude<keyof I_1["censusProof"]["payload"], "$case" | "ca">]: never; }) | ({
                arbo?: {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } | undefined;
            } & {
                $case: "arbo";
            } & {
                arbo?: ({
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & {
                    type?: ProofArbo_Type | undefined;
                    siblings?: Uint8Array | undefined;
                    availableWeight?: Uint8Array | undefined;
                    keyType?: ProofArbo_KeyType | undefined;
                    voteWeight?: Uint8Array | undefined;
                } & { [K_16 in Exclude<keyof I_1["censusProof"]["payload"]["arbo"], keyof ProofArbo>]: never; }) | undefined;
                $case: "arbo";
            } & { [K_17 in Exclude<keyof I_1["censusProof"]["payload"], "$case" | "arbo">]: never; }) | ({
                zkSnark?: {
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } | undefined;
            } & {
                $case: "zkSnark";
            } & {
                zkSnark?: ({
                    circuitParametersIndex?: number | undefined;
                    a?: string[] | undefined;
                    b?: string[] | undefined;
                    c?: string[] | undefined;
                    publicInputs?: string[] | undefined;
                } & {
                    circuitParametersIndex?: number | undefined;
                    a?: (string[] & string[] & { [K_18 in Exclude<keyof I_1["censusProof"]["payload"]["zkSnark"]["a"], keyof string[]>]: never; }) | undefined;
                    b?: (string[] & string[] & { [K_19 in Exclude<keyof I_1["censusProof"]["payload"]["zkSnark"]["b"], keyof string[]>]: never; }) | undefined;
                    c?: (string[] & string[] & { [K_20 in Exclude<keyof I_1["censusProof"]["payload"]["zkSnark"]["c"], keyof string[]>]: never; }) | undefined;
                    publicInputs?: (string[] & string[] & { [K_21 in Exclude<keyof I_1["censusProof"]["payload"]["zkSnark"]["publicInputs"], keyof string[]>]: never; }) | undefined;
                } & { [K_22 in Exclude<keyof I_1["censusProof"]["payload"]["zkSnark"], keyof ProofZkSNARK>]: never; }) | undefined;
                $case: "zkSnark";
            } & { [K_23 in Exclude<keyof I_1["censusProof"]["payload"], "$case" | "zkSnark">]: never; }) | undefined;
        } & { [K_24 in Exclude<keyof I_1["censusProof"], "payload">]: never; }) | undefined;
        SIK?: Uint8Array | undefined;
    } & { [K_25 in Exclude<keyof I_1, keyof RegisterSIKTx>]: never; }>(object: I_1): RegisterSIKTx;
};
interface CollectFaucetTx {
    txType: TxType;
    faucetPackage: FaucetPackage | undefined;
    nonce: number;
}
declare const CollectFaucetTx: {
    encode(message: CollectFaucetTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollectFaucetTx;
    fromJSON(object: any): CollectFaucetTx;
    toJSON(message: CollectFaucetTx): unknown;
    create<I extends {
        txType?: TxType | undefined;
        faucetPackage?: {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        nonce?: number | undefined;
    } & {
        txType?: TxType | undefined;
        faucetPackage?: ({
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
        nonce?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CollectFaucetTx>]: never; }>(base?: I | undefined): CollectFaucetTx;
    fromPartial<I_1 extends {
        txType?: TxType | undefined;
        faucetPackage?: {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        nonce?: number | undefined;
    } & {
        txType?: TxType | undefined;
        faucetPackage?: ({
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            payload?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I_1["faucetPackage"], keyof FaucetPackage>]: never; }) | undefined;
        nonce?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof CollectFaucetTx>]: never; }>(object: I_1): CollectFaucetTx;
};
interface FaucetPayload {
    identifier: number;
    to: Uint8Array;
    amount: number;
}
declare const FaucetPayload: {
    encode(message: FaucetPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FaucetPayload;
    fromJSON(object: any): FaucetPayload;
    toJSON(message: FaucetPayload): unknown;
    create<I extends {
        identifier?: number | undefined;
        to?: Uint8Array | undefined;
        amount?: number | undefined;
    } & {
        identifier?: number | undefined;
        to?: Uint8Array | undefined;
        amount?: number | undefined;
    } & { [K in Exclude<keyof I, keyof FaucetPayload>]: never; }>(base?: I | undefined): FaucetPayload;
    fromPartial<I_1 extends {
        identifier?: number | undefined;
        to?: Uint8Array | undefined;
        amount?: number | undefined;
    } & {
        identifier?: number | undefined;
        to?: Uint8Array | undefined;
        amount?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof FaucetPayload>]: never; }>(object: I_1): FaucetPayload;
};
interface FaucetPackage {
    payload: Uint8Array;
    signature: Uint8Array;
}
declare const FaucetPackage: {
    encode(message: FaucetPackage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FaucetPackage;
    fromJSON(object: any): FaucetPackage;
    toJSON(message: FaucetPackage): unknown;
    create<I extends {
        payload?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
    } & {
        payload?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof FaucetPackage>]: never; }>(base?: I | undefined): FaucetPackage;
    fromPartial<I_1 extends {
        payload?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
    } & {
        payload?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof FaucetPackage>]: never; }>(object: I_1): FaucetPackage;
};
interface SetKeykeeperTx {
    txtype: TxType;
    nonce: number;
    keykeeper: Uint8Array;
}
declare const SetKeykeeperTx: {
    encode(message: SetKeykeeperTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetKeykeeperTx;
    fromJSON(object: any): SetKeykeeperTx;
    toJSON(message: SetKeykeeperTx): unknown;
    create<I extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        keykeeper?: Uint8Array | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        keykeeper?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof SetKeykeeperTx>]: never; }>(base?: I | undefined): SetKeykeeperTx;
    fromPartial<I_1 extends {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        keykeeper?: Uint8Array | undefined;
    } & {
        txtype?: TxType | undefined;
        nonce?: number | undefined;
        keykeeper?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SetKeykeeperTx>]: never; }>(object: I_1): SetKeykeeperTx;
};
interface Process {
    processId: Uint8Array;
    /** EntityId identifies unequivocally an entity */
    entityId: Uint8Array;
    /** StartBlock represents the tendermint block where the process goes from scheduled to active */
    startBlock: number;
    /** BlockCount represents the amount of tendermint blocks that the process will last */
    blockCount: number;
    /** CensusRoot merkle root of all the census in the process */
    censusRoot: Uint8Array;
    /** CensusURI where to find the census */
    censusURI?: string | undefined;
    /** EncryptionPrivateKeys are the keys required to decrypt the votes */
    encryptionPrivateKeys: string[];
    /** EncryptionPublicKeys are the keys required to encrypt the votes */
    encryptionPublicKeys: string[];
    keyIndex?: number | undefined;
    status: ProcessStatus;
    paramsSignature?: Uint8Array | undefined;
    namespace: number;
    envelopeType: EnvelopeType | undefined;
    mode: ProcessMode | undefined;
    questionIndex?: number | undefined;
    questionCount?: number | undefined;
    voteOptions: ProcessVoteOptions | undefined;
    censusOrigin: CensusOrigin;
    results: ProcessResult | undefined;
    ethIndexSlot?: number | undefined;
    /** SourceBlockHeight is the block height of the origin blockchain (if any) */
    sourceBlockHeight?: number | undefined;
    /** Owner is the creator of a process (if any) otherwise is assumed the creator is the entityId */
    owner?: Uint8Array | undefined;
    /** Metadata is the content hashed URI of the JSON meta data (See Data Origins) */
    metadata?: string | undefined;
    /** SourceNetworkId is the identifier of the network origin (where the process have been created) */
    sourceNetworkId: SourceNetworkId;
    /** MaxCensusSize is set by the Process creator, indicates the maximum number of votes that will be allowed. */
    maxCensusSize: number;
    /**
     * RollingCensusRoot merkle root of the rolling census.  Set by the
     * vocdoni-node when Mode.Process = true
     */
    rollingCensusRoot?: Uint8Array | undefined;
    /**
     * RollingCensusSize is set by the vocdoni-node when Mode.PreRegister =
     * true and the StartBlock has been reached.
     */
    rollingCensusSize?: number | undefined;
    /**
     * NullifiersRoot is the root of the pre-census nullifiers merkle tree.
     * Used when Mode.PreRegister = true.
     */
    nullifiersRoot?: Uint8Array | undefined;
    /**
     * sourceNetworkContractAddr is used for EVM token based voting and it is
     * the contract address of the token that is going to define the census
     */
    sourceNetworkContractAddr?: Uint8Array | undefined;
    /**
     * tokenDecimals represents the number of decimals of the token (i.e ERC20) used for voting.
     * It is normally used for processes with on-chain census
     */
    tokenDecimals?: number | undefined;
    /**
     * tempSIKs flag decides if when the process has finished, the SIKs related
     * to it will be removed or not
     */
    tempSIKs?: boolean | undefined;
    /** The unix timestamp of the start of the process */
    startTime: number;
    /** The duration of the process in seconds */
    duration: number;
}
declare const Process: {
    encode(message: Process, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Process;
    fromJSON(object: any): Process;
    toJSON(message: Process): unknown;
    create<I extends {
        processId?: Uint8Array | undefined;
        entityId?: Uint8Array | undefined;
        startBlock?: number | undefined;
        blockCount?: number | undefined;
        censusRoot?: Uint8Array | undefined;
        censusURI?: string | undefined;
        encryptionPrivateKeys?: string[] | undefined;
        encryptionPublicKeys?: string[] | undefined;
        keyIndex?: number | undefined;
        status?: ProcessStatus | undefined;
        paramsSignature?: Uint8Array | undefined;
        namespace?: number | undefined;
        envelopeType?: {
            serial?: boolean | undefined;
            anonymous?: boolean | undefined;
            encryptedVotes?: boolean | undefined;
            uniqueValues?: boolean | undefined;
            costFromWeight?: boolean | undefined;
        } | undefined;
        mode?: {
            autoStart?: boolean | undefined;
            interruptible?: boolean | undefined;
            dynamicCensus?: boolean | undefined;
            encryptedMetaData?: boolean | undefined;
            preRegister?: boolean | undefined;
        } | undefined;
        questionIndex?: number | undefined;
        questionCount?: number | undefined;
        voteOptions?: {
            maxCount?: number | undefined;
            maxValue?: number | undefined;
            maxVoteOverwrites?: number | undefined;
            maxTotalCost?: number | undefined;
            costExponent?: number | undefined;
        } | undefined;
        censusOrigin?: CensusOrigin | undefined;
        results?: {
            votes?: {
                question?: Uint8Array[] | undefined;
            }[] | undefined;
        } | undefined;
        ethIndexSlot?: number | undefined;
        sourceBlockHeight?: number | undefined;
        owner?: Uint8Array | undefined;
        metadata?: string | undefined;
        sourceNetworkId?: SourceNetworkId | undefined;
        maxCensusSize?: number | undefined;
        rollingCensusRoot?: Uint8Array | undefined;
        rollingCensusSize?: number | undefined;
        nullifiersRoot?: Uint8Array | undefined;
        sourceNetworkContractAddr?: Uint8Array | undefined;
        tokenDecimals?: number | undefined;
        tempSIKs?: boolean | undefined;
        startTime?: number | undefined;
        duration?: number | undefined;
    } & {
        processId?: Uint8Array | undefined;
        entityId?: Uint8Array | undefined;
        startBlock?: number | undefined;
        blockCount?: number | undefined;
        censusRoot?: Uint8Array | undefined;
        censusURI?: string | undefined;
        encryptionPrivateKeys?: (string[] & string[] & { [K in Exclude<keyof I["encryptionPrivateKeys"], keyof string[]>]: never; }) | undefined;
        encryptionPublicKeys?: (string[] & string[] & { [K_1 in Exclude<keyof I["encryptionPublicKeys"], keyof string[]>]: never; }) | undefined;
        keyIndex?: number | undefined;
        status?: ProcessStatus | undefined;
        paramsSignature?: Uint8Array | undefined;
        namespace?: number | undefined;
        envelopeType?: ({
            serial?: boolean | undefined;
            anonymous?: boolean | undefined;
            encryptedVotes?: boolean | undefined;
            uniqueValues?: boolean | undefined;
            costFromWeight?: boolean | undefined;
        } & {
            serial?: boolean | undefined;
            anonymous?: boolean | undefined;
            encryptedVotes?: boolean | undefined;
            uniqueValues?: boolean | undefined;
            costFromWeight?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I["envelopeType"], keyof EnvelopeType>]: never; }) | undefined;
        mode?: ({
            autoStart?: boolean | undefined;
            interruptible?: boolean | undefined;
            dynamicCensus?: boolean | undefined;
            encryptedMetaData?: boolean | undefined;
            preRegister?: boolean | undefined;
        } & {
            autoStart?: boolean | undefined;
            interruptible?: boolean | undefined;
            dynamicCensus?: boolean | undefined;
            encryptedMetaData?: boolean | undefined;
            preRegister?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["mode"], keyof ProcessMode>]: never; }) | undefined;
        questionIndex?: number | undefined;
        questionCount?: number | undefined;
        voteOptions?: ({
            maxCount?: number | undefined;
            maxValue?: number | undefined;
            maxVoteOverwrites?: number | undefined;
            maxTotalCost?: number | undefined;
            costExponent?: number | undefined;
        } & {
            maxCount?: number | undefined;
            maxValue?: number | undefined;
            maxVoteOverwrites?: number | undefined;
            maxTotalCost?: number | undefined;
            costExponent?: number | undefined;
        } & { [K_4 in Exclude<keyof I["voteOptions"], keyof ProcessVoteOptions>]: never; }) | undefined;
        censusOrigin?: CensusOrigin | undefined;
        results?: ({
            votes?: {
                question?: Uint8Array[] | undefined;
            }[] | undefined;
        } & {
            votes?: ({
                question?: Uint8Array[] | undefined;
            }[] & ({
                question?: Uint8Array[] | undefined;
            } & {
                question?: (Uint8Array[] & Uint8Array[] & { [K_5 in Exclude<keyof I["results"]["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["results"]["votes"][number], "question">]: never; })[] & { [K_7 in Exclude<keyof I["results"]["votes"], keyof {
                question?: Uint8Array[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["results"], "votes">]: never; }) | undefined;
        ethIndexSlot?: number | undefined;
        sourceBlockHeight?: number | undefined;
        owner?: Uint8Array | undefined;
        metadata?: string | undefined;
        sourceNetworkId?: SourceNetworkId | undefined;
        maxCensusSize?: number | undefined;
        rollingCensusRoot?: Uint8Array | undefined;
        rollingCensusSize?: number | undefined;
        nullifiersRoot?: Uint8Array | undefined;
        sourceNetworkContractAddr?: Uint8Array | undefined;
        tokenDecimals?: number | undefined;
        tempSIKs?: boolean | undefined;
        startTime?: number | undefined;
        duration?: number | undefined;
    } & { [K_9 in Exclude<keyof I, keyof Process>]: never; }>(base?: I | undefined): Process;
    fromPartial<I_1 extends {
        processId?: Uint8Array | undefined;
        entityId?: Uint8Array | undefined;
        startBlock?: number | undefined;
        blockCount?: number | undefined;
        censusRoot?: Uint8Array | undefined;
        censusURI?: string | undefined;
        encryptionPrivateKeys?: string[] | undefined;
        encryptionPublicKeys?: string[] | undefined;
        keyIndex?: number | undefined;
        status?: ProcessStatus | undefined;
        paramsSignature?: Uint8Array | undefined;
        namespace?: number | undefined;
        envelopeType?: {
            serial?: boolean | undefined;
            anonymous?: boolean | undefined;
            encryptedVotes?: boolean | undefined;
            uniqueValues?: boolean | undefined;
            costFromWeight?: boolean | undefined;
        } | undefined;
        mode?: {
            autoStart?: boolean | undefined;
            interruptible?: boolean | undefined;
            dynamicCensus?: boolean | undefined;
            encryptedMetaData?: boolean | undefined;
            preRegister?: boolean | undefined;
        } | undefined;
        questionIndex?: number | undefined;
        questionCount?: number | undefined;
        voteOptions?: {
            maxCount?: number | undefined;
            maxValue?: number | undefined;
            maxVoteOverwrites?: number | undefined;
            maxTotalCost?: number | undefined;
            costExponent?: number | undefined;
        } | undefined;
        censusOrigin?: CensusOrigin | undefined;
        results?: {
            votes?: {
                question?: Uint8Array[] | undefined;
            }[] | undefined;
        } | undefined;
        ethIndexSlot?: number | undefined;
        sourceBlockHeight?: number | undefined;
        owner?: Uint8Array | undefined;
        metadata?: string | undefined;
        sourceNetworkId?: SourceNetworkId | undefined;
        maxCensusSize?: number | undefined;
        rollingCensusRoot?: Uint8Array | undefined;
        rollingCensusSize?: number | undefined;
        nullifiersRoot?: Uint8Array | undefined;
        sourceNetworkContractAddr?: Uint8Array | undefined;
        tokenDecimals?: number | undefined;
        tempSIKs?: boolean | undefined;
        startTime?: number | undefined;
        duration?: number | undefined;
    } & {
        processId?: Uint8Array | undefined;
        entityId?: Uint8Array | undefined;
        startBlock?: number | undefined;
        blockCount?: number | undefined;
        censusRoot?: Uint8Array | undefined;
        censusURI?: string | undefined;
        encryptionPrivateKeys?: (string[] & string[] & { [K_10 in Exclude<keyof I_1["encryptionPrivateKeys"], keyof string[]>]: never; }) | undefined;
        encryptionPublicKeys?: (string[] & string[] & { [K_11 in Exclude<keyof I_1["encryptionPublicKeys"], keyof string[]>]: never; }) | undefined;
        keyIndex?: number | undefined;
        status?: ProcessStatus | undefined;
        paramsSignature?: Uint8Array | undefined;
        namespace?: number | undefined;
        envelopeType?: ({
            serial?: boolean | undefined;
            anonymous?: boolean | undefined;
            encryptedVotes?: boolean | undefined;
            uniqueValues?: boolean | undefined;
            costFromWeight?: boolean | undefined;
        } & {
            serial?: boolean | undefined;
            anonymous?: boolean | undefined;
            encryptedVotes?: boolean | undefined;
            uniqueValues?: boolean | undefined;
            costFromWeight?: boolean | undefined;
        } & { [K_12 in Exclude<keyof I_1["envelopeType"], keyof EnvelopeType>]: never; }) | undefined;
        mode?: ({
            autoStart?: boolean | undefined;
            interruptible?: boolean | undefined;
            dynamicCensus?: boolean | undefined;
            encryptedMetaData?: boolean | undefined;
            preRegister?: boolean | undefined;
        } & {
            autoStart?: boolean | undefined;
            interruptible?: boolean | undefined;
            dynamicCensus?: boolean | undefined;
            encryptedMetaData?: boolean | undefined;
            preRegister?: boolean | undefined;
        } & { [K_13 in Exclude<keyof I_1["mode"], keyof ProcessMode>]: never; }) | undefined;
        questionIndex?: number | undefined;
        questionCount?: number | undefined;
        voteOptions?: ({
            maxCount?: number | undefined;
            maxValue?: number | undefined;
            maxVoteOverwrites?: number | undefined;
            maxTotalCost?: number | undefined;
            costExponent?: number | undefined;
        } & {
            maxCount?: number | undefined;
            maxValue?: number | undefined;
            maxVoteOverwrites?: number | undefined;
            maxTotalCost?: number | undefined;
            costExponent?: number | undefined;
        } & { [K_14 in Exclude<keyof I_1["voteOptions"], keyof ProcessVoteOptions>]: never; }) | undefined;
        censusOrigin?: CensusOrigin | undefined;
        results?: ({
            votes?: {
                question?: Uint8Array[] | undefined;
            }[] | undefined;
        } & {
            votes?: ({
                question?: Uint8Array[] | undefined;
            }[] & ({
                question?: Uint8Array[] | undefined;
            } & {
                question?: (Uint8Array[] & Uint8Array[] & { [K_15 in Exclude<keyof I_1["results"]["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I_1["results"]["votes"][number], "question">]: never; })[] & { [K_17 in Exclude<keyof I_1["results"]["votes"], keyof {
                question?: Uint8Array[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_18 in Exclude<keyof I_1["results"], "votes">]: never; }) | undefined;
        ethIndexSlot?: number | undefined;
        sourceBlockHeight?: number | undefined;
        owner?: Uint8Array | undefined;
        metadata?: string | undefined;
        sourceNetworkId?: SourceNetworkId | undefined;
        maxCensusSize?: number | undefined;
        rollingCensusRoot?: Uint8Array | undefined;
        rollingCensusSize?: number | undefined;
        nullifiersRoot?: Uint8Array | undefined;
        sourceNetworkContractAddr?: Uint8Array | undefined;
        tokenDecimals?: number | undefined;
        tempSIKs?: boolean | undefined;
        startTime?: number | undefined;
        duration?: number | undefined;
    } & { [K_19 in Exclude<keyof I_1, keyof Process>]: never; }>(object: I_1): Process;
};
interface EnvelopeType {
    serial: boolean;
    anonymous: boolean;
    encryptedVotes: boolean;
    uniqueValues: boolean;
    costFromWeight: boolean;
}
declare const EnvelopeType: {
    encode(message: EnvelopeType, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EnvelopeType;
    fromJSON(object: any): EnvelopeType;
    toJSON(message: EnvelopeType): unknown;
    create<I extends {
        serial?: boolean | undefined;
        anonymous?: boolean | undefined;
        encryptedVotes?: boolean | undefined;
        uniqueValues?: boolean | undefined;
        costFromWeight?: boolean | undefined;
    } & {
        serial?: boolean | undefined;
        anonymous?: boolean | undefined;
        encryptedVotes?: boolean | undefined;
        uniqueValues?: boolean | undefined;
        costFromWeight?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof EnvelopeType>]: never; }>(base?: I | undefined): EnvelopeType;
    fromPartial<I_1 extends {
        serial?: boolean | undefined;
        anonymous?: boolean | undefined;
        encryptedVotes?: boolean | undefined;
        uniqueValues?: boolean | undefined;
        costFromWeight?: boolean | undefined;
    } & {
        serial?: boolean | undefined;
        anonymous?: boolean | undefined;
        encryptedVotes?: boolean | undefined;
        uniqueValues?: boolean | undefined;
        costFromWeight?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EnvelopeType>]: never; }>(object: I_1): EnvelopeType;
};
interface ProcessMode {
    autoStart: boolean;
    interruptible: boolean;
    dynamicCensus: boolean;
    encryptedMetaData: boolean;
    preRegister: boolean;
}
declare const ProcessMode: {
    encode(message: ProcessMode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessMode;
    fromJSON(object: any): ProcessMode;
    toJSON(message: ProcessMode): unknown;
    create<I extends {
        autoStart?: boolean | undefined;
        interruptible?: boolean | undefined;
        dynamicCensus?: boolean | undefined;
        encryptedMetaData?: boolean | undefined;
        preRegister?: boolean | undefined;
    } & {
        autoStart?: boolean | undefined;
        interruptible?: boolean | undefined;
        dynamicCensus?: boolean | undefined;
        encryptedMetaData?: boolean | undefined;
        preRegister?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof ProcessMode>]: never; }>(base?: I | undefined): ProcessMode;
    fromPartial<I_1 extends {
        autoStart?: boolean | undefined;
        interruptible?: boolean | undefined;
        dynamicCensus?: boolean | undefined;
        encryptedMetaData?: boolean | undefined;
        preRegister?: boolean | undefined;
    } & {
        autoStart?: boolean | undefined;
        interruptible?: boolean | undefined;
        dynamicCensus?: boolean | undefined;
        encryptedMetaData?: boolean | undefined;
        preRegister?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ProcessMode>]: never; }>(object: I_1): ProcessMode;
};
interface ProcessVoteOptions {
    maxCount: number;
    maxValue: number;
    maxVoteOverwrites: number;
    maxTotalCost: number;
    costExponent: number;
}
declare const ProcessVoteOptions: {
    encode(message: ProcessVoteOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessVoteOptions;
    fromJSON(object: any): ProcessVoteOptions;
    toJSON(message: ProcessVoteOptions): unknown;
    create<I extends {
        maxCount?: number | undefined;
        maxValue?: number | undefined;
        maxVoteOverwrites?: number | undefined;
        maxTotalCost?: number | undefined;
        costExponent?: number | undefined;
    } & {
        maxCount?: number | undefined;
        maxValue?: number | undefined;
        maxVoteOverwrites?: number | undefined;
        maxTotalCost?: number | undefined;
        costExponent?: number | undefined;
    } & { [K in Exclude<keyof I, keyof ProcessVoteOptions>]: never; }>(base?: I | undefined): ProcessVoteOptions;
    fromPartial<I_1 extends {
        maxCount?: number | undefined;
        maxValue?: number | undefined;
        maxVoteOverwrites?: number | undefined;
        maxTotalCost?: number | undefined;
        costExponent?: number | undefined;
    } & {
        maxCount?: number | undefined;
        maxValue?: number | undefined;
        maxVoteOverwrites?: number | undefined;
        maxTotalCost?: number | undefined;
        costExponent?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ProcessVoteOptions>]: never; }>(object: I_1): ProcessVoteOptions;
};
interface OracleList {
    oracles: Uint8Array[];
}
declare const OracleList: {
    encode(message: OracleList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleList;
    fromJSON(object: any): OracleList;
    toJSON(message: OracleList): unknown;
    create<I extends {
        oracles?: Uint8Array[] | undefined;
    } & {
        oracles?: (Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["oracles"], keyof Uint8Array[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "oracles">]: never; }>(base?: I | undefined): OracleList;
    fromPartial<I_1 extends {
        oracles?: Uint8Array[] | undefined;
    } & {
        oracles?: (Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I_1["oracles"], keyof Uint8Array[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "oracles">]: never; }>(object: I_1): OracleList;
};
interface ValidatorList {
    validators: Validator[];
}
declare const ValidatorList: {
    encode(message: ValidatorList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorList;
    fromJSON(object: any): ValidatorList;
    toJSON(message: ValidatorList): unknown;
    create<I extends {
        validators?: {
            address?: Uint8Array | undefined;
            pubKey?: Uint8Array | undefined;
            power?: number | undefined;
            name?: string | undefined;
            keyIndex?: number | undefined;
            height?: number | undefined;
            proposals?: number | undefined;
            votes?: number | undefined;
            validatorAddress?: Uint8Array | undefined;
            score?: number | undefined;
        }[] | undefined;
    } & {
        validators?: ({
            address?: Uint8Array | undefined;
            pubKey?: Uint8Array | undefined;
            power?: number | undefined;
            name?: string | undefined;
            keyIndex?: number | undefined;
            height?: number | undefined;
            proposals?: number | undefined;
            votes?: number | undefined;
            validatorAddress?: Uint8Array | undefined;
            score?: number | undefined;
        }[] & ({
            address?: Uint8Array | undefined;
            pubKey?: Uint8Array | undefined;
            power?: number | undefined;
            name?: string | undefined;
            keyIndex?: number | undefined;
            height?: number | undefined;
            proposals?: number | undefined;
            votes?: number | undefined;
            validatorAddress?: Uint8Array | undefined;
            score?: number | undefined;
        } & {
            address?: Uint8Array | undefined;
            pubKey?: Uint8Array | undefined;
            power?: number | undefined;
            name?: string | undefined;
            keyIndex?: number | undefined;
            height?: number | undefined;
            proposals?: number | undefined;
            votes?: number | undefined;
            validatorAddress?: Uint8Array | undefined;
            score?: number | undefined;
        } & { [K in Exclude<keyof I["validators"][number], keyof Validator>]: never; })[] & { [K_1 in Exclude<keyof I["validators"], keyof {
            address?: Uint8Array | undefined;
            pubKey?: Uint8Array | undefined;
            power?: number | undefined;
            name?: string | undefined;
            keyIndex?: number | undefined;
            height?: number | undefined;
            proposals?: number | undefined;
            votes?: number | undefined;
            validatorAddress?: Uint8Array | undefined;
            score?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "validators">]: never; }>(base?: I | undefined): ValidatorList;
    fromPartial<I_1 extends {
        validators?: {
            address?: Uint8Array | undefined;
            pubKey?: Uint8Array | undefined;
            power?: number | undefined;
            name?: string | undefined;
            keyIndex?: number | undefined;
            height?: number | undefined;
            proposals?: number | undefined;
            votes?: number | undefined;
            validatorAddress?: Uint8Array | undefined;
            score?: number | undefined;
        }[] | undefined;
    } & {
        validators?: ({
            address?: Uint8Array | undefined;
            pubKey?: Uint8Array | undefined;
            power?: number | undefined;
            name?: string | undefined;
            keyIndex?: number | undefined;
            height?: number | undefined;
            proposals?: number | undefined;
            votes?: number | undefined;
            validatorAddress?: Uint8Array | undefined;
            score?: number | undefined;
        }[] & ({
            address?: Uint8Array | undefined;
            pubKey?: Uint8Array | undefined;
            power?: number | undefined;
            name?: string | undefined;
            keyIndex?: number | undefined;
            height?: number | undefined;
            proposals?: number | undefined;
            votes?: number | undefined;
            validatorAddress?: Uint8Array | undefined;
            score?: number | undefined;
        } & {
            address?: Uint8Array | undefined;
            pubKey?: Uint8Array | undefined;
            power?: number | undefined;
            name?: string | undefined;
            keyIndex?: number | undefined;
            height?: number | undefined;
            proposals?: number | undefined;
            votes?: number | undefined;
            validatorAddress?: Uint8Array | undefined;
            score?: number | undefined;
        } & { [K_3 in Exclude<keyof I_1["validators"][number], keyof Validator>]: never; })[] & { [K_4 in Exclude<keyof I_1["validators"], keyof {
            address?: Uint8Array | undefined;
            pubKey?: Uint8Array | undefined;
            power?: number | undefined;
            name?: string | undefined;
            keyIndex?: number | undefined;
            height?: number | undefined;
            proposals?: number | undefined;
            votes?: number | undefined;
            validatorAddress?: Uint8Array | undefined;
            score?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "validators">]: never; }>(object: I_1): ValidatorList;
};
interface Validator {
    address: Uint8Array;
    pubKey: Uint8Array;
    power: number;
    name: string;
    keyIndex: number;
    height: number;
    proposals: number;
    votes: number;
    validatorAddress: Uint8Array;
    score: number;
}
declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    create<I extends {
        address?: Uint8Array | undefined;
        pubKey?: Uint8Array | undefined;
        power?: number | undefined;
        name?: string | undefined;
        keyIndex?: number | undefined;
        height?: number | undefined;
        proposals?: number | undefined;
        votes?: number | undefined;
        validatorAddress?: Uint8Array | undefined;
        score?: number | undefined;
    } & {
        address?: Uint8Array | undefined;
        pubKey?: Uint8Array | undefined;
        power?: number | undefined;
        name?: string | undefined;
        keyIndex?: number | undefined;
        height?: number | undefined;
        proposals?: number | undefined;
        votes?: number | undefined;
        validatorAddress?: Uint8Array | undefined;
        score?: number | undefined;
    } & { [K in Exclude<keyof I, keyof Validator>]: never; }>(base?: I | undefined): Validator;
    fromPartial<I_1 extends {
        address?: Uint8Array | undefined;
        pubKey?: Uint8Array | undefined;
        power?: number | undefined;
        name?: string | undefined;
        keyIndex?: number | undefined;
        height?: number | undefined;
        proposals?: number | undefined;
        votes?: number | undefined;
        validatorAddress?: Uint8Array | undefined;
        score?: number | undefined;
    } & {
        address?: Uint8Array | undefined;
        pubKey?: Uint8Array | undefined;
        power?: number | undefined;
        name?: string | undefined;
        keyIndex?: number | undefined;
        height?: number | undefined;
        proposals?: number | undefined;
        votes?: number | undefined;
        validatorAddress?: Uint8Array | undefined;
        score?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Validator>]: never; }>(object: I_1): Validator;
};
interface TendermintHeader {
    /** basic block info */
    chainId: string;
    height: number;
    timestamp: number;
    /** prev block info */
    blockID: Uint8Array;
    /** hashes of block data */
    lastCommitHash: Uint8Array;
    /** transactions */
    dataHash: Uint8Array;
    /** hashes from the app output from the prev block */
    validatorsHash: Uint8Array;
    /** validators for the next block */
    nextValidatorsHash: Uint8Array;
    /** consensus params for current block */
    consensusHash: Uint8Array;
    /** state after txs from the previous block */
    appHash: Uint8Array;
    /** root hash of all results from the txs from the previous block */
    lastResultsHash: Uint8Array;
    /** consensus info */
    evidenceHash: Uint8Array;
    /** original proposer of the block */
    proposerAddress: Uint8Array;
}
declare const TendermintHeader: {
    encode(message: TendermintHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TendermintHeader;
    fromJSON(object: any): TendermintHeader;
    toJSON(message: TendermintHeader): unknown;
    create<I extends {
        chainId?: string | undefined;
        height?: number | undefined;
        timestamp?: number | undefined;
        blockID?: Uint8Array | undefined;
        lastCommitHash?: Uint8Array | undefined;
        dataHash?: Uint8Array | undefined;
        validatorsHash?: Uint8Array | undefined;
        nextValidatorsHash?: Uint8Array | undefined;
        consensusHash?: Uint8Array | undefined;
        appHash?: Uint8Array | undefined;
        lastResultsHash?: Uint8Array | undefined;
        evidenceHash?: Uint8Array | undefined;
        proposerAddress?: Uint8Array | undefined;
    } & {
        chainId?: string | undefined;
        height?: number | undefined;
        timestamp?: number | undefined;
        blockID?: Uint8Array | undefined;
        lastCommitHash?: Uint8Array | undefined;
        dataHash?: Uint8Array | undefined;
        validatorsHash?: Uint8Array | undefined;
        nextValidatorsHash?: Uint8Array | undefined;
        consensusHash?: Uint8Array | undefined;
        appHash?: Uint8Array | undefined;
        lastResultsHash?: Uint8Array | undefined;
        evidenceHash?: Uint8Array | undefined;
        proposerAddress?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof TendermintHeader>]: never; }>(base?: I | undefined): TendermintHeader;
    fromPartial<I_1 extends {
        chainId?: string | undefined;
        height?: number | undefined;
        timestamp?: number | undefined;
        blockID?: Uint8Array | undefined;
        lastCommitHash?: Uint8Array | undefined;
        dataHash?: Uint8Array | undefined;
        validatorsHash?: Uint8Array | undefined;
        nextValidatorsHash?: Uint8Array | undefined;
        consensusHash?: Uint8Array | undefined;
        appHash?: Uint8Array | undefined;
        lastResultsHash?: Uint8Array | undefined;
        evidenceHash?: Uint8Array | undefined;
        proposerAddress?: Uint8Array | undefined;
    } & {
        chainId?: string | undefined;
        height?: number | undefined;
        timestamp?: number | undefined;
        blockID?: Uint8Array | undefined;
        lastCommitHash?: Uint8Array | undefined;
        dataHash?: Uint8Array | undefined;
        validatorsHash?: Uint8Array | undefined;
        nextValidatorsHash?: Uint8Array | undefined;
        consensusHash?: Uint8Array | undefined;
        appHash?: Uint8Array | undefined;
        lastResultsHash?: Uint8Array | undefined;
        evidenceHash?: Uint8Array | undefined;
        proposerAddress?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TendermintHeader>]: never; }>(object: I_1): TendermintHeader;
};
interface ProcessResult {
    votes: QuestionResult[];
}
declare const ProcessResult: {
    encode(message: ProcessResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessResult;
    fromJSON(object: any): ProcessResult;
    toJSON(message: ProcessResult): unknown;
    create<I extends {
        votes?: {
            question?: Uint8Array[] | undefined;
        }[] | undefined;
    } & {
        votes?: ({
            question?: Uint8Array[] | undefined;
        }[] & ({
            question?: Uint8Array[] | undefined;
        } & {
            question?: (Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["votes"][number], "question">]: never; })[] & { [K_2 in Exclude<keyof I["votes"], keyof {
            question?: Uint8Array[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "votes">]: never; }>(base?: I | undefined): ProcessResult;
    fromPartial<I_1 extends {
        votes?: {
            question?: Uint8Array[] | undefined;
        }[] | undefined;
    } & {
        votes?: ({
            question?: Uint8Array[] | undefined;
        }[] & ({
            question?: Uint8Array[] | undefined;
        } & {
            question?: (Uint8Array[] & Uint8Array[] & { [K_4 in Exclude<keyof I_1["votes"][number]["question"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I_1["votes"][number], "question">]: never; })[] & { [K_6 in Exclude<keyof I_1["votes"], keyof {
            question?: Uint8Array[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "votes">]: never; }>(object: I_1): ProcessResult;
};
interface QuestionResult {
    question: Uint8Array[];
}
declare const QuestionResult: {
    encode(message: QuestionResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuestionResult;
    fromJSON(object: any): QuestionResult;
    toJSON(message: QuestionResult): unknown;
    create<I extends {
        question?: Uint8Array[] | undefined;
    } & {
        question?: (Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["question"], keyof Uint8Array[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "question">]: never; }>(base?: I | undefined): QuestionResult;
    fromPartial<I_1 extends {
        question?: Uint8Array[] | undefined;
    } & {
        question?: (Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I_1["question"], keyof Uint8Array[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "question">]: never; }>(object: I_1): QuestionResult;
};
interface ProcessEndingList {
    processList: Uint8Array[];
}
declare const ProcessEndingList: {
    encode(message: ProcessEndingList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessEndingList;
    fromJSON(object: any): ProcessEndingList;
    toJSON(message: ProcessEndingList): unknown;
    create<I extends {
        processList?: Uint8Array[] | undefined;
    } & {
        processList?: (Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["processList"], keyof Uint8Array[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "processList">]: never; }>(base?: I | undefined): ProcessEndingList;
    fromPartial<I_1 extends {
        processList?: Uint8Array[] | undefined;
    } & {
        processList?: (Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I_1["processList"], keyof Uint8Array[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "processList">]: never; }>(object: I_1): ProcessEndingList;
};
/** KeyKeeper */
interface StoredKeys {
    pids: Uint8Array[];
}
declare const StoredKeys: {
    encode(message: StoredKeys, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoredKeys;
    fromJSON(object: any): StoredKeys;
    toJSON(message: StoredKeys): unknown;
    create<I extends {
        pids?: Uint8Array[] | undefined;
    } & {
        pids?: (Uint8Array[] & Uint8Array[] & { [K in Exclude<keyof I["pids"], keyof Uint8Array[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "pids">]: never; }>(base?: I | undefined): StoredKeys;
    fromPartial<I_1 extends {
        pids?: Uint8Array[] | undefined;
    } & {
        pids?: (Uint8Array[] & Uint8Array[] & { [K_2 in Exclude<keyof I_1["pids"], keyof Uint8Array[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "pids">]: never; }>(object: I_1): StoredKeys;
};

declare const index_Account: typeof Account;
declare const index_AdminTx: typeof AdminTx;
declare const index_CAbundle: typeof CAbundle;
declare const index_Census: typeof Census;
type index_CensusOrigin = CensusOrigin;
declare const index_CensusOrigin: typeof CensusOrigin;
type index_Census_Type = Census_Type;
declare const index_Census_Type: typeof Census_Type;
declare const index_CollectFaucetTx: typeof CollectFaucetTx;
declare const index_EnvelopeType: typeof EnvelopeType;
declare const index_FaucetPackage: typeof FaucetPackage;
declare const index_FaucetPayload: typeof FaucetPayload;
declare const index_NewProcessTx: typeof NewProcessTx;
declare const index_OracleList: typeof OracleList;
declare const index_Process: typeof Process;
declare const index_ProcessEndingList: typeof ProcessEndingList;
declare const index_ProcessMode: typeof ProcessMode;
declare const index_ProcessResult: typeof ProcessResult;
type index_ProcessStatus = ProcessStatus;
declare const index_ProcessStatus: typeof ProcessStatus;
declare const index_ProcessVoteOptions: typeof ProcessVoteOptions;
declare const index_Proof: typeof Proof;
declare const index_ProofArbo: typeof ProofArbo;
type index_ProofArbo_KeyType = ProofArbo_KeyType;
declare const index_ProofArbo_KeyType: typeof ProofArbo_KeyType;
type index_ProofArbo_Type = ProofArbo_Type;
declare const index_ProofArbo_Type: typeof ProofArbo_Type;
declare const index_ProofCA: typeof ProofCA;
type index_ProofCA_Type = ProofCA_Type;
declare const index_ProofCA_Type: typeof ProofCA_Type;
declare const index_ProofZkSNARK: typeof ProofZkSNARK;
declare const index_QuestionResult: typeof QuestionResult;
declare const index_RegisterKeyTx: typeof RegisterKeyTx;
declare const index_RegisterSIKTx: typeof RegisterSIKTx;
declare const index_SIKTx: typeof SIKTx;
declare const index_SendTokensTx: typeof SendTokensTx;
declare const index_SetAccountTx: typeof SetAccountTx;
declare const index_SetKeykeeperTx: typeof SetKeykeeperTx;
declare const index_SetProcessTx: typeof SetProcessTx;
declare const index_SetTransactionCostsTx: typeof SetTransactionCostsTx;
declare const index_SignedTx: typeof SignedTx;
type index_SourceNetworkId = SourceNetworkId;
declare const index_SourceNetworkId: typeof SourceNetworkId;
declare const index_StoredKeys: typeof StoredKeys;
declare const index_TendermintHeader: typeof TendermintHeader;
declare const index_Tx: typeof Tx;
type index_TxType = TxType;
declare const index_TxType: typeof TxType;
declare const index_Validator: typeof Validator;
declare const index_ValidatorList: typeof ValidatorList;
declare const index_VoteEnvelope: typeof VoteEnvelope;
declare const index_censusOriginFromJSON: typeof censusOriginFromJSON;
declare const index_censusOriginToJSON: typeof censusOriginToJSON;
declare const index_census_TypeFromJSON: typeof census_TypeFromJSON;
declare const index_census_TypeToJSON: typeof census_TypeToJSON;
declare const index_processStatusFromJSON: typeof processStatusFromJSON;
declare const index_processStatusToJSON: typeof processStatusToJSON;
declare const index_proofArbo_KeyTypeFromJSON: typeof proofArbo_KeyTypeFromJSON;
declare const index_proofArbo_KeyTypeToJSON: typeof proofArbo_KeyTypeToJSON;
declare const index_proofArbo_TypeFromJSON: typeof proofArbo_TypeFromJSON;
declare const index_proofArbo_TypeToJSON: typeof proofArbo_TypeToJSON;
declare const index_proofCA_TypeFromJSON: typeof proofCA_TypeFromJSON;
declare const index_proofCA_TypeToJSON: typeof proofCA_TypeToJSON;
declare const index_sourceNetworkIdFromJSON: typeof sourceNetworkIdFromJSON;
declare const index_sourceNetworkIdToJSON: typeof sourceNetworkIdToJSON;
declare const index_txTypeFromJSON: typeof txTypeFromJSON;
declare const index_txTypeToJSON: typeof txTypeToJSON;
declare namespace index {
  export {
    index_Account as Account,
    index_AdminTx as AdminTx,
    index_CAbundle as CAbundle,
    index_Census as Census,
    index_CensusOrigin as CensusOrigin,
    index_Census_Type as Census_Type,
    index_CollectFaucetTx as CollectFaucetTx,
    index_EnvelopeType as EnvelopeType,
    index_FaucetPackage as FaucetPackage,
    index_FaucetPayload as FaucetPayload,
    index_NewProcessTx as NewProcessTx,
    index_OracleList as OracleList,
    index_Process as Process,
    index_ProcessEndingList as ProcessEndingList,
    index_ProcessMode as ProcessMode,
    index_ProcessResult as ProcessResult,
    index_ProcessStatus as ProcessStatus,
    index_ProcessVoteOptions as ProcessVoteOptions,
    index_Proof as Proof,
    index_ProofArbo as ProofArbo,
    index_ProofArbo_KeyType as ProofArbo_KeyType,
    index_ProofArbo_Type as ProofArbo_Type,
    index_ProofCA as ProofCA,
    index_ProofCA_Type as ProofCA_Type,
    index_ProofZkSNARK as ProofZkSNARK,
    index_QuestionResult as QuestionResult,
    index_RegisterKeyTx as RegisterKeyTx,
    index_RegisterSIKTx as RegisterSIKTx,
    index_SIKTx as SIKTx,
    index_SendTokensTx as SendTokensTx,
    index_SetAccountTx as SetAccountTx,
    index_SetKeykeeperTx as SetKeykeeperTx,
    index_SetProcessTx as SetProcessTx,
    index_SetTransactionCostsTx as SetTransactionCostsTx,
    index_SignedTx as SignedTx,
    index_SourceNetworkId as SourceNetworkId,
    index_StoredKeys as StoredKeys,
    index_TendermintHeader as TendermintHeader,
    index_Tx as Tx,
    index_TxType as TxType,
    index_Validator as Validator,
    index_ValidatorList as ValidatorList,
    index_VoteEnvelope as VoteEnvelope,
    index_censusOriginFromJSON as censusOriginFromJSON,
    index_censusOriginToJSON as censusOriginToJSON,
    index_census_TypeFromJSON as census_TypeFromJSON,
    index_census_TypeToJSON as census_TypeToJSON,
    index_processStatusFromJSON as processStatusFromJSON,
    index_processStatusToJSON as processStatusToJSON,
    index_proofArbo_KeyTypeFromJSON as proofArbo_KeyTypeFromJSON,
    index_proofArbo_KeyTypeToJSON as proofArbo_KeyTypeToJSON,
    index_proofArbo_TypeFromJSON as proofArbo_TypeFromJSON,
    index_proofArbo_TypeToJSON as proofArbo_TypeToJSON,
    index_proofCA_TypeFromJSON as proofCA_TypeFromJSON,
    index_proofCA_TypeToJSON as proofCA_TypeToJSON,
    index_sourceNetworkIdFromJSON as sourceNetworkIdFromJSON,
    index_sourceNetworkIdToJSON as sourceNetworkIdToJSON,
    index_txTypeFromJSON as txTypeFromJSON,
    index_txTypeToJSON as txTypeToJSON,
  };
}

export { ValidatorList as $, ProofZkSNARK as A, Account as B, CensusOrigin as C, Tx as D, SignedTx as E, SetProcessTx as F, AdminTx as G, SendTokensTx as H, SetTransactionCostsTx as I, SetAccountTx as J, SIKTx as K, RegisterSIKTx as L, CollectFaucetTx as M, NewProcessTx as N, FaucetPayload as O, ProcessStatus as P, FaucetPackage as Q, RegisterKeyTx as R, SourceNetworkId as S, TxType as T, SetKeykeeperTx as U, VoteEnvelope as V, Process as W, EnvelopeType as X, ProcessMode as Y, ProcessVoteOptions as Z, OracleList as _, txTypeToJSON as a, Validator as a0, TendermintHeader as a1, ProcessResult as a2, QuestionResult as a3, ProcessEndingList as a4, StoredKeys as a5, processStatusToJSON as b, sourceNetworkIdToJSON as c, censusOriginFromJSON as d, censusOriginToJSON as e, Census as f, Census_Type as g, census_TypeFromJSON as h, index as i, census_TypeToJSON as j, Proof as k, ProofCA as l, ProofCA_Type as m, proofCA_TypeFromJSON as n, proofCA_TypeToJSON as o, processStatusFromJSON as p, CAbundle as q, ProofArbo as r, sourceNetworkIdFromJSON as s, txTypeFromJSON as t, ProofArbo_Type as u, proofArbo_TypeFromJSON as v, proofArbo_TypeToJSON as w, ProofArbo_KeyType as x, proofArbo_KeyTypeFromJSON as y, proofArbo_KeyTypeToJSON as z };
