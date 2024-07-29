import React from 'react'
import './App.css';
import Home from './Components/Home.js'
import About from './Components/About.js'
import Work from './Components/Work.js'
import Testimonial from './Components/Testimonial.js'
import Contact from './Components/Contact.js'
import Footer from './Components/Footer.js'
const App = () => {
  return (
    <div>
    <Home/>
    <About/>
    <Work/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
