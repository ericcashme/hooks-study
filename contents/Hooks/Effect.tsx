import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import * as S from './styles'

const Effect = () => {
  const [count, setCount] = useState<number>(0);
  const [subtitle, setSubtitle] = useState<string>('');

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    document.title = `Você clicou ${count} vezes`;
    
    // funciona como o componentWillUnmount
    // Muito bom para remover 
    return () => {
      document.title = `Você clicou 0 vezes`;
    }
  }, [count]);

  // useEffect(() => {
  //   console.log(subtitle)
  // }, []);

  useEffect(() => {
    console.log(subtitle)
  }, [subtitle]);


  const handleFetchList = useCallback(() => {
    console.log('fetch da list...')
  }, [])

  useEffect(() => {
    handleFetchList()
  }, [handleFetchList]);


  return (
    <S.Container>
      <h1>useEffect</h1>
      <p>Hooks que serve para observar as mudanças de estado ou props e fazer as modificações desejadas</p>
      <p>Ajuda controlar o ciclo de vida dos components na nova versão do react. Apesar de ser totalmente diferente 
        do ciclo de vida antigo tanto no jeito de usar como na forma que funciona, ele pode substituir muitas das funções antigas
        como: componentDidMount, componentDidUpdate, componentWillUnmount. 
      </p>
      <p>O array de dependencia será responsável por observar as mudanças que você realiza e re-executar o callback dentro do useEffect</p>
      <p>É importantíssimo, mas não obrigatório, colocar as props, states and funções dentro do array de dependências</p>
      
      <hr />
      
      <h2>Counter</h2>
      <h3>Você clicou {count} vezes</h3>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
      <hr />

      <h2>Um useEffect para cada função</h2>
      <button onClick={() => setSubtitle('Olá eu sou um subtítulo')}>
        Log do subtítulo
      </button>
      <hr />

      <Link href="/callback">Ir para o useCallback</Link>
    </S.Container>
  );
};

export default Effect;
