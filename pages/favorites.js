import usePortfolio from '../hook/usePortfolio'
import styles from '../styles/Favorites.module.css'
import Layout from '../components/Layout'
import ProjectPreview from '../components/ProjectPreview';

const Favorites = () => {

  const {favorites} = usePortfolio();
  
  return (
    <Layout 
        page="Favorites"
    >
      <main className='container'>
        {favorites.length ? 
          <section className="fade-show">

            <h1>Favorite projects</h1>

            <p className="center">Thanks for taking a look at my projects, here are the ones you liked the most. 
              Don't worry, you won't lose this information when you leave my portfolio,
              your favorite projects will still be here!<span> Swipe left on the project to see details, 
              swipe right to remove the project from your favorite projects list.</span></p>

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

              <p className="center">You don't have favorite projects yet, select as favorites those that
                you like the most and they will appear on this page. <span> Don't worry, you won't lose this information when you leave my portfolio,
                your favorite projects will still be here!</span></p>
          </section> 
          )}
      </main>
       
    </Layout>    
  )
}

export default Favorites