import usePortfolio from "../hook/usePortfolio";
import styles from '../styles/ToggleButton.module.css'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const ThemeToggle = () => {

    const {setActiveTheme, inactivetheme, activetheme} = usePortfolio();

    return (
      <div className={styles.button}>
        <div onClick={() => setActiveTheme(inactivetheme)} className={`${activetheme === 'dark' ? styles.toggleButtonDark : styles.toggleButton}`}>
          <PowerSettingsNewIcon
            sx={{
              fontSize: 20,
              color: 'var(--black)' 
            }}
          />
        </div>
      </div>
    );
  };
export default ThemeToggle;