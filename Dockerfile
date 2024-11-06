FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install --force

COPY . .

RUN npm build

CMD ["npm", "run", "dev"]