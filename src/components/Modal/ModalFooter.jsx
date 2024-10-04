import React from "react";
import cn from 'classnames';
import PropTypes from "prop-types";


const ModalFooter = (props) => {
    const {children, className} = props;

    return (
        <div className={cn('footer-navigation', className)}>
            {children}
        </div>
    )
}

ModalFooter.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
}

export default ModalFooter








