import React, {useState} from "react";
import Container from "@/components/Container/Container.jsx";
import ProjectCard from "@/components/ProjectCard/ProjectCard.jsx";
import Plus from './icons/plus.svg?react';

import './ProjectCardWrapper.scss'
import Button from "@/components/Button/Button.jsx";
import ProjectModal from "@/components/ProjectModal/ProjectModal.jsx";

const ProjectCardWrapper = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Container>
            <div className="project-card__wrapper">
                <ul className="project-card__list">
                    <li className='project-card__item project-card__add-project'>
                        <Button
                            className='add-project-btn'
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Plus/>
                        </Button>
                    </li>

                    {
                        data.map((item) => (
                            <li className='project-card__item' key={item.id}>
                                <ProjectCard project={item}/>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {isModalOpen && (
                <ProjectModal onClose={() => setIsModalOpen(false)}/>
            )}
        </Container>
    )
}

export default ProjectCardWrapper
