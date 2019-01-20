FROM node:dubnium
WORKDIR /var/www/app
COPY package* ./
RUN npm ci
COPY . .
RUN npm run build
RUN node dist/server.bundle.js
