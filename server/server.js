const express = require('express');
const TaskService = require('./services/taskService');
const cors = require('cors');

const app = express();
const port = 3001;
const taskService = new TaskService();
const TASKS_ROUTER_ENDPOINT = '/tasks';
const DEFAULT_NOT = 3;

app.use(express.json());
app.use('*', cors())
app.get(TASKS_ROUTER_ENDPOINT, async function(req, res) {
    let NUMBER_OF_TASKS = req.query.not || DEFAULT_NOT;
    let tasksList = await taskService.getTaskList(NUMBER_OF_TASKS);
    //nice to have: Error handling
    res.status(200).json(tasksList);
});

app.put(TASKS_ROUTER_ENDPOINT, async function(req, res) {
    //TODO: only create a log entry, use morgan?
    //nice to have: would be nice to execute the upsert for the record on db
    console.log(`----------
    mark task "${req.body.title}" with UUID:${req.body.uuid} as complete`);
    
    res.status(200).json({
        status: 'success',
        message: 'completed!'
    })
})

app.listen(port, () => {
    console.log(" --- Server listening on port 3001 --- ");
});