import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import PanelInfo from "../../Component/PanelInfo";
import * as selectors from "../../../../store/selectors";
import { additional } from "../../../../utils/constants/additionals"

const ResultInfo = ({ onClick }) => {
    const confirmedOrder = useSelector(selectors.confirmedOrder)
    const selectAdditional = useMemo(() => additional.filter((item) => confirmedOrder[item.name]), [confirmedOrder])

    const [buttonText, setButtonText] = useState('Отменить')
    const [buttonType, setButtonType] = useState('red')
    useEffect(() => {
        if (confirmedOrder.orderStatusId.id === '5e26a1f5099b810b946c5d8c') {
            setButtonText('Сделать новый заказ')
            setButtonType('darkGreen')
        }
    }, [confirmedOrder])

    return (
        <PanelInfo
            buttonText={buttonText}
            selectColor={confirmedOrder.color}
            startDate={confirmedOrder.dateFrom}
            endDate={confirmedOrder.dateTo}
            selectRate={confirmedOrder.rateId}
            buttonType={buttonType}
            selectAdditional={selectAdditional}
            price={confirmedOrder.price}
            onClick={onClick}
            active
            city={confirmedOrder.cityId.name}
            pickUp={confirmedOrder.pointId.address}
            car={confirmedOrder.carId}
        />
    )
}

export default ResultInfo