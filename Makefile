SHELL := /bin/bash
PATH  := $(PATH):$(HOME)/.pub-cache/bin
.DEFAULT_GOAL := help

PROJECT_NAME=$(shell basename "$(PWD)")
CLIENT_STORE_SOURCES=$(wildcard src/client-store/*.proto)
COMMON_SOURCES=$(wildcard src/common/*.proto)
METADATA_SOURCES=$(wildcard src/metadata/*.proto)
VOCHAIN_STORE_SOURCES=$(wildcard src/vochain/*.proto)
GO_PKG_DIR=go-vocdonitypes

#-----------------------------------------------------------------------
# HELP
#-----------------------------------------------------------------------

## help: Display this message

.PHONY: help
help: makefile
	@echo
	@echo " Available actions in "$(PROJECT_NAME)":"
	@echo
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'
	@echo

## :

## init: Install external dependencies
init: protobuf-env

## clean: Remove the build artifacts
clean:
	rm -Rf dart $(GO_PKG_DIR)
	@touch src/* src/*/*

## :

#-----------------------------------------------------------------------
# RECIPES
#-----------------------------------------------------------------------

## all: Generate the source code for all supported languages
all: dart golang

## golang: Generate the Golang source code
golang: $(VOCHAIN_STORE_SOURCES) $(COMMON_SOURCES)
	rm -rf ./$(GO_PKG_DIR)
	mkdir -p ./$(GO_PKG_DIR)
	for f in $^ ; do \
		protoc --go_opt=paths=source_relative --experimental_allow_proto3_optional -I=$(PWD)/src --go_out=$(PWD)/$(GO_PKG_DIR) $(PWD)/$$f ; \
	done
	find $(GO_PKG_DIR) -iname "*.go" -type f -exec mv {} $(GO_PKG_DIR) \;
	find $(GO_PKG_DIR) -type d -empty -delete
	@touch $(GO_PKG_DIR)


## dart: Generate the Dart source code
dart: $(CLIENT_STORE_SOURCES) $(COMMON_SOURCES) $(METADATA_SOURCES)
	mkdir -p ./dart
	for f in $^ ; do \
		protoc -I=$(PWD)/src --dart_out=$(PWD)/$@ $(PWD)/$$f ; \
	done
	@touch $@

.PHONY: protobuf-env
protobuf-env:
	@if [ ! -x /usr/local/bin/protoc ] ; then \
		echo -e "Please, install protoc on /usr/local/bin.\nSee https://developers.google.com/protocol-buffers/docs/downloads.html" ; \
		exit 1 ; \
	fi
	pub global activate protoc_plugin
	@echo "Done"
