import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import { FaUser,FaLock } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from './Footer';
function Login() {
  return (
    <div    className='Contenedor'>
      <div><Navbar/></div>
      
      <center><h1>Inicio Sesion</h1></center>
       <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Usuario' required/>
                <FaUser className='Icon'/>
                </div>
            <div className="input-box">
                <input type="password" placeholder='Contraseña' required/>
                <FaLock className='Icon'/>
                </div>                         
            <div className="remeber-forgot">
                <label ><input type="checkbox"/>Recordarme</label>
                <a href="#">¿Olvidaste la contraseña?</a>
            </div>
            <button>Ingresar</button>
            <div className="resgisters-link"><p>¿No tienes una cuenta? <Link to="/">Registrate</Link></p> </div>
            
        </form>
        <div><Footer/></div>

    </div>
  )
}

export default Login