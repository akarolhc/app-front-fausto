import React from "react";
import "../styles/PaginaInicial.css";
import Publicacao from "../components/Publicacao";

import imgCafe from '../assets/img/cafe.png';
import imgBarco from '../assets/img/barco.png'
import imgPessoa from '../assets/img/pessoa.png'
import imgPessoas from '../assets/img/pessoas.png'
import imgPraia from '../assets/img/praia.png'

const pictures = [
  {
    id: 1,
    nome: "Little coffe",
    descricao: "This is a little coffe",
    img: imgCafe
  },
  {
    id: 2,
    nome: "Horizon",
    descricao: "Sailing towards dreams, with the heart as my guide and the horizon as my destination",
    img: imgBarco
  },
  {
    id: 3,
    nome: "Peace",
    descricao: "In every grain of sand, I find the peace and freedom of the sea.",
    img: imgPessoa
  },
  {
    id: 4,
    nome:"Silence",
    descricao:"In the silence of nature, I find the voice of my soul.",
    img: imgPessoas
  },
  {
    id: 5,
    nome:"Beach",
    descricao:"Don't have words to describe this beach",
    img: imgPraia
  }
];

export default function PaginaInicial() {

  return (
    <div className="paginaInicial">
      {pictures.map((post) => (
        <Publicacao
          key={post.id}
          titulo={post.nome}
          descricao={post.descricao}
          img={post.img}
        />
      ))}
    </div>
  );
}
