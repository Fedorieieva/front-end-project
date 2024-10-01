import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "@/store/slices/weather.slice.js";
import Temp from "./icons/temp.svg?react"

const Weather = () => {
    const dispatch = useDispatch();
    const meta = useSelector((state) => state.weather.meta);

    useEffect(() => {
        dispatch(fetchWeather());
    }, []);


    return (
        <div className='weather-widget'>
            <div className="meta">
                {/*<Temp/>*/}
                <p className="temperature">{meta?.feelslike}°C</p>
            </div>
        </div>
    )
}


export default Weather