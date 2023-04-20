import { useState } from "react";
import globalsetup from '../../components/_globalsetup.module.css'
import classes from "./Login.module.css";
import { VectorIcon } from "./VectorIcon";
import { VectorIcon2 } from "./VectorIcon2";
import { Link } from 'react-router-dom'

interface IProps{
  isLogged:boolean
}

export default function LoginBody(props:IProps):JSX.Element{
  const {isLogged} = props;
  const [login_state,set_login_state] = useState(isLogged)
  
  const handleEntrar = () =>{
    if(login_state == true)
    { set_login_state(false) }
    else
    { set_login_state(true) }
  }

  return(
    login_state ?
    <div className={`${globalsetup.setup} ${classes.root}`}>
      <div className={classes.image2}></div>
      <div className={classes.loginBox}></div>
      <div className={classes.titlePassword}>Senha</div>
      <div className={classes.titleUser}>Usuário</div>
      <div className={classes.userInputBox}></div>
      <div className={classes.passwordInputBox}></div>
      <button className={classes.buttonEnter} onClick={() => handleEntrar()}>
      Entrar</button>
      <div className={classes.titlePasswordRecovery}>Esqueci minha senha</div>
      <div className={classes.titleNoAccount}>Não tem uma conta?</div>
      <div className={classes.titleCreateNewAccount}>Crie agora mesmo!</div>
      <div className={classes.iconPos1}>
        <VectorIcon className={classes.iconSize} />
      </div>
      <div className={classes.iconPos2}>
        <VectorIcon2 className={classes.iconSize2} />
      </div>
      <div className={classes.userBoxDiff}></div>
      <div className={classes.passwordBoxDiff}></div>
      <div className={classes.brazpineLogo}></div>
    </div> : <div className={`${globalsetup.setup} ${classes.root}`}>
    <div className={classes.image2}></div>
    <div className={classes.loginBox}></div>
    <div className={classes.image1}></div>
    <div className={classes.bemvindo}>Seja Bem Vindo, João da Silva!</div>
    <div className={classes.select}>Selecione a empresa desejada:</div>
    <div className={classes.middleLine}></div>
    <div className={classes.underLine}></div>
    <div className={classes.upperLine}></div>
    <div className={classes.userAvatar}></div>
    <Link to='/home' className={classes.box1} ></Link>
    <button className={classes.box2}></button>
    <button className={classes.box3}></button>
  </div>
    
  )
}
  
