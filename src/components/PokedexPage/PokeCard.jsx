import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'
import Typewriter from 'typewriter-effect';

const PokeCard = ({ url }) => {

  const [ infoPoke, getInfoPoke ] = useFetch(url)

  useEffect(() => {
    getInfoPoke()
  }, [])

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/pokedex/${infoPoke.id}`)
  }

  const getBackground = () => {
    let type = infoPoke?.types?.[0].type.name;
    switch (type) {
        case "normal":
            return "#b19176"
            break;
        case "fighting":
            return "#c03636"
            break;
        case "flying":
            return "#568aa8"
            break;
        case "poison":
            return "#964bc2"
            break;
        case "ground":
            return "#722f03"
            break;
        case "rock":
            return "#81404b"
            break;
        case "bug":
            return "#0fccb3"
            break;
        case "ghost":
            return "#cd40f8"
            break;
        case "steel":
            return "#d6d3d3"
            break;
        case "fire":
            return "#F8B78B"
            break;
        case "water":
            return "#2697f3"
            break;
        case "grass":
            return "greenyellow"
            break;
        case "electric":
            return "#caaf36"
            break;
        case "psychic":
            return "#fa7e93"
            break;
        case "ice":
            return "#b9e3f3"
            break;
        case "dragon":
            return "#fa4801"
            break;
        case "dark":
            return "gray"
            break;
        case "fairy":
            return "pink"
            break
    }
}

  
  return (
   <article  className="card" onClick={handleNavigate}>
    <header style={{ backgroundColor: getBackground() }} className="header">
      <h3 className="card__poke-name"> 
        <Typewriter
                              options={{
                                  strings: [  `${infoPoke?.name}`, 
                                              ],
                                  autoStart: true,
                                  loop: true,
                              }}
                          />
      </h3>
      <div style={{ backgroundColor: getBackground() }} className="circ">
        <img className="card__img" src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
      </div>
    </header>
    <section className="info">
      
      <ul>
        {
          infoPoke?.types.map(infoType => (
            <li key={infoType.type.url}>{infoType.type.name}</li>
          ))
        }
      </ul>
      <br></br>
      <ul>
        {
          infoPoke?.stats.map(infoStat => (
            <li key={infoStat.stat.url}>
              <span>{infoStat.stat.name}</span>
              <span>{infoStat.base_stat}</span>
            </li>
          ))
        }
      </ul>
    </section>
    <div style={{ backgroundColor: getBackground() }} className="card__footer">

    </div>
   </article>
  )
}

export default PokeCard