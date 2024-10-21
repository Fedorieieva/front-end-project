import React, {useEffect} from "react";
import AddKanbanTask from "@/components/KanbanBoard/AddKanbanTask.jsx";
import KanbanTasksWrapper from "@/components/KanbanBoard/KanbanTasksWrapper.jsx";
import './KanbanBoard.scss';

const KanbanBoard = () => {
    return (
        <div className="kanban-board__wrapper">
            <AddKanbanTask/>
            <KanbanTasksWrapper/>
        </div>
    );
};

export default KanbanBoard;
