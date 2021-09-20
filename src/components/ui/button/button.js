import React from "react";
import classNames from "classnames";

import styles from "./button.module.sass"

let cx = classNames.bind(styles)

const Button = ({ mode, children }) => {

    const className = cx({
        [styles.appButton]: true,
        [styles.darkGreenButton]: mode === "darkGreen",
        [styles.blueButton]: mode === "blue",
        [styles.redButton]: mode === "red",
        [styles.purpleButton]: mode === "purple"
    })

    return (
        <button className={className}>
            {children}
        </button>
    )
}

export default Button