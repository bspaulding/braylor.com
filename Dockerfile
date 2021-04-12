FROM node:erbium as builder
WORKDIR /var/www/app
COPY package* ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:erbium
WORKDIR /app
COPY --from=builder /var/www/app/dist /app/dist
ENTRYPOINT ["node", "dist/server.bundle.js"]
