import React from "react";
import classNames from "classnames";

import styles from "./dots.sass"

let cx = classNames.bind(styles)

const Dot = ({ active }) => {

    const className = cx({
        dot: true,
        dotActive: active
    })

    return (
        <span
            className={className}
        />
    )
}

const Dots = ({ countSlides, activeIndex }) => {
    let dots = [];
    for (let i = 0; i < countSlides; i++) {
        dots.push(<Dot key={i} active={activeIndex === i} />)
    }
    return (
        <div
            className="dots"
        >
            {dots}
        </div>
    )
}

export default Dots