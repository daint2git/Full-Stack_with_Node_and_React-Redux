# develop
> start development enviroments

    saku -p backend frontend storybook

# backend
> start json-server

    yarn json-server -p 9696 -r src/server/routes.json -w src/server/db.json

# frontend
> start webpack-dev-server

    yarn webpack-dev-server

# storybook
> start storybook-server

    yarn storybook-server -p 1234
