FROM node:12.4.0

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN npm install -g yarn
RUN yarn

COPY /dist .

CMD ["node", "index.js"]

