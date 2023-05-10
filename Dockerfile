FROM node:18.4.0-alpine as node

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

CMD [ "yarn", "start" ]
