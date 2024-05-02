import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PaginaInicial from "./routes/PaginaInicial";
import BuscaMedicamento from "./routes/BuscaMedicamento";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Medicamento from "./components/Medicamento";
import Navbar from "./components/Navbar";
import Agendamento from "./routes/Agendamento";

import paracetamol from "./assets/paracetamol.png";
import dorflex from "./assets/medicamentos/Dorflex.jpg";
import buscopan from "./assets/medicamentos/Buscopan.jpg";
import dipirona from "./assets/medicamentos/Dipirona.jpg"
import novalgina from "./assets/medicamentos/Novalgina.png"
import ibuprofeno from "./assets/medicamentos/Ibuprofeno.png"
import doril from "./assets/medicamentos/Doril.jpg"


const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />,
  },
  {
    path: "/Paracetamol",
    element: <Medicamento
      nome={"Paracetamol"}
      img={paracetamol}
      descricao={"Paracetamol é um medicamento indicado para o tratamento de febre."}
      composicao={"Cada comprimido contém 750mg de Paracetamol."}
      conteudo={"Embalagem com 20 comprimidos"}
      uso={"Uso oral"}
      generico={true}
      fabricante={"EMS"}
      forma={"Comprimido"}
      tipoMedicamento={"Analgésico"} />
  },
  {
    path: "/Dipirona",
    element: <Medicamento
      nome={"Dipirona Monoidratada"}
      img={dipirona}
      descricao={"Dipirona é um medicamento indicado para o tratamento de dore e febre."}
      composicao={"Cada comprimido contém 1g de Dipirona Monoidratada."}
      conteudo={"Embalagem com 10 comprimidos"}
      uso={"Uso oral - Adulto e pediátrico acima de 15 anos"}
      generico={true}
      fabricante={"Prati-Donaduzzi"}
      forma={"Comprimido"}
      tipoMedicamento={"Analgésico"} />
  },
  {
    path: "/Ibuprofeno",
    element: <Medicamento
      nome={"Ibuprofeno"}
      img={ibuprofeno}
      descricao={"Ibuprofeno é um medicamento indicado para o tratamento de inflamações."}
      composicao={"Cada comprimido contém 400mg de Ibuprofeno."}
      conteudo={"Embalagem com 10 comprimidos"}
      uso={"Uso oral - Adulto e pediátrico acima de 12 anos"}
      generico={true}
      fabricante={"Medley"}
      forma={"Cápsulas liquidas"}
      tipoMedicamento={"Anti-inflamatório"} />
  },
  {
    path: "/Dorflex",
    element: <Medicamento
      nome={"Dorflex"}
      img={dorflex}
      descricao={"Dorflex é um medicamento indicado para o tratamento de dores musculares."}
      composicao={"Cada comprimido contém 35mg de Orfenadrina, 300mg de Dipirona Monoidratada."}
      conteudo={"Embalagem com 36 comprimidos"}
      uso={"Uso oral - Uso Adulto"}
      generico={true}
      fabricante={"Sanofi"}
      forma={"Comprimido"}
      tipoMedicamento={"Analgésico e Relaxante Muscular"}
    />
  },
  {
    path: "/Doril",
    element: <Medicamento
      nome={"Doril"}
      img={doril}
      descricao={"Doril é um medicamento indicado para o tratamento de dores."}
      composicao={"Cada comprimido contém 500mg de ácido acetilsalicilico."}
      conteudo={"Embalagem com 20 comprimidos"}
      uso={"Uso oral - Uso Adulto"}
      generico={true}
      fabricante={"Sanofi"}
      forma={"Comprimido"}
      tipoMedicamento={"Analgésico e Antitérmico"} />
  },
  {
    path: "/Buscopan",
    element: <Medicamento
      nome={"Buscopan"}
      img={buscopan}
      descricao={"Buscopan é um medicamento indicado para o tratamento de cólicas."}
      composicao={"Cada comprimido contém 10mg de butibrometo de escopolamina."}
      conteudo={"Embalagem com 20 Drágeas"}
      uso={"Uso oral - Uso Adulto e pediátrico acima de 6 anos"}
      generico={true}
      fabricante={"Boehringer"}
      forma={"Drágeas"}
      tipoMedicamento={"Antiespasmódico"} />
  },
  {
    path: "/Novalgina",
    element: <Medicamento
      nome={"Novalgina"}
      img={novalgina}
      descricao={"Novalgina é um medicamento indicado para o tratamento de febre."}
      composicao={"Cada comprimido contém 1g de Dipirona."}
      conteudo={"Embalagem com 10 comprimidos"}
      uso={"Uso oral - Uso Adulto e pediátrico acima de 15 anos"}
      generico={true}
      fabricante={"Sanofi"}
      forma={"Comprimido"}
      tipoMedicamento={"Analgésico"} />
  },
  {
    path: "/Medicamentos",
    element: <BuscaMedicamento />,
  },
  {
    path: "/Agendamento",
    element: <Agendamento />,
  
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
