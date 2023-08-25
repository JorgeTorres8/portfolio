import Image from "next/image";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../styles/Index.module.css'
import usePortfolio from "../hook/usePortfolio";
import Layout from "../components/Layout"
import List from "../components/List";
import Work from '../components/Work';

export default function Home({home, works}) {

  const {projects} = usePortfolio();

  return (
    <Layout
      page="Welcome"
      home={home[0]}
    >

      <div className="container">
        <h2>Welcome</h2>

        <div className="reveal fade-right">
          <div className={styles.welcome}>
            <div className={styles.text}>
              <p className="center">
                Thanks for being here! obviously the goal of a portfolio is to show visitors your knowledge as a developer. 
                The projects I&apos;ve done throughout this learning process are as important as the portfolio you&apos;re looking at right now.
                The listed projects have information of interest, including the link to their GitHub repository and some of them have a link
                to the app demo, so you can test it.
              </p>

              <p className="center"> I hope you like the 3d images I made. Feel welcome to check out any of the <span>content below!</span></p>

            </div>
            
            <Image layout='responsive' width={180} height={160} src="/img/welcome.png" alt="Welcome image"/>
          </div>
        </div>
      </div>

      <main className={styles.projects}> 
        <div  className="container">
          <h3 className={styles.center}>Projects</h3>
            <p className="center">Here is a list of projects I have done as my learning progressed,
              using a variety of technologies to make each project something original.
            <span> Slide the project to the left or right.</span></p>
        
          <div className="reveal fade-bottom">
            <List
              projects={projects}
            />
          </div>
        </div>
      </main>

      <section className={styles.roundedsplit}>
        <svg className={styles.separator} id="slit" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path className={styles.slitPath2} d="M50 100 C49 80 47 0 40 0 L47 0 Z" />
          <path className={styles.slitPath3} d="M50 100 C51 80 53 0 60 0 L53 0 Z" />
          <path className={styles.slitPath1} d="M47 0 L50 100 L53 0 Z" />
        </svg>
        
        <div className="container">
          <p className={styles.work}>Work</p>
          {works.map( work => (
            <Work
              key={work.id}
              work={work}
            />
          ))}
        </div>
      </section>

      <div className="container">
        <h5 className={styles.right}>About my portfolio</h5>

        <div className="reveal fade-left">
          <div className={styles.grid}>
            
            <div className={styles.down}>
              <Image layout='responsive' width={180} height={160} src="/img/portfolio.png" alt="About portfolio image"/>
            </div>
            
          
            <div className={styles.up}>
              <div className={styles.text}>
                <p className="center">
                  One of the objectives is to give a sample of the knowledge that I have acquired since my first steps in the world of development.
                  Day after day when I learn new things I take a little time to think about how to update my portfolio, 
                  since this web page is a graphic sample of the effort and work that I have dedicated to my training as a developer.
                </p>

                <p className="center">When I have enough time I will incorporate the new learning that I have obtained in this web application.
                <span>Thanks for reading!</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.flex}>
          <Link href="https://github.com/JorgeTorres8/portfolio">
            <a target="_blank" className={styles.link}>
              <div className={styles.align}>
              <GitHubIcon className={styles.slope} sx={{fontSize: 25}}/>
                See the code of my portfolio
              </div>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {


  const urlHome = `${process.env.API_URL}/homes`;
  const urlWorks = `${process.env.API_URL}/works`;

  const [resHome, resWorks] = await Promise.all([
    fetch(urlHome),
    fetch(urlWorks)
  ])

  const [home, works] = await Promise.all([
    resHome.json(),
    resWorks.json(),
  ])

  return {
    props: {
      home,
      works
    }
  }
}