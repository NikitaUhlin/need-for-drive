import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import * as selectors from "../../../store/selectors"
import Button from "../../../common/Button/Button";

import styles from "./orderInfo.module.sass"


const buttonText = ["Выбрать модель", "Дополнительно", "Итого", "Заказать"]

const OrderInfo = ({ onClick, activeTab, order }) => {
    const cities = useSelector(selectors.cities)
    const pickUps = useSelector(selectors.pickUps)
    const cars = useSelector(selectors.cars)

    const city = useMemo(() => cities.find((item) => item.id === order.city), [cities, order.city])
    const pickUp = useMemo(() => pickUps.find((item) => item.id === order.pickUp), [pickUps, order.pickUp])
    const car = useMemo(() => cars.find((item) => item.id === order.car), [cars, order.car])

    let active = false
    switch (activeTab) {
        case 1:
            active = order.city && order.pickUp
            break;
        case 2:
            active = order.car
            break;

        default: active = false
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Ваш заказ:</div>
            <div className={styles.list}>
                <div className={styles.listItem}>
                    <div className={styles.label}>
                        Пункт выдачи
                    </div>
                    <div className={styles.dots}></div>
                    <div className={styles.value}>
                        <div className={styles.city}>{city && city.name},</div>
                        {pickUp && pickUp.address}
                    </div>
                </div>
                {car && <div className={styles.listItem}>
                    <div className={styles.label}>
                        Модель
                    </div>
                    <div className={styles.dots}></div>
                    <div className={styles.value}>
                        {car && car.name}
                    </div>
                </div>}
            </div>
            {car && <div className={styles.price}><span>Цена:</span> от {car.priceMin} до {car.priceMax} ₽</div>}
            <Button
                onClick={onClick}
                disabled={!active}
            >{buttonText[activeTab - 1]}</Button>
        </div>
    )
}

export default OrderInfo