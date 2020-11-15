SHELL := /bin/bash
PATH  := $(PATH):$(HOME)/.pub-cache/bin:./protoc
.DEFAULT_GOAL := help

PROJECT_NAME=$(shell basename "$(PWD)")
CLIENT_STORE_SOURCES=$(wildcard src/client-store/*.proto)
COMMON_SOURCES=$(wildcard src/common/*.proto)
METADATA_SOURCES=$(wildcard src/metadata/*.proto)
VOCHAIN_SOURCES=$(wildcard src/vochain/*.proto)

PROTOC?=$(shell which protoc)
$(if $(PROTOC),,$(eval PROTOC=bin/protoc))

define install_protoc
	if [ "$(PROTOC)" == "bin/protoc" -a ! -x bin/protoc ]; then \
	case "$$(uname)" in \
		linux|Linux) \
			curl -L https://github.com/protocolbuffers/protobuf/releases/download/v3.13.0/protoc-3.13.0-linux-x86_64.zip > protoc.zip \
			;;\
		darwin|Darwin) \
			curl -L https://github.com/protocolbuffers/protobuf/releases/download/v3.13.0/protoc-3.13.0-osx-x86_64.zip > protoc.zip \
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
	if [ "$(PROTOC)" == "bin/protoc" -a ! -x bin/protoc-gen-go ]; then \
	if [ ! -d "$$GOPATH" ] ; then \
		export GOPATH="$$HOME/go" ;\
	fi ; \
	GOBIN=$$PWD/bin/ go install google.golang.org/protobuf/cmd/protoc-gen-go ;\
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
init: protoc protoc-dart-plugin protoc-go-plugin

## clean: Remove the build artifacts
clean:
	rm -Rf build bin include

## :

#-----------------------------------------------------------------------
# RECIPES
#-----------------------------------------------------------------------


## all: Generate the source code for all supported languages
all: $(PROTOC) build/dart build/js build/go/models

## golang: Generate the Golang protobuf artifacts
golang: build/go/models

build/go/models: protoc protoc-go-plugin 
	rm -rf $@
	mkdir -p $@
	for f in  $(COMMON_SOURCES) $(VOCHAIN_SOURCES) ; do \
		$(PROTOC) --go_opt=paths=source_relative --experimental_allow_proto3_optional -I=$(PWD)/src --go_out=$@ $(PWD)/$$f ; \
	done
	find $@ -iname "*.go" -type f -exec mv {} $@ \;
	find $@ -type d -empty -delete
	@touch $@


## dart: Generate the Dart protobuf artifacts
dart: build/dart

build/dart: protoc protoc-dart-plugin
	mkdir -p $@
	for f in $(CLIENT_STORE_SOURCES) $(COMMON_SOURCES) $(METADATA_SOURCES) ; do \
		$(PROTOC) --experimental_allow_proto3_optional -I=$(PWD)/src --dart_out=$(PWD)/$@ $(PWD)/$$f ; \
	done
	@touch $@

## js: Generate the Javascript protobuf artifacts
js: build/js

build/js: protoc
	mkdir -p $@
	# protoc --proto_path=src --js_out=import_style=commonjs,binary:build/gen src/foo.proto src/bar/baz.proto
	for f in $(COMMON_SOURCES) ; do \
		protoc -I=$(PWD)/src --js_out=import_style=commonjs,binary:$@ $(PWD)/$$f ; \
	done
	@touch $@


#-----------------------------------------------------------------------
# COMPILERS
#-----------------------------------------------------------------------

protoc:
	$(call install_protoc)
	@echo "Using protoc binary $(PROTOC)"

# DART
.PHONY: protoc-dart-plugin
protoc-dart-plugin:
	pub global activate protoc_plugin

# GO
protoc-go-plugin:
	$(call install_protoc_go)
