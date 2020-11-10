SHELL := /bin/bash
PATH  := $(PATH):$(HOME)/.pub-cache/bin:./protoc
.DEFAULT_GOAL := help

PROJECT_NAME=$(shell basename "$(PWD)")
CLIENT_STORE_SOURCES=$(wildcard src/client-store/*.proto)
COMMON_SOURCES=$(wildcard src/common/*.proto)
METADATA_SOURCES=$(wildcard src/metadata/*.proto)
VOCHAIN_STORE_SOURCES=$(wildcard src/vochain/*.proto)
GO_ARTIFACTS_DIR=go-vocdonitypes
PROTOC=protoc/bin/protoc

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
init: $(PROTOC) protoc-dart-plugin protoc-go-plugin

## clean: Remove the build artifacts
clean:
	rm -Rf build $(GO_ARTIFACTS_DIR)

## :

#-----------------------------------------------------------------------
# RECIPES
#-----------------------------------------------------------------------

## all: Generate the source code for all supported languages
all: $(PROTOC) build/dart build/js $(GO_ARTIFACTS_DIR)

## golang: Generate the Golang protobuf artifacts
golang: $(GO_ARTIFACTS_DIR)

$(GO_ARTIFACTS_DIR): $(VOCHAIN_STORE_SOURCES) $(COMMON_SOURCES)
	mkdir -p $@
	for f in $^ ; do \
		$(PROTOC) --go_opt=paths=source_relative --experimental_allow_proto3_optional -I=$(PWD)/src --go_out=$@ $(PWD)/$$f ; \
	done
	find $@ -iname "*.go" -type f -exec mv {} $@ \;
	find $@ -type d -empty -delete
	@touch $@


## dart: Generate the Dart protobuf artifacts
dart: build/dart

build/dart: $(CLIENT_STORE_SOURCES) $(COMMON_SOURCES) $(METADATA_SOURCES)
	mkdir -p $@
	for f in $^ ; do \
		$(PROTOC) --experimental_allow_proto3_optional -I=$(PWD)/src --dart_out=$(PWD)/$@ $(PWD)/$$f ; \
	done
	@touch $@

## js: Generate the Javascript protobuf artifacts
js: build/js

build/js: $(COMMON_SOURCES)
	mkdir -p $@
	# protoc --proto_path=src --js_out=import_style=commonjs,binary:build/gen src/foo.proto src/bar/baz.proto
	for f in $^ ; do \
		protoc -I=$(PWD)/src --js_out=import_style=commonjs,binary:$@ $(PWD)/$$f ; \
	done
	@touch $@


#-----------------------------------------------------------------------
# COMPILERS
#-----------------------------------------------------------------------

$(PROTOC):
	@# Main protoc binary
	case "$$(uname)" in \
		linux|Linux) \
			curl -L https://github.com/protocolbuffers/protobuf/releases/download/v3.13.0/protoc-3.13.0-linux-x86_64.zip > protoc.zip \
			;; \
		darwin|Darwin) \
			curl -L https://github.com/protocolbuffers/protobuf/releases/download/v3.13.0/protoc-3.13.0-osx-x86_64.zip > protoc.zip \
			;; \
		*) \
			echo "Unsupported platform: $$(uname)" ; \
			exit 1 ; \
	esac

	unzip -d protoc protoc.zip
	rm protoc.zip

# DART
.PHONY: protoc-dart-plugin
protoc-dart-plugin:
	pub global activate protoc_plugin

# GO
protoc-go-plugin: protoc/protoc-gen-go
protoc/protoc-gen-go:
	if [ ! -d "$$GOPATH" ] ; then \
		echo "Please, set $$GOPATH" ; \
		exit 1 ; \
	fi
	go get google.golang.org/protobuf/cmd/protoc-gen-go
	go build -o $@ $$GOPATH/src/google.golang.org/protobuf/cmd/protoc-gen-go/main.go
