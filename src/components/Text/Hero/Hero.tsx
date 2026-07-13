import { Text } from '../Text'
import styles from './Hero.module.css'
import { ContentContainer } from '../ContentContainer'
import cofe from '../../../assets/heroo.jpg'
import icon1 from '../../../assets/icons8-coffee-50-2.png'
import icon2 from '../../../assets/icons8-coffee-50-3.png'
import icon3 from '../../../assets/icons8-coffee-50-4.png'
import icon4 from '../../../assets/icons8-coffee-50.png'

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
        <div className={styles.iconn}>
       <img src={icon1}></img></div>
       <div className={styles.iconn}>
       <img src={icon2}></img></div>
       <div className={styles.iconn}>
       <img src={icon3}></img></div>
       <div className={styles.iconn}>
       <img src={icon4}></img>
</div>
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