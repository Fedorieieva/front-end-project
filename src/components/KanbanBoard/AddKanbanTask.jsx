import React, {useRef} from "react";
import Button from "@/components/Button/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {actionAddProjectKanbanTask} from "@/store/slices/project.slice.js";
import {status} from "@/components/KanbanBoard/constants.js";

const AddKanbanTask = () => {
    const dispatch = useDispatch();
    const currentProject = useSelector(state => state.projects.currentProject);
    const taskInputRef = useRef();
    const statusSelectRef = useRef();


    const handleSubmit = (event) => {
        event.preventDefault();

        const newKanbanTask = {
            id: Date.now(),
            task: taskInputRef.current.value.trim(),
            status: statusSelectRef.current.value,
            isCurrentProject: false
        }

        if (currentProject && newKanbanTask.task) {
            dispatch(actionAddProjectKanbanTask({
                id: currentProject.id,
                task: newKanbanTask
            }));

            taskInputRef.current.value = '';
            statusSelectRef.current.value = 'to-do';
        }
    }

    return (
        <div className="kanban-add-task__kanban-form">
            <form onSubmit={handleSubmit} className="kanban-form">
                <input
                    ref={taskInputRef}
                    type="text"
                    className="kanban-task"
                    placeholder="Add a new task"
                />
                <select
                    ref={statusSelectRef}
                    name="select-kanban-status"
                    className="kanban-task__status"
                >
                    {status.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>

                <Button
                    className="btn--transparent"
                    type="submit"
                >
                    ADD TASK
                </Button>
            </form>
        </div>
    );
};

export default AddKanbanTask;


