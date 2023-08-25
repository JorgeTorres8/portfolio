import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Contact.module.css'
import usePortfolio from '../hook/usePortfolio';
import Layout from '../components/Layout';

const Contact = ({contact}) => {
   const {text} = contact[0];

   const {handleGmail} = usePortfolio();

   const imageContact = [
        {id: 1, url: 'https://github.com/JorgeTorres8', img: '/img/github.png', alt: 'Github Image'},
        {id: 2, url: 'https://www.linkedin.com/in/jorge-torres8/', img: '/img/linkedin.png', alt: 'Linkedin Image'}
    ]

  return (

    <Layout
        page="Contact"
    >
        <main className='container fade-show'>
            <h1>Contact</h1>

            <div className={styles.grid}>
    
                <Image priority={true} layout='responsive' width={200} height={170} src="/img/contact.png" alt="Contact"/>
                            
                <div className={styles.text}>
                    <p className="center">
                        {text}
                    </p>
                </div>
            </div>
        </main>

        <div className={styles.prueba}>

            <div className={styles.meet}>
                <div className='container reveal fade-bottom'>
                
                    <h2> <span className={styles.slope}>&#60;</span> Let&apos;s meet!{" "}<span className={styles.slope}>/&#62;</span></h2>

                    <p className="center">You can contact me by any of these ways, i will reply to you as soon as possible.</p>

                    <div className={styles.contact}>

                        <div className={styles.icons}>
                            {imageContact.map( imgContact => (
                                <div
                                    key={imgContact.id}
                                >
                                    <Link href={imgContact.url}>
                                        <a target="_blank">
                                            <Image width={40} height={35} src={imgContact.img} alt={imgContact.alt}/>
                                        </a>
                                    </Link>
                                </div>
                            ))}

                            <div className={styles.gmail} onClick={() => handleGmail()}>
                                <Image width={40} height={35} src='/img/gmail.png' alt='Gmail Image'/>
                            </div>

                        </div>
                    </div>                
                </div>
            </div>   
        </div>
    </Layout>
    
  )
}

export async function getServerSideProps() {


    const urlContact = `${process.env.API_URL}/contacts`;
  
    const [resContact] = await Promise.all([
      fetch(urlContact)
    ])
  
    const [contact] = await Promise.all([
      resContact.json()
    ])
  
    return {
      props: {
        contact
    }
  }
}

export default Contact