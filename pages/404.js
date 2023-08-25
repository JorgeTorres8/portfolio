import usePortfolio from "../hook/usePortfolio";
import React from 'react'
import Link from 'next/link'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import styles from '../styles/notFound.module.css'

const notFound = () => {
  const {activetheme} = usePortfolio();
  return (
    <div className={styles.notFound}>
        <SentimentVeryDissatisfiedIcon sx={{fontSize: 80,  color: activetheme === 'dark' && 'var(--white)'}}/>
        <h1>Page not found</h1>
        <Link href="/">
            <Button sx={{fontSize: 13}} size="large" variant="contained" startIcon={<HomeIcon />}>Return to main page</Button>
        </Link>
    </div>
  )
}

export default notFound