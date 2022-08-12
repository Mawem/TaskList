FROM node:16.16.0

LABEL version="1.0"
LABEL description="Base docker image for the Task challenge client react app."
LABEL maintainer = ["mawcasco@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]