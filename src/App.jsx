import {useState} from 'react'
import './App.css'
import Weather from "@/components/WeatherTimeWidget/Weather.jsx";
import Header from "@/components/Header/Header.jsx";
import WeatherTimeWidget from "@/components/WeatherTimeWidget/WeatherTimeWidget.jsx";
import ToDo from "@/components/ToDo/ToDo.jsx";
import {Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage/MainPage.jsx';

function App() {

    return (
        <>
            <Header/>

            <Routes>
                <Route index element={<MainPage/>} />
            </Routes>
            {/*{console.log(JSON.parse((localStorage.getItem('todo'))))}*/}


        </>
    )
}

export default App
