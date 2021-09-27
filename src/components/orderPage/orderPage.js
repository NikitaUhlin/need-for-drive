import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../common/header/header";
import SideBar from "../../common/sideBar/sideBar";
import GeolocationOrder from "./geolocationOrder/geolocationOrder";

import styles from "./orderPage.module.sass"
import TabsMenu from "./tabsMenu/tabsMenu";

const OrderPage = () => {

    const tabs = ['geolocation', 'model', 'additional', 'total']

    const history = useHistory()

    const [activeTab, setActiveTab] = useState(1)

    const [order, setOrder] = useState({})

    const [accessibleTab, setAccessibleTab] = useState(1)

    useEffect(() => {
        history.push('/orderPage/geolocation')
    }, [])

    const onSubmit = (data) => {
        setOrder({
            ...order,
            ...data
        })
        setActiveTab(activeTab + 1)
        setAccessibleTab(accessibleTab + 1)
        history.push(`/orderPage/${tabs[activeTab]}`)
    }

    const onTabChange = (id) => {
        if (id <= accessibleTab) {
            setActiveTab(id);
            history.push(`/orderPage/${tabs[id - 1]}`)
        }
    }

    return (
        <>
            <SideBar />
            <div className={styles.container}>
                <Header />
                <TabsMenu
                    activeTab={activeTab}
                    onTabChange={onTabChange}
                    accessibleTab={accessibleTab}
                />
                {activeTab === 1 && <GeolocationOrder onSubmit={onSubmit} />}
            </div>
        </>
    )
}
export default OrderPage