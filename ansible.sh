#!/bin/bash
curl -H "Authorization: token e373019cc03bd85cf4ba6e227be5baa9e52d3e56" \
  -H "Accept: application/vnd.github.v3.raw" \
  -L https://api.github.com/repos/Avocarrot/devops/contents/startup-scripts/ansible.sh | sh -s $(dirname $0)
