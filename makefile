# Makefile

install: 
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint

even:
	npx babel-node src/bin/brain-even.js
