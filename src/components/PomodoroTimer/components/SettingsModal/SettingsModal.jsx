import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import './SettingsModal.scss';
import Button from "@/components/Button/Button.jsx";

import { ModalBody, ModalClose, ModalFooter, ModalHeader, ModalWrapper } from "@/components/Modal/index.js";
import Close from './icons/x.svg?react';
import { useDispatch, useSelector } from "react-redux";
import { actionSetStudyTime, actionSetShortBreakTime, actionSetLongBreakTime, actionSetSessionsBetweenLongBreaks } from '@/store/slices/timeSettings.slice.js';

const SettingsModal = ({ onClose }) => {

    const loadFromLocalStorage = (key, defaultValue) => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    };

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
        const newValue = value === '' ? 60 : Math.max(1, parseInt(value)) * 60;
        setStudyTime(newValue);
    };

    const handleShortBreakTimeChange = (value) => {
        const newValue = value === '' ? 60 : Math.max(1, parseInt(value)) * 60;
        setShortBreakTime(newValue);
    };

    const handleLongBreakTimeChange = (value) => {
        const newValue = value === '' ? 60 : Math.max(1, parseInt(value)) * 60;
        setLongBreakTime(newValue);
    };

    const handleSessionsBetweenLongBreaksChange = (value) => {
        const newValue = value === '' ? 1 : Math.max(1, parseInt(value));
        setSessionsBetweenLongBreaks(newValue);
    };




    return ReactDOM.createPortal(
        <ModalWrapper onClick={onClose} className='settings-modal__wrapper'>
            <div
                className="settings-modal__content"
                onClick={(event) => event.stopPropagation()}
            >
                <ModalHeader className='modal-content__header'>
                    <ModalClose className='modal__close-icon' onClick={onClose}>
                        <Close />
                    </ModalClose>
                </ModalHeader>

                <ModalBody className='modal__body'>
                    <h3 className={"settings__label"}>Settings</h3>

                    <div className="settings__row">
                        <label className={"option__label"}>Study Time (minutes):</label>
                        <input
                            className={"settings__input"}
                            type="number"
                            value={studyTime / 60}
                            min={1}
                            onChange={(e) => handleStudyTimeChange(e.target.value)}
                        />
                    </div>

                    <div className="settings__row">
                        <label className={"option__label"}>Short Break Time (minutes):</label>
                        <input
                            className={"settings__input"}
                            type="number"
                            value={shortBreakTime / 60}
                            min={1}
                            onChange={(e) => handleShortBreakTimeChange(e.target.value)}
                        />
                    </div>

                    <div className="settings__row">
                        <label className={"option__label"}>Long Break Time (minutes):</label>
                        <input
                            className={"settings__input"}
                            type="number"
                            value={longBreakTime / 60}
                            min={1}
                            onChange={(e) => handleLongBreakTimeChange(e.target.value)}
                        />
                    </div>

                    <div className="settings__row">
                        <label className={"option__label"}>Sessions Between Long Breaks:</label>
                        <input
                            className={"settings__input"}
                            type="number"
                            value={sessionsBetweenLongBreaks}
                            min={1}
                            onChange={(e) => handleSessionsBetweenLongBreaksChange(e.target.value)}
                        />
                    </div>

                    <Button className='save-btn' onClick={onClose}>Save</Button>
                </ModalBody>
            </div>
        </ModalWrapper>,
        document.body
    );
};

export default SettingsModal;
