import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import * as selectors from "../../../../store/selectors";
import { formatDate } from "../../../../utils/functions/formattedDate";
import getImgPath from "../../../../utils/functions/getImgPath";

import styles from "./step4.module.sass"

const Step4 = () => {
    const car = useSelector(selectors.car)
    const cars = useSelector(selectors.cars)
    const startDate = useSelector(selectors.startDate)
    const selectedCar = useMemo(() => cars.find((item) => item.id === car), [cars, car])
    const newPath = getImgPath(selectedCar.thumbnail.path)

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.name}>
                    {selectedCar.name}
                </div>
                {selectedCar.number && <div className={styles.number}>
                    {selectedCar.number}
                </div>}
                {selectedCar.tank && <div className={styles.additional}>
                    <span>Топливо</span> {selectedCar.tank}%
                </div>}
                <div className={styles.additional}>
                    <span>Доступна с</span> {formatDate(startDate)}
                </div>
            </div>
            <img className={styles.photo} src={newPath} alt="" />
        </div>
    )
}
export default Step4