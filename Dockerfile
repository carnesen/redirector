FROM node:7.10

ADD . /app

WORKDIR /app

RUN npm install --production

EXPOSE 8000

USER node

CMD ["./server.js"]
