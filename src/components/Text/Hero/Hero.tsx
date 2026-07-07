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
    <section className={styles.hero}>
      <ContentContainer>
<<<<<<< HEAD
       <Text variant="h1">Coffee</Text>
         <Text variant="h1">The Best For You</Text>
        <Text>
         <button className={styles.learnMore}>Learn More</button></Text>
       <div className={styles.categories}>
       </div>
       <div className={styles.heroImage}>
       <img src={cofe} />
        </div>
      <div className={styles.iconRow}>
        <img src={coffeeIcon} />
        <img src={Icon} />
        <img src={thirdIcon} />
        <img src={anotherIcon} />
            <img src="/../../../assets/heroo.jpg"  />
            <img src="../../../assets/icons8-coffee-50-3.png" />
            <img src="../../../assets/icons8-coffee-50-4.png" />
            <img src="../../../assets/icons8-coffee-50.png"/>
=======
        <div className={styles.info}>
          <div>
       <Text variant="h1">Coffee</Text> 
      
      <Text>
      <button className={styles.viewMenu}>View Menu</button></Text>
         <div className={styles.iconRow}>
            <img src={coffeeIcon} />
            <img src={Icon} />
            <img src={thirdIcon} />
            <img src={anotherIcon} />
>>>>>>> fb3f792190ec0fb03de38f6a8a6d82dbc482f518
          </div>
|</div>
         <img src={cofe} className={styles.heroImage}/>
         
          <div className={styles.left}>
         
          </div>
          
        </div>  
        
        </ContentContainer>
   </section>
  )
}