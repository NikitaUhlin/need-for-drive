import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import RadioButton from "../../../../common/RadioButton/RadioButton";

import * as selectors from "../../../../store/selectors";
import { additional } from "../../../../utils/constants/additionals";
import "react-datepicker/dist/react-datepicker.css";
import styles from './step3.module.sass'
import { getRate } from "../../../../store/actions";
import Checkbox from "../../../../common/Checkbox/Checkbox";

const Step3 = ({ onChange }) => {
    const dispatch = useDispatch()
    const car = useSelector(selectors.car)
    const cars = useSelector(selectors.cars)
    const selectColor = useSelector(selectors.selectColor)
    const rate = useSelector(selectors.rate)
    const selectRate = useSelector(selectors.selectRate)
    const startDate = useSelector(selectors.startDate)
    const endDate = useSelector(selectors.endDate)
    const additionalOptions = useSelector(selectors.additional)
    const selectedColors = useMemo(() => {
        const selectedCarColors = cars.find((item) => car === item.id).colors
        return ['Любой', ...selectedCarColors]
    }, [car, cars]);
    const setStartDate = (data) => {
        onChange({
            startDate: data,
            endDate: null
        })
    }
    const setEndDate = (data) => {
        onChange({
            endDate: data
        })
    }

    // const [additionalServices, setAdditionalServices] = useState([]);
    useEffect(() => {
        if (startDate && endDate && !selectRate) {
            onChange({
                selectRate: rate[0].id
            })
        }
    }, [startDate, endDate])
    const onCheck = (id) => {
        if (additionalOptions.includes(id))
            onChange({
                additional: additionalOptions.filter((item) => item !== id)
            })
        else
            onChange({
                additional: [...additionalOptions, id]
            })

    }

    useEffect(() => {
        if (!rate.length)
            dispatch(getRate())

    }, [dispatch])

    const onClickColor = (item) => {
        onChange({
            selectColor: item
        })
    }
    const filterPassedTimeStart = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    }
    const filterPassedTimeEnd = (time) => {
        const currentDate = startDate;
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    }
    const onClickRate = (id) => {
        onChange({
            selectRate: id
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.label}>Цвет</div>
            <div className={styles.colorSelect}>
                {selectedColors.map((item) => {
                    return (
                        <RadioButton
                            onClick={() => onClickColor(item)}
                            key={item}
                            isActive={item === selectColor}

                        >{item}</RadioButton>
                    )
                })}
            </div>

            <div className={styles.label}>Дата аренды</div>
            <div className={styles.date}>
                <div className={styles.titleDatePicker}>С</div>
                <DatePicker
                    placeholderText="Введите дату и время"
                    dateFormat="dd.MM.yyyy HH:mm"
                    timeFormat="HH:mm"
                    isClearable
                    showTimeSelect
                    timeIntervals={10}
                    className={styles.datePicker}
                    selected={startDate}
                    minDate={new Date()}
                    filterTime={filterPassedTimeStart}
                    onChange={(date) => setStartDate(date)}
                />
            </div>
            <div className={styles.date}>
                <div className={styles.titleDatePicker}>По</div>
                <DatePicker
                    placeholderText="Введите дату и время"
                    dateFormat="dd.MM.yyyy HH:mm"
                    timeFormat="HH:mm"
                    isClearable
                    timeIntervals={10}
                    selectsEnd
                    showTimeSelect
                    className={styles.datePicker}
                    minDate={startDate}
                    filterTime={filterPassedTimeEnd}
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                />
            </div>
            <div className={styles.label}>Тариф</div>
            {rate.map((item) => {
                return (
                    <RadioButton
                        key={item.id}
                        onClick={() => onClickRate(item.id)}
                        isActive={item.id === selectRate}
                    >
                        {item.rateTypeId.name},{item.price}₽/ {item.rateTypeId.unit}
                    </RadioButton>
                )
            })}
            <div className={styles.label}>Доп услуги</div>
            <div className={styles.additionalSelect}>
                {additional.map((item) => {
                    return (
                        <Checkbox
                            onCheck={() => onCheck(item.id)}
                            key={item.id}
                            isActive={additionalOptions.includes(item.id)}
                        >
                            {`${item.title}, ${item.price}р`}
                        </Checkbox>
                    )
                })}
            </div>
        </div>
    )
}
export default Step3