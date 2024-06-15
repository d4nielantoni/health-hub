import { FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import "./Registro.css";


export default function Registro () {
    const[username, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados:" + username + "-" + password);
    }
  return (
    <div className="containerc container mt-5">
        <form onSubmit={handleSubmit}>
            <h1>Fazer registro</h1>
            <div className="input-field">
                <input 
                type="email" 
                placeholder='E-mail' 
                required
                onChange={(e) => setUserName(e.target.value)}
                />
                <FaUser className="icon" />
            </div>
           <div className="input-field"> 
                <input 
                type="password" 
                placeholder='Senha'
                required 
                onChange={(e) => setPassword(e.target.value)}
                />
                <FaLock className="icon" />
           </div>

            <div className="recall-forget">
                <label htmlFor="">
                    <input type="checkbox" />
                    Lembre de mim?
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

           <button>ENTRAR</button>

           <div className="signup-link">
            <p>
                Não tem uma conta? <a href="#">Registrar</a>
            </p>
           </div>
        </form>
    </div>
  )
}