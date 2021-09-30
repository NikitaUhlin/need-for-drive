import React from "react";
import { useSelector } from "react-redux";
import { Map, YMaps } from 'react-yandex-maps';

import styles from "./step1.module.sass"


const Step1 = ({ onSubmit, onChange }) => {

    const city = useSelector(state => state.order.city)

    const pickUp = useSelector(state => state.order.pickUp)

    const clearInputCity = () => onChange({ city: '' })

    const clearInputPickUp = () => onChange({ pickUp: '' })

    const handleChangeCity = (e) => {
        onChange({
            city: e.target.value
        })

        if (city && pickUp) onSubmit()
    }

    const handleChangePickUp = (e) => {
        onChange({
            pickUp: e.target.value
        })

        if (city && pickUp) onSubmit()
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.inputContent}>
                    <div className={styles.input}>
                        Город
                        <input
                            list="citySearch"
                            type="text"
                            placeholder="Начните вводить город..."
                            value={city}
                            onChange={handleChangeCity}
                        />
                        <datalist id="citySearch">
                            <option value="Краснодар"></option>
                            <option value="Ульяновск"></option>
                            <option value="Москва"></option>
                            <option value="Санкт-петербург"></option>
                        </datalist>
                        <span className={styles.close} onClick={clearInputCity}>&times;</span>
                    </div>
                    <div className={styles.input}>
                        Пункт выдачи
                        <input

                            type="text"
                            placeholder="Начните вводить пункт..."
                            value={pickUp}
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
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                </YMaps>
            </div>
        </div>
    )
}

export default Step1