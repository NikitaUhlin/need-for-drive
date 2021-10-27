import classNames from "classnames";
import React from "react";
import getImgPath from "../../../../../utils/functions/getImgPath";

import styles from './carCard.module.sass'
let cx = classNames.bind(styles)
const CarCard = ({ name, priceMin, priceMax, path, onClickCar, id, car }) => {
    const newPath = getImgPath(path)

    const classNameCard = cx({
        [styles.container]: true,
        [styles.active]: car === id,

    })
    return (
        <div
            onClick={onClickCar}
            className={classNameCard}
        >
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.price}>
                {priceMin} - {priceMax} ₽
            </div>
            <img className={styles.img} src={newPath} alt='na' />
        </div>
    )
}
export default CarCard