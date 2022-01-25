
import { stringify } from 'querystring';
import React from 'react';
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

type Props = {
    card?: any
}

enum WrongColor {
    red = 255,
    green = 0,
    blue = 0
}

enum goodColor {
    red = 0,
    green = 255,
    blue = 0 
}

const color = (ratio: number) => {
    console.log(ratio)
    let rgbStockArrayRatio = 
        [
            (Math.floor(goodColor.red * (ratio/100) + WrongColor.red * (ratio/100))).toString(),
            (Math.floor(goodColor.blue * (ratio/100) + WrongColor.blue * (ratio/100))).toString(),
            (Math.floor(goodColor.green * (ratio/100) + WrongColor.green * (ratio/100))).toString()
        ]

    let finalColor = "rgb("+rgbStockArrayRatio.join(', ')+")"
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


// 200, 3, 40 // reussite

// // 50 %
// 110, 25, 44

// 21, 54, 48 // nul