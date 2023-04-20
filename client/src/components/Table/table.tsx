import React, { useState } from 'react'
import classes from './Table.module.css'
import Toggle from '../Toggle/Toggle'
import { TbDotsVertical } from 'react-icons/tb'
import ModalCadastro from '../Modal/Modal';
import Axios from 'axios';



export default function Table(props: any) {

  const [miniMenu, setMinimenu] = useState(false);


  const handleMinimenu = () => {
    setMinimenu(!miniMenu)
  }

  const handleExcluir = () => {
    Axios.delete(`http://localhost:3001/delete/${props.data.id}`)
    setMinimenu(!miniMenu)
    document.location.reload()
  }




  function checkActive() {
    console.log(props.isActive)
    if (props.isActive) { return true }
    else { return false }
  }

  return (

    <div className={classes.container}>

      <div className={classes.inputBox}>
        <input className={classes.input} type='checkbox' />
      </div>

      {props.f_name && (
        <div className={classes.nome_conexao}>
          <p className={classes.preset_text}>{props.data.name}</p>
        </div>
      )}
      {props.f_client && (
        <div className={classes.client}>
          <p className={classes.preset_text}>{props.data.client}</p>
        </div>
      )}
      {props.f_host && (
        <div className={classes.host}>
          <p className={classes.preset_text}>{props.data.host}</p>
        </div>
      )}
      {props.f_port && (
        <div className={classes.port}>
          <p className={classes.preset_text}>{props.data.port}</p>
        </div>
      )}
      {props.f_user && (
        <div className={classes.user}>
          <p className={classes.preset_text}>{props.data.user}</p>
        </div>
      )}
      {props.f_password && (
        <div className={classes.password}>
          <p className={classes.preset_text}>{props.data.password}</p>
        </div>
      )}
      {props.f_database && (
        <div className={classes.database}>
          <p className={classes.preset_text}>{props.data.database}</p>
        </div>
      )}
      {props.f_poolmin && (
        <div className={classes.poolMin}>
          <p className={classes.preset_text}>{props.data.poolMin}</p>
        </div>
      )}
      {props.f_poolmax && (
        <div className={classes.poolMax}>
          <p className={classes.preset_text}>{props.data.poolMax}</p>
        </div>
      )}
      {props.f_filename && (
        <div className={classes.filename}>
          <p className={classes.preset_text}>{props.data.filename}</p>
        </div>
      )}
      {props.f_cstring && (
        <div className={classes.connectionString}>
          <p className={classes.preset_text}>{props.data.connectionString}</p>
        </div>
      )}


      <div className={classes.isActive}>
        <div className={classes.toggle}>
          <Toggle isToggle={checkActive()} />
        </div>
      </div>

      <button onClick={handleMinimenu} className={classes.endMenu}>
        <TbDotsVertical className={classes.iconMenu} />
      </button>

      {miniMenu && (<div className={classes.miniMenu}>


        <ModalCadastro type={'editar'}
          data={props} />

        <ModalCadastro type={'clone'}
          data={props} />

        <button onClick={handleExcluir} className={classes.excluirbt}>
          <p className={classes.textExcluir}>
            Excluir
          </p>

        </button>
      </div>)}

    </div>



  )
}