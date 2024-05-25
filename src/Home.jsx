import React from 'react'
import Poster from './components/Poster'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'

function Home() {
  return (
    <div>
        <Poster />
        <About />
        <Menu />
        <Contact />
    </div>
  )
}

export default Home