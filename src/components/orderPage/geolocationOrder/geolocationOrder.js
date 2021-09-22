import React, { useState } from "react";
import { Map, YMaps } from 'react-yandex-maps';

import styles from "./geolocationOrder.module.sass"

const GeolocationOrder = () => {
    const [valueInputCity, setValueInputCity] = useState('')
    const [valueInputPickUp, setValueInputPickUp] = useState('')
    const clearInputCity = () => {
        setValueInputCity('')
    }
    const clearInputPickUp = () => {
        setValueInputPickUp('')
    }
    const handleChangeCity = (e) => {
        setValueInputCity(e.target.value)
    }
    const handleChangePickUp = (e) => {
        setValueInputPickUp(e.target.value)
    }

    return (
        <>
            <div className={styles.inputContent}>
                <div className={styles.input}>
                    Город
                    <input
                        type="text"
                        placeholder="Начните вводить город..."
                        value={valueInputCity}
                        onChange={handleChangeCity}
                    />
                    <span className={styles.close} onClick={clearInputCity}>&times;</span>
                </div>
                <div className={styles.input}>
                    Пункт выдачи
                    <input
                        type="text"
                        placeholder="Начните вводить пункт..."
                        value={valueInputPickUp}
                        onChange={handleChangePickUp}
                    />
                    <span className={styles.close} onClick={clearInputPickUp}>&times;</span>
                </div>
            </div>

            <div className={styles.mapTitle}>Выбрать на карте:</div>

            <YMaps>
                <div className={styles.map}>
                    <Map
                        defaultState={{ center: [44.992472, 39.076132], zoom: 15 }}
                        width={736}
                        height={352}
                    />
                </div>
            </YMaps>


        </>
    )
}

export default GeolocationOrder