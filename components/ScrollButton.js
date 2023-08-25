import React, {useState, useEffect} from 'react';
import RocketIcon from '@mui/icons-material/Rocket';
import styles from '../styles/Index.module.css'

const ScrollButton = () => {

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	    setVisible(true)
	}
	else if (scrolled <= 300){
	    setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);



return ( 
	<>
        <div>
            <RocketIcon className={styles.rocket} sx={{fontSize: 33, borderRadius: '50%', backgroundColor: 'var(--orange)', padding: .5, boxShadow: '0 16px 10px -5px var(--light-blue)' }} onClick={scrollToTop}
            style={{display: visible ? 'inline' : 'none'}} />
        </div>

        <style jsx>{`
            div {
                position: fixed; 
                bottom: 1rem;
                right: 1rem;
                cursor: pointer;
                color: #000000;
            }
            @media(min-width: 768px) {
                div {
                    bottom: 2rem;
                    right: 2rem;
                }
            }
        `}</style>
    </>
);
}

export default ScrollButton;