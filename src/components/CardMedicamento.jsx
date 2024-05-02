import React from "react";
import "../styles/CardMedicamento.css";
import { Link } from "react-router-dom";
export default function CardMedicamento(props) {
  return (
    <div className={props.className}>
      <img src={props.imagem} alt={props.nome} />
      <h2><Link to={props.href}>{props.nome}</Link></h2>
      <p>{props.dosagem}</p>
    </div>
  );
}
