import React from "react";
import Header from "../header/header";
import SideBar from "../sideBar/sideBar";
import Footer from "./footer/footer";
import Slider from "./slider/slider";

import "./mainPage.sass"
import Button from "../button/button";

function MainPage() {

    return (
        <div>
            <SideBar />
            <div className="mainPage">
                <div className="mainPage__container">
                    <Header />
                    <div className="mainPage__content">
                        <div>
                            <div className="mainPage__title">
                                Каршеринг
                            </div>
                            <div className="mainPage__subtitle">
                                Need for drive
                            </div>
                        </div>
                        <div className="mainPage__description">
                            Поминутная аренда авто твоего города
                        </div>
                        <Button>Забронировать</Button>
                    </div>
                    <Footer />
                </div>
                <Slider />
            </div>
        </div>

    )
}

export default MainPage;