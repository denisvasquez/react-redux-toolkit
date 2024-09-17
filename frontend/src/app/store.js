import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasks/tasks.slice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(),
});
