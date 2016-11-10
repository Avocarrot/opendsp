#!/bin/bash
curl -H "Authorization: token 74c650b5e557002de95df7d7dabbc16fb352e43c" \
  -H "Accept: application/vnd.github.v3.raw" \
  -L https://api.github.com/repos/Avocarrot/devops/contents/startup-scripts/ansible.sh | sh -s $(dirname $0)
