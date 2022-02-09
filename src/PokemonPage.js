import React, { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';

function App() {
  const [pokemon, setCurrentPokemon] = useState([]);
  const [page, setPage] = useState (1);
  const perPage = 50;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const pokes = await getPokemon(from, to);
      setCurrentPokemon(pokes);
    }
    fetch();
  }, [page]);
  return (

    <><div>PokemonPage
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous Page</button>
      <button onClick={() => setPage(page + 1)} disabled={pokemon.length < perPage}>Next Page</button>
    </div><PokemonList pokemon={pokemon} /></>

  );
}


export default App;