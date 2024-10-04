import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import cn from 'classnames'

import './ProjectModal.scss';
import Button from "@/components/Button/Button.jsx";
import {Link} from "react-router-dom";
import {ModalBody, ModalClose, ModalFooter, ModalHeader, ModalWrapper} from "@/components/Modal/index.js";
import Close from './icons/x.svg?react';
import {useDispatch} from "react-redux";
import {actionAddProject} from "@/store/slices/project.slice.js";

const ProjectModal = ({onClose}) => {
    const dispatch = useDispatch();
    const nameInputRef = useRef();
    const descriptionInputRef = useRef();
    const infoInputRef = useRef();

    const handleSubmit = async (event) => {
        const projectId = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        const projectToAdd = {
            id: projectId, // Add the generated ID
            name: nameInputRef.current.value.trim(),
            description: descriptionInputRef.current.value.trim(),
            info: infoInputRef.current.value.trim(),
            kanban: []
        };

        console.log(projectToAdd)
        if(projectToAdd.name.length === 0){
            return null;
        }

        dispatch(actionAddProject(projectToAdd));

        nameInputRef.current.value = '';
        descriptionInputRef.current.value = '';
        infoInputRef.current.value = '';
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return ReactDOM.createPortal(
        <ModalWrapper onClick={onClose} className='project-modal__wrapper'>
            <div
                className="project-modal__content"
                onClick={(event) => event.stopPropagation()}
            >
                <ModalHeader className='modal-content__header'>
                    <ModalClose className='modal__close-icon' onClick={onClose} >
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

export default ProjectModal