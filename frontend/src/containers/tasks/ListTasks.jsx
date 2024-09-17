import { useSelector, useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

// features-tasks
import { deleteTask } from "../../app/features/tasks/tasks.slice";

const ListTasks = () => {
    const dispatch = useDispatch();

    const tasksState = useSelector((state) => state.tasks);

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            {tasksState?.data?.length < 1 ? (
                <Card variant="outlined" sx={{ textAlign: "center" }}>
                    <CardHeader title="No tasks to show" />
                </Card>
            ) : (
                <Grid container spacing={2} wrap="wrap">
                    {tasksState?.data?.map((task) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={task.id}>
                            <Card key={task.id} variant="outlined">
                                <CardHeader title={task.title} />
                                <Divider />
                                <CardContent>{task.description}</CardContent>
                                <CardActions>
                                    {/* buttons with material ui icon */}
                                    <Button
                                        variant="contained"
                                        color="error"
                                        startIcon={<DeleteForeverIcon />}
                                        onClick={() =>
                                            handleDeleteTask(task.task_id)
                                        }
                                    ></Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<EditIcon />}
                                        onClick={() => console.log("Edit task")}
                                    ></Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default ListTasks;
