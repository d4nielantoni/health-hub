import {PiNumberSquareOne, PiNumberSquareTwoLight, PiNumberSquareThree} from "react-icons/pi"
import { GiConfirmed } from "react-icons/gi";
import "./Steps.css";
import React from 'react'

const Steps = ({currentStep}) => {
  return (
    <div className="steps">
      <div className="step active">
        <PiNumberSquareOne/>
        <p>Passo 1</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <PiNumberSquareTwoLight/>
        <p>Passo 2</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <PiNumberSquareThree/>
        <p>Passo 3</p>
      </div>
      <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
        <GiConfirmed/>
        <p>Envio</p>
      </div>
    </div>
  )
}

export default Steps
