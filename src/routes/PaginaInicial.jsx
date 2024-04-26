import React from "react";
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

const medicamentos = [
  {
    nome: "Paracetamol",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Paracetamol",
  },
  {
    nome: "Dipirona",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Dipirona",
  },
  {
    nome: "Ibuprofeno",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Ibuprofeno",
  },
  {
    nome: "Dorflex",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Dorflex",
  },
  {
    nome: "Doril",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Doril",
  },
  {
    nome: "Novalgina",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Novalgina",
  },
  {
    nome: "Buscopan",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Buscopan",
  },
  {
    nome: "Omeprazol",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Omeprazol",
  },
  {
    nome: "Ranitidina",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Ranitidina",
  },
  {
    nome: "Dorflex",
    imagem: paracetamol,
    dosagem: "500mg",
    href: "/Dorflex",
  }
];

export default function PaginaInicial() {
  return (
    <div className="paginaInicial">
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
            >
              <ChevronLeftIcon style={{ color: "var(--primary-color)" }} />
            </Button>
          </div>
          <div className="medicamentos">
            {medicamentos.map((medicamento) => (
              <CardMedicamento
                imagem={medicamento.imagem}
                nome={medicamento.nome}
                dosagem={medicamento.dosagem}
                href={medicamento.href}
              />
            ))}
          </div>
          <div className="button-left">
            <Button
              variant="light"
              style={{ background: "var(--secundary-color)" }}
            >
              <ChevronRightIcon style={{ color: "var(--primary-color)" }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
