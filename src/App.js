import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import PokemonAll from "./components/pokemonAll/PokemonAll";
import PokemonInfo from "./components/pokemonInfo/PokemonInfo";
import PokemonOne from "./components/pokemonone/PokemonOne";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/:id/:info" component={PokemonInfo} />
          <Route path="/:id" component={PokemonOne} />
          <Route path="/" component={PokemonAll} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
