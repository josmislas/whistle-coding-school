import React from 'react'
import "../styles/NavBar.css"

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='text'>
            <h2>Escuela Certificada</h2>
            <h2>Clases Presenciales</h2>
            <h2>Trabajo</h2>
        </div>
        <div className='links'>
            <div>facebook</div>
            <div>aparta tu lugar</div>
            <div>whatsapp</div>
        </div>
    </div>
  )
}

export default NavBar