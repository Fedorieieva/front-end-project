import React from "react";
import ToDo from "@/components/ToDo/ToDo.jsx";
import WeatherTimeWidget from "@/components/WeatherTimeWidget/WeatherTimeWidget.jsx";

import './MainPage.scss';
import Container from "@/components/Container/Container.jsx";
import WorkModePage from "@/pages/WorkModePage/WorkModePage.jsx";

const MainPage = () => {
    return(
        <Container>
            <div className="todo-widget__wrapper">
                <ToDo className='todo'/>
                <WeatherTimeWidget className='widget'/>
            </div>
        </Container>
    )
}


export default MainPage

