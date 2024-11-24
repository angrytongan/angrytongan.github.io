.PHONY: help \
	docs \
	clean

help: # me
	@grep '^[a-z]' Makefile | sed -e 's/^\(.*\): .*# \(.*\)/\1: \2/'

docs: # setup distribution directory for Github pages.
	npm run build
	touch docs/.nojekyll
	echo "df.id.au" > docs/CNAME

clean: # clear out dist directory.
	npm run clean
