import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";

const PokemonAll = () => {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    const url = `https://wbspokemon.herokuapp.com/pokemon`;
    Axios.get(url)
      .then((res) => {
        setPokemons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      {/* <pre>{JSON.stringify(pokemon)}</pre> */}
      {pokemons &&
        pokemons.map((pokemon) => {
          return(
            <Fragment>
              <li>{pokemon.name.english}</li>
            </Fragment>
          )
        })}
    </Fragment>
  );
};

export default PokemonAll;
