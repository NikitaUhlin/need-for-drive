import React from "react";
import Header from "../header/header";
import SideBar from "../sideBar/sideBar";
import Footer from "./footer/footer";
import Slider from "./slider/slider";

import "./mainPage.sass"

function MainPage() {

    return (
        <div className="mainPage">
            <SideBar />
            <div>
                <Header />
                <div>
                    <div>
                        <div>
                            Каршеринг
                        </div>
                        <div>
                            Need for drive
                        </div>
                    </div>
                    <div>
                        Поминутная аренда авто твоего города
                    </div>
                    <button>Забронировать</button>
                </div>
                <Footer />
            </div>
            <Slider />
        </div>
    )
}

export default MainPage;