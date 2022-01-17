import { useState, ChangeEvent, useMemo } from 'react';

import * as S from './styles'

const Callback = () => {
  const [techLead, setTechLead] = useState<string>('Heitor')

  const nameList = useMemo(() => [
    {
      id: 1,
      name: 'Higor'
    },
    {
      id: 2,
      name: 'Chady'
    },
    {
      id: 3,
      name: 'Gabriel'
    },
    {
      id: 4,
      name: 'Eric'
    },
    {
      id: 5,
      name: techLead
    }
  ], [])
  // ], [techLead])


  return (
    <S.Container>
      <h1>useMemo</h1>
      <p>Funciona semelhantemente com o useCalblack, porém serve para retornar valores memoizados</p>
      <p>Ele apenas recalculará o valor memorizado quando uma das dependências for alterada.
        Essa otimização ajuda a evitar cálculos caros em cada renderização.</p>
      <p>O primeiro argumento precisa ser um callback</p>

      <p>Não se esqueça de preencher o array de dependências</p>
      <hr />
      
      <h2>Lista de Font-Ends</h2>
      <ul>
        {nameList.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>

      <p>Nome do TechLead</p>
      <input
        type="text"
        value={techLead}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTechLead(e.currentTarget.value)}
      />
      <hr />

    </S.Container>
  );
};

export default Callback;
