import { Text } from '../Text'
import styles from './Hero.module.css'
import { ContentContainer } from '../ContentContainer'
import cofe from '../../../assets/heroo.jpg'
import { LuCoffee } from "react-icons/lu";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <ContentContainer className={styles.content}>
        <div className={styles.info}>
          <div className={styles.left}>
          
       <span>Coffee</span>
       <span>The Best For You</span> 
      
      <Text>
      <button className={styles.viewMenu}>View Menu</button></Text>
      <div className={styles.iconRow}>
        <LuCoffee/>
      </div>
            
        
          </div>
|
          <div className={styles.right}>
         <img src={cofe} />
          </div>
          </div>
          
        
       </ContentContainer>
      </section>

  )
}