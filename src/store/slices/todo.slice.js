import {createSlice} from "@reduxjs/toolkit";

const getTasksFromStorage = () => {
    return JSON.parse(localStorage.getItem('todo')) || [];
}

const initialState = {
    toDoList: getTasksFromStorage()
}

const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        actionAddTask: (state, {payload}) => {
            if(!state.toDoList.some((item) => item.task === payload.task)){
                state.toDoList = [...state.toDoList, payload];
                localStorage.setItem('todo', JSON.stringify(state.toDoList));
            }
        },
        actionDeleteTask: (state, {payload}) => {
            if(state.toDoList.some((item) => item.task === payload.task)){
                state.toDoList = state.toDoList.filter((item) => item.task !== payload.task);
                localStorage.setItem('todo', JSON.stringify(state.toDoList));
            }
        },
        actionToggleCompleteTask: (state, { payload }) => {
            state.toDoList = state.toDoList.map((item) =>
                item.task === payload.task
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            );

            localStorage.setItem('todo', JSON.stringify(state.toDoList));
        }
    }
})


export const {actionAddTask, actionDeleteTask, actionToggleCompleteTask} = toDoSlice.actions;
export default toDoSlice.reducer;



