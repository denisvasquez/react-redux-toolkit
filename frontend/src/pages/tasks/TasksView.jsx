import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { decodeToken } from "react-jwt";

// features-tasks
import { fetchTasks } from "../../app/features/tasks/tasks.slice";

// containers
import ListTasks from "../../containers/tasks/ListTasks";

const TasksView = () => {
    const user = decodeToken(localStorage.getItem("token"));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks(user?.id));
    }, [dispatch]);

    return (
        <div>
            <h1>Tasks</h1>
            <ListTasks />
        </div>
    );
};

export default TasksView;
