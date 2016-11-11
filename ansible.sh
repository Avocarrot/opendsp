#!/bin/bash
curl -H "Authorization: token a237e1a41d5bbe427acff82b2be4fb75c798542f" \
  -H "Accept: application/vnd.github.v3.raw" \
  -L https://api.github.com/repos/Avocarrot/devops/contents/startup-scripts/ansible.sh | sh -s $(dirname $0)
