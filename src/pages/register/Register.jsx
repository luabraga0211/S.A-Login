import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import './register.css';

function Gotologinadm() {
    window.location.href = '/LoginAdm';
}

function Gotohome() {
    window.location.href = '/Home'
}

const Register = () => {

    const [id, setId] = useState("");
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
            <h2>Registro de Usuario</h2>
            
            <div className="input-campo">
            <input type="id" placeholder="Coloque o id para seu usuario"
            onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="input-campo">
            <input type="email" placeholder="Coloque o Email do usuario" 
            onChange={(e) => setUsername(e.target.value)} />
            <FaUser className="icon" />
            </div>
            
            <div className="input-campo">
            <input type="password" placeholder="Coloque a Senha para esse usuario utilizar"
            onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
            </div>

            <button onClick={Gotohome}>Criar login de usuário</button>
            <div className="signup-link">
            <p>Voltar a tela inicial sem criar usuario? <span onClick={Gotohome}>Voltar</span></p>
            </div>
        </form>
    </div>
  )
}

export default Register;
