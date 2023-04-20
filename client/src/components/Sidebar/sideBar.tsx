import React from 'react'
import classes from './sideBar.module.css'
import { SideBarData } from './sideBarRoutes'

export default function SideBar(){
  

  return(
    <div className={classes.Sidebar}>
      <ul className={classes.SidebarList}>
      {SideBarData.map((val,key)=>{
        return <li 
        key={key}
        onClick={() => {}}
        className={classes.row}>
         
          <div>{val.icon}</div>
          <p className={classes.void}> </p>
          <p className={classes.text}>Menu</p>
        </li>
      })}
      </ul>
    </div>
  )
}