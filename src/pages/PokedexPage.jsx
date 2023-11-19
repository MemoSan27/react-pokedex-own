import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')

  const trainerName = useSelector(store => store.trainerName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
  const [ pokemons, getPokemons, getByTypePokemon ] = useFetch(url)

  useEffect(() => {
    if(selectValue=== 'allPokemons'){
    getPokemons()  
    }else{
      setInputValue('');
      getByTypePokemon(selectValue)
    }
      
    
  }, [selectValue])
  
  const inputSearch = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setSelectValue('allPokemons');
    setInputValue(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }

  const cbfilter = (poke) => {
    //filtro por nombre en el input
    const nameFiltered = poke.name.includes(inputValue)
    return nameFiltered
  }
 
  return (
    <div>
      <div className="pokepage__container">
        <p className="pokepage__welcome">Welcome <span className="pokepage__trainer">"{ trainerName }"</span>, here select your favorite pokemon, let's go!</p>
        <form className="pokepage__form" onSubmit={handleSubmit}> 
          <div className="input__container">
            <p className="pokepage__welcome h2"> Here, you can search by <span className="pokepage__trainer h2"> name </span> </p>
            <div className="div">
              <input className="input__search" ref={inputSearch} type="text" />
              <button className="btn__search"><i className='glass bx bx-search-alt-2'></i></button>
            </div>
            
          </div>
        </form>
        <div className="select__container">
        <p className="pokepage__welcome h2"> ...Or here you can choose the <span className="pokepage__trainer h2"> type </span>  </p>
          <SelectType
          setSelectValue={setSelectValue} />
        </div>
      </div>
      <div className="pokemons__container">
        {
          pokemons?.results.filter(cbfilter).map(poke =>(
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage