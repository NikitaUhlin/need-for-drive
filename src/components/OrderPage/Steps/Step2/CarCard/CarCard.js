import classNames from "classnames";
import React from "react";

import styles from './carCard.module.sass'
let cx = classNames.bind(styles)
const CarCard = ({ name, priceMin, priceMax, path, onClickCar, id, car }) => {
    let newPath
    if (path.indexOf('base64') >= 0)
        newPath = path
    else
        newPath = `https://api-factory.simbirsoft1.com${path}`


    const onClick = () => {
        onClickCar(id)
    }
    const classNameCard = cx({
        [styles.container]: true,
        [styles.active]: car === id,

    })
    return (
        <div
            onClick={onClick}
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