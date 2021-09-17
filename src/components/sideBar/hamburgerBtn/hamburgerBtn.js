import React from "react";
import classNames from "classnames";

import styles from './hamburgerBtn.sass'

let cx = classNames.bind(styles)

const HamburgerBtn = ({ openMenu, isMenuOpen }) => {
    const className = cx({
        isActive: isMenuOpen
    })
    return (
        <div>
            <button
                onClick={openMenu}
                className={`toggleHamburger toggleHamburger__animx ${className}`}>
                <span>menu toggle</span>
            </button>
        </div>
    )
}

export default HamburgerBtn;