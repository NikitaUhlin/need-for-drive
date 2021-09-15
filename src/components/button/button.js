import React from "react";

import "./button.sass"

const Button = ({ children }) => {
    return (
        <button
            className="appButton"
        >{children}</button>
    )
}

export default Button