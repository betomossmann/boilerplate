FROM node:20.10.0

RUN npm install -g pnpm

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./

COPY . .

RUN pnpm install

EXPOSE 3000

CMD ["pnpm", "dev"]
