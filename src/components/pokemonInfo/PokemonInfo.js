import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom";
import Axios from "axios";

const PokemonInfo = () => {
    const {id, info} = useParams();
    const [pokemonInfo, setPokemonInfo]= useState();

    useEffect(()=>{
        const url=`https://wbspokemon.herokuapp.com/pokemon/${id}/${info}`

        Axios.get(url)
        
    })
    return (
        <div>
            PokemonInfo
        </div>
    )
}

export default PokemonInfo
