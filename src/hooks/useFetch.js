import { useState } from "react"
import axios from 'axios'



const useFetch = (url) => {
 
    const [infoApi, setInfoApi] = useState();
    const [ isLoading, setIsLoading ] = useState(true);

    const getApi = () => {
        setIsLoading(true);
        axios.get(url)
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
        .finally( () => {
            setIsLoading(false);
        });
    }

    const filter = (inputValue) => {
        setIsLoading(true);
        axios.get(url)
        .then(res => {
            const obj = {
                results: res.data.results.filter((e) => e.name.includes(inputValue)) 
            }
            setInfoApi(obj);
        })
        .catch(err => console.log(err))
        .finally( () => {
            setIsLoading(false);
        });
    }
    
    const getTypeApi = (urlType) => {
        setIsLoading(true);
        axios.get(urlType)
        .then(res => {
            const obj = {
                results: res.data.pokemon.map(e => e.pokemon)
            }
            setInfoApi(obj)
            
        })
        .catch(err => console.log(err))
        .finally( () => {
            setIsLoading(false);
        });
}
return [ infoApi, getApi, getTypeApi, filter, isLoading ]
}

export default useFetch