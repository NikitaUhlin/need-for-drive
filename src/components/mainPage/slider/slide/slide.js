import React from "react";

import styles from './slide.module.sass'

const Slide = ({ children }) => {

    return (
        <div className={styles.slide}>
            {children}
        </div>
    )
}

export default Slide