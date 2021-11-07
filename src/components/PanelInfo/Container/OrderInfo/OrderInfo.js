import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import * as selectors from "../../../../store/selectors"
import { additional } from "../../../../utils/constants/additionals";
import PanelInfo from "../../Component/PanelInfo";

const buttonText = ["Выбрать модель", "Дополнительно", "Итого", "Заказать"]

const OrderInfo = ({ onClick, activeTab, order, onChange }) => {
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

    let active = false
    switch (activeTab) {
        case 1:
            active = order.city && order.pickUp
            break;
        case 2:
            active = order.car
            break;
        case 3:
            active = order.selectRate && startDate && endDate
            break;
        case 4:
            active = true
            break;

        default: active = false
    }

    const price = useMemo(() => {
        let result = 0
        if (selectRate && endDate && startDate) {
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

    useEffect(() => {
        if (price) {
            onChange({
                price: price
            })
        }
    }, [price])

    return (
        <PanelInfo
            buttonText={buttonText[activeTab - 1]}
            selectColor={selectColor}
            startDate={startDate}
            endDate={endDate}
            selectRate={selectRate}
            selectAdditional={selectAdditional}
            price={price}
            onClick={onClick}
            active={active}
            city={city && city.name}
            pickUp={pickUp && pickUp.address}
            car={car}
        />
    )
}

export default OrderInfo