import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {status} from "@/components/KanbanBoard/constants.js";
import KanbanColumn from "@/components/KanbanBoard/KanbanColumn.jsx";

const KanbanTasksWrapper = () => {
    const currentProject = useSelector(state => state.projects.currentProject) ?? {};
    const projectKanbanList = currentProject.kanban ?? [];
    const kanbanToDo = (projectKanbanList.filter(task => task.status === status[0])) || [];
    const kanbanInProgress = (projectKanbanList.filter(task => task.status === status[1])) || [];
    const kanbanReview = (projectKanbanList.filter(task => task.status === status[2])) || [];
    const kanbanDone = (projectKanbanList.filter(task => task.status === status[3])) || [];

    return (
        <div className="kanban-tasks__wrapper">
            <KanbanColumn kanbanTitle='To Do' kanbanList={kanbanToDo}/>
            <KanbanColumn kanbanTitle='In Progress' kanbanList={kanbanInProgress}/>
            <KanbanColumn kanbanTitle='Review' kanbanList={kanbanReview}/>
            <KanbanColumn kanbanTitle='Done' kanbanList={kanbanDone}/>
        </div>
    );
};

export default KanbanTasksWrapper;
