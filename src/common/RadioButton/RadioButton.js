import React from "react";
import classNames from "classnames";

import styles from "./radioButton.module.sass"

let cx = classNames.bind(styles)

const RadioButton = ({ name, children, onClick, isActive }) => {
    const classNameRadio = cx({
        [styles.radioItem]: true,
        [styles.active]: isActive,

    })

    const onRadioClick = () => {
        onClick(name)
    }

    return (
        <div
            className={classNameRadio}
            onClick={onRadioClick}

        >
            <div className={styles.radio} />
            {children}
        </div>
    )
}
export default RadioButton