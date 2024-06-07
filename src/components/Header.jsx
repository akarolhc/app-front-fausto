import React from "react";
import "../styles/Header.css";
import pills from "../assets/pills.png";
import medtec from "../assets/MedTec.png";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {
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
                    <Dropdown>
                        <Dropdown.Toggle className="dropdown-button" id="dropdown-basic">
                            <a>Medicamentos</a>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/Medicamentos">Buscar</Dropdown.Item>
                            <Dropdown.Item href="/CadastroMedicamentos">Cadastrar</Dropdown.Item>   
                        </Dropdown.Menu>
                    </Dropdown>
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