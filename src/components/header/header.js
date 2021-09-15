import React from "react";
import svgMapPoint from "../../assets/icons/mapPoint.svg";

import "./header.sass"

function Header() {

    return (
        <div className="header">
            <div className="header__logo">
                Need for drive
            </div>
            <div className="header__mapPoint">
                <img src={svgMapPoint} alt="" />
                <div className="header__mapPoint-city">
                    Ульяновск
                </div>
            </div>
        </div>
    )
}

export default Header;