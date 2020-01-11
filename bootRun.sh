#!/usr/bin/env bash

cd api && sudo npm install && pm2 start app.js && echo "RUN SERVER"

## BACK TO ROOT FOLDER
cd .. 

cd client && sudo npm install && pm2 start src/index.js && echo "RUN CLIENTE"