import './vregister.css';
import logo from './logo.png';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link do react-router-dom

function Gotoregister() {
    window.location.href = '/Register';
}

function Gotoback() {
    window.location.href = '/Homeinicio';
}

function Gotoctrl() {
    window.location.href = '/Entradasaida';
}





const Vregister = () => {
    return (
        <div>
            <div className="top-line">
                <button className="top-button" onClick={Gotoregister}>Fazer Novo Cadastro</button>
                <button className="top-button" onClick={Gotoback}>Voltar</button>
                <button className="top-button" onClick={Gotoctrl}>Controle de Entrada e Saída</button>    
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
                    <p>Pagina de Ver cadastros</p>
                </div>
            </div>
        </div>
    );
};

export default Vregister;