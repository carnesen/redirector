FROM node:7.9

ADD . /app

WORKDIR /app

RUN yarn install --production

CMD ["./server.js"]
