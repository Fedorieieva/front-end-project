import React from "react";
import './ProjectPage.scss';
import Container from "@/components/Container/Container.jsx";
import Project from "@/components/Project/Project.jsx";
import KanbanBoard from "@/components/KanbanBoard/KanbanBoard.jsx";

const ProjectPage = () => {

    return (

        <Container>
            <div className="project-page">
                <Project/>
                <KanbanBoard/>
            </div>
        </Container>
    );
};

export default ProjectPage;
