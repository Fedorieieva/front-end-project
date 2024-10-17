import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actionFetchProjectById} from "@/store/slices/project.slice";
import './Project.scss';
import ProjectInfoItem from "@/components/Project/ProjectInfoItem.jsx";
import ProjectModal from "@/components/ProjectModal/ProjectModal.jsx";
import Button from "@/components/Button/Button.jsx";

const Project = () => {
    const {projectId} = useParams();
    const dispatch = useDispatch();
    const project = useSelector(state => state.projects.currentProject);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(actionFetchProjectById(projectId));
    }, [dispatch, projectId]);

    return (
        <div className='project__wrapper'>
            <div className="project">
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className='edit-project-btn btn--transparent'
                >
                    Edit project
                </Button>
                <div className="project-info">
                    <ProjectInfoItem item={project?.name} title="Project Title"/>
                    <ProjectInfoItem item={project?.description} title="Project Description"/>
                    <ProjectInfoItem item={project?.info} title="Project Info"/>
                </div>
            </div>

            {isModalOpen && <ProjectModal onClose={() => setIsModalOpen(false)} project={project}/>}
        </div>
    );
};

export default Project;
