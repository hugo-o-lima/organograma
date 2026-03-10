import "./Formulario.css";
import TextEnter from "../TextEnter";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const times = [
    "Programador",
    "Estudante",
    "Desempregado",
    "Engenheiro",
    "Jogador",
    "Gui CC",
    "Gestor",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Submetido')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do seu amigo</h2>
        <TextEnter label="Nome" obrigatorio={true} placeholder="Digite seu nome" />
        <TextEnter label="Função" obrigatorio={true} placeholder="Digite sua função" />
        <TextEnter label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa itens={times} label="Time" />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
