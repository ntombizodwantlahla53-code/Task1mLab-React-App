import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import {Text} from './components/Text/Text'
import { Navbar } from './components/Text/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Text variant= 'h1'> . </Text>
      <Text variant= 'h2'> Coffee</Text>
      <Text variant= 'p'> </Text>
      <Text variant= 'span'> </Text>
    </>
  )
}

export default App
