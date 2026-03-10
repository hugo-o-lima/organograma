import "./TextEnter.css";

const TextEnter = (props) => {
  const placeholderModificada = props.placeholder;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  };

  return (
    <div className="text-enter">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        required={props.obrigatorio}
        id="Nome"
        placeholder={`${placeholderModificada}...`}
        type="text"
        value={props.valor}
      />
    </div>
  );
};

export default TextEnter;
