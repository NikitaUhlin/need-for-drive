import React from "react";
import Button from "../Button/Button";

import styles from "./modal.module.sass"

const Modal = ({ onOk, onCancel }) => (
    <div className={styles.container} onClick={onCancel}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <div className={styles.title}>
                Подтвердите заказ
            </div>
            <div className={styles.buttonsContainer}>
                <div className={styles.buttonOk}>
                    <Button onClick={onOk}>Подтвердить</Button>
                </div>
                <div className={styles.buttonBack}>
                    <Button onClick={onCancel} mode="red">Вернуться</Button>
                </div>
            </div>
        </div>
    </div>
)

export default Modal