import "./Formulario.css";
import TextEnter from "../TextEnter";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do seu amigo</h2>
        <TextEnter label="Nome" placeholder="Digite seu nome" />
        <TextEnter label="Função" placeholder="Digite sua função" />
        <TextEnter label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};

export default Formulario;
