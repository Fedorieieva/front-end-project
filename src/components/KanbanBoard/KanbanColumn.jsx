import React from "react";
import PropTypes from "prop-types";
import KanbanCard from "@/components/KanbanBoard/KanbanCard.jsx";

const KanbanColumn = ({kanbanTitle, kanbanList}) => {
    return (
        <div className="kanban-column">
            <h1 className="kanban-column__title">{kanbanTitle}</h1>

            <div className="kanban-column__cards-wrapper">
                {kanbanList.length !== 0 &&
                    kanbanList.map((item) => (
                        <KanbanCard key={item.id} kanbanTask={item}/>
                    ))
                }
            </div>
        </div>
    );
};

KanbanColumn.propTypes = {
    kanbanTitle: PropTypes.string,
    kanbanList: PropTypes.array
}

export default KanbanColumn;
