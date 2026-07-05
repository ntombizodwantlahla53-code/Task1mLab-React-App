import React from 'react'
import { Text } from '../Text'
import styles from './Navbar.module.css'
import { ContentContainer } from '../ContentContainer'

export const Navbar =() => {

  return (
    <nav>
        {/*<div className={styles.content}>*/}
        <ContentContainer className={styles.content}>
            <Text variant={'h2'} style={{margin:0}}>Flavored</Text>
            <div className={styles.link}>
                  <a href='/#' className={styles.link}>Home</a>
                  <a href='/#' className={styles.link}>Coffee Menu</a>
                  <a href='/#' className={styles.link}>About Us</a>
                  <a href='/#' className={styles.link}>Contact Us</a>
                  <a href='/#' className={styles.link}>Coffee Shop</a>
                  
                    
                  
             </div>
        </ContentContainer>
            
             {/*</div>*/}

    </nav>
  )
}
