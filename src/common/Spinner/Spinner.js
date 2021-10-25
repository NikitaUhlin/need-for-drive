import React from "react";
import styles from "./spinner.module.sass";

const Spinner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div></div>
                <div></div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>

    );
};
export default Spinner;
