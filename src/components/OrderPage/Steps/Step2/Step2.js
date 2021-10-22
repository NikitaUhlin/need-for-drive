import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import CarCard from "./CarCard/CarCard";
import * as selectors from "../../../../store/selectors";
import { getCars } from "../../../../store/actions";

import styles from "./step2.module.sass"

let cx = classNames.bind(styles)

const catId = {
    1: '',
    2: '600598a3ad015e0bb699774c',
    3: '60b943492aed9a0b9b7ed335'
}

const Step2 = ({ onSubmit, onChange }) => {
    const [activeFilter, setActiveFilter] = useState(1)
    const dispatch = useDispatch()
    const car = useSelector(selectors.car)
    const loading = useSelector(selectors.loading)
    const onCategorySelect = (id) => {
        setActiveFilter(id)
    }
    const cars = useSelector(selectors.cars)
    const filteredCars = useMemo(() => cars
        .filter(data => data.categoryId && data.categoryId.id.includes(catId[activeFilter])), [cars, activeFilter]);

    const classNameFilterAll = cx({
        [styles.filterItem]: true,
        [styles.active]: activeFilter === 1,

    })
    const classNameFilterEco = cx({
        [styles.filterItem]: true,
        [styles.active]: activeFilter === 2,

    })
    const classNameFilterPre = cx({
        [styles.filterItem]: true,
        [styles.active]: activeFilter === 3,

    })

    const onClickCar = (id) => {
        onChange({
            car: id
        })
    }
    useEffect(() => {
        if (car)
            onSubmit()
    }, [car])

    useEffect(() => {
        if (!cars.length)
            dispatch(getCars())
    }, [dispatch])
    return (
        <div className={styles.content}>
            <div className={styles.filter}>
                <div className={classNameFilterAll}>
                    <div
                        onClick={() => onCategorySelect(1)}
                        className={styles.radio}
                    />
                    Все модели
                </div>
                <div className={classNameFilterEco}
                >
                    <div
                        onClick={() => onCategorySelect(2)}
                        className={styles.radio}
                    />
                    Эконом
                </div>
                <div className={classNameFilterPre}
                >
                    <div
                        onClick={() => onCategorySelect(3)}
                        className={styles.radio}
                    />
                    Премиум
                </div>
            </div>

            {loading ? <div>Загрузка...</div> : <div className={styles.cars}>
                {filteredCars.map((item) => {
                    return (
                        <CarCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            priceMin={item.priceMin}
                            priceMax={item.priceMax}
                            path={item.thumbnail.path}
                            onClickCar={onClickCar}
                            car={car}
                        />
                    )
                })}
            </div>}
        </div>
    )
}
export default Step2