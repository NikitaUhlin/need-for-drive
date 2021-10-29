import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CarCard from "./CarCard/CarCard";
import * as selectors from "../../../../store/selectors";
import { getCarCategory, getCars } from "../../../../store/actions";

import styles from "./step2.module.sass"
import RadioButton from "../../../../common/RadioButton/RadioButton";
import Spinner from "../../../../common/Spinner/Spinner";

const Step2 = ({ onSubmit, onChange }) => {

    const dispatch = useDispatch()
    const car = useSelector(selectors.car)
    const carCategory = useSelector(selectors.carCategory)
    const [activeFilter, setActiveFilter] = useState(carCategory[0].id)
    const loading = useSelector(selectors.loading)
    const onCategorySelect = (id) => {
        setActiveFilter(id)
    }
    const cars = useSelector(selectors.cars)
    const filteredCars = useMemo(() => {
        const selectedFilter = carCategory.find((item) => item.id === activeFilter)
        return cars.filter(data => data.categoryId && data.categoryId.id.includes(selectedFilter.id))
    }, [cars, activeFilter, carCategory]);

    const onClickCar = (id) => {
        onChange({
            car: id,
            selectColor: 'Любой',
            selectRate: '',
            startDate: null,
            endDate: null,
            additional: []
        })
    }
    useEffect(() => {
        if (car)
            onSubmit()
    }, [car])

    useEffect(() => {
        if (!cars.length)
            dispatch(getCars())
        if (carCategory.length === 1)
            dispatch(getCarCategory())
    }, [dispatch])
    return (
        <div className={styles.content}>
            {loading ? <Spinner /> : <>
                <div className={styles.filter}>
                    {carCategory.map((item) => {
                        return <RadioButton
                            key={item.id}
                            onClick={() => onCategorySelect(item.id)}
                            isActive={activeFilter === item.id}
                        >
                            {item.title}
                        </RadioButton>
                    })
                    }

                </div>

                <div className={styles.cars}>
                    {filteredCars.map((item) => {
                        return (
                            <CarCard
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                priceMin={item.priceMin}
                                priceMax={item.priceMax}
                                path={item.thumbnail.path}
                                onClickCar={() => onClickCar(item.id)}
                                car={car}
                            />
                        )
                    })}
                </div>
            </>}
        </div>
    )
}
export default Step2