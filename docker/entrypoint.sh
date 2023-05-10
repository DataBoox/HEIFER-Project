#!/bin/bash

yarn install

yarn start 


exec docker-node-entrypoint "$@"