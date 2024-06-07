import React from 'react';
import '../styles/Form.css';

export default function Form() {

    return (
        <div className="cadastrarMedicamento">
            <h1>Cadastro de Medicamentos</h1>
            <form>
                <label>Nome:</label>
                <input type="text" required />
                <label>Dosagem:</label>
                <input type="text" required />
                <label>Imagem:</label>
                <input type="file" required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );

}
