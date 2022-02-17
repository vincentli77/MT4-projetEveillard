
import { stringify } from 'querystring';
import React from 'react';
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

type Props = {
    card?: any
}



const color = (ratio: number) => {
    enum userChoice {
        firstColor = 0,
        secondColor = 100 
    }

    let baseColor = 0
    if(userChoice.firstColor >= userChoice.secondColor){
        baseColor = userChoice.secondColor
    } else{
        baseColor = userChoice.firstColor
    }

    let finalColor =(Math.abs(userChoice.firstColor - userChoice.secondColor) * ratio/100) + baseColor
    return "hsl("+ finalColor +", 100%, 50%"
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

