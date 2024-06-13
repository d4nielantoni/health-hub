import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default App
