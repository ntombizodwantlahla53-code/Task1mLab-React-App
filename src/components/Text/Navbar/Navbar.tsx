import { Text } from '../Text'
import styles from './Navbar.module.css'
import { ContentContainer } from '../ContentContainer'
import { LuCoffee } from "react-icons/lu";



export const Navbar =() => {

  return (
    <nav>
        {/*<div className={styles.content}>*/}
       <ContentContainer className={styles.content}>
        
            
            <div className={styles.heading}>
          <Text variant="h2">Flavored   <LuCoffee/></Text>
          <Text variant="p">Waking up to something Special
            
        </Text>
        </div>

            
            <div className={styles.links}>
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
