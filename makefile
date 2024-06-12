SHELL := /bin/bash

APP_NAME := my-portfolio

SERVER := root@14.225.218.125
ARCHIVE_DIR := projects/archived

build:
	yarn install
	yarn build

zip: build
	echo "git: $(shell git branch --show-current) - $(shell git rev-parse HEAD)" | tee version.txt
	echo "build: $(shell date)" | tee -a version.txt
	zip -r ${APP_NAME}.zip build public package.json yarn.lock version.txt
	rm version.txt

publish: zip
	scp ${APP_NAME}.zip ${SERVER}:${ARCHIVE_DIR}
	rm ${APP_NAME}.zip
	ssh ${SERVER} 'sh projects/deploy.sh ${APP_NAME}'