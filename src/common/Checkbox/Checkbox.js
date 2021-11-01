import React from "react";
import classNames from "classnames";

import styles from "./checkbox.module.sass"
import checkIcon from "../../assets/icons/checkboxIcon.svg"


let cx = classNames.bind(styles)

const Checkbox = ({ children, onCheck, isActive }) => {
    const classNameCheckbox = cx({
        [styles.checkbox]: true,
        [styles.active]: isActive,

    })
    const classNameCheckboxTitle = cx({
        [styles.checkBoxContainer]: true,
        [styles.activeTitle]: isActive,

    })
    return (
        <div className={classNameCheckboxTitle} onClick={onCheck}>
            <div className={classNameCheckbox}>
                <img className={styles.checkIcon} src={checkIcon} alt="" />
            </div>
            {children}
        </div>
    )
}
export default Checkbox