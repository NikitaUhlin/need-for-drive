import React, { useState, Children, useRef, useEffect } from "react";
import SliderContent from "./sliderContent/sliderContent";
import Arrow from "./arrow/arrow";
import Dots from "./dots/dots";
import useCurrentWidth from "../../../utilites/useCurrentWidth";

import './slider.sass'




const Slider = ({ children, autoPlayInterval }) => {


    const sliderRef = useRef(null)

    const countSlides = Children.count(children)

    const autoPlayRef = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide
    })

    const [timerAutoPlay, setTimerAutoPlay] = useState(0)

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

        setTimerAutoPlay(setInterval(play, autoPlayInterval * 1000))
        return () => clearInterval(timerAutoPlay)
    }, [])

    const [state, setState] = useState({
        translate: 0,
        transition: 0.45,
        activeIndex: 0
    })
    const [sliderContentWidth, setSliderContentWidth] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);

    const windowWidth = useCurrentWidth()

    useEffect(() => {
        const width = sliderRef.current.offsetWidth
        setSliderWidth(width)
        setSliderContentWidth(width * countSlides)
    }, [windowWidth, sliderRef])

    const { translate, transition, activeIndex } = state

    const nextSlide = () => {
        if (activeIndex === countSlides - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * sliderWidth
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (countSlides - 1) * sliderWidth,
                activeIndex: countSlides - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * sliderWidth
        })
    }

    return (
        <div className="slider"
            ref={sliderRef}>
            <SliderContent
                translate={translate}
                transition={transition}
                width={sliderContentWidth}
            >
                {children}
            </SliderContent>

            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />

            <Dots countSlides={countSlides} activeIndex={activeIndex} />
        </div>

    )
}
export default Slider