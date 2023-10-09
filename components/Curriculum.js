import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ToggleButton from '../components/ToggleButton';
import styles from '../styles/Curriculum.module.css';

const Curriculum = () => {
  
  return (
    <div className={styles.flex}>
      <a href="/documents/Curriculum_Jorge_Torres.pdf" download="Curriculum_Jorge_Torres" className={styles.link}>
        <div className={styles.align}>
          <PictureAsPdfIcon className={styles.rocket} sx={{fontSize: 25}}/>
          Curriculum
        </div>
      </a>

      <ToggleButton/>
    </div>
  )
}

export default Curriculum
