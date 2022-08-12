# TaskList

TaskList fullstack dev challenge

## Installation

1. Clone the project
2. `cd` into server and `npm install`
3. `cd` into client folder and `npm install`

## Running the Project locally
 ### starting the server
 - `cd` into /server
 - run `npm start`

 ### starting the client
 - `cd` into /client 
 - run `npm start`.  

## Running the project in Docker

Inside the main project folder run the command below

```bash
docker-compose up -d
```
This will run the server on port 3001 and the client on 3000 either locally or in Docker.

## Task API
This endpoints allow task management

### GET
 
 `http://server:3001/tasks?not=quantity`
- optional parameter `not` (number of tasks requested)

### PUT

 `http://server:3001/tasks`
