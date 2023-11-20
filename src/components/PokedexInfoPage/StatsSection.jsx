import { getBackground, getColor } from "../../helpers/helper";
import Typewriter from 'typewriter-effect';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const StatsSection = ({ pokemon }) => {
  return (
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
  )
}

export default StatsSection
