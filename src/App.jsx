import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Project from './components/Projects/Project'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='bg-bgColor h-auto w-full overflow-hidden'>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Footer />
    </div>
    )
}

export default App