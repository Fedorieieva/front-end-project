import React, {useState} from "react";

import './Header.scss';
import Container from "@/components/Container/Container.jsx";
import Logo from './icons/Logo.svg?react';
import Menu from './icons/menu.svg?react';
import Button from "@/components/Button/Button.jsx";
import Modal from "@/components/Modal/Modal.jsx";
import {Link} from "react-router-dom";

const Header = () => {
    const [activeModal, setActiveModal] = useState(false);

    return (
        <Container>
            <header className='header'>
                <div className="header__content">
                    <Link to='/'><Logo/></Link>
                    <Button onClick={() => setActiveModal(true)}><Menu/></Button>
                </div>
            </header>

            {activeModal && (
                <Modal onClose={() => setActiveModal(false)}/>
            )}
        </Container>
    )
}

export default Header
