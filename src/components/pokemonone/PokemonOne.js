import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import Axios from "axios";
const PokemonOne = () => {
  const { id } = useParams();
  const [pokemonOne, setPokemonOne] = useState();

  useEffect(() => {
    const url = `https://wbspokemon.herokuapp.com/pokemon/${id}`;
    Axios.get(url)
      .then((res) => {
        setPokemonOne(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      {/* <pre>{JSON.stringify(pokemonOne)}</pre> */}
{
    pokemonOne &&
    <li>{pokemonOne.name.english}</li>
}
    </Fragment>
  );
};

export default PokemonOne;
