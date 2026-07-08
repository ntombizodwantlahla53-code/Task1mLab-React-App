
import { Text } from '../Text'
import { ContentContainer } from '../ContentContainer'
import styles from './Footer.module.css'
import { CgCoffee } from "react-icons/cg";


export const Footer = () => {
  return (
    <footer>
      <section className={styles.footer}>
      <ContentContainer className={styles.content}>
        <div className={styles.grid}>
        <div className={styles.name}>
             <div className={styles.flav}>
          <div className={styles.left}>
       <span>Flavored <CgCoffee/></span>
        
       </div>
</div>
       </div>
        <div className={styles.infoFooter}>
          <Text variant="h2">Our Services</Text>
          <Text variant="p">
            Pricing<br/>Tracking<br/>Report a bug<br/>Terms of services
        </Text>
        </div>
<div className={styles.infoFooter}>
          <Text variant="h2">Our Company</Text>
          <Text variant="p">
            Pricing<br/>Tracking<br/>Report a bug<br/>Terms of services
          </Text>
</div>

<div className={styles.infoFooter}>
          <Text variant="h2">Address</Text>
          <Text variant="p">
            Pricing<br/>Tracking<br/>Report a bug<br/>Terms of services
          </Text>
          
        </div></div>
      </ContentContainer>
    </section>
    </footer>
  )
}
