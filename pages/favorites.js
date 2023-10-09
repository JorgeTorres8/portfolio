import usePortfolio from '../hook/usePortfolio'
import SwipeIcon from '@mui/icons-material/Swipe';
import styles from '../styles/Favorites.module.css'
import Layout from '../components/Layout'
import ProjectPreview from '../components/ProjectPreview';

const Favorites = () => {

  const {favorites,activetheme} = usePortfolio();
  
  return (
    <Layout 
        page="Favorites"
    >
      <main className='container'>
        {favorites.length ? 
          <section className="fade-show">

            <h1>Favorite projects</h1>

            <p className="center">Thanks for taking a look at my projects, here are the ones you liked the most. 
              Don&apos;t worry, you won&apos;t lose this information when you leave my portfolio,
              your favorite projects will still be here!</p>

              <div className='swipe-div'>
                  <p>Swipe project</p>
                  <SwipeIcon
                    className='swipe-icon'
                    sx={{fontSize: 30, color: activetheme === 'dark' && 'var(--white)'}}
                  />
              </div>

              <div className={styles.grid}>
                {favorites.map(favourite => (
                  <ProjectPreview
                    key={favourite.url}
                    favourite={favourite}
                  />
                ))}
              </div>
          </section>
          
          : (

          <section className='fade-show main'>
              <h1>No favorite projects</h1>

              <p className="center">You don&apos;t have favorite projects yet, select as favorites those that
                you like the most and they will appear on this page.{" "}<span>{" "}Don&apos;t worry, you won&apos;t lose this information when you leave my portfolio,
                your favorite projects will still be here!</span></p>
          </section> 
          )}
      </main>
       
    </Layout>    
  )
}

export default Favorites