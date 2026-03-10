import "./TextEnter.css";

const TextEnter = (props) => {

const aoDigitado = (evento) => {
      console.log(evento.target.value)
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
