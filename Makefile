.PHONY: build clean

build: clean
	node build.js

clean:
	rm -rf ./build/*
