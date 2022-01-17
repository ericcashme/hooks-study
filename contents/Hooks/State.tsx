import { useEffect, useState } from 'react';

import * as S from './styles'

const State = () => {
  const [title, setTitle] = useState<string>('Hello world');
  const [newTitle, setNewTitle] = useState<string>(title);
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState<number[]>([1, 2, 3, 4]);

  const AddPrefixTitle = () => {
    setNewTitle(`PREFIX - ${title}`)
  }
 
  const addOne = () => {
    setCount(oldState => oldState + 1)
    // setCount(count - 1)
  }

  const removeOne = () => {
    setCount(oldState => oldState - 1)
  }

  const duplicateList = () => {
    setList((oldList: number[]) => {
      const newList = oldList.map(item => item * 2)

      return newList
    })
  }

  return (
    <S.Container>
      <h1>useState</h1>
      <p>Ele é o nosso gerenciador de stado do hooks.</p>
      <p>obs: nunca colocar alguma informação que é fixa como um state(estado)</p>
      <code>
        const [text, setText] = useState('Olá Mundo'); <br/>
        return {`{text}`}
      </code>

      <h3>{title}</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <hr />

      <h3>{newTitle}</h3>
      <button type='button' onClick={AddPrefixTitle}>Add prefix</button>
      <hr />

      <h3>Counter: {count}</h3>
      <button type='button' onClick={removeOne}>- 1</button>
      <button type='button' onClick={addOne}>+ 1</button>
      <hr />

      <h3>Duplicate list</h3>
      <ul>
        {list.map((item: number) => <li key={item}>{item}</li>)}
      </ul>
      <button type='button' onClick={duplicateList}>Duplicar números da lista</button>
      <hr />

    </S.Container>
  );
};

export default State;
