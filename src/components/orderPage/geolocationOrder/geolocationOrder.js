import React, { useState } from "react";
import { connect } from "react-redux";
import { Map, YMaps } from 'react-yandex-maps';

import YourOrder from "../yourOrder/yourOrder";
import { updateOrder } from "../../../store/actions";

import styles from "./geolocationOrder.module.sass"

const GeolocationOrder = ({ onSubmit, city, pickUp, updateOrder }) => {

    const [valueInputCity, setValueInputCity] = useState(city)
    const [valueInputPickUp, setValueInputPickUp] = useState(pickUp)

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

    const handleSubmit = () => {
        const payload = {
            city: valueInputCity,
            pickUp: valueInputPickUp
        }
        onSubmit(payload)
        updateOrder(payload)
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
                            value={valueInputCity}
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
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>
                </YMaps>
            </div>
            <YourOrder
                onSubmit={handleSubmit}
                active={valueInputCity.length && valueInputPickUp.length}
                city={city}
                pickUp={pickUp}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    city: state.order.city,
    pickUp: state.order.pickUp

})

const mapDispatchToProps = {
    updateOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(GeolocationOrder)