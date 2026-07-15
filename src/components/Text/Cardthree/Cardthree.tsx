import { Text } from '../Text'
import images from './../../../assets/Americano.jpg'
import {useState} from 'react'
import  { ItemcardTwo } from '../ItemcardTwo/ItemcardTwo'
import styles from './../Cardthree/Cardthree.module.css'
import { FaRegHeart } from "react-icons/fa";
import latte from "../../../assets/Latte.jpg";
import { SiApple } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";


export const Cardthree = () => {
const [zodwa] = useState([
  { id: 1, name: 'Americano', price:2.50, image: images, 
    description: '100% Natural Arabica or Robusta, 30ml cup', imgClass:'cardImg'},
 
])

   return (
     <div className={styles.content}>
         <div className={styles.item}>
         {
           zodwa && zodwa.length >0 && zodwa.map(product =>{
             return <ItemcardTwo
             name={product.name}
             description={product.description}
             image={product.image}
             price={product.price}
             imgClass={product.imgClass}
             />
     
         }
       )
     
     }
     
    <div className={styles.card23}>
<div className={styles.iconR}>
        <IoIosArrowBack className={styles.icon} />
      </div>
      <img src={latte} alt="Latte Grand" className={styles.image}/>
      <h2 className={styles.title2}>Latte Grand</h2>
      <p className={styles.description}>
         Lorem Ipsum is simply dummy text of the printing and typesetting
            industry's standard dummy text ever since the 1500's.
            Lorem is a simple dummy text of the 
            printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry's standard dummy text ever since the 1500's, when an uknown printer took gallery 
            of  type and scrembled it to make a type specimen book.
      </p>
      <h2 className={styles.title2}>Total Price</h2>

      <div className={styles.priceSection}>
          
          <h3 className={styles.price2}>$3.50 </h3>
            <button className={styles.heartButton}>
          <FaRegHeart /></button>
        <button className={styles.cartButton}>
        Add To Cart<button className={styles.plusButton}>
        +
      </button>
      </button>
      
    
</div>
      </div>
<div className={styles.infoText}>

        <Text variant="h2">
          App is Available
        </Text>

        <Text variant="p">
          Lorem Ipsum is simply dummy text of the printing<br/> and
          typesetting industry. Lorem Ipsum has been<br/> the
          industry's standard dummy text ever since the<br/> 1500s,
          when an unknown printer took a galley of<br/> type and
          scrambled it to make a type specimen book.
        </Text>
        <div className={styles.storeButtons}>
          <div className={styles.iconn1}>
            <SiApple /></div>
          <div className={styles.iconn1}>
            <IoLogoGooglePlaystore />

        </div>

        </div>
        </div>
     </div>
     <h2 className={styles.lastline}>LET'S TALK</h2>
     <div className={styles.lasttext}>
<Text variant="h2">
          Want to Reserve a Table? 
        </Text>
        <button className={styles.Contact}>Contact Now</button>
        </div>
        <div className={styles.line}>
        </div>
        <div className={styles.Uline}>
        <Text variant="p">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the
          industry's<br/> standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and
          scrambled it to<br/> make a type specimen book.
        </Text>
        </div>
     </div>
   )
 }