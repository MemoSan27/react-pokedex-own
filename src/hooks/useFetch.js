import { useState } from "react"
import axios from 'axios'



const useFetch = (url) => {
 
    const [infoApi, setInfoApi] = useState()

    const getApi = () => {
        axios.get(url)
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }

    const filter = (inputValue) => {
        axios.get(url)
        .then(res => {
            const obj = {
                results: res.data.results.filter((e) => e.name.includes(inputValue)) 
            }
            setInfoApi(obj);
        })
        .catch(err => console.log(err))
    }
    
    const getTypeApi = (urlType) => {
        axios.get(urlType)
        .then(res => {
            const obj = {
                results: res.data.pokemon.map(e => e.pokemon)
            }
            setInfoApi(obj)
            
        })
        .catch(err => console.log(err))
}
return [ infoApi, getApi, getTypeApi, filter ]
}

export default useFetch