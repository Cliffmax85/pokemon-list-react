import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      const data = await getSinglePokemon(params.id);
      setPokemon(data);
    }
    onLoad();
  }, [params.id]);


  return (
    <>
      <Link to='/'>Home</Link>
      <div className='pokemon-detail'>
        <div className='pokemon-data'>
          <p>{pokemon.pokemon}</p>
          <img src={pokemon.url_image} />
        </div>
      </div>
    </>
  );
}
