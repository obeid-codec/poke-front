import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Axios from "axios";
// import getApiData from '../utils/Api';
const PokemonInfo = () => {
    const { id, info } = useParams();
    const [pokemonInfo, setPokemonInfo] = useState();


    let getApiData = (url) => {
        Axios.get(url)
    }


    useEffect(() => {
        const url = `https://wbspokemon.herokuapp.com/pokemon/${id}/${info}`
        if (info === 'name') {
            getApiData(`https://wbspokemon.herokuapp.com/pokemon/${id}/name`).then((res) => {
                setPokemonInfo(res)
                    .catch((err) => {
                        console.error(err)
                    })
            })
        } else if (info === 'type') {
            getApiData(`https://wbspokemon.herokuapp.com/pokemon/${id}/type`).then((res) => {
                setPokemonInfo(res)
                    .catch((err) => {
                        console.error(err)
                    })
            })
        } else if (info === 'base') {
            getApiData(`https://wbspokemon.herokuapp.com/pokemon/${id}/base`).then((res) => {
                setPokemonInfo(res)
                    .catch((err) => {
                        console.error(err)
                    })
            })
        } else {
            getApiData(`https://wbspokemon.herokuapp.com/pokemon/${id}`).then((res) => {
                setPokemonInfo(res)
                    .catch((err) => {
                        console.error(err)
                    })
            })
        }


    })
    return (
        <div>
            <pre>{JSON.stringify(pokemonInfo)}</pre>
        </div>
    )
}

export default PokemonInfo
