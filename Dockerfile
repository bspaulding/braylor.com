FROM node:erbium as builder
WORKDIR /var/www/app
COPY package* ./
RUN npm ci
COPY . .
RUN npm run build
RUN node dist/server.bundle.js

FROM node:erbium
COPY --from=builder dist dist
RUN node dist/server.bundle.js
