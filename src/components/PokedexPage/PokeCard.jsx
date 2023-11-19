import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'

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
      <h3>{infoPoke?.name}</h3>
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
      <hr />
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
   </article>
  )
}

export default PokeCard