import React from "react";
import { useState } from "react";
import "../styles/PaginaInicial.css";
import CardFarmacia from "../components/CardFarmacia";
import catarinense from "../assets/catarinense.png";
import nissei from "../assets/nissei.png";
import panvel from "../assets/panvel.png";
import precoPopular from "../assets/precoPopular.png";
import pagueMenos from "../assets/pagueMenos.png";
import { Button } from "react-bootstrap";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GridViewIcon from "@mui/icons-material/GridView";
import AddIcon from "@mui/icons-material/Add";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import paracetamol from "../assets/paracetamol.png";
import CardMedicamento from "../components/CardMedicamento";
import Navbar from "../components/Navbar";
const medicamentos = [
  {
    id: 1,
    nome: "Paracetamol",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Paracetamol",
  },
  {
    id: 2,
    nome: "Dipirona",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Dipirona",
  },
  {
    id: 3,
    nome: "Ibuprofeno",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Ibuprofeno",
  },
  {
    id: 4,
    nome: "Dorflex",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Dorflex",
  },
  {
    id: 5,
    nome: "Doril",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Doril",
  },
  {
    id: 6,
    nome: "Novalgina",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Novalgina",
  },
  {
    id: 7,
    nome: "Buscopan",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Buscopan",
  },
  {
    id: 8,
    nome: "Omeprazol",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Omeprazol",
  },
  {
    id: 9,
    nome: "Ranitidina",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Ranitidina",
  },
  {
    id: 10,
    nome: "Dorflex",
    imagem: paracetamol,
    dosagem: "500mg",
    id: 11,
    href: "/Dorflex",
  }
];

export default function PaginaInicial() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToNextSlide = () => {
    if (currentSlide < medicamentos.length - 2) {
      setCurrentSlide(currentSlide + 1);
    }

    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
    }
    , 500);

  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
    }
    , 500);
  }
  


  return (
    <div className="paginaInicial">
      <Navbar />
      <div className="buttons conteudo">
        <Button variant="light" className="button-nav">
          <div className="icon">
            <GridViewIcon
              style={{
                color: "var(--hover-color)",
                fontSize: "6rem",
                width: "2.5rem",
              }}
            />
          </div>
          <span>TODOS OS DEPARTAMENTOS</span>
        </Button>
        <Button variant="light" className="button-nav">
          <div className="icon">
            <AddIcon
              style={{
                color: "var(--hover-color)",
                fontSize: "6rem",
                width: "3rem",
              }}
            />
          </div>
          <span>MAIS BUSCADO</span>
        </Button>
        <Button variant="light" className="button-nav">
          <div className="icon">
            <AutoAwesomeMotionIcon
              style={{
                color: "var(--hover-color)",
                fontSize: "2.5rem",
                width: "3rem",
              }}
            />
          </div>
          <span>MARCAS SELECIONADAS</span>
        </Button>
        <Button variant="light" className="button-nav">
          <AddIcon
            style={{
              color: "var(--primary-color)",
              fontSize: "6rem",
              width: "3rem",
            }}
          />
          <span>FARMACIAS PRÓXIMAS</span>
        </Button>
      </div>
      <div className="farmacia conteudo">
        <h1>Principais Farmácias</h1>
        <div className="farmacias">
          <CardFarmacia imagem={catarinense} nome="Catarinense" />
          <CardFarmacia imagem={nissei} nome="Nissei" />
          <CardFarmacia imagem={panvel} nome="Panvel" />
          <CardFarmacia imagem={precoPopular} nome="Preço Popular" />
          <CardFarmacia imagem={pagueMenos} nome="Pague Menos" />
        </div>
      </div>
      <div className="medicamentos_div conteudo">
        <h1>Os Mais Buscados</h1>
        <div className="carrousel">
          <div className="button-right">
            <Button
              variant="light"
              style={{ background: "var(--secundary-color)" }}
              onClick={goToPrevSlide}
            >
              <ChevronLeftIcon style={{ color: "var(--primary-color)" }} />
            </Button>
          </div>
          <div className="medicamentos">
            {medicamentos.slice(currentSlide, currentSlide + 4).map((medicamento) => (
              <CardMedicamento
                key={medicamento.id}
                nome={medicamento.nome}
                imagem={medicamento.imagem}
                dosagem={medicamento.dosagem}
                className={`card_medicamento ${animating ? "animating" : ""}`}
                href={medicamento.href}
              />
            ))}
          </div>
          <div className="button-left">
            <Button
              variant="light"
              style={{ background: "var(--secundary-color)"}}
              onClick={goToNextSlide}
            >
              <ChevronRightIcon style={{ color: "var(--primary-color)" }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
