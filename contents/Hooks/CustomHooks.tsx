import { useEffect, useState } from 'react';

import * as S from './styles'
import useFecthData from './useFecthData';
import Pokemon from './Pokemon';

type PokemonProps = {
  name: string
}

const CustomHooks = () => {
  const { data, loading, error, deleteItem, fetchData } = useFecthData<PokemonProps>('https://pokeapi.co/api/v2/pokemon');

  // Apenas uma chamada
  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <S.Container>
      <h1>Custom Hooks</h1>
      <p>Nós podemos criar nossos próprios hooks, como a maioria já sabe</p>
      
      <hr />
      <h2>Lista de Pokemons</h2>
      {loading && <p>Carregando</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && data && data.map(({ name }: PokemonProps) => {
        return <Pokemon key={name} name={name} deletePokemon={deleteItem} />
      })}
    </S.Container>
  );
};

export default CustomHooks;
