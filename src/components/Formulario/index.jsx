import "./Formulario.css";
import TextEnter from "../TextEnter";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

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
    evento.preventDefault();
    console.log("Submetido");
    props.aoCadastro({
      nome,
      funcao,
      imagem,
      time
    })
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do seu amigo</h2>
        <TextEnter
          label="Nome"
          obrigatorio={true}
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <TextEnter
          label="Função"
          obrigatorio={true}
          placeholder="Digite sua função"
          valor={funcao}
          aoAlterado={(valor) => setFuncao(valor)}
        />
        <TextEnter
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          itens={times}
          label="Time"
          obrigatorio={true}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
