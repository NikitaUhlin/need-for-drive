import React from "react";

import Button from "../../../common/Button/Button";

import styles from "./orderInfo.module.sass"


const buttonText = ["Выбрать модель", "Дополнительно", "Итого", "Заказать"]

const OrderInfo = ({ onClick, activeTab, order }) => {
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
                <div className={styles.city}>{order.city},</div>
                <li>
                    <span>
                        Пункт выдачи
                    </span>
                    <span>

                        <div>{order.pickUp}</div>
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