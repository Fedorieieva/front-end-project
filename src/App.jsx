import React from 'react'
import './App.css'
import Header from "@/components/Header/Header.jsx";
import {Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage.jsx';
import ProjectsPage from "@/pages/ProjectsPage/ProjectsPage.jsx";
import ProjectPage from "@/pages/ProjectPage/ProjectPage.jsx";


function App() {
    return (
        <>
            <Header/>

            <Routes>
                <Route index element={<MainPage/>} />
                <Route path='/projects' element={<ProjectsPage/>} />
                <Route path="/projects/:projectId" element={<ProjectPage />} />
            </Routes>

            {/*{localStorage.removeItem('projects')}*/}
            {/*{console.log(JSON.parse(localStorage.getItem('projects')))}*/}
            {/*<ProjectModal onClose={onclose}/>*/}
        </>
    )
}

export default App
