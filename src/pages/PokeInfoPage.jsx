import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import './styles/PokeInfo.css'
import { getBackground, getColor } from "../helpers/helper";
import Typewriter from 'typewriter-effect';

const PokeInfoPage = () => {

  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getPokemon ] = useFetch(url);

  

  useEffect( () => {
    getPokemon()
  },[])

  const getImage = () => {
    if (pokemon?.sprites?.other.dream_world.front_default) {
        return pokemon?.sprites?.other.dream_world.front_default
    } else {
        return pokemon?.sprites?.other.home.front_default
    }
}

  return (
    <div style={{ backgroundColor: getBackground(0, pokemon) }} className="poke-info__container">
      <div className="poke-info__img">
        <h1 style={{ color: getColor(0, pokemon) }} className="poke-info__name"> 
          <Typewriter
                                options={{
                                    strings: [  `${pokemon?.name}`, 
                                                ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
        </h1>
        <div className="poke-info__height">
          <img className='avatar' src={getImage()} alt="" />
          <p style={{ color: getColor(0, pokemon) }} className="poke-info__desc"> Height:</p>                      
          <p style={{ color: getColor(0, pokemon) }} className="poke-info__info"> {pokemon?.height} "</p>                      
          <p style={{ color: getColor(0, pokemon) }} className="poke-info__desc"> Weight: </p>                      
          <p style={{ color: getColor(0, pokemon) }} className="poke-info__info"> {pokemon?.weight} pounds </p>                      
        </div>
        <img className="poke-info__pic" src={pokemon?.sprites.other["official-artwork"].front_default} alt=""></img>
      </div>
    </div>
  )
}

export default PokeInfoPage
