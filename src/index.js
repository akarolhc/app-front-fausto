import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PaginaInicial from "./routes/PaginaInicial";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Medicamento from "./components/Medicamento";

import dorflex from "./assets/medicamentos/Dorflex.jpg";
import buscopan from "./assets/medicamentos/Buscopan.jpg";
import dipirona from "./assets/medicamentos/Dipirona.jpg"
import novalgina from "./assets/medicamentos/Novalgina.png"


const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />,
  },
  {
    path: "/Dorflex",
    element: <Medicamento
      nome={"Dorflex"}
      img={dorflex}
      descricao={"Dorflex é um medicamento indicado para o tratamento de dores musculares."}
      composicao={"Cada comprimido contém 35mg de Orfenadrina e 300mg de Dipirona."}
      conteudo={"Embalagem com 30 comprimidos"}
      uso={"Uso oral"}
      generico={true}
      fabricante={"Sanofi"}
      forma={"Comprimido"}
      tipoMedicamento={"Analgésico"}
    />
  },
  {
    path: "/Buscopan",
    element: <Medicamento
      nome={"Buscopan"}
      img={buscopan}
      descricao={"Buscopan é um medicamento indicado para o tratamento de cólicas."}
      composicao={"Cada comprimido contém 10mg de Hioscina."}
      conteudo={"Embalagem com 20 comprimidos"}
      uso={"Uso oral"}
      generico={true}
      fabricante={"Boehringer"}
      forma={"Comprimido"}
      tipoMedicamento={"Antiespasmódico"} />
  },
  {
    path: "/Dipirona",
    element: <Medicamento
      nome={"Dipirona"}
      img={dipirona}
      descricao={"Dipirona é um medicamento indicado para o tratamento de dores."}
      composicao={"Cada comprimido contém 750mg de Dipirona."}
      conteudo={"Embalagem com 20 comprimidos"}
      uso={"Uso oral"}
      generico={true}
      fabricante={"EMS"}
      forma={"Comprimido"}
      tipoMedicamento={"Analgésico"} />
  },
  {
    path: "/Novalgina",
    element: <Medicamento
      nome={"Novalgina"}
      img={novalgina}
      descricao={"Novalgina é um medicamento indicado para o tratamento de febre."}
      composicao={"Cada comprimido contém 1g de Dipirona."}
      conteudo={"Embalagem com 20 comprimidos"}
      uso={"Uso oral"}
      generico={true}
      fabricante={"EMS"}
      forma={"Comprimido"}
      tipoMedicamento={"Analgésico"} />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
