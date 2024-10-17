import React, {useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

import './ProjectModal.scss';
import Button from "@/components/Button/Button.jsx";
import {ModalBody, ModalClose, ModalHeader, ModalWrapper} from "@/components/Modal/index.js";
import Close from './icons/x.svg?react';
import {useDispatch} from "react-redux";
import {actionAddProject, actionEditProject} from "@/store/slices/project.slice.js";

const ProjectModal = ({onClose, project = null}) => {
    const dispatch = useDispatch();
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    const infoInputRef = useRef();

    const handleSubmit = async (event) => {
        const projectData = {
            id: project ? project.id : `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            name: nameInputRef.current.value.trim(),
            description: descriptionInputRef.current.value.trim(),
            info: infoInputRef.current.value.trim(),
            kanban: []
        };

        if (projectData.name.length === 0) {
            return null;
        }

        if (project) {
            dispatch(actionEditProject(projectData));
        } else {
            dispatch(actionAddProject(projectData));
        }

        nameInputRef.current.value = '';
        descriptionInputRef.current.value = '';
        infoInputRef.current.value = '';
    }

    useEffect(() => {
        if (project) {
            nameInputRef.current.value = project.name;
            descriptionInputRef.current.value = project.description;
            infoInputRef.current.value = project.info;
        }

        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    return ReactDOM.createPortal(
        <ModalWrapper onClick={onClose} className='project-modal__wrapper'>
            <div
                className="project-modal__content"
                onClick={(event) => event.stopPropagation()}
            >
                <ModalHeader className='modal-content__header'>
                    <ModalClose className='modal__close-icon' onClick={onClose}>
                        <Close/>
                    </ModalClose>
                </ModalHeader>

                <ModalBody className='modal__body'>
                    <form className='project-form' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="project-name"
                            placeholder='Enter project name'
                            ref={nameInputRef}
                        />
                        <textarea
                            cols="30"
                            rows="10"
                            className="project-description"
                            placeholder="Enter project description"
                            ref={descriptionInputRef}
                        />
                        <textarea
                            cols="30"
                            rows="10"
                            className="project-info"
                            placeholder="Enter additional project info"
                            ref={infoInputRef}
                        />
                        <Button
                            className='btn--transparent'
                            type='submit'
                        >SAVE</Button>
                    </form>
                </ModalBody>
            </div>
        </ModalWrapper>,
        document.body
    );
}

ProjectModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        info: PropTypes.string,
    })
};

export default ProjectModal