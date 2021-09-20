import React from "react";
import classNames from "classnames";

import styles from './hamburgerBtn.sass'

let cx = classNames.bind(styles)

const HamburgerBtn = ({ openMenu, isMenuOpen }) => {
    const className = cx({
        "toggleHamburger": true,
        "toggleHamburger__animx": true,
        isActive: isMenuOpen
    })
    return (
        <div>
            <button
                onClick={openMenu}
                className={className}>
                <span>menu toggle</span>
            </button>
        </div>
    )
}

export default HamburgerBtn;