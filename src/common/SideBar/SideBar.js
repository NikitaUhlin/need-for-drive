import React, { useState } from "react";
import classNames from "classnames";

import HamburgerBtn from "./HamburgerBtn/HamburgerBtn"

import { ReactComponent as FacebookIcon } from "../../assets/icons/facebookIcon.svg"
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagramIcon.svg"
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegramIcon.svg"

import styles from "./sideBar.module.sass"

let cx = classNames.bind(styles)

const SideBar = ({ page }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [language, setLanguage] = useState('Eng')

    const openMenu = () =>
        setIsMenuOpen(!isMenuOpen)

    const onClickLanguage = () => {
        if (language === 'Eng')
            setLanguage('Рус')

        else
            setLanguage('Eng')
    }


    const classNameSideBar = cx({
        [styles.content]: true,
        [styles.mainPage]: page === "main",
        [styles.orderPage]: page === "order",
        [styles.isMenuOpen]: isMenuOpen

    })

    const classNameBtnLanguage = cx({
        [styles.btnLanguage]: true,
        [styles.isMenuOpen]: isMenuOpen
    })

    const classNameMilkShadow = cx({
        [styles.milkShadow]: true,
        [styles.isMenuOpen]: isMenuOpen
    })

    return (
        <>
            <HamburgerBtn
                openMenu={openMenu}
                isMenuOpen={isMenuOpen}
            />
            <div className={classNameSideBar}>
                <div>
                    <div className={styles.link}>ПАРКОВКА</div>
                    <div className={styles.link}>СТРАХОВКА</div>
                    <div className={styles.link}>БЕНЗИН</div>
                    <div className={styles.link}>ОБСЛУЖИВАНИЕ</div>
                </div>
                <div className={styles.social}>
                    <TelegramIcon
                        className={styles.social_item}
                    />
                    <FacebookIcon
                        className={styles.social_item}
                    />
                    <InstagramIcon
                        className={styles.social_item}
                    />
                </div>
            </div>
            <div
                className={classNameBtnLanguage}
                onClick={onClickLanguage}
            >
                {language}
            </div>
            <div
                onClick={openMenu}
                className={classNameMilkShadow}
            />
        </>
    )
}

export default SideBar;