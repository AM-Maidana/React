import logo from './logo.svg';
import Ex1 from './Ex1';
import './App.css';
import BoasVindas from './components/BoasVindas';
import CartaoUsuario from './components/CartaoUsuario';

function App() {

  const Nome = "Turma de Aprendizagem Digix";
  const Saudacao = ", seja bem-vindo!";

  return (
    <div className="App">
    {/* ------------- Exercicio 1 ------------- */}
      <h2><BoasVindas Saudacao={Saudacao} Nome={Nome}/></h2>
      <hr></hr>
    {/* ------------- Exercicio 2 ------------- */}
      <div className='Ex2'>
        <h2>Exercício 2</h2>
        <div className='subEx2'>
        <p><CartaoUsuario /></p>
      </div>
      </div>
    {/* ------------- Exercicio 3 ------------- */}
      <hr></hr>
      
    </div>
  );
}

export default App;
