import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import './SettingsModal.scss';
import Button from "@/components/Button/Button.jsx";

import { ModalBody, ModalClose, ModalFooter, ModalHeader, ModalWrapper } from "@/components/Modal/index.js";
import Close from './icons/x.svg?react';
import { useDispatch, useSelector } from "react-redux";
import { actionSetStudyTime, actionSetShortBreakTime, actionSetLongBreakTime, actionSetSessionsBetweenLongBreaks } from '@/store/slices/timeSettings.slice.js';

const SettingsModal = ({ onClose }) => {
    /*
    const pomodoroTimeSettings = useSelector(state => state.settings.pomodoroTimeSettings) || {};
    const { studyTime, shortBreakTime, longBreakTime, sessionsBetweenLongBreaks } = pomodoroTimeSettings;
    const dispatch = useDispatch();

    const handleStudyTimeChange = (value) => {
        const newValue = Math.max(0, parseInt(value) || 0);
        dispatch(actionSetStudyTime(newValue));
    };

    const handleShortBreakTimeChange = (value) => {
        const newValue = Math.max(0, parseInt(value) || 0);
        dispatch(actionSetShortBreakTime(newValue));
    };

    const handleLongBreakTimeChange = (value) => {
        const newValue = Math.max(0, parseInt(value) || 0);
        dispatch(actionSetLongBreakTime(newValue));
    };

    const handleSessionsBetweenLongBreaksChange = (value) => {
        const newValue = Math.max(0, parseInt(value) || 0);
        dispatch(actionSetSessionsBetweenLongBreaks(newValue));
    };*/

    const loadFromLocalStorage = (key, defaultValue) => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    };

    /*
    const [studyTime, setStudyTime] = useState(25 * 60); // Default to 25 minutes
    const [shortBreakTime, setShortBreakTime] = useState(5 * 60); // Default to 5 minutes
    const [longBreakTime, setLongBreakTime] = useState(15 * 60); // Default to 15 minutes
    const [sessionsBetweenLongBreaks, setSessionsBetweenLongBreaks] = useState(4); // Default to 4 sessions
    */
    const [studyTime, setStudyTime] = useState(loadFromLocalStorage('studyTime', 25 * 60));
    const [shortBreakTime, setShortBreakTime] = useState(loadFromLocalStorage('shortBreakTime', 5 * 60));
    const [longBreakTime, setLongBreakTime] = useState(loadFromLocalStorage('longBreakTime', 15 * 60));
    const [sessionsBetweenLongBreaks, setSessionsBetweenLongBreaks] = useState(loadFromLocalStorage('sessionsBetweenLongBreaks', 4));

    useEffect(() => {
        localStorage.setItem('studyTime', studyTime);
    }, [studyTime]);

    useEffect(() => {
        localStorage.setItem('shortBreakTime', shortBreakTime);
    }, [shortBreakTime]);

    useEffect(() => {
        localStorage.setItem('longBreakTime', longBreakTime);
    }, [longBreakTime]);

    useEffect(() => {
        localStorage.setItem('sessionsBetweenLongBreaks', sessionsBetweenLongBreaks);
    }, [sessionsBetweenLongBreaks]);


    const handleStudyTimeChange = (value) => {
        const newValue = value === '' ? '' : Math.max(0, parseInt(value)) * 60;
        setStudyTime(newValue);
    };

    const handleShortBreakTimeChange = (value) => {
        const newValue = value === '' ? '' : Math.max(0, parseInt(value)) * 60;
        setShortBreakTime(newValue);
    };

    const handleLongBreakTimeChange = (value) => {
        const newValue = value === '' ? '' : Math.max(0, parseInt(value)) * 60;
        setLongBreakTime(newValue);
    };

    const handleSessionsBetweenLongBreaksChange = (value) => {
        const newValue = value === '' ? '' : Math.max(0, parseInt(value));
        setSessionsBetweenLongBreaks(newValue);
    };

    return ReactDOM.createPortal(
        <ModalWrapper onClick={onClose} className='settings-modal__wrapper'>
            <div
                className="settings-modal__content"
                onClick={(event) => event.stopPropagation()}
            >
                <ModalHeader className='modal-content__header'>
                    <ModalClose className='modal__close-icon' onClick={onClose} >
                        <Close />
                    </ModalClose>
                </ModalHeader>

                <ModalBody className='modal__body'>
                    <h3>Settings</h3>
                    <label>
                        Study Time (minutes):
                        <input
                            type="number"
                            value={studyTime / 60}
                            onChange={(e) => handleStudyTimeChange(e.target.value)}
                        />
                    </label>
                    <label>
                        Short Break Time (minutes):
                        <input
                            type="number"
                            value={shortBreakTime / 60}
                            onChange={(e) => handleShortBreakTimeChange(e.target.value)}
                        />
                    </label>
                    <label>
                        Long Break Time (minutes):
                        <input
                            type="number"
                            value={longBreakTime / 60}
                            onChange={(e) => handleLongBreakTimeChange(e.target.value)}
                        />
                    </label>
                    <label>
                        Sessions Between Long Breaks:
                        <input
                            type="number"
                            value={sessionsBetweenLongBreaks}
                            onChange={(e) => handleSessionsBetweenLongBreaksChange(e.target.value)}
                        />
                    </label>
                </ModalBody>
            </div>
        </ModalWrapper>,
        document.body
    );
};

export default SettingsModal;
