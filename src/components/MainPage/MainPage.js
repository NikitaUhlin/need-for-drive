import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom"

import Header from "../../common/Header/Header";
import SideBar from "../../common/SideBar/SideBar";
import Footer from "./Footer/Footer";
import Button from "../../common/Button/Button";
import MainSlider from "./MainSlider/MainSlider";

import useCurrentWidth from "../../utils/hooks/useCurrentWidth";

import styles from "./mainPage.module.sass"

const MainPage = () => {
    const width = useCurrentWidth()
    const history = useHistory()

    useEffect(() => {
        const orderId = localStorage.getItem('order_id')
        if (orderId)
            history.push(`/order/${orderId}`)
    }, [])

    return (
        <>
            <SideBar page="main" />
            <div className={styles.page}>
                <div className={styles.container}>
                    <Header />
                    <div className={styles.content}>
                        <div>
                            <div className={styles.title}>
                                Каршеринг
                            </div>
                            <div className={styles.subtitle}>
                                Need for drive
                            </div>
                        </div>
                        <div className={styles.description}>
                            Поминутная аренда авто твоего города
                        </div>
                        <div className={styles.buttonContainer}>
                            <Link to="/orderPage/geolocation">
                                <Button>Забронировать</Button>
                            </Link>
                        </div>
                    </div>
                    <Footer />
                </div>
                {width >= 1024 && <MainSlider />}
            </div>
        </>
    )
}

export default MainPage;