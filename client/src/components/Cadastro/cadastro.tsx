import React, { useState, useEffect } from "react";
import classes from './cadastro.module.css'
import { AiOutlineLock, AiOutlineArrowDown, AiOutlineMinus } from 'react-icons/ai'
import { SlMagnifier, SlEqualizer } from 'react-icons/sl'
import Toggle from "../Toggle/Toggle";
import { TfiExport } from 'react-icons/tfi'
import { BiTrash } from 'react-icons/bi'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import { VscArrowBoth } from 'react-icons/vsc'
import Table from "../Table/table";
import Axios from "axios";
import ModalCadastro from "../Modal/Modal";


export default function Cadastro() {

  const [showControl1,setShowControl1] = useState(0)
  const [showControl2,setShowControl2] = useState(3)
  const [n_handle,setNhandle] = useState(3)

  const increment_handle_botton_n = () =>{
    let x = n_handle;
    x++
    setNhandle(x)
  }
  const decrement_handle_botton_n = () =>{
    if(n_handle < 2){

    }
    else{
      let x = n_handle;
      x--
      setNhandle(x)
    }

  }

  const [fetchedData, setfetchedData] = useState<any>([]);
  const [dropDown, setDropDown] = useState(false);
  const [filterDropDown, setFilterDropDown] = useState(false)
  const handleDropdownFilter = () =>{
    setFilterDropDown(!filterDropDown)
  }

  const [todasF,setTodas] = useState(true);
  const [nomeF,setnome] = useState(true);
  const [clientF,setclient] = useState(true);
  const [hostF,sethost] = useState(true);
  const [portF,setport] = useState(true);
  const [userF,setuser] = useState(true);
  const [passwordF,setpassword] = useState(true);
  const [databaseF,setdatabase] = useState(true);
  const [poolMinF,setpoolMin] = useState(true);
  const [poolMaxF,setpoolMax] = useState(true);
  const [filenameF,setfilename] = useState(true);
  const [cstringF,setcstring] = useState(true);
  const handleSetTodas = () =>{
    let checked = todasF
    setTodas(!checked)
    setnome(!checked)
    setclient(!checked)
    sethost(!checked)
    setport(!checked)
    setuser(!checked)
    setpassword(!checked)
    setdatabase(!checked)
    setpoolMin(!checked)
    setpoolMax(!checked)
    setfilename(!checked)
    setcstring(!checked)}
  const handleSetNome = () =>{setnome(!nomeF)}
  const handleSetClient = () =>{setclient(!clientF)}
  const handleSetHost = () =>{sethost(!hostF)}
  const handleSetPort = () =>{setport(!portF)}
  const handleSetUser = () =>{setuser(!userF)}
  const handleSetPassword = () =>{setpassword(!passwordF)}
  const handleSetDatabase = () =>{setdatabase(!databaseF)}
  const handleSetPoolMin = () =>{setpoolMin(!poolMinF)}
  const handleSetPoolMax = () =>{setpoolMax(!poolMaxF)}
  const handleSetFilename = () =>{setfilename(!filenameF)}
  const handleSetcString = () =>{setcstring(!cstringF)}


  const [listSize, setListSize] = useState(3);
  const [filterDB, setfilterDB] = useState('');
  const [search, setSearch] = useState('');
  const [colfilter, setcolfilter] = useState({
    name: true,
    client: true,
    host: true,
    port: true,
    user: true,
    password: true,
    database: true,
    poolMin: true,
    poolMax: true,
    filename: true,
    connectionString: true,
    ativo: true
  });
  const handleChangeFilter = (e: any) => {
    let field = e.target.name;
    setcolfilter(existingValues => ({
      ...existingValues,
      [field]: e.target.value,
    }))
  }
  console.log(search);

  const changeFilterOracle = () => {
    setfilterDB('OracleDB')
    setDropDown(false)
  }
  const changeFilterMySQL = () => {
    setfilterDB('MySQL')
    setDropDown(false)
  }
  const openFilter = () => {
    setDropDown(true)
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/getData').then((response) => {
      setfetchedData(response.data)
    })
  }, [])

  return (
    <div className={classes.container}>

      <div className={classes.pesquisa}>

        <div className={classes.topbox}>

          <h1 className={classes.title}>Pesquisar conexões</h1>

          <div className={classes.linebox}>
            <div className={classes.recolher_filtro}>
              <p className={classes.text1}>Recolher filtro</p>
              <button>
                <div className={classes.minusIcon}></div>
              </button>
            </div>

            <div className={classes.line}></div>

          </div>

          <ModalCadastro type={'cadastro'} />



        </div>

        <div className={classes.pesquisa_box}>
          <div className={classes.toggle}>
            <h2 className={classes.text3}>Ativos?</h2>
            <Toggle isToggle={false} />

          </div>
          <div className={classes.conexao}>
            <h2 className={classes.text4}>Nome da conexão</h2>
            <input
              className={classes.inputconexao}
              placeholder="Nome da conexão"
              onChange={(e) => setSearch(e.target.value)} />

          </div>
          <div className={classes.client}>

            <h2 className={classes.text5}>Client</h2>
            <div>
              <div className={classes.dropdown}>
                <div className={classes.inputclient}>
                  {filterDB === '' ? (<><p className={classes.textInputClient}> Selecione o Cliente</p></>) : (<>
                    <p className={classes.textInputClient}> {filterDB}</p></>)}

                </div>
                {dropDown && (<>
                  <button onClick={changeFilterMySQL} className={classes.inputclient2}>
                    <p className={classes.textInputClient}> MySQL</p>
                  </button>
                  <button onClick={changeFilterOracle} className={classes.inputclient3}>
                    <p className={classes.textInputClient}> OracleDB</p>
                  </button>
                </>)}





              </div>

              <button onClick={openFilter} className={classes.buttonDown}>
                <AiOutlineArrowDown className={classes.downIcon} />
              </button>
            </div>

          </div>
          <button className={classes.searchbutton}>
            <SlMagnifier className={classes.magnify} />
            <div className={classes.lineDivision} />
            <p className={classes.text6}>Pesquisar</p>
          </button>

        </div>


      </div>


      <div className={classes.exibicao}>

        <div className={classes.pesquisabox}>

          <h1 className={classes.title}>Lista conexões</h1>

          <div className={classes.linebox}>

            <div className={classes.line2}></div>

          </div>
          <div className={classes.dropdownFilter}>
            <button onClick={handleDropdownFilter} className={classes.filterButton}>
              <SlEqualizer style={{ stroke: 'white', strokeWidth: '15' }} className={classes.eqIcon} />
              <p className={classes.filtertext}>Selecionar colunas</p>
            </button>

            {filterDropDown && (<>
              <div className={classes.collunFilter}>

                <div className={classes.divInput}>
                  <input type='checkbox' className={classes.inputBox} checked={todasF} onChange={handleSetTodas} />
                  <p className={classes.filterText1}>Todas</p>
                </div>
                <div className={classes.divInput}>
                  <input type='checkbox' className={classes.inputBox} checked={nomeF} onChange={handleSetNome} />
                  <p className={classes.filterText1}>Nome do banco</p>
                </div>
                <div className={classes.divInput}>
                  <input type='checkbox' className={classes.inputBox} checked={clientF} onChange={handleSetClient} />
                  <p className={classes.filterText1}>Client</p>
                </div>
                <div className={classes.divInput}>
                  <input type='checkbox' className={classes.inputBox} checked={hostF} onChange={handleSetHost} />
                  <p className={classes.filterText1}>Host</p>
                </div>
                <div className={classes.divInput}>
                  <input type='checkbox' className={classes.inputBox} checked={portF} onChange={handleSetPort} />
                  <p className={classes.filterText1}>Port</p>
                </div>
                <div className={classes.divInput}>
                  <input type='checkbox' className={classes.inputBox} checked={passwordF} onChange={handleSetPassword} />
                  <p className={classes.filterText1}>Password</p>
                </div>
                <div className={classes.divInput}>
                  <input type='checkbox' className={classes.inputBox} checked={databaseF} onChange={handleSetDatabase} />
                  <p className={classes.filterText1}>Database</p>
                </div>
                <div className={classes.divInput}>
                  <input type='checkbox' className={classes.inputBox} checked={poolMinF} onChange={handleSetPoolMin} />
                  <p className={classes.filterText1}>Pool min.</p>
                </div>
                <div className={classes.divInput}>
                  <input type='checkbox' className={classes.inputBox} checked={poolMaxF} onChange={handleSetPoolMax} />
                  <p className={classes.filterText1}>Pool max.</p>
                </div>
                <div className={classes.divInput}>
                  <input type='checkbox' className={classes.inputBox} checked={filenameF} onChange={handleSetFilename} />
                  <p className={classes.filterText1}>Filename</p>
                </div>
                <div className={classes.divInput}>
                  <input type='checkbox' className={classes.inputBox} checked={cstringF} onChange={handleSetcString} />
                  <p className={classes.filterText1}>Connection string</p>
                </div>
              </div></>)}
          

          </div>
          <button className={classes.exportButton}>
            <TfiExport style={{ stroke: 'white', strokeWidth: '1' }} className={classes.exportIcon} />
            <p className={classes.exportText}>Exportar</p>
          </button>
          <button className={classes.deleteButton}>
            <BiTrash className={classes.deleteIcon} />
            <div className={classes.deleteLine} />
            <p className={classes.deleteText}>Excluir</p>
          </button>


        </div>

        <div className={classes.mid}>
          <div className={classes.toptitle}>
            <div className={classes.mid_bar_toggle}>
              <input type='checkbox' className={classes.mid_check} />
            </div>
            {nomeF && (<>
              <div className={classes.mid_bar_conexao}>
              <p className={classes.mid_text_conexao}>Nome da conexão</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            </>)}
            {clientF && (<>
              <div className={classes.mid_bar_client}>
              <p className={classes.mid_text_conexao}>Client</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            </>)}
            {hostF && (<>
              <div className={classes.mid_bar_host}>
              <p className={classes.mid_text_conexao}>Host</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            </>)}
            {portF && (<>
              <div className={classes.mid_bar_port}>
              <p className={classes.mid_text_conexao}>Port</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            </>)}
            {userF && (<>
              <div className={classes.mid_bar_user}>
              <p className={classes.mid_text_conexao}>User</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            </>)}
            {passwordF && (<>
              <div className={classes.mid_bar_password}>
              <p className={classes.mid_text_conexao}>Password</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            </>)}
            {databaseF && (<>
              <div className={classes.mid_bar_database}>
              <p className={classes.mid_text_conexao}>Database</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            </>)}
            {poolMinF && (<>
              <div className={classes.mid_bar_poolMin}>
              <p className={classes.mid_text_conexao}>Pool min.</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            </>)}
            {poolMaxF && (<>
              <div className={classes.mid_bar_poolMax}>
              <p className={classes.mid_text_conexao}>Pool max.</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            </>)}
            {filenameF && (<>
              <div className={classes.mid_bar_filename}>
              <p className={classes.mid_text_conexao}>Filename</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            </>)}
            {cstringF && (<>
              <div className={classes.mid_bar_cString}>
              <p className={classes.mid_text_conexao}>Connection string</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            </>)}

            <div className={classes.mid_bar_active}>
              <p className={classes.mid_text_conexao}>Ativo?</p>
              <VscArrowBoth className={classes.mid_icon_set1} />
              <AiOutlineLock className={classes.mid_icon_set2} />
              <AiOutlineMinus className={classes.mid_icon_set1} />
            </div>
            <div className={classes.mid_bar_end}>
            </div>

          </div>
          {typeof fetchedData !== 'undefined' && fetchedData.filter((val: any) => {
            if (search === '' && filterDB === '') {
              return val;
            }
            else if (val.name.toLowerCase().includes(search.toLocaleLowerCase())) {
              if (filterDB === '') {
                return val
              } else if (val.client.toLowerCase().includes(filterDB.toLocaleLowerCase())) {
                return val
              }
            }
          }).slice(0, n_handle).map((item: any) => {
            return (
      
              <Table
                key={item.id}
                data={item}
                f_name={nomeF}
                f_client={clientF}
                f_host={hostF}
                f_port={portF}
                f_user={userF}
                f_password={passwordF}
                f_database={databaseF}
                f_poolmin={poolMinF}
                f_poolmax={poolMaxF}
                f_filename={filenameF}
                f_cstring={cstringF} />
            )
          })}

        </div>

        <div className={classes.low}>
          <p className={classes.lowText1}>Mostrar</p>
          <button onClick={decrement_handle_botton_n} className={classes.button_low_1}>
            <HiMinus className={classes.minus} />
          </button>
          <div className={classes.mid_button_box}>
            <p className={classes.mid_button_text}>`{n_handle}`</p>
          </div>
          <button onClick={increment_handle_botton_n} className={classes.button_low_2}>
            <HiPlus className={classes.plus} />
          </button>
          <p className={classes.lowText2}>Itens por página</p>

          <div>
            <button className={classes.button_less}>
              <FaLessThan className={classes.lessIcon} />
            </button>
            <p className={classes.placeholder}>1 2 3 4 5 6 7</p>
            <button className={classes.button_great}>
              <FaGreaterThan className={classes.greatIcon} />
            </button>
          </div>

        </div>


      </div>


    </div>
  )
}

