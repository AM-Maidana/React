import React, { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h2>Adicione ou tire um número </h2>
            <p>{contador}</p>

            <button style={{ backgroundColor: "#880101", padding: "10px", color: "white" }}
                onClick={() => setContador(contador - 1)}
            >-1</button>


            <button style={{ backgroundColor: "#21a843", padding: "10px", color: "white" }}
                onClick={() => setContador(contador + 1)}
            >+1</button>

        </div>
    );
}

export default Contador;
