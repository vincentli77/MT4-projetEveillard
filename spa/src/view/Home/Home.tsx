import React, { Fragment } from "react";
import {cardList}  from "./cardList";
import Card from "../../component/Card";
import styles from "./Home.module.scss";
export interface Props { }

export const Home = (props: Props) => {

  console.log(cardList);
  
  return (
    <>  
      <div className={styles.container}>
        <div className={styles.home}>
            {
            cardList.card.map(function(card, i){
              return <Card key={i} card={card}/>
            })
            }
        </div>
      </div>
    </>
  )
} 