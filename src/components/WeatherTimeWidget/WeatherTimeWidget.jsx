import React, {useEffect, useState} from "react";
import './WeatherTimeWidget.scss';
import Weather from "@/components/WeatherTimeWidget/Weather.jsx";
import cn from 'classnames';
import PropTypes from "prop-types";

const WeatherTimeWidget = ({className}) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 60000);
        setTime(new Date());
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className={cn('weather-time-widget__wrapper', className)}>
            <div className="additional__wrapper">
                <div className="time-widget">
                    <p>{formattedTime}</p>
                </div>

                <Weather/>
            </div>
        </div>
    );
};

WeatherTimeWidget.propTypes = {
    className: PropTypes.string
}

export default WeatherTimeWidget;