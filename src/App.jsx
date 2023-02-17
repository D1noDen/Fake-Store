import { useState } from 'react'
import { QueryClientProvider ,QueryClient, } from '@tanstack/react-query'
import {ChakraProvider} from '@chakra-ui/react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Product from './components/product'
import Header from './components/Header'
import AllCategories from './components/AllCategories'
function App() {
  const [count, setCount] = useState(0)
  const client = new QueryClient


 
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>

   
  <Header/>

    <div className="App">
     
    <AllCategories/>
    </div>
    </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
