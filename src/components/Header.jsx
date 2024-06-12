import React from "react";
import "../styles/Header.css";
import { CameraAlt } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Header() {

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

    const sair = () => {
        localStorage.removeItem('user');
        window.location.href = '/';
    }

    return (
        user ?
            <nav>
                <ul>
                    <li>
                        <a href="/" className="camera-icon"><CameraAlt /></a>
                    </li>
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/About">Sobre</a>
                    </li>
                </ul>
                <div className="buttons-nav">
                    <div className="signup">
                        <a className="user" onClick={sair}>{user}</a>
                    </div>
                </div>
            </nav> : null
    );
}