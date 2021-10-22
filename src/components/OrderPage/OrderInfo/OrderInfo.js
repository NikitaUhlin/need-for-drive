import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import * as selectors from "../../../store/selectors"
import Button from "../../../common/Button/Button";

import styles from "./orderInfo.module.sass"


const buttonText = ["Выбрать модель", "Дополнительно", "Итого", "Заказать"]

const OrderInfo = ({ onClick, activeTab, order }) => {
    const cities = useSelector(selectors.cities)
    const pickUps = useSelector(selectors.pickUps)

    const city = useMemo(() => cities.find((item) => item.id === order.city), [cities, order.city])
    const pickUp = useMemo(() => pickUps.find((item) => item.id === order.pickUp), [pickUps, order.pickUp])

    let active = false
    switch (activeTab) {
        case 1:
            active = order.city && order.pickUp
            break;

        default: active = false
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Ваш заказ:</div>
            <ul className={styles.pickUpPoint}>
                <div className={styles.city}>{city && city.name},</div>
                <li>
                    <span>
                        Пункт выдачи
                    </span>
                    <span>

                        <div>{pickUp && pickUp.address}</div>
                    </span>
                </li>
            </ul>
            <div className={styles.price}><span>Цена:</span> от 8 000 до 12 000 ₽</div>
            <Button
                onClick={onClick}
                disabled={!active}
            >{buttonText[activeTab - 1]}</Button>
        </div>
    )
}

export default OrderInfo