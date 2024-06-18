import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

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
      Nome: ${firstName}
      E-mail: ${email}
      Biografia: ${bio}
    `);
    // Por exemplo, enviar os dados para um servidor, ou processá-los localmente
  };

  return (
    <Container className="mt-2">
      <h2>Editar Perfil</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>Nome Completo:</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Digite seu nome completo"
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
        </Form.Group>
        <Form.Group controlId="bio">
          <Form.Label>Biografia:</Form.Label>
          <Form.Control
            as="textarea"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={6}
            placeholder="Digite sua biografia"
          />
        </Form.Group>
        <Button variant="primary" className='mt-2' type="submit">
          Salvar Alterações
        </Button>
      </Form>
    </Container>
  );
}
