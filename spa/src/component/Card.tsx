
import { stringify } from 'querystring';
import React from 'react';
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

type Props = {
    card?: any
}



const color = (ratio: number) => {
    console.log(ratio)
    let finalColor = "hsl("+ratio+", 100%, 50%"
    console.log(finalColor)
    return finalColor
}

const Card = (props: Props) => {
    return <div className={styles.card}>
        <Link to={ "/single_card/" + props.card.id } >Ajouter une carte</Link>
        {/* { color(props.card.tablet) } */}
        <p>{props.card.name}</p>
        <p>{props.card.trad}</p>
        <span style={{backgroundColor: color(props.card.tablet)}}></span>
    </div>;
}

export default Card;

