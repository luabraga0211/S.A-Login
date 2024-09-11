import React from 'react';
import './usuariocriado.css';

function Gotohome() {
    window.location.href = '/Homeinicio';
}

const Usuariocriado = () => {
    return (
        <div className="container">
            <h1>ATSoluctions</h1>
            <br />
            <h2>Usuário foi Cadastrado com sucesso</h2>
            <br />
            <button onClick={Gotohome}>Ir para a Página Inicial</button>
        </div>
    );
};

export default Usuariocriado;