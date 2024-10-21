import React from "react";
import PropTypes from "prop-types";
import Button from "@/components/Button/Button.jsx";
import Left from './icons/left-arrow.svg?react';
import Right from './icons/right-arrow.svg?react';
import Delete from './icons/x.svg?react';
import {status} from "@/components/KanbanBoard/constants.js";
import {useDispatch, useSelector} from "react-redux";
import {actionDeleteProjectKanbanTask, actionEditKanbanTaskStatus} from "@/store/slices/project.slice.js";

const KanbanCard = ({kanbanTask}) => {
    const dispatch = useDispatch();
    const currentProject = useSelector((state) => state.projects.currentProject);
    const handleDelete = () => {
        dispatch(actionDeleteProjectKanbanTask({
            projectId: currentProject.id,
            kanbanTaskId: kanbanTask.id,
        }));
    };

    const handleStatusChange = (direction) => {
        const currentIndex = status.indexOf(kanbanTask.status);

        if (direction === 'next' && currentIndex < status.length - 1) {
            const nextStatus = status[currentIndex + 1];

            dispatch(actionEditKanbanTaskStatus({
                projectId: currentProject.id,
                kanbanTaskId: kanbanTask.id,
                newStatus: nextStatus,
            }));
        } else if (direction === 'prev' && currentIndex > 0) {
            const prevStatus = status[currentIndex - 1];

            dispatch(actionEditKanbanTaskStatus({
                projectId: currentProject.id,
                kanbanTaskId: kanbanTask.id,
                newStatus: prevStatus,
            }));
        }
    };

    return (
        <div className="kanban-task-card">
            <p className="kanban-card__info">{kanbanTask?.task}</p>
            <div className="kanban-card__actions">
                {kanbanTask.status !== 'to-do' && (
                    <Button className='kanban-card-btn' onClick={() => handleStatusChange('prev')}>
                        <Left/>
                    </Button>
                )}

                {kanbanTask.status !== 'done' && (
                    <Button className='kanban-card-btn' onClick={() => handleStatusChange('next')}>
                        <Right/>
                    </Button>
                )}

                <Button className='kanban-card-btn' onClick={handleDelete}>
                    <Delete/>
                </Button>
            </div>
        </div>
    );
};

KanbanCard.propTypes = {
    kanbanTask: PropTypes.object
}

export default KanbanCard