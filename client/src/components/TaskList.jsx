import { React, useState } from "react";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import TaskModal from './TaskModal';

const TaskList = props => {
  const {list} = props;
  const [open, setOpen] = useState(false);
  const [taskSelected, setTaskSelected] = useState();
  const handleOpenModal = (task) => {
    setTaskSelected(task);
    toggleModal();
  }
  const toggleModal = () =>{
    setOpen(!open);
  }
  return (
    <div>
    <Grid container justifyContent="center" alignItems="center">
      <Grid container maxWidth="md" spacing={1} p={2}>
        {list.map((task) => {
          return (
            <Grid item xs={12} md={4} key={task.uuid}>
                <Card onClick={() => {handleOpenModal(task)}}>
                  <CardActionArea>
                    <CardContent>
                        <Typography component="div">
                        {task.title}
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
          )
        })}
      </Grid>
      <TaskModal open={open} toggleModal={toggleModal} taskSelected={taskSelected}/>
    </Grid>
    </div>
    )
}

export default TaskList;