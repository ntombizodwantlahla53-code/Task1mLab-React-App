import './App.css'
import { ContentContainer } from './components/Text/ContentContainer'
import {Text} from './components/Text/Text'
import { Navbar } from './components/Text/Navbar/Navbar'
import { Hero } from './components/Text/Hero/Hero'
import { Card2} from './components/Text/Card2/Card2'
import{ Cardthree} from './components/Text/Cardthree/Cardthree'
import { Footer } from './components/Text/Footer/Footer'
import  {ZodwaContainer}  from './components/Text/ZodwaContainer/ZodwaContainer'


function App() {
  //const [count, setCount] = useState(0)
  

  return (
   <div>
      <ContentContainer>
        <section>
      <Navbar/>
      <Hero />
      <ZodwaContainer />
      <Card2/>
      <Cardthree/>
      <Footer/>
      </section>
</ContentContainer>

 
      {/* { <Text variant= 'h1'></Text> } */}
      <Text variant= 'h2'> </Text>
      <Text variant= 'p'> </Text>
      <Text variant= 'span'> </Text>
     </div> 
     
  )
}

export default App
