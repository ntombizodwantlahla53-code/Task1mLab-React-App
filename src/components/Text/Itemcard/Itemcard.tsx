import React from 'react'
import styles from '../ZodwaContainer/ZodwaContainer.module.css'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

export type ItemcardProps = {
    name: string;
    description?: string;
    image: string;
    price?: number;
    imgClass:string;
   
}
export const Itemcard: React.FC<ItemcardProps> = ({name, description, image, price, imgClass}) => {
  return (
    
    <div className={styles['ntombi']}>
      
      <img className={styles[imgClass]} src={image} alt ={'image: ${description}'}/>
      <div className={styles.textntombi}>
      <span className={styles.name}>{name}</span>
      <span className={styles.description}>{description} </span>
</div>
      <div className={styles.iconRow}>
        <FiShoppingCart  className={styles.icon} />
        <FaRegHeart className={styles.icon} />
      </div>
      <span className={styles.price}>${price}</span>
      </div>
      

    
  )
}
