import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import './loginadm.css';

function GotoLogin() {
    window.location.href = '/';
}

function Gotohome() {
    window.location.href = '/Home'
}

const LoginAdm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(username, password);

        console.log("Envio");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>ATSoluctions</h1>
                <h2>ADM</h2>
                <div className="input-campo">
                    <input type="id" placeholder="Coloque o seu ID" onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="input-campo">
                    <input type="email" placeholder="Coloque o seu Email" onChange={(e) => setUsername(e.target.value)} />
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
                    <p>Quer logar como Visitante? <span onClick={GotoLogin}>Login</span></p>
                </div>
            </form>
        </div>
    );
}

export default LoginAdm;