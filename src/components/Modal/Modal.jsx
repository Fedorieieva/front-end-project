import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import cn from 'classnames'

import './Modal.scss';
import Button from "@/components/Button/Button.jsx";
import {Link} from "react-router-dom";
import LogOut from './icons/log-out.svg?react';
import Close from './icons/x.svg?react';
import {ModalBody, ModalClose, ModalFooter, ModalHeader, ModalWrapper} from "@/components/Modal/index.js";


const Modal = ({ onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleLinkClick = () => {
        onClose(); // Close the modal
    };

    return ReactDOM.createPortal(
        <ModalWrapper onClick={onClose}>
            <div
                className="modal-content"
                onClick={(event) => event.stopPropagation()}
            >
                <ModalHeader className='modal-content__header'>
                    <div className="user__info">
                        <div className='user-img-holder'></div>
                        <p className="user-name">Name</p>
                    </div>
                    <ModalClose className='modal__close-icon' onClick={onClose}>
                        <Close />
                    </ModalClose>
                </ModalHeader>

                <ModalBody className='modal__body'>
                    <ul className='modal__nav-list'>
                        <li className='modal__nav-item'>
                            <Link className='modal__nav-link' to='/' onClick={handleLinkClick}>To Do</Link>
                        </li>
                        <li className='modal__nav-item'>
                            <Link className='modal__nav-link' to='/projects' onClick={handleLinkClick}>Projects</Link>
                        </li>
                        <li className='modal__nav-item'>
                            <Link className='modal__nav-link' to='/work-mode' onClick={handleLinkClick}>Work Mode</Link>
                        </li>
                        <li className='modal__nav-item'>
                            <Link className='modal__nav-link' to='/playlists' onClick={handleLinkClick}>Playlists</Link>
                        </li>
                    </ul>
                </ModalBody>

                <ModalFooter className={cn('modal__footer')}>
                    <Button className='log-out-btn' onClick={onClose}><LogOut /> Sign out</Button>
                </ModalFooter>
            </div>
        </ModalWrapper>,
        document.body
    );
};


Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Modal;
