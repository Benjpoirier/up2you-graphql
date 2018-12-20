POSTGRES_USER ?= postgres
POSTGRES_HOST ?= 127.0.0.1
POSTGRES_PORT ?= 5432

install: install-modules install-dockers install-db

install-modules:
	@yarn install

install-dockers:
	@if which docker > /dev/null; then\
		echo "Installing Docker images";\
		docker-compose up -d --no-recreate ;\
	fi

install-db:
	@echo "API - Create database dev"
	@createdb -U ${POSTGRES_USER} -h ${POSTGRES_HOST} -p ${POSTGRES_PORT}  up2you_dev || true
	@psql -U ${POSTGRES_USER} -h ${POSTGRES_HOST} -p ${POSTGRES_PORT} -d up2you_dev -c "create extension if not exists unaccent"

generate-model:
	@echo 'API - Creating the $(MODEL) model'
	@npx sequelize model:create --name $(MODEL) \
		--attributes foo:string  --models-path ./src/models/ \
		--migrations-path ./database/migrations/

generate-seeder:
	@echo 'API - Creating the $(MODEL) seeder'
	@npx sequelize seed:create --name $(MODEL) \
		--seeders-path ./database/seeders/ \
		--config ./config/database.js

generate-migration:
	@echo 'API - Creating $(NAME) migration'
	@npx sequelize migration:create  --name $(NAME) \
		--migrations-path ./database/migrations/ \
		--config ./config/database.js

migrate:
	@echo 'API - Running Migrations'
	@npx sequelize db:migrate \
		--models-path ./src/models/ \
		--migrations-path ./database/migrations/ \
		--config ./config/database.js

db-seeds: db-seeds-down db-seeds-up
	@echo 'Running seeds'

db-seeds-down:
	@npx sequelize db:seed:undo:all  \
	--seeders-path ./database/seeders/ \
	--config ./config/database.js

db-seeds-up:
	@npx sequelize db:seed:all \
	--seeders-path ./database/seeders/ \
	--config ./config/database.js
