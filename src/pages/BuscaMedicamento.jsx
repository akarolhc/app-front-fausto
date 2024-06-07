import { Margin, Padding } from "@mui/icons-material";
import "../styles/BuscaMedicamento.css";
import paracetamol from "../assets/paracetamol.png";
import heart from "../assets/heart.png";

export default function BuscaMedicamento() {
  return (
    <div className="BuscaMedicamento">
      <div className="left">
        <div className="filtros-left">
          <div className="filtros-filtros">
            <p className="titulo">Filtros</p>
            <a className="titulo">Marca</a>
            <div className="filtros-marca">
              <div className="checkbox">
              <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a style={{PaddingLeft: "15px"}}>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
              </div>
            </div>
            <p></p>
            <a className="titulo">Tipo</a>
            <div className="filtros-marca">
              <div className="checkbox">
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
                <div className="marcas">
                    <input type="checkbox" className="check"></input>
                    <a>Catarinense</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="medicamentos-right">
          <div className="medicamentos-zona">
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
                <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
            <div className="medicamentos-card">
              <div className="medicamento-favorito">
              <img src={heart} alt="heart"  width={40} height={40}/>
              </div>
              <div className="medicamentos-foto">
                <img src={paracetamol} alt="paracetamol"  width={185}/>
              </div>
              <div className="medicamentos-conteudo">
                <div className="medicamentos-texto">
                  <a>Paracetamol</a><br/>
                  <a>750mg</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
