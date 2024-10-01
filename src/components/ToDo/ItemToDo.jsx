import React, {useState, useRef, useContext, useEffect} from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import CheckBox from "@/components/ToDo/CheckBox.jsx";

import MessageLogo from "./icons/message.svg?react";
import RemoveLogo from "./icons/remove.svg?react";
import {actionDeleteTask, actionToggleCompleteTask} from "@/store/slices/todo.slice.js";
import {useDispatch} from "react-redux";
import Button from "@/components/Button/Button.jsx";


const ItemToDo = (props) => {
    const {todo} = props;
    const dispatch = useDispatch();

    const toggleCompleted = () => {
        dispatch(actionToggleCompleteTask(todo));
    }

    const handleDelete = () => {
        dispatch(actionDeleteTask(todo));
    };

    return (
        <li className={cn("list-todo", {"completed-todo": todo.isCompleted})}>
                <CheckBox checked={todo.isCompleted} onChange={toggleCompleted}>
                <input className='todo-task-info'
                    name="message"
                    // maxLength={50}
                    type="text"
                    value={todo.task}
                    disabled='disabled'
                />
            </CheckBox>
            <div className="list-actions">
                <Button disabled={todo.isCompleted} >
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
