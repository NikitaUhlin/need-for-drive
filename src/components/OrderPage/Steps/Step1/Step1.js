import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import Select from "react-select";
import classNames from "classnames";
import { getCities, getGeolocationCity, getPickUp, getPoint, getPointCity, updateAccessibleTab } from "../../../../store/actions";
import * as selectors from "../../../../store/selectors"

import styles from "./step1.module.sass"

let cx = classNames.bind(styles)

const Step1 = ({ onSubmit, onChange }) => {
    const dispatch = useDispatch()

    const city = useSelector(selectors.city)
    const pickUp = useSelector(selectors.pickUp)
    const cities = useSelector(selectors.cities)
    const pickUps = useSelector(selectors.pickUps)
    const points = useSelector(selectors.points)
    const pointCity = useSelector(selectors.pointCity)
    const geolocationCity = useSelector(selectors.geolocationCity)

    const [mapState, setMapState] = useState({ center: [54.992472, 39.076132], zoom: 11 })
    const [isMapVisible, setIsMapVisible] = useState(false)

    const classNameMap = cx({
        [styles.map]: true,
        [styles.activeMap]: isMapVisible,
    })
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
        else
            dispatch(updateAccessibleTab(1))
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

    useEffect(() => {
        if (pointCity) {
            setMapState({
                center: pointCity.split(' ').reverse(),
                zoom: 11
            })
            setIsMapVisible(true)
        }
        else
            setIsMapVisible(false)

    }, [pointCity])

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
        const selectedCity = cities.find((item) => e && e.value === item.id)
        onChange({
            city: e ? e.value : '',
            pickUp: '',
            car: '',
            selectRate: '',
            startDate: null,
            endDate: null,
            additional: []
        })
        setIsMapVisible(true)

        if (selectedCity)
            dispatch(getPointCity(selectedCity.name))
    }

    const handleChangePickUp = (e) => {
        const selectedPickUp = pickUps.find((item) => e && e.value === item.id)
        onChange({
            city: selectedPickUp ? selectedPickUp.cityId.id : city,
            pickUp: e ? e.value : '',
            car: '',
            selectRate: '',
            startDate: null,
            endDate: null,
            additional: []
        })
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
        if (!city)
            ymaps.geolocation.get()
                .then((result) => {
                    dispatch(getGeolocationCity(`${result.geoObjects.position[1]}, ${result.geoObjects.position[0]}`))
                    setMapState({
                        center: result.geoObjects.position
                    })
                })
    }

    useEffect(() => {
        if (!city) {
            const geoCity = cities.find((item) => geolocationCity && geolocationCity === item.name)
            if (geoCity) {
                onChange({
                    city: geoCity.id
                })
                setIsMapVisible(true)
            }
        }
        else setIsMapVisible(true)
    }, [geolocationCity, cities, city])

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
                <div className={classNameMap}>
                    <div className={styles.mapTitle}>Выбрать на карте:</div>
                    <YMaps
                        query={{
                            apikey: 'c2eeaac1-3b6e-4464-aa91-033699da3b02'
                        }}>

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

                    </YMaps>
                </div>
            </div>
        </div >
    )
}

export default Step1