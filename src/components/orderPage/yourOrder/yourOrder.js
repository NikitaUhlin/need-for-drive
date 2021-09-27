import React from "react";
import Button from "../../../common/button/button";

import styles from "./yourOrder.module.sass"



const YourOrder = ({ onSubmit, active }) => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>Ваш заказ:</div>
            <ul className={styles.pickUpPoint}>
                <div className={styles.city}>Ульяновск,</div>
                <li>
                    <span>
                        Пункт выдачи
                    </span>
                    <span>

                        <div>Нариманова 42</div>
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
}

export default YourOrder