FROM node:23-alpine

WORKDIR /client

COPY package*.json ./

RUN npm install --global expo-cli
RUN npm install

COPY . .

EXPOSE 8081

CMD ["npx", "expo", "start"]
