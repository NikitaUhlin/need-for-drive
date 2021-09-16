import React from "react";
import classNames from "classnames";

import styles from "./button.sass"

let cx = classNames.bind(styles)

const Button = ({ mode, children }) => {

    const className = cx({
        appButton: true,
        darkGreenButton: mode === "darkGreen",
        blueButton: mode === "blue",
        redButton: mode === "red",
        purpleButton: mode === "purple"
    })

    return (
        <button
            className={className}
        >{children}</button>
    )
}

export default Button