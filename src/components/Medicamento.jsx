export default function Medicamento(props) {
    return (
        <div className="conteudo" key={props.nome}>
            <div className="img">{props.img}</div>
            <div className="container-descricao">
                <div className="descricao">{props.descricao}</div>
                <div className="composicao">{props.composicao}</div>
                <div className="conteudo">{props.conteudo}</div>
                <div className="uso">{props.uso}</div>
            </div>
        </div>
    )
}