import * as React from 'react';
import usePortfolio from "../hook/usePortfolio";
import Image from 'next/image';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import styles from '../styles/Details.module.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
  };

const Details1 = ({projectJ}) => {

    const {activetheme} = usePortfolio();
    const {name, img_1, img_2, description, summary, others} = projectJ;
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [openSummary, setOpenSummary] = React.useState(false);
    const [showSummary, setShowSummary] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleOpenSummary = () => setOpenSummary(true);

    const handleClose = () => {
        setOpen(false);
        setShow(true);
    }

    const handleCloseSummary = () => {
        setOpenSummary(false);
        setShowSummary(true);
    }

  return (
    <>
        <div className={styles.details}>
            <div>
                <h2>Details</h2>
                <p className='center reveal fade-right'>{description}</p>
            </div>
            
            <div className='reveal fade-right'>   
                {show ? 
                    <div className={styles.image}>
                        <Image layout='responsive' width={500} height={270} src={img_1} alt={`Image 1 project ${name}`} onClick={handleOpen} draggable="false"/>
                    </div>
                    : (
                    <div className={styles.flex}>
                        <button 
                            style={{
                                    boxShadow: activetheme === 'dark' ? "" : "0 0 25px var(--light-blue)",
                                    color: activetheme === 'dark' ? "var(--grey)" : "var(--black)",
                                    backgroundColor: activetheme === 'dark' ? "rgb(34, 49, 63)" : "#cbe1fa",
                                }} 
                            className={styles.button} onClick={handleOpen}>ClickMe</button>
                    </div>
                )}
            </div>
        </div>
       
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}  className={styles.modal}>
                    <Image priority="true" layout='responsive' width={500} height={300} src={img_1} alt={`Image 1 project ${name}`} draggable="false"/>
                </Box>
            </Fade>
        </Modal>
            
        <div className={styles.summary}>
            <div>
                <h3 className={styles.left}>Summary</h3>
                <p className='center reveal fade-left'>{summary}</p>             
            </div>

            <div className='reveal fade-left'>  
                {showSummary ?
                <>
                    <div className={styles.image}>
                        <Image layout='responsive' width={500} height={270} src={img_2} alt={`Image 2 project ${name}`} onClick={handleOpenSummary} draggable="false"/>
                    </div>
                </> : (
                    <div className={styles.flex}>
                        <button 
                            style={{
                                boxShadow: activetheme === 'dark' ? "" : "0 0 25px var(--light-blue)",
                                color: activetheme === 'dark' ? "var(--grey)" : "var(--black)",
                                backgroundColor: activetheme === 'dark' ? "rgb(34, 49, 63)" : "#cbe1fa",
                            }} 
                            className={styles.button} onClick={handleOpenSummary}>ClickMe</button>
                    </div>
                    
                )}
            </div>
        </div>

        <Modal
            open={openSummary}
            onClose={handleCloseSummary}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openSummary}>
                <Box sx={style}  className={styles.modal}>
                    <Image priority="true" layout='responsive' width={500} height={300} src={img_2} alt={`Image 2 project ${name}`} draggable="false"/>
                </Box>
            </Fade>
        </Modal>

        {others.length > 0 && 
            <div className={styles.separator}></div>
        }
        
        <div className={styles.project}>
            {others.map(other => (
                <div key={other.id} className={styles.preview}>
                    <Image layout='responsive' width={500} height={270} src={other.url} alt={`Preview project ${name}`} draggable="false"/>
                </div>
            ))}
        </div>
        
    </>
  )
}

export default Details1