import { FaUser, FaLock} from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {
    const[username, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados:" + username + "-" + password);
    }
  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="form-control">
                <input type="email" required className="inputUser" onChange={(e) => setUserName(e.target.value)}/>
                <label for="email" className="labelInput">Email</label>
                <FaUser className="icon" />
            </div>
           <div className="form-control"> 
                <input type="password" required className="inputUser" onChange={(e) => setPassword(e.target.value)}/>
                <label for="password" className="labelInput">Senha</label>
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
                Não tem uma conta? <a href="/registro">Registrar</a>
            </p>
           </div>
        </form>
    </div>
  )
}

export default Login
