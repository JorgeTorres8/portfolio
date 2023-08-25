import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import styles from '../styles/Work.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Work = ({work}) => {
  
  const {client, testimonials, name, image, url, page, github, Bgithub, workUrl } = work;

  return (
    <>
      <div className={styles.work}>

        <div className={styles.testimonials}>
            <p className={styles.client}>{client}</p>

            <p className={styles.opinion}>❝ {testimonials}❞ &#8212; <span>{name} of {client}</span></p>

            <Image width={150} height={90} src={image.url} alt={`Logo ${client}`}/>
        </div>

        <div className={styles.flex}>
          <svg viewBox="-130 20 200 25">
            <path id="MyPath" fill="none" stroke="var(--orange)"
                d="m10,45c53,-33 96,3 96,3" />
            <text fill="var(--color-text-secondary)"><textPath className={styles.curve} href="#MyPath">Scroll Me!</textPath></text>
          </svg>


          <div className={styles.wrapper}>
              <Image layout='responsive' width={100} height={170} src={page.url} alt={`Image ${client} website`}/>
          </div>
        </div>   

      </div>

      <div className='container reveal fade-bottom'>

        <div className={styles.redirect}>
          <div className={styles.links}>

            {github &&
              <Link href={`${github}`}>
                <a target="_blank" className={styles.code}>
                  <p>Github code</p>

                  <GitHubIcon sx={{fontSize: 32}}/>
                </a>
              </Link>
            }

            {workUrl &&
              <Link href={`/project/${workUrl}`}>
                <a className={styles.code}>
                  See {client} project
                </a>
              </Link>
            }

            {url &&
              <Link href={`${url}`}>
                <a target="_blank" className={styles.code}>
                  <LanguageIcon sx={{fontSize: 32}}/>
                  {client} page
                </a>
              </Link>
            }

            {Bgithub &&
              <Link href={`${Bgithub}`}>
                <a target="_blank" className={styles.code}>
                  <p>Backend code</p>
                  
                  <IntegrationInstructionsIcon sx={{fontSize: 32}}/>
                </a>
              </Link>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Work