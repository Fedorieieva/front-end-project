import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';


const ModalWrapper = (props) => {
    const {children, onClick, className} = props;

    return (
        <div className={cn('modal-wrapper', className)} onClick={onClick}>
            {children}
        </div>
    )
}


ModalWrapper.proptypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default ModalWrapper