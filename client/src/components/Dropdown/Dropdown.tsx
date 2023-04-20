import React, { Component } from "react";
import { useState } from "react";
import classes from "./Dropdown.module.css";
import { BsChevronDown,BsChevronUp } from "react-icons/bs"
import list from "./files/droplist.json"


export class Dropdown extends Component {

  render(): React.ReactNode {
    return(
      <div className={classes.root}>
        <DropdownMenu />
      </div>
      
          )
}
}

function DropdownMenu(){

  const [isOpen,setIsOpen] = useState(false);

  return(
    <button onClick={() => setIsOpen((prev) => !prev)} className={classes.button}>
      <p className={classes.text}>Lorem Ipsum</p>
      {isOpen ? (
        <BsChevronUp className={classes.chev} />
      ) : (
        <BsChevronDown className={classes.chev} />
      )}

      {isOpen && (
        <div className={classes.dropList}>
          {list.map((item,i) => (
            <button onClick={() => {}} className={classes.itens}> <h3>{item.obj}</h3></button>
          ))}
        </div>
      )

      }
      

    </button>
  )

}