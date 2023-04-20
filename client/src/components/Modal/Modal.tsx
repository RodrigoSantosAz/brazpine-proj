import React, { useState } from 'react'
import classes from './Modal.module.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi'
import { TbStack } from 'react-icons/tb'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Axios from 'axios'
import { ToggleSwitch } from 'react-dragswitch'

export default function ModalCadastro(props?: any) {


  const [checked, setChecked] = useState(false)
  const [showPass, setShowPass] = useState(false)



  //Modal Cadastro
  const [modal, setModal] = useState(false)
  const [editUpdated, setEditUpdate] = useState(false)
  const [cancelModal, setCancelModal] = useState(false)
  const [saveModal, setsaveModal] = useState(false)
  const [warnModal, setwarnModal] = useState(false)
  const [checkOK, setCheckOK] = useState(false)
  const [flagError, setFlagError] = useState(false)
  const toggleModal = () => { setModal(!modal) }
  const togglecancelModal = () => { setCancelModal(!cancelModal) }

  const togglewarnModal = () => { setwarnModal(!warnModal) }
  const confirmarCancel = () => {

    setCancelModal(!cancelModal)
    setModal(!modal)
  }
  const togglesaveModal = () => {
    setsaveModal(!saveModal)
  }
  const opensaveModal = () => {

    if (newStance.name === '' ||
      newStance.client === '' ||
      newStance.host === '' ||
      newStance.user === '' ||
      newStance.password === '' ||
      newStance.database === '' ||
      newStance.name === '') {
      setFlagError(true);
    }
    else {

      Axios.post('http://localhost:3001/checkname', {
        id: newStance.id,
        createdBy: newStance.createdBy,
        createdOn: newStance.createdOn,
        updatedby: newStance.updatedby,
        updatedOn: newStance.updatedOn,
        isActive: newStance.isActive,
        name: newStance.name,
        client: newStance.client,
        host: newStance.host,
        port: newStance.port,
        user: newStance.user,
        password: newStance.password,
        database: newStance.database,
        poolMin: newStance.poolMin,
        poolMax: newStance.poolMax,
        filename: newStance.filename,
        connectionString: newStance.connectionString
      }).then((response) => {
        if (response.data.length > 0) {
          console.log('entro aq')
          setwarnModal(true)


          //mata o cadastro + modal de erro
        }
        else {
          setsaveModal(!saveModal)
        }
      })
    }


  }

  //Modal Edit
  const [modalEdit, setModalEdit] = useState(false)
  const [cancelModalEdit, setCancelModalEdit] = useState(false)
  const [warnModalEdit, setwarnModalEdit] = useState(false)
  const [saveModalEdit, setsaveModalEdit] = useState(false)

  const toggleModalEdit = () => {
    setModalEdit(!modalEdit)
    if (editUpdated === false) {
      if (props.data !== undefined) {
        setNewStance({
          id: props.data.id,
          createdBy: props.data.createdBy,
          createdOn: props.data.createdOn,
          updatedby: props.data.updatedby,
          updatedOn: props.data.updatedOn,
          isActive: props.data.isActive,
          name: props.data.name,
          client: props.data.client,
          host: props.data.host,
          port: props.data.port,
          user: props.data.user,
          password: props.data.password,
          database: props.data.database,
          poolMin: props.data.poolMin,
          poolMax: props.data.poolMax,
          filename: props.data.filename ? props.data.filename : '',
          connectionString: props.data.connectionString ? props.data.connectionString : ''
        })
        setEditUpdate(true);
      }

    }
  }
  const togglecancelModalEdit = () => { setCancelModalEdit(!cancelModalEdit) }
  const togglewarnModalEdit = () => { setwarnModalEdit(!warnModalEdit) }
  const confirmarCancelEdit = () => {
    setCancelModalEdit(!cancelModalEdit)
    setModalEdit(!modalEdit)
  }
  const opensaveModalEdit = () => {
    if (newStance.name === '' ||
      newStance.client === '' ||
      newStance.host === '' ||
      newStance.user === '' ||
      newStance.password === '' ||
      newStance.database === '' ||
      newStance.name === '') {
      setFlagError(true);
    }
    else {
      setsaveModalEdit(!saveModalEdit)
    }

  }
  const toggleSaveModalEdit = () => {
    setsaveModalEdit(!saveModalEdit)
  }

  //Modal Clone
  const [modalClone, setModalClone] = useState(false)
  const [cancelModalClone, setCancelModalClone] = useState(false)
  const [warnModalClone, setwarnModalClone] = useState(false)
  const [saveModalClone, setsaveModalClone] = useState(false)
  const toggleModalClone = () => {
    setModalClone(!modalClone)
    if (editUpdated === false) {
      if (props.data !== undefined) {
        setNewStance({
          id: props.data.id,
          createdBy: props.data.createdBy,
          createdOn: props.data.createdOn,
          updatedby: props.data.updatedby,
          updatedOn: props.data.updatedOn,
          isActive: props.data.isActive,
          name: props.data.name,
          client: props.data.client,
          host: props.data.host,
          port: props.data.port,
          user: props.data.user,
          password: props.data.password,
          database: props.data.database,
          poolMin: props.data.poolMin,
          poolMax: props.data.poolMax,
          filename: props.data.filename ? props.data.filename : '',
          connectionString: props.data.connectionString ? props.data.connectionString : ''
        })
        setEditUpdate(true);
      }

    }
  }
  const toggleCancelModalClone = () =>{
    setCancelModalClone(!cancelModalClone)

  }
  const confirmarCancelClone = () => {
    setCancelModalClone(!cancelModalClone)
    setModalClone(!modalClone)
  }

  const togglewarnModalClone = () => {
    setwarnModalClone(!warnModalClone)
  }
  const toggleSaveModalClone = () => {
    setsaveModalClone(!saveModalClone)
  }
  
  const opensaveModalClone = () => {
    if (newStance.name === '' ||
      newStance.client === '' ||
      newStance.host === '' ||
      newStance.user === '' ||
      newStance.password === '' ||
      newStance.database === '' ||
      newStance.name === '') {
      setFlagError(true);
    }
    else {
      Axios.post('http://localhost:3001/checkname', {
        id: newStance.id,
        createdBy: newStance.createdBy,
        createdOn: newStance.createdOn,
        updatedby: newStance.updatedby,
        updatedOn: newStance.updatedOn,
        isActive: newStance.isActive,
        name: newStance.name,
        client: newStance.client,
        host: newStance.host,
        port: newStance.port,
        user: newStance.user,
        password: newStance.password,
        database: newStance.database,
        poolMin: newStance.poolMin,
        poolMax: newStance.poolMax,
        filename: newStance.filename,
        connectionString: newStance.connectionString
      }).then((response) => {
        if (response.data.length > 0) {
         
          setwarnModalClone(!warnModalClone)
        }
        else {
          setsaveModalClone(!saveModalClone)

        }
      })
      
    }

  }



  //get current date
  const date = new Date();
  let currentDay = String(date.getDate()).padStart(2, '0');
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentYear}${currentMonth}${currentDay}`
  let final_date = parseInt(currentDate)

  const [newStance, setNewStance] = useState({
    id: 0,
    createdBy: 'testedb',
    createdOn: currentDate,
    updatedby: 'testedb',
    updatedOn: currentDate,
    isActive: '',
    name: '',
    client: '',
    host: '',
    port: 3000,
    user: '',
    password: '',
    database: '',
    poolMin: 0,
    poolMax: 0,
    filename: '',
    connectionString: ''
  })

  const handleChange = (e: any) => {
    setCheckOK(false)
    setFlagError(false)
    let field = e.target.name;
    setNewStance(existingValues => ({
      ...existingValues,
      [field]: e.target.value,
    }))
  }
  //Checks (?)

  const teste_entry_cadastro = () => {

    if (newStance.name === '' ||
      newStance.client === '' ||
      newStance.host === '' ||
      newStance.user === '' ||
      newStance.password === '' ||
      newStance.database === '' ||
      newStance.name === '') {
      setFlagError(true);
    }
    else {

      Axios.post('http://localhost:3001/checkname', {
        id: newStance.id,
        createdBy: newStance.createdBy,
        createdOn: newStance.createdOn,
        updatedby: newStance.updatedby,
        updatedOn: newStance.updatedOn,
        isActive: newStance.isActive,
        name: newStance.name,
        client: newStance.client,
        host: newStance.host,
        port: newStance.port,
        user: newStance.user,
        password: newStance.password,
        database: newStance.database,
        poolMin: newStance.poolMin,
        poolMax: newStance.poolMax,
        filename: newStance.filename,
        connectionString: newStance.connectionString
      }).then((response) => {
        if (response.data.length > 0) {
          console.log('entro aq')
          setwarnModal(true)

          //mata o cadastro + modal de erro
        }
        else {
          console.log('entro')
          setCheckOK(true)

        }
      })
    }


  }

  const entry_edicao = () => {

    Axios.put('http://localhost:3001/update', {
      id: newStance.id,
      createdBy: newStance.createdBy,
      createdOn: newStance.createdOn,
      updatedby: newStance.updatedby,
      updatedOn: newStance.updatedOn,
      isActive: newStance.isActive,
      name: newStance.name,
      client: newStance.client,
      host: newStance.host,
      port: newStance.port,
      user: newStance.user,
      password: newStance.password,
      database: newStance.database,
      poolMin: newStance.poolMin,
      poolMax: newStance.poolMax,
      filename: newStance.filename,
      connectionString: newStance.connectionString
    }).then((response) => {
      console.log(response)

    })
    document.location.reload()
    setsaveModalEdit(!saveModalEdit);
    setModalEdit(!modalEdit)

  }


  const new_entry = () => {

    if (newStance.name === '' ||
      newStance.client === '' ||
      newStance.host === '' ||
      newStance.user === '' ||
      newStance.password === '' ||
      newStance.database === '' ||
      newStance.name === '') {
      setFlagError(true);
    }
    else {
      Axios.post('http://localhost:3001/checkname', {
        id: newStance.id,
        createdBy: newStance.createdBy,
        createdOn: newStance.createdOn,
        updatedby: newStance.updatedby,
        updatedOn: newStance.updatedOn,
        isActive: newStance.isActive,
        name: newStance.name,
        client: newStance.client,
        host: newStance.host,
        port: newStance.port,
        user: newStance.user,
        password: newStance.password,
        database: newStance.database,
        poolMin: newStance.poolMin,
        poolMax: newStance.poolMax,
        filename: newStance.filename,
        connectionString: newStance.connectionString
      }).then((response) => {
        if (response.data.length > 0) {
          console.log('duplicado')
          setwarnModal(true);
          //mata o cadastro + modal de erro
        }
        else {

          //faz o novo cadastro
          Axios.post('http://localhost:3001/register', {
            id: newStance.id,
            createdBy: newStance.createdBy,
            createdOn: newStance.createdOn,
            updatedby: newStance.updatedby,
            updatedOn: newStance.updatedOn,
            isActive: newStance.isActive,
            name: newStance.name,
            client: newStance.client,
            host: newStance.host,
            port: newStance.port,
            user: newStance.user,
            password: newStance.password,
            database: newStance.database,
            poolMin: newStance.poolMin,
            poolMax: newStance.poolMax,
            filename: newStance.filename,
            connectionString: newStance.connectionString
          }).then((response) => {

          })
          document.location.reload()
          setsaveModalClone(false);
          setModalClone(false);
          setsaveModal(false);
          setModal(false);

        }
      })

    }
  }

  const clone_entry = () => {

    if (newStance.name === '' ||
      newStance.client === '' ||
      newStance.host === '' ||
      newStance.user === '' ||
      newStance.password === '' ||
      newStance.database === '' ||
      newStance.name === '') {
      setFlagError(true);
    }
    else {
      Axios.post('http://localhost:3001/checkname', {
        id: newStance.id,
        createdBy: newStance.createdBy,
        createdOn: newStance.createdOn,
        updatedby: newStance.updatedby,
        updatedOn: newStance.updatedOn,
        isActive: newStance.isActive,
        name: newStance.name,
        client: newStance.client,
        host: newStance.host,
        port: newStance.port,
        user: newStance.user,
        password: newStance.password,
        database: newStance.database,
        poolMin: newStance.poolMin,
        poolMax: newStance.poolMax,
        filename: newStance.filename,
        connectionString: newStance.connectionString
      }).then((response) => {
        if (response.data.length > 0) {
          console.log('duplicado')
          setwarnModal(true);
          //mata o cadastro + modal de erro
        }
        else {

          //faz o novo cadastro
          Axios.post('http://localhost:3001/register', {
            id: newStance.id,
            createdBy: newStance.createdBy,
            createdOn: newStance.createdOn,
            updatedby: newStance.updatedby,
            updatedOn: newStance.updatedOn,
            isActive: newStance.isActive,
            name: newStance.name,
            client: newStance.client,
            host: newStance.host,
            port: newStance.port,
            user: newStance.user,
            password: newStance.password,
            database: newStance.database,
            poolMin: newStance.poolMin,
            poolMax: newStance.poolMax,
            filename: newStance.filename,
            connectionString: newStance.connectionString
          }).then((response) => {

          })
          document.location.reload()
          setsaveModalClone(false);
          setModalClone(false);

        }
      })

    }
  }

  return (
    <>
      {props.type === 'cadastro' && (
        <div>
          {modal && (
            <div className={classes.container}>
              <div className={classes.modalbox}>

                <header className={classes.header}>
                  <h1 className={classes.titleText}>Cadastro de conexões</h1>

                  <button onClick={togglecancelModal} className={classes.cancelButton}>
                    <FiThumbsDown className={classes.cancelIcon} />
                    <div className={classes.cancelLine} />
                    <p className={classes.cancelText}>Cancelar</p>
                  </button>
                  {cancelModal && (<div className={classes.subContainer}>
                    <div className={classes.minibox}>
                      <div className={classes.purpletop}></div>
                      <div className={classes.atencao}>
                        <p className={classes.atencao_text}>Atenção</p>
                      </div>
                      <div className={classes.mid_box}>
                        <div className={classes.break_line}>
                          <p className={classes.mid_text}>Tem certeza que deseja cancelar </p>
                          <p className={classes.mid_text}>esta operação?</p>
                        </div>
                      </div>
                      <div>
                        <button onClick={togglecancelModal} className={classes.cancelButton2}>
                          <FiThumbsDown className={classes.cancelIcon} />
                          <div className={classes.cancelLine} />
                          <p className={classes.cancelText}>Cancelar</p>
                        </button>

                        <button onClick={confirmarCancel} className={classes.confirmarButton}>
                          <FiThumbsUp className={classes.saveIcon} />
                          <div className={classes.saveLine} />
                          <p className={classes.confirmarText}>Confirmar</p>
                        </button>
                      </div>

                    </div>

                  </div>)}

                  {warnModal && (<div className={classes.subContainer}>
                    <div className={classes.minibox}>
                      <div className={classes.purpletop}></div>
                      <div className={classes.atencao}>
                        <p className={classes.atencao_text}>Atenção</p>
                      </div>
                      <div className={classes.mid_box}>
                        <div className={classes.break_line_warn}>
                          <p className={classes.warn_text}>Não é possível criar mais de </p>
                          <p className={classes.warn_text}>uma conexão com o mesmo nome.</p>
                          <p className={classes.warn_text}> Por favor, edite o nome do banco.</p>
                        </div>
                      </div>
                      <div>
                        <button onClick={togglewarnModal} className={classes.cancelButton2}>
                          <FiThumbsDown className={classes.cancelIcon} />
                          <div className={classes.cancelLine} />
                          <p className={classes.cancelText}>Cancelar</p>
                        </button>

                        <button onClick={togglewarnModal} className={classes.confirmarButton}>
                          <FiThumbsUp className={classes.saveIcon} />
                          <div className={classes.saveLine} />
                          <p className={classes.confirmarText}>Confirmar</p>
                        </button>
                      </div>

                    </div>

                  </div>)}

                  {saveModal && (<div className={classes.subContainer}>
                    <div className={classes.minibox}>
                      <div className={classes.purpletop}></div>
                      <div className={classes.atencao}>
                        <p className={classes.atencao_text}>Atenção</p>
                      </div>
                      <div className={classes.mid_box}>
                        <div className={classes.break_line}>
                          <p className={classes.mid_text}>Tem certeza que deseja salvar </p>
                          <p className={classes.mid_text}>estes dados?</p>
                        </div>
                      </div>
                      <div>
                        <button onClick={togglesaveModal} className={classes.cancelButton2}>
                          <FiThumbsDown className={classes.cancelIcon} />
                          <div className={classes.cancelLine} />
                          <p className={classes.cancelText}>Cancelar</p>
                        </button>

                        <button onClick={new_entry} className={classes.confirmarButton}>
                          <FiThumbsUp className={classes.saveIcon} />
                          <div className={classes.saveLine} />
                          <p className={classes.confirmarText}>Confirmar</p>
                        </button>
                      </div>

                    </div>

                  </div>)}

                  <button onClick={() => { }} className={classes.cloneButton}>
                    <TbStack className={classes.cloneIcon} />
                    <div className={classes.cloneLine} />
                    <p className={classes.cloneText}>Clonar</p>
                  </button>

                  <button onClick={opensaveModal} className={classes.saveButton}>
                    <FiThumbsUp className={classes.saveIcon} />
                    <div className={classes.saveLine} />
                    <p className={classes.saveText}>Salvar</p>
                  </button>
                </header>

                <div className={classes.body}>

                  <div className={classes.h2}>
                    <h2 className={classes.ativo}>Ativo?</h2>

                    <ToggleSwitch
                      checked={checked}
                      className={classes.toggle}
                      onChange={(e) => {
                        setChecked(e)
                        console.log('aqui++')
                      }}
                    />

                  </div>

                  <div className={classes.box_descricao}>

                    <div className={classes.hide_box}>
                      <p className={classes.borderText}>Descrição</p>
                    </div>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Nome da conexão
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='name'
                        id='name_conexao'
                        value={newStance.name}
                        onChange={handleChange}
                        maxLength={45}
                      />
                    </form>


                  </div>

                  <div className={classes.box_conexao}>
                    <div className={classes.hide_box}>
                      <p className={classes.borderText}>Conexão</p>
                    </div>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Client
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='client'
                        id='client'
                        value={newStance.client}
                        onChange={handleChange}
                      />
                    </form>

                    <form className={classes.form_host_port}>
                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title}>
                          <label className={classes.top_text}>
                            Host
                          </label>
                          <p className={classes.asterisk}>*</p>
                        </div>

                        <input
                          className={classes.input_host}
                          type='text'
                          name='host'
                          id='host'
                          value={newStance.host}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title_port}>
                          <label className={classes.top_text}>
                            Port
                          </label>
                        </div>

                        <input
                          className={classes.input_port}
                          type='number'
                          name='port'
                          id='port'
                          value={newStance.port}
                          onChange={handleChange}
                        />
                      </div>
                    </form>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          User
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='user'
                        id='user'
                        value={newStance.user}
                        onChange={handleChange}
                      />
                    </form>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Password
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='password'
                        name='password'
                        id='password'
                        value={newStance.password}
                        onChange={handleChange}
                      />
                    </form>

                    <form className={classes.form_host_port}>
                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title}>
                          <label className={classes.top_text}>
                            Database
                          </label>
                          <p className={classes.asterisk}>*</p>
                        </div>

                        <input
                          className={classes.input_database}
                          type='text'
                          name='database'
                          id='database'
                          value={newStance.database}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title_port}>
                          <label className={classes.top_text}>
                            Min.Pool
                          </label>
                        </div>

                        <input
                          className={classes.input_minmax}
                          type='number'
                          name='poolMin'
                          id='poolMin'
                          value={newStance.poolMin}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title_port}>
                          <label className={classes.top_text}>
                            Max.Pool
                          </label>
                        </div>

                        <input
                          className={classes.input_minmax}
                          type='number'
                          name='poolMax'
                          id='poolMax'
                          value={newStance.poolMax}
                          onChange={handleChange}
                        />
                      </div>
                    </form>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Filename
                        </label>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='filename'
                        id='filename'
                        value={newStance.filename}
                        onChange={handleChange}
                      />
                    </form>
                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Connection String
                        </label>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='connectionString'
                        id='connectionString'
                        value={newStance.connectionString}
                        onChange={handleChange}
                      />
                    </form>



                  </div>

                </div>

                <div className={classes.feet}>
                  <div className={classes.feet_text}>
                    {checkOK && (<div>
                      <p className={classes.text1}>Status: Teste de conexão realizado com sucesso.</p>
                    </div>)}
                    {flagError && (<div>
                      <p className={classes.text2}>Status: 1 ou mais campos obrigatórios não foram preenchidos.</p>
                    </div>)}
                  </div>
                  <button onClick={teste_entry_cadastro} className={classes.testeButton}>
                    <div className={classes.fill} />
                    <div className={classes.testeLine} />
                    <p className={classes.testeText}>Testar conexão</p>
                  </button>

                </div>





              </div>
            </div>

          )}

          {!modal && (<div>
            <button onClick={toggleModal} className={classes.addbutton}>
              <AiOutlinePlus className={classes.plusIcon} />
              <div className={classes.lineDivision} />
              <p className={classes.text2_button}>Criar novo</p>
            </button>
          </div>)}


        </div>
      )}

      {/* //editar */}

      {props.type === 'editar' && (
        <div>
          {!modalEdit && (<div>
            <button onClick={toggleModalEdit} className={classes.editarbt}>
              <p className={classes.textEditar}>
                Editar
              </p>
            </button>
          </div>)}

          {modalEdit && (
            <div className={classes.container2}>
              <div className={classes.modalbox}>

                <header className={classes.header}>
                  <h1 className={classes.titleTextEdit}>Editar Conexões</h1>

                  <button onClick={togglecancelModalEdit} className={classes.cancelButtonEdit}>
                    <FiThumbsDown className={classes.cancelIcon} />
                    <div className={classes.cancelLine} />
                    <p className={classes.cancelText}>Cancelar</p>
                  </button>
                  {cancelModalEdit && (<div className={classes.subContainer}>
                    <div className={classes.minibox}>
                      <div className={classes.purpletop}></div>
                      <div className={classes.atencao}>
                        <p className={classes.atencao_text}>Atenção</p>
                      </div>
                      <div className={classes.mid_box}>
                        <div className={classes.break_line}>
                          <p className={classes.mid_text}>Tem certeza que deseja cancelar </p>
                          <p className={classes.mid_text}>esta operação?</p>
                        </div>
                      </div>
                      <div>
                        <button onClick={togglecancelModalEdit} className={classes.cancelButton2}>
                          <FiThumbsDown className={classes.cancelIcon} />
                          <div className={classes.cancelLine} />
                          <p className={classes.cancelText}>Cancelar</p>
                        </button>

                        <button onClick={confirmarCancelEdit} className={classes.confirmarButton}>
                          <FiThumbsUp className={classes.saveIcon} />
                          <div className={classes.saveLine} />
                          <p className={classes.confirmarText}>Confirmar</p>
                        </button>
                      </div>

                    </div>

                  </div>)}

                  {warnModal && (<div className={classes.subContainer}>
                    <div className={classes.minibox}>
                      <div className={classes.purpletop}></div>
                      <div className={classes.atencao}>
                        <p className={classes.atencao_text}>Atenção</p>
                      </div>
                      <div className={classes.mid_box}>
                        <div className={classes.break_line_warn}>
                          <p className={classes.warn_text}>Não é possível criar mais de </p>
                          <p className={classes.warn_text}>uma conexão com o mesmo nome.</p>
                          <p className={classes.warn_text}> Por favor, edite o nome do banco.</p>
                        </div>
                      </div>
                      <div>
                        <button onClick={togglewarnModal} className={classes.cancelButton2}>
                          <FiThumbsDown className={classes.cancelIcon} />
                          <div className={classes.cancelLine} />
                          <p className={classes.cancelText}>Cancelar</p>
                        </button>

                        <button onClick={togglewarnModal} className={classes.confirmarButton}>
                          <FiThumbsUp className={classes.saveIcon} />
                          <div className={classes.saveLine} />
                          <p className={classes.confirmarText}>Confirmar</p>
                        </button>
                      </div>

                    </div>

                  </div>)}

                  {saveModalEdit && (<div className={classes.subContainer}>
                    <div className={classes.minibox}>
                      <div className={classes.purpletop}></div>
                      <div className={classes.atencao}>
                        <p className={classes.atencao_text}>Atenção</p>
                      </div>
                      <div className={classes.mid_box}>
                        <div className={classes.break_line}>
                          <p className={classes.mid_text}>Tem certeza que deseja salvar </p>
                          <p className={classes.mid_text}>estes dados?</p>
                        </div>
                      </div>
                      <div>
                        <button onClick={toggleSaveModalEdit} className={classes.cancelButton2}>
                          <FiThumbsDown className={classes.cancelIcon} />
                          <div className={classes.cancelLine} />
                          <p className={classes.cancelText}>Cancelar</p>
                        </button>

                        <button onClick={entry_edicao} className={classes.confirmarButton}>
                          <FiThumbsUp className={classes.saveIcon} />
                          <div className={classes.saveLine} />
                          <p className={classes.confirmarText}>Confirmar</p>
                        </button>
                      </div>

                    </div>

                  </div>)}

                  <button onClick={opensaveModalEdit} className={classes.saveButton}>
                    <FiThumbsUp className={classes.saveIcon} />
                    <div className={classes.saveLine} />
                    <p className={classes.saveText}>Salvar</p>
                  </button>
                </header>

                <div className={classes.body}>

                  <div className={classes.h2}>
                    <h2 className={classes.ativo}>Ativo?</h2>

                    <ToggleSwitch
                      checked={checked}
                      className={classes.toggle}
                      onChange={(e) => {
                        setChecked(e)

                      }}
                    />

                  </div>

                  <div className={classes.box_descricao}>

                    <div className={classes.hide_box}>
                      <p className={classes.borderText}>Descrição</p>
                    </div>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Nome da conexão
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='name'
                        id='name_conexao'
                        value={newStance.name}
                        onChange={handleChange}
                        maxLength={45}
                      />
                    </form>


                  </div>

                  <div className={classes.box_conexao}>
                    <div className={classes.hide_box}>
                      <p className={classes.borderText}>Conexão</p>
                    </div>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Client
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='client'
                        id='client'
                        value={newStance.client}
                        onChange={handleChange}
                      />
                    </form>

                    <form className={classes.form_host_port}>
                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title}>
                          <label className={classes.top_text}>
                            Host
                          </label>
                          <p className={classes.asterisk}>*</p>
                        </div>

                        <input
                          className={classes.input_host}
                          type='text'
                          name='host'
                          id='host'
                          value={newStance.host}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title_port}>
                          <label className={classes.top_text}>
                            Port
                          </label>
                        </div>

                        <input
                          className={classes.input_port}
                          type='number'
                          name='port'
                          id='port'
                          value={newStance.port}
                          onChange={handleChange}
                        />
                      </div>
                    </form>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          User
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='user'
                        id='user'
                        value={newStance.user}
                        onChange={handleChange}
                      />
                    </form>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Password
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='password'
                        name='password'
                        id='password'
                        value={newStance.password}
                        onChange={handleChange}
                      />
                    </form>

                    <form className={classes.form_host_port}>
                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title}>
                          <label className={classes.top_text}>
                            Database
                          </label>
                          <p className={classes.asterisk}>*</p>
                        </div>

                        <input
                          className={classes.input_database}
                          type='text'
                          name='database'
                          id='database'
                          value={newStance.database}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title_port}>
                          <label className={classes.top_text}>
                            Min.Pool
                          </label>
                        </div>

                        <input
                          className={classes.input_minmax}
                          type='number'
                          name='poolMin'
                          id='poolMin'
                          value={newStance.poolMin}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title_port}>
                          <label className={classes.top_text}>
                            Max.Pool
                          </label>
                        </div>

                        <input
                          className={classes.input_minmax}
                          type='number'
                          name='poolMax'
                          id='poolMax'
                          value={newStance.poolMax}
                          onChange={handleChange}
                        />
                      </div>
                    </form>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Filename
                        </label>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='filename'
                        id='filename'
                        value={newStance.filename}
                        onChange={handleChange}
                      />
                    </form>
                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Connection String
                        </label>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='connectionString'
                        id='connectionString'
                        value={newStance.connectionString}
                        onChange={handleChange}
                      />
                    </form>



                  </div>

                </div>

                <div className={classes.feet}>
                  <div className={classes.feet_text}>
                    {checkOK && (<div>
                      <p className={classes.text1}>Status: Teste de conexão realizado com sucesso.</p>
                    </div>)}
                    {flagError && (<div>
                      <p className={classes.text2}>Status: 1 ou mais campos obrigatórios não foram preenchidos.</p>
                    </div>)}
                  </div>


                </div>





              </div>
            </div>

          )}
        </div>
      )}

      {/* //clone */}

      {props.type === 'clone' && (
        <div>
          
          {!modalClone && (<div>
            <button onClick={toggleModalClone} className={classes.clonarbt}>
              <p className={classes.textClonar}>
                Clonar
              </p>
            </button>
          </div>)}

          {modalClone && (
            <div className={classes.container3}>
              <div className={classes.modalbox}>

                <header className={classes.header}>
                  <h1 className={classes.titleTextEdit}>Clonar Conexões</h1>

                  <button onClick={toggleCancelModalClone} className={classes.cancelButtonEdit}>
                    <FiThumbsDown className={classes.cancelIcon} />
                    <div className={classes.cancelLine} />
                    <p className={classes.cancelText}>Cancelar</p>
                  </button>
                  {cancelModalClone && (<div className={classes.subContainer}>
                    <div className={classes.minibox}>
                      <div className={classes.purpletop}></div>
                      <div className={classes.atencao}>
                        <p className={classes.atencao_text}>Atenção</p>
                      </div>
                      <div className={classes.mid_box}>
                        <div className={classes.break_line}>
                          <p className={classes.mid_text}>Tem certeza que deseja cancelar </p>
                          <p className={classes.mid_text}>esta operação?</p>
                        </div>
                      </div>
                      <div>
                        <button onClick={toggleCancelModalClone} className={classes.cancelButton2}>
                          <FiThumbsDown className={classes.cancelIcon} />
                          <div className={classes.cancelLine} />
                          <p className={classes.cancelText}>Cancelar</p>
                        </button>

                        <button onClick={confirmarCancelClone} className={classes.confirmarButton}>
                          <FiThumbsUp className={classes.saveIcon} />
                          <div className={classes.saveLine} />
                          <p className={classes.confirmarText}>Confirmar</p>
                        </button>
                      </div>

                    </div>

                  </div>)}

                  {warnModalClone && (<div className={classes.subContainer}>
                    <div className={classes.minibox}>
                      <div className={classes.purpletop}></div>
                      <div className={classes.atencao}>
                        <p className={classes.atencao_text}>Atenção</p>
                      </div>
                      <div className={classes.mid_box}>
                        <div className={classes.break_line_warn}>
                          <p className={classes.warn_text}>Não é possível criar mais de </p>
                          <p className={classes.warn_text}>uma conexão com o mesmo nome.</p>
                          <p className={classes.warn_text}> Por favor, edite o nome do banco.</p>
                        </div>
                      </div>
                      <div>
                        <button onClick={togglewarnModalClone} className={classes.cancelButton2}>
                          <FiThumbsDown className={classes.cancelIcon} />
                          <div className={classes.cancelLine} />
                          <p className={classes.cancelText}>Cancelar</p>
                        </button>

                        <button onClick={togglewarnModalClone} className={classes.confirmarButton}>
                          <FiThumbsUp className={classes.saveIcon} />
                          <div className={classes.saveLine} />
                          <p className={classes.confirmarText}>Confirmar</p>
                        </button>
                      </div>

                    </div>

                  </div>)}

                  {saveModalClone && (<div className={classes.subContainer}>
                    <div className={classes.minibox}>
                      <div className={classes.purpletop}></div>
                      <div className={classes.atencao}>
                        <p className={classes.atencao_text}>Atenção</p>
                      </div>
                      <div className={classes.mid_box}>
                        <div className={classes.break_line}>
                          <p className={classes.mid_text}>Tem certeza que deseja salvar </p>
                          <p className={classes.mid_text}>estes dados?</p>
                        </div>
                      </div>
                      <div>
                        <button onClick={toggleSaveModalClone} className={classes.cancelButton2}>
                          <FiThumbsDown className={classes.cancelIcon} />
                          <div className={classes.cancelLine} />
                          <p className={classes.cancelText}>Cancelar</p>
                        </button>

                        <button onClick={new_entry} className={classes.confirmarButton}>
                          <FiThumbsUp className={classes.saveIcon} />
                          <div className={classes.saveLine} />
                          <p className={classes.confirmarText}>Confirmar</p>
                        </button>
                      </div>

                    </div>

                  </div>)}

                  <button onClick={opensaveModalClone} className={classes.saveButton}>
                    <FiThumbsUp className={classes.saveIcon} />
                    <div className={classes.saveLine} />
                    <p className={classes.saveText}>Salvar</p>
                  </button>
                </header>

                <div className={classes.body}>

                  <div className={classes.h2}>
                    <h2 className={classes.ativo}>Ativo?</h2>

                    <ToggleSwitch
                      checked={checked}
                      className={classes.toggle}
                      onChange={(e) => {
                        setChecked(e)

                      }}
                    />

                  </div>

                  <div className={classes.box_descricao}>

                    <div className={classes.hide_box}>
                      <p className={classes.borderText}>Descrição</p>
                    </div>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Nome da conexão
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='name'
                        id='name_conexao'
                        value={newStance.name}
                        onChange={handleChange}
                        maxLength={45}
                      />
                    </form>


                  </div>

                  <div className={classes.box_conexao}>
                    <div className={classes.hide_box}>
                      <p className={classes.borderText}>Conexão</p>
                    </div>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Client
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='client'
                        id='client'
                        value={newStance.client}
                        onChange={handleChange}
                      />
                    </form>

                    <form className={classes.form_host_port}>
                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title}>
                          <label className={classes.top_text}>
                            Host
                          </label>
                          <p className={classes.asterisk}>*</p>
                        </div>

                        <input
                          className={classes.input_host}
                          type='text'
                          name='host'
                          id='host'
                          value={newStance.host}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title_port}>
                          <label className={classes.top_text}>
                            Port
                          </label>
                        </div>

                        <input
                          className={classes.input_port}
                          type='number'
                          name='port'
                          id='port'
                          value={newStance.port}
                          onChange={handleChange}
                        />
                      </div>
                    </form>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          User
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='user'
                        id='user'
                        value={newStance.user}
                        onChange={handleChange}
                      />
                    </form>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Password
                        </label>
                        <p className={classes.asterisk}>*</p>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='password'
                        name='password'
                        id='password'
                        value={newStance.password}
                        onChange={handleChange}
                      />
                    </form>

                    <form className={classes.form_host_port}>
                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title}>
                          <label className={classes.top_text}>
                            Database
                          </label>
                          <p className={classes.asterisk}>*</p>
                        </div>

                        <input
                          className={classes.input_database}
                          type='text'
                          name='database'
                          id='database'
                          value={newStance.database}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title_port}>
                          <label className={classes.top_text}>
                            Min.Pool
                          </label>
                        </div>

                        <input
                          className={classes.input_minmax}
                          type='number'
                          name='poolMin'
                          id='poolMin'
                          value={newStance.poolMin}
                          onChange={handleChange}
                        />
                      </div>

                      <div className={classes.dual_box_flex}>
                        <div className={classes.top_title_port}>
                          <label className={classes.top_text}>
                            Max.Pool
                          </label>
                        </div>

                        <input
                          className={classes.input_minmax}
                          type='number'
                          name='poolMax'
                          id='poolMax'
                          value={newStance.poolMax}
                          onChange={handleChange}
                        />
                      </div>
                    </form>

                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Filename
                        </label>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='filename'
                        id='filename'
                        value={newStance.filename}
                        onChange={handleChange}
                      />
                    </form>
                    <form className={classes.form}>
                      <div className={classes.top_title}>
                        <label className={classes.top_text}>
                          Connection String
                        </label>
                      </div>

                      <input
                        className={classes.label_conexao}
                        type='text'
                        name='connectionString'
                        id='connectionString'
                        value={newStance.connectionString}
                        onChange={handleChange}
                      />
                    </form>



                  </div>

                </div>

                <div className={classes.feet}>
                  <div className={classes.feet_text}>
                    {checkOK && (<div>
                      <p className={classes.text1}>Status: Teste de conexão realizado com sucesso.</p>
                    </div>)}
                    {flagError && (<div>
                      <p className={classes.text2}>Status: 1 ou mais campos obrigatórios não foram preenchidos.</p>
                    </div>)}
                  </div>

                </div>
              </div>
            </div>

          )}
        </div>
      )}
    </>









  )
}



