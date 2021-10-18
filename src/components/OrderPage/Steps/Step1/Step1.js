import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import Select from "react-select";

import { getCities, getPickUp, getPoint } from "../../../../store/actions";
import * as selectors from "../../../../store/selectors";

import styles from "./step1.module.sass"

const Step1 = ({ onSubmit, onChange }) => {
    const dispatch = useDispatch()

    const city = useSelector(selectors.city)
    const pickUp = useSelector(selectors.pickUp)
    const cities = useSelector(selectors.cities)
    const pickUps = useSelector(selectors.pickUps)
    const points = useSelector(selectors.points)

    const [mapState, setMapState] = useState({ center: [54.992472, 39.076132], zoom: 11 })

    useEffect(() => {
        if (!cities.length)
            dispatch(getCities())
    }, [dispatch])

    useEffect(() => {
        if (!pickUps.length)
            dispatch(getPickUp())
    }, [dispatch])

    useEffect(() => {
        if (city && pickUp)
            onSubmit()
    }, [city, pickUp])

    useEffect(() => {
        if (!pickUps.length) {
            return
        }
        const geoAddress = []

        pickUps.map((item) => {
            if (item.cityId) {
                geoAddress.push({
                    address: `${item.cityId.name} ${item.address}`,
                    id: item.id
                })
            }
        })

        dispatch(getPoint(geoAddress))
    }, [pickUps])

    useEffect(() => {
        if (pickUp && points.length) {
            const point = points.find((item) => pickUp === item.id)
            setMapState({
                center: point.coordinates,
                zoom: 14
            })
        }
    }, [pickUp, points])

    const citiesOptions = useMemo(() => cities.map((data) => ({
        label: data.name,
        value: data.id
    })), [cities]);

    const pickUpsOptions = useMemo(() => pickUps
        .filter(data => data.cityId && data.cityId.id.includes(city))
        .map((data) => ({
            label: data.name,
            value: data.id
        })), [pickUps, city]);

    const defaultCityValue = useMemo(
        () => citiesOptions.find((item) => item.value === city),
        [citiesOptions, city]
    )
    const defaultPickUpValue = useMemo(
        () => pickUpsOptions.find((item) => item.value === pickUp) || null,
        [pickUpsOptions, pickUp]
    )

    const handleChangeCity = (e) => {
        onChange({
            city: e ? e.value : '',
            pickUp: ''
        })
    }

    const handleChangePickUp = (e) => {
        const selectedPickUp = pickUps.find((item) => e && e.value === item.id)
        onChange({
            city: selectedPickUp ? selectedPickUp.cityId.id : city,
            pickUp: e ? e.value : ''
        })
        if (e) {
            const point = points.find((item) => e.value === item.id)
            if (point)
                setMapState({
                    center: point.coordinates,
                    zoom: 14
                })
        }
    }

    const onPlacemarkClick = (id) => {
        handleChangePickUp({
            value: id
        })
    }

    const customStyles = {
        control: () => ({
            border: 'none',
            borderBottom: '1px solid #999999',
            display: 'flex',
        }),
        dropdownIndicator: () => ({
            display: 'none',
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        clearIndicator: () => ({
            padding: '5px 0 0 0',
        })
    }

    const getGeolocation = (ymaps) => {
        ymaps.geolocation.get()
            .then((result) => {
                setMapState({
                    center: result.geoObjects.position
                })
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.inputContent}>
                    <div className={styles.input}>
                        Город
                        <Select
                            placeholder="Начните вводить город..."
                            options={citiesOptions}
                            className={styles.select}
                            styles={customStyles}
                            isClearable
                            onChange={handleChangeCity}
                            value={defaultCityValue}
                            noOptionsMessage={() => 'Нет городов'}
                        />
                    </div>
                    <div className={styles.input}>
                        Пункт выдачи
                        <Select
                            placeholder="Начните вводить пункт..."
                            options={pickUpsOptions}
                            className={styles.select}
                            styles={customStyles}
                            isClearable
                            onChange={handleChangePickUp}
                            value={defaultPickUpValue}
                            noOptionsMessage={() => 'Нет точек'}
                        />
                    </div>
                </div>

                <div className={styles.mapTitle}>Выбрать на карте:</div>

                <YMaps
                    query={{
                        apikey: 'c2eeaac1-3b6e-4464-aa91-033699da3b02'
                    }}>
                    <div className={styles.map}>
                        <Map
                            onLoad={getGeolocation}
                            state={mapState}
                            width="100%"
                            height="100%"
                            modules={["geolocation"]}
                        >
                            {points.map((item) => {
                                return (
                                    <Placemark
                                        onClick={() => onPlacemarkClick(item.id)}
                                        key={item.id}
                                        geometry={item.coordinates}
                                        options={{
                                            preset: 'islands#darkGreenAutoCircleIcon'
                                        }}
                                    />
                                )
                            })}
                        </Map>
                    </div>
                </YMaps>
            </div>
        </div >
    )
}

export default Step1