import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import './login.css';

function GotoLoginAdm() {
    window.location.href = '/LoginAdm';
}

function Gotohome() {
    window.location.href = '/Homeinicio'
}

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(username, password);

        console.log("Envio");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>ATSoluctions</h1>
                <h2>Funcionario</h2> 
                <div className="input-campo">
                    <input type="email" placeholder="Coloque a sua Matrícula" onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-campo">
                    <input type="password" placeholder="Coloque sua Senha" onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="">Esqueceu a senha</a>
                </div>

                <button onClick={Gotohome}>Entrar</button>
                <div className="signup-link">
                    <p>Tem conta de Administrador? <span onClick={GotoLoginAdm}>Entrar</span></p>
                </div>
            </form>
        </div>
    );
}

export default Login;