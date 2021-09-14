import React from "react";
import HamburgerBtn from "./hamburgerBtn/hamburgerBtn";

import "./sideBar.sass"


function SideBar() {
    return (
        <div className="sideBar">
            <HamburgerBtn />
            <div className="sideBar__btn-language">
                Eng
            </div>
        </div>
    )
}

export default SideBar;