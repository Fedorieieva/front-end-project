import React, {useEffect} from "react";
import ItemToDo from "@/components/ToDo/ItemToDo.jsx";
import {useSelector} from "react-redux";


const TaskList = () => {
    const toDoData = useSelector((state) => state.todo.toDoList);

    return(
        <div className="list-wrapper">
            <ul className="list-tasks">
                {toDoData?.map((item, index) => (
                    <ItemToDo
                        todo={item}
                        key={index}
                    />
                ))}
            </ul>
        </div>

    )
}

export default TaskList

