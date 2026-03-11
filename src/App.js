import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import { useState } from "react";
import Time from "./components/Time";

function App() {
  const times = [
    {
      nome: "Programador",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9"
    },{
      nome: "Estudante",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },{
      nome: "Desempregado",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2",
    },{
      nome: "Engenheiro",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },{
      nome: "Jogador",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },{
      nome: "Gui CC",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },{
      nome: "Gestor",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoCadastro = (colaborador) => {
    console.log(colaborador);
    setColaboradores({ ...colaboradores, colaborador });
  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastro={(colaborador) => aoNovoCadastro(colaborador)} />
      
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} />)}

    </div>
  );
}

export default App;
