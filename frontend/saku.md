# develop

> serve development enviroments

    saku -p backend frontend storybook

# backend

> serve json-server (fake REST API)

    yarn json-server -p 9696 -r src/server/routes.json -w src/server/db.json

# frontend

> serve webpack-dev-server

    yarn webpack-dev-server

# storybook

> serve storybook-server

    yarn storybook-server -p 1234
