FROM node:12

WORKDIR /usr/src/app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn


COPY . .


RUN yarn compile 


EXPOSE 8080

CMD ["node", "dist/index.js"]

