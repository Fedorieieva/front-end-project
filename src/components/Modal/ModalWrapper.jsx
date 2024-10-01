import React from "react";
import PropTypes from "prop-types";


const ModalWrapper = (props) => {
    const {children, onClick} = props;

    return (
        <div className='modal-wrapper' onClick={onClick}>
            {children}
        </div>
    )
}


ModalWrapper.proptypes = {
    children: PropTypes.any,
    onClick: PropTypes.func
}

export default ModalWrapper