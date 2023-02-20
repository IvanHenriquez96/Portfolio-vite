import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "animate.css";
import { Hero } from "./components/Hero";
import { Presentacion } from "./components/Presentacion";
import { Motivaciones } from "./components/Motivaciones";
import { SeccionProyectosRealizados } from "./components/SeccionProyectosRealizados";
import { SeccionTecnologias } from "./components/SeccionTecnologias";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container mx-auto	">
      <Hero />
      <SeccionTecnologias />
      <br />
      <br />
      <Presentacion />
      <br />
      <br />
      <br />
      <Motivaciones />
      <br />
      <br />
      <br />
      <SeccionProyectosRealizados />
    </div>
  );
}

export default App;
