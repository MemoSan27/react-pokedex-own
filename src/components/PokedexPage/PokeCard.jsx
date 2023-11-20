import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './styles/PokeCard.css'
import Typewriter from 'typewriter-effect';
import { getBackground, getColor } from "../../helpers/helper";

const PokeCard = ({ url }) => {

  const [ infoPoke, getInfoPoke ] = useFetch(url)

  useEffect(() => {
    getInfoPoke()
  }, [])

  const navigate = useNavigate()

  const handleNavigate = () => {
    window.scrollTo(0,0)
    navigate(`/pokedex/${infoPoke.id}`)
  }

  

  return (
   <article className="card" onClick={handleNavigate}>
    <header style={{ backgroundColor: getBackground(0, infoPoke) }} className="header">
      <h3 style={{ color: getColor(0, infoPoke) }} className="card__poke-name"> 
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
        <img className="card__img" src={infoPoke?.sprites.other["official-artwork"].front_default} alt="Img Pokemon" />
      </div>
    </header>
    <section className="info">
      
      <ul className="type__ul">
        {
          infoPoke?.types.map((infoType, index) => (
            <li key={infoType.type.url}>
              <div style={{ backgroundColor: getBackground(index, infoPoke) }} className="type__box">
                <p style={{ color: getColor(index, infoPoke) }} className="type__name">{infoType.type.name.toUpperCase()}</p>
              </div>
            </li>
          ))
        }
      </ul>
      <br></br>
      <ul className="card__stats">
        {
          infoPoke?.stats.map(infoStat => (
            <li key={infoStat.stat.url}>
              <span style={{ color: getColor(0, infoPoke) }} className="card__span span__name">{infoStat.stat.name}</span>
              <span style={{ color: getColor(0, infoPoke) }} className="card__span span__stat">{infoStat.base_stat}</span>
            </li>
          ))
        }
      </ul>
    </section>
    <div style={{ backgroundColor: getBackground(0, infoPoke) }} className="card__footer">

    </div>
   </article>
  )
}

export default PokeCard