import React, { useState } from "react";
import './sessaoAoVivo.css'
export default function Agendamentos () {
   
    const [agendado, setAgendado] = useState({
        botao1: false,
        botao2: false,
        botao3: false
    });
    
    function toggleAgendamento(botao){
        setAgendado(prevState => ({
            ...prevState,
            [botao]: !prevState[botao]
        }));
    }
    return (
        <main id="main">
            <h1 id="texto1">Experimente marcar uma consulta 100% online com algum de nossos renomados e confiáveis profisionais.</h1>
            <section id="sessao">
                <h5 id="texto2">Neurologista</h5><h6 id="texto2">Dr. Victor Frankenstein</h6>
                <p>Disponível 20/06/2024 às 14:45</p>
                <button id="botao"onClick={()=>toggleAgendamento('botao1')}>{agendado.botao1 ? 'Cancelar Consulta' : 'Agendar Consulta Online'}</button>
            </section>
            <section id="sessao">
                <h5 id="texto2">Psicólogo Terapeuta</h5><h6 id="texto2">Dr. Abraham Van Helsing</h6>
                <p>Disponível 20/06/2024 às 16:30</p>
                <button id="botao" onClick={()=>toggleAgendamento('botao2')}>{agendado.botao2 ? 'Cancelar Consulta' : 'Agendar Consulta Online'}</button>
            </section>
            <section id="sessao">
                <h5 id="texto2">Médico Psiquiatra</h5><h6 id="texto2">Dr. Jekyll</h6>
                <p>Disponível 21/06/2024 às 08:15</p>
                <button id="botao" onClick={()=>toggleAgendamento('botao3')}>{agendado.botao3 ? 'Cancelar Consulta' : 'Agendar Consulta Online'}</button>
            </section>
            <div id="cartao">
                <h3>Participe de sua Próxima Sessão Agendada </h3>   
                <a id="botão" href="https://meet.google.com/kmj-wyrh-dek" target="_blank"><button style={{background:"#d81f1f", color:"white"}}> Clique Aqui </button></a>
            </div>
        </main>
    );
    
}