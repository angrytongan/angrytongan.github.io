.PHONY: help \
	check-deps \
	server \
	build \
	clean

help: # me
	@grep '^[a-z]' Makefile | sed -e 's/^\(.*\): .*# \(.*\)/\1: \2/'

check-deps: # verify hugo and the PaperMod submodule are present.
	@command -v hugo >/dev/null || { echo "ERROR: hugo not installed — https://gohugo.io/installation/"; exit 1; }
	@test -f themes/PaperMod/theme.toml || { echo "ERROR: PaperMod submodule missing — run: git submodule update --init --recursive"; exit 1; }

server: check-deps # run the local Hugo dev server.
	hugo server

build: # build the site into public/ (deployment itself is handled by GitHub Actions).
	hugo --gc --minify

clean: # clear out build directory.
	rm -rf public resources
