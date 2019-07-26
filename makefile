SHELL := /bin/bash
PATH  := $(PATH):$(HOME)/.pub-cache/bin
PROJECTNAME=$(shell basename "$(PWD)")

.DEFAULT_GOAL := help
MODEL_SOURCES=$(wildcard src/*.proto)

#******************************************************************************
# HELP
#******************************************************************************

## help: Display this message

.PHONY: help
help: makefile
	@echo
	@echo " Available actions in "$(PROJECTNAME)":"
	@echo
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'
	@echo

## :

#******************************************************************************
# RECIPES
#******************************************************************************

## all: Generate the source code for all supported languages
all: dart


## dart: Generate the Dart source code
.SILENT:
.ONESHELL:
dart: $(MODEL_SOURCES)
	# export PATH=$(PATH):$(HOME)/.pub-cache/bin
	echo $(PATH)
	make dart-env
	mkdir -p ./dart
	for f in $^ ; do \
		protoc -I=$(PWD)/src --dart_out=$(PWD)/$@ $(PWD)/$$f ; \
	done
	touch $@

dart-env:
	if [ ! -x /usr/local/bin/protoc ] ; then \
		echo "Please, install protoc from https://developers.google.com/protocol-buffers/docs/downloads.html" ; \
	fi
	if [ ! -x $(HOME)/.pub-cache/bin/protoc-gen-dart ] ; then \
		pub global activate protoc_plugin ; \
	fi
