import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import HelloWorld from "./components/HelloWorld";
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'Gleyson';

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150"

  const nome = "Clara e Maria"

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro app</p>
      <p>Nome do usuário: { name }</p>
      <p>Soma: { 2 + 2 }</p>
      <p>Função soma: { sum(1, 2) }</p>
      <img src={ url } alt="Minha imagem" />
      <HelloWorld />

      <SayMyName
        nome="Gleyson"
      />

      <SayMyName
        nome={ nome }
      />

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
      
    </div>
  );
}

export default App;
