import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//nice to have: implement env for api baseurl 
const PUT_URL = 'http://localhost:3000/tasks';

const TaskModal = ({open, toggleModal, taskSelected}) => {
    const handleCompleteUpd = () => {
        //call PUT on task's api, mark (log) as complete
        fetch(PUT_URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(taskSelected)
        })
        .then(console.log(`update for "${taskSelected.title}" task with UUID: ${taskSelected.uuid}`))
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
    return (
        <Modal
            open={open}
            onClose={toggleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Task Title: {taskSelected?.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Task UUID: {taskSelected?.uuid}
            </Typography>
            <Stack justifyContent="flex-end" alignItems="flex-end" spacing={2} mt={2} direction="row">
                <Button variant="outlined" onClick={handleCompleteUpd}>Complete</Button>
                <Button variant="outlined" onClick={toggleModal}>Close</Button>
            </Stack>
            </Box>
        </Modal>
    )
}

export default TaskModal;