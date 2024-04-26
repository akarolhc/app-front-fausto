import React from "react";
import "../styles/CardMedicamento.css";
export default function CardMedicamento(props) {
  return (
    <div className={props.className}>
      <img src={props.imagem} alt={props.nome} />
      <h2>{props.nome}</h2>
      <p>{props.dosagem}</p>
    </div>
  );
}
