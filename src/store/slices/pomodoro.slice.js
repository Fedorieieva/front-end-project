import React from "react";
import {createSlice} from "@reduxjs/toolkit";

const loadFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
};

const defaultPomodoroTimerSettings = {
    studyTime: 25 * 60,
    shortBreakTime: 5 * 60,
    longBreakTime: 15 * 60,
    sessionsBetweenLongBreaks: 4,
};

const initialState = {
    pomodoroTimerSettings: loadFromLocalStorage('pomodoroTimeSettings', defaultPomodoroTimerSettings)
}

const pomodoroSettingsSlice = createSlice({
    name: 'pomodoro',
    initialState,
    reducers: {
        actionSetStudyTime: (state, {payload}) => {
            state.pomodoroTimerSettings.studyTime = payload * 60;
            localStorage.setItem('pomodoro', JSON.stringify(state.pomodoroTimerSettings));
            console.log(JSON.parse(localStorage.getItem('pomodoro')));
        },
        actionSetShortBreakTime: (state, {payload}) => {
            state.pomodoroTimerSettings.shortBreakTime = payload * 60;
            localStorage.setItem('pomodoro', JSON.stringify(state.pomodoroTimerSettings));
            console.log(JSON.parse(localStorage.getItem('pomodoro')));
        },
        actionSetLongBreakTime: (state, {payload}) => {
            state.pomodoroTimerSettings.longBreakTime = payload * 60;
            localStorage.setItem('pomodoro', JSON.stringify(state.pomodoroTimerSettings));
            console.log(JSON.parse(localStorage.getItem('pomodoro')));
        },
        actionSetSessionsBetweenLongBreaks: (state, {payload}) => {
            state.pomodoroTimerSettings.sessionsBetweenLongBreaks = payload;
            localStorage.setItem('pomodoro', JSON.stringify(state.pomodoroTimerSettings));
            console.log(JSON.parse(localStorage.getItem('pomodoro')));
        },
        actionSetTimersToDefault: (state) => {
            state.pomodoroTimerSettings = { ...defaultPomodoroTimerSettings };
            localStorage.setItem('pomodoroTimeSettings', JSON.stringify(state.pomodoroTimerSettings));
        }
    }
})

export const {
    actionSetStudyTime,
    actionSetShortBreakTime,
    actionSetLongBreakTime,
    actionSetSessionsBetweenLongBreaks
} = pomodoroSettingsSlice.actions;
export default pomodoroSettingsSlice.reducer;