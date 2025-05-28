import React, {useEffect} from "react";

function MsgInicial() {
    useEffect(() => {
        console.log("Componente montado")
    }, []);

    return <span>Componente Montado :D</span> // todo -> retornar algo ""visivel"""
}

export default MsgInicial;