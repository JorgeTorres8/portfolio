import React from 'react'
import Image from 'next/image';
import styles from '../styles/Deployment.module.css'

const Deployment = ({deploy}) => {

  const {name, img} = deploy;

  return (
    <div className={styles.group}>
        <p className={styles.font}>{name}</p>
        <Image width={90} height={100} src={img.url} alt={`${name} image`}/>
    </div>
  )
}

export default Deployment