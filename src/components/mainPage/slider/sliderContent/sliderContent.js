import React from "react";

import styles from './sliderContent.module.sass'

const SliderContent = ({ translate, transition, width, children }) => {

    return (
        <div className={styles.sliderContent}
            style={{
                transform: `translateX(-${translate}px)`,
                transition: `transform ease-out ${transition}s`,
                width: `${width}px`
            }}>
            {children}
        </div>
    )
}

export default SliderContent