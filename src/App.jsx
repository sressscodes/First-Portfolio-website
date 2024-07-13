import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Svg from './components/Svg'
import { Expertise } from './components/Expertise'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
      <div>
        <Sidenav />
        <Main />
        <Work />
        <Expertise />
        <Svg />
        <Projects />
        <Contact />
      </div>
  )
}

export default App  
