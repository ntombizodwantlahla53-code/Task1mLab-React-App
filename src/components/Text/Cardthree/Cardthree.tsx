
import { Text } from '../Text'
import styles from './Cardthree.module.css'
import { ContentContainer } from '../ContentContainer'
import image from '../../../assets/Americano.jpg'
import { IoIosArrowBack } from "react-icons/io";
import { PiAppleLogoFill } from "react-icons/pi";
import { IoLogoGooglePlaystore } from "react-icons/io5";

    const menuData = [
  { id: 1, name: 'Americano', price: '100%', image: '/Americano.jpg', Image: '/cappucino.jpg'},
  { id: 2, name: 'Cappuccino',  image: '/cappucino.jpg'}

]

export const Cardthree = () => {
  return (
    <section className={styles.cards}>
      <ContentContainer className={styles.content}>
        <div className={styles.grid}>
          {menuData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.name}>
                <IoIosArrowBack />
              <span>Coffee</span></div>
              <div><button className={styles.viewMenu}>View Menu</button></div>
              <img src={image} className={styles.coffeeI} />
              
              <Text variant="h2">{item.name}</Text>
              <Text variant="p">{item.price}</Text>
            </div>
          ))}
        </div>
        <div className={styles.infoText}>
          <Text variant="h2">App is Available</Text>
          <Text variant="p">
            Lorem is a simple dummy text of the 
            printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry's standard dummy text ever since the 1500's, when an uknown printer took gallery 
            of  type and scrembled it to make a type specimen book.
          </Text>
          <div className={styles.iconRow}>
            <PiAppleLogoFill/>
            <IoLogoGooglePlaystore/>
            </div>
            
</div>
        
      </ContentContainer>
    </section>
  );
}
