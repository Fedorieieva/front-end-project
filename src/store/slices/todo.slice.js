import {createSlice} from "@reduxjs/toolkit";
import {getFromStorage} from '@/helpers/getFromStorage.js';


const initialState = {
    toDoList: getFromStorage('todo')
}

const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        actionAddTask: (state, {payload}) => {
            if (!state.toDoList.some((item) => item.id === payload.id)) {
                state.toDoList.push(payload);
                localStorage.setItem('todo', JSON.stringify(state.toDoList));
            }
        },
        actionDeleteTask: (state, {payload}) => {
            state.toDoList = state.toDoList.filter((item) => item.id !== payload.id);
            localStorage.setItem('todo', JSON.stringify(state.toDoList));
        },
        actionToggleCompleteTask: (state, {payload}) => {
            state.toDoList = state.toDoList.map((item) =>
                item.id === payload.id
                    ? {...item, isCompleted: !item.isCompleted}
                    : item
            );

            localStorage.setItem('todo', JSON.stringify(state.toDoList));
        },
        actionEditTask: (state, {payload}) => {
            state.toDoList = state.toDoList.map((item) =>
                item.id === payload.id
                    ? {...item, task: payload.task}
                    : item
            );

            localStorage.setItem('todo', JSON.stringify(state.toDoList));
        }
    }
});


export const {actionAddTask, actionDeleteTask, actionToggleCompleteTask, actionEditTask} = toDoSlice.actions;
export default toDoSlice.reducer;



