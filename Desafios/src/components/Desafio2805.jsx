//todo -> useState, useEffect, useRef e useContext*/
//todo -> App de notas, editar e etc*/

import React, { useState, useEffect, useRef, useContext, createContext } from "react";

const NotasContext = createContext();

function NotasProvider({ children }) {
    const [listaNotas, setListaNotas] = useState([]);
    const [nomeAluno, setNomeAluno] = useState('');
    const [nota, setNota] = useState(0);

    const adicionarNota = () => {
        const novaNota = { nome: nomeAluno, nota: Number(nota) };
        setListaNotas([...listaNotas, novaNota]);
        setNomeAluno('');
        setNota(0);
    };

    const editarNota = (index) => {
        const notaParaEditar = listaNotas[index];
        setNomeAluno(notaParaEditar.nome);
        setNota(notaParaEditar.nota);
        const novaLista = listaNotas.filter((_, i) => i !== index);
        setListaNotas(novaLista);
    };

    return (
        <NotasContext.Provider value={{
            listaNotas,
            setListaNotas,
            nomeAluno,
            setNomeAluno,
            nota,
            setNota,
            adicionarNota,
            editarNota
        }}>
            {children}
        </NotasContext.Provider>
    );
}
// ------

function BlocoDeNotas() {

    const {
        listaNotas,
        nomeAluno,
        setNomeAluno,
        nota,
        setNota,
        adicionarNota,
        editarNota
    } = useContext(NotasContext);

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);


    return (
        <div>
            <h2>Lançamento escolar - Maidana</h2>
            <input ref={inputRef} type="text" placeholder="Nome do aluno" value={nomeAluno} onChange={(e) => setNomeAluno(e.target.value)}></input>
            <input ref={inputRef} type="number" placeholder="Nota do aluno" value={nota} onChange={(e) => setNota(e.target.value)}></input>
            <button onClick={adicionarNota}>Lançar nota</button>

            <div>
                <h2>Notas já lançadas:</h2>
                <table border="1" cellPadding="6">
                    <thead>
                        <tr>
                            <th>Nome do Aluno</th>
                            <th>Nota</th>
                            <th>#</th>

                        </tr>
                    </thead>
                    <tbody>
                        {listaNotas.map((lancamento, index) => (
                            <tr key={index}>
                                <td>{lancamento.nome}</td>
                                <td>{lancamento.nota}</td>
                                <td>
                                    <button onClick={() => editarNota(index)} style={{
                                        backgroundColor: '#daa001',
                                        padding: '10px',
                                        color: 'black',
                                        borderRadius: '20px',
                                        border: 'none'
                                    }}>Editar Nota</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export { NotasProvider };        
export default BlocoDeNotas;  