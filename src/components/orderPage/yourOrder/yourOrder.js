import React from "react";
import Button from "../../../common/button/button";

import styles from "./yourOrder.module.sass"

const YourOrder = ({ onSubmit, active, city, pickUp }) => (
    <div className={styles.container}>
        <div className={styles.title}>Ваш заказ:</div>
        <ul className={styles.pickUpPoint}>
            <div className={styles.city}>{city},</div>
            <li>
                <span>
                    Пункт выдачи
                </span>
                <span>

                    <div>{pickUp}</div>
                </span>
            </li>
        </ul>
        <div className={styles.price}><span>Цена:</span> от 8 000 до 12 000 ₽</div>
        <Button
            disabled={!active}
            onClick={onSubmit}

        >Выбрать модель</Button>
    </div>
)

export default YourOrder