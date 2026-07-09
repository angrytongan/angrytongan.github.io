.PHONY: help \
	server \
	build \
	clean

help: # me
	@grep '^[a-z]' Makefile | sed -e 's/^\(.*\): .*# \(.*\)/\1: \2/'

server: # run the local Hugo dev server.
	hugo server

build: # build the site into public/ (deployment itself is handled by GitHub Actions).
	hugo --gc --minify

clean: # clear out build directory.
	rm -rf public resources
