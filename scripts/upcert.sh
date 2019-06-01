#!/bin/sh -eu
certbot certonly --dns-sakuracloud --dns-sakuracloud-credentials $SAKURA_SECRETS \
  -d *.epaew.net -m 'epaew.333@gmail.com' \
  --manual-public-ip-logging-ok --agree-tos

curl -X PUT -H "Private-Token: $GITLAB_API_TOKEN" \
    -F "key=@/etc/letsencrypt/live/epaew.net/privkey.pem" \
    -F "certificate=@/etc/letsencrypt/live/epaew.net/fullchain.pem" \
    https://gitlab.com/api/v4/projects/8630800/pages/domains/www.epaew.net
