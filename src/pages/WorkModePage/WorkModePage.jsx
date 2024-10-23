import React from "react";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import Conteiner from "@/components/Container/Container";
import PomodoroTimer  from "@/components/PomodoroTimer/PomodoroTimer";
import ToDo from "@/components/ToDo/ToDo.jsx";
import "./WorkModePage.scss";

const WorkModePage = () => {
    return (
        <Conteiner>
            <PomodoroTimer/>
            <div className="music-todo--row">
                <div className="music-player">
                    <MusicPlayer/>
                </div>
                <ToDo/>
            </div>


        </Conteiner>
    )
}

export default WorkModePage;