import React from "react";

import styles from "./footer.module.sass"

const Footer = () => (
    <div className={styles.content}>
        <div className={styles.title}>
            © 2016-2021 «Need for drive»
        </div>
        <a
            className={styles.link}
            href="tel:+74952342244"
        >8 (495) 234-22-44</a>
    </div>
)

export default Footer;