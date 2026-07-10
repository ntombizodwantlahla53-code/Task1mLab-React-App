import React from 'react'
import styles from './Itemcard.module.css'
import { Text } from '../Text'

type ItemcardProps = {
    name: string;
    description?: string;
    imgLink: string;
    price?: number
}
export const Itemcard: React.FC<ItemcardProps> = ({name, description, imgLink, price}) => {
  return (
    <div className={styles.ntombi}>
      <img className={styles['ntombie']} src={imgLink} alt ={'image: ${description}'}/>
      <Text variant= {'span'} style= {{fontWeight:500}}>{name}</Text>
      <Text variant= {'span'} >{description} </Text>
      <Text variant= {'span'} style= {{fontWeight:400}}>R{price}</Text>
      

    </div>
  )
}
