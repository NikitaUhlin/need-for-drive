import React from "react";
import classNames from "classnames";

import styles from "./button.module.sass"

let cx = classNames.bind(styles)

const Button = ({ mode, children, onClick, disabled }) => {
    const className = cx({
        [styles.appButton]: true,
        [styles.darkGreenButton]: mode === "darkGreen",
        [styles.blueButton]: mode === "blue",
        [styles.redButton]: mode === "red",
        [styles.purpleButton]: mode === "purple",
        [styles.disableButton]: disabled
    })

    return (
        <button
            disabled={disabled}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button