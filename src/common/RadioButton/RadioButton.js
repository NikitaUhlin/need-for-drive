import React from "react";
import classNames from "classnames";

import styles from "./radioButton.module.sass"

let cx = classNames.bind(styles)

const RadioButton = ({ children, onClick, isActive }) => {
    const classNameRadio = cx({
        [styles.radioItem]: true,
        [styles.active]: isActive,

    })

    return (
        <div
            className={classNameRadio}
            onClick={onClick}

        >
            <div className={styles.radio} />
            {children}
        </div>
    )
}
export default RadioButton