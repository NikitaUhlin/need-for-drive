import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../common/Header/Header";
import SideBar from "../../common/SideBar/SideBar";
import Step1 from "./Steps/Step1/Step1";
import TabsMenu from "./TabsMenu/TabsMenu";
import OrderInfo from "./OrderInfo/OrderInfo";

import { updateAccessibleTab, updateActiveTab, updateOrder } from "../../store/actions";
import * as selectors from "../../store/selectors";
import isEmptyObj from "../../utils/isEmptyObj";

import styles from "./orderPage.module.sass"

const tabs = ['geolocation', 'model', 'additional', 'total']

const OrderPage = () => {

    const order = useSelector(selectors.order)

    const activeTab = useSelector(selectors.activeTab)

    const accessibleTab = useSelector(selectors.accessibleTab)

    const dispatch = useDispatch();

    const history = useHistory()

    useEffect(() => {
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
        dispatch(updateActiveTab(activeTab + 1))
        history.push(`/orderPage/${tabs[activeTab]}`)
    }

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

                {!isEmptyObj(order) &&
                    <OrderInfo
                        onClick={onClick}
                        activeTab={activeTab}
                        order={order}
                    />
                }
            </div>
        </>
    )
}
export default OrderPage