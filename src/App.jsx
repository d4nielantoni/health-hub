import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <Footer/>
    </>
  )
}

export default App
