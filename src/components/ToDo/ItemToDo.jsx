import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import CheckBox from "@/components/ToDo/CheckBox/CheckBox.jsx";

import MessageLogo from "./icons/message.svg?react";
import RemoveLogo from "./icons/remove.svg?react";
import {actionDeleteTask, actionToggleCompleteTask} from "@/store/slices/todo.slice.js";
import {useDispatch} from "react-redux";
import Button from "@/components/Button/Button.jsx";


const ItemToDo = (props) => {
    const {todo} = props;
    const dispatch = useDispatch();
    const textAreaRef = useRef(null);

    const adjustHeight = () => {
        const textarea = textAreaRef.current;
        textarea.style.height = 'auto'; // Reset height
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

    return (
        <li className={cn("list-todo", {"completed-todo": todo.isCompleted})}>
            <CheckBox checked={todo.isCompleted} onChange={toggleCompleted}/>

            <textarea
                className='todo-task-info'
                name="message"
                value={todo.task}
                ref={textAreaRef}
                disabled
            />
            <div className="list-actions">
                <Button disabled={todo.isCompleted}>
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
