import { memo, useCallback } from 'react';
import * as S from './styles'

type PokemonProps = {
  name: string,
  deletePokemon: (name: string) => void
}

const Pokemon = ({ name, deletePokemon }: PokemonProps) => {
  console.log('render Pokemon')

  const handleDelete = useCallback(() => {
    deletePokemon(name);
  }, [name])

  return (
    <S.Card>
      <S.CardName>{name}</S.CardName>
      <S.CardDelete type="button" onClick={handleDelete}>Deletar Pokemon</S.CardDelete>
    </S.Card>
  )
}
export default memo(Pokemon);
