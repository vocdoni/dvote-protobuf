# DVote Protobuf

Protobuf definitions for messages and services used by the Vocdoni open stack.

Check out the source code generated for each of the available languages.

## Important note

- In protobuf, new fields can be added, renamed and removed with future-compatibility.
- However, **once an ID has been used, it can't never be reused by any other field again**

## Get started

In order to be able to build this project, you need some dependencies in your machine:

- [go](https://golang.org/doc/install) for the go bindings
- [dart](https://dart.dev/get-dart) for the dart bindings
- [npm & node](https://nodejs.org/en/download/) for the ts bindings
- build essentials like `make`

If `protoc` is installed in the host system, it will be used by default.
To force installing protoc, set PROTOC variable to blank: `PROTOC= make <action>`

To install `protoc` and the plugins for Dart, Go and TS:

```sh
$ make init
```

Or optionally:

```sh
$ make protoc/bin/protoc
$ make protoc-dart-plugin
$ make protoc-ts-plugin
$ make protoc-go-plugin
```

Then, run `make all` to build all the targets

## Available models

- `client-store`
  - Data types used for client apps to store local data
- `common`
  - Types shared across many components
- `metadata`
  - Human readable data for organizations, governance processes, news feeds, etc.  - Human readable data for organizations, governance processes, news feeds, etc.
- `vochain`
  - Specific data types for the Vocdoni Vochain

## Build

+ Build DART models: `make dart`
+ Build JS/TS models: `make ts`
+ Build GoLang models: `make golang`

## Artifacts

Import the files from:
- `build/dart/*`
- `build/ts/*`
- `build/go/*`

## Working example

See [example/index.ts](example/index.ts).

```
make example
```

## Usage

See [example/index.ts](./example/index.ts) for a TypeScript usage example.
