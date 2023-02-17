import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "animate.css";
import { Hero } from "./components/Hero";
import { Presentacion } from "./components/Presentacion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container mx-auto	">
      <Hero />

      <hr />
      <Presentacion />
    </div>
  );
}

export default App;
