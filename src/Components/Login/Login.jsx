import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import './login.css';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(username, password);

        console.log("Envio");
    };


  return (
    // Div que define a box de login, classe de container para deixa-los encima um do outro com biblioteca do react-icons, para o icone de login e senha
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>ATSoluctions</h1>
            <div className="input-campo">
            <input type="email" placeholder="Coloque o seu Email" 
            onChange={(e) => setUsername(e.target.value)} />
            <FaUser className="icon" />
            </div>
            <div className="input-campo">
            <input type="password" placeholder="Coloque sua Senha"
            onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="">Esqueceu a senha</a>
            </div>

            <button>Entrar</button>
            <div className="signup-link">
            <p>Criar Conta <a href="#">Registrar</a>{" "}</p>
            </div>
        </form>
    </div>
  )
}

export default Login
