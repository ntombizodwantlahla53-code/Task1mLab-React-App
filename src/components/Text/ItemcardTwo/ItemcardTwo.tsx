import React from 'react'
import styles from '../Cardthree/Cardthree.module.css'
import { Text } from '../Text'
import { FiShoppingCart } from "react-icons/fi";
import icon1 from '../../../assets/icons8-coffee-50-2.png'
import icon2 from '../../../assets/icons8-coffee-50-3.png'
import icon3 from '../../../assets/icons8-coffee-50-4.png'
import icon4 from '../../../assets/icons8-coffee-50.png'

export type ItemcardTwoProps = {
    name: string;
    description?: string;
    image: string;
    price?: number;
    imgClass:string;
   
}
export const ItemcardTwo: React.FC<ItemcardTwoProps> = ({name, description, image, price, imgClass}) => {
  return (
    
<div className={styles['ntombi2']}>
      <div className={styles.menuCard}> 
<div className={styles.iconR}>
        <FiShoppingCart className={styles.icon} />
      </div>
      
  <span className={styles.title}>Coffee</span> 
  <Text>
<button className={styles.learnMore}>Learn More</button></Text>
<div className={styles.iconR2}>
        <FiShoppingCart className={styles.icon} />
      </div>
  <div className={styles.grid}>  
    
    
    <div className={styles.card}>
      <img className={styles[imgClass]} src={image} alt ={'image: ${description}'}/>
      <span className={styles.name}>Americano</span> 
      <span className={styles.description}>100% Natural Arabica or Robusta</span> 
      
      <div className={styles.iconRow}>
        <FiShoppingCart className={styles.icon} />
      </div>

      <span className={styles.price}>R25.00</span>
    </div>

  
      <div className={styles.card}>
      <img className={styles[imgClass]} src={image} alt ={'image: ${description}'}/>
      <span className={styles.name}>Americano</span>
      <span className={styles.description}>100% Natural Arabica or Robusta</span>
      
      <div className={styles.iconRow}>
        <FiShoppingCart className={styles.icon} />
      </div>

      <span className={styles.price}>R25.00</span>
    </div>
</div>



    <div className={styles.card22}>
      

      <span className={styles.name}>Mocaccino</span> 
      <span className={styles.description}>Mix coffee with chocolate
          and fresh milk.</span> 
      
      
    </div>
      <div className={styles.icons4}>
       <img src={icon1}></img>
       <img src={icon2}></img>
       <img src={icon3}></img>
       <img src={icon4}></img>

      </div>
    </div>  
</div>
    
  )
}