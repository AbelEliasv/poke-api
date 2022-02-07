import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import PokemonsPage from './pages/PokemonsPage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonsSearch, setPokemonsSearch] = useState([]);
  useEffect(() => {

    const fetchPokemons = async () => {
      const res = await axios.get(
        'https://pokeapi.co/api/v2/pokemon',
      )
      const { results } = res.data

      const promises = results.map(result => axios.get(result.url))

      Promise.all(promises).then((results) => {
        setPokemons(results);
      })

    };

    fetchPokemons()

  }, []);

  function handleSearch(params) {

    setPokemonsSearch([])

    var filteredPokemon = pokemons.filter( poke => poke.data.name == params.nombre );

    setPokemonsSearch(filteredPokemon)


  }

  return (


    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PokemonsPage pokemons={pokemons} pokemonsSearch={pokemonsSearch} onEnterSearch={handleSearch} ></PokemonsPage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
