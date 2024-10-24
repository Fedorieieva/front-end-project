import React, { useState, useEffect, useRef } from "react";

import TimerDisplay from "./TimerDisplay";
import TimerContorls from "./TimerContorls";
import './PomodoroTimer.scss';
import Container from "@/components/Container/Container";

const PomodoroTimer = () => {
    const studyTime = JSON.parse(localStorage.getItem('studyTime'));
    const shortBreakTime = JSON.parse(localStorage.getItem('shortBreakTime'));
    const longBreakTime = JSON.parse(localStorage.getItem('longBreakTime'));
    const sessionsBetweenLongBreaks = JSON.parse(localStorage.getItem('sessionsBetweenLongBreaks'));

    const [currentTime, setCurrentTime] = useState(studyTime);
    const [currentSession, setCurrentSession] = useState(1);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [isStudy, setIsStudy] = useState(true);

    const timerRef = useRef(null);

    useEffect(() => {
        if (isStudy) {
            setCurrentTime(studyTime);
        }
    }, [studyTime]);

    useEffect(() => {
        if (isStudy) {
            setCurrentTime(studyTime);
        } else {
            setCurrentTime(currentSession % sessionsBetweenLongBreaks === 0 ? longBreakTime : shortBreakTime);
        }
    }, [studyTime, shortBreakTime, longBreakTime, isStudy, currentSession, sessionsBetweenLongBreaks]);

    useEffect(() => {
        if (isRunning && !isPaused) {
            timerRef.current = setInterval(() => {
                setCurrentTime(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(timerRef.current);
                        handleSessionEnd();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning, isPaused]);

    const handleSessionEnd = () => {
        if (isStudy) {
            if (currentSession % sessionsBetweenLongBreaks === 0) {
                setCurrentTime(longBreakTime);
            } else {
                setCurrentTime(shortBreakTime);
            }
            setIsStudy(false);
        } else {
            setCurrentTime(studyTime);
            setIsStudy(true);
            setCurrentSession(prevSession => prevSession + 1);
        }
        setIsRunning(false);
    };

    const updateStudyTime = () => {
        const studyTime = JSON.parse(localStorage.getItem('studyTime'));
        setCurrentTime(studyTime);
    };

    const handleStart = () => {
        setIsRunning(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        setIsPaused(true);
        setIsRunning(false);
    };

    const handleSkip = () => {
        clearInterval(timerRef.current);
        handleSessionEnd();
    }

    return (
        <Container className="pomodoro-timer">
            <div className="pomodoro-timer-wrapper">
                <TimerDisplay
                    className="timer-display"
                    isFocus={isStudy}
                    currentTime={currentTime}
                />
                <TimerContorls
                    className="timer-controls"
                    onStart={handleStart}
                    onPause={handlePause}
                    onSkip={handleSkip}
                    isRunning={isRunning} 
                    isPaused={isPaused} 
                />
            </div>
        </Container>
    );
};

export default PomodoroTimer;
