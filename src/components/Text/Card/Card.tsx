import { Text } from '../Text'
import styles from './Card.module.css'
import { ContentContainer } from '../ContentContainer'
import image from '../../../assets/Americano.jpg'



const menuData = [
  { id: 1, name: 'Americano', price: '$2.50', image: '/Americano.jpg'},
  { id: 2, name: 'Cappuccino', price: '$2.50', image: '/cappucino.jpg'}
]

export const Cards = () => {
  return (
    <section className={styles.cards}>
      <ContentContainer className={styles.content}>
        <div className={styles.grid}>
          {menuData.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={image} className={styles.coffeeImage} />
              <div className={styles.name}>
              <span>"h2"</span></div>
              <Text variant="h2">{item.name}</Text>
              <Text variant="p">{item.price}</Text>
            </div>
          ))}
        </div>
        <div className={styles.infoBlock}>
          <Text variant="h2">Lorem Ipsum is simply dummy text of</Text>
          <Text variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry's standard dummy text ever since the 1500's.
          </Text>
          <button className={styles.learnMore}>Learn More</button>
        </div>

        
      </ContentContainer>
    </section>
  );
}