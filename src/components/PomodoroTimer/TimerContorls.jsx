import React, {useEffect, useState} from "react";
import Button from "@/components/Button/Button.jsx";
import PropTypes from "prop-types";
import SettingsModal from "@/components/PomodoroTimer/components/SettingsModal/SettingsModal.jsx";
import './PomodoroTimer.scss';

const Controls = (props) => {
    const {onStart, onPause, onSkip, isRunning, isPaused} = props;
    const [currentButton, setCurrentButton] = useState("start");
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    useEffect(() => {
        if (!isRunning) {
            handleEnd();
        }
    }, [isRunning]);

    const handleEnd = () => {
        setCurrentButton("start");
    }


    const handleStart = () => {
        onStart();
        setCurrentButton("pause");
    };

    const handlePause = () => {
        onPause();
        setCurrentButton("start");
    };

    const handleSkip = () => {
        onSkip();
        setCurrentButton("start");
    }

    return (
        <div className="controls">
            <Button className="settings-btn control-btn" onClick={() => setIsSettingsOpen(true)}>Settings</Button>
            {isSettingsOpen && (
                <SettingsModal onClose={() => {setIsSettingsOpen(false);}} />
            )}

            {currentButton === "start" && (
                <>
                    <Button className="start-btn control-btn" onClick={handleStart} disabled={isRunning && !isPaused}>Start</Button>
                    <Button className="skip-btn control-btn" onClick={handleSkip} disabled={!isRunning && !isPaused}>Skip</Button>
                </>
            )}
            {currentButton === "pause" && (
                <Button className="pause-btn control-btn"  onClick={handlePause} disabled={!isRunning || isPaused}>Pause</Button>
            )}

        </div>
    );
};

Controls.propTypes = {
    onStart: PropTypes.func,
    onPause: PropTypes.func,
    onSkip: PropTypes.func,
    isRunning: PropTypes.bool,
    isPaused: PropTypes.bool,
};

export default Controls;
