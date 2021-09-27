import classNames from "classnames";
import React from "react";

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

    const onTabsClick = (id) => onTabChange(id)

    return (
        <div className={styles.container}>
            <div
                className={classNameGeolocation}
                onClick={() => onTabsClick(1)}
            >
                Местоположение
            </div>
            <div className={styles.triangle} />
            <div
                className={classNameModel}
                onClick={() => onTabsClick(2)}
            >
                Модель
            </div>
            <div className={styles.triangle} />
            <div
                className={classNameAdditional}
                onClick={() => onTabsClick(3)}
            >
                Дополнительно
            </div>
            <div className={styles.triangle} />
            <div
                className={classNameTotal}
                onClick={() => onTabsClick(4)}
            >
                Итого
            </div>
        </div>
    )
}

export default TabsMenu