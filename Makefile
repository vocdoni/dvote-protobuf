SHELL := /bin/bash
PATH  := $(PATH):$(HOME)/.pub-cache/bin:$(PWD)/bin:$(HOME)/go/bin
.DEFAULT_GOAL := help

PROJECT_NAME=$(shell basename "$(PWD)")
CLIENT_STORE_SOURCES=$(wildcard src/client-store/*.proto)
METADATA_SOURCES=$(wildcard src/metadata/*.proto)
VOCHAIN_SOURCES=$(wildcard src/vochain/*.proto)
IPFSSYNC_SOURCES=$(wildcard src/ipfsSync/*.proto)

PROTOC?=$(shell which protoc)
$(if $(PROTOC),,$(eval PROTOC=bin/protoc))
PROTOC_TS_PLUGIN := ./node_modules/.bin/protoc-gen-ts_proto

define install_protoc
	@if [ "$(PROTOC)" == "bin/protoc" -a ! -x bin/protoc ]; then \
	case "$$(uname)" in \
		linux|Linux) \
			curl -L https://github.com/protocolbuffers/protobuf/releases/download/v3.15.8/protoc-3.15.8-linux-x86_64.zip > protoc.zip \
			;;\
		darwin|Darwin) \
			curl -L https://github.com/protocolbuffers/protobuf/releases/download/v3.15.8/protoc-3.15.8-osx-x86_64.zip > protoc.zip \
			;;\
		*) \
			echo "Unsupported platform: $$(uname)" ;\
			exit 1 ;\
	esac ;\
	unzip -d . protoc.zip ;\
	rm protoc.zip readme.txt;\
	fi
endef

define install_protoc_go
	@if [ "$(PROTOC)" == "bin/protoc" -a ! -x bin/protoc-gen-go ]; then \
	if [ ! -d "$$GOPATH" ] ; then \
		export GOPATH="$$HOME/go" ;\
	fi ; \
	go get google.golang.org/protobuf/cmd/protoc-gen-go ; \
	go install google.golang.org/protobuf/cmd/protoc-gen-go ;\
	fi
endef

#-----------------------------------------------------------------------
# HELP
#-----------------------------------------------------------------------

## help: Display this message

.PHONY: help
help:
	@echo
	@echo " Available actions in "$(PROJECT_NAME)":"
	@echo
	@sed -n 's/^##//p' Makefile | column -t -s ':' |  sed -e 's/^/ /'
	@echo

## :

## init: Install external dependencies
init: protoc protoc-dart-plugin $(PROTOC_TS_PLUGIN) protoc-go-plugin

## clean: Remove the build artifacts
clean:
	rm -Rf build include

## :

#-----------------------------------------------------------------------
# RECIPES
#-----------------------------------------------------------------------


## all: Generate the source code for all supported languages
all: protoc build/dart build/ts build/go/models

## golang: Generate the Golang protobuf artifacts
golang: protoc protoc-go-plugin build/go/models

build/go/models: $(VOCHAIN_SOURCES) $(IPFSSYNC_SOURCES)
	rm -rf $@
	mkdir -p $@
	for f in $^ ; do \
		$(PROTOC) --go_opt=paths=source_relative --experimental_allow_proto3_optional -I=$(PWD)/src --go_out=$@ $(PWD)/$$f ; \
	done
	find $@ -iname "*.go" -type f -exec mv {} $@ \;
	find $@ -type d -empty -delete
	@touch $@


## dart: Generate the Dart protobuf artifacts
dart: protoc protoc-dart-plugin build/dart

build/dart: $(CLIENT_STORE_SOURCES) $(METADATA_SOURCES) $(VOCHAIN_SOURCES)
	mkdir -p $@
	for f in $^ ; do \
		$(PROTOC) --experimental_allow_proto3_optional -I=$(PWD)/src --dart_out=$(PWD)/$@ $(PWD)/$$f ; \
	done
	@touch $@

## js: Generate the TypeScript protobuf artifacts
js: protoc $(PROTOC_TS_PLUGIN) build/ts
ts: js

build/ts: $(VOCHAIN_SOURCES) $(CLIENT_STORE_SOURCES) $(METADATA_SOURCES)
	mkdir -p $@
	for f in $^ ; do \
		$(PROTOC) -I=$(PWD)/src --plugin=$(PROTOC_TS_PLUGIN) --experimental_allow_proto3_optional --ts_proto_opt=oneof=unions --ts_proto_out=$@ $(PWD)/$$f ; \
	done
	@touch $@
	npm i --package-lock-only

#-----------------------------------------------------------------------
# COMPILERS
#-----------------------------------------------------------------------

.PHONY: protoc
protoc:
	$(call install_protoc)

# DART
.PHONY: protoc-dart-plugin
protoc-dart-plugin:
	dart pub global activate protoc_plugin

# TS
$(PROTOC_TS_PLUGIN):
	@npm install ts-proto
	@rm package-lock.json

# GO
.PHONY: protoc-go-plugin
protoc-go-plugin:
	$(call install_protoc_go)
