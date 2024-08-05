import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Main from "./components/Main"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import PropertyPulse from "./components/PropertyPulse"
import ProShop from "./components/ProShop"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/projects/pro-shop" element={<ProShop />} />
        <Route path="/projects/property-pulse" element={<PropertyPulse />} />
      </Routes>
    </div>
  )
}

export default App
