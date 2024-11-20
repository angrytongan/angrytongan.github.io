.PHONY: dist

dist:
	npm run build
	touch dist/.nojekyll
	echo "df.id.au" > dist/CNAME

clean:
	rm -rf dist
