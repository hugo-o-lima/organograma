import { useState } from "react";
import "./TextEnter.css";

const TextEnter = (props) => {

const [] = useState('')

    const aoDigitado = (evento) => {
    valor = evento.target.value
    console.log(valor)
  }

  return (
    <div className="text-enter">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.obrigatorio}
        id="Nome"
        placeholder={`${props.placeholder}...`}
        type="text"
      />
    </div>
  );
};

export default TextEnter;
