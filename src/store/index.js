import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from './slices/weather.slice.js';
import todoReducer from './slices/todo.slice.js';
import projectsReducer from './slices/project.slice.js';
import pomodoroReducer from './slices/pomodoro.slice.js';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        todo: todoReducer,
        projects: projectsReducer,
        pomodoro: pomodoroReducer
    }
})

export default store