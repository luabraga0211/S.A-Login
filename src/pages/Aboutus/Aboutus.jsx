import './aboutus.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

function Gotohome() {
    window.location.href = '/';
}


const Aboutus = () => {
    return (
        <div>
            <div className="top-line">
                <button className="top-button" onClick={Gotohome}>Início</button>
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
                    <p className="project-title">Projeto S.A.</p>
                    <br />
                    <p className="project-description">
                        Somos um grupo de estudantes responsáveis pela produção de um projeto para uma empresa que estava com dificuldades no controle de entrada e saída da sua empresa.
                        <br />
                        <br />Nosso grupo é formado por: Luã Braga, Vitor Soligo, Lucas Rodrigues, Felipe Pontes e Victor Coelho <br />

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;