#!/bin/bash

set -x
service mysql start

[ -e "/init.sh" ] && {
    /bin/sh /init.sh && rm -rf /init.sh
}

mysql -u root -pLas@2020 -e "set global max_connections = 2000;"

while [ 1 ]
do
    sleep 1
done
