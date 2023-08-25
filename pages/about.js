import * as React from 'react';
import { useState } from 'react';
import usePortfolio from "../hook/usePortfolio";
import { currentTechologies } from '../includes/technologies';
import Image from "next/image";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import FormControlLabel from '@mui/material/FormControlLabel';
import styles from '../styles/About.module.css'
import Layout from "../components/Layout"
import Technology from "../components/Technology";

const About = ({about}) => {
  const {activetheme} = usePortfolio();
  const {text, photo_1, photo_2, description} = about[0];
  
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const photoA = (
    <Paper sx={{ m: 2 }} elevation={4}>
        <Image width={520} height={270} src={photo_1.url} alt='Natural landscape 1'/>
    </Paper>
  );

  const photoB = (
    <Paper sx={{ m: 2 }} elevation={4}>
        <Image width={520} height={270} src={photo_2.url} alt='Natural landscape 2'/>
    </Paper>
  );

  return (
    <Layout
        page="About"
    >
      <div className='container'>
        <h1 className={styles.center}>About</h1>
      </div>

      <div className={styles.box}>
        <div className='container'>
          <div className={styles.presentation}>
            <div className="reveal fade-question">
              <p>Who is</p>
              <p>This Guy?</p>
            </div>
            
            <Image priority="true" width={400} height={600} src="/img/img_jorge_torres.png" alt="Jorge Torres image"/>

            <div>
              <div className="reveal fade-name">
                <p>Jorge Torres.</p>
              </div>

              <p className="reveal fade-evident">Who else?</p>
            </div>
          </div>
        </div> 
      </div>
      
      <div className='container'>
        <p className="fade-show center">{text}</p>
      </div>

      <main style={{padding: "0 0 3rem 0", marginTop: "8rem", backgroundColor: activetheme === 'dark' ? "rgb(34, 49, 63)" : "#cbe1fa" }}>
        <Box className={styles.show}>
          <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show"
            className={styles.label}
            sx={{mb:3, mt: 2, color: activetheme === 'dark' && 'var(--grey)'}}
          />
          <Box className={styles.photos}>
            <Grow in={checked}>{photoA}</Grow>
          
            <Grow
              in={checked}
              style={{ transformOrigin: '0 0 0' }}
              {...(checked ? { timeout: 1000 } : {})}
            >
              {photoB}
            </Grow>
          </Box>
        </Box>
      </main>

      <div className="container">
        <p className={styles.description}>{description}</p>

        <div className={styles.technologies}>
          <div className={styles.technology}>
            {currentTechologies.map(technology => (
              <div key={technology.id} className={styles.icons}>
                <Technology
                  technology={technology}
                />
              </div>  
            ))}
          </div> 
        </div>
      </div>

    </Layout>
  )
}

export async function getServerSideProps() {


    const urlAbout = `${process.env.API_URL}/abouts`;
  
    const [resAbout, ] = await Promise.all([
      fetch(urlAbout)

    ])
  
    const [about, ] = await Promise.all([
      resAbout.json()
    ])
  
    return {
      props: {
        about
    }
  }
}

export default About