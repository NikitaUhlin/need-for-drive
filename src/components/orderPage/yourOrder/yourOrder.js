import React from "react";
import Button from "../../ui/button/button";

import styles from "./yourOrder.module.sass"

const YourOrder = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Ваш заказ:</div>
            <ul className={styles.pickUpPoint}>
                <li>
                    <span>
                        Пункт выдачи
                    </span>
                    <span>
                        Ульяновск, Нариманова 42
                    </span>
                </li>
            </ul>
            <div className={styles.price}><span>Цена:</span> от 8 000 до 12 000 ₽</div>
            <Button mode="disable">Выбрать модель</Button>
        </div>
    )
}

export default YourOrder