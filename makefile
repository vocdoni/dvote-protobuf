SHELL := /bin/bash
PATH  := $(PATH):$(HOME)/.pub-cache/bin
.DEFAULT_GOAL := help

PROJECT_NAME=$(shell basename "$(PWD)")
MODEL_SOURCES=$(wildcard src/*.proto)

#******************************************************************************
# HELP
#******************************************************************************

## help: Display this message

.PHONY: help
help: makefile
	@echo
	@echo " Available actions in "$(PROJECT_NAME)":"
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
dart: $(MODEL_SOURCES)
	@make dart-env
	mkdir -p ./dart
	for f in $^ ; do \
		protoc -I=$(PWD)/src --dart_out=$(PWD)/$@ $(PWD)/$$f ; \
	done
	@touch $@

.SILENT: dart-env
dart-env:
	if [ ! -x /usr/local/bin/protoc ] ; then \
		echo "Please, install protoc from https://developers.google.com/protocol-buffers/docs/downloads.html" ; \
	fi
	if [ ! -x $(HOME)/.pub-cache/bin/protoc-gen-dart ] ; then \
		pub global activate protoc_plugin ; \
	fi

clean:
	rm -Rf dart/*
	@touch src/*
