
import { Text } from '../Text'
import styles from './Card2.module.css'
import { ContentContainer } from '../ContentContainer'
import card2p from '../../../assets/card2pic.jpeg'

export const Card2 = () => {
  return (

    <section className={styles.cards2}>
      <ContentContainer className={styles.content}>
        <div className={styles.txt}>
          <div className={styles.left}>
          
       <span>Lorem is a simple dummy text of the printing and typesetting industry</span>
        <Text variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry's standard dummy text ever since the 1500's.
            Lorem is a simple dummy text of the 
            printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry's standard dummy text ever since the 1500's, when an uknown printer took gallery 
            of  type and scrembled it to make a type specimen book.
          </Text>
       <Text>
      <button className={styles.learnMore}>Learn More</button></Text>
</div>
      <div className={styles.right}>
         <img src={card2p} />
    </div>
    </div>
</ContentContainer>
</section>

    
  )
}
