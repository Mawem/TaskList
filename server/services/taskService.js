const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const Database = require('better-sqlite3');
const fs = require('fs');

const FAKER_API = 'https://lorem-faker.vercel.app/api';

//TODO: improve inline description/documentation
//nice to have: module for db management
//db conexion initialization
const db = new Database(':memory:');
const tasksTable = fs.readFileSync('db/tasks.sql', 'utf8');

//create table tasks on memory
db.exec(tasksTable);

//prepare query for insert/select
const insert = db.prepare('INSERT INTO tasks (uuid, title) VALUES (@uuid, @title)');
const select = db.prepare('SELECT uuid, title FROM tasks LIMIT ?');

//multiple insert handling
const insertMany = db.transaction((tasks) => {
    for (const task of tasks) insert.run(task);
});


module.exports = class TaskService {
    constructor(){}

    async getTaskList(quantity) {
        let tasks = this.getFromDB(quantity);
        let quantityDiff = quantity - tasks.length;
        if(quantityDiff){
            let apiTasks = await this.getFromAPI(quantityDiff);
            this.insertNewTasks(apiTasks);
            tasks.push(...apiTasks);
        }        
        return tasks;
    }

    getFromDB(quantity) {
        //nice to have: offest/limit on query for optimization/pagination
        return select.all(quantity) || [];
    }

    async getFromAPI(quantityDiff) {
        const taskFromApi = await axios.get(`${FAKER_API}?quantity=${quantityDiff}`);
        return this.addUUIDtoResponse(taskFromApi);        
    }

    addUUIDtoResponse({ data }) {
        return data.map(task => { 
            return {
                uuid: uuidv4(),
                title: task
                //nice to have: status property for upsert
                //status: 'active/in-progress/completed'
            }
        });
    }

    insertNewTasks(newTaskList) {
        insertMany(newTaskList);
    }
}
