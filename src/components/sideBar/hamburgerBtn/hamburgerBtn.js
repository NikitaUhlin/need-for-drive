import React from "react";
import './hamburgerBtn.sass'

function HamburgerBtn() {
    return (
        <div>
            <button className="toggleHamburger toggleHamburger__animx">
                <span>menu toggle</span>
            </button>
        </div>
    )
}

export default HamburgerBtn;