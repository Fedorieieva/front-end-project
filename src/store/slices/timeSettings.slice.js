import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
};

// Зчитуємо всі налаштування з одного поля 'pomodoroTimeSettings'
const initialState = {
    pomodoroTimeSettings: loadFromLocalStorage('pomodoroTimeSettings', {
        studyTime: 25 * 60,
        shortBreakTime: 5 * 60,
        longBreakTime: 15 * 60,
        sessionsBetweenLongBreaks: 4,
    })
};

const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        actionSetStudyTime: (state, action) => {
            state.pomodoroTimeSettings.studyTime = action.payload * 60;
            saveToLocalStorage('pomodoroTimeSettings', state.pomodoroTimeSettings);
        },
        actionSetShortBreakTime: (state, action) => {
            state.pomodoroTimeSettings.shortBreakTime = action.payload * 60;
            saveToLocalStorage('pomodoroTimeSettings', state.pomodoroTimeSettings);
        },
        actionSetLongBreakTime: (state, action) => {
            state.pomodoroTimeSettings.longBreakTime = action.payload * 60;
            saveToLocalStorage('pomodoroTimeSettings', state.pomodoroTimeSettings);
        },
        actionSetSessionsBetweenLongBreaks: (state, action) => {
            state.pomodoroTimeSettings.sessionsBetweenLongBreaks = action.payload;
            saveToLocalStorage('pomodoroTimeSettings', state.pomodoroTimeSettings);
        },
    },
});


export const { actionSetStudyTime, actionSetShortBreakTime, actionSetLongBreakTime, actionSetSessionsBetweenLongBreaks } = settingsSlice.actions;

export default settingsSlice.reducer;