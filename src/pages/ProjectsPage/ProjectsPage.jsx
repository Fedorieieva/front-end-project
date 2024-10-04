import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProjectCardWrapper from "@/components/ProjectCardWrapper/ProjectCardWrapper.jsx";

const ProjectsPage = () => {
    const projectsList = useSelector((state) => state.projects.projectsList);

    return (
        <ProjectCardWrapper data={projectsList}/>
    )
}

export default ProjectsPage