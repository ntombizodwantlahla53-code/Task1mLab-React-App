import { Text } from '../Text'
import styles from './Cardthree.module.css'
import { ContentContainer } from '../ContentContainer'
import image from '../../../assets/Americano.jpg'
import { SiApple } from "react-icons/si";
import { IoLogoGooglePlaystore } from "react-icons/io5";



const menuData = [
  { id: 1, name: 'Americano', price: '100%', image: '/Americano.jpg', },
  { id: 2, name: 'Americano', price: '100%', image: '/Americano.jpg', },
 

]

export const Cardthree = () => {
  return (
    <section className={styles.cards}>
      <ContentContainer className={styles.content}>
        <div className={styles.grid}>
          {menuData.map((item) => (
            <div key={item.id} className={styles.card}>
              
              <div className={styles.name}>
              <span>"h2"</span></div>
                
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
         < SiApple />
            <IoLogoGooglePlaystore/>
</div>

      </ContentContainer>
    </section>
  );
}