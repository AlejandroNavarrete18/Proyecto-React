
import './App.css'
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Componentes/Home'
import React from 'react'
import Nosotros from './Componentes/Nosotros'
import Trabajo from './Componentes/Trabajo'
import Footer from './Componentes/Footer'
import Contactos from './Componentes/Contactos'
import Loginicio from './Componentes/Loginicio'
import Navbar from './Componentes/Navbar'
import {Link} from 'react-router-dom'
function App() {
  return(
    <>
      
      <Routes>
        <Route path="/loginicio" Component={Loginicio}/>
        <Route path="/" Component={Home}/>
      </Routes>
      <section id='Nosotros'><Nosotros/></section> 
      <section id='Trabajo'><Trabajo/></section>
      <section id='Contactos'><Contactos/></section>
      
      <Footer/>


    </>
  ) 
}

export default App