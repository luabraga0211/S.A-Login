import './aboutus.css';
import logo from './logo.png';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link do react-router-dom

function Gotoregister() {
    window.location.href = '/Register';
}

function Gotohome() {
    window.location.href = '/Home';
}

function Gotoview() {
    window.location.href = '/ViewUsers';
}

const Aboutus = () => {
    return (
        <div>
            <div className="top-line">
                <button className="top-button" onClick={Gotoregister}>Registrar Usuários</button>
                <button className="top-button" onClick={Gotohome}>Início</button>
                <button className="top-button" onClick={Gotoview}>Visualizar Usuários</button>
            </div>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo da Empresa" />
                    </Link>
                </div>
                <div className="content">
                    <h1>ATSoluctions</h1>
                    <p>Projeto S.A.</p>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;