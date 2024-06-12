import '../styles/Sobre.css'
import fotoAutor from '../assets/img/foto.jpg'
export default function sobre() {
    return (
        <div className="about">
            <div className="about-title">
                <h1>Sobre</h1>
                <div className="img-about">
                    <img src={fotoAutor}></img>
                </div>
            </div>
            <div className="about-content">
                <p>Este é um projeto de um site de fotos, onde você pode postar fotos e ver fotos de outras pessoas.</p>
                <p>Este projeto foi feito para a disciplina de frontend do professor Fausto.</p>
                <p>Tendo como iniciativa uma ideia pessoal e desenvolvido apenas o frontend, e em um futuro próximo o backend.</p>
                <p>Desenvolvido por: Ana </p>
            </div>
        </div>
    )
}