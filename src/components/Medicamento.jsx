import "../styles/Medicamento.css";

export default function Medicamento(props) {
    return (
        <div className="medicamento">
            <div className="conteudo-medicamento" key={props.nome}>

                <div className="img"><img src={props.img} alt={props.nome} /></div>
                <div className="container-descricao">
                    <h1>{props.nome}</h1>
                    <div className="descricao"><h2>Descrição</h2> <p>{props.descricao}</p></div>
                    <div className="composicao"><h5>Composição</h5><p>{props.composicao}</p></div>
                    <div className="conteudo-descricao">
                        <ul>
                            <li>Conteúdo: {props.conteudo}</li>
                            <li>Uso: {props.uso}</li>
                            <li>Medicamento: {props.generico ? "Genérico" : "Original"}</li>
                            <li>Fabricante: {props.fabricante}</li>
                            <li>Forma farmacêutica: {props.forma}</li>
                        </ul>
                        <h3>ESTE MEDICAMENTO É {props.tipoMedicamento}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}