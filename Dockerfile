FROM node:20.12.2

WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 3000

CMD ["npm","start"]
