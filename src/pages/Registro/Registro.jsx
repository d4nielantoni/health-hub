import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import {FiSend} from 'react-icons/fi'
import { useState } from "react";
import "./Registro.css";
import UserForm1 from "../../components/registro/UserForm1";
import UserForm2 from "../../components/registro/UserForm2";
/*import UserForm3 from "../../components/registro/UserForm3";*/
import Thanks from "../../components/registro/Thanks";
import Steps from "../../components/registro/Steps";

import { useForm } from "../../hooks/useForm";


export default function Registro () {
    const formComponents = [<UserForm1 />, <UserForm2 />, <UserForm3 />, <Thanks />];
    const{currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)
    const[username, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados:" + username + "-" + password);
    }
  return (
    <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
                {!isFirstStep && (<button type="button" onClick={() => changeStep(currentStep - 1)}>
                    <GrFormPrevious/>
                    <span>Voltar</span>
                </button>
                )}
                {!isLastStep ? (
                    <button type="submit">
                        <span>Avançar</span>
                        <GrFormNext />
                    </button> 
                ) : (
                    <button type="button">
                        <span>Registrar</span>
                        <FiSend />
                    </button> 
                )}
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