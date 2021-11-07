import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Header from "../../common/Header/Header";
import SideBar from "../../common/SideBar/SideBar";
import Spinner from "../../common/Spinner/Spinner";
import { changeOrder, getOrder, reset } from "../../store/actions";
import * as selectors from "../../store/selectors";
import { orderStatus } from "../../utils/constants/orderStatus";
import { formatDate } from "../../utils/functions/formattedDate";
import getImgPath from "../../utils/functions/getImgPath";
import ResultInfo from "../PanelInfo/Container/ResultInfo/ResultInfo";

import styles from "./resultPage.module.sass"

const ResultPage = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const { id } = useParams()

    const confirmedOrder = useSelector(selectors.confirmedOrder)
    const loading = useSelector(selectors.loading)

    const orderStatusTitle = useMemo(() => orderStatus.find((item) => confirmedOrder.orderStatusId && (confirmedOrder.orderStatusId.id === item.id)), [confirmedOrder])

    useEffect(() => {
        if (!confirmedOrder.id)
            dispatch(getOrder(id))
    }, [])

    const newPath = confirmedOrder.carId && getImgPath(confirmedOrder.carId.thumbnail.path)

    const onClick = () => {
        if (confirmedOrder.orderStatusId.id === '5e26a1f5099b810b946c5d8c') {
            dispatch(reset())
            history.push('/orderPage/geolocation')
        }
        else {
            const changedOrder = {
                id,
                body: { orderStatusId: '5e26a1f5099b810b946c5d8c' },
            }
            dispatch(changeOrder(changedOrder))
        }
    }

    return (
        <>
            <SideBar page="order" />
            <div className={styles.container}>
                <Header />
                <div className={styles.orderId}>
                    Заказ номер {id}
                </div>

                {loading || Object.keys(confirmedOrder).length === 0 ?
                    <Spinner /> :
                    <div className={styles.content}>
                        <div className={styles.order}>
                            <div className={styles.title}>
                                Ваш заказ {orderStatusTitle && orderStatusTitle.title}
                            </div>

                            <div className={styles.orderCard}>
                                <div className={styles.description}>
                                    <div className={styles.name}>
                                        {confirmedOrder.carId.name}
                                    </div>
                                    <div className={styles.number}>
                                        {confirmedOrder.carId.number}
                                    </div>
                                    <div className={styles.additional}>
                                        <span>Топливо</span> {confirmedOrder.carId.tank}%
                                    </div>
                                    <div className={styles.additional}>
                                        <span>Доступна с</span> {formatDate(new Date(confirmedOrder.dateFrom))}
                                    </div>
                                </div>
                                <img className={styles.photo} src={newPath} alt="" />
                            </div>
                        </div>
                        <ResultInfo onClick={onClick} />
                    </div>}

            </div>
        </>
    )
}

export default ResultPage