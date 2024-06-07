import React from "react";
import "../styles/Footer.css";
import { Email, Facebook, Instagram, Phone, Twitter } from "@mui/icons-material";

export default function Footer() {
    return (
        <footer>
            <div className="infos">
                <div className="info">
                    <p>MedTec - Tecnologia em Saúde</p>
                    <p>Rua dos Bobos, nº 0</p>
                    <p>CEP: 00000-000</p>
                </div>
                <div className="info">
                    <p><Phone /> (00) 0000-0000</p>
                    <p><Email /> medtec@gmail.com</p>
                </div>
                <div className="info">
                    <p>Horário de atendimento:</p>
                    <p>Segunda a sexta: 08h às 18h</p>
                    <p>Sábado: 08h às 12h</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="licensa">
                    <p>MedTec © 2021</p>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <Facebook className="facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <Instagram className="instagram" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <Twitter className="twitter" />
                    </a>
                </div>
                <div className="creditos">
                    <p>Desenvolvido por Richard Fernandes</p>
                </div>
            </div>
        </footer>
    );
}
