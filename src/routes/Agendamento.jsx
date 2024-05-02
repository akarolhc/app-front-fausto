import "../styles/Contato.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default function PaginaInicial(){
    return(
        <div>
            <div className="Nav"></div>
            <div className='Titulo'>
                <h2>Agendamento de Remédios</h2>
            </div>
            <div className="Conteudo">
                <div className="Esquerda">
                <Dropdown as={ButtonGroup}>
                    <Button variant="secondary">Selecione o Remédio para Agendar</Button>

                    <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Paracetamol 750mg</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className="Informacoes">
                    <div className="Info-esquerda">
                        <div className="Conteudo-info">
                            <h6>Horário</h6>
                            <input className="Button" type="time"></input>
                        </div>
                        <div className="Conteudo-info">
                            <h6>Data</h6>
                            <input className="Button" type="date"></input>
                        </div>
                        <div className="Conteudo-info">
                            <h6>Anotações</h6>
                            <input className="Button-anotacoes" type="text"></input>
                        </div>
                    </div>
                    <div className="Info-direita">
                        <div className="Conteudo-infoD">
                            <h6>Quantas vezes a notificação será enviada?</h6>
                            <Dropdown as={ButtonGroup}>
                                <Button variant="secondary">1</Button>

                                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="Conteudo-info">
                            <h6>Adiar</h6>
                            <Dropdown as={ButtonGroup}>
                                <Button variant="secondary">Sim</Button>

                                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Sim</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Não</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="Box-Agendar">
                        <Button className="Button-submit" variant="secondary" size="lg">Agendar</Button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="Direita">
                    <div className="Image"></div>
                </div>
            </div>
            <div className="Nav"></div>
        </div>
    )
}