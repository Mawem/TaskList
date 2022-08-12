import { React, useState } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const NumberOfTasks = props => {
    const [not, setNot] = useState(3);
    const { handleGetTasks } = props;
    const handleSubmit = e => {
        e.preventDefault();
        //send to Task GET endpoint to retrieve data
        handleGetTasks(not);
    };
	return (
        <form onSubmit={handleSubmit}>
            <div className="task-list">
                <Grid container justifyContent="center" alignItems="center" spacing={1}>
                    <Grid item>
                        <TextField id="task-quantity" label="Quantity" variant="outlined" value={not} onChange={e => setNot(e.target.value)} />
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" size="large" onClick={handleSubmit}>Get</Button>
                    </Grid>
                </Grid>
            </div>
        </form>
    );
};

export default NumberOfTasks;