import React from "react";
import classNames from "classnames";

import styles from './hamburgerBtn.module.sass'

let cx = classNames.bind(styles)

const HamburgerBtn = ({ openMenu, isMenuOpen }) => {
    const className = cx({
        [styles.toggleHamburger]: true,
        [styles.toggleHamburger__animx]: true,
        [styles.isActive]: isMenuOpen
    })
    return (
        <button
            onClick={openMenu}
            className={className}>
            <span>menu toggle</span>
        </button>
    )
}

export default HamburgerBtn;