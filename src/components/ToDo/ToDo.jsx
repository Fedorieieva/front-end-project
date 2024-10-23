import React from "react";
import './ToDo.scss';
import TaskList from "@/components/ToDo/TaskList.jsx";
import AddTask from "@/components/ToDo/AddTask.jsx";
import cn from 'classnames';
import PropTypes from "prop-types";

const ToDo = ({className}) => {
    return (
        <div className={cn('todo__wrapper', className)}>
            <AddTask/>
            <TaskList/>
        </div>
    )
}

ToDo.propTypes = {
    className: PropTypes.string
}

export default ToDo
