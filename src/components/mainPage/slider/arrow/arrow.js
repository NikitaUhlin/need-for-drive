import React from "react";
import leftArrow from "../../../../assets/icons/leftArrow.svg";
import rightArrow from "../../../../assets/icons/rightArrow.svg";

import "./arrow.sass"

const Arrow = ({ direction, handleClick }) => {

    return (
        <div
            onClick={handleClick}
            className={`arrow ${direction === "right" ? "arrowRight" : "arrowLeft"}`}
        >
            <img
                src={direction === "right" ? rightArrow : leftArrow}
                alt=""
                className={`iconFocus ${direction === "left" ? "iconLeft" : "iconRight"}`} />
        </div>
    )
}
export default Arrow