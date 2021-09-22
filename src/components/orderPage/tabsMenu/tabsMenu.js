import React from "react";

import styles from "./tabsMenu.module.sass"

const TabsMenu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.menuItem}>Местоположение</div>
            <div className={styles.triangle} />
            <div className={styles.menuItem}>Модель</div>
            <div className={styles.triangle} />
            <div className={styles.menuItem}>Дополнительно</div>
            <div className={styles.triangle} />
            <div className={styles.menuItem}>Итого</div>
        </div>
    )
}

export default TabsMenu