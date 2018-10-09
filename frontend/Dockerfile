FROM node:8-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY frontend .

RUN npm install -g saku
RUN yarn

CMD [ "saku", "frontend" ]