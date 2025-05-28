import React, {useEffect, useRef} from "react";

//todo - > preciso retornar um campo input com o treco piscando dentro dele "focus"

function InputAutoFocus () {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <h2>:D</h2>
            <input ref={inputRef} type="text" placeholder="D:"></input>
        </div>
    );
}

export default InputAutoFocus;



 <div>
                <h2>Notas já lançadas</h2>
                <ul>
                    {listaNotas.map((lancamentoNota, index) => (
                        <li key={index}>{lancamentoNota.nome} - Nota: {lancamentoNota.nota}</li>
                    ))}
                </ul>
            </div>