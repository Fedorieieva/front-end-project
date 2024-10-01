import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import cn from 'classnames'

import './Modal.scss';
import Button from "@/components/Button/Button.jsx";
import {Link} from "react-router-dom";
import LogOut from './icons/log-out.svg?react';
import Close from './icons/x.svg?react';
import ModalWrapper from "@/components/Modal/ModalWrapper.jsx";
import ModalHeader from "@/components/Modal/ModalHeader.jsx";
import ModalClose from "@/components/Modal/ModalClose.jsx";
import ModalBody from "@/components/Modal/ModalBody.jsx";
import ModalFooter from "@/components/Modal/ModalFooter.jsx";


const Modal = ({onClose}) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

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
                    <ModalClose className='modal__close-icon' onClick={onClose} >
                        <Close/>
                    </ModalClose>
                </ModalHeader>

                <ModalBody className='modal__body'>
                    <ul className='modal__nav-list'>
                        <li className='modal__nav-item'>
                            <Link className='modal__nav-link' to='/'>To Do</Link>
                        </li>
                        <li className='modal__nav-item'>
                            <Link className='modal__nav-link' to='/projects'>Projects</Link>
                        </li>
                        <li className='modal__nav-item'>
                            <Link className='modal__nav-link' to='/work-mode'>Work Mode</Link>
                        </li>
                        <li className='modal__nav-item'>
                            <Link className='modal__nav-link' to='/playlists'>Playlists</Link>
                        </li>
                    </ul>
                </ModalBody>

                <ModalFooter className={cn('modal__footer')}>
                    <Button className='log-out-btn'><LogOut/> Sign out</Button>
                </ModalFooter>
            </div>
        </ModalWrapper>,
        document.body
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Modal;
