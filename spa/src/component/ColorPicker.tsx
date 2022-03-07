import React from 'react';
import {CirclePicker} from 'react-color';
import { useState } from 'react';
import styles from "./ColorPicker.module.scss";

const ColorPicker = () => {
  const [color, setColor] = useState('#2c2abd');
  const [isInDiv, setIsInDiv] = useState(false)
  const [closeIt, setCloseIt] = useState(true)


  const changeColor = (color: any) => {
    setColor(color.hex)
  }

  const checkMouse = (bool: boolean) => {
    setIsInDiv(bool)
    console.log(bool)
  } 

  const checkClick = () => {
    if(!isInDiv){
      setCloseIt(false)
    }
  }



  return ( closeIt ?<div className={styles.modal_container} onClick={checkClick} >
    <div className={styles.color_picker_contaier} onMouseEnter={()=> checkMouse(true)} onMouseLeave={() =>checkMouse(false)}>
      <CirclePicker
        color={color}
        onChange={changeColor}
      />
      <p>{color}</p>
    </div>
  </div> : null
 
  )


}

export default ColorPicker
