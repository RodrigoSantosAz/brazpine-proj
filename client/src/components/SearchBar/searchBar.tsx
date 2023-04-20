import React from 'react'
import classes from './searchBar.module.css'
import { AiOutlineSearch } from "react-icons/ai"

interface IProps{
  placeholder:string;
  data:string;
}

export default function SearchBar(props:IProps):JSX.Element{
  const {placeholder, data} = props;
  return(
    <div className={classes.root}>
      <div className={classes.input}>
        <input className={classes.text} type='text' placeholder={props.placeholder} />
        <div className={classes.button}>
        <button>
        <AiOutlineSearch className={classes.icon}/>
        </button>
        </div>
      </div>
      
    </div>
  )
}
