import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarCard from "./CarCard/CarCard";
import * as selectors from "../../../../store/selectors";
import { getCars } from "../../../../store/actions";

import styles from "./step2.module.sass"
import RadioButton from "../../../../common/RadioButton/RadioButton";
import Spinner from "../../../../common/Spinner/Spinner";

const catId = [
    {
        id: '',
        name: 'all',
        title: 'Все модели'
    },
    {
        id: '600598a3ad015e0bb699774c',
        name: 'eco',
        title: 'Эконом'
    },
    {
        id: '60b943492aed9a0b9b7ed335',
        name: 'premium',
        title: 'Премиум'
    },
]

const Step2 = ({ onSubmit, onChange }) => {
    const [activeFilter, setActiveFilter] = useState(catId[0].name)
    const dispatch = useDispatch()
    const car = useSelector(selectors.car)
    const loading = useSelector(selectors.loading)
    const onCategorySelect = (id) => {
        setActiveFilter(id)
    }
    const cars = useSelector(selectors.cars)
    const filteredCars = useMemo(() => {
        const selectedFilter = catId.find((item) => item.name === activeFilter)
        return cars.filter(data => data.categoryId && data.categoryId.id.includes(selectedFilter.id))
    }, [cars, activeFilter]);

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
                {catId.map((item) => {
                    return <RadioButton
                        key={item.id}
                        onClick={onCategorySelect}
                        name={item.name}
                        isActive={activeFilter === item.name}
                    >
                        {item.title}
                    </RadioButton>
                })
                }

            </div>

            {loading ? <Spinner /> : <div className={styles.cars}>
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