import React from 'react';
import './PomodoroTimer.scss';

const TimerDisplay = ({ isFocus, currentTime }) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="timer-display">
            <h2 className="state-name">{isFocus ? 'Focus Time' : 'Break Time'}</h2>
            <p className="pomodoro-time">{formatTime(currentTime)}</p>
        </div>
    );
};

export default TimerDisplay;