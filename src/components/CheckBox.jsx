import React, { Fragment } from "react";

const CheckBox = props => {
    const {
        onChange,
        data: {id, description, done}
    } = props;
    return (<Fragment>
        <label className="todo new-item">
            <input 
                classname="todo_state"
                name={id}
                type="checkbox"
                defaultChecked={done}
                onChange={onChange}
            >
            </input>

            <div className="todo_text">{description}</div>
        </label>
    </Fragment>)
};

export default CheckBox;
