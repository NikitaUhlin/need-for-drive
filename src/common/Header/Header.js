import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Link } from "react-router-dom";
import * as selectors from "../../store/selectors"

import svgMapPoint from "../../assets/icons/mapPoint.svg";

import styles from "./header.module.sass"

const Header = () => {
    const city = useSelector(selectors.city)
    const cities = useSelector(selectors.cities)
    const selectedCity = cities.find((item) => city === item.id)
    return (
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
                        {selectedCity ? selectedCity.name : ""}
                    </div>
                </div>
            </div>
        </Router>
    )
}


export default Header;