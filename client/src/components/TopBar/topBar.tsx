import { Dropdown } from '../Dropdown/Dropdown'
import SearchBar from '../SearchBar/searchBar'
import classes from './topBar.module.css'

export default function TopBar(){
  return(
    <div className={classes.topBox}>

          <div className={classes.topLogo}>
            <div className={classes.logo}></div>
          </div>

          <div className={classes.topDropDown}>
            <Dropdown />
          </div>

          <div className={classes.topHeader}>


            <div className={classes.box1}>
              <button>
                <p className={classes.inicio}>
                  Início&gt;Conexões
                </p>
              </button>
            </div>
            <div className={classes.box2}>
              <SearchBar placeholder="Pesquisa global no sistema" data="" />
            </div>
            <div className={classes.box3}>
              <div className={classes.endLogo}>
                <div className={classes.circle}>
                  <p className={classes.circleText}>MP</p>
                </div>
              </div>
            </div>



          </div>


        </div>
  )
}