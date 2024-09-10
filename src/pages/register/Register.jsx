import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import './register.css';

function Gotologin() {
    window.location.href = '/';
}

function Gotohome() {
    window.location.href = '/Home'
}

const Register = () => {

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

            <div className="input-campo">
            <input type="password" placeholder="Coloque sua Senha novamente"
            onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
            </div>

            <button onClick={Gotohome}>Criar Conta</button>
            <div className="signup-link">
            <p>Já tem uma conta? <span onClick={Gotologin}>Logar</span></p>
            </div>
        </form>
    </div>
  )
}

export default Register;
