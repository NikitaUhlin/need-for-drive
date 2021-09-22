import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

import svgMapPoint from "../../../assets/icons/mapPoint.svg";

import styles from "./header.module.sass"

const Header = () => (
    <Router>
        <div className={styles.content}>
            <Link to="/">
                <div className={styles.logo}>
                    Need for drive
                </div>
            </Link>
            <div className={styles.mapPoint}>
                <img src={svgMapPoint} alt="" />
                <div className={styles.mapPointCity}>
                    Ульяновск
                </div>
            </div>
        </div>
    </Router>

)


export default Header;