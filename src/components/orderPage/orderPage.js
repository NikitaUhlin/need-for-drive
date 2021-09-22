import React from "react";
import Header from "../ui/header/header";
import SideBar from "../ui/sideBar/sideBar";
import GeolocationOrder from "./geolocationOrder/geolocationOrder";

import styles from "./orderPage.module.sass"
import TabsMenu from "./tabsMenu/tabsMenu";
import YourOrder from "./yourOrder/yourOrder";

const OrderPage = () => {
    return (
        <>
            <SideBar />
            <div className={styles.container}>
                <Header />
                <TabsMenu />
                <YourOrder />
                <GeolocationOrder />
            </div>
        </>
    )
}
export default OrderPage