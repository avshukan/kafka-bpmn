FROM node:18-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY *.js ./
COPY *.xml ./

CMD [ "node", "index.js" ]