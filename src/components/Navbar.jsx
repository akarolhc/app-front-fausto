import React from "react";
import "../styles/Navbar.css";
import pills from "../assets/pills.png";
import medtec from "../assets/MedTec.png";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <img src={pills} alt="Pills" style={{ width: "50px" }} />
                    <img src={medtec} alt="MedTec" style={{ width: "100px" }} />
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/medicamentos">Medicamentos</a>
                </li>
                <li>
                    <a href="/agendamento">Agendamento</a>
                </li>
            </ul>
            <div className="buttons-nav">
                <div className="pesquisa">
                    <input type="text" placeholder="Buscar" />
                    <button><SearchIcon /></button>
                </div>
                <div className="login">
                    <a href="/login">Login</a>
                </div>
            </div>
        </nav>
    );
}