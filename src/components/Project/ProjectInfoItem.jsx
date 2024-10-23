import React from "react";
import PropTypes from "prop-types";

const ProjectInfoItem = ({item, title}) => {
    return (
        <div className="project-item">
            <span className='info-bold'>{title}:</span>
            <p className='project-item__description'>{item}</p>
        </div>
    )
}

ProjectInfoItem.propTypes = {
    item: PropTypes.string,
    title: PropTypes.string
};

export default ProjectInfoItem