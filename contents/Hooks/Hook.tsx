import * as S from './styles'

const Hook = () => (
  <S.Container>
    <h1>Hooks</h1>
    <p>São funções do React que permite usar o gerenciamento de estado,
      controlar o ciclo de vida do component sem precisar criar classes como era feito no passado</p>

    <p>Use Hooks apenas no nível superior, não use Hooks dentro de loops, regras condicionais ou funções aninhadas (funções dentro de funções)</p>
    <p>Use Hooks apenas dentro de funções do React. Não use Hooks dentro de funções JavaScript comuns</p>
    <p>Não use condicionais para executar os hooks, ou seja, um useEffect dentro de um if</p>
    <p>Procure adicionar os states, props e funções no array de dependencias (quando existir).
      Não sabe se deve ou não colocar a dependência, use o ESLint para te guiar</p>
  </S.Container>
)

export default Hook;
