import './homeinicio.css';
import logo from './logo.png';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link do react-router-dom

function Gotoregister() {
    window.location.href = '/Register';
}

function Gotoview() {
    window.location.href = '/Vregister';
}

function Gotoctrl() {
    window.location.href = '/Entradasaida';
}





const Homeinicio = () => {
    return (
        <div>
            <div className="top-line">
                <button className="top-button" onClick={Gotoregister}>Fazer Novo Cadastro</button>
                <button className="top-button" onClick={Gotoview}>Ver Cadastros</button>
                <button className="top-button" onClick={Gotoctrl}>Controle Entrada e Saida</button>    
            </div>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo da Empresa" />
                    </Link>
                </div>
                <div className="content">
                    <h1>ATSoluctions</h1> 
                    <br />
                    <p>Registro de entrada e saída de Usuarios</p>
                </div>
            </div>
        </div>
    );
};

export default Homeinicio;