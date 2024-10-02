import React from 'react'
import './App.css'
import Header from "@/components/Header/Header.jsx";
import {Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage.jsx';
import CheckBox from "@/components/ToDo/CheckBox/CheckBox.jsx";

function App() {

    return (
        <>
            <Header/>

            <Routes>
                <Route index element={<MainPage/>} />
            </Routes>
            {/*{console.log(JSON.parse((localStorage.getItem('todo'))))}*/}

            {/*<CheckBox/>*/}
        </>
    )
}

export default App
