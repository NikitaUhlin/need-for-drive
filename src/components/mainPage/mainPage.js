import React from "react";

import Header from "../ui/header/header";
import SideBar from "../ui/sideBar/sideBar";
import Footer from "./footer/footer";
import Button from "../ui/button/button";
import MainSlider from "./mainSlider/mainSlider";

import useCurrentWidth from "../../utils/hooks/useCurrentWidth";

import styles from "./mainPage.module.sass"


const MainPage = () => {
    const width = useCurrentWidth()

    return (
        <div>
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
                        <Button>Забронировать</Button>
                    </div>
                    <Footer />
                </div>
                {width >= 1024 && <MainSlider />}
            </div>
        </div>

    )
}

export default MainPage;