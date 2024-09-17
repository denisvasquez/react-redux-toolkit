import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../app/features/tasks/tasks.slice";
import { decodeToken } from "react-jwt";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";

const CreateTask = () => {
    const dispatch = useDispatch();
    const user = decodeToken(localStorage.getItem("token"));
    const [formNewTask, setFormNewTask] = useState({
        title: "",
        description: "",
        user_id: user?.id,
    });

    const handleInput = (e) => {
        setFormNewTask({
            ...formNewTask,
            [e.target.name]: e.target.value,
        });
    };

    const submitTask = () => {
        if (formNewTask.title && formNewTask.description) {
            dispatch(addTask(formNewTask));
            setFormNewTask({
                title: "",
                description: "",
                user_id: user?.id,
            });
        }
    };

    return (
        <Box sx={{ width: "50%", margin: "auto" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormGroup>
                        <TextField
                            label="Title"
                            name="title"
                            value={formNewTask.title}
                            onChange={handleInput}
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <FormGroup>
                        <TextField
                            label="Description"
                            name="description"
                            multiline
                            rows={4}
                            value={formNewTask.description}
                            onChange={handleInput}
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={submitTask}
                    >
                        Create Task
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CreateTask;
