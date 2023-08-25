import Link from "next/link"
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ToggleButton from '../components/ToggleButton';
import styles from '../styles/Curriculum.module.css';

const Curriculum = () => {
  
  return (
    <div className={styles.flex}>
      <Link href="https://drive.google.com/file/d/1DcXhy7-w4Ohz4vtrelkce6BEvXO_1N24/view?usp=sharing">
        <a target="_blank" className={styles.link}>
          <div className={styles.align}>
            <PictureAsPdfIcon className={styles.rocket} sx={{fontSize: 25}}/>
            Curriculum
          </div>
        </a>
      </Link>

      <ToggleButton/>
    </div>
  )
}

export default Curriculum
