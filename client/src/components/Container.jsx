import React from 'react'
import { useState } from 'react'
import NumberOfTasks from './NumberOfTasks'
import TaskList from './TaskList'
//nice to have: implement env for api baseurl
const GET_URL = 'http://localhost:3001/tasks?not=';

const Container = () => {
  const [list, setList] = useState([]);
  const handleGetTasks = async (not) => {
    //fetch tasks from api
    const newItems = await (await fetch(GET_URL+not)).json();
    setList([...newItems]);
  }
  return (
    <div>
        <NumberOfTasks handleGetTasks={handleGetTasks} />
        <TaskList list={list}/>
    </div>
  )
}

export default Container