import React from 'react'
import classes from './toggle.module.css'
import { useState } from "react";

interface Iprops{
  isToggle:boolean;
  
}

const Toggle = (props:Iprops) =>{

  return(
    <label className={classes.switch}
    onClick={() => toggleButton(props.isToggle)}>
      <input type='checkbox'/>
      <span className={classes.slider}/>
    </label>
  )
}

const toggleButton = (value:boolean) =>{
  return !value
}

export default Toggle