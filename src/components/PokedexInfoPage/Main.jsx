import { getBackground, getColor } from "../../helpers/helper";
import Typewriter from 'typewriter-effect';

const Main = ({ pokemon }) => {

    const getImage = () => {
        if (pokemon?.sprites?.other.dream_world.front_default) {
            return pokemon?.sprites?.other.dream_world.front_default
        } else {
            return pokemon?.sprites?.other.home.front_default
        }
    }

  return (
    <main style={{ backgroundColor: getBackground(0, pokemon)}} className="poke-info__container">
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
          <div className="cajas">
            <div className="type__container">
              <p className="type__legend"> Type </p>
              <div className="type__container-inside">
              {
              pokemon?.types.map((infoType, index) => (
                <div key={infoType.type.name} style={{ backgroundColor: getBackground(index, pokemon) }} className="type__box">
                  <p  style={{ color: getColor(index, pokemon) }} className="type__name">{infoType.type.name.toUpperCase()}</p>
                </div>
                ))
              }
              </div>
            </div>
            <div className="type__container two">
              <p className="type__legend"> Habilities </p>
              <div className="type__container-inside">
              {
              pokemon?.abilities?.map((infoType) => (
                <div  className="type__box">
                  <p key={infoType.ability.name} className="type__name">{infoType.ability.name.toUpperCase()}</p>
                </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </main> 
  )
}

export default Main
