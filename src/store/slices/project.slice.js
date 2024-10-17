import {createSlice} from "@reduxjs/toolkit";
import {getFromStorage} from "@/helpers/getFromStorage.js";


const initialState = {
    projectsList: getFromStorage('projects'),
    currentProject: null
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
        actionFetchProjectById: (state, { payload }) => {
            const project = state.projectsList.find(item => item.id === payload);

            if (project) {
                state.currentProject = project;
            }
        },
        actionEditProject: (state, {payload}) => {
            state.projectsList = state.projectsList.map((item) => {
                if (item.id === payload.id) {
                    return {
                        ...item,
                        name: payload.name,
                        description: payload.description,
                        info: payload.info
                    };
                }
                return item;
            });

            localStorage.setItem('projects', JSON.stringify(state.projectsList));
        }
    }
})
export const {actionAddProject, actionDeleteProject, actionFetchProjectById, actionEditProject} = projectsSlice.actions;
export default projectsSlice.reducer;



