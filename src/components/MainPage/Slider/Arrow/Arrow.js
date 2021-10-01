import React from "react";
import classNames from "classnames";

import leftArrow from "../../../../assets/icons/leftArrow.svg";
import rightArrow from "../../../../assets/icons/rightArrow.svg";

import styles from "./arrow.module.sass"

let cx = classNames.bind(styles)

const Arrow = ({ direction, handleClick }) => {

    const classNameArrow = cx({
        [styles.arrow]: true,
        [styles.arrowRight]: direction === "right",
        [styles.arrowLeft]: direction === "left"
    })

    const classNameArrowIcon = cx({
        iconFocus: true,
        iconLeft: direction === "left",
        iconRight: direction === "right"
    })

    return (
        <div
            onClick={handleClick}
            className={classNameArrow}
        >
            <img
                src={direction === "right" ? rightArrow : leftArrow}
                alt=""
                className={classNameArrowIcon} />
        </div>
    )
}
export default Arrow