.PHONY: build build-package prepare-configs clean

build: clean build-package prepare-configs

build-package:
	node build.js

prepare-configs:
	cp Info.plist build/enigma/osx/node-webkit.app/Contents
	cp images/logo.icns build/enigma/osx/node-webkit.app/Contents/Resources
	mv build/enigma/osx/node-webkit.app build/enigma/osx/Enigma.app

clean:
	rm -rf ./build/*
