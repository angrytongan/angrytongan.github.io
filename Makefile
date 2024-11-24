.PHONY: help \
	dist \
	clean

help: # me
	@grep '^[a-z]' Makefile | sed -e 's/^\(.*\): .*# \(.*\)/\1: \2/'

dist: # setup distribution directory for Github pages.
	npm run build
	touch dist/.nojekyll
	echo "df.id.au" > dist/CNAME

clean: # clear out dist directory.
	rm -rf dist
