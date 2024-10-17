import React, {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import CheckBox from "@/components/ToDo/CheckBox/CheckBox.jsx";

import MessageLogo from "./icons/message.svg?react";
import RemoveLogo from "./icons/remove.svg?react";
import {actionDeleteTask, actionEditTask, actionToggleCompleteTask} from "@/store/slices/todo.slice.js";
import {useDispatch} from "react-redux";
import Button from "@/components/Button/Button.jsx";


const ItemToDo = (props) => {
    const {todo} = props;
    const dispatch = useDispatch();
    const textAreaRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [taskValue, setTaskValue] = useState(todo.task);

    const adjustHeight = () => {
        const textarea = textAreaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    useEffect(() => {
        adjustHeight();
    }, [todo.task]);

    const toggleCompleted = () => {
        dispatch(actionToggleCompleteTask(todo));
    }

    const handleDelete = () => {
        dispatch(actionDeleteTask(todo));
    };

    const handleEditToggle = () => {
        setIsEditing(true);
    }

    const handleKeyPress = (event) => {
        if(event.key === "Enter") {
            event.preventDefault();
            dispatch(actionEditTask({ id: todo.id, task: taskValue }));
            setIsEditing(false);
        }
    }

    return (
        <li className={cn("list-todo", {"completed-todo": todo.isCompleted})}>
            <CheckBox checked={todo.isCompleted} onChange={toggleCompleted}/>

            <textarea
                className='todo-task-info'
                name="message"
                value={taskValue}
                ref={textAreaRef}
                disabled={!isEditing}
                onChange={(e) => setTaskValue(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <div className="list-actions">
                <Button disabled={todo.isCompleted} onClick={handleEditToggle}>
                    <MessageLogo className={cn("svg-icon icon-message")}/>
                </Button>
                <Button onClick={handleDelete}>
                    <RemoveLogo className="svg-icon icon-remove"/>
                </Button>
            </div>
        </li>
    );
};


ItemToDo.propTypes = {
    todo: PropTypes.object
}

export default ItemToDo
