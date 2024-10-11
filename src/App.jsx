import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'
import Course from './Component/Course/Course'
import More from './Component/More/More'
import Swiper from './Component/Swiper/Swiper'
import Footer from './Component/Footer/Footer'

function App() {
 

  return (
    <div className='body'>
      <Header/>
      <Hero/>
      <Course />
      <More />
      <Swiper />
      <Footer />
    </div>
  )
}

export default App
