import { Text } from '../Text'
import styles from './Card.module.css'
import { ContentContainer } from '../ContentContainer'



const menuData = [
  { id: 1, name: 'Americano', price: '$2.50', image: '/americano.png'},
  { id: 2, name: 'Cappuccino', price: '$2.50', image: '/cappuccino.png'}
]

export const Cards = () => {
  return (
    <section className={styles.products}>
      <ContentContainer className={styles.content}>
        <div className={styles.grid}>
        {menuData.map(item => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} className={styles.coffeeImage} alt={item.name} />


            <Text variant="h2">{item.name}</Text>
            <Text variant="p">{item.price}</Text>
            <div className={styles.priceTag}>{item.price}</div>
          </div>
        ))}
        </div>
        <div className={styles.infoBlock}>
          <Text variant="h2">Lorem Ipsum is simply dummy text</Text>
          <Text variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Text>
          <button className={styles.learnMore}>Learn More</button>
        </div>
      </ContentContainer>
    </section>
  )
}