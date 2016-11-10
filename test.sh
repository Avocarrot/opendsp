#!/bin/bash -ex

echo '{ "server": { "lag": 10, "port": 4001, "timeout": 50000 } }' >config/test.json
NODE_ENV=test node ./index.js &
node_pid=$!
trap "rm -f config/test.json; kill $node_pid" INT QUIT TERM EXIT
sleep 1
bid_id=$(curl -s -H 'Content-Type: application/json' -d '{ "id": "foo", "imp": [] }' localhost:4001/bid | jq -r .seatbid[].bid[].id)
test x$bid_id = x123123214
