import React from "react";
import './slide.sass'

const Slide = ({ children }) => {

    return (
        <div
            className="slide"
        >{children}</div>
    )
}

export default Slide