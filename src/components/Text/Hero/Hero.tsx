import { Text } from '../Text'
import styles from './Hero.module.css'
import { ContentContainer } from '../ContentContainer'
import coffeeIcon from '../../../assets/icons8-coffee-50-2.png'
import Icon from '../../../assets/icons8-coffee-50-3.png'
import thirdIcon from '../../../assets/icons8-coffee-50-4.png'
import anotherIcon from '../../../assets/icons8-coffee-50.png'
import cofe from '../../../assets/heroo.jpg'


export const Hero = () => {
  return (
    <section className={styles.Hero}>
      <ContentContainer className={styles.content}>
        <div className={styles.info}>
          <div className={styles.left}>
          
       <span>Coffee</span>
       <span>The Best For You</span> 
      
      <Text>
      <button className={styles.viewMenu}>View Menu</button></Text>
         <div className={styles.iconRow}>
            <img src={coffeeIcon} />
            <img src={Icon} />
            <img src={thirdIcon} />
            <img src={anotherIcon} />
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