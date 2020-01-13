#!/usr/bin/env bash

nohup npm start api/app.js >> custom.log &

cd client 
nohup npm start >> custom.log &

cd ..