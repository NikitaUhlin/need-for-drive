import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import * as selectors from "../../../store/selectors"
import Button from "../../../common/Button/Button";

import arrowBack from "../../../assets/icons/arrowBack.svg"
import styles from "./orderInfo.module.sass"
import { additional } from "../../../utils/constants/additionals";


let cx = classNames.bind(styles)
const buttonText = ["Выбрать модель", "Дополнительно", "Итого", "Заказать"]

const OrderInfo = ({ onClick, activeTab, order }) => {
    const cities = useSelector(selectors.cities)
    const pickUps = useSelector(selectors.pickUps)
    const cars = useSelector(selectors.cars)
    const selectColor = useSelector(selectors.selectColor)
    const rate = useSelector(selectors.rate)
    const startDate = useSelector(selectors.startDate)
    const endDate = useSelector(selectors.endDate)

    const rangeDate = endDate - startDate

    const city = useMemo(() => cities.find((item) => item.id === order.city), [cities, order.city])
    const pickUp = useMemo(() => pickUps.find((item) => item.id === order.pickUp), [pickUps, order.pickUp])
    const car = useMemo(() => cars.find((item) => item.id === order.car), [cars, order.car])
    const selectRate = useMemo(() => rate.find((item) => item.id === order.selectRate), [rate, order.selectRate])
    const selectAdditional = useMemo(() => additional.filter((item) => order.additional.includes(item.id)), [order.additional])

    const [isModalOpen, setIsModalOpen] = useState(false)

    const classNameOrderInfo = cx({
        [styles.container]: true,
        [styles.containerModal]: isModalOpen,
    })

    let active = false
    switch (activeTab) {
        case 1:
            active = order.city && order.pickUp
            break;
        case 2:
            active = order.car
            break;
        case 3:
            active = order.selectRate && rangeDate > 0
            break;

        default: active = false
    }

    const price = useMemo(() => {
        let result = 0
        if (selectRate) {
            switch (selectRate.rateTypeId.unit) {
                case "мин":
                    result = Math.ceil(rangeDate / (1000 * 60)) * selectRate.price
                    break;
                case "сутки":
                    result = Math.ceil(rangeDate / (1000 * 60 * 60 * 24)) * selectRate.price
                    break;
                case "7 дней":
                    result = Math.ceil(rangeDate / (1000 * 60 * 60 * 24 * 7)) * selectRate.price
                    break;
                case "30 дней":
                    result = Math.ceil(rangeDate / (1000 * 60 * 60 * 24 * 30)) * selectRate.price
                    break;
                default: result = 0
            }
            result += selectAdditional.reduce((acc, current) => acc += current.price, 0)
        }

        return result
    }, [selectRate, endDate, selectAdditional])

    const difDays = Math.floor(rangeDate / (24 * 60 * 60 * 1000))
    const difHours = Math.floor((rangeDate / (24 * 60 * 60 * 1000) - difDays) * 24)
    const difMinutes = Math.floor(((rangeDate / (24 * 60 * 60 * 1000) - difDays) * 24 - difHours) * 60)

    useEffect(() => {
        setIsModalOpen(false)
    }, [activeTab])

    const onOpenModal = () => setIsModalOpen(true)

    const onCloseModal = () => setIsModalOpen(false)

    return (
        <>
            <button
                className={styles.buttonOrder}
                onClick={onOpenModal}
            >
                Заказ
            </button>

            <div className={classNameOrderInfo}>
                <img className={styles.buttonCloseOrder} onClick={onCloseModal} src={arrowBack} alt="" />

                <div className={styles.title}>Ваш заказ:</div>
                <div className={styles.list}>
                    <div className={styles.listItem}>
                        <div className={styles.label}>
                            Пункт выдачи
                        </div>
                        <div className={styles.dots}></div>
                        <div className={styles.value}>
                            <div className={styles.city}>{city && city.name},</div>
                            {pickUp && pickUp.address}
                        </div>
                    </div>
                    {car && <div className={styles.listItem}>
                        <div className={styles.label}>
                            Модель
                        </div>
                        <div className={styles.dots}></div>
                        <div className={styles.value}>
                            {car.name}
                        </div>
                    </div>}
                    {car && <div className={styles.listItem}>
                        <div className={styles.label}>
                            Цвет
                        </div>
                        <div className={styles.dots}></div>
                        <div className={styles.value}>
                            {selectColor}
                        </div>
                    </div>}
                    {rangeDate > 0 && <div className={styles.listItem}>
                        <div className={styles.label}>
                            Длительность аренды
                        </div>
                        <div className={styles.dots}></div>
                        <div className={styles.value}>
                            {difDays ? `${difDays}д.` : ''}
                            {difHours ? `${difHours}ч.` : ''}
                            {difMinutes ? `${difMinutes}м.` : ''}
                        </div>
                    </div>}
                    {selectRate && <div className={styles.listItem}>
                        <div className={styles.label}>
                            Тариф
                        </div>
                        <div className={styles.dots}></div>
                        <div className={styles.value}>
                            {selectRate.rateTypeId.name}
                        </div>
                    </div>}
                    {selectAdditional.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={styles.listItem}
                            >
                                <div className={styles.label}>
                                    {item.title}
                                </div>
                                <div className={styles.dots}></div>
                                <div className={styles.value}>
                                    Да
                                </div>
                            </div>
                        )
                    })}
                </div>
                {car && <div className={styles.price}>
                    <span>Цена: </span>
                    {price <= 0 ? `от ${car.priceMin} до ${car.priceMax}` : price} ₽
                </div>}
                <Button
                    onClick={onClick}
                    disabled={!active}
                >{buttonText[activeTab - 1]}</Button>
            </div>
        </>
    )
}

export default OrderInfo