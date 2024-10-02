import React from "react";
import PropTypes from "prop-types";
import './CheckBox.scss';

const CheckBox = (props) => {
    const {checked, onChange} = props;

    return (
        <label className="label--checkbox">
            <input type="checkbox"
                   className="checkbox"
                   checked={checked}
                   onChange={onChange}/>
        </label>
    )
}

CheckBox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func
}


export default CheckBox
