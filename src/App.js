import { useState } from 'react';
import './App.css';
import Condicional from './components/Condicional';
import Evento from './components/Evento';
import Form from './components/Form';
import HelloWorld from "./components/HelloWorld";
import List from './components/List';
import ListaItens from './components/ListaItens';
import Pessoa from './components/Pessoa';
import Saudacao from './components/Saudacao';
import SayMyName from './components/SayMyName';
import SeuNome from './components/SeuNome';

function App() {
  const [nomeState, setNomeState] = useState()
  
  const name = 'Gleyson';

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150"

  const nomes = "Clara e Maria"

  const meusItens = ['React', 'Vue', 'CSS', 'Next.js']

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <h3>Básico</h3>
      <p>Meu primeiro app</p>
      <p>Nome do usuário: { name }</p>
      <p>Soma: { 2 + 2 }</p>
      <p>Função soma: { sum(1, 2) }</p>
      <img src={ url } alt="Minha imagem" />

      <h3>Componente</h3>
      <HelloWorld />

      <h3>Componente com props</h3>
      <SayMyName
        nome="Gleyson"
      />

      <SayMyName
        nome={ nomes }
      />

      <h3>Componente com várias props</h3>
      <Pessoa
        foto="https://via.placeholder.com/150"
        nome="Gleyson"
        idade="45"
        profissao="Analista de TI"
      />

      <List />

      <h3>Testando eventos</h3>
      <Evento numero={1} />
      <Evento numero={2} />

      <h3>Submissão de formulário</h3>
      <Form />

      <h3>Renderização Condicional</h3>
      <Condicional />

      <h3>Renderização de Listas</h3>
      <ListaItens itens={meusItens} />
      <ListaItens itens={[]} />

      <h3>State Lift</h3>
      <SeuNome setNomeState={setNomeState} />
      <p>Nome: {nomeState}</p>
      <Saudacao nomeState={nomeState} />
      
    </div>
  );
}

export default App;
