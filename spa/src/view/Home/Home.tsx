import React, { Fragment } from "react";
import {cardList}  from "../../cardList";
import Card from "../../component/Cards/Card";
import ColorPicker from "../../component/ColorPicker";
import Filters from '../../component/Filters/Filter'
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
export interface Props { }

export const Home = (props: Props) => {

  
  return (
    <>  
      <div className={styles.container}>
      <ColorPicker />
      <Filters />
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