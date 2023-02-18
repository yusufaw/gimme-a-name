#!/bin/sh
ssh root@68.183.232.178<<EOF
    su fi0smith
    cd /home/fi0smith/workspace/makan-apa
    git pull origin master
    npm install
    pm2 restart all
   exit
EOF