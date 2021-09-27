import React from "react";

import Header from "../../common/header/header";
import SideBar from "../../common/sideBar/sideBar";
import Footer from "./footer/footer";
import Button from "../../common/button/button";
import MainSlider from "./mainSlider/mainSlider";

import useCurrentWidth from "../../utils/hooks/useCurrentWidth";

import styles from "./mainPage.module.sass"
import { Link } from "react-router-dom";


const MainPage = () => {
    const width = useCurrentWidth()

    return (
        <>
            <SideBar />
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
                        <Link to="/orderPage/geolocation">
                            <Button>Забронировать</Button>
                        </Link>
                    </div>
                    <Footer />
                </div>
                {width >= 1024 && <MainSlider />}
            </div>
        </>

    )
}

export default MainPage;