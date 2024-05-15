import "./App.css";
import { Header } from "./Componentes/Header";
import { Lista } from "./Componentes/Lista";

function App() {

  return (
    <>
     <div className="container">
      <Header title="Projeto React" subTitulo="Sistema" />
      <Lista />
     </div>
    </>
  )
}

export default App
