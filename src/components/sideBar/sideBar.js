import React, { useState } from "react";
import HamburgerBtn from "./hamburgerBtn/hamburgerBtn";
import classNames from "classnames";
import facebookIcon from "../../assets/icons/facebookIcon.svg"
import instagramIcon from "../../assets/icons/instagramIcon.svg"
import telegramIcon from "../../assets/icons/telegramIcon.svg"

import styles from "./sideBar.sass"

let cx = classNames.bind(styles)

function SideBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const className = cx({
        isMenuOpen
    })

    return (
        <div>
            <HamburgerBtn
                openMenu={openMenu}
                isMenuOpen={isMenuOpen}
            />
            <div className={`sideBar ${className}`}>
                <div className="sideBar__links">
                    <div className="sideBar__link">ПАРКОВКА</div>
                    <div className="sideBar__link">СТРАХОВКА</div>
                    <div className="sideBar__link">БЕНЗИН</div>
                    <div className="sideBar__link">ОБСЛУЖИВАНИЕ</div>
                </div>
                <div className="sideBar__social">
                    <img src={telegramIcon} alt="" className="sideBar__social-item" />
                    <img src={facebookIcon} alt="" className="sideBar__social-item" />
                    <img src={instagramIcon} alt="" className="sideBar__social-item" />
                </div>
            </div>
            <div className="sideBar__btn-language">
                Eng
            </div>
            <div className={`milkShadow ${className}`}></div>
        </div>

    )
}

export default SideBar;