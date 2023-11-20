import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import './styles/PokeInfo.css'
import { getBackground, getColor } from "../helpers/helper";
import Typewriter from 'typewriter-effect';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const PokeInfoPage = () => {

  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [ pokemon, getPokemon ] = useFetch(url);
  const [ porcentaje, setPorcentaje ] = useState(0);

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
    <section className="pokeinfo">
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
      </main> {/* ACABA LA PRIMERA SECCION */}

      <article style={{ backgroundColor: getBackground(0, pokemon)}} className="poke-info__container">
        <div className="poke-info__img">
          <h1 style={{ color: getColor(0, pokemon) }} className="poke-info__name"> 
            <Typewriter
                                  options={{
                                      strings: [  `stats`, 
                                                  ],
                                      autoStart: true,
                                      loop: true,
                                  }}
                              />
          </h1>
        </div>
        <div className="graphics">
          <div className="progress">
            <h2 className="progress__name"> { pokemon?.stats?.[0].stat.name.toUpperCase() } </h2>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: 'rgb(100,100,100)',
                trailColor: '#fff'
              })} 
              value={((pokemon?.stats?.[0].base_stat)/150) * 100}
              text={`${pokemon?.stats?.[0].base_stat} / 150`}
            />
          </div>

          <div className="progress">
            <h2 className="progress__name"> { pokemon?.stats?.[1].stat.name.toUpperCase() } </h2>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: 'rgb(100,100,100)',
                trailColor: '#fff'
              })} 
              value={((pokemon?.stats?.[1].base_stat)/150) * 100}
              text={`${pokemon?.stats?.[1].base_stat} / 150`}
            />
          </div>

          <div className="progress">
            <h2 className="progress__name"> { pokemon?.stats?.[2].stat.name.toUpperCase() } </h2>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: 'rgb(100,100,100)',
                trailColor: '#fff'
              })} 
              value={((pokemon?.stats?.[2].base_stat)/250) * 100}
              text={`${pokemon?.stats?.[2].base_stat} / 250`}
            />
          </div>

          <div className="progress">
            <h2 className="progress__name"> { pokemon?.stats?.[3].stat.name.toUpperCase() } </h2>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: 'rgb(100,100,100)',
                trailColor: '#fff'
              })} 
              value={((pokemon?.stats?.[3].base_stat)/200) * 100}
              text={`${pokemon?.stats?.[3].base_stat} / 200`}
            />
          </div>

          <div className="progress">
            <h2 className="progress__name"> { pokemon?.stats?.[4].stat.name.toUpperCase() } </h2>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: 'rgb(100,100,100)',
                trailColor: '#fff'
              })} 
              value={((pokemon?.stats?.[4].base_stat)/200) * 100}
              text={`${pokemon?.stats?.[4].base_stat} / 200`}
            />
          </div>

          <div className="progress">
            <h2 className="progress__name"> { pokemon?.stats?.[5].stat.name.toUpperCase() } </h2>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: 'rgb(100,100,100)',
                trailColor: '#fff'
              })} 
              value={((pokemon?.stats?.[5].base_stat)/150) * 100}
              text={`${pokemon?.stats?.[5].base_stat} / 150`}
            />
          </div>
        </div>
      </article>

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

    </section>
  )
}

export default PokeInfoPage
