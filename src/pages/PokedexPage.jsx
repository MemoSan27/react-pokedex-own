import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'
import Pagination from "../components/PokedexPage/Pagination"
import Error from "../components/Error"
import Loading from "../components/Loading"

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')
  const [page, setPage] = useState(1)

  const trainerName = useSelector(store => store.trainerName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1292&offset=0'
  const [ pokemons, getPokemons, getByTypePokemon, filtered, isLoading ] = useFetch(url)

useEffect(() => {
    if(inputValue === '' && selectValue === 'allPokemons'){
    getPokemons()
    setPage(1);  
    }else if(inputValue !== '' && selectValue === 'allPokemons'){
      filtered(inputValue)
      setPage(1);
    }else{
      setInputValue('');
      getByTypePokemon(selectValue);
      setPage(1);
    }
}, [inputValue, selectValue])
  
  const inputSearch = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSelectValue('allPokemons');
    setInputValue(inputSearch.current.value.toLowerCase().trim())
    setPage(1);
    inputSearch.current.value = ''
  }
 //===== estados y variables de paginación=====
   const perPages = 12;
   const quantyPages = Math.ceil(pokemons?.results?.length / perPages);
 
  return (
  <main>
        <section className="pokepage__container">
          <p className="pokepage__welcome">Welcome <span className="pokepage__trainer">"{ trainerName }"</span>, here select your favorite pokemon, let's go!</p>
          <form className="pokepage__form" onSubmit={handleSubmit}> 
            <div className="input__container">
              <p className="pokepage__welcome h2"> Here, you can search by <span className="pokepage__trainer h2"> name </span> </p>
              <div className="div">
                <input className="input__search" ref={inputSearch} type="text" />
                <button className="btn__search"><i className='glass bx bx-search-alt-2'></i></button>
              </div>
              
            </div>
          
            <div className="select__container">
              <p className="pokepage__welcome h2"> ...Or here you can choose the <span className="pokepage__trainer h2"> type </span>  </p>
                <SelectType
                setSelectValue={setSelectValue} />
            </div>
          </form>
        </section>

        
          {
            isLoading
            ? <Loading />
            : <>
            <section>
            {pokemons?.results[0] 
            ? <Pagination quantyPages={quantyPages} page={page} setPage={setPage}/> 
            : <Error> No pokemons found!! </Error> 
            }
            </section>
    
            <article className="pokemons__container">
              {
                pokemons?.results.map(poke =>(
                  <PokeCard
                  key={poke.url}
                  url={poke.url}
                  />
                )).slice((page - 1)* perPages, (page - 1)* perPages + perPages)
              }
            </article>
    
            <section>
              {pokemons?.results[0] && <Pagination quantyPages={quantyPages} page={page} setPage={setPage}/>}
            </section>
            </>
          }
  </main>
  
  )
}

export default PokedexPage