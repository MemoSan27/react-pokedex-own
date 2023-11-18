import React from 'react'
import { Outlet } from 'react-router-dom'
//import Pokedexlogo from '../img/poketitle.png'
import './styles/Layout.css'

const Layout = () => {
  return (
    <>
     <div className='yellowbar'>
        {/* <img className='imgYb' src={Pokedexlogo} alt='Pokedex Logo' /> */}
     </div>

     <div className='blackbar'>
        
     </div>

    <div className='outlet'>
     <Outlet />
    </div>

     <footer className='footer'></footer>
    </>
  )
}

export default Layout
