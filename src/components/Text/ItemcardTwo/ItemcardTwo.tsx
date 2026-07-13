import React from 'react'
import styles from '../Cardthree/Cardthree.module.css'
import { Text } from '../Text'
import { FiShoppingCart } from "react-icons/fi";
import { VscHome } from "react-icons/vsc";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import icon1 from '../../../assets/icons8-coffee-50-2.png'
import icon2 from '../../../assets/icons8-coffee-50-3.png'
import icon3 from '../../../assets/icons8-coffee-50-4.png'
import icon4 from '../../../assets/icons8-coffee-50.png'
import card2pic from'../../../assets/card2pic.jpeg'

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
        <IoIosArrowBack className={styles.icon} />
      </div>
      
  <span className={styles.title}>Coffee</span> 
  <Text>
<button className={styles.viewMenu}>View Menu</button></Text>
<div className={styles.iconR2}>
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
  <div className={styles.grid}>  
    
    
    <div className={styles.card}>
      <img className={styles[imgClass]} src={image} alt ={'image: ${description}'}/>
      <span className={styles.name}>{name}</span> 
      <span className={styles.description}>{description}</span> 
      
      <div className={styles.iconRow}>
        <FiShoppingCart className={styles.icon} />
      </div>

      <span className={styles.price}>{price}</span>
    </div>

  
      <div className={styles.card}>
      <img className={styles[imgClass]} src={image} alt ={'image: ${description}'}/>
      <span className={styles.name}>{name}</span>
      <span className={styles.description}>{description}</span>
      
      <div className={styles.iconRow}>
        <FiShoppingCart className={styles.icon} />
      </div>

      <span className={styles.price}>{price}</span>
    </div>
</div>



    <div className={styles.card22}>
      

      <span className={styles.name}>Mocaccino</span> 
      <span className={styles.description}>Mix coffee with chocolate
          and fresh milk. </span>
      
      <img src={card2pic} alt="Latte Grand" className={styles.imageBtm}/>
    </div>
      <div className={styles.icons4}>
       <VscHome/>
       <PiShoppingCartSimpleBold/>
       <LuUserRound/>
       <RiMenu3Fill/>
      </div>
    </div>  
</div>
    
  )
}