import React from "react";

import Slider from "../slider/slider";
import Slide from "../slider/slide/slide"
import Button from "../../../common/button/button";

import bgSlide1 from '../../../assets/img/bg-slide-1.jpg'
import bgSlide2 from '../../../assets/img/bg-slide-2.jpg'
import bgSlide3 from '../../../assets/img/bg-slide-3.jpg'
import bgSlide4 from '../../../assets/img/bg-slide-4.jpg'

import styles from "./mainSlider.module.sass"

const MainSlider = () => (
    <div className={styles.container}>
        <Slider autoPlayInterval={3}>
            <Slide>
                <div
                    className={styles.background}
                    style={{
                        backgroundImage: `url(${bgSlide1})`
                    }}>
                    <div className={styles.content}>
                        <div className={styles.title}>Бесплатная парковка</div>
                        <div className={styles.description}>
                            Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
                        </div>
                        <Button mode="darkGreen">Подробнее</Button>
                    </div>
                </div>
            </Slide>
            <Slide>
                <div
                    className={styles.background}
                    style={{
                        backgroundImage: `url(${bgSlide2})`
                    }}>
                    <div className={styles.content}>
                        <div className={styles.title}>Страховка</div>
                        <div className={styles.description}>
                            Полная страховка автомобиля
                        </div>
                        <Button mode="blue">Подробнее</Button>
                    </div>
                </div>
            </Slide>
            <Slide>
                <div
                    className={styles.background}
                    style={{
                        backgroundImage: `url(${bgSlide3})`
                    }}>
                    <div className={styles.content}>
                        <div className={styles.title}>Бензин</div>
                        <div className={styles.description}>
                            Полный бак на любой заправке города за наш счёт
                        </div>
                        <Button mode="red">Подробнее</Button>
                    </div>
                </div>
            </Slide>
            <Slide>
                <div
                    className={styles.background}
                    style={{
                        backgroundImage: `url(${bgSlide4})`
                    }}>
                    <div className={styles.content}>
                        <div className={styles.title}>Обслуживание</div>
                        <div className={styles.description}>
                            Автомобиль проходит еженедельное ТО
                        </div>
                        <Button mode="purple">Подробнее</Button>
                    </div>
                </div>
            </Slide>
        </Slider>
    </div>
)

export default MainSlider

















