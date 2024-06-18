import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
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
    <Container>
      <div className="container">
        <h2>Perfil</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label style={{marginRight:10}} htmlFor="firstName">Nome Completo:</label>
            <input
              style={{borderRadius:8, borderColor:'pink'}}
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label style={{marginRight:83}} htmlFor="email">E-mail:</label>
            <input
              style={{borderRadius:8, borderColor:'pink'}}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label style={{marginRight:65}} htmlFor="bio">Biografia:</label>
            <textarea
              style={{borderRadius:8, borderColor:'pink', width:350}}
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows="6"
            ></textarea>
          </div>
          <div className="form-group">
            <button style={{borderRadius:8, backgroundColor:'pink'}} type="submit">Salvar Alterações</button>
          </div>
        </form>
      </div>
      </Container>
  );
};

