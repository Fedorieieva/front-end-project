import React from "react";
import cn from 'classnames';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import './Button.scss';


const Button = (props) => {
    const {children, type='button', to, className, onClick, ...restProps} = props;
    let Component = to ? "Link" : "button";

    return (
        <Component
            type={type}
            onClick={onClick}
            className={cn('btn', className)}
            to={to}
            {...restProps}
        >
            {children}
        </Component>
    )
}


Button.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default Button







