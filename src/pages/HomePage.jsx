import React from 'react'
import { useRef } from "react"
import { setTrainerName } from "../store/slices/trainerName.slice.js"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './styles/HomePage.css'
import Pokedexlogo from '../assets/img/poketitle.png'
import Pokeballsup from '../assets/img/pokeball.png'
import Pokeballinf from '../assets/img/pokeballbottom.png'
import Tablero from '../assets/img/tablero.png'


const HomePage = () => {

    const inputName = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerName(inputName.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <main className='home'>
      <div className='container'>
          <img className='home__logo' src={Pokedexlogo} alt='Pokedex Logo' />
          
          <div className='pokeball'>
            <img className="pokesup" src={Pokeballsup} alt="Poke Tapa" />
            <div className="screen " >
              <img className="imgScreen" src={Tablero} alt="Tablero" />
            </div>
            <img className="pokeinf" src={Pokeballinf} alt="Poke Tapa" />
          </div>
          <form className='form' onSubmit={handleSubmit}>
              <input className='input' ref={inputName} type="text" />
              <button className='btnGo'><i className='go bx bxl-go-lang bx-tada bx-lg'></i></button>
          </form>
      </div>
    </main>
  )
}

export default HomePage