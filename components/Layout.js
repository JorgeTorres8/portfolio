import Head from "next/head"
import { useEffect } from "react";
import { useRouter } from "next/router"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import usePortfolio from "../hook/usePortfolio"
import styles from '../styles/Layout.module.css'
import Header from "./Header"
import Modal from "./Modal"
import Footer from "./Footer";

const Layout = ({children, page, home}) => {

  const router = useRouter();

  const {open, setValue} = usePortfolio();

  useEffect(() => {
    if(router.pathname === '/') {
      setValue("home");
    } else if (router.pathname === '/about') {
      setValue("about");
    } else if (router.pathname === '/contact' ) {
      setValue("contact");
    } else if (router.pathname === '/favorites') {
      setValue("favorites");
    }
  })
  
  return (
    <> 
      <Head> 
        <title>{`Jorge Torres | ${page}`}</title>
        <meta property="og:site_name" content="Portfolio | Jorge Torres" />
        <meta property="og:title" content="Welcome to my portfolio" />
        <meta property="og:description" content="In this web application you will learn about me and my skills as a web developer. Implementing varieties of sections including the projects carried out in this learning time." />
        <meta property="og:url" content="https://jorgetorres.xyz"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/readme/portfolio_img.png"/>
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <div className={styles.wrapper}>

        {router.pathname === '/project/[url]'  ? 
          <></>
          : (
            <Header
              home={home}
            />
          )
        }
          {children}

          <Footer/>
      </div>
      
      {open && (
        <Modal/>
      )}

      <ToastContainer/>
    </>
  )
}

export default Layout