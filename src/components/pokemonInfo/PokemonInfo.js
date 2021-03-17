import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { getApiData } from "../utils/Api";
const PokemonInfo = () => {
  const { id, info } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState();


  



  useEffect(() => {
    switch (info) {
      case "name":
        getApiData(`https://wbspokemon.herokuapp.com/pokemon/${id}/name`).then(
          (result) => {
            setPokemonInfo(result.data);
          }
        );
        break;
      case "type":
        getApiData(`https://wbspokemon.herokuapp.com/pokemon/${id}/type`).then(
          (result) => {
            setPokemonInfo(result.data);
          }
        );

        break;
      case "base":
        getApiData(`https://wbspokemon.herokuapp.com/pokemon/${id}/base`).then(
          (result) => {
            setPokemonInfo(result.data);
          }
        );
        break;
      default:
        getApiData(`https://wbspokemon.herokuapp.com/pokemon/${id}`).then(
          (result) => {
            setPokemonInfo(result.data);
          }
        );

        break;
    }
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(pokemonInfo)}</pre>
    </div>
  );
};

export default PokemonInfo;
