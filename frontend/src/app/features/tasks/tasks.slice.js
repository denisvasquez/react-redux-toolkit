import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
    const response = await fetch("http://localhost:8000/api/tasks/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
});

export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (taskId) => {
        const response = await fetch(
            `http://localhost:8000/api/tasks/${taskId}`,
            {
                method: "DELETE",
            }
        );
        const data = await response.json();
        return data;
    }
);

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async (userId) => {
        const response = await fetch(
            `http://localhost:8000/api/tasks/user/${userId}`
        );
        const data = await response.json();
        return data;
    }
);

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        data: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.data = state.data.filter((task) => {
                    console.log(task);
                    return task.task_id != action.payload.task_id;
                });
            });
    },
});

export default tasksSlice.reducer;
