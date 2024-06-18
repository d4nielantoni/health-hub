import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Registro.css";
import supabase from "../../utils/client.js";
import { useNavigate } from 'react-router-dom';

const Registro = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function signUpNewUser() {
        await supabase.auth.signUp({
            email: username,
            password: password,
          })
        localStorage.setItem("user", username.split("@")[0]);
        navigate("/")
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        signUpNewUser()
    }
    return (
        <div className="form-container mt-5">
            <form onSubmit={handleSubmit}>
                <h1 style={{textAlign:"center"}}>Registro</h1>
                <div className="form-control" style={{boxShadow:"none", border:"none"}}>
                    <div style={{display:"flex", gap:5,alignItems:"center"}}>
                        <label htmlFor="email" className="labelInput">Nome completo</label>
                        <FaUser className="icon" />
                    </div>

                    <input type="text" name="name" required className="inputUser" onChange={(e) => setUserName(e.target.value)} />

                </div>
                <div className="form-control" style={{boxShadow:"none", border:"none"}}>
                    <div style={{display:"flex", gap:5,alignItems:"center"}}>
                        <label htmlFor="email" className="labelInput">Email</label>
                        <FaUser className="icon" />
                    </div>

                    <input type="email" name="email" required className="inputUser" onChange={(e) => setUserName(e.target.value)} />

                </div>
                <div className="form-control" style={{boxShadow:"none", border:"none"}}>
                    <div style={{display:"flex", gap:5,alignItems:"center"}}>
                        <label htmlFor="password" className="labelInput">Senha</label>
                        <FaLock className="icon" />
                    </div>
                    <input type="password" name="password" required className="inputUser" onChange={(e) => setPassword(e.target.value)} />

                </div>

                <button>Criar</button>

                <div className="signup-link">
                    <p>
                        Não tem uma conta? <a href="/login">login</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Registro
