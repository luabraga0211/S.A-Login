import './home.css';
import logo from './logo.png';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link do react-router-dom

function Gotoregister() {
    window.location.href = '/Register';
}

function Gotoabout() {
    window.location.href = '/Aboutus';
}

function Gotoview() {
    window.location.href = '/ViewUsers';
}

function Gotologin() {
    window.location.href = '/Login';
}





const Home = () => {
    return (
        <div>
            <div className="top-line">
                <button className="top-button" onClick={Gotoregister}>Registrar Usuários</button>
                <button className="top-button" onClick={Gotoabout}>Sobre Nós</button>
                <button className="top-button" onClick={Gotoview}>Visualizar Usuários</button>
                <button className="top-button" onClick={Gotologin}>Fazer Login</button>
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

export default Home;