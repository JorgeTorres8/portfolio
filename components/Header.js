import usePortfolio from "../hook/usePortfolio";
import styles from '../styles/Header.module.css'
import Nav from "./Nav";
import Curriculum from './Curriculum';

const Header = ({home}) => {

  const {animation} = usePortfolio();

  return (
    <header className={styles.header}>
      <div className={styles.content}>

        {home ?
          <div className={styles.space}>
            <div className={styles.nav}>
              <Nav/>
              <div className={styles.description}>
                <h1>Hi, I&apos;m</h1>

                <ul>
                  <li>
                    <a className={`${animation && styles.name}`} appear-text="Jorge ">Jorge </a>
                    <a className={`${animation && styles.lastname}`} appear-text="Torres">Torres</a>        
                  </li>
                </ul>

                <p>
                  {home.Description}
                </p> 
              </div>
            </div> 

            <div className={styles.flex}>
              <Curriculum/>
            </div>
          </div>
          
           : (
            <div className={styles.navigation}>
              <Nav/>
            
              <Curriculum/>
            </div>

            )
        }
      </div>
    </header>
  )
} 
export default Header