FROM node:erbium as builder
WORKDIR /var/www/app
COPY package* ./
RUN npm ci
COPY . .
RUN npm run build
RUN node dist/server.bundle.js

FROM node:erbium
WORKDIR /app
COPY --from=builder dist /app
RUN node server.bundle.js
