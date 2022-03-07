import React, { Fragment } from "react";
import styles from "./Filter.module.scss"

const Filter = () => {
    return (
        <div className={styles.filters_container}>
            <div className={styles.sorting}>
                <div><p>Classer par :</p></div>
                <div>
                    <button className={styles.sort_button}>Chronologie</button>
                    <button className={styles.sort_button}>Dififculté</button>
                    <button className={styles.sort_button}>Thèmes</button>
                </div>
            </div>
            <div className={styles.language}>
                <p>Langages :</p>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={styles.options}>
                <p>Autres :</p>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Filter