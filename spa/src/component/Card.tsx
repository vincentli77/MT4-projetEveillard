
import React from 'react';
import styles from "./Card.module.scss";

type Props = {
    card?: any
}
const Card = (props: Props) => {
    return <div className={styles.card}>
        <p>{props.card.name}</p>
        <p>{props.card.trad}</p>
    </div>;
}

export default Card;
