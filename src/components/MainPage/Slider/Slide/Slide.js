import React from "react";

import styles from './slide.module.sass'

const Slide = ({ children }) => (
    <div className={styles.slide}>
        {children}
    </div>
)

export default Slide