import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import {Text} from './components/Text/Text'
import { Navbar } from './components/Text/Navbar/Navbar'
import { Hero } from './components/Text/Hero/Hero'
import { Cards } from './components/Text/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ paddingTop: '80px' }}> {/* Adds space below the fixed navbar */}
      <Navbar/>
      <Hero />
      <Cards />
      <Text variant= 'h1'>Coffee</Text>
      <Text variant= 'h2'> Coffee</Text>
      <Text variant= 'p'> </Text>
      <Text variant= 'span'> </Text>
    </div>
  )
}

export default App
