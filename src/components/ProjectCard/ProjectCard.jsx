import React from "react";
import './ProjectCard.scss';
import Delete from './icons/x.svg?react';
import Button from "@/components/Button/Button.jsx";
import {useDispatch} from "react-redux";
import {actionDeleteProject} from "@/store/slices/project.slice.js";
import {Link} from "react-router-dom";

const ProjectCard = ({project}) => {
    const dispatch = useDispatch();
    const link = `/projects/${project.id}`;

    const handleDelete = () => {
        dispatch(actionDeleteProject(project));
    }

    return (
        <div className="project-card">
            <Button
                className='project-card__delete-btn'
                onClick={handleDelete}
            >
                <Delete/>
            </Button>

            <Link to={link} className="project-card__info">
                <p className="project-card__name">
                    <span className='bold'>Name: </span>
                    {project.name}
                </p>
                <p className="project-card__description">
                    <span className='bold'>Description: </span>
                    {project.description}
                </p>
            </Link>
        </div>
    )
}

export default ProjectCard;
