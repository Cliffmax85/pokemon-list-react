import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokemonDetail() {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      const data = await getSinglePokemon(params.id);
      setCurrentPokemon(data);
    }
    onLoad();
  }, [params.id]);


  return (
    <>
      <Link to='/'>Home</Link>
      <div className='pokemon-detail'>
        <div className='pokemon-data'>
          <p>{currentPokemon.pokemon}</p>
        </div>
      </div>
    </>
  );
}
