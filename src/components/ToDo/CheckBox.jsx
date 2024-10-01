import React from "react";
import PropTypes from "prop-types";

const CheckBox = (props) => {
    const {checked, onChange, children} = props;

    return (
        <label className="g-checkbox">
            <input type="checkbox" checked={checked} onChange={onChange}/>
            <div className="label">
                <div className="label-content">
                    {children}
                </div>
            </div>
        </label>
    )
}

CheckBox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.any
}


export default CheckBox
