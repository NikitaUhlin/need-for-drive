import React from "react";
import Header from "../header/header";
import SideBar from "../sideBar/sideBar";
import Footer from "./footer/footer";
import Slider from "./slider/slider";
import bgSlide1 from '../../assets/img/bg-slide-1.jpg'
import bgSlide2 from '../../assets/img/bg-slide-2.jpg'
import bgSlide3 from '../../assets/img/bg-slide-3.jpg'
import bgSlide4 from '../../assets/img/bg-slide-4.jpg'
import "./mainPage.sass"
import Button from "../button/button";
import Slide from "./slider/slide/slide";
import useCurrentWidth from "../../utilities/useCurrentWidth";

function MainPage() {
    const width = useCurrentWidth()
    const slider =
        <div className="slider__container">
            <Slider autoPlayInterval={3}>
                <Slide>
                    <div
                        className="slide__background"
                        style={{
                            backgroundImage: `url(${bgSlide1})`
                        }}>
                        <div className="slide__content">
                            <div className="slide__title">Бесплатная парковка</div>
                            <div className="slide__description">
                                Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
                            </div>
                            <Button mode="darkGreen">Подробнее</Button>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div
                        className="slide__background"
                        style={{
                            backgroundImage: `url(${bgSlide2})`
                        }}>
                        <div className="slide__content">
                            <div className="slide__title">Страховка</div>
                            <div className="slide__description">
                                Полная страховка автомобиля
                            </div>
                            <Button mode="blue">Подробнее</Button>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div
                        className="slide__background"
                        style={{
                            backgroundImage: `url(${bgSlide3})`
                        }}>
                        <div className="slide__content">
                            <div className="slide__title">Бензин</div>
                            <div className="slide__description">
                                Полный бак на любой заправке города за наш счёт
                            </div>
                            <Button mode="red">Подробнее</Button>
                        </div>
                    </div>
                </Slide>
                <Slide>
                    <div
                        className="slide__background"
                        style={{
                            backgroundImage: `url(${bgSlide4})`
                        }}>
                        <div className="slide__content">
                            <div className="slide__title">Обслуживание</div>
                            <div className="slide__description">
                                Автомобиль проходит еженедельное ТО
                            </div>
                            <Button mode="purple">Подробнее</Button>
                        </div>
                    </div>
                </Slide>
            </Slider>
        </div>

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
                {width >= 1024 ? slider : null}
            </div>
        </div>

    )
}

export default MainPage;