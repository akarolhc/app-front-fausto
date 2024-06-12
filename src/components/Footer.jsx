import React from "react";
import "../styles/Footer.css";
import { Facebook, Instagram, Phone, Twitter } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Footer() {
    const [user, setUser] = useState(localStorage.getItem('user'));

    useEffect(() => {
        const handleStorageChange = () => {
            setUser(localStorage.getItem('user'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    return (
        user ? <footer>
            <div className="footer-bottom">
                <div className="licensa">
                    <p></p>
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
                    <p>Desenvolvido por Ana Karolina Holmes Coelho</p>
                </div>
            </div>
        </footer> : null
    );
}
