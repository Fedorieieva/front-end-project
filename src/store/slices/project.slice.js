import {createSlice} from "@reduxjs/toolkit";
import {getFromStorage} from "@/helpers/getFromStorage.js";


const initialState = {
    projectsList: getFromStorage('projects')
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        actionAddProject: (state, {payload}) => {
            if(!state.projectsList.some((item) => item.id === payload.id)){
                state.projectsList = [...state.projectsList, payload];
                localStorage.setItem('projects', JSON.stringify(state.projectsList));
            }
            console.log(JSON.parse(localStorage.getItem('projects')));
        },
        actionDeleteProject: (state, {payload}) => {
            if(state.projectsList.some((item) => item.id === payload.id)){
                state.projectsList = state.projectsList.filter((item) => item.name !== payload.name);
                localStorage.setItem('projects', JSON.stringify(state.projectsList));
            }
        },
    }
})


export const {actionAddProject, actionDeleteProject} = projectsSlice.actions;
export default projectsSlice.reducer;



