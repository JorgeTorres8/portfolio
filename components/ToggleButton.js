import usePortfolio from "../hook/usePortfolio";
import styles from '../styles/ToggleButton.module.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeToggle = () => {

    const {setActiveTheme, inactivetheme, activetheme} = usePortfolio();

    return (
      <div className={styles.button}>
        <div onClick={() => setActiveTheme(inactivetheme)} className={`${activetheme === 'dark' ? styles.toggleButtonDark : styles.toggleButton}`}>
          {activetheme === 'dark' ? 
            <DarkModeIcon
              sx={{
                fontSize: 23,
                color: 'var(--white)' 
              }}
            /> :
            <Brightness7Icon
              sx={{
                fontSize: 23,
                color: 'var(--white)' 
              }}
            />
          }
        </div>
      </div>
    );
  };
export default ThemeToggle;