import React, { useState } from 'react';
import ReactDOM from 'react-dom';



export default function EditarPerfil() {
  // Estados para os campos do formulário
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados do formulário
    console.log(`Dados do formulário:
      Nome: ${firstName} ${lastName}
      E-mail: ${email}
      Biografia: ${bio}
    `);
    // Por exemplo, enviar os dados para um servidor, ou processá-los localmente
  };

  return (
    <div className="container">
      <h2>Formulário de Edição de Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Nome Completo:</label>
          <input
            
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Biografia:</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Salvar Alterações</button>
        </div>
      </form>
    </div>
  );
};

