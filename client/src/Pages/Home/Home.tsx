import React from "react";
import { useState } from "react";
import classes from "./Home.module.css";
import TopBar from "../../components/TopBar/topBar";
import SideBar from "../../components/Sidebar/sideBar";
import Cadastro from "../../components/Cadastro/cadastro";



//<RouterProvider router={router} />
export default function Home(){

  return(
    <div className={classes.container}>
      <TopBar />
      <div className={classes.page_body}>
      <SideBar />
      <Cadastro />
      </div>
    </div>
   
        

  

       
        



  
  )
}