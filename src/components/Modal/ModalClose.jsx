import react from 'react';
import PropTypes from "prop-types";
import cn from 'classnames'

import Button from "@/components/Button/Button.jsx";


const ModalClose = (props) => {
    const {onClick, className, children} = props;

    return (
        <Button className={cn('button--cross', className)} onClick={onClick}>
            {children}
        </Button>
    )
}

ModalClose.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.any
}

export default ModalClose


