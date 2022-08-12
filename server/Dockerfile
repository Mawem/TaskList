FROM node:16.16.0

LABEL version="1.0"
LABEL description="Base docker image for the Task challenge backend API."
LABEL maintainer = ["mawcasco@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]