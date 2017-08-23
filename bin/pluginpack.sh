#!/bin/bash

FILE="config/config.json"

echo '{"ProxyPath":"'$1'"}' > $FILE
