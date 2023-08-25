import * as React from 'react';
import { currentTechologies } from '../../includes/technologies';
import Link from 'next/link';
import Popover from '@mui/material/Popover';
import StarsIcon from '@mui/icons-material/Stars';
import GitHubIcon from '@mui/icons-material/GitHub';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import { Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from '../../styles/Project.module.css'
import usePortfolio from '../../hook/usePortfolio';
import Layout from '../../components/Layout'
import Technology from '../../components/Technology';
import Details from '../../components/Details';
import Deployment from '../../components/Deployment';
import Dial from '../../components/Dial';
import Icon from '../../components/Icon';
import ToggleButton from '../../components/ToggleButton';

const Project = ({project})  => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const {favorites, activetheme} = usePortfolio();
  
  const {id, name, background, github, Bgithub, deployments, deployment, url, img_1} = project[0];

  const NewFavourite = {
    name: name,
    url: url,
    image: img_1
  }
  const galaxyFold = useMediaQuery('(min-width: 280px) and (max-width: 320px)');
  return (
    <Layout
      page={`${name}`}
    >
      <>
        <Dial/>
      
        <header className={styles.header}>
          <div className={styles.title}>
            <h1 className={styles.name}>{name}</h1>
            
            {favorites.some(favoriteState => favoriteState.url === url) ? 
              <StarsIcon
                sx={{color: '#eb8400', fontSize : galaxyFold ? 25 : 40}}
              /> : (
                <div className={styles.icon}>
                  <Icon
                    NewFavourite={NewFavourite}
                  />
                </div>
)
            }
          </div>

          <ToggleButton/>
            
          <style jsx>{`
            header {
              background-image: linear-gradient(to bottom, rgb(0 0 0 / .88), rgb(0 0 0 /.92 )), url(${background.url});
              background-size: cover;
              background-position: center;
              padding: 5rem 0;
            }
            @media(min-width: 768px) {
              header {
                padding: 15rem 0;
              }
            }
          `}</style>
        </header>
          
        <div style={{backgroundColor: activetheme === 'dark' ? "rgb(34, 49, 63)" : "#cbe1fa" }} className={styles.technologies}>
          <p>Technologies used</p>
            <nav className={styles.technology}>
              {currentTechologies.map(technology => (
                technology.project.includes(id) && 
                    <Technology
                    key={technology.id}
                    technology={technology}
                  />
                )
              )}
            </nav>
        </div>

        <main className='container'>

          <Details
            project={project}
          />
          
        </main>
        
        {github && 
         <div className={styles.background}>
            <p className={styles.center}>Take a look for yourself!</p>

            <div className='container reveal fade-bottom'>
              
              {github &&
                <div className={styles.github}>
                  <>
                    <p>You can read the code on Github at the following link</p>
                    
                    <Stack
                      aria-owns={open ? 'mouse-over-popover' : undefined}
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                    >
                      <Link href={`${github}`}>
                        <a target="_blank">
                          <GitHubIcon sx={{fontSize: 90}}/>
                        </a>
                      </Link>
                    </Stack>
                  </>

                  {Bgithub &&
                    <>
                      <p>You can read the backend code on Github at the following link</p>

                      <Stack
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                      >
                        <Link href={`${Bgithub}`}>
                          <a target="_blank">
                            <IntegrationInstructionsIcon sx={{fontSize: 90}}/>
                          </a>
                        </Link>
                      </Stack>
                    </>}
                </div>
              }
              
              <div className={styles.deployment}>
                {/*deployment &&
                  <p>The Deployment of this app is done through</p> */          
                }

                {deployment && deployments.map(deploy => (
                  <Deployment
                    key={deploy.id}
                    deploy={deploy}
                  />              
                ))}
              </div>

              {deployment &&
                <div className={styles.flex}>
                  <Link href={deployment}>
                    <a target="_blank" className={styles.link}>Test the {name} project</a>
                  </Link>
                </div>
              }
            </div>

            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus>
                <Stack sx={{p:1 }}>JorgeTorres8/{name}</Stack>
            </Popover>
          </div>
        }
       
      </>
  </Layout>
  )
}

export async function getServerSideProps({query: {url}}) { 

  const urlProject = `${process.env.API_URL}/projects?url=${url}`;
  const response = await fetch(urlProject);
  const project = await response.json();

  return {
    props: {  
      project
    }
  }
}

export default Project