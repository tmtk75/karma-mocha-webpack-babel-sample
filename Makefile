start: node_modules/karma/bin/karma bower_components/jquery
	karma start

bower_components/jquery: node_modules/karma/bin/karma
	bower install

node_modules/karma/bin/karma:
	npm install
