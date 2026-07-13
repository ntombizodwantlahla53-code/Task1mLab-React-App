import { Text } from '../Text'
import images from './../../../assets/Americano.jpg'
import image from './../../../assets/cappucino.jpg'
import {useState} from 'react'
import  { Itemcard } from '../Itemcard/Itemcard'
import styles from './../ZodwaContainer/ZodwaContainer.module.css'


export const ZodwaContainer = () => {
const [zodwa] = useState([
  { id: 1, name: 'Americano', price: 2.50, image: images, 
    description: '100% Natural Arabica or Robusta, 30ml cup', imgClass:'cardImg'},
  { id: 2, name: 'Cappuccino', price: 2.50, image: image, description:'Coffee 50%, milk 50%, 280ml', imgClass:'cardImgSpecial'}
])

   return (
     <div className={styles.content}>
         <div className={styles.item}>
         {
           zodwa && zodwa.length >0 && zodwa.map(product =>{
             return <Itemcard
             name={product.name}
             description={product.description}
             image={product.image}
             price={product.price}
             imgClass={product.imgClass}
             />
     
         }
       )
     
     }
     
     <div className={styles.infoText}>
      
          <Text variant="h2">Lorem Ipsum is<br/> simple dummy text of</Text>
          <Text variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Text>
          <Text>
      <button className={styles.learnMore}>Learn More</button></Text>
     </div>
     </div>
     </div>
   )
 }
