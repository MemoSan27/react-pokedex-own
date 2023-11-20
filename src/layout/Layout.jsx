import React from 'react'
import { Outlet } from 'react-router-dom'
//import Pokedexlogo from '../img/poketitle.png'
import './styles/Layout.css'
import Pikachu from '../assets/img/pikachugif.gif';
import Pokedexlogo from '../assets/img/poketitle.png'

const Layout = () => {
  return (
    <>
     <div className='yellowbar'>
        <img className='pokelogo' src={Pokedexlogo} alt='Pokedex Logo' />
     </div>

     <div className='white__circle'>
        <div className='gray__circle'>
            <img className='pikachu' src={Pikachu} alt='Gif Pikachu' />
        </div>
     </div>

     <div className='blackbar'>
        
     </div>

    <div className='outlet'>
     <Outlet />
    </div>

    

     <footer className='footer'>
     <div className='white__circle2'>
        <div className='gray__circle'>
            <img className='pikachu' src={Pikachu} alt='Gif Pikachu' />
        </div>
     </div>
     </footer>
    </>
  )
}

export default Layout
