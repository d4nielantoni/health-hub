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
    <div className="containerc container mt-9">
        <form onSubmit={handleSubmit}>
            <h1>Fazer registro</h1>
            <div className="input-field">
                <input type="text" name="nome" id="nome" className="inputUser" required/>
                <label for="nome" className="labelInput">Nome Completo</label>
            </div>
           <div className="input-field"> 
                <input type="text" onChange={(e) => setUserName(e.target.value)} className="inputUser" required/>
                <label for="email" className="labelInput">Email</label>
           </div>
           <div className="input-field"> 
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="inputUser" required/>
                <label for="password" className="labelInput">Senha</label>
           </div>
           <div className="input-field"> 
                <input type="tel" name="telefone" id="telefone" className="inputUser" required/>
                <label for="telefone" className="labelInput">Telefone</label>
           </div>
           
           <p>Sexo:</p>
            <input type="radio" id="feminino" name="genero" value="feminino" required/>
            <label for="feminino">Feminino</label>
            <br></br>

            <input type="radio" id="masculino" name="genero" value="masculino" required/>
            <label for="masculino">Masculino</label>
            <br></br>

            <input type="radio" id="outro" name="genero" value="outro" required/>
            <label for="outro">Outro</label>
            <br></br>
            
            <label for="data_nascimento"><b>Data de Nascimento:</b></label>
            <input type="date" name="data_nascimento" id="data_nascimento" required/>

           
           <div className="input-field"> 
                <input type="text" name="cidade" id="cidade" className="inputUser" required/>
                <label for="cidade" className="labelInput">Cidade</label>
           </div>
           
           <div className="input-field"> 
                <input type="text" name="estado" id="estado" className="inputUser" required/>
                <label for="estado" className="labelInput">Estado</label>
           </div>
           
           <div className="input-field"> 
                <input type="text" name="endereco" id="endereco" className="inputUser" required/>
                <label for="endereco" className="labelInput">Endereço</label>
           </div>
            
            <div className="recall-forget">
                <label htmlFor="">
                    <input type="checkbox" />
                    Lembre de mim?
                </label>
            </div>
           <button>Registrar</button>
        </form>
    </div>
  )
}