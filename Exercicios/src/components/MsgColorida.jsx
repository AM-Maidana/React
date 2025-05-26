import React from "react";

function MensagemColorida(props) {
  return (
    <p style={{ color: props.cor, fontSize: "20px" }}>
      {props.texto}
    </p>
  );
}

export default MensagemColorida;
