import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import {Text} from './components/Text/Text'
import { Navbar } from './components/Text/Navbar/Navbar'
import { Hero } from './components/Text/Hero/Hero'
import { Cards } from './components/Text/Card/Card'
import { Card2} from './components/Text/Card2/Card2'
import { Cardthree} from './components/Text/Cardthree/Cardthree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ paddingTop: '90px' }}>
      <Navbar/>
      <Hero />
      <Cards />
      <Card2/>
      <Cardthree/>
      <Text variant= 'h1'></Text>
      <Text variant= 'h2'> </Text>
      <Text variant= 'p'> </Text>
      <Text variant= 'span'> </Text>
      </div>
  )
}

export default App
