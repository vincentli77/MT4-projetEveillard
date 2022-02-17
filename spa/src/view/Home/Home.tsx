import React, { Fragment } from "react";
import {cardList}  from "../../cardList";
import Card from "../../component/Card";
import ColorPicker from "../../component/ColorPicker";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
export interface Props { }

export const Home = (props: Props) => {

  
  return (
    <>  
      <div className={styles.container}>
      <ColorPicker />
        <div className={styles.home}>
            {
            cardList.card.map(function(card, i){
              return <div>        
                        <Card key={i} card={card}/>
                     </div>
            })
            }
        </div>
      </div>
    </>
  )
} 