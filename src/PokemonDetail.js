import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSinglePokemon } from './services/fetch-utils'

export default function PokemonDetail() {
    const [currentPokemon, setCurrentPokemon] = useState({});
    const params = useParams();

    

  return (
    <div>PokemonDetail</div>
  )
}
