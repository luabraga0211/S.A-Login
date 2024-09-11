import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import './register.css';


function Gotohome() {
    window.location.href = '/Homeinicio'
}

function Gototela() {
    window.location.href = '/Usuariocriado'
}

const Register = () => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(id, password);

        console.log("Envio");
    };


  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>ATSoluctions</h1>
            <h2>Cadastro de Usuario</h2>
            
            <div className="input-campo">
            <input type="id" placeholder="Coloque uma Matrícula" 
            onChange={(e) => setId(e.target.value)} />
            <FaUser className="icon" />
            </div>
            
            <div className="input-campo">
            <input type="password" placeholder="Coloque uma Senha "
            onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
            </div>

            <button onClick={Gototela}>Cadastrar Funcionario</button>
            <div className="signup-link">
            <p>Voltar a tela inicial sem criar usuario? <span onClick={Gotohome}>Voltar</span></p>
            </div>
        </form>
    </div>
  )
}

export default Register;
