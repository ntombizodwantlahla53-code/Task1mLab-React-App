
import { Text } from '../Text'
import styles from './Footer.module.css'
import { LuCoffee } from "react-icons/lu";


export const Footer = () => {
  return (
    
      <section className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.grid}>
        <div className={styles.name}>
             <div className={styles.flav}>
          <div className={styles.left}>
       <span>Flavored <LuCoffee/></span>
       <p className={styles.done}>Wake up to something special.</p>
        
       </div>
</div>
       </div>
        <div className={styles.infoFooter}>
          <Text variant="h2">Our Services</Text>
          <Text variant="p">
            Pricing<br/><br/>Tracking<br/><br/>Report a bug<br/><br/>Terms of services
        </Text>
        </div>
<div className={styles.infoFooter}>
          <Text variant="h2">Our Company</Text>
          <Text variant="p">
            Pricing<br/><br/>Tracking<br/><br/>Report a bug<br/><br/>Terms of services
          </Text>
</div>

<div className={styles.infoFooter}>
          <Text variant="h2">Address</Text>
          <Text variant="p">
            Pricing<br/><br/>Tracking<br/><br/>Report a bug<br/><br/>Terms of services
          </Text>
        </div>
        
        </div>
        </div>
    </section>
    
    
    
  )
}
