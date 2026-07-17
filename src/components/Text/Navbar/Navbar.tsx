import { Text } from '../Text'
import styles from './Navbar.module.css'
import { FiCoffee } from "react-icons/fi";



export const Navbar =() => {

  return (
    <nav>
        <div className={styles.content}>

            <div className={styles.heading}>
          <Text variant="h2">Flavored   <FiCoffee/> </Text>
          <Text variant="p">Waking up to something Special
            
        </Text>
        </div>

            
            <div className={styles.links}>
                  <a href='/#' className={styles.link}>Home</a>
                  <a href='/#' className={styles.link}>Coffee Menu</a>
                  <a href='/#' className={styles.link}>About Us</a>
                  <a href='/#' className={styles.link}>Contact Us</a>
                <Text><button className={styles.sNow}>Coffee  Shop</button></Text>
                 
             </div>
             
       
            
             </div>

    </nav>
  )
}
