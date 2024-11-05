#!/bin/sh

echo "$ENV_CONTENT" | base64 -d > .env
exec bun start