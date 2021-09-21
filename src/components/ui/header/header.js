import React from "react";

import svgMapPoint from "../../../assets/icons/mapPoint.svg";

import styles from "./header.module.sass"

const Header = () => (
    <div className={styles.content}>
        <div className={styles.logo}>
            Need for drive
        </div>
        <div className={styles.mapPoint}>
            <img src={svgMapPoint} alt="" />
            <div className={styles.mapPointCity}>
                Ульяновск
            </div>
        </div>
    </div>
)


export default Header;