#!/bin/bash
set -e

ENV=$1          # "prod" or "dev"
REPO_DIR="/home/deploy/docsearch"
COMPOSE_FILE="infrastructure/docker-compose.${ENV}.yml"
ENV_FILE="$REPO_DIR/infrastructure/.env.${ENV}"

echo "▶ Deploying $ENV environment..."

cd "$REPO_DIR"

# Pull latest code
git fetch origin
if [ "$ENV" = "prod" ]; then
  git checkout main && git pull origin main
else
  git checkout dev && git pull origin dev
fi

# Write env file from environment variables injected by GitHub Actions
cat > "$ENV_FILE" <<EOF
MYSQL_CONNECTION_${ENV^^}=${MYSQL_CONNECTION}
MYSQL_ROOT_PASSWORD_${ENV^^}=${MYSQL_ROOT_PASSWORD}
MONGO_CONNECTION_${ENV^^}=${MONGO_CONNECTION}
MONGO_USER_${ENV^^}=${MONGO_USER}
MONGO_PASSWORD_${ENV^^}=${MONGO_PASSWORD}
EOF

# Build and restart only changed containers
docker compose -f "$COMPOSE_FILE" --env-file "$ENV_FILE" pull 
docker compose -f "$COMPOSE_FILE" --env-file "$ENV_FILE" \
  up -d --build --remove-orphans

# Clean up old images
docker image prune -f

echo "✅ $ENV deployment complete"