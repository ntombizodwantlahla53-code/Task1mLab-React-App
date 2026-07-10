import { Text } from '../Text'
import styles from './Card.module.css'
import { ContentContainer } from '../ContentContainer'
import image from '../../../assets/Americano.jpg'
import {useState} from 'react'
import {Itemcard} from '../Itemcard/Itemcard'

export const Cards = () => {
const [cards] = useState([
  { id: 1, name: 'Americano', price: 2.50, image: '/Americano.jpg', description: 'Coffee'},
  { id: 2, name: 'Cappuccino', price: 2.50, image: '/cappucino.jpg', description:'description'}
])


  return (
    <div className={styles.namess}>
    {
      cards && cards.length >0 && cards.map(product =>{
        return <Itemcard
        name={product.name}
        description={product.description}
        imgLink={product.image}
        price={product.price}
        />

    }
  )

}
</div>
  );
}