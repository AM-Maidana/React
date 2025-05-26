import React from "react";

function SecaoSobre() {
    return (
        <div className="secaoSobre">
            {/* Este exercicio serve para trazer um título e um paragráfo :D */}
            <h2 style={{color:'#ad0d7d'}}>Sobre Nós</h2>
            <p>
                Somos uma equipe de 1 desenvolvedora que está buscando se aprimorar no React. <br />
                Este projeto é um exercício para praticar o uso de componentes, props e estados no React. <br />
                Acreditamos que a prática é essencial para o aprendizado :D
            </p>
        </div>
    )
}

export default SecaoSobre;