# DVote Protobuf

Protobuf definitions for messages and services used by the Vocdoni open stack.

Check out the source code generated for each of the available languages.

## Important note

- In protobuf, new fields can be added, renamed and removed with future-compatibility.
- However, **once an ID has been used, it can't never be reused by any other field again**

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
+ Build GoLang models: `make golang`
