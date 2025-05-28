import logo from './logo.svg';
import Ex1 from './Ex1';
import './App.css';
import BoasVindas from './components/26-05/BoasVindas';
import CartaoUsuario from './components/26-05/CartaoUsuario';

import { BtnLegal } from './components/26-05/BtnLegal';

import MensagemColorida from './components/26-05/MsgColorida';

import SecaoSobre from './components/26-05/SecaoSobre';
import Contador from "./components/Contador";

import MsgInicial from './components/MsgInicial';
import InputAutoFocus from './components/InputAutoFocus';


function App() {

    //   const Nome = "Turma de Aprendizagem Digix";
    //   const Saudacao = ", seja bem-vindo!";

    //   return (
    //     <div className="App">
    //     {/* ------------- Exercicio 1 ------------- */}
    //       <h2><BoasVindas Saudacao={Saudacao} Nome={Nome}/></h2>
    //       <hr></hr>
    //     {/* ------------- Exercicio 2 ------------- */}
    //       <div className='Ex2'>
    //         <h2>Exercício 2</h2>
    //         <div className='subEx2'>
    //         <p><CartaoUsuario /></p>
    //       </div>
    //       </div>
    //     {/* ------------- Exercicio 3 ------------- */}
    //       <hr></hr>

    //     </div>
    //   );
    // * Exercicio 1 - 26 de Maio//
    // return (
    //   <div className='Paibtn'>
    //     {BtnLegal()}
    //   </div>
    // )
    // * Exercicio 2 - 26 de Maio//
    // return (
    //   <div style={{ display: 'flex',
    //   flexDirection: 'column',
    //   textAlign: 'center', 
    //   alignItems: 'center', 
    //   padding: '20px', 
    //   height: 100, }}>

    //     <h2>Exercicio 2 - mensagens coloridas!</h2>
    //     <h2 style={{border: '1px solid black', borderRadius:'20px', padding: '10px'}}>
    //     <MensagemColorida cor="#6197fb" texto="Testando mensagens coloridas com props!" />
    //     </h2>
    //   </div>
    // )
    // * Exercicio 3 // 
    // return(
    //     <div style={{display: 'flex', textAlign: 'center', fontSize: '10px', padding: '20px', justifyContent: 'center'}}>
    //         <h2>{SecaoSobre()}</h2>
    //     </div>

    // )
    // ? aula 28/05
    // return (
    //     <div className='container-Pai'>
    //         <h2>{Contador()}</h2>
    //     </div>
    // );
    // * Exercicio 2
    // return (
    //     <div>
    //         <h2><MsgInicial /></h2>
    //     </div>
    // );
    // * Exercicio 3
    return (
        <div>
            <h2><InputAutoFocus /></h2>
        </div>
    )
}

export default App;
