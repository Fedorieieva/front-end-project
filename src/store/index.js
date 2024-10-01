import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from './slices/weather.slice.js';
import todoReducer from './slices/todo.slice.js';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        todo: todoReducer,
    }
})

export default store