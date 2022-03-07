import React, { Fragment } from "react";
import styles from "./testCustom.module.scss";
import ColorPicker from "../../component/ColorPicker";

export const TestCustom = () => {
    return(
        <div className={styles.main_container}>
            <ColorPicker />
        </div>
    )

}