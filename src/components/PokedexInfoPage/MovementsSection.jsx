import { getBackground, getColor } from "../../helpers/helper";
import Typewriter from 'typewriter-effect';



const MovementsSection = ({ pokemon }) => {
  return (
    <article style={{ backgroundColor: getBackground(0, pokemon)}} className="poke-info__container">
    <div className="poke-info__img">
      <h1 style={{ color: getColor(0, pokemon) }} className="poke-info__name"> 
        <Typewriter
                              options={{
                                  strings: [  `movements`, 
                                              ],
                                  autoStart: true,
                                  loop: true,
                              }}
                          />
      </h1>
      <div className="row">
          {
          pokemon?.moves?.map((infoMove) => (
            <div  className="type__box">
              <p key={infoMove.move.name} className="type__name">{infoMove.move.name.toUpperCase()}</p>
            </div>
            ))
          }
          </div>
    </div>
  </article>
  )
}

export default MovementsSection
