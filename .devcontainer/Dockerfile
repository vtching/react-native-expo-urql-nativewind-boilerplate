FROM mcr.microsoft.com/devcontainers/typescript-node:22

WORKDIR /client

COPY package*.json ./

RUN npm install --global expo-cli
RUN npm install

COPY . .

EXPOSE 8081

# cmd to start service
CMD ["/bin/sh", "-c", "while sleep 1000; do :; done"]
