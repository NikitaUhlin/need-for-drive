import React from "react";

import "./dots.sass"

const Dot = ({ active }) => {
    return (
        <span
            className={`dot ${active ? "dotActive" : "dotPassive"}`}
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