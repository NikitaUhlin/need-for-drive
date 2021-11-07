import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"

import Header from "../../common/Header/Header";
import SideBar from "../../common/SideBar/SideBar"
import Step1 from "./Steps/Step1/Step1";
import TabsMenu from "./TabsMenu/TabsMenu";
import OrderInfo from "../PanelInfo/Container/OrderInfo/OrderInfo";

import { createOrder, updateAccessibleTab, updateActiveTab, updateOrder } from "../../store/actions";
import * as selectors from "../../store/selectors";

import styles from "./orderPage.module.sass"
import Step2 from "./Steps/Step2/Step2";
import Step3 from "./Steps/Step3/Step3";
import Step4 from "./Steps/Step4/Step4";
import Modal from "../../common/Modal/Modal";

const tabs = ['geolocation', 'model', 'additional', 'total']

const OrderPage = () => {
    const order = useSelector(selectors.order)
    const activeTab = useSelector(selectors.activeTab)
    const accessibleTab = useSelector(selectors.accessibleTab)
    const confirmedOrder = useSelector(selectors.confirmedOrder)

    const [orderConfirm, setOrderConfirm] = useState(false)

    const dispatch = useDispatch();

    const history = useHistory()

    useEffect(() => {
        if (history.location.pathname.split('/').reverse()[0] !== 'geolocation')
            history.push('/orderPage/geolocation')
    }, [])

    const onSubmit = () => {
        if (accessibleTab === activeTab)
            dispatch(updateAccessibleTab(accessibleTab + 1))
    }

    const onTabChange = (id) => {
        if (id <= accessibleTab) {
            dispatch(updateActiveTab(id));
            if (id !== activeTab)
                history.push(`/orderPage/${tabs[id - 1]}`)
        }
    }

    const onChange = data => dispatch(updateOrder(data))

    const onClick = () => {
        if (activeTab < 4) {
            dispatch(updateActiveTab(activeTab + 1))
            history.push(`/orderPage/${tabs[activeTab]}`)
        }
        else
            setOrderConfirm(true)
    }
    const onOk = () => {
        const orderData = {
            orderStatusId: '5e26a1f0099b810b946c5d8b',
            cityId: order.city,
            pointId: order.pickUp,
            carId: order.car,
            color: order.selectColor,
            dateFrom: new Date(order.startDate).getTime(),
            dateTo: new Date(order.endDate).getTime(),
            rateId: order.selectRate,
            price: order.price,
            isFullTank: order.additional.includes(1),
            isNeedChildChair: order.additional.includes(2),
            isRightWheel: order.additional.includes(3)
        }
        dispatch(createOrder(orderData))
        setOrderConfirm(false)
    }

    useEffect(() => {
        if (confirmedOrder.id)
            history.push(`/order/${confirmedOrder.id}`)
    }, [confirmedOrder.id])

    const onCancel = () =>
        setOrderConfirm(false)

    return (
        <>
            <SideBar page="order" />
            <div className={styles.container}>
                <Header />
                <TabsMenu
                    activeTab={activeTab}
                    onTabChange={onTabChange}
                    accessibleTab={accessibleTab}
                />
                {activeTab === 1 && <Step1 onSubmit={onSubmit} onChange={onChange} />}
                {activeTab === 2 && <Step2 onSubmit={onSubmit} onChange={onChange} />}
                {activeTab === 3 && <Step3 onSubmit={onSubmit} onChange={onChange} />}
                {activeTab === 4 && <Step4 onSubmit={onSubmit} onChange={onChange} />}

                {(order.city && order.pickUp) &&
                    <OrderInfo
                        onClick={onClick}
                        activeTab={activeTab}
                        onChange={onChange}
                        order={order}
                    />
                }
                {orderConfirm && <Modal onOk={onOk} onCancel={onCancel} />}
            </div>
        </>
    )
}
export default OrderPage