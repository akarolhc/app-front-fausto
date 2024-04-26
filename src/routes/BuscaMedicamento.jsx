import { Margin, Padding } from "@mui/icons-material";
import "../styles/BuscaMedicamento.css";

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
        <div className="medicamentos-right"></div>
      </div>
    </div>
  );
}
