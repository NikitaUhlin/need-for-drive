import classNames from "classnames";
import React, { useState } from "react";

import arrowBack from "../../../assets/icons/arrowBack.svg"
import Button from "../../../common/Button/Button";

import styles from "./panelInfo.module.sass"

let cx = classNames.bind(styles)

const PanelInfo = ({
    city,
    pickUp,
    car,
    selectColor,
    startDate,
    endDate,
    selectRate,
    selectAdditional,
    price,
    onClick,
    active,
    buttonText,
    buttonType
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const classNameOrderInfo = cx({
        [styles.container]: true,
        [styles.containerModal]: isModalOpen,
    })

    const rangeDate = endDate - startDate

    const onOpenModal = () => setIsModalOpen(true)

    const onCloseModal = () => setIsModalOpen(false)

    const onClickButton = () => {
        onClick()
        setIsModalOpen(false)
    }

    const difDays = Math.floor(rangeDate / (24 * 60 * 60 * 1000))
    const difHours = Math.floor((rangeDate / (24 * 60 * 60 * 1000) - difDays) * 24)
    const difMinutes = Math.floor(((rangeDate / (24 * 60 * 60 * 1000) - difDays) * 24 - difHours) * 60)

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
                            <div className={styles.city}>{city},</div>
                            {pickUp}
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
                    {selectColor && <div className={styles.listItem}>
                        <div className={styles.label}>
                            Цвет
                        </div>
                        <div className={styles.dots}></div>
                        <div className={styles.value}>
                            {selectColor}
                        </div>
                    </div>}
                    {startDate && endDate && <div className={styles.listItem}>
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
                    mode={buttonType}
                    onClick={onClickButton}
                    disabled={!active}
                >{buttonText}</Button>
            </div>
        </>
    )
}
export default PanelInfo
