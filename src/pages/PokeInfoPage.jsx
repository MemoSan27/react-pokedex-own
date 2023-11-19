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

  console.log(pokemon);

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
        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt=""></img>
      </div>
    </div>
  )
}

export default PokeInfoPage
