import React from "react";
import CardProduto from "./CardProduto";
import "./App.css";


import "./css/Desafio2605.css";
import PerfilUsuario from "./components/Desafio2605";

// const produtos = [
//   {
//     nome: "Gato 1",
//     preco: 10000,
//     descricao: "Gato muito bonito da Raça cinza",
//     imagem: "https://pbs.twimg.com/ext_tw_video_thumb/1494889862197092360/pu/img/DQyiLygZ-tLw60F4.jpg"
//   },
//   {
//     nome: "Gato 2",
//     preco: 20000,
//     descricao: "Gato muito bonito da Raça preto",
//     imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQD8fsBr034QwYeSG29K3TaEBvHUiI-b5ebg&s"
//   },
//   {
//     nome: "Gato 3",
//     preco: 30000,
//     descricao: "Gato muito bonito da Raça rajada",
//     imagem: "https://www.bnews.com.br/media/_versions/legacy/2021/11/331373_widexl.jpg"
//   },
//   {
//     nome:"Gato sem pelo",
//     preco: 40000,
//     descricao: "Gato muito esquisito da Raça sem pelo",
//     imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHxd9WdLBF1SF2D3iNGmjgLueretevmkHFg&s"
//   }
// ];

// function App() {
//   return (
//     <div className="catalogo">
//       {produtos.map((produto, index) => (
//         <CardProduto
//           key={index}
//           nome={produto.nome}
//           preco={produto.preco}
//           descricao={produto.descricao}
//           imagem={produto.imagem}
//         />
//       ))}
//     </div>
//   );
// }
//* Desafio - 26 de maio/
function App() {
  return (
    <div className="App">
      <h1>Desafio - 26 de maio</h1>
      <PerfilUsuario
        imagem="https://pbs.twimg.com/media/E17dV5_VkAAesFs.jpg"
        nome="Amanda Maidana"
        bio="Entusiasta de tecnologia apaixonada por gatos e programação. Sempre em busca de aprender algo novo e compartilhar conhecimento!"
      />
    </div>
  );
}
export default App;