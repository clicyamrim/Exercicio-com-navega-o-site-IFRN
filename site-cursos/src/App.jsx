import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Menu";

import Inicio from "./paginas/Inicio";
import Informatica from "./paginas/Informatica";
import Alimentos from "./paginas/Alimentos";
import Apicultura from "./paginas/Apicultura";
import NaoEncontrada from "./paginas/NaoEncontrada";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/informatica" element={<Informatica />} />
          <Route path="/alimentos" element={<Alimentos />} />
          <Route path="/apicultura" element={<Apicultura />} />

          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;