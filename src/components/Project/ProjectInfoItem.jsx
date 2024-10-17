import React from "react";

const ProjectInfoItem = ({item, title}) => {
    return (
        <div className="project-item">
            <span className='info-bold'>{title}:</span>
            <p className='project-item__description'>{item}</p>
        </div>
    )
}

export default ProjectInfoItem