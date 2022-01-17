import { useCallback, useEffect, useState, ChangeEvent } from 'react';

import * as S from './styles'

const Callback = () => {
  const [value, setValue] = useState<number>(1);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [result, setResult] = useState<number>(0);

  // const handleResult = useCallback(() => {
  //   setResult(value * multiplier)
  // }, [value, multiplier])

  const handleResult = useCallback(() => {
    setResult(value * multiplier)
  }, [value])

  return (
    <S.Container>
      <h1>useCallback</h1>
      <p>Hooks que faz a memoização das funções</p>
      <p>Mas o que é memoização? "Segundo a Wikipedia, memoização é uma técnica de otimização usada para
        aumentar o desempenho de sistemas através de armazenar os resultados de funções “caras”
        e retornar o mesmo resultado quando os mesmos parâmetros forem passados novamente."
      </p>
      <p>Todas as funções dentro dos componentes react precisam usar o useCallback para evitar as famosas rerenderizações</p>
      <p>Não se esqueça de preencher o array de dependências</p>
      <hr />
      
      <h2>Multiplicador</h2>
      <label>
        Valor: 
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.currentTarget.value))}
        />
       </label>
      <label>
        Multiplicador: 
        <input
          type="number"
          value={multiplier}
          onChange={(e) => setMultiplier(Number(e.currentTarget.value))}
        />
      </label>
      <br />
      <br />
      <button onClick={handleResult}>
        Gerar resultado
      </button>
      <p>Resultado: {result}</p>
      <hr />

    </S.Container>
  );
};

export default Callback;
