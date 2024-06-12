import '../styles/Publicacao.css'
export default function Publicacao(props) {
    return (
        <div className="publicacao">
            <div className="titulo">
                <span className='titulo-span'>{props.titulo}</span>
                <span className='descricao-span'>{props.descricao}</span>
            </div>
            <div className="img"><img src={props.img} /></div>
        </div>
    )
}