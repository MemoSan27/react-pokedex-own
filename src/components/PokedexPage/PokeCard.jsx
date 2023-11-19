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

  
  return (
   <article className="card" onClick={handleNavigate}>
    <header className="header">
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
      <div className="circ">
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
    <div className="card__footer">

    </div>
   </article>
  )
}

export default PokeCard