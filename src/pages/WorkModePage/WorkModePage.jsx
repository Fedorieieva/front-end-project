import React from "react";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import Conteiner from "@/components/Container/Container";
import PomodoroTimer  from "@/components/PomodoroTimer/PomodoroTimer";

const WorkModePage = () => {
    return (
        <Conteiner>
            <PomodoroTimer/>
            <MusicPlayer/>
        </Conteiner>
    )
}

export default WorkModePage;