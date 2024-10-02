import React from "react";
import {useRef} from 'react';
import Button from "@/components/Button/Button.jsx";
import {useDispatch} from "react-redux";
import {actionAddTask} from "@/store/slices/todo.slice.js";
import Plus from './icons/plus.svg?react';
import Check from './icons/Check.svg?react';


const AddTask = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const taskToAdd = {
            task: inputRef.current.value.trim(),
            isCompleted: false
        };

        if (taskToAdd.task.length === 0) {
            return null
        }

        dispatch(actionAddTask(taskToAdd));

        inputRef.current.value = '';
    }

    return (
        <div className="add-task">
            {/*<div className="icon__wrapper">*/}
            {/*    <Check calssName='check-icon'/>*/}
            {/*</div>*/}

            <form className="form-task" onSubmit={handleSubmit}>
                <input
                    className="task-massage"
                    placeholder='Description of my new task'
                    type='text'
                    ref={inputRef}

                />
                <Button className="task-btn" type="submit"><Plus/></Button>
            </form>
        </div>

    )
}

export default AddTask
