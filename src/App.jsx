import React from "react"
import Arrayzada from "./Aulas/Arraysnojsx";
import Exercicioum from "./Aulas/Exercicioum";
import ListaProds from "./Aulas/Exerciciodois";
import HeaderFoot from "../src/Aulas/Componentesum"
import Form from "./Aulas/Form/Form";

const Teste = () => {
  const active = true;
  if (!active) {
    return <p>Título Inativo</p>
  } else {
    return <p>Título Ativo</p>
  }
}

function App() {
  return (
    <>
    <Teste/>
    <Form />
    </>
  )
}
// Função simples para eventos simples

export default App
