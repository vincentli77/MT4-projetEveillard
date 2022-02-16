// @ts-ignore

import React from "react";
import {cardList}  from "../../cardList";
import { useParams } from "react-router-dom";
import styles from "./Single.module.scss";

interface RouteParams {
  id: any;
  slug: any
}


export interface Props {
  card?: any
}

export const SingleCard = ( props: Props ) => {

const params = useParams<RouteParams>();

console.log(params.id);


 
 
  
  return (
    <div>
      <a></a>
      <div>
        {/* {if id} */}
        <img src="#" alt="Logo" />
        <div>
          <form>
            {/* Input for a language */}
            <div>
              <label>{cardList.card[params.id].native.name }</label>
              <input value={cardList.card[params.id].native.label} type="text" />
              <div className={ styles.inputCross }>
                <span></span>
                <span></span>
              </div>
            </div>          
            { cardList.card[params.id].translations.map( word => {  
               <div>
                <label>{ word.name }</label>
                <input value={ word.label } type="text" />
                <div className={ styles.inputCross }>
                  <span></span>
                  <span></span>
                </div>
              </div>;
            }) }


          </form>
        </div>
      </div>

      {/* {endif} */}
    </div>
  );
};
