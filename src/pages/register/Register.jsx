import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import './register.css';


function Gotohome() {
    window.location.href = '/'
}

const Register = () => {

    const [id, setId] = useState("");
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
            <input type="id" placeholder="Coloque a sua Matrícula" 
            onChange={(e) => setId(e.target.value)} />
            <FaUser className="icon" />
            </div>
            
            <div className="input-campo">
            <input type="password" placeholder="Coloque a Senha "
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
