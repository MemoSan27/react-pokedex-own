import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import './styles/PokeInfo.css'
import Main from "../components/PokedexInfoPage/Main";
import StatsSection from "../components/PokedexInfoPage/StatsSection";
import MovementsSection from "../components/PokedexInfoPage/MovementsSection";

const PokeInfoPage = () => {

  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getPokemon ] = useFetch(url);
  
  useEffect( () => {
    getPokemon()
  },[])

  return (
    <section className="pokeinfo">
      
      <Main 
        pokemon={pokemon}
      />

      <StatsSection 
        pokemon={pokemon}
      />

      <MovementsSection 
        pokemon={pokemon}
      />

    </section>
  )
}

export default PokeInfoPage
