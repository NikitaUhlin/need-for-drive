import React from "react";
import classNames from "classnames"

import styles from "./tabsMenu.module.sass"

let cx = classNames.bind(styles)

const TabsMenu = ({ activeTab, onTabChange, accessibleTab }) => {
    const classNameGeolocation = cx({
        [styles.menuItem]: true,
        [styles.accessible]: accessibleTab >= 1,
        [styles.active]: activeTab === 1,
    })

    const classNameModel = cx({
        [styles.menuItem]: true,
        [styles.accessible]: accessibleTab >= 2,
        [styles.active]: activeTab === 2,
    })

    const classNameAdditional = cx({
        [styles.menuItem]: true,
        [styles.accessible]: accessibleTab >= 3,
        [styles.active]: activeTab === 3,
    })

    const classNameTotal = cx({
        [styles.menuItem]: true,
        [styles.accessible]: accessibleTab >= 4,
        [styles.active]: activeTab === 4,
    })

    return (
        <div className={styles.container}>
            <div
                className={classNameGeolocation}
                onClick={() => onTabChange(1)}
            >
                Местоположение
            </div>
            <div className={styles.triangle} />
            <div
                className={classNameModel}
                onClick={() => onTabChange(2)}
            >
                Модель
            </div>
            <div className={styles.triangle} />
            <div
                className={classNameAdditional}
                onClick={() => onTabChange(3)}
            >
                Дополнительно
            </div>
            <div className={styles.triangle} />
            <div
                className={classNameTotal}
                onClick={() => onTabChange(4)}
            >
                Итого
            </div>
        </div>
    )
}

export default TabsMenu